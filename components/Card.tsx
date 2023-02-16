import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import styles from '@/styles/modules/Card.module.css'

import CardInterface from '@/interfaces/CardInterface'

import { Dictionary } from '@/interfaces/Yandex.Dictionary/Dictionary'

import { RootState } from '@/store'
import { setResults, setVisibility } from '@/store/reducers/resultsSlice'

import get from '@/lib/get'
import parse from '@/lib/parse'

import Button from '@/components/Button'
import Definition from '@/components/Definition'
import Results from '@/components/Results'

interface Props extends CardInterface {}

const Card: React.FC<Props> = ({ words }) => {
    const [index, setIndex] = useState<number>(0)
    const [translation, setTranslation] = useState<string>('')
    const [values, setValues] = useState<Array<string>>([])
    const [dictionary, setDictionary] = useState<Dictionary>({})
    const [isHidden, setIsHidden] = useState<boolean>(true)

    const [params, setParams] = useState({
        key: 'dict.1.1.20230131T081417Z.94c5cde3fa74b95d.dbca5f45af9b01f9de8942c926115434de42c38f',
        lang: 'en-ru',
        text: words[index],
        ui: 'ru'
    })

    const results = useSelector((state: RootState) => state.results.values)

    const dispatch = useDispatch()

    const init = words.map((word) => ({
        word,
        attempts: 0,
        correct: 0,
        wrong: 0
    }))

    useEffect(() => {
        if (results.length === 0) {
            dispatch(setResults(init))
        }
    }, [results])

    useEffect(() => {
        setParams({ ...params, text: words[index] })
    }, [index])

    useEffect(() => {
        const entries = Object.entries(params)

        const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?${entries
            .map((pair) => pair.join('='))
            .join('&')}`

        const fetchData = async () => {
            const data = await get(url)

            setDictionary(data)
        }

        fetchData()
    }, [params])

    useEffect(() => {
        if (dictionary.def) {
            setValues(parse(dictionary))
        }
    }, [dictionary])

    const check = (hasValue: boolean) => {
        if (translation.length > 0) {
            const output = JSON.parse(JSON.stringify(results))

            output[index].attempts += 1

            if (hasValue) {
                output[index].correct += 1
            } else {
                output[index].wrong += 1
            }

            dispatch(setResults(output))
        }
    }

    const handle = () => {
        const hasValue = values.includes(translation)

        setTranslation('')

        hasValue && setIndex(index === words.length - 1 ? 0 : index + 1)

        check(hasValue)
    }

    const finish = () => {
        if (index > 0) {
            dispatch(setVisibility())
        }
    }

    return (
        <div
            className={styles.card}
            onKeyUp={(event) => event.key === 'Enter' && handle()}
        >
            <div className={styles.part}>
                <div className={styles.top}>
                    <p className={styles.index}>
                        {index + 1} / {words.length}
                    </p>
                    <p className={styles.word}>{words[index]}</p>
                    <div className={styles.item}>
                        <input
                            type="text"
                            id="translation"
                            className={styles.input}
                            autoFocus={true}
                            value={translation}
                            onChange={(event) =>
                                setTranslation(event.target.value)
                            }
                        />
                        <label htmlFor="translation" className={styles.label}>
                            Введите перевод.
                        </label>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button
                        content="Показать перевод"
                        onClick={() => setIsHidden(!isHidden)}
                    />
                    <Button content="Завершить" onClick={() => finish()} />
                    <Button content="Далее" onClick={() => handle()} />
                </div>
            </div>
            <div
                className={`${styles.dictionary} ${isHidden && styles.hidden}`}
            >
                {dictionary.def?.map((definition: any, index: number) => {
                    return (
                        <Definition
                            key={index} // temp
                            text={definition.text}
                            pos={definition.pos}
                            ts={definition.ts}
                            tr={definition.tr}
                        />
                    )
                })}
            </div>
            <Results init={init} />
        </div>
    )
}

export default Card

import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import styles from '@/styles/modules/Card.module.css'

import CardInterface from '@/interfaces/CardInterface'
import ResultInterface from '@/interfaces/ResultInterface'

import { Dictionary } from '@/interfaces/Yandex.Dictionary/Dictionary'

import { RootState } from '@/store'
import { setResults, setVisibility } from '@/store/reducers/resultsSlice'
import { setIsScrollable } from '@/store/reducers/wrapperSlice'

import { useGetDataQuery } from '@/store/api/authApi'

import get from '@/lib/others/get'
import parse from '@/lib/others/parse'
import save from '@/lib/results/save'

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
    const [isWrong, setIsWrong] = useState<boolean>(false)

    const [params, setParams] = useState({
        key: 'dict.1.1.20230131T081417Z.94c5cde3fa74b95d.dbca5f45af9b01f9de8942c926115434de42c38f',
        lang: 'en-ru',
        text: words[index],
        ui: 'ru'
    })

    const { data, error, isLoading, refetch } = useGetDataQuery({
        refetchOnMountOrArgChange: true
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
            const output: Array<ResultInterface> = JSON.parse(
                JSON.stringify(results)
            )

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
        const hasValue = values
            .map((value) => value.toLowerCase())
            .includes(translation.trim().toLowerCase())

        setTranslation('')

        if (hasValue) {
            setIndex(index === words.length - 1 ? 0 : index + 1)
            setIsWrong(false)
        } else {
            setIsWrong(true)
        }

        check(hasValue)
    }

    const finish = () => {
        if (index > 0) {
            dispatch(setVisibility())
            // dispatch(setIsScrollable())

            if (data) {
                const fetchData = async () => {
                    const result = await save(
                        data.email,
                        results.filter((result) => result.attempts > 0)
                    )
                }

                fetchData()
            }
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
                            className={`${styles.input} ${
                                isWrong && styles.wrong
                            }`}
                            autoFocus={true}
                            value={translation}
                            maxLength={30}
                            onChange={(event) => {
                                setTranslation(event.target.value)
                                setIsWrong(false)
                            }}
                        />
                        <label htmlFor="translation" className={styles.label}>
                            ?????????????? ??????????????.
                        </label>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button
                        content="???????????????? ??????????????"
                        onClick={() => setIsHidden(!isHidden)}
                    />
                    <Button content="??????????????????" onClick={() => finish()} />
                    <Button content="??????????" onClick={() => handle()} />
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

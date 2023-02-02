import React, { useEffect, useState } from 'react'

import styles from '@/styles/modules/Card.module.css'

import CardInterface from '@/interfaces/CardInterface'

import get from '@/lib/get'
import parse from '@/lib/parse'

import Button from '@/components/Button'
import Definition from '@/components/Definition'
interface Props extends CardInterface {}

const Card: React.FC<Props> = ({ word }) => {
    const [values, setValues] = useState<any[]>([])
    const [dictionary, setDictionary] = useState([])

    const params = {
        key: 'dict.1.1.20230131T081417Z.94c5cde3fa74b95d.dbca5f45af9b01f9de8942c926115434de42c38f',
        lang: 'en-ru',
        text: word,
        ui: 'ru'
    }

    const entries = Object.entries(params)

    const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?${entries
        .map((pair) => pair.join('='))
        .join('&')}`

    useEffect(() => {
        const fetchData = async () => {
            const data = await get(url)

            setDictionary(data)
        }

        fetchData()

        // setValues(parse(dictionary))
    }, [])

    return (
        <div className={styles.card}>
            <div className={styles.part}>
                <div className={styles.top}>
                    <p className={styles.word}>{word}</p>
                    <div className={styles.item}>
                        <input
                            type="text"
                            id="translation"
                            className={styles.input}
                            autoFocus={true}
                        />
                        <label htmlFor="translation" className={styles.label}>
                            Введите перевод.
                        </label>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button content="Показать перевод" />
                    <Button content="Далее" />
                </div>
            </div>
            <div className={styles.dictionary}>
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
        </div>
    )
}

export default Card

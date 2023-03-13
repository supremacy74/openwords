import React, { ChangeEvent, useEffect, useState } from 'react'

import styles from '../styles/modules/Stats.module.css'

import StatsInterface from '@/interfaces/StatsInterface'
import ResultInterface from '@/interfaces/ResultInterface'

import Container from '@/layouts/Container'

import Stat from '@/components/Stat'

interface Props extends StatsInterface {}

const Stats: React.FC<StatsInterface> = ({ init }) => {
    const [order, setOrder] = useState<Array<boolean>>([true, true, true, true])
    const [values, setValues] = useState<Array<ResultInterface>>([])
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        setValues(init)
    }, [init])

    useEffect(() => {
        if (value.length > 0) {
            setValues(
                init.filter((result) =>
                    result.word.startsWith(value.trim().toLowerCase())
                )
            )
        } else {
            setValues(init)
        }
    }, [value])

    const sort = (prop: string, isAscending: boolean, index: number) => {
        const sortedArr = values.sort((a: any, b: any) => {
            if (a[prop] < b[prop]) {
                return isAscending ? -1 : 1
            }

            if (a[prop] > b[prop]) {
                return isAscending ? 1 : -1
            }

            return 0
        })

        const temp = order

        temp[index] = !temp[index]

        setOrder([...temp])

        setValues(sortedArr)
    }

    const count = (prop: string) => {
        return values.reduce((accumulator, value: any) => {
            return accumulator + value[prop]
        }, 0)
    }

    return (
        <div className={styles.stats}>
            <Container>
                <div className={styles.inner}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Поиск"
                        value={value}
                        maxLength={30}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <div className={styles.column}>
                        <div
                            className={styles.item}
                            onClick={() => sort('word', order[0], 0)}
                        >
                            Слово | {values.length}
                        </div>
                        <div
                            className={styles.item}
                            onClick={() => sort('attempts', order[1], 1)}
                        >
                            Попытки | {count('attempts')}
                        </div>
                        <div
                            className={styles.item}
                            onClick={() => sort('correct', order[2], 2)}
                        >
                            Верно | {count('correct')}
                        </div>
                        <div
                            className={styles.item}
                            onClick={() => sort('wrong', order[3], 3)}
                        >
                            Неверно | {count('wrong')}
                        </div>
                    </div>
                    <ul className={styles.results}>
                        {values.map((result) => {
                            return (
                                <Stat
                                    word={result.word}
                                    attempts={result.attempts}
                                    correct={result.correct}
                                    wrong={result.wrong}
                                />
                            )
                        })}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Stats

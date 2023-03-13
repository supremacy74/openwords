import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles/modules/Results.module.css'

import ResultsInterface from '@/interfaces/ResultsInterface'
import ResultInterface from '@/interfaces/ResultInterface'

import { RootState } from '@/store'
import { setResults, setVisibility } from '@/store/reducers/resultsSlice'
import { setIsScrollable } from '@/store/reducers/wrapperSlice'

import save from '@/lib/results/save'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

import { useGetDataQuery } from '@/store/api/authApi'

interface Props extends ResultsInterface {}

const Results: React.FC<Props> = ({ init }) => {
    const dispatch = useDispatch()

    const isHidden = useSelector((state: RootState) => state.results.isHidden)
    const results = useSelector((state: RootState) => state.results.values)

    const [values, setValues] = useState<Array<ResultInterface>>([])
    const [value, setValue] = useState('')

    useEffect(() => {
        setValues(results)
    }, [results])

    useEffect(() => {
        search(value)
    }, [value])

    const close = () => {
        dispatch(setVisibility())
        dispatch(setResults(init))
        // dispatch(setIsScrollable())
    }

    const search = (word: string) => {
        setValues(
            results.filter((result) =>
                result.word.toLowerCase().startsWith(word.trim().toLowerCase())
            )
        )
    }

    const filter = (result: ResultInterface) => result.attempts > 0

    return (
        <>
            <button
                className={`${styles.close} ${isHidden && styles.hidden}`}
                onClick={() => close()}
            >
                <CloseIcon />
            </button>
            <div className={`${styles.overlay} ${isHidden && styles.hidden}`}>
                <div className={styles.container}>
                    <label className={styles.label}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Поиск по словам."
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </label>
                    <div className={styles.results}>
                        <div className={styles.values}>
                            <div>Слово</div>
                            <div>Кол. во попыток</div>
                            <div>Кол. во правильных</div>
                            <div>Кол. во неправильных</div>
                        </div>
                        {values.filter(filter).length > 0 ? (
                            values.filter(filter).map((result) => {
                                return (
                                    <div
                                        key={result.word}
                                        className={styles.values}
                                    >
                                        <div>{result.word}</div>
                                        <div>{result.attempts}</div>
                                        <div>{result.correct}</div>
                                        <div>{result.wrong}</div>
                                    </div>
                                )
                            })
                        ) : (
                            <p className={styles.empty}>Ничего не найдено :)</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Results

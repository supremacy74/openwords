import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import ResultsInterface from '@/interfaces/ResultsInterface'
import ResultInterface from '@/interfaces/ResultInterface'

import { RootState } from '@/store'
import { setResults, setVisibility } from '@/store/reducers/resultsSlice'

import styles from '../styles/modules/Results.module.css'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

interface Props extends ResultsInterface {}

const Results: React.FC<Props> = ({ init }) => {
    const dispatch = useDispatch()

    const isHidden = useSelector((state: RootState) => state.results.isHidden)
    const results = useSelector((state: RootState) => state.results.values)

    const [values, setValues] = useState<Array<ResultInterface>>([])
    const [value, setValue] = useState('')

    useEffect(() => {
        setValues([...results])
    }, [results])

    useEffect(() => {
        search(value)
    }, [value])

    const handle = () => {
        dispatch(setVisibility())
        dispatch(setResults(init))
    }

    const search = (word: string) => {
        setValues(
            results.filter((result) =>
                result.word.toLowerCase().startsWith(word.toLowerCase())
            )
        )
    }

    return (
        <>
            <button
                className={`${styles.close} ${isHidden && styles.hidden}`}
                onClick={() => handle()}
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
                        {values.map((result) => {
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
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Results

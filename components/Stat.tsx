import React from 'react'

import styles from '../styles/modules/Stat.module.css'

import ResultInterface from '../interfaces/ResultInterface'

interface Props extends ResultInterface {}

const Stat: React.FC<Props> = ({ word, attempts, correct, wrong }) => {
    return (
        <li className={styles.result}>
            <div className={styles.item}>{word}</div>
            <div className={styles.item}>{attempts}</div>
            <div className={styles.item}>{correct}</div>
            <div className={styles.item}>{wrong}</div>
        </li>
    )
}

export default Stat

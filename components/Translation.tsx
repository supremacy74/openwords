import React from 'react'

import styles from '@/styles/modules/Translation.module.css'

import TranslationInterface from '@/interfaces/TranslationInterface'

interface Props extends TranslationInterface {}

const Translation: React.FC<Props> = ({ text, syn, mean }) => {
    return (
        <div className={styles.translation}>
            <div className={`${styles.values} ${styles.top}`}>
                <span>{text}</span>
                {syn?.map((synonym: any, index: number) => {
                    return <span key={index}>{synonym.text}</span>
                })}
            </div>
            <div className={`${styles.values} ${styles.bottom}`}>
                {mean &&
                    mean.map((meaning: any, index: number) => {
                        return <span key={index}>{meaning.text}</span>
                    })}
            </div>
        </div>
    )
}

export default Translation

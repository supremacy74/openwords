import React from 'react'

import Image from 'next/image'

import styles from '@/styles/modules/Wave.module.css'

import WaveInterface from '@/interfaces/WaveInterface'
import DictionaryCardInterface from '@/interfaces/DictionaryCardInterface'

import { useGetDictionaryQuery } from '@/store/api/dictionariesApi'

const Wave = () => {
    const numbers = [0, 1, 2, 3]

    return (
        <div className={styles.wrapper}>
            <svg viewBox="0 0 1920 140">
                <path
                    d="M1920 0l-107 28c-106 29-320 85-533 93-213 7-427-36-640-50s-427 0-533 7L0 85v171h1920z"
                    className={styles.bit}
                ></path>
                <path
                    d="M0 129l64-26c64-27 192-81 320-75 128 5 256 69 384 64 128-6 256-80 384-91s256 43 384 70c128 26 256 26 320 26h64v96H0z"
                    className={styles.wave}
                ></path>
            </svg>
            <div className={styles.block}>
                <h3 className={styles.heading}>Попробуйте сейчас:</h3>
                <ul className={styles.list}>
                    {numbers.map((id: number) => {
                        return <DictionaryCard id={id} />
                    })}
                </ul>
            </div>
            <svg viewBox="0 0 1920 79" className={styles.bottom}>
                <path
                    d="M0 59l64-11c64-11 192-34 320-43s256-5 384 4 256 23 384 34 256 21 384 14 256-30 320-41l64-11v94H0z"
                    className={styles.wave}
                ></path>
            </svg>
        </div>
    )
}

interface Props extends DictionaryCardInterface {}

const DictionaryCard: React.FC<Props> = ({ id }) => {
    const { data: dictionary, isFetching } = useGetDictionaryQuery(String(id))

    if (isFetching) {
        if (id === 0) {
            return <div>Загрузка</div>
        } else {
            return <div></div>
        }
    }

    return (
        <li>
            <a
                className={styles.link}
                href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/dictionaries/${dictionary.id}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className={styles.image}
                    src={dictionary.src}
                    alt="Dictionary image."
                />
                <p className={styles.title}>{dictionary.name}</p>
            </a>
        </li>
    )
}

export default Wave

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/modules/Dictionaries.module.css'

import get from '@/lib/get'
import groupIntoChunks from '@/lib/groupIntoChunks'

import DictionaryInterface from '@/interfaces/DictionaryInterface'
import DictionaryCardInterface from '@/interfaces/DictionaryCardInterface'

import {
    useGetDictionariesQuery,
    useGetDictionaryQuery
} from '@/store/api/dictionariesApi'

import Container from '@/layouts/Container'
import Wrapper from '@/layouts/Wrapper'

import Heading from '@/components/Heading'

const Dictionaries = () => {
    const [isUpdating, setIsUpdating] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(0)
    const [chunks, setChunks] = useState<Array<Array<number>>>([])

    const {
        data: dictionaries = [],
        isFetching,
        refetch
    } = useGetDictionariesQuery({
        refetchOnMountOrArgChange: true,
        refetchInterval: 60000 // обновляем каждые 60 секунд
    })

    useEffect(() => {
        setChunks(groupIntoChunks(dictionaries))
    }, [dictionaries])

    const handleUpdateClick = () => {
        setIsUpdating(true)
        refetch().finally(() => setIsUpdating(false))
    }

    if (isFetching) {
        return <div>Loading</div>
    }

    return (
        <Wrapper>
            <Container>
                <div className={styles.inner}>
                    <Heading priority={1}>Словари</Heading>
                    <div className={styles.dictionaries}>
                        {dictionaries.length > 0 &&
                            chunks.map((chunk: Array<number>) => {
                                return (
                                    <div
                                        key={chunk[0]}
                                        className={styles.container}
                                    >
                                        {chunk.map((id: number) => {
                                            return (
                                                <div
                                                    key={id}
                                                    className={styles.item}
                                                >
                                                    <DictionaryCard id={id} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}

interface Props extends DictionaryCardInterface {}

const DictionaryCard: React.FC<Props> = ({ id }) => {
    const { data: dictionary, isFetching } = useGetDictionaryQuery(String(id))

    if (isFetching) {
        return <div>Loading</div>
    }

    return (
        <div className={styles.card}>
            <Image
                className={styles.image}
                src={dictionary.src}
                alt="Dictionary image."
            />
            <div className={styles.part}>
                <h2 className={styles.name}>{dictionary.name}</h2>
                <a
                    href={`http://localhost:3000/dictionaries/${dictionary.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Тренироваться
                </a>
            </div>
        </div>
    )
}

export default Dictionaries

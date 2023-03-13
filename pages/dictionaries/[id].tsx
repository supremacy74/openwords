import React, { useEffect } from 'react'

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

import styles from '@/styles/modules/Dictionary.module.css'

import DictionaryInterface from '@/interfaces/DictionaryInterface'
import DictionaryCardInterface from '@/interfaces/DictionaryCardInterface'

import get from '@/lib/others/get'
import shuffleArray from '@/lib/others/shuffleArray'

import { RootState } from '@/store'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'
import Card from '@/components/Card'

const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/dictionaries`

const Dictionary: React.FC<DictionaryInterface> = ({ name, words }) => {
    return (
        <Wrapper>
            <Container>
                <div className={styles.inner}>
                    <Heading>{name}</Heading>
                    <Card words={words} />
                </div>
            </Container>
        </Wrapper>
    )
}

interface Path {
    params: { dictionaryId: string }
}

interface Paths {
    paths: Array<Path>
    fallback: boolean
}

export const getStaticPaths = async (): Promise<Paths> => {
    const dictionaries = await get(url)

    const paths = dictionaries.map((id: number) => ({
        params: { id: String(id) }
    }))

    return {
        paths,
        fallback: false
    }
}

interface Props {
    props: DictionaryInterface
}

export const getStaticProps = async ({
    params
}: {
    params: { id: string }
}): Promise<Props> => {
    const dictionary = await get(`${url}/${params.id}`)

    const words = shuffleArray(dictionary.words)

    return {
        props: {
            ...dictionary,
            words
        }
    }
}

export default Dictionary

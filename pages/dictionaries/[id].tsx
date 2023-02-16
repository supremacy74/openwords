import React, { useEffect } from 'react'

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

import styles from '@/styles/modules/Dictionary.module.css'

import DictionaryInterface from '@/interfaces/DictionaryInterface'
import DemoInterface from '@/interfaces/DemoInterface'

import get from '@/lib/get'

import { RootState } from '@/store'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'
import Card from '@/components/Card'

const url = `http://localhost:3000/api/dictionaries`

const Dictionary: React.FC<DictionaryInterface> = ({ name, words }) => {
    return (
        <Wrapper>
            <Container>
                <div className={styles.inner}>
                    <Heading priority={1}>{name}</Heading>
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
    const data = await get(url)
    const dictionaries = data.dictionaries
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
    const data = await get(`${url}/${params.id}`)
    const dictionary = data.dictionary

    return {
        props: {
            ...dictionary
        }
    }
}

export default Dictionary

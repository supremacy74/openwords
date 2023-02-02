import React, { useEffect } from 'react'

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

import styles from '@/styles/modules/Dictionary.module.css'

import DictionaryInterface from '@/interfaces/DictionaryInterface'

import get from '@/lib/get'

import { RootState } from '@/store'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'
import Card from '@/components/Card'

const url = 'http://localhost:3000/api/dictionaries'

const Name: React.FC<DictionaryInterface> = ({ name, words }) => {
    const dispatch = useDispatch()

    const index = useSelector((state: RootState) => state.dictionary.index)

    return (
        <Wrapper>
            <Container>
                <div className={styles.inner}>
                    <Heading priority={1}>{name}</Heading>
                    <Card word={words[0]} />
                </div>
            </Container>
        </Wrapper>
    )
}

interface Path {
    params: { dictionaryId: string }
}

interface Paths {
    paths: Path[]
    fallback: boolean
}

export const getStaticPaths = async (): Promise<Paths> => {
    const data = await get(url)
    const dictionaries = data.dictionaries
    const paths = dictionaries.map((dictionary: DictionaryInterface) => {
        return {
            params: {
                name: dictionary.name
            }
        }
    })

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
    params: { name: string }
}): Promise<Props> => {
    const data = await get(`${url}/${params.name}`)
    const dictionary = data.dictionary

    return {
        props: {
            ...dictionary
        }
    }
}

export default Name

import React, { useEffect } from 'react'
import axios from 'axios'

import DictionaryInterface from '@/interfaces/DictionaryInterface'

const url = 'http://localhost:3000/api/dictionaries'

const get = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (e) {
        console.error(e)
        return []
    }
}

const DictionaryId: React.FC<DictionaryInterface> = ({ id, name, words }) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
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

export default DictionaryId

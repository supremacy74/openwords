import { NextApiRequest, NextApiResponse } from 'next'

import DictionaryInterface from '@/interfaces/DictionaryInterface'

import get from '@/lib/get'

import src from '@/images/some.jpg'

type Data = DictionaryInterface

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const dictionary = {
        id: 3,
        src,
        name: '300-400 (3000)',
        words: []
    }

    const data = await get(`http://localhost:3000/api/dictionaries/all`)

    dictionary.words = data.dictionary.words.slice(300, 400)

    res.status(200).json(dictionary)
}
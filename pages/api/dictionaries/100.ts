import { NextApiRequest, NextApiResponse } from 'next'

import DictionaryInterface from '@/interfaces/DictionaryInterface'

import get from '@/lib/get'

type Data = {
    dictionary: DictionaryInterface
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const dictionary = {
        id: 0,
        name: '0-100 (3000)',
        words: []
    }

    const data = await get('http://localhost:3000/api/dictionaries/all')

    dictionary.words = data.dictionary.words.slice(0, 100)

    res.status(200).json({ dictionary })
}

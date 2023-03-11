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
        id: 0,
        src,
        name: '0-100 (3000)',
        words: []
    }

    const data = await get(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/dictionaries/all`
    )

    dictionary.words = data.dictionary.words.slice(0, 100)

    res.status(200).json(dictionary)
}

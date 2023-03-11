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
        id: 1,
        src,
        name: '100-200 (3000)',
        words: []
    }

    const data = await get(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/dictionaries/all`
    )

    dictionary.words = data.dictionary.words.slice(100, 200)

    res.status(200).json(dictionary)
}

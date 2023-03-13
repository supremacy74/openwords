import { NextApiRequest, NextApiResponse } from 'next'

import DictionaryInterface from '@/interfaces/DictionaryInterface'

import get from '@/lib/others/get'

import src from '@/images/some.jpg'

type Data = DictionaryInterface

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const dictionary = {
        id: 4,
        src,
        name: '400-500 (3000)',
        words: []
    }

    const data = await get(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/dictionaries/all`
    )

    dictionary.words = data.dictionary.words.slice(400, 500)

    res.status(200).json(dictionary)
}

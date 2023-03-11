import type { NextApiRequest, NextApiResponse } from 'next'

import DictionaryCardInterface from '@/interfaces/DictionaryCardInterface'

import src from '@/images/some.jpg'

type Data = Array<number>

const dictionaries = [0, 1, 2, 3, 4, 30]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(dictionaries)
}

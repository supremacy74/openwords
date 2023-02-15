import type { NextApiRequest, NextApiResponse } from 'next'

import DictionaryInterface from '@/interfaces/DictionaryInterface'

type Data = {
    dictionaries: any
}

const dictionaries = [
    {
        id: 0,
        name: 'main'
    },
    {
        id: 1,
        name: 'some'
    },
    {
        id: 2,
        name: '100'
    },
    {
        id: 3,
        name: '500'
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ dictionaries })
}

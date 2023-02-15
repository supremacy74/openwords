import type { NextApiRequest, NextApiResponse } from 'next'

import DictionaryInterface from '@/interfaces/DictionaryInterface'

type Data = {
    dictionary: DictionaryInterface
}

const dictionary = {
    id: 0,
    name: 'main',
    words: []
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ dictionary })
}

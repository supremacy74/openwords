import type { NextApiRequest, NextApiResponse } from 'next'
import DictionaryInterface from '@/interfaces/DictionaryInterface'

type Data = {
    dictionary: DictionaryInterface
}

const dictionary = {
    id: 0,
    name: 'some',
    words: [
        'main',
        'basic',
        'feature',
        'body',
        'simple',
        'brother',
        'rather',
        'small',
        'fuck',
        'nigga'
    ]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ dictionary })
}

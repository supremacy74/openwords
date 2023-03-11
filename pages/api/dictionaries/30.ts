import type { NextApiRequest, NextApiResponse } from 'next'

import DictionaryInterface from '@/interfaces/DictionaryInterface'

import src from '@/images/some.jpg'

type Data = DictionaryInterface

const dictionary = {
    id: 30,
    src,
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
        'go out'
    ]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(dictionary)
}

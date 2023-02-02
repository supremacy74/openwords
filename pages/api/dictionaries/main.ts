// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    dictionary: string[]
}

const dictionary = [
    'some',
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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ dictionary })
}

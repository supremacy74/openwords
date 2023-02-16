import type { NextApiRequest, NextApiResponse } from 'next'

import DemoInterface from '@/interfaces/DemoInterface'

import src from '@/images/some.jpg'

type Data = {
    dictionaries: Array<number>
}

const dictionaries = [0, 4, 30]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ dictionaries })
}

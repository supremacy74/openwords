import axios from 'axios'

import ResultInterface from '@/interfaces/ResultInterface'

export default async (email: string, results: Array<ResultInterface>) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/results`,
            {
                email,
                results
            }
        )

        return response.data
    } catch (e) {
        console.log(e)
        return null
    }
}

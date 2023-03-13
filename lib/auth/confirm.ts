import axios from 'axios'

export default async (email: string, code: string) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/confirm`,
            {
                email,
                code
            }
        )

        return response.data
    } catch (e) {
        console.log(e)
        return null
    }
}

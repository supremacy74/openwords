import axios from 'axios'

export default async (email: string, code: string) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/users/confirm',
            {
                email,
                code
            }
        )

        return response.data
    } catch (error) {
        console.error(error)
        return null
    }
}

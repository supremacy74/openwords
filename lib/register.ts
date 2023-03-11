import axios from 'axios'

export default async (
    name: string,
    surname: string,
    email: string,
    password: string
) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/auth/register',
            {
                name: name,
                surname: surname,
                email: email,
                password: password
            }
        )

        return response.data
    } catch (error) {
        console.error(error)
        return null
    }
}

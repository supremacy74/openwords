import axios from 'axios'

export default async (
    name: string,
    surname: string,
    email: string,
    password: string
) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register`,
            {
                name: name,
                surname: surname,
                email: email,
                password: password
            }
        )

        return response.data
    } catch (e) {
        console.log(e)
        return null
    }
}

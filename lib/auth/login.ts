import axios from 'axios'

export default async (email: string, password: string) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
            {
                email,
                password
            }
        )

        const token = response.data.accessToken

        localStorage.setItem('accessToken', token)

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        return response.data
    } catch (e) {
        console.log(e)
        return null
    }
}

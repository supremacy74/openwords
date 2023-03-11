import axios from 'axios'

export default async (email: string, password: string) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/auth/login',
            {
                email: email,
                password: password
            }
        )

        const token = response.data.accessToken

        localStorage.setItem('accessToken', token)

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        return response.data
    } catch (error) {
        console.error(error)
        return null
    }
}

import { createSlice } from '@reduxjs/toolkit'

interface LoginState {
    email: string
    password: string
    isWrong: boolean
}

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        isWrong: false
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsWrong: (state, action) => {
            state.isWrong = action.payload
        }
    }
})

export const { setEmail, setPassword, setIsWrong } = loginSlice.actions

export default loginSlice

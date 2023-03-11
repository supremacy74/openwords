import { createSlice } from '@reduxjs/toolkit'

interface LoginState {
    name: string
    surname: string
    email: string
    password: string
}

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        name: '',
        surname: '',
        email: '',
        password: ''
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setSurname: (state, action) => {
            state.surname = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { setName, setSurname, setEmail, setPassword } = loginSlice.actions

export default loginSlice

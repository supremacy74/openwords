import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        items: [],
        base: [
            {
                id: 0,
                label: 'Главная',
                link: '/'
            }
        ],
        authorized: [
            {
                id: 1,
                label: 'Профиль',
                link: '/profile'
            }
        ],
        unauthorized: [
            {
                id: 2,
                label: 'Вход',
                link: '/login',
                isButton: true
            },
            {
                id: 3,
                label: 'Регистрация',
                link: '/register',
                isButton: true
            }
        ]
    },
    reducers: {}
})

export default navSlice

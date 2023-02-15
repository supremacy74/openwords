import { createSlice } from '@reduxjs/toolkit'

interface NavItem {
    id: number
    label: string
    link: string
}

interface NavState {
    items: Array<NavItem>
    base: Array<NavItem>
    authorized: Array<NavItem>
    unauthorized: Array<NavItem>
}

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        items: [],
        base: [
            {
                id: 0,
                label: 'Главная',
                link: '/'
            },
            {
                id: 1,
                label: 'Словари',
                link: '/dictionaries'
            }
        ],
        authorized: [
            {
                id: 2,
                label: 'Профиль',
                link: '/profile'
            }
        ],
        unauthorized: [
            {
                id: 3,
                label: 'Вход',
                link: '/login'
            },
            {
                id: 4,
                label: 'Регистрация',
                link: '/register'
            }
        ]
    },
    reducers: {}
})

export default navSlice

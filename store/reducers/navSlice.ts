import { createSlice } from '@reduxjs/toolkit'

interface NavItem {
    id: number
    label: string
    link: string
}

interface NavState {
    isVisible: boolean
    items: Array<NavItem>
    base: Array<NavItem>
    authorized: Array<NavItem>
    unauthorized: Array<NavItem>
}

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        isVisible: false,
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
            },
            {
                id: 3,
                label: 'Выйти',
                link: '/login'
            }
        ],
        unauthorized: [
            {
                id: 2,
                label: 'Вход',
                link: '/login'
            },
            {
                id: 3,
                label: 'Регистрация',
                link: '/register'
            }
        ]
    },
    reducers: {
        setIsVisible: (state) => {
            state.isVisible = !state.isVisible
        }
    }
})

export const { setIsVisible } = navSlice.actions

export default navSlice

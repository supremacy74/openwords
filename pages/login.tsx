import React from 'react'

import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux'

import styles from '../styles/modules/Login.module.css'

import Wrapper from '@/layouts/Wrapper'

import Heading from '@/components/Heading'
import Form from '@/components/Form'
import Container from '@/layouts/Container'

import login from '@/lib/login'

import { RootState } from '@/store'
import { setIsWrong } from '@/store/reducers/loginSlice'

const formItems = [
    {
        id: 0,
        title: 'Email',
        type: 'email',
        hint: 'Enter your email.',
        isFocused: true
    },
    {
        id: 1,
        title: 'Пароль',
        type: 'password',
        hint: 'Enter the password. The password must contain from 5 to 20 characters.'
    }
]

const Login = () => {
    const email = useSelector((state: RootState) => state.login.email)
    const password = useSelector((state: RootState) => state.login.password)

    const router = useRouter()

    const dispatch = useDispatch()

    const onClick = async (event: MouseEvent) => {
        event.preventDefault()

        const data = await login(email, password)

        if (data) {
            router.push('/profile')
        } else {
            dispatch(setIsWrong(true))
        }
    }

    return (
        <Wrapper>
            <Container isWrapper={true}>
                <Heading priority={1}>Авторизация</Heading>
                <Form items={formItems} buttonText="Войти" onClick={onClick} />
            </Container>
        </Wrapper>
    )
}

export default Login

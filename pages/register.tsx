import React from 'react'

import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles/modules/Register.module.css'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'
import Form from '@/components/Form'
import Pop from '@/components/Pop'

import register from '@/lib/register'
import login from '@/lib/login'

import { RootState } from '@/store'
import { setIsWrong } from '@/store/reducers/loginSlice'
import { setIsHidden } from '@/store/reducers/popSlice'

const formItems = [
    {
        id: 0,
        title: 'Имя',
        type: 'text',
        isFocused: true,
        hint: 'Enter your first name.'
    },
    {
        id: 1,
        title: 'Фамилия',
        type: 'text',
        hint: 'Enter your last name.'
    },
    {
        id: 2,
        title: 'Email',
        type: 'email',
        hint: 'Enter your email.'
    },
    {
        id: 3,
        title: 'Пароль',
        type: 'password',
        hint: 'Enter the password. The password must contain from 5 to 20 characters.'
    }
]

const Register = () => {
    const name = useSelector((state: RootState) => state.register.name)
    const surname = useSelector((state: RootState) => state.register.surname)
    const email = useSelector((state: RootState) => state.register.email)
    const password = useSelector((state: RootState) => state.register.password)

    const dispatch = useDispatch()

    const router = useRouter()
    const onClick = async (event: MouseEvent) => {
        event.preventDefault()

        const data = await register(name, surname, email, password)

        if (data) {
            dispatch(setIsHidden())
        } else {
            dispatch(setIsWrong(true))
        }
    }

    return (
        <Wrapper>
            <Container isWrapper={true}>
                <Heading priority={1}>Регистрация</Heading>
                <Form
                    items={formItems}
                    buttonText="Создать аккаунт"
                    onClick={onClick}
                />
                <Pop />
            </Container>
        </Wrapper>
    )
}

export default Register

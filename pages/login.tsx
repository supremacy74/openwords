import React from 'react'
import styles from '../styles/modules/Login.module.css'
import Wrapper from '@/layouts/Wrapper'
import Heading from '@/components/Heading'
import Form from '@/components/Form'
import Container from '@/layouts/Container'

const formItems = [
    {
        id: 0,
        title: 'Email',
        type: 'email',
        hint: 'Enter your email.'
    },
    {
        id: 1,
        title: 'Password',
        type: 'password',
        hint: 'Enter the password. The password must contain from 5 to 20 characters.'
    }
]

const Login = () => {
    return (
        <Wrapper>
            <Container isWrapper={true}>
                <Heading priority={1}>Авторизация</Heading>
                <Form items={formItems} buttonText="Войти" />
            </Container>
        </Wrapper>
    )
}

export default Login

import React from 'react'
import styles from '../styles/modules/Register.module.css'
import Wrapper from '@/layouts/Wrapper'
import Heading from '@/components/Heading'
import Form from '@/components/Form'
import Container from '@/layouts/Container'

const formItems = [
    {
        id: 0,
        title: 'First name',
        type: 'text',
        isFocused: true,
        hint: 'Enter your first name.'
    },
    {
        id: 1,
        title: 'Last name',
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
        title: 'Password',
        type: 'password',
        hint: 'Enter the password. The password must contain from 5 to 20 characters.'
    }
]

const Register = () => {
    return (
        <Wrapper>
            <Container isWrapper={true}>
                <Heading priority={1}>Регистрация</Heading>
                <Form items={formItems} buttonText="Создать аккаунт" />
            </Container>
        </Wrapper>
    )
}

export default Register

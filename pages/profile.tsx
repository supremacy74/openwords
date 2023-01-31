import Wrapper from '@/layouts/Wrapper'
import React from 'react'

import styles from '../styles/modules/Profile.module.css'
import Heading from '@/components/Heading'
import Container from '@/layouts/Container'

const Profile = () => {
    return (
        <Wrapper>
            <Container>
                <Heading priority={1}>John Doe</Heading>
                <p>@username</p>
            </Container>
        </Wrapper>
    )
}

export default Profile

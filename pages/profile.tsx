import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import styles from '../styles/modules/Profile.module.css'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'

import { useGetDataQuery } from '@/store/api/authApi'

const Profile = () => {
    const { data, error, isLoading, refetch } = useGetDataQuery({
        refetchOnMountOrArgChange: true
    })

    const router = useRouter()

    useEffect(() => {
        refetch()

        if (!localStorage.getItem('accessToken')) {
            router.push('/login')
        }
    }, [])

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <Wrapper>
            <Container>
                <Heading priority={1}>
                    {data?.name} {data?.surname}
                </Heading>
                <p>
                    @{data?.name.toLowerCase()}
                    {data?.id}
                </p>
            </Container>
        </Wrapper>
    )
}

export default Profile

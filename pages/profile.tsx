import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useDispatch } from 'react-redux'

import styles from '../styles/modules/Profile.module.css'

import ResultInterface from '@/interfaces/ResultInterface'

import get from '@/lib/others/get'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import { useGetDataQuery } from '@/store/api/authApi'
import { setVisibility } from '@/store/reducers/resultsSlice'

import Heading from '@/components/Heading'
import Results from '@/components/Results'
import Button from '@/components/Button'
import Stats from '@/components/Stats'

const Profile = () => {
    const { data, error, isLoading, refetch } = useGetDataQuery({
        refetchOnMountOrArgChange: true
    })

    const dispatch = useDispatch()

    const [results, setResults] = useState<Array<ResultInterface>>([])

    const router = useRouter()

    useEffect(() => {
        refetch()

        if (!localStorage.getItem('accessToken')) {
            router.push('/login')
        }
    }, [])

    useEffect(() => {
        if (data) {
            const fetchData = async () => {
                const results = await get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/results/byEmail?email=${data.email}`
                )

                setResults(results)
            }

            fetchData()
        }
    }, [data])

    if (isLoading) {
        return <div>Загрузка</div>
    }

    return (
        <Wrapper>
            <Container>
                <Heading>
                    {data?.name} {data?.surname}
                </Heading>
            </Container>
            <Stats init={results} />
        </Wrapper>
    )
}

export default Profile

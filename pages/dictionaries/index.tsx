import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/modules/Dictionaries.module.css'

import get from '@/lib/get'

import DemoInterface from '@/interfaces/DemoInterface'

import Container from '@/layouts/Container'
import Wrapper from '@/layouts/Wrapper'

import Heading from '@/components/Heading'

const Dictionaries = () => {
    const [id, setId] = useState<Array<DemoInterface>>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await get(`http://localhost:3000/api/dictionaries`)

            setId(data.dictionaries)
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <Wrapper>
            <Container>
                <div className={styles.inner}>
                    <Heading priority={1}>Словари</Heading>
                    <div className={styles.dictionaries}></div>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Dictionaries

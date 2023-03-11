import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/modules/Home.module.css'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'
import Button from '@/components/Button'

export default function Home() {
    console.log(process.env.NEXT_PUBLIC_CLIENT_URL)

    return (
        <Wrapper>
            <Container>
                <div className={styles.intro}>
                    <div className={styles.introContent}>
                        <h1 className={styles.heading}>
                            <span>Изучай слова.</span> <br /> Изучай с нами!
                        </h1>
                        <p className={styles.description}>
                            Быстрее улучшайте свои знания иностранных языков с
                            помощью нашего приложения. Инвестируйте свое время с
                            умом и достигайте своих целей в изучении языков
                            быстрее!
                        </p>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}

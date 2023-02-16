import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/modules/Home.module.css'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <div className={styles.introWrapper}>
                    <div className={styles.intro}>
                        <div className={styles.introContent}>
                            <Heading className={styles.heading} priority={1}>
                                Изучай слова. <br /> Изучай с нами!
                            </Heading>
                            <p>
                                Быстрее улучшайте свои знания иностранных языков
                                с помощью нашего приложения. Инвестируйте свое
                                время с умом и достигайте своих целей в изучении
                                языков быстрее!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}

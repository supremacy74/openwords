import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/modules/Home.module.css'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import { useGetDictionaryQuery } from '@/store/api/dictionariesApi'

import DictionaryCardInterface from '@/interfaces/DictionaryCardInterface'

import Heading from '@/components/Heading'
import Button from '@/components/Button'
import Wave from '@/components/Wave'

export default function Home() {
    return (
        <Wrapper>
            <div className={styles.inner}>
                <Container>
                    <div className={styles.intro}>
                        <div className={styles.introContent}>
                            <h1 className={styles.heading}>
                                <span>Изучай слова.</span> <br /> Изучай с нами!
                            </h1>
                            <p className={styles.description}>
                                Быстрее улучшайте свои знания иностранных языков
                                с помощью нашего приложения. Инвестируйте свое
                                время с умом и достигайте своих целей в изучении
                                языков быстрее!
                            </p>
                        </div>
                    </div>
                </Container>
                <Wave />
            </div>
        </Wrapper>
    )
}

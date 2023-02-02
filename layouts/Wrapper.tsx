import React from 'react'

import styles from '@/styles/modules/Wrapper.module.css'

import ChildrenInterface from '@/interfaces/ChildrenInterface'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props extends ChildrenInterface {}

const Wrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Wrapper

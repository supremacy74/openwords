import React, { useState } from 'react'

import Link from 'next/link'

import { useSelector } from 'react-redux'

import styles from '@/styles/modules/Header.module.css'

import { RootState } from '@/store'

import Container from '@/layouts/Container'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import Nav from '@/components/Nav'

const Header = () => {
    const base = useSelector((state: RootState) => state.nav.base)
    const authorized = useSelector((state: RootState) => state.nav.authorized)
    const unauthorized = useSelector(
        (state: RootState) => state.nav.unauthorized
    )

    const [items, setItems] = useState([
        ...base,
        ...authorized,
        ...unauthorized
    ])

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.top}>
                        <Link href="/">openwords</Link>
                    </div>
                    <Nav items={items} />
                </div>
            </Container>
        </header>
    )
}

export default Header

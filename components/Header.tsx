import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { useSelector } from 'react-redux'

import styles from '@/styles/modules/Header.module.css'

import { RootState } from '@/store'

import NavItemInterface from '@/interfaces/NavItemInterface'

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

    const [items, setItems] = useState<Array<NavItemInterface>>(unauthorized)

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setItems(authorized)
        } else {
            setItems(unauthorized)
        }
    }, [])

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.top}>
                        <Link className={styles.logo} href="/">
                            openwords
                        </Link>
                    </div>
                    <Nav base={base} items={items} />
                </div>
            </Container>
        </header>
    )
}

export default Header

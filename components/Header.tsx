import styles from '../styles/modules/Header.module.css'
import Container from '@/layouts/Container'
import Link from 'next/link'
import Button from '@/components/Button'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import Nav from '@/components/Nav'
import { RootState } from '@/store'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Header = () => {
    const dispatch = useDispatch()

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

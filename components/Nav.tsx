import React, { useState } from 'react'
import styles from '../styles/modules/Nav.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import NavItemInterface from '@/interfaces/NavItemInterface'
import NavItem from '@/components/NavItem'
import NavInterface from '@/interfaces/NavInterface'

const Nav = ({ items }: NavInterface) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <div
                className={`${styles.menuIconWrapper} ${
                    isVisible && styles.menuIconWrapper_color_primary
                }`}
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? <CloseIcon /> : <MenuIcon />}
            </div>
            <nav className={`${styles.nav} ${isVisible && styles.visible}`}>
                <ul className={styles.list}>
                    {items.map((item: NavItemInterface) => {
                        return (
                            <NavItem
                                key={item.id}
                                label={item.label}
                                link={item.link}
                            />
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Nav

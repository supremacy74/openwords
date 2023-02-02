import React, { useState } from 'react'

import styles from '@/styles/modules/Nav.module.css'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import NavItemInterface from '@/interfaces/NavItemInterface'
import NavInterface from '@/interfaces/NavInterface'

import NavItem from '@/components/NavItem'

interface Props extends NavInterface {}

const Nav: React.FC<Props> = ({ items }) => {
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

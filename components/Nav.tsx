import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from '@/styles/modules/Nav.module.css'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import NavItemInterface from '@/interfaces/NavItemInterface'
import NavInterface from '@/interfaces/NavInterface'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import store, { RootState } from '@/store'
import { change } from '@/store/reducers/modeSlice'
import { setIsScrollable } from '@/store/reducers/wrapperSlice'
import { setIsVisible } from '@/store/reducers/navSlice'

import NavItem from '@/components/NavItem'

interface Props extends NavInterface {}

const Nav: React.FC<Props> = ({ base, items }) => {
    const isVisible = useSelector((state: RootState) => state.nav.isVisible)

    const mode = useSelector((state: RootState) => state.mode.value)

    const dispatch = useDispatch()

    useEffect(() => {}, [mode])

    const onClick = () => {
        dispatch(change())

        setTimeout(() => {
            const value = store.getState().mode.value
            localStorage.setItem('mode', value)
            console.log(value, localStorage.getItem('mode'))
        }, 0)
    }

    const handleClick = () => {
        dispatch(setIsVisible())

        dispatch(setIsScrollable())
    }

    return (
        <>
            <div
                className={`${styles.menuIconWrapper} ${styles.iconWrapper} ${
                    isVisible && styles.menuIconWrapper_color_primary
                }`}
                onClick={handleClick}
            >
                {isVisible ? <CloseIcon /> : <MenuIcon />}
            </div>
            <nav className={`${styles.nav} ${isVisible && styles.visible}`}>
                <ul className={styles.list}>
                    {base.map((item: NavItemInterface) => {
                        return (
                            <NavItem
                                key={item.id}
                                label={item.label}
                                link={item.link}
                            />
                        )
                    })}
                </ul>
                <div className={styles.divider}>
                    <div className={styles.desktop}>|</div>
                    <div className={styles.mobile}>
                        <hr />
                    </div>
                </div>
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
                <div className={styles.divider}>
                    <div className={styles.desktop}>|</div>
                    <div className={styles.mobile}>
                        <hr />
                    </div>
                </div>
                <ul className={`${styles.list} ${styles.buttons}`}>
                    <li>
                        <div className={styles.iconWrapper} onClick={onClick}>
                            {mode === 'light' ? (
                                <DarkModeIcon />
                            ) : (
                                <LightModeIcon />
                            )}
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav

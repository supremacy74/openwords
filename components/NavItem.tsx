import React, { useEffect } from 'react'

import Link from 'next/link'

import styles from '@/styles/modules/NavItem.module.css'

import NavItemInterface from '@/interfaces/NavItemInterface'

import Button from '@/components/Button'

interface Props extends NavItemInterface {}

const NavItem: React.FC<Props> = ({ isButton, label, link }) => {
    const action = () => {
        if (label === 'Выйти') {
            localStorage.setItem('accessToken', '')
        }
    }

    return (
        <li className={styles.item}>
            <Link href={link} className={styles.link} onClick={() => action()}>
                {isButton ? <Button content={label} /> : label}
            </Link>
        </li>
    )
}

export default NavItem

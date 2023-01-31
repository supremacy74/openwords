import React from 'react'
import Link from 'next/link'
import styles from '../styles/modules/NavItem.module.css'
import NavItemInterface from '@/interfaces/NavItemInterface'
import Button from '@/components/Button'

const NavItem = ({ isButton, label, link }: NavItemInterface) => {
    return (
        <li className={styles.item}>
            <Link href={link} className={styles.link}>
                {isButton ? <Button content={label} /> : label}
            </Link>
        </li>
    )
}

export default NavItem

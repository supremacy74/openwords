import React from 'react'
import styles from '../styles/modules/Button.module.css'
import ButtonInterface from '@/interfaces/ButtonInterface'

const Button = ({ content, onClick }: ButtonInterface) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button

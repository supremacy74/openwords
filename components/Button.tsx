import React from 'react'

import styles from '@/styles/modules/Button.module.css'

import ButtonInterface from '@/interfaces/ButtonInterface'

interface Props extends ButtonInterface {}

const Button: React.FC<Props> = ({ content, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button

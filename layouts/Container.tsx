import React from 'react'

import styles from '../styles/modules/Container.module.css'
import ContainerInterface from '@/interfaces/ContainerInterface'

const Container = ({ children, isWrapper }: ContainerInterface) => {
    return (
        <div className={`${styles.container} ${isWrapper && styles.isWrapper}`}>
            {children}
        </div>
    )
}

export default Container

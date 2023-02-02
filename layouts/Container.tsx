import React from 'react'

import styles from '@/styles/modules/Container.module.css'

import ContainerInterface from '@/interfaces/ContainerInterface'

interface Props extends ContainerInterface {}

const Container: React.FC<Props> = ({ children, isWrapper }) => {
    return (
        <div className={`${styles.container} ${isWrapper && styles.isWrapper}`}>
            {children}
        </div>
    )
}

export default Container

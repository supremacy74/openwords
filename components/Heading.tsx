import React from 'react'

import styles from '../styles/modules/Heading.module.css'
import HeadingInterface from '@/interfaces/HeadingInterface'

const Heading = ({ priority, children }: HeadingInterface) => {
    const Tag = `h${priority}`

    return <Tag className={`${styles.heading} ${styles[Tag]}`}>{children}</Tag>
}

export default Heading

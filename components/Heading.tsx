import React from 'react'

import styles from '@/styles/modules/Heading.module.css'

import HeadingInterface from '@/interfaces/HeadingInterface'

interface Props extends HeadingInterface {}

const Heading: React.FC<Props> = ({ className, priority, children }) => {
    const Tag = `h${priority}`

    return (
        <Tag className={`${className} ${styles.heading} ${styles[Tag]}`}>
            {children}
        </Tag>
    )
}

export default Heading

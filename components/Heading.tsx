import React from 'react'

import styles from '@/styles/modules/Heading.module.css'

import HeadingInterface from '@/interfaces/HeadingInterface'

interface Props extends HeadingInterface {}

const Heading: React.FC<Props> = ({ priority, children }) => {
    // const Tag = `h${priority}` as keyof JSX.IntrinsicElements

    return <h1 className={`${styles.heading} ${styles['h1']}`}>{children}</h1>
}

export default Heading

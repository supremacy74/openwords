import React from 'react'

import styles from '@/styles/modules/Definition.module.css'

import DefinitionInterface from '@/interfaces/DefinitionInterface'

import Translation from '@/components/Translation'

interface Props extends DefinitionInterface {}

const Definition: React.FC<Props> = ({ text, ts, pos, tr }) => {
    return (
        <div className={styles.definition}>
            <div className={styles.header}>
                <span className={styles.main}>{text}</span>
                <span className={styles.additional}>{ts}</span>
                <span className={styles.additional}>{pos}</span>
            </div>
            <div className={styles.translations}>
                {tr.map((translation: any) => {
                    return (
                        <Translation
                            key={translation.text}
                            text={translation.text}
                            syn={translation.syn}
                            mean={translation.mean}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Definition

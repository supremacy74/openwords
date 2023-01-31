import React, { useState, useRef, MouseEventHandler } from 'react'

import styles from '../styles/modules/FormItem.module.css'
import FormItemInterface from '@/interfaces/FormItemInterface'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const FormItem = ({ title, type, isFocused, hint }: FormItemInterface) => {
    const [isVisible, setIsVisible] = useState(
        type === 'password' ? false : true
    )

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className={styles.item}>
            <input
                ref={inputRef}
                className={styles.input}
                id={title}
                type={isVisible ? 'text' : 'password'}
                autoFocus={isFocused}
                required={true}
            />
            {type === 'password' && (
                <div
                    className={styles.visibilityIconWrapper}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                >
                    {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
            )}
            <label className={styles.label} htmlFor={title}>
                {title}
            </label>
        </div>
    )
}

export default FormItem

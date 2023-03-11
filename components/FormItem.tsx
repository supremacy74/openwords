import React, { useState, useRef, MouseEventHandler } from 'react'

import { useRouter } from 'next/router'

import { useDispatch } from 'react-redux'

import {
    setName,
    setSurname,
    setEmail,
    setPassword
} from '@/store/reducers/registerSlice'

import {
    setEmail as setE,
    setIsWrong,
    setPassword as setP
} from '@/store/reducers/loginSlice'

import styles from '@/styles/modules/FormItem.module.css'

import FormItemInterface from '@/interfaces/FormItemInterface'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

interface Props extends FormItemInterface {}

const FormItem: React.FC<Props> = ({ title, type, isFocused, hint }) => {
    const [isVisible, setIsVisible] = useState(
        type === 'password' ? false : true
    )

    const dispatch = useDispatch()
    const router = useRouter()

    const inputRef = useRef<HTMLInputElement>(null)

    const save = (value: string) => {
        dispatch(setIsWrong(false))

        value = value.trim()

        if (router.pathname === '/login') {
            switch (title) {
                case 'Email':
                    dispatch(setE(value))
                    break
                case 'Пароль':
                    dispatch(setP(value))
                    break
            }
        } else {
            switch (title) {
                case 'Имя':
                    dispatch(setName(value))
                    break
                case 'Фамилия':
                    dispatch(setSurname(value))
                    break
                case 'Email':
                    dispatch(setEmail(value))
                    break
                case 'Пароль':
                    dispatch(setPassword(value))
                    break
            }
        }
    }

    return (
        <div className={styles.item}>
            <input
                ref={inputRef}
                className={styles.input}
                id={title}
                type={isVisible ? 'text' : 'password'}
                autoFocus={isFocused}
                required={true}
                onChange={(event) => save(event.target.value)}
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

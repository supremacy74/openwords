import React from 'react'

import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import styles from '@/styles/modules/Form.module.css'

import { RootState } from '@/store'

import FormItemInterface from '@/interfaces/FormItemInterface'
import FormInterface from '@/interfaces/FormInterface'

import FormItem from '@/components/FormItem'
import Button from '@/components/Button'

interface Props extends FormInterface {}

const Form: React.FC<Props> = ({ items, buttonText, onClick }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const isWrong = useSelector((state: RootState) => state.login.isWrong)

    return (
        <form className={`${styles.form} ${items.length > 3 && styles.many}`}>
            <div className={styles.items}>
                {items.map((item: FormItemInterface, index: number) => {
                    return (
                        <FormItem
                            key={index}
                            title={item.title}
                            type={item.type}
                            isFocused={item.isFocused}
                            hint={item.hint}
                        />
                    )
                })}
            </div>
            <p className={`${styles.wrong} ${isWrong && styles.visible}`}>
                {router.pathname === '/login'
                    ? 'Неверный email или пароль'
                    : 'Пользователь с таким email уже существует'}
            </p>
            <Button content={buttonText} onClick={onClick} />
        </form>
    )
}

export default Form

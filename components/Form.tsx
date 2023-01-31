import React from 'react'
import styles from '../styles/modules/Form.module.css'
import FormItemInterface from '@/interfaces/FormItemInterface'
import FormItem from '@/components/FormItem'
import FormInterface from '@/interfaces/FormInterface'
import Button from '@/components/Button'

const Form = ({ items, buttonText }: FormInterface) => {
    return (
        <form className={`${styles.form} ${items.length > 3 && styles.many}`}>
            <div className={styles.items}>
                {items.map((item: FormItemInterface) => {
                    return (
                        <FormItem
                            title={item.title}
                            type={item.type}
                            isFocused={item.isFocused}
                            hint={item.hint}
                        />
                    )
                })}
            </div>
            <Button content={buttonText} />
        </form>
    )
}

export default Form

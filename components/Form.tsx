import React from 'react'

import styles from '@/styles/modules/Form.module.css'

import FormItemInterface from '@/interfaces/FormItemInterface'
import FormInterface from '@/interfaces/FormInterface'

import FormItem from '@/components/FormItem'
import Button from '@/components/Button'

interface Props extends FormInterface {}

const Form: React.FC<Props> = ({ items, buttonText }) => {
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
            <Button content={buttonText} />
        </form>
    )
}

export default Form

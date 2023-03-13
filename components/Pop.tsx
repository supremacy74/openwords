import React, { ChangeEvent, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles/modules/Pop.module.css'

import CloseIcon from '@mui/icons-material/Close'

import Heading from '@/components/Heading'

import confirm from '@/lib/auth/confirm'
import login from '@/lib/auth/login'

import { RootState } from '@/store'
import { setIsHidden } from '@/store/reducers/popSlice'

const Pop = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const email = useSelector((state: RootState) => state.register.email)
    const password = useSelector((state: RootState) => state.register.password)

    const isHidden = useSelector((state: RootState) => state.pop.isHidden)

    const [value, setValue] = useState('')
    const [isWrong, setIsWrong] = useState(false)

    useEffect(() => {
        if (value.length === 5) {
            const fetchData = async () => {
                const data = await confirm(email, value)

                if (data) {
                    dispatch(setIsHidden())

                    const result = await login(email, password)

                    router.push('/profile')
                } else {
                    setIsWrong(true)
                }
            }

            fetchData()
        }
    }, [value])

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsWrong(false)
        setValue(event.target.value)
    }

    return (
        <div className={`${styles.pop} ${isHidden && styles.hidden}`}>
            <div className={styles.overlay}>
                <div className={styles.window}>
                    <button
                        className={styles.close}
                        onClick={() => dispatch(setIsHidden())}
                    >
                        <CloseIcon />
                    </button>
                    <h3 className={styles.heading}>Подтверждение</h3>
                    <label className={styles.label}>
                        <input
                            className={`${styles.input} ${
                                isWrong && styles.wrong
                            }`}
                            value={value}
                            type="text"
                            maxLength={5}
                            onChange={onChange}
                        />
                        <p
                            className={`${styles.title} ${
                                value.length > 0 && styles.flat
                            }`}
                        >
                            Код подтверждения
                        </p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Pop

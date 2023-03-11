import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import styles from '@/styles/modules/Wrapper.module.css'

import ChildrenInterface from '@/interfaces/ChildrenInterface'

import { RootState } from '@/store'
import { set } from '@/store/reducers/modeSlice'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useGetDataQuery } from '@/store/api/authApi'

const dark = `
    :root {
        --primary: #050505;
        --secondary: #f5f5f5;
        --accent: rgb(200, 250, 255);
        --wrong: rgba(255, 50, 100, .85);
        
        --transparent-secondary-950: rgba(250, 250, 250, .95);        
        --transparent-primary-950: rgba(10, 10, 10, .95);
        
        --transparent-secondary-850: rgba(250, 250, 250, .85);        
        --transparent-primary-850: rgba(10, 10, 10, .85);
        
        --transparent-secondary-750: rgba(250, 250, 250, .75);        
        --transparent-primary-750: rgba(10, 10, 10, .75);
                
        --transparent-primary-500: #05050550;
        --transparent-secondary-500: #f5f5f550;
        --transparent-accent-500: rgba(200, 250, 255, .50);

        --transparent-accent-300: rgba(200, 250, 255, .30);
        
        --transparent-accent-200: rgba(200, 250, 255, .20);

        --transparent-primary-100: #05050510;
        --transparent-secondary-100: #f5f5f525;
        --transparent-accent-100: rgba(200, 250, 255, .10);
    }
`

const light = `
    :root {
        --primary: #f5f5f5;
        --secondary: #151515;
        --accent: rgb(150, 150, 245);
        --wrong: rgba(255, 150, 200, .85);
      
        --transparent-primary-950: rgba(250, 250, 250, .95);        
        --transparent-secondary-950: rgba(10, 10, 10, .95);
        
        --transparent-primary-850: rgba(250, 250, 250, .85);        
        --transparent-secondary-850: rgba(10, 10, 10, .85);
        
        --transparent-primary-750: rgba(250, 250, 250, .75);        
        --transparent-secondary-750: rgba(10, 10, 10, .75);

        --transparent-primary-500: #f5f5f550;        
        --transparent-secondary-500: #05050550;
        --transparent-accent-500: rgba(190, 190, 245, .50);
        
        --transparent-accent-300: rgba(190, 190, 245, .30);
        
        --transparent-accent-200: rgba(190, 190, 245, .20);
        
        --transparent-primary-100: #f5f5f510;        
        --transparent-secondary-100: #05050510;
        --transparent-accent-100: rgba(190, 190, 245, .10);
    }
`

interface Props extends ChildrenInterface {}

const Wrapper: React.FC<Props> = ({ children }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const isVisible = useSelector((state: RootState) => state.nav.isVisible)
    const mode = useSelector((state: RootState) => state.mode.value)
    const isScrollable = useSelector(
        (state: RootState) => state.wrapper.isScrollable
    )

    const { data, error, isLoading, refetch } = useGetDataQuery({
        refetchOnMountOrArgChange: true
    })

    useEffect(() => {
        const value = localStorage.getItem('mode')

        if (value) {
            dispatch(set(value))
        } else {
            if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: light)').matches
            ) {
                dispatch(set('light'))
            } else {
                dispatch(set('dark'))
            }
        }
    }, [])

    useEffect(() => {
        if (!data && localStorage.getItem('accessToken')) {
            console.log(data)

            router.push('/')

            localStorage.removeItem('accessToken')
        }
    }, [data])

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add('non-scrollable')
        } else {
            document.body.classList.remove('non-scrollable')
        }
    }, [isScrollable])

    return (
        <div className={`${styles.wrapper}`}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
            <style>{mode === 'light' ? light : dark}</style>
        </div>
    )
}

export default Wrapper

import { Html, Head, Main, NextScript } from 'next/document'

import { useState } from 'react'

const dark = `
    :root {
        --primary: #151515;
        --secondary: #f5f5f5;
        --accent: #ff0095;
        
        --transparent-primary-950: #05050595;
        --transparent-secondary-950: #f5f5f595;
        
        --transparent-primary-500: #05050550;
        --transparent-secondary-500: #f5f5f550;
        
        --transparent-primary-100: #05050510;
        --transparent-secondary-100: #f5f5f525;
    }
`

const light = `
    :root {
        --primary: #f5f5f5;
        --secondary: #151515;
        --accent: #ff9595;
        
        --transparent-primary-950: #f5f5f595;        
        --transparent-secondary-950: #05050595;

        --transparent-primary-500: #f5f5f550;        
        --transparent-secondary-500: #05050550;
        
        --transparent-primary-100: #f5f5f510;        
        --transparent-secondary-100: #05050510;
    }
`

export default function Document() {
    const [theme, setTheme] = useState('dark')

    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
            <style>{theme === 'light' ? light : dark}</style>
        </Html>
    )
}

import { Html, Head, Main, NextScript } from 'next/document'

import { useState } from 'react'

const dark = `
    :root {
        --primary: #050505;
        --secondary: #f5f5f5;
        --accent: rgb(200, 250, 255);
        
        --transparent-primary-950: #05050595;
        --transparent-secondary-950: #f5f5f595;
        
        --transparent-primary-500: #05050550;
        --transparent-secondary-500: #f5f5f550;

        --transparent-accent-300: rgba(200, 250, 255, .30);
        
        --transparent-primary-100: #05050510;
        --transparent-secondary-100: #f5f5f525;
        --transparent-accent-100: rgba(200, 250, 255, .10);
    }
`

const light = `
    :root {
        --primary: #f5f5f5;
        --secondary: #151515;
        --accent: rgb(190, 190, 245);
      
        --transparent-primary-950: #f5f5f595;        
        --transparent-secondary-950: #05050595;

        --transparent-primary-500: #f5f5f550;        
        --transparent-secondary-500: #05050550;
        
        --transparent-accent-200: rgba(190, 190, 245, .20);
        
        --transparent-primary-100: #f5f5f510;        
        --transparent-secondary-100: #05050510;
        --transparent-accent-100: rgba(190, 190, 245, .10);
    }
`

export default function Document() {
    const [theme, setTheme] = useState('dark')

    return (
        <Html lang="en">
            <Head>
                <title>openwords</title>
                <meta
                    name="description"
                    content="openwords — учи слова на всех языках!"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            <style>{theme === 'light' ? light : dark}</style>
        </Html>
    )
}

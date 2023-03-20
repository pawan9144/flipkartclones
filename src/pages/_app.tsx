import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import ContextProvider from '@/context'

function MyApp({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter()

    useEffect(() => {
        if (window) {
            window.scrollTo(0, 0)
        }
    }, [pathname])
    return (
        <>
            <ContextProvider>
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1, width=device-width"
                    />
                </Head>
                <Component {...pageProps} />
            </ContextProvider>
        </>
    )
}

export default MyApp

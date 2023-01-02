// components/layout.js

import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head';


export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
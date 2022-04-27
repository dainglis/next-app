import React, {ReactNode } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import pageStyle from './layout.module.css'
import utilStyle from '../styles/utils.module.css'

const author = 'David Inglis'
export const siteTitle = 'Next.js Sample Website'

type Props = {
    children?: ReactNode
    home?: boolean
}

const Layout = ({ children, home }: Props) => {
    return (
        <div className={pageStyle.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Learn to build a personal website using Next.js" />
                <meta property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=1&fontSize=100px
                    &images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg
                    &images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={pageStyle.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyle.borderCircle}
                            height={144}
                            width={144}
                            alt={author} />
                        <h1 className={utilStyle.title}>{author}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyle.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={author} />
                            </a>
                        </Link>
                        <h2 className={utilStyle.subtitle}>
                            <Link href="/">
                                <a className={utilStyle.colorInherit}>{author}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <Link href="/">
                    <p className={utilStyle.card}>← Back to home</p>
                </Link>
            )}
        </div>
    ) 
}

export default Layout
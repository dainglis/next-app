import type { NextPage } from "next"
import Link from 'next/link'

import utilStyle from '../styles/utils.module.css'

const Custom404: NextPage = () => {
    return (
        <>
            <h1 className={utilStyle.subtitle}>404 - Page Not Found</h1>
            <Link href="/">
                <p className={utilStyle.card}>← Back to home</p>
            </Link>
        </>
    )
}

export default Custom404

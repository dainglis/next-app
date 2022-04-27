import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'

import pageStyle from '../../styles/utils.module.css'


const FirstPost: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={pageStyle.title}>
                First Post
            </h1>
            <p>This is a post</p>
        </Layout>
    )
}

export default FirstPost
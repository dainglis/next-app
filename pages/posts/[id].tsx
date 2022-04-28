import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import type { PostData } from '../../lib/posts'


import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'

import utilStyle from '../../styles/utils.module.css'

interface Props {
    postData: PostData
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params } : any) => {
    const postData = await getPostData(params.id) 

    return {
        props: {
            postData
        }
    }
}

const Post: NextPage<Props> = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.metadata.title}</title>
            </Head>
            <hr />
            <h1>
                {postData.metadata.title}
            </h1>
            <div className={utilStyle.lightText}>
                <Date dateString={postData.metadata.date}/>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}

export default Post

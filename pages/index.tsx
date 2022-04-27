import type { NextPage } from 'next'
import type { PostMetadata } from '../lib/posts'

import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

import utilStyle from '../styles/utils.module.css'
import Link from 'next/link'

type Props = {
  allPostsData?: PostMetadata[]
}


export async function getStaticProps() {
  const allPostsData : PostMetadata[] = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}


const Home: NextPage = ({ allPostsData }: Props ) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyle.description} ${utilStyle.padding1px}`}>
        <p>This is a basic blog site using{' '}
          <a href="https://nextjs.org/learn">Next.js</a>
          {' '}and{' '}
          <a href="https://www.typescriptlang.org/">TypeScript</a>.
        </p>
      </section>
    
      <h1>Blog</h1>
      <ul className={utilStyle.list}>
        {allPostsData?.map(({ id, date, title}) => (
          <li className={utilStyle.listItem} key={id}>
            <Link href={`posts/${id}`}>
              <a className={utilStyle.description}>
                {title}
              </a>
            </Link>
            <br />
            <span className={utilStyle.lightText}>{date}</span>
          </li>
        ))}
      </ul>

    </Layout>
  )
}

export default Home

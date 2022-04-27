import type { NextPage } from 'next'

import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

import utilStyle from '../styles/utils.module.css'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.description}>
        <p>This is a basic blog site using{' '}
          <a href="https://nextjs.org/learn">Next.js</a>
          {' '}and{' '}
          <a href="https://www.typescriptlang.org/">TypeScript</a>.
        </p>
    
        <p>Next up, add some content to the site.</p>
      </section>
      
    </Layout>
  )
}

export default Home

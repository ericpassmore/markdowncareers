import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'

const Home: NextPage = () => {
  return (
    <main>
        <Layout>
            <Head>
                <title>Index Page</title>
                <meta name="future description" />
            </Head>
            <Container>
                <div className="bg-white">
                    <h1>Hello World!</h1>
                    <p>some text goes here</p>
                </div>
            </Container>
        </Layout>
    </main>
  )
}

export default Home

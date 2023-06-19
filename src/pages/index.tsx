import Head from 'next/head'
import Coins from '../components/Coins'
import Layout from '../components/template/Layout'

export default function Home() {
  return (
    <div data-testid="coin-list">
      <Head>
        <title>CrypoMunze</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Coins />
      </Layout>
    </div>
  )
}

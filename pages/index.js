import Head from 'next/head'
import Hero from '../components/hero/hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coinme</title>
        <meta name="description" content="Digital currency platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}

import Head from 'next/head'
import Hero from '../components/hero/Hero'
import Lock from '../components/lock/Lock'
import Rate from '../components/rate/Rate'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coinme</title>
        <meta name="description" content="Digital currency platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Rate />
      <Lock />
    </div>
  )
}

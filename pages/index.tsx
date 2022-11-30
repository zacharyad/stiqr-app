import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <div>
      <p className="text-3xl">Hero image and message</p>
      <Link href="/auth">Start!</Link>
      </div>
    </div>
  )
}

export default Home

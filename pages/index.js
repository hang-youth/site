import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Releases from '../components/Releases'
import Shop from '../components/Shop'
import Tour from '../components/Tour'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hang Youth</title>
        <meta name="description" content="Een uit de hand gelopen fanpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Releases/>
      <Shop/>
      <Tour/>
      <Header/>
      <Hero/>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Releases from '../components/Releases'
import Shop from '../components/Shop'
import Tour from '../components/Tour'
import { getAllContent } from '../lib/contentProvider'
import markdownToHtml from '../lib/markdownToHtml'
import styles from '../styles/Home.module.css'

export default function Home({albums}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hang Youth</title>
        <meta name="description" content="Een uit de hand gelopen fanpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Releases albums={albums}/>
      <Shop/>
      <Tour/>
      <Header/>
      <Hero/>
    </div>
  )
}

export async function getStaticProps() {
  const albums = getAllContent('albums', ['slug', 'coverImage', 'title', 'content']).map(async (album) => {
      album.content = await markdownToHtml(album.content || '')
      return album
  })

  return {
      props: {
          albums: await Promise.all(albums)
      },
  }
}
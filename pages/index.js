import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Releases from '../components/Releases'
import Shop from '../components/Shop'
import Tour from '../components/Tour'
import { getAllContent } from '../lib/contentProvider'
import markdownToHtml from '../lib/markdownToHtml'
import styles from '../styles/Home.module.css'

export default function Home({albums, singles, tour}) {
  
  useEffect(() => {
    window.addEventListener('load', function(e){
      window.scrollTo(0, document.body.scrollHeight)
    });
    window.addEventListener('unload', function(e){
      window.scrollTo(0, document.body.scrollHeight)
    });
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Hang Youth</title>
        <meta name="description" content="Een uit de hand gelopen fanpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer/>
      <Contact/>
      <Releases albums={albums} singles={singles}/>
      <Shop/>
      <Tour tour={tour}/>
      <Header/>
      <Hero/>
    </div>
  )
}

export async function getStaticProps() {
  const albums = getAllContent('albums', ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic']).map(async (album) => {
    album.content = await markdownToHtml(album.content || '')
    return album
  })

  const singles = getAllContent('singles', ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic']).map(async (single) => {
    single.content = await markdownToHtml(single.content || '')
    return single
  })

  const tour = getAllContent('tour', ['slug', 'date', 'place', 'name', 'linkTickets', 'soldout'])

  return {
      props: {
          albums: await Promise.all(albums),
          singles: await Promise.all(singles),
          tour: await Promise.all(tour)
      },
  }
}
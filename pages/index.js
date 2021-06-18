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
        <meta name="description" content="Koop tickets voor de Hang Youth tour." />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/icons/site.webmanifest"/>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/icons/favicon.ico"/>
        <meta name="apple-mobile-web-app-title" content="Hang Youth"/>
        <meta name="application-name" content="Hang Youth"/>
        <meta name="msapplication-TileColor" content="#2b5797"/>
        <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
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

  const tour = getAllContent('tour', ['slug', 'date', 'venue', 'name', 'linkTickets', 'soldout'])

  return {
      props: {
          albums: await Promise.all(albums),
          singles: await Promise.all(singles),
          tour: await Promise.all(tour)
      },
  }
}
import Product from '@components/Product'
import commerce from '@lib/api/commerce'

import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import markdownToHtml from '../../lib/markdownToHtml'
import styles from '../../styles/Home.module.css'

export default function Slug({product}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hang Youth</title>
        <meta name="description" content="Een uit de hand gelopen fanpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer/>
      <Product product={product}/>
      <Header/>
    </div>
  )
}

export async function getStaticProps({
    params,
    locale,
    locales,
    preview,
  }) {
  const config = { locale, locales }

  const { product } = await commerce.getProduct({
    variables: { slug: params.slug },
    config,
    preview,
  })

  return {
      props: {
          product
      },
  }
}

export async function getStaticPaths({ locales }) {
  const { products } = await commerce.getAllProductPaths()

  return {
      paths: locales ? locales.reduce((arr, locale) => {
        products.forEach((product) => {
          arr.push(`/${locale}/product${product.path}`)
        })
        return arr
      }, [])
      : products.map((product) => `/product${product.path}`),
      fallback: 'blocking',
  }
}

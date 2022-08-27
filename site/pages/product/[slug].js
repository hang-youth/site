// import { CartSidebarView } from 'site/components/cart'
import Product from '../../components/Product'
import { useUI } from '../../components/ui/context'

import commerce from '@lib/api/commerce'

import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export default function Slug({product}) {
  const {
    displaySidebar,
    closeSidebar,
  } = useUI()

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Hang Youth</title>
        <meta name="description" content="Een uit de hand gelopen fanpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Product product={product}/>
    </div>
    {/* <Sidebar open={displaySidebar} onClose={closeSidebar}>
        <CartSidebarView />
    </Sidebar> */}
    </>
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

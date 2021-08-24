
import Head from 'next/head'

import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import commerce from '@lib/api/commerce'
import { Bag, Cross, Check, MapPin, CreditCard } from '@components/icons'
import { CartItem } from '@components/cart'
import styles from '../styles/Cart.module.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'

export async function getStaticProps({
  preview,
  locale,
  locales,
}) {
  const config = { locale, locales }
  const { pages } = await commerce.getAllPages({ config, preview })
  const { categories } = await commerce.getSiteInfo({ config, preview })
  return {
    props: { pages, categories },
  }
}

export default function Cart() {
  const error = null
  const success = null
  const { data, isLoading, isEmpty } = useCart()

  const { price: subTotal } = usePrice(
    data && {
      amount: Number(data.subtotalPrice),
      currencyCode: data.currency.code,
    }
  )
  const { price: total } = usePrice(
    data && {
      amount: Number(data.totalPrice),
      currencyCode: data.currency.code,
    }
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Hang Youth</title>
        <meta name="description" content="Een uit de hand gelopen fanpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer/>

      <div className={styles.wrapper}>

        {isLoading || isEmpty ? (
          <></>
        ) : error ? (
          <></>
        ) : success ? (
          <></>

        ) : (
          <>
            <h1>My Cart</h1>
            <h2>Review your Order</h2>
            <ul className={styles.itemList}>
              {data.lineItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  currencyCode={data.currency.code}
                />
              ))}
            </ul>
            </>
        )}

        <div className={styles.totals}>
          <dl>
            <dt>Subtotaal</dt>
            <dd>{subTotal}</dd>

            <dt>BTW</dt>
            <dd>Wordt berekend bij afrekenen</dd>

            <dt>Verzendkosten</dt>
            <dd>€5,95</dd>

            <dt>Totaal</dt>
            <dd>{total}</dd>
          </dl>

          <div>
            <a href="/checkout" width="100%" className={styles.button}>Naar betaalpagina</a>
          </div>
        </div>
      </div>
    <Header/>
    </div>
  )
}

// Cart.Layout = Layout

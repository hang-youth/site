
import Head from 'next/head'

import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import commerce from '@lib/api/commerce'
import { CartItem } from '@components/cart'
import styles from '../styles/Cart.module.scss'
import Link from 'next/link'
import BasePage from '../components/BasePage'

export async function getStaticProps({
  preview,
  locale,
  locales,
}) {
  const config = { locale, locales }
  const { pages } = await commerce.getAllPages({ config, preview })
  return {
    props: { pages },
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
    <BasePage title="Winkelwagen">
      <div className={styles.wrapper}>

        {isLoading || isEmpty ? (
          <></>
        ) : error ? (
          <></>
        ) : success ? (
          <></>

        ) : (
          <>
            <h1>Winkelwagen</h1>
            <h2>Controleer je bestelling</h2>
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

            <dt>Verzendkosten</dt>
            <dd>Wordt berekend bij afrekenen</dd>
          </dl>

          <div>
            <Link href="/checkout"><span className={styles.checkout}>Afrekenen</span></Link>
          </div>
        </div>
      </div>
    </BasePage>
  )
}

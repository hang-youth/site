import commerce from '@lib/api/commerce'

import styles from '../../styles/Product.module.scss'
import BasePage from '@components/BasePage'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAddItem } from '@framework/cart'

import ReactTooltip from 'react-tooltip';

export default function Slug({product, products}) {
  const [choices, setChoices] = useState({})
  const addItem = useAddItem()

  const variant = getVariant(product, choices)

  useEffect(() => {
    // Selects the default option
    product.variants[0]?.options?.forEach((v) => {
      setChoices((choices) => ({
        ...choices,
        [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase(),
      }))
    })
  }, [])

  const addToCart = async () => {
    // setLoading(true)
    try {
      const item = await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })

      // Redirect to cart
      window.open("/cart")

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <BasePage title={`${product.name} - Hang Youth`} description={product.description || product.name}>
      <h1>{product.name}</h1>
      <div className={styles.back}><Link href="/webwinkel">&#8249; Terug naar webwinkel</Link></div>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={product.images[0]?.url || placeholderImg} alt={product.name} />
        </div>
        <div className={styles.info}>
          <h1>{product.name}</h1>
          <ReactTooltip />
          {product.options?.map((opt) => (
              <div className={styles.options} key={opt.displayName}>
                {/* <h3>{opt.displayName}</h3> */}
                <ul>
                  {opt.values.map((v, i) => {
                    const active = (choices)[opt.displayName.toLowerCase()] === v.label.toLowerCase()
                    const choice = {
                      ...choices,
                      [opt.displayName.toLowerCase()]: v.label.toLowerCase()
                    }

                    const currentVariant = getVariant(product, choice)
                    const availableForSale = currentVariant?.availableForSale
                    if(!availableForSale) {
                      return <li key={i} className={styles.disabled} data-tip={`${v.label} is niet beschikbaar.`}>{v.label}</li>
                    }

                    return (
                      <li key={i} onClick={(e) => {
                          setChoices(choice)
                        }}>
                        <button className={styles.button + (active?' '+styles.active:'')}>{v.label}</button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          <button className={styles.button} onClick={addToCart}>
            Voeg toe aan Winkelwagen
          </button>
          <p className={styles.price}>&euro;{product.price.value}</p>
          <div className={styles.description} dangerouslySetInnerHTML={ {__html: product.descriptionHtml || ''}}/>
        </div>
      </div>
      {
        products &&
        <div className={styles.related}>
          <h3>Andere vette shit</h3>
          <div className={styles.products}>
            {products.map(product => (
              <Link href="/product/[slug]" as={`/product/${product.slug}`} key={product.id}>
                <div className={styles.product}>
                  <img src={product.images[0]?.url || placeholderImg} alt={product.name} />
                  <div className={styles.overlay}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>€{product.price.value}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      }
    </BasePage>
  )
}

export async function getServerSideProps({params}) {

  const { product } = await commerce.getProduct({
    variables: { slug: params.slug },
  })

  // Get 3 random products not including the current one
  const { products } = await commerce.getAllProducts({
    variables: {
      relevance: 'random',
      first: 4
    },
  })

  return {
      props: {
          product,
          products: products.filter(product => product.slug !== params.slug),
      },
  }
}

export function getVariant(product, opts) {
  const variant = product.variants.find((variant) => {
    return Object.entries(opts).every(([key, value]) =>
      variant.options.find((option) => {
        if (
          option.__typename === 'MultipleChoiceOption' &&
          option.displayName.toLowerCase() === key.toLowerCase()
        ) {
          return option.values.find((v) => v.label.toLowerCase() === value)
        }
      })
    )
  })
  return variant
}

import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import styles from './Product.module.scss'
import { useAddItem, useCart } from '@framework/cart'
import { getVariant } from './helpers';

const placeholderImg = '/images/product-img-placeholder.svg'

export default function Product({product}) {
    const { data, isLoading, isEmpty } = useCart()
    const addItem = useAddItem()
    const [choices, setChoices] = useState({})
    const variant = getVariant(product, choices)

    console.log(data)

    const images = product.images.map((image) => {
      return {
        original: image.url,
        thumbnail: image.url
      }
    })

    useEffect(() => {
      // Selects the default option
      product.variants[0].options?.forEach((v) => {
        setChoices((choices) => ({
          ...choices,
          [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase(),
        }))
      })
    }, [])

    const addToCart = async () => {
      // setLoading(true)
      try {
        await addItem({
          productId: String(product.id),
          variantId: String(variant ? variant.id : product.variants[0].id),
        })
        // openSidebar()
        // setLoading(false)
      } catch (err) {
        // setLoading(false)
      }
    }

    return (
        <div className={styles.container}>
          <div className={styles.description}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {product.options?.map((opt) => (
              <div key={opt.displayName}>
                <h3>{opt.displayName}</h3>
                <div className={styles.options}>
                  {opt.values.map((v, i) => {
                    const active = (choices)[
                      opt.displayName.toLowerCase()
                    ]

                    return (
                      <button data-active={(v.label.toLowerCase() === active)} onClick={() => setChoices((choices) => {
                        return {
                          ...choices,
                          [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                        }})}>{v.label.toLowerCase()}</button>
                    )
                    // return (
                    //   <Swatch
                    //     key={`${opt.id}-${i}`}
                    //     active={v.label.toLowerCase() === active}
                    //     variant={opt.displayName}
                    //     color={v.hexColors ? v.hexColors[0] : ''}
                    //     label={v.label}
                    //     onClick={() => {
                    //       setChoices((choices) => {
                    //         return {
                    //           ...choices,
                    //           [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                    //         }
                    //       })
                    //     }}
                    //   />
                    // )
                  })}
                </div>
              </div>
            ))}
            <button onClick={addToCart}>Add to Cart</button>
          </div>
          <div className={styles.gallery}>
            <ImageGallery items={images}/>
          </div>
        </div>
    )
}

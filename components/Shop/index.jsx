import { useState } from 'react'
import Placeholder from '../Placeholder'
import Product from '../Product'
import ProductCard from './ProductCard'
import styles from './Shop.module.scss'

export default function Shop({ products }) {
    return (
        <div id="shop" className={styles.container}>
            <div className={styles.content}>
                <h2>Shop</h2>
                <div className={styles.product_wrapper}>
                  {
                    products.slice(0, 3).map((product) => (
                      <ProductCard key={product.id} product={product}/>
                    ))
                  }
                </div>
            </div>
            <Placeholder className={styles.placeholder} title="Geile fash selfie"/>
        </div>
    )
}

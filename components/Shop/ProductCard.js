import Image from 'next/image'
import styles from './ProductCard.module.scss'
import Link from 'next/link'

const placeholderImg = '/images/product-img-placeholder.svg'

export default function ProductCard({product, onClick}) {
    return (

      <Link href={`/product/${product.slug}`}>
        <div className={styles.container} onClick={onClick}>
          <Image
              quality="85"
              src={product.images[0]?.url || placeholderImg}
              alt={product.name || 'Product Image'}
              height={320}
              width={320}
              layout="responsive"
              // {...imgProps}
            />
        </div>
      </Link>
    )
}

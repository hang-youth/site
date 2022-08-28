import commerce from '@lib/api/commerce'
import Link from 'next/link'

import BasePage from '../components/BasePage';

import styles from '../styles/Webshop.module.scss';

const placeholderImg = '/images/product-img-placeholder.svg'

export default function Webshop({products}) {
  console.log(products)

  return (
    <BasePage title="Webwinkel - Hang Youth">
      <h1>Webwinkel</h1>
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
    </BasePage>
  );
}

export async function getServerSideProps() {
  const { products } = await commerce.getAllProducts({
    variables: { first: 12 },
  })

  return {
    props: {
      products
    },
  };
}

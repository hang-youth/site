import commerce from '@lib/api/commerce'
import Link from 'next/link'
import { useState } from 'react';

import BasePage from '../components/BasePage';

import styles from '../styles/Webshop.module.scss';

const placeholderImg = '/images/product-img-placeholder.svg'

export default function Webshop({products}) {
  // const [showStatement, setShowStatement] = useState(false)

  return (
    <BasePage title="Webwinkel - Hang Youth" description="Webwinkel voor merchandise. Kleding enzo. Koop of blijf lelijk.">
      <h1>Webwinkel</h1>
      {/* <div className={styles.statement}>
        { showStatement ? (
          <>
            <button onClick={() => setShowStatement(false)}>KLIK HIER OM HET STATEMENT WEER IN TE KLAPPEN</button>
            <h3>1. Prijzen</h3>
            <p>We willen jullie geen troep aansmeren, dus daarom zijn onze shirts van goede kwaliteit en mooi bedrukt. En omdat we
            van mooie dingen houden, kiezen we soms ook voor een vette kleur, bedrukte mouwen, rugopdruk, etc. Dat betekent
            allemaal ook iets voor de inkoopprijs; die ligt wat hoger dan bij een goedkoop Fruit of the Loom-shirt dat je na twee
            keer wassen kunt weggooien. Daarnaast bieden we bijna al onze muziek gratis aan op Spotify, en daar houden we niet
            per se veel aan over. Door het kopen van merch kun je ons direct supporten &lt;3 En dan kunnen wij doen alsof we van
            deze punk bullshit kunnen leven.
            Tot slot kun je bij ieder item in de winkel zien wat de productiekosten zijn en hoeveel
            wij er per person (eventueel) aan overhouden. Als je wilt weten hoeveel wij in total verdienen aan de band, kun je <a href="/financieel-verslag" className="link link--inline">hier ook ons financieel verslag downloaden.</a>
            </p>
            <h3>2. Verzending</h3>
            <p>We doen dit allemaal zelf en vanuit huis. We proberen ervoor te zorgen dat je bestelling binnen een week thuis is. Kan
            soms wat seller zijn, kan soms wat langer zijn. Mocht er iets aan de hand zijn (verkeerde maat, pakketje is er nog
            steeds niet, etc.), mail ons dan op <a href="mailto:info@hangyouth.nl" className="link link--inline">info@hangyouth.nl</a> en vermeld in je e-mail je bestelnummer.</p>
          </>
        ) : (
          <button onClick={() => setShowStatement(true)}>KLIK HIER VOOR EEN STATEMENT OVER DE PRIJZEN (EN VERZENDING) VAN ONZE MERCH</button>
        )}

      </div> */}
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

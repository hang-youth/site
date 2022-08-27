import Sidebar from '@components/Sidebar'

import Head from 'next/head'
import styles from '../../styles/Base.module.css'

export default function BasePage({children, title = 'Hang Youth', description = 'Koop tickets voor de Hang Youth Tour'}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/icons/site.webmanifest"/>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/icons/favicon.ico"/>
        <meta name="apple-mobile-web-app-title" content="Hang Youth"/>
        <meta name="application-name" content="Hang Youth"/>
        <meta name="msapplication-TileColor" content="#2b5797"/>
        <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Sidebar/>
      <div className={styles.body}>
        {
          children
        }
      </div>
    </div>
  )
}

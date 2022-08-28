import ActiveLink from '@components/ActiveLink'
import Link from 'next/link'
import styles from './Sidebar.module.scss'

export default function Sidebar(props) {
    return (
        <div className={styles.container}>
          <nav>
            <ul>
              <ActiveLink activeClassName={styles.active} href="/webwinkel">Webwinkel</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/tour">Tour</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/muziek">Muziek</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/videos">Video's</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/financieel-verslag">Financieel Verslag</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/contact">Contact</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/links">Links</ActiveLink>
              <a href="/cart"><img src="/images/cart.png" alt="Winkelwagen"/></a>
            </ul>
          </nav>
          <div className={styles.content}>
            {props.children}
          </div>
          <div className={styles.footer}>
            <p>&copy; PUNKBAND / HANG YOUTH {new Date().getFullYear()}</p>
            <a href="/">Gemaakt door de Discord &lt;3</a>
          </div>
        </div>
    )
}

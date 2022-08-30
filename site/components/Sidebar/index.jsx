import ActiveLink from '@components/ActiveLink'
import styles from './Sidebar.module.scss'

export default function Sidebar(props) {
    return (
        <div className={styles.container + (props.showMobileMenu ? " "+styles.active: '')}>
          <nav>
            <ul>
              <ActiveLink activeClassName={styles.active} href="/webwinkel">Webwinkel</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/tour">Tour</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/muziek">Muziek</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/videos">Video's</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/financieel-verslag">Financieel Verslag</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/contact">Contact</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/links">Links</ActiveLink>
              <a className={styles.cart} href="/cart"><img src="/images/cart.png" alt="Winkelwagen"/></a>
              <a className={styles.logo} href="/"><img src="/images/HANG-YOUTH-LOGO.png" alt="HANG YOUTH LOGO"/></a>
            </ul>
          </nav>
          <div className={styles.content} onClick={props.onClick}>
            {props.children}
          </div>
          <div className={styles.footer}>
            <p>&copy; PUNKBAND / HANG YOUTH {new Date().getFullYear()}</p>
            <a href="https://discord.gg/v6aBfJxvb7">Gemaakt door de Discord &lt;3</a>
          </div>
        </div>
    )
}

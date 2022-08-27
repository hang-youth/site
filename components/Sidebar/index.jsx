import ActiveLink from '@components/ActiveLink'
import styles from './Sidebar.module.scss'

export default function Sidebar(props) {
    return (
        <div className={styles.container}>
          <nav>
            <ul>
              <ActiveLink activeClassName={styles.active} href="/shop">Webwinkel</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/tour">Tour</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/muziek">Muziek</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/videos">Video's</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/financieel-verslag">Financieel Verslag</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/contact">Contact</ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/links">Links</ActiveLink>
            </ul>
          </nav>
            <div className={styles.content}>
              {props.children}
            </div>
        </div>
    )
}

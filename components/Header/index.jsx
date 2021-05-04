import styles from './Header.module.scss'

export default function Header() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a href="#tour">Tour</a>
                <a href="#shop">Shop</a>
                <a href="#releases">Releases</a>
                <a href="/">Financieel verslag</a>
            </nav>
        </div>
    )
}
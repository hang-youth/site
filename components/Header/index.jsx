import styles from './Header.module.scss'

export default function Header() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a href="/">Tour</a>
                <a href="/">Shop</a>
                <a href="/">Releases</a>
                <a href="/">Financieel verslag</a>
            </nav>
        </div>
    )
}
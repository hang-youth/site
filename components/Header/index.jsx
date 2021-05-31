import styles from './Header.module.scss'

import { Link } from 'react-scroll';

export default function Header() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link to="tour" href="#tour" spy={true} smooth={true} duration={1000}>Tour</Link>
                <Link to="shop" href="shop" spy={true} smooth={true} duration={1000}>Shop</Link>
                <Link to="releases" href="releases" spy={true} smooth={true} duration={1000}>Releases</Link>
                <Link to="financial-report" href="financiel-report" spy={true} smooth={true} duration={1000}>Financieel verslag</Link>
            </nav>
        </div>
    )
}
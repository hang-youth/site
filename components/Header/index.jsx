import styles from './Header.module.scss'

import { Link } from 'react-scroll';

export default function Header() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link to="tour" href="#tour" spy={true} smooth={true} duration={1000}>Tour</Link>
                {/* <Link to="shop" href="shop" spy={true} smooth={true} duration={1000}>Shop</Link> */}
                {/* <Link to="releases" href="releases" spy={true} smooth={true} duration={1000}>Releases</Link> */}
                <Link to="contact" href="#contact" spy={true} smooth={true} duration={1000}>Contact</Link>
            </nav>
        </div>
    )
}
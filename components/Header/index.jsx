import styles from './Header.module.scss'

import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useState } from 'react';

export default function Header({ scroll = false }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.container}>
            <nav className={[styles.nav, open?styles.active:''].join(' ')} onClick={() => setOpen(false)}>
              { scroll ?
              <>
                <ScrollLink to="tour" href="#tour" spy={true} smooth={true} duration={1000} onClick={() => setOpen(false)}>Tour</ScrollLink>
                <ScrollLink to="shop" href="#shop" spy={true} smooth={true} duration={1000} onClick={() => setOpen(false)}>Shop</ScrollLink>
                <ScrollLink to="releases" href="releases" spy={true} smooth={true} duration={1000} onClick={() => setOpen(false)}>Releases</ScrollLink>
                <ScrollLink to="contact" href="contact" spy={true} smooth={true} duration={1000} onClick={() => setOpen(false)}>Contact</ScrollLink>
              </>
              :
              <>
                <Link href="/#tour" spy={true} smooth={true} duration={1000} onClick={() => setOpen(false)}>Tour</Link>
                <Link href="/#shop" spy={true} smooth={true} duration={1000} onClick={() => setOpen(false)}>Shop</Link>
                <Link href="/#releases" spy={true} smooth={true} duration={1000} onClick={() => setOpen(false)}>Releases</Link>
                <Link href="/#contact" spy={true} smooth={true} duration={1000} onClick={() => setOpen(false)}>Contact</Link>
              </>
              }
            </nav>
            <div class={styles.mobileToggle} onClick={() => setOpen(true)}>
              MENU
            </div>
        </div>
    )
}

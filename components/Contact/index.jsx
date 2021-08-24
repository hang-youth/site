import styles from './Contact.module.scss'

export default function Contact() {
    return (
        <div id="contact" className={styles.container}>
            <div className={styles.content}>
                <h2>Contact</h2>
                <p><b>Boekingen:</b> Jeps Salfischberger (<a href="mailto:j.salfischberger@mojo.nl">j.salfischberger@mojo.nl</a>)</p>
                <p><b>Pers, management, etc:</b> Rick Bakker (<a href="mailto:rick@resort.net">rick@resort.net</a>)</p>
                <p><b>Fanmail &amp; opbouwende kritiek:</b> <a href="mailto:info@hangyouth.nl">info@hangyouth.nl</a></p>
            </div>
        </div>
    )
}
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.container}>
            <span>Website door <a href="https://discord.gg/KX2bNcRs" target="_blank" rel="noreferrer">de Discord</a></span>
        </div>
    )
}
import styles from './Albums.module.scss'

export default function Albums() {
    return (
        <div id="albums" className={styles.container}>
            <div className={styles.cover}>
                <img src="/images/album-doe-het-zelf.jpeg" alt="Doe het zelf"/>
            </div>
            <div className={styles.cover}>
                <img src="/images/album-doe-het-zelf.jpeg" alt="Doe het zelf"/>
            </div>
            <div className={styles.cover}>
                <img src="/images/album-doe-het-zelf.jpeg" alt="Doe het zelf"/>
            </div>
            <div className={styles.cover}>
                <img src="/images/album-doe-het-zelf.jpeg" alt="Doe het zelf"/>
            </div>
            <div className={styles.cover}>
                <img src="/images/album-doe-het-zelf.jpeg" alt="Doe het zelf"/>
            </div>
            <div className={styles.cover}>
                <img src="/images/album-doe-het-zelf.jpeg" alt="Doe het zelf"/>
            </div>
            <div className={styles.cover}>
                <img src="/images/album-doe-het-zelf.jpeg" alt="Doe het zelf"/>
            </div>
        </div>
    )
}
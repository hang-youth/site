import styles from './Cover.module.scss'

export default function Cover({album, setActive}) {
    return (
        <div key={album.slug} className={styles.container} onClick={setActive}>
            <img src={album.coverImage} alt={album.title}/>
        </div>
    )
}
import styles from './Album.module.scss'

export default function Album({album, setActive}) {
    return (
        <div key={album.slug} className={styles.container}>
            <div className={styles.cover}  onClick={setActive}>
                <img src={album.coverImage} alt={album.title}/>
            </div>
            <div className={styles.content}>
                <h1>{album.title}</h1>
                <div dangerouslySetInnerHTML={{__html: album.content}}/>
            </div>
        </div>
    )
}
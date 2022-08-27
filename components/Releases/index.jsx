import Cover from './Cover'
import styles from './Releases.module.scss'

export default function Releases({albums, singles}) {
    return (
        <div id="releases" className={styles.container}>
            <h1>Muziek</h1>
            <div className={styles.content}>
                <h3>Albums</h3>
                {
                    <div className={styles.album_wrapper}>
                        {
                            albums.map(album =>
                              <Cover cover={album} type='albums' key={album.slug}/>
                            )
                        }
                    </div>
                }
            </div>
            <div className={styles.content}>
                <h3>Singles</h3>
                {
                    <div className={styles.album_wrapper}>
                        {
                            singles.map(single =>
                                <Cover key={single.slug} type='singles' cover={single}/>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

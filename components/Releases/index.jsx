import { useState } from 'react'
import Album from './Album'
import Cover from './Cover'
import styles from './Releases.module.scss'
import Single from './Single'

export default function Releases({albums, singles}) {
    const [activeAlbum, setActiveAlbum] = useState(null)
    const [activeSingle, setActiveSingle] = useState(null)

    const album = albums.find(x => x.slug == activeAlbum)
    const single = singles.find(x => x.slug == activeSingle)

    return (
        <div id="releases" className={styles.container}>
            <div className={styles.content}>
                <h2>Singles</h2>
                {
                    single?
                        <Single single={single}  setActive={() => setActiveSingle(null)}/>
                    :
                    <div className={styles.album_wrapper}>
                        {
                            singles.map(single => 
                                <Cover key={single.slug}  cover={single} setActive={() => setActiveSingle(single.slug)}/>
                            )
                        }
                    </div>
                }
            </div>
            <div className={styles.content}>
                <h2>Albums</h2>
                {
                    album?
                        <Album album={album}  setActive={() => setActiveAlbum(null)}/>
                    :
                    <div className={styles.album_wrapper}>
                        {
                            albums.map(album => 
                                <Cover key={album.slug} cover={album} setActive={() => setActiveAlbum(album.slug)}/>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}
import { useState } from 'react'
import Album from './Album'
import Cover from './Cover'
import styles from './Releases.module.scss'

export default function Releases({albums}) {
    const [activeAlbum, setActiveAlbum] = useState(null)

    const album = albums.find(x => x.slug == activeAlbum)

    return (
        <div id="releases" className={styles.container}>
            <div className={styles.content}>
                <h2>Albums</h2>
                {
                    album?
                        <Album album={album}  setActive={() => setActiveAlbum(null)}/>
                    :
                    <div className={styles.album_wrapper}>
                        {
                            albums.map(album => 
                                <Cover album={album} setActive={() => setActiveAlbum(album.slug)}/>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}
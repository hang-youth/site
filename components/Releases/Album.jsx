import styles from './Album.module.scss'

export default function Album({album, setActive}) {
    return (
        <div key={album.slug} className={styles.container}>
            <div className={styles.cover}  onClick={setActive}>
                <div className={styles.button}><span>Terug naar alle albums</span></div>
                <img src={album.coverImage} alt={album.title}/>
            </div>
            <div className={styles.content}>
                <h1>{album.title}</h1>
                <div dangerouslySetInnerHTML={{__html: album.content}}/>
            </div>
            {(album.linkSpotify || album.linkBandcamp || album.linkAppleMusic) &&
                <div className={styles.stream}>
                    <h2>Stream</h2>
                    <BandcampButton album={album}/>
                    <SpotifyButton album={album}/>
                    <AppleMusicButton album={album}/>
                </div>
            }
        </div>
    )
}

function SpotifyButton(props){
    if(props.album.linkSpotify){
        return <a href={props.album.linkSpotify} target="_blank" rel="noreferrar" className={styles.button} data-platform="spotify"><img src="/images/icon-spotify.png" alt="Spotify"/> <span>PLAY ON SPOTIFY</span></a>
    }
    return ''
}

function BandcampButton(props){
    if(props.album.linkBandcamp){
        return <a href={props.album.linkBandcamp} target="_blank" rel="noreferrar" className={styles.button} data-platform="bandcamp"><img src="/images/icon-bandcamp.png" alt="Bandcamp"/> <span>PLAY ON BANDCAMP</span></a>
    }
    return ''
}

function AppleMusicButton(props){
    if(props.album.linkAppleMusic){
        return <a href={props.album.linkAppleMusic} target="_blank" rel="noreferrar" className={styles.button} data-platform="apple-music"><img src="/images/icon-apple-music.png" alt="AppleMusic"/> <span>PLAY ON APPLE MUSIC</span></a>
    }
    return ''
}
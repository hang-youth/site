import styles from './Single.module.scss'

export default function Single({single, setActive}) {
    return (
        <div key={single.slug} className={styles.container}>
            <div className={styles.cover}  onClick={setActive}>
                <div className={styles.button}><span>Terug naar alle singles</span></div>
                <img src={single.coverImage} alt={single.title}/>
            </div>
            <div className={styles.content}>
                <h1>{single.title}</h1>
                <div dangerouslySetInnerHTML={{__html: single.content}}/>
            </div>
            {(album.linkSpotify || album.linkBandcamp || album.linkAppleMusic) &&
                <div className={styles.stream}>
                    <h2>Stream</h2>
                    <BandcampButton single={single}/>
                    <SpotifyButton single={single}/>
                    <AppleMusicButton single={single}/>
                </div>
            }
        </div>
    )
}

function SpotifyButton(props){
    if(props.single.linkSpotify){
        return <a href={props.single.linkSpotify} target="_blank" rel="noreferrar" className={styles.button} data-platform="spotify"><img src="/images/icon-spotify.png" alt="Spotify"/> <span>PLAY ON SPOTIFY</span></a>
    }
    return ''
}

function BandcampButton(props){
    if(props.single.linkBandcamp){
        return <a href={props.single.linkBandcamp} target="_blank" rel="noreferrar" className={styles.button} data-platform="bandcamp"><img src="/images/icon-bandcamp.png" alt="Bandcamp"/> <span>PLAY ON BANDCAMP</span></a>
    }
    return ''
}

function AppleMusicButton(props){
    if(props.single.linkAppleMusic){
        return <a href={props.single.linkAppleMusic} target="_blank" rel="noreferrar" className={styles.button} data-platform="apple-music"><img src="/images/icon-apple-music.png" alt="AppleMusic"/> <span>PLAY ON APPLE MUSIC</span></a>
    }
    return ''
}
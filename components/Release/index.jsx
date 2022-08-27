import Link from 'next/link'
import styles from './Release.module.scss'

export default function Release({release}) {
  return (
    <div key={release.slug} className={styles.container}>
      <div className={styles.cover}>
          <Link href="/muziek"><div className={styles.button}><span>Terug naar alle muziek</span></div></Link>
          <img src={release.coverImage} alt={release.title}/>
      </div>
      <div className={styles.content}>
          <h1>{release.title}</h1>
          <div dangerouslySetInnerHTML={{__html: release.content}}/>
      </div>
      {(release.linkSpotify || release.linkBandcamp || release.linkAppleMusic) &&
          <div className={styles.stream}>
              <h2>Stream</h2>
              <BandcampButton release={release}/>
              <SpotifyButton release={release}/>
              <AppleMusicButton release={release}/>
          </div>
      }
    </div>
  )
}

const SpotifyButton = (props) => {
  if(props.release.linkSpotify){
      return <a href={props.release.linkSpotify} target="_blank" rel="noreferrar" className={styles.button} data-platform="spotify"><img src="/images/icon-spotify.png" alt="Spotify"/> <span>PLAY ON SPOTIFY</span></a>
  }
  return ''
}

const BandcampButton = (props) => {
  console.log(styles)
  if(props.release.linkBandcamp){
    return <a href={props.release.linkBandcamp} target="_blank" rel="noreferrar" className={styles.button} data-platform="bandcamp"><img src="/images/icon-bandcamp.png" alt="Bandcamp"/> <span>PLAY ON BANDCAMP</span></a>
  }
  return ''
}

const AppleMusicButton = (props) => {
  if(props.release.linkAppleMusic){
      return <a href={props.release.linkAppleMusic} target="_blank" rel="noreferrar" className={styles.button} data-platform="apple-music"><img src="/images/icon-apple-music.png" alt="AppleMusic"/> <span>PLAY ON APPLE MUSIC</span></a>
  }
  return ''
}

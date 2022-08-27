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
          <Links release={release}/>
          <div dangerouslySetInnerHTML={{__html: release.content}}/>
      </div>
    </div>
  )
}

const Links = ({release}) => {
  return (
    <div className='links'>
      {release.linkSpotify && <a href={release.linkSpotify} target="_blank" rel="noreferrar">Luister op spotify</a>}
      {release.linkBandcamp && <a href={release.linkBandcamp} target="_blank" rel="noreferrar">Luister op bandcamp</a>}
      {release.linkAppleMusic && <a href={release.linkAppleMusic} target="_blank" rel="noreferrar">Luister op apple music</a>}
    </div>
  )
}

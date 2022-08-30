import Cover from './Cover'
import styles from './Releases.module.scss'

export default function Releases({albums, singles}) {
    // Order albums by date
    albums.sort((a, b) => {
      return new Date(b.date.split('-').reverse().join('-')) - new Date(a.date.split('-').reverse().join('-'))
    })

    // Order singles by date from format "DD-MM-YYYY"
    singles.sort((a, b) => {
        return new Date(b.date.split('-').reverse().join('-')) - new Date(a.date.split('-').reverse().join('-'))
    })

    console.log(singles)

    return (
        <div id="releases" className={styles.container}>
            <h1>Muziek</h1>
            <div className={styles.content}>
                <h2>Albums</h2>
                {
                    <div className={styles.release_wrapper}>
                        {
                            albums.map(album =>
                              <Cover cover={album} type='albums' key={album.slug}/>
                            )
                        }
                    </div>
                }
            </div>
            <div className={styles.content}>
                <h2>Singles</h2>
                {
                    <div className={styles.release_wrapper}>
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

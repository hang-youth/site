import Placeholder from '../Placeholder'
import Show from './Show'
import styles from './Tour.module.scss'

export default function Tour({ tour }) {
    // Filter tour to only show dates that are in the future
    tour = tour.filter(show => new Date(show.date) > new Date())
    
    return (
        <div id="tour" className={styles.container}>
            {/* <div className={styles.background}/> */}
            <div className={styles.content}>
                <h2>Tour</h2>
                
                <ul className={styles.show_wrapper}>
                    {
                        tour.map(show => <Show key={show.slug} show={show}/>)
                    }
                </ul>
            </div>
        </div>
    )
}
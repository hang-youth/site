import Placeholder from '../Placeholder'
import Show from './Show'
import styles from './Tour.module.scss'

export default function Tour({ tour }) {
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
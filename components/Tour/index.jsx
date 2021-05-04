import Placeholder from '../Placeholder'
import styles from './Tour.module.scss'

export default function Tour(props) {
    return (
        <div id="tour" className={styles.container}>
            <Placeholder title="Kanker geile foto"/>
            <div className={styles.content}>
                <h2>Tour</h2>
                <h3>Aankomende data</h3>
                
                <a href="/">Tix &amp; more</a>
            </div>
        </div>
    )
}
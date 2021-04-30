import Placeholder from '../Placeholder'
import styles from './Tour.module.scss'

export default function Tour(props) {
    return (
        <div id="tour" className={styles.container}>
            <Placeholder title="Kanker geile foto"/>
            <div className={styles.content}>
                <h1>Tour</h1>
                <h2>Aankomende data</h2>
                
                <a href="/">Tix &amp; more</a>
            </div>
        </div>
    )
}
import Placeholder from '../Placeholder'
import Show from './Show'
import styles from './Tour.module.scss'

export default function Tour(props) {
    return (
        <div id="tour" className={styles.container}>
            <div className={styles.background}/>
            <div className={styles.content}>
                <h2>Tour</h2>
                
                <div className={styles.show_wrapper}>
                    <Show/>
                    <Show/>
                    <Show/>
                    <Show/>
                </div>
            </div>
        </div>
    )
}
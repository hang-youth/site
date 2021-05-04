import Placeholder from '../Placeholder'
import styles from './Releases.module.scss'

export default function Releases() {
    return (
        <div id="releases" className={styles.container}>
            <div className={styles.content}>
                <h2>Albums</h2>
            </div>
            <div className={styles.content}>
                <h2>Singles &amp; EP's</h2>
            </div>
        </div>
    )
}
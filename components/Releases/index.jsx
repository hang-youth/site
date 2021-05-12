import Placeholder from '../Placeholder'
import Albums from './Albums'
import styles from './Releases.module.scss'

export default function Releases() {
    return (
        <div id="releases" className={styles.container}>
            <div className={styles.content}>
                <Albums/>
                <h2>Albums</h2>
            </div>
        </div>
    )
}
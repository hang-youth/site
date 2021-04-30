import Placeholder from '../Placeholder'
import styles from './Shop.module.scss'

export default function Shop(props) {
    return (
        <div id="shop" className={styles.container}>
            <div className={styles.content}>
                <h1>Shop</h1>

            </div>
            <Placeholder title="Geile fash selfie"/>
        </div>
    )
}
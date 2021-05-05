import styles from './Show.module.scss'

export default function Show(props) {
    return (
        <div id="show" className={styles.container}>
            <div className={styles.date_wrapper}><small>MEI</small><span>10</span></div>
            <div className={styles.title}>Paradiso</div>
            {/* <div className={styles.button_wrapper}><a href="">TICKET</a></div> */}
        </div>
    )
}
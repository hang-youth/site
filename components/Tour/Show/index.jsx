import styles from './Show.module.scss'

export default function Show({show}) {
    const date = new Date(show.date)
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC']
    const month = months[date.getMonth()]

    return (
        <li id="show" className={styles.container}>
            <div className={styles.date_wrapper}><small>{month}</small><span>{date.getDate()}</span></div>
            <div className={styles.location_wrapper}>
                <div className={styles.place}>{show.place}</div>
                <div className={styles.name}>{show.name}</div>
            </div>
            {/* <div className={styles.button_wrapper}><a href="">TICKET</a></div> */}
        </li>
    )
}
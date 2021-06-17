import styles from './Show.module.scss'

export default function Show({show}) {
    const date = new Date(show.date)
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC']
    const month = months[date.getMonth()]

    const onClick = () => {
        if(show.linkTickets){
            const newWindow = window.open(show.linkTickets, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        }
    }
 
    return (
        <li id="show" className={`${styles.container} ${show.linkTickets?styles.hasLink:''}`} onClick={onClick}>
            <div className={styles.date_wrapper}><small>{month}</small><span>{date.getDate()}</span></div>
            <div className={styles.location_wrapper}>
                <div className={styles.place}>{show.place}</div>
                <div className={styles.name}>{show.name}</div>
            </div>
            {
                show.linkTickets && 
                <div className={styles.button_wrapper}>
                    <a href={show.linkTickets} target="_blank" rel="noreferrar">{show.soldout?'Soldout':'Tickets'}</a>
                </div>
            }
        </li>
    )
}
import styles from './Sidebar.module.scss'

export default function Sidebar(props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
              {props.children}
            </div>
        </div>
    )
}

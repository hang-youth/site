import styles from './Placeholder.module.scss'

export default function Placeholder(props) {
    return (
        <div className={styles.container}>
            <h2>{props.title}</h2>
        </div>
    )
}
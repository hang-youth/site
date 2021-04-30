import styles from './Placeholder.module.scss'

export default function Placeholder(props) {
    return (
        <div className={styles.container}>
            <h1>{props.title}</h1>
        </div>
    )
}
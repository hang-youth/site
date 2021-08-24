import styles from './Placeholder.module.scss'

export default function Placeholder(props) {
    return (
        <div className={[styles.container, props.className?props.className:''].join(' ')}>
            <h2>{props.title}</h2>
        </div>
    )
}

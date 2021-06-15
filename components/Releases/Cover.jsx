import styles from './Cover.module.scss'

export default function Cover({cover, setActive}) {
    
    return (
        <div key={cover.slug} className={styles.container} onClick={setActive}>
            <img src={cover.coverImage} alt={cover.title}/>
        </div>
    )
}
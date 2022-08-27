import Link from 'next/link'
import styles from './Cover.module.scss'

export default function Cover({cover, type}) {
    return (
      <Link href={`/${type}/${cover.slug}`}>
        <div className={styles.container}>
            <img src={cover.coverImage} alt={cover.title}/>
        </div>
      </Link>
    )
}

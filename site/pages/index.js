import BasePage from '@components/BasePage';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <BasePage title="Hang Youth" description='Punkband'>
      <div className={styles.container}>
        <h1>Hang Youth</h1>
        <div className={styles.image}>
          <img src="/images/home.png" alt="Hang Youth"/>
        </div>
      </div>
    </BasePage>
  )
}

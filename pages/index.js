import BasePage from '@components/BasePage';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <BasePage title="Hang Youth">
      <h1>Hang Youth</h1>
      <img className={styles.image} src="/images/home.png" alt="Hang Youth"/>
    </BasePage>
  )
}

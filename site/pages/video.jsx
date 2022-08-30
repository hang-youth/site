import BasePage from '../components/BasePage';

import styles from '../styles/Video.module.scss'

export default function Video({data}) {
  return (
    <BasePage title="Video - Hang Youth" description='Kunstzinnige video collectie. Potentiëel goude kalf materiaal.'>
      <h1>Video</h1>
      <ul className={styles.grid}>
        {data.items.map(({ id, snippet = {} }) => {
          const { title, thumbnails = {}, resourceId = {} } = snippet;
          const { medium } = thumbnails;
          return (
            <li key={id} className={styles.item}>
              <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" className="link">
                <p>
                  <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                </p>
                <h3>{ title }</h3>
              </a>
            </li>
          )
        })}
      </ul>
    </BasePage>
  );
}

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PL9QOCtUuEQBYAbjNIL0ZMY5SsuqpdUoBq&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

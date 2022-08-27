import { getAllContent } from '../lib/contentProvider'
import markdownToHtml from '../lib/markdownToHtml'

import BasePage from '../components/BasePage';
import Releases from '../components/Releases'

export default function Music({albums, singles}) {
  return (
    <BasePage title="Muziek - Hang Youth">
      <Releases albums={albums} singles={singles}/>
    </BasePage>
  );
}

export async function getStaticProps() {

  const albums = getAllContent('albums', ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic']).map(async (album) => {
    album.content = await markdownToHtml(album.content || '')
    return album
  })

  const singles = getAllContent('singles', ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic']).map(async (single) => {
    single.content = await markdownToHtml(single.content || '')
    return single
  })

  return {
      props: {
          albums: await Promise.all(albums),
          singles: await Promise.all(singles),
      },
  }
}

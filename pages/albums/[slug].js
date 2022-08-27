import { getAllContent, getContentBySlug } from '../../lib/contentProvider'
import markdownToHtml from '../../lib/markdownToHtml'

import BasePage from '../../components/BasePage';
import Release from '../../components/Release';

export default function Album({album}) {
  return (
    <BasePage title={`${album.title} - Hang Youth`}>
      <Release release={album}/>
    </BasePage>
  );
}

export async function getStaticPaths({ locales }) {
  const albums = await getAllContent('albums', ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic']).map(async (album) => {
    album.content = await markdownToHtml(album.content || '')
    return album
  })

  return {
      paths: albums.map((album) => `/albums/${album.slug}`),
      fallback: 'blocking',
  }
}

export async function getStaticProps({
  params
}) {
  const album = getContentBySlug('albums', params.slug, ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic'])
  album.content = await markdownToHtml(album.content || '')

  return {
      props: {
          album
      },
  }
}

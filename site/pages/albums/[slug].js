import { getAllContent, getContentBySlug } from '@lib/contentProvider'
import markdownToHtml from '@lib/markdownToHtml'

import BasePage from '../../components/BasePage';
import Release from '../../components/Release';

export default function Album({album}) {
  return (
    <BasePage title={`${album.title} - Hang Youth`} description="Een Hang Youth Single." meta={meta(album)}>
      <Release release={album}/>
    </BasePage>
  );
}

export async function getStaticPaths({ locales }) {
  const albums =  await Promise.all(getAllContent('albums', ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic']).map(async (album) => {
    album.content = await markdownToHtml(album.content || '')
    return album
  }))

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

export function meta(album) {
  return (
    <>
      <meta property="og:title" content={album.title} />
      <meta property="og:description" content={album.content.replace(/<[^>]+>/g, '')} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL + `/albums/${album.slug}`} />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_BASE_URL + album.coverImage} />
      <meta property="og:type" content="music.album" />
      <meta property="og:site_name" content="HANG YOUTH" />
    </>
  )
}

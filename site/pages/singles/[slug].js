import { getAllContent, getContentBySlug } from '@lib/contentProvider'
import markdownToHtml from '@lib/markdownToHtml'

import BasePage from '../../components/BasePage';
import Release from '@components/Release';

export default function Single({single}) {
  return (
    <BasePage title={`${single.title} - Hang Youth`} description="Een Hang Youth Single." meta={meta(single)}>
      <Release release={single}/>
    </BasePage>
  );
}

export async function getStaticPaths({ locales }) {
  const singles = await Promise.all(getAllContent('singles', ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic']).map(async (single) => {
    single.content = await markdownToHtml(single.content || '')
    return single
  }))

  return {
      paths: singles.map((single) => `/singles/${single.slug}`),
      fallback: 'blocking',
  }
}

export async function getStaticProps({
  params
}) {
  const single = getContentBySlug('singles', params.slug, ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic'])

  // Redirect to 404 if single is not found
  if(!single) {
    return {
      notFound: true
    }
  }

  single.content = await markdownToHtml(single.content || '')

  return {
      props: {
          single
      },
  }
}

export function meta(single) {
  return (
    <>
      <meta property="og:title" content={single.title} />
      <meta property="og:description" content={single.content.replace(/<[^>]+>/g, '')} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL + `/singles/${single.slug}`} />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_BASE_URL + single.coverImage} />
      <meta property="og:type" content="music.song" />
      <meta property="og:site_name" content="HANG YOUTH" />
    </>
  )
}

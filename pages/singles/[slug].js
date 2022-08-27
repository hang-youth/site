import { getAllContent, getContentBySlug } from '../../lib/contentProvider'
import markdownToHtml from '../../lib/markdownToHtml'

import BasePage from '../../components/BasePage';
import Release from '@components/Release';

export default function Single({single}) {
  return (
    <BasePage title={`${single.title} - Hang Youth`}>
      <Release release={single}/>
    </BasePage>
  );
}

export async function getStaticPaths({ locales }) {
  const singles = await getAllContent('singles', ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic']).map(async (single) => {
    single.content = await markdownToHtml(single.content || '')
    return single
  })

  return {
      paths: singles.map((single) => `/singles/${single.slug}`),
      fallback: 'blocking',
  }
}

export async function getStaticProps({
  params
}) {
  const single = getContentBySlug('singles', params.slug, ['slug', 'coverImage', 'title', 'content', 'linkBandcamp', 'linkSpotify', 'linkAppleMusic'])
  single.content = await markdownToHtml(single.content || '')

  return {
      props: {
          single
      },
  }
}

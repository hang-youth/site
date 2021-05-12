import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {getAllContent, getContentBySlug} from '../lib/contentProvider'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import Header from "../components/Header";
import Layout from "../components/ContentLayout";

export default function Post({doc}) {
    const router = useRouter()
    if (!router.isFallback && !doc?.slug) {
        return <ErrorPage statusCode={404}/>
    }
    return (
        <Layout>
            <Header/>
            {router.isFallback ? (
                <p>Loading…</p>
            ) : (
                <>
                    <Head>
                        <title>
                            {doc.title}
                        </title>
                    </Head>
                    <h1>{doc.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: doc.content}}/>
                </>
            )}
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const doc = getContentBySlug('pages', params.slug, [
        'title',
        'slug',
        'author',
        'content',
    ])
    const content = await markdownToHtml(doc.content || '')

    return {
        props: {
            doc: {
                ...doc,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllContent('pages', ['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
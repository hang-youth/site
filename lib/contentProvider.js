import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const contentDirectory = join(process.cwd(), '_content')

export function getContentSlugs() {
    return fs.readdirSync(contentDirectory)
}

export function getContentBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(contentDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllContent(fields = []) {
    const slugs = getContentSlugs()
    const content = slugs
        .map((slug) => getContentBySlug(slug, fields))
    return content
}
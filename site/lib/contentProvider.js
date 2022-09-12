import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const contentDirectory = join(process.cwd(), '_content')

export function getContentSlugs(folder) {
    return fs.readdirSync(join(contentDirectory, folder))
}

export function getContentBySlug(folder, slug, fields = []) {
    try {
      const realSlug = slug.replace(/\.md$/, '')
      const fullPath = join(contentDirectory, folder, `${realSlug}.md`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const items = {}

      // Ensure only the minimal needed data is exposed
      fields.forEach((field) => {
          if (field === 'slug') {
              items[field] = realSlug
          } else if (field === 'content') {
              items[field] = content
          } else if (field === 'date') {
              items[field] = data[field].toString()
          } else if (data[field]) {
              items[field] = data[field]
          }
      })

      return items
    } catch (e) {
      return null
    }
}

export function getAllContent(folder, fields = []) {
    const slugs = getContentSlugs(folder)
    const content = slugs
        .map((slug) => getContentBySlug(folder, slug, fields))
    return content
}

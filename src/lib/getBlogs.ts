import { blogs } from '@/data/blogs'
import { Blog } from '@/types/blog'

export function getBlogs(limit?: number): Blog[] {
  return limit ? blogs.slice(0, limit) : blogs
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug)
}

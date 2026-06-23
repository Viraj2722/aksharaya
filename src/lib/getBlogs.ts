import { Blog } from '@/types/blog'
import { getMediaUrl, stripHtml } from '@/lib/wp'

const WP_API = 'https://aksharaya.org/wp-json/wp/v2'

type WpPost = {
  id: number
  slug: string
  date: string
  featured_media: number
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  acf?: { is_featured?: boolean | number | string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string }>
    'wp:term'?: Array<Array<{ name?: string }>>
  }
}

async function resolvePostImage(wp: WpPost): Promise<string> {
  // Try _embed first (fast — no extra HTTP round-trip)
  const embedded = wp._embedded?.['wp:featuredmedia']?.[0]?.source_url
  if (embedded) return embedded
  // Safety net: if featured_media is non-zero but _embed missed it, fetch directly
  if (wp.featured_media) return getMediaUrl(wp.featured_media)
  return '/placeholder.jpg'
}

async function fetchAllBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(
      `${WP_API}/posts?_embed&status=publish&per_page=100`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) {
      console.error(`[getBlogs] HTTP ${res.status}`)
      return []
    }
    const data: WpPost[] = await res.json()

    return Promise.all(
      data.map(async (wp) => {
        const coverImage = await resolvePostImage(wp)
        const rawExcerpt = stripHtml(wp.excerpt?.rendered ?? '')
        const excerpt = rawExcerpt.length > 160 ? rawExcerpt.slice(0, 157) + '…' : rawExcerpt

        return {
          id: String(wp.id),
          title: stripHtml(wp.title?.rendered ?? ''),
          slug: wp.slug,
          excerpt,
          category: wp._embedded?.['wp:term']?.[0]?.[0]?.name ?? 'Uncategorized',
          date: new Date(wp.date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
          coverImage,
          isFeatured: Boolean(wp.acf?.is_featured),
          content: wp.content?.rendered ?? '',
        } satisfies Blog
      })
    )
  } catch (err) {
    console.error('[getBlogs] fetchAllBlogs failed:', err)
    return []
  }
}

export async function getBlogs(limit?: number): Promise<Blog[]> {
  const blogs = await fetchAllBlogs()
  return limit ? blogs.slice(0, limit) : blogs
}

export async function getFeaturedBlogs(): Promise<Blog[]> {
  const blogs = await fetchAllBlogs()
  return blogs.filter((b) => b.isFeatured).slice(0, 3)
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  const blogs = await fetchAllBlogs()
  return blogs.find((b) => b.slug === slug)
}

export async function getHomepageBlogs() {
  const allBlogs = await fetchAllBlogs()
  
  const featured = allBlogs.filter((b) => b.isFeatured)
  const nonFeatured = allBlogs.filter((b) => !b.isFeatured)
  
  // Hero takes up to 5 blogs total: all featured first, then padded with newest non-featured
  const heroBlogs = [...featured, ...nonFeatured].slice(0, 5)
  
  // How many non-featured blogs were used in the hero?
  const nonFeaturedUsedInHero = Math.max(0, 5 - featured.length)
  
  // Insights section takes the next 5 non-featured blogs
  const insightsBlogs = nonFeatured.slice(nonFeaturedUsedInHero, nonFeaturedUsedInHero + 5)
  
  return { heroBlogs, insightsBlogs }
}

import { GalleryItem } from '@/types/gallery'
import { getMediaUrl, stripHtml } from '@/lib/wp'

const WP_API = 'https://aksharaya.org/wp-json/wp/v2'

type WpGallery = {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  acf?: {
    gallery_image?: number | false | null
    display_order?: number | string
    album?: string
    is_featured?: boolean | number | string
  }
}

async function fetchAllGallery(): Promise<GalleryItem[]> {
  try {
    const res = await fetch(
      `${WP_API}/gallery?status=publish&per_page=100`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) {
      console.error(`[getGallery] HTTP ${res.status}`)
      return []
    }
    const data: WpGallery[] = await res.json()

    const items = await Promise.all(
      data.map(async (wp) => {
        // gallery_image is an ACF numeric media ID — always resolve via media endpoint
        const image = await getMediaUrl(wp.acf?.gallery_image)
        
        // Use default WP title
        const title = stripHtml(wp.title?.rendered ?? '')

        return {
          id: String(wp.id),
          title,
          image,
          alt: title,
          description: stripHtml(wp.content?.rendered ?? ''),
          album: wp.acf?.album ?? '',
          isFeatured: Boolean(wp.acf?.is_featured),
          displayOrder: wp.acf?.display_order ? Number(wp.acf.display_order) : 999
        } as GalleryItem & { displayOrder: number }
      })
    )

    // Sort by displayOrder ascending
    return items.sort((a, b) => a.displayOrder - b.displayOrder)
  } catch (err) {
    console.error('[getGallery] fetchAllGallery failed:', err)
    return []
  }
}

export async function getGallery(limit?: number): Promise<GalleryItem[]> {
  const items = await fetchAllGallery()
  return limit ? items.slice(0, limit) : items
}

export async function getFeaturedGallery(): Promise<GalleryItem[]> {
  const items = await fetchAllGallery()
  return items.filter((i) => i.isFeatured).slice(0, 6)
}

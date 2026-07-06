import { GalleryItem } from '@/types/gallery'
import { getMediaUrl, stripHtml } from '@/lib/wp'

const WP_API = 'https://cms.aksharaya.org/wp-json/wp/v2'

// ── Legacy Gallery Page (old WordPress go-gallery plugin) ─────────────────
// The old site had a Gallery page (page_id=84) with many images embedded
// directly in the page content via the go-gallery plugin. We extract all
// image URLs + captions from that HTML so they continue to appear.

function parseLegacyGalleryPage(html: string): GalleryItem[] {
  const items: GalleryItem[] = []

  // Each item looks like:
  //   <li data-source="https://cms.aksharaya.org/.../image.jpg" class="go-gallery-item category-typoday">
  //     ...
  //     <h4>Typoday 2011</h4>
  //   </li>
  const liRegex = /<li[^>]+data-source="([^"]+)"[^>]*class="[^"]*go-gallery-item[^"]*"[^>]*>([\s\S]*?)<\/li>/gi

  let match: RegExpExecArray | null
  let index = 0
  while ((match = liRegex.exec(html)) !== null) {
    const imageUrl = match[1]
    const innerHtml = match[2]

    // Extract category from class e.g. "category-typoday" → "typoday"
    const catMatch = /category-([a-z0-9_-]+)/.exec(match[0])
    const album = catMatch ? catMatch[1] : ''

    // Extract title from <h4>...</h4>
    const titleMatch = /<h4>([^<]*)<\/h4>/.exec(innerHtml)
    const title = titleMatch ? titleMatch[1].trim() : ''

    if (!imageUrl) continue

    items.push({
      id: `legacy-${index++}`,
      title,
      image: imageUrl,
      alt: title || 'Gallery image',
      description: '',
      album,
      isFeatured: false,
    })
  }

  return items
}

async function fetchLegacyGalleryItems(): Promise<GalleryItem[]> {
  try {
    const res = await fetch(`${WP_API}/pages?slug=gallery`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const pages = await res.json()
    if (!pages || pages.length === 0) return []

    const content: string = pages[0]?.content?.rendered ?? ''
    return parseLegacyGalleryPage(content)
  } catch (err) {
    console.error('[getGallery] fetchLegacyGalleryItems failed:', err)
    return []
  }
}

// ── New CMS Gallery CPT ───────────────────────────────────────────────────
// New gallery images are added via the custom post type in the CMS.

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

async function fetchCptGalleryItems(): Promise<(GalleryItem & { displayOrder: number })[]> {
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
        const image = await getMediaUrl(wp.acf?.gallery_image)
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

    return items.sort((a, b) => a.displayOrder - b.displayOrder)
  } catch (err) {
    console.error('[getGallery] fetchCptGalleryItems failed:', err)
    return []
  }
}

// ── Public API ────────────────────────────────────────────────────────────

async function fetchAllGallery(): Promise<GalleryItem[]> {
  // Fetch both sources in parallel
  const [legacyItems, cptItems] = await Promise.all([
    fetchLegacyGalleryItems(),
    fetchCptGalleryItems(),
  ])

  // Build a set of URLs already present in CPT items to avoid duplicates
  const cptUrls = new Set(cptItems.map((i) => i.image))

  // Legacy items that are NOT already in CPT (dedup by image URL)
  const uniqueLegacy = legacyItems.filter((i) => !cptUrls.has(i.image))

  // New CMS items first (newest), legacy images appended at the end (historical)
  return [...cptItems, ...uniqueLegacy]
}

export async function getGallery(limit?: number): Promise<GalleryItem[]> {
  const items = await fetchAllGallery()
  return limit ? items.slice(0, limit) : items
}

export async function getFeaturedGallery(): Promise<GalleryItem[]> {
  const items = await fetchAllGallery()
  return items.filter((i) => i.isFeatured).slice(0, 6)
}


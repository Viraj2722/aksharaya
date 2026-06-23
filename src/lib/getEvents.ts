import { Event } from '@/types/event'
import { getMediaUrl, stripHtml } from '@/lib/wp'

const WP_API = 'https://aksharaya.org/wp-json/wp/v2'

type WpEvent = {
  id: number
  slug: string
  date: string
  featured_media: number
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  acf?: {
    is_featured?: boolean | number | string
    event_date?: string       // ACF date picker format: YYYYMMDD
    event_tag?: string        // New Text field for tagging
    event_type?: string       // Legacy select field
    event_location?: string
    event_image?: number | false | null
  }
}

/** Parse ACF date picker (YYYYMMDD) → "MMM DD, YYYY". Falls back to wp.date. */
function parseEventDate(acfDate: string | undefined, wpDate: string): string {
  if (acfDate && /^\d{8}$/.test(acfDate)) {
    const y = acfDate.slice(0, 4)
    const m = acfDate.slice(4, 6)
    const d = acfDate.slice(6, 8)
    return new Date(`${y}-${m}-${d}`).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
  }
  return new Date(wpDate).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

async function fetchAllEvents(): Promise<Event[]> {
  try {
    const res = await fetch(
      `${WP_API}/events?status=publish&per_page=100`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) {
      console.error(`[getEvents] HTTP ${res.status}`)
      return []
    }
    const data: WpEvent[] = await res.json()

    // Sort newest first using ACF event_date (YYYYMMDD) or fallback to WP publish date
    data.sort((a, b) => {
      const dateA = (a.acf?.event_date && /^\\d{8}$/.test(a.acf.event_date)) 
        ? a.acf.event_date 
        : a.date.replace(/[-T:Z.]/g, '').substring(0, 8)
      const dateB = (b.acf?.event_date && /^\\d{8}$/.test(b.acf.event_date)) 
        ? b.acf.event_date 
        : b.date.replace(/[-T:Z.]/g, '').substring(0, 8)
      return dateB.localeCompare(dateA)
    })

    return Promise.all(
      data.map(async (wp) => {
        // featured_media is a real ID on events — always resolve via media endpoint (fallback to ACF event_image)
        const coverImage = await getMediaUrl(wp.featured_media || wp.acf?.event_image)

        const rawExcerpt = stripHtml(wp.excerpt?.rendered ?? '')
        let description = rawExcerpt.length > 160 ? rawExcerpt.slice(0, 157) + '…' : rawExcerpt
        // If excerpt is empty, fall back to stripped content
        if (!description) {
          const fromContent = stripHtml(wp.content?.rendered ?? '')
          description = fromContent.length > 160 ? fromContent.slice(0, 157) + '…' : fromContent
        }

        return {
          id: String(wp.id),
          title: stripHtml(wp.title?.rendered ?? ''),
          slug: wp.slug,
          description,
          type: wp.acf?.event_tag ?? wp.acf?.event_type ?? 'EVENT',
          date: parseEventDate(wp.acf?.event_date, wp.date),
          location: wp.acf?.event_location ?? '',
          coverImage,
          isFeatured: Boolean(wp.acf?.is_featured),
          content: wp.content?.rendered ?? '',
        } satisfies Event
      })
    )
  } catch (err) {
    console.error('[getEvents] fetchAllEvents failed:', err)
    return []
  }
}

export async function getEvents(limit?: number): Promise<Event[]> {
  const events = await fetchAllEvents()
  return limit ? events.slice(0, limit) : events
}

export async function getHomepageEvents() {
  const allEvents = await fetchAllEvents()
  
  const featured = allEvents.filter((e) => e.isFeatured)
  const nonFeatured = allEvents.filter((e) => !e.isFeatured)
  
  // Hero takes up to 5 events total: all featured first, then padded with newest non-featured
  const heroEvents = [...featured, ...nonFeatured].slice(0, 5)
  
  // How many non-featured events were used in the hero?
  const nonFeaturedUsedInHero = Math.max(0, 5 - featured.length)
  
  // Previous events takes the remaining non-featured events (up to 10)
  const previousEvents = nonFeatured.slice(nonFeaturedUsedInHero, nonFeaturedUsedInHero + 10)
  
  return { heroEvents, previousEvents }
}
export async function getEventBySlug(slug: string): Promise<Event | undefined> {
  const events = await fetchAllEvents()
  return events.find((e) => e.slug === slug)
}

export async function getHomepageUnified() {
  const allEvents = await fetchAllEvents()
  
  const featured = allEvents.filter((e) => e.isFeatured)
  const nonFeatured = allEvents.filter((e) => !e.isFeatured)
  
  // 1. Hero takes up to 5 events total: all featured first, then padded with newest non-featured
  const heroEvents = [...featured, ...nonFeatured].slice(0, 5)
  
  // How many non-featured events were used in the hero?
  const nonFeaturedUsedInHero = Math.max(0, 5 - featured.length)
  
  // 2. Insights section takes the next 5 non-featured events
  const insightsEvents = nonFeatured.slice(nonFeaturedUsedInHero, nonFeaturedUsedInHero + 5)
  
  // 3. Previous Events takes the next 10 non-featured events
  const previousEvents = nonFeatured.slice(nonFeaturedUsedInHero + 5, nonFeaturedUsedInHero + 15)
  
  return { heroEvents, insightsEvents, previousEvents }
}

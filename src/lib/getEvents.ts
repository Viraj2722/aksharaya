import { Event } from '@/types/event'
import { getMediaUrl, stripHtml } from '@/lib/wp'

const WP_API = 'https://cms.aksharaya.org/wp-json/wp/v2'

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

/**
 * Real event dates (YYYYMMDD), keyed by slug — sourced from the original site.
 * WordPress lost these on migration (most posts now carry the import date), and
 * the ACF `event_date` field is empty (or wrong) for these entries, so this map
 * is the authoritative date. New events not listed here fall back to ACF, then
 * the WordPress publish date. Once the client fills ACF `event_date` correctly,
 * removing a slug from this map lets that value take over.
 */
const EVENT_DATES: Record<string, string> = {
  'typography-day-2021': '20210827',
  'typography-day-2019': '20190302',
  'typography-day-2017': '20180301',
  'test-event-1': '20160715',
  'aksharaya-installation-ay-typoday-2016': '20160307',
  'aksharsanvad-an-interview-with-sunil-khandbahale': '20120427',
  'aksharaya-at-typography-day-2012-2': '20120302',
  'aksharsanvad-a-talk-by-prof-y-d-pitkar-2': '20120224',
  'aksharsanvad-a-talk-by-shreenand-bapat': '20111219',
  'a-talk-by-katharina-pieper': '20111102',
  'aksharsanvad-a-talk-by-hanif-kureshi-and-sarang-kulkarni': '20111021',
  'aksharsanvad-a-talk-by-dr-p-v-radhakrishnan': '20110826',
  'aksharsanvad-a-talk-by-g-v-sreekumar': '20110624',
  'aksharsanvad-a-talk-by-prof-vinay-saynekar': '20110429',
  'aksharaya-at-typography-day-2011': '20110303',
  'aksharsanvad-a-talk-by-mahindra-patel': '20110225',
  'aksharsanvad-an-interview-with-kamal-shedge': '20101224',
  'aksharsanvad-a-talk-by-mukund-gokhale': '20101029',
  'workshop-camp-2010': '20101001',
  'aksharsanvad-a-talk-by-girish-dalvi': '20100827',
  'aksharaya-at-typoday-2010': '20100227',
  'aksharanjali-2009': '20090222',
  'camp-2008': '20080518',
  'camp-2006-calendar-2007': '20060701',
}

/** Resolve an event's date to YYYYMMDD: known map → ACF field → WP publish date. */
function resolveEventYmd(slug: string, acfDate: string | undefined, wpDate: string): string {
  if (EVENT_DATES[slug]) return EVENT_DATES[slug]
  if (acfDate && /^\d{8}$/.test(acfDate)) return acfDate
  return wpDate.replace(/[-T:Z.]/g, '').substring(0, 8)
}

/** Format a YYYYMMDD string → "MMM DD, YYYY". */
function formatYmd(ymd: string): string {
  const y = ymd.slice(0, 4)
  const m = ymd.slice(4, 6)
  const d = ymd.slice(6, 8)
  return new Date(`${y}-${m}-${d}`).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

async function fetchAllEvents(): Promise<Event[]> {
  try {
    const res = await fetch(
      `${WP_API}/events?status=publish&per_page=100`,
      { next: { revalidate: 0 } }
    )
    if (!res.ok) {
      console.error(`[getEvents] HTTP ${res.status}`)
      return []
    }
    const data: WpEvent[] = await res.json()

    // Sort newest first by the resolved event date (known map → ACF → publish date)
    data.sort((a, b) => {
      const dateA = resolveEventYmd(a.slug, a.acf?.event_date, a.date)
      const dateB = resolveEventYmd(b.slug, b.acf?.event_date, b.date)
      return dateB.localeCompare(dateA)
    })

    return Promise.all(
      data.map(async (wp) => {
        // featured_media is a real ID on events — always resolve via media endpoint (fallback to ACF event_image)
        const coverImage = await getMediaUrl(wp.featured_media || wp.acf?.event_image)

        const rawExcerpt = stripHtml(wp.excerpt?.rendered ?? '')
        let description = rawExcerpt.length > 400 ? rawExcerpt.slice(0, 397) + '…' : rawExcerpt
        // If excerpt is empty, fall back to stripped content
        if (!description) {
          const fromContent = stripHtml(wp.content?.rendered ?? '')
          description = fromContent.length > 400 ? fromContent.slice(0, 397) + '…' : fromContent
        }

        return {
          id: String(wp.id),
          title: stripHtml(wp.title?.rendered ?? ''),
          slug: wp.slug,
          description,
          type: wp.acf?.event_tag ?? wp.acf?.event_type ?? 'EVENT',
          date: formatYmd(resolveEventYmd(wp.slug, wp.acf?.event_date, wp.date)),
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
  // Events are already sorted newest-first by fetchAllEvents().
  const allEvents = await fetchAllEvents()

  // The hero carousel is now static images, so no events are reserved for it —
  // every event is shown across the two homepage sections.
  // 1. Insights & Writings: the 5 most recent events (as cards)
  const insightsEvents = allEvents.slice(0, 5)

  // 2. Previous Events: everything else (full list, like the old site)
  const previousEvents = allEvents.slice(5)

  return { heroEvents: allEvents.slice(0, 5), insightsEvents, previousEvents }
}

const WP_API = 'https://aksharaya.org/wp-json/wp/v2'

/**
 * Fetch the source_url for a WordPress media attachment by its numeric ID.
 * Returns '/placeholder.jpg' immediately if mediaId is falsy, 0, or false.
 * Wraps the fetch in try/catch and never throws.
 */
export async function getMediaUrl(
  mediaId: number | false | null | undefined
): Promise<string> {
  if (!mediaId) return '/placeholder.jpg'

  try {
    const res = await fetch(`${WP_API}/media/${mediaId}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return '/placeholder.jpg'
    const data = await res.json()
    return (data.source_url as string) ?? '/placeholder.jpg'
  } catch (err) {
    console.error(`[wp] getMediaUrl(${mediaId}) failed:`, err)
    return '/placeholder.jpg'
  }
}

/** Map of common HTML entities to their character equivalents */
const HTML_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#039;': "'",
  '&apos;': "'",
  '&nbsp;': ' ',
  '&ndash;': '–',
  '&mdash;': '—',
  '&lsquo;': '\u2018',
  '&rsquo;': '\u2019',
  '&ldquo;': '\u201C',
  '&rdquo;': '\u201D',
  '&hellip;': '…',
}

/**
 * Strip HTML tags and decode HTML entities from a string.
 * For use on title/excerpt fields only — NOT on content.rendered.
 */
export function stripHtml(html: string): string {
  // 1. Strip tags
  let text = html.replace(/<[^>]*>/g, '')
  // 2. Decode named entities
  text = text.replace(/&[a-zA-Z]+;/g, (entity) => HTML_ENTITIES[entity] ?? entity)
  // 3. Decode numeric entities like &#8211; or &#x2013;
  text = text.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
  text = text.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
  // 4. Strip stray leading/trailing backslashes (WordPress CMS data artefact)
  text = text.replace(/^\\+/, '').replace(/\\+$/, '')
  return text.trim()
}

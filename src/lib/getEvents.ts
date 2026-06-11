import { events } from '@/data/events'
import { Event } from '@/types/event'

export function getEvents(limit?: number): Event[] {
  return limit ? events.slice(0, limit) : events
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug)
}

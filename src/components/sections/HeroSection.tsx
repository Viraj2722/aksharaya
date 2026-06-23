import { getHomepageUnified } from '@/lib/getEvents'
import { HeroCarousel } from './HeroCarousel'

export async function HeroSection() {
  const { heroEvents } = await getHomepageUnified()

  const slides = heroEvents.map((event) => ({
    id: event.id,
    image: event.coverImage,
    title: event.title,
    description: event.description,
    altText: event.title,
    link: `/events/${event.slug}`,
  }))

  return <HeroCarousel slides={slides} />
}

import { HomeData } from '@/types/common'

export const homeData: HomeData = {
  hero: {
    heading: 'Exploring Indian Typography, Scripts & Calligraphy',
    subheading:
      'Aksharaya is a space where Indian scripts are studied, practiced, and reinterpreted — through research, workshops, and visual culture.',
    ctaLabel: 'Discover Aksharaya',
    ctaHref: '/about',
  },
  about: {
    heading: 'About Aksharaya',
    body: 'Rooted in tradition and driven by curiosity, Aksharaya is a space where Indian scripts are studied, practiced, and reinterpreted. From calligraphy workshops to typographic explorations, we create experiences that connect people with the living heritage of Indian writing systems. Our work spans research, education, and artistic practice — bridging the ancient and the contemporary.',
    ctaLabel: 'Learn More',
    ctaHref: '/about',
  },
  footer: {
    description:
      'Aksharaya is dedicated to the study, practice, and reinterpretation of Indian scripts and typography. We bridge calligraphic tradition with contemporary design.',
    navLinks: [
      { label: 'About us', href: '/about' },
      { label: 'Events', href: '/events' },
      { label: 'Team', href: '/team' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Products', href: '/products' },
      { label: 'Contact us', href: '/contact' },
    ],
    socialLinks: [
      { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
      { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
      { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
      { label: 'Pinterest', href: 'https://pinterest.com', icon: 'pinterest' },
    ],
    copyright: 'Aksharaya © 2016. Connect with us on Facebook and Twitter',
  },
}

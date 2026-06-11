export interface NavLink {
  label: string
  href: string
}

export interface HeroData {
  heading: string
  subheading: string
  ctaLabel: string
  ctaHref: string
}

export interface AboutPreviewData {
  heading: string
  body: string
  ctaLabel: string
  ctaHref: string
}

export interface FooterData {
  description: string
  navLinks: NavLink[]
  socialLinks: SocialLink[]
  copyright: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'facebook' | 'twitter' | 'instagram' | 'pinterest'
}

export interface HomeData {
  hero: HeroData
  about: AboutPreviewData
  footer: FooterData
}

import type { Metadata } from 'next'
import { Mukta } from 'next/font/google'
import './globals.css'

const mukta = Mukta({
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-mukta',
})

export const metadata: Metadata = {
  title: 'Aksharaya - Indian Scripts & Typography',
  description:
    'Aksharaya is a space where Indian scripts are studied, practiced, and reinterpreted — through research, workshops, and visual culture.',
  metadataBase: new URL('https://aksharaya.org'),
  openGraph: {
    title: 'Aksharaya - Indian Scripts & Typography',
    description:
      'Aksharaya is a space where Indian scripts are studied, practiced, and reinterpreted.',
    url: 'https://aksharaya.org',
    siteName: 'Aksharaya',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aksharaya - Indian Scripts & Typography',
    description:
      'Aksharaya is a space where Indian scripts are studied, practiced, and reinterpreted.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${mukta.variable} h-full`} data-scroll-behavior="smooth">
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: 'var(--font-mukta), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}

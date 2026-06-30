'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { NavLink } from '@/types/common'

const navLinks: NavLink[] = [
  { label: 'About us', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Products', href: '/products' },
  { label: 'Contact us', href: '/contact' },
]

const languages = [
  { code: 'en', label: 'English' },
  { code: 'mr', label: 'मराठी' },
]

export function Navbar() {
  const [activeLang, setActiveLang] = useState('en')
  const [langOpen, setLangOpen] = useState(false)
  const { isOpen, toggle, close } = useMobileMenu()

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('#lang-switcher-btn') && !target.closest('#lang-dropdown')) {
        setLangOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <header
        className="relative z-50 bg-white border-b"
        style={{ borderColor: '#e8e8e8' }}
      >
        <style>{`
          @media (min-width: 1024px) {
            .navbar-container { padding-left: 156px; padding-right: 140px; }
          }
          @media (min-width: 1280px) {
            .navbar-container { padding-left: 156px; padding-right: 140px; }
          }
        `}</style>
        <div className="w-full px-4 md:px-8 navbar-container">
          <nav
            className="flex items-center justify-between"
            style={{ height: '72px' }}
            aria-label="Main navigation"
          >
            <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Aksharaya home">
              <Image
                src="/logo-with-text.svg"
                alt="Aksharaya — Letter Conscious People"
                width={500}
                height={96}
                priority
                className="hidden md:block h-[72px] w-auto object-contain"
                style={{ width: 'auto' }}
              />
              <Image
                src="/single-logo.svg"
                alt="Aksharaya"
                width={160}
                height={60}
                priority
                className="block md:hidden h-12 w-auto object-contain"
                style={{ width: 'auto' }}
              />
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-7" style={{ marginRight: '30px' }} role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium transition-colors duration-150 hover:text-black"
                    style={{ color: '#444444' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Language dropdown */}
              <li className="relative group">
                <button
                  id="lang-switcher-btn"
                  className="flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-150 group-hover:text-black"
                  style={{ color: '#444444' }}
                  aria-label="Select language"
                  aria-haspopup="listbox"
                >
                  Languages
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className="block transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div
                  className="absolute right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out"
                  style={{ top: '100%', paddingTop: '20px' }}
                >
                  <div
                    id="lang-dropdown"
                    className="bg-white shadow-lg border transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out"
                    style={{
                      width: '130px',
                      borderRadius: '16px',
                      borderColor: '#e8e8e8',
                      padding: '8px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px'
                    }}
                  role="listbox"
                  aria-label="Select language"
                >
                  {[
                    { code: 'mr', label: 'मराठी' },
                    { code: 'en', label: 'English' },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      role="option"
                      aria-selected={activeLang === lang.code}
                      onClick={() => setActiveLang(lang.code)}
                      className="w-full text-left transition-colors duration-100 hover:bg-gray-50"
                      style={{
                        padding: '6px 8px',
                        borderRadius: '8px',
                        fontSize: '17px',
                        color: activeLang === lang.code ? '#111111' : '#666666',
                        fontWeight: activeLang === lang.code ? '600' : '500',
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                  </div>
                </div>
              </li>
            </ul>

            {/* Hamburger (mobile) */}
            <button
              id="mobile-menu-btn"
              onClick={toggle}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              style={{ marginRight: '12px' }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span
                className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer (now a pure dropdown under the header) */}
      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 bg-white z-40 lg:hidden flex flex-col shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
        style={{ top: '72px' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="px-5 pb-8 pt-8" aria-label="Mobile links">
          <ul className="flex flex-col gap-0" role="list">
            <li>
              <Link href="/about" onClick={close} className="block text-[17px] font-medium text-[#111111] hover:text-black transition-colors" style={{ padding: '15px 12px', borderBottom: '1px solid #f0f0f0' }}>
                About us
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={close} className="block text-[17px] font-medium text-[#111111] hover:text-black transition-colors" style={{ padding: '15px 12px', borderBottom: '1px solid #f0f0f0' }}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={close} className="block text-[17px] font-medium text-[#111111] hover:text-black transition-colors" style={{ padding: '15px 12px', borderBottom: '1px solid #f0f0f0' }}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/events" onClick={close} className="block text-[17px] font-medium text-[#111111] hover:text-black transition-colors" style={{ padding: '15px 12px', borderBottom: '1px solid #f0f0f0' }}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={close} className="block text-[17px] font-medium text-[#111111] hover:text-black transition-colors" style={{ padding: '15px 12px', borderBottom: '1px solid #f0f0f0' }}>
                Team
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={close} className="block text-[17px] font-medium text-[#111111] hover:text-black transition-colors" style={{ padding: '15px 12px', borderBottom: '1px solid #f0f0f0' }}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

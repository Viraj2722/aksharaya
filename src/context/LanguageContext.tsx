'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'en' | 'mr'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // Restore saved preference on the client (server always renders English first)
  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'mr') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* ignore storage errors */
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

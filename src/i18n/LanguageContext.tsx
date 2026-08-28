import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'ar'

interface LangContextValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LangContextValue | null>(null)

const STORAGE_KEY = 'kl-lang'

function readInitial(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ar' || saved === 'fr') return saved
  } catch {
    /* localStorage indisponible (mode privé, etc.) */
  }
  return 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitial)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang, dir])

  const setLang = (next: Lang) => setLangState(next)
  const toggle = () => setLangState((prev) => (prev === 'fr' ? 'ar' : 'fr'))

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang doit être utilisé dans un LanguageProvider')
  return ctx
}

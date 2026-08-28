import { useState, useEffect, useCallback } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations, detectLang, applyLang, supportedLangs } from '../i18n'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => detectLang())

  useEffect(() => {
    applyLang(lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'es' : 'en'
      applyLang(next)
      return next
    })
  }, [])

  const setLanguage = useCallback((next) => {
    if (!supportedLangs.includes(next)) return
    setLang(next)
    applyLang(next)
  }, [])

  const t = translations[lang] || translations.en

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLanguage, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

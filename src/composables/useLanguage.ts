import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/types'

const STORAGE_KEY = 'qwer-locale'
const SUPPORTED: Locale[] = ['en', 'ko', 'ms', 'ja']

export function useLanguage() {
  const { locale, t } = useI18n()

  const currentLocale = computed<Locale>(() => locale.value as Locale)

  function setLocale(lang: Locale) {
    if (!SUPPORTED.includes(lang)) return
    locale.value = lang
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }

  function cycleLocale() {
    const idx = SUPPORTED.indexOf(currentLocale.value)
    const next = SUPPORTED[(idx + 1) % SUPPORTED.length]
    setLocale(next)
  }

  /** Resolve a LocalizedString to current locale */
  function localized<T extends Record<Locale, string>>(obj: T): string {
    return obj[currentLocale.value] ?? obj.en
  }

  return {
    currentLocale,
    setLocale,
    cycleLocale,
    localized,
    t,
    supportedLocales: SUPPORTED,
  }
}

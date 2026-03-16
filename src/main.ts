import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import '@/styles/globals.css'

import en from '@/locales/en.json'
import ko from '@/locales/ko.json'
import ms from '@/locales/ms.json'
import ja from '@/locales/ja.json'

const supportedLocales = ['en', 'ko', 'ms', 'ja'] as const
type SupportedLocale = typeof supportedLocales[number]

const savedLocale = localStorage.getItem('qwer-locale') as SupportedLocale | null
const browserLang = navigator.language.slice(0, 2) as SupportedLocale

const defaultLocale: SupportedLocale =
  (savedLocale && supportedLocales.includes(savedLocale))
    ? savedLocale
    : supportedLocales.includes(browserLang)
      ? browserLang
      : 'en'

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: { en, ko, ms, ja },
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')

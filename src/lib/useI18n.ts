import { createI18n } from 'vue-i18n'
import vi from '@/locales/vi'
import en from '@/locales/en'
import { useLanguageStore } from '@/stores/language'

export const SUPPORT_LANGUAGES = ['vi', 'en'] as const
export type SupportLanguage = typeof SUPPORT_LANGUAGES[number]

export const messages = {
  vi,
  en,
}

export const i18n = createI18n({
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'vi',
  messages,
  globalInjection: true, // allow use $t in template
})

export function changeLanguage(lang: SupportLanguage) {
  const languageStore = useLanguageStore()

  languageStore.setLanguage(lang)
  i18n.global.locale.value = lang
}

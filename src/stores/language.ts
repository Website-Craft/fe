import { defineStore } from 'pinia'

export type Language = 'vi' | 'en'

const STORAGE_KEY = 'app_language'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: (localStorage.getItem(STORAGE_KEY) as Language) || 'vi',
  }),

  actions: {
    setLanguage(lang: Language) {
      this.language = lang
      localStorage.setItem(STORAGE_KEY, lang)
    },
  },
})

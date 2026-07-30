import { createApp } from 'vue'
import '@/assets/styles.css'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { i18n } from '@/lib/useI18n'
import { useLanguageStore } from '@/stores/language'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(i18n)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

// Sync language from store → i18n when app start
const languageStore = useLanguageStore()
i18n.global.locale.value = languageStore.language

app.use(router).mount('#app')

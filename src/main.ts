import { createApp } from 'vue'
import '@/assets/styles.css'
import App from '@/App.vue'
import router from '@/router'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(router).mount('#app')

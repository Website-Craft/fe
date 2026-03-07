<template>
  <header
    class="bg-[#FFFDF7]/95 border-b border-[rgba(200,146,42,0.15)] shadow-[0_4px_24px_rgba(92,58,30,0.08)] backdrop-blur-md py-4 px-4 sm:px-6 relative z-50"
    style="font-family: 'Inter', sans-serif"
  >
    <div class="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <img :src="LogoHeader" class="w-42 hidden sm:block" />
        <img :src="LogoHeader" class="w-36 sm:hidden" />
      </router-link>

      <!-- Desktop Menu -->
      <nav class="hidden lg:block">
        <ul class="flex items-center gap-2">
          <li v-for="item in menuItems" :key="item.label" class="relative group">
            <!-- Level 1 -->
            <router-link
              v-if="item.route"
              :to="item.route"
              class="flex items-center gap-2 px-3 py-2 rounded-md font-medium text-[#3A2210] hover:text-[#C8922A] hover:bg-amber-50/60 transition-all duration-200"
            >
              <i :class="item.icon" />
              <span>{{ $t(item.label) }}</span>
            </router-link>

            <button
              v-else
              class="flex items-center gap-2 px-3 py-2 rounded-md font-medium text-[#3A2210] hover:text-[#C8922A] hover:bg-amber-50/60 transition-all duration-200"
            >
              <i :class="item.icon" />
              <span>{{ $t(item.label) }}</span>
              <i class="pi pi-chevron-down text-xs ml-1" />
            </button>

            <!-- Submenu -->
            <!-- <ul
              v-if="item.items"
              class="absolute left-0 top-full mt-2 min-w-[200px] bg-[#FFFDF7] border border-[rgba(200,146,42,0.2)] rounded-xl shadow-[0_12px_40px_rgba(92,58,30,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <li v-for="sub in item.items" :key="sub.label">
                <router-link
                  :to="sub.route"
                  class="flex items-center gap-2 px-4 py-2.5 hover:bg-amber-50/60 hover:text-[#C8922A] rounded-lg mx-1 transition-colors duration-200"
                >
                  <i :class="sub.icon" />
                  <span>{{ $t(sub.label) }}</span>
                </router-link>
              </li>
            </ul> -->
          </li>
        </ul>
      </nav>

      <!-- Right actions -->
      <div class="flex items-center gap-4">
        <!-- Language dropdown -->
        <div class="relative">
          <button
            @click="isLangOpen = !isLangOpen"
            class="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white border border-gray-200/80 hover:border-orange-400/60 hover:bg-orange-50/40 transition-all duration-300 shadow-sm hover:shadow group"
            :class="{
              'border-orange-400/70 bg-orange-50/50 shadow-md': isLangOpen,
            }"
          >
            <!-- Cờ + text -->
            <span
              class="w-7 h-7 rounded-full overflow-hidden border border-gray-200/60 shadow-sm flex-shrink-0"
            >
              <img
                :src="selectedLanguage === 'vi' ? VNFlag : UKFlag"
                alt="flag"
                class="w-full h-full object-cover"
              />
            </span>

            <span
              class="font-semibold text-sm uppercase tracking-wider text-gray-800 group-hover:text-orange-700"
            >
              {{ selectedLanguage }}
            </span>

            <!-- Mũi tên xoay -->
            <i
              class="pi pi-chevron-down text-xs text-gray-500 transition-transform duration-300"
              :class="{ 'rotate-180 text-orange-600': isLangOpen }"
            />
          </button>

          <!-- Dropdown -->
          <div
            v-if="isLangOpen"
            class="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-2xl border border-gray-100/80 overflow-hidden z-50 ring-1 ring-black/5"
            v-click-outside="() => (isLangOpen = false)"
          >
            <div class="py-2">
              <button
                v-for="lang in languageOptions"
                :key="lang.value"
                @click="handleLanguageChange(lang.value)"
                class="w-full flex items-center gap-3.5 px-5 py-3 text-left hover:bg-orange-50/70 transition-colors duration-200"
                :class="{
                  'bg-orange-50/60 text-orange-800 font-medium': selectedLanguage === lang.value,
                }"
              >
                <span class="text-sm">{{ lang.label }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <button class="lg:hidden text-2xl" @click="toggleMenu">☰</button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden fixed inset-0 bg-black/40 z-40"
      @click.self="toggleMenu"
    >
      <aside class="bg-white w-72 h-full p-6 shadow-md">
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.label">
            <router-link
              :to="item.route"
              @click="toggleMenu"
              class="flex items-center gap-2 px-3 py-2 font-medium"
            >
              <i :class="item.icon" />
              {{ $t(item.label) }}
            </router-link>

            <!-- <div v-else>
              <div class="flex items-center gap-2 px-3 py-2 font-medium">
                <i :class="item.icon" />
                {{ $t(item.label) }}
              </div>

              <ul class="ml-6 space-y-1">
                <li v-for="sub in item.items" :key="sub.label">
                  <router-link
                    :to="sub.route"
                    @click="toggleMenu"
                    class="flex items-center gap-2 px-3 py-1 text-sm"
                  >
                    <i :class="sub.icon" />
                    {{ $t(sub.label) }}
                  </router-link>
                </li>
              </ul>
            </div> -->
          </li>
        </ul>
      </aside>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { changeLanguage } from '@/lib/useI18n'
import { useLanguageStore } from '@/stores/language'
import type { Language, LanguageOption } from '@/utils/ui'
import VNFlag from '@/assets/images/flags/VN.png'
import UKFlag from '@/assets/images/flags/UK.png'
import LogoHeader from '@/assets/images/logo/logo-v3.png'

defineOptions({
  name: 'LayoutHeader',
})

/* ================= Menu ================= */
const menuItems = [
  {
    label: 'HEADER.HOME',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'HEADER.ABOUT',
    icon: 'pi pi-star',
    route: '/about',
  },
  {
    label: 'HEADER.PRODUCTS',
    icon: 'pi pi-th-large',
    route: '/products',
  },
  {
    label: 'HEADER.LEGAL',
    icon: 'pi pi-lock',
    route: '/legal',
  },
]

/* ================= State ================= */
const isMenuOpen = ref(false)
const isLangOpen = ref(false)

/* ================= Language ================= */
const languageStore = useLanguageStore()
const selectedLanguage = ref(languageStore.language)

const languageOptions: LanguageOption[] = [
  { label: 'Tiếng Việt', value: 'vi' },
  { label: 'English', value: 'en' },
]

const handleLanguageChange = (lang: Language) => {
  selectedLanguage.value = lang
  changeLanguage(lang)
  isLangOpen.value = false
}

/* ================= Methods ================= */
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

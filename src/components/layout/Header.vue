<template>
  <header
    class="bg-white shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 relative z-50"
  >
    <div class="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <img
          src="https://readymadeui.com/readymadeui.svg"
          class="w-36 hidden sm:block"
        />
        <img
          src="https://readymadeui.com/readymadeui-short.svg"
          class="w-9 sm:hidden"
        />
      </router-link>

      <!-- Desktop Menu -->
      <nav class="hidden lg:block">
        <ul class="flex items-center gap-2">
          <li
            v-for="item in menuItems"
            :key="item.label"
            class="relative group"
          >
            <!-- Level 1 -->
            <router-link
              v-if="item.route"
              :to="item.route"
              class="flex items-center gap-2 px-3 py-2 rounded-md font-medium text-slate-900 hover:text-blue-700"
            >
              <i :class="item.icon" />
              <span>{{ $t(item.label) }}</span>
            </router-link>

            <button
              v-else
              class="flex items-center gap-2 px-3 py-2 rounded-md font-medium text-slate-900 hover:text-blue-700"
            >
              <i :class="item.icon" />
              <span>{{ $t(item.label) }}</span>
              <i class="pi pi-chevron-down text-xs ml-1" />
            </button>

            <!-- Submenu -->
            <ul
              v-if="item.items"
              class="absolute left-0 top-full mt-2 min-w-[200px] bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
            >
              <li v-for="sub in item.items" :key="sub.label">
                <router-link
                  :to="sub.route"
                  class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <i :class="sub.icon" />
                  <span>{{ $t(sub.label) }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- Right actions -->
      <div class="flex items-center gap-3">
        <!-- Language dropdown -->
        <div class="relative">
          <button
            @click="isLangOpen = !isLangOpen"
            class="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-100"
          >
            <span class="text-lg">
              {{ selectedLanguage === 'vi' ? '🇻🇳' : '🌍' }}
            </span>
            <span class="font-medium uppercase">
              {{ selectedLanguage }}
            </span>
          </button>

          <ul
            v-if="isLangOpen"
            class="absolute right-0 mt-2 w-36 bg-white border rounded-md shadow-lg"
          >
            <li
              v-for="lang in languageOptions"
              :key="lang.value"
              @click="handleLanguageChange(lang.value)"
              class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span>{{ lang.value === 'vi' ? '🇻🇳' : '🌍' }}</span>
              <span>{{ lang.label }}</span>
            </li>
          </ul>
        </div>

        <!-- Mobile menu button -->
        <button class="lg:hidden text-2xl" @click="toggleMenu">
          ☰
        </button>
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
              v-if="item.route"
              :to="item.route"
              @click="toggleMenu"
              class="flex items-center gap-2 px-3 py-2 font-medium"
            >
              <i :class="item.icon" />
              {{ $t(item.label) }}
            </router-link>

            <div v-else>
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
            </div>
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
    items: [
      {
        label: 'HEADER.components',
        icon: 'pi pi-bolt',
        route: '/projects/components',
      },
      {
        label: 'HEADER.blocks',
        icon: 'pi pi-server',
        route: '/projects/blocks',
      },
    ],
  },
  {
    label: 'HEADER.CONTACT',
    icon: 'pi pi-envelope',
    route: '/contact',
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

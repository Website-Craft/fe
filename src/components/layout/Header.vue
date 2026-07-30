<template>
  <header
    class="bg-[#FFFDF7]/95 border-b border-[rgba(200,146,42,0.15)] shadow-[0_4px_24px_rgba(92,58,30,0.08)] backdrop-blur-md py-4 px-4 sm:px-6 relative z-50"
    style="font-family: 'Inter', sans-serif"
  >
    <div class="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
      <!-- Logo -->
      <router-link :to="ROUTES.HOME.PATH" class="flex items-center gap-2">
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
              class="flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold transition-all duration-300"
              :class="[
                route?.path === item.route
                  ? 'text-orange-700 bg-orange-50/80 shadow-sm border border-orange-100/50'
                  : 'text-[#3A2210] hover:text-orange-600 hover:bg-orange-50/40 border border-transparent',
              ]"
            >
              <i :class="[item.icon, route?.path === item.route ? 'text-orange-600' : 'text-gray-500']" />
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
              class="w-9 h-9 rounded-full overflow-hidden border border-gray-100 shadow-sm flex-shrink-0"
            >
              <img
                :src="selectedLanguage === 'vi' ? VNFlag : UKFlag"
                alt="flag"
                class="w-full h-full object-cover scale-[1.1]"
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
          <Transition name="dropdown">
            <div
              v-if="isLangOpen"
              class="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50 ring-1 ring-black/5"
              v-click-outside="() => (isLangOpen = false)"
            >
              <div class="p-2">
                <button
                  v-for="lang in languageOptions"
                  :key="lang.value"
                  @click="handleLanguageChange(lang.value)"
                  class="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-left hover:bg-orange-50/70 transition-all duration-200 group/item"
                  :class="{
                    'bg-orange-50/60 text-orange-800 font-semibold': selectedLanguage === lang.value,
                  }"
                >
                  <span class="w-8 h-8 rounded-full overflow-hidden border border-gray-100 shadow-sm flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <img
                      :src="lang.value === 'vi' ? VNFlag : UKFlag"
                      :alt="lang.label"
                      class="w-full h-full object-cover scale-[1.1]"
                    />
                  </span>
                  <span class="text-sm tracking-wide">{{ lang.label }}</span>
                  <i 
                    v-if="selectedLanguage === lang.value" 
                    class="pi pi-check ml-auto text-xs text-orange-600" 
                  />
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Mobile menu button -->
        <button class="lg:hidden text-2xl" @click="toggleMenu">☰</button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Teleport to="body">
      <div v-if="isMenuOpen" class="lg:hidden fixed inset-0 z-[999]">
        <!-- Overlay -->
        <Transition name="fade" appear>
          <div
            v-if="isMenuOpen"
            class="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            @click="toggleMenu"
          ></div>
        </Transition>

        <!-- Sidebar -->
        <Transition name="slide" appear>
          <aside
            v-if="isMenuOpen"
            v-click-outside="() => (isMenuOpen = false)"
            class="absolute top-0 left-0 w-[300px] h-screen shadow-2xl flex flex-col mobile-menu-sidebar"
          >
            <!-- Sidebar Header -->
            <div class="p-6 border-b border-gray-100 flex items-center justify-between">
              <img :src="LogoHeader" class="w-28" alt="logo" />
              <button
                @click="toggleMenu"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <i class="pi pi-times text-xl" />
              </button>
            </div>

            <!-- Navigation Links -->
            <div class="flex-1 overflow-y-auto py-4">
              <ul class="px-3">
                <li v-for="item in menuItems" :key="item.label" class="mb-2">
                  <router-link
                    :to="item.route"
                    @click="toggleMenu"
                    class="flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all duration-300"
                    :class="[
                      route?.path === item.route
                        ? 'bg-orange-50 text-orange-700 shadow-sm border border-orange-100/50'
                        : 'text-gray-800 hover:bg-gray-50',
                    ]"
                  >
                    <i
                      :class="[
                        item.icon,
                        route?.path === item.route ? 'text-orange-600' : 'text-gray-400',
                      ]"
                    />
                    <span class="text-base">{{ $t(item.label) }}</span>
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Sidebar Footer -->
            <div class="p-6 bg-gray-50/80 border-t border-gray-100">
              <p class="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                {{ $t('COMMON.LANGUAGE') }}
              </p>
              <div class="grid grid-cols-2 gap-3">
                <button
                  v-for="lang in languageOptions"
                  :key="lang.value"
                  @click="handleLanguageChange(lang.value)"
                  class="flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300"
                  :class="[
                    selectedLanguage === lang.value
                      ? 'bg-white border-orange-400 shadow-md text-orange-700 scale-[1.05]'
                      : 'bg-white border-gray-100 text-gray-500 hover:border-orange-200',
                  ]"
                >
                  <img
                    :src="lang.value === 'vi' ? VNFlag : UKFlag"
                    class="w-8 h-8 rounded-full shadow-sm"
                    alt="flag"
                  />
                  <span class="text-[11px] font-extrabold uppercase tracking-tighter">{{ lang.label }}</span>
                </button>
              </div>
            </div>
          </aside>
        </Transition>
      </div>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { changeLanguage } from '@/lib/useI18n'
import { useLanguageStore } from '@/stores/language'
import { ROUTES } from '@/constants/routes'
import type { Language, LanguageOption } from '@/utils/ui'
import VNFlag from '@/assets/images/flags/VN.png'
import UKFlag from '@/assets/images/flags/UK.png'
import LogoHeader from '@/assets/images/logo/logo-v3.png'

defineOptions({
  name: 'LayoutHeader',
})

interface MenuNavItem {
  label: string
  icon: string
  route: string
}

const route = useRoute()

/* ================= Menu ================= */
const menuItems: MenuNavItem[] = [
  {
    label: 'HEADER.HOME',
    icon: 'pi pi-home',
    route: ROUTES.HOME.PATH,
  },
  {
    label: 'HEADER.ABOUT',
    icon: 'pi pi-star',
    route: ROUTES.ABOUT.PATH,
  },
  {
    label: 'HEADER.PRODUCTS',
    icon: 'pi pi-th-large',
    route: ROUTES.PRODUCTS.PATH,
  },
  {
    label: 'HEADER.LEGAL',
    icon: 'pi pi-lock',
    route: ROUTES.LEGAL.PATH,
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

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.92);
  filter: blur(4px);
}

/* Slide from left for Mobile Menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* Fade for Overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure mobile menu is on top of everything */
.mobile-menu-overlay {
  z-index: 9999 !important;
  background-color: rgba(0, 0, 0, 0.6) !important;
}

.mobile-menu-sidebar {
  background-color: #ffffff !important;
  z-index: 10000 !important;
}
</style>

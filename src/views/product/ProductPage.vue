<template>
  <div class="bg-earth-cream text-earth-bark min-h-screen pt-24 pb-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- HERO SECTION -->
      <section
        class="relative mb-24 rounded-3xl overflow-hidden glass-card-light reveal-on-scroll"
        :class="{ 'is-visible': isLoaded }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-16 relative">
          <div class="z-10 relative">
            <h1
              class="text-4xl md:text-5xl font-bold mb-6 text-gradient-earth leading-tight"
              v-html="$t('PRODUCTS.HERO.TITLE')"
            ></h1>
            <p class="text-lg text-earth-mid mb-8 max-w-lg">
              {{ $t('PRODUCTS.HERO.DESC') }}
            </p>
            <div class="flex gap-4">
              <button
                class="px-8 py-3 bg-earth-gradient text-earth-bark font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all glow-amber relative overflow-hidden group"
              >
                <span class="relative z-10">{{ $t('PRODUCTS.HERO.GET_ADVICE') }}</span>
                <div
                  class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                ></div>
              </button>
              <button
                class="px-8 py-3 bg-white text-earth-mid font-semibold rounded-full border border-amber-light hover:bg-earth-beige transition-all"
              >
                {{ $t('PRODUCTS.HERO.VIEW_PRICING') }}
              </button>
            </div>
          </div>
          <div
            class="relative w-full h-80 lg:h-[450px] flex items-center justify-center float-anim group"
          >
            <div
              class="absolute inset-0 bg-amber-light blur-[100px] opacity-20 rounded-full mix-blend-multiply"
            ></div>
            <img
              src="/images/templates/hero.png"
              alt="Custom Web Design Concept"
              class="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <!-- CUSTOM SERVICE SECTION -->
      <section
        class="mb-32 text-center reveal-on-scroll transition-all duration-1000"
        :class="{ 'is-visible': scrollY > 50 }"
      >
        <h2 class="text-3xl font-bold mb-4 text-earth-deep">
          {{ $t('PRODUCTS.CUSTOM_SERVICE.TITLE') }}
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-amber-base to-terra-base mx-auto mb-10 rounded-full"
        ></div>
        <p class="text-earth-mid max-w-2xl mx-auto mb-16 text-lg">
          {{ $t('PRODUCTS.CUSTOM_SERVICE.DESC') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div class="earth-card p-10 group relative overflow-hidden">
            <div
              class="absolute top-0 right-0 p-4 opacity-5 bg-black h-full w-full skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"
            ></div>
            <div
              class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-amber-base group-hover:text-terra-base group-hover:scale-110 transition-transform duration-500 premium-border"
            >
              <i class="pi pi-palette text-3xl"></i>
            </div>
            <h3
              class="text-xl font-bold mb-3 text-earth-dark group-hover:text-terra-base transition-colors"
            >
              {{ $t('PRODUCTS.CUSTOM_SERVICE.EXCLUSIVE_UI.TITLE') }}
            </h3>
            <p class="text-earth-mid text-sm leading-relaxed">
              {{ $t('PRODUCTS.CUSTOM_SERVICE.EXCLUSIVE_UI.DESC') }}
            </p>
          </div>
          <div
            class="earth-card p-10 group translate-y-0 md:translate-y-8 relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 p-4 opacity-5 bg-black h-full w-full skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 delay-100"
            ></div>
            <div
              class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-amber-base group-hover:text-terra-base group-hover:scale-110 transition-transform duration-500 premium-border"
            >
              <i class="pi pi-bolt text-3xl"></i>
            </div>
            <h3
              class="text-xl font-bold mb-3 text-earth-dark group-hover:text-terra-base transition-colors"
            >
              {{ $t('PRODUCTS.CUSTOM_SERVICE.MAX_PERF.TITLE') }}
            </h3>
            <p class="text-earth-mid text-sm leading-relaxed">
              {{ $t('PRODUCTS.CUSTOM_SERVICE.MAX_PERF.DESC') }}
            </p>
          </div>
          <div class="earth-card p-10 group relative overflow-hidden">
            <div
              class="absolute top-0 right-0 p-4 opacity-5 bg-black h-full w-full skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 delay-200"
            ></div>
            <div
              class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-amber-base group-hover:text-terra-base group-hover:scale-110 transition-transform duration-500 premium-border"
            >
              <i class="pi pi-mobile text-3xl"></i>
            </div>
            <h3
              class="text-xl font-bold mb-3 text-earth-dark group-hover:text-terra-base transition-colors"
            >
              {{ $t('PRODUCTS.CUSTOM_SERVICE.MULTI_PLATFORM.TITLE') }}
            </h3>
            <p class="text-earth-mid text-sm leading-relaxed">
              {{ $t('PRODUCTS.CUSTOM_SERVICE.MULTI_PLATFORM.DESC') }}
            </p>
          </div>
        </div>
      </section>

      <!-- TEMPLATE LISTING SECTION -->
      <section class="mb-24">
        <div class="flex flex-col md:flex-row justify-between items-end mb-14">
          <div class="reveal-on-scroll" :class="{ 'is-visible': scrollY > 400 }">
            <h2 class="text-3xl font-bold mb-4 text-earth-deep">
              {{ $t('PRODUCTS.LISTING.TITLE') }}
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-amber-base to-terra-base mb-6 rounded-full"
            ></div>
            <p class="text-earth-mid max-w-xl text-lg">
              {{ $t('PRODUCTS.LISTING.DESC') }}
            </p>
          </div>
          <div
            class="flex flex-wrap gap-3 mt-8 md:mt-0 reveal-on-scroll"
            :class="{ 'is-visible': scrollY > 400 }"
            style="transition-delay: 200ms"
          >
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeCategory = cat"
              class="px-6 py-2 rounded-full border transition-all font-semibold shadow-sm text-sm md:text-base"
              :class="
                activeCategory === cat
                  ? 'border-amber-base bg-amber-base text-white'
                  : 'border-earth-sand text-earth-mid hover:text-earth-bark hover:border-earth-mid'
              "
            >
              {{ cat === 'ALL' ? $t('CATEGORIES.ALL') : $t(cat) }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            v-for="(tpl, index) in filteredTemplates"
            :key="tpl.id"
            class="reveal-on-scroll hover-glow rounded-3xl p-1 bg-white shadow-sm"
            :class="{ 'is-visible': scrollY > 500 }"
            :style="`transition-delay: ${index * 100}ms`"
          >
            <WebsiteItem :src="tpl.image" :title="$t(tpl.name)" />
            <div class="px-5 pb-5 pt-4 flex justify-between items-center text-sm">
              <span class="text-earth-mid font-medium"
                >{{ $t('PRODUCTS.LISTING.FROM') }} ${{ tpl.price }}</span
              >
              <router-link
                :to="`/products/${tpl.slug}`"
                class="text-amber-base hover:text-terra-base font-bold transition-colors flex items-center gap-1"
              >
                {{ $t('COMMON.VIEW_DETAILS') }} <i class="pi pi-arrow-right text-xs"></i>
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- CALL TO ACTION -->
      <section
        class="py-20 px-8 rounded-[2rem] bg-dark-earth text-white text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-700 reveal-on-scroll"
        :class="{ 'is-visible': scrollY > 800 }"
      >
        <div
          class="absolute inset-0 opacity-[0.15] group-hover:opacity-30 transition-opacity duration-700 bg-[length:40px_40px]"
          style="
            background-image:
              linear-gradient(
                0deg,
                transparent 24%,
                rgba(255, 255, 255, 0.3) 25%,
                rgba(255, 255, 255, 0.3) 26%,
                transparent 27%,
                transparent 74%,
                rgba(255, 255, 255, 0.3) 75%,
                rgba(255, 255, 255, 0.3) 76%,
                transparent 77%,
                transparent
              ),
              linear-gradient(
                90deg,
                transparent 24%,
                rgba(255, 255, 255, 0.3) 25%,
                rgba(255, 255, 255, 0.3) 26%,
                transparent 27%,
                transparent 74%,
                rgba(255, 255, 255, 0.3) 75%,
                rgba(255, 255, 255, 0.3) 76%,
                transparent 77%,
                transparent
              );
          "
        ></div>

        <!-- Decorative glowing orbs -->
        <div
          class="absolute top-0 right-0 w-80 h-80 bg-amber-base blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-80 h-80 bg-terra-base blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity -translate-x-1/2 translate-y-1/2"
        ></div>

        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-md">
            {{ $t('PRODUCTS.CTA.TITLE') }}
          </h2>
          <p class="text-earth-beige/90 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            {{ $t('PRODUCTS.CTA.DESC') }}
          </p>
          <button
            class="px-12 py-4 bg-white text-earth-bark font-bold text-lg rounded-full hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)]"
          >
            {{ $t('PRODUCTS.CTA.CONTACT_TEAM') }}
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import WebsiteItem from '@/components/template/WebsiteItem.vue'
import { templates } from '@/data/website_list'

const isLoaded = ref(false)
const scrollY = ref(0)
const activeCategory = ref('ALL')

const categories = ['ALL', ...new Set(templates.map((t) => t.category))]

const filteredTemplates = computed(() => {
  if (activeCategory.value === 'ALL') return templates
  return templates.filter((t) => t.category === activeCategory.value)
})

const handleScroll = () => {
  scrollY.value = window.scrollY || document.documentElement.scrollTop
}

onMounted(() => {
  // Triggers the initial intro reveal animation
  setTimeout(() => {
    isLoaded.value = true
  }, 100)

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // init value to reveal initial sections if scrolled before refresh
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Any additional specific stylings can go here */
</style>

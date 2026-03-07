<template>
  <div class="bg-earth-cream text-earth-bark min-h-screen pt-24 pb-20 overflow-hidden">
    <!-- Top Background Decoration -->
    <div
      class="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-earth-beige/50 to-transparent pointer-events-none"
    ></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- BREADCRUMB -->
      <div
        class="flex items-center gap-2 text-sm text-earth-mid mb-8 reveal-on-scroll is-visible font-medium"
      >
        <router-link to="/" class="hover:text-amber-base transition-colors">{{
          $t('HEADER.HOME')
        }}</router-link>
        <i class="pi pi-angle-right text-xs"></i>
        <router-link to="/products" class="hover:text-amber-base transition-colors">{{
          $t('HEADER.PRODUCTS')
        }}</router-link>
        <i class="pi pi-angle-right text-xs"></i>
        <span class="text-earth-bark font-semibold">{{ tpl ? $t(tpl.name) : '' }}</span>
      </div>

      <!-- MAIN ROW: SLIDER + INFO -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
        <!-- LEFT: PRODUCT SLIDER -->
        <div class="lg:col-span-7 w-full reveal-on-scroll is-visible">
          <!-- Main Image -->
          <div
            class="relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden glass-card-light shadow-[0_20px_40px_rgba(92,58,30,0.1)] group premium-border group-hover:shadow-[0_20px_50px_rgba(200,146,42,0.2)] transition-shadow duration-500 mb-6"
          >
            <transition name="fade" mode="out-in">
              <img
                :key="activeImage"
                :src="images[activeImage]"
                :alt="tpl?.name"
                class="w-full h-full object-cover object-top transition-transform duration-[20s] ease-linear group-hover:object-bottom"
              />
            </transition>

            <!-- Floating Badges -->
            <div class="absolute top-4 left-4 flex gap-2">
              <span
                class="px-3 py-1 bg-dark-earth/80 backdrop-blur text-white text-xs font-bold rounded-full border border-white/10 uppercase tracking-widest"
                >Premium</span
              >
              <span
                class="px-3 py-1 bg-amber-base/80 backdrop-blur text-white text-xs font-bold rounded-full border border-white/10 flex items-center gap-1"
                ><i class="pi pi-star-fill text-[10px]"></i> 5.0</span
              >
            </div>

            <!-- Hover Action -->
            <div
              class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none"
            >
              <span
                class="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 font-medium tracking-wide flex items-center gap-2"
              >
                <i class="pi pi-arrows-alt"></i> {{ $t('PRODUCTS.DETAIL.HOVER_MOVE') }}
              </span>
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
            <button
              v-for="(img, idx) in images"
              :key="idx"
              @click="activeImage = idx"
              class="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden shadow-sm border-2 transition-all cursor-pointer snap-start"
              :class="
                activeImage === idx
                  ? 'border-amber-base scale-105 opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              "
            >
              <img :src="img" class="w-full h-full object-cover object-top" />
              <div class="absolute inset-0 bg-dark-earth/20" v-if="activeImage !== idx"></div>
            </button>
          </div>
        </div>

        <!-- RIGHT: INFO & ACTIONS -->
        <div class="lg:col-span-5 reveal-on-scroll is-visible" style="transition-delay: 200ms">
          <h1 class="text-4xl md:text-5xl font-extrabold text-gradient-earth mb-4 leading-tight">
            {{ tpl ? $t(tpl.name) : '' }}
          </h1>

          <p class="text-earth-mid text-lg mb-8 leading-relaxed whitespace-pre-line">
            {{ tpl ? $t(tpl.description) : '' }}
          </p>

          <div
            class="glass-card-light rounded-2xl p-6 mb-8 premium-border hover:shadow-[0_10px_30px_rgba(200,146,42,0.15)] transition-shadow duration-500"
          >
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4"
            >
              <div>
                <p class="text-earth-mid text-sm font-medium mb-1 uppercase tracking-wide">
                  {{ $t('PRODUCTS.DETAIL.STATUS_LABEL') }}
                </p>
                <div class="text-xl font-bold text-earth-dark flex items-baseline gap-1">
                  {{ $t('PRODUCTS.DETAIL.READY') }}
                </div>
              </div>
              <div class="text-left sm:text-right">
                <p
                  class="text-amber-base font-bold text-sm bg-amber-light/20 px-4 py-2 rounded-full inline-block"
                >
                  <i class="pi pi-bolt"></i> {{ $t('PRODUCTS.DETAIL.FREE_CUSTOM') }}
                </p>
              </div>
            </div>

            <a
              href="https://zalo.me/YOUR_PHONE_NUMBER"
              target="_blank"
              class="w-full py-4 rounded-xl bg-earth-gradient text-earth-bark font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all glow-amber relative overflow-hidden group flex items-center justify-center gap-2 cursor-pointer z-10"
            >
              <span
                class="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"
              ></span>
              <span class="relative z-10 flex items-center justify-center gap-2">
                <i class="pi pi-comment"></i> {{ $t('PRODUCTS.DETAIL.GET_ADVICE_BTN') }}
              </span>
            </a>
          </div>

          <ul class="space-y-4 text-earth-mid">
            <li v-for="(feat, index) in tpl?.features" :key="index" class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-terra-light/20 text-terra-base flex items-center justify-center shrink-0"
              >
                <i :class="feat.icon" class="text-sm"></i>
              </div>
              <span
                ><strong>{{ $t(feat.title) }}:</strong> {{ $t(feat.desc) }}</span
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- FEATURES SECTION -->
      <section class="mb-32 reveal-on-scroll" :class="{ 'is-visible': scrollY > 400 }">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4 text-earth-deep">
            {{ $t('PRODUCTS.DETAIL.HIGHLIGHTS') }}
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-amber-base to-terra-base mx-auto rounded-full"
          ></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature Cards -->
          <div
            v-for="(feat, index) in tpl?.features"
            :key="index"
            class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 premium-border group cursor-pointer"
            :style="`transition-delay: ${index * 100}ms`"
          >
            <div
              class="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all"
              :class="
                index % 2 === 0
                  ? 'bg-amber-light/20 text-amber-base group-hover:bg-amber-base group-hover:text-white'
                  : 'bg-terra-light/20 text-terra-base group-hover:bg-terra-base group-hover:text-white'
              "
            >
              <i :class="feat.icon" class="text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-earth-dark mb-3">{{ $t(feat.title) }}</h3>
            <p class="text-earth-mid text-sm leading-relaxed">
              {{ $t(feat.desc) }}
            </p>
          </div>
        </div>
      </section>

      <!-- DEMO VIDEO SECTION -->
      <section class="mb-32 reveal-on-scroll" :class="{ 'is-visible': scrollY > 200 }">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold mb-4 text-earth-deep">
            {{ $t('PRODUCTS.DETAIL.VIDEO_DEMO_TITLE') }}
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-amber-base to-terra-base mx-auto rounded-full"
          ></div>
        </div>

        <div
          class="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer bg-dark-earth premium-border"
        >
          <div
            class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 w-full h-full"
          ></div>

          <!-- Simulated Video Poster Background -->
          <img
            :src="tpl?.image || '/images/templates/modern.png'"
            alt="Video Placeholder"
            class="w-full aspect-video object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s]"
          />

          <div class="absolute inset-0 z-20 flex flex-col items-center justify-center pb-8">
            <div
              class="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border-2 border-amber-base flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-base/80 transition-all duration-300 shadow-[0_0_30px_rgba(200,146,42,0.5)]"
            >
              <i class="pi pi-play text-4xl text-white ml-2"></i>
            </div>
            <p class="text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">
              {{ $t('PRODUCTS.DETAIL.WATCH_INTERACTION') }}
            </p>
          </div>

          <div class="absolute bottom-0 inset-x-0 h-2 bg-white/20 z-20">
            <div class="h-full w-1/3 bg-gradient-to-r from-amber-base to-terra-base relative">
              <div
                class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- TECHNICAL HIGHLIGHTS -->
      <section class="mb-24 reveal-on-scroll" :class="{ 'is-visible': scrollY > 600 }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            class="order-2 md:order-1 relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden glass-card p-8 flex items-center justify-center"
          >
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-amber-base blur-[100px] opacity-20 rounded-full"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-64 h-64 bg-terra-base blur-[100px] opacity-20 rounded-full"
            ></div>

            <div class="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
              <!-- Animated Tech Pills -->
              <div
                class="col-span-1 rounded-2xl bg-white/80 backdrop-blur-sm border border-white p-6 shadow-sm flex flex-col justify-center translate-y-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >
                <i class="pi pi-bolt text-3xl text-amber-base mb-3"></i>
                <h4 class="font-bold text-earth-dark mb-1">
                  {{ $t('PRODUCTS.DETAIL.TECH_PILLS.FAST') }}
                </h4>
                <p class="text-xs text-earth-mid">
                  {{ $t('PRODUCTS.DETAIL.TECH_PILLS.FAST_DESC') }}
                </p>
              </div>
              <div
                class="col-span-1 rounded-2xl bg-white/80 backdrop-blur-sm border border-white p-6 shadow-sm flex flex-col justify-center -translate-y-8 hover:-translate-y-12 hover:shadow-xl transition-all duration-500"
              >
                <i class="pi pi-mobile text-3xl text-terra-base mb-3"></i>
                <h4 class="font-bold text-earth-dark mb-1">
                  {{ $t('PRODUCTS.DETAIL.TECH_PILLS.MOBILE') }}
                </h4>
                <p class="text-xs text-earth-mid">
                  {{ $t('PRODUCTS.DETAIL.TECH_PILLS.MOBILE_DESC') }}
                </p>
              </div>
              <div
                class="col-span-2 rounded-2xl bg-dark-earth text-white p-8 flex items-center gap-6 group hover:shadow-[0_0_30px_rgba(200,146,42,0.3)] transition-all"
              >
                <div
                  class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <i class="pi pi-search-plus text-2xl text-amber-light"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-1 text-lg">{{ $t('PRODUCTS.DETAIL.TECH_PILLS.SEO') }}</h4>
                  <p class="text-sm text-earth-beige/80">
                    {{ $t('PRODUCTS.DETAIL.TECH_PILLS.SEO_DESC') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 md:order-2">
            <h2
              class="text-3xl lg:text-4xl font-bold mb-6 text-earth-deep"
              v-html="$t('PRODUCTS.DETAIL.TECH_FOUNDATION')"
            ></h2>
            <p class="text-earth-mid mb-10 text-lg leading-relaxed">
              {{ $t('PRODUCTS.DETAIL.TECH_DESC') }}
            </p>

            <div class="space-y-6">
              <div
                v-for="(tech, index) in techHighlights"
                :key="index"
                class="flex items-start gap-4"
              >
                <div
                  class="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-amber-light/30"
                >
                  <i :class="[tech.icon, 'text-amber-base text-xl']"></i>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-earth-dark mb-1">{{ $t(tech.title) }}</h4>
                  <p class="text-earth-mid text-sm">
                    {{ $t(tech.desc) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { templates } from '@/data/website_list'
import { techHighlights } from '@/data/tech_features'

const route = useRoute()
const tplSlug = route.params.id as string
const tpl = computed(() => templates.find((t) => t.slug === tplSlug) || templates[0])

const images = computed(() =>
  tpl.value?.images && tpl.value.images.length > 0 ? tpl.value.images : [tpl.value?.image],
)

const activeImage = ref(0)
const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY || document.documentElement.scrollTop
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // init value
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Hide scrollbar for slider thumbnails */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

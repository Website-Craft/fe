<template>
  <div class="min-h-screen">
    <layout-header class="fixed top-0 left-0 right-0 z-50" />
    <div
      class="min-h-[80vh] py-3 px-4 md:px-12 bg-gradient-to-b from-[var(--color-white)] to-[var(--color-beige-base)] pt-[var(--header-height)]"
    >
      <slot />
    </div>

    <button
      v-if="showScrollToTopButton"
      @click="scrollToTop"
      class="fixed cursor-pointer bottom-8 right-8 bg-gradient-to-r from-[var(--color-orange-base)] to-[var(--color-yellow-base)] text-white p-3 rounded-full shadow-lg hover:from-[var(--color-orange-dark)] transition-all duration-300 z-50"
    >
      <i class="pi pi-arrow-up text-xl"></i>
    </button>

    <layout-footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LayoutHeader from '@/components/layout/Header.vue'
import LayoutFooter from '@/components/layout/Footer.vue'

const showScrollToTopButton = ref(false)

const handleScroll = () => {
  showScrollToTopButton.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

defineOptions({
  name: 'RootLayout',
})
</script>

<template>
  <div class="min-h-screen">
    <div class="fixed top-0 left-0 right-0 z-50" >
      <layout-header />
    </div>
    <div
      class="min-h-[80vh] py-3 px-4 md:px-12 bg-gradient-to-b from-[var(--color-white)] to-[var(--color-beige-base)] pt-[var(--header-height)]"
    >
      <slot />
    </div>

    <button
      v-if="showScrollToTopButton"
      @click="scrollToTop"
      class="scroll-top-btn fixed cursor-pointer bottom-8 right-8 bg-gradient-to-r from-[var(--color-orange-base)] to-[var(--color-yellow-base)] text-white p-3 rounded-full shadow-lg hover:from-[var(--color-orange-dark)] transition-all duration-300 z-50"
      aria-label="Lên đầu trang"
      >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M18 15l-6-6-6 6" />
      </svg>
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

<style scoped>
.scroll-top-btn {
  width: 48px;
  height: 48px;
  border: 3px solid #060913;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 20px rgba(56,189,248,0.4);
}
.scroll-top-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(56,189,248,0.6);
}
.scroll-top-btn svg { width: 22px; height: 22px; transition: transform 0.3s; }
.scroll-top-btn:hover svg { transform: translateY(-2px); }
</style>

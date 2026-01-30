<template>
  <div class="relative w-full md:max-w-[85%] mx-auto overflow-hidden rounded-md shadow-2xl bg-black/50">
    <!-- ================= MAIN SLIDER ================= -->
    <div class="relative aspect-[16/9] overflow-hidden">
      <div
        class="flex h-full transition-transform duration-1000 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(item, index) in images"
          :key="index"
          class="min-w-full h-full relative overflow-hidden"
        >
          <img
            :src="item.image"
            class="w-full h-full object-cover transition-transform duration-1000 ease-out"
            :class="{ 'scale-110': isTransitioning && index === currentIndex }"
          />

          <!-- Text Content -->
          <div class="hidden md:flex md:absolute inset-0 flex flex-col justify-start p-2 2xl:p-8 text-white 2xl:mt-10">
            <h2 class="text-4xl 2xl:text-6xl font-extrabold mb-4 drop-shadow-lg">{{ item.title }}</h2>
            <p class="text-xl 2xl:text-2xl drop-shadow-lg">{{ item.content }}</p>
          </div>
        </div>
      </div>

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none"
      />

      <!-- Prev -->
      <button
        @click="prev"
        class="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition shadow-xl"
      >
        ‹
      </button>

      <!-- Next -->
      <button
        @click="next"
        class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition shadow-xl"
      >
        ›
      </button>
    </div>

    <!-- ================= THUMBNAILS ================= -->
    <div
      class="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 w-[620px] overflow-hidden z-20"
    >
      <div
        class="flex items-center gap-4 transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(${thumbTranslateX}px)` }"
      >
        <div
          v-for="(item, index) in images"
          :key="index"
          @click="goTo(index)"
          class="shrink-0 cursor-pointer transition-all duration-500"
          :class="index === currentIndex ? activeThumb : inactiveThumb"
        >
          <img :src="item.image" class="w-full h-full object-cover rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { images } from '@/data/carousel'
import { ref, computed } from 'vue'

defineOptions({
  name: 'CarouselComponent',
})

const currentIndex = ref(0)
const isTransitioning = ref(false)

/* ================= SLIDE LOGIC ================= */
const total = computed(() => images.length)

const goTo = (index: number) => {
  if (index === currentIndex.value) return
  isTransitioning.value = true
  currentIndex.value = index

  setTimeout(() => {
    isTransitioning.value = false
  }, 1000)
}

const prev = () => goTo((currentIndex.value - 1 + total.value) % total.value)

const next = () => goTo((currentIndex.value + 1) % total.value)

/* ================= THUMB SLIDE ================= */
const thumbWidth = 96 // width + gap (px)
const thumbTranslateX = computed(() => {
  return -(currentIndex.value - 1) * thumbWidth
})

/* ================= STYLES ================= */
const activeThumb = 'w-56 h-38 scale-105 z-10'
const inactiveThumb = 'w-36 h-24 opacity-50 hover:opacity-80'
</script>

<style scoped>
img {
  will-change: transform;
}
</style>

<template>
  <div
    ref="containerRef"
    class="relative w-full h-[350px] flex flex-col overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-900"
    @mouseenter="startScroll"
    @mouseleave="resetScroll"
  >
    <!-- Image Section -->
    <div ref="imageWrapperRef" class="relative h-[250px] overflow-hidden">
      <img
        ref="imageRef"
        :src="src"
        :alt="title"
        class="w-full block"
        :style="imageStyle"
        @load="calculateScroll"
      />
    </div>

    <!-- Content Section -->
    <div class="flex-grow p-4 bg-white text-gray-700 flex flex-col justify-center border-t border-gray-200">
      <p class="text-xs text-gray-500 mb-1">Template</p>
      <h3 class="text-lg font-bold truncate">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ src: string; title?: string }>()

const imageWrapperRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLImageElement | null>(null)

const offset = ref(0)
const maxScroll = ref(0)
const isHovering = ref(false)

const imageStyle = computed(() => ({
  transform: `translateY(-${offset.value}px)`,
  transition: isHovering.value
    ? `transform ${scrollDuration.value}s linear`
    : 'transform 0.5s ease-out',
}))

const scrollDuration = computed(() => {
  return Math.max(4, maxScroll.value / 120) // px / speed
})

const calculateScroll = () => {
  if (!imageWrapperRef.value || !imageRef.value) return
  maxScroll.value = Math.max(0, imageRef.value.clientHeight - imageWrapperRef.value.clientHeight)
}

const startScroll = () => {
  if (maxScroll.value <= 0) return
  isHovering.value = true
  offset.value = maxScroll.value
}

const resetScroll = () => {
  isHovering.value = false
  offset.value = 0
}
</script>

<style scoped>
img {
  will-change: transform;
}
</style>

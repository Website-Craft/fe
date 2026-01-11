<template>
  <div
    ref="containerRef"
    class="relative w-full h-[350px] overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-900"
    @mouseenter="startScroll"
    @mouseleave="resetScroll"
  >
    <img
      ref="imageRef"
      :src="src"
      :alt="title"
      class="w-full block"
      :style="imageStyle"
      @load="calculateScroll"
    />

    <div
      class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none"
    />

    <div class="absolute bottom-3 left-3 text-white">
      <p class="text-sm opacity-80">Template</p>
      <h3 class="font-semibold">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ src: string; title?: string }>()

const containerRef = ref<HTMLElement | null>(null)
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
  if (!containerRef.value || !imageRef.value) return
  maxScroll.value = Math.max(0, imageRef.value.clientHeight - containerRef.value.clientHeight)
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

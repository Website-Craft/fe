<template>
  <div class="min-h-screen">
    <layout-header />
    <div
      class="min-h-[80vh] py-3 px-4 md:px-12 bg-gradient-to-b from-[var(--color-white)] to-[var(--color-beige-base)]"
    >
      <slot />
    </div>

    <layout-footer />
  </div>
</template>
<script setup lang="ts">
import LayoutHeader from '@/components/layout/Header.vue'
import LayoutFooter from '@/components/layout/Footer.vue'
defineOptions({
  name: 'RootLayout',
})
</script>

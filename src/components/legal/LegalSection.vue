<!-- src/components/lega/LegalSection.vue -->
<template>
  <section class="legal-section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.legal-section {
  margin: 4.5rem 0;
}

.section-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: var(--color-orange-base);
  margin-bottom: 1.8rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: var(--color-orange-base);
  border-radius: 2px;
}

.section-content {
  background: var(--color-white);
  border-radius: 16px;
  padding: 2.2rem 2.5rem;
  box-shadow: 0 8px 35px rgba(0,0,0,0.06);
  border: 1px solid var(--color-grey-base);
  line-height: 1.8;
  font-size: 1.07rem;
}
</style>
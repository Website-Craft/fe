<!-- src/components/lega/LegalHero.vue -->
<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-orange-base) 0%, var(--color-brown-base) 100%);
  color: white;
  padding: 7rem 2rem 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.12) 0%, transparent 60%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: clamp(2.8rem, 7vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.35rem;
  opacity: 0.95;
  max-width: 560px;
  margin: 0 auto;
}
</style>
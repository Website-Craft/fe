<!-- src/components/lega/LegalHero.vue -->
<template>
  <section class="hero reveal-fade">
    <div class="hero-ambient">
      <span class="ha ha--1"></span>
      <span class="ha ha--2"></span>
    </div>
    <div class="hero-content">
      <h1 class="title text-gradient-earth">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
      <div class="hero-divider"></div>
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
  background: linear-gradient(180deg, #0d0700 0%, #1a0f00 100%);
  color: #fdf6e9;
  padding: 10rem 2rem 8rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.ha {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}
.ha--1 {
  width: 400px;
  height: 300px;
  top: -100px;
  left: -100px;
  background: var(--color-gold-base);
}
.ha--2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  right: -50px;
  background: var(--color-terra-base);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.subtitle {
  font-size: 1.25rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 1px;
}

.hero-divider {
  width: 60px;
  height: 3px;
  background: var(--color-gold-base);
  margin: 2.5rem auto 0;
  border-radius: 2px;
}

.reveal-fade {
  animation: revealFade 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes revealFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

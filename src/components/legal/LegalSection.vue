<!-- src/components/lega/LegalSection.vue -->
<template>
  <section class="legal-section reveal-up">
    <div class="container mx-auto max-w-5xl">
      <h2 class="section-title text-gradient-earth">{{ title }}</h2>
      <div class="section-content earth-card hover-glow">
        <slot />
      </div>
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
  margin: 6rem 0;
  padding: 0 1.5rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-earth-bark);
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-gold-base), transparent);
  border-radius: 2px;
}

.section-content {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem 3.5rem;
  border: 1px solid rgba(200, 146, 42, 0.15);
  line-height: 1.9;
  font-size: 1.1rem;
  color: var(--color-earth-mid);
  box-shadow: 0 20px 50px rgba(92, 58, 30, 0.05);
}

.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .section-content {
    padding: 2rem;
  }
}
</style>

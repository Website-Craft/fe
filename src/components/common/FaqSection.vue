<template>
  <section class="faq-section" id="faq-section">
    <div class="faq-container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-dot"></span>
          {{ $t('FAQ.BADGE') }}
          <span class="eyebrow-dot"></span>
        </div>
        <h2 class="section-title">
          {{ $t('FAQ.TITLE') }}
        </h2>
        <p class="section-sub">{{ $t('FAQ.SUB') }}</p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="faq-list">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
          :class="{ 'faq-item--active': activeIndex === index }"
        >
          <button
            class="faq-question"
            @click="toggleFaq(index)"
            :aria-expanded="activeIndex === index"
          >
            <span class="faq-q-number">0{{ index + 1 }}</span>
            <span class="faq-q-text">{{ $t(item.q) }}</span>
            <span class="faq-icon-wrap">
              <svg
                class="faq-icon"
                :class="{ 'faq-icon--rotated': activeIndex === index }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>
          <div v-show="activeIndex === index" class="faq-answer">
            <p class="faq-a-text">{{ $t(item.a) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'FaqSection' })

const activeIndex = ref<number | null>(0)

const faqItems = [
  { q: 'FAQ.Q1', a: 'FAQ.A1' },
  { q: 'FAQ.Q2', a: 'FAQ.A2' },
  { q: 'FAQ.Q3', a: 'FAQ.A3' },
  { q: 'FAQ.Q4', a: 'FAQ.A4' },
  { q: 'FAQ.Q5', a: 'FAQ.A5' },
  { q: 'FAQ.Q6', a: 'FAQ.A6' },
]

function toggleFaq(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.faq-section {
  padding: 60px 16px 80px;
  position: relative;
  z-index: 2;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #8b5e3c;
  margin-bottom: 14px;
}

.eyebrow-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #c8922a;
  display: inline-block;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #3a2210;
  line-height: 1.25;
  margin-bottom: 12px;
}

.section-sub {
  font-size: 1rem;
  color: #7b4f2e;
  opacity: 0.85;
  line-height: 1.65;
  max-width: 560px;
  margin: 0 auto;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(200, 146, 42, 0.25);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(92, 58, 30, 0.04);
}

.faq-item:hover {
  border-color: rgba(200, 146, 42, 0.5);
  box-shadow: 0 8px 30px rgba(200, 146, 42, 0.12);
  transform: translateY(-2px);
}

.faq-item--active {
  background: rgba(255, 255, 255, 0.95);
  border-color: #c8922a;
  box-shadow: 0 10px 35px rgba(200, 146, 42, 0.15);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
}

.faq-q-number {
  font-size: 13px;
  font-weight: 800;
  color: #c8922a;
  background: rgba(200, 146, 42, 0.12);
  padding: 4px 8px;
  border-radius: 8px;
}

.faq-q-text {
  flex: 1;
  font-size: 1.05rem;
  font-weight: 700;
  color: #3a2210;
  line-height: 1.4;
}

.faq-icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(200, 146, 42, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.3s;
}

.faq-item--active .faq-icon-wrap {
  background: #c8922a;
}

.faq-icon {
  width: 16px;
  height: 16px;
  color: #8b5e3c;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s;
}

.faq-item--active .faq-icon {
  color: #fff;
}

.faq-icon--rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 24px 22px 64px;
  animation: answer-fade 0.3s ease-out;
}

@keyframes answer-fade {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-a-text {
  font-size: 0.95rem;
  color: #5c3a1e;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 640px) {
  .faq-question {
    padding: 16px 18px;
    gap: 12px;
  }
  .faq-q-text {
    font-size: 0.95rem;
  }
  .faq-answer {
    padding: 0 18px 18px 18px;
  }
}
</style>

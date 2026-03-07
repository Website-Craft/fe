<template>
  <div class="legal-page">
    <!-- Ambient backgrounds -->
    <div class="page-ambient" aria-hidden="true">
      <span class="pa pa--1"></span>
      <span class="pa pa--2"></span>
    </div>

    <LegalHero
      :title="$t('HEADER.LEGAL')"
      :subtitle="
        $t('COMMON.SAVE') === 'Lưu'
          ? 'Cam kết minh bạch - bảo vệ quyền lợi khách hàng'
          : 'Commitment to transparency - protecting customer interests'
      "
    />

    <div class="legal-content relative z-10">
      <div v-for="(section, sIdx) in legalData" :key="sIdx">
        <LegalSection :title="$t(section.title)">
          <LegalContentBlock>
            <div v-for="(block, bIdx) in section.blocks" :key="bIdx" class="mb-6 last:mb-0">
              <h4 v-if="block.heading" class="text-earth-bark font-bold mb-3">
                {{ $t(block.heading) }}
              </h4>
              <p v-for="(p, pIdx) in block.text" :key="pIdx" :class="{ 'mt-4': pIdx > 0 }">
                {{ $t(p, { WEB_NAME: WebName.WEB_NAME }) }}
              </p>
              <ul v-if="block.list" class="list-disc pl-5 space-y-2 mt-3">
                <li v-for="(item, iIdx) in block.list" :key="iIdx">
                  {{ $t(item) }}
                </li>
              </ul>
            </div>

            <!-- Special case for contact in section 6 -->
            <ul v-if="sIdx === 5" class="mt-4 space-y-2">
              <li>
                <strong>Email:</strong>
                <a
                  href="mailto:tuandtdeveloper@gmail.com"
                  class="ml-2 text-gold-dark hover:underline"
                  >tuandtdeveloper@gmail.com</a
                >
              </li>
              <li><strong>Zalo / Hotline:</strong> <span class="ml-2">0828.477.808</span></li>
            </ul>
          </LegalContentBlock>
        </LegalSection>

        <div v-if="sIdx < legalData.length - 1" class="earth-divider-wrap reveal-up">
          <div class="ed-line"></div>
          <div class="ed-gem"></div>
          <div class="ed-line"></div>
        </div>
      </div>
    </div>

    <LegalFooterNote />
  </div>
</template>

<script setup lang="ts">
import LegalHero from '@/components/legal/LegalHero.vue'
import LegalSection from '@/components/legal/LegalSection.vue'
import LegalContentBlock from '@/components/legal/LegalContentBlock.vue'
import LegalFooterNote from '@/components/legal/LegalFooterNote.vue'
import { legalData } from '@/data/legal_info'
import { onMounted } from 'vue'
import { WebName } from '@/constants'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #1a0f00 0%, #fdf6e9 15%, #f5ead0 100%);
  color: var(--color-earth-bark);
  padding-bottom: 5rem;
  position: relative;
  overflow-x: hidden;
}

/* Ambient Lights */
.page-ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.pa {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
}
.pa--1 {
  width: 400px;
  height: 400px;
  top: 20%;
  right: -150px;
  background: var(--color-gold-base);
}
.pa--2 {
  width: 500px;
  height: 300px;
  bottom: 20%;
  left: -200px;
  background: var(--color-terra-base);
}

.legal-content {
  max-width: 100%;
  margin: 0 auto;
}

/* Divider Styling */
.earth-divider-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.ed-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 146, 42, 0.4), transparent);
}
.ed-gem {
  width: 10px;
  height: 10px;
  background: var(--color-gold-base);
  transform: rotate(45deg);
  box-shadow: 0 0 10px rgba(200, 146, 42, 0.5);
}

/* Reveal Animation */
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

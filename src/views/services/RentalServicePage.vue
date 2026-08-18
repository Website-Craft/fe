<template>
  <div class="rental-page">
    <!-- ===== HERO SECTION ===== -->
    <section class="rental-hero">
      <div class="rental-hero-ambient" aria-hidden="true">
        <span class="rha rha--1"></span>
        <span class="rha rha--2"></span>
      </div>

      <div class="rental-container">
        <!-- Badge -->
        <div class="hero-badge">
          <span class="badge-pulse"></span>
          <span class="badge-text">{{ $t('RENTAL_PAGE.HERO.BADGE') }}</span>
        </div>

        <!-- Heading -->
        <h1 class="hero-title" v-html="$t('RENTAL_PAGE.HERO.TITLE')"></h1>

        <!-- Subtitle -->
        <p class="hero-desc">
          {{ $t('RENTAL_PAGE.HERO.DESC') }}
        </p>

        <!-- CTA Buttons -->
        <div class="hero-actions">
          <a href="#pricing-section" class="btn-primary-earth">
            <i class="pi pi-bolt mr-2"></i>
            {{ $t('RENTAL_PAGE.HERO.CTA_PRIMARY') }}
          </a>
          <a :href="SOCIALS.ZALO" target="_blank" class="btn-outline-earth">
            <i class="pi pi-comment mr-2"></i>
            {{ $t('RENTAL_PAGE.HERO.CTA_SECONDARY') }}
          </a>
        </div>

        <!-- Quick Stats -->
        <div class="hero-stats">
          <div class="stat-card">
            <span class="stat-number">{{ $t('RENTAL_PAGE.HERO.STATS_1_NUM') }}</span>
            <span class="stat-text">{{ $t('RENTAL_PAGE.HERO.STATS_1_TXT') }}</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">{{ $t('RENTAL_PAGE.HERO.STATS_2_NUM') }}</span>
            <span class="stat-text">{{ $t('RENTAL_PAGE.HERO.STATS_2_TXT') }}</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">{{ $t('RENTAL_PAGE.HERO.STATS_3_NUM') }}</span>
            <span class="stat-text">{{ $t('RENTAL_PAGE.HERO.STATS_3_TXT') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BENEFITS SECTION ===== -->
    <section class="rental-benefits">
      <div class="rental-container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="eyebrow-dot"></span>
            Ưu Điểm Vượt Trội
            <span class="eyebrow-dot"></span>
          </div>
          <h2 class="section-title">{{ $t('RENTAL_PAGE.BENEFITS.TITLE') }}</h2>
          <p class="section-sub">{{ $t('RENTAL_PAGE.BENEFITS.SUB') }}</p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <i class="pi pi-wallet text-2xl"></i>
            </div>
            <h3 class="benefit-title">{{ $t('RENTAL_PAGE.BENEFITS.B1_TITLE') }}</h3>
            <p class="benefit-desc">{{ $t('RENTAL_PAGE.BENEFITS.B1_DESC') }}</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <i class="pi pi-shield text-2xl"></i>
            </div>
            <h3 class="benefit-title">{{ $t('RENTAL_PAGE.BENEFITS.B2_TITLE') }}</h3>
            <p class="benefit-desc">{{ $t('RENTAL_PAGE.BENEFITS.B2_DESC') }}</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <i class="pi pi-bolt text-2xl"></i>
            </div>
            <h3 class="benefit-title">{{ $t('RENTAL_PAGE.BENEFITS.B3_TITLE') }}</h3>
            <p class="benefit-desc">{{ $t('RENTAL_PAGE.BENEFITS.B3_DESC') }}</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <i class="pi pi-sync text-2xl"></i>
            </div>
            <h3 class="benefit-title">{{ $t('RENTAL_PAGE.BENEFITS.B4_TITLE') }}</h3>
            <p class="benefit-desc">{{ $t('RENTAL_PAGE.BENEFITS.B4_DESC') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRICING SECTION ===== -->
    <rental-pricing-section />

    <!-- ===== PROCESS SECTION ===== -->
    <section class="rental-process">
      <div class="rental-container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="eyebrow-dot"></span>
            Triển Khai Thần Tốc
            <span class="eyebrow-dot"></span>
          </div>
          <h2 class="section-title">{{ $t('RENTAL_PAGE.PROCESS.TITLE') }}</h2>
          <p class="section-sub">{{ $t('RENTAL_PAGE.PROCESS.SUB') }}</p>
        </div>

        <div class="process-grid">
          <div class="process-step">
            <div class="step-num">01</div>
            <h3 class="step-title">{{ $t('RENTAL_PAGE.PROCESS.S1_TITLE') }}</h3>
            <p class="step-desc">{{ $t('RENTAL_PAGE.PROCESS.S1_DESC') }}</p>
          </div>
          <div class="process-step">
            <div class="step-num">02</div>
            <h3 class="step-title">{{ $t('RENTAL_PAGE.PROCESS.S2_TITLE') }}</h3>
            <p class="step-desc">{{ $t('RENTAL_PAGE.PROCESS.S2_DESC') }}</p>
          </div>
          <div class="process-step">
            <div class="step-num">03</div>
            <h3 class="step-title">{{ $t('RENTAL_PAGE.PROCESS.S3_TITLE') }}</h3>
            <p class="step-desc">{{ $t('RENTAL_PAGE.PROCESS.S3_DESC') }}</p>
          </div>
          <div class="process-step">
            <div class="step-num">04</div>
            <h3 class="step-title">{{ $t('RENTAL_PAGE.PROCESS.S4_TITLE') }}</h3>
            <p class="step-desc">{{ $t('RENTAL_PAGE.PROCESS.S4_DESC') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FAQ SECTION ===== -->
    <faq-section />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import RentalPricingSection from '@/components/template/RentalPricingSection.vue'
import FaqSection from '@/components/common/FaqSection.vue'
import { SOCIALS } from '@/constants'
import { updateSeoMeta } from '@/utils/seo'

defineOptions({ name: 'RentalServicePage' })

onMounted(() => {
  updateSeoMeta({
    title: 'Dịch Vụ Thuê Website Trọn Gói Giá Rẻ Chuẩn SEO',
    description:
      'Dịch vụ cho thuê website theo tháng chuyên nghiệp, giá tốt nhất. Miễn phí hosting tốc độ cao, bảo mật SSL, chuẩn SEO Google, bàn giao trong 24h tại KhoWeb.shop.',
    keywords:
      'thuê website, thuê web, thuê website theo tháng, dịch vụ thuê website, thuê web bán hàng, báo giá thuê website, thuê landing page giá rẻ, khoweb shop',
    canonicalUrl: '/services/rental',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Dịch Vụ Cho Thuê Website Chuẩn SEO Trọn Gói',
      provider: {
        '@type': 'Organization',
        name: 'KhoWeb.shop',
        url: 'https://www.khoweb.shop',
      },
      serviceType: 'Website Rental Service',
      description:
        'Cung cấp dịch vụ thuê website định kỳ trọn gói, miễn phí hosting, SSL, bảo trì và chuẩn SEO 100%. Liên hệ để nhận báo giá ưu đãi.',
    },
  })
})
</script>

<style scoped>
.rental-page {
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #0d0700 0%,
    #1a0f00 15%,
    #fdf6e9 35%,
    #f5ead0 70%,
    #fdf6e9 100%
  );
  position: relative;
  overflow-x: hidden;
  padding-top: 100px;
}

.rental-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===== HERO ===== */
.rental-hero {
  position: relative;
  padding: 40px 0 80px;
  text-align: center;
  z-index: 1;
}

.rental-hero-ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.rha {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
}

.rha--1 {
  width: 500px;
  height: 400px;
  top: -50px;
  left: 10%;
  background: radial-gradient(ellipse, #c8922a, transparent 70%);
}

.rha--2 {
  width: 450px;
  height: 450px;
  top: 10%;
  right: 10%;
  background: radial-gradient(ellipse, #b85c38, transparent 70%);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(200, 146, 42, 0.15);
  border: 1px solid rgba(200, 146, 42, 0.4);
  border-radius: 100px;
  backdrop-filter: blur(10px);
  margin-bottom: 24px;
}

.badge-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d4a849;
  box-shadow: 0 0 8px rgba(212, 168, 73, 0.8);
}

.badge-text {
  font-size: 13px;
  font-weight: 700;
  color: #e8c675;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  color: #fdf6e9;
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

:deep(.title-highlight) {
  background: linear-gradient(135deg, #c8922a, #e8c675, #d4a849);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(245, 234, 208, 0.8);
  max-width: 720px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 60px;
}

.btn-primary-earth {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  border-radius: 100px;
  background: linear-gradient(135deg, #c8922a 0%, #d4a849 40%, #b85c38 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 8px 28px rgba(200, 146, 42, 0.45);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary-earth:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 40px rgba(200, 146, 42, 0.6);
}

.btn-outline-earth {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.08);
  border: 1.5px solid rgba(200, 146, 42, 0.4);
  color: #fdf6e9;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-outline-earth:hover {
  background: rgba(200, 146, 42, 0.25);
  border-color: #c8922a;
  transform: translateY(-3px);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

.stat-card {
  background: rgba(26, 15, 0, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(200, 146, 42, 0.25);
  border-radius: 16px;
  padding: 20px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 900;
  color: #e8c675;
  margin-bottom: 4px;
}

.stat-text {
  font-size: 0.85rem;
  color: rgba(245, 234, 208, 0.7);
  font-weight: 500;
}

/* ===== BENEFITS ===== */
.rental-benefits {
  padding: 80px 0 40px;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
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
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
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
  max-width: 580px;
  margin: 0 auto;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.benefit-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(200, 146, 42, 0.22);
  border-radius: 20px;
  padding: 32px 24px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(92, 58, 30, 0.04);
}

.benefit-card:hover {
  transform: translateY(-6px);
  border-color: rgba(200, 146, 42, 0.5);
  box-shadow: 0 18px 36px rgba(200, 146, 42, 0.15);
}

.benefit-icon-wrap {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(200, 146, 42, 0.15), rgba(184, 92, 56, 0.1));
  border: 1px solid rgba(200, 146, 42, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c8922a;
  margin-bottom: 20px;
}

.benefit-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #3a2210;
  margin-bottom: 10px;
  line-height: 1.35;
}

.benefit-desc {
  font-size: 0.92rem;
  color: #6b472a;
  line-height: 1.6;
}

/* ===== PROCESS ===== */
.rental-process {
  padding: 60px 0 80px;
  position: relative;
  z-index: 2;
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.process-step {
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(200, 146, 42, 0.2);
  border-radius: 20px;
  padding: 32px 24px;
  position: relative;
  transition: all 0.3s;
}

.process-step:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: #c8922a;
  transform: translateY(-4px);
}

.step-num {
  font-size: 2.2rem;
  font-weight: 900;
  color: rgba(200, 146, 42, 0.25);
  font-family: 'Playfair Display', serif;
  line-height: 1;
  margin-bottom: 14px;
}

.step-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #3a2210;
  margin-bottom: 8px;
}

.step-desc {
  font-size: 0.9rem;
  color: #6b472a;
  line-height: 1.55;
}
</style>

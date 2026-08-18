<template>
  <section class="rental-pricing-section" id="pricing-section">
    <div class="pricing-container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-dot"></span>
          {{ $t('PRICING_TABLE.BADGE') }}
          <span class="eyebrow-dot"></span>
        </div>
        <h2 class="section-title">
          {{ $t('PRICING_TABLE.TITLE') }}
        </h2>
        <p class="section-sub">{{ $t('PRICING_TABLE.SUB') }}</p>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="pricing-grid">
        <!-- Plan 1: Starter Rental -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="plan-name">{{ $t('PRICING_TABLE.PLAN_STARTER.NAME') }}</h3>
            <p class="plan-desc">{{ $t('PRICING_TABLE.PLAN_STARTER.DESC') }}</p>
            <div class="plan-price-wrap">
              <span class="plan-price">{{ $t('PRICING_TABLE.PLAN_STARTER.PRICE') }}</span>
              <span class="plan-period">{{ $t('PRICING_TABLE.PLAN_STARTER.PERIOD') }}</span>
            </div>
          </div>

          <div class="card-divider"></div>

          <ul class="features-list">
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_STARTER.F1') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_STARTER.F2') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_STARTER.F3') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_STARTER.F4') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_STARTER.F5') }}</span>
            </li>
          </ul>

          <a :href="SOCIALS.ZALO" target="_blank" class="plan-btn plan-btn--outline">
            <i class="pi pi-comment mr-2"></i>
            {{ $t('PRICING_TABLE.PLAN_STARTER.CTA') }}
          </a>
        </div>

        <!-- Plan 2: Business Rental (Popular) -->
        <div class="pricing-card pricing-card--featured">
          <div class="featured-badge">
            <i class="pi pi-star-fill text-xs mr-1"></i>
            {{ $t('PRICING_TABLE.PLAN_BUSINESS.POPULAR') }}
          </div>

          <div class="card-header">
            <h3 class="plan-name">{{ $t('PRICING_TABLE.PLAN_BUSINESS.NAME') }}</h3>
            <p class="plan-desc">{{ $t('PRICING_TABLE.PLAN_BUSINESS.DESC') }}</p>
            <div class="plan-price-wrap">
              <span class="plan-price text-gradient-amber">{{
                $t('PRICING_TABLE.PLAN_BUSINESS.PRICE')
              }}</span>
              <span class="plan-period">{{ $t('PRICING_TABLE.PLAN_BUSINESS.PERIOD') }}</span>
            </div>
          </div>

          <div class="card-divider"></div>

          <ul class="features-list">
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon feature-icon--amber"></i>
              <strong>{{ $t('PRICING_TABLE.PLAN_BUSINESS.F1') }}</strong>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon feature-icon--amber"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_BUSINESS.F2') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon feature-icon--amber"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_BUSINESS.F3') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon feature-icon--amber"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_BUSINESS.F4') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon feature-icon--amber"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_BUSINESS.F5') }}</span>
            </li>
          </ul>

          <a :href="SOCIALS.ZALO" target="_blank" class="plan-btn plan-btn--primary">
            <i class="pi pi-bolt mr-2"></i>
            {{ $t('PRICING_TABLE.PLAN_BUSINESS.CTA') }}
          </a>
        </div>

        <!-- Plan 3: Lifetime Code Purchase -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="plan-name">{{ $t('PRICING_TABLE.PLAN_LIFETIME.NAME') }}</h3>
            <p class="plan-desc">{{ $t('PRICING_TABLE.PLAN_LIFETIME.DESC') }}</p>
            <div class="plan-price-wrap">
              <span class="plan-price">{{ $t('PRICING_TABLE.PLAN_LIFETIME.PRICE') }}</span>
              <span class="plan-period">{{ $t('PRICING_TABLE.PLAN_LIFETIME.PERIOD') }}</span>
            </div>
          </div>

          <div class="card-divider"></div>

          <ul class="features-list">
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <strong>{{ $t('PRICING_TABLE.PLAN_LIFETIME.F1') }}</strong>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_LIFETIME.F2') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_LIFETIME.F3') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_LIFETIME.F4') }}</span>
            </li>
            <li class="feature-item">
              <i class="pi pi-check-circle feature-icon"></i>
              <span>{{ $t('PRICING_TABLE.PLAN_LIFETIME.F5') }}</span>
            </li>
          </ul>

          <a :href="SOCIALS.ZALO" target="_blank" class="plan-btn plan-btn--outline">
            <i class="pi pi-shield mr-2"></i>
            {{ $t('PRICING_TABLE.PLAN_LIFETIME.CTA') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SOCIALS } from '@/constants'

defineOptions({ name: 'RentalPricingSection' })
</script>

<style scoped>
.rental-pricing-section {
  padding: 60px 16px 80px;
  position: relative;
  z-index: 2;
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
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
  line-height: 1.2;
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

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: stretch;
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(200, 146, 42, 0.22);
  border-radius: 24px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(92, 58, 30, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pricing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(200, 146, 42, 0.15);
  border-color: rgba(200, 146, 42, 0.45);
}

.pricing-card--featured {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(253, 246, 233, 0.95) 100%
  );
  border: 2px solid #c8922a;
  box-shadow:
    0 16px 40px rgba(200, 146, 42, 0.2),
    0 0 0 1px rgba(200, 146, 42, 0.2);
  transform: scale(1.03);
}

@media (max-width: 767px) {
  .pricing-card--featured {
    transform: none;
  }
}

.pricing-card--featured:hover {
  transform: translateY(-6px) scale(1.03);
}

@media (max-width: 767px) {
  .pricing-card--featured:hover {
    transform: translateY(-6px);
  }
}

.featured-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #c8922a, #d4a849);
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 16px;
  border-radius: 100px;
  box-shadow: 0 4px 12px rgba(200, 146, 42, 0.4);
  white-space: nowrap;
}

.card-header {
  margin-bottom: 20px;
}

.plan-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #3a2210;
  margin-bottom: 8px;
}

.plan-desc {
  font-size: 0.88rem;
  color: #7b4f2e;
  line-height: 1.5;
  min-height: 42px;
}

.plan-price-wrap {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-top: 14px;
}

.plan-price {
  font-size: 2rem;
  font-weight: 900;
  color: #3a2210;
  line-height: 1;
}

.text-gradient-amber {
  background: linear-gradient(135deg, #c8922a, #b85c38);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.plan-period {
  font-size: 0.85rem;
  color: #8b5e3c;
  font-weight: 600;
}

.card-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 146, 42, 0.25), transparent);
  margin-bottom: 24px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.92rem;
  color: #5c3a1e;
  line-height: 1.4;
}

.feature-icon {
  color: #6b8f5e;
  font-size: 1rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.feature-icon--amber {
  color: #c8922a;
}

.plan-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
}

.plan-btn--primary {
  background: linear-gradient(135deg, #c8922a 0%, #d4a849 40%, #b85c38 100%);
  color: #fff;
  box-shadow: 0 8px 24px rgba(200, 146, 42, 0.4);
}

.plan-btn--primary:hover {
  box-shadow: 0 12px 30px rgba(200, 146, 42, 0.6);
  transform: translateY(-2px);
}

.plan-btn--outline {
  background: rgba(200, 146, 42, 0.08);
  border: 1.5px solid rgba(200, 146, 42, 0.4);
  color: #8b5e3c;
}

.plan-btn--outline:hover {
  background: #c8922a;
  border-color: #c8922a;
  color: #fff;
  transform: translateY(-2px);
}
</style>

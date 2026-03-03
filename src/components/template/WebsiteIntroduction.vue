<template>
  <div class="website-introduction">
    <!-- Decorative top border -->
    <div class="intro-topbar"></div>

    <div class="intro-inner">
      <!-- Floating particles background -->
      <div class="particles-bg" aria-hidden="true">
        <span v-for="n in 12" :key="n" class="particle" :style="particleStyle(n)"></span>
      </div>

      <!-- Decorative circles -->
      <div class="deco-circle deco-circle--1" aria-hidden="true"></div>
      <div class="deco-circle deco-circle--2" aria-hidden="true"></div>

      <div class="intro-content">
        <!-- Badge -->
        <div class="intro-badge">
          <span class="badge-dot"></span>
          <span>{{ $t('HOME.WELCOME_TITLE') }}</span>
        </div>

        <!-- Main heading -->
        <h2 class="intro-heading">
          <span class="heading-line heading-line--1">Kiến tạo</span>
          <span class="heading-line heading-line--2 shimmer-text">Website Đẳng Cấp</span>
          <span class="heading-line heading-line--3">Cho Thương Hiệu Của Bạn</span>
        </h2>

        <!-- Divider -->
        <div class="intro-divider">
          <span class="divider-gem"></span>
        </div>

        <!-- Description -->
        <p class="intro-desc">
          {{ $t('HOME.CONTENT') }}
        </p>

        <!-- CTA buttons -->
        <div class="intro-actions">
          <button
            class="btn-primary-earth"
            @mouseenter="onHoverPrimary"
            @mouseleave="onLeavePrimary"
          >
            <span class="btn-shimmer"></span>
            <span class="btn-inner">
              <svg
                class="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {{ $t('COMMON.VIEW_PROJECTS') }}
            </span>
          </button>

          <button class="btn-outline-earth">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="btn-outline-icon"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
            Tìm hiểu thêm
          </button>
        </div>

        <!-- Stats row -->
        <div class="intro-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-number shimmer-text">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom wave -->
    <div class="intro-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FDF6E9" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'WebsiteIntroduction' })

const stats = ref([
  { value: '1000+', label: 'Templates' },
  { value: '50+', label: 'Lĩnh vực' },
  { value: '99%', label: 'Hài lòng' },
  { value: '24/7', label: 'Hỗ trợ' },
])

function particleStyle(n: number) {
  const size = (Math.random() * 6 + 3).toFixed(1)
  const left = ((n - 1) * 8.5 + Math.random() * 5).toFixed(1)
  const delay = (Math.random() * 4).toFixed(2)
  const dur = (3 + Math.random() * 4).toFixed(2)
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    bottom: `${Math.random() * 30}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
  }
}

function onHoverPrimary(e: MouseEvent) {
  const btn = e.currentTarget as HTMLElement
  btn.style.transform = 'translateY(-3px) scale(1.02)'
}
function onLeavePrimary(e: MouseEvent) {
  const btn = e.currentTarget as HTMLElement
  btn.style.transform = ''
}
</script>

<style scoped>
/* === Container === */
.website-introduction {
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, #3a2210 0%, #5c3a1e 30%, #7b4f2e 60%, #5c3a1e 100%);
  margin: 0;
  border-radius: 0;
}

.intro-topbar {
  height: 4px;
  background: linear-gradient(
    90deg,
    #c8922a 0%,
    #e8c675 30%,
    #d4a849 50%,
    #b85c38 70%,
    #c8922a 100%
  );
  background-size: 200% auto;
  animation: earth-shimmer 3s linear infinite;
}

.intro-inner {
  position: relative;
  padding: 80px 24px 100px;
  z-index: 1;
}

/* === Particles === */
.particles-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, #e8c675, #c8922a);
  opacity: 0;
  animation: earth-particle var(--dur, 5s) ease-out var(--delay, 0s) infinite;
}

/* === Decorative circles === */
.deco-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.deco-circle--1 {
  width: 460px;
  height: 460px;
  top: -150px;
  right: -100px;
  background: radial-gradient(circle, rgba(200, 146, 42, 0.15) 0%, transparent 70%);
  animation: earth-float 6s ease-in-out infinite;
}
.deco-circle--2 {
  width: 300px;
  height: 300px;
  bottom: -80px;
  left: -60px;
  background: radial-gradient(circle, rgba(184, 92, 56, 0.2) 0%, transparent 70%);
  animation: earth-float 8s ease-in-out 2s infinite;
}

/* === Content === */
.intro-content {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

/* === Badge === */
.intro-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(200, 146, 42, 0.15);
  border: 1px solid rgba(200, 146, 42, 0.4);
  border-radius: 100px;
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 500;
  color: #e8c675;
  letter-spacing: 0.5px;
  margin-bottom: 28px;
  backdrop-filter: blur(8px);
}
.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d4a849;
  animation: earth-glow-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}

/* === Heading === */
.intro-heading {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: 'Playfair Display', serif;
  line-height: 1.15;
  margin-bottom: 28px;
}
.heading-line {
  display: block;
}
.heading-line--1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 600;
  color: #f5ead0;
  opacity: 0.85;
}
.heading-line--2 {
  font-size: clamp(2.6rem, 7vw, 4.5rem);
  font-weight: 800;
}
.heading-line--3 {
  font-size: clamp(1.4rem, 3.5vw, 2rem);
  font-weight: 400;
  color: #c4956a;
  letter-spacing: 1px;
}

/* === Divider === */
.intro-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin: 24px auto;
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #c8922a, #e8c675, #c8922a, transparent);
  position: relative;
}
.divider-gem {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #d4a849;
  border: 2px solid #e8c675;
  border-radius: 2px;
  transform: rotate(45deg);
  box-shadow: 0 0 10px rgba(212, 168, 73, 0.8);
}

/* === Description === */
.intro-desc {
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.8;
  color: rgba(245, 234, 208, 0.75);
  max-width: 600px;
  margin: 0 auto 40px;
}

/* === CTA Buttons === */
.intro-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.btn-primary-earth {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  background: linear-gradient(135deg, #c8922a 0%, #d4a849 50%, #b85c38 100%);
  border: none;
  border-radius: 100px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 8px 30px rgba(200, 146, 42, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.3px;
}
.btn-primary-earth:hover {
  box-shadow:
    0 12px 40px rgba(200, 146, 42, 0.6),
    0 4px 12px rgba(0, 0, 0, 0.4);
}
.btn-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.25) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: earth-shimmer 2.5s linear infinite;
}
.btn-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-icon {
  width: 18px;
  height: 18px;
}

.btn-outline-earth {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: transparent;
  border: 1.5px solid rgba(200, 146, 42, 0.5);
  border-radius: 100px;
  color: #e8c675;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  letter-spacing: 0.3px;
}
.btn-outline-earth:hover {
  background: rgba(200, 146, 42, 0.1);
  border-color: #c8922a;
  color: #fff0c0;
  transform: translateY(-2px);
}
.btn-outline-icon {
  width: 16px;
  height: 16px;
}

/* === Stats === */
.intro-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
  padding-top: 24px;
  border-top: 1px solid rgba(200, 146, 42, 0.2);
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
}
.stat-label {
  font-size: 12px;
  font-weight: 500;
  color: rgba(196, 149, 106, 0.8);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* === Wave === */
.intro-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 0;
}
.intro-wave svg {
  width: 100%;
  height: 100%;
}

/* === Keyframes (scoped copies) === */
@keyframes earth-shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}
@keyframes earth-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}
@keyframes earth-glow-pulse {
  0%,
  100% {
    box-shadow: 0 0 6px rgba(212, 168, 73, 0.5);
  }
  50% {
    box-shadow: 0 0 14px rgba(212, 168, 73, 0.9);
  }
}
@keyframes earth-particle {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  15% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) scale(1.5);
  }
}
</style>

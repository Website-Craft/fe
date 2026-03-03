<template>
  <div class="tech-showcase">
    <!-- Top accent bar -->
    <div class="showcase-topbar" aria-hidden="true"></div>

    <!-- Bg texture orbs -->
    <div class="orb orb--1" aria-hidden="true"></div>
    <div class="orb orb--2" aria-hidden="true"></div>
    <div class="orb orb--3" aria-hidden="true"></div>

    <div class="showcase-inner">
      <!-- Header -->
      <div class="showcase-header">
        <div class="header-badge">
          <i class="pi pi-server badge-pi"></i>
          <span>Công nghệ</span>
        </div>
        <h2 class="showcase-title">
          {{ $t('HOME.TECHNOLOGY.TITLE') }}
        </h2>
        <div class="title-underline">
          <span class="underline-gem"></span>
        </div>
        <p class="showcase-subtitle">
          {{ $t('HOME.TECHNOLOGY.CONTENT') }}
        </p>
      </div>

      <!-- Tech cards grid -->
      <div class="tech-grid">
        <div
          v-for="(tech, idx) in technologies"
          :key="tech.name"
          class="tech-card"
          :style="{ '--idx': idx }"
          @mouseenter="onCardEnter"
          @mouseleave="onCardLeave"
        >
          <!-- Glow effect on hover -->
          <div class="card-glow" aria-hidden="true"></div>

          <!-- Icon circle -->
          <div class="card-icon-wrap">
            <div class="card-icon-ring" aria-hidden="true"></div>
            <span class="card-icon-circle">
              <i :class="tech.icon" class="pi card-pi"></i>
            </span>
          </div>

          <!-- Content -->
          <h3 class="card-title">{{ tech.name }}</h3>
          <p class="card-desc">{{ $t(tech.description) }}</p>

          <!-- Bottom accent -->
          <div class="card-bottom-accent"></div>
        </div>
      </div>

      <!-- Bottom CTA strip -->
      <div class="showcase-cta">
        <span class="cta-line"></span>
        <span class="cta-text">Và nhiều công nghệ hiện đại khác</span>
        <span class="cta-line"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { technologies } from '@/data/technology'

defineOptions({ name: 'TechnologyShowcase' })

function onCardEnter(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const glow = card.querySelector('.card-glow') as HTMLElement
  card.style.transform = 'translateY(-8px) scale(1.02)'
  if (glow) glow.style.opacity = '1'
}
function onCardLeave(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const glow = card.querySelector('.card-glow') as HTMLElement
  card.style.transform = ''
  if (glow) glow.style.opacity = '0'
}
</script>

<style scoped>
/* === Wrapper === */
.tech-showcase {
  position: relative;
  overflow: hidden;
  background: linear-gradient(170deg, #fdf6e9 0%, #f5ead0 40%, #edd9b0 80%, #f5ead0 100%);
  padding-bottom: 80px;
  border-radius: 24px;
  margin: 0 4px;
}

.showcase-topbar {
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #b85c38 20%,
    #c8922a 40%,
    #e8c675 50%,
    #c8922a 60%,
    #b85c38 80%,
    transparent 100%
  );
}

/* === Floating orbs === */
.orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.orb--1 {
  width: 500px;
  height: 500px;
  top: -200px;
  right: -150px;
  background: radial-gradient(circle, rgba(200, 146, 42, 0.12) 0%, transparent 70%);
  animation: earth-float 7s ease-in-out infinite;
}
.orb--2 {
  width: 350px;
  height: 350px;
  bottom: -100px;
  left: -80px;
  background: radial-gradient(circle, rgba(184, 92, 56, 0.1) 0%, transparent 70%);
  animation: earth-float 9s ease-in-out 3s infinite;
}
.orb--3 {
  width: 200px;
  height: 200px;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(212, 168, 73, 0.08) 0%, transparent 70%);
  animation: earth-float 5s ease-in-out 1s infinite;
}

/* === Inner === */
.showcase-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px 48px;
  position: relative;
  z-index: 1;
}

/* === Header === */
.showcase-header {
  text-align: center;
  margin-bottom: 64px;
}
.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(92, 58, 30, 0.08);
  border: 1px solid rgba(92, 58, 30, 0.2);
  border-radius: 100px;
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 600;
  color: #8b5e3c;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.badge-pi {
  font-size: 14px;
  color: #c8922a;
}
.showcase-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #5c3a1e 0%, #8b5e3c 40%, #c8922a 70%, #d4a849 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin-bottom: 16px;
}
.title-underline {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #c8922a, #e8c675, #c8922a, transparent);
  margin: 0 auto 24px;
  position: relative;
}
.underline-gem {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #d4a849;
  border: 2px solid #e8c675;
  border-radius: 2px;
  transform: rotate(45deg);
  box-shadow: 0 0 8px rgba(212, 168, 73, 0.8);
}
.showcase-subtitle {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #7b4f2e;
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.7;
  opacity: 0.85;
}

/* === Tech Grid === */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

/* === Tech Card === */
.tech-card {
  position: relative;
  background: linear-gradient(145deg, rgba(255, 250, 240, 0.9) 0%, rgba(245, 234, 208, 0.8) 100%);
  border: 1px solid rgba(200, 146, 42, 0.2);
  border-radius: 20px;
  padding: 36px 24px 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: card-rise 0.6s ease forwards;
  animation-delay: calc(var(--idx, 0) * 0.1s);
  opacity: 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(92, 58, 30, 0.08);
  cursor: default;
}
.tech-card:hover {
  box-shadow:
    0 20px 50px rgba(92, 58, 30, 0.18),
    0 0 0 1px rgba(200, 146, 42, 0.35);
  border-color: rgba(200, 146, 42, 0.45);
}

@keyframes card-rise {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glow effect */
.card-glow {
  position: absolute;
  inset: -2px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(200, 146, 42, 0.25), rgba(184, 92, 56, 0.15));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
  pointer-events: none;
}

/* Icon */
.card-icon-wrap {
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
}
.card-icon-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px dashed rgba(200, 146, 42, 0.35);
  animation: earth-spin-slow 8s linear infinite;
}
.card-icon-circle {
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #c8922a 0%, #d4a849 50%, #b85c38 100%);
  box-shadow: 0 8px 24px rgba(200, 146, 42, 0.35);
  transition: all 0.3s ease;
  z-index: 1;
}
.tech-card:hover .card-icon-circle {
  box-shadow: 0 12px 32px rgba(200, 146, 42, 0.55);
  transform: scale(1.08);
}
.card-pi {
  font-size: 24px;
  color: #fff;
}

/* Card text */
.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #5c3a1e;
  margin-bottom: 12px;
  text-align: center;
  position: relative;
  z-index: 1;
}
.card-desc {
  font-size: 0.9rem;
  color: #7b4f2e;
  line-height: 1.65;
  text-align: center;
  opacity: 0.85;
  position: relative;
  z-index: 1;
}

/* Bottom accent on card */
.card-bottom-accent {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #c8922a, #e8c675);
  border-radius: 2px;
  transition: width 0.4s ease;
}
.tech-card:hover .card-bottom-accent {
  width: 60%;
}

/* === CTA strip === */
.showcase-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.cta-line {
  flex: 1;
  max-width: 200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 146, 42, 0.4));
}
.cta-line:last-child {
  background: linear-gradient(90deg, rgba(200, 146, 42, 0.4), transparent);
}
.cta-text {
  font-size: 13px;
  font-weight: 500;
  color: #8b5e3c;
  white-space: nowrap;
  letter-spacing: 0.5px;
}

/* === Keyframes (scoped) === */
@keyframes earth-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}
@keyframes earth-spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

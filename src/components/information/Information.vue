<template>
  <div class="info-card">
    <!-- ===== GLASSMORPHISM FRAME ===== -->
    <div class="info-glass-frame" aria-hidden="true">
      <span class="frame-corner frame-corner--tl"></span>
      <span class="frame-corner frame-corner--tr"></span>
      <span class="frame-corner frame-corner--bl"></span>
      <span class="frame-corner frame-corner--br"></span>
    </div>

    <!-- ===== FLOATING PARTICLES ===== -->
    <div class="info-particles" aria-hidden="true">
      <span v-for="n in 8" :key="n" class="info-particle" :style="particleStyle(n)"></span>
    </div>

    <!-- ===== SERVICE BADGE ===== -->
    <div class="info-top">
      <div class="service-badge">
        <span class="badge-pulse"></span>
        <svg
          class="badge-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span class="badge-text sm:mx-4 whitespace-normal sm:whitespace-nowrap">{{ $t('HOME.TITLE', { name: WebName.WEB_NAME }) }}</span>
        <svg
          class="badge-arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </div>

    <!-- ===== HEADLINE ===== -->
    <h1 class="info-headline">
      <span class="headline-line headline-line--1">
        {{ $t('HOME.MORE') }}
        <span class="headline-number">
          <span class="number-text">1000+</span>
          <span class="number-glow" aria-hidden="true">1000+</span>
        </span>
        {{ $t('HOME.TEMPLATE_WEBSITE') }}
      </span>
      <span class="headline-line headline-line--2">
        {{ $t('HOME.PROFESSIONAL') }}
        <span class="headline-domains">{{ $t('HOME.MULTIPLE_DOMAINS') }}</span>
      </span>
    </h1>

    <!-- ===== DIVIDER ===== -->
    <div class="info-divider" aria-hidden="true">
      <span class="divider-track">
        <span class="divider-shine"></span>
      </span>
      <span class="divider-gem">◆</span>
      <span class="divider-track">
        <span class="divider-shine" style="animation-delay: 0.5s"></span>
      </span>
    </div>

    <!-- ===== CTA BUTTON ===== -->
    <div class="info-cta">
      <button class="cta-btn" @mouseenter="onBtnHover" @mouseleave="onBtnLeave" ref="ctaBtn">
        <!-- Shimmer sweep -->
        <span class="cta-shimmer" aria-hidden="true"></span>
        <!-- Rotating ring -->
        <span class="cta-ring" aria-hidden="true"></span>
        <!-- Content -->
        <span class="cta-inner">
          <span class="cta-icon-wrap">
            <svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </span>
          <span class="cta-letters">
            <span
              v-for="(char, i) in 'ViewTemplate'.split('')"
              :key="i"
              class="cta-char"
              :style="{ '--ci': i }"
              >{{ char }}</span
            >
          </span>
        </span>
      </button>

      <!-- Secondary pill -->
      <div class="info-stats-pill">
        <span class="stats-dot"></span>
        <span class="stats-txt">Cập nhật liên tục mỗi tuần</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WebName } from '@/constants'

defineOptions({ name: 'InformationComponent' })


function onBtnHover(e: MouseEvent) {
  const btn = e.currentTarget as HTMLElement
  btn.style.transform = 'translateY(-3px) scale(1.03)'
}

function onBtnLeave(e: MouseEvent) {
  const btn = e.currentTarget as HTMLElement
  btn.style.transform = ''
}

function particleStyle(n: number) {
  const size = (Math.random() * 4 + 2).toFixed(1)
  const left = (n * 12 + Math.random() * 6 - 3).toFixed(1)
  const top = (Math.random() * 80 + 5).toFixed(1)
  const delay = (Math.random() * 3).toFixed(2)
  const dur = (2.5 + Math.random() * 3).toFixed(2)
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    '--p-delay': `${delay}s`,
    '--p-dur': `${dur}s`,
  }
}
</script>

<style scoped>
/* ========================
   CARD WRAPPER
======================== */
.info-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 28px 32px 24px;
  border-radius: 24px;
  overflow: hidden;

  /* Glassmorphism background */
  background: linear-gradient(
    135deg,
    rgba(26, 15, 0, 0.75) 0%,
    rgba(42, 22, 8, 0.7) 50%,
    rgba(26, 15, 0, 0.78) 100%
  );
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border: 1px solid rgba(200, 146, 42, 0.22);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(200, 146, 42, 0.08),
    inset 0 1px 0 rgba(255, 240, 192, 0.08);
  transition: all 0.4s ease;
}
.info-card:hover {
  box-shadow:
    0 28px 80px rgba(0, 0, 0, 0.55),
    0 0 0 1.5px rgba(200, 146, 42, 0.3),
    inset 0 1px 0 rgba(255, 240, 192, 0.12);
  border-color: rgba(200, 146, 42, 0.35);
}

/* ========================
   GLASS FRAME CORNERS
======================== */
.info-glass-frame {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.frame-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: rgba(200, 146, 42, 0.5);
  border-style: solid;
  transition: opacity 0.3s;
}
.frame-corner--tl {
  top: 8px;
  left: 8px;
  border-width: 2px 0 0 2px;
  border-radius: 4px 0 0 0;
}
.frame-corner--tr {
  top: 8px;
  right: 8px;
  border-width: 2px 2px 0 0;
  border-radius: 0 4px 0 0;
}
.frame-corner--bl {
  bottom: 8px;
  left: 8px;
  border-width: 0 0 2px 2px;
  border-radius: 0 0 0 4px;
}
.frame-corner--br {
  bottom: 8px;
  right: 8px;
  border-width: 0 2px 2px 0;
  border-radius: 0 0 4px 0;
}
.info-card:hover .frame-corner {
  border-color: rgba(212, 168, 73, 0.8);
}

/* ========================
   PARTICLES
======================== */
.info-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.info-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(212, 168, 73, 0.6);
  animation: ip-float var(--p-dur, 3s) ease-in-out var(--p-delay, 0s) infinite alternate;
}
@keyframes ip-float {
  from {
    opacity: 0;
    transform: translateY(0) scale(0.5);
  }
  to {
    opacity: 0.5;
    transform: translateY(-12px) scale(1.2);
  }
}

/* ========================
   ALL CONTENT z-index
======================== */
.info-top,
.info-headline,
.info-divider,
.info-cta {
  position: relative;
  z-index: 1;
}

/* ========================
   SERVICE BADGE
======================== */
.service-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px 7px 10px;
  background: linear-gradient(135deg, rgba(200, 146, 42, 0.18) 0%, rgba(184, 92, 56, 0.12) 100%);
  border: 1px solid rgba(200, 146, 42, 0.35);
  border-radius: 100px;
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all 0.3s ease;
}
.service-badge:hover {
  background: linear-gradient(135deg, rgba(200, 146, 42, 0.28), rgba(184, 92, 56, 0.2));
  border-color: rgba(200, 146, 42, 0.6);
  transform: translateY(-1px);
}
.badge-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d4a849;
  flex-shrink: 0;
  animation: badge-blink 1.8s ease-in-out infinite;
  box-shadow: 0 0 6px rgba(212, 168, 73, 0.7);
}
@keyframes badge-blink {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 4px rgba(212, 168, 73, 0.5);
  }
  50% {
    opacity: 0.4;
    box-shadow: 0 0 10px rgba(212, 168, 73, 0.8);
  }
}
.badge-icon {
  width: 14px;
  height: 14px;
  color: #e8c675;
  flex-shrink: 0;
}
.badge-text {
  font-size: 12px;
  font-weight: 700;
  color: #e8c675;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.badge-arrow {
  width: 14px;
  height: 14px;
  color: rgba(232, 198, 117, 0.6);
  transition: transform 0.3s;
}
.service-badge:hover .badge-arrow {
  transform: translateX(3px);
}

/* ========================
   HEADLINE
======================== */
.info-headline {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
  font-family: 'Playfair Display', serif;
}
.headline-line {
  display: block;
  color: #fdf6e9;
  line-height: 1.2;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}
.headline-line--1 {
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  font-weight: 700;
}
.headline-line--2 {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 500;
  color: rgba(245, 234, 208, 0.75);
}

/* Number highlight */
.headline-number {
  position: relative;
  display: inline-block;
}
.number-text {
  background: linear-gradient(135deg, #c8922a 0%, #e8c675 50%, #d4a849 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
}
.number-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #c8922a, #e8c675);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: blur(8px);
  opacity: 0.45;
  animation: num-glow 2.5s ease-in-out infinite;
  pointer-events: none;
}
@keyframes num-glow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
}

/* Domains text */
.headline-domains {
  background: linear-gradient(135deg, #6b8f5e, #9bc48d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

/* ========================
   DIVIDER
======================== */
.info-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 80%;
}
.divider-track {
  flex: 1;
  height: 1px;
  background: rgba(200, 146, 42, 0.2);
  border-radius: 1px;
  overflow: hidden;
  position: relative;
}
.divider-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(212, 168, 73, 0.8), transparent);
  animation: shine-sweep 2.5s ease-in-out infinite;
}
@keyframes shine-sweep {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.divider-gem {
  font-size: 10px;
  color: #d4a849;
  filter: drop-shadow(0 0 4px rgba(212, 168, 73, 0.7));
  animation: gem-spin 4s linear infinite;
  display: inline-block;
}
@keyframes gem-spin {
  from {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.3);
  }
  to {
    transform: rotate(360deg) scale(1);
  }
}

/* ========================
   CTA BUTTON
======================== */
.info-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.cta-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 32px;
  border: none;
  border-radius: 100px;
  background: linear-gradient(135deg, #c8922a 0%, #d4a849 40%, #b85c38 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 8px 28px rgba(200, 146, 42, 0.45),
    0 0 0 1px rgba(255, 240, 192, 0.1) inset;
  letter-spacing: 0.3px;
}
.cta-btn:hover {
  box-shadow:
    0 14px 40px rgba(200, 146, 42, 0.6),
    0 0 30px rgba(200, 146, 42, 0.25);
}

/* Shimmer sweep */
.cta-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: btn-shimmer 2.5s ease-in-out infinite;
  pointer-events: none;
}
@keyframes btn-shimmer {
  0% {
    left: -80%;
  }
  100% {
    left: 120%;
  }
}

/* Rotating ring */
.cta-ring {
  position: absolute;
  inset: -3px;
  border-radius: 100px;
  border: 1.5px dashed rgba(255, 240, 192, 0.25);
  animation: ring-rotate 5s linear infinite;
  pointer-events: none;
}
@keyframes ring-rotate {
  to {
    transform: rotate(360deg);
  }
}

/* Inner content */
.cta-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}
.cta-icon-wrap {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  flex-shrink: 0;
}
.cta-icon {
  width: 13px;
  height: 13px;
}

/* Wave char animation */
.cta-letters {
  display: flex;
  gap: 0;
}
.cta-char {
  display: inline-block;
  animation: char-in 0.6s ease forwards calc(var(--ci) * 0.04s);
  opacity: 0;
  transform: translateY(6px);
}
@keyframes char-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.cta-btn:hover .cta-char {
  animation: char-wave 0.4s ease forwards calc(var(--ci) * 0.03s);
}
@keyframes char-wave {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Stats pill */
.info-stats-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
}
.stats-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6b8f5e;
  animation: stats-blink 2s ease-in-out infinite;
}
@keyframes stats-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
.stats-txt {
  font-size: 11px;
  color: rgba(245, 234, 208, 0.45);
  font-weight: 500;
  white-space: nowrap;
}
</style>

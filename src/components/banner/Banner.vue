<template>
  <div class="earth-banner" ref="bannerRef">
    <!-- ===== AMBIENT ORBS ===== -->
    <div class="banner-orbs" aria-hidden="true">
      <span class="ban-orb ban-orb--1"></span>
      <span class="ban-orb ban-orb--2"></span>
      <span class="ban-orb ban-orb--3"></span>
    </div>

    <!-- ===== FLOATING IMAGES GRID ===== -->
    <div class="images-grid" ref="gridRef">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="img-card"
        :class="getFloatClass(index)"
        :style="getCardStyle(index)"
      >
        <!-- Glow border -->
        <span class="card-glow-border" aria-hidden="true"></span>
        <!-- Image -->
        <img
          :src="image"
          :alt="`Banner ${index + 1}`"
          class="card-img"
          loading="lazy"
          decoding="async"
        />
        <!-- Card overlay -->
        <div class="card-overlay" aria-hidden="true"></div>
        <!-- Number badge -->
        <span class="card-badge">{{ String(index + 1).padStart(2, '0') }}</span>
      </div>
    </div>

    <!-- ===== MULTI-LAYER OVERLAY ===== -->
    <div class="banner-overlay" aria-hidden="true">
      <!-- Dark vignette edges -->
      <div class="overlay-vignette"></div>
      <!-- Bottom fade to page -->
      <div class="overlay-bottom-fade"></div>
      <!-- Top fade -->
      <div class="overlay-top-fade"></div>
      <!-- Center highlight (subtle) -->
      <div class="overlay-center-glow"></div>
    </div>

    <!-- ===== PARTICLE DUST ===== -->
    <div class="banner-particles" aria-hidden="true">
      <span v-for="n in 20" :key="n" class="ban-particle" :style="particleStyle(n)"></span>
    </div>

    <!-- ===== SCAN LINES (subtle luxury texture) ===== -->
    <div class="scanlines" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'FloatingImageBanner' })

defineProps<{ images: string[] }>()

function getFloatClass(index: number) {
  return (index + 1) % 2 === 1 ? 'float-up' : 'float-down'
}

function getCardStyle(index: number) {
  // Slight size variation for depth
  const scales = [1, 0.96, 1.02, 0.94, 1.01, 0.97]
  const delays = ['0s', '-4s', '-8s', '-2s', '-6s', '-10s']
  return {
    '--scale': scales[index % scales.length],
    '--delay': delays[index % delays.length],
  }
}

function particleStyle(n: number) {
  const size = (Math.random() * 5 + 2).toFixed(1)
  const left = ((n - 1) * 5.3 + Math.random() * 4).toFixed(1)
  const delay = (Math.random() * 6).toFixed(2)
  const dur = (5 + Math.random() * 6).toFixed(2)
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    bottom: `${Math.random() * 60 + 5}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
  }
}
</script>

<style scoped>
/* ========================
   ROOT
======================== */
.earth-banner {
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 520px;
  overflow: hidden;
  background: linear-gradient(
    160deg,
    #0d0700 0%,
    #1a0f00 25%,
    #2a1608 50%,
    #1a0f00 75%,
    #0d0700 100%
  );
}

/* ========================
   AMBIENT ORBS
======================== */
.banner-orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
.ban-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}
.ban-orb--1 {
  width: 500px;
  height: 500px;
  top: -150px;
  left: -100px;
  background: radial-gradient(circle, rgba(200, 146, 42, 0.18), transparent 70%);
  animation: orb-drift 12s ease-in-out infinite;
}
.ban-orb--2 {
  width: 400px;
  height: 400px;
  top: -80px;
  right: -80px;
  background: radial-gradient(circle, rgba(184, 92, 56, 0.12), transparent 70%);
  animation: orb-drift 15s ease-in-out 4s infinite reverse;
}
.ban-orb--3 {
  width: 350px;
  height: 350px;
  bottom: -60px;
  left: 40%;
  background: radial-gradient(circle, rgba(107, 143, 94, 0.1), transparent 70%);
  animation: orb-drift 10s ease-in-out 2s infinite;
}
@keyframes orb-drift {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -20px) scale(1.08);
  }
  66% {
    transform: translate(-20px, 15px) scale(0.95);
  }
}

/* ========================
   IMAGES GRID
======================== */
.images-grid {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 16px 16px 0;
  z-index: 2;
}

@media (max-width: 768px) {
  .images-grid {
    gap: 6px;
    padding: 10px 8px 0;
  }
}

/* ========================
   IMAGE CARD
======================== */
.img-card {
  position: relative;
  flex: 1;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition:
    flex 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s ease;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(200, 146, 42, 0.08);
}

/* Glow border */
.card-glow-border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(200, 146, 42, 0.15);
  z-index: 3;
  pointer-events: none;
  transition: border-color 0.4s ease;
}
.img-card:hover .card-glow-border {
  border-color: rgba(200, 146, 42, 0.5);
  box-shadow: inset 0 0 20px rgba(200, 146, 42, 0.08);
}

/* Card image */
.card-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  will-change: transform;
  transition:
    transform 0.6s ease,
    filter 0.4s ease;
  filter: saturate(0.85) brightness(0.9);
}

/* Card overlay (tint) */
.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 15, 0, 0.1) 0%,
    transparent 40%,
    rgba(26, 15, 0, 0.3) 100%
  );
  z-index: 2;
  pointer-events: none;
  transition: opacity 0.4s;
}
.img-card:hover .card-overlay {
  opacity: 0.5;
}

/* Number badge */
.card-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 4;
  font-family: 'Playfair Display', serif;
  font-size: 11px;
  font-weight: 700;
  color: rgba(232, 198, 117, 0.7);
  letter-spacing: 1px;
  background: rgba(26, 15, 0, 0.5);
  backdrop-filter: blur(6px);
  padding: 3px 8px;
  border-radius: 100px;
  border: 1px solid rgba(200, 146, 42, 0.2);
  opacity: 0;
  transform: translateY(-4px);
  transition: all 0.3s ease;
}
.img-card:hover .card-badge {
  opacity: 1;
}

/* Float animations */
.float-up {
  animation: banner-float-up var(--dur, 34s) cubic-bezier(0.445, 0.05, 0.55, 0.95) var(--delay, 0s)
    infinite;
}
.float-down {
  animation: banner-float-down var(--dur, 38s) cubic-bezier(0.445, 0.05, 0.55, 0.95)
    var(--delay, -3s) infinite;
}

@keyframes banner-float-up {
  0%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(-7%) scaleY(1.02);
  }
}
@keyframes banner-float-down {
  0%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(7%) scaleY(0.98);
  }
}

@media (max-width: 768px) {
  .img-card {
    border-radius: 10px;
  }
  @keyframes banner-float-up {
    50% {
      transform: translateY(-4%);
    }
  }
  @keyframes banner-float-down {
    50% {
      transform: translateY(4%);
    }
  }
}

/* ========================
   OVERLAYS
======================== */
.banner-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}
.overlay-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(13, 7, 0, 0.55) 100%);
}
.overlay-bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background: linear-gradient(to top, rgba(13, 7, 0, 0.8) 0%, transparent 100%);
}
.overlay-top-fade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20%;
  background: linear-gradient(to bottom, rgba(13, 7, 0, 0.4) 0%, transparent 100%);
}
.overlay-center-glow {
  position: absolute;
  top: 20%;
  left: 20%;
  right: 20%;
  bottom: 30%;
  background: radial-gradient(ellipse, rgba(200, 146, 42, 0.04) 0%, transparent 70%);
  animation: glow-breathe 6s ease-in-out infinite;
}
@keyframes glow-breathe {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

/* ========================
   PARTICLES
======================== */
.banner-particles {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  overflow: hidden;
}
.ban-particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 168, 73, 0.9), transparent 70%);
  animation: part-rise var(--dur, 6s) ease-out var(--delay, 0s) infinite;
}
@keyframes part-rise {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.3);
  }
  20% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    transform: translateY(-90px) scale(1.5) rotate(30deg);
  }
}

/* ========================
   SCAN LINES
======================== */
.scanlines {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(200, 146, 42, 0.012) 3px,
    rgba(200, 146, 42, 0.012) 4px
  );
  opacity: 0.6;
}
</style>

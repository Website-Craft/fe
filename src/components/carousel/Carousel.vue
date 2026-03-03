<template>
  <div class="earth-carousel">
    <!-- ====== TOP ACCENT ====== -->
    <div class="carousel-topbar" aria-hidden="true"></div>

    <!-- ====== MAIN SLIDER ====== -->
    <div class="main-track">
      <!-- Slides -->
      <div class="slides-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, index) in images" :key="index" class="slide">
          <!-- Image -->
          <img
            :src="item.image"
            class="slide-img"
            :class="{ 'slide-img--zoom': isTransitioning && index === currentIndex }"
            :alt="item.title"
          />

          <!-- Gradient overlay -->
          <div class="slide-overlay" aria-hidden="true"></div>

          <!-- Content -->
          <div class="slide-content">
            <div class="slide-badge">
              <span class="slide-badge-dot"></span>
              Website Template
            </div>
            <h2 class="slide-title">{{ item.title }}</h2>
            <p class="slide-desc">{{ item.content }}</p>
            <button class="slide-cta">
              <span>Xem chi tiết</span>
              <svg
                class="cta-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- ====== NAV BUTTONS ====== -->
      <button class="nav-btn nav-btn--prev" @click="prev" aria-label="Previous">
        <span class="nav-btn-ring" aria-hidden="true"></span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button class="nav-btn nav-btn--next" @click="next" aria-label="Next">
        <span class="nav-btn-ring" aria-hidden="true"></span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <!-- ====== PROGRESS BAR ====== -->
      <div class="progress-wrap" aria-hidden="true">
        <div
          class="progress-bar"
          :style="{ width: `${((currentIndex + 1) / total) * 100}%` }"
        ></div>
      </div>

      <!-- ====== SLIDE COUNTER ====== -->
      <div class="slide-counter" aria-hidden="true">
        <span class="counter-current">{{ String(currentIndex + 1).padStart(2, '0') }}</span>
        <span class="counter-sep">/</span>
        <span class="counter-total">{{ String(total).padStart(2, '0') }}</span>
      </div>
    </div>

    <!-- ====== THUMBNAILS ====== -->
    <div class="thumb-outer">
      <div class="thumb-track-wrapper">
        <div class="thumb-track" :style="{ transform: `translateX(${thumbTranslateX}px)` }">
          <div
            v-for="(item, index) in images"
            :key="index"
            class="thumb-item"
            :class="index === currentIndex ? 'thumb-item--active' : 'thumb-item--inactive'"
            @click="goTo(index)"
            role="button"
            :aria-label="`Slide ${index + 1}`"
          >
            <!-- Active glow frame -->
            <span v-if="index === currentIndex" class="thumb-glow-frame" aria-hidden="true"></span>
            <img :src="item.image" class="thumb-img" :alt="item.title" />
            <div class="thumb-overlay-txt" v-if="index === currentIndex">
              <span class="thumb-active-label">● Đang xem</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Thumb dots for mobile -->
      <div class="thumb-dots sm:hidden" aria-hidden="true">
        <span
          v-for="(_, i) in images"
          :key="i"
          class="dot"
          :class="i === currentIndex ? 'dot--active' : ''"
          @click="goTo(i)"
        ></span>
      </div>
    </div>

    <!-- ====== BOTTOM ACCENT ====== -->
    <div class="carousel-bottombar" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
import { images } from '@/data/carousel'
import { ref, computed, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'CarouselComponent' })

const currentIndex = ref(0)
const isTransitioning = ref(false)
const total = computed(() => images.length)

// Auto-play
let autoTimer: ReturnType<typeof setInterval>
const startAuto = () => {
  autoTimer = setInterval(() => next(), 5000)
}
const stopAuto = () => clearInterval(autoTimer)

onMounted(startAuto)
onUnmounted(stopAuto)

/* ---- Slide logic ---- */
const goTo = (index: number) => {
  if (index === currentIndex.value) return
  stopAuto()
  isTransitioning.value = true
  currentIndex.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 1000)
  startAuto()
}

const prev = () => goTo((currentIndex.value - 1 + total.value) % total.value)
const next = () => goTo((currentIndex.value + 1) % total.value)

/* ---- Thumbnail translate ---- */
const THUMB_W = 104 // thumb width + gap
const thumbTranslateX = computed(() => -(currentIndex.value - 1) * THUMB_W)
</script>

<style scoped>
/* =====================
   WRAPPER
===================== */
.earth-carousel {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 24px 80px rgba(92, 58, 30, 0.35),
    0 0 0 1px rgba(200, 146, 42, 0.3);
  background: #1a0f00;
}

/* =====================
   ACCENT BARS
===================== */
.carousel-topbar {
  height: 3px;
  background: linear-gradient(
    90deg,
    #b85c38 0%,
    #c8922a 25%,
    #e8c675 50%,
    #c8922a 75%,
    #b85c38 100%
  );
  background-size: 200% auto;
  animation: bar-shimmer 3s linear infinite;
}
.carousel-bottombar {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(200, 146, 42, 0.5) 30%,
    rgba(200, 146, 42, 0.8) 50%,
    rgba(200, 146, 42, 0.5) 70%,
    transparent 100%
  );
}

/* =====================
   MAIN TRACK
===================== */
.main-track {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.slides-wrapper {
  display: flex;
  height: 100%;
  transition: transform 0.9s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s ease;
  will-change: transform;
}
.slide-img--zoom {
  transform: scale(1.06);
}

/* Gradient overlay - rich earth tones */
.slide-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(26, 15, 0, 0.85) 0%, transparent 55%),
    linear-gradient(to right, rgba(26, 15, 0, 0.45) 0%, transparent 50%);
  pointer-events: none;
}

/* =====================
   SLIDE CONTENT
===================== */
.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 24px 80px;
  z-index: 2;
  animation: content-rise 0.7s ease both;
}

@keyframes content-rise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(200, 146, 42, 0.15);
  border: 1px solid rgba(200, 146, 42, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 100px;
  padding: 4px 14px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #e8c675;
  margin-bottom: 12px;
}
.slide-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c8922a;
  animation: pulse-dot 1.8s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.slide-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.3rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #fdf6e9;
  margin-bottom: 8px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.slide-desc {
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  color: rgba(245, 234, 208, 0.7);
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.slide-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: linear-gradient(135deg, #c8922a, #d4a849);
  border: none;
  border-radius: 100px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(200, 146, 42, 0.4);
}
.slide-cta:hover {
  background: linear-gradient(135deg, #d4a849, #e8c675);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(200, 146, 42, 0.55);
}
.cta-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}
.slide-cta:hover .cta-arrow {
  transform: translateX(4px);
}

/* =====================
   NAV BUTTONS
===================== */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1.5px solid rgba(200, 146, 42, 0.4);
  background: rgba(26, 15, 0, 0.5);
  backdrop-filter: blur(12px);
  color: #e8c675;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;
}
.nav-btn svg {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 1;
}
.nav-btn--prev {
  left: 16px;
}
.nav-btn--next {
  right: 16px;
}

.nav-btn:hover {
  background: rgba(200, 146, 42, 0.25);
  border-color: rgba(200, 146, 42, 0.8);
  color: #fff0c0;
  box-shadow: 0 0 20px rgba(200, 146, 42, 0.4);
}

/* Spinning ring on hover */
.nav-btn-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px dashed rgba(200, 146, 42, 0);
  transition: all 0.4s ease;
}
.nav-btn:hover .nav-btn-ring {
  border-color: rgba(200, 146, 42, 0.5);
  animation: ring-spin 2s linear infinite;
}
@keyframes ring-spin {
  to {
    transform: rotate(360deg);
  }
}

/* =====================
   PROGRESS BAR
===================== */
.progress-wrap {
  position: absolute;
  bottom: 64px;
  left: 24px;
  width: 120px;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  z-index: 3;
  display: none;
}
@media (min-width: 640px) {
  .progress-wrap {
    display: block;
  }
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #c8922a, #e8c675);
  border-radius: 2px;
  transition: width 0.9s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: 0 0 6px rgba(200, 146, 42, 0.6);
}

/* =====================
   SLIDE COUNTER
===================== */
.slide-counter {
  position: absolute;
  bottom: 68px;
  right: 24px;
  display: none;
  align-items: baseline;
  gap: 4px;
  z-index: 3;
}
@media (min-width: 640px) {
  .slide-counter {
    display: flex;
  }
}

.counter-current {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #d4a849;
  line-height: 1;
}
.counter-sep {
  font-size: 0.9rem;
  color: rgba(245, 234, 208, 0.4);
  margin: 0 2px;
}
.counter-total {
  font-size: 0.85rem;
  color: rgba(245, 234, 208, 0.5);
}

/* =====================
   THUMBNAILS
===================== */
.thumb-outer {
  background: linear-gradient(180deg, rgba(26, 15, 0, 0.95) 0%, #1a0f00 100%);
  padding: 16px 12px 20px;
}

.thumb-track-wrapper {
  display: none;
  width: 100%;
  overflow: hidden;
}
@media (min-width: 640px) {
  .thumb-track-wrapper {
    display: block;
  }
}

.thumb-track {
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.thumb-item {
  flex-shrink: 0;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.thumb-item--active {
  width: 160px;
  height: 90px;
  box-shadow:
    0 0 0 2px #d4a849,
    0 8px 24px rgba(200, 146, 42, 0.4);
  transform: scale(1.04);
}
.thumb-item--inactive {
  width: 88px;
  height: 56px;
  opacity: 0.45;
  filter: saturate(0.5);
}
.thumb-item--inactive:hover {
  opacity: 0.75;
  filter: saturate(0.8);
  transform: scale(1.03);
}

.thumb-glow-frame {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid transparent;
  background: linear-gradient(#d4a849, #b85c38) border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  animation: frame-glow 2s ease-in-out infinite;
}
@keyframes frame-glow {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumb-overlay-txt {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 8px;
  background: linear-gradient(to top, rgba(26, 15, 0, 0.85), transparent);
  z-index: 1;
}
.thumb-active-label {
  font-size: 10px;
  font-weight: 600;
  color: #d4a849;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Dots (mobile) */
.thumb-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 8px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(200, 146, 42, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}
.dot--active {
  background: #c8922a;
  width: 22px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(200, 146, 42, 0.6);
}

/* =====================
   ANIMATIONS
===================== */
@keyframes bar-shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}
</style>

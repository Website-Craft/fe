<template>
  <div class="homepage">
    <!-- ███████ HERO SECTION ███████ -->
    <section class="hero-section">
      <!-- Background ambient light -->
      <div class="hero-ambient" aria-hidden="true">
        <span class="ha ha--1"></span>
        <span class="ha ha--2"></span>
        <span class="ha ha--3"></span>
      </div>

      <!-- Banner (full bleed) -->
      <div class="hero-banner-wrap">
        <banner :images="[Img1, Img2, Img3, Img4, Img5, Img6]" />
      </div>

      <!-- Information overlay (centered on banner) -->
      <div class="hero-info-wrap">
        <information />
      </div>

      <!-- Carousel (floating card below banner) -->
      <div class="hero-carousel-wrap">
        <carousel />
      </div>
    </section>

    <!-- ███████ INTRODUCTION SECTION ███████ -->
    <section class="section-intro">
      <website-introduction />
    </section>

    <!-- ███████ DIVIDER ███████ -->
    <div class="earth-divider" aria-hidden="true">
      <div class="ed-line"></div>
      <div class="ed-gems">
        <span class="ed-gem"></span>
        <span class="ed-gem ed-gem--center"></span>
        <span class="ed-gem"></span>
      </div>
      <div class="ed-line ed-line--right"></div>
    </div>

    <!-- ███████ WEBSITE LIST SECTION ███████ -->
    <section class="section-list">
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-dot"></span>
          Kho Template
          <span class="eyebrow-dot"></span>
        </div>
        <h2 class="section-title">
          Khám phá <span class="title-highlight">1000+</span> mẫu website
        </h2>
        <p class="section-sub">Được tuyển chọn kỹ lưỡng, thiết kế đẳng cấp cho mọi lĩnh vực</p>
      </div>
      <div class="list-content">
        <website-list />
      </div>
    </section>

    <!-- ███████ TECHNOLOGY SECTION ███████ -->
    <section class="section-tech">
      <technology-showcase />
    </section>

    <!-- ███████ BOTTOM BAR ███████ -->
    <div class="hp-bottom-bar" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import WebsiteList from '@/components/template/WebsiteList.vue'
import WebsiteIntroduction from '@/components/template/WebsiteIntroduction.vue'
import TechnologyShowcase from '@/components/template/TechnologyShowcase.vue'
import Information from '@/components/information/Information.vue'

import Img1 from '@/assets/images/banners/item01.avif'
import Img2 from '@/assets/images/banners/item02.avif'
import Img3 from '@/assets/images/banners/item03.avif'
import Img4 from '@/assets/images/banners/item04.avif'
import Img5 from '@/assets/images/banners/item05.avif'
import Img6 from '@/assets/images/banners/item06.avif'

defineOptions({ name: 'HomePage' })
</script>

<style scoped>
/* ========================
   PAGE WRAPPER
======================== */
.homepage {
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
}

/* ========================
   HERO SECTION
======================== */
.hero-section {
  position: relative;
  width: 100%;
  /* Enough space: banner height + carousel card peaking below */
  padding-bottom: 260px;
}

@media (min-width: 300px) {
  .hero-section {
    padding-bottom: 150px;
  }
}
@media (min-width: 768px) {
  .hero-section {
    padding-bottom: 340px;
  }
}

/* Ambient bg lights behind everything */
.hero-ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.ha {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
}
.ha--1 {
  width: 600px;
  height: 400px;
  top: -100px;
  left: -100px;
  background: radial-gradient(ellipse, #c8922a, transparent 70%);
  animation: ha-float 12s ease-in-out infinite;
}
.ha--2 {
  width: 500px;
  height: 500px;
  top: 20%;
  right: -100px;
  background: radial-gradient(ellipse, #b85c38, transparent 70%);
  animation: ha-float 14s ease-in-out 4s infinite reverse;
}
.ha--3 {
  width: 400px;
  height: 300px;
  bottom: 100px;
  left: 30%;
  background: radial-gradient(ellipse, #6b8f5e, transparent 70%);
  opacity: 0.08;
  animation: ha-float 10s ease-in-out 2s infinite;
}
@keyframes ha-float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -15px);
  }
}

/* Banner */
.hero-banner-wrap {
  position: relative;
  z-index: 1;
  width: 100%;
}

/* Information - floats centered on the lower portion of the banner */
.hero-info-wrap {
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 720px;
  z-index: 10;

  /* Entrance animation */
  animation: info-enter 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes info-enter {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@media (min-width: 1024px) {
  .hero-info-wrap {
    top: 3%;
  }
}

/* Carousel - sits below the banner, centered, partially overlapping */
.hero-carousel-wrap {
  position: absolute;
  bottom: -4%;
  left: 50%;
  transform: translateX(-50%);
  width: 88%;
  max-width: 950px;
  z-index: 20;

  /* Premium drop shadow */
  filter: drop-shadow(0 30px 60px rgba(26, 15, 0, 0.6));

  /* Entrance animation */
  animation: carousel-enter 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}
@keyframes carousel-enter {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@media (min-width: 768px) {
  .hero-carousel-wrap {
    width: 78%;
    bottom: -4%;
  }
}
@media (min-width: 300px) {
  .hero-carousel-wrap {
    bottom: 5%;
  }
}
@media (min-width: 1280px) {
  .hero-carousel-wrap {
    width: 72%;
    max-width: 1100px;
    bottom: -4%;
  }
}

/* ========================
   INTRO SECTION
======================== */
.section-intro {
  position: relative;
  z-index: 2;
  overflow: hidden;
  /* Push down so carousel isn't covered */
  margin-top: 0;
}

/* ========================
   EARTH DIVIDER
======================== */
.earth-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 36px 48px;
}
.ed-line {
  flex: 1;
  max-width: 280px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 146, 42, 0.5), rgba(200, 146, 42, 0.7));
}
.ed-line--right {
  background: linear-gradient(90deg, rgba(200, 146, 42, 0.7), rgba(200, 146, 42, 0.5), transparent);
}
.ed-gems {
  display: flex;
  align-items: center;
  gap: 6px;
}
.ed-gem {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: rgba(200, 146, 42, 0.55);
  transform: rotate(45deg);
  border-radius: 1px;
}
.ed-gem--center {
  width: 13px;
  height: 13px;
  background: linear-gradient(135deg, #d4a849, #c8922a);
  box-shadow: 0 0 10px rgba(200, 146, 42, 0.6);
  animation: gem-glow 2.2s ease-in-out infinite;
}
@keyframes gem-glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(200, 146, 42, 0.4);
  }
  50% {
    box-shadow: 0 0 16px rgba(200, 146, 42, 0.9);
  }
}

/* ========================
   LIST SECTION
======================== */
.section-list {
  padding: 0 16px 56px;
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
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  color: #3a2210;
  line-height: 1.2;
  margin-bottom: 12px;
}
.title-highlight {
  background: linear-gradient(135deg, #c8922a, #d4a849, #b85c38);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.section-sub {
  font-size: 1rem;
  color: #7b4f2e;
  opacity: 0.8;
  line-height: 1.65;
  max-width: 500px;
  margin: 0 auto;
}
.list-content {
  max-width: 1800px;
  margin: 0 auto;
}

/* ========================
   TECH SECTION
======================== */
.section-tech {
  padding: 0 8px 8px;
}

/* ========================
   BOTTOM BAR
======================== */
.hp-bottom-bar {
  height: 4px;
  background: linear-gradient(
    90deg,
    #c8922a 0%,
    #e8c675 25%,
    #d4a849 50%,
    #b85c38 75%,
    #c8922a 100%
  );
  background-size: 200% auto;
  animation: bar-shimmer 4s linear infinite;
  margin-top: 32px;
}
@keyframes bar-shimmer {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}
</style>

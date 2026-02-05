<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-3 2xl:gap-6 space-y-6">
    <website-item v-for="item in templates" :key="item.id" :src="item.image" :title="item.name" />
    <!-- From Uiverse.io by jawad_8494 -->
  </div>
  <div class="w-full flex justify-center mt-6 md:mt-0">
      <button class="super-button">
      <span>{{ $t('COMMON.VIEW_ALL') }}</span>
      <svg fill="none" viewBox="0 0 24 24" class="arrow">
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          d="M5 12h14M13 6l6 6-6 6"
        ></path>
      </svg>
    </button>
    </div>
</template>

<script setup lang="ts">
import WebsiteItem from '@/components/template/WebsiteItem.vue'
import { templates } from '@/data/website_list'
</script>

<style scoped>
/* From Uiverse.io by jawad_8494 */
.super-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  background: linear-gradient(145deg, #0f0f0f, #1c1c1c);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  z-index: 1;
}

.super-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, #00ffff, #ff00ff, #00ffff);
  animation: rotate 4s linear infinite;
  z-index: -2;
}

.super-button::after {
  content: '';
  position: absolute;
  inset: 2px;
  background: #0a0a0a;
  border-radius: inherit;
  z-index: -1;
}

.super-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
}

.super-button:hover .arrow {
  transform: translateX(6px);
}

.arrow {
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease-in-out;
  color: #00ffff;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

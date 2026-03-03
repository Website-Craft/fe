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
/* === Mệnh Thổ - Earth Super Button === */
.super-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 32px;
  background: linear-gradient(145deg, #3a2210, #5c3a1e);
  border: 1.5px solid rgba(200, 146, 42, 0.35);
  border-radius: 100px;
  color: #e8c675;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 30px rgba(92, 58, 30, 0.3);
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
  background: conic-gradient(from 0deg, #c8922a, #d4a849, #b85c38, #c8922a);
  animation: rotate 5s linear infinite;
  z-index: -2;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.super-button:hover::before {
  opacity: 1;
}

.super-button::after {
  content: '';
  position: absolute;
  inset: 1.5px;
  background: linear-gradient(145deg, #3a2210, #5c3a1e);
  border-radius: inherit;
  z-index: -1;
}

.super-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 16px 40px rgba(92, 58, 30, 0.4),
    0 0 0 1px rgba(200, 146, 42, 0.5);
  border-color: rgba(200, 146, 42, 0.6);
  color: #fff0c0;
}

.super-button:hover .arrow {
  transform: translateX(6px);
  color: #d4a849;
}

.arrow {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
  color: #c8922a;
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

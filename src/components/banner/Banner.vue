<!-- src/components/FloatingImageBanner.vue -->
<template>
    <div class="floating-banner relative w-full h-[80vh] md:h-screen overflow-hidden bg-gradient-to-br from-[var(--color-dark-blue)] to-[var(--color-black)]">
      <!-- Overlay mờ đen -->
      <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-blue)] via-[var(--color-grey-base)] to-[var(--color-dark-blue)] opacity-75 z-1 pointer-events-none" />
  
      <!-- Container chứa 5 ảnh nằm ngang -->
      <div
        class="
          images-container
          flex flex-row md:gap-6 gap-3
          w-full h-full px-4 md:px-8 lg:px-12
          transition-all duration-300
        "
      >
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="`Banner image ${index + 1}`"
          class="
            floating-image
            flex-1 h-full object-cover object-center rounded-xl
            will-change-transform pointer-events-none
          "
          :class="getDirectionClass(index)"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineOptions({
    name: 'FloatingImageBanner'
  })
  
  defineProps<{
    images: string[] // mong đợi đúng 5 ảnh
  }>()
  
  const getDirectionClass = (index: number) => {
    // index bắt đầu từ 0 → ảnh 1,3,5 (odd) lên, 2,4 (even) xuống
    return (index + 1) % 2 === 1 ? 'animate-float-up' : 'animate-float-down'
  }
  </script>
  
  <style scoped>
  /* Tối ưu animation mượt hơn */
  .animate-float-up {
    animation: floatUp 34s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
  }
  
  .animate-float-down {
    animation: floatDown 38s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    animation-delay: -3s; /* lệch pha nhẹ để tự nhiên hơn */
  }
  
  /* Biên độ lớn hơn một chút, cảm giác sang trọng */
  @keyframes floatUp {
    0%, 100% {
      transform: translateY(0) scale(1.01);
    }
    50% {
      transform: translateY(-9%) scale(1.04);
    }
  }
  
  @keyframes floatDown {
    0%, 100% {
      transform: translateY(0) scale(1.01);
    }
    50% {
      transform: translateY(9%) scale(1.04);
    }
  }
  
  /* Mobile: thu hẹp biên độ + có thể stack dọc nếu muốn */
  @media (max-width: 768px) {
    .images-container {
      flex-direction: column;     /* ← thay đổi thành dọc nếu thích */
      /* Nếu vẫn muốn giữ ngang thì comment 2 dòng trên */
      gap: 16px;
      padding: 1rem;
    }
  
    @keyframes floatUp {
      50% { transform: translateY(-6%) scale(1.02); }
    }
    @keyframes floatDown {
      50% { transform: translateY(6%) scale(1.02); }
    }
  }
  
  /* Optional: hiệu ứng nhẹ khi hover (dành cho desktop) */
  @media (hover: hover) {
    .floating-image:hover {
      transform: scale(1.03) !important;
      transition: transform 0.6s ease;
    }
  }
  </style>
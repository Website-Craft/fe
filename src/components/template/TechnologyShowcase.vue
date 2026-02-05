<template>
  <div class="technology-showcase bg-[var(--color-dark-blue)]/90 text-[var(--color-white)] rounded-2xl shadow-lg py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-color-gold-base">
        {{ $t('HOME.TECHNOLOGY.TITLE') }}
      </h2>
      <p class="mt-6 text-xl text-[var(--color-beige-base)] max-w-3xl mx-auto">
        {{ $t('HOME.TECHNOLOGY.CONTENT') }}
      </p>

      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="tech in technologies" :key="tech.name" class="pt-6 bg-[var(--color-coban-base)] transform transition duration-400 rounded-lg shadow-md hover:scale-105 hover:shadow-lg">
          <div class="flow-root rounded-lg px-6 pb-8">
              <div>
                <span class="inline-flex items-center justify-center p-3 bg-[var(--color-orange-base)] rounded-full shadow-lg">
                  <i :class="tech.icon" class="pi text-2xl text-[var(--color-white)]"></i>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium tracking-tight text-[var(--color-white)]">{{ tech.name }}</h3>
              <p class="mt-5 text-base text-[var(--color-white)]">
                {{ $t(tech.description) }}
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { technologies } from '@/data/technology';
</script>

<style scoped>
/* Các style tùy chỉnh nếu cần */
</style>


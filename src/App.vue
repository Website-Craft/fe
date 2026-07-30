<template>
  <loading-base v-if="isLoading" />
  <root-layout v-else>
    <router-view />
  </root-layout>
</template>
<script setup lang="ts">
import RootLayout from '@/layouts/RootLayout.vue'
import LoadingBase from '@/components/common/LoadingBase.vue';
import { isLoading } from '@/stores/loadingStore';
</script>

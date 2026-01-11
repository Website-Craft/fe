<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-3 2xl:gap-6">
    <website-item v-for="item in templates" :key="item.id" :src="item.image" :title="item.name" />
  </div>
</template>

<script setup lang="ts">
import WebsiteItem from '@/components/template/WebsiteItem.vue'
import { templates } from '@/data/website_list'
</script>

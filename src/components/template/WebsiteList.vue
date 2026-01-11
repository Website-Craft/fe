<template>
  <div class="grid grid-cols-5 gap-6">
    <website-item
      v-for="item in templates"
      :key="item.id"
      :src="item.image"
      :title="item.name"
    />
  </div>
</template>

<script setup lang="ts">
import WebsiteItem from '@/components/template/WebsiteItem.vue'
import { templates } from '@/data/website_list';
</script>

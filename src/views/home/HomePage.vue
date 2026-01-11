<template>
  <carousel />
  <website-introduction />
  <div class="my-8 2xl:mx-36">
    <website-list />
  </div>
  <technology-showcase />
</template>

<script setup lang="ts">
import Carousel from '@/components/carousel/Carousel.vue';
import WebsiteList from '@/components/template/WebsiteList.vue';
import WebsiteIntroduction from '@/components/template/WebsiteIntroduction.vue';
import TechnologyShowcase from '@/components/template/TechnologyShowcase.vue';

defineOptions({
  name: 'HomePage',
})
</script>

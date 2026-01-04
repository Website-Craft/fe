<template>
<carousel />
<div class="my-8 mx-48">
  <website-list />
</div>

</template>
<script setup lang="ts">
import Carousel from '@/components/carousel/Carousel.vue';
import WebsiteList from '@/components/template/WebsiteList.vue';

  defineOptions({
  name: 'HomePage',
})
</script>

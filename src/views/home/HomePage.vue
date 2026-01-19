<template>
  <div class="space-y-6">
    <div class="w-full relative mb-28 md:mb-64">
      <banner :images="[Img1, Img2, Img3, Img4, Img5, Img6]" />
      <div class="w-[90%] md:w-max z-2 absolute top-[10%] left-1/2 -translate-x-1/2">
        <information />
      </div>
      <div class="w-[85%] md:w-[70%] z-2 absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2">
      <carousel />
      </div>
    </div>
    <website-introduction />
    <div class="my-8 2xl:mx-36">
      <website-list />
    </div>
    <technology-showcase />
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
defineOptions({
  name: 'HomePage',
})
</script>

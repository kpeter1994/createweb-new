<script setup lang="ts">
import SliderComponent from "~/components/shared/SliderComponent.vue";
import type {image} from "~/type";
import ButtonComponent from "~/components/shared/ButtonComponent.vue";

const props = defineProps<{
  title: string
  text: string
  image: {data: {attributes: {url: string; alternativeText: string}}}
  slider: {images: image[]}
  link: {id: number; label: string; href: string; theme: string}
}>()
</script>

<template>
  <section id="hero" class="h-auto px-3">
<!--  <NavComponent></NavComponent>-->

  <div class="max-w-7xl mx-auto pt-12 lg:pt-20 mb-20 lg:mb-40">
    <div>
      <h1 class="font-[800] text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-center" v-html="title"></h1>
      <p class="mt-3 max-w-5xl mx-auto text-center lg:text-lg font-bold" v-html="text"></p>
      <div class="flex justify-center mt-3 ">
        <ButtonComponent :data="link[0]"></ButtonComponent>

      </div>
    </div>

    <div class="mt-20">
      <SliderComponent :data="slider.images.data"></SliderComponent>
    </div>

  </div>
  </section>
  <div
      class="w-full  overflow-hidden relative after:bg-gray-100 after:absolute after:content-[''] after:w-full after:h-20 after:bottom-0 after:right-0 after:left-0">
    <NuxtImg sizes="400px sm: 500px md: 990px lg: 1500px xl: 1800px 2xl: 3000px"
             loading="lazy"
             format="webp"
             class="w-full relative z-10 rounded-[2rem] lg:rounded-[3rem]"
             :alt="image.data.attributes.alternativeText"
             :src="image.data.attributes.url"></NuxtImg>
  </div>
</template>

<style scoped>

</style>
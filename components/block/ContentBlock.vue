<script setup lang="ts">
import ButtonComponent from "~/components/shared/ButtonComponent.vue";
import FadeInComponent from "~/components/animation/FadeInComponent.vue";

const props = defineProps<{
  title: string
  text: string
  image: ImageData
}>()

const buttonData = {
  label: 'Ajánlatot kérek',
  href: '/',
  theme: 'dark'
}
</script>

<template>
  <section ref="container" class="flex flex-col lg:flex-row bg-neutral-50">
    <div class="lg:w-1/2">
      <div class="px-4 max-w-3xl mx-auto py-12 lg:py-20">
        <FadeInComponent>
          <h2 class="text-center lg:text-left section-title">{{ title }}</h2>
        </FadeInComponent>
        <div class="text-center lg:text-left xl:text-lg text-gray-800 space-y-3 content-block" v-html="text"></div>
        <div class="mt-3 flex justify-center lg:justify-start">
          <ButtonComponent :data="buttonData"></ButtonComponent>
        </div>

      </div>

    </div>
    <div class="lg:w-1/2">
     <NuxtImg class="w-full h-full object-cover" sizes="sm:500px md:1000px lg:800px xl:1000px"
              :title="image.data.attributes.alternativeText"
              :src="image.data.attributes.url"
              :alt="image.data.attributes.alternativeText"></NuxtImg>

    </div>
  </section>
</template>

<style scoped>

</style>
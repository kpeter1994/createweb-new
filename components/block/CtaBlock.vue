<script setup lang="ts">
import ButtonComponent from "~/components/shared/ButtonComponent.vue";
import FadeInComponent from "~/components/animation/FadeInComponent.vue";

const props = defineProps<{
  title: string
  text: string
}>()

const button = ref({
  label: 'Ajánlatot kérek',
  href: '#ajanlatkeres',
  theme: 'light'
})
</script>

<template>
  <FadeInComponent>
    <section class="section-padding bg-neutral-50">
    <div
        class="max-w-6xl mx-auto rounded-[3rem] bg-neutral-900 p-12 lg:p-20 text-white bg-[url('/image/lines.svg')]">
      <h2 class="text-center text-xl lg:text-4xl 2xl:text-6xl font-[800]">{{ title }}</h2>
      <p class="mt-3 text-center">{{ text }}</p>
      <div class="flex justify-center mt-3">
        <ButtonComponent :data="button" ></ButtonComponent>
      </div>
    </div>
  </section>
  </FadeInComponent>
</template>

<style scoped>

</style>
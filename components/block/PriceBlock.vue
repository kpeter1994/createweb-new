<script setup lang="ts">
import PriceCard from "~/components/shared/PriceCard.vue";
import FadeInComponent from "~/components/animation/FadeInComponent.vue";

const props = defineProps<{
  title: string
  text: string
  card: {
    title: string
    name: string
    text: string
    price: number
  }[]
}>()
</script>

<template>

  <section class="section-padding bg-[url('/images/minimalist-bgc.webp')]">
    <div class="container mx-auto">
      <FadeInComponent>
        <div class="max-w-4xl mb-6 lg:mb-20 relative">
          <h2 class="section-title text-center lg:text-left">{{ title }}</h2>
          <p class="section-lead text-center lg:text-left">{{ text }}</p>
        </div>
      </FadeInComponent>


      <div  class="flex flex-col items-center lg:flex-row gap-6 justify-center">


        <PriceCard v-for="(item, index) in card" :card="item"></PriceCard>


      </div>
    </div>
  </section>


</template>

<style scoped>

</style>
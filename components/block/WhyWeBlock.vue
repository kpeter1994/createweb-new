<script setup lang="ts">
import ServicesCard from "~/components/shared/ServicesCard.vue";
import ButtonComponent from "~/components/shared/ButtonComponent.vue";
import FadeInComponent from "~/components/animation/FadeInComponent.vue";


const props = defineProps<{
  title: string;
  text: string;
  card: {
    title: string;
    text: string;
    subTitle: string;
    image: {
      url: string;
      alternativeText: string;
    };
  }[];
}>();





</script>

<template>
  <section class="bg-gray-100 section-padding">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto text-center mb-6 lg:mb-20">
        <FadeInComponent>
          <h2 class="section-title">{{ title }}</h2>
        </FadeInComponent>
        <p class="section-lead">{{ text }}</p>
      </div>

       <ServicesCard :cards="card"></ServicesCard>

    </div>

  </section>
</template>

<style scoped>

</style>
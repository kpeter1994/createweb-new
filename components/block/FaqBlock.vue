<script setup lang="ts">
import FadeInComponent from "~/components/animation/FadeInComponent.vue";
import TabsComponent from "~/components/shared/TabsComponent.vue";
import AccordionComponent from "~/components/shared/AccordionComponent.vue";

const props = defineProps<{
  title: string
  text: string
  accordion: object
}>()

</script>

<template>
<section class="section-padding bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="max-w-4xl mx-auto text-center mb-6 lg:mb-20">
      <FadeInComponent>
        <h2 class="section-title">{{ title }}</h2>
        <div class="section-lead">{{text}}</div>
      </FadeInComponent>
    </div>

    <AccordionComponent  :data="accordion"></AccordionComponent>
  </div>
</section>
</template>

<style scoped>

</style>
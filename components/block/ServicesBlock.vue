<script setup lang="ts">
import TabsComponent from "~/components/shared/TabsComponent.vue";
import FadeInComponent from "~/components/animation/FadeInComponent.vue";

const props = defineProps<{
  title: string
  text: string
  tabs: object
}>()
</script>

<template>
  <section class="section-padding" >
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto text-center mb-6 lg:mb-20">
        <FadeInComponent>
          <h2 class="section-title">{{ title }}</h2>
          <div class="section-lead">{{text}}</div>
        </FadeInComponent>
      </div>
      <TabsComponent :data="tabs"></TabsComponent>
    </div>

  </section>
</template>

<style scoped>

</style>
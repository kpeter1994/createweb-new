<script setup lang="ts">
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const fadeContainer = ref(null)
const fadeItem = ref([])

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from(fadeItem.value, {
    scrollTrigger: {
      trigger: fadeContainer.value,
      start: 'top 80%',
      end: 'bottom 80%',
      markers: false,
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
  })
})
</script>

<template>
  <div ref="fadeContainer">
    <div ref="fadeItem">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const fadeItem = ref(null)



onMounted(() => {
  gsap.from(fadeItem.value, {
    opacity: 0,
    y: 50,
    duration: .6,
    ease: 'power4.inOut',

  })
})
</script>

<template>

    <div ref="fadeItem">
      <slot></slot>
    </div>

</template>

<style scoped>

</style>
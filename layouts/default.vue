<script lang="ts" setup>
import {gsap} from "gsap";

const fadeItem = ref(null)



onMounted(() => {
  gsap.from(fadeItem.value, {
    opacity: 0,
    y: 50,
  })
})

</script>

<template>
  <main class="bg-black pt-3">
    <div ref="fadeItem" class="bg-white rounded-t-[4rem]">
      <NavComponent />
      <slot />
    </div>

  </main>
</template>

<style scoped></style>

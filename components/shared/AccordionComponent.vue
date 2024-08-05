<script setup lang="ts">

import {gsap} from "gsap";

const props = defineProps<{
  data: object
}>()

const activeItem = ref<number|null> (null)

const activateItem = (index: number | null) => {
  if (activeItem.value === index) {
    activeItem.value = null
  } else {
    activeItem.value = index
    gsap.to(`#item-${index}`, {height: 'auto', duration: 0.3})
    gsap.to(`#button-${index}`, {rotate: 45, duration: 0.3})
  }
}

watch(() => activeItem.value, (newValue, oldValue) => {
  if (oldValue !== null) {
    gsap.to(`#item-${oldValue}`, {height: 0, duration: 0.3})
    gsap.to(`#button-${oldValue}`, {rotate: 0, duration: 0.3})
  }
})

</script>

<template>
  <div class="border-t-2 border-neutral-900">
    <div class="  border-b-2 border-neutral-900 " v-for="(item, index) in data" :key="index">
      <div @click="activateItem(index)" class="flex justify-between cursor-pointer p-4">
        <p class="lg:text-xl font-semibold mb-2 w-10/12"> {{item.title}}</p>
        <button :id="`button-${index}`"  class="bg-neutral-900 w-8 h-8 rounded-full flex justify-center items-center text-white">
          <i class="pi pi-plus"></i>
        </button>
      </div>
      <div class="h-0 overflow-hidden w-10/12" :id="`item-${index}`">
        <div class="px-3 lg:px-6 pb-3 lg:pb-6 lg:text-lg" v-html="item.text"></div>
      </div>

    </div>
  </div>


</template>

<style scoped>

</style>
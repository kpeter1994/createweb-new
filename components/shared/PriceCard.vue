<script setup lang="ts">

import ButtonComponent from "~/components/shared/ButtonComponent.vue";

const props = defineProps<{
  card: {
    title: string
    name: string
    price: number
    text: string
    theme: string
  }
}>()


let buttonData = {
  label: 'Ezt választom',
  href: '#',
  theme: props.card.theme === 'dark' ? 'light' : 'dark'
}

</script>

<template>
  <div class="price" :class="card.theme">
    <p class="text-xl xl:text-2xl 2xl:text-3xl font-bold mb-1.5">{{card.title}} <span class="text-lg font-medium">csomag</span></p>
    <h3  class="font-semibold mb-1.5 text-gray-500">{{card.name}}</h3>
    <span class="text-2xl xl:text-3xl 2xl:text-5xl font-[800] text-gray-500 mb-4 block price-title">{{card.price}} <span class="text-lg">-tól</span></span>


    <div class="space-y-2 text-sm lg:text-base" v-html="card.text">

    </div>


    <div class="flex mt-3">
      <ButtonComponent :data="buttonData" ></ButtonComponent>

    </div>


  </div>
</template>

<style >

.price{
  @apply p-6 shadow 2xl:p-12 ;
  border-radius: 2rem;
}


.light{
  @apply bg-white;
}

.dark{
  @apply bg-neutral-900 bg-[url('/images/lines.svg')] text-white;

  h3{
    @apply text-gray-300;
  }

  .price-title{

      @apply text-white;
  }
}

.price ul{
  @apply space-y-1 2xl:space-y-2 list-disc pl-4;
}





</style>
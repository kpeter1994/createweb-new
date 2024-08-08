<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";
import ButtonComponent from "~/components/shared/ButtonComponent.vue";

const props = defineProps<{
  cards: any
}>()


const container = ref(null)

const animationSettings = {
  y: 100,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.1
};


useGsapScrollArrayComposable(container, 'card' ,animationSettings)


const buttonData = {
  label: "Ajánlatot kérek",
  href: "/",
  theme: "light",
};
</script>

<template>
  <div ref="container"
       class="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
    <div v-for="card in cards"
         :key="card.title"
         class="p-10 bg-white max-w-xs lg:max-w-sm rounded-[2rem] flex flex-col justify-center h-[350px] card" >
      <p class="text-xl text-center font-bold">{{card.title}}</p>
      <div class="relative">
        <div class="w-20 h-20 absolute top-6 right-20 bg-black bg-opacity-5 rounded-full">

        </div>
        <client-only>
          <Vue3Lottie
              class="bg-red-500"
              :width="170"
              :height="170"

              :animationLink="card.image.data.attributes.url"
          />
        </client-only>
      </div>
      <p class="text-center font-semibold text-gray-600">{{card.text}}</p>
    </div>
    <div
        class="p-10 bg-neutral-800 bg-[url('/images/lines.svg')] text-white max-w-xs lg:max-w-sm rounded-[2rem] flex flex-col justify-center h-[350px] card">
      <h3 class="text-xl text-center font-bold mb-3">Ajánlatot kérek</h3>
      <p class="text-center">Kérj ajánlatot és előzd meg versenytársaid az online térben!</p>

      <div class="flex mt-3 justify-center">
        <ButtonComponent :data="buttonData"></ButtonComponent>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";
import ButtonComponent from "~/components/shared/ButtonComponent.vue";


const props = defineProps({
  data: Array,
})
const activeTab = ref(0);

const setActiveTab = (id: number) => {
  activeTab.value = id;
  nextTick(() => {
    animate();
  });
}
const {$gsap} = useNuxtApp()

const animate = () => {
  const tabs = document.querySelectorAll('.tab');
  if (tabs) {
    console.log('Animating element:', tabs);
    $gsap.from(tabs, {
      y: 200,
      opacity: 0,
      duration: .6,
      ease: "power1.inOut"
    });
  } else {
    console.log('No element found to animate');
  }
}

const buttonData = {
  label: 'Ajánlatot kérek',
  theme: 'dark',
  href: '#'
}
</script>

<template>
  <div>
    <div class="border-b-4 border-black flex justify-between gap-1 lg:gap-3">
      <button v-for="(item, id) in props.data"
              @click="setActiveTab(id)"
              :key="id"
              class="tab-button"
              :class="activeTab === id ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200 '"
      >
        {{ item.name }}
      </button>
    </div>

    <div class="mt-6 flex flex-col lg:flex-row">
      <div class="lg:w-1/2 order-2 lg:order-1">

        <client-only>
          <Vue3Lottie
              v-if="data[activeTab].image"
              width="100%"
              class="px-3 lg:px-20"
              :animationLink="data[activeTab].image.data.attributes.url"
          />
        </client-only>
      </div>
      <div class="lg:w-1/2 overflow-hidden lg:h-[500px] order-1 lg:order-2 ">

        <div class="lg:px-3 lg:pt-12 space-y-3 service-content tab" :key="activeTab">

          <h3 class="text-lg lg:text-3xl font-bold">{{ props.data[activeTab].title }}</h3>
          <div class="lg:text-xl " v-html="data[activeTab].text"></div>
          <div class="flex mt-3">
          <ButtonComponent :data="buttonData" />
          </div>

        </div>

      </div>

    </div>
  </div>

</template>

<style>


.service-content p {
  @apply mb-3;
}

.service-content ul li {
  @apply mb-1.5;
}

.tab-button {
  @apply text-xs py-3 lg:p-6 2xl:p-8 lg:text-xl 2xl:text-2xl font-bold flex flex-col gap-1.5 rounded-t lg:rounded-t-[1rem] grow  justify-center items-center transition-all duration-300
}
</style>
<script lang="ts" setup>
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/vue';

import {Navigation} from "swiper/modules";

const modules = [Navigation];

import 'swiper/css';
import 'swiper/css/navigation';
import FadeInComponent from "~/components/animation/FadeInComponent.vue";

const props = defineProps<{
  title: string | HTMLElement
  text: string | HTMLElement
  card: {
    title: string | HTMLElement
    text: string | HTMLElement
    image: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
  }[]
}>()

console.log(Swiper)


</script>

<template>
  <section class="section-padding bg-neutral-50 overflow-hidden relative">
    <div class="max-w-4xl mx-auto mb-12">
      <FadeInComponent>
        <h2 class="section-title mb-6 text-center" v-html="title"></h2>
      </FadeInComponent>
      <p v-html="text"></p>
    </div>
    <img class="absolute h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-50"
         src="/images/testimonial.svg" alt="vélemények">
    <div class="container lg:ml-[33%] relative">
      <div class="swiper-container">

        <swiper :slides-per-view="1"
                :loop="true"
                speed="1000"
                :breakpoints="{
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },

            }"
                :modules=" [Navigation]
        "
                :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
        }"
                :space-between="50">
          <swiper-slide
              class="bg-white border-2 border-black rounded-3xl p-6 lg:p-12"
              v-for="(slide, index) in card"
              :key="index">

            <div class="text-lg lg:text-2xl xl:text-xl mb-6" v-html="slide.text"></div>
            <div class="flex gap-3 items-center">
              <div class="w-26 h-26 border-radius">
                <NuxtImg
                    sizes="80px"
                    format="webp"
                    class="w-full h-full object-cover"
                    :src="slide.image.data.attributes.url"
                    :alt="slide.image.data.attributes.alternativeText"></NuxtImg>
              </div>
              <div>
                <div class="text-lg font-bold">{{ slide.title }}</div>
              </div>
            </div>

          </swiper-slide>

        </swiper>
        <div class="p-6 flex gap-3 ">
          <button class="swiper-prev swiper-btn"><i class="text-xl pi pi-angle-left"></i></button>
          <button class="swiper-next swiper-btn"><i class="text-xl pi pi-angle-right"></i></button>
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>
.swiper-btn{
  @apply bg-neutral-800;
  width: 60px;
  height: 60px;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.swiper-btn:hover{
  @apply bg-neutral-700;
}
.swiper-btn:active{
  @apply bg-neutral-600;
}
.swiper-slide-active{
  @apply bg-neutral-800 text-white transition-colors duration-1000  bg-[url('/images/lines.svg')];
}

</style>

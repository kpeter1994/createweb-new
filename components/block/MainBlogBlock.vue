<script setup lang="ts">
import type {blog} from "~/type";

const props = defineProps<{
  blog: blog
}>()


</script>

<template>
  <section class="section-padding">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row lg:py-6 gap-3 lg:gap-6">
        <div class="lg:w-1/2 order-2 lg:order-1">
          <div class="mb-3 text-sm flex gap-3">
            <span class="px-3 py-1.5 rounded border">design</span>
            <span class="px-3 py-1.5 rounded border">design</span>
            <span class="px-3 py-1.5 rounded border">design</span>
          </div>
          <NuxtLink :to="'/blog/'+blog.data.attributes.slug" class="lg:text-6xl lg:leading-[120%] font-bold mb-1.5 lg:mb-3 underline-animation inline">{{blog.data.attributes.title}}</NuxtLink>
          <p class="text-lg">{{blog.data.attributes.description}}</p>
          <div class="mt-3">
            <NuxtLink class="text-xl font-bold group text-neutral-600" :to="'/blog/'+blog.data.attributes.slug">Elolvasom
              <i class="pi pi-angle-right text-xl align-bottom group-hover:translate-x-1 transition-all duration-300"></i>
            </NuxtLink>
          </div>

        </div>
        <div  class="lg:w-1/2 order-1 lg:order-2 aspect-[6/4] overflow-hidden border-4 border-black rounded-[2rem]">
          <img class="w-full h-full object-cover" :src="blog.data.attributes.image.data.attributes.url" :alt="blog.data.attributes.image.data.attributes.alternativeText">
        </div>

      </div>

    </div>
  </section>

</template>

<style scoped>
.underline-animation {
  background: -webkit-gradient(linear, left top, right top, from(black), to(black));
  background: linear-gradient(to right, black 0%, black 100%);
  background-size: 0 10%;
  background-repeat: no-repeat;
  background-position: left 100%;
  -webkit-transition-duration: 0.6s;
  transition-duration: 500ms;
  padding: 0;
}

.underline-animation:hover {
  background-size: 100% 10%;
}
</style>
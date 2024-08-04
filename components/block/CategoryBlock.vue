<script setup lang="ts">
import type {blog} from "~/type";
import FadeInComponent from "~/components/animation/FadeInComponent.vue";

const props = defineProps<{
  title: string
  blogs: blog[]
}>()


</script>

<template>

  <div class="container mx-auto pb-20">
    <div class="flex gap-3 items-center">
      <FadeInComponent>
        <h2 class="text-5xl font-bold">{{title}}</h2>
      </FadeInComponent>

      <div class="w-full h-1 bg-neutral-900">

      </div>
    </div>

    <div class="mt-12 flex flex-col lg:flex-row gap-3 pb-6">
      <div v-for="item in blogs.data" :key="item.id" class="max-w-lg">
        <div class="w-full aspect-[6/4] ">
          <NuxtImg  v-if="item.attributes.image.data !== null"
                    class="rounded-[2rem] w-full h-full object-cover"
                    :src="item.attributes.image.data.attributes.url"
                    :alt="item.attributes.image.data.attributes.alternativeText"/>
        </div>
        <div class="mt-3">
          <NuxtLink class="text-2xl font-bold group " :to="'/blog/'+item.attributes.slug">{{item.attributes.title}}</NuxtLink>
          <p class="text-lg mt-1.5">{{item.attributes.description}}</p>
          <div class="mt-3 flex justify-between">
            <NuxtLink class="text-xl font-bold group text-neutral-600" :to="'/blog/'+item.attributes.slug">Elolvasom
              <i class="pi pi-angle-right text-xl align-bottom group-hover:translate-x-1 transition-all duration-300"></i>
            </NuxtLink>
            <span></span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import type {blog} from "~/type";
import FadeInComponent from "~/components/animation/FadeInComponent.vue";
import ButtonComponent from "~/components/shared/ButtonComponent.vue";

const props = defineProps<{
  title: string
  blogs: blog[]
  blogLink: object
}>()


</script>

<template>

  <section class="section-padding">
    <div class="container mx-auto pb-20">
      <div class="flex gap-3 items-center">
        <FadeInComponent>
          <h2 class="section-title font-bold">{{title}}</h2>
        </FadeInComponent>

        <div class="w-full h-1 bg-neutral-900">

        </div>
      </div>

      <div class="mt-12 flex flex-col lg:flex-row gap-6 pb-6">
        <div v-for="item in blogs.data" :key="item.id" class="max-w-lg">
          <div class="w-full lg:h-[300px] aspect-[6/4] ">
            <NuxtImg  v-if="item.attributes.image.data !== null"
                      class="rounded-[2rem] w-full h-full object-cover"
                      :src="item.attributes.image.data.attributes.url"
                      :alt="item.attributes.image.data.attributes.alternativeText"/>
          </div>
          <div class="mt-3">
            <NuxtLink class=" underline-animation font-bold group " :to="'/blog/'+item.attributes.slug">{{item.attributes.title}}</NuxtLink>
            <p class="lg:text-lg mt-1.5">{{item.attributes.description}}</p>
            <div class="mt-3 flex justify-between">
              <NuxtLink class="lg:text-xl font-bold group text-neutral-600 flex items-center" :to="'/blog/'+item.attributes.slug">Elolvasom
                <i class="pi pi-angle-right lg:text-xl  group-hover:translate-x-1 transition-all duration-300"></i>
              </NuxtLink>
              <span></span>
            </div>
          </div>

        </div>
      </div>

      <div v-if="blogLink" class="flex justify-center">
        <ButtonComponent :data="blogLink"></ButtonComponent>
      </div>

    </div>
  </section>

</template>

<style scoped>
.underline-animation {
  @apply text-xl font-semibold;
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
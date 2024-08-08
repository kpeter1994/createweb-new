<script setup lang="ts">
const query = gql`
query Navigation{
  navigation{
    data{
      id
      attributes{
        logo{data{attributes{url alternativeText}}}
        pages{data{attributes{title slug}}}
      }
    }
  }
}
`

const {data} = await useAsyncQuery(query)


</script>

<template>
  <header class="py-8 lg:py-12 px-4 lg:px-6">
    <div class="display-container flex items-center justify-between">
      <NuxtLink to="/" class="flex gap-1.5 items-center">
        <img class="h-8" :src="data.navigation.data.attributes.logo.data.attributes.url" :alt="data.navigation.data.attributes.logo.data.attributes.alternativeText" />
        <span class="font-bold text-lg lg:text-xl">{{data.navigation.data.attributes.logo.data.attributes.alternativeText}}</span>
      </NuxtLink>

      <nav>
        <ul class="flex gap-3 font-semibold">
          <li v-for="item in data.navigation.data.attributes.pages.data">
            <NuxtLink  class="hover:bg-gray-100 transition-all duration-300 py-1 px-3 rounded-full"
                       active-class="bg-gray-900 hover:bg-gray-900 text-white py-1.5 px-2 rounded-full cursor-default"
                       :to="item.attributes.slug ? '/' + item.attributes.slug : '/' " prefetch>{{item.attributes.title}}</NuxtLink></li>
        </ul>
      </nav>

    </div>


  </header>
</template>

<style scoped>

</style>
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
  <header class="py-12 px-4">
    <div class="display-container flex items-center justify-between">
      <NuxtLink to="/" class="flex gap-1.5 items-center">
        <img class="h-8" :src="data.navigation.data.attributes.logo.data.attributes.url" :alt="data.navigation.data.attributes.logo.data.attributes.alternativeText" />
        <span class="font-bold text-xl">{{data.navigation.data.attributes.logo.data.attributes.alternativeText}}</span>
      </NuxtLink>

      <nav>
        <ul class="flex gap-3">
          <li v-for="item in data.navigation.data.attributes.pages.data">
            <NuxtLink :to="item.attributes.slug ? '/' + item.attributes.slug : '/' " prefetch>{{item.attributes.title}}</NuxtLink></li>
        </ul>
      </nav>

    </div>


  </header>
</template>

<style scoped>

</style>
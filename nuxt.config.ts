// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/apollo',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-locomotive-scroll"
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },

  image: {
    format: ['webp'],
    dir: 'public',
  },
})
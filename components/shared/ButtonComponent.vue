<script setup lang="ts">

const props = defineProps<{
  data: {
    href: string
    label: string
    theme: string
  }
}>()
</script>

<template>

  <NuxtLink :to="data.href" class="btn" :class="data.theme">
    <span class="ml-2">{{data.label}}</span>
    <span class="w-[30px] h-[30px] btn-item">
      <i class="pi pi-arrow-up-right arrow"></i>
    </span>
  </NuxtLink>
</template>

<style scoped>
.btn{
  @apply font-bold py-2 px-2 rounded-full flex items-center gap-2 !important;
}

.btn-item{
  @apply bg-white rounded-full flex justify-center items-center relative overflow-hidden !important;
}

.dark{
  @apply bg-black text-white !important;

}

.dark .btn-item{
  @apply bg-white text-black rounded-full flex justify-center items-center relative overflow-hidden !important;
}

.light{
  @apply bg-white text-black !important;

}

.light .btn-item{
  @apply bg-black text-white rounded-full flex justify-center items-center relative overflow-hidden !important;
}

.btn:hover .arrow{
  animation: arrow-animation .4s ease-in ;
}


@keyframes arrow-animation {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translate(20px, -20px)
  }

  60%{
    transform: translate(30px, 30px)
  }
  70% {
    transform: translate(-20px, 20px)
  }
  100% {
    transform: translateY(0);
  }

}
</style>
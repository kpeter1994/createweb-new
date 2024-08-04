<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<template>
  <div class="w-full
  overflow-hidden
  relative
  after:content-['']
  after:w-12
  after:h-full
  after:bg-gradient-to-l
  after:from-transparent
  after:to-white
  after:left-0
  after:top-0
  after:absolute
  before:content-['']
  before:w-12
  before:h-full
  before:bg-gradient-to-r
  before:from-transparent
  before:to-white
  before:right-0
  before:top-0
  before:absolute
  before:z-10
">
    <div class="slider">
      <div class="slider-content">
        <div class="flex-item" v-for="image in props.data" :key="image.id">
          <img class="h-12" :src="image.attributes.url" :alt="image.attributes.alternativeText">
          <div class="block text-nowrap">{{ image.attributes.alternativeText }}</div>
        </div>
      </div>
      <div class="slider-content">
        <div class="flex-item" v-for="image in props.data" :key="image.id">
          <img class="h-12" :src="image.attributes.url" :alt="image.attributes.alternativeText">
          <div class="block text-nowrap">{{ image.attributes.alternativeText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  animation: move 40s linear infinite;
  display: flex;
  flex-wrap: nowrap;
  width: 3580px
}

.slider-content {
  display: flex;
  flex-wrap: nowrap;
  width: 1790px; /* A tartalom szélessége */
}

.flex-item {
  min-width: 180px;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
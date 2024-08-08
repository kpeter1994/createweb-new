<script lang="ts" setup>
import type {Block} from "~/type";
import {getPageQuery} from "~/graphql/getPageQuery";

import HeroBlock from "~/components/block/HeroBlock.vue";
import ContentBlock from "~/components/block/ContentBlock.vue";
import CtaBlock from "~/components/block/CtaBlock.vue";
import FaqBlock from "~/components/block/FaqBlock.vue";
import BlogBlocks from "~/components/block/BlogBlocks.vue";
import SeoBlock from "~/components/block/SeoBlock.vue";
import TestimonialBlock from "~/components/block/TestimonialBlock.vue";
import WhyWeBlock from "~/components/block/WhyWeBlock.vue";
import ServicesBlock from "~/components/block/ServicesBlock.vue";
import StarterFadeComponent from "~/components/animation/StarterFadeComponent.vue";
import PriceBlock from "~/components/block/PriceBlock.vue";
import CategoryBlock from "~/components/block/CategoryBlock.vue";
import FormBlock from "~/components/block/FormBlock.vue";


const {data} = await useAsyncQuery(getPageQuery, {id: 1})
// console.log(data)
const componentsMap: { [key: string]: any }= {
  'ComponentBlockHero': HeroBlock,
  'ComponentBlockCategory': CategoryBlock,
  'ComponentBlockContent': ContentBlock,
  'ComponentBlockCards': WhyWeBlock,
  'ComponentBlockCta': CtaBlock,
  'ComponentBlockFaq': FaqBlock,
  'ComponentBlockBlog': BlogBlocks,
  'ComponentBlockSeo': SeoBlock,
  'ComponentBlockTestimonial': TestimonialBlock,
  'ComponentBlockWhyWe': WhyWeBlock,
  'ComponentBlockServices': ServicesBlock,
  'ComponentBlockPrice': PriceBlock,
  'ComponentBlockFormPage': FormBlock
}

const pageTitle = ref<string>('')
const pageBlocks = ref<Block[]>([]);




if (data.value) {
 pageBlocks.value = data.value.page.data.attributes.blocks.map((block: any) => ({
   ...block,
   __typename: block.__typename,
 }))
}

const getComponent = (typename: string) => componentsMap[typename] || null



</script>

<template>


    <StarterFadeComponent>
      <div v-for="element in pageBlocks" :key="element.id">
        <component :is="getComponent(element.__typename)" v-bind="element" />
      </div>
    </StarterFadeComponent>



</template>

<style scoped></style>

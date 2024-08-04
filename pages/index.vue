<script lang="ts" setup>
import type {Block} from "~/type";

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

const query = gql`
query PageQuery{
  page(id:1){
    data{
      attributes{
        title
        slug
        seo{
          canonical
          MetaTitle
          MetaDescription
          MetaImege{data{attributes{hash alternativeText}}}
          StructuredData
        }
        blocks{
          ... on ComponentBlockHero{
            id
            title
            text
            link{id label href theme}
            image{data{attributes{url alternativeText}}}
            slider{images{data{attributes{url alternativeText}}}}
          }
          ... on ComponentBlockServices{
            id
            title
            text
            tabs{
              name
              title
              text
              image{data{attributes{url alternativeText}}}
            }
          }
          ... on ComponentBlockCta{
            title
            text
            ctaLink: link { id label href theme }
          }
          ... on ComponentBlockCards{
            title
            text
            card{
              title
              text
              image{data{attributes{url alternativeText}}}
            }
          }
          ... on ComponentBlockContent{
            title
            text
            image{data{attributes{url alternativeText}}}
          }
          ... on ComponentBlockTestimonial{
            title
            text
            card{
              title
              text
              image{data{attributes{alternativeText url}}}
            }
          }
          ... on ComponentBlockFaq{
            title
            text
            accordion{
              id
              title
              text
            }
          }
          ... on ComponentBlockCategory{
            id
            title
            text
            blogs{
              data{
                id
                attributes{
                  slug
                  title
                  description
                  image{data{attributes{url alternativeText}}}
                }
              }
            }
          }
          ... on ComponentBlockMainBlog{
            blog{data{attributes{
              title
              image{data{attributes{url alternativeText}}}
              description
              slug
            }}}
          }
          ... on ComponentBlockPrice{
            id
            title
            text
            card{
              title
              name
              text
              price
              theme
            }
          }
          ... on ComponentBlockFaq{
            id
            title
            text
            accordion{id text text}
          }
        }
      }
    }
  }
}
`

const {data} = await useAsyncQuery(query)

const componentsMap: { [key: string]: any }= {
  'ComponentBlockHero': HeroBlock,
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

  <Suspense>
    <StarterFadeComponent>
      <div v-for="element in pageBlocks" :key="element.id">
        <component :is="getComponent(element.__typename)" v-bind="element" />
      </div>
    </StarterFadeComponent>
  </Suspense>


</template>

<style scoped></style>

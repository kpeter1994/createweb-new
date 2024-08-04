<script lang="ts" setup>

import StarterFadeComponent from "~/components/animation/StarterFadeComponent.vue";

const {slug} = useRoute().params



const query = gql`
query blogPageQuery{
  blogs(filters: { slug: { eq: "${slug}" } }) {
    data{
      id
      attributes{
        seo{
          MetaTitle
          MetaDescription
          MetaImege{data{attributes{url}}}
          canonical
          StructuredData
        }
        title
        image{data{attributes{url alternativeText}}}
        slug
        body

      }
    }

  }
}
`

const {data} = await useAsyncQuery(query)

const blog = computed(() => data.value.blogs.data[0].attributes)
const body = computed(() => blog.value.body)

const updatedBody = computed(() => {
  return body.value.replace(/http:\/\/localhost:1337/g, '');
});

const content: any = ref(null);
const toc: any = ref(null);

useHead({
  htmlAttrs: {
    lang: 'hu',
  },
  link: [
    { rel: 'icon', type: 'image/ico', href: '/favicon/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '32x32', href: '/favicon/apple-touch-icon.svg' },

  ]
})

useSeoMeta({
  charset: 'utf-8',
  title: 'Cikkek',
  // ogTitle: seo.value.title,
  // description: seo.value.description,
  // ogImage: seo.value.image.data.attributes.url,
})

onMounted(() => {
  if (content.value) {
    const headers = content.value.querySelectorAll('h2, h3') as NodeListOf<HTMLElement>; // Casting to NodeListOf<HTMLElement>
    const tocList = toc.value.querySelector('.toc-list') as HTMLElement; // Ensure tocList is HTMLElement

    headers.forEach((header: HTMLElement) => { // Explicitly declaring header as HTMLElement
      const id = header.textContent?.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g, '-') || '';
      header.id = id;

      const tocItem = document.createElement('li');
      const tocLink = document.createElement('a');
      tocLink.href = `#${id}`;
      tocLink.textContent = header.textContent;
      tocLink.className = header.tagName.toLowerCase() === 'h2' ? 'font-bold text-blue-500 hover:text-blue-400 block bg-opacity-50 underline p-1' : 'ml-4 block text-blue-500 hover:text-blue-400';

      tocItem.appendChild(tocLink);
      tocList.appendChild(tocItem);
    });
  }
});



</script>

<template>

<StarterFadeComponent>
  <article class="max-w-4xl mx-auto">

    <h1 class="text-4xl lg:text-6xl font-bold mb-6">{{blog.title}}</h1>
    <div class="text-lg leading-relaxed lg:text-xl font-semibold text-gray-600 lg:leading-relaxed" v-html="blog.description">

    </div>

    <div ref="toc" class="py-12">
      <span class="font-bold text-xl mb-3 block"><i class="pi pi-book mr-1.5 opacity-70 text-xl"></i>Tartalomjegyzék</span>
      <ul class="max-w-md space-y-2 list-inside transition-all text-sm 2xl:text-base toc-list"></ul>
    </div>


    <div ref="content" class="content leading-relaxed" v-html="updatedBody">

    </div>
  </article>
</StarterFadeComponent>


</template>

<style>

.content h2 {
  @apply text-3xl font-bold mb-4 mt-12;
}
.content h3 {
  @apply  text-2xl font-semibold mb-4 mt-12 ;
}
.content img {
  @apply w-full mb-8 rounded-[2rem];
}
.content p {
  @apply mb-3 leading-relaxed lg:text-xl lg:leading-relaxed;
}

.content ul{
  @apply list-disc list-inside space-y-1.5 ml-6 mt-1.5 mb-3;
}
.content ol{
  @apply list-decimal list-outside space-y-1.5 ml-6 mt-1.5 mb-3;
}
.content li{
  @apply ml-3;
}

.content blockquote {
  @apply border-l-8 pl-6 my-12 text-2xl font-semibold opacity-90;
}

.content a {
  @apply underline text-blue-500;
}

.content a:hover {
  @apply text-blue-600 transition-all duration-300
}

.content .cta-btn{
  @apply  no-underline transition-all duration-300;
}

.content .cta-btn:hover{
  @apply bg-amber-300
}

figcaption{
  @apply text-center text-sm text-gray-500;
}
</style>

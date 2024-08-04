<script lang="ts" setup>


import type {Article, FormResponse} from "~/type";



const query = gql`query formPageQuery{
  form(id:1){
    data{
      id
      attributes{
        title
        form_blocks{
          data{
            attributes{
              title
              FormComponents{
                ... on ComponentSharedInput{id label}
                ... on ComponentSharedSelect{id label options}
          \t\t\t... on ComponentSharedInputCheckbox{id label options}
              }
            }
          }
        }
      }
    }
  }
}`

const {data} = await useAsyncQuery<FormResponse>(query)



console.log(data.value)


</script>

<template>
  <div>
   {{ data?.form.data.attributes.title }}
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import InputComponent from "~/components/form/InputComponent.vue";
import TextareaComponent from "~/components/form/TextareaComponent.vue";
import type {formComponent} from "~/type";

const props = defineProps<{
  form: {
    data: {
      attributes: {
        title: string
        text: string
        formComponent: {
          label: string
          type: string
          __typename: string
        }[]
      }

    }
  }
}>()


const formComponentsMap: { [key: string]: any } = {
  'ComponentFormInput': InputComponent,
  'ComponentFormTextarea': TextareaComponent
}

const formComponents = ref<formComponent[]>([])

if (props.form.data.attributes.formComponent){
  formComponents.value = props.form.data.attributes.formComponent.map((component: any) => ({
    ...component,
    __typename: component.__typename,
  }))
}

const getComponent = (typename: string) => formComponentsMap[typename] || null

</script>

<template>

  <section class="section-padding bg-gray-50 bg-[url('/images/pattern.svg')]">
    <div class="container mx-auto flex flex-col lg:flex-row">
      <div class="lg:w-1/2">
        <h2 class="section-title">{{ props.form.data.attributes.title }}</h2>
        <p class="section-lead">{{ props.form.data.attributes.text }}</p>

      </div>
      <div class="lg:w-1/2">

        <div v-for="input in form.data.attributes.formComponent" :key="input.label">
          <label :for="input.label">{{ input.label }}</label>
          <input :type="input.type">
        </div>

        <div v-for="element in formComponents" :key="element.id">
          <component :is="getComponent(element.__typename)" v-bind="element" />
        </div>

        <div>
          {{form}}
        </div>

        <form>
          <div class="bg-white rounded-[3rem] p-6 lg:p-12 shadow">
            <InputComponent required v-model="form.name" class="mt-3 font-[800]" type="text" label="Név"
                            name="name"></InputComponent>
            <InputComponent required v-model="form.email" class="mt-3  font-[800]" type="email" label="Email"
                            name="email"></InputComponent>
            <InputComponent v-model="form.phone" class="mt-3 font-[800]" type="text" label="Telefonszám"
                            name="phone"></InputComponent>
            <TextareaComponent v-model="form.message" class=" mt-3  font-[800]" label="Üzenet"
                               name="message"></TextareaComponent>

            <div class="py-3 flex flex-col lg:flex-row items-center justify-between">

              <div class="mb-3">
                <input id="check" type="checkbox" required>
                <label for="check" class="inline">Elolvastam és elfogadom az
                  <NuxtLink to="/" class="font-bold underline">Adatkezelesi tájékoztatót</NuxtLink>
                </label>
              </div>

              <button type="submit" class="btn">

                <span class="ml-2">Küldés</span>

                <span class="w-[30px] h-[30px] btn-item">
                  <i class="pi pi-arrow-up-right text-black arrow"></i>
                </span>

              </button>

            </div>

          </div>

        </form>

      </div>

    </div>

  </section>


</template>

<style scoped>

</style>
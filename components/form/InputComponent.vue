<script lang="ts" setup>

const props = defineProps<{
  modelValue: string;
  name: string;
  label?: string;
  error?: string;
  type: {
    type: String
    default: 'text'
  }
}>();

const emits = defineEmits(['update:modelValue'])

const inputValue = ref(props.modelValue)

watch(inputValue, (newValue) => {
  emits('update:modelValue', newValue)
})

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
})
</script>

<template>
    <div class="relative border-b border-neutral-500 py-3 ">
      <input type="text"
             required
             :id="props.name"
             :type="props.type"
             v-model="inputValue"
             class="
             block
             px-2.5
             pb-2.5
             pt-4
             w-full
             text-sm
             text-gray-900
             bg-transparent
             rounded-lg
             border-1
             border-gray-300
             appearance-none
             focus:outline-none
             focus:ring-0
             focus:border-blue-600 peer"
             placeholder=" " />

      <label :for="props.name"
             class="
             absolute
             text-sm
             text-gray-500
             duration-300
             transform
             -translate-y-4
             scale-75
             top-2
             z-10
             origin-[0]
             bg-white
             px-2
             peer-focus:px-2
             peer-focus:bg-black
             peer-focus:rounded
             peer-focus:p-0.5
             peer-focus:text-white
             peer-placeholder-shown:scale-100
             peer-placeholder-shown:-translate-y-1/2
             peer-placeholder-shown:top-1/2
             peer-focus:top-2
             peer-focus:scale-75
             peer-focus:-translate-y-4
             rtl:peer-focus:translate-x-1/4
             rtl:peer-focus:left-auto start-1">{{props.label}}</label>

      <p v-if="props.error" class="pl-3 text-sm text-red-500">{{props.error[0]}}</p>
    </div>
</template>

<style scoped></style>

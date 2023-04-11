<script lang="ts" setup>
import { PropType } from 'vue';
import { Company } from '~/types/Company';

const props = defineProps({
  company: {
    type: Object as PropType<Company>,
    required: true
  }
})
const toNumber = computed(()=> props.company.code+""+ props.company.phone)
const message = ref<string>("");
function  validateAndSendMessage() {
  if (message.value === "") {
    errors.value.push("The message field must have content")
    return
  }
  const { data, error } = useSendMessage().sender(toNumber.value, message.value)
  console.log(data);
  console.warn(error);
}
const errors = ref<string[]>([]);
</script>
<template>
  <form @submit.prevent="validateAndSendMessage">
    <textarea
      v-model="message"
      class="rounded border-2 border-gray-300 w-full outline-none focus:shadow-md focus:border-sky-600 focus:shadow-sky-200 p-2"
      name="message"
      id="message"
      placeholder="Here your message"
      rows="4"></textarea>
    <p class="text-sm md:text-lg text-red-500" v-if="errors.length > 0"> Whoops!
       <br>
       <p v-for="(err, index) in errors" :key="index">{{ err }}</p>
       </p>
    <button
      class="mt-2 border-2 px-2 py-1 bg-gray-800 hover:bg-gray-700 uppercase text-white rounded"
      type="submit">
      Submit
    </button>
  </form>
</template>

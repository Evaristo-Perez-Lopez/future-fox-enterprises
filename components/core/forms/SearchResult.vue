<template>
  <div class="bg-white border-sky-50 py-2">
    <div class="flex gap-2 items-center">
      <p
        class="rounded-full flex items-center justify-center bg-yellow-100 h-8 w-8">
        {{ firstLetter() }}
      </p>
      <NuxtLink
        :to="url"
        class="font-normal text-blue-600 hover:underline-offset-4 hover:underline">
        {{ name }}
      </NuxtLink>
    </div>
    <p class="font-light text-sm mt-2 text-gray-500">
      {{ description }}
    </p>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
const firstLetter = () => {
  return props.name.trim().slice(0, 1);
};
</script>

<template>
  <CoreAppHeader />
  <NuxtLoadingIndicator />
  <NuxtPage />
  <CoreFormsCreateCompany v-if="create" />
  <section
    class="fixed bottom-8 right-8 border h-14 w-14 flex items-center justify-center rounded-full bg-sky-700 text-white hover:bg-sky-600 active:bg-sky-900 active:shadow-sm">
    <button @click="create = !create" class="fill-white">
      <IconsFormsPlus :class="{ 'rotate-45': create }" />
    </button>
  </section>
</template>
<script lang="ts" setup>
const create = ref(false);
</script>

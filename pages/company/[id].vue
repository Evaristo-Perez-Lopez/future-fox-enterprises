<script lang="ts" setup>
import type { Company } from "~/types/Company";
const route = useRoute();
const company: any = useCompany().dataCompanies.value?.filter(
  (item) => item.id === route.params.id
);

// TODO: Show details about a company
const write = ref(false);
</script>
<template>
  <section
    v-if="company?.length === 0 || !company"
    class="mx-auto p-2 md:p-0 md:py-2 max-w-xl text-red-400 italic text-lg">
    There is no data to show here
  </section>
  <section
    class="mx-auto p-2 md:p-0 md:py-2 max-w-xl grid grid-cols-1 md:grid-cols-4">
    <article class="pb-2 md:col-span-3">
      <p class="text-xs md:text-sm font-semibold text-sky-500 py-1">
        {{ company[0].id }}
      </p>
      <h4 class="text-lg md:text-2xl font-bold text-sky-900 py-2">
        {{ company[0].name }}
      </h4>
      <div>
        <p
          class="border-b-4 border-yellow-500 inline-block text-sm md:text-lg text-sky-800">
          Description
        </p>
        <p class="text-sm md:text-lg font-normal text-gray-700">
          {{ company[0].description }}
        </p>
      </div>
    </article>
    <aside class="border-t-4 pl-1">
      <p class="py-2 text-sm md:text-lg font-normal text-sky-800">
        Contact info
      </p>
      <div class="flex items-center gap-1">
        <IconsPhone class="fill-sky-700" />
        <a
          href="tel:+529841408103"
          class="font-light text-sm md:text-sm lg:text-lg hover:underline">
          {{ company[0].code + "-" + company[0].phone }}
        </a>
      </div>
      <button
        @click="write = true"
        class="mt-2 border-2 border-sky-900 px-2 py-1 bg-sky-800 hover:bg-sky-900 hover:border-sky-800 text-white rounded">
        Write a message
      </button>
    </aside>
  </section>
  <section class="mx-auto p-2 md:p-0 md:py-2 max-w-xl" v-if="write">
    <p class="text-lg py-2">Compose Message</p>
    <CoreFormsComposeMessage :company="company[0]" />
  </section>
</template>

<style scoped></style>

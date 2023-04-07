<script lang="ts" setup>
import type { Company } from "~/types/Company";
const appStatus = useStatus();
const companies = useCompany();
const totalResult = computed(() => {
  if (results.value)
    return results.value.reduce((acc: number, curent: any) => acc + 1, 0);
  else return 0;
});
// const { sender } = useSendMessage();
// const msg = ref();
// function send() {
//   const { data, error } = sender(529841408103, msg.value);
//   if (error) {
//     alert(error.value?.data.message);
//   }
// }
const results = ref<Company[] | any>();
function search(query: string) {
  if (!query) return;
  results.value = "";
  companies.value.map((val) => {
    if (val.name.toLowerCase().toLowerCase().includes(query.toLowerCase())) {
      results.value = [...results.value, val];
    }
  });
  if (results.value) {
    appStatus.value = "found";
  } else {
    appStatus.value = "notfound";
  }
}
</script>

<template>
  <main class="max-w-screen-lg mx-auto py-8">
    <section class="text-gray-600 px-4 mb-8">
      <CoreFormsSearchBar @searchQuery="search" />
    </section>

    <Welcome v-if="appStatus === 'start'" />
    <section class="px-4" v-if="appStatus !== 'start'">
      <article class="bg-sky-100 px-3 py-2">
        <h4 class="text-sky-600 font-normal text-md md:text-lg">
          Search results: <span class="font-bold">{{ totalResult }}</span>
        </h4>
      </article>
      <article class="flex flex-col gap-4" v-if="appStatus === 'found'">
        <CoreFormsSearchResult
          v-for="(item, idx) in results"
          :key="idx"
          :name="item.name"
          :description="item.description"
          :url="`/company/${item.id}`" />
      </article>
      <article class="flex justify-center my-8" v-if="appStatus === 'notfound'">
        <CoreFormsNoResults />
      </article>
    </section>
    <!-- <h1>Starting Project</h1>
    <p>Search App</p>
    <input type="text" class="w-96 h-40 border-2 text-black" v-model="msg" />
    <button class="border-2 py-2 px-4 bg-gray-400" @click="send">
      Send message
    </button>
    <section>
      <h3 class="py-2 font-semibold text-xl">Empresas</h3>
      <p>Estás viendo una lista de empresas con información general</p>
    </section> -->
  </main>
</template>

<style scoped></style>

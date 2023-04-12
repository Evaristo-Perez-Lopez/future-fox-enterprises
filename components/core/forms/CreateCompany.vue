<script lang="ts" setup>
import type { Company } from "~/types/Company";
const { create } = useCreateCompany();
const newCompany = ref<Company>({
  id: "",
  name: "",
  description: "",
  code: "",
  phone: "",
});
const creationStatus = ref("creating");
const trimOnParams = () => {
  newCompany.value.name = newCompany.value.name.replace(/(\r\n|\n|\r)/gm, "");
  newCompany.value.description = newCompany.value.description.replace(
    /(\r\n|\n|\r)/gm,
    ""
  );
};
const validateCompany = computed(() => {
  if (
    newCompany.value.name &&
    newCompany.value.description &&
    newCompany.value.code &&
    newCompany.value.phone
  ) {
    creationStatus.value = "creating";
    return true;
  }
  creationStatus.value = "error";
  return false;
});
async function createCompany() {
  trimOnParams();
  if (validateCompany.value) {
    const { data, error } = await create(newCompany.value);
    if (data) {
      console.log(data);
    }
    if (error) {
      creationStatus.value = "error";
    }
    creationStatus.value = "created";
    newCompany.value = {
      id: "",
      name: "",
      description: "",
      code: "",
      phone: "",
    };
  }
}
</script>
<template>
  <section class="border-2 w-full py-8 px-3 fixed top-0 bottom-0 bg-white">
    <article class="py-4 bg-sky-200">
      <h5 class="text-center font-bold text-lg">Register a company</h5>
    </article>
    <article
      v-if="creationStatus === 'created'"
      class="mt-4 border-2 flex justify-center gap-4 border-cyan-700 max-w-lg mx-auto p-4 text-lg text-cyan-600">
      <p>Company registered</p>
      <IconsCheckCircle class="fill-cyan-500" />
    </article>
    <form
      v-if="creationStatus !== 'created'"
      @submit.prevent="createCompany"
      class="max-w-lg mx-auto my-4">
      <p class="text-red-300" v-if="creationStatus === 'error'">
        There is something wrong or missing!
      </p>
      <div class="flex flex-col w-full p-0">
        <label class="text-lg text-blue-900" for="name">Company Name</label>
        <input
          v-model="newCompany.name"
          required
          class="rounded box-border border focus:border-2 focus:border-sky-200 border-sky-500 px-4 py-2 text-lg outline-none focus:shadow-md focus:shadow-sky-500"
          type="text"
          placeholder="The best company ever"
          name="name"
          id="name" />
      </div>
      <div class="flex flex-col w-full p-0">
        <label class="text-lg text-blue-900" for="description">
          Description
        </label>
        <textarea
          v-model="newCompany.description"
          required
          class="rounded box-border border focus:border-2 focus:border-sky-200 border-sky-500 px-4 py-2 text-lg outline-none focus:shadow-md focus:shadow-sky-500"
          type="text"
          name="description"
          placeholder="Short description of the company"
          id="description" />
      </div>
      <section class="flex gap-2">
        <div class="flex flex-col w-14 p-0">
          <label class="text-lg text-blue-900" for="code">Code</label>
          <input
            v-model="newCompany.code"
            required
            class="rounded box-border border focus:border-2 focus:border-sky-200 border-sky-500 px-4 py-2 text-lg outline-none focus:shadow-md focus:shadow-sky-500"
            type="text"
            placeholder="52"
            name="code"
            id="code" />
        </div>
        <div class="flex flex-col w-full p-0">
          <label class="text-lg text-blue-900" for="phone">Phone Number</label>
          <input
            v-model="newCompany.phone"
            required
            class="rounded box-border border focus:border-2 focus:border-sky-200 border-sky-500 px-4 py-2 text-lg outline-none focus:shadow-md focus:shadow-sky-500"
            type="tel"
            placeholder="9841404562"
            name="phone"
            id="phone" />
        </div>
      </section>
      <button
        class="bg-black py-2 px-8 w-full hover:bg-gray-900 active:bg-gray-700 rounded mt-2 text-white"
        type="submit">
        Create
      </button>
    </form>
  </section>
</template>

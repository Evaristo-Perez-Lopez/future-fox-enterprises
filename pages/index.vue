<script lang="ts" setup>
const { sender } = useSendMessage();
const msg = ref();
function send() {
  const { data, error } = sender(529841408103, msg.value);
  if (error) {
    alert(error.value?.data.message);
  }
}
</script>

<template>
  <main class="max-w-screen-lg mx-auto py-8">
    <section class="text-gray-600 px-4 mb-8">
      <CoreFormsSearchBar />
    </section>
    <h1>Starting Project</h1>
    <p>Search App</p>
    <input type="text" class="w-96 h-40 border-2 text-black" v-model="msg" />
    <button class="border-2 py-2 px-4 bg-gray-400" @click="send">
      Send message
    </button>
    <section>
      <h3 class="py-2 font-semibold text-xl">Empresas</h3>
      <p>Estás viendo una lista de empresas con información general</p>
    </section>
  </main>
</template>

<style scoped></style>

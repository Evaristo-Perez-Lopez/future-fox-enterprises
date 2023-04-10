<script lang="ts" setup>
const company = useRoute().params.id;
// TODO: Show details about a company
</script>

<template>
  <section
    class="mx-auto p-2 md:p-0 md:py-2 max-w-xl grid grid-cols-1 md:grid-cols-4">
    <article class="pb-2 md:col-span-3">
      <p class="text-xs md:text-sm font-semibold text-sky-500 py-1">
        3602d2fa-5572-4b7b-b636-6730a381fd48
      </p>
      <h4 class="text-lg md:text-2xl font-bold text-sky-900 py-2">Codely TV</h4>
      <div>
        <p
          class="border-b-4 border-yellow-500 inline-block text-sm md:text-lg text-sky-800">
          Description
        </p>
        <p class="text-sm md:text-lg font-normal text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, at ex
          quae quibusdam ab laudantium, quisquam sint quidem dolore voluptates
          possimus voluptatibus facere alias aliquam perspiciatis voluptatem
          atque placeat culpa!
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
          class="font-light text-sm md:text-lg hover:underline"
          >529841408103</a
        >
      </div>
      <button
        class="mt-2 border-2 border-sky-900 px-2 py-1 bg-sky-800 hover:bg-sky-900 hover:border-sky-800 text-white rounded">
        Write a message
      </button>
    </aside>
  </section>
  <section class="mx-auto p-2 md:p-0 md:py-2 max-w-xl">
    <p class="text-lg py-2">Compose Message</p>
    <form>
      <textarea
        class="rounded border-2 border-gray-300 w-full outline-none focus:shadow-md focus:border-sky-600 focus:shadow-sky-200 p-2"
        name="message"
        id="message"
        placeholder="Here your message"
        rows="4"></textarea>
      <button
        class="mt-2 border-2 px-2 py-1 bg-gray-800 hover:bg-gray-700 uppercase text-white rounded"
        type="submit">
        Submit
      </button>
    </form>
  </section>
</template>

<style scoped></style>

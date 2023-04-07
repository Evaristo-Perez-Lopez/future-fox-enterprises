<template>
  <form
    class="border-2 h-12 rounded bg-gray-50 py-2 px-2 box-border flex justify-start items-center focus-within:bg-white focus-within:border-sky-500">
    <label class="block box-border bg-transparent h-full" for="search">
      <IconsFormsSearch class="w-full h-full" />
    </label>
    <input
      class="w-full h-full bg-transparent outline-none pl-2 text-lg"
      type="search"
      name="search"
      id="search"
      placeholder="Search a company by name" />
  </form>
</template>

<script lang="ts" setup></script>

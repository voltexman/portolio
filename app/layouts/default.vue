<script setup>
const links = [
  { name: "Головна", to: "/" },
  { name: "Про мене", to: "/about" },
  { name: "Мої роботи", to: "/projects" },
];
</script>

<template>
  <div class="bg-neutral-50">
    <nav class="flex justify-center items-center gap-5 h-18">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
        class="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-300">
        {{ link.name }}
      </NuxtLink>
    </nav>

    <slot name="header" />

    <div class="px-6 py-10 w-full flex items-center">
      <div class="max-w-3xl mx-auto w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

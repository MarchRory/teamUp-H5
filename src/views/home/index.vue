<script setup lang="ts">
const HelloWorld = defineAsyncComponent(
  () => import("@/components/HelloWorld.vue")
);
console.log("666");
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue + Tailwindcss + TypeScript" />
  </div>
</template>

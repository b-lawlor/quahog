<template>
  <a href={{ number }}>
      {{ number }} {{ title }}
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  number: number,
  title: string
}>();
</script>

<style>
.test {
  border: solid 1px #ccc;
}
</style>
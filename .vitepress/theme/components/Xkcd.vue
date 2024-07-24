<template>

<p>{{url}}</p>

</template>

<script setup lang='ts'>

const props = defineProps<{
    id: number,
}>();

const url = `https://xkcd.com/${props.id}/info.0.json`

const res = await fetch(url)
// const data = res.json()


</script>

<style>

</style>
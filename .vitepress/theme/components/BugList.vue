<template>
<ul>    
    <li v-for='bug in bugs' :key='bug.id'>
        <Bug :id='bug.id'/> 
    </li>
</ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  bugs: Array<object>,
}>();

</script>

<style scoped>
ul {
    list-style-type: none;
    display: flex;
    flex-flow: column wrap;
    padding-left: 0;
    font-size: 1.25rem;
    line-height: 2;
}

li {
    justify-content: space-between;
}

li span {
    margin-left: auto;
    font-family: var(--vp-font-family-mono);
    font-size: var(--vp-code-font-size);
}
</style>
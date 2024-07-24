<template>

  <div v-bind:id='id' class='bug'>
    <span>🐛</span> {{ id }}:
    <a v-bind:href='baseUrl+id' target='_blank'>
        {{ bug.summary }}
    </a> 
    <div class='box'>
      <div>({{ bug.severity }}) {{ bug.component }} </div>
      <div class='push'>{{ bug.status }}</div>
    </div>
  </div>
  
</template>

<script setup lang='ts'>

const props = defineProps<{
  id: number,
}>();

const baseUrl = 'https://bugs.koha-community.org/bugzilla3/show_bug.cgi?id='

import { data as bugs } from '../../../data/bugs.data'

const bug = bugs.bugs.filter( b => {
        return b.id ===props.id
      })[0]
  
</script>
  
<style>

  .bug {
    padding: 5px;
    border-width: thin;
    border: none 1px;
  }

  .bug span {
    visibility: hidden;
  }

  .bug:hover span {
    visibility: visible;
  }

  .box {
    display: flex;
    justify-content: space-between;
  }

  .box div {
    padding-left: 32px;
    font-family: var(--vp-font-family-mono);
    font-size: var(--vp-code-font-size);
  }

</style>
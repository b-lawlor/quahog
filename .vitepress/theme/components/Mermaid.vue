<template>
  <pre class="mermaid">
    <slot></slot>
  </pre>
</template>

<script>
 export default {
   mounted() {
     import("mermaid/dist/mermaid").then(m => {
       m.initialize({
         startOnLoad: true
       });
       m.init();
     });
   }
 };
</script>

<style>
</style>

<!-- Usage
## Pre tag
<pre class="mermaid">
  graph LR 
  A --- B 
  B-- >C[fa:fa-ban forbidden] 
  B-- >D[bug]
</pre>

## Vue component needs semicolons 
<Mermaid>
    graph LR;
  A --- B;
  B-- >C[forbidden];
  B-- >D[bug];
</Mermaid>

## Code fence needs semicolons
```mermaid
  graph LR;
  A --- B;
  B-- >C[forbidden];
  B-- >D[bug];
```
-->
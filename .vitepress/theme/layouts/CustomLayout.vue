<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PageHeader from '../components/PageHeader.vue';
// import TestComponent from '../components/TestComponent.vue';
const { Layout } = DefaultTheme
const route = useRoute()

async function renderMermaid() {
    const [m, elk] = await Promise.all([import('mermaid'), import('@mermaid-js/layout-elk')])
    m.default.registerLayoutLoaders(elk.default)
    m.default.initialize({ startOnLoad: false, layout: 'elk' })
    m.default.run()
}

onMounted(renderMermaid)
watch(() => route.path, renderMermaid, { flush: 'post' })
</script>

<template>
    <Layout>
        <template #doc-before>
            <PageHeader />
        </template>

        <template #layout-bottom>
            <div id="wcb" class="carbonbadge wcb-d"></div>
        </template>
    </Layout>
</template>

<style module>
.Layout {
    min-height: 100dvh;
}

.Layout ul {
    list-style-type: none;
}

.carbonbadge {
    margin: auto;
}

</style>
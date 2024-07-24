---
title: Blog
---

<script setup>
import { data as posts } from '/data/posts.data'
import formatDate from '/.vitepress/theme/utils/formatDate'
import getSorted from '/.vitepress/theme/utils/getSorted'
import getRandom from '/.vitepress/theme/utils/getRandom'

const sortedPosts = getSorted( posts )
const randomPost = getRandom( posts )
</script>

<ul>
    <li v-for='(post, key) of sortedPosts' :key='key'>
        <strong><a :href='post.url'>{{ post.frontmatter.title }}</a></strong><br/>
        <span>{{ formatDate( post.frontmatter.date ) }}</span>
    </li>
</ul>

<!-- commented out until we have more content
## Random post
<ul>
    <li>
        <strong><a :href="randomPost.url">{{ randomPost.frontmatter.title }}</a></strong><br/>
        <span>{{ formatDate( randomPost.frontmatter.date ) }}</span>
    </li>
</ul>
-->

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0;
    font-size: 1.125rem;
    line-height: 1.75;
}

li {
    display: flex;
    justify-content: space-between;
}

li span {
    font-family: var(--vp-font-family-mono);
    font-size: var(--vp-code-font-size);
}
</style>
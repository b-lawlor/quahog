---
# https://vitepress.dev/reference/default-theme-home-page
title: Bugs
---

<script setup>
import { data } from '/data/bugs.data'
const email = import.meta.env.VITE_EMAIL

const assignedBugs = data.bugs.filter(function (b) {
  return b.assigned_to.includes(email) ||
      // add some other bugs that I submitted patches for
      [36295, 36195].includes(b.id)
})

const reportedBugs = data.bugs.filter(function (b) {
  return b.creator.includes(email)
})

const coolBugs = data.bugs.filter(function (b) {
  return b.cc.includes(email) &&
    // filter out resolved bugs
    !['Pushed to main', 'Pushed to stable', 'Pushed to oldstable', 'RESOLVED'].includes(b.status)
})

</script>

I might write about some bugs here. Below is a list of bugs based on from my activity on Bugzilla. This page will be updated whenever the site is rebuilt.

## Bugs I'm squashin' :hiking_boot: :bug:
<BugList :bugs="assignedBugs"/>

## Bugs I spotted :eyes: :bug:
<BugList :bugs="reportedBugs"/>

## Bugs I'm studying :mag_right: :bug:
<BugList :bugs="coolBugs"/>

<style>
</style>
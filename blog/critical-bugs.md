---
title: Critical bugs
date: 2024-03-11 00:00:00 -5
category: bugs
prev:
  text: First patch story
  link: /blog/first-patch-story
next:
  text: Koha reports enhancements
  link: /blog/koha-reports-enhancements
---

Almost four months have passed. I've signed off on some patches but am losing hope about ever finding another bug. Imposter syndrome sets in.

I'm testing some bug that has to do with item search. All of a sudden the item search button stops working. I jump on IRC and someone points me to this bug for issues related to a bug that implemented CSRF protection. 

<Bug :id='36195'/>

I see Jonathan has attached a patch to fix an ajax call by changing the method from POST to GET. I find the same issue in the ajax call for item search and submit my second ever patch to delete one line of code. Critical bugs can sometimes have trivial solutions.

A month later I'm working on an enhancement in item search and I find another CSRF related bug in the batch operations buttons in item search. So I report it and patch it. 
<Bug :id='36630'/>

Three months later I see a blocker on the Koha dashboard that smells like it's CSRF related.
<Bug :id='37377'/>

Patching critical bugs is the best!
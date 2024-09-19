---
title: Koha Reports enhancements
date: 2024-03-26 00:00:00 -5
category: bugs
prev:
  text: Global bug squashing day
  link: /blog/global-bug-squashing-day
next:
  text: Making Item Search shareable
  link: /blog/making-item-search-shareable
---

I had been working on this enhancement to add muliple select runtime parameters to Koha Reports for three and half months. This idea had been around for eight years, but proved to be difficult to implement due to differences in the way the Koha Reports module retrieves its parameters and the way mutiselect form elements parameterize their selections.
<Bug :id='16002'/>

An existing patch added the ability to optionally add an All option to report parameter drop downs. This patch provided a blueprint for me to follow. :world_map:
<Bug :id='23389'/>

A subsequent patch added the option for providing a newline separated list as a report parameter. I started thinking that a newline separated list is essentially a manually created multiselect. If Koha already knows how to handle a list as a report parameter, all we should have to do is make multiselects submit as a single newline delimeted parameter. :dark_sunglasses:
<Bug :id='27380'/>

Standing on the shoulders of Koha giants, I created my first `Frankenhancement`:copyright:, smashing the concepts of these two patches together, sewing its internals up with magical regular expressions and zaping it to life with javascript that overrides the default form submission. It's Alive! :zap: :zombie:
<Bug :id='35746'/>

This code has been described as `works well, easy to read, excellent work!`, `feels like hacking` and `hard to maintain` but most importantly `easier than rewriting the whole module`.

At some points I didn't know if it was going to happen at all, but it got signed off, patch doesn't apply, passed QA, failed QA, then needed to be rebased again and finally pushed to main for 24.05. 

I used the momentum from working in this area of the code to add a patch to improve the ui/ux when adding runtime parameters to reports.
<Bug :id='35856'/>

Pedro spotted a bug in the muti select patch, where if a query contained multiple multi selects and only one selection was made in each, the parameters were not processed correctly and the wrong SQL was being generated. I started to regret ever putting this monsterous code into existence and boarding a ship bound for the Arctic. Then I calmed down and wrote another patch. This patch didn't really fix the case of making zero selections, so more work would be needed.
<Bug :id='37077'/>

I forgot that earlier I had submitted another enhancement to mutiselect reports based on an improvements made to the item search form. This patch adds the select2 library to make making multi selections in Reports more user friendly. To make this more useful multi selects should really be optional. When no selections are made, report results should not be limnited. To accomplish this I updated the default value of the hidden select to be a newline delimited string of all values.
<Bug :id='37050'/>

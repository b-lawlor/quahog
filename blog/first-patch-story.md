---
title: First patch story
date: 2023-11-17 00:00:00 -5
category: bugs
prev:
  text: First sign off
  link: /blog/first-sign-off-story
next:
  text: Critical bugs
  link: /blog/critical-bugs
---

It's been a couple months since the Koha-US conference in Portsmouth. I've signed off on a few patches and through repetition am starting to get the process.

I'm testing this bug by running the page's html though the [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input+with_options). 
<Bug :id='35157'/>

Running through the test plan leads me to finding a another stray html tag and writing my first patch. Even though this patch only changes a single character to fix a single html tag and its effect is invisible to users, it changes my whole perception of my relationship with Koha.
<Bug :id='35365'/>

I learn that running koha-testing-docker frequently and testing patches not only teaches you about how Koha works, but it can help you finds bugs too.

:bug:
:ocean:
:surfer:
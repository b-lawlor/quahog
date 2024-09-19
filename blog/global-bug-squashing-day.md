---
title: Global bug squashing day
date: 2024-03-22 00:00:00 -5
category: bugs
prev:
  text: Critical bugs
  link: /blog/critical-bugs 
next:
  text: Koha reports enhancements
  link: /blog/koha-reports-enhancements
---

I had heard about the `party_mode` bug for the first time at the Koha US conference in Portsmouth. There had been a recent thread in Slack about possible applications of `party_mode`, which led to the bug being officially filed two days before [global bug squashing day](https://wiki.koha-community.org/wiki/2024-03-22_Global_bug_squashing_day). 

<Bug :id='36371'/>

On Global Bug Squashing day I signed off on a couple bugs and took some time in the afternoon to see if I could write a small patch. Looking into the code I found that someone had conveniently left a comment in the template begging the question `[%# FIXME Why that? why not if == 0? %]` which turned out to be the answer to the party mode bug. Instead of checking if the value of the attribute, which if `party_mode` is set to `No` would be `0` we should check whether the attribute is defined or not.

```bash
git log --grep='party_mode'
```

Party mode rules! :partying_face:

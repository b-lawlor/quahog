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

Four months since submitting my first patch. I had signed off on a few patches but am losing hope about ever finding another bug or figuring out an enhancement I could work on. Imposter syndrome sets in.

I was testing some bug that had to do with item search. All of a sudden the item search button stopped working. I jumped on IRC and someone pointed me to this bug for issues related to the patch that implemented Cross-Site Resource Forgery protection.

[CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) (aka "session riding" :surfer:) is when baddies design click based attacks that take advantage of an authenticated user's cookies to make HTTP requests that perform [create update or delete operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete). To prevent this type of attack a patch was made to include a secret token that is generated and verified on the server side in all forms that make up the Koha user interfaces.

<Bug :id='36195'/>

I saw Jonathan had attached a patch to fix an Ajax call by changing the method from POST to GET. In cases where no CUD action is performed the form method can be GET and no CSRF token is needed. I found the same issue in the Ajax call for item search and submitted my second ever patch to delete one line of code. I learned that critical bugs sometimes have trivial solutions.

A month later I was working on an enhancement in item search and discovered the batch operations buttons were broken. When I looked into the form I found the same issue. I reported it and attached a patch. It's cool to see how quickly major bugs with trivial solutions can get signed off, passed QA and pushed to main.
<Bug :id='36630'/>

Three months later I was checking the Koha Dashboard and saw a new blocker that smelled like another CSRF related bug, but this time it was a bit different. In this case the perl file had been updated to check for a `cud-` prefixed parameter, but since the form method was GET it didn't need to be updated. The first patch I wrote got the solution backwards, but I quickly realized my mistake and submitted a correct one.
<Bug :id='37377'/>

The next day I was browsing bugzilla and a newly reported bug caught my eye. When I looked into the code I find it's CSRF related, but it's one that I haven't seen before because it invloves a server side redirect. 
<Bug :id='37407'/>

When an item where the barcode is not in the system is scanned, Koha prompts the user, to add the record using fast cataloging. This takes the user from the circulation module to the cataloging module. When the user is done cataloging the item, the server redirects them back to the circulation module. The previous functionality was the item would be automatically checked out by the redirect. 

After CSRF protection this no longer works because the redirect is like a GET request, but the checkout form is now a POST method, requiring a CSRF token and a `cud` prefixed op parameter. I come up with the idea to use javascript to check the referrer of the request to prevent CSRF. If the referrer is the same origin coming from the cataloguing add item page, then we can populate the barcode from the url parameters and use javascript to trigger the form submission to automagically check the item out.

Patching critical bugs is the best!
---
title: Making Item Search shareable
date: 2024-08-26 00:00:00 -5
category: bugs
prev:
  text: Koha reports enhancements
  link: /blog/koha-reports-enhancements
next:
  text:
  link: 
---

This idea had been around for a while, but besides a couple of comments affirming that it would be useful to library staff and support, and a growing list of CC's and `See Also` bugs, it wasn't gaining any traction.

Intuitively I knew that the item search form must somehow be passing all the parameters that it needs to perform a search to the backend where they would be transformed into a database query so that results could be returned and rendered in the template. As Michalangelo said [the sculpture is already complete within the block](https://www.goodreads.com/quotes/1191114-the-sculpture-is-already-complete-within-the-marble-block-before). Item search already knows how to process search parameters and return results. All we have to do is some chiseling to get the search parameters encoded as a url and persuade Koha handle them that way too. 

Creating the `Copy shareable link` button was pretty straightforward javascript. I soon realized that in oder to support the `Edit search` button, we would need to populate the item search form from the url parameters. That meant the item search template would need to be fully massaged to work out all its kinks through serveral sessions over the course of four months.
<Bug :id='14322'/>

Like the patch that added multi select parameters to Koha reports this patch called for unconventional thinking to solve a practical problem. Fortunately this time the code seems to have been accepted as a more natural pattern. At least it hasn't been called a hack yet!
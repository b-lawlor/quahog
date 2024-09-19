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

This idea had been around for a while, but besides a couple of comments affirming that it would be useful to library staff and support, and a list of CC's and `See Also` bugs, it wasn't gaining any traction.

Intuitively I knew that the item search form must somehow be passing all the parameters that it needs to perform a search to the backend where they would be transformed into a database query so that results could be returned and rendered in the template. As Michalangelo said [the sculpture is already complete within the block](https://www.goodreads.com/quotes/1191114-the-sculpture-is-already-complete-within-the-marble-block-before). Item search already knows how to process search parameters and return results. All we have to do is chisel out the url encoded search parameters and Sharable Item Search would be revealed. 

Creating the `Copy shareable link` button was pretty straightforward javascript. Then I realized that to support the `Edit search` button, the whole Item Search Template Toolkit would need to be chipped away at to render all the url parameters in the form inputs. After that a little JavaScript could submit the form and the Item Search would just do its thing.
<Bug :id='14322'/>

Like the previous patch that added multi select parameters to reports this patch called for unconventional thinking to solve a practical problem. Hopefully this time with less Frankenstein and more polish. Wnile envisioning the sculture within the block is a mindset for exploring the potential of an enhancement, working with a marble block is the opposite of working with a block of code. A more apt analogy for developing a code enhancement would be a metal fabricator bending, cutting and welding pieces together with precision.

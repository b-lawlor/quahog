---
title: Getting connected 🌍🛰️
prev:
  text: Guides
  link: ../
next:
  link: ./installing-dependencies
---

<Mermaid hidden/>

## Get on Bugzilla

Open an account on [Bugzilla](http://bugs.koha-community.org/) .

You will need this account to:

- :bug: Report bugs
- :brain: Make suggestions for enhancements and new features
- :test_tube: Test and sign off on patches
- :incoming_envelope: Submit patches

<pre class="mermaid">
flowchart TD
  A[Notice something about Koha] --> B[Search Bugzilla: has it been reported?]
  B --> |Yes| C[Add a comment
  Add yourself to CC
  Vote, sponsor, promote]
  B --> |No| D[Document steps to reproduce]
  D --> E[File a bug report]
  D --> F[Ask the community about it]
  E --> G[Ask the community about it]
</pre>

## Check the Koha Manual

You've probably been to the [Koha Manual](https://koha-community.org/manual/latest/en/html/) before. Don't be afraid to [contribute](https://wiki.koha-community.org/wiki/Editing_the_Koha_Manual) when and where you can.

## Check the Koha Wiki

Familiarize yourself with [how to write a good bug report](https://wiki.koha-community.org/wiki/Bug_Reporting_Guidelines) and learn the [development workflow](https://wiki.koha-community.org/wiki/Development_workflow). Lurk around Bugzilla for a while to see how the process works. :tent:

<pre class="mermaid">
flowchart TD
  A[Write a patch] --> B[write a test plan]
  B --> |Attach to bug| C[Needs Sign off]
  C -->|Passes tests| D[Signed off]
  C -->|Fails community tests| E[Failed QA]
  C -->|Needs a rebase| F[Patch does not apply]
  E & F -->A
  D -->G[QA testing]
  G -->|Passes tests| H[Passed QA]
  G -->|Fails QA tests| E
  H --> I[Release manager's inspection]
  I -->|Fails RM inspection| E
  I -->|Passes inspection| J[Pushed to Main for next release]
</pre>

## Check the Koha Dashboard

See what's new, what's ready to test and the latest progress in the community. The [ Dashboard](https://dashboard.koha-community.org/) is a great place to find inspiration or just to stay up to date.

## Hook up with the Koha Community

- :ocean: Lost in a sea of browser tabs?
- :bug: Bug driving you crazy? 
- :robot: Tempted to consult with an AI chat bot? 

Sometimes it's best to ask a smart group of humans if they can answer your question or help point you in the right direction. :compass: 

The new [Koha Community Chat](https://chat.koha-community.org/) on Mattermost is an awesome place to get in touch with experts in real time. It's like Slack, but open source and hosted by the community.

Can't get enough email in your life? Join the [mailing lists](https://wiki.koha-community.org/wiki/Mailing_lists) too. :incoming_envelope:

## Make friends
<img src="https://imgs.xkcd.com/comics/bug_thread.png"/>

[Obligitory xkcd](https://xkcd.com/2881/)

<style scoped>
  ul {
    list-style-type: none;
}
</style>
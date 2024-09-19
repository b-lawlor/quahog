---
title: Guides 🗺️🧭
---

::: danger :warning: Danger
<div class="marquee" >
  <div class="marquee_content">
    <span>🚚</span>
    <span class="blink">🚨</span>
    <span>🚧</span>
    <span>Under construction</span>
    <span>🚧</span>
    <span class="blink">🚨</span>
    <span>🚛</span>
    <span>🚧</span>
  </div>
  <!-- Mirrors the content above -->
  <div class="marquee_content">
    <span>🚚</span>
    <span class="blink">🚨</span>
    <span>🚧</span>
    <span>Under construction</span>
    <span>🚧</span>
    <span class="blink">🚨</span>
    <span>🚛</span>
    <span>🚧</span>  
  </div>
</div>

<p style="text-align: center;">
<br/>
🧙
<br/>
IT'S DANGEROUS TO GO ALONE!
<br/>
TAKE THIS.
<br/>
💻
</p>
:::

<Mermaid hidden/> <!--idk why but this needs to be done to get the diagrams to render-->

# Learn git repo concepts

<pre class="mermaid">
flowchart TB
A[Working directory] --> |git add| B[Staging Area]
B -->|git commit| C[local repository]
C -->|"git commit --amend"| C
C--> |git push| D[Remote Repository]
C--> |git bz attach| E[Bugzilla]
E--> |git bz apply|C
D--> |git pull|C
D--> |git clone|A
</pre>

::: info :rainbow: INFO
In a `git` repo a file can be in one of four states
* :question: Untracked
  - Files that exist but have never been commited
  - Add to staging with `git add {path to file}`
  - Add files to `.gitignore` if you don't want to add them to the repo
* :page_facing_up: Unmodified
  - Files that haven't changed since the last commit
  - Unmodified files rule!
* :construction: Modified 
  - Files that have changed since the last commit
  - You might have changed these files by accident
  - Check out which files with `git status`
  - Add to staging with `git add`
* :safety_vest: Staged
  - Files that have been added to staging and ready to commit
  - Commit these files with `git commit -m "A clear message"`
  - After `git add` use `git commit -ammend` to add changes to the previous commit

:::

# Learn git workflow concepts

<pre class="mermaid">
  gitGraph TB:
    commit
    commit id: "HEAD"
    branch bug
    commit id: "trivial patch"
    checkout main
    branch enhancement
    commit id: "small patch"
    commit id: "QA follow up"
    checkout main
    branch feature
    commit id: "large patch"
    checkout main
    commit
    merge bug
    commit id: "other bugs"
    commit
    merge enhancement
    checkout feature
    commit id: "follow up"
    commit id: "unit tests"
    checkout main
    commit
    commit id: "more bugs"
    commit
    merge feature
</pre>

# Learn web technologies concepts

<pre class="mermaid">
  flowchart TD 
  A[\Browser/]<--> |HTTP requests \n GET and POST| B((Server))
  A--> |form submission| B
  A<--> |handle events \n update GUI|F[Client side javascript]
  F<--> |HTTP requests \n GET and POST| B
  F--> |override form submission| B
  B--> |GET query string| C{CGI scripts \n magical Perl logic}
  B--> |POST data| C
  C--> |SQL queries| D[(Database)]
  C--> |template parameters| E[HTML templates]
  C--> |serverside redirects| C
  E--> |Rendered HTML| B
  B--> |Rendered HTML| A
  D--> |data| C
  click A "https://developer.mozilla.org/en-US/docs/Glossary/Browser"
  click B "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
  click C "https://metacpan.org/pod/CGI"
  click D "https://mariadb.com/kb/en/sql-statements/"
  click E "https://template-toolkit.org/docs/"
  click F "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
</pre>
<!--click B "/blog" "This is supposed to be a tooltip for a link but doesn't work"-->

::: warning :warning: Heads up
This guide is not necessarily intended to be followed in a linear path. Wherever possible it will encourage traversal of the <Badge type="tip">non-clicky way</Badge>
:::

<style scoped>
  .blink {
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

.marquee {
  --gap: 1rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee_content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: var(--gap);
}

.marquee_content {
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause animation when reduced-motion is set */
@media (prefers-reduced-motion: reduce) {
  .marquee_content {
    animation-play-state: paused !important;
  }
}

/* Enable animation */
.marquee_content {
  animation: scroll 10s linear infinite;
}

</style>
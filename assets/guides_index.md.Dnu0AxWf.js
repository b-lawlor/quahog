import{_ as n,C as i,o as s,c as d,a2 as l,j as t,a,E as c,w as f}from"./chunks/framework.gku7e_5h.js";const k=JSON.parse('{"title":"Guides 🗺️🧭","description":"","frontmatter":{"title":"Guides 🗺️🧭"},"headers":[],"relativePath":"guides/index.md","filePath":"guides/index.md","lastUpdated":1785344570000}'),r={name:"guides/index.md"},p={class:"warning custom-block"};function m(u,e,v,g,h,q){const o=i("Badge");return s(),d("div",null,[e[3]||(e[3]=l(`<div class="danger custom-block" data-v-1f3f59e4><p class="custom-block-title" data-v-1f3f59e4>⚠️ Danger</p><div class="marquee" data-v-1f3f59e4><div class="marquee_content" data-v-1f3f59e4><span data-v-1f3f59e4>🚚</span><span class="blink" data-v-1f3f59e4>🚨</span><span data-v-1f3f59e4>🚧</span><span data-v-1f3f59e4>Under construction</span><span data-v-1f3f59e4>🚧</span><span class="blink" data-v-1f3f59e4>🚨</span><span data-v-1f3f59e4>🚛</span><span data-v-1f3f59e4>🚧</span></div><div class="marquee_content" data-v-1f3f59e4><span data-v-1f3f59e4>🚚</span><span class="blink" data-v-1f3f59e4>🚨</span><span data-v-1f3f59e4>🚧</span><span data-v-1f3f59e4>Under construction</span><span data-v-1f3f59e4>🚧</span><span class="blink" data-v-1f3f59e4>🚨</span><span data-v-1f3f59e4>🚛</span><span data-v-1f3f59e4>🚧</span></div></div><p style="text-align:center;" data-v-1f3f59e4><br data-v-1f3f59e4> 🧙 <br data-v-1f3f59e4> IT&#39;S DANGEROUS TO GO ALONE! <br data-v-1f3f59e4> TAKE THIS. <br data-v-1f3f59e4> 💻 </p></div><h1 id="learn-git-repo-concepts" tabindex="-1" data-v-1f3f59e4>Learn git repo concepts <a class="header-anchor" href="#learn-git-repo-concepts" aria-label="Permalink to &quot;Learn git repo concepts&quot;" data-v-1f3f59e4>​</a></h1><pre class="mermaid" data-v-1f3f59e4>flowchart TB
A[Working directory] --&gt; |git add| B[Staging Area]
B --&gt;|git commit| C[local repository]
C --&gt;|&quot;git commit --amend&quot;| C
C--&gt; |git push| D[Remote Repository]
C--&gt; |git bz attach| E[Bugzilla]
E--&gt; |git bz apply|C
D--&gt; |git pull|C
D--&gt; |git clone|A
</pre><div class="info custom-block" data-v-1f3f59e4><p class="custom-block-title" data-v-1f3f59e4>🌈 INFO</p><p data-v-1f3f59e4>In a <code data-v-1f3f59e4>git</code> repo a file can be in one of four states</p><ul data-v-1f3f59e4><li data-v-1f3f59e4>❓ Untracked <ul data-v-1f3f59e4><li data-v-1f3f59e4>Files that exist but have never been commited</li><li data-v-1f3f59e4>Add to staging with <code data-v-1f3f59e4>git add {path to file}</code></li><li data-v-1f3f59e4>Add files to <code data-v-1f3f59e4>.gitignore</code> if you don&#39;t want to add them to the repo</li></ul></li><li data-v-1f3f59e4>📄 Unmodified <ul data-v-1f3f59e4><li data-v-1f3f59e4>Files that haven&#39;t changed since the last commit</li><li data-v-1f3f59e4>Unmodified files rule!</li></ul></li><li data-v-1f3f59e4>🚧 Modified <ul data-v-1f3f59e4><li data-v-1f3f59e4>Files that have changed since the last commit</li><li data-v-1f3f59e4>You might have changed these files by accident</li><li data-v-1f3f59e4>Check out which files with <code data-v-1f3f59e4>git status</code></li><li data-v-1f3f59e4>Add to staging with <code data-v-1f3f59e4>git add</code></li></ul></li><li data-v-1f3f59e4>🦺 Staged <ul data-v-1f3f59e4><li data-v-1f3f59e4>Files that have been added to staging and ready to commit</li><li data-v-1f3f59e4>Commit these files with <code data-v-1f3f59e4>git commit -m &quot;A clear message&quot;</code></li><li data-v-1f3f59e4>After <code data-v-1f3f59e4>git add</code> use <code data-v-1f3f59e4>git commit -ammend</code> to add changes to the previous commit</li></ul></li></ul></div><h1 id="learn-git-workflow-concepts" tabindex="-1" data-v-1f3f59e4>Learn git workflow concepts <a class="header-anchor" href="#learn-git-workflow-concepts" aria-label="Permalink to &quot;Learn git workflow concepts&quot;" data-v-1f3f59e4>​</a></h1><pre class="mermaid" data-v-1f3f59e4>  gitGraph TB:
    commit
    commit id: &quot;HEAD&quot;
    branch bug
    commit id: &quot;trivial patch&quot;
    checkout main
    branch enhancement
    commit id: &quot;small patch&quot;
    commit id: &quot;QA follow up&quot;
    checkout main
    branch feature
    commit id: &quot;large patch&quot;
    checkout main
    commit
    merge bug
    commit id: &quot;other bugs&quot;
    commit
    merge enhancement
    checkout feature
    commit id: &quot;follow up&quot;
    commit id: &quot;unit tests&quot;
    checkout main
    commit
    commit id: &quot;more bugs&quot;
    commit
    merge feature
</pre><h1 id="learn-web-technologies-concepts" tabindex="-1" data-v-1f3f59e4>Learn web technologies concepts <a class="header-anchor" href="#learn-web-technologies-concepts" aria-label="Permalink to &quot;Learn web technologies concepts&quot;" data-v-1f3f59e4>​</a></h1><pre class="mermaid" data-v-1f3f59e4>  flowchart TD 
  A[\\Browser/]&lt;--&gt; |HTTP requests \\n GET and POST| B((Server))
  A--&gt; |form submission| B
  A&lt;--&gt; |handle events \\n update GUI|F[Client side javascript]
  F&lt;--&gt; |HTTP requests \\n GET and POST| B
  F--&gt; |override form submission| B
  B--&gt; |GET query string| C{CGI scripts \\n magical Perl logic}
  B--&gt; |POST data| C
  C--&gt; |SQL queries| D[(Database)]
  C--&gt; |template parameters| E[HTML templates]
  C--&gt; |serverside redirects| C
  E--&gt; |Rendered HTML| B
  B--&gt; |Rendered HTML| A
  D--&gt; |data| C
  click A &quot;https://developer.mozilla.org/en-US/docs/Glossary/Browser&quot;
  click B &quot;https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server&quot;
  click C &quot;https://metacpan.org/pod/CGI&quot;
  click D &quot;https://mariadb.com/kb/en/sql-statements/&quot;
  click E &quot;https://template-toolkit.org/docs/&quot;
  click F &quot;https://developer.mozilla.org/en-US/docs/Web/JavaScript&quot;
</pre>`,8)),t("div",p,[e[2]||(e[2]=t("p",{class:"custom-block-title"},"⚠️ Heads up",-1)),t("p",null,[e[1]||(e[1]=a("This guide is not necessarily intended to be followed in a linear path. Wherever possible it will encourage traversal of the ",-1)),c(o,{type:"tip"},{default:f(()=>[...e[0]||(e[0]=[a("non-clicky way",-1)])]),_:1})])])])}const w=n(r,[["render",m],["__scopeId","data-v-1f3f59e4"]]);export{k as __pageData,w as default};

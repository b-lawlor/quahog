import{g as u,d as h}from"./chunks/getSorted.BNIvlGAX.js";import{f as p}from"./chunks/theme.D_EbxOB-.js";import{_ as f,C as b,o,c as i,j as e,a,F as q,B as C,t as l,k as d,a2 as m,E as c,w as g}from"./chunks/framework.gku7e_5h.js";const T={},B=["href"],R=JSON.parse('{"title":"Testing","description":"","frontmatter":{"layout":"home","title":"Testing","hero":{"name":"Quahog","text":"Test page"}},"headers":[],"relativePath":"test.md","filePath":"test.md","lastUpdated":null}'),A={name:"test.md"},k=Object.assign(A,{setup(w){const n=u(h);return n[Math.floor(Math.random()*n.length)],console.log("Yop!"),(_,t)=>{const s=b("Mermaid");return o(),i("div",null,[t[3]||(t[3]=e("h2",{id:"api-tests",tabindex:"-1"},[a("API tests "),e("a",{class:"header-anchor",href:"#api-tests","aria-label":'Permalink to "API tests"'},"​")],-1)),e("ul",null,[(o(!0),i(q,null,C(d(n),r=>(o(),i("li",null,[e("strong",null,[e("a",{href:r.url},l(r.frontmatter.title),9,B)]),t[0]||(t[0]=e("br",null,null,-1)),e("span",null,l(d(p)(r.frontmatter.date)),1)]))),256))]),t[4]||(t[4]=m(`<h2 id="git-concepts" tabindex="-1">Git concepts <a class="header-anchor" href="#git-concepts" aria-label="Permalink to &quot;Git concepts&quot;">​</a></h2><img src="https://imgs.xkcd.com/comics/git.png"><p><a href="https://xkcd.com/1597/" target="_blank" rel="noreferrer">Obligitory xkcd</a></p><img src="https://imgs.xkcd.com/comics/bug_thread.png"><p><a href="https://xkcd.com/2881/" target="_blank" rel="noreferrer">Obligitory xkcd</a></p><pre class="mermaid">flowchart LR
A[Working directory] --&gt; |git add| B[Staging Area]
B --&gt;|git commit| C[local repository]
C --&gt;|&quot;git commit --amend&quot;| C
C--&gt; |git push| D[Remote Repository]
C--&gt; |git bz attach| E[Bugzilla]
E--&gt; |git bz apply|C
D--&gt; |git pull|C
D--&gt; |git clone|A
</pre><pre class="mermaid">flowchart LR
A[local repository] --&gt;|&quot;git commit --amend&quot;| A
A--&gt; |git push| B[Remote Repository]
A--&gt; |git bz attach| C[Bugzilla]
C--&gt; |git bz apply|A
B--&gt; |git pull|A
</pre><ul><li>Untracked</li><li>Unmodified</li><li>Modified</li><li>Staged</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><pre class="mermaid">
gitGraph
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
       commit
       commit
       merge enhancement
       checkout feature
       commit id: &quot;follow up&quot;
       commit id: &quot;unit tests&quot;
       checkout main
       commit
       commit
       commit
       merge feature

   </pre><h2 id="cgi" tabindex="-1">CGI <a class="header-anchor" href="#cgi" aria-label="Permalink to &quot;CGI&quot;">​</a></h2><pre class="mermaid">  flowchart TD 
  A[\\Browser/]--&gt; |HTTP Request| B((Server))
  A--&gt; |Form submission| B
  A--&gt; F[Client side javascript]
  F--&gt; |Update GUI|A
  F--&gt; |handle events| A
  B--&gt; |GET query string| C{CGI script}
  B--&gt; |POST data| C
  C--&gt; |Queries| D[(Database)]
  C--&gt; |data| E[HTML Templates]
  E--&gt; |Rendered HTML| C
  B--&gt; |Rendered HTML| A
  D--&gt; |data| C
  click B &quot;/blog&quot; &quot;This is a tooltip for a link&quot;
</pre><h2 id="font-awesome" tabindex="-1">font awesome <a class="header-anchor" href="#font-awesome" aria-label="Permalink to &quot;font awesome&quot;">​</a></h2><pre class="mermaid">flowchart TD
    B[fa:fa-bug for peace]
    B--&gt;C[fa:fa-ban forbidden]
    B--&gt;D(fa:fa-spinner)
    B--&gt;E(A fa:fa-camera-retro perhaps?)
</pre><h2 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to &quot;DOM&quot;">​</a></h2><pre class="mermaid">  flowchart TD 
  A[\\Browser/]--&gt; |HTTP Request| B[&quot;:bug:&quot;]
  A--&gt; |Form submission| B
  A--&gt; F[Client side javascript]
  F--&gt; |Update GUI|A
  F--&gt; |handle events| A
  B--&gt; |GET query string| C[CGI script]
  B--&gt; |POST data| C[CGI script]
  C--&gt; |Queries| D[(Database)]
  C--&gt; |data| E[HTML Templates]
  E--&gt; |Rendered HTML| C
  D--&gt; |data| C
</pre><pre class="mermaid">flowchart LR
    markdown[&quot;\`This **is** _Markdown_\`&quot;]
    newLines[&quot;\`Line1
    Line 2
    Line 3\`&quot;]
    markdown --&gt; newLines
</pre><h2 id="rest-api" tabindex="-1">REST API <a class="header-anchor" href="#rest-api" aria-label="Permalink to &quot;REST API&quot;">​</a></h2><h2 id="cgi-1" tabindex="-1">CGI <a class="header-anchor" href="#cgi-1" aria-label="Permalink to &quot;CGI&quot;">​</a></h2><pre class="mermaid">  flowchart BT 
  A[\\Browser/]--&gt; |HTTP Request| B[Server]
  A--&gt; |Form submission| B
  A--&gt; F[Client side javascript]
  F--&gt; |Update GUI|A
  F--&gt; |handle events| A
  B--&gt; |GET query string| C[CGI script]
  B--&gt; |POST data| C[CGI script]
  C--&gt; |Queries| D[(Database)]
  C--&gt; |data| E[HTML Templates]
  E--&gt; |Rendered HTML| C
  D--&gt; |data| C
  click B &quot;/blog&quot; &quot;This is a tooltip for a link&quot;
</pre><h2 id="font-awesome-1" tabindex="-1">font awesome <a class="header-anchor" href="#font-awesome-1" aria-label="Permalink to &quot;font awesome&quot;">​</a></h2><pre class="mermaid">flowchart TD
    B[fa:fa-bug for peace]
    B--&gt;C[fa:fa-ban forbidden]
    B--&gt;D(fa:fa-spinner)
    B--&gt;E(A fa:fa-camera-retro perhaps?)
</pre><h2 id="dom-1" tabindex="-1">DOM <a class="header-anchor" href="#dom-1" aria-label="Permalink to &quot;DOM&quot;">​</a></h2><pre class="mermaid">  flowchart TD 
  A[\\Browser/]--&gt; |HTTP Request| B[&quot;:bug:&quot;]
  A--&gt; |Form submission| B
  A--&gt; F[Client side javascript]
  F--&gt; |Update GUI|A
  F--&gt; |handle events| A
  B--&gt; |GET query string| C[CGI script]
  B--&gt; |POST data| C[CGI script]
  C--&gt; |Queries| D[(Database)]
  C--&gt; |data| E[HTML Templates]
  E--&gt; |Rendered HTML| C
  D--&gt; |data| C
</pre><pre class="mermaid">flowchart LR
    markdown[&quot;\`This **is** _Markdown_\`&quot;]
    newLines[&quot;\`Line1
    Line 2
    Line 3\`&quot;]
    markdown --&gt; newLines
</pre><h2 id="rest-api-1" tabindex="-1">REST API <a class="header-anchor" href="#rest-api-1" aria-label="Permalink to &quot;REST API&quot;">​</a></h2><h2 id="vue-component" tabindex="-1">Vue component <a class="header-anchor" href="#vue-component" aria-label="Permalink to &quot;Vue component &lt;!-- needs semicolons to work --&gt;&quot;">​</a></h2>`,27)),c(s,null,{default:g(()=>[...t[1]||(t[1]=[a(" graph LR; A --- B; B-->C[forbidden]; B-->D[bug]; ",-1)])]),_:1}),t[5]||(t[5]=m(`<h2 id="pre-tag" tabindex="-1">Pre tag <a class="header-anchor" href="#pre-tag" aria-label="Permalink to &quot;Pre tag&quot;">​</a></h2><pre class="mermaid">  graph LR 
  A --- B 
  B--&gt;C[fa:fa-ban forbidden] 
  B--&gt;D[bug]
</pre><h2 id="code-fence" tabindex="-1">Code fence <a class="header-anchor" href="#code-fence" aria-label="Permalink to &quot;Code fence &lt;!-- needs semicolons to work --&gt;&quot;">​</a></h2><div class="mermaid">graph LR; A --- B; B--&gt;C[forbidden]; B--&gt;D[bug];</div><h2 id="vue-component-1" tabindex="-1">Vue component <a class="header-anchor" href="#vue-component-1" aria-label="Permalink to &quot;Vue component &lt;!-- needs semicolons to work --&gt;&quot;">​</a></h2>`,5)),c(s,null,{default:g(()=>[...t[2]||(t[2]=[a(" graph LR; A --- B; B-->C[forbidden]; B-->D[bug]; ",-1)])]),_:1}),t[6]||(t[6]=e("h2",{id:"pre-tag-1",tabindex:"-1"},[a("Pre tag "),e("a",{class:"header-anchor",href:"#pre-tag-1","aria-label":'Permalink to "Pre tag <!-- it just works -->"'},"​")],-1)),t[7]||(t[7]=e("pre",{class:"mermaid"},` 
  graph LR 
  A --- B 
  B-->C[fa:fa-ban forbidden] 
  B-->D[bug]
`,-1))])}}}),P={$style:T},E=f(k,[["__cssModules",P]]);export{R as __pageData,E as default};

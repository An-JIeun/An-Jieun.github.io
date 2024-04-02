import{_ as e,c as t,o as n,a5 as a}from"./chunks/framework.BuWuHeYF.js";const y=JSON.parse('{"title":"Neo4j 사용해보기","description":"","frontmatter":{"head":[["script",{"type":"application/ld+json"},"{\\n  \\"@context\\":\\"http://schema.org\\",\\n  \\"@type\\":\\"BlogPosting\\",\\n  \\"mainEntityOfPage\\" : {\\n    \\"@type\\" : \\"WebPage\\",\\n    \\"@id\\" : \\"https://an-jieun.github.io/contentsundefined\\"\\n  },\\n  \\"name\\":\\"undefined\\",\\n  \\"url\\" : \\"https://an-jieun.github.io/contents/undefined\\",\\n  \\"headline\\":\\"undefined\\",\\n  \\"description\\":\\"undefined\\",\\n  \\"keywords\\" : [undefined],\\n  \\"inLanguage\\":\\"ko\\",\\n  \\"author\\" : {\\n    \\"@type\\" : \\"Person\\",\\n    \\"name\\" : \\"Jieun\\",\\n    \\"email\\" : \\"aje20010827@gmail.com\\"\\n    }\\n  },\\n}"],["meta",{"property":"og:title"}],["meta",{"property":"og:description"}],["meta",{"property":"og:url"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:site_name","content":"전자두뇌만들기"}],["meta",{"property":"og:locale","content":"ko_KR"}],["meta",{"property":"twitter:card"}],["meta",{"property":"twitter:title"}],["meta",{"property":"twitter:description"}],["meta",{"property":"twitter:image"}],["meta",{"property":"@context","content":"http://schema.org"}],["meta",{"property":"@type","content":"TechArticle"}],["meta",{"property":"name"}],["meta",{"property":"url","content":"https://an-jieun.github.io/contents/undefined"}],["meta",{"property":"description"}],["meta",{"property":"keywords"}],["meta",{"property":"version","content":"1.0"}],["meta",{"property":"inLanguage","content":"ko"}],["meta",{"property":"technicalAudience","content":"developer, DBA, Web Developer"}],["meta",{"property":"proficiencyLevel","content":"beginner"}],["meta",{"property":"author","content":"Jieun"}],["meta",{"property":"dependencies","content":"Python"}]]},"headers":[],"relativePath":"contents/KG/neo4j-guide.md","filePath":"contents/KG/neo4j-guide.md","lastUpdated":1711265401000}'),r={name:"contents/KG/neo4j-guide.md"},o=a(`<h1 id="neo4j-사용해보기" tabindex="-1">Neo4j 사용해보기 <a class="header-anchor" href="#neo4j-사용해보기" aria-label="Permalink to &quot;Neo4j 사용해보기&quot;">​</a></h1><hr><h2 id="cypher" tabindex="-1">Cypher <a class="header-anchor" href="#cypher" aria-label="Permalink to &quot;Cypher&quot;">​</a></h2><p>Cypher란 neo4j만의 그래프 쿼리 언어이다. 노드와 노드간의 관계를 표현한다. 기본 문법은 다음과 같다.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(nodes)-[:CONNECT_TO]→(otherNodes)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>**()**는 노드를, **[:]**는 relation을 나타낸다.</p><h2 id="cypher로-query하기" tabindex="-1">Cypher로 Query하기 <a class="header-anchor" href="#cypher로-query하기" aria-label="Permalink to &quot;Cypher로 Query하기&quot;">​</a></h2><p>cypher를 통한 질의는 훨씬 간편하고 정확하다. 테이블의 join 없이도 cypher를 활용한 질의로 단 두 줄 만에 쿼리할 수 있다.</p><p>예르 들어, 영화 matrix에 출연한 배우를 찾는다고 하면</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MATCH (actor:Actor)-[:ACTED_IN]-&gt;(movie:Movie {title: &#39;The Matrix&#39;})</span></span>
<span class="line"><span>RETURN actor.name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>두 쿼리 문으로 찾을 수 있다.</p>`,11),p=[o];function i(s,c,d,l,h,m){return n(),t("div",null,p)}const g=e(r,[["render",i]]);export{y as __pageData,g as default};

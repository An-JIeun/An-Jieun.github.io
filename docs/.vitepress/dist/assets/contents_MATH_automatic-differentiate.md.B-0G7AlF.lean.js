import{_ as e,c as n,o,m as t,a}from"./chunks/framework.BuWuHeYF.js";const D=JSON.parse('{"title":"🦾 Automatic Differentiation (자동미분)","description":"A.K.A AutoDiff, AutoGrad","frontmatter":{"description":"A.K.A AutoDiff, AutoGrad","head":[["script",{"type":"application/ld+json"},"{\\n  \\"@context\\":\\"http://schema.org\\",\\n  \\"@type\\":\\"BlogPosting\\",\\n  \\"mainEntityOfPage\\" : {\\n    \\"@type\\" : \\"WebPage\\",\\n    \\"@id\\" : \\"https://an-jieun.github.io/contentsundefined\\"\\n  },\\n  \\"name\\":\\"undefined\\",\\n  \\"url\\" : \\"https://an-jieun.github.io/contents/undefined\\",\\n  \\"headline\\":\\"A.K.A AutoDiff, AutoGrad\\",\\n  \\"description\\":\\"A.K.A AutoDiff, AutoGrad\\",\\n  \\"keywords\\" : [undefined],\\n  \\"inLanguage\\":\\"ko\\",\\n  \\"author\\" : {\\n    \\"@type\\" : \\"Person\\",\\n    \\"name\\" : \\"Jieun\\",\\n    \\"email\\" : \\"aje20010827@gmail.com\\"\\n    }\\n  },\\n}"],["meta",{"property":"og:title"}],["meta",{"property":"og:description","content":"A.K.A AutoDiff, AutoGrad"}],["meta",{"property":"og:url"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:site_name","content":"전자두뇌만들기"}],["meta",{"property":"og:locale","content":"ko_KR"}],["meta",{"name":"twitter:card","content":"A.K.A AutoDiff, AutoGrad"}],["meta",{"name":"twitter:title"}],["meta",{"name":"twitter:description","content":"A.K.A AutoDiff, AutoGrad"}],["meta",{"property":"@context","content":"http://schema.org"}],["meta",{"property":"@type","content":"TechArticle"}],["meta",{"property":"name"}],["meta",{"property":"url","content":"https://an-jieun.github.io/contents/undefined"}],["meta",{"property":"description","content":"A.K.A AutoDiff, AutoGrad"}],["meta",{"property":"keywords"}],["meta",{"property":"version","content":"1.0"}],["meta",{"property":"inLanguage","content":"ko"}],["meta",{"property":"technicalAudience","content":"developer, DBA, Web Developer"}],["meta",{"property":"proficiencyLevel","content":"beginner"}],["meta",{"property":"author","content":"Jieun"}],["meta",{"property":"dependencies","content":"Python"}]]},"headers":[],"relativePath":"contents/MATH/automatic-differentiate.md","filePath":"contents/MATH/automatic-differentiate.md","lastUpdated":1711265401000}'),i={name:"contents/MATH/automatic-differentiate.md"},r=t("h1",{id:"🦾-automatic-differentiation-자동미분",tabindex:"-1"},[a("🦾 Automatic Differentiation (자동미분) "),t("a",{class:"header-anchor",href:"#🦾-automatic-differentiation-자동미분","aria-label":'Permalink to "🦾 Automatic Differentiation (자동미분)"'},"​")],-1),c=t("p",null,"자동미분은 델타논법과 같은 수치 미줌과는 구분되는 미분 방식이다. 수치 미분의 경우 기호위주의 대수학적 규칙을 컴퓨터 연산에 적용하다 보니 비효율적이며, 반올림 에러가 발생한다는 문제가 있다.",-1),p=t("p",null,"따라서, 다수의 input에 대한 미분값을 구해야 하는 컴퓨터 연산 환경에서는 자동미분을 활용한다. 자동미분은 기본적으로 편미분의 연쇄법칙과 같은 연쇄법칙을 적용하여 계산하며, y->x의 순서로 미분 연산을 진행한다. ",-1),d=t("p",null,"자동미분은 딥러닝과 머신러닝에서 아주 기본적이고 핵심적인 연산으로, 역전파 방식을 통한 가중치 갱신 과정에 활용된다.",-1),s=t("p",null,"PyTorch와 Tensorflow는 자동미분을 계산하는 라이브러리이며, 이들을 활용해 딥러닝의 신경망을 구현한다. 이 두 라이브러리에서 자동미분은 역전파(backward pass)로 계산된다.",-1),u=[r,c,p,d,s];function m(f,l,A,h,y,_){return o(),n("div",null,u)}const b=e(i,[["render",m]]);export{D as __pageData,b as default};

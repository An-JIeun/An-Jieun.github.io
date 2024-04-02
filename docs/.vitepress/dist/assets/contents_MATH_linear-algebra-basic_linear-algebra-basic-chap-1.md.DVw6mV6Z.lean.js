import{_ as l,c as a,m as t,a as T,o as Q,a5 as e}from"./chunks/framework.BuWuHeYF.js";const s1=JSON.parse('{"title":"1. 선형대수란?","description":"","frontmatter":{"head":[["script",{"type":"application/ld+json"},"{\\n  \\"@context\\":\\"http://schema.org\\",\\n  \\"@type\\":\\"BlogPosting\\",\\n  \\"mainEntityOfPage\\" : {\\n    \\"@type\\" : \\"WebPage\\",\\n    \\"@id\\" : \\"https://an-jieun.github.io/contentsundefined\\"\\n  },\\n  \\"name\\":\\"undefined\\",\\n  \\"url\\" : \\"https://an-jieun.github.io/contents/undefined\\",\\n  \\"headline\\":\\"undefined\\",\\n  \\"description\\":\\"undefined\\",\\n  \\"keywords\\" : [undefined],\\n  \\"inLanguage\\":\\"ko\\",\\n  \\"author\\" : {\\n    \\"@type\\" : \\"Person\\",\\n    \\"name\\" : \\"Jieun\\",\\n    \\"email\\" : \\"aje20010827@gmail.com\\"\\n    }\\n  },\\n}"],["meta",{"property":"og:title"}],["meta",{"property":"og:description"}],["meta",{"property":"og:url"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:site_name","content":"전자두뇌만들기"}],["meta",{"property":"og:locale","content":"ko_KR"}],["meta",{"property":"twitter:card"}],["meta",{"property":"twitter:title"}],["meta",{"property":"twitter:description"}],["meta",{"property":"twitter:image"}],["meta",{"property":"@context","content":"http://schema.org"}],["meta",{"property":"@type","content":"TechArticle"}],["meta",{"property":"name"}],["meta",{"property":"url","content":"https://an-jieun.github.io/contents/undefined"}],["meta",{"property":"description"}],["meta",{"property":"keywords"}],["meta",{"property":"version","content":"1.0"}],["meta",{"property":"inLanguage","content":"ko"}],["meta",{"property":"technicalAudience","content":"developer, DBA, Web Developer"}],["meta",{"property":"proficiencyLevel","content":"beginner"}],["meta",{"property":"author","content":"Jieun"}],["meta",{"property":"dependencies","content":"Python"}]]},"headers":[],"relativePath":"contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-1.md","filePath":"contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-1.md","lastUpdated":1711328249000}'),n={name:"contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-1.md"},s=t("h1",{id:"_1-선형대수란",tabindex:"-1"},[T("1. 선형대수란? "),t("a",{class:"header-anchor",href:"#_1-선형대수란","aria-label":'Permalink to "1. 선형대수란?"'},"​")],-1),o=t("h2",{id:"선형대수란",tabindex:"-1"},[T("선형대수란? "),t("a",{class:"header-anchor",href:"#선형대수란","aria-label":'Permalink to "선형대수란?"'},"​")],-1),r=t("p",null,[T("💡 대수학(algebra)이란, 일련의 공리들을 만족하는 "),t("strong",null,"수학적 구조들의 일반적인 성질을 연구하는 수학의 한 분야"),T(" 이다. 즉, 대수학에서 numerric이 아닌, 문자로 일반화된 수학적 법칙을 다루는 학문 분야이다.")],-1),d=t("p",null,"대수학이란 수식에 대한 일반화된 법칙을 다루는 분야로 관련된 단어로는 ‘알고리즘’이 있다. 알고리즘이라는 것은 ‘어떤 문제를 해결하는 방식’이라는 일반적인 정의가 있으며, 컴퓨터 공학에서는 알고리즘을 특정 프로그래밍 문법이나 시스템에 기반하지 않은 general한 문제 해결 프로세스를 의미하고 보통 의사 코드(pseudo-code)로 표현된다.",-1),m=t("p",null,"알고리즘이나 대수학 모두 어떠한 상황(도메인)에서도 바뀌지 않는 일반화된 문제해결 법칙을 의미한다는 점에서 일맥상통한다고 할 수 있다. 실제로 어원도 같다.",-1),h=t("p",null,"선형대수를 이해할 때 일차방정식을 생각하면 쉽다. 일차방정식은 해가 1개이거나, 해가 아예 없거나, 혹은 해가 무한대일 수 있다. 해가 무한대인 경우는 일차방정식의 항등식을 생각하면 된다. 항등식이란 두 변수에 어떠한 값을 넣어도 항상 그 값이 같은 식을 의미한다. (A = B)",-1),i={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"31.061ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 13728.9 899","aria-hidden":"true"},c=e("",1),g=[c],H=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"y"),t("mo",null,"="),t("mi",null,"a"),t("msub",null,[t("mi",null,"x"),t("mn",null,"1")]),t("mo",null,"+"),t("mi",null,"b"),t("msub",null,[t("mi",null,"x"),t("mn",null,"2")]),t("mo",null,"+"),t("mi",null,"c"),t("msub",null,[t("mi",null,"x"),t("mn",null,"3")]),t("mo",null,"+"),t("mo",null,"."),t("mo",null,"."),t("mo",null,"."),t("mo",null,"+"),t("mi",null,"m"),t("msub",null,[t("mi",null,"x"),t("mi",null,"m")])])],-1),V=t("p",null,[T("선형대수에서는 변수값에 영향을 주는 인자, 그러니까 위 식에서 a,b, c, m과 같은 수를 "),t("strong",null,"매개변수(parameter)"),T(" 라고 하고, 변화하는 값을 "),t("strong",null,"변수(variable)"),T(" 이라고 한다. 여기서 변수는 x1, x2, .. 그리고 y이다.")],-1),u=t("h2",{id:"스칼라-벡터-매트릭스-텐서",tabindex:"-1"},[T("스칼라, 벡터, 매트릭스, 텐서 … "),t("a",{class:"header-anchor",href:"#스칼라-벡터-매트릭스-텐서","aria-label":'Permalink to "스칼라, 벡터, 매트릭스, 텐서 …"'},"​")],-1),y=t("h3",{id:"스칼라-scalar",tabindex:"-1"},[T("스칼라(Scalar) "),t("a",{class:"header-anchor",href:"#스칼라-scalar","aria-label":'Permalink to "스칼라(Scalar)"'},"​")],-1),w=t("p",null,"스칼라는 0차원의 값으로 변수 하나, 값 한 개를 생각하면 된다.",-1),f={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.442ex",height:"1.69ex",role:"img",focusable:"false",viewBox:"0 -665 2405.6 747","aria-hidden":"true"},L=e("",1),M=[L],_=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"x"),t("mo",null,"="),t("mn",null,"3")])],-1),Z=t("p",null,"위 식에서 x를 스칼라 값이라고 한다.",-1),x=t("h3",{id:"벡터-vector",tabindex:"-1"},[T("벡터(vector) "),t("a",{class:"header-anchor",href:"#벡터-vector","aria-label":'Permalink to "벡터(vector)"'},"​")],-1),b=t("p",null,"벡터는 1차원의 값이다. 즉, 스칼라가 연속적으로 있는 행렬을 의미한다.",-1),v={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.884ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 7904.6 1000","aria-hidden":"true"},C=e("",1),B=[C],A=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"v"),t("mi",null,"e"),t("mi",null,"c"),t("mi",null,"t"),t("mi",null,"o"),t("mi",null,"r"),t("mo",null,"="),t("mo",{stretchy:"false"},"["),t("mn",null,"1"),t("mo",null,","),t("mn",null,"2"),t("mo",null,","),t("mn",null,"3"),t("mo",null,","),t("mn",null,"4"),t("mo",{stretchy:"false"},"]")])],-1),P=t("p",null,[T("벡터 내부의 스칼라 개수를 "),t("strong",null,"차원"),T("(dimension)이라고 한다. 일반적 의미에서의 점→선→면→입체→초입방체를 얘기할 때의 그 차원이다. 따라서 벡터로 공간 상 한 지점에 값을 표시하는 것이 가능하다.")],-1),S=t("h3",{id:"행렬-matrics",tabindex:"-1"},[T("행렬 (Matrics) "),t("a",{class:"header-anchor",href:"#행렬-matrics","aria-label":'Permalink to "행렬 (Matrics)"'},"​")],-1),j=t("p",null,"벡터를 쌓아 행,열의 2차원 평면으로 나타낸 것을 행렬이라고 한다. 행렬은 벡터가 중첩된 형태로 표현된다.",-1),E={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},N={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"43.925ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 19414.9 1000","aria-hidden":"true"},I=e("",1),J=[I],G=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"t"),t("mi",null,"r"),t("mi",null,"i"),t("mi",null,"c"),t("mi",null,"s"),t("mo",null,"="),t("mo",{stretchy:"false"},"["),t("mo",{stretchy:"false"},"["),t("mn",null,"1"),t("mo",null,","),t("mn",null,"2"),t("mo",null,","),t("mn",null,"3"),t("mo",null,","),t("mn",null,"4"),t("mo",{stretchy:"false"},"]"),t("mo",null,","),t("mo",{stretchy:"false"},"["),t("mn",null,"5"),t("mo",null,","),t("mn",null,"6"),t("mo",null,","),t("mn",null,"7"),t("mo",null,","),t("mn",null,"8"),t("mo",{stretchy:"false"},"]"),t("mo",null,","),t("mo",{stretchy:"false"},"["),t("mn",null,"9"),t("mo",null,","),t("mn",null,"10"),t("mo",null,","),t("mn",null,"11"),t("mo",null,","),t("mn",null,"12"),t("mo",{stretchy:"false"},"]"),t("mo",{stretchy:"false"},"]")])],-1),R=t("h3",{id:"텐서-tensor",tabindex:"-1"},[T("텐서(Tensor) "),t("a",{class:"header-anchor",href:"#텐서-tensor","aria-label":'Permalink to "텐서(Tensor)"'},"​")],-1),z=t("p",null,"머신러닝 분야에서 도입한 개념이다. N차원만큼 벡터를 중첩시킨 것을 의미한다. 보통은 3차원 이상부터 ‘텐서’ 명칭을 붙인다.",-1),F={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},$={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"40.859ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18059.6 1000","aria-hidden":"true"},O=e("",1),W=[O],K=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"t"),t("mi",null,"e"),t("mi",null,"n"),t("mi",null,"s"),t("mi",null,"o"),t("mi",null,"r"),t("mo",null,"="),t("mo",{stretchy:"false"},"["),t("mo",{stretchy:"false"},"["),t("mo",{stretchy:"false"},"["),t("mn",null,"1"),t("mo",null,","),t("mn",null,"2"),t("mo",null,","),t("mn",null,"3"),t("mo",{stretchy:"false"},"]"),t("mo",null,","),t("mo",{stretchy:"false"},"["),t("mn",null,"4"),t("mo",null,","),t("mn",null,"5"),t("mo",null,","),t("mn",null,"6"),t("mo",{stretchy:"false"},"]"),t("mo",{stretchy:"false"},"]"),t("mo",{stretchy:"false"},"["),t("mo",{stretchy:"false"},"["),t("mn",null,"1"),t("mo",null,","),t("mn",null,"2"),t("mo",null,","),t("mn",null,"3"),t("mo",{stretchy:"false"},"]"),t("mo",{stretchy:"false"},"["),t("mn",null,"4"),t("mo",null,","),t("mn",null,"5"),t("mo",null,","),t("mn",null,"6"),t("mo",{stretchy:"false"},"]"),t("mo",{stretchy:"false"},"]"),t("mo",{stretchy:"false"},"]")])],-1),U=t("h2",{id:"파이토치-텐서플로우",tabindex:"-1"},[T("파이토치, 텐서플로우 "),t("a",{class:"header-anchor",href:"#파이토치-텐서플로우","aria-label":'Permalink to "파이토치, 텐서플로우"'},"​")],-1),q=t("p",null,"파이토치와 텐서플로우 모두 GPT를 활용해 텐서 연산을 지원하는 라이브러리이다. 텐서플로우가 텐서 연산 라이브러리의 거의 시초격이고, 그 다음에 파이토치가 나왔다. 그래서 커뮤니티도 텐서플로우 쪽이 좀 더 크긴 한데 요즘은 파이토치도 많이 쓴다. 두 라이브러리 모두 Numpy와의 호환성이 뛰어나다.",-1),X=t("p",null,"구현 자체는 텐서플로우의 경우 C++, 파이토치의 경우 파이썬으로 구현되었다. 그래서 그런지, 텐서플로우는 연산결과가 C++이고 이를 파이썬으로 다시 보여줘서 좀 지저분하게 나온다. 반대로 파이토치는 텐서플로우보다는 결과가 깔끔하게 나온다.",-1);function Y(t1,T1,a1,Q1,e1,l1){return Q(),a("div",null,[s,o,r,d,m,h,t("mjx-container",i,[(Q(),a("svg",p,g)),H]),V,u,y,w,t("mjx-container",f,[(Q(),a("svg",k,M)),_]),Z,x,b,t("mjx-container",v,[(Q(),a("svg",D,B)),A]),P,S,j,t("mjx-container",E,[(Q(),a("svg",N,J)),G]),R,z,t("mjx-container",F,[(Q(),a("svg",$,W)),K]),U,q,X])}const o1=l(n,[["render",Y]]);export{s1 as __pageData,o1 as default};

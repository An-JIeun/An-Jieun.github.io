import{_ as s,c as T,m as t,a as Q,a5 as a,o as e}from"./chunks/framework.BuWuHeYF.js";const X1=JSON.parse('{"title":"2. 벡터, 행렬 기본개념","description":"","frontmatter":{"head":[["script",{"type":"application/ld+json"},"{\\n  \\"@context\\":\\"http://schema.org\\",\\n  \\"@type\\":\\"BlogPosting\\",\\n  \\"mainEntityOfPage\\" : {\\n    \\"@type\\" : \\"WebPage\\",\\n    \\"@id\\" : \\"https://an-jieun.github.io/contentsundefined\\"\\n  },\\n  \\"name\\":\\"undefined\\",\\n  \\"url\\" : \\"https://an-jieun.github.io/contents/undefined\\",\\n  \\"headline\\":\\"undefined\\",\\n  \\"description\\":\\"undefined\\",\\n  \\"keywords\\" : [undefined],\\n  \\"inLanguage\\":\\"ko\\",\\n  \\"author\\" : {\\n    \\"@type\\" : \\"Person\\",\\n    \\"name\\" : \\"Jieun\\",\\n    \\"email\\" : \\"aje20010827@gmail.com\\"\\n    }\\n  },\\n}"],["meta",{"property":"og:title"}],["meta",{"property":"og:description"}],["meta",{"property":"og:url","content":"https://an-jieun.github.io/"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image"}],["meta",{"property":"og:site_name","content":"전자두뇌만들기"}],["meta",{"property":"og:locale","content":"ko_KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:title"}],["meta",{"name":"twitter:description"}],["meta",{"name":"twitter:image"}],["meta",{"property":"@context","content":"http://schema.org"}],["meta",{"property":"@type","content":"TechArticle"}],["meta",{"property":"name"}],["meta",{"property":"url","content":"https://an-jieun.github.io/contents/undefined"}],["meta",{"property":"description"}],["meta",{"property":"keywords"}],["meta",{"property":"version","content":"1.0"}],["meta",{"property":"inLanguage","content":"ko"}],["meta",{"property":"technicalAudience","content":"developer, DBA, Web Developer"}],["meta",{"property":"proficiencyLevel","content":"beginner"}],["meta",{"property":"author","content":"Jieun"}]]},"headers":[],"relativePath":"contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-2.md","filePath":"contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-2.md","lastUpdated":1711331516000}'),l={name:"contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-2.md"},o=t("h1",{id:"_2-벡터-행렬-기본개념",tabindex:"-1"},[Q("2. 벡터, 행렬 기본개념 "),t("a",{class:"header-anchor",href:"#_2-벡터-행렬-기본개념","aria-label":'Permalink to "2. 벡터, 행렬 기본개념"'},"​")],-1),n=t("h2",{id:"전치행렬",tabindex:"-1"},[Q("전치행렬 "),t("a",{class:"header-anchor",href:"#전치행렬","aria-label":'Permalink to "전치행렬"'},"​")],-1),r=t("p",null,"전치행렬이란, 행렬에서 행과 열의 값을 전치시킨 행렬이다. 스칼라값의 현재 인덱스 값의 행, 열값이 서로 바뀌는 것을 의미한다. 전치 행렬임을 나타낼 때는 보통 윗첨자로 T를 기입한다. 벡터가 전치되는 경우, 수식적으로는 그냥 벡터의 스칼라 값들을 세로로 기입하면 되지만, 파이썬이나 기타 프로그래밍 언어에서는 ‘세로로 기입’한다는 개념 자체가 없기에, 굳이 전치 벡터를 나타내고 싶다면 벡터가 아닌 행렬로 값을 표현하여야 제대로 적용된다.",-1),d={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"31.77ex",height:"2.456ex",role:"img",focusable:"false",viewBox:"0 -891.7 14042.4 1085.7","aria-hidden":"true"},i=a("",1),h=[i],p=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"T"),t("mi",null,"r"),t("mi",null,"a"),t("mi",null,"n"),t("mi",null,"s"),t("mi",null,"p"),t("mi",null,"o"),t("mi",null,"s"),t("mi",null,"e"),t("mi",null,"d"),t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"t"),t("mi",null,"r"),t("mi",null,"i"),t("mi",null,"c"),t("mi",null,"s"),t("mo",null,"="),t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"t"),t("mi",null,"r"),t("mi",null,"i"),t("mi",null,"c"),t("msup",null,[t("mi",null,"s"),t("mi",null,"T")])])],-1),c=t("h3",{id:"예시",tabindex:"-1"},[Q("예시 "),t("a",{class:"header-anchor",href:"#예시","aria-label":'Permalink to "예시"'},"​")],-1),g={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},H={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.213ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8492.2 1000","aria-hidden":"true"},u=a("",1),w=[u],x=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"t"),t("mo",null,"="),t("mo",{stretchy:"false"},"["),t("mo",{stretchy:"false"},"["),t("mn",null,"1"),t("mo",null,","),t("mn",null,"2"),t("mo",null,","),t("mn",null,"3"),t("mo",null,","),t("mn",null,"4"),t("mo",null,","),t("mn",null,"5"),t("mo",{stretchy:"false"},"]"),t("mo",{stretchy:"false"},"]")])],-1),_={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"22.164ex",height:"2.583ex",role:"img",focusable:"false",viewBox:"0 -891.7 9796.4 1141.7","aria-hidden":"true"},y=a("",1),L=[y],k=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"m"),t("mi",null,"a"),t("msup",null,[t("mi",null,"t"),t("mi",null,"T")]),t("mo",null,"="),t("mo",{stretchy:"false"},"["),t("mo",{stretchy:"false"},"["),t("mn",null,"1"),t("mo",{stretchy:"false"},"]"),t("mo",null,","),t("mo",{stretchy:"false"},"["),t("mn",null,"2"),t("mo",{stretchy:"false"},"]"),t("mo",null,","),t("mo",{stretchy:"false"},"["),t("mn",null,"3"),t("mo",{stretchy:"false"},"]"),t("mo",null,","),t("mo",{stretchy:"false"},"["),t("mn",null,"4"),t("mo",{stretchy:"false"},"]"),t("mo",{stretchy:"false"},"]")])],-1),M=t("h2",{id:"norm",tabindex:"-1"},[Q("Norm "),t("a",{class:"header-anchor",href:"#norm","aria-label":'Permalink to "Norm"'},"​")],-1),V=t("p",null,"Norm이란, 벡터의 크기를 수치화 하는 함수이다. 기본적으로 Norm 이라 하면 L2 Norm으로 받아들인다. 이 외에 L1 Norm, 제곱 L2, Max Norm이 있다. Max Norm 을 제외한 Norm 함수에 대한 일반식 LP Norm은 다음과 같다.",-1),b={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.697ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.61ex",height:"5.102ex",role:"img",focusable:"false",viewBox:"0 -1063.1 8225.5 2255.2","aria-hidden":"true"},D=a("",1),v=[D],C=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"X"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("msub",null,[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"p")]),t("mo",null,"="),t("mo",{stretchy:"false"},"("),t("munder",null,[t("mo",{"data-mjx-texclass":"OP"},"∑"),t("mi",null,"i")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("msub",null,[t("mi",null,"x"),t("mi",null,"i")]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|")]),t("msup",null,[t("mo",{stretchy:"false"},")"),t("mfrac",null,[t("mn",null,"1"),t("mi",null,"p")])])])],-1),j=t("h3",{id:"l2-norm",tabindex:"-1"},[Q("L2 Norm "),t("a",{class:"header-anchor",href:"#l2-norm","aria-label":'Permalink to "L2 Norm"'},"​")],-1),A=t("p",null,"가장 일반적으로 사용되는 Norm이다. ||X|| 만 되어 있으면 그냥 L2 Norm으로 보면 된다.",-1),S={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},R={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.728ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.682ex",height:"5.566ex",role:"img",focusable:"false",viewBox:"0 -1254.2 7373.3 2460","aria-hidden":"true"},P=a("",1),B=[P],O=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"X"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("msub",null,[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mn",null,"2")]),t("mo",null,"="),t("msqrt",null,[t("munder",null,[t("mo",{"data-mjx-texclass":"OP"},"∑"),t("mi",null,"i")]),t("msubsup",null,[t("mi",null,"x"),t("mi",null,"i"),t("mn",null,"2")])])])],-1),N=t("p",null,"L2 Norm이라는 것은 결국 0 벡터(원점벡터)에서 해당 벡터까지의 유클리드 거리와 같다.",-1),E=t("h3",{id:"l1-norm",tabindex:"-1"},[Q("L1 Norm "),t("a",{class:"header-anchor",href:"#l1-norm","aria-label":'Permalink to "L1 Norm"'},"​")],-1),I=t("p",null,"L1 Norm은 제곱값에 루트를 씌우는 것이 아닌, 단순히 절댓값을 더한 값이다. 보통 0인 것과 0이 아닌 것을 가려야 하는 경우에 사용한다.",-1),X={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},J={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.697ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.384ex",height:"4.847ex",role:"img",focusable:"false",viewBox:"0 -950 6799.7 2142.2","aria-hidden":"true"},z=a("",1),G=[z],q=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"X"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("msub",null,[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mn",null,"1")]),t("mo",null,"="),t("munder",null,[t("mo",{"data-mjx-texclass":"OP"},"∑"),t("mi",null,"i")]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("msub",null,[t("mi",null,"x"),t("mi",null,"i")]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|")])],-1),F=t("h3",{id:"max-norm",tabindex:"-1"},[Q("Max Norm "),t("a",{class:"header-anchor",href:"#max-norm","aria-label":'Permalink to "Max Norm"'},"​")],-1),$=t("p",null,"max norm은 단순히 벡터의 스칼라 중 절댓값이 가장 큰 값을 취하는 norm이다.",-1),W={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},K={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.494ex",height:"2.26ex",role:"img",focusable:"false",viewBox:"0 -749.5 7732.5 999","aria-hidden":"true"},U=a("",1),Y=[U],t1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"X"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",null,"="),t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"M"),t("mi",null,"A"),t("mi",null,"X")]),t("mi",null,"i")]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("msub",null,[t("mi",null,"x"),t("mi",null,"i")]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|")])],-1),Q1=a("",11),a1=a("",5),T1=t("p",null,[t("strong",null,"열공간, 행공간")],-1),e1=t("p",null,"컬럼벡터가 나타낼 수 있는 범위를 의미한다.",-1),s1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},l1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.176ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2288 1000","aria-hidden":"true"},o1=a("",1),n1=[o1],r1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"C"),t("mo",{stretchy:"false"},"("),t("mi",null,"A"),t("mo",{stretchy:"false"},")")])],-1),d1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.165ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4051 1000","aria-hidden":"true"},i1=a("",1),h1=[i1],p1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"r"),t("mi",null,"a"),t("mi",null,"n"),t("mi",null,"g"),t("mi",null,"e"),t("mo",{stretchy:"false"},"("),t("mi",null,"A"),t("mo",{stretchy:"false"},")")])],-1),c1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.174ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2287 1000","aria-hidden":"true"},H1=a("",1),u1=[H1],w1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"R"),t("mo",{stretchy:"false"},"("),t("mi",null,"A"),t("mo",{stretchy:"false"},")")])],-1),x1=t("h3",{id:"직교벡터",tabindex:"-1"},[Q("직교벡터 "),t("a",{class:"header-anchor",href:"#직교벡터","aria-label":'Permalink to "직교벡터"'},"​")],-1),_1=t("p",null,[Q("직교벡터란 벡터와 해당 벡터의 전치벡터의 곱, 다시 말해 "),t("strong",null,"내적이 0이 되는 벡터"),Q("를 의미한다. 기저벡터는 직교벡터가 될 수 있다. 그렇다고 모든 기저 벡터가 직교 벡터는 아니다.")],-1),f1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},y1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"21.189ex",height:"2.203ex",role:"img",focusable:"false",viewBox:"0 -891.7 9365.6 973.7","aria-hidden":"true"},L1=a("",1),k1=[L1],M1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("msup",null,[t("mi",null,"X"),t("mi",null,"T")]),t("mi",null,"X"),t("mo",null,"="),t("mn",null,"0"),t("mspace",{linebreak:"newline"}),t("mi",null,"o"),t("mi",null,"r"),t("mspace",{linebreak:"newline"}),t("mi",null,"X"),t("mo",null,"⋅"),t("mi",null,"X"),t("mo",null,"="),t("mn",null,"0")])],-1),V1=t("p",null,[t("strong",null,"내적이 0"),Q(" 이라는 것은 기하학적인 의미가 있다.")],-1),b1=t("p",null,"먼저 내적이라는 것은 삼각함수로 표현할 수 있다.",-1),Z1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},D1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.701ex",height:"3.046ex",role:"img",focusable:"false",viewBox:"0 -1097 6940 1346.5","aria-hidden":"true"},v1=a("",1),C1=[v1],j1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"a"),t("mo",{stretchy:"false"},"→")])]),t("mo",null,"⋅"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mo",null,"="),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"a"),t("mo",{stretchy:"false"},"→")])]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"c"),t("mi",null,"o"),t("mi",null,"s"),t("mi",null,"θ")])],-1),A1=a("",11);function S1(R1,P1,B1,O1,N1,E1){return e(),T("div",null,[o,n,r,t("mjx-container",d,[(e(),T("svg",m,h)),p]),c,t("mjx-container",g,[(e(),T("svg",H,w)),x]),t("mjx-container",_,[(e(),T("svg",f,L)),k]),M,V,t("mjx-container",b,[(e(),T("svg",Z,v)),C]),j,A,t("mjx-container",S,[(e(),T("svg",R,B)),O]),N,E,I,t("mjx-container",X,[(e(),T("svg",J,G)),q]),F,$,t("mjx-container",W,[(e(),T("svg",K,Y)),t1]),Q1,t("ul",null,[a1,t("li",null,[T1,e1,t("p",null,[t("mjx-container",s1,[(e(),T("svg",l1,n1)),r1]),Q(" 또는 "),t("mjx-container",d1,[(e(),T("svg",m1,h1)),p1]),Q(" 로 표기한다.")]),t("p",null,[Q("반대로 행공간은 행 벡터가 나타낼 수 있는 범위를 의미한다. "),t("mjx-container",c1,[(e(),T("svg",g1,u1)),w1]),Q("로 표기한다.")])])]),x1,_1,t("mjx-container",f1,[(e(),T("svg",y1,k1)),M1]),V1,b1,t("mjx-container",Z1,[(e(),T("svg",D1,C1)),j1]),A1])}const J1=s(l,[["render",S1]]);export{X1 as __pageData,J1 as default};

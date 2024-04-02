import{_ as l,c as Q,m as T,a as e,o as t,a5 as a}from"./chunks/framework.BuWuHeYF.js";const J1=JSON.parse('{"title":"4. 선형회귀와 다중회귀","description":"","frontmatter":{"head":[["script",{"type":"application/ld+json"},"{\\n  \\"@context\\":\\"http://schema.org\\",\\n  \\"@type\\":\\"BlogPosting\\",\\n  \\"mainEntityOfPage\\" : {\\n    \\"@type\\" : \\"WebPage\\",\\n    \\"@id\\" : \\"https://an-jieun.github.io/contentsundefined\\"\\n  },\\n  \\"name\\":\\"undefined\\",\\n  \\"url\\" : \\"https://an-jieun.github.io/contents/undefined\\",\\n  \\"headline\\":\\"undefined\\",\\n  \\"description\\":\\"undefined\\",\\n  \\"keywords\\" : [undefined],\\n  \\"inLanguage\\":\\"ko\\",\\n  \\"author\\" : {\\n    \\"@type\\" : \\"Person\\",\\n    \\"name\\" : \\"Jieun\\",\\n    \\"email\\" : \\"aje20010827@gmail.com\\"\\n    }\\n  },\\n}"],["meta",{"property":"og:title"}],["meta",{"property":"og:description"}],["meta",{"property":"og:url","content":"https://an-jieun.github.io/"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:site_name","content":"전자두뇌만들기"}],["meta",{"property":"og:locale","content":"ko_KR"}],["meta",{"name":"twitter:card","content":"summary"}],["meta",{"name":"twitter:title"}],["meta",{"name":"twitter:description"}],["meta",{"property":"@context","content":"http://schema.org"}],["meta",{"property":"@type","content":"TechArticle"}],["meta",{"property":"name"}],["meta",{"property":"url","content":"https://an-jieun.github.io/contents/undefined"}],["meta",{"property":"description"}],["meta",{"property":"keywords"}],["meta",{"property":"version","content":"1.0"}],["meta",{"property":"inLanguage","content":"ko"}],["meta",{"property":"technicalAudience","content":"developer, DBA, Web Developer"}],["meta",{"property":"proficiencyLevel","content":"beginner"}],["meta",{"property":"author","content":"Jieun"}],["meta",{"property":"dependencies","content":"Python"}]]},"headers":[],"relativePath":"contents/MATH/linear-algebra-application/intermediate-chap-4.md","filePath":"contents/MATH/linear-algebra-application/intermediate-chap-4.md","lastUpdated":1711328249000}'),s={name:"contents/MATH/linear-algebra-application/intermediate-chap-4.md"},n=T("h1",{id:"_4-선형회귀와-다중회귀",tabindex:"-1"},[e("4. 선형회귀와 다중회귀 "),T("a",{class:"header-anchor",href:"#_4-선형회귀와-다중회귀","aria-label":'Permalink to "4. 선형회귀와 다중회귀"'},"​")],-1),m=T("h2",{id:"선형회귀",tabindex:"-1"},[e("선형회귀 "),T("a",{class:"header-anchor",href:"#선형회귀","aria-label":'Permalink to "선형회귀"'},"​")],-1),o={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.65ex",height:"1.756ex",role:"img",focusable:"false",viewBox:"0 -694 2939.4 776","aria-hidden":"true"},r=a("",1),i=[r],h=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mi",null,"w"),T("mi",null,"x"),T("mo",null,"+"),T("mi",null,"b")])],-1),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.597ex",height:"2.009ex",role:"img",focusable:"false",viewBox:"0 -694 1589.7 888","aria-hidden":"true"},c=a("",1),H=[c],u=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mi",null,"w"),T("mo",null,","),T("mi",null,"b")])],-1),w={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.597ex",height:"2.009ex",role:"img",focusable:"false",viewBox:"0 -694 1589.7 888","aria-hidden":"true"},f=a("",1),V=[f],y=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mi",null,"w"),T("mo",null,","),T("mi",null,"b")])],-1),x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.109ex",height:"2.296ex",role:"img",focusable:"false",viewBox:"0 -810 490 1015","aria-hidden":"true"},k=a("",1),_=[k],Z=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mrow",{"data-mjx-texclass":"ORD"},[T("mover",null,[T("mi",null,"y"),T("mo",{stretchy:"false"},"^")])])])],-1),b={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.109ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 490 647","aria-hidden":"true"},D=T("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[T("g",{"data-mml-node":"math"},[T("g",{"data-mml-node":"mi"},[T("path",{"data-c":"1D466",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),A=[D],j=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mi",null,"y")])],-1),C={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.054ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 466 453","aria-hidden":"true"},P=T("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[T("g",{"data-mml-node":"math"},[T("g",{"data-mml-node":"mi"},[T("path",{"data-c":"1D452",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",style:{"stroke-width":"3"}})])])],-1),N=[P],B=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mi",null,"e")])],-1),E=T("p",null,"모든 독립변수 x에 대한 에러값 총합에 대한 식은 다음과 같다.",-1),I={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},R={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"28.055ex",height:"2.593ex",role:"img",focusable:"false",viewBox:"0 -896 12400.3 1146","aria-hidden":"true"},F=a("",1),J=[F],z=T("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("msup",null,[T("mi",null,"e"),T("mn",null,"2")]),T("mo",null,"="),T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mo",null,"−"),T("mo",{stretchy:"false"},"("),T("mi",null,"w"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",null,"+"),T("mi",null,"b"),T("mo",{stretchy:"false"},")"),T("msup",null,[T("mo",{stretchy:"false"},")"),T("mn",null,"2")])])],-1),G=T("p",null,"에러가 최저가 되는 지점은 각각 w, b에 대해 에러 식을 미분하면 구할 수 있다.",-1),O=T("ul",null,[T("li",null,"w에 대해 미분")],-1),$={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.164ex",height:"2.712ex",role:"img",focusable:"false",viewBox:"0 -846 15100.4 1198.7","aria-hidden":"true"},q=a("",1),K=[q],U=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mfrac",null,[T("mi",null,"σ"),T("mrow",null,[T("mi",null,"σ"),T("mi",null,"w")])]),T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("msup",null,[T("mi",null,"e"),T("mn",null,"2")]),T("mo",null,"="),T("mfrac",null,[T("mi",null,"σ"),T("mrow",null,[T("mi",null,"σ"),T("mi",null,"w")])]),T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mo",null,"−"),T("mo",{stretchy:"false"},"("),T("mi",null,"w"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",null,"+"),T("mi",null,"b"),T("mo",{stretchy:"false"},")"),T("msup",null,[T("mo",{stretchy:"false"},")"),T("mn",null,"2")])])],-1),X={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"40.201ex",height:"2.712ex",role:"img",focusable:"false",viewBox:"0 -846 17768.7 1198.7","aria-hidden":"true"},T1=a("",1),Q1=[T1],t1=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mfrac",null,[T("mi",null,"σ"),T("mrow",null,[T("mi",null,"σ"),T("mi",null,"w")])]),T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("msup",null,[T("mi",null,"e"),T("mn",null,"2")]),T("mo",null,"="),T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("mo",null,"−"),T("mn",null,"2"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mo",null,"−"),T("mo",{stretchy:"false"},"("),T("mi",null,"w"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",null,"+"),T("mi",null,"b"),T("mo",{stretchy:"false"},")"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("mn",null,"0")])],-1),a1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},e1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.896ex"},xmlns:"http://www.w3.org/2000/svg",width:"29.784ex",height:"2.81ex",role:"img",focusable:"false",viewBox:"0 -846 13164.5 1241.9","aria-hidden":"true"},l1=a("",1),s1=[l1],n1=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("mo",{stretchy:"false"},"("),T("mn",null,"2"),T("msubsup",null,[T("mi",null,"x"),T("mi",null,"i"),T("mn",null,"2")]),T("mo",{stretchy:"false"},")"),T("mi",null,"w"),T("mo",null,"−"),T("mn",null,"2"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mfrac",null,[T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mi",null,"b")]),T("mi",null,"i")]),T("mo",null,"+"),T("mn",null,"1"),T("mo",{stretchy:"false"},")"),T("mi",null,"b"),T("mo",null,"="),T("mn",null,"0")])],-1),m1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},o1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"29.069ex",height:"2.685ex",role:"img",focusable:"false",viewBox:"0 -833.9 12848.6 1186.7","aria-hidden":"true"},d1=a("",1),r1=[d1],i1=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mi",{mathvariant:"normal"},"Σ"),T("mo",{stretchy:"false"},"("),T("mn",null,"2"),T("msubsup",null,[T("mi",null,"x"),T("mi",null,"i"),T("mn",null,"2")]),T("mo",{stretchy:"false"},")"),T("mi",null,"w"),T("mo",null,"−"),T("mn",null,"2"),T("mi",{mathvariant:"normal"},"Σ"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mfrac",null,[T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mi",null,"b")]),T("mo",null,"+"),T("mn",null,"1"),T("mo",{stretchy:"false"},")"),T("mi",null,"b"),T("mo",null,"="),T("mn",null,"0")])],-1),h1=T("ul",null,[T("li",null,"b에 대해 미분")],-1),p1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.811ex",height:"2.712ex",role:"img",focusable:"false",viewBox:"0 -846 14944.4 1198.7","aria-hidden":"true"},c1=a("",1),H1=[c1],u1=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mfrac",null,[T("mi",null,"σ"),T("mrow",null,[T("mi",null,"σ"),T("mi",null,"b")])]),T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("msup",null,[T("mi",null,"e"),T("mn",null,"2")]),T("mo",null,"="),T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mo",null,"−"),T("mo",{stretchy:"false"},"("),T("mi",null,"w"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",null,"+"),T("mi",null,"b"),T("mo",{stretchy:"false"},")"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("mn",null,"0")])],-1),w1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"26.26ex",height:"2.712ex",role:"img",focusable:"false",viewBox:"0 -846 11607 1198.7","aria-hidden":"true"},f1=a("",1),V1=[f1],y1=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("msubsup",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mn",null,"1"),T("mi",null,"N")]),T("mo",{stretchy:"false"},"("),T("mo",null,"−"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",{stretchy:"false"},")"),T("mi",null,"w"),T("mo",null,"+"),T("mo",{stretchy:"false"},"("),T("mfrac",null,[T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mi",null,"b")]),T("mo",null,"−"),T("mn",null,"1"),T("mo",{stretchy:"false"},")"),T("mi",null,"b"),T("mo",null,"="),T("mn",null,"0")])],-1),x1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"26.285ex",height:"2.602ex",role:"img",focusable:"false",viewBox:"0 -797.5 11618.1 1150.3","aria-hidden":"true"},k1=a("",1),_1=[k1],Z1=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mi",{mathvariant:"normal"},"Σ"),T("mo",{stretchy:"false"},"("),T("mo",null,"−"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",{stretchy:"false"},")"),T("mi",null,"w"),T("mo",null,"+"),T("mi",{mathvariant:"normal"},"Σ"),T("mo",{stretchy:"false"},"("),T("mfrac",null,[T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mi",null,"b")]),T("mo",null,"−"),T("mn",null,"1"),T("mo",{stretchy:"false"},")"),T("mi",null,"b"),T("mo",null,"="),T("mn",null,"0")])],-1),b1=T("p",null,"합에 대한 식의 연립은 역행렬 연산을 통해 구할 수 있다.",-1),v1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},D1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.827ex"},xmlns:"http://www.w3.org/2000/svg",width:"37.138ex",height:"6.785ex",role:"img",focusable:"false",viewBox:"0 -1749.5 16415.2 2999","aria-hidden":"true"},A1=a("",1),j1=[A1],C1=T("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[T("mrow",{"data-mjx-texclass":"INNER"},[T("mo",{"data-mjx-texclass":"OPEN"},"["),T("mtable",{columnspacing:"1em",rowspacing:"4pt"},[T("mtr",null,[T("mtd",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mo",{stretchy:"false"},"("),T("mn",null,"2"),T("msubsup",null,[T("mi",null,"x"),T("mi",null,"i"),T("mn",null,"2")]),T("mo",{stretchy:"false"},")")]),T("mtd",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mfrac",null,[T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mi",null,"b")]),T("mi",null,"i")]),T("mo",null,"+"),T("mn",null,"1"),T("mo",{stretchy:"false"},")"),T("mo",{stretchy:"false"},")")])]),T("mtr",null,[T("mtd",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mo",{stretchy:"false"},"("),T("mo",null,"−"),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",{stretchy:"false"},")")]),T("mtd",null,[T("mi",{mathvariant:"normal"},"Σ"),T("mo",{stretchy:"false"},"("),T("mfrac",null,[T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mi",null,"b")]),T("mo",null,"−"),T("mn",null,"1"),T("mo",{stretchy:"false"},")")])])]),T("mo",{"data-mjx-texclass":"CLOSE"},"]")]),T("mrow",{"data-mjx-texclass":"INNER"},[T("mo",{"data-mjx-texclass":"OPEN"},"["),T("mtable",{columnspacing:"1em",rowspacing:"4pt"},[T("mtr",null,[T("mtd",null,[T("mi",null,"w")])]),T("mtr",null,[T("mtd",null,[T("mi",null,"b")])])]),T("mo",{"data-mjx-texclass":"CLOSE"},"]")]),T("mo",null,"="),T("mrow",{"data-mjx-texclass":"INNER"},[T("mo",{"data-mjx-texclass":"OPEN"},"["),T("mtable",{columnspacing:"1em",rowspacing:"4pt"},[T("mtr",null,[T("mtd",null,[T("mn",null,"0")])]),T("mtr",null,[T("mtd",null,[T("mn",null,"0")])])]),T("mo",{"data-mjx-texclass":"CLOSE"},"]")])])],-1);function S1(P1,N1,B1,E1,I1,R1){return t(),Q("div",null,[n,m,T("p",null,[e("선형회귀란 다수의 데이터, 즉 독립변수 x로부터 종속변수(레이블값) y를 예측하기 위한 통계적 기법이다. 선형회귀란, 독립변수에 따른 종속변수의 분포에 따라, 독립변수로부터 종속변수가 도출될 수 있는 선형 함수 "),T("mjx-container",o,[(t(),Q("svg",d,i)),h]),e("를 찾아 내는 것이 목표이다.")]),T("p",null,[T("mjx-container",p,[(t(),Q("svg",g,H)),u]),e("를 찾아내는 것이 관건인데, 선형회귀 모델에서는 잔차제곱합(Residual Sum of Square)를 통해 "),T("mjx-container",w,[(t(),Q("svg",L,V)),y]),e("의 예측값에 따라 도출된 예측값인 "),T("mjx-container",x,[(t(),Q("svg",M,_)),Z]),e("와 실제 값 "),T("mjx-container",b,[(t(),Q("svg",v,A)),j]),e("의 차이인 오차값 "),T("mjx-container",C,[(t(),Q("svg",S,N)),B]),e("가 최소화 되는 값을 찾음으로서 두 값을 구한다.")]),E,T("mjx-container",I,[(t(),Q("svg",R,J)),z]),G,O,T("p",null,[T("mjx-container",$,[(t(),Q("svg",W,K)),U])]),T("p",null,[T("mjx-container",X,[(t(),Q("svg",Y,Q1)),t1])]),T("p",null,[T("mjx-container",a1,[(t(),Q("svg",e1,s1)),n1])]),T("p",null,[T("mjx-container",m1,[(t(),Q("svg",o1,r1)),i1])]),h1,T("p",null,[T("mjx-container",p1,[(t(),Q("svg",g1,H1)),u1])]),T("p",null,[T("mjx-container",w1,[(t(),Q("svg",L1,V1)),y1])]),T("p",null,[T("mjx-container",x1,[(t(),Q("svg",M1,_1)),Z1])]),b1,T("mjx-container",v1,[(t(),Q("svg",D1,j1)),C1])])}const z1=l(s,[["render",S1]]);export{J1 as __pageData,z1 as default};

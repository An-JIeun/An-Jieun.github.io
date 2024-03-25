import{_ as o,c as Q,m as t,a as e,a5 as T,o as a}from"./chunks/framework.BuWuHeYF.js";const G=JSON.parse('{"title":"5. 시그모이드와 로지스틱","description":"","frontmatter":{"head":[["script",{"type":"application/ld+json"},"{\\n  \\"@context\\":\\"http://schema.org\\",\\n  \\"@type\\":\\"BloPosting\\",\\n  \\"mainEntityOfPage\\" : {\\n    \\"@type\\" : \\"WebPage\\",\\n    \\"@id\\" : \\"https://an-jieun.github.io/contentsundefined\\"\\n  },\\n  \\"name\\":\\"undefined\\",\\n  \\"url\\" : \\"https://an-jieun.github.io/contents/undefined\\",\\n  \\"description\\":\\"undefined\\",\\n  \\"keywords\\" : [undefined],\\n  \\"version\\":\\"1.0\\",\\n  \\"inLanguage\\":\\"ko\\",\\n  \\"technicalAudience\\" : \\"developer\\",\\n  \\"proficiencyLevel\\" : \\"beginner\\",\\n  \\"author\\" : {\\n    \\"@type\\" : \\"Person\\",\\n    \\"name\\" : \\"Jieun\\",\\n    \\"email\\" : \\"aje20010827@gmail.com\\"\\n    \\n    }\\n  },\\n  \\"dependencies\\" : \\"Python\\",\\n  \\"proficiencyLevel\\" : \\"beginner\\",\\n  \\"technicalAudience\\" : \\"developer, DBA, Web Developer\\"\\n}"],["meta",{"property":"og:title"}],["meta",{"property":"og:description"}],["meta",{"property":"og:url"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:site_name","content":"전자두뇌만들기"}],["meta",{"property":"og:locale","content":"ko_KR"}],["meta",{"property":"@context","content":"http://schema.org"}],["meta",{"property":"@type","content":"TechArticle"}],["meta",{"property":"name"}],["meta",{"property":"url","content":"https://an-jieun.github.io/contents/undefined"}],["meta",{"property":"description"}],["meta",{"property":"keywords"}],["meta",{"property":"version","content":"1.0"}],["meta",{"property":"inLanguage","content":"ko"}],["meta",{"property":"technicalAudience","content":"developer, DBA, Web Developer"}],["meta",{"property":"proficiencyLevel","content":"beginner"}],["meta",{"property":"author","content":"Jieun"}],["meta",{"property":"dependencies","content":"Python"}]]},"headers":[],"relativePath":"contents/MATH/linear-algebra-application/intermediate-chap-5.md","filePath":"contents/MATH/linear-algebra-application/intermediate-chap-5.md","lastUpdated":1711328249000}'),n={name:"contents/MATH/linear-algebra-application/intermediate-chap-5.md"},l=t("h1",{id:"_5-시그모이드와-로지스틱",tabindex:"-1"},[e("5. 시그모이드와 로지스틱 "),t("a",{class:"header-anchor",href:"#_5-시그모이드와-로지스틱","aria-label":'Permalink to "5. 시그모이드와 로지스틱"'},"​")],-1),s=t("h2",{id:"최소제곱오차-min-square-error",tabindex:"-1"},[e("최소제곱오차 (min-square error) "),t("a",{class:"header-anchor",href:"#최소제곱오차-min-square-error","aria-label":'Permalink to "최소제곱오차 (min-square error)"'},"​")],-1),r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.776ex",height:"2.296ex",role:"img",focusable:"false",viewBox:"0 -810 4763 1015","aria-hidden":"true"},d=T("",1),m=[d],p=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"w"),t("mi",null,"x"),t("mo",null,"+"),t("mi",null,"b"),t("mo",null,"="),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"y"),t("mo",{stretchy:"false"},"^")])])])],-1),h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.109ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 490 647","aria-hidden":"true"},g=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D466",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),u=[g],x=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"y")])],-1),w=T("",10),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.781ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.871ex",height:"3.15ex",role:"img",focusable:"false",viewBox:"0 -1047.1 8340.8 1392.1","aria-hidden":"true"},H=T("",1),f=[H],k=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"S"),t("mi",null,"i"),t("mi",null,"g"),t("mi",null,"m"),t("mi",null,"o"),t("mi",null,"i"),t("mi",null,"d"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mn",null,"1"),t("mo",null,"−"),t("mi",null,"e"),t("mi",null,"x"),t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"z"),t("mo",{stretchy:"false"},")")]),t("mn",null,"1")])])],-1),L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.719ex",height:"1.756ex",role:"img",focusable:"false",viewBox:"0 -694 4738 776","aria-hidden":"true"},b=T("",1),v=[b],Z=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"z"),t("mo",null,"="),t("mi",null,"w"),t("mi",null,"x"),t("mo",null,"+"),t("mi",null,"b")])],-1),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.054ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 466 453","aria-hidden":"true"},A=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D452",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",style:{"stroke-width":"3"}})])])],-1),j=[A],C=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"e")])],-1),P=t("p",null,"결과적으로 말하면 시그모이드 함수는 미분이 가능하다.",-1),S=t("h2",{id:"최대우도의-등장",tabindex:"-1"},[e("최대우도의 등장 "),t("a",{class:"header-anchor",href:"#최대우도의-등장","aria-label":'Permalink to "최대우도의 등장"'},"​")],-1);function B(q,I,J,N,R,z){return a(),Q("div",null,[l,s,t("p",null,[e("지금까지 다룬 방식은 모두, 임의의 "),t("mjx-container",r,[(a(),Q("svg",i,m)),p]),e("와 실제 데이터값(종속변수) "),t("mjx-container",h,[(a(),Q("svg",c,u)),x]),e("의 오차를 최소화 하는 방식으로 결정 직선/평면에 대한 방정식을 최적화 하였다.")]),w,t("p",null,[t("mjx-container",_,[(a(),Q("svg",y,f)),k])]),t("p",null,[t("mjx-container",L,[(a(),Q("svg",M,v)),Z])]),t("p",null,[e("하지만, 시그모이드 함수에는 자연상수 "),t("mjx-container",V,[(a(),Q("svg",D,j)),C]),e("가 있다. 자연상수가 있다는 것은 미분이 불가능 하다는 것인데... 이렇게 되면 앞서 미분가능성때문에 시그모이드 함수를 사용한다는 말과 모순된다.")]),P,S])}const O=o(n,[["render",B]]);export{G as __pageData,O as default};
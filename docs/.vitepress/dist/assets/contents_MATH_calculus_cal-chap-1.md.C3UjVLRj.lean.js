import{_ as o,c as Q,m as t,a,a5 as e,o as T}from"./chunks/framework.BuWuHeYF.js";const Y=JSON.parse('{"title":"1. 미분","description":"미분의 개념과 미분법칙","frontmatter":{"title":"1. 미분","description":"미분의 개념과 미분법칙","keywords":["미분","미분법칙"],"url":"MATH/calculus/cal-chap-1.html","head":[["script",{"type":"application/ld+json"},"{\\n  \\"@context\\":\\"http://schema.org\\",\\n  \\"@type\\":\\"BlogPosting\\",\\n  \\"mainEntityOfPage\\" : {\\n    \\"@type\\" : \\"WebPage\\",\\n    \\"@id\\" : \\"https://an-jieun.github.io/contentsMATH/calculus/cal-chap-1.html\\"\\n  },\\n  \\"name\\":\\"1. 미분\\",\\n  \\"url\\" : \\"https://an-jieun.github.io/contents/MATH/calculus/cal-chap-1.html\\",\\n  \\"headline\\":\\"미분의 개념과 미분법칙\\",\\n  \\"description\\":\\"미분의 개념과 미분법칙\\",\\n  \\"keywords\\" : [미분,미분법칙],\\n  \\"inLanguage\\":\\"ko\\",\\n  \\"author\\" : {\\n    \\"@type\\" : \\"Person\\",\\n    \\"name\\" : \\"Jieun\\",\\n    \\"email\\" : \\"aje20010827@gmail.com\\"\\n    }\\n  },\\n}"],["meta",{"property":"og:title","content":"1. 미분"}],["meta",{"property":"og:description","content":"미분의 개념과 미분법칙"}],["meta",{"property":"og:url","content":"https://an-jieun.github.io/"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image"}],["meta",{"property":"og:site_name","content":"전자두뇌만들기"}],["meta",{"property":"og:locale","content":"ko_KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:title","content":"1. 미분"}],["meta",{"name":"twitter:description","content":"미분의 개념과 미분법칙"}],["meta",{"name":"twitter:image"}],["meta",{"property":"@context","content":"http://schema.org"}],["meta",{"property":"@type","content":"TechArticle"}],["meta",{"property":"name","content":"1. 미분"}],["meta",{"property":"url","content":"https://an-jieun.github.io/contents/MATH/calculus/cal-chap-1.html"}],["meta",{"property":"description","content":"미분의 개념과 미분법칙"}],["meta",{"property":"keywords","content":["미분","미분법칙"]}],["meta",{"property":"version","content":"1.0"}],["meta",{"property":"inLanguage","content":"ko"}],["meta",{"property":"technicalAudience","content":"developer, DBA, Web Developer"}],["meta",{"property":"proficiencyLevel","content":"beginner"}],["meta",{"property":"author","content":"Jieun"}]]},"headers":[],"relativePath":"contents/MATH/calculus/cal-chap-1.md","filePath":"contents/MATH/calculus/cal-chap-1.md","lastUpdated":1712018592000}'),l={name:"contents/MATH/calculus/cal-chap-1.md"},s=e("",4),n={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.926ex",height:"2.396ex",role:"img",focusable:"false",viewBox:"0 -809 2177.5 1059","aria-hidden":"true"},d=e("",1),i=[d],m=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("msup",null,[t("mo",{stretchy:"false"},")"),t("mo",{"data-mjx-alternate":"1"},"′")])])],-1),h=t("h3",{id:"_2-델타-표기",tabindex:"-1"},[a("2. 델타 표기 "),t("a",{class:"header-anchor",href:"#_2-델타-표기","aria-label":'Permalink to "2. 델타 표기"'},"​")],-1),c=t("p",null,"가장 보편적으로 사용되는 표기법이다. 분자에는 미분하는 매개변수를 적어주면 된다.",-1),p={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.577ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.765ex",height:"4.676ex",role:"img",focusable:"false",viewBox:"0 -1370 3432 2067","aria-hidden":"true"},_=e("",1),u=[_],x=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mfrac",null,[t("mi",null,"d"),t("mrow",null,[t("mi",null,"d"),t("mi",null,"x")])]),t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{stretchy:"false"},")")])],-1),H=t("h2",{id:"델타논법-delta-method",tabindex:"-1"},[a("델타논법 (delta method) "),t("a",{class:"header-anchor",href:"#델타논법-delta-method","aria-label":'Permalink to "델타논법 (delta method)"'},"​")],-1),w={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.179ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -716 1405 727","aria-hidden":"true"},y=e("",1),L=[y],k=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",{mathvariant:"normal"},"Δ"),t("mi",null,"x")])],-1),M={class:"info custom-block"},b=t("p",{class:"custom-block-title"},"💡극한값",-1),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"3.143ex",height:"1.57ex",role:"img",focusable:"false",viewBox:"0 -694 1389 694","aria-hidden":"true"},Z=e("",1),D=[Z],A=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",{"data-mjx-texclass":"OP",movablelimits:"true"},"lim")])],-1),P=t("p",null,"델타 논법으로 미분방정식을 표현하면 다음 식과 같다.",-1),j={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.767ex"},xmlns:"http://www.w3.org/2000/svg",width:"32.071ex",height:"5.07ex",role:"img",focusable:"false",viewBox:"0 -1460 14175.3 2241.1","aria-hidden":"true"},C=e("",1),q=[C],I=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("msup",null,[t("mo",{stretchy:"false"},")"),t("mo",{"data-mjx-alternate":"1"},"′")]),t("mo",null,"="),t("munder",null,[t("mo",{"data-mjx-texclass":"OP",movablelimits:"true"},"lim"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",{mathvariant:"normal"},"Δ"),t("mi",null,"x"),t("mo",{accent:"false",stretchy:"false"},"→"),t("mi",{mathvariant:"normal"},"∞")])])]),t("mfrac",null,[t("mrow",null,[t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",null,"+"),t("mi",{mathvariant:"normal"},"Δ"),t("mi",null,"x"),t("mo",{stretchy:"false"},")"),t("mo",null,"−"),t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{stretchy:"false"},")")]),t("mrow",null,[t("mi",{mathvariant:"normal"},"Δ"),t("mi",null,"x")])])])],-1),R=e("",12),B={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.138ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3155 1000","aria-hidden":"true"},E=e("",1),J=[E],O=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},")")])],-1);function z(G,$,W,X,K,U){return T(),Q("div",null,[s,t("mjx-container",n,[(T(),Q("svg",r,i)),m]),h,c,t("mjx-container",p,[(T(),Q("svg",g,u)),x]),H,t("p",null,[a('미분이 "순간적인 기울기"라고 정의했다.즉, 순간이 얼마나 짧은 시간이 되었건 다음 시점의 속도와 현재 시점 속도의 차이값을 구해야 변화율을 구할 수 있는데, 이 찰나의 시간차를 표현한기 위해서 0으로 수렴하는 값을 더해 다음 순간을 정의한다. 여기서 0에 수렴하는 값을 '),t("mjx-container",w,[(T(),Q("svg",f,L)),k]),a(" 라고 한다. 즉, 델타논법이란 델타값을 사용해 한 지점의 다음 순간을 정의하고, 다음 순간에서의 값과 현재 값의 차이 값을 두 순간의 차인 델타값으로 나누어 순간 기울기를 구하는 방법이다.")]),t("div",M,[b,t("p",null,[a("여기서 극한의 개념이 적용되는데, 극한이란 쉽게 말해 어떤 값에 매우 근사하고 있는 값은 사실상 그 값과 다름이 없다는 수학적 약속이다. 그러니까 6에 매우 근사하는 값인 5.999999999를 사실상 6으로 보고 계산하여도 6으로 계산하였을 때의 값과 크게 차이나지 않으니, 이 5.999999를 6으로 두고 계산할 수 있다. 다만, 엄밀히 두 값은 다른 값이니 "),t("mjx-container",V,[(T(),Q("svg",v,D)),A]),a(" 기호를 써서 6에 근사하는 값임을 나타내야 한다.")])]),P,t("mjx-container",j,[(T(),Q("svg",S,q)),I]),R,t("p",null,[a("가장 중요한 법칙으로, 머신러닝에서 중요한 법칙이다. 변수값으로 함수값이 들어간 복합함수의 경우 (e.g. "),t("mjx-container",B,[(T(),Q("svg",N,J)),O]),a(") 적용되는 법칙이다. 복합함수를 임의의 변수로 치환하여, 해당 변수에 대해 미분한 다음, 변수에 중첩된 함수를 해당 함수의 변수값으로 미분한 값을, 치환값의 미분값에 곱해준다.")])])}const t1=o(l,[["render",z]]);export{Y as __pageData,t1 as default};

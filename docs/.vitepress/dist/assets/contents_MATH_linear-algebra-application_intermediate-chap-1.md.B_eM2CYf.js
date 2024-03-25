import{_ as e,c as l,a,a3 as n,m as s,o as t}from"./chunks/framework.BfR3yx5i.js";const L=JSON.parse('{"title":"1. 고유값과 고유벡터","description":"","frontmatter":{},"headers":[],"relativePath":"contents/MATH/linear-algebra-application/intermediate-chap-1.md","filePath":"contents/MATH/linear-algebra-application/intermediate-chap-1.md","lastUpdated":1711280243000}'),m={name:"contents/MATH/linear-algebra-application/intermediate-chap-1.md"},i=n('<h1 id="_1-고유값과-고유벡터" tabindex="-1">1. 고유값과 고유벡터 <a class="header-anchor" href="#_1-고유값과-고유벡터" aria-label="Permalink to &quot;1. 고유값과 고유벡터&quot;">​</a></h1><h2 id="고유벡터와-고유값" tabindex="-1">고유벡터와 고유값 <a class="header-anchor" href="#고유벡터와-고유값" aria-label="Permalink to &quot;고유벡터와 고유값&quot;">​</a></h2><p>고유하다는 것은 상황이 변화해도 그 특성을 잃지 않는 것을 의미한다. 그럼, 벡터가 고유하다는 것은 무엇일까? 벡터가 어떠한 상황에서도 그 특성, 즉 방향성을 잃지 않는 것을 의미한다. 즉, 고유벡터란 <strong>선형변환 이후에도 변환 결과가 자신의 상수배를 한 결과일 때의 벡터</strong>를 의미한다. 선형 변환이란 쉽게 말해 어떤 행렬을 벡터에 곱하는 것이다.</p><details><summary> 여러가지 선형변환들 </summary><p><strong>선형변환이란?</strong></p><p>벡터에 어떠한 행렬을 곱하는 것을 &#39;벡터에 행렬을 통과시킨다&#39;라고 표현한다. 아무튼, 벡터에 어떠한 행렬을 곱하게 되면 벡터의 크기와 방향이 변한다.</p><p>하지만, 아무리 벡터의 크기나 방향이 변해 봤자, 조금 더 벡터의 크기가 커진다거나, 벡터의 방향이 치우치는 정도에 그치게 된다. 벡터가 곡선의 형상을 띄거나 하지는 않는다는 것이다. 이를 &#39;선형적으로 변화했다&#39;라고 말한다.</p><p>이처럼, 벡터가 어떠한 행렬을 통과하여 선형적인 변화를 일으키게 하는 것을 <strong>선형변환 (linear transformation)</strong> 이라고 한다.</p><p>선형변환에 속하는 다양한 변환들이 있으며, 모든 변환들은 행렬을 곱하여 이뤄진다. 어찌보면, 벡터에 곱해지는 행렬이 곧 함수와도 같은 역할을 한다고 볼 수 있다. 이런 변환들은 주로 컴퓨터 그래픽에 많이 활용된다. 하지만 아핀변환이라는 것은 LLM에서도 자주 언급되긴 한다.</p><hr><p>▶️<strong>scailing (비례변환)</strong> 비례변환은 벡터의 방향과 크기가 변화하는 변환을 의미한다.</p><p>▶️<strong>Rotation (회전변환)</strong> 회전변환은 좌표평면이 원점을 중심으로 회전하는 것을 의미한다. 회전변환된 벡터는 원래의 벡터와 선형독립이며, 회전변환시 고유값과 고유벡터는 존재하지 않는다.</p><p>▶️<strong>Shearing (전단변환)</strong> 전단변환은 특정 차원값에만 변화를 주는 변환을 의미한다. 기하학적으로 이해하면, y축을 고정하고 x축 방향으로만 변화를 가하는 것을 의미한다.</p><p>앞서 살펴본 변환들은 모두 원점이 변화하지 않는 변환이다. 원점을 이동시키는 변환도 있다. 바로 <strong>이동변환</strong> 이라는 것인데, 대표적으로 <strong>아핀변환(Affine)</strong> 이 있다.</p></details><details><summary>아핀변환 (Affine Transformation)</summary> TBD </details><p>식으로 나타내면 다음과 같이 표현할 수 있다.</p>',6),r=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"X"),s("mi",null,"v"),s("mo",null,"="),s("mi",null,"λ"),s("mi",null,"v")]),s("annotation",{encoding:"application/x-tex"},"Xv = \\lambda v ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.69444em","vertical-align":"0em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"v"),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit"},"λ"),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"v")])])])])],-1),p=s("p",null,[a("여기서 $$\\lambda$$ 는 벡터에 곱해지는 스칼라를 의미한다. 이 스칼라 값인 람다를 "),s("strong",null,"고유값"),a("이라고 칭한다. 즉, 고유값이란 고유벡터에 곱해지는 상수값을 의미한다.")],-1),o=s("p",null,"고유벡터는 하나만 존재할 수도, 무한하게 존재할 수도 있으며, 고유 벡터가 아예 존재하지 않을 수 있다. 다음은 고유벡터를 구하는 과정을 나타낸 식이다.",-1),c=s("p",null,"고유벡터가 무한히 존재하는 경우, 보통 해당 벡터의 basis를 고유벡터로 삼는다. 고유벡터가 무한히 존재하는 경우는 보통 행렬식이 0, 즉, 곱해지는 행렬이 선형 종속이라 1차원에서 span하는 경우이다. 이런 케이스를 시각적으로 보면, 좌표 평면이 일직선으로 짜부라드는 것을 확인할 수 있다.",-1),d=s("hr",null,null,-1),u=s("h2",{id:"고유값-분해-eigenvalue-decomposition",tabindex:"-1"},[a("고유값 분해 (eigenvalue decomposition) "),s("a",{class:"header-anchor",href:"#고유값-분해-eigenvalue-decomposition","aria-label":'Permalink to "고유값 분해 (eigenvalue decomposition)"'},"​")],-1),h=s("p",null,"고유값 분해는 말 그대로 어떤 벡터를 스칼라(고유값)과 고유 벡터로 나누는 것을 의미한다.",-1),b=s("p",{"-1":""},"A = V \\Lambda V^",-1),g=s("p",null,"V^{-1}A = V^{-1}V\\Lambda V^{-1} \\newline V^{-1}AV = V^{-1}\\Lambda V^{-1}V \\newline V^{-1}AV = \\Lambda",-1),y=n(`<pre><code>A = Q
\\newline
Qv = \\lambda v
\\newline
(Qv)^T Qv=v^TQ^TQv
\\newline
Q^TQ = I,\\newline
 \\therefore (Qv)^TQv =||v||_2^2 
$$

이렇게 되면

$$
\\lambda^2 v^2 = ||v||_2^2
\\newline
\\therefore \\lambda = \\pm 1
$$

가 성립한다.
</code></pre><ol start="3"><li><strong>A가 Postivie Semi Definite (PSD) 이면 $$\\lambda$$는 무조건 0보다 크거나 같다.</strong></li></ol><details><summary>Positive Semi Definte란?</summary></details><ol start="4"><li><p><strong>Diagonal Matrix $$\\Lambda$$의 Non-Zero 고유값의 개수는 rank와 동일하다.</strong></p><p>이 성질은 고유값 분해를 기하학적으로 이해하는데 중요하다.</p><p>rank라는 것은, 벡터의 계수, 즉 벡터가 span하는 차원을 의미한다.</p><p>A는 고유벡터와 고유값의 곱으로 표현된다. 즉, 벡터와 벡터의 스팬하는 비율을 구하는 것이다.</p><p>즉, 고유값 분해란 A의 고유벡터가 span하는 차원들에 대한 벡터로 쪼개고,</p><p>각 차원에 곱해진 $$\\lambda_k$$를 찾는 과정이다.</p><p>여기서 $$\\lambda$$는 각 차원별로 곱해지는 값의 모음이므로, 대각행렬성분의 개수가 곧 고유벡터의 랭크와 같다.</p><p>Lambda의 값은 제각각인데, 데이터 압축의 분야에서는 고유값 분해 후, 크기가 작은 고유값은 제거하는 방식으로 데이터를 압축한다.</p></li><li><p><strong>Symmetric Matrix는 무조건 Diagonalizable 하며 (역 성립 X), 따라서 $$ A = Q\\Lambda Q^T$$ 된다.</strong></p><p>대칭행렬이란 $$A^T = A$$인 행렬이다. 대칭행렬은 무조건 대각화가 가능하다는 성질을 갖는다.</p></li></ol><blockquote><p><strong>(+) 대각화란?(diangolize)</strong></p></blockquote><p>대각화란 어떠한 행렬을 고유벡터로 이뤄진 가역행렬과 가역행렬에 곱해진 고유값들에 대한 대각행렬의 곱으로 나타내는 것을 의미한다. 즉, $$AX = X\\Lambda, A = X\\Lambda X^T$$의 꼴로 나타내는 것을 의미한다.</p><blockquote><p><strong>대각화가능조건</strong></p></blockquote><ol><li>n x n 행렬 A는 일차독립인 교유벡터를 가져야 한다. 즉, 행렬 A의 고유벡터들은 Full-rank여야 한다.</li><li>n x n 행렬 A가 서로 다른 n개의 고유값을 갖는 경우 대각화 가능하다. 고유값분해와 혼동하지 말아야 할 것은, 고유값분해는 꼭 서로 다른 고유값을 가질 필요는 없다는 것이다.($$\\Lambda$$의 대각성분으로 0이 대다수 나타나는 경우가 있다.)</li></ol><hr><h2 id="고유값-분해의-장점" tabindex="-1">고유값 분해의 장점 <a class="header-anchor" href="#고유값-분해의-장점" aria-label="Permalink to &quot;고유값 분해의 장점&quot;">​</a></h2><p>고유값 분해로 얻을 수 있는 장점은 무엇일까?</p>`,11),$=s("ol",null,[s("li",null,[s("p",null,[s("strong",null,"행렬의 거듭제곱 계산이 용이해진다")]),s("p",null,"고유값분해가 되는 행렬을 거듭제곱하면 다음과 같이 나타낼 수 있다."),s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"A"),s("mi",null,"k")]),s("mo",null,"="),s("mi",null,"V"),s("mi",{mathvariant:"normal"},"Λ"),s("msup",null,[s("mi",null,"V"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"⋅"),s("mi",null,"V"),s("mi",{mathvariant:"normal"},"Λ"),s("msup",null,[s("mi",null,"V"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"⋅"),s("mi",null,"V"),s("mi",{mathvariant:"normal"},"Λ"),s("msup",null,[s("mi",null,"V"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"1")])]),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},".")]),s("annotation",{encoding:"application/x-tex"},"A^k = V\\Lambda V^{-1} \\cdot V\\Lambda V^{-1} \\cdot V\\Lambda V^{-1} ... ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.8991079999999999em"}}),s("span",{class:"strut bottom",style:{height:"0.8991079999999999em","vertical-align":"0em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"A"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.413em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03148em"}},"k")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"mord mathrm"},"Λ"),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.41300000000000003em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord scriptstyle uncramped"},[s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"1")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"⋅"),s("span",{class:"mord mathit",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"mord mathrm"},"Λ"),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.41300000000000003em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord scriptstyle uncramped"},[s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"1")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"⋅"),s("span",{class:"mord mathit",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"mord mathrm"},"Λ"),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.41300000000000003em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord scriptstyle uncramped"},[s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"1")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},".")])])])])]),s("p",null,"여기서 $$V^{-1}V$$는 $$I$$로, 나열된 수식에서 소거된다. 따라서, 이를 정리하면"),s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"A"),s("mi",null,"k")]),s("mo",null,"="),s("mi",null,"V"),s("msup",null,[s("mi",{mathvariant:"normal"},"Λ"),s("mi",null,"k")]),s("msup",null,[s("mi",null,"V"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"1")])])]),s("annotation",{encoding:"application/x-tex"},"A^k = V\\Lambda^k V^{-1} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.8991079999999999em"}}),s("span",{class:"strut bottom",style:{height:"0.8991079999999999em","vertical-align":"0em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"A"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.413em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03148em"}},"k")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"Λ"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.413em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03148em"}},"k")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.41300000000000003em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord scriptstyle uncramped"},[s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"1")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])])])])]),s("p",null,"을 얻을 수 있는데, $$\\Lambda^k$$는 대각행렬의 제곱이므로 복잡한 연산 없이 대각성분들을 k승 해주기만 하면 된다.")]),s("li",null,[s("p",null,[s("strong",null,"고유값 분해를 통해 쉽게 Inverse Matrix를 얻을 수 있다")]),a(" A^{-1} = (V\\Lambda V^{-1})^{-1} \\newline V\\Lambda^{-1}V^{-1} ")]),s("li",null,[s("p",null,[s("strong",null,"행렬식을 구하기 쉽다")]),s("p",null,"A의 행렬식을 고유값과 고유벡터의 곱으로 나타내면"),a(" det(A) = det(V\\Lambda V^{-1}) \\newline det(A) = det(V)det(\\Lambda)det(V^{-1}) "),s("p",null,"인데, invese 벡터의 행렬식은 벡터의 행렬식의 약수이다."),s("p",null,"따라서, 결국에는 $$det(A) = det(\\Lambda)$$ 만 남는다."),s("p",null,"그리고, 대각행렬에서의 행렬식은 곧 대각성분들의 총 곱과 같으므로"),s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"d"),s("mi",null,"e"),s("mi",null,"t"),s("mo",null,"("),s("mi",null,"A"),s("mo",null,")"),s("mo",null,"="),s("msubsup",null,[s("mi",{mathvariant:"normal"},"Π"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"n")]),s("msub",null,[s("mi",null,"λ"),s("mrow",null,[s("mi",null,"i")])])]),s("annotation",{encoding:"application/x-tex"},"det(A) = \\Pi_{i=1}^n \\lambda_{i} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mord mathit"},"d"),s("span",{class:"mord mathit"},"e"),s("span",{class:"mord mathit"},"t"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathit"},"A"),s("span",{class:"mclose"},")"),s("span",{class:"mrel"},"="),s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"Π"),s("span",{class:"vlist"},[s("span",{style:{top:"0.247em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord scriptstyle cramped"},[s("span",{class:"mord mathit"},"i"),s("span",{class:"mrel"},"="),s("span",{class:"mord mathrm"},"1")])])]),s("span",{style:{top:"-0.4129999999999999em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathit"},"n")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"λ"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord scriptstyle cramped"},[s("span",{class:"mord mathit"},"i")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])])])])]),s("p",null,"가 성립한다.")]),s("li",null,[s("p",null,[s("strong",null,"trace(대각합)값을 구하기 쉽다")]),s("p",null,"대각합은 대각선상의 성분들을 더하는 것이다."),a(" tr(A) = tr(V\\Lambda V^{-1})$$이고, 대각합의 성질 상, $$tr(V\\Lambda V^{-1}) = tr(\\Lambda VV^{-1})$$ 로도 정리할 수 있다. $$tr(\\Lambda VV^{-1}) = tr(\\Lambda)$$ 이므로, $$tr(A) = tr(\\Lambda)$$이다. 따라서, "),s("p",{i:""},"tr(A) = tr(\\Lambda) = \\Sigma_{i=1}^{n} \\lambda_"),a(" 가 성립한다. 즉, A의 대각합은 고유값의 합과 동일하다는 것이다. "),s("p",null,"rank-deficient는 선형 종속인 행렬임을 파악할 수 있는 요소이다. rank-deficient인 경우, $$\\lambda$$는 0인 고유값을 반드시 갖게 되는 성질이 있다. 직관적으로 생각하면, full rank가 아닌 이상, 백터의 스팬 차원이 하나 줄어든다."),s("p",null,"따라서, 고유벡터를 각 차원 공간에서 스팬하도록 하는 행렬 $$\\Lambda$$도 원본 행렬과 동일한 크기의 대각행렬이 되겠지만, 스팬하지 않는 차원의 대각 성분값은 0이 될 수 밖에 없는 것이다."),s("p",null,"이를 수식으로 증명하면 다음과 같다."),a(" A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 6 \\\\ \\end{bmatrix}, v = \\begin{bmatrix} x\\\\ y\\\\ \\end{bmatrix} \\newline Av = \\lambda v \\newline \\newline \\begin{bmatrix} 1 & 2 \\\\ 3 & 6 \\\\ \\end{bmatrix} * \\begin{bmatrix} x \\\\ y \\\\ \\end{bmatrix} = \\lambda* \\begin{bmatrix} x \\\\ y \\\\ \\end{bmatrix} \\newline \\begin{bmatrix} x + 2y \\\\ 3x + 6y \\\\ \\end{bmatrix} = \\lambda * \\begin{bmatrix} x \\\\ y \\\\ \\end{bmatrix} = \\begin{bmatrix} \\lambda x \\\\ \\lambda y \\\\ \\end{bmatrix} \\newline \\newline \\therefore x + 2y = \\lambda x, 3x+6y = \\lambda y \\newline 2y = (\\lambda -1)x "),s("p",null,"로 정리할 수 있다. 이를 $$3x+6y = \\lambda y$$ 에 대입하면,"),a(" 3x+3(\\lambda - 1)x = \\lambda((\\lambda-1)x/2) \\newline 6\\lambda = (\\lambda^2-\\lambda)x \\newline 6 = (\\lambda -1)x \\newline x= 6/(\\lambda-1) "),s("p",null,"이를 다시 원래 식에 대입하면"),a(" 2y = (\\lambda-1)x \\newline (\\lambda -1)*6/(\\lambda-1) = 6 \\newline \\therefore y = 3 "),s("p",null,"를 구할 수 있다."),s("p",null,"이를 다시 식에 대입하면 첫 번째 방정식에선 다음의 값이 도출된다."),a(" x + 6 = \\lambda x \\newline (\\lambda-1)x = 6 "),s("p",null,"두 번째 방정식에선 다음의 식이 도출된다."),a(" 3x+6*3 = \\lambda*3 \\newline x+6 = \\lambda, x = \\lambda-6 "),s("p",null,"두 번째 방정식에서 얻은 x의 값을 첫 번째 방정식에 대입하면"),a(" 3x =3\\lambda-18 \\newline x = \\lambda-6 "),s("p",null,"x를 앞서 정리한 $$2y = (\\lambda-1)x, y = 3$$에 대입하면"),a(" (\\lambda-1)(\\lambda-6) = 6 \\newline \\lambda-7\\lambda+6 = 6 \\newline \\lambda(\\lambda-7) = 0 "),s("p",null,"위의 식에서 $$\\lambda$$는 0 또는 7의 값을 갖는 것을 확인 할 수 있다.")])],-1),x=s("details",null,[s("summary",null,"rank-deficient란?"),a(" rank는 행렬이 갖는 독립적인 행이나 열의 개수를 의미한다. 정방행렬에서 full rank는 랭크가 n개, n x m 행렬에서 full-row rank는 rank가 n, full-column rank에서 rank는 m이다. rank-deficient는 n x m 행렬에서 rank 값이 min(n,m) 보다 작은 경우를 의미한다. 즉, 행렬의 벡터가 독립적이지 않아, 행렬의 차원 수 만큼 벡터가 표현될 수 없는 상태를 의미한다. rank-deficient는 따라서 선형 종속인 상태를 의미하기도 하므로, rank-deficient인 행렬의 행렬식은 0이 될 수밖에 없다. ")],-1);function f(z,_,V,v,A,k){return t(),l("div",null,[i,r,p,o,a(" Av = \\lambda v \\newline \\newline Av - \\lambda v = 0 \\newline (A- \\lambda I)v = 0 \\newline v \\neq 0, \\space (A-\\lambda I) = 0 \\newline eigen\\space vector = v \\forall N(A - \\lambda I) "),c,d,u,h,a(" \\lambda$$ 값은 여러 개 존재할 수 있으며, 대각행렬로 lambda 값들을 표현할 수 있다. 대각행렬로 나타낸 람다값은 대문자 람다 $$\\Lambda$$로 나타낸다. $$AV = V \\Lambda$$ 로 나타낼 수 있는데, 고윳값을 갖는 모든 벡터는 Invertable 하다는 성질을 활용해 식을 정리하면 "),b,a(" 로 정리할 수 있다. 이번에는 $$\\Lambda$$만 남도록 식을 정리해보자. 마찬가지로, V의 invertable한 성질을 활용하도록 한다. "),g,a(" 다음은 고유값 분해와 관련된 특성들이다. 1. **$$A^T$$의 고유값은 A의 고유값과 같다.** 2. **A가 orthogonal matrix이면, $$\\lambda = \\pm 1$$ 이다.** "),y,$,x])}const T=e(m,[["render",f]]);export{L as __pageData,T as default};
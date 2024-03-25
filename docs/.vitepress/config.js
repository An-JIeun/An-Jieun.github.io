import vue from "@vitejs/plugin-vue";
import { onBeforeMount, onMounted } from "vue";
// https://vitepress.dev/reference/site-config
export default {
  async transformPageData(pageData) {
    pageData.frontmatter.head ??= [];

    let newheader = getJSONLD(pageData);
    pageData.frontmatter.head.push([
      "script",
      { type: "application/ld+json" },
      `${newheader}`,
    ]);
    getOGTag(pageData);
  },

  title: "전자두뇌만들기",
  lastUpdated: true,
  outline:[2,3],
  // markdown-it-footnote
  markdown: {
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(require("markdown-it-katex"));
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-mathjax3"))
    },
    plugins: ["markdown-it-html5-embed"],
  },
  lang: "ko-KR",
  search:{provider:"local"},
  build: {outDir:"/theme/"},
  head:[["link", { rel: "icon", href: "../static/icon/logo.svg" }]],
  description: "ALL about making artificial intelligence",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    footer: {
      // message: 'Docs are released under the MIT License.',
      copyright: "Copyright © 2024 전자두뇌만들기.",
    },
    logo:"/static/icon/logo.svg",
    sidebar: [
      {
        text: 'MATH',
        collapsed : false,
        link:'/contents/MATH/math-main.html',
        items: [
          { text: '선형대수 - 기초', 
          collapsed : true,
          items:[
            {text : "1. 선형대수란?", link: "/contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-1.html"},
            {text : "2. 벡터, 행렬 기본개념?", link: "/contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-2.html"},
            {text : "3. 텐서 연산", link: "/contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-3.html"},
            {text : "4. 행렬성질", link: "/contents/MATH/linear-algebra-basic/linear-algebra-basic-chap-4.html"},
          ]
        },
          {text : "선형대수 - 응용",
          collapsed : true,
          items : [
            {text : "1. 고유값과 고유벡터", link: "/contents/MATH/linear-algebra-application/intermediate-chap-1.html"},
            {text : "2. 특이값과 특이값분해", link: "/contents/MATH/linear-algebra-application/intermediate-chap-2.html"},
            {text : "3. PCA (TBD)", link: "/contents/MATH/linear-algebra-application/intermediate-chap-3.html"},
            {text : "4. 선형회귀와 다중회귀", link: "/contents/MATH/linear-algebra-application/intermediate-chap-4.html"},
            {text : "5. 시그모이드와 로지스틱", link: "/contents/MATH/linear-algebra-application/intermediate-chap-5.html"}
          ]},
          { text: 'Automatic Differentiate', link: '/contents/MATH/automatic-differentiate.html' }]
        }   
      ,
      {
        text: 'LLM',
        collapsed : false,
        link:'/contents/LLM/llm-main.html',
        items: [
          { 
            text: 'Fine-Tuning',
            collapsed: true,
            items:[
              {text : "Fine-Tuning이란?", link: "/contents/LLM/finetuning/README.html"},
            ] },
          { 
            text: 'LangChain', 
            collapsed: true,
            items : [
              {text: "LangChain이란?", link: "/contents/LLM/langchain/README.html"},
            ]
            }
        ]
      },
      {
        text: 'Knowledge Graph',
        collapsed : false,
        items: [
          { text: 'Ontology',
            collapsed : true,
            items:[
              {text: "1. 온톨로지 설계 과정", link : "/contents/KG/ontology/ontology-chap-1.html"},
            ] },
          { text: 'Knowlege-Grpah',
            collapsed : true,
            items:[
              {text : "1. 지식그래프란?", link: "/contents/KG/knowledge-graph/kg-chap-1.html"},
            ] }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/An-JIeun/an-jieun.github.io' },
      {icon : 'x', link: "https://twitter.com/lempicka_in_"},
  
    ]
  }
}

function getJSONLD(pageData) {
  return `{
  "@context":"http://schema.org",
  "@type":"BloPosting",
  "mainEntityOfPage" : {
    "@type" : "WebPage",
    "@id" : "https://an-jieun.github.io/contents${pageData.frontmatter.url}"
  },
  "name":"${pageData.frontmatter.title}",
  "url" : "https://an-jieun.github.io/contents/${pageData.frontmatter.url}",
  "description":"${pageData.frontmatter.description}",
  "keywords" : ${pageData.frontmatter.keywords},
  "version":"1.0",
  "inLanguage":"ko",
  "technicalAudience" : "developer",
  "proficiencyLevel" : "beginner",
  "author" : {
    "@type" : "Person",
    "name" : "Jieun",
    "email" : "aje20010827@gmail.com"
    
    }
  },
  "dependencies" : "Python",
  "proficiencyLevel" : "beginner",
  "technicalAudience" : "developer, DBA, Web Developer"
}`;
}

function getOGTag(pageData) {
  pageData.frontmatter.head.push([
    "meta",
    { property: "og:title", content: pageData.frontmatter.title },
  ]);
  pageData.frontmatter.head.push([
    "meta",
    { property: "og:description", content: pageData.frontmatter.description },
  ]);
  pageData.frontmatter.head.push([
    "meta",
    { property: "og:url", content: pageData.frontmatter.url },
  ]);
  pageData.frontmatter.head.push([
    "meta",
    { property: "og:type", content: "website" },
  ]);
  pageData.frontmatter.head.push([
    "meta",
    { property: "og:site_name", content: "전자두뇌만들기" },
  ]);
  pageData.frontmatter.head.push([
    "meta",
    { property: "og:locale", content: "ko_KR" },
  ]);
  const metaData = {
    "@context": "http://schema.org",
    "@type": "TechArticle",
    name: pageData.frontmatter.title,
    url: `https://an-jieun.github.io/contents/${pageData.frontmatter.url}`,
    description: pageData.frontmatter.description,
    keywords: pageData.frontmatter.keywords, // 배열을 쉼표로 구분된 문자열로 변환
    version: "1.0",
    inLanguage: "ko",
    technicalAudience: "developer, DBA, Web Developer",
    proficiencyLevel: "beginner",
    author: "Jieun",
    dependencies: "Python", // 추가 정보에 따라 수정 가능
  };

  const metaTags = Object.entries(metaData).map(([key, value]) => {
    // 특수 문자를 이스케이프 처리하여 메타 태그 생성
    const content =
      typeof value === "string" ? value.replace(/"/g, "&quot;") : value;
    pageData.frontmatter.head.push([
      "meta",
      { property: key, content: content },
    ]);
  });
}
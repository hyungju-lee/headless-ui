import{d as f,f as C,l as _,t as r,j as l,q as a,u as c,A as i,E as p,O as m,P as u}from"./vue.esm-bundler-Uk5hQ1qI.js";import{a3 as k,a4 as d}from"./headless-ui-vue3.es-B8-5mxcE.js";import{_ as O}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./iframe-DwDBHqwe.js";import"../sb-preview/runtime.js";const v=f({name:"CustomIcon"});function j(H,o,I,s,n,t){return C(),_("div",null,"커스텀 아이콘")}const x=O(v,[["render",j]]);v.__docgenInfo={displayName:"CustomIcon",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-html-render/CustomIcon.vue"]};const $='<span style="color: white">html tag render</span>',y=f({__name:"h-html-render-case1",setup(H){const o={html:'<button type="button">버튼</button>',on:n=>({click:()=>{console.log(n)}})},s={html:`<button type="button"><span style="color: #fff; vertical-align: middle">버튼 내용</span>${k(x,{attrs:{style:"vertical-align: middle;"}}).$el.outerHTML}</button>`,on:n=>({click:()=>{console.log(n)}})};return(n,t)=>(C(),_("div",null,[r(c(d),a({tag:"p"},{style:{backgroundColor:"blue"}}),{default:l(()=>[m(u($))]),_:1},16),t[0]||(t[0]=i("br",null,null,-1)),r(c(d),a({tag:"div"},p(o.on("test"))),{default:l(()=>[m(u(o.html),1)]),_:1},16),t[1]||(t[1]=i("br",null,null,-1)),r(c(d),a({tag:"div"},p(s.on("test2"))),{default:l(()=>[m(u(s.html),1)]),_:1},16)]))}});y.__docgenInfo={exportName:"default",displayName:"h-html-render-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-html-render/h-html-render-case1.vue"]};const R=`<script setup lang="ts">
import {HHtmlRender, makeVueInstance} from "headless-ui/vue3";
import CustomIcon from "./CustomIcon.vue";

const html = \`<span style="color: white">html tag render</span>\`;

const htmlObj = {
  html: \`<button type="button">버튼</button>\`,
  on: (arg: unknown) => ({
    click: () => {
      console.log(arg);
    },
  }),
};

const documentIconInstance = makeVueInstance(CustomIcon, {
  attrs: {
    style: "vertical-align: middle;",
  },
});

const vueCustomComponentObj = {
  html: \`<button type="button"><span style="color: #fff; vertical-align: middle">버튼 내용</span>\${documentIconInstance.$el.outerHTML}</button>\`,
  on: (arg: unknown) => ({
    click: () => {
      console.log(arg);
    },
  }),
};
<\/script>

<template>
  <div>
    <HHtmlRender tag="p" v-bind="{ style: { backgroundColor: 'blue' } }">
      {{ html }}
    </HHtmlRender>

    <br />

    <HHtmlRender tag="div" v-on="htmlObj.on('test')">
      {{ htmlObj.html }}
    </HHtmlRender>

    <br />

    <HHtmlRender tag="div" v-on="vueCustomComponentObj.on('test2')">
      {{ vueCustomComponentObj.html }}
    </HHtmlRender>
  </div>
</template>

<style scoped lang="scss">

</style>
`,B={title:"headless-ui/h-html-render",component:y,parameters:{docs:{description:{component:"HTML을 렌더링하는 컴포넌트입니다."},source:{code:R}}},argTypes:{}},e={};var h,g,b;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(g=e.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const D=["Case1"];export{e as Case1,D as __namedExportsOrder,B as default};

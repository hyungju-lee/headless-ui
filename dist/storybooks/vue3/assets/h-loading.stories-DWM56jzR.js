import{d,g as p,u,f as l}from"./vue.esm-bundler-CYoyDZR-.js";import{a7 as f,a8 as y}from"./headless-ui-vue3.es-C9Tx01VJ.js";import"./iframe-D9T7rBXf.js";import"../sb-preview/runtime.js";const m=d({__name:"h-loading-case1",setup(o){return(_,h)=>(l(),p(u(f),{"stroke-color":"#f00",style:{position:"relative"}}))}});m.__docgenInfo={exportName:"default",displayName:"h-loading-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-loading/h-loading-case1.vue"]};const C=`<template>
  <HLoading stroke-color="#f00" style="position: relative" />
</template>

<script setup lang="ts">
import {HLoading} from "headless-ui/vue3";
<\/script>

<style scoped></style>
`,g=d({__name:"h-loading-case2",setup(o){return(_,h)=>(l(),p(u(y),{"background-color":"#f00"}))}});g.__docgenInfo={exportName:"default",displayName:"h-loading-case2",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-loading/h-loading-case2.vue"]};const H=`<template>
  <HThreeDotLoading background-color="#f00" />
</template>

<script setup lang="ts">
import {HThreeDotLoading} from "headless-ui/vue3";
<\/script>

<style scoped></style>
`,x={title:"headless-ui/h-loading",component:m,parameters:{docs:{description:{component:"로딩 컴포넌트입니다."},source:{code:C}}},argTypes:{}},e={},s={render:o=>({components:{HLoadingCase2:g},setup(){return{args:o}},template:'<HLoadingCase2 v-bind="args" />'}),parameters:{docs:{description:{component:"로딩 컴포넌트입니다."},source:{code:H}}}};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var n,c,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HLoadingCase2
    },
    setup() {
      return {
        args
      };
    },
    template: '<HLoadingCase2 v-bind="args" />'
  }),
  parameters: {
    docs: {
      description: {
        component: '로딩 컴포넌트입니다.'
      },
      source: {
        code: HLoadingCase2Source
      }
    }
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const S=["Case1","Case2"];export{e as Case1,s as Case2,S as __namedExportsOrder,x as default};

import{d as c,l as d,t as p,j as g,n as u,u as a,f as m,A as f}from"./vue.esm-bundler-CYoyDZR-.js";import{s as y,o as h}from"./headless-ui-vue3.es-CWy2mixA.js";import"./iframe-BQ7Vut-X.js";import"../sb-preview/runtime.js";const o=c({__name:"h-single-drag-x-area-case1",setup(A){const{scrollArea:l,dragAreaXStyle:i}=y({minWidth:"80px",backgroundColor:"#ccc"});return(_,r)=>(m(),d("div",{ref_key:"scrollArea",ref:l,style:{position:"relative",width:"100%",height:"300px","background-color":"#ddd"}},[p(a(h),{"button-position":"left","button-background-color":"#f5f5f5",style:u(a(i))},{default:g(()=>r[0]||(r[0]=[f("p",{style:{"padding-left":"30px"}},"드래그 영역",-1)])),_:1},8,["style"])],512))}});o.__docgenInfo={exportName:"default",displayName:"h-single-drag-x-area-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-single-drag-x-area/h-single-drag-x-area-case1.vue"]};const x=`<script setup lang="ts">
import {HSingleDragXArea, useHSingleDragXArea} from "headless-ui/vue3";

const { scrollArea, dragAreaXStyle } = useHSingleDragXArea({
  minWidth: "80px",
  backgroundColor: "#ccc",
});
<\/script>

<template>
  <div
    ref="scrollArea"
    style="
      position: relative;
      width: 100%;
      height: 300px;
      background-color: #ddd;
    "
  >
    <HSingleDragXArea
      button-position="left"
      button-background-color="#f5f5f5"
      :style="dragAreaXStyle"
    >
      <p style="padding-left: 30px">드래그 영역</p>
    </HSingleDragXArea>
  </div>
</template>

<style scoped></style>
`,v={title:"headless-ui/h-single-drag-x-area",component:o,parameters:{docs:{description:{component:"X축으로만 드래그할 수 있는 영역 컴포넌트입니다."},source:{code:x}}},argTypes:{}},e={};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const C=["Case1"];export{e as Case1,C as __namedExportsOrder,v as default};

import{d as x,r as p,l as y,t as s,j as i,u as n,f as _,A as t,P as o}from"./vue.esm-bundler-Uk5hQ1qI.js";import{s as u,D as m,T as S,t as g}from"./headless-ui-vue3.es-B-esj-Bt.js";import"./iframe-BwkLOg-O.js";import"../sb-preview/runtime.js";const H={style:{"font-size":"14px"}},b={style:{"font-size":"14px"}},C={style:{"font-size":"14px"}},P={style:{"font-size":"14px"}},v=x({__name:"h-slider-single-case1",setup(z){const r=p(440),d=p(240);return(V,e)=>(_(),y("div",null,[s(n(g),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l)},{default:i(l=>[s(n(u),null,{default:i(()=>[s(n(m)),s(n(S))]),_:1}),t("span",H,o(l.thumbPosition),1),e[2]||(e[2]=t("br",null,null,-1)),t("span",b,o(r.value),1)]),_:1},8,["modelValue"]),s(n(g),{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=l=>d.value=l)},{default:i(l=>[s(n(u),{style:{width:"400px",height:"40px"}},{default:i(()=>[s(n(m),{style:{height:"8px"}}),s(n(S),{style:{width:"15px",height:"15px"}})]),_:1}),t("span",C,o(l.thumbPosition),1),e[3]||(e[3]=t("br",null,null,-1)),t("span",P,o(d.value),1)]),_:1},8,["modelValue"])]))}});v.__docgenInfo={exportName:"default",displayName:"h-slider-single-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-slider-single/h-slider-single-case1.vue"]};const T=`<template>
  <div>
    <HSliderSingleArea #default="slotProps" v-model="value1">
      <HSliderSingleContainer>
        <HSliderSingleTrack/>
        <HSliderSingleThumb/>
      </HSliderSingleContainer>
      <span style="font-size: 14px">{{ slotProps.thumbPosition }}</span>
      <br/>
      <span style="font-size: 14px">{{ value1 }}</span>
    </HSliderSingleArea>

    <HSliderSingleArea #default="slotProps" v-model="value2">
      <HSliderSingleContainer style="width: 400px; height: 40px">
        <HSliderSingleTrack style="height: 8px"/>
        <HSliderSingleThumb style="width: 15px; height: 15px"/>
      </HSliderSingleContainer>
      <span style="font-size: 14px">{{ slotProps.thumbPosition }}</span>
      <br/>
      <span style="font-size: 14px">{{ value2 }}</span>
    </HSliderSingleArea>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {HSliderSingleArea, HSliderSingleThumb, HSliderSingleTrack, HSliderSingleContainer} from 'headless-ui/vue3'

const value1 = ref(440);
const value2 = ref(240);
<\/script>

<style scoped></style>
`,B={title:"headless-ui/h-slider-single",component:v,parameters:{docs:{description:{component:"단일 선택 슬라이더 컴포넌트입니다."},source:{code:T}}},argTypes:{}},a={};var h,c,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const D=["Case1"];export{a as Case1,D as __namedExportsOrder,B as default};

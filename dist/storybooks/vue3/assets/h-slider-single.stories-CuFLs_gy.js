import{d as v,r as p,l as y,t as s,j as i,u as n,f as _,A as t,P as o}from"./vue.esm-bundler-Cp0jskqx.js";import{x as u,y as m,A as g,z as S}from"./headless-ui-vue3.es-B45te3_K.js";const H={style:{"font-size":"14px"}},b={style:{"font-size":"14px"}},C={style:{"font-size":"14px"}},z={style:{"font-size":"14px"}},x=v({__name:"h-slider-single-case1",setup(A){const r=p(440),d=p(240);return(V,e)=>(_(),y("div",null,[s(n(S),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l)},{default:i(l=>[s(n(u),null,{default:i(()=>[s(n(m)),s(n(g))]),_:1}),t("span",H,o(l.thumbPosition),1),e[2]||(e[2]=t("br",null,null,-1)),t("span",b,o(r.value),1)]),_:1},8,["modelValue"]),s(n(S),{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=l=>d.value=l)},{default:i(l=>[s(n(u),{style:{width:"400px",height:"40px"}},{default:i(()=>[s(n(m),{style:{height:"8px"}}),s(n(g),{style:{width:"15px",height:"15px"}})]),_:1}),t("span",C,o(l.thumbPosition),1),e[3]||(e[3]=t("br",null,null,-1)),t("span",z,o(d.value),1)]),_:1},8,["modelValue"])]))}});x.__docgenInfo={exportName:"default",displayName:"h-slider-single-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-slider-single/h-slider-single-case1.vue"]};const P=`<template>
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
`,w={title:"headless-ui/h-slider-single",component:x,parameters:{docs:{description:{component:"단일 선택 슬라이더 컴포넌트입니다."},source:{code:P}}},argTypes:{}},a={};var c,h,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const N=["Case1"];export{a as Case1,N as __namedExportsOrder,w as default};

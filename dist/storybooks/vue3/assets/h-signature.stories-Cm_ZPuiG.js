import{d as p,r as g,w as f,g as V,j as n,u as s,f as S,t as o,O as u}from"./vue.esm-bundler-Cp0jskqx.js";import{k as _,I as v,L as H}from"./headless-ui-vue3.es-CZCwgrpb.js";const m=p({__name:"h-signature-case1",setup(B){const a=g("");return f(a,(r,e)=>{console.log("v-model 동작 확인용",r,e)}),(r,e)=>(S(),V(s(H),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=c=>a.value=c)},{default:n(()=>[o(s(_),null,{default:n(()=>e[1]||(e[1]=[u(" 초기화 ")])),_:1}),o(s(v),null,{default:n(()=>e[2]||(e[2]=[u(" 되돌리기 ")])),_:1})]),_:1},8,["modelValue"]))}});m.__docgenInfo={exportName:"default",displayName:"h-signature-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-signature/h-signature-case1.vue"]};const h=`<template>
  <HSignatureArea v-model="signatureValue">
    <HSignatureClearButton> 초기화 </HSignatureClearButton>
    <HSignatureUndoButton> 되돌리기 </HSignatureUndoButton>
  </HSignatureArea>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import {HSignatureArea, HSignatureUndoButton, HSignatureClearButton} from 'headless-ui/vue3'

const signatureValue = ref<string>("");

// v-model 동작 확인용
watch(signatureValue, (newValue, oldValue) => {
  console.log("v-model 동작 확인용", newValue, oldValue);
});
<\/script>

<style scoped></style>
`,x={title:"headless-ui/h-signature",component:m,parameters:{docs:{description:{component:"서명 컴포넌트입니다."},source:{code:h}}},argTypes:{}},t={};var l,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const y=["Case1"];export{t as Case1,y as __namedExportsOrder,x as default};

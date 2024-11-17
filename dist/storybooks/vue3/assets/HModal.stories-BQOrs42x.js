import{d as k,r as M,l as O,t,j as a,u as r,F as v,f as _,O as l,A as u}from"./vue.esm-bundler-Uk5hQ1qI.js";import{H as B,R as y,P as w}from"./headless-ui-vue3.es-6gfQYSFZ.js";import"./iframe-DH1TVBFR.js";import"../sb-preview/runtime.js";const R=["onClick"],m=k({__name:"HModalCase1",setup(h){const s=M(null),C=e=>{console.log("onClickOk"),e()},g=async()=>{console.log("모달 열기 전 실행"),await new Promise(e=>setTimeout(e,500))},H=()=>{console.log("모달 열린 후 실행")},c=async()=>{console.log("Esc 닫기 전 실행"),await new Promise(e=>setTimeout(e,500))},f=()=>{console.log("Esc 닫은 후 실행")};return(e,o)=>(_(),O(v,null,[t(r(B),{target:s.value,"before-func":g,"after-func":H},{default:a(()=>o[0]||(o[0]=[l(" 모달 열기 ")])),_:1},8,["target"]),t(r(w),{ref_key:"HModalRef",ref:s,backdrop:"rgba(0, 0, 0, 0.2)","esc-before-func":c,"esc-after-func":f},{default:a(({closeFunc:b})=>[u("div",null,[o[2]||(o[2]=l(" 내용... ")),t(r(y),{target:s.value,"before-func":c,"after-func":f},{default:a(()=>o[1]||(o[1]=[l("닫기 ")])),_:1},8,["target"]),u("button",{type:"button",onClick:()=>C(b)},"확인",8,R)])]),_:1},512)],64))}});m.__docgenInfo={exportName:"default",displayName:"HModalCase1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-modal/HModalCase1.vue"]};const F=`<script setup lang="ts">
import {ref} from 'vue';
import {HModal, HModalOpenButton, HModalCloseButton} from "headless-ui/vue3";

const HModalRef = ref<any>(null);

const onClickOk = (closeFunc: () => void) => {
  console.log('onClickOk');
  closeFunc();
};

const beforeOpen = async () => {
  console.log('모달 열기 전 실행');
  await new Promise((resolve) => setTimeout(resolve, 500));
};

const afterOpen = () => {
  console.log('모달 열린 후 실행');
};

const escBeforeClose = async () => {
  console.log('Esc 닫기 전 실행');
  await new Promise((resolve) => setTimeout(resolve, 500));
};

const escAfterClose = () => {
  console.log('Esc 닫은 후 실행');
};
<\/script>

<template>
  <HModalOpenButton :target="HModalRef" :before-func="beforeOpen" :after-func="afterOpen">
    모달 열기
  </HModalOpenButton>
  <HModal
      ref="HModalRef"
      backdrop="rgba(0, 0, 0, 0.2)"
      :esc-before-func="escBeforeClose"
      :esc-after-func="escAfterClose"
      #default="{ closeFunc }"
  >
    <div>
      내용...
      <HModalCloseButton :target="HModalRef" :before-func="escBeforeClose" :after-func="escAfterClose">닫기
      </HModalCloseButton>
      <button type="button" @click="() => onClickOk(closeFunc)">확인</button>
    </div>
  </HModal>
</template>
`,A={title:"headless-ui/h-modal",component:m,parameters:{docs:{description:{component:"모달 컴포넌트입니다."},source:{code:F}}},argTypes:{}},n={};var d,i,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const N=["Case1"];export{n as Case1,N as __namedExportsOrder,A as default};

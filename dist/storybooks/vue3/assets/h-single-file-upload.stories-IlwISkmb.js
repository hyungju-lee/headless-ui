import{d as F,r as m,w as S,g as f,j as o,u as l,f as U,t as n,O as i}from"./vue.esm-bundler-Cp0jskqx.js";import{i as H,f as c,v,a as A,g as N,l as V,r as _,p as B,j as w}from"./headless-ui-vue3.es-DDUAhZL-.js";const u=F({__name:"h-single-file-upload-case1",setup(x){const d=m(null);return S(d,(s,e)=>{console.log("v-model 동작 확인용",s,e)}),(s,e)=>(U(),f(l(w),{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=g=>d.value=g)},{default:o(()=>[n(l(H),null,{default:o(()=>e[1]||(e[1]=[i(" 파일 업로드")])),_:1}),n(l(c),null,{default:o(()=>e[2]||(e[2]=[i(" 파일을 업로드해주세요. ")])),_:1}),n(l(v),null,{default:o(()=>e[3]||(e[3]=[i(" 파일 양식이 잘못되었습니다. ")])),_:1}),n(l(_),null,{default:o(()=>[n(l(A)),n(l(N)),n(l(V),null,{default:o(()=>e[4]||(e[4]=[i(" X ")])),_:1})]),_:1}),n(l(B),null,{default:o(()=>e[5]||(e[5]=[i(" 파일 첨부하기 ")])),_:1})]),_:1},8,["modelValue"]))}});u.__docgenInfo={exportName:"default",displayName:"h-single-file-upload-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-single-file-upload/h-single-file-upload-case1.vue"]};const E=`<template>
  <HSingleFileUploadArea v-model="uploadedFile">
    <HSingleFileUploadTitle> 파일 업로드</HSingleFileUploadTitle>
    <HSingleFileUploadNoFileErrorMsg>
      파일을 업로드해주세요.
    </HSingleFileUploadNoFileErrorMsg>
    <HSingleFileUploadErrorMsg>
      파일 양식이 잘못되었습니다.
    </HSingleFileUploadErrorMsg>
    <HSingleFileUploadedFileArea>
      <HSingleFileUploadedFileName/>
      <HSingleFileUploadedFileSize/>
      <HSingleFileUploadedFileDeleteButton>
        X
      </HSingleFileUploadedFileDeleteButton>
    </HSingleFileUploadedFileArea>
    <HSingleFileUploadedFileAddButton>
      파일 첨부하기
    </HSingleFileUploadedFileAddButton>
  </HSingleFileUploadArea>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {
  HSingleFileUploadArea,
  HSingleFileUploadedFileAddButton,
  HSingleFileUploadTitle,
  HSingleFileUploadedFileArea,
  HSingleFileUploadedFileDeleteButton,
  HSingleFileUploadedFileName,
  HSingleFileUploadedFileSize,
  HSingleFileUploadErrorMsg,
  HSingleFileUploadNoFileErrorMsg,
} from 'headless-ui/vue3'

const uploadedFile = ref(null);

// v-model 잘 동작하는지 확인
watch(uploadedFile, (newValue, oldValue) => {
  console.log("v-model 동작 확인용", newValue, oldValue);
});
<\/script>

<style scoped></style>
`,C={title:"headless-ui/h-single-file-upload",component:u,parameters:{docs:{description:{component:"단일 파일 업로드 컴포넌트입니다."},source:{code:E}}},argTypes:{}},a={};var t,r,p;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(p=(r=a.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const T=["Case1"];export{a as Case1,T as __namedExportsOrder,C as default};

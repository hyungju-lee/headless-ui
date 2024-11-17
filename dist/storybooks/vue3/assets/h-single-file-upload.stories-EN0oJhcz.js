import{d as H,r as U,w as v,g as A,j as i,u as l,f as b,O as n,P as t,A as a,t as o}from"./vue.esm-bundler-Uk5hQ1qI.js";import{p as N,d as V,y,e as B,f as E,j as w,v as x,A as M,k as C}from"./headless-ui-vue3.es-B8-5mxcE.js";import"./iframe-DwDBHqwe.js";import"../sb-preview/runtime.js";const m=H({__name:"h-single-file-upload-case1",setup(k){const r=U(null);return v(r,(u,e)=>{console.log("v-model 동작 확인용",u,e)}),(u,e)=>(b(),A(l(C),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s)},{default:i(({isActive:s,isHover:S,isError:f})=>[n(t(s?"활성화됨":"비활성화됨")+" ",1),e[6]||(e[6]=a("br",null,null,-1)),n(" "+t(S?"마우스 올라감":"마우스 내려감")+" ",1),e[7]||(e[7]=a("br",null,null,-1)),n(" "+t(f?"에러":"에러 아님")+" ",1),e[8]||(e[8]=a("br",null,null,-1)),e[9]||(e[9]=a("br",null,null,-1)),e[10]||(e[10]=a("br",null,null,-1)),o(l(N),null,{default:i(()=>e[1]||(e[1]=[n(" 파일 업로드")])),_:1}),o(l(V),null,{default:i(()=>e[2]||(e[2]=[n(" 파일을 업로드해주세요. ")])),_:1}),o(l(y),null,{default:i(()=>e[3]||(e[3]=[n(" 파일 양식이 잘못되었습니다. ")])),_:1}),o(l(x),null,{default:i(()=>[o(l(B)),o(l(E)),o(l(w),null,{default:i(()=>e[4]||(e[4]=[n(" X ")])),_:1})]),_:1}),o(l(M),null,{default:i(()=>e[5]||(e[5]=[n(" 파일 첨부하기 ")])),_:1})]),_:1},8,["modelValue"]))}});m.__docgenInfo={exportName:"default",displayName:"h-single-file-upload-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-single-file-upload/h-single-file-upload-case1.vue"]};const T=`<template>
  <HSingleFileUploadArea v-model="uploadedFile" #default="{isActive, isHover, isError}">
    {{ isActive ? "활성화됨" : "비활성화됨" }} <br>
    {{ isHover ? "마우스 올라감" : "마우스 내려감" }} <br>
    {{ isError ? "에러" : "에러 아님" }} <br>
    <br>
    <br>
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
`,z={title:"headless-ui/h-single-file-upload",component:m,parameters:{docs:{description:{component:"단일 파일 업로드 컴포넌트입니다."},source:{code:T}}},argTypes:{}},d={};var p,g,F;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(F=(g=d.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const O=["Case1"];export{d as Case1,O as __namedExportsOrder,z as default};

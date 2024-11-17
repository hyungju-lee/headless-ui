import{d as N,r as z,w as v,l as S,A as l,P as n,t,j as s,u as i,f as w,O as u}from"./vue.esm-bundler-CYoyDZR-.js";import{_ as y,S as U,E as _,b as g}from"./headless-ui-vue3.es-CWy2mixA.js";import"./iframe-BQ7Vut-X.js";import"../sb-preview/runtime.js";const k={style:{"font-size":"14px"}},C={style:{"font-size":"14px"}},B=["onClick"],E={style:{"font-size":"14px"}},A={style:{"font-size":"14px"}},I=["onClick"],V=N({__name:"h-file-upload-case1",setup(D){const a=z([]),p=z([]);v(a,d=>{console.log("files change",d)},{immediate:!0,deep:!0}),v(p,d=>{console.log("testFiles change",d)},{immediate:!0,deep:!0});const F=()=>{alert("파일 갯수 초과")},x=()=>{alert("파일 총용량 초과")};return(d,e)=>(w(),S("div",null,[e[4]||(e[4]=l("h1",{style:{"font-size":"18px"}},"파일 업로드 - 멀티",-1)),l("p",null,n(a.value),1),t(i(g),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),multiple:!0,"max-files":5,"max-size":10*1024*1024,onExceedFileNum:F,onExceedFileSize:x},{default:s(({isDragOver:o})=>[u(n(o?"드래그오버":"")+" ",1),t(i(y),null,{default:s(()=>e[2]||(e[2]=[u("파일 업로드")])),_:1}),t(i(U),null,{default:s(()=>[t(i(_),null,{default:s(({filename:m,filesize:f,removeFileFunc:c})=>[l("span",k,n(m),1),l("span",C,n(f),1),l("button",{type:"button",onClick:c},"삭제",8,B)]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[5]||(e[5]=l("div",{style:{height:"100px"}},null,-1)),e[6]||(e[6]=l("h1",{style:{"font-size":"18px"}},"파일 업로드 - 싱글",-1)),l("p",null,n(p.value),1),t(i(g),{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=o=>p.value=o),multiple:!1,"max-files":1,"max-size":5*1024*1024,onExceedFileNum:F,onExceedFileSize:x},{default:s(({isDragOver:o})=>[u(n(o?"드래그오버":"")+" ",1),t(i(y),null,{default:s(()=>e[3]||(e[3]=[u("파일 업로드")])),_:1}),t(i(U),null,{default:s(()=>[t(i(_),null,{default:s(({filename:m,filesize:f,removeFileFunc:c})=>[l("span",E,n(m),1),l("span",A,n(f),1),l("button",{type:"button",onClick:c},"삭제",8,I)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});V.__docgenInfo={exportName:"default",displayName:"h-file-upload-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-file-upload/h-file-upload-case1.vue"]};const O=`<script setup lang="ts">
import {ref, watch} from "vue";
import {HFileUploadArea, HFileUploadButton, HFileUploadFileItem, HFileUploadFileList} from "headless-ui/vue3";

const files = ref([]);
const testFiles = ref([]);

watch(
    files,
    (newValue) => {
      console.log("files change", newValue);
    },
    {immediate: true, deep: true}
);
watch(
    testFiles,
    (newValue) => {
      console.log("testFiles change", newValue);
    },
    {immediate: true, deep: true}
);

const exceedFileNum = () => {
  alert("파일 갯수 초과");
};

const exceedFileSize = () => {
  alert("파일 총용량 초과");
};
<\/script>

<template>
  <div>
    <h1 style="font-size: 18px">파일 업로드 - 멀티</h1>
    <p>{{ files }}</p>
    <HFileUploadArea
        #default="{isDragOver}"
        v-model="files"
        :multiple="true"
        :max-files="5"
        :max-size="10 * 1024 * 1024"
        @exceed-file-num="exceedFileNum"
        @exceed-file-size="exceedFileSize"
    >
      {{ isDragOver ? '드래그오버' : '' }}
      <HFileUploadButton>파일 업로드</HFileUploadButton>
      <HFileUploadFileList>
        <HFileUploadFileItem>
          <template #default="{ filename, filesize, removeFileFunc }">
            <span style="font-size: 14px">{{ filename }}</span>
            <span style="font-size: 14px">{{ filesize }}</span>
            <button type="button" @click="removeFileFunc">삭제</button>
          </template>
        </HFileUploadFileItem>
      </HFileUploadFileList>
    </HFileUploadArea>

    <div style="height: 100px"></div>

    <h1 style="font-size: 18px">파일 업로드 - 싱글</h1>
    <p>{{ testFiles }}</p>
    <HFileUploadArea
        #default="{isDragOver}"
        v-model="testFiles"
        :multiple="false"
        :max-files="1"
        :max-size="5 * 1024 * 1024"
        @exceed-file-num="exceedFileNum"
        @exceed-file-size="exceedFileSize"
    >
      {{ isDragOver ? '드래그오버' : '' }}
      <HFileUploadButton>파일 업로드</HFileUploadButton>
      <HFileUploadFileList>
        <HFileUploadFileItem>
          <template #default="{ filename, filesize, removeFileFunc }">
            <span style="font-size: 14px">{{ filename }}</span>
            <span style="font-size: 14px">{{ filesize }}</span>
            <button type="button" @click="removeFileFunc">삭제</button>
          </template>
        </HFileUploadFileItem>
      </HFileUploadFileList>
    </HFileUploadArea>
  </div>
</template>

<style scoped lang="scss">

</style>
`,q={title:"headless-ui/h-file-upload",component:V,parameters:{docs:{description:{component:"파일 업로드 컴포넌트입니다."},source:{code:O}}},argTypes:{}},r={};var h,H,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(H=r.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};const G=["Case1"];export{r as Case1,G as __namedExportsOrder,q as default};

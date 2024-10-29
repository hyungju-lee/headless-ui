import{d as V,r as F,w as x,l as N,A as l,P as o,t as n,j as t,u as s,f as w,O as z}from"./vue.esm-bundler-Cp0jskqx.js";import{b as y,E as U,_ as v,A as _}from"./headless-ui-vue3.es-EJ88DszW.js";const k={style:{"font-size":"14px"}},C={style:{"font-size":"14px"}},S=["onClick"],A={style:{"font-size":"14px"}},B={style:{"font-size":"14px"}},E=["onClick"],b=V({__name:"h-file-upload-case1",setup(L){const a=F([]),p=F([]);x(a,d=>{console.log("files change",d)},{immediate:!0,deep:!0}),x(p,d=>{console.log("testFiles change",d)},{immediate:!0,deep:!0});const f=()=>{alert("파일 갯수 초과")},c=()=>{alert("파일 총용량 초과")};return(d,e)=>(w(),N("div",null,[e[4]||(e[4]=l("h1",{style:{"font-size":"18px"}},"파일 업로드 - 멀티",-1)),l("p",null,o(a.value),1),n(s(_),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i),multiple:!0,"max-files":5,"max-size":10*1024*1024,onExceedFileNum:f,onExceedFileSize:c},{default:t(()=>[n(s(y),null,{default:t(()=>e[2]||(e[2]=[z("파일 업로드")])),_:1}),n(s(U),null,{default:t(()=>[n(s(v),null,{default:t(({filename:i,filesize:m,removeFileFunc:r})=>[l("span",k,o(i),1),l("span",C,o(m),1),l("button",{type:"button",onClick:r},"삭제",8,S)]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[5]||(e[5]=l("div",{style:{height:"100px"}},null,-1)),e[6]||(e[6]=l("h1",{style:{"font-size":"18px"}},"파일 업로드 - 싱글",-1)),l("p",null,o(p.value),1),n(s(_),{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=i=>p.value=i),multiple:!1,"max-files":1,"max-size":5*1024*1024,onExceedFileNum:f,onExceedFileSize:c},{default:t(()=>[n(s(y),null,{default:t(()=>e[3]||(e[3]=[z("파일 업로드")])),_:1}),n(s(U),null,{default:t(()=>[n(s(v),null,{default:t(({filename:i,filesize:m,removeFileFunc:r})=>[l("span",A,o(i),1),l("span",B,o(m),1),l("button",{type:"button",onClick:r},"삭제",8,E)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});b.__docgenInfo={exportName:"default",displayName:"h-file-upload-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-file-upload/h-file-upload-case1.vue"]};const I=`<script setup lang="ts">
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
        v-model="files"
        :multiple="true"
        :max-files="5"
        :max-size="10 * 1024 * 1024"
        @exceed-file-num="exceedFileNum"
        @exceed-file-size="exceedFileSize"
    >
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
        v-model="testFiles"
        :multiple="false"
        :max-files="1"
        :max-size="5 * 1024 * 1024"
        @exceed-file-num="exceedFileNum"
        @exceed-file-size="exceedFileSize"
    >
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
`,j={title:"headless-ui/h-file-upload",component:b,parameters:{docs:{description:{component:"파일 업로드 컴포넌트입니다."},source:{code:I}}},argTypes:{}},u={};var h,H,g;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(g=(H=u.parameters)==null?void 0:H.docs)==null?void 0:g.source}}};const D=["Case1"];export{u as Case1,D as __namedExportsOrder,j as default};

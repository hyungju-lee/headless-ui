import{d as _,r,g as c,j as t,u as e,f as a,l,t as u,O as o,F as p,v as m,D as C,P as b}from"./vue.esm-bundler-CYoyDZR-.js";import{P as F,N as V,x as L,R as q,H as A,B as K}from"./headless-ui-vue3.es-C9Tx01VJ.js";import"./iframe-D9T7rBXf.js";import"../sb-preview/runtime.js";const v=_({__name:"h-pagination-case1",setup(D){const B=r(8),y=r(102),i=r(0),H=r("page"),k=I=>{};return(I,n)=>(a(),c(e(K),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=s=>i.value=s),"count-per-page":B.value,"total-count":y.value,"query-string-key":H.value,type:"type1",onClickPaginationButton:k},{default:t(s=>[i.value!==0?(a(),l(p,{key:0},[u(e(F),null,{default:t(()=>n[1]||(n[1]=[o("처음")])),_:1}),u(e(V),null,{default:t(()=>n[2]||(n[2]=[o("이전")])),_:1})],64)):m("",!0),(a(!0),l(p,null,C(s.paginatedItems,(d,N)=>(a(),c(e(L),{key:`page_${N}`,"page-index":d},{default:t(()=>[o(b(d),1)]),_:2},1032,["page-index"]))),128)),i.value!==s.lastPageIndex-1?(a(),l(p,{key:1},[u(e(q),null,{default:t(()=>n[3]||(n[3]=[o("다음")])),_:1}),u(e(A),null,{default:t(()=>n[4]||(n[4]=[o("마지막")])),_:1})],64)):m("",!0)]),_:1},8,["modelValue","count-per-page","total-count","query-string-key"]))}});v.__docgenInfo={exportName:"default",displayName:"h-pagination-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-pagination/h-pagination-case1.vue"]};const S=`<template>
  <HPaginationArea
      #default="slotProps"
      v-model="activePageIndex"
      :count-per-page="counterPage"
      :total-count="totalCount"
      :query-string-key="paginationKey"
      type="type1"
      @click-pagination-button="clickedPaginationButton"
  >
    <template v-if="activePageIndex !== 0">
      <HPaginationFirstButton>처음</HPaginationFirstButton>
      <HPaginationPrevButton>이전</HPaginationPrevButton>
    </template>
    <HPaginationNumberButton
        v-for="(pageIndex, index) in slotProps.paginatedItems"
        :key="\`page_\${index}\`"
        :page-index="pageIndex"
    >
      {{ pageIndex }}
    </HPaginationNumberButton>
    <template v-if="activePageIndex !== slotProps.lastPageIndex - 1">
      <HPaginationNextButton>다음</HPaginationNextButton>
      <HPaginationLastButton>마지막</HPaginationLastButton>
    </template>
  </HPaginationArea>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {
  HPaginationArea,
  HPaginationFirstButton,
  HPaginationLastButton,
  HPaginationNextButton,
  HPaginationPrevButton,
  HPaginationNumberButton
} from "headless-ui/vue3";

const counterPage = ref(8);
const totalCount = ref(102);
const activePageIndex = ref(0);
const paginationKey = ref<string>("page");

const clickedPaginationButton = (pageIndex: number) => {
  // console.log(
  // 	'clickedPaginationButton',
  // 	activePageIndex.value, // 이전값
  // 	pageIndex, // 클릭한 페이지네이션 버튼 인덱스 값
  // );
};
<\/script>

<style scoped></style>
`,U={title:"headless-ui/h-pagination",component:v,parameters:{docs:{description:{component:"페이지네이션 컴포넌트입니다."},source:{code:S}}},argTypes:{}},g={};var P,x,f;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(f=(x=g.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const $=["Case1"];export{g as Case1,$ as __namedExportsOrder,U as default};

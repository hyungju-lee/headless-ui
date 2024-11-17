import{d as F,r,g as d,j as n,u as e,f as a,l as g,t as u,O as o,F as p,v as m,D as b,P}from"./vue.esm-bundler-Uk5hQ1qI.js";import{O as V,z as A,U as L,F as O,x as U,N as q}from"./headless-ui-vue3.es-rAn8PJnz.js";import"./iframe-BCqPF6oM.js";import"../sb-preview/runtime.js";const y=F({__name:"h-pagination-case1",setup(S){const B=r(8),H=r(102),i=r(0),k=r("page"),I=_=>{};return(_,t)=>(a(),d(e(q),{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s),"count-per-page":B.value,"total-count":H.value,"query-string-key":k.value,type:"type1",onClickPaginationButton:I},{default:n(s=>[i.value!==0?(a(),g(p,{key:0},[u(e(V),null,{default:n(()=>t[1]||(t[1]=[o("처음")])),_:1}),u(e(A),null,{default:n(()=>t[2]||(t[2]=[o("이전")])),_:1})],64)):m("",!0),(a(!0),g(p,null,b(s.paginatedItems,(c,N)=>(a(),d(e(L),{key:`page_${N}`,"page-index":c},{default:n(({isActive:C})=>[o(P(c)+" "+P(C?"(active)":""),1)]),_:2},1032,["page-index"]))),128)),i.value!==s.lastPageIndex-1?(a(),g(p,{key:1},[u(e(O),null,{default:n(()=>t[3]||(t[3]=[o("다음")])),_:1}),u(e(U),null,{default:n(()=>t[4]||(t[4]=[o("마지막")])),_:1})],64)):m("",!0)]),_:1},8,["modelValue","count-per-page","total-count","query-string-key"]))}});y.__docgenInfo={exportName:"default",displayName:"h-pagination-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-pagination/h-pagination-case1.vue"]};const K=`<template>
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
        #default="{isActive}"
        v-for="(pageIndex, index) in slotProps.paginatedItems"
        :key="\`page_\${index}\`"
        :page-index="pageIndex"
    >
      {{ pageIndex }} {{ isActive ? '(active)' : '' }}
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

const clickedPaginationButton = (_: number) => {
  // console.log(
  // 	'clickedPaginationButton',
  // 	activePageIndex.value, // 이전값
  // 	pageIndex, // 클릭한 페이지네이션 버튼 인덱스 값
  // );
};
<\/script>

<style scoped></style>
`,$={title:"headless-ui/h-pagination",component:y,parameters:{docs:{description:{component:"페이지네이션 컴포넌트입니다."},source:{code:K}}},argTypes:{}},l={};var v,f,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const h=["Case1"];export{l as Case1,h as __namedExportsOrder,$ as default};

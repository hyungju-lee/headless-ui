import{d as N,r,g as c,j as t,u as e,f as a,l,t as u,O as o,F as p,v as m,D as C,P as b}from"./vue.esm-bundler-Cp0jskqx.js";import{L as F,B as L,M as V,I as T,k as q,T as A}from"./headless-ui-vue3.es-B45te3_K.js";const v=N({__name:"h-pagination-case1",setup(S){const B=r(8),y=r(102),i=r(0),k=r("page"),H=I=>{};return(I,n)=>(a(),c(e(A),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=s=>i.value=s),"count-per-page":B.value,"total-count":y.value,"query-string-key":k.value,type:"type1",onClickPaginationButton:H},{default:t(s=>[i.value!==0?(a(),l(p,{key:0},[u(e(F),null,{default:t(()=>n[1]||(n[1]=[o("처음")])),_:1}),u(e(L),null,{default:t(()=>n[2]||(n[2]=[o("이전")])),_:1})],64)):m("",!0),(a(!0),l(p,null,C(s.paginatedItems,(d,_)=>(a(),c(e(V),{key:`page_${_}`,"page-index":d},{default:t(()=>[o(b(d),1)]),_:2},1032,["page-index"]))),128)),i.value!==s.lastPageIndex-1?(a(),l(p,{key:1},[u(e(T),null,{default:t(()=>n[3]||(n[3]=[o("다음")])),_:1}),u(e(q),null,{default:t(()=>n[4]||(n[4]=[o("마지막")])),_:1})],64)):m("",!0)]),_:1},8,["modelValue","count-per-page","total-count","query-string-key"]))}});v.__docgenInfo={exportName:"default",displayName:"h-pagination-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-pagination/h-pagination-case1.vue"]};const K=`<template>
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
`,M={title:"headless-ui/h-pagination",component:v,parameters:{docs:{description:{component:"페이지네이션 컴포넌트입니다."},source:{code:K}}},argTypes:{}},g={};var P,f,x;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(x=(f=g.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const O=["Case1"];export{g as Case1,O as __namedExportsOrder,M as default};

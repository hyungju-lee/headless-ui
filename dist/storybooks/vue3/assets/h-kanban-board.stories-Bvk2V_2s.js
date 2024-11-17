import{d as k,r as H,l as a,t as c,j as s,u,A as m,F as r,D as o,f as n,g as f,P as v,O as K}from"./vue.esm-bundler-Uk5hQ1qI.js";import{V as L,W as g,X as C,Y as A}from"./headless-ui-vue3.es-Bvy92s8z.js";import{_ as V}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./iframe-DEt0sCVg.js";import"../sb-preview/runtime.js";const B={style:{"font-size":"14px"}},w={style:{display:"flex"}},_=k({__name:"h-kanban-board-case1",setup(N){const l=H([{id:1,state:"상태1",value:[{value:"1-1"},{value:"1-2"},{value:"1-3"},{value:"1-4"},{value:"1-5"},{value:"1-6"},{value:"1-7"}]},{id:2,state:"상태2",value:[{value:"2-1"},{value:"2-2"},{value:"2-3"},{value:"2-4"}]},{id:3,state:"상태3",value:[{value:"3-1"},{value:"3-2"},{value:"3-3"},{value:"3-4"},{value:"3-5"},{value:"3-6"}]},{id:4,state:"상태4",value:[{value:"4-1"},{value:"4-2"},{value:"4-3"}]}]);return(F,p)=>(n(),a("div",null,[c(u(A),{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=e=>l.value=e),style:{height:"700px"}},{default:s(()=>[(n(!0),a(r,null,o(l.value,(e,t)=>(n(),f(u(C),{key:e.id},{default:s(()=>[m("span",B,v(e.state),1),c(u(L),null,{default:s(()=>[(n(!0),a(r,null,o(e.value,(d,h)=>(n(),f(u(g),{key:d.value,"el-value":d,"col-index":t,"row-index":h},{default:s(()=>[K(v(d.value),1)]),_:2},1032,["el-value","col-index","row-index"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"]),m("div",w,[(n(!0),a(r,null,o(l.value,e=>(n(),a("span",{key:e.id,style:{display:"flex","flex-direction":"column",flex:"1 1 0","font-size":"14px"}},[(n(!0),a(r,null,o(e.value,t=>(n(),a("span",{key:t.value},v(t.value),1))),128))]))),128))])]))}}),z=V(_,[["__scopeId","data-v-77a540bb"]]);_.__docgenInfo={exportName:"default",displayName:"h-kanban-board-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-kanban-board/h-kanban-board-case1.vue"]};const I=`<script setup lang="ts">
import {HKanbanArea, HKanbanLine, HKanbanCard, HKanbanLineInnerArea} from "headless-ui/vue3";
import {ref} from "vue";

const dataList = ref([
  {
    id: 1,
    state: "상태1",
    value: [
      {
        value: "1-1",
      },
      {
        value: "1-2",
      },
      {
        value: "1-3",
      },
      {
        value: "1-4",
      },
      {
        value: "1-5",
      },
      {
        value: "1-6",
      },
      {
        value: "1-7",
      },
    ],
  },
  {
    id: 2,
    state: "상태2",
    value: [
      {
        value: "2-1",
      },
      {
        value: "2-2",
      },
      {
        value: "2-3",
      },
      {
        value: "2-4",
      },
    ],
  },
  {
    id: 3,
    state: "상태3",
    value: [
      {
        value: "3-1",
      },
      {
        value: "3-2",
      },
      {
        value: "3-3",
      },
      {
        value: "3-4",
      },
      {
        value: "3-5",
      },
      {
        value: "3-6",
      },
    ],
  },
  {
    id: 4,
    state: "상태4",
    value: [
      {
        value: "4-1",
      },
      {
        value: "4-2",
      },
      {
        value: "4-3",
      },
    ],
  },
]);
<\/script>

<template>
  <div>
    <HKanbanArea v-model="dataList" style="height: 700px">
      <HKanbanLine v-for="(item, index) in dataList" :key="item.id">
        <span style="font-size: 14px">{{ item.state }}</span>
        <HKanbanLineInnerArea>
          <HKanbanCard
              v-for="(v, i) in item.value"
              :key="v.value"
              :el-value="v"
              :col-index="index"
              :row-index="i"
          >
            {{ v.value }}
          </HKanbanCard>
        </HKanbanLineInnerArea>
      </HKanbanLine>
    </HKanbanArea>

    <div style="display: flex">
      <span
          v-for="item in dataList"
          :key="item.id"
          style="
          display: flex;
          flex-direction: column;
          flex: 1 1 0;
          font-size: 14px;
        "
      >
        <span v-for="v in item.value" :key="v.value">{{ v.value }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
body {
  min-width: auto;
}

.h_kanban_card {
  height: 150px;
  font-size: 14px;
}
</style>
`,U={title:"headless-ui/h-kanban-board",component:z,parameters:{docs:{description:{component:"칸반 보드 컴포넌트입니다."},source:{code:I}}},argTypes:{}},i={};var x,b,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const j=["Case1"];export{i as Case1,j as __namedExportsOrder,U as default};

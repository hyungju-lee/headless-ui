import{d as x,r as u,l as r,A as v,P as o,F as d,D as C,f as l,g as f,j as y,O as _,u as k}from"./vue.esm-bundler-CYoyDZR-.js";import{d as V,T as g}from"./headless-ui-vue3.es-C9Tx01VJ.js";import"./iframe-D9T7rBXf.js";import"../sb-preview/runtime.js";const m=x({__name:"HInputCheckboxCase1",setup(E){const{checkEqual:b}=V(),s=u([{id:1,name:"checkbox1",value:"checkbox1",label:"체크박스1"},{id:2,name:"checkbox2",value:"checkbox2",label:"체크박스2"},{id:3,name:"checkbox3",value:"checkbox3",label:"체크박스3"},{id:4,name:"checkbox4",value:"checkbox4",label:"체크박스4"},{id:5,name:"checkbox5",value:"checkbox5",label:"체크박스5"}]),a=u([s.value[2]]);return(H,t)=>(l(),r(d,null,[v("p",null,o(a.value),1),(l(!0),r(d,null,C(s.value,(e,q)=>(l(),f(k(g),{key:e.id,name:e.name,modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),data:e,style:{display:"block"}},{default:y(()=>[_(o(a.value.some(n=>k(b)(n,e))?"checked":"unchecked")+" "+o(e.name),1)]),_:2},1032,["name","modelValue","data"]))),128))],64))}});m.__docgenInfo={exportName:"default",displayName:"HInputCheckboxCase1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-input-checkbox/HInputCheckboxCase1.vue"]};const I=`<script setup lang="ts">
import {ref} from "vue";
import {HInputCheckbox, useCheckEqual} from "headless-ui/vue3";

const {checkEqual} = useCheckEqual();

const inputCheckboxGroup = ref([
  {id: 1, name: 'checkbox1', value: 'checkbox1', label: '체크박스1'},
  {id: 2, name: 'checkbox2', value: 'checkbox2', label: '체크박스2'},
  {id: 3, name: 'checkbox3', value: 'checkbox3', label: '체크박스3'},
  {id: 4, name: 'checkbox4', value: 'checkbox4', label: '체크박스4'},
  {id: 5, name: 'checkbox5', value: 'checkbox5', label: '체크박스5'},
]);

const checkedValue = ref([inputCheckboxGroup.value[2]])
<\/script>

<template>
  <p>{{ checkedValue }}</p>
  <HInputCheckbox
      v-for="(inputCheckbox, index) in inputCheckboxGroup"
      :key="inputCheckbox.id"
      :name="inputCheckbox.name"
      v-model="checkedValue"
      :data="inputCheckbox"
      style="display: block"
  >
    {{ checkedValue.some(value => checkEqual(value, inputCheckbox)) ? 'checked' : 'unchecked' }}
    {{ inputCheckbox.name }}
  </HInputCheckbox>
</template>

<style scoped lang="scss">

</style>
`,F={title:"headless-ui/h-input-checkbox",component:m,parameters:{docs:{description:{component:"체크박스를 렌더링하는 컴포넌트입니다."},source:{code:I}}},argTypes:{}},c={};var p,h,i;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(i=(h=c.parameters)==null?void 0:h.docs)==null?void 0:i.source}}};const S=["Case1"];export{c as Case1,S as __namedExportsOrder,F as default};

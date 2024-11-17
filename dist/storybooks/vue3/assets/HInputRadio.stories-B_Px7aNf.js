import{d as f,r as s,l as i,A as b,P as o,F as l,D as y,f as d,g as R,j as _,O as C,u}from"./vue.esm-bundler-CYoyDZR-.js";import{d as V,D as g}from"./headless-ui-vue3.es-C9Tx01VJ.js";import"./iframe-D9T7rBXf.js";import"../sb-preview/runtime.js";const v=f({__name:"HInputRadioCase1",setup(I){const{checkEqual:k}=V(),t=s([{id:1,name:"radio1",value:"radio1",label:"라디오1"},{id:2,name:"radio2",value:"radio2",label:"라디오2"},{id:3,name:"radio3",value:"radio3",label:"라디오3"},{id:4,name:"radio4",value:"radio4",label:"라디오4"},{id:5,name:"radio5",value:"radio5",label:"라디오5"}]),e=s(t.value[2]);return(E,r)=>(d(),i(l,null,[b("p",null,o(e.value),1),(d(!0),i(l,null,y(t.value,(a,H)=>(d(),R(u(g),{key:a.id,name:"test",modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=h=>e.value=h),data:a,style:{display:"block"}},{default:_(()=>[C(o(u(k)(e.value,a)?"checked":"unchecked")+" "+o(a.name),1)]),_:2},1032,["modelValue","data"]))),128))],64))}});v.__docgenInfo={exportName:"default",displayName:"HInputRadioCase1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-input-radio/HInputRadioCase1.vue"]};const x=`<script setup lang="ts">
import {ref} from "vue";
import {useCheckEqual, HInputRadio} from "headless-ui/vue3";

const {checkEqual} = useCheckEqual();

const inputRadioGroup = ref([
  {id: 1, name: 'radio1', value: 'radio1', label: '라디오1'},
  {id: 2, name: 'radio2', value: 'radio2', label: '라디오2'},
  {id: 3, name: 'radio3', value: 'radio3', label: '라디오3'},
  {id: 4, name: 'radio4', value: 'radio4', label: '라디오4'},
  {id: 5, name: 'radio5', value: 'radio5', label: '라디오5'},
]);

const checkedValue = ref(inputRadioGroup.value[2])
<\/script>

<template>
  <p>{{ checkedValue }}</p>
  <HInputRadio
      v-for="(inputRadio, index) in inputRadioGroup"
      :key="inputRadio.id"
      name="test"
      v-model="checkedValue"
      :data="inputRadio"
      style="display: block"
  >
    {{ checkEqual(checkedValue, inputRadio) ? 'checked' : 'unchecked' }}
    {{ inputRadio.name }}
  </HInputRadio>
</template>

<style scoped lang="scss">

</style>
`,N={title:"headless-ui/h-input-radio",component:v,parameters:{docs:{description:{component:"라디오 버튼을 렌더링하는 컴포넌트입니다."},source:{code:x}}},argTypes:{}},n={};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const F=["Case1"];export{n as Case1,F as __namedExportsOrder,N as default};

import{d as A,f as d,l as g,A as s,t,j as o,u,F as b,N as E,O as B}from"./vue.esm-bundler-Cp0jskqx.js";import{W as i}from"./headless-ui-vue3.es-CZCwgrpb.js";import{_}from"./plugin-vue_export-helper-DlAUqK2U.js";const v=A({name:"CustomButton",setup(){return{onClickButton:()=>{alert("버튼 원래 동작")}}}});function V(c,n,a,h,e,r){return d(),g("button",{type:"button",onClick:n[0]||(n[0]=(...C)=>c.onClickButton&&c.onClickButton(...C))},"클릭!")}const k=_(v,[["render",V]]);v.__docgenInfo={displayName:"CustomButton",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-check-auth/CustomButton.vue"]};const N=A({__name:"h-check-auth-case1",setup(c){const n=({event:h,result:e,originalFunc:r})=>{if(e)r(h);else{if(!confirm("권한이 없습니다. 그래도 진행하시겠습니까?"))return;r(h)}},a=()=>{alert("버튼 원래 동작")};return(h,e)=>{const r=E("RouterLink");return d(),g(b,null,[e[1]||(e[1]=s("h3",null,"예시 1. button 태그",-1)),t(u(i),{"is-auth":"NONE",onAuthVerificationResult:n},{default:o(()=>[s("button",{type:"button",onClick:a},"버튼")]),_:1}),t(u(i),{onAuthVerificationResult:n},{default:o(()=>[s("button",{type:"button",onClick:a},"버튼")]),_:1}),t(u(i),{"is-auth":"ALL",onAuthVerificationResult:n},{default:o(()=>[s("button",{type:"button",onClick:a},"버튼")]),_:1}),t(u(i),{"is-auth":"VIEW","no-auth-list":["NONE","VIEW"],onAuthVerificationResult:n},{default:o(()=>[s("button",{type:"button",onClick:a},"버튼")]),_:1}),e[2]||(e[2]=s("h3",null,"예시 2. 커스텀 컴포넌트",-1)),t(u(i),{"is-auth":"ALL","no-auth-list":["NONE","MINE"],"original-event-target":"button","original-event-target-event":"onClickButton",onAuthVerificationResult:n},{default:o(()=>[t(k)]),_:1}),t(u(i),{"is-auth":"VIEW","no-auth-list":["NONE","MINE"],"original-event-target":"button","original-event-target-event":"onClickButton",onAuthVerificationResult:n},{default:o(()=>[t(k)]),_:1}),t(u(i),{"is-auth":"VIEW","no-auth-list":["NONE","VIEW"],"original-event-target":"button","original-event-target-event":"onClickButton",onAuthVerificationResult:n},{default:o(()=>[t(k)]),_:1}),e[3]||(e[3]=s("h3",null,"예시 3. 라우터 이동",-1)),t(u(i),{"is-auth":"VIEW","no-auth-list":["NONE","VIEW"],"original-event-target":"a",onAuthVerificationResult:n},{default:o(()=>[t(r,{to:"/test"},{default:o(()=>e[0]||(e[0]=[B("테스트 이동, router-link도 동작 잘됨")])),_:1})]),_:1})],64)}}});N.__docgenInfo={exportName:"default",displayName:"h-check-auth-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-check-auth/h-check-auth-case1.vue"]};const I=`<script setup lang="ts">
import {HCheckAuth} from "headless-ui/vue3";
import CustomButton from "./CustomButton.vue";

const checkAuth = ({event, result, originalFunc}) => {
  if (!result) {
    const res = confirm(
        "권한이 없습니다. 그래도 진행하시겠습니까?"
    );
    if (!res) {
      return;
    }
    originalFunc(event);
  } else {
    originalFunc(event);
  }
};

const onClickButton1 = () => {
  alert("버튼 원래 동작");
};
<\/script>

<template>
  <h3>예시 1. button 태그</h3>
  <HCheckAuth :is-auth="'NONE'" @auth-verification-result="checkAuth">
    <button type="button" @click="onClickButton1">버튼</button>
  </HCheckAuth>
  <HCheckAuth @auth-verification-result="checkAuth">
    <button type="button" @click="onClickButton1">버튼</button>
  </HCheckAuth>
  <HCheckAuth :is-auth="'ALL'" @auth-verification-result="checkAuth">
    <button type="button" @click="onClickButton1">버튼</button>
  </HCheckAuth>
  <HCheckAuth
      :is-auth="'VIEW'"
      :no-auth-list="['NONE', 'VIEW']"
      @auth-verification-result="checkAuth"
  >
    <button type="button" @click="onClickButton1">버튼</button>
  </HCheckAuth>
  <h3>예시 2. 커스텀 컴포넌트</h3>
  <HCheckAuth
      :is-auth="'ALL'"
      :no-auth-list="['NONE', 'MINE']"
      original-event-target="button"
      original-event-target-event="onClickButton"
      @auth-verification-result="checkAuth"
  >
    <CustomButton/>
  </HCheckAuth>
  <HCheckAuth
      :is-auth="'VIEW'"
      :no-auth-list="['NONE', 'MINE']"
      original-event-target="button"
      original-event-target-event="onClickButton"
      @auth-verification-result="checkAuth"
  >
    <CustomButton/>
  </HCheckAuth>
  <HCheckAuth
      :is-auth="'VIEW'"
      :no-auth-list="['NONE', 'VIEW']"
      original-event-target="button"
      original-event-target-event="onClickButton"
      @auth-verification-result="checkAuth"
  >
    <CustomButton/>
  </HCheckAuth>
  <h3>예시 3. 라우터 이동</h3>
  <HCheckAuth
      :is-auth="'VIEW'"
      :no-auth-list="['NONE', 'VIEW']"
      original-event-target="a"
      @auth-verification-result="checkAuth"
  >
    <RouterLink to="/test">테스트 이동, router-link도 동작 잘됨</RouterLink>
  </HCheckAuth>
</template>

<style scoped lang="scss">

</style>
`,O={title:"headless-ui/h-check-auth",component:N,parameters:{docs:{description:{component:"인증 여부를 확인하는 컴포넌트"},source:{code:I}}},argTypes:{}},l={};var p,f,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(f=l.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const L=["Case1"];export{l as Case1,L as __namedExportsOrder,O as default};

import{d as y,r as s,b as x,l as T,t as c,j as l,u as h,A as t,O as m,y as p,z as g,N as H,f as V}from"./vue.esm-bundler-Cp0jskqx.js";import{u as N,d as C}from"./headless-ui-vue3.es-DDUAhZL-.js";const F=y({__name:"h-check-form-data-change-case1",setup(U){const i=s(null),u=s(""),f=s("content"),{deleteComponentState:D}=N(i,window.location.href);x(()=>{D()});const d=({event:r,result:e,originalFunc:o,href:n})=>{if(e)n?(console.log(`${n}로 이동`),window.location.href=n):o(r);else{if(!confirm("작성하신 내용이 있습니다. 현재 페이지를 떠나시겠습니까?"))return;n?(console.log(`${n}로 이동`),window.location.href=n):o(r)}};return(r,e)=>{const o=H("RouterLink");return V(),T("div",null,[c(h(C),{href:"https://www.naver.com",onDataChangeVerificationResult:d},{default:l(()=>e[2]||(e[2]=[t("a",{href:"https://www.naver.com"},"네이버 이동",-1)])),_:1}),c(h(C),{onDataChangeVerificationResult:d},{default:l(()=>[c(o,{to:"/test"},{default:l(()=>e[3]||(e[3]=[m("테스트 이동")])),_:1})]),_:1}),t("form",{ref_key:"formTag",ref:i},[e[4]||(e[4]=m(" 이름: ")),p(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>u.value=n),name:"name"},null,512),[[g,u.value]]),e[5]||(e[5]=t("br",null,null,-1)),e[6]||(e[6]=m(" 설명: ")),p(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>f.value=n),name:"content"},null,512),[[g,f.value]])],512)])}}});F.__docgenInfo={exportName:"default",displayName:"h-check-form-data-change-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-check-form-data-change/h-check-form-data-change-case1.vue"]};const R=`<script setup lang="ts">
import {onUnmounted, ref} from "vue";
import {HCheckFormDataChange, useFormChangeCheck} from "headless-ui/vue3";

const formTag = ref<HTMLFormElement | null>(null);
const name = ref("");
const content = ref("content");

const {deleteComponentState} = useFormChangeCheck(
    formTag,
    window.location.href
);

onUnmounted(() => {
  deleteComponentState();
});

const checkFormData = ({event, result, originalFunc, href}) => {
  if (!result) {
    const res = confirm(
        "작성하신 내용이 있습니다. 현재 페이지를 떠나시겠습니까?"
    );
    if (!res) {
      return;
    }
    if (href) {
      console.log(\`\${href}로 이동\`);
      window.location.href = href;
    } else {
      originalFunc(event);
    }
  } else {
    if (href) {
      console.log(\`\${href}로 이동\`);
      window.location.href = href;
    } else {
      originalFunc(event);
    }
  }
};
<\/script>

<template>
  <div>
    <HCheckFormDataChange
        href="https://www.naver.com"
        @data-change-verification-result="checkFormData"
    >
      <a href="https://www.naver.com">네이버 이동</a>
    </HCheckFormDataChange>
    <HCheckFormDataChange
        @data-change-verification-result="checkFormData"
    >
      <RouterLink to="/test">테스트 이동</RouterLink>
    </HCheckFormDataChange>
    <form ref="formTag">
      이름: <input type="text" v-model="name" name="name"/>
      <br/>
      설명: <input type="text" v-model="content" name="content"/>
    </form>
  </div>
</template>

<style scoped lang="scss">

</style>
`,b={title:"headless-ui/h-check-form-data-change",component:F,parameters:{docs:{description:{component:"폼 데이터 변경 여부를 확인하는 컴포넌트"},source:{code:R}}},argTypes:{}},a={};var w,k,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const $=["Case1"];export{a as Case1,$ as __namedExportsOrder,b as default};

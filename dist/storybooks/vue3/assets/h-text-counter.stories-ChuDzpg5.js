import{d as g,r as x,l as y,t as e,j as a,u as n,F as T,f,A as s,P as o,n as C}from"./vue.esm-bundler-Uk5hQ1qI.js";import{u as H,G as i,Z as A,J as V,K as v,L as S}from"./headless-ui-vue3.es-6gfQYSFZ.js";import"./iframe-DH1TVBFR.js";import"../sb-preview/runtime.js";const w={class:"text_counter_inner"},L={class:"curr_text counter_text"},k={class:"counter_text"},B={class:"curr_text counter_text"},I={class:"counter_text"},h=g({__name:"h-text-counter-case1",setup(b){const c=x("StoryBook Text"),p=x("StoryBook TextArea");return(E,t)=>(f(),y(T,null,[e(n(i),{"max-length":20,class:"text_counter_wrap"},{default:a(r=>[e(n(H),{type:"text",modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=u=>c.value=u),style:{width:"100%"}},null,8,["modelValue"]),s("div",w,[s("span",L,o(r.currLength),1),t[2]||(t[2]=s("span",{class:"counter_text"},"/",-1)),s("span",k,o(r.maxLength),1)])]),_:1}),e(n(S),null,{default:a(()=>[e(n(i),{"max-length":100,style:{height:"140px"},class:"text_counter_wrap"},{default:a(r=>[e(n(A),{style:{height:"100%"}},{default:a(()=>[e(n(V),{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=u=>p.value=u),style:{width:"100%","min-height":"100%"}},null,8,["modelValue"])]),_:1}),e(n(v),{class:"text_counter_inner",style:C({paddingRight:`${r.scrollWidth}px`})},{default:a(()=>[s("span",B,o(r.currLength),1),t[3]||(t[3]=s("span",{class:"counter_text"},"/",-1)),s("span",I,o(r.maxLength),1)]),_:2},1032,["style"])]),_:1})]),_:1})],64))}});h.__docgenInfo={exportName:"default",displayName:"h-text-counter-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-text-counter/h-text-counter-case1.vue"]};const N=`<script setup lang="ts">
import {
  HTextCounter,
  HCounterInputText,
  HTextCounterArea,
  HScrollbars,
  HCounterTextArea,
  HTextCounterInner
} from 'headless-ui/vue3'
import {ref} from "vue";

const inputValue = ref("StoryBook Text");
const textAreaValue = ref("StoryBook TextArea");
<\/script>

<template>
  <!-- START -->
  <HTextCounter
      #default="slotProps"
      :max-length="20"
      class="text_counter_wrap"
  >
    <HCounterInputText
        type="text"
        v-model="inputValue"
        style="width: 100%"
    />
    <div class="text_counter_inner">
          <span class="curr_text counter_text">
            {{ slotProps.currLength }}
          </span>
      <span class="counter_text">/</span>
      <span class="counter_text">{{ slotProps.maxLength }}</span>
    </div>
  </HTextCounter>
  <!-- END -->

  <!-- START -->
  <HTextCounterArea>
    <HTextCounter
        #default="slotProps"
        :max-length="100"
        style="height: 140px"
        class="text_counter_wrap"
    >
      <HScrollbars style="height: 100%">
        <HCounterTextArea
            v-model="textAreaValue"
            style="width: 100%; min-height: 100%"
        />
      </HScrollbars>
      <HTextCounterInner
          class="text_counter_inner"
          :style="{
              paddingRight: \`\${slotProps.scrollWidth}px\`,
            }"
      >
            <span class="curr_text counter_text">
              {{ slotProps.currLength }}
            </span>
        <span class="counter_text">/</span>
        <span class="counter_text">
              {{ slotProps.maxLength }}
            </span>
      </HTextCounterInner>
    </HTextCounter>
  </HTextCounterArea>
  <!-- END -->
</template>

<style scoped lang="scss">

</style>
`,U={title:"headless-ui/h-text-counter",component:h,parameters:{docs:{description:{component:"텍스트 카운터 컴포넌트입니다."},source:{code:N}}},argTypes:{}},l={};var d,_,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(_=l.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};const W=["Case1"];export{l as Case1,W as __namedExportsOrder,U as default};

import{d as g,r as x,l as y,t,j as a,u as n,F as T,f,A as s,P as o,n as C}from"./vue.esm-bundler-Cp0jskqx.js";import{z as H,F as i,X as V,G as v,J as A,K as S}from"./headless-ui-vue3.es-CZCwgrpb.js";const w={class:"text_counter_inner"},L={class:"curr_text counter_text"},k={class:"counter_text"},B={class:"curr_text counter_text"},I={class:"counter_text"},h=g({__name:"h-text-counter-case1",setup(P){const c=x("StoryBook Text"),p=x("StoryBook TextArea");return(b,e)=>(f(),y(T,null,[t(n(i),{"max-length":20,class:"text_counter_wrap"},{default:a(r=>[t(n(H),{type:"text",modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=u=>c.value=u),style:{width:"100%"}},null,8,["modelValue"]),s("div",w,[s("span",L,o(r.currLength),1),e[2]||(e[2]=s("span",{class:"counter_text"},"/",-1)),s("span",k,o(r.maxLength),1)])]),_:1}),t(n(S),null,{default:a(()=>[t(n(i),{"max-length":100,style:{height:"140px"},class:"text_counter_wrap"},{default:a(r=>[t(n(V),{style:{height:"100%"}},{default:a(()=>[t(n(v),{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=u=>p.value=u),style:{width:"100%","min-height":"100%"}},null,8,["modelValue"])]),_:1}),t(n(A),{class:"text_counter_inner",style:C({paddingRight:`${r.scrollWidth}px`})},{default:a(()=>[s("span",B,o(r.currLength),1),e[3]||(e[3]=s("span",{class:"counter_text"},"/",-1)),s("span",I,o(r.maxLength),1)]),_:2},1032,["style"])]),_:1})]),_:1})],64))}});h.__docgenInfo={exportName:"default",displayName:"h-text-counter-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-text-counter/h-text-counter-case1.vue"]};const N=`<script setup lang="ts">
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
`,R={title:"headless-ui/h-text-counter",component:h,parameters:{docs:{description:{component:"텍스트 카운터 컴포넌트입니다."},source:{code:N}}},argTypes:{}},l={};var d,_,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(_=l.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};const D=["Case1"];export{l as Case1,D as __namedExportsOrder,R as default};

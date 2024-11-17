import{d as H,r as h,N as o,f as T,l as b,t as n,j as i,A as r,P as s}from"./vue.esm-bundler-Uk5hQ1qI.js";import{_ as v,n as _,E as C,o as y,q as x}from"./headless-ui-vue3.es-Bvy92s8z.js";import{_ as P}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./iframe-DEt0sCVg.js";import"../sb-preview/runtime.js";const c=H({name:"HSliderRangeCase1",components:{HSliderRangeArea:v,HSliderRangeTrack:_,HSliderRangeContainer:C,HSliderRangeLeftThumb:y,HSliderRangeRightThumb:x},setup(){const a=h([20,50]),e=h([40,250]);return{value1:a,value2:e}}}),k={style:{"font-size":"14px"}},A={style:{"font-size":"14px"}},z={style:{"font-size":"14px"}},V={style:{"font-size":"14px"}};function L(a,e,$,E,B,U){const d=o("HSliderRangeTrack"),p=o("HSliderRangeLeftThumb"),u=o("HSliderRangeRightThumb"),g=o("HSliderRangeContainer"),m=o("HSliderRangeArea");return T(),b("div",null,[n(m,{modelValue:a.value1,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value1=t)},{default:i(t=>[n(g,null,{default:i(()=>[n(d),n(p),n(u)]),_:1}),r("span",k,s(t.leftThumbPosition)+", "+s(t.rightThumbPosition),1),e[2]||(e[2]=r("br",null,null,-1)),r("span",A,s(a.value1),1)]),_:1},8,["modelValue"]),n(m,{modelValue:a.value2,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value2=t)},{default:i(t=>[n(g,{style:{width:"400px",height:"40px"}},{default:i(()=>[n(d,{style:{height:"8px"}}),n(p,{style:{width:"15px",height:"15px"}}),n(u)]),_:1}),r("span",z,s(t.leftThumbPosition)+", "+s(t.rightThumbPosition),1),e[3]||(e[3]=r("br",null,null,-1)),r("span",V,s(a.value2),1)]),_:1},8,["modelValue"])])}const w=P(c,[["render",L]]);c.__docgenInfo={displayName:"HSliderRangeCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-slider-range/h-slider-range-case1.vue"]};const N=`<template>
  <div>
    <HSliderRangeArea #default="slotProps" v-model="value1">
      <HSliderRangeContainer>
        <HSliderRangeTrack/>
        <HSliderRangeLeftThumb/>
        <HSliderRangeRightThumb/>
      </HSliderRangeContainer>

      <span style="font-size: 14px">
        {{ slotProps.leftThumbPosition }},
        {{ slotProps.rightThumbPosition }}
      </span>
      <br/>
      <span style="font-size: 14px">{{ value1 }}</span>
    </HSliderRangeArea>

    <HSliderRangeArea #default="slotProps" v-model="value2">
      <HSliderRangeContainer style="width: 400px; height: 40px">
        <HSliderRangeTrack style="height: 8px"/>
        <HSliderRangeLeftThumb style="width: 15px; height: 15px"/>
        <HSliderRangeRightThumb/>
      </HSliderRangeContainer>
      <span style="font-size: 14px">
        {{ slotProps.leftThumbPosition }},
        {{ slotProps.rightThumbPosition }}
      </span>
      <br/>
      <span style="font-size: 14px">{{ value2 }}</span>
    </HSliderRangeArea>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {
  HSliderRangeArea,
  HSliderRangeTrack,
  HSliderRangeContainer,
  HSliderRangeLeftThumb,
  HSliderRangeRightThumb,
} from 'headless-ui/vue3'

export default defineComponent({
  name: "HSliderRangeCase1",
  components: {
    HSliderRangeArea,
    HSliderRangeTrack,
    HSliderRangeContainer,
    HSliderRangeLeftThumb,
    HSliderRangeRightThumb,
  },
  setup() {
    const value1 = ref([20, 50]);
    const value2 = ref([40, 250]);

    return {
      value1,
      value2,
    };
  },
});
<\/script>

<style scoped></style>
`,O={title:"headless-ui/h-slider-range",component:w,parameters:{docs:{description:{component:"범위 선택 슬라이더 컴포넌트입니다."},source:{code:N}}},argTypes:{}},l={};var R,S,f;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const G=["Case1"];export{l as Case1,G as __namedExportsOrder,O as default};

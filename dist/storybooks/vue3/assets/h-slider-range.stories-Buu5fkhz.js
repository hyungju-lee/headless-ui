import{d as H,r as h,N as o,f as T,l as b,t as n,j as l,A as r,P as s}from"./vue.esm-bundler-Cp0jskqx.js";import{k as v,l as _,y,q as C,r as x}from"./headless-ui-vue3.es-EJ88DszW.js";import{_ as P}from"./plugin-vue_export-helper-DlAUqK2U.js";const c=H({name:"HSliderRangeCase1",components:{HSliderRangeArea:v,HSliderRangeTrack:_,HSliderRangeContainer:y,HSliderRangeLeftThumb:C,HSliderRangeRightThumb:x},setup(){const t=h([20,50]),e=h([40,250]);return{value1:t,value2:e}}}),k={style:{"font-size":"14px"}},A={style:{"font-size":"14px"}},z={style:{"font-size":"14px"}},V={style:{"font-size":"14px"}};function L(t,e,$,B,U,E){const d=o("HSliderRangeTrack"),p=o("HSliderRangeLeftThumb"),u=o("HSliderRangeRightThumb"),g=o("HSliderRangeContainer"),m=o("HSliderRangeArea");return T(),b("div",null,[n(m,{modelValue:t.value1,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value1=a)},{default:l(a=>[n(g,null,{default:l(()=>[n(d),n(p),n(u)]),_:1}),r("span",k,s(a.leftThumbPosition)+", "+s(a.rightThumbPosition),1),e[2]||(e[2]=r("br",null,null,-1)),r("span",A,s(t.value1),1)]),_:1},8,["modelValue"]),n(m,{modelValue:t.value2,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value2=a)},{default:l(a=>[n(g,{style:{width:"400px",height:"40px"}},{default:l(()=>[n(d,{style:{height:"8px"}}),n(p,{style:{width:"15px",height:"15px"}}),n(u)]),_:1}),r("span",z,s(a.leftThumbPosition)+", "+s(a.rightThumbPosition),1),e[3]||(e[3]=r("br",null,null,-1)),r("span",V,s(t.value2),1)]),_:1},8,["modelValue"])])}const w=P(c,[["render",L]]);c.__docgenInfo={displayName:"HSliderRangeCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-slider-range/h-slider-range-case1.vue"]};const N=`<template>
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
`,F={title:"headless-ui/h-slider-range",component:w,parameters:{docs:{description:{component:"범위 선택 슬라이더 컴포넌트입니다."},source:{code:N}}},argTypes:{}},i={};var R,S,f;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const I=["Case1"];export{i as Case1,I as __namedExportsOrder,F as default};

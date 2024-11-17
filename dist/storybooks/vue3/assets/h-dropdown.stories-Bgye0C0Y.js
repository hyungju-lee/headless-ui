import{d as g,r as p,l as v,U as b,t as o,j as s,u as e,f as l,O as w,P as u,F as V,D as k,g as x,B as C,A as S}from"./vue.esm-bundler-Uk5hQ1qI.js";import{m as B,a5 as q,a6 as E,a7 as L,a8 as $,a9 as M}from"./headless-ui-vue3.es-6gfQYSFZ.js";import"./iframe-DH1TVBFR.js";import"../sb-preview/runtime.js";const N=g({__name:"h-dropdown-case1",setup(h){const a=p({name:"테스트1",value:"test1"}),f=p([{name:"테스트1",value:"test1"},{name:"테스트2",value:"test2"},{name:"테스트3",value:"test3"},{name:"테스트4",value:"test4"},{name:"테스트5",value:"test5"},{name:"테스트6",value:"test6"},{name:"테스트7",value:"test7"},{name:"테스트8",value:"test8"},{name:"테스트9",value:"test9"},{name:"테스트10",value:"test10"},{name:"테스트11",value:"test11"}]),{checkEqual:d}=B(),m=`scrollAreaId_${Math.floor(Math.random()*1e3)}`;return(W,n)=>(l(),v("div",{id:m,style:{overflow:"auto",width:"100%",height:"300px","font-size":"14px"}},[n[1]||(n[1]=b(" 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br>",24)),o(e(M),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),class:"type1",style:{minWidth:"150px"},"scroll-event-refs":[`#${m}`]},{default:s(r=>[o(e(q),null,{default:s(()=>[w(u(a.value.name)+" "+u(r.isActiveList?"열림":"닫힘"),1)]),_:2},1024),o(e(E),{"list-width":r.listWidth},{default:s(()=>[(l(!0),v(V,null,k(f.value,t=>(l(),x(e($),{key:t.value},{default:s(()=>[o(e(L),{value:t.value,name:t.name,class:C({is_selected:e(d)(t.value,a.value.value)}),disabled:e(d)(t.value,a.value.value)},{default:s(()=>[w(u(t.name),1)]),_:2},1032,["value","name","class","disabled"])]),_:2},1024))),128))]),_:2},1032,["list-width"])]),_:1},8,["modelValue","scroll-event-refs"]),n[2]||(n[2]=b("<br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br>",25))]))}});N.__docgenInfo={exportName:"default",displayName:"h-dropdown-case1",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-dropdown/h-dropdown-case1.vue"]};const z=`<script setup lang="ts">
import {ref} from "vue";
import {
  HDropdownItemButton,
  HDropdownButton,
  HDropdownList,
  HDropdownItem,
  HDropdownArea,
  useCheckEqual
} from 'headless-ui/vue3';

const selectedValue = ref({
  name: "테스트1",
  value: "test1",
});

const selectedOptions = ref([
  {
    name: "테스트1",
    value: "test1",
  },
  {
    name: "테스트2",
    value: "test2",
  },
  {
    name: "테스트3",
    value: "test3",
  },
  {
    name: "테스트4",
    value: "test4",
  },
  {
    name: "테스트5",
    value: "test5",
  },
  {
    name: "테스트6",
    value: "test6",
  },
  {
    name: "테스트7",
    value: "test7",
  },
  {
    name: "테스트8",
    value: "test8",
  },
  {
    name: "테스트9",
    value: "test9",
  },
  {
    name: "테스트10",
    value: "test10",
  },
  {
    name: "테스트11",
    value: "test11",
  },
]);

const {checkEqual} = useCheckEqual();

const scrollAreaId = \`scrollAreaId_\${Math.floor(Math.random() * 1000)}\`;
<\/script>

<template>
  <div
      :id="scrollAreaId"
      style="overflow: auto; width: 100%; height: 300px; font-size: 14px"
  >
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>

    <HDropdownArea
        #default="slotProps"
        v-model="selectedValue"
        class="type1"
        :style="{ minWidth: '150px' }"
        :scroll-event-refs="[\`#\${scrollAreaId}\`]"
    >
      <HDropdownButton>
        {{ selectedValue.name }}
        {{ slotProps.isActiveList ? "열림" : "닫힘" }}
      </HDropdownButton>
      <HDropdownList :list-width="slotProps.listWidth">
        <HDropdownItem
            v-for="searchRequirement in selectedOptions"
            :key="searchRequirement.value"
        >
          <HDropdownItemButton
              :value="searchRequirement.value"
              :name="searchRequirement.name"
              :class="{
                is_selected: checkEqual(
                  searchRequirement.value,
                  selectedValue.value
                ),
              }"
              :disabled="
                checkEqual(searchRequirement.value, selectedValue.value)
              "
          >
            {{ searchRequirement.name }}
          </HDropdownItemButton>
        </HDropdownItem>
      </HDropdownList>
    </HDropdownArea>

    <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
    컨텐츠 <br/>
  </div>
</template>

<style scoped lang="scss">

</style>
`,O=g({__name:"h-dropdown-case2",setup(h){const a=p({name:"테스트1",value:"test1"}),f=p([{name:"테스트1",value:"test1"},{name:"테스트2",value:"test2"},{name:"테스트3",value:"test3"},{name:"테스트4",value:"test4"},{name:"테스트5",value:"test5"},{name:"테스트6",value:"test6"},{name:"테스트7",value:"test7"},{name:"테스트8",value:"test8"},{name:"테스트9",value:"test9"},{name:"테스트10",value:"test10"},{name:"테스트11",value:"test11"}]),{checkEqual:d}=B(),m=`scrollAreaId_${Math.floor(Math.random()*1e3)}`;return(W,n)=>(l(),v("div",null,[S("div",{id:m,style:{overflow:"auto",width:"100%",height:"300px","font-size":"14px"}},[n[1]||(n[1]=b(" 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br>",24)),o(e(M),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),class:"type2",style:{minWidth:"150px"},"scroll-event-refs":[`#${m}`]},{default:s(r=>[o(e(q),null,{default:s(()=>[w(u(a.value.name)+" "+u(r.isActiveList?"열림":"닫힘"),1)]),_:2},1024),o(e(E),{"list-width":r.listWidth},{default:s(()=>[(l(!0),v(V,null,k(f.value,t=>(l(),x(e($),{key:t.value},{default:s(()=>[o(e(L),{value:t.value,name:t.name,class:C({is_selected:e(d)(t.value,a.value.value)}),disabled:e(d)(t.value,a.value.value)},{default:s(()=>[w(u(t.name),1)]),_:2},1032,["value","name","class","disabled"])]),_:2},1024))),128))]),_:2},1032,["list-width"])]),_:1},8,["modelValue","scroll-event-refs"]),n[2]||(n[2]=b("<br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br> 컨텐츠 <br>",25))])]))}});O.__docgenInfo={exportName:"default",displayName:"h-dropdown-case2",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-dropdown/h-dropdown-case2.vue"]};const P=`<script setup lang="ts">
import {ref} from "vue";
import {
  HDropdownItemButton,
  HDropdownButton,
  HDropdownList,
  HDropdownItem,
  HDropdownArea,
  useCheckEqual
} from 'headless-ui/vue3';

const selectedValue = ref({
  name: "테스트1",
  value: "test1",
});

const selectedOptions = ref([
  {
    name: "테스트1",
    value: "test1",
  },
  {
    name: "테스트2",
    value: "test2",
  },
  {
    name: "테스트3",
    value: "test3",
  },
  {
    name: "테스트4",
    value: "test4",
  },
  {
    name: "테스트5",
    value: "test5",
  },
  {
    name: "테스트6",
    value: "test6",
  },
  {
    name: "테스트7",
    value: "test7",
  },
  {
    name: "테스트8",
    value: "test8",
  },
  {
    name: "테스트9",
    value: "test9",
  },
  {
    name: "테스트10",
    value: "test10",
  },
  {
    name: "테스트11",
    value: "test11",
  },
]);

const { checkEqual } = useCheckEqual();

const scrollAreaId = \`scrollAreaId_\${Math.floor(Math.random() * 1000)}\`;
<\/script>

<template>
  <div>
    <div
        :id="scrollAreaId"
        style="overflow: auto; width: 100%; height: 300px; font-size: 14px"
    >
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />

      <HDropdownArea
          #default="slotProps"
          v-model="selectedValue"
          class="type2"
          :style="{ minWidth: '150px' }"
          :scroll-event-refs="[\`#\${scrollAreaId}\`]"
      >
        <HDropdownButton>
          {{ selectedValue.name }}
          {{ slotProps.isActiveList ? "열림" : "닫힘" }}
        </HDropdownButton>
        <HDropdownList :list-width="slotProps.listWidth">
          <HDropdownItem
              v-for="searchRequirement in selectedOptions"
              :key="searchRequirement.value"
          >
            <HDropdownItemButton
                :value="searchRequirement.value"
                :name="searchRequirement.name"
                :class="{
                is_selected: checkEqual(
                  searchRequirement.value,
                  selectedValue.value
                ),
              }"
                :disabled="
                checkEqual(searchRequirement.value, selectedValue.value)
              "
            >
              {{ searchRequirement.name }}
            </HDropdownItemButton>
          </HDropdownItem>
        </HDropdownList>
      </HDropdownArea>

      <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
      컨텐츠 <br />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
`,j={title:"headless-ui/h-dropdown",component:N,parameters:{docs:{description:{component:"드롭다운 컴포넌트입니다."},source:{code:z}}},argTypes:{}},c={},i={render:h=>({components:{HDropdownCase2:O},setup(){return{args:h}},template:'<HDropdownCase2 v-bind="args" />'}),parameters:{docs:{description:{component:"두 번째 예시로서 `h-dropdown-case2` 컴포넌트를 보여줍니다."},source:{code:P}}}};var D,H,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(_=(H=c.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var y,I,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HDropdownCase2
    },
    setup() {
      return {
        args
      };
    },
    template: '<HDropdownCase2 v-bind="args" />'
  }),
  parameters: {
    docs: {
      description: {
        component: '두 번째 예시로서 \`h-dropdown-case2\` 컴포넌트를 보여줍니다.'
      },
      source: {
        code: HDropdownCase2Source
      }
    }
  }
}`,...(A=(I=i.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const G=["Case1","Case2"];export{c as Case1,i as Case2,G as __namedExportsOrder,j as default};

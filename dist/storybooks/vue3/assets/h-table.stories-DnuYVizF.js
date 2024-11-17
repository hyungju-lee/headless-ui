import{d as T,r as v,c as F,w as N,N as S,f as s,l as o,A as n,t as H,j as i,y as h,V as C,F as I,D as x,P as m}from"./vue.esm-bundler-Uk5hQ1qI.js";import{ax as w}from"./headless-ui-vue3.es-Bvy92s8z.js";import{_ as D}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./iframe-DEt0sCVg.js";import"../sb-preview/runtime.js";const E=T({name:"HTableCase1",components:{HTableArea:w},setup(){const t=v([]),e=v(!1),d=F({get(){return e.value},set(u){e.value=u,u?t.value=[...l.value]:t.value=[]}});N(t,(u,a)=>{l.value.length!==0&&(e.value=u.length===l.value.length)});const r=[{name:"항목1",value:"item1",id:"1"},{name:"항목2",value:"item2",id:"2"},{name:"항목3",value:"item3",id:"3"},{name:"항목4",value:"item4",id:"4"},{name:"항목5",value:"item5",id:"5"},{name:"항목6",value:"item6",id:"6"},{name:"항목7",value:"item7",id:"7"},{name:"항목8",value:"item8",id:"8"},{name:"항목9",value:"item9",id:"9"},{name:"항목10",value:"item10",id:"10"}],l=v(r);return{checkedSubItems:t,checkedAllSubItems:d,items:l,clickButton:()=>{l.value.length?l.value=[]:l.value=r}}}}),z=["id","input-value"],M={key:1};function P(t,e,d,r,l,b){const u=S("HTableArea");return s(),o("div",null,[n("button",{type:"button",style:{"font-size":"14px"},onClick:e[0]||(e[0]=(...a)=>t.clickButton&&t.clickButton(...a))}," 버튼 "),H(u,{"table-content-max-height":"280px","is-scroll":!0},{colgroup:i(()=>e[3]||(e[3]=[n("colgroup",null,[n("col",{style:{width:"40px"}}),n("col",{style:{width:"120px"}}),n("col",{style:{width:"120px"}}),n("col")],-1)])),head:i(()=>[n("tr",null,[n("th",null,[h(n("input",{type:"checkbox",id:"totalAllSubTeachers","onUpdate:modelValue":e[1]||(e[1]=a=>t.checkedAllSubItems=a)},null,512),[[C,t.checkedAllSubItems]])]),e[4]||(e[4]=n("th",null,"이름",-1)),e[5]||(e[5]=n("th",null,"현재 담당 학급",-1)),e[6]||(e[6]=n("th",null,"아이디",-1))])]),body:i(()=>[t.items.length>0?(s(!0),o(I,{key:0},x(t.items,a=>(s(),o("tr",{key:a.id},[n("td",null,[h(n("input",{type:"checkbox",id:a.id,"onUpdate:modelValue":e[2]||(e[2]=$=>t.checkedSubItems=$),"input-value":a},null,8,z),[[C,t.checkedSubItems]])]),n("td",null,m(a.name),1),n("td",null,m(a.value),1),n("td",null,m(a.id),1)]))),128)):(s(),o("tr",M,e[7]||(e[7]=[n("td",{colspan:"4",style:{height:"200px","font-size":"13px","font-weight":"400",color:"#999"}}," 일치하는 검색 결과가 없습니다. ",-1)])))]),_:1})])}const U=D(E,[["render",P]]);E.__docgenInfo={displayName:"HTableCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-table/h-table-case1.vue"]};const _=`<template>
  <div>
    <button type="button" style="font-size: 14px" @click="clickButton">
      버튼
    </button>
    <HTableArea table-content-max-height="280px" :is-scroll="true">
      <template #colgroup>
        <colgroup>
          <col style="width: 40px"/>
          <col style="width: 120px"/>
          <col style="width: 120px"/>
          <col/>
        </colgroup>
      </template>
      <template #head>
        <tr>
          <th>
            <input
                type="checkbox"
                id="totalAllSubTeachers"
                v-model="checkedAllSubItems"
            />
          </th>
          <th>이름</th>
          <th>현재 담당 학급</th>
          <th>아이디</th>
        </tr>
      </template>
      <template #body>
        <template v-if="items.length > 0">
          <tr v-for="item in items" :key="item.id">
            <td>
              <input
                  type="checkbox"
                  :id="item.id"
                  v-model="checkedSubItems"
                  :input-value="item"
              />
            </td>
            <td>
              {{ item.name }}
            </td>
            <td>{{ item.value }}</td>
            <td>
              {{ item.id }}
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td
                colspan="4"
                style="
                height: 200px;
                font-size: 13px;
                font-weight: 400;
                color: #999;
              "
            >
              일치하는 검색 결과가 없습니다.
            </td>
          </tr>
        </template>
      </template>
    </HTableArea>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
import {HTableArea} from "headless-ui/vue3";

interface ITEM_TYPE {
  name: string;
  value: string;
  id: string;
}

export default defineComponent({
  name: "HTableCase1",
  components: {HTableArea},
  setup() {
    const checkedSubItems = ref<ITEM_TYPE[]>([]);

    const checkedAllSubItemsState = ref(false);
    const checkedAllSubItems = computed({
      get() {
        return checkedAllSubItemsState.value;
      },
      set(value: boolean) {
        checkedAllSubItemsState.value = value;
        if (value) {
          checkedSubItems.value = [...items.value];
        } else {
          checkedSubItems.value = [];
        }
      },
    });

    watch(checkedSubItems, (newValue, oldValue) => {
      if (items.value.length === 0) {
        return;
      }
      checkedAllSubItemsState.value = newValue.length === items.value.length;
    });

    const itemsValue = [
      {
        name: "항목1",
        value: "item1",
        id: "1",
      },
      {
        name: "항목2",
        value: "item2",
        id: "2",
      },
      {
        name: "항목3",
        value: "item3",
        id: "3",
      },
      {
        name: "항목4",
        value: "item4",
        id: "4",
      },
      {
        name: "항목5",
        value: "item5",
        id: "5",
      },
      {
        name: "항목6",
        value: "item6",
        id: "6",
      },
      {
        name: "항목7",
        value: "item7",
        id: "7",
      },
      {
        name: "항목8",
        value: "item8",
        id: "8",
      },
      {
        name: "항목9",
        value: "item9",
        id: "9",
      },
      {
        name: "항목10",
        value: "item10",
        id: "10",
      },
    ];

    const items = ref<ITEM_TYPE[]>(itemsValue);

    const clickButton = () => {
      if (items.value.length) {
        items.value = [];
      } else {
        items.value = itemsValue;
      }
    };

    return {
      checkedSubItems,
      checkedAllSubItems,
      items,
      clickButton,
    };
  },
});
<\/script>

<style></style>
`,V=T({name:"HTableCase2",components:{HTableArea:w},setup(){const t=[{name:"항목1",value:"item1",id:"1"},{name:"항목2",value:"item2",id:"2"},{name:"항목3",value:"item3",id:"3"},{name:"항목4",value:"item4",id:"4"},{name:"항목5",value:"item5",id:"5"},{name:"항목6",value:"item6",id:"6"},{name:"항목7",value:"item7",id:"7"},{name:"항목8",value:"item8",id:"8"},{name:"항목9",value:"item9",id:"9"},{name:"항목10",value:"item10",id:"10"}],e=v(t);return{tableData:e,clickButton:()=>{e.value.length?e.value=[]:e.value=t}}}}),Y={key:1};function L(t,e,d,r,l,b){const u=S("HTableArea");return s(),o("div",null,[n("button",{type:"button",style:{"font-size":"14px"},onClick:e[0]||(e[0]=(...a)=>t.clickButton&&t.clickButton(...a))}," 버튼 "),H(u,{class:"type2"},{colgroup:i(()=>e[1]||(e[1]=[n("colgroup",null,[n("col",{style:{width:"30%"}}),n("col",{style:{width:"30%"}}),n("col")],-1)])),head:i(()=>e[2]||(e[2]=[n("tr",null,[n("th",null,"제목1"),n("th",null,"제목2"),n("th",null,"제목3")],-1)])),body:i(()=>[t.tableData.length?(s(!0),o(I,{key:0},x(t.tableData,a=>(s(),o("tr",{key:a.id},[n("td",null,m(a.id),1),n("td",null,m(a.name),1),n("td",null,m(a.value),1)]))),128)):(s(),o("tr",Y,e[3]||(e[3]=[n("td",{colspan:"3",style:{padding:"15px 0"}}," 현재 등록된 추가 학급이 없습니다. ",-1)])))]),_:1})])}const j=D(V,[["render",L]]);V.__docgenInfo={displayName:"HTableCase2",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-table/h-table-case2.vue"]};const O=`<template>
  <div>
    <button type="button" style="font-size: 14px" @click="clickButton">
      버튼
    </button>
    <HTableArea class="type2">
      <template #colgroup>
        <colgroup>
          <col style="width: 30%" />
          <col style="width: 30%" />
          <col />
        </colgroup>
      </template>
      <template #head>
        <tr>
          <th>제목1</th>
          <th>제목2</th>
          <th>제목3</th>
        </tr>
      </template>
      <template #body>
        <template v-if="tableData.length">
          <tr v-for="row in tableData" :key="row.id">
            <td>
              {{ row.id }}
            </td>
            <td>
              {{ row.name }}
            </td>
            <td>
              {{ row.value }}
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3" style="padding: 15px 0">
              현재 등록된 추가 학급이 없습니다.
            </td>
          </tr>
        </template>
      </template>
    </HTableArea>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {HTableArea} from "headless-ui/vue3";

export default defineComponent({
  name: "HTableCase2",
  components: { HTableArea },
  setup() {
    const data = [
      {
        name: "항목1",
        value: "item1",
        id: "1",
      },
      {
        name: "항목2",
        value: "item2",
        id: "2",
      },
      {
        name: "항목3",
        value: "item3",
        id: "3",
      },
      {
        name: "항목4",
        value: "item4",
        id: "4",
      },
      {
        name: "항목5",
        value: "item5",
        id: "5",
      },
      {
        name: "항목6",
        value: "item6",
        id: "6",
      },
      {
        name: "항목7",
        value: "item7",
        id: "7",
      },
      {
        name: "항목8",
        value: "item8",
        id: "8",
      },
      {
        name: "항목9",
        value: "item9",
        id: "9",
      },
      {
        name: "항목10",
        value: "item10",
        id: "10",
      },
    ];
    const tableData = ref(data);

    const clickButton = () => {
      if (tableData.value.length) {
        tableData.value = [];
      } else {
        tableData.value = data;
      }
    };
    return {
      tableData,
      clickButton,
    };
  },
});
<\/script>

<style></style>
`,R={title:"headless-ui/h-table",component:U,parameters:{docs:{description:{component:"테이블 컴포넌트입니다."},source:{code:_}}},argTypes:{}},c={},p={render:t=>({components:{HTableCase2:j},setup(){return{args:t}},template:'<h-table-case2 v-bind="args" />'}),parameters:{docs:{description:{component:"두 번째 예시로서 `h-table-case2` 컴포넌트를 보여줍니다."},source:{code:O}}}};var f,k,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var g,A,B;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HTableCase2
    },
    setup() {
      return {
        args
      };
    },
    template: \`<h-table-case2 v-bind="args" />\`
  }),
  parameters: {
    docs: {
      description: {
        component: '두 번째 예시로서 \`h-table-case2\` 컴포넌트를 보여줍니다.'
      },
      source: {
        code: HTableCase2Source
      }
    }
  }
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const W=["Case1","Case2"];export{c as Case1,p as Case2,W as __namedExportsOrder,R as default};

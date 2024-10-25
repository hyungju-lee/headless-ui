"use strict";(self.webpackChunkvue2=self.webpackChunkvue2||[]).push([[234],{"./src/stories/h-kanban-board/h-kanban-board.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Case1:function(){return Case1},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return h_kanban_board_stories}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),headless_ui_vue2_es=__webpack_require__("./node_modules/headless-ui/dist/vue2/headless-ui-vue2.es.js"),h_kanban_board_case1vue_type_script_lang_ts=(0,vue_esm.pM)({name:"HKanbanBoardCase1",components:{HKanbanCard:headless_ui_vue2_es.qt,HKanbanLine:headless_ui_vue2_es.GX,HKanbanArea:headless_ui_vue2_es.L1,HKanbanLineInnerArea:headless_ui_vue2_es.jA},setup(){return{dataList:(0,vue_esm.KR)([{id:1,state:"상태1",value:[{value:"1-1"},{value:"1-2"},{value:"1-3"},{value:"1-4"},{value:"1-5"},{value:"1-6"},{value:"1-7"}]},{id:2,state:"상태2",value:[{value:"2-1"},{value:"2-2"},{value:"2-3"},{value:"2-4"}]},{id:3,state:"상태3",value:[{value:"3-1"},{value:"3-2"},{value:"3-3"},{value:"3-4"},{value:"3-5"},{value:"3-6"}]},{id:4,state:"상태4",value:[{value:"4-1"},{value:"4-2"},{value:"4-3"}]}])}}});let __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").A)(h_kanban_board_case1vue_type_script_lang_ts,function render(){var _vm=this,_c=_vm._self._c;return _vm._self._setupProxy,_c("div",[_c("HKanbanArea",{staticStyle:{height:"700px"},model:{value:_vm.dataList,callback:function callback($$v){_vm.dataList=$$v},expression:"dataList"}},_vm._l(_vm.dataList,function(item,index){return _c("HKanbanLine",{key:item.id},[_c("span",{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(item.state))]),_vm._v(" "),_c("HKanbanLineInnerArea",_vm._l(item.value,function(v,i){return _c("HKanbanCard",{key:v.value,attrs:{"el-value":v,"col-index":index,"row-index":i}},[_vm._v("\n          "+_vm._s(v.value)+"\n        ")])}),1)],1)}),1),_vm._v(" "),_c("div",{staticStyle:{display:"flex"}},_vm._l(_vm.dataList,function(item){return _c("span",{key:item.id,staticStyle:{display:"flex","flex-direction":"column",flex:"1 1 0","font-size":"14px"}},_vm._l(item.value,function(v){return _c("span",{key:v.value},[_vm._v(_vm._s(v.value))])}),0)}),0)],1)},[],!1,null,"2299c952",null).exports;__vuedocgen_export_0.__docgenInfo={displayName:"HKanbanBoardCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue2/src/stories/h-kanban-board/h-kanban-board-case1.vue"]};var h_kanban_board_stories={title:"headless-ui/h-kanban-board",component:__vuedocgen_export_0,tags:["autodocs"],render:function(args,param){return{props:Object.keys(param.argTypes),components:{HKanbanBoardCase1:__vuedocgen_export_0},template:'<h-kanban-board-case1 v-bind="$props" />'}},parameters:{docs:{description:{component:"칸반 보드 컴포넌트입니다. 칸반 보드를 구현할 때 사용합니다."},source:{code:'<script lang="ts">\nimport { defineComponent, ref } from "vue";\nimport {\n  HKanbanCard,\n  HKanbanLine,\n  HKanbanArea,\n  HKanbanLineInnerArea,\n} from "headless-ui/vue2";\n\nexport default defineComponent({\n  name: "HKanbanBoardCase1",\n  components: {\n    HKanbanCard,\n    HKanbanLine,\n    HKanbanArea,\n    HKanbanLineInnerArea,\n  },\n  setup() {\n    const dataList = ref([\n      {\n        id: 1,\n        state: "상태1",\n        value: [\n          {\n            value: "1-1",\n          },\n          {\n            value: "1-2",\n          },\n          {\n            value: "1-3",\n          },\n          {\n            value: "1-4",\n          },\n          {\n            value: "1-5",\n          },\n          {\n            value: "1-6",\n          },\n          {\n            value: "1-7",\n          },\n        ],\n      },\n      {\n        id: 2,\n        state: "상태2",\n        value: [\n          {\n            value: "2-1",\n          },\n          {\n            value: "2-2",\n          },\n          {\n            value: "2-3",\n          },\n          {\n            value: "2-4",\n          },\n        ],\n      },\n      {\n        id: 3,\n        state: "상태3",\n        value: [\n          {\n            value: "3-1",\n          },\n          {\n            value: "3-2",\n          },\n          {\n            value: "3-3",\n          },\n          {\n            value: "3-4",\n          },\n          {\n            value: "3-5",\n          },\n          {\n            value: "3-6",\n          },\n        ],\n      },\n      {\n        id: 4,\n        state: "상태4",\n        value: [\n          {\n            value: "4-1",\n          },\n          {\n            value: "4-2",\n          },\n          {\n            value: "4-3",\n          },\n        ],\n      },\n    ]);\n\n    return {\n      dataList,\n    };\n  },\n});\n</script>\n\n<template>\n  <div>\n    <HKanbanArea v-model="dataList" style="height: 700px">\n      <HKanbanLine v-for="(item, index) in dataList" :key="item.id">\n        <span style="font-size: 14px">{{ item.state }}</span>\n        <HKanbanLineInnerArea>\n          <HKanbanCard\n            v-for="(v, i) in item.value"\n            :key="v.value"\n            :el-value="v"\n            :col-index="index"\n            :row-index="i"\n          >\n            {{ v.value }}\n          </HKanbanCard>\n        </HKanbanLineInnerArea>\n      </HKanbanLine>\n    </HKanbanArea>\n\n    <div style="display: flex">\n      <span\n        v-for="item in dataList"\n        :key="item.id"\n        style="\n          display: flex;\n          flex-direction: column;\n          flex: 1 1 0;\n          font-size: 14px;\n        "\n      >\n        <span v-for="v in item.value" :key="v.value">{{ v.value }}</span>\n      </span>\n    </div>\n  </div>\n</template>\n\n<style scoped lang="scss"></style>\n'}}},argTypes:{}},Case1={};Case1.parameters={...Case1.parameters,docs:{...Case1.parameters?.docs,source:{originalSource:"{}",...Case1.parameters?.docs?.source}}};let __namedExportsOrder=["Case1"]},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return normalizeComponent}});function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook){if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}}return{exports:scriptExports,options:options}}}}]);
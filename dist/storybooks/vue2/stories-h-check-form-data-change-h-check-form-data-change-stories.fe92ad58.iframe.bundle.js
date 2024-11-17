"use strict";(self.webpackChunkvue2=self.webpackChunkvue2||[]).push([[656],{"./src/stories/h-check-form-data-change/h-check-form-data-change.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Case1:function(){return Case1},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return h_check_form_data_change_stories}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),headless_ui_vue2_es=__webpack_require__("./node_modules/headless-ui/dist/vue2/headless-ui-vue2.es.js"),h_check_form_data_change_case1vue_type_script_lang_ts=(0,vue_esm.pM)({name:"HCheckFormDataChangeCase1",components:{HCheckFormDataChange:headless_ui_vue2_es.dF},setup(){let formTag=(0,vue_esm.KR)(null),name=(0,vue_esm.KR)(""),content=(0,vue_esm.KR)("content"),{deleteComponentState}=(0,headless_ui_vue2_es.Q0)(formTag,window.location.href);return(0,vue_esm.hi)(()=>{deleteComponentState()}),{formTag,name,content,checkFormData:({event,result,originalFunc,href})=>{if(result)href?(console.log(`${href}로 이동`),window.location.href=href):originalFunc(event);else{if(!confirm("작성하신 내용이 있습니다. 현재 페이지를 떠나시겠습니까?"))return;href?(console.log(`${href}로 이동`),window.location.href=href):originalFunc(event)}}}}});let __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").A)(h_check_form_data_change_case1vue_type_script_lang_ts,function render(){var _vm=this,_c=_vm._self._c;return _vm._self._setupProxy,_c("div",[_c("h3",[_vm._v("props")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c("HCheckFormDataChange",{attrs:{href:"https://www.naver.com"},on:{"data-change-verification-result":_vm.checkFormData}},[_c("a",{attrs:{href:"https://www.naver.com"}},[_vm._v("네이버 이동")])]),_vm._v(" "),_c("HCheckFormDataChange",{on:{"data-change-verification-result":_vm.checkFormData}},[_c("router-link",{attrs:{to:"/test"}},[_vm._v("테스트 이동")])],1),_vm._v(" "),_c("form",{ref:"formTag"},[_vm._v("\n    이름: "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:_vm.name},on:{input:function($event){$event.target.composing||(_vm.name=$event.target.value)}}}),_vm._v(" "),_c("br"),_vm._v("\n    설명: "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.content,expression:"content"}],attrs:{type:"text",name:"content"},domProps:{value:_vm.content},on:{input:function($event){$event.target.composing||(_vm.content=$event.target.value)}}})])],1)},[function(){var _c=this._self._c;return this._self._setupProxy,_c("ul",[_c("li",[this._v("href:")])])}],!1,null,"7ca66e12",null).exports;__vuedocgen_export_0.__docgenInfo={displayName:"HCheckFormDataChangeCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue2/src/stories/h-check-form-data-change/h-check-form-data-change-case1.vue"]};var h_check_form_data_change_stories={title:"headless-ui/h-check-form-data-change",component:__vuedocgen_export_0,tags:["autodocs"],render:function(args,param){return{props:Object.keys(param.argTypes),components:{HCheckFormDataChangeCase1:__vuedocgen_export_0},template:'<h-check-form-data-change-case1 v-bind="$props" />'}},parameters:{docs:{description:{component:"폼 데이터의 변경을 감지하는 컴포넌트입니다. 폼 데이터가 변경되었는지 아닌지 결과를 `data-change-verification-result` 이벤트를 통해 전달합니다."},source:{code:'<script lang="ts">\nimport { defineComponent, ref, onUnmounted } from "vue";\nimport { HCheckFormDataChange, useFormChangeCheck } from "headless-ui/vue2";\n\ninterface checkFormDataProps {\n  event: Event;\n  result: boolean;\n  originalFunc: (e: Event) => void;\n  href?: string | null | undefined;\n  target?: string | undefined;\n}\n\nexport default defineComponent({\n  name: "HCheckFormDataChangeCase1",\n  components: {\n    HCheckFormDataChange,\n  },\n  setup() {\n    const formTag = ref<HTMLFormElement | null>(null);\n    const name = ref("");\n    const content = ref("content");\n\n    const { deleteComponentState } = useFormChangeCheck(\n      formTag,\n      window.location.href\n    );\n\n    onUnmounted(() => {\n      deleteComponentState();\n    });\n\n    const checkFormData = ({\n      event,\n      result,\n      originalFunc,\n      href,\n    }: checkFormDataProps) => {\n      if (!result) {\n        const res = confirm(\n          "작성하신 내용이 있습니다. 현재 페이지를 떠나시겠습니까?"\n        );\n        if (!res) {\n          return;\n        }\n        if (href) {\n          console.log(`${href}로 이동`);\n          window.location.href = href;\n        } else {\n          originalFunc(event);\n        }\n      } else {\n        if (href) {\n          console.log(`${href}로 이동`);\n          window.location.href = href;\n        } else {\n          originalFunc(event);\n        }\n      }\n    };\n\n    return {\n      formTag,\n      name,\n      content,\n      checkFormData,\n    };\n  },\n});\n</script>\n\n<template>\n  <div>\n    <h3>props</h3>\n    <ul>\n      <li>href:</li>\n    </ul>\n    <HCheckFormDataChange\n      href="https://www.naver.com"\n      @data-change-verification-result="checkFormData"\n    >\n      <a href="https://www.naver.com">네이버 이동</a>\n    </HCheckFormDataChange>\n    <HCheckFormDataChange @data-change-verification-result="checkFormData">\n      <router-link to="/test">테스트 이동</router-link>\n    </HCheckFormDataChange>\n    <form ref="formTag">\n      이름: <input type="text" v-model="name" name="name" />\n      <br />\n      설명: <input type="text" v-model="content" name="content" />\n    </form>\n  </div>\n</template>\n\n<style scoped lang="scss"></style>\n'}}},argTypes:{}},Case1={};Case1.parameters={...Case1.parameters,docs:{...Case1.parameters?.docs,source:{originalSource:"{}",...Case1.parameters?.docs?.source}}};let __namedExportsOrder=["Case1"]},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return normalizeComponent}});function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook){if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}}return{exports:scriptExports,options:options}}}}]);
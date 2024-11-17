"use strict";(self.webpackChunkvue2=self.webpackChunkvue2||[]).push([[160],{"./src/stories/h-single-file-upload/h-single-file-upload.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Case1:function(){return Case1},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return h_single_file_upload_stories}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),headless_ui_vue2_es=__webpack_require__("./node_modules/headless-ui/dist/vue2/headless-ui-vue2.es.js"),h_single_file_upload_case1vue_type_script_lang_ts=(0,vue_esm.pM)({name:"HSingleFileUploadCase1",components:{HSingleFileUploadedFileAddButton:headless_ui_vue2_es._Z,HSingleFileUploadedFileDeleteButton:headless_ui_vue2_es.Ir,HSingleFileUploadedFileSize:headless_ui_vue2_es.pr,HSingleFileUploadedFileName:headless_ui_vue2_es.GM,HSingleFileUploadedFileArea:headless_ui_vue2_es.WX,HSingleFileUploadErrorMsg:headless_ui_vue2_es.lb,HSingleFileUploadNoFileErrorMsg:headless_ui_vue2_es.IY,HSingleFileUploadTitle:headless_ui_vue2_es.Kj,HSingleFileUploadArea:headless_ui_vue2_es.B0},setup(){let uploadedFile=(0,vue_esm.KR)(null);return(0,vue_esm.wB)(uploadedFile,(newValue,oldValue)=>{console.log("v-model 동작 확인용",newValue,oldValue)}),{uploadedFile}}});let __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").A)(h_single_file_upload_case1vue_type_script_lang_ts,function render(){var _vm=this,_c=_vm._self._c;return _vm._self._setupProxy,_c("HSingleFileUploadArea",{model:{value:_vm.uploadedFile,callback:function callback($$v){_vm.uploadedFile=$$v},expression:"uploadedFile"}},[_c("HSingleFileUploadTitle",[_vm._v(" 파일 업로드 ")]),_vm._v(" "),_c("HSingleFileUploadNoFileErrorMsg",[_vm._v("\n    파일을 업로드해주세요.\n  ")]),_vm._v(" "),_c("HSingleFileUploadErrorMsg",[_vm._v("\n    파일 양식이 잘못되었습니다.\n  ")]),_vm._v(" "),_c("HSingleFileUploadedFileArea",[_c("HSingleFileUploadedFileName"),_vm._v(" "),_c("HSingleFileUploadedFileSize"),_vm._v(" "),_c("HSingleFileUploadedFileDeleteButton",[_vm._v("\n      X\n    ")])],1),_vm._v(" "),_c("HSingleFileUploadedFileAddButton",[_vm._v("\n    파일 첨부하기\n  ")])],1)},[],!1,null,"59a853fa",null).exports;__vuedocgen_export_0.__docgenInfo={displayName:"HSingleFileUploadCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue2/src/stories/h-single-file-upload/h-single-file-upload-case1.vue"]};var h_single_file_upload_stories={title:"headless-ui/h-single-file-upload",component:__vuedocgen_export_0,tags:["autodocs"],render:function(args,param){return{props:Object.keys(param.argTypes),components:{HSingleFileUploadCase1:__vuedocgen_export_0},template:'<h-single-file-upload-case1 v-bind="$props" />'}},parameters:{docs:{description:{component:"파일 업로드 컴포넌트입니다. 파일을 업로드할 수 있습니다."},source:{code:'<script lang="ts">\nimport { defineComponent, ref, watch } from "vue";\nimport {\n  HSingleFileUploadedFileAddButton,\n  HSingleFileUploadedFileDeleteButton,\n  HSingleFileUploadedFileSize,\n  HSingleFileUploadedFileName,\n  HSingleFileUploadedFileArea,\n  HSingleFileUploadErrorMsg,\n  HSingleFileUploadNoFileErrorMsg,\n  HSingleFileUploadTitle,\n  HSingleFileUploadArea,\n} from "headless-ui/vue2";\n\nexport default defineComponent({\n  name: "HSingleFileUploadCase1",\n  components: {\n    HSingleFileUploadedFileAddButton,\n    HSingleFileUploadedFileDeleteButton,\n    HSingleFileUploadedFileSize,\n    HSingleFileUploadedFileName,\n    HSingleFileUploadedFileArea,\n    HSingleFileUploadErrorMsg,\n    HSingleFileUploadNoFileErrorMsg,\n    HSingleFileUploadTitle,\n    HSingleFileUploadArea,\n  },\n  setup() {\n    const uploadedFile = ref(null);\n\n    // v-model 잘 동작하는지 확인\n    watch(uploadedFile, (newValue, oldValue) => {\n      console.log("v-model 동작 확인용", newValue, oldValue);\n    });\n\n    return {\n      uploadedFile,\n    };\n  },\n});\n</script>\n\n<template>\n  <HSingleFileUploadArea v-model="uploadedFile">\n    <HSingleFileUploadTitle> 파일 업로드 </HSingleFileUploadTitle>\n    <HSingleFileUploadNoFileErrorMsg>\n      파일을 업로드해주세요.\n    </HSingleFileUploadNoFileErrorMsg>\n    <HSingleFileUploadErrorMsg>\n      파일 양식이 잘못되었습니다.\n    </HSingleFileUploadErrorMsg>\n    <HSingleFileUploadedFileArea>\n      <HSingleFileUploadedFileName />\n      <HSingleFileUploadedFileSize />\n      <HSingleFileUploadedFileDeleteButton>\n        X\n      </HSingleFileUploadedFileDeleteButton>\n    </HSingleFileUploadedFileArea>\n    <HSingleFileUploadedFileAddButton>\n      파일 첨부하기\n    </HSingleFileUploadedFileAddButton>\n  </HSingleFileUploadArea>\n</template>\n\n<style scoped lang="scss"></style>\n'}}},argTypes:{}},Case1={};Case1.parameters={...Case1.parameters,docs:{...Case1.parameters?.docs,source:{originalSource:"{}",...Case1.parameters?.docs?.source}}};let __namedExportsOrder=["Case1"]},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return normalizeComponent}});function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook){if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}}return{exports:scriptExports,options:options}}}}]);
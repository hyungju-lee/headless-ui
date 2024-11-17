"use strict";(self.webpackChunkvue2=self.webpackChunkvue2||[]).push([[54],{"./src/stories/h-file-upload/h-file-upload.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Case1:function(){return Case1},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return h_file_upload_stories}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),headless_ui_vue2_es=__webpack_require__("./node_modules/headless-ui/dist/vue2/headless-ui-vue2.es.js"),h_file_upload_case1vue_type_script_lang_ts=(0,vue_esm.pM)({name:"HFileUploadCase1",components:{HFileUploadArea:headless_ui_vue2_es.B,HFileUploadButton:headless_ui_vue2_es.Q7,HFileUploadFileList:headless_ui_vue2_es.SN,HFileUploadFileItem:headless_ui_vue2_es.BE},setup(){console.log("common file upload cases.vue");let files=(0,vue_esm.KR)([]);(0,vue_esm.wB)(files,newValue=>{console.log("files change",newValue)},{immediate:!0,deep:!0});let testFiles=(0,vue_esm.KR)([]);return(0,vue_esm.wB)(testFiles,newValue=>{console.log("testFiles change",newValue)},{immediate:!0,deep:!0}),{files,testFiles,exceedFileNum:()=>{alert("파일 갯수 초과")},exceedFileSize:()=>{alert("파일 총용량 초과")}}}});let __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").A)(h_file_upload_case1vue_type_script_lang_ts,function render(){var _vm=this,_c=_vm._self._c;return _vm._self._setupProxy,_c("div",[_c("h1",{staticStyle:{"font-size":"18px"}},[_vm._v("파일 업로드 - 멀티")]),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.files))]),_vm._v(" "),_c("HFileUploadArea",{attrs:{multiple:!0,"max-files":5,"max-size":0xa00000},on:{"exceed-file-num":_vm.exceedFileNum,"exceed-file-size":_vm.exceedFileSize},scopedSlots:_vm._u([{key:"default",fn:function fn(param){var isDragOver=param.isDragOver;return[_vm._v("\n    "+_vm._s(isDragOver?"드래그오버":"")+"\n    "),_c("HFileUploadButton",[_vm._v("파일 업로드")]),_vm._v(" "),_c("HFileUploadFileList",[_c("HFileUploadFileItem",{scopedSlots:_vm._u([{key:"default",fn:function fn(param){var filename=param.filename,filesize=param.filesize,removeFileFunc=param.removeFileFunc;return[_c("span",{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(filename))]),_vm._v(" "),_c("span",{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(filesize))]),_vm._v(" "),_c("button",{attrs:{type:"button"},on:{click:removeFileFunc}},[_vm._v("삭제")])]}}],null,!0)})],1)]}}]),model:{value:_vm.files,callback:function callback($$v){_vm.files=$$v},expression:"files"}}),_vm._v(" "),_c("div",{staticStyle:{height:"100px"}}),_vm._v(" "),_c("h1",{staticStyle:{"font-size":"18px"}},[_vm._v("파일 업로드 - 싱글")]),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.testFiles))]),_vm._v(" "),_c("HFileUploadArea",{attrs:{multiple:!1,"max-files":1,"max-size":5242880},on:{"exceed-file-num":_vm.exceedFileNum,"exceed-file-size":_vm.exceedFileSize},scopedSlots:_vm._u([{key:"default",fn:function fn(param){var isDragOver=param.isDragOver;return[_vm._v("\n    "+_vm._s(isDragOver?"드래그오버":"")+"\n    "),_c("HFileUploadButton",[_vm._v("파일 업로드")]),_vm._v(" "),_c("HFileUploadFileList",[_c("HFileUploadFileItem",{scopedSlots:_vm._u([{key:"default",fn:function fn(param){var filename=param.filename,filesize=param.filesize,removeFileFunc=param.removeFileFunc;return[_c("span",{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(filename))]),_vm._v(" "),_c("span",{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(filesize))]),_vm._v(" "),_c("button",{attrs:{type:"button"},on:{click:removeFileFunc}},[_vm._v("삭제")])]}}],null,!0)})],1)]}}]),model:{value:_vm.testFiles,callback:function callback($$v){_vm.testFiles=$$v},expression:"testFiles"}})],1)},[],!1,null,"c5f1b888",null).exports;__vuedocgen_export_0.__docgenInfo={displayName:"HFileUploadCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue2/src/stories/h-file-upload/h-file-upload-case1.vue"]};var h_file_upload_stories={title:"headless-ui/h-file-upload",component:__vuedocgen_export_0,tags:["autodocs"],render:function(args,param){return{props:Object.keys(param.argTypes),components:{HFileUploadCase1:__vuedocgen_export_0},template:'<h-file-upload-case1 v-bind="$props" />'}},parameters:{docs:{description:{component:"파일 업로드 컴포넌트입니다. 파일을 업로드할 수 있습니다."},source:{code:'<script lang="ts">\nimport { defineComponent, ref, watch } from "vue";\nimport {\n  HFileUploadArea,\n  HFileUploadButton,\n  HFileUploadFileList,\n  HFileUploadFileItem,\n} from "headless-ui/vue2";\n\nexport default defineComponent({\n  name: "HFileUploadCase1",\n  components: {\n    HFileUploadArea,\n    HFileUploadButton,\n    HFileUploadFileList,\n    HFileUploadFileItem,\n  },\n  setup() {\n    console.log("common file upload cases.vue");\n    const files = ref([]);\n\n    watch(\n      files,\n      (newValue) => {\n        console.log("files change", newValue);\n      },\n      { immediate: true, deep: true }\n    );\n\n    const testFiles = ref([]);\n\n    watch(\n      testFiles,\n      (newValue) => {\n        console.log("testFiles change", newValue);\n      },\n      { immediate: true, deep: true }\n    );\n\n    const exceedFileNum = () => {\n      alert("파일 갯수 초과");\n    };\n\n    const exceedFileSize = () => {\n      alert("파일 총용량 초과");\n    };\n\n    return {\n      files,\n      testFiles,\n      exceedFileNum,\n      exceedFileSize,\n    };\n  },\n});\n</script>\n\n<template>\n  <div>\n    <h1 style="font-size: 18px">파일 업로드 - 멀티</h1>\n    <p>{{ files }}</p>\n    <HFileUploadArea\n      #default="{ isDragOver }"\n      v-model="files"\n      :multiple="true"\n      :max-files="5"\n      :max-size="10 * 1024 * 1024"\n      @exceed-file-num="exceedFileNum"\n      @exceed-file-size="exceedFileSize"\n    >\n      {{ isDragOver ? "드래그오버" : "" }}\n      <HFileUploadButton>파일 업로드</HFileUploadButton>\n      <HFileUploadFileList>\n        <HFileUploadFileItem>\n          <template #default="{ filename, filesize, removeFileFunc }">\n            <span style="font-size: 14px">{{ filename }}</span>\n            <span style="font-size: 14px">{{ filesize }}</span>\n            <button type="button" @click="removeFileFunc">삭제</button>\n          </template>\n        </HFileUploadFileItem>\n      </HFileUploadFileList>\n    </HFileUploadArea>\n\n    <div style="height: 100px"></div>\n\n    <h1 style="font-size: 18px">파일 업로드 - 싱글</h1>\n    <p>{{ testFiles }}</p>\n    <HFileUploadArea\n      #default="{ isDragOver }"\n      v-model="testFiles"\n      :multiple="false"\n      :max-files="1"\n      :max-size="5 * 1024 * 1024"\n      @exceed-file-num="exceedFileNum"\n      @exceed-file-size="exceedFileSize"\n    >\n      {{ isDragOver ? "드래그오버" : "" }}\n      <HFileUploadButton>파일 업로드</HFileUploadButton>\n      <HFileUploadFileList>\n        <HFileUploadFileItem>\n          <template #default="{ filename, filesize, removeFileFunc }">\n            <span style="font-size: 14px">{{ filename }}</span>\n            <span style="font-size: 14px">{{ filesize }}</span>\n            <button type="button" @click="removeFileFunc">삭제</button>\n          </template>\n        </HFileUploadFileItem>\n      </HFileUploadFileList>\n    </HFileUploadArea>\n  </div>\n</template>\n\n<style scoped lang="scss"></style>\n'}}},argTypes:{}},Case1={};Case1.parameters={...Case1.parameters,docs:{...Case1.parameters?.docs,source:{originalSource:"{}",...Case1.parameters?.docs?.source}}};let __namedExportsOrder=["Case1"]},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return normalizeComponent}});function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook){if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}}return{exports:scriptExports,options:options}}}}]);
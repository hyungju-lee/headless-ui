"use strict";(self.webpackChunkvue2=self.webpackChunkvue2||[]).push([[558],{"./src/stories/h-single-drag-x-area/h-single-drag-x-area.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Case1:function(){return Case1},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return h_single_drag_x_area_stories}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),headless_ui_vue2_es=__webpack_require__("./node_modules/headless-ui/dist/vue2/headless-ui-vue2.es.js"),h_single_drag_x_area_case1vue_type_script_lang_ts=(0,vue_esm.pM)({name:"HSingleDragXAreaCase1",components:{HSingleDragXArea:headless_ui_vue2_es.Yw},setup(){let{scrollArea,dragAreaXStyle}=(0,headless_ui_vue2_es.To)({minWidth:"80px",backgroundColor:"#ccc"});return{scrollArea,dragAreaXStyle}}});let __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").A)(h_single_drag_x_area_case1vue_type_script_lang_ts,function render(){var _c=this._self._c;return this._self._setupProxy,_c("div",{ref:"scrollArea",staticStyle:{position:"relative",width:"100%",height:"300px","background-color":"#ddd"}},[_c("HSingleDragXArea",{style:this.dragAreaXStyle,attrs:{"button-position":"left","button-background-color":"#f5f5f5"}},[_c("p",{staticStyle:{"padding-left":"30px"}},[this._v("드래그 영역")])])],1)},[],!1,null,"aa637b88",null).exports;__vuedocgen_export_0.__docgenInfo={displayName:"HSingleDragXAreaCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue2/src/stories/h-single-drag-x-area/h-single-drag-x-area-case1.vue"]};var h_single_drag_x_area_stories={title:"headless-ui/h-single-drag-x-areas",component:__vuedocgen_export_0,tags:["autodocs"],render:function(args,param){return{props:Object.keys(param.argTypes),components:{HSingleDragXAreaCase1:__vuedocgen_export_0},template:'<h-single-drag-x-area-case1 v-bind="$props" />'}},parameters:{docs:{description:{component:"영역의 너비를 조절할 수 있는 컴포넌트입니다. 드래그로 영역의 너비를 조절할 수 있습니다."},source:{code:'<script lang="ts">\nimport { defineComponent } from "vue";\nimport { HSingleDragXArea, useHSingleDragXArea } from "headless-ui/vue2";\n\nexport default defineComponent({\n  name: "HSingleDragXAreaCase1",\n  components: { HSingleDragXArea },\n  setup() {\n    const { scrollArea, dragAreaXStyle } = useHSingleDragXArea({\n      minWidth: "80px",\n      backgroundColor: "#ccc",\n    });\n\n    return {\n      scrollArea,\n      dragAreaXStyle,\n    };\n  },\n});\n</script>\n\n<template>\n  <div\n    ref="scrollArea"\n    style="\n      position: relative;\n      width: 100%;\n      height: 300px;\n      background-color: #ddd;\n    "\n  >\n    <HSingleDragXArea\n      button-position="left"\n      button-background-color="#f5f5f5"\n      :style="dragAreaXStyle"\n    >\n      <p style="padding-left: 30px">드래그 영역</p>\n    </HSingleDragXArea>\n  </div>\n</template>\n\n<style scoped lang="scss"></style>\n'}}},argTypes:{}},Case1={};Case1.parameters={...Case1.parameters,docs:{...Case1.parameters?.docs,source:{originalSource:"{}",...Case1.parameters?.docs?.source}}};let __namedExportsOrder=["Case1"]},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return normalizeComponent}});function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook){if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}}return{exports:scriptExports,options:options}}}}]);
(self.webpackChunkvue2=self.webpackChunkvue2||[]).push([[187],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{BN:function(){return MDXContext},RP:function(){return useMDXComponents},gz:function(){return withMDXComponents},xA:function(){return MDXProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Configure.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RightArrow:function(){return RightArrow}}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_nhn_study_headless_ui_ui_storybook_vue2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");let RightArrow=()=>{let _components=Object.assign({svg:"svg",path:"path"},(0,_Users_nhn_study_headless_ui_ui_storybook_vue2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p"},(0,_Users_nhn_study_headless_ui_ui_storybook_vue2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Headless Ui Components for Vue v2"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"headless-uivue2",children:"headless-ui/vue2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Vue v2 환경에서 사용하기 위한 headless-ui component 모음입니다."})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

              .sb-section {
                width: 100%;
                display: flex;
                flex-direction: row;
                gap: 20px;
              }

              img {
                object-fit: cover;
              }

              .sb-section-title {
                margin-bottom: 32px;
              }

              .sb-section a:not(h1 a, h2 a, h3 a) {
                font-size: 14px;
              }

              .sb-section-item, .sb-grid-item {
                flex: 1;
                display: flex;
                flex-direction: column;
              }

              .sb-section-item-heading {
                padding-top: 20px !important;
                padding-bottom: 5px !important;
                margin: 0 !important;
              }
              .sb-section-item-paragraph {
                margin: 0;
                padding-bottom: 10px;
              }

              .sb-chevron {
                margin-left: 5px;
              }

              .sb-features-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 32px 20px;
              }

              .sb-socials {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
              }

              .sb-socials p {
                margin-bottom: 10px;
              }

              .sb-explore-image {
                max-height: 32px;
                align-self: flex-start;
              }

              .sb-addon {
                width: 100%;
                display: flex;
                align-items: center;
                position: relative;
                background-color: #EEF3F8;
                border-radius: 5px;
                border: 1px solid rgba(0, 0, 0, 0.05);
                background: #EEF3F8;
                height: 180px;
                margin-bottom: 48px;
                overflow: hidden;
              }

              .sb-addon-text {
                padding-left: 48px;
                max-width: 240px;
              }

              .sb-addon-text h4 {
                padding-top: 0px;
              }

              .sb-addon-img {
                position: absolute;
                left: 345px;
                top: 0;
                height: 100%;
                width: 200%;
                overflow: hidden;
              }

              .sb-addon-img img {
                width: 650px;
                transform: rotate(-15deg);
                margin-left: 40px;
                margin-top: -72px;
                box-shadow: 0 0 1px rgba(255, 255, 255, 0);
                backface-visibility: hidden;
              }

              @media screen and (max-width: 800px) {
                .sb-addon-img {
                  left: 300px;
                }
              }

              @media screen and (max-width: 600px) {
                .sb-section {
                  flex-direction: column;
                }

                .sb-features-grid {
                  grid-template-columns: repeat(1, 1fr);
                }

                .sb-socials {
                  grid-template-columns: repeat(2, 1fr);
                }

                .sb-addon {
                  height: 280px;
                  align-items: flex-start;
                  padding-top: 32px;
                  overflow: hidden;
                }

                .sb-addon-text {
                  padding-left: 24px;
                }

                .sb-addon-img {
                  right: 0;
                  left: 0;
                  top: 130px;
                  bottom: 0;
                  overflow: hidden;
                  height: auto;
                  width: 124%;
                }

                .sb-addon-img img {
                  width: 1200px;
                  transform: rotate(-12deg);
                  margin-left: 0;
                  margin-top: 48px;
                  margin-bottom: -40px;
                  margin-left: -24px;
                }
              }
`})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,_Users_nhn_study_headless_ui_ui_storybook_vue2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}__webpack_exports__.default=MDXContent},"./node_modules/memoizerific sync recursive":function(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-Configure-mdx.aaaa3a73.iframe.bundle.js.map
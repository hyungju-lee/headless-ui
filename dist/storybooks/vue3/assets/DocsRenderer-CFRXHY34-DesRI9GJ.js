const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CYvlbAXz.js","./index-j6KPdRbo.js","./index-CaJX-1mr.js","./iframe-DwDBHqwe.js","./index-DZVNkkTA.js","./index-D-8MO0q_.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-DwDBHqwe.js";import{ao as E,ai as s,ap as d,aq as v,ar as R,ag as n,as as w}from"./index-CaJX-1mr.js";import"../sb-preview/runtime.js";import"./index-DZVNkkTA.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";var l,m=E;l=m.createRoot,m.hydrateRoot;var a=new Map;function _(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var g=async(e,t,r)=>{let o=await y(t,r);if(_()){o.render(e);return}let{promise:i,resolve:u}=Promise.withResolvers();return o.render(s.createElement(f,{callback:u},e)),i},x=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},y=async(e,t)=>{let r=a.get(e);return r||(r=l(e,t),a.set(e,r)),r},D={code:d,a:v,...R},C=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},P=class{constructor(){this.render=async(e,t,r)=>{let o={...D,...t==null?void 0:t.components},i=w;return new Promise((u,p)=>{h(async()=>{const{MDXProvider:c}=await import("./index-CYvlbAXz.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:c})=>g(n.createElement(C,{showException:p,key:Math.random()},n.createElement(c,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{x(e)}}};export{P as DocsRenderer,D as defaultComponents};

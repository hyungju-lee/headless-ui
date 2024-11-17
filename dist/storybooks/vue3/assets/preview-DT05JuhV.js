import{e as it,r as ct,s as at}from"./entry-preview-HgOBTTVw.js";import{H as lt,u as F,R as ut,M as ft,d as Ge,S as ht,a as Y,c as T,h as Ke,p as le,r as dt,w as pt}from"./vue.esm-bundler-Uk5hQ1qI.js";import{r as mt}from"./headless-ui-vue3.es-6gfQYSFZ.js";import"./iframe-DH1TVBFR.js";import"../sb-preview/runtime.js";const{global:gt}=__STORYBOOK_MODULE_GLOBAL__;__STORYBOOK_MODULE_PREVIEW_API__;var{window:te}=gt;te.STORYBOOK_ENV="vue3";te.PLUGINS_SETUP_FUNCTIONS||(te.PLUGINS_SETUP_FUNCTIONS=new Set);({...it});var ze;try{(ze=module==null?void 0:module.hot)!=null&&ze.decline&&module.hot.decline()}catch{}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const z=typeof document<"u";function qe(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&qe(e.default)}const w=Object.assign;function ue(e,t){const n={};for(const r in t){const o=t[r];n[r]=I(o)?o.map(e):e(o)}return n}const Q=()=>{},I=Array.isArray,Ve=/#/g,yt=/&/g,Rt=/\//g,Et=/=/g,Pt=/\?/g,De=/\+/g,wt=/%5B/g,St=/%5D/g,Fe=/%5E/g,_t=/%60/g,Qe=/%7B/g,Ct=/%7C/g,We=/%7D/g,bt=/%20/g;function ge(e){return encodeURI(""+e).replace(Ct,"|").replace(wt,"[").replace(St,"]")}function Ot(e){return ge(e).replace(Qe,"{").replace(We,"}").replace(Fe,"^")}function de(e){return ge(e).replace(De,"%2B").replace(bt,"+").replace(Ve,"%23").replace(yt,"%26").replace(_t,"`").replace(Qe,"{").replace(We,"}").replace(Fe,"^")}function kt(e){return de(e).replace(Et,"%3D")}function At(e){return ge(e).replace(Ve,"%23").replace(Pt,"%3F")}function xt(e){return e==null?"":At(e).replace(Rt,"%2F")}function X(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Mt=/\/$/,Lt=e=>e.replace(Mt,"");function fe(e,t,n="/"){let r,o={},a="",d="";const g=t.indexOf("#");let i=t.indexOf("?");return g<i&&g>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,g>-1?g:t.length),o=e(a)),g>-1&&(r=r||t.slice(0,g),d=t.slice(g,t.length)),r=$t(r??t,n),{fullPath:r+(a&&"?")+a+d,path:r,query:o,hash:X(d)}}function It(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _e(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Tt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&G(t.matched[r],n.matched[o])&&Ye(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ye(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Nt(e[n],t[n]))return!1;return!0}function Nt(e,t){return I(e)?Ce(e,t):I(t)?Ce(t,e):e===t}function Ce(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $t(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let a=n.length-1,d,g;for(d=0;d<r.length;d++)if(g=r[d],g!==".")if(g==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(d).join("/")}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var W;(function(e){e.back="back",e.forward="forward",e.unknown=""})(W||(W={}));function Bt(e){if(!e)if(z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lt(e)}const Ht=/^[^#]+#/;function jt(e,t){return e.replace(Ht,"#")+t}function Ut(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ne=()=>({left:window.scrollX,top:window.scrollY});function zt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Ut(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function be(e,t){return(history.state?history.state.position-t:-1)+e}const pe=new Map;function Gt(e,t){pe.set(e,t)}function Kt(e){const t=pe.get(e);return pe.delete(e),t}let qt=()=>location.protocol+"//"+location.host;function Xe(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let g=o.includes(e.slice(a))?e.slice(a).length:1,i=o.slice(g);return i[0]!=="/"&&(i="/"+i),_e(i,"")}return _e(n,e)+r+o}function Vt(e,t,n,r){let o=[],a=[],d=null;const g=({state:l})=>{const u=Xe(e,location),P=n.value,S=t.value;let b=0;if(l){if(n.value=u,t.value=l,d&&d===P){d=null;return}b=S?l.position-S.position:0}else r(u);o.forEach(O=>{O(n.value,P,{delta:b,type:Z.pop,direction:b?b>0?W.forward:W.back:W.unknown})})};function i(){d=n.value}function f(l){o.push(l);const u=()=>{const P=o.indexOf(l);P>-1&&o.splice(P,1)};return a.push(u),u}function h(){const{history:l}=window;l.state&&l.replaceState(w({},l.state,{scroll:ne()}),"")}function c(){for(const l of a)l();a=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:i,listen:f,destroy:c}}function Oe(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?ne():null}}function Dt(e){const{history:t,location:n}=window,r={value:Xe(e,n)},o={value:t.state};o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(i,f,h){const c=e.indexOf("#"),l=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+i:qt()+e+i;try{t[h?"replaceState":"pushState"](f,"",l),o.value=f}catch(u){console.error(u),n[h?"replace":"assign"](l)}}function d(i,f){const h=w({},t.state,Oe(o.value.back,i,o.value.forward,!0),f,{position:o.value.position});a(i,h,!0),r.value=i}function g(i,f){const h=w({},o.value,t.state,{forward:i,scroll:ne()});a(h.current,h,!0);const c=w({},Oe(r.value,i,null),{position:h.position+1},f);a(i,c,!1),r.value=i}return{location:r,state:o,push:g,replace:d}}function Ft(e){e=Bt(e);const t=Dt(e),n=Vt(e,t.state,t.location,t.replace);function r(a,d=!0){d||n.pauseListeners(),history.go(a)}const o=w({location:"",base:e,go:r,createHref:jt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Qt(e){return typeof e=="string"||e&&typeof e=="object"}function Ze(e){return typeof e=="string"||typeof e=="symbol"}const Je=Symbol("");var ke;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ke||(ke={}));function K(e,t){return w(new Error,{type:e,[Je]:!0},t)}function N(e,t){return e instanceof Error&&Je in e&&(t==null||!!(e.type&t))}const Ae="[^/]+?",Wt={sensitive:!1,strict:!1,start:!0,end:!0},Yt=/[.+*?^${}()[\]/\\]/g;function Xt(e,t){const n=w({},Wt,t),r=[];let o=n.start?"^":"";const a=[];for(const f of e){const h=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let c=0;c<f.length;c++){const l=f[c];let u=40+(n.sensitive?.25:0);if(l.type===0)c||(o+="/"),o+=l.value.replace(Yt,"\\$&"),u+=40;else if(l.type===1){const{value:P,repeatable:S,optional:b,regexp:O}=l;a.push({name:P,repeatable:S,optional:b});const E=O||Ae;if(E!==Ae){u+=10;try{new RegExp(`(${E})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${P}" (${E}): `+L.message)}}let _=S?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;c||(_=b&&f.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),o+=_,u+=20,b&&(u+=-8),S&&(u+=-20),E===".*"&&(u+=-50)}h.push(u)}r.push(h)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function g(f){const h=f.match(d),c={};if(!h)return null;for(let l=1;l<h.length;l++){const u=h[l]||"",P=a[l-1];c[P.name]=u&&P.repeatable?u.split("/"):u}return c}function i(f){let h="",c=!1;for(const l of e){(!c||!h.endsWith("/"))&&(h+="/"),c=!1;for(const u of l)if(u.type===0)h+=u.value;else if(u.type===1){const{value:P,repeatable:S,optional:b}=u,O=P in f?f[P]:"";if(I(O)&&!S)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const E=I(O)?O.join("/"):O;if(!E)if(b)l.length<2&&(h.endsWith("/")?h=h.slice(0,-1):c=!0);else throw new Error(`Missing required param "${P}"`);h+=E}}return h||"/"}return{re:d,score:r,keys:a,parse:g,stringify:i}}function Zt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function et(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const a=Zt(r[n],o[n]);if(a)return a;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Jt={type:0,value:""},en=/[a-zA-Z0-9_]/;function tn(e){if(!e)return[[]];if(e==="/")return[[Jt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${f}": ${u}`)}let n=0,r=n;const o=[];let a;function d(){a&&o.push(a),a=[]}let g=0,i,f="",h="";function c(){f&&(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:h,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function l(){f+=i}for(;g<e.length;){if(i=e[g++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&c(),d()):i===":"?(c(),n=1):l();break;case 4:l(),n=r;break;case 1:i==="("?n=2:en.test(i)?l():(c(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--);break;case 2:i===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+i:n=3:h+=i;break;case 3:c(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--,h="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),c(),d(),o}function nn(e,t,n){const r=Xt(tn(e.path),n),o=w(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function rn(e,t){const n=[],r=new Map;t=Te({strict:!1,end:!0,sensitive:!1},t);function o(c){return r.get(c)}function a(c,l,u){const P=!u,S=Le(c);S.aliasOf=u&&u.record;const b=Te(t,c),O=[S];if("alias"in c){const L=typeof c.alias=="string"?[c.alias]:c.alias;for(const j of L)O.push(Le(w({},S,{components:u?u.record.components:S.components,path:j,aliasOf:u?u.record:S})))}let E,_;for(const L of O){const{path:j}=L;if(l&&j[0]!=="/"){const $=l.record.path,M=$[$.length-1]==="/"?"":"/";L.path=l.record.path+(j&&M+j)}if(E=nn(L,l,b),u?u.alias.push(E):(_=_||E,_!==E&&_.alias.push(E),P&&c.name&&!Ie(E)&&d(c.name)),tt(E)&&i(E),S.children){const $=S.children;for(let M=0;M<$.length;M++)a($[M],E,u&&u.children[M])}u=u||E}return _?()=>{d(_)}:Q}function d(c){if(Ze(c)){const l=r.get(c);l&&(r.delete(c),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(c);l>-1&&(n.splice(l,1),c.record.name&&r.delete(c.record.name),c.children.forEach(d),c.alias.forEach(d))}}function g(){return n}function i(c){const l=cn(c,n);n.splice(l,0,c),c.record.name&&!Ie(c)&&r.set(c.record.name,c)}function f(c,l){let u,P={},S,b;if("name"in c&&c.name){if(u=r.get(c.name),!u)throw K(1,{location:c});b=u.record.name,P=w(Me(l.params,u.keys.filter(_=>!_.optional).concat(u.parent?u.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),c.params&&Me(c.params,u.keys.map(_=>_.name))),S=u.stringify(P)}else if(c.path!=null)S=c.path,u=n.find(_=>_.re.test(S)),u&&(P=u.parse(S),b=u.record.name);else{if(u=l.name?r.get(l.name):n.find(_=>_.re.test(l.path)),!u)throw K(1,{location:c,currentLocation:l});b=u.record.name,P=w({},l.params,c.params),S=u.stringify(P)}const O=[];let E=u;for(;E;)O.unshift(E.record),E=E.parent;return{name:b,path:S,params:P,matched:O,meta:sn(O)}}e.forEach(c=>a(c));function h(){n.length=0,r.clear()}return{addRoute:a,resolve:f,removeRoute:d,clearRoutes:h,getRoutes:g,getRecordMatcher:o}}function Me(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Le(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:on(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function on(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ie(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sn(e){return e.reduce((t,n)=>w(t,n.meta),{})}function Te(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function cn(e,t){let n=0,r=t.length;for(;n!==r;){const a=n+r>>1;et(e,t[a])<0?r=a:n=a+1}const o=an(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function an(e){let t=e;for(;t=t.parent;)if(tt(t)&&et(e,t)===0)return t}function tt({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ln(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const a=r[o].replace(De," "),d=a.indexOf("="),g=X(d<0?a:a.slice(0,d)),i=d<0?null:X(a.slice(d+1));if(g in t){let f=t[g];I(f)||(f=t[g]=[f]),f.push(i)}else t[g]=i}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=kt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(a=>a&&de(a)):[r&&de(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function un(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const fn=Symbol(""),$e=Symbol(""),ve=Symbol(""),nt=Symbol(""),me=Symbol("");function D(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function H(e,t,n,r,o,a=d=>d()){const d=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((g,i)=>{const f=l=>{l===!1?i(K(4,{from:n,to:t})):l instanceof Error?i(l):Qt(l)?i(K(2,{from:t,to:l})):(d&&r.enterCallbacks[o]===d&&typeof l=="function"&&d.push(l),g())},h=a(()=>e.call(r&&r.instances[o],t,n,f));let c=Promise.resolve(h);e.length<3&&(c=c.then(f)),c.catch(l=>i(l))})}function he(e,t,n,r,o=a=>a()){const a=[];for(const d of e)for(const g in d.components){let i=d.components[g];if(!(t!=="beforeRouteEnter"&&!d.instances[g]))if(qe(i)){const h=(i.__vccOpts||i)[t];h&&a.push(H(h,n,r,d,g,o))}else{let f=i();a.push(()=>f.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${g}" at "${d.path}"`);const c=vt(h)?h.default:h;d.mods[g]=h,d.components[g]=c;const u=(c.__vccOpts||c)[t];return u&&H(u,n,r,d,g,o)()}))}}return a}function Be(e){const t=Y(ve),n=Y(nt),r=T(()=>{const i=F(e.to);return t.resolve(i)}),o=T(()=>{const{matched:i}=r.value,{length:f}=i,h=i[f-1],c=n.matched;if(!h||!c.length)return-1;const l=c.findIndex(G.bind(null,h));if(l>-1)return l;const u=He(i[f-2]);return f>1&&He(h)===u&&c[c.length-1].path!==u?c.findIndex(G.bind(null,i[f-2])):l}),a=T(()=>o.value>-1&&mn(n.params,r.value.params)),d=T(()=>o.value>-1&&o.value===n.matched.length-1&&Ye(n.params,r.value.params));function g(i={}){return pn(i)?t[F(e.replace)?"replace":"push"](F(e.to)).catch(Q):Promise.resolve()}return{route:r,href:T(()=>r.value.href),isActive:a,isExactActive:d,navigate:g}}const hn=Ge({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Be,setup(e,{slots:t}){const n=ht(Be(e)),{options:r}=Y(ve),o=T(()=>({[je(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[je(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Ke("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),dn=hn;function pn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!I(o)||o.length!==r.length||r.some((a,d)=>a!==o[d]))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const je=(e,t,n)=>e??t??n,gn=Ge({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(me),o=T(()=>e.route||r.value),a=Y($e,0),d=T(()=>{let f=F(a);const{matched:h}=o.value;let c;for(;(c=h[f])&&!c.components;)f++;return f}),g=T(()=>o.value.matched[d.value]);le($e,T(()=>d.value+1)),le(fn,g),le(me,o);const i=dt();return pt(()=>[i.value,g.value,e.name],([f,h,c],[l,u,P])=>{h&&(h.instances[c]=f,u&&u!==h&&f&&f===l&&(h.leaveGuards.size||(h.leaveGuards=u.leaveGuards),h.updateGuards.size||(h.updateGuards=u.updateGuards))),f&&h&&(!u||!G(h,u)||!l)&&(h.enterCallbacks[c]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=o.value,h=e.name,c=g.value,l=c&&c.components[h];if(!l)return Ue(n.default,{Component:l,route:f});const u=c.props[h],P=u?u===!0?f.params:typeof u=="function"?u(f):u:null,b=Ke(l,w({},P,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(c.instances[h]=null)},ref:i}));return Ue(n.default,{Component:b,route:f})||b}}});function Ue(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const vn=gn;function yn(e){const t=rn(e.routes,e),n=e.parseQuery||ln,r=e.stringifyQuery||Ne,o=e.history,a=D(),d=D(),g=D(),i=lt(B);let f=B;z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ue.bind(null,s=>""+s),c=ue.bind(null,xt),l=ue.bind(null,X);function u(s,m){let p,v;return Ze(s)?(p=t.getRecordMatcher(s),v=m):v=s,t.addRoute(v,p)}function P(s){const m=t.getRecordMatcher(s);m&&t.removeRoute(m)}function S(){return t.getRoutes().map(s=>s.record)}function b(s){return!!t.getRecordMatcher(s)}function O(s,m){if(m=w({},m||i.value),typeof s=="string"){const y=fe(n,s,m.path),A=t.resolve({path:y.path},m),V=o.createHref(y.fullPath);return w(y,A,{params:l(A.params),hash:X(y.hash),redirectedFrom:void 0,href:V})}let p;if(s.path!=null)p=w({},s,{path:fe(n,s.path,m.path).path});else{const y=w({},s.params);for(const A in y)y[A]==null&&delete y[A];p=w({},s,{params:c(y)}),m.params=c(m.params)}const v=t.resolve(p,m),C=s.hash||"";v.params=h(l(v.params));const k=It(r,w({},s,{hash:Ot(C),path:v.path})),R=o.createHref(k);return w({fullPath:k,hash:C,query:r===Ne?un(s.query):s.query||{}},v,{redirectedFrom:void 0,href:R})}function E(s){return typeof s=="string"?fe(n,s,i.value.path):w({},s)}function _(s,m){if(f!==s)return K(8,{from:m,to:s})}function L(s){return M(s)}function j(s){return L(w(E(s),{replace:!0}))}function $(s){const m=s.matched[s.matched.length-1];if(m&&m.redirect){const{redirect:p}=m;let v=typeof p=="function"?p(s):p;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=E(v):{path:v},v.params={}),w({query:s.query,hash:s.hash,params:v.path!=null?{}:s.params},v)}}function M(s,m){const p=f=O(s),v=i.value,C=s.state,k=s.force,R=s.replace===!0,y=$(p);if(y)return M(w(E(y),{state:typeof y=="object"?w({},C,y.state):C,force:k,replace:R}),m||p);const A=p;A.redirectedFrom=m;let V;return!k&&Tt(r,v,p)&&(V=K(16,{to:A,from:v}),we(v,v,!0,!1)),(V?Promise.resolve(V):ye(A,v)).catch(x=>N(x)?N(x,2)?x:ie(x):se(x,A,v)).then(x=>{if(x){if(N(x,2))return M(w({replace:R},E(x.to),{state:typeof x.to=="object"?w({},C,x.to.state):C,force:k}),m||A)}else x=Ee(A,v,!0,R,C);return Re(A,v,x),x})}function rt(s,m){const p=_(s,m);return p?Promise.reject(p):Promise.resolve()}function re(s){const m=ee.values().next().value;return m&&typeof m.runWithContext=="function"?m.runWithContext(s):s()}function ye(s,m){let p;const[v,C,k]=Rn(s,m);p=he(v.reverse(),"beforeRouteLeave",s,m);for(const y of v)y.leaveGuards.forEach(A=>{p.push(H(A,s,m))});const R=rt.bind(null,s,m);return p.push(R),U(p).then(()=>{p=[];for(const y of a.list())p.push(H(y,s,m));return p.push(R),U(p)}).then(()=>{p=he(C,"beforeRouteUpdate",s,m);for(const y of C)y.updateGuards.forEach(A=>{p.push(H(A,s,m))});return p.push(R),U(p)}).then(()=>{p=[];for(const y of k)if(y.beforeEnter)if(I(y.beforeEnter))for(const A of y.beforeEnter)p.push(H(A,s,m));else p.push(H(y.beforeEnter,s,m));return p.push(R),U(p)}).then(()=>(s.matched.forEach(y=>y.enterCallbacks={}),p=he(k,"beforeRouteEnter",s,m,re),p.push(R),U(p))).then(()=>{p=[];for(const y of d.list())p.push(H(y,s,m));return p.push(R),U(p)}).catch(y=>N(y,8)?y:Promise.reject(y))}function Re(s,m,p){g.list().forEach(v=>re(()=>v(s,m,p)))}function Ee(s,m,p,v,C){const k=_(s,m);if(k)return k;const R=m===B,y=z?history.state:{};p&&(v||R?o.replace(s.fullPath,w({scroll:R&&y&&y.scroll},C)):o.push(s.fullPath,C)),i.value=s,we(s,m,p,R),ie()}let q;function ot(){q||(q=o.listen((s,m,p)=>{if(!Se.listening)return;const v=O(s),C=$(v);if(C){M(w(C,{replace:!0}),v).catch(Q);return}f=v;const k=i.value;z&&Gt(be(k.fullPath,p.delta),ne()),ye(v,k).catch(R=>N(R,12)?R:N(R,2)?(M(R.to,v).then(y=>{N(y,20)&&!p.delta&&p.type===Z.pop&&o.go(-1,!1)}).catch(Q),Promise.reject()):(p.delta&&o.go(-p.delta,!1),se(R,v,k))).then(R=>{R=R||Ee(v,k,!1),R&&(p.delta&&!N(R,8)?o.go(-p.delta,!1):p.type===Z.pop&&N(R,20)&&o.go(-1,!1)),Re(v,k,R)}).catch(Q)}))}let oe=D(),Pe=D(),J;function se(s,m,p){ie(s);const v=Pe.list();return v.length?v.forEach(C=>C(s,m,p)):console.error(s),Promise.reject(s)}function st(){return J&&i.value!==B?Promise.resolve():new Promise((s,m)=>{oe.add([s,m])})}function ie(s){return J||(J=!s,ot(),oe.list().forEach(([m,p])=>s?p(s):m()),oe.reset()),s}function we(s,m,p,v){const{scrollBehavior:C}=e;if(!z||!C)return Promise.resolve();const k=!p&&Kt(be(s.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return ft().then(()=>C(s,m,k)).then(R=>R&&zt(R)).catch(R=>se(R,s,m))}const ce=s=>o.go(s);let ae;const ee=new Set,Se={currentRoute:i,listening:!0,addRoute:u,removeRoute:P,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:S,resolve:O,options:e,push:L,replace:j,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:a.add,beforeResolve:d.add,afterEach:g.add,onError:Pe.add,isReady:st,install(s){const m=this;s.component("RouterLink",dn),s.component("RouterView",vn),s.config.globalProperties.$router=m,Object.defineProperty(s.config.globalProperties,"$route",{enumerable:!0,get:()=>F(i)}),z&&!ae&&i.value===B&&(ae=!0,L(o.location).catch(C=>{}));const p={};for(const C in B)Object.defineProperty(p,C,{get:()=>i.value[C],enumerable:!0});s.provide(ve,m),s.provide(nt,ut(p)),s.provide(me,i);const v=s.unmount;ee.add(s),s.unmount=function(){ee.delete(s),ee.size<1&&(f=B,q&&q(),q=null,i.value=B,ae=!1,J=!1),v()}}};function U(s){return s.reduce((m,p)=>m.then(()=>re(p)),Promise.resolve())}return Se}function Rn(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let d=0;d<a;d++){const g=t.matched[d];g&&(e.matched.find(f=>G(f,g))?r.push(g):n.push(g));const i=e.matched[d];i&&(t.matched.find(f=>G(f,i))||o.push(i))}return[n,r,o]}const En=yn({history:Ft(),routes:[{path:"/",component:{template:"<div>Home Page</div>"}},{path:"/test",component:{template:"<div>Test Page</div>"}}]});at(e=>{e.directive("ripple",mt()),e.use(En)});const bn={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:(e,t)=>e.id===t.id?0:e.id.localeCompare(t.id,void 0,{numeric:!0})}},tags:["autodocs"]};export{bn as default};

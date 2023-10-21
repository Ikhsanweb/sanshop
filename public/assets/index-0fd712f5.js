function O0(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ia(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vf={exports:{}},Fa={},Yf={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),A0=Symbol.for("react.portal"),L0=Symbol.for("react.fragment"),D0=Symbol.for("react.strict_mode"),$0=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),F0=Symbol.for("react.forward_ref"),U0=Symbol.for("react.suspense"),B0=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),Uu=Symbol.iterator;function W0(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var Qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kf=Object.assign,qf={};function ro(e,t,r){this.props=e,this.context=t,this.refs=qf,this.updater=r||Qf}ro.prototype.isReactComponent={};ro.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ro.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gf(){}Gf.prototype=ro.prototype;function bc(e,t,r){this.props=e,this.context=t,this.refs=qf,this.updater=r||Qf}var Ec=bc.prototype=new Gf;Ec.constructor=bc;Kf(Ec,ro.prototype);Ec.isPureReactComponent=!0;var Bu=Array.isArray,Xf=Object.prototype.hasOwnProperty,Nc={current:null},Jf={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Xf.call(t,n)&&!Jf.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)o[n]===void 0&&(o[n]=l[n]);return{$$typeof:hi,type:e,key:i,ref:a,props:o,_owner:Nc.current}}function V0(e,t){return{$$typeof:hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function Y0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Hu=/\/+/g;function Ts(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Y0(""+e.key):t.toString(36)}function Yi(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case hi:case A0:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+Ts(a,0):n,Bu(o)?(r="",e!=null&&(r=e.replace(Hu,"$&/")+"/"),Yi(o,t,r,"",function(u){return u})):o!=null&&(Pc(o)&&(o=V0(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Hu,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",Bu(e))for(var l=0;l<e.length;l++){i=e[l];var c=n+Ts(i,l);a+=Yi(i,t,r,c,o)}else if(c=W0(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=n+Ts(i,l++),a+=Yi(i,t,r,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ei(e,t,r){if(e==null)return e;var n=[],o=0;return Yi(e,n,"","",function(i){return t.call(r,i,o++)}),n}function Q0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},Qi={transition:null},K0={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Qi,ReactCurrentOwner:Nc};he.Children={map:Ei,forEach:function(e,t,r){Ei(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ei(e,function(){t++}),t},toArray:function(e){return Ei(e,function(t){return t})||[]},only:function(e){if(!Pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=ro;he.Fragment=L0;he.Profiler=$0;he.PureComponent=bc;he.StrictMode=D0;he.Suspense=U0;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;he.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Kf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Nc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Xf.call(t,c)&&!Jf.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:hi,type:e.type,key:o,ref:i,props:n,_owner:a}};he.createContext=function(e){return e={$$typeof:I0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M0,_context:e},e.Consumer=e};he.createElement=Zf;he.createFactory=function(e){var t=Zf.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:F0,render:e}};he.isValidElement=Pc;he.lazy=function(e){return{$$typeof:H0,_payload:{_status:-1,_result:e},_init:Q0}};he.memo=function(e,t){return{$$typeof:B0,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Qi.transition;Qi.transition={};try{e()}finally{Qi.transition=t}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(e,t){return gt.current.useCallback(e,t)};he.useContext=function(e){return gt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};he.useEffect=function(e,t){return gt.current.useEffect(e,t)};he.useId=function(){return gt.current.useId()};he.useImperativeHandle=function(e,t,r){return gt.current.useImperativeHandle(e,t,r)};he.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return gt.current.useMemo(e,t)};he.useReducer=function(e,t,r){return gt.current.useReducer(e,t,r)};he.useRef=function(e){return gt.current.useRef(e)};he.useState=function(e){return gt.current.useState(e)};he.useSyncExternalStore=function(e,t,r){return gt.current.useSyncExternalStore(e,t,r)};he.useTransition=function(){return gt.current.useTransition()};he.version="18.2.0";Yf.exports=he;var P=Yf.exports;const ie=Ia(P),gl=O0({__proto__:null,default:ie},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=P,G0=Symbol.for("react.element"),X0=Symbol.for("react.fragment"),J0=Object.prototype.hasOwnProperty,Z0=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e1={key:!0,ref:!0,__self:!0,__source:!0};function ep(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)J0.call(t,n)&&!e1.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:G0,type:e,key:i,ref:a,props:o,_owner:Z0.current}}Fa.Fragment=X0;Fa.jsx=ep;Fa.jsxs=ep;Vf.exports=Fa;var s=Vf.exports,yl={},tp={exports:{}},_t={},rp={exports:{}},np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,C){var O=E.length;E.push(C);e:for(;0<O;){var V=O-1>>>1,T=E[V];if(0<o(T,C))E[V]=C,E[O]=T,O=V;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var C=E[0],O=E.pop();if(O!==C){E[0]=O;e:for(var V=0,T=E.length,$=T>>>1;V<$;){var M=2*(V+1)-1,G=E[M],j=M+1,re=E[j];if(0>o(G,O))j<T&&0>o(re,G)?(E[V]=re,E[j]=O,V=j):(E[V]=G,E[M]=O,V=M);else if(j<T&&0>o(re,O))E[V]=re,E[j]=O,V=j;else break e}}return C}function o(E,C){var O=E.sortIndex-C.sortIndex;return O!==0?O:E.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,g=3,w=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(E){for(var C=r(u);C!==null;){if(C.callback===null)n(u);else if(C.startTime<=E)n(u),C.sortIndex=C.expirationTime,t(c,C);else break;C=r(u)}}function S(E){if(x=!1,y(E),!v)if(r(c)!==null)v=!0,H(b);else{var C=r(u);C!==null&&k(S,C.startTime-E)}}function b(E,C){v=!1,x&&(x=!1,h(A),A=-1),w=!0;var O=g;try{for(y(C),f=r(c);f!==null&&(!(f.expirationTime>C)||E&&!ge());){var V=f.callback;if(typeof V=="function"){f.callback=null,g=f.priorityLevel;var T=V(f.expirationTime<=C);C=e.unstable_now(),typeof T=="function"?f.callback=T:f===r(c)&&n(c),y(C)}else n(c);f=r(c)}if(f!==null)var $=!0;else{var M=r(u);M!==null&&k(S,M.startTime-C),$=!1}return $}finally{f=null,g=O,w=!1}}var z=!1,F=null,A=-1,q=5,W=-1;function ge(){return!(e.unstable_now()-W<q)}function fe(){if(F!==null){var E=e.unstable_now();W=E;var C=!0;try{C=F(!0,E)}finally{C?Y():(z=!1,F=null)}}else z=!1}var Y;if(typeof p=="function")Y=function(){p(fe)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=fe,Y=function(){D.postMessage(null)}}else Y=function(){m(fe,0)};function H(E){F=E,z||(z=!0,Y())}function k(E,C){A=m(function(){E(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,H(b))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var C=3;break;default:C=g}var O=g;g=C;try{return E()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,C){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=g;g=E;try{return C()}finally{g=O}},e.unstable_scheduleCallback=function(E,C,O){var V=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?V+O:V):O=V,E){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=O+T,E={id:d++,callback:C,priorityLevel:E,startTime:O,expirationTime:T,sortIndex:-1},O>V?(E.sortIndex=O,t(u,E),r(c)===null&&E===r(u)&&(x?(h(A),A=-1):x=!0,k(S,O-V))):(E.sortIndex=T,t(c,E),v||w||(v=!0,H(b))),E},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(E){var C=g;return function(){var O=g;g=C;try{return E.apply(this,arguments)}finally{g=O}}}})(np);rp.exports=np;var t1=rp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=P,Rt=t1;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ip=new Set,Yo={};function mn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Yo[e]=t,e=0;e<t.length;e++)ip.add(t[e])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vl=Object.prototype.hasOwnProperty,r1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wu={},Vu={};function n1(e){return vl.call(Vu,e)?!0:vl.call(Wu,e)?!1:r1.test(e)?Vu[e]=!0:(Wu[e]=!0,!1)}function o1(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i1(e,t,r,n){if(t===null||typeof t>"u"||o1(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,r,n,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rc=/[\-:]([a-z])/g;function _c(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rc,_c);st[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rc,_c);st[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rc,_c);st[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tc(e,t,r,n){var o=st.hasOwnProperty(t)?st[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(i1(t,r,o,n)&&(r=null),n||o===null?n1(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Cr=op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ni=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),Oc=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),sp=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),lp=Symbol.for("react.offscreen"),Yu=Symbol.iterator;function xo(e){return e===null||typeof e!="object"?null:(e=Yu&&e[Yu]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,Os;function _o(e){if(Os===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Os=t&&t[1]||""}return`
`+Os+e}var zs=!1;function As(e,t){if(!e||zs)return"";zs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{zs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?_o(e):""}function a1(e){switch(e.tag){case 5:return _o(e.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return e=As(e.type,!1),e;case 11:return e=As(e.type.render,!1),e;case 1:return e=As(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Sn:return"Portal";case xl:return"Profiler";case Oc:return"StrictMode";case wl:return"Suspense";case Sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sp:return(e.displayName||"Context")+".Consumer";case ap:return(e._context.displayName||"Context")+".Provider";case zc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ac:return t=e.displayName||null,t!==null?t:jl(e.type)||"Memo";case _r:t=e._payload,e=e._init;try{return jl(e(t))}catch{}}return null}function s1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(t);case 8:return t===Oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l1(e){var t=cp(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=l1(e))}function up(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=cp(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var r=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Qu(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Yr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dp(e,t){t=t.checked,t!=null&&Tc(e,"checked",t,!1)}function Cl(e,t){dp(e,t);var r=Yr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,r):t.hasOwnProperty("defaultValue")&&bl(e,t.type,Yr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ku(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function bl(e,t,r){(t!=="number"||fa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var To=Array.isArray;function Dn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Yr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function El(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(B(92));if(To(r)){if(1<r.length)throw Error(B(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Yr(r)}}function fp(e,t){var r=Yr(t.value),n=Yr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ri,hp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ri=Ri||document.createElement("div"),Ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c1=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(e){c1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lo[t]=Lo[e]})});function mp(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Lo.hasOwnProperty(e)&&Lo[e]?(""+t).trim():t+"px"}function gp(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=mp(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var u1=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(u1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function Rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,$n=null,Mn=null;function Xu(e){if(e=yi(e)){if(typeof Tl!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Va(t),Tl(e.stateNode,e.type,t))}}function yp(e){$n?Mn?Mn.push(e):Mn=[e]:$n=e}function vp(){if($n){var e=$n,t=Mn;if(Mn=$n=null,Xu(e),t)for(e=0;e<t.length;e++)Xu(t[e])}}function xp(e,t){return e(t)}function wp(){}var Ls=!1;function Sp(e,t,r){if(Ls)return e(t,r);Ls=!0;try{return xp(e,t,r)}finally{Ls=!1,($n!==null||Mn!==null)&&(wp(),vp())}}function Ko(e,t){var r=e.stateNode;if(r===null)return null;var n=Va(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(B(231,t,typeof r));return r}var Ol=!1;if(xr)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Ol=!1}function d1(e,t,r,n,o,i,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var Do=!1,pa=null,ha=!1,zl=null,f1={onError:function(e){Do=!0,pa=e}};function p1(e,t,r,n,o,i,a,l,c){Do=!1,pa=null,d1.apply(f1,arguments)}function h1(e,t,r,n,o,i,a,l,c){if(p1.apply(this,arguments),Do){if(Do){var u=pa;Do=!1,pa=null}else throw Error(B(198));ha||(ha=!0,zl=u)}}function gn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function jp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ju(e){if(gn(e)!==e)throw Error(B(188))}function m1(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Ju(o),e;if(i===n)return Ju(o),t;i=i.sibling}throw Error(B(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a)throw Error(B(189))}}if(r.alternate!==n)throw Error(B(190))}if(r.tag!==3)throw Error(B(188));return r.stateNode.current===r?e:t}function kp(e){return e=m1(e),e!==null?Cp(e):null}function Cp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cp(e);if(t!==null)return t;e=e.sibling}return null}var bp=Rt.unstable_scheduleCallback,Zu=Rt.unstable_cancelCallback,g1=Rt.unstable_shouldYield,y1=Rt.unstable_requestPaint,Ie=Rt.unstable_now,v1=Rt.unstable_getCurrentPriorityLevel,Dc=Rt.unstable_ImmediatePriority,Ep=Rt.unstable_UserBlockingPriority,ma=Rt.unstable_NormalPriority,x1=Rt.unstable_LowPriority,Np=Rt.unstable_IdlePriority,Ua=null,ir=null;function w1(e){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:k1,S1=Math.log,j1=Math.LN2;function k1(e){return e>>>=0,e===0?32:31-(S1(e)/j1|0)|0}var _i=64,Ti=4194304;function Oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~o;l!==0?n=Oo(l):(i&=a,i!==0&&(n=Oo(i)))}else a=r&~o,a!==0?n=Oo(a):i!==0&&(n=Oo(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Kt(t),o=1<<r,n|=e[r],t&=~o;return n}function C1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b1(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Kt(i),l=1<<a,c=o[a];c===-1?(!(l&r)||l&n)&&(o[a]=C1(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pp(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function Ds(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function mi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Kt(t),e[t]=r}function E1(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Kt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function $c(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Kt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var je=0;function Rp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _p,Mc,Tp,Op,zp,Ll=!1,Oi=[],Dr=null,$r=null,Mr=null,qo=new Map,Go=new Map,Or=[],N1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ed(e,t){switch(e){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":qo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function So(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=yi(t),t!==null&&Mc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function P1(e,t,r,n,o){switch(t){case"focusin":return Dr=So(Dr,e,t,r,n,o),!0;case"dragenter":return $r=So($r,e,t,r,n,o),!0;case"mouseover":return Mr=So(Mr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return qo.set(i,So(qo.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Go.set(i,So(Go.get(i)||null,e,t,r,n,o)),!0}return!1}function Ap(e){var t=rn(e.target);if(t!==null){var r=gn(t);if(r!==null){if(t=r.tag,t===13){if(t=jp(r),t!==null){e.blockedOn=t,zp(e.priority,function(){Tp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);_l=n,r.target.dispatchEvent(n),_l=null}else return t=yi(r),t!==null&&Mc(t),e.blockedOn=r,!1;t.shift()}return!0}function td(e,t,r){Ki(e)&&r.delete(t)}function R1(){Ll=!1,Dr!==null&&Ki(Dr)&&(Dr=null),$r!==null&&Ki($r)&&($r=null),Mr!==null&&Ki(Mr)&&(Mr=null),qo.forEach(td),Go.forEach(td)}function jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,R1)))}function Xo(e){function t(o){return jo(o,e)}if(0<Oi.length){jo(Oi[0],e);for(var r=1;r<Oi.length;r++){var n=Oi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Dr!==null&&jo(Dr,e),$r!==null&&jo($r,e),Mr!==null&&jo(Mr,e),qo.forEach(t),Go.forEach(t),r=0;r<Or.length;r++)n=Or[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Or.length&&(r=Or[0],r.blockedOn===null);)Ap(r),r.blockedOn===null&&Or.shift()}var In=Cr.ReactCurrentBatchConfig,ya=!0;function _1(e,t,r,n){var o=je,i=In.transition;In.transition=null;try{je=1,Ic(e,t,r,n)}finally{je=o,In.transition=i}}function T1(e,t,r,n){var o=je,i=In.transition;In.transition=null;try{je=4,Ic(e,t,r,n)}finally{je=o,In.transition=i}}function Ic(e,t,r,n){if(ya){var o=Dl(e,t,r,n);if(o===null)Ys(e,t,n,va,r),ed(e,n);else if(P1(o,e,t,r,n))n.stopPropagation();else if(ed(e,n),t&4&&-1<N1.indexOf(e)){for(;o!==null;){var i=yi(o);if(i!==null&&_p(i),i=Dl(e,t,r,n),i===null&&Ys(e,t,n,va,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Ys(e,t,n,null,r)}}var va=null;function Dl(e,t,r,n){if(va=null,e=Lc(n),e=rn(e),e!==null)if(t=gn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=jp(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return va=e,null}function Lp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v1()){case Dc:return 1;case Ep:return 4;case ma:case x1:return 16;case Np:return 536870912;default:return 16}default:return 16}}var Ar=null,Fc=null,qi=null;function Dp(){if(qi)return qi;var e,t=Fc,r=t.length,n,o="value"in Ar?Ar.value:Ar.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[i-n];n++);return qi=o.slice(e,1<n?1-n:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function rd(){return!1}function Tt(e){function t(r,n,o,i,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zi:rd,this.isPropagationStopped=rd,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),t}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uc=Tt(no),gi=Le({},no,{view:0,detail:0}),O1=Tt(gi),$s,Ms,ko,Ba=Le({},gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ko&&(ko&&e.type==="mousemove"?($s=e.screenX-ko.screenX,Ms=e.screenY-ko.screenY):Ms=$s=0,ko=e),$s)},movementY:function(e){return"movementY"in e?e.movementY:Ms}}),nd=Tt(Ba),z1=Le({},Ba,{dataTransfer:0}),A1=Tt(z1),L1=Le({},gi,{relatedTarget:0}),Is=Tt(L1),D1=Le({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=Tt(D1),M1=Le({},no,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I1=Tt(M1),F1=Le({},no,{data:0}),od=Tt(F1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=H1[e])?!!t[e]:!1}function Bc(){return W1}var V1=Le({},gi,{key:function(e){if(e.key){var t=U1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y1=Tt(V1),Q1=Le({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=Tt(Q1),K1=Le({},gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),q1=Tt(K1),G1=Le({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),X1=Tt(G1),J1=Le({},Ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z1=Tt(J1),eg=[9,13,27,32],Hc=xr&&"CompositionEvent"in window,$o=null;xr&&"documentMode"in document&&($o=document.documentMode);var tg=xr&&"TextEvent"in window&&!$o,$p=xr&&(!Hc||$o&&8<$o&&11>=$o),ad=String.fromCharCode(32),sd=!1;function Mp(e,t){switch(e){case"keyup":return eg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function rg(e,t){switch(e){case"compositionend":return Ip(t);case"keypress":return t.which!==32?null:(sd=!0,ad);case"textInput":return e=t.data,e===ad&&sd?null:e;default:return null}}function ng(e,t){if(kn)return e==="compositionend"||!Hc&&Mp(e,t)?(e=Dp(),qi=Fc=Ar=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $p&&t.locale!=="ko"?null:t.data;default:return null}}var og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!og[e.type]:t==="textarea"}function Fp(e,t,r,n){yp(n),t=xa(t,"onChange"),0<t.length&&(r=new Uc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Mo=null,Jo=null;function ig(e){Xp(e,0)}function Ha(e){var t=En(e);if(up(t))return e}function ag(e,t){if(e==="change")return t}var Up=!1;if(xr){var Fs;if(xr){var Us="oninput"in document;if(!Us){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),Us=typeof cd.oninput=="function"}Fs=Us}else Fs=!1;Up=Fs&&(!document.documentMode||9<document.documentMode)}function ud(){Mo&&(Mo.detachEvent("onpropertychange",Bp),Jo=Mo=null)}function Bp(e){if(e.propertyName==="value"&&Ha(Jo)){var t=[];Fp(t,Jo,e,Lc(e)),Sp(ig,t)}}function sg(e,t,r){e==="focusin"?(ud(),Mo=t,Jo=r,Mo.attachEvent("onpropertychange",Bp)):e==="focusout"&&ud()}function lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ha(Jo)}function cg(e,t){if(e==="click")return Ha(t)}function ug(e,t){if(e==="input"||e==="change")return Ha(t)}function dg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:dg;function Zo(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!vl.call(t,o)||!Gt(e[o],t[o]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var r=dd(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=dd(r)}}function Hp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wp(){for(var e=window,t=fa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=fa(e.document)}return t}function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fg(e){var t=Wp(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Hp(r.ownerDocument.documentElement,r)){if(n!==null&&Wc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=fd(r,i);var a=fd(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pg=xr&&"documentMode"in document&&11>=document.documentMode,Cn=null,$l=null,Io=null,Ml=!1;function pd(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ml||Cn==null||Cn!==fa(n)||(n=Cn,"selectionStart"in n&&Wc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Io&&Zo(Io,n)||(Io=n,n=xa($l,"onSelect"),0<n.length&&(t=new Uc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Cn)))}function Ai(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var bn={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Bs={},Vp={};xr&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Wa(e){if(Bs[e])return Bs[e];if(!bn[e])return e;var t=bn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vp)return Bs[e]=t[r];return e}var Yp=Wa("animationend"),Qp=Wa("animationiteration"),Kp=Wa("animationstart"),qp=Wa("transitionend"),Gp=new Map,hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(e,t){Gp.set(e,t),mn(t,[e])}for(var Hs=0;Hs<hd.length;Hs++){var Ws=hd[Hs],hg=Ws.toLowerCase(),mg=Ws[0].toUpperCase()+Ws.slice(1);qr(hg,"on"+mg)}qr(Yp,"onAnimationEnd");qr(Qp,"onAnimationIteration");qr(Kp,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(qp,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function md(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,h1(n,t,void 0,e),e.currentTarget=null}function Xp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;md(o,l,u),i=c}else for(a=0;a<n.length;a++){if(l=n[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;md(o,l,u),i=c}}}if(ha)throw e=zl,ha=!1,zl=null,e}function Ne(e,t){var r=t[Hl];r===void 0&&(r=t[Hl]=new Set);var n=e+"__bubble";r.has(n)||(Jp(t,e,2,!1),r.add(n))}function Vs(e,t,r){var n=0;t&&(n|=4),Jp(r,e,n,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[Li]){e[Li]=!0,ip.forEach(function(r){r!=="selectionchange"&&(gg.has(r)||Vs(r,!1,e),Vs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Vs("selectionchange",!1,t))}}function Jp(e,t,r,n){switch(Lp(t)){case 1:var o=_1;break;case 4:o=T1;break;default:o=Ic}r=o.bind(null,t,r,e),o=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ys(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;l!==null;){if(a=rn(l),a===null)return;if(c=a.tag,c===5||c===6){n=i=a;continue e}l=l.parentNode}}n=n.return}Sp(function(){var u=i,d=Lc(r),f=[];e:{var g=Gp.get(e);if(g!==void 0){var w=Uc,v=e;switch(e){case"keypress":if(Gi(r)===0)break e;case"keydown":case"keyup":w=Y1;break;case"focusin":v="focus",w=Is;break;case"focusout":v="blur",w=Is;break;case"beforeblur":case"afterblur":w=Is;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=A1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=q1;break;case Yp:case Qp:case Kp:w=$1;break;case qp:w=X1;break;case"scroll":w=O1;break;case"wheel":w=Z1;break;case"copy":case"cut":case"paste":w=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=id}var x=(t&4)!==0,m=!x&&e==="scroll",h=x?g!==null?g+"Capture":null:g;x=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=Ko(p,h),S!=null&&x.push(ti(p,S,y)))),m)break;p=p.return}0<x.length&&(g=new w(g,v,null,r,d),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&r!==_l&&(v=r.relatedTarget||r.fromElement)&&(rn(v)||v[wr]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=r.relatedTarget||r.toElement,w=u,v=v?rn(v):null,v!==null&&(m=gn(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(x=nd,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=id,S="onPointerLeave",h="onPointerEnter",p="pointer"),m=w==null?g:En(w),y=v==null?g:En(v),g=new x(S,p+"leave",w,r,d),g.target=m,g.relatedTarget=y,S=null,rn(d)===u&&(x=new x(h,p+"enter",v,r,d),x.target=y,x.relatedTarget=m,S=x),m=S,w&&v)t:{for(x=w,h=v,p=0,y=x;y;y=wn(y))p++;for(y=0,S=h;S;S=wn(S))y++;for(;0<p-y;)x=wn(x),p--;for(;0<y-p;)h=wn(h),y--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=wn(x),h=wn(h)}x=null}else x=null;w!==null&&gd(f,g,w,x,!1),v!==null&&m!==null&&gd(f,m,v,x,!0)}}e:{if(g=u?En(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var b=ag;else if(ld(g))if(Up)b=ug;else{b=lg;var z=sg}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=cg);if(b&&(b=b(e,u))){Fp(f,b,r,d);break e}z&&z(e,g,u),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&bl(g,"number",g.value)}switch(z=u?En(u):window,e){case"focusin":(ld(z)||z.contentEditable==="true")&&(Cn=z,$l=u,Io=null);break;case"focusout":Io=$l=Cn=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,pd(f,r,d);break;case"selectionchange":if(pg)break;case"keydown":case"keyup":pd(f,r,d)}var F;if(Hc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else kn?Mp(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&($p&&r.locale!=="ko"&&(kn||A!=="onCompositionStart"?A==="onCompositionEnd"&&kn&&(F=Dp()):(Ar=d,Fc="value"in Ar?Ar.value:Ar.textContent,kn=!0)),z=xa(u,A),0<z.length&&(A=new od(A,e,null,r,d),f.push({event:A,listeners:z}),F?A.data=F:(F=Ip(r),F!==null&&(A.data=F)))),(F=tg?rg(e,r):ng(e,r))&&(u=xa(u,"onBeforeInput"),0<u.length&&(d=new od("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=F))}Xp(f,t)})}function ti(e,t,r){return{instance:e,listener:t,currentTarget:r}}function xa(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ko(e,r),i!=null&&n.unshift(ti(e,i,o)),i=Ko(e,t),i!=null&&n.push(ti(e,i,o))),e=e.return}return n}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gd(e,t,r,n,o){for(var i=t._reactName,a=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,o?(c=Ko(r,i),c!=null&&a.unshift(ti(r,c,l))):o||(c=Ko(r,i),c!=null&&a.push(ti(r,c,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var yg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(yg,`
`).replace(vg,"")}function Di(e,t,r){if(t=yd(t),yd(e)!==t&&r)throw Error(B(425))}function wa(){}var Il=null,Fl=null;function Ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,vd=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof vd<"u"?function(e){return vd.resolve(null).then(e).catch(Sg)}:Bl;function Sg(e){setTimeout(function(){throw e})}function Qs(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Xo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Xo(t)}function Ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var oo=Math.random().toString(36).slice(2),nr="__reactFiber$"+oo,ri="__reactProps$"+oo,wr="__reactContainer$"+oo,Hl="__reactEvents$"+oo,jg="__reactListeners$"+oo,kg="__reactHandles$"+oo;function rn(e){var t=e[nr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[wr]||r[nr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=xd(e);e!==null;){if(r=e[nr])return r;e=xd(e)}return t}e=r,r=e.parentNode}return null}function yi(e){return e=e[nr]||e[wr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Va(e){return e[ri]||null}var Wl=[],Nn=-1;function Gr(e){return{current:e}}function Re(e){0>Nn||(e.current=Wl[Nn],Wl[Nn]=null,Nn--)}function Ee(e,t){Nn++,Wl[Nn]=e.current,e.current=t}var Qr={},ft=Gr(Qr),jt=Gr(!1),cn=Qr;function Wn(e,t){var r=e.type.contextTypes;if(!r)return Qr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function kt(e){return e=e.childContextTypes,e!=null}function Sa(){Re(jt),Re(ft)}function wd(e,t,r){if(ft.current!==Qr)throw Error(B(168));Ee(ft,t),Ee(jt,r)}function Zp(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(B(108,s1(e)||"Unknown",o));return Le({},r,n)}function ja(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qr,cn=ft.current,Ee(ft,e),Ee(jt,jt.current),!0}function Sd(e,t,r){var n=e.stateNode;if(!n)throw Error(B(169));r?(e=Zp(e,t,cn),n.__reactInternalMemoizedMergedChildContext=e,Re(jt),Re(ft),Ee(ft,e)):Re(jt),Ee(jt,r)}var pr=null,Ya=!1,Ks=!1;function eh(e){pr===null?pr=[e]:pr.push(e)}function Cg(e){Ya=!0,eh(e)}function Xr(){if(!Ks&&pr!==null){Ks=!0;var e=0,t=je;try{var r=pr;for(je=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}pr=null,Ya=!1}catch(o){throw pr!==null&&(pr=pr.slice(e+1)),bp(Dc,Xr),o}finally{je=t,Ks=!1}}return null}var Pn=[],Rn=0,ka=null,Ca=0,zt=[],At=0,un=null,hr=1,mr="";function en(e,t){Pn[Rn++]=Ca,Pn[Rn++]=ka,ka=e,Ca=t}function th(e,t,r){zt[At++]=hr,zt[At++]=mr,zt[At++]=un,un=e;var n=hr;e=mr;var o=32-Kt(n)-1;n&=~(1<<o),r+=1;var i=32-Kt(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,hr=1<<32-Kt(t)+o|r<<o|n,mr=i+e}else hr=1<<i|r<<o|n,mr=e}function Vc(e){e.return!==null&&(en(e,1),th(e,1,0))}function Yc(e){for(;e===ka;)ka=Pn[--Rn],Pn[Rn]=null,Ca=Pn[--Rn],Pn[Rn]=null;for(;e===un;)un=zt[--At],zt[At]=null,mr=zt[--At],zt[At]=null,hr=zt[--At],zt[At]=null}var Pt=null,Nt=null,_e=!1,Qt=null;function rh(e,t){var r=Lt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function jd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,Nt=Ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=un!==null?{id:hr,overflow:mr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Lt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pt=e,Nt=null,!0):!1;default:return!1}}function Vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(_e){var t=Nt;if(t){var r=t;if(!jd(e,t)){if(Vl(e))throw Error(B(418));t=Ir(r.nextSibling);var n=Pt;t&&jd(e,t)?rh(n,r):(e.flags=e.flags&-4097|2,_e=!1,Pt=e)}}else{if(Vl(e))throw Error(B(418));e.flags=e.flags&-4097|2,_e=!1,Pt=e}}}function kd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function $i(e){if(e!==Pt)return!1;if(!_e)return kd(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ul(e.type,e.memoizedProps)),t&&(t=Nt)){if(Vl(e))throw nh(),Error(B(418));for(;t;)rh(e,t),t=Ir(t.nextSibling)}if(kd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Nt=Ir(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Pt?Ir(e.stateNode.nextSibling):null;return!0}function nh(){for(var e=Nt;e;)e=Ir(e.nextSibling)}function Vn(){Nt=Pt=null,_e=!1}function Qc(e){Qt===null?Qt=[e]:Qt.push(e)}var bg=Cr.ReactCurrentBatchConfig;function Vt(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var ba=Gr(null),Ea=null,_n=null,Kc=null;function qc(){Kc=_n=Ea=null}function Gc(e){var t=ba.current;Re(ba),e._currentValue=t}function Ql(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Fn(e,t){Ea=e,Kc=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(Kc!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(Ea===null)throw Error(B(308));_n=e,Ea.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var nn=null;function Xc(e){nn===null?nn=[e]:nn.push(e)}function oh(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Xc(t)):(r.next=o.next,o.next=r),t.interleaved=r,Sr(e,n)}function Sr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Tr=!1;function Jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,xe&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Sr(e,r)}return o=n.interleaved,o===null?(t.next=t,Xc(n)):(t.next=o.next,o.next=t),n.interleaved=t,Sr(e,r)}function Xi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,$c(e,r)}}function Cd(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Na(e,t,r,n){var o=e.updateQueue;Tr=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=o.baseState;a=0,d=u=c=null,l=i;do{var g=l.lane,w=l.eventTime;if((n&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,w=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(w,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(w,f,g):v,g==null)break e;f=Le({},f,g);break e;case 2:Tr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,c=f):d=d.next=w,a|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(d===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);fn|=a,e.lanes=a,e.memoizedState=f}}function bd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(B(191,o));o.call(n)}}}var ah=new op.Component().refs;function Kl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Le({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Qa={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=mt(),o=Br(e),i=yr(n,o);i.payload=t,r!=null&&(i.callback=r),t=Fr(e,i,o),t!==null&&(qt(t,e,o,n),Xi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=mt(),o=Br(e),i=yr(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Fr(e,i,o),t!==null&&(qt(t,e,o,n),Xi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=mt(),n=Br(e),o=yr(r,n);o.tag=2,t!=null&&(o.callback=t),t=Fr(e,o,n),t!==null&&(qt(t,e,n,r),Xi(t,e,n))}};function Ed(e,t,r,n,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,a):t.prototype&&t.prototype.isPureReactComponent?!Zo(r,n)||!Zo(o,i):!0}function sh(e,t,r){var n=!1,o=Qr,i=t.contextType;return typeof i=="object"&&i!==null?i=Mt(i):(o=kt(t)?cn:ft.current,n=t.contextTypes,i=(n=n!=null)?Wn(e,o):Qr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qa,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Qa.enqueueReplaceState(t,t.state,null)}function ql(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=ah,Jc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Mt(i):(i=kt(t)?cn:ft.current,o.context=Wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Kl(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Qa.enqueueReplaceState(o,o.state,null),Na(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Co(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(B(309));var n=r.stateNode}if(!n)throw Error(B(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===ah&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(B(284));if(!r._owner)throw Error(B(290,e))}return e}function Mi(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pd(e){var t=e._init;return t(e._payload)}function lh(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function r(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function n(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Hr(h,p),h.index=0,h.sibling=null,h}function i(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,y,S){return p===null||p.tag!==6?(p=tl(y,h.mode,S),p.return=h,p):(p=o(p,y),p.return=h,p)}function c(h,p,y,S){var b=y.type;return b===jn?d(h,p,y.props.children,S,y.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_r&&Pd(b)===p.type)?(S=o(p,y.props),S.ref=Co(h,p,y),S.return=h,S):(S=na(y.type,y.key,y.props,null,h.mode,S),S.ref=Co(h,p,y),S.return=h,S)}function u(h,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=rl(y,h.mode,S),p.return=h,p):(p=o(p,y.children||[]),p.return=h,p)}function d(h,p,y,S,b){return p===null||p.tag!==7?(p=ln(y,h.mode,S,b),p.return=h,p):(p=o(p,y),p.return=h,p)}function f(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=tl(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ni:return y=na(p.type,p.key,p.props,null,h.mode,y),y.ref=Co(h,null,p),y.return=h,y;case Sn:return p=rl(p,h.mode,y),p.return=h,p;case _r:var S=p._init;return f(h,S(p._payload),y)}if(To(p)||xo(p))return p=ln(p,h.mode,y,null),p.return=h,p;Mi(h,p)}return null}function g(h,p,y,S){var b=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:l(h,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ni:return y.key===b?c(h,p,y,S):null;case Sn:return y.key===b?u(h,p,y,S):null;case _r:return b=y._init,g(h,p,b(y._payload),S)}if(To(y)||xo(y))return b!==null?null:d(h,p,y,S,null);Mi(h,y)}return null}function w(h,p,y,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,l(p,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ni:return h=h.get(S.key===null?y:S.key)||null,c(p,h,S,b);case Sn:return h=h.get(S.key===null?y:S.key)||null,u(p,h,S,b);case _r:var z=S._init;return w(h,p,y,z(S._payload),b)}if(To(S)||xo(S))return h=h.get(y)||null,d(p,h,S,b,null);Mi(p,S)}return null}function v(h,p,y,S){for(var b=null,z=null,F=p,A=p=0,q=null;F!==null&&A<y.length;A++){F.index>A?(q=F,F=null):q=F.sibling;var W=g(h,F,y[A],S);if(W===null){F===null&&(F=q);break}e&&F&&W.alternate===null&&t(h,F),p=i(W,p,A),z===null?b=W:z.sibling=W,z=W,F=q}if(A===y.length)return r(h,F),_e&&en(h,A),b;if(F===null){for(;A<y.length;A++)F=f(h,y[A],S),F!==null&&(p=i(F,p,A),z===null?b=F:z.sibling=F,z=F);return _e&&en(h,A),b}for(F=n(h,F);A<y.length;A++)q=w(F,h,A,y[A],S),q!==null&&(e&&q.alternate!==null&&F.delete(q.key===null?A:q.key),p=i(q,p,A),z===null?b=q:z.sibling=q,z=q);return e&&F.forEach(function(ge){return t(h,ge)}),_e&&en(h,A),b}function x(h,p,y,S){var b=xo(y);if(typeof b!="function")throw Error(B(150));if(y=b.call(y),y==null)throw Error(B(151));for(var z=b=null,F=p,A=p=0,q=null,W=y.next();F!==null&&!W.done;A++,W=y.next()){F.index>A?(q=F,F=null):q=F.sibling;var ge=g(h,F,W.value,S);if(ge===null){F===null&&(F=q);break}e&&F&&ge.alternate===null&&t(h,F),p=i(ge,p,A),z===null?b=ge:z.sibling=ge,z=ge,F=q}if(W.done)return r(h,F),_e&&en(h,A),b;if(F===null){for(;!W.done;A++,W=y.next())W=f(h,W.value,S),W!==null&&(p=i(W,p,A),z===null?b=W:z.sibling=W,z=W);return _e&&en(h,A),b}for(F=n(h,F);!W.done;A++,W=y.next())W=w(F,h,A,W.value,S),W!==null&&(e&&W.alternate!==null&&F.delete(W.key===null?A:W.key),p=i(W,p,A),z===null?b=W:z.sibling=W,z=W);return e&&F.forEach(function(fe){return t(h,fe)}),_e&&en(h,A),b}function m(h,p,y,S){if(typeof y=="object"&&y!==null&&y.type===jn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ni:e:{for(var b=y.key,z=p;z!==null;){if(z.key===b){if(b=y.type,b===jn){if(z.tag===7){r(h,z.sibling),p=o(z,y.props.children),p.return=h,h=p;break e}}else if(z.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_r&&Pd(b)===z.type){r(h,z.sibling),p=o(z,y.props),p.ref=Co(h,z,y),p.return=h,h=p;break e}r(h,z);break}else t(h,z);z=z.sibling}y.type===jn?(p=ln(y.props.children,h.mode,S,y.key),p.return=h,h=p):(S=na(y.type,y.key,y.props,null,h.mode,S),S.ref=Co(h,p,y),S.return=h,h=S)}return a(h);case Sn:e:{for(z=y.key;p!==null;){if(p.key===z)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){r(h,p.sibling),p=o(p,y.children||[]),p.return=h,h=p;break e}else{r(h,p);break}else t(h,p);p=p.sibling}p=rl(y,h.mode,S),p.return=h,h=p}return a(h);case _r:return z=y._init,m(h,p,z(y._payload),S)}if(To(y))return v(h,p,y,S);if(xo(y))return x(h,p,y,S);Mi(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(r(h,p.sibling),p=o(p,y),p.return=h,h=p):(r(h,p),p=tl(y,h.mode,S),p.return=h,h=p),a(h)):r(h,p)}return m}var Yn=lh(!0),ch=lh(!1),vi={},ar=Gr(vi),ni=Gr(vi),oi=Gr(vi);function on(e){if(e===vi)throw Error(B(174));return e}function Zc(e,t){switch(Ee(oi,t),Ee(ni,e),Ee(ar,vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}Re(ar),Ee(ar,t)}function Qn(){Re(ar),Re(ni),Re(oi)}function uh(e){on(oi.current);var t=on(ar.current),r=Nl(t,e.type);t!==r&&(Ee(ni,e),Ee(ar,r))}function eu(e){ni.current===e&&(Re(ar),Re(ni))}var ze=Gr(0);function Pa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qs=[];function tu(){for(var e=0;e<qs.length;e++)qs[e]._workInProgressVersionPrimary=null;qs.length=0}var Ji=Cr.ReactCurrentDispatcher,Gs=Cr.ReactCurrentBatchConfig,dn=0,Ae=null,Qe=null,et=null,Ra=!1,Fo=!1,ii=0,Eg=0;function ct(){throw Error(B(321))}function ru(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Gt(e[r],t[r]))return!1;return!0}function nu(e,t,r,n,o,i){if(dn=i,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ji.current=e===null||e.memoizedState===null?_g:Tg,e=r(n,o),Fo){i=0;do{if(Fo=!1,ii=0,25<=i)throw Error(B(301));i+=1,et=Qe=null,t.updateQueue=null,Ji.current=Og,e=r(n,o)}while(Fo)}if(Ji.current=_a,t=Qe!==null&&Qe.next!==null,dn=0,et=Qe=Ae=null,Ra=!1,t)throw Error(B(300));return e}function ou(){var e=ii!==0;return ii=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ae.memoizedState=et=e:et=et.next=e,et}function It(){if(Qe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=et===null?Ae.memoizedState:et.next;if(t!==null)et=t,Qe=e;else{if(e===null)throw Error(B(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?Ae.memoizedState=et=e:et=et.next=e}return et}function ai(e,t){return typeof t=="function"?t(e):t}function Xs(e){var t=It(),r=t.queue;if(r===null)throw Error(B(311));r.lastRenderedReducer=e;var n=Qe,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var l=a=null,c=null,u=i;do{var d=u.lane;if((dn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=n):c=c.next=f,Ae.lanes|=d,fn|=d}u=u.next}while(u!==null&&u!==i);c===null?a=n:c.next=l,Gt(n,t.memoizedState)||(St=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,Ae.lanes|=i,fn|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Js(e){var t=It(),r=t.queue;if(r===null)throw Error(B(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Gt(i,t.memoizedState)||(St=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function dh(){}function fh(e,t){var r=Ae,n=It(),o=t(),i=!Gt(n.memoizedState,o);if(i&&(n.memoizedState=o,St=!0),n=n.queue,iu(mh.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||et!==null&&et.memoizedState.tag&1){if(r.flags|=2048,si(9,hh.bind(null,r,n,o,t),void 0,null),tt===null)throw Error(B(349));dn&30||ph(r,t,o)}return o}function ph(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function hh(e,t,r,n){t.value=r,t.getSnapshot=n,gh(t)&&yh(e)}function mh(e,t,r){return r(function(){gh(t)&&yh(e)})}function gh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Gt(e,r)}catch{return!0}}function yh(e){var t=Sr(e,1);t!==null&&qt(t,e,1,-1)}function Rd(e){var t=tr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t.queue=e,e=e.dispatch=Rg.bind(null,Ae,e),[t.memoizedState,e]}function si(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function vh(){return It().memoizedState}function Zi(e,t,r,n){var o=tr();Ae.flags|=e,o.memoizedState=si(1|t,r,void 0,n===void 0?null:n)}function Ka(e,t,r,n){var o=It();n=n===void 0?null:n;var i=void 0;if(Qe!==null){var a=Qe.memoizedState;if(i=a.destroy,n!==null&&ru(n,a.deps)){o.memoizedState=si(t,r,i,n);return}}Ae.flags|=e,o.memoizedState=si(1|t,r,i,n)}function _d(e,t){return Zi(8390656,8,e,t)}function iu(e,t){return Ka(2048,8,e,t)}function xh(e,t){return Ka(4,2,e,t)}function wh(e,t){return Ka(4,4,e,t)}function Sh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jh(e,t,r){return r=r!=null?r.concat([e]):null,Ka(4,4,Sh.bind(null,t,e),r)}function au(){}function kh(e,t){var r=It();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ru(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ch(e,t){var r=It();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ru(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function bh(e,t,r){return dn&21?(Gt(r,t)||(r=Pp(),Ae.lanes|=r,fn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=r)}function Ng(e,t){var r=je;je=r!==0&&4>r?r:4,e(!0);var n=Gs.transition;Gs.transition={};try{e(!1),t()}finally{je=r,Gs.transition=n}}function Eh(){return It().memoizedState}function Pg(e,t,r){var n=Br(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Nh(e))Ph(t,r);else if(r=oh(e,t,r,n),r!==null){var o=mt();qt(r,e,n,o),Rh(r,t,n)}}function Rg(e,t,r){var n=Br(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nh(e))Ph(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,r);if(o.hasEagerState=!0,o.eagerState=l,Gt(l,a)){var c=t.interleaved;c===null?(o.next=o,Xc(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}r=oh(e,t,o,n),r!==null&&(o=mt(),qt(r,e,n,o),Rh(r,t,n))}}function Nh(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Ph(e,t){Fo=Ra=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Rh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,$c(e,r)}}var _a={readContext:Mt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},_g={readContext:Mt,useCallback:function(e,t){return tr().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:_d,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Zi(4194308,4,Sh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var r=tr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=tr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Pg.bind(null,Ae,e),[n.memoizedState,e]},useRef:function(e){var t=tr();return e={current:e},t.memoizedState=e},useState:Rd,useDebugValue:au,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=Rd(!1),t=e[0];return e=Ng.bind(null,e[1]),tr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ae,o=tr();if(_e){if(r===void 0)throw Error(B(407));r=r()}else{if(r=t(),tt===null)throw Error(B(349));dn&30||ph(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,_d(mh.bind(null,n,i,e),[e]),n.flags|=2048,si(9,hh.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=tr(),t=tt.identifierPrefix;if(_e){var r=mr,n=hr;r=(n&~(1<<32-Kt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=ii++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Eg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tg={readContext:Mt,useCallback:kh,useContext:Mt,useEffect:iu,useImperativeHandle:jh,useInsertionEffect:xh,useLayoutEffect:wh,useMemo:Ch,useReducer:Xs,useRef:vh,useState:function(){return Xs(ai)},useDebugValue:au,useDeferredValue:function(e){var t=It();return bh(t,Qe.memoizedState,e)},useTransition:function(){var e=Xs(ai)[0],t=It().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:fh,useId:Eh,unstable_isNewReconciler:!1},Og={readContext:Mt,useCallback:kh,useContext:Mt,useEffect:iu,useImperativeHandle:jh,useInsertionEffect:xh,useLayoutEffect:wh,useMemo:Ch,useReducer:Js,useRef:vh,useState:function(){return Js(ai)},useDebugValue:au,useDeferredValue:function(e){var t=It();return Qe===null?t.memoizedState=e:bh(t,Qe.memoizedState,e)},useTransition:function(){var e=Js(ai)[0],t=It().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:fh,useId:Eh,unstable_isNewReconciler:!1};function Kn(e,t){try{var r="",n=t;do r+=a1(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Zs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zg=typeof WeakMap=="function"?WeakMap:Map;function _h(e,t,r){r=yr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Oa||(Oa=!0,ac=n),Gl(e,t)},r}function Th(e,t,r){r=yr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Gl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Gl(e,t),typeof n!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Td(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new zg;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Qg.bind(null,e,t,r),t.then(e,e))}function Od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zd(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=yr(-1,1),t.tag=2,Fr(r,t,1))),r.lanes|=1),e)}var Ag=Cr.ReactCurrentOwner,St=!1;function ht(e,t,r,n){t.child=e===null?ch(t,null,r,n):Yn(t,e.child,r,n)}function Ad(e,t,r,n,o){r=r.render;var i=t.ref;return Fn(t,o),n=nu(e,t,r,n,i,o),r=ou(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jr(e,t,o)):(_e&&r&&Vc(t),t.flags|=1,ht(e,t,n,o),t.child)}function Ld(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!hu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Oh(e,t,i,n,o)):(e=na(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:Zo,r(a,n)&&e.ref===t.ref)return jr(e,t,o)}return t.flags|=1,e=Hr(i,n),e.ref=t.ref,e.return=t,t.child=e}function Oh(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Zo(i,n)&&e.ref===t.ref)if(St=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,jr(e,t,o)}return Xl(e,t,r,n,o)}function zh(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(On,Et),Et|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(On,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Ee(On,Et),Et|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Ee(On,Et),Et|=n;return ht(e,t,o,r),t.child}function Ah(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,r,n,o){var i=kt(r)?cn:ft.current;return i=Wn(t,i),Fn(t,o),r=nu(e,t,r,n,i,o),n=ou(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jr(e,t,o)):(_e&&n&&Vc(t),t.flags|=1,ht(e,t,r,o),t.child)}function Dd(e,t,r,n,o){if(kt(r)){var i=!0;ja(t)}else i=!1;if(Fn(t,o),t.stateNode===null)ea(e,t),sh(t,r,n),ql(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=kt(r)?cn:ft.current,u=Wn(t,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Nd(t,a,n,u),Tr=!1;var g=t.memoizedState;a.state=g,Na(t,n,a,o),c=t.memoizedState,l!==n||g!==c||jt.current||Tr?(typeof d=="function"&&(Kl(t,r,d,n),c=t.memoizedState),(l=Tr||Ed(t,r,l,n,g,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=u,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,ih(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Vt(t.type,l),a.props=u,f=t.pendingProps,g=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=Mt(c):(c=kt(r)?cn:ft.current,c=Wn(t,c));var w=r.getDerivedStateFromProps;(d=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||g!==c)&&Nd(t,a,n,c),Tr=!1,g=t.memoizedState,a.state=g,Na(t,n,a,o);var v=t.memoizedState;l!==f||g!==v||jt.current||Tr?(typeof w=="function"&&(Kl(t,r,w,n),v=t.memoizedState),(u=Tr||Ed(t,r,u,n,g,v,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),a.props=n,a.state=v,a.context=c,n=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Jl(e,t,r,n,i,o)}function Jl(e,t,r,n,o,i){Ah(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&Sd(t,r,!1),jr(e,t,i);n=t.stateNode,Ag.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Yn(t,e.child,null,i),t.child=Yn(t,null,l,i)):ht(e,t,l,i),t.memoizedState=n.state,o&&Sd(t,r,!0),t.child}function Lh(e){var t=e.stateNode;t.pendingContext?wd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wd(e,t.context,!1),Zc(e,t.containerInfo)}function $d(e,t,r,n,o){return Vn(),Qc(o),t.flags|=256,ht(e,t,r,n),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dh(e,t,r){var n=t.pendingProps,o=ze.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ee(ze,o&1),e===null)return Yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,i?(n=t.mode,i=t.child,a={mode:"hidden",children:a},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Xa(a,n,0,null),e=ln(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ec(r),t.memoizedState=Zl,e):su(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Lg(e,t,a,n,l,o,r);if(i){i=n.fallback,a=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:n.children};return!(a&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Hr(o,c),n.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Hr(l,i):(i=ln(i,a,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,a=e.child.memoizedState,a=a===null?ec(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~r,t.memoizedState=Zl,n}return i=e.child,e=i.sibling,n=Hr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function su(e,t){return t=Xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,r,n){return n!==null&&Qc(n),Yn(t,e.child,null,r),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lg(e,t,r,n,o,i,a){if(r)return t.flags&256?(t.flags&=-257,n=Zs(Error(B(422))),Ii(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Xa({mode:"visible",children:n.children},o,0,null),i=ln(i,o,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Yn(t,e.child,null,a),t.child.memoizedState=ec(a),t.memoizedState=Zl,i);if(!(t.mode&1))return Ii(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var l=n.dgst;return n=l,i=Error(B(419)),n=Zs(i,n,void 0),Ii(e,t,a,n)}if(l=(a&e.childLanes)!==0,St||l){if(n=tt,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Sr(e,o),qt(n,e,o,-1))}return pu(),n=Zs(Error(B(421))),Ii(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Kg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Nt=Ir(o.nextSibling),Pt=t,_e=!0,Qt=null,e!==null&&(zt[At++]=hr,zt[At++]=mr,zt[At++]=un,hr=e.id,mr=e.overflow,un=t),t=su(t,n.children),t.flags|=4096,t)}function Md(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ql(e.return,t,r)}function el(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function $h(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(ht(e,t,n.children,r),n=ze.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Md(e,r,t);else if(e.tag===19)Md(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ee(ze,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Pa(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),el(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Pa(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}el(t,!0,r,null,i);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,r=Hr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Hr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Dg(e,t,r){switch(t.tag){case 3:Lh(t),Vn();break;case 5:uh(t);break;case 1:kt(t.type)&&ja(t);break;case 4:Zc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Ee(ba,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Ee(ze,ze.current&1),t.flags|=128,null):r&t.child.childLanes?Dh(e,t,r):(Ee(ze,ze.current&1),e=jr(e,t,r),e!==null?e.sibling:null);Ee(ze,ze.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return $h(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ee(ze,ze.current),n)break;return null;case 22:case 23:return t.lanes=0,zh(e,t,r)}return jr(e,t,r)}var Mh,tc,Ih,Fh;Mh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};tc=function(){};Ih=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,on(ar.current);var i=null;switch(r){case"input":o=kl(e,o),n=kl(e,n),i=[];break;case"select":o=Le({},o,{value:void 0}),n=Le({},n,{value:void 0}),i=[];break;case"textarea":o=El(e,o),n=El(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=wa)}Pl(r,n);var a;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var c=n[u];if(l=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ne("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Fh=function(e,t,r,n){r!==n&&(t.flags|=4)};function bo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function $g(e,t,r){var n=t.pendingProps;switch(Yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return kt(t.type)&&Sa(),ut(t),null;case 3:return n=t.stateNode,Qn(),Re(jt),Re(ft),tu(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(cc(Qt),Qt=null))),tc(e,t),ut(t),null;case 5:eu(t);var o=on(oi.current);if(r=t.type,e!==null&&t.stateNode!=null)Ih(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(B(166));return ut(t),null}if(e=on(ar.current),$i(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[nr]=t,n[ri]=i,e=(t.mode&1)!==0,r){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(o=0;o<zo.length;o++)Ne(zo[o],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Qu(n,i),Ne("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Ne("invalid",n);break;case"textarea":qu(n,i),Ne("invalid",n)}Pl(r,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?n.textContent!==l&&(i.suppressHydrationWarning!==!0&&Di(n.textContent,l,e),o=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Di(n.textContent,l,e),o=["children",""+l]):Yo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ne("scroll",n)}switch(r){case"input":Pi(n),Ku(n,i,!0);break;case"textarea":Pi(n),Gu(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=wa)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pp(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[nr]=t,e[ri]=n,Mh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Rl(r,n),r){case"dialog":Ne("cancel",e),Ne("close",e),o=n;break;case"iframe":case"object":case"embed":Ne("load",e),o=n;break;case"video":case"audio":for(o=0;o<zo.length;o++)Ne(zo[o],e);o=n;break;case"source":Ne("error",e),o=n;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),o=n;break;case"details":Ne("toggle",e),o=n;break;case"input":Qu(e,n),o=kl(e,n),Ne("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=Le({},n,{value:void 0}),Ne("invalid",e);break;case"textarea":qu(e,n),o=El(e,n),Ne("invalid",e);break;default:o=n}Pl(r,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?gp(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&hp(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Qo(e,c):typeof c=="number"&&Qo(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yo.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ne("scroll",e):c!=null&&Tc(e,i,c,a))}switch(r){case"input":Pi(e),Ku(e,n,!1);break;case"textarea":Pi(e),Gu(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Yr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Dn(e,!!n.multiple,i,!1):n.defaultValue!=null&&Dn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Fh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(B(166));if(r=on(oi.current),on(ar.current),$i(t)){if(n=t.stateNode,r=t.memoizedProps,n[nr]=t,(i=n.nodeValue!==r)&&(e=Pt,e!==null))switch(e.tag){case 3:Di(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[nr]=t,t.stateNode=n}return ut(t),null;case 13:if(Re(ze),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&Nt!==null&&t.mode&1&&!(t.flags&128))nh(),Vn(),t.flags|=98560,i=!1;else if(i=$i(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(B(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[nr]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),i=!1}else Qt!==null&&(cc(Qt),Qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ze.current&1?Ke===0&&(Ke=3):pu())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Qn(),tc(e,t),e===null&&ei(t.stateNode.containerInfo),ut(t),null;case 10:return Gc(t.type._context),ut(t),null;case 17:return kt(t.type)&&Sa(),ut(t),null;case 19:if(Re(ze),i=t.memoizedState,i===null)return ut(t),null;if(n=(t.flags&128)!==0,a=i.rendering,a===null)if(n)bo(i,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Pa(e),a!==null){for(t.flags|=128,bo(i,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(ze,ze.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ie()>qn&&(t.flags|=128,n=!0,bo(i,!1),t.lanes=4194304)}else{if(!n)if(e=Pa(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),bo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!_e)return ut(t),null}else 2*Ie()-i.renderingStartTime>qn&&r!==1073741824&&(t.flags|=128,n=!0,bo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ie(),t.sibling=null,r=ze.current,Ee(ze,n?r&1|2:r&1),t):(ut(t),null);case 22:case 23:return fu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Et&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function Mg(e,t){switch(Yc(t),t.tag){case 1:return kt(t.type)&&Sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),Re(jt),Re(ft),tu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eu(t),null;case 13:if(Re(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(ze),null;case 4:return Qn(),null;case 10:return Gc(t.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Fi=!1,dt=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,K=null;function Tn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){De(e,t,n)}else r.current=null}function rc(e,t,r){try{r()}catch(n){De(e,t,n)}}var Id=!1;function Fg(e,t){if(Il=ya,e=Wp(),Wc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,g=null;t:for(;;){for(var w;f!==r||o!==0&&f.nodeType!==3||(l=a+o),f!==i||n!==0&&f.nodeType!==3||(c=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===e)break t;if(g===r&&++u===o&&(l=a),g===i&&++d===n&&(c=a),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fl={focusedElem:e,selectionRange:r},ya=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Vt(t.type,x),m);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(S){De(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return v=Id,Id=!1,v}function Uo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rc(t,r,i)}o=o.next}while(o!==n)}}function qa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function nc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Uh(e){var t=e.alternate;t!==null&&(e.alternate=null,Uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nr],delete t[ri],delete t[Hl],delete t[jg],delete t[kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bh(e){return e.tag===5||e.tag===3||e.tag===4}function Fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=wa));else if(n!==4&&(e=e.child,e!==null))for(oc(e,t,r),e=e.sibling;e!==null;)oc(e,t,r),e=e.sibling}function ic(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ic(e,t,r),e=e.sibling;e!==null;)ic(e,t,r),e=e.sibling}var ot=null,Yt=!1;function Pr(e,t,r){for(r=r.child;r!==null;)Hh(e,t,r),r=r.sibling}function Hh(e,t,r){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(Ua,r)}catch{}switch(r.tag){case 5:dt||Tn(r,t);case 6:var n=ot,o=Yt;ot=null,Pr(e,t,r),ot=n,Yt=o,ot!==null&&(Yt?(e=ot,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ot.removeChild(r.stateNode));break;case 18:ot!==null&&(Yt?(e=ot,r=r.stateNode,e.nodeType===8?Qs(e.parentNode,r):e.nodeType===1&&Qs(e,r),Xo(e)):Qs(ot,r.stateNode));break;case 4:n=ot,o=Yt,ot=r.stateNode.containerInfo,Yt=!0,Pr(e,t,r),ot=n,Yt=o;break;case 0:case 11:case 14:case 15:if(!dt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&rc(r,t,a),o=o.next}while(o!==n)}Pr(e,t,r);break;case 1:if(!dt&&(Tn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){De(r,t,l)}Pr(e,t,r);break;case 21:Pr(e,t,r);break;case 22:r.mode&1?(dt=(n=dt)||r.memoizedState!==null,Pr(e,t,r),dt=n):Pr(e,t,r);break;default:Pr(e,t,r)}}function Ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ig),t.forEach(function(n){var o=qg.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Wt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Yt=!1;break e;case 3:ot=l.stateNode.containerInfo,Yt=!0;break e;case 4:ot=l.stateNode.containerInfo,Yt=!0;break e}l=l.return}if(ot===null)throw Error(B(160));Hh(i,a,o),ot=null,Yt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){De(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wh(t,e),t=t.sibling}function Wh(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),er(e),n&4){try{Uo(3,e,e.return),qa(3,e)}catch(x){De(e,e.return,x)}try{Uo(5,e,e.return)}catch(x){De(e,e.return,x)}}break;case 1:Wt(t,e),er(e),n&512&&r!==null&&Tn(r,r.return);break;case 5:if(Wt(t,e),er(e),n&512&&r!==null&&Tn(r,r.return),e.flags&32){var o=e.stateNode;try{Qo(o,"")}catch(x){De(e,e.return,x)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&dp(o,i),Rl(l,a);var u=Rl(l,i);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?gp(o,f):d==="dangerouslySetInnerHTML"?hp(o,f):d==="children"?Qo(o,f):Tc(o,d,f,u)}switch(l){case"input":Cl(o,i);break;case"textarea":fp(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Dn(o,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?Dn(o,!!i.multiple,i.defaultValue,!0):Dn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ri]=i}catch(x){De(e,e.return,x)}}break;case 6:if(Wt(t,e),er(e),n&4){if(e.stateNode===null)throw Error(B(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){De(e,e.return,x)}}break;case 3:if(Wt(t,e),er(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Xo(t.containerInfo)}catch(x){De(e,e.return,x)}break;case 4:Wt(t,e),er(e);break;case 13:Wt(t,e),er(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(uu=Ie())),n&4&&Ud(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(dt=(u=dt)||d,Wt(t,e),dt=u):Wt(t,e),er(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(g=K,w=g.child,g.tag){case 0:case 11:case 14:case 15:Uo(4,g,g.return);break;case 1:Tn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){De(n,r,x)}}break;case 5:Tn(g,g.return);break;case 22:if(g.memoizedState!==null){Hd(f);continue}}w!==null?(w.return=g,K=w):Hd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=mp("display",a))}catch(x){De(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){De(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Wt(t,e),er(e),n&4&&Ud(e);break;case 21:break;default:Wt(t,e),er(e)}}function er(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Bh(r)){var n=r;break e}r=r.return}throw Error(B(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Qo(o,""),n.flags&=-33);var i=Fd(e);ic(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,l=Fd(e);oc(e,l,a);break;default:throw Error(B(161))}}catch(c){De(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ug(e,t,r){K=e,Vh(e)}function Vh(e,t,r){for(var n=(e.mode&1)!==0;K!==null;){var o=K,i=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||Fi;if(!a){var l=o.alternate,c=l!==null&&l.memoizedState!==null||dt;l=Fi;var u=dt;if(Fi=a,(dt=c)&&!u)for(K=o;K!==null;)a=K,c=a.child,a.tag===22&&a.memoizedState!==null?Wd(o):c!==null?(c.return=a,K=c):Wd(o);for(;i!==null;)K=i,Vh(i),i=i.sibling;K=o,Fi=l,dt=u}Bd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,K=i):Bd(e)}}function Bd(e){for(;K!==null;){var t=K;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||qa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!dt)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Vt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&bd(t,i,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}bd(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}dt||t.flags&512&&nc(t)}catch(g){De(t,t.return,g)}}if(t===e){K=null;break}if(r=t.sibling,r!==null){r.return=t.return,K=r;break}K=t.return}}function Hd(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var r=t.sibling;if(r!==null){r.return=t.return,K=r;break}K=t.return}}function Wd(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{qa(4,t)}catch(c){De(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(c){De(t,o,c)}}var i=t.return;try{nc(t)}catch(c){De(t,i,c)}break;case 5:var a=t.return;try{nc(t)}catch(c){De(t,a,c)}}}catch(c){De(t,t.return,c)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var Bg=Math.ceil,Ta=Cr.ReactCurrentDispatcher,lu=Cr.ReactCurrentOwner,Dt=Cr.ReactCurrentBatchConfig,xe=0,tt=null,Ue=null,at=0,Et=0,On=Gr(0),Ke=0,li=null,fn=0,Ga=0,cu=0,Bo=null,wt=null,uu=0,qn=1/0,dr=null,Oa=!1,ac=null,Ur=null,Ui=!1,Lr=null,za=0,Ho=0,sc=null,ta=-1,ra=0;function mt(){return xe&6?Ie():ta!==-1?ta:ta=Ie()}function Br(e){return e.mode&1?xe&2&&at!==0?at&-at:bg.transition!==null?(ra===0&&(ra=Pp()),ra):(e=je,e!==0||(e=window.event,e=e===void 0?16:Lp(e.type)),e):1}function qt(e,t,r,n){if(50<Ho)throw Ho=0,sc=null,Error(B(185));mi(e,r,n),(!(xe&2)||e!==tt)&&(e===tt&&(!(xe&2)&&(Ga|=r),Ke===4&&zr(e,at)),Ct(e,n),r===1&&xe===0&&!(t.mode&1)&&(qn=Ie()+500,Ya&&Xr()))}function Ct(e,t){var r=e.callbackNode;b1(e,t);var n=ga(e,e===tt?at:0);if(n===0)r!==null&&Zu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Zu(r),t===1)e.tag===0?Cg(Vd.bind(null,e)):eh(Vd.bind(null,e)),wg(function(){!(xe&6)&&Xr()}),r=null;else{switch(Rp(n)){case 1:r=Dc;break;case 4:r=Ep;break;case 16:r=ma;break;case 536870912:r=Np;break;default:r=ma}r=Zh(r,Yh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Yh(e,t){if(ta=-1,ra=0,xe&6)throw Error(B(327));var r=e.callbackNode;if(Un()&&e.callbackNode!==r)return null;var n=ga(e,e===tt?at:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Aa(e,n);else{t=n;var o=xe;xe|=2;var i=Kh();(tt!==e||at!==t)&&(dr=null,qn=Ie()+500,sn(e,t));do try{Vg();break}catch(l){Qh(e,l)}while(1);qc(),Ta.current=i,xe=o,Ue!==null?t=0:(tt=null,at=0,t=Ke)}if(t!==0){if(t===2&&(o=Al(e),o!==0&&(n=o,t=lc(e,o))),t===1)throw r=li,sn(e,0),zr(e,n),Ct(e,Ie()),r;if(t===6)zr(e,n);else{if(o=e.current.alternate,!(n&30)&&!Hg(o)&&(t=Aa(e,n),t===2&&(i=Al(e),i!==0&&(n=i,t=lc(e,i))),t===1))throw r=li,sn(e,0),zr(e,n),Ct(e,Ie()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(B(345));case 2:tn(e,wt,dr);break;case 3:if(zr(e,n),(n&130023424)===n&&(t=uu+500-Ie(),10<t)){if(ga(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){mt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Bl(tn.bind(null,e,wt,dr),t);break}tn(e,wt,dr);break;case 4:if(zr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-Kt(n);i=1<<a,a=t[a],a>o&&(o=a),n&=~i}if(n=o,n=Ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Bg(n/1960))-n,10<n){e.timeoutHandle=Bl(tn.bind(null,e,wt,dr),n);break}tn(e,wt,dr);break;case 5:tn(e,wt,dr);break;default:throw Error(B(329))}}}return Ct(e,Ie()),e.callbackNode===r?Yh.bind(null,e):null}function lc(e,t){var r=Bo;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Aa(e,t),e!==2&&(t=wt,wt=r,t!==null&&cc(t)),e}function cc(e){wt===null?wt=e:wt.push.apply(wt,e)}function Hg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!Gt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zr(e,t){for(t&=~cu,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Kt(t),n=1<<r;e[r]=-1,t&=~n}}function Vd(e){if(xe&6)throw Error(B(327));Un();var t=ga(e,0);if(!(t&1))return Ct(e,Ie()),null;var r=Aa(e,t);if(e.tag!==0&&r===2){var n=Al(e);n!==0&&(t=n,r=lc(e,n))}if(r===1)throw r=li,sn(e,0),zr(e,t),Ct(e,Ie()),r;if(r===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,wt,dr),Ct(e,Ie()),null}function du(e,t){var r=xe;xe|=1;try{return e(t)}finally{xe=r,xe===0&&(qn=Ie()+500,Ya&&Xr())}}function pn(e){Lr!==null&&Lr.tag===0&&!(xe&6)&&Un();var t=xe;xe|=1;var r=Dt.transition,n=je;try{if(Dt.transition=null,je=1,e)return e()}finally{je=n,Dt.transition=r,xe=t,!(xe&6)&&Xr()}}function fu(){Et=On.current,Re(On)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,xg(r)),Ue!==null)for(r=Ue.return;r!==null;){var n=r;switch(Yc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Sa();break;case 3:Qn(),Re(jt),Re(ft),tu();break;case 5:eu(n);break;case 4:Qn();break;case 13:Re(ze);break;case 19:Re(ze);break;case 10:Gc(n.type._context);break;case 22:case 23:fu()}r=r.return}if(tt=e,Ue=e=Hr(e.current,null),at=Et=t,Ke=0,li=null,cu=Ga=fn=0,wt=Bo=null,nn!==null){for(t=0;t<nn.length;t++)if(r=nn[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=o,n.next=a}r.pending=n}nn=null}return e}function Qh(e,t){do{var r=Ue;try{if(qc(),Ji.current=_a,Ra){for(var n=Ae.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Ra=!1}if(dn=0,et=Qe=Ae=null,Fo=!1,ii=0,lu.current=null,r===null||r.return===null){Ke=1,li=t,Ue=null;break}e:{var i=e,a=r.return,l=r,c=t;if(t=at,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Od(a);if(w!==null){w.flags&=-257,zd(w,a,l,i,t),w.mode&1&&Td(i,u,t),t=w,c=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(c),t.updateQueue=x}else v.add(c);break e}else{if(!(t&1)){Td(i,u,t),pu();break e}c=Error(B(426))}}else if(_e&&l.mode&1){var m=Od(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),zd(m,a,l,i,t),Qc(Kn(c,l));break e}}i=c=Kn(c,l),Ke!==4&&(Ke=2),Bo===null?Bo=[i]:Bo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=_h(i,c,t);Cd(i,h);break e;case 1:l=c;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ur===null||!Ur.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Th(i,l,t);Cd(i,S);break e}}i=i.return}while(i!==null)}Gh(r)}catch(b){t=b,Ue===r&&r!==null&&(Ue=r=r.return);continue}break}while(1)}function Kh(){var e=Ta.current;return Ta.current=_a,e===null?_a:e}function pu(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(fn&268435455)&&!(Ga&268435455)||zr(tt,at)}function Aa(e,t){var r=xe;xe|=2;var n=Kh();(tt!==e||at!==t)&&(dr=null,sn(e,t));do try{Wg();break}catch(o){Qh(e,o)}while(1);if(qc(),xe=r,Ta.current=n,Ue!==null)throw Error(B(261));return tt=null,at=0,Ke}function Wg(){for(;Ue!==null;)qh(Ue)}function Vg(){for(;Ue!==null&&!g1();)qh(Ue)}function qh(e){var t=Jh(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?Gh(e):Ue=t,lu.current=null}function Gh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Mg(r,t),r!==null){r.flags&=32767,Ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,Ue=null;return}}else if(r=$g(r,t,Et),r!==null){Ue=r;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ke===0&&(Ke=5)}function tn(e,t,r){var n=je,o=Dt.transition;try{Dt.transition=null,je=1,Yg(e,t,r,n)}finally{Dt.transition=o,je=n}return null}function Yg(e,t,r,n){do Un();while(Lr!==null);if(xe&6)throw Error(B(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(E1(e,i),e===tt&&(Ue=tt=null,at=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ui||(Ui=!0,Zh(ma,function(){return Un(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Dt.transition,Dt.transition=null;var a=je;je=1;var l=xe;xe|=4,lu.current=null,Fg(e,r),Wh(r,e),fg(Fl),ya=!!Il,Fl=Il=null,e.current=r,Ug(r),y1(),xe=l,je=a,Dt.transition=i}else e.current=r;if(Ui&&(Ui=!1,Lr=e,za=o),i=e.pendingLanes,i===0&&(Ur=null),w1(r.stateNode),Ct(e,Ie()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Oa)throw Oa=!1,e=ac,ac=null,e;return za&1&&e.tag!==0&&Un(),i=e.pendingLanes,i&1?e===sc?Ho++:(Ho=0,sc=e):Ho=0,Xr(),null}function Un(){if(Lr!==null){var e=Rp(za),t=Dt.transition,r=je;try{if(Dt.transition=null,je=16>e?16:e,Lr===null)var n=!1;else{if(e=Lr,Lr=null,za=0,xe&6)throw Error(B(331));var o=xe;for(xe|=4,K=e.current;K!==null;){var i=K,a=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Uo(8,d,i)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var g=d.sibling,w=d.return;if(Uh(d),d===u){K=null;break}if(g!==null){g.return=w,K=g;break}K=w}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}K=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,K=a;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Uo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,K=h;break e}K=i.return}}var p=e.current;for(K=p;K!==null;){a=K;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,K=y;else e:for(a=p;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qa(9,l)}}catch(b){De(l,l.return,b)}if(l===a){K=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,K=S;break e}K=l.return}}if(xe=o,Xr(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(Ua,e)}catch{}n=!0}return n}finally{je=r,Dt.transition=t}}return!1}function Yd(e,t,r){t=Kn(r,t),t=_h(e,t,1),e=Fr(e,t,1),t=mt(),e!==null&&(mi(e,1,t),Ct(e,t))}function De(e,t,r){if(e.tag===3)Yd(e,e,r);else for(;t!==null;){if(t.tag===3){Yd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ur===null||!Ur.has(n))){e=Kn(r,e),e=Th(t,e,1),t=Fr(t,e,1),e=mt(),t!==null&&(mi(t,1,e),Ct(t,e));break}}t=t.return}}function Qg(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&r,tt===e&&(at&r)===r&&(Ke===4||Ke===3&&(at&130023424)===at&&500>Ie()-uu?sn(e,0):cu|=r),Ct(e,t)}function Xh(e,t){t===0&&(e.mode&1?(t=Ti,Ti<<=1,!(Ti&130023424)&&(Ti=4194304)):t=1);var r=mt();e=Sr(e,t),e!==null&&(mi(e,t,r),Ct(e,r))}function Kg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Xh(e,r)}function qg(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(B(314))}n!==null&&n.delete(t),Xh(e,r)}var Jh;Jh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)St=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return St=!1,Dg(e,t,r);St=!!(e.flags&131072)}else St=!1,_e&&t.flags&1048576&&th(t,Ca,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ea(e,t),e=t.pendingProps;var o=Wn(t,ft.current);Fn(t,r),o=nu(null,t,n,e,o,r);var i=ou();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(n)?(i=!0,ja(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Jc(t),o.updater=Qa,t.stateNode=o,o._reactInternals=t,ql(t,n,e,r),t=Jl(null,t,n,!0,i,r)):(t.tag=0,_e&&i&&Vc(t),ht(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ea(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=Xg(n),e=Vt(n,e),o){case 0:t=Xl(null,t,n,e,r);break e;case 1:t=Dd(null,t,n,e,r);break e;case 11:t=Ad(null,t,n,e,r);break e;case 14:t=Ld(null,t,n,Vt(n.type,e),r);break e}throw Error(B(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Vt(n,o),Xl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Vt(n,o),Dd(e,t,n,o,r);case 3:e:{if(Lh(t),e===null)throw Error(B(387));n=t.pendingProps,i=t.memoizedState,o=i.element,ih(e,t),Na(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Kn(Error(B(423)),t),t=$d(e,t,n,r,o);break e}else if(n!==o){o=Kn(Error(B(424)),t),t=$d(e,t,n,r,o);break e}else for(Nt=Ir(t.stateNode.containerInfo.firstChild),Pt=t,_e=!0,Qt=null,r=ch(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Vn(),n===o){t=jr(e,t,r);break e}ht(e,t,n,r)}t=t.child}return t;case 5:return uh(t),e===null&&Yl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ul(n,o)?a=null:i!==null&&Ul(n,i)&&(t.flags|=32),Ah(e,t),ht(e,t,a,r),t.child;case 6:return e===null&&Yl(t),null;case 13:return Dh(e,t,r);case 4:return Zc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Yn(t,null,n,r):ht(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Vt(n,o),Ad(e,t,n,o,r);case 7:return ht(e,t,t.pendingProps,r),t.child;case 8:return ht(e,t,t.pendingProps.children,r),t.child;case 12:return ht(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Ee(ba,n._currentValue),n._currentValue=a,i!==null)if(Gt(i.value,a)){if(i.children===o.children&&!jt.current){t=jr(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(i.tag===1){c=yr(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Ql(i.return,r,t),l.lanes|=r;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(B(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Ql(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ht(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Fn(t,r),o=Mt(o),n=n(o),t.flags|=1,ht(e,t,n,r),t.child;case 14:return n=t.type,o=Vt(n,t.pendingProps),o=Vt(n.type,o),Ld(e,t,n,o,r);case 15:return Oh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Vt(n,o),ea(e,t),t.tag=1,kt(n)?(e=!0,ja(t)):e=!1,Fn(t,r),sh(t,n,o),ql(t,n,o,r),Jl(null,t,n,!0,e,r);case 19:return $h(e,t,r);case 22:return zh(e,t,r)}throw Error(B(156,t.tag))};function Zh(e,t){return bp(e,t)}function Gg(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,r,n){return new Gg(e,t,r,n)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xg(e){if(typeof e=="function")return hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zc)return 11;if(e===Ac)return 14}return 2}function Hr(e,t){var r=e.alternate;return r===null?(r=Lt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function na(e,t,r,n,o,i){var a=2;if(n=e,typeof e=="function")hu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case jn:return ln(r.children,o,i,t);case Oc:a=8,o|=8;break;case xl:return e=Lt(12,r,t,o|2),e.elementType=xl,e.lanes=i,e;case wl:return e=Lt(13,r,t,o),e.elementType=wl,e.lanes=i,e;case Sl:return e=Lt(19,r,t,o),e.elementType=Sl,e.lanes=i,e;case lp:return Xa(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ap:a=10;break e;case sp:a=9;break e;case zc:a=11;break e;case Ac:a=14;break e;case _r:a=16,n=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=Lt(a,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function ln(e,t,r,n){return e=Lt(7,e,n,t),e.lanes=r,e}function Xa(e,t,r,n){return e=Lt(22,e,n,t),e.elementType=lp,e.lanes=r,e.stateNode={isHidden:!1},e}function tl(e,t,r){return e=Lt(6,e,null,t),e.lanes=r,e}function rl(e,t,r){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jg(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ds(0),this.expirationTimes=Ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function mu(e,t,r,n,o,i,a,l,c){return e=new Jg(e,t,r,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Lt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(i),e}function Zg(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function em(e){if(!e)return Qr;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var r=e.type;if(kt(r))return Zp(e,r,t)}return t}function tm(e,t,r,n,o,i,a,l,c){return e=mu(r,n,!0,e,o,i,a,l,c),e.context=em(null),r=e.current,n=mt(),o=Br(r),i=yr(n,o),i.callback=t??null,Fr(r,i,o),e.current.lanes=o,mi(e,o,n),Ct(e,n),e}function Ja(e,t,r,n){var o=t.current,i=mt(),a=Br(o);return r=em(r),t.context===null?t.context=r:t.pendingContext=r,t=yr(i,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Fr(o,t,a),e!==null&&(qt(e,o,a,i),Xi(e,o,a)),a}function La(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function gu(e,t){Qd(e,t),(e=e.alternate)&&Qd(e,t)}function ey(){return null}var rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function yu(e){this._internalRoot=e}Za.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Ja(e,t,null,null)};Za.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Ja(null,e,null,null)}),t[wr]=null}};function Za(e){this._internalRoot=e}Za.prototype.unstable_scheduleHydration=function(e){if(e){var t=Op();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Or.length&&t!==0&&t<Or[r].priority;r++);Or.splice(r,0,e),r===0&&Ap(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function ty(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=La(a);i.call(u)}}var a=tm(t,n,e,0,null,!1,!1,"",Kd);return e._reactRootContainer=a,e[wr]=a.current,ei(e.nodeType===8?e.parentNode:e),pn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var l=n;n=function(){var u=La(c);l.call(u)}}var c=mu(e,0,!1,null,null,!1,!1,"",Kd);return e._reactRootContainer=c,e[wr]=c.current,ei(e.nodeType===8?e.parentNode:e),pn(function(){Ja(t,c,r,n)}),c}function ts(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var c=La(a);l.call(c)}}Ja(t,a,e,o)}else a=ty(r,t,e,o,n);return La(a)}_p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Oo(t.pendingLanes);r!==0&&($c(t,r|1),Ct(t,Ie()),!(xe&6)&&(qn=Ie()+500,Xr()))}break;case 13:pn(function(){var n=Sr(e,1);if(n!==null){var o=mt();qt(n,e,1,o)}}),gu(e,1)}};Mc=function(e){if(e.tag===13){var t=Sr(e,134217728);if(t!==null){var r=mt();qt(t,e,134217728,r)}gu(e,134217728)}};Tp=function(e){if(e.tag===13){var t=Br(e),r=Sr(e,t);if(r!==null){var n=mt();qt(r,e,t,n)}gu(e,t)}};Op=function(){return je};zp=function(e,t){var r=je;try{return je=e,t()}finally{je=r}};Tl=function(e,t,r){switch(t){case"input":if(Cl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Va(n);if(!o)throw Error(B(90));up(n),Cl(n,o)}}}break;case"textarea":fp(e,r);break;case"select":t=r.value,t!=null&&Dn(e,!!r.multiple,t,!1)}};xp=du;wp=pn;var ry={usingClientEntryPoint:!1,Events:[yi,En,Va,yp,vp,du]},Eo={findFiberByHostInstance:rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ny={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kp(e),e===null?null:e.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{Ua=Bi.inject(ny),ir=Bi}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ry;_t.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(B(200));return Zg(e,t,null,r)};_t.createRoot=function(e,t){if(!vu(e))throw Error(B(299));var r=!1,n="",o=rm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=mu(e,1,!1,null,null,r,!1,n,o),e[wr]=t.current,ei(e.nodeType===8?e.parentNode:e),new yu(t)};_t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=kp(t),e=e===null?null:e.stateNode,e};_t.flushSync=function(e){return pn(e)};_t.hydrate=function(e,t,r){if(!es(t))throw Error(B(200));return ts(null,e,t,!0,r)};_t.hydrateRoot=function(e,t,r){if(!vu(e))throw Error(B(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",a=rm;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=tm(t,null,e,1,r??null,o,!1,i,a),e[wr]=t.current,ei(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Za(t)};_t.render=function(e,t,r){if(!es(t))throw Error(B(200));return ts(null,e,t,!1,r)};_t.unmountComponentAtNode=function(e){if(!es(e))throw Error(B(40));return e._reactRootContainer?(pn(function(){ts(null,null,e,!1,function(){e._reactRootContainer=null,e[wr]=null})}),!0):!1};_t.unstable_batchedUpdates=du;_t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!es(r))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return ts(e,t,r,!1,n)};_t.version="18.2.0-next-9e3b772b8-20220608";function nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm)}catch(e){console.error(e)}}nm(),tp.exports=_t;var oy=tp.exports,qd=oy;yl.createRoot=qd.createRoot,yl.hydrateRoot=qd.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},me.apply(this,arguments)}var Fe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fe||(Fe={}));const Gd="popstate";function iy(e){e===void 0&&(e={});function t(n,o){let{pathname:i,search:a,hash:l}=n.location;return ci("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:lr(o)}return sy(t,r,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ay(){return Math.random().toString(36).substr(2,8)}function Xd(e,t){return{usr:e.state,key:e.key,idx:t}}function ci(e,t,r,n){return r===void 0&&(r=null),me({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?br(t):t,{state:r,key:t&&t.key||n||ay()})}function lr(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function br(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function sy(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,l=Fe.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(me({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=Fe.Pop;let m=d(),h=m==null?null:m-u;u=m,c&&c({action:l,location:x.location,delta:h})}function g(m,h){l=Fe.Push;let p=ci(x.location,m,h);r&&r(p,m),u=d()+1;let y=Xd(p,u),S=x.createHref(p);try{a.pushState(y,"",S)}catch{o.location.assign(S)}i&&c&&c({action:l,location:x.location,delta:1})}function w(m,h){l=Fe.Replace;let p=ci(x.location,m,h);r&&r(p,m),u=d();let y=Xd(p,u),S=x.createHref(p);a.replaceState(y,"",S),i&&c&&c({action:l,location:x.location,delta:0})}function v(m){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof m=="string"?m:lr(m);return se(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return l},get location(){return e(o,a)},listen(m){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Gd,f),c=m,()=>{o.removeEventListener(Gd,f),c=null}},createHref(m){return t(o,m)},createURL:v,encodeLocation(m){let h=v(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:w,go(m){return a.go(m)}};return x}var Ye;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ye||(Ye={}));const ly=new Set(["lazy","caseSensitive","path","id","index","children"]);function cy(e){return e.index===!0}function om(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((o,i)=>{let a=[...r,i],l=typeof o.id=="string"?o.id:a.join("-");if(se(o.index!==!0||!o.children,"Cannot specify children on an index route"),se(!n[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),cy(o)){let c=me({},o,{hasErrorBoundary:t(o),id:l});return n[l]=c,c}else{let c=me({},o,{id:l,hasErrorBoundary:t(o),children:void 0});return n[l]=c,o.children&&(c.children=om(o.children,t,a,n)),c}})}function zn(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?br(t):t,o=xi(n.pathname||"/",r);if(o==null)return null;let i=im(e);uy(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=xy(i[l],jy(o));return a}function im(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(se(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=sr([n,c.relativePath]),d=r.concat(c);i.children&&i.children.length>0&&(se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),im(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:yy(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let c of am(i.path))o(i,a,c)}),t}function am(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=am(n.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function uy(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:vy(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const dy=/^:\w+$/,fy=3,py=2,hy=1,my=10,gy=-2,Jd=e=>e==="*";function yy(e,t){let r=e.split("/"),n=r.length;return r.some(Jd)&&(n+=gy),t&&(n+=py),r.filter(o=>!Jd(o)).reduce((o,i)=>o+(dy.test(i)?fy:i===""?hy:my),n)}function vy(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function xy(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=wy({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(n,d.params);let f=l.route;i.push({params:n,pathname:sr([o,d.pathname]),pathnameBase:Ey(sr([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=sr([o,d.pathnameBase]))}return i}function wy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Sy(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((u,d,f)=>{if(d==="*"){let g=l[f]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=ky(l[f]||"",d),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Sy(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Gn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(n.push(l),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function jy(e){try{return decodeURI(e)}catch(t){return Gn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ky(e,t){try{return decodeURIComponent(e)}catch(r){return Gn(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function xi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Cy(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?br(e):e;return{pathname:r?r.startsWith("/")?r:by(r,t):t,search:Ny(n),hash:Py(o)}}function by(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function nl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rs(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function xu(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=br(e):(o=me({},e),se(!o.pathname||!o.pathname.includes("?"),nl("?","pathname","search",o)),se(!o.pathname||!o.pathname.includes("#"),nl("#","pathname","hash",o)),se(!o.search||!o.search.includes("#"),nl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(n||a==null)l=r;else{let f=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}l=f>=0?t[f]:"/"}let c=Cy(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const sr=e=>e.join("/").replace(/\/\/+/g,"/"),Ey=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ny=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Py=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,bt=function(t,r){r===void 0&&(r=302);let n=r;typeof n=="number"?n={status:n}:typeof n.status>"u"&&(n.status=302);let o=new Headers(n.headers);return o.set("Location",t),new Response(null,me({},n,{headers:o}))};class wu{constructor(t,r,n,o){o===void 0&&(o=!1),this.status=t,this.statusText=r||"",this.internal=o,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function sm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lm=["post","put","patch","delete"],Ry=new Set(lm),_y=["get",...lm],Ty=new Set(_y),Oy=new Set([301,302,303,307,308]),zy=new Set([307,308]),ol={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Ay={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Zd={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ly=!um,Dy=e=>!!e.hasErrorBoundary;function $y(e){se(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||Dy,r={},n=om(e.routes,t,void 0,r),o,i=me({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,c=null,u=null,d=null,f=e.hydrationData!=null,g=zn(n,e.history.location,e.basename),w=null;if(g==null){let N=rr(404,{pathname:e.history.location.pathname}),{matches:R,route:I}=sf(n);g=R,w={[I.id]:N}}let v=!g.some(N=>N.route.lazy)&&(!g.some(N=>N.route.loader)||e.hydrationData!=null),x,m={historyAction:e.history.action,location:e.history.location,matches:g,initialized:v,navigation:ol,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},h=Fe.Pop,p=!1,y,S=!1,b=!1,z=[],F=[],A=new Map,q=0,W=-1,ge=new Map,fe=new Set,Y=new Map,U=new Map,D=new Map,H=!1;function k(){return a=e.history.listen(N=>{let{action:R,location:I,delta:X}=N;if(H){H=!1;return}Gn(D.size===0||X!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let J=xt({currentLocation:m.location,nextLocation:I,historyAction:R});if(J&&X!=null){H=!0,e.history.go(X*-1),Jt(J,{state:"blocked",location:I,proceed(){Jt(J,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),e.history.go(X)},reset(){Xt(J),O({blockers:new Map(x.state.blockers)})}});return}return M(R,I)}),m.initialized||M(Fe.Pop,m.location),x}function E(){a&&a(),l.clear(),y&&y.abort(),m.fetchers.forEach((N,R)=>pe(R)),m.blockers.forEach((N,R)=>Xt(R))}function C(N){return l.add(N),()=>l.delete(N)}function O(N){m=me({},m,N),l.forEach(R=>R(m))}function V(N,R){var I,X;let J=m.actionData!=null&&m.navigation.formMethod!=null&&fr(m.navigation.formMethod)&&m.navigation.state==="loading"&&((I=N.state)==null?void 0:I._isRedirect)!==!0,ne;R.actionData?Object.keys(R.actionData).length>0?ne=R.actionData:ne=null:J?ne=m.actionData:ne=null;let oe=R.loaderData?af(m.loaderData,R.loaderData,R.matches||[],R.errors):m.loaderData;for(let[ee]of D)Xt(ee);let ae=p===!0||m.navigation.formMethod!=null&&fr(m.navigation.formMethod)&&((X=N.state)==null?void 0:X._isRedirect)!==!0;o&&(n=o,o=void 0),O(me({},R,{actionData:ne,loaderData:oe,historyAction:h,location:N,initialized:!0,navigation:ol,revalidation:"idle",restoreScrollPosition:vn(N,R.matches||m.matches),preventScrollReset:ae,blockers:new Map(m.blockers)})),S||h===Fe.Pop||(h===Fe.Push?e.history.push(N,N.state):h===Fe.Replace&&e.history.replace(N,N.state)),h=Fe.Pop,p=!1,S=!1,b=!1,z=[],F=[]}async function T(N,R){if(typeof N=="number"){e.history.go(N);return}let{path:I,submission:X,error:J}=ef(N,i,R),ne=m.location,oe=ci(m.location,I,R&&R.state);oe=me({},oe,e.history.encodeLocation(oe));let ae=R&&R.replace!=null?R.replace:void 0,ee=Fe.Push;ae===!0?ee=Fe.Replace:ae===!1||X!=null&&fr(X.formMethod)&&X.formAction===m.location.pathname+m.location.search&&(ee=Fe.Replace);let be=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,we=xt({currentLocation:ne,nextLocation:oe,historyAction:ee});if(we){Jt(we,{state:"blocked",location:oe,proceed(){Jt(we,{state:"proceeding",proceed:void 0,reset:void 0,location:oe}),T(N,R)},reset(){Xt(we),O({blockers:new Map(m.blockers)})}});return}return await M(ee,oe,{submission:X,pendingError:J,preventScrollReset:be,replace:R&&R.replace})}function $(){if($e(),O({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){M(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}M(h||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function M(N,R,I){y&&y.abort(),y=null,h=N,S=(I&&I.startUninterruptedRevalidation)===!0,mo(m.location,m.matches),p=(I&&I.preventScrollReset)===!0;let X=o||n,J=I&&I.overrideNavigation,ne=zn(X,R,e.basename);if(!ne){let Ze=rr(404,{pathname:R.pathname}),{matches:nt,route:Bt}=sf(X);te(),V(R,{matches:nt,loaderData:{},errors:{[Bt.id]:Ze}});return}if(By(m.location,R)&&!(I&&I.submission&&fr(I.submission.formMethod))){V(R,{matches:ne});return}y=new AbortController;let oe=Po(e.history,R,y.signal,I&&I.submission),ae,ee;if(I&&I.pendingError)ee={[An(ne).route.id]:I.pendingError};else if(I&&I.submission&&fr(I.submission.formMethod)){let Ze=await G(oe,R,I.submission,ne,{replace:I.replace});if(Ze.shortCircuited)return;ae=Ze.pendingActionData,ee=Ze.pendingActionError,J=me({state:"loading",location:R},I.submission),oe=new Request(oe.url,{signal:oe.signal})}let{shortCircuited:be,loaderData:we,errors:Ut}=await j(oe,R,ne,J,I&&I.submission,I&&I.fetcherSubmission,I&&I.replace,ae,ee);be||(y=null,V(R,me({matches:ne},ae?{actionData:ae}:{},{loaderData:we,errors:Ut})))}async function G(N,R,I,X,J){$e();let ne=me({state:"submitting",location:R},I);O({navigation:ne});let oe,ae=uc(X,R);if(!ae.route.action&&!ae.route.lazy)oe={type:Ye.error,error:rr(405,{method:N.method,pathname:R.pathname,routeId:ae.route.id})};else if(oe=await No("action",N,ae,X,r,t,x.basename),N.signal.aborted)return{shortCircuited:!0};if(Bn(oe)){let ee;return J&&J.replace!=null?ee=J.replace:ee=oe.location===m.location.pathname+m.location.search,await de(m,oe,{submission:I,replace:ee}),{shortCircuited:!0}}if(Wo(oe)){let ee=An(X,ae.route.id);return(J&&J.replace)!==!0&&(h=Fe.Push),{pendingActionData:{},pendingActionError:{[ee.route.id]:oe.error}}}if(an(oe))throw rr(400,{type:"defer-action"});return{pendingActionData:{[ae.route.id]:oe.data}}}async function j(N,R,I,X,J,ne,oe,ae,ee){let be=X;be||(be=me({state:"loading",location:R,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},J));let we=J||ne?J||ne:be.formMethod&&be.formAction&&be.formData&&be.formEncType?{formMethod:be.formMethod,formAction:be.formAction,formData:be.formData,formEncType:be.formEncType}:void 0,Ut=o||n,[Ze,nt]=tf(e.history,m,I,we,R,b,z,F,Y,Ut,e.basename,ae,ee);if(te(lt=>!(I&&I.some(Ht=>Ht.route.id===lt))||Ze&&Ze.some(Ht=>Ht.route.id===lt)),Ze.length===0&&nt.length===0)return V(R,me({matches:I,loaderData:{},errors:ee||null},ae?{actionData:ae}:{})),{shortCircuited:!0};if(!S){nt.forEach(Ht=>{let Zr=m.fetchers.get(Ht.key),vo={state:"loading",data:Zr&&Zr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(Ht.key,vo)});let lt=ae||m.actionData;O(me({navigation:be},lt?Object.keys(lt).length===0?{actionData:null}:{actionData:lt}:{},nt.length>0?{fetchers:new Map(m.fetchers)}:{}))}W=++q,nt.forEach(lt=>A.set(lt.key,y));let{results:Bt,loaderResults:go,fetcherResults:Ns}=await Z(m.matches,I,Ze,nt,N);if(N.signal.aborted)return{shortCircuited:!0};nt.forEach(lt=>A.delete(lt.key));let yo=lf(Bt);if(yo)return await de(m,yo,{replace:oe}),{shortCircuited:!0};let{loaderData:xn,errors:Ps}=of(m,I,Ze,go,ee,nt,Ns,U);U.forEach((lt,Ht)=>{lt.subscribe(Zr=>{(Zr||lt.done)&&U.delete(Ht)})}),We();let Rs=Nr(W);return me({loaderData:xn,errors:Ps},Rs||nt.length>0?{fetchers:new Map(m.fetchers)}:{})}function re(N){return m.fetchers.get(N)||Ay}function L(N,R,I,X){if(Ly)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");A.has(N)&&Me(N);let ne=zn(o||n,I,e.basename);if(!ne){Je(N,R,rr(404,{pathname:I}));return}let{path:oe,submission:ae}=ef(I,i,X,!0),ee=uc(ne,oe);if(p=(X&&X.preventScrollReset)===!0,ae&&fr(ae.formMethod)){le(N,R,oe,ee,ne,ae);return}Y.set(N,{routeId:R,path:oe}),ce(N,R,oe,ee,ne,ae)}async function le(N,R,I,X,J,ne){if($e(),Y.delete(N),!X.route.action&&!X.route.lazy){let ur=rr(405,{method:ne.formMethod,pathname:I,routeId:R});Je(N,R,ur);return}let oe=m.fetchers.get(N),ae=me({state:"submitting"},ne,{data:oe&&oe.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(N,ae),O({fetchers:new Map(m.fetchers)});let ee=new AbortController,be=Po(e.history,I,ee.signal,ne);A.set(N,ee);let we=await No("action",be,X,J,r,t,x.basename);if(be.signal.aborted){A.get(N)===ee&&A.delete(N);return}if(Bn(we)){A.delete(N),fe.add(N);let ur=me({state:"loading"},ne,{data:void 0," _hasFetcherDoneAnything ":!0});return m.fetchers.set(N,ur),O({fetchers:new Map(m.fetchers)}),de(m,we,{submission:ne,isFetchActionRedirect:!0})}if(Wo(we)){Je(N,R,we.error);return}if(an(we))throw rr(400,{type:"defer-action"});let Ut=m.navigation.location||m.location,Ze=Po(e.history,Ut,ee.signal),nt=o||n,Bt=m.navigation.state!=="idle"?zn(nt,m.navigation.location,e.basename):m.matches;se(Bt,"Didn't find any matches after fetcher action");let go=++q;ge.set(N,go);let Ns=me({state:"loading",data:we.data},ne,{" _hasFetcherDoneAnything ":!0});m.fetchers.set(N,Ns);let[yo,xn]=tf(e.history,m,Bt,ne,Ut,b,z,F,Y,nt,e.basename,{[X.route.id]:we.data},void 0);xn.filter(ur=>ur.key!==N).forEach(ur=>{let _s=ur.key,Fu=m.fetchers.get(_s),T0={state:"loading",data:Fu&&Fu.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(_s,T0),A.set(_s,ee)}),O({fetchers:new Map(m.fetchers)});let{results:Ps,loaderResults:Rs,fetcherResults:lt}=await Z(m.matches,Bt,yo,xn,Ze);if(ee.signal.aborted)return;ge.delete(N),A.delete(N),xn.forEach(ur=>A.delete(ur.key));let Ht=lf(Ps);if(Ht)return de(m,Ht);let{loaderData:Zr,errors:vo}=of(m,m.matches,yo,Rs,void 0,xn,lt,U),R0={state:"idle",data:we.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(N,R0);let _0=Nr(go);m.navigation.state==="loading"&&go>W?(se(h,"Expected pending action"),y&&y.abort(),V(m.navigation.location,{matches:Bt,loaderData:Zr,errors:vo,fetchers:new Map(m.fetchers)})):(O(me({errors:vo,loaderData:af(m.loaderData,Zr,Bt,vo)},_0?{fetchers:new Map(m.fetchers)}:{})),b=!1)}async function ce(N,R,I,X,J,ne){let oe=m.fetchers.get(N),ae=me({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ne,{data:oe&&oe.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(N,ae),O({fetchers:new Map(m.fetchers)});let ee=new AbortController,be=Po(e.history,I,ee.signal);A.set(N,ee);let we=await No("loader",be,X,J,r,t,x.basename);if(an(we)&&(we=await hm(we,be.signal,!0)||we),A.get(N)===ee&&A.delete(N),be.signal.aborted)return;if(Bn(we)){await de(m,we);return}if(Wo(we)){let Ze=An(m.matches,R);m.fetchers.delete(N),O({fetchers:new Map(m.fetchers),errors:{[Ze.route.id]:we.error}});return}se(!an(we),"Unhandled fetcher deferred data");let Ut={state:"idle",data:we.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(N,Ut),O({fetchers:new Map(m.fetchers)})}async function de(N,R,I){var X;let{submission:J,replace:ne,isFetchActionRedirect:oe}=I===void 0?{}:I;R.revalidate&&(b=!0);let ae=ci(N.location,R.location,me({_isRedirect:!0},oe?{_isFetchActionRedirect:!0}:{}));if(se(ae,"Expected a location on the redirect navigation"),cm.test(R.location)&&um&&typeof((X=window)==null?void 0:X.location)<"u"){let nt=e.history.createURL(R.location),Bt=xi(nt.pathname,e.basename||"/")==null;if(window.location.origin!==nt.origin||Bt){ne?window.location.replace(R.location):window.location.assign(R.location);return}}y=null;let ee=ne===!0?Fe.Replace:Fe.Push,{formMethod:be,formAction:we,formEncType:Ut,formData:Ze}=N.navigation;!J&&be&&we&&Ze&&Ut&&(J={formMethod:be,formAction:we,formEncType:Ut,formData:Ze}),zy.has(R.status)&&J&&fr(J.formMethod)?await M(ee,ae,{submission:me({},J,{formAction:R.location}),preventScrollReset:p}):oe?await M(ee,ae,{overrideNavigation:{state:"loading",location:ae,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:J,preventScrollReset:p}):await M(ee,ae,{overrideNavigation:{state:"loading",location:ae,formMethod:J?J.formMethod:void 0,formAction:J?J.formAction:void 0,formEncType:J?J.formEncType:void 0,formData:J?J.formData:void 0},preventScrollReset:p})}async function Z(N,R,I,X,J){let ne=await Promise.all([...I.map(ee=>No("loader",J,ee,R,r,t,x.basename)),...X.map(ee=>ee.matches&&ee.match?No("loader",Po(e.history,ee.path,J.signal),ee.match,ee.matches,r,t,x.basename):{type:Ye.error,error:rr(404,{pathname:ee.path})})]),oe=ne.slice(0,I.length),ae=ne.slice(I.length);return await Promise.all([cf(N,I,oe,J.signal,!1,m.loaderData),cf(N,X.map(ee=>ee.match),ae,J.signal,!0)]),{results:ne,loaderResults:oe,fetcherResults:ae}}function $e(){b=!0,z.push(...te()),Y.forEach((N,R)=>{A.has(R)&&(F.push(R),Me(R))})}function Je(N,R,I){let X=An(m.matches,R);pe(N),O({errors:{[X.route.id]:I},fetchers:new Map(m.fetchers)})}function pe(N){A.has(N)&&Me(N),Y.delete(N),ge.delete(N),fe.delete(N),m.fetchers.delete(N)}function Me(N){let R=A.get(N);se(R,"Expected fetch controller: "+N),R.abort(),A.delete(N)}function ye(N){for(let R of N){let X={state:"idle",data:re(R).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(R,X)}}function We(){let N=[];for(let R of fe){let I=m.fetchers.get(R);se(I,"Expected fetcher: "+R),I.state==="loading"&&(fe.delete(R),N.push(R))}ye(N)}function Nr(N){let R=[];for(let[I,X]of ge)if(X<N){let J=m.fetchers.get(I);se(J,"Expected fetcher: "+I),J.state==="loading"&&(Me(I),ge.delete(I),R.push(I))}return ye(R),R.length>0}function Ve(N,R){let I=m.blockers.get(N)||Zd;return D.get(N)!==R&&D.set(N,R),I}function Xt(N){m.blockers.delete(N),D.delete(N)}function Jt(N,R){let I=m.blockers.get(N)||Zd;se(I.state==="unblocked"&&R.state==="blocked"||I.state==="blocked"&&R.state==="blocked"||I.state==="blocked"&&R.state==="proceeding"||I.state==="blocked"&&R.state==="unblocked"||I.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+I.state+" -> "+R.state),m.blockers.set(N,R),O({blockers:new Map(m.blockers)})}function xt(N){let{currentLocation:R,nextLocation:I,historyAction:X}=N;if(D.size===0)return;D.size>1&&Gn(!1,"A router only supports one blocker at a time");let J=Array.from(D.entries()),[ne,oe]=J[J.length-1],ae=m.blockers.get(ne);if(!(ae&&ae.state==="proceeding")&&oe({currentLocation:R,nextLocation:I,historyAction:X}))return ne}function te(N){let R=[];return U.forEach((I,X)=>{(!N||N(X))&&(I.cancel(),R.push(X),U.delete(X))}),R}function Oe(N,R,I){if(c=N,d=R,u=I||(X=>X.key),!f&&m.navigation===ol){f=!0;let X=vn(m.location,m.matches);X!=null&&O({restoreScrollPosition:X})}return()=>{c=null,d=null,u=null}}function mo(N,R){if(c&&u&&d){let I=R.map(J=>uf(J,m.loaderData)),X=u(N,I)||N.key;c[X]=d()}}function vn(N,R){if(c&&u&&d){let I=R.map(ne=>uf(ne,m.loaderData)),X=u(N,I)||N.key,J=c[X];if(typeof J=="number")return J}return null}function Zt(N){o=N}return x={get basename(){return e.basename},get state(){return m},get routes(){return n},initialize:k,subscribe:C,enableScrollRestoration:Oe,navigate:T,fetch:L,revalidate:$,createHref:N=>e.history.createHref(N),encodeLocation:N=>e.history.encodeLocation(N),getFetcher:re,deleteFetcher:pe,dispose:E,getBlocker:Ve,deleteBlocker:Xt,_internalFetchControllers:A,_internalActiveDeferreds:U,_internalSetRoutes:Zt},x}function My(e){return e!=null&&"formData"in e}function ef(e,t,r,n){n===void 0&&(n=!1);let o=typeof e=="string"?e:lr(e);if(!r||!My(r))return{path:o};if(r.formMethod&&!Vy(r.formMethod))return{path:o,error:rr(405,{method:r.formMethod})};let i;if(r.formData){let c=r.formMethod||"get";if(i={formMethod:t.v7_normalizeFormMethod?c.toUpperCase():c.toLowerCase(),formAction:pm(o),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},fr(i.formMethod))return{path:o,submission:i}}let a=br(o),l=fm(r.formData);return n&&a.search&&mm(a.search)&&l.append("index",""),a.search="?"+l,{path:lr(a),submission:i}}function Iy(e,t){let r=e;if(t){let n=e.findIndex(o=>o.route.id===t);n>=0&&(r=e.slice(0,n))}return r}function tf(e,t,r,n,o,i,a,l,c,u,d,f,g){let w=g?Object.values(g)[0]:f?Object.values(f)[0]:void 0,v=e.createURL(t.location),x=e.createURL(o),m=i||v.toString()===x.toString()||v.search!==x.search,h=g?Object.keys(g)[0]:void 0,y=Iy(r,h).filter((b,z)=>{if(b.route.lazy)return!0;if(b.route.loader==null)return!1;if(Fy(t.loaderData,t.matches[z],b)||a.some(q=>q===b.route.id))return!0;let F=t.matches[z],A=b;return rf(b,me({currentUrl:v,currentParams:F.params,nextUrl:x,nextParams:A.params},n,{actionResult:w,defaultShouldRevalidate:m||dm(F,A)}))}),S=[];return c.forEach((b,z)=>{if(!r.some(W=>W.route.id===b.routeId))return;let F=zn(u,b.path,d);if(!F){S.push(me({key:z},b,{matches:null,match:null}));return}let A=uc(F,b.path);if(l.includes(z)){S.push(me({key:z,matches:F,match:A},b));return}rf(A,me({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:x,nextParams:r[r.length-1].params},n,{actionResult:w,defaultShouldRevalidate:m}))&&S.push(me({key:z,matches:F,match:A},b))}),[y,S]}function Fy(e,t,r){let n=!t||r.route.id!==t.route.id,o=e[r.route.id]===void 0;return n||o}function dm(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function rf(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function nf(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let o=r[e.id];se(o,"No route found in manifest");let i={};for(let a in n){let c=o[a]!==void 0&&a!=="hasErrorBoundary";Gn(!c,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!c&&!ly.has(a)&&(i[a]=n[a])}Object.assign(o,i),Object.assign(o,{hasErrorBoundary:t(me({},o)),lazy:void 0})}async function No(e,t,r,n,o,i,a,l,c,u){a===void 0&&(a="/"),l===void 0&&(l=!1),c===void 0&&(c=!1);let d,f,g,w=m=>{let h,p=new Promise((y,S)=>h=S);return g=()=>h(),t.signal.addEventListener("abort",g),Promise.race([m({request:t,params:r.params,context:u}),p])};try{let m=r.route[e];if(r.route.lazy)if(m)f=(await Promise.all([w(m),nf(r.route,i,o)]))[0];else if(await nf(r.route,i,o),m=r.route[e],m)f=await w(m);else{if(e==="action")throw rr(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:r.route.id});return{type:Ye.data,data:void 0}}else se(m,"Could not find the "+e+' to run on the "'+r.route.id+'" route'),f=await w(m);se(f!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(m){d=Ye.error,f=m}finally{g&&t.signal.removeEventListener("abort",g)}if(Wy(f)){let m=f.status;if(Oy.has(m)){let y=f.headers.get("Location");if(se(y,"Redirects returned/thrown from loaders/actions must have a Location header"),cm.test(y)){if(!l){let S=new URL(t.url),b=y.startsWith("//")?new URL(S.protocol+y):new URL(y),z=xi(b.pathname,a)!=null;b.origin===S.origin&&z&&(y=b.pathname+b.search+b.hash)}}else{let S=n.slice(0,n.indexOf(r)+1),b=rs(S).map(F=>F.pathnameBase),z=xu(y,b,new URL(t.url).pathname);if(se(lr(z),"Unable to resolve redirect location: "+y),a){let F=z.pathname;z.pathname=F==="/"?a:sr([a,F])}y=lr(z)}if(l)throw f.headers.set("Location",y),f;return{type:Ye.redirect,status:m,location:y,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(c)throw{type:d||Ye.data,response:f};let h,p=f.headers.get("Content-Type");return p&&/\bapplication\/json\b/.test(p)?h=await f.json():h=await f.text(),d===Ye.error?{type:d,error:new wu(m,f.statusText,h),headers:f.headers}:{type:Ye.data,data:h,statusCode:f.status,headers:f.headers}}if(d===Ye.error)return{type:d,error:f};if(Hy(f)){var v,x;return{type:Ye.deferred,deferredData:f,statusCode:(v=f.init)==null?void 0:v.status,headers:((x=f.init)==null?void 0:x.headers)&&new Headers(f.init.headers)}}return{type:Ye.data,data:f}}function Po(e,t,r,n){let o=e.createURL(pm(t)).toString(),i={signal:r};if(n&&fr(n.formMethod)){let{formMethod:a,formEncType:l,formData:c}=n;i.method=a.toUpperCase(),i.body=l==="application/x-www-form-urlencoded"?fm(c):c}return new Request(o,i)}function fm(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,n instanceof File?n.name:n);return t}function Uy(e,t,r,n,o){let i={},a=null,l,c=!1,u={};return r.forEach((d,f)=>{let g=t[f].route.id;if(se(!Bn(d),"Cannot handle redirect results in processLoaderData"),Wo(d)){let w=An(e,g),v=d.error;n&&(v=Object.values(n)[0],n=void 0),a=a||{},a[w.route.id]==null&&(a[w.route.id]=v),i[g]=void 0,c||(c=!0,l=sm(d.error)?d.error.status:500),d.headers&&(u[g]=d.headers)}else an(d)?(o.set(g,d.deferredData),i[g]=d.deferredData.data):i[g]=d.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(l=d.statusCode),d.headers&&(u[g]=d.headers)}),n&&(a=n,i[Object.keys(n)[0]]=void 0),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function of(e,t,r,n,o,i,a,l){let{loaderData:c,errors:u}=Uy(t,r,n,o,l);for(let d=0;d<i.length;d++){let{key:f,match:g}=i[d];se(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let w=a[d];if(Wo(w)){let v=An(e.matches,g==null?void 0:g.route.id);u&&u[v.route.id]||(u=me({},u,{[v.route.id]:w.error})),e.fetchers.delete(f)}else if(Bn(w))se(!1,"Unhandled fetcher revalidation redirect");else if(an(w))se(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:w.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(f,v)}}return{loaderData:c,errors:u}}function af(e,t,r,n){let o=me({},t);for(let i of r){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),n&&n.hasOwnProperty(a))break}return o}function An(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function sf(e){let t=e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function rr(e,t){let{pathname:r,routeId:n,method:o,type:i}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",o&&r&&n?l="You made a "+o+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":i==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+n+'" does not match URL "'+r+'"'):e===404?(a="Not Found",l='No route matches URL "'+r+'"'):e===405&&(a="Method Not Allowed",o&&r&&n?l="You made a "+o.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":o&&(l='Invalid request method "'+o.toUpperCase()+'"')),new wu(e||500,a,new Error(l),!0)}function lf(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(Bn(r))return r}}function pm(e){let t=typeof e=="string"?br(e):e;return lr(me({},t,{hash:""}))}function By(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function an(e){return e.type===Ye.deferred}function Wo(e){return e.type===Ye.error}function Bn(e){return(e&&e.type)===Ye.redirect}function Hy(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Wy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Vy(e){return Ty.has(e.toLowerCase())}function fr(e){return Ry.has(e.toLowerCase())}async function cf(e,t,r,n,o,i){for(let a=0;a<r.length;a++){let l=r[a],c=t[a];if(!c)continue;let u=e.find(f=>f.route.id===c.route.id),d=u!=null&&!dm(u,c)&&(i&&i[c.route.id])!==void 0;an(l)&&(o||d)&&await hm(l,n,o).then(f=>{f&&(r[a]=f||r[a])})}}async function hm(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:Ye.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Ye.error,error:o}}return{type:Ye.data,data:e.deferredData.data}}}function mm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function uf(e,t){let{route:r,pathname:n,params:o}=e;return{id:r.id,pathname:n,params:o,data:t[r.id],handle:r.handle}}function uc(e,t){let r=typeof t=="string"?br(t).search:t.search;if(e[e.length-1].route.index&&mm(r||""))return e[e.length-1];let n=rs(e);return n[n.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Qy=typeof Object.is=="function"?Object.is:Yy,{useState:Ky,useEffect:qy,useLayoutEffect:Gy,useDebugValue:Xy}=gl;function Jy(e,t,r){const n=t(),[{inst:o},i]=Ky({inst:{value:n,getSnapshot:t}});return Gy(()=>{o.value=n,o.getSnapshot=t,il(o)&&i({inst:o})},[e,n,t]),qy(()=>(il(o)&&i({inst:o}),e(()=>{il(o)&&i({inst:o})})),[e]),Xy(n),n}function il(e){const t=e.getSnapshot,r=e.value;try{const n=t();return!Qy(r,n)}catch{return!0}}function Zy(e,t,r){return t()}const ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tv=!ev,rv=tv?Zy:Jy,nv="useSyncExternalStore"in gl?(e=>e.useSyncExternalStore)(gl):rv,ns=P.createContext(null),wi=P.createContext(null),yn=P.createContext(null),os=P.createContext(null),Jr=P.createContext({outlet:null,matches:[]}),gm=P.createContext(null);function dc(){return dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},dc.apply(this,arguments)}function ov(e,t){let{relative:r}=t===void 0?{}:t;io()||se(!1);let{basename:n,navigator:o}=P.useContext(yn),{hash:i,pathname:a,search:l}=is(e,{relative:r}),c=a;return n!=="/"&&(c=a==="/"?n:sr([n,a])),o.createHref({pathname:c,search:l,hash:i})}function io(){return P.useContext(os)!=null}function ao(){return io()||se(!1),P.useContext(os).location}function Ft(){io()||se(!1);let{basename:e,navigator:t}=P.useContext(yn),{matches:r}=P.useContext(Jr),{pathname:n}=ao(),o=JSON.stringify(rs(r).map(l=>l.pathnameBase)),i=P.useRef(!1);return P.useEffect(()=>{i.current=!0}),P.useCallback(function(l,c){if(c===void 0&&(c={}),!i.current)return;if(typeof l=="number"){t.go(l);return}let u=xu(l,JSON.parse(o),n,c.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:sr([e,u.pathname])),(c.replace?t.replace:t.push)(u,c.state,c)},[e,t,o,n])}const ym=P.createContext(null);function iv(){return P.useContext(ym)}function av(e){let t=P.useContext(Jr).outlet;return t&&P.createElement(ym.Provider,{value:e},t)}function is(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=P.useContext(Jr),{pathname:o}=ao(),i=JSON.stringify(rs(n).map(a=>a.pathnameBase));return P.useMemo(()=>xu(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function sv(e,t){io()||se(!1);let{navigator:r}=P.useContext(yn),n=P.useContext(wi),{matches:o}=P.useContext(Jr),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=ao(),u;if(t){var d;let x=typeof t=="string"?br(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||se(!1),u=x}else u=c;let f=u.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",w=zn(e,{pathname:g}),v=dv(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:sr([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:sr([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n||void 0);return t&&v?P.createElement(os.Provider,{value:{location:dc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Fe.Pop}},v):v}function lv(){let e=pv(),t=sm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),r?P.createElement("pre",{style:o},r):null,i)}class cv extends P.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error,location:t.location}:{error:t.error||r.error,location:r.location}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?P.createElement(Jr.Provider,{value:this.props.routeContext},P.createElement(gm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uv(e){let{routeContext:t,match:r,children:n}=e,o=P.useContext(ns);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),P.createElement(Jr.Provider,{value:t},n)}function dv(e,t,r){if(t===void 0&&(t=[]),e==null)if(r!=null&&r.errors)e=r.matches;else return null;let n=e,o=r==null?void 0:r.errors;if(o!=null){let i=n.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||se(!1),n=n.slice(0,Math.min(n.length,i+1))}return n.reduceRight((i,a,l)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,u=null;r&&(a.route.ErrorBoundary?u=P.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=P.createElement(lv,null));let d=t.concat(n.slice(0,l+1)),f=()=>{let g=i;return c?g=u:a.route.Component?g=P.createElement(a.route.Component,null):a.route.element&&(g=a.route.element),P.createElement(uv,{match:a,routeContext:{outlet:i,matches:d},children:g})};return r&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?P.createElement(cv,{location:r.location,component:u,error:c,children:f(),routeContext:{outlet:null,matches:d}}):f()},null)}var df;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(df||(df={}));var hn;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(hn||(hn={}));function Su(e){let t=P.useContext(wi);return t||se(!1),t}function fv(e){let t=P.useContext(Jr);return t||se(!1),t}function vm(e){let t=fv(),r=t.matches[t.matches.length-1];return r.route.id||se(!1),r.route.id}function xm(){return Su(hn.UseNavigation).navigation}function Ge(){let e=Su(hn.UseLoaderData),t=vm(hn.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function pv(){var e;let t=P.useContext(gm),r=Su(hn.UseRouteError),n=vm(hn.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function hv(e){let{fallbackElement:t,router:r}=e,n=P.useCallback(()=>r.state,[r]),o=nv(r.subscribe,n,n),i=P.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:c=>r.navigate(c),push:(c,u,d)=>r.navigate(c,{state:u,preventScrollReset:d==null?void 0:d.preventScrollReset}),replace:(c,u,d)=>r.navigate(c,{replace:!0,state:u,preventScrollReset:d==null?void 0:d.preventScrollReset})}),[r]),a=r.basename||"/",l=P.useMemo(()=>({router:r,navigator:i,static:!1,basename:a}),[r,i,a]);return P.createElement(P.Fragment,null,P.createElement(ns.Provider,{value:l},P.createElement(wi.Provider,{value:o},P.createElement(yv,{basename:r.basename,location:r.state.location,navigationType:r.state.historyAction,navigator:i},r.state.initialized?P.createElement(vv,null):t))),null)}function mv(e){let{to:t,replace:r,state:n,relative:o}=e;io()||se(!1);let i=P.useContext(wi),a=Ft();return P.useEffect(()=>{i&&i.navigation.state!=="idle"||a(t,{replace:r,state:n,relative:o})}),null}function cr(e){return av(e.context)}function gv(e){se(!1)}function yv(e){let{basename:t="/",children:r=null,location:n,navigationType:o=Fe.Pop,navigator:i,static:a=!1}=e;io()&&se(!1);let l=t.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof n=="string"&&(n=br(n));let{pathname:u="/",search:d="",hash:f="",state:g=null,key:w="default"}=n,v=P.useMemo(()=>{let x=xi(u,l);return x==null?null:{location:{pathname:x,search:d,hash:f,state:g,key:w},navigationType:o}},[l,u,d,f,g,w,o]);return v==null?null:P.createElement(yn.Provider,{value:c},P.createElement(os.Provider,{children:r,value:v}))}function vv(e){let{children:t,location:r}=e,n=P.useContext(ns),o=n&&!t?n.router.routes:fc(t);return sv(o,r)}var ff;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ff||(ff={}));new Promise(()=>{});function fc(e,t){t===void 0&&(t=[]);let r=[];return P.Children.forEach(e,(n,o)=>{if(!P.isValidElement(n))return;let i=[...t,o];if(n.type===P.Fragment){r.push.apply(r,fc(n.props.children,i));return}n.type!==gv&&se(!1),!n.props.index||!n.props.children||se(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=fc(n.props.children,i)),r.push(a)}),r}function xv(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Kr.apply(this,arguments)}function ju(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const oa="get",al="application/x-www-form-urlencoded";function as(e){return e!=null&&typeof e.tagName=="string"}function wv(e){return as(e)&&e.tagName.toLowerCase()==="button"}function Sv(e){return as(e)&&e.tagName.toLowerCase()==="form"}function jv(e){return as(e)&&e.tagName.toLowerCase()==="input"}function kv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cv(e,t){return e.button===0&&(!t||t==="_self")&&!kv(e)}function bv(e,t,r){let n,o,i,a;if(Sv(e)){let d=r.submissionTrigger;n=r.method||e.getAttribute("method")||oa,o=r.action||e.getAttribute("action")||t,i=r.encType||e.getAttribute("enctype")||al,a=new FormData(e),d&&d.name&&a.append(d.name,d.value)}else if(wv(e)||jv(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');n=r.method||e.getAttribute("formmethod")||d.getAttribute("method")||oa,o=r.action||e.getAttribute("formaction")||d.getAttribute("action")||t,i=r.encType||e.getAttribute("formenctype")||d.getAttribute("enctype")||al,a=new FormData(d),e.name&&a.append(e.name,e.value)}else{if(as(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(n=r.method||oa,o=r.action||t,i=r.encType||al,e instanceof FormData)a=e;else if(a=new FormData,e instanceof URLSearchParams)for(let[d,f]of e)a.append(d,f);else if(e!=null)for(let d of Object.keys(e))a.append(d,e[d])}let{protocol:l,host:c}=window.location;return{url:new URL(o,l+"//"+c),method:n.toLowerCase(),encType:i,formData:a}}const Ev=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Nv=["aria-current","caseSensitive","className","end","style","to","children"],Pv=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];function Rv(e,t){return $y({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:iy({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||_v(),routes:e,detectErrorBoundary:xv}).initialize()}function _v(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Kr({},t,{errors:Tv(t.errors)})),t}function Tv(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,o]of t)if(o&&o.__type==="RouteErrorResponse")r[n]=new wu(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let i=new Error(o.message);i.stack="",r[n]=i}else r[n]=o;return r}const Ov=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=P.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:l,target:c,to:u,preventScrollReset:d}=t,f=ju(t,Ev),{basename:g}=P.useContext(yn),w,v=!1;if(typeof u=="string"&&zv.test(u)&&(w=u,Ov)){let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=xi(y.pathname,g);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:v=!0}let x=ov(u,{relative:o}),m=$v(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:o});function h(p){n&&n(p),p.defaultPrevented||m(p)}return P.createElement("a",Kr({},f,{href:w||x,onClick:v||i?n:h,ref:r,target:c}))}),Av=P.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:c,children:u}=t,d=ju(t,Nv),f=is(c,{relative:d.relative}),g=ao(),w=P.useContext(wi),{navigator:v}=P.useContext(yn),x=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,m=g.pathname,h=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(m=m.toLowerCase(),h=h?h.toLowerCase():null,x=x.toLowerCase());let p=m===x||!a&&m.startsWith(x)&&m.charAt(x.length)==="/",y=h!=null&&(h===x||!a&&h.startsWith(x)&&h.charAt(x.length)==="/"),S=p?n:void 0,b;typeof i=="function"?b=i({isActive:p,isPending:y}):b=[i,p?"active":null,y?"pending":null].filter(Boolean).join(" ");let z=typeof l=="function"?l({isActive:p,isPending:y}):l;return P.createElement(Te,Kr({},d,{"aria-current":S,className:b,ref:r,style:z,to:c}),typeof u=="function"?u({isActive:p,isPending:y}):u)}),$t=P.forwardRef((e,t)=>P.createElement(Lv,Kr({},e,{ref:t}))),Lv=P.forwardRef((e,t)=>{let{reloadDocument:r,replace:n,method:o=oa,action:i,onSubmit:a,fetcherKey:l,routeId:c,relative:u,preventScrollReset:d}=e,f=ju(e,Pv),g=Mv(l,c),w=o.toLowerCase()==="get"?"get":"post",v=wm(i,{relative:u}),x=m=>{if(a&&a(m),m.defaultPrevented)return;m.preventDefault();let h=m.nativeEvent.submitter,p=(h==null?void 0:h.getAttribute("formmethod"))||o;g(h||m.currentTarget,{method:p,replace:n,relative:u,preventScrollReset:d})};return P.createElement("form",Kr({ref:t,method:w,action:v,onSubmit:r?a:x},f))});var pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(pc||(pc={}));var pf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pf||(pf={}));function Dv(e){let t=P.useContext(ns);return t||se(!1),t}function $v(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,l=Ft(),c=ao(),u=is(e,{relative:a});return P.useCallback(d=>{if(Cv(d,r)){d.preventDefault();let f=n!==void 0?n:lr(c)===lr(u);l(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[c,l,u,n,o,r,e,i,a])}function Mv(e,t){let{router:r}=Dv(pc.UseSubmitImpl),n=wm();return P.useCallback(function(o,i){if(i===void 0&&(i={}),typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{method:a,encType:l,formData:c,url:u}=bv(o,n,i),d=u.pathname+u.search,f={replace:i.replace,preventScrollReset:i.preventScrollReset,formData:c,formMethod:a,formEncType:l};e?(t==null&&se(!1),r.fetch(e,t,d,f)):r.navigate(d,f)},[n,r,e,t])}function wm(e,t){let{relative:r}=t===void 0?{}:t,{basename:n}=P.useContext(yn),o=P.useContext(Jr);o||se(!1);let[i]=o.matches.slice(-1),a=Kr({},is(e||".",{relative:r})),l=ao();if(e==null&&(a.search=l.search,a.hash=l.hash,i.route.index)){let c=new URLSearchParams(a.search);c.delete("index"),a.search=c.toString()?"?"+c.toString():""}return(!e||e===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:sr([n,a.pathname])),lr(a)}const Iv=()=>s.jsx("div",{children:s.jsx(cr,{})});var Sm={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,ku=rt?Symbol.for("react.element"):60103,Cu=rt?Symbol.for("react.portal"):60106,ss=rt?Symbol.for("react.fragment"):60107,ls=rt?Symbol.for("react.strict_mode"):60108,cs=rt?Symbol.for("react.profiler"):60114,us=rt?Symbol.for("react.provider"):60109,ds=rt?Symbol.for("react.context"):60110,bu=rt?Symbol.for("react.async_mode"):60111,fs=rt?Symbol.for("react.concurrent_mode"):60111,ps=rt?Symbol.for("react.forward_ref"):60112,hs=rt?Symbol.for("react.suspense"):60113,Fv=rt?Symbol.for("react.suspense_list"):60120,ms=rt?Symbol.for("react.memo"):60115,gs=rt?Symbol.for("react.lazy"):60116,Uv=rt?Symbol.for("react.block"):60121,Bv=rt?Symbol.for("react.fundamental"):60117,Hv=rt?Symbol.for("react.responder"):60118,Wv=rt?Symbol.for("react.scope"):60119;function Ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ku:switch(e=e.type,e){case bu:case fs:case ss:case cs:case ls:case hs:return e;default:switch(e=e&&e.$$typeof,e){case ds:case ps:case gs:case ms:case us:return e;default:return t}}case Cu:return t}}}function jm(e){return Ot(e)===fs}ke.AsyncMode=bu;ke.ConcurrentMode=fs;ke.ContextConsumer=ds;ke.ContextProvider=us;ke.Element=ku;ke.ForwardRef=ps;ke.Fragment=ss;ke.Lazy=gs;ke.Memo=ms;ke.Portal=Cu;ke.Profiler=cs;ke.StrictMode=ls;ke.Suspense=hs;ke.isAsyncMode=function(e){return jm(e)||Ot(e)===bu};ke.isConcurrentMode=jm;ke.isContextConsumer=function(e){return Ot(e)===ds};ke.isContextProvider=function(e){return Ot(e)===us};ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ku};ke.isForwardRef=function(e){return Ot(e)===ps};ke.isFragment=function(e){return Ot(e)===ss};ke.isLazy=function(e){return Ot(e)===gs};ke.isMemo=function(e){return Ot(e)===ms};ke.isPortal=function(e){return Ot(e)===Cu};ke.isProfiler=function(e){return Ot(e)===cs};ke.isStrictMode=function(e){return Ot(e)===ls};ke.isSuspense=function(e){return Ot(e)===hs};ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ss||e===fs||e===cs||e===ls||e===hs||e===Fv||typeof e=="object"&&e!==null&&(e.$$typeof===gs||e.$$typeof===ms||e.$$typeof===us||e.$$typeof===ds||e.$$typeof===ps||e.$$typeof===Bv||e.$$typeof===Hv||e.$$typeof===Wv||e.$$typeof===Uv)};ke.typeOf=Ot;Sm.exports=ke;var Eu=Sm.exports;function Vv(e){function t(T,$,M,G,j){for(var re=0,L=0,le=0,ce=0,de,Z,$e=0,Je=0,pe,Me=pe=de=0,ye=0,We=0,Nr=0,Ve=0,Xt=M.length,Jt=Xt-1,xt,te="",Oe="",mo="",vn="",Zt;ye<Xt;){if(Z=M.charCodeAt(ye),ye===Jt&&L+ce+le+re!==0&&(L!==0&&(Z=L===47?10:47),ce=le=re=0,Xt++,Jt++),L+ce+le+re===0){if(ye===Jt&&(0<We&&(te=te.replace(g,"")),0<te.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:te+=M.charAt(ye)}Z=59}switch(Z){case 123:for(te=te.trim(),de=te.charCodeAt(0),pe=1,Ve=++ye;ye<Xt;){switch(Z=M.charCodeAt(ye)){case 123:pe++;break;case 125:pe--;break;case 47:switch(Z=M.charCodeAt(ye+1)){case 42:case 47:e:{for(Me=ye+1;Me<Jt;++Me)switch(M.charCodeAt(Me)){case 47:if(Z===42&&M.charCodeAt(Me-1)===42&&ye+2!==Me){ye=Me+1;break e}break;case 10:if(Z===47){ye=Me+1;break e}}ye=Me}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;ye++<Jt&&M.charCodeAt(ye)!==Z;);}if(pe===0)break;ye++}switch(pe=M.substring(Ve,ye),de===0&&(de=(te=te.replace(f,"").trim()).charCodeAt(0)),de){case 64:switch(0<We&&(te=te.replace(g,"")),Z=te.charCodeAt(1),Z){case 100:case 109:case 115:case 45:We=$;break;default:We=H}if(pe=t($,We,pe,Z,j+1),Ve=pe.length,0<E&&(We=r(H,te,Nr),Zt=l(3,pe,We,$,Y,fe,Ve,Z,j,G),te=We.join(""),Zt!==void 0&&(Ve=(pe=Zt.trim()).length)===0&&(Z=0,pe="")),0<Ve)switch(Z){case 115:te=te.replace(z,a);case 100:case 109:case 45:pe=te+"{"+pe+"}";break;case 107:te=te.replace(p,"$1 $2"),pe=te+"{"+pe+"}",pe=D===1||D===2&&i("@"+pe,3)?"@-webkit-"+pe+"@"+pe:"@"+pe;break;default:pe=te+pe,G===112&&(pe=(Oe+=pe,""))}else pe="";break;default:pe=t($,r($,te,Nr),pe,G,j+1)}mo+=pe,pe=Nr=We=Me=de=0,te="",Z=M.charCodeAt(++ye);break;case 125:case 59:if(te=(0<We?te.replace(g,""):te).trim(),1<(Ve=te.length))switch(Me===0&&(de=te.charCodeAt(0),de===45||96<de&&123>de)&&(Ve=(te=te.replace(" ",":")).length),0<E&&(Zt=l(1,te,$,T,Y,fe,Oe.length,G,j,G))!==void 0&&(Ve=(te=Zt.trim()).length)===0&&(te="\0\0"),de=te.charCodeAt(0),Z=te.charCodeAt(1),de){case 0:break;case 64:if(Z===105||Z===99){vn+=te+M.charAt(ye);break}default:te.charCodeAt(Ve-1)!==58&&(Oe+=o(te,de,Z,te.charCodeAt(2)))}Nr=We=Me=de=0,te="",Z=M.charCodeAt(++ye)}}switch(Z){case 13:case 10:L===47?L=0:1+de===0&&G!==107&&0<te.length&&(We=1,te+="\0"),0<E*O&&l(0,te,$,T,Y,fe,Oe.length,G,j,G),fe=1,Y++;break;case 59:case 125:if(L+ce+le+re===0){fe++;break}default:switch(fe++,xt=M.charAt(ye),Z){case 9:case 32:if(ce+re+L===0)switch($e){case 44:case 58:case 9:case 32:xt="";break;default:Z!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:ce+L+re===0&&(We=Nr=1,xt="\f"+xt);break;case 108:if(ce+L+re+U===0&&0<Me)switch(ye-Me){case 2:$e===112&&M.charCodeAt(ye-3)===58&&(U=$e);case 8:Je===111&&(U=Je)}break;case 58:ce+L+re===0&&(Me=ye);break;case 44:L+le+ce+re===0&&(We=1,xt+="\r");break;case 34:case 39:L===0&&(ce=ce===Z?0:ce===0?Z:ce);break;case 91:ce+L+le===0&&re++;break;case 93:ce+L+le===0&&re--;break;case 41:ce+L+re===0&&le--;break;case 40:if(ce+L+re===0){if(de===0)switch(2*$e+3*Je){case 533:break;default:de=1}le++}break;case 64:L+le+ce+re+Me+pe===0&&(pe=1);break;case 42:case 47:if(!(0<ce+re+le))switch(L){case 0:switch(2*Z+3*M.charCodeAt(ye+1)){case 235:L=47;break;case 220:Ve=ye,L=42}break;case 42:Z===47&&$e===42&&Ve+2!==ye&&(M.charCodeAt(Ve+2)===33&&(Oe+=M.substring(Ve,ye+1)),xt="",L=0)}}L===0&&(te+=xt)}Je=$e,$e=Z,ye++}if(Ve=Oe.length,0<Ve){if(We=$,0<E&&(Zt=l(2,Oe,We,T,Y,fe,Ve,G,j,G),Zt!==void 0&&(Oe=Zt).length===0))return vn+Oe+mo;if(Oe=We.join(",")+"{"+Oe+"}",D*U!==0){switch(D!==2||i(Oe,2)||(U=0),U){case 111:Oe=Oe.replace(S,":-moz-$1")+Oe;break;case 112:Oe=Oe.replace(y,"::-webkit-input-$1")+Oe.replace(y,"::-moz-$1")+Oe.replace(y,":-ms-input-$1")+Oe}U=0}}return vn+Oe+mo}function r(T,$,M){var G=$.trim().split(m);$=G;var j=G.length,re=T.length;switch(re){case 0:case 1:var L=0;for(T=re===0?"":T[0]+" ";L<j;++L)$[L]=n(T,$[L],M).trim();break;default:var le=L=0;for($=[];L<j;++L)for(var ce=0;ce<re;++ce)$[le++]=n(T[ce]+" ",G[L],M).trim()}return $}function n(T,$,M){var G=$.charCodeAt(0);switch(33>G&&(G=($=$.trim()).charCodeAt(0)),G){case 38:return $.replace(h,"$1"+T.trim());case 58:return T.trim()+$.replace(h,"$1"+T.trim());default:if(0<1*M&&0<$.indexOf("\f"))return $.replace(h,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+$}function o(T,$,M,G){var j=T+";",re=2*$+3*M+4*G;if(re===944){T=j.indexOf(":",9)+1;var L=j.substring(T,j.length-1).trim();return L=j.substring(0,T).trim()+L+";",D===1||D===2&&i(L,1)?"-webkit-"+L+L:L}if(D===0||D===2&&!i(j,1))return j;switch(re){case 1015:return j.charCodeAt(10)===97?"-webkit-"+j+j:j;case 951:return j.charCodeAt(3)===116?"-webkit-"+j+j:j;case 963:return j.charCodeAt(5)===110?"-webkit-"+j+j:j;case 1009:if(j.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+j+j;case 978:return"-webkit-"+j+"-moz-"+j+j;case 1019:case 983:return"-webkit-"+j+"-moz-"+j+"-ms-"+j+j;case 883:if(j.charCodeAt(8)===45)return"-webkit-"+j+j;if(0<j.indexOf("image-set(",11))return j.replace(ge,"$1-webkit-$2")+j;break;case 932:if(j.charCodeAt(4)===45)switch(j.charCodeAt(5)){case 103:return"-webkit-box-"+j.replace("-grow","")+"-webkit-"+j+"-ms-"+j.replace("grow","positive")+j;case 115:return"-webkit-"+j+"-ms-"+j.replace("shrink","negative")+j;case 98:return"-webkit-"+j+"-ms-"+j.replace("basis","preferred-size")+j}return"-webkit-"+j+"-ms-"+j+j;case 964:return"-webkit-"+j+"-ms-flex-"+j+j;case 1023:if(j.charCodeAt(8)!==99)break;return L=j.substring(j.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+j+"-ms-flex-pack"+L+j;case 1005:return v.test(j)?j.replace(w,":-webkit-")+j.replace(w,":-moz-")+j:j;case 1e3:switch(L=j.substring(13).trim(),$=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt($)){case 226:L=j.replace(b,"tb");break;case 232:L=j.replace(b,"tb-rl");break;case 220:L=j.replace(b,"lr");break;default:return j}return"-webkit-"+j+"-ms-"+L+j;case 1017:if(j.indexOf("sticky",9)===-1)break;case 975:switch($=(j=T).length-10,L=(j.charCodeAt($)===33?j.substring(0,$):j).substring(T.indexOf(":",7)+1).trim(),re=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:j=j.replace(L,"-webkit-"+L)+";"+j;break;case 207:case 102:j=j.replace(L,"-webkit-"+(102<re?"inline-":"")+"box")+";"+j.replace(L,"-webkit-"+L)+";"+j.replace(L,"-ms-"+L+"box")+";"+j}return j+";";case 938:if(j.charCodeAt(5)===45)switch(j.charCodeAt(6)){case 105:return L=j.replace("-items",""),"-webkit-"+j+"-webkit-box-"+L+"-ms-flex-"+L+j;case 115:return"-webkit-"+j+"-ms-flex-item-"+j.replace(A,"")+j;default:return"-webkit-"+j+"-ms-flex-line-pack"+j.replace("align-content","").replace(A,"")+j}break;case 973:case 989:if(j.charCodeAt(3)!==45||j.charCodeAt(4)===122)break;case 931:case 953:if(W.test(T)===!0)return(L=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?o(T.replace("stretch","fill-available"),$,M,G).replace(":fill-available",":stretch"):j.replace(L,"-webkit-"+L)+j.replace(L,"-moz-"+L.replace("fill-",""))+j;break;case 962:if(j="-webkit-"+j+(j.charCodeAt(5)===102?"-ms-"+j:"")+j,M+G===211&&j.charCodeAt(13)===105&&0<j.indexOf("transform",10))return j.substring(0,j.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+j}return j}function i(T,$){var M=T.indexOf($===1?":":"{"),G=T.substring(0,$!==3?M:10);return M=T.substring(M+1,T.length-1),C($!==2?G:G.replace(q,"$1"),M,$)}function a(T,$){var M=o($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return M!==$+";"?M.replace(F," or ($1)").substring(4):"("+$+")"}function l(T,$,M,G,j,re,L,le,ce,de){for(var Z=0,$e=$,Je;Z<E;++Z)switch(Je=k[Z].call(d,T,$e,M,G,j,re,L,le,ce,de)){case void 0:case!1:case!0:case null:break;default:$e=Je}if($e!==$)return $e}function c(T){switch(T){case void 0:case null:E=k.length=0;break;default:if(typeof T=="function")k[E++]=T;else if(typeof T=="object")for(var $=0,M=T.length;$<M;++$)c(T[$]);else O=!!T|0}return c}function u(T){return T=T.prefix,T!==void 0&&(C=null,T?typeof T!="function"?D=1:(D=2,C=T):D=0),u}function d(T,$){var M=T;if(33>M.charCodeAt(0)&&(M=M.trim()),V=M,M=[V],0<E){var G=l(-1,$,M,M,Y,fe,0,0,0,0);G!==void 0&&typeof G=="string"&&($=G)}var j=t(H,M,$,0,0);return 0<E&&(G=l(-2,j,M,M,Y,fe,j.length,0,0,0),G!==void 0&&(j=G)),V="",U=0,fe=Y=1,j}var f=/^\0+/g,g=/[\0\r\f]/g,w=/: */g,v=/zoo|gra/,x=/([,: ])(transform)/g,m=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,z=/\(\s*(.*)\s*\)/g,F=/([\s\S]*?);/g,A=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,ge=/([^-])(image-set\()/,fe=1,Y=1,U=0,D=1,H=[],k=[],E=0,C=null,O=0,V="";return d.use=c,d.set=u,e!==void 0&&u(e),d}var Yv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Qv(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Kv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hf=Qv(function(e){return Kv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Nu=Eu,qv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},km={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pu={};Pu[Nu.ForwardRef]=Xv;Pu[Nu.Memo]=km;function mf(e){return Nu.isMemo(e)?km:Pu[e.$$typeof]||qv}var Jv=Object.defineProperty,Zv=Object.getOwnPropertyNames,gf=Object.getOwnPropertySymbols,ex=Object.getOwnPropertyDescriptor,tx=Object.getPrototypeOf,yf=Object.prototype;function Cm(e,t,r){if(typeof t!="string"){if(yf){var n=tx(t);n&&n!==yf&&Cm(e,n,r)}var o=Zv(t);gf&&(o=o.concat(gf(t)));for(var i=mf(e),a=mf(t),l=0;l<o.length;++l){var c=o[l];if(!Gv[c]&&!(r&&r[c])&&!(a&&a[c])&&!(i&&i[c])){var u=ex(t,c);try{Jv(e,c,u)}catch{}}}}return e}var rx=Cm;const nx=Ia(rx);function gr(){return(gr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var vf=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},hc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Eu.typeOf(e)},Da=Object.freeze([]),Wr=Object.freeze({});function ui(e){return typeof e=="function"}function xf(e){return e.displayName||e.name||"Component"}function Ru(e){return e&&typeof e.styledComponentId=="string"}var Xn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_u=typeof window<"u"&&"HTMLElement"in window,ox=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Si(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var ix=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var n=0,o=0;o<r;o++)n+=this.groupSizes[o];return n},t.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;r>=a;)(a<<=1)<0&&Si(16,""+r);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(r+1),u=0,d=n.length;u<d;u++)this.tag.insertRule(c,n[u])&&(this.groupSizes[r]++,c++)},t.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],o=this.indexOfGroup(r),i=o+n;this.groupSizes[r]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var o=this.groupSizes[r],i=this.indexOfGroup(r),a=i+o,l=i;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),ia=new Map,$a=new Map,Vo=1,Hi=function(e){if(ia.has(e))return ia.get(e);for(;$a.has(Vo);)Vo++;var t=Vo++;return ia.set(e,t),$a.set(t,e),t},ax=function(e){return $a.get(e)},sx=function(e,t){t>=Vo&&(Vo=t+1),ia.set(e,t),$a.set(t,e)},lx="style["+Xn+'][data-styled-version="5.3.10"]',cx=new RegExp("^"+Xn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ux=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},dx=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var l=a.match(cx);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(sx(u,c),ux(e,u,l[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},fx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},bm=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(l){for(var c=l.childNodes,u=c.length;u>=0;u--){var d=c[u];if(d&&d.nodeType===1&&d.hasAttribute(Xn))return d}}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Xn,"active"),n.setAttribute("data-styled-version","5.3.10");var a=fx();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},px=function(){function e(r){var n=this.element=bm(r);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===o)return c}Si(17)}(n),this.length=0}var t=e.prototype;return t.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var n=this.sheet.cssRules[r];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),hx=function(){function e(r){var n=this.element=bm(r);this.nodes=n.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,n){if(r<=this.length&&r>=0){var o=document.createTextNode(n),i=this.nodes[r];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),mx=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),wf=_u,gx={isServer:!_u,useCSSOMInjection:!ox},Em=function(){function e(r,n,o){r===void 0&&(r=Wr),n===void 0&&(n={}),this.options=gr({},gx,{},r),this.gs=n,this.names=new Map(o),this.server=!!r.isServer,!this.server&&_u&&wf&&(wf=!1,function(i){for(var a=document.querySelectorAll(lx),l=0,c=a.length;l<c;l++){var u=a[l];u&&u.getAttribute(Xn)!=="active"&&(dx(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(r){return Hi(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new e(gr({},this.options,{},r),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,i=n.useCSSOMInjection,a=n.target,r=o?new mx(a):i?new px(a):new hx(a),new ix(r)));var r,n,o,i,a},t.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},t.registerName=function(r,n){if(Hi(r),this.names.has(r))this.names.get(r).add(n);else{var o=new Set;o.add(n),this.names.set(r,o)}},t.insertRules=function(r,n,o){this.registerName(r,n),this.getTag().insertRules(Hi(r),o)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(Hi(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var n=r.getTag(),o=n.length,i="",a=0;a<o;a++){var l=ax(a);if(l!==void 0){var c=r.names.get(l),u=n.getGroup(a);if(c&&u&&c.size){var d=Xn+".g"+a+'[id="'+l+'"]',f="";c!==void 0&&c.forEach(function(g){g.length>0&&(f+=g+",")}),i+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),yx=/(a)(d)/gi,Sf=function(e){return String.fromCharCode(e+(e>25?39:97))};function mc(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Sf(t%52)+r;return(Sf(t%52)+r).replace(yx,"$1-$2")}var Ln=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Nm=function(e){return Ln(5381,e)};function vx(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ui(r)&&!Ru(r))return!1}return!0}var xx=Nm("5.3.10"),wx=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&vx(t),this.componentId=r,this.baseHash=Ln(xx,r),this.baseStyle=n,Em.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,r,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Jn(this.rules,t,r,n).join(""),l=mc(Ln(this.baseHash,a)>>>0);if(!r.hasNameForId(o,l)){var c=n(a,"."+l,void 0,o);r.insertRules(o,l,c)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=Ln(this.baseHash,n.hash),f="",g=0;g<u;g++){var w=this.rules[g];if(typeof w=="string")f+=w;else if(w){var v=Jn(w,t,r,n),x=Array.isArray(v)?v.join(""):v;d=Ln(d,x+g),f+=x}}if(f){var m=mc(d>>>0);if(!r.hasNameForId(o,m)){var h=n(f,"."+m,void 0,o);r.insertRules(o,m,h)}i.push(m)}}return i.join(" ")},e}(),Sx=/^\s*\/\/.*$/gm,jx=[":","[",".","#"];function kx(e){var t,r,n,o,i=e===void 0?Wr:e,a=i.options,l=a===void 0?Wr:a,c=i.plugins,u=c===void 0?Da:c,d=new Vv(l),f=[],g=function(x){function m(h){if(h)try{x(h+"}")}catch{}}return function(h,p,y,S,b,z,F,A,q,W){switch(h){case 1:if(q===0&&p.charCodeAt(0)===64)return x(p+";"),"";break;case 2:if(A===0)return p+"/*|*/";break;case 3:switch(A){case 102:case 112:return x(y[0]+p),"";default:return p+(W===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(m)}}}(function(x){f.push(x)}),w=function(x,m,h){return m===0&&jx.indexOf(h[r.length])!==-1||h.match(o)?x:"."+t};function v(x,m,h,p){p===void 0&&(p="&");var y=x.replace(Sx,""),S=m&&h?h+" "+m+" { "+y+" }":y;return t=p,r=m,n=new RegExp("\\"+r+"\\b","g"),o=new RegExp("(\\"+r+"\\b){2,}"),d(h||!m?"":m,S)}return d.use([].concat(u,[function(x,m,h){x===2&&h.length&&h[0].lastIndexOf(r)>0&&(h[0]=h[0].replace(n,w))},g,function(x){if(x===-2){var m=f;return f=[],m}}])),v.hash=u.length?u.reduce(function(x,m){return m.name||Si(15),Ln(x,m.name)},5381).toString():"",v}var Pm=ie.createContext();Pm.Consumer;var Rm=ie.createContext(),Cx=(Rm.Consumer,new Em),gc=kx();function bx(){return P.useContext(Pm)||Cx}function Ex(){return P.useContext(Rm)||gc}var Nx=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=gc);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.toString=function(){return Si(12,String(n.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=gc),this.name+t.hash},e}(),Px=/([A-Z])/,Rx=/([A-Z])/g,_x=/^ms-/,Tx=function(e){return"-"+e.toLowerCase()};function jf(e){return Px.test(e)?e.replace(Rx,Tx).replace(_x,"-ms-"):e}var kf=function(e){return e==null||e===!1||e===""};function Jn(e,t,r,n){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Jn(e[a],t,r,n))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(kf(e))return"";if(Ru(e))return"."+e.styledComponentId;if(ui(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var c=e(t);return Jn(c,t,r,n)}var u;return e instanceof Nx?r?(e.inject(r,n),e.getName(n)):e:hc(e)?function d(f,g){var w,v,x=[];for(var m in f)f.hasOwnProperty(m)&&!kf(f[m])&&(Array.isArray(f[m])&&f[m].isCss||ui(f[m])?x.push(jf(m)+":",f[m],";"):hc(f[m])?x.push.apply(x,d(f[m],m)):x.push(jf(m)+": "+(w=m,(v=f[m])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||w in Yv||w.startsWith("--")?String(v).trim():v+"px")+";"));return g?[g+" {"].concat(x,["}"]):x}(e):e.toString()}var Cf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ox(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return ui(e)||hc(e)?Cf(Jn(vf(Da,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:Cf(Jn(vf(e,r)))}var zx=function(e,t,r){return r===void 0&&(r=Wr),e.theme!==r.theme&&e.theme||t||r.theme},Ax=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lx=/(^-|-$)/g;function sl(e){return e.replace(Ax,"-").replace(Lx,"")}var Dx=function(e){return mc(Nm(e)>>>0)};function Wi(e){return typeof e=="string"&&!0}var yc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},$x=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Mx(e,t,r){var n=e[r];yc(t)&&yc(n)?_m(n,t):e[r]=t}function _m(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var o=0,i=r;o<i.length;o++){var a=i[o];if(yc(a))for(var l in a)$x(l)&&Mx(e,a[l],l)}return e}var Tm=ie.createContext();Tm.Consumer;var ll={};function Om(e,t,r){var n=Ru(e),o=!Wi(e),i=t.attrs,a=i===void 0?Da:i,l=t.componentId,c=l===void 0?function(p,y){var S=typeof p!="string"?"sc":sl(p);ll[S]=(ll[S]||0)+1;var b=S+"-"+Dx("5.3.10"+S+ll[S]);return y?y+"-"+b:b}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(p){return Wi(p)?"styled."+p:"Styled("+xf(p)+")"}(e):u,f=t.displayName&&t.componentId?sl(t.displayName)+"-"+t.componentId:t.componentId||c,g=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,w=t.shouldForwardProp;n&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(p,y,S){return e.shouldForwardProp(p,y,S)&&t.shouldForwardProp(p,y,S)}:e.shouldForwardProp);var v,x=new wx(r,f,n?e.componentStyle:void 0),m=x.isStatic&&a.length===0,h=function(p,y){return function(S,b,z,F){var A=S.attrs,q=S.componentStyle,W=S.defaultProps,ge=S.foldedComponentIds,fe=S.shouldForwardProp,Y=S.styledComponentId,U=S.target,D=function(G,j,re){G===void 0&&(G=Wr);var L=gr({},j,{theme:G}),le={};return re.forEach(function(ce){var de,Z,$e,Je=ce;for(de in ui(Je)&&(Je=Je(L)),Je)L[de]=le[de]=de==="className"?(Z=le[de],$e=Je[de],Z&&$e?Z+" "+$e:Z||$e):Je[de]}),[L,le]}(zx(b,P.useContext(Tm),W)||Wr,b,A),H=D[0],k=D[1],E=function(G,j,re,L){var le=bx(),ce=Ex(),de=j?G.generateAndInjectStyles(Wr,le,ce):G.generateAndInjectStyles(re,le,ce);return de}(q,F,H),C=z,O=k.$as||b.$as||k.as||b.as||U,V=Wi(O),T=k!==b?gr({},b,{},k):b,$={};for(var M in T)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?$.as=T[M]:(fe?fe(M,hf,O):!V||hf(M))&&($[M]=T[M]));return b.style&&k.style!==b.style&&($.style=gr({},b.style,{},k.style)),$.className=Array.prototype.concat(ge,Y,E!==Y?E:null,b.className,k.className).filter(Boolean).join(" "),$.ref=C,P.createElement(O,$)}(v,p,y,m)};return h.displayName=d,(v=ie.forwardRef(h)).attrs=g,v.componentStyle=x,v.displayName=d,v.shouldForwardProp=w,v.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Da,v.styledComponentId=f,v.target=n?e.target:e,v.withComponent=function(p){var y=t.componentId,S=function(z,F){if(z==null)return{};var A,q,W={},ge=Object.keys(z);for(q=0;q<ge.length;q++)A=ge[q],F.indexOf(A)>=0||(W[A]=z[A]);return W}(t,["componentId"]),b=y&&y+"-"+(Wi(p)?p:sl(xf(p)));return Om(p,gr({},S,{attrs:g,componentId:b}),r)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=n?_m({},e.defaultProps,p):p}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),o&&nx(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var vc=function(e){return function t(r,n,o){if(o===void 0&&(o=Wr),!Eu.isValidElementType(n))return Si(1,String(n));var i=function(){return r(n,o,Ox.apply(void 0,arguments))};return i.withConfig=function(a){return t(r,n,gr({},o,{},a))},i.attrs=function(a){return t(r,n,gr({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Om,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){vc[e]=vc(e)});const Q=vc,Ix=Q.div`
  width: 100%;
  min-height: 95vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 50%;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  .top-container {
    display: grid;
    align-items: center;
    justify-items: center;
    .title {
      font-size: 2rem;
      margin-top: 1rem;
    }
    img {
      height: 3rem;
    }
  }
  .bottom-container {
    width: 100%;
  }
`;function zm(e,t){return function(){return e.apply(t,arguments)}}const{toString:Fx}=Object.prototype,{getPrototypeOf:Tu}=Object,ys=(e=>t=>{const r=Fx.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Er=e=>(e=e.toLowerCase(),t=>ys(t)===e),vs=e=>t=>typeof t===e,{isArray:so}=Array,di=vs("undefined");function Ux(e){return e!==null&&!di(e)&&e.constructor!==null&&!di(e.constructor)&&kr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Am=Er("ArrayBuffer");function Bx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Am(e.buffer),t}const Hx=vs("string"),kr=vs("function"),Lm=vs("number"),Ou=e=>e!==null&&typeof e=="object",Wx=e=>e===!0||e===!1,aa=e=>{if(ys(e)!=="object")return!1;const t=Tu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Vx=Er("Date"),Yx=Er("File"),Qx=Er("Blob"),Kx=Er("FileList"),qx=e=>Ou(e)&&kr(e.pipe),Gx=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||kr(e.append)&&((t=ys(e))==="formdata"||t==="object"&&kr(e.toString)&&e.toString()==="[object FormData]"))},Xx=Er("URLSearchParams"),Jx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ji(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),so(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(n=0;n<a;n++)l=i[n],t.call(null,e[l],l,e)}}function Dm(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const $m=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Mm=e=>!di(e)&&e!==$m;function xc(){const{caseless:e}=Mm(this)&&this||{},t={},r=(n,o)=>{const i=e&&Dm(t,o)||o;aa(t[i])&&aa(n)?t[i]=xc(t[i],n):aa(n)?t[i]=xc({},n):so(n)?t[i]=n.slice():t[i]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&ji(arguments[n],r);return t}const Zx=(e,t,r,{allOwnKeys:n}={})=>(ji(t,(o,i)=>{r&&kr(o)?e[i]=zm(o,r):e[i]=o},{allOwnKeys:n}),e),e2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),t2=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},r2=(e,t,r,n)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!n||n(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=r!==!1&&Tu(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},n2=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},o2=e=>{if(!e)return null;if(so(e))return e;let t=e.length;if(!Lm(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},i2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Tu(Uint8Array)),a2=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},s2=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},l2=Er("HTMLFormElement"),c2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),bf=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),u2=Er("RegExp"),Im=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ji(r,(o,i)=>{t(o,i,e)!==!1&&(n[i]=o)}),Object.defineProperties(e,n)},d2=e=>{Im(e,(t,r)=>{if(kr(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(kr(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},f2=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return so(e)?n(e):n(String(e).split(t)),r},p2=()=>{},h2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),cl="abcdefghijklmnopqrstuvwxyz",Ef="0123456789",Fm={DIGIT:Ef,ALPHA:cl,ALPHA_DIGIT:cl+cl.toUpperCase()+Ef},m2=(e=16,t=Fm.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function g2(e){return!!(e&&kr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const y2=e=>{const t=new Array(10),r=(n,o)=>{if(Ou(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const i=so(n)?[]:{};return ji(n,(a,l)=>{const c=r(a,o+1);!di(c)&&(i[l]=c)}),t[o]=void 0,i}}return n};return r(e,0)},_={isArray:so,isArrayBuffer:Am,isBuffer:Ux,isFormData:Gx,isArrayBufferView:Bx,isString:Hx,isNumber:Lm,isBoolean:Wx,isObject:Ou,isPlainObject:aa,isUndefined:di,isDate:Vx,isFile:Yx,isBlob:Qx,isRegExp:u2,isFunction:kr,isStream:qx,isURLSearchParams:Xx,isTypedArray:i2,isFileList:Kx,forEach:ji,merge:xc,extend:Zx,trim:Jx,stripBOM:e2,inherits:t2,toFlatObject:r2,kindOf:ys,kindOfTest:Er,endsWith:n2,toArray:o2,forEachEntry:a2,matchAll:s2,isHTMLForm:l2,hasOwnProperty:bf,hasOwnProp:bf,reduceDescriptors:Im,freezeMethods:d2,toObjectSet:f2,toCamelCase:c2,noop:p2,toFiniteNumber:h2,findKey:Dm,global:$m,isContextDefined:Mm,ALPHABET:Fm,generateString:m2,isSpecCompliantForm:g2,toJSONObject:y2};function ve(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}_.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Um=ve.prototype,Bm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Bm[e]={value:e}});Object.defineProperties(ve,Bm);Object.defineProperty(Um,"isAxiosError",{value:!0});ve.from=(e,t,r,n,o,i)=>{const a=Object.create(Um);return _.toFlatObject(e,a,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),ve.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const v2=null;function wc(e){return _.isPlainObject(e)||_.isArray(e)}function Hm(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Nf(e,t,r){return e?e.concat(t).map(function(o,i){return o=Hm(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function x2(e){return _.isArray(e)&&!e.some(wc)}const w2=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function xs(e,t,r){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=_.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,m){return!_.isUndefined(m[x])});const n=r.metaTokens,o=r.visitor||d,i=r.dots,a=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(_.isDate(v))return v.toISOString();if(!c&&_.isBlob(v))throw new ve("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(v)||_.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,x,m){let h=v;if(v&&!m&&typeof v=="object"){if(_.endsWith(x,"{}"))x=n?x:x.slice(0,-2),v=JSON.stringify(v);else if(_.isArray(v)&&x2(v)||(_.isFileList(v)||_.endsWith(x,"[]"))&&(h=_.toArray(v)))return x=Hm(x),h.forEach(function(y,S){!(_.isUndefined(y)||y===null)&&t.append(a===!0?Nf([x],S,i):a===null?x:x+"[]",u(y))}),!1}return wc(v)?!0:(t.append(Nf(m,x,i),u(v)),!1)}const f=[],g=Object.assign(w2,{defaultVisitor:d,convertValue:u,isVisitable:wc});function w(v,x){if(!_.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(v),_.forEach(v,function(h,p){(!(_.isUndefined(h)||h===null)&&o.call(t,h,_.isString(p)?p.trim():p,x,g))===!0&&w(h,x?x.concat(p):[p])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Pf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function zu(e,t){this._pairs=[],e&&xs(e,this,t)}const Wm=zu.prototype;Wm.append=function(t,r){this._pairs.push([t,r])};Wm.toString=function(t){const r=t?function(n){return t.call(this,n,Pf)}:Pf;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function S2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vm(e,t,r){if(!t)return e;const n=r&&r.encode||S2,o=r&&r.serialize;let i;if(o?i=o(t,r):i=_.isURLSearchParams(t)?t.toString():new zu(t,r).toString(n),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class j2{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Rf=j2,Ym={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},k2=typeof URLSearchParams<"u"?URLSearchParams:zu,C2=typeof FormData<"u"?FormData:null,b2=typeof Blob<"u"?Blob:null,E2=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),N2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),or={isBrowser:!0,classes:{URLSearchParams:k2,FormData:C2,Blob:b2},isStandardBrowserEnv:E2,isStandardBrowserWebWorkerEnv:N2,protocols:["http","https","file","blob","url","data"]};function P2(e,t){return xs(e,new or.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,i){return or.isNode&&_.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function R2(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _2(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function Qm(e){function t(r,n,o,i){let a=r[i++];const l=Number.isFinite(+a),c=i>=r.length;return a=!a&&_.isArray(o)?o.length:a,c?(_.hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!l):((!o[a]||!_.isObject(o[a]))&&(o[a]=[]),t(r,n,o[a],i)&&_.isArray(o[a])&&(o[a]=_2(o[a])),!l)}if(_.isFormData(e)&&_.isFunction(e.entries)){const r={};return _.forEachEntry(e,(n,o)=>{t(R2(n),o,r,0)}),r}return null}const T2={"Content-Type":void 0};function O2(e,t,r){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ws={transitional:Ym,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return o&&o?JSON.stringify(Qm(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return P2(t,this.formSerializer).toString();if((l=_.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return xs(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),O2(t)):t}],transformResponse:[function(t){const r=this.transitional||ws.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&_.isString(t)&&(n&&!this.responseType||o)){const a=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?ve.from(l,ve.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:or.classes.FormData,Blob:or.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(t){ws.headers[t]={}});_.forEach(["post","put","patch"],function(t){ws.headers[t]=_.merge(T2)});const Au=ws,z2=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A2=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),r=a.substring(0,o).trim().toLowerCase(),n=a.substring(o+1).trim(),!(!r||t[r]&&z2[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},_f=Symbol("internals");function Ro(e){return e&&String(e).trim().toLowerCase()}function sa(e){return e===!1||e==null?e:_.isArray(e)?e.map(sa):String(e)}function L2(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const D2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ul(e,t,r,n,o){if(_.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!_.isString(t)){if(_.isString(n))return t.indexOf(n)!==-1;if(_.isRegExp(n))return n.test(t)}}function $2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function M2(e,t){const r=_.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,a){return this[n].call(this,t,o,i,a)},configurable:!0})})}class Ss{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(l,c,u){const d=Ro(c);if(!d)throw new Error("header name must be a non-empty string");const f=_.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||c]=sa(l))}const a=(l,c)=>_.forEach(l,(u,d)=>i(u,d,c));return _.isPlainObject(t)||t instanceof this.constructor?a(t,r):_.isString(t)&&(t=t.trim())&&!D2(t)?a(A2(t),r):t!=null&&i(r,t,n),this}get(t,r){if(t=Ro(t),t){const n=_.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return L2(o);if(_.isFunction(r))return r.call(this,o,n);if(_.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Ro(t),t){const n=_.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||ul(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(a){if(a=Ro(a),a){const l=_.findKey(n,a);l&&(!r||ul(n,n[l],l,r))&&(delete n[l],o=!0)}}return _.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||ul(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return _.forEach(this,(o,i)=>{const a=_.findKey(n,i);if(a){r[a]=sa(o),delete r[i];return}const l=t?$2(i):String(i).trim();l!==i&&delete r[i],r[l]=sa(o),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return _.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&_.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[_f]=this[_f]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=Ro(a);n[l]||(M2(o,a),n[l]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}}Ss.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.freezeMethods(Ss.prototype);_.freezeMethods(Ss);const vr=Ss;function dl(e,t){const r=this||Au,n=t||r,o=vr.from(n.headers);let i=n.data;return _.forEach(e,function(l){i=l.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Km(e){return!!(e&&e.__CANCEL__)}function ki(e,t,r){ve.call(this,e??"canceled",ve.ERR_CANCELED,t,r),this.name="CanceledError"}_.inherits(ki,ve,{__CANCEL__:!0});function I2(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new ve("Request failed with status code "+r.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const F2=or.isStandardBrowserEnv?function(){return{write:function(r,n,o,i,a,l){const c=[];c.push(r+"="+encodeURIComponent(n)),_.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),_.isString(i)&&c.push("path="+i),_.isString(a)&&c.push("domain="+a),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function U2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function B2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qm(e,t){return e&&!U2(t)?B2(e,t):t}const H2=or.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(i){let a=i;return t&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(a){const l=_.isString(a)?o(a):a;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function W2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function V2(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=n[i];a||(a=u),r[o]=c,n[o]=u;let f=i,g=0;for(;f!==o;)g+=r[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const w=d&&u-d;return w?Math.round(g*1e3/w):void 0}}function Tf(e,t){let r=0;const n=V2(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,l=i-r,c=n(l),u=i<=a;r=i;const d={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-i)/c:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const Y2=typeof XMLHttpRequest<"u",Q2=Y2&&function(e){return new Promise(function(r,n){let o=e.data;const i=vr.from(e.headers).normalize(),a=e.responseType;let l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}_.isFormData(o)&&(or.isStandardBrowserEnv||or.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+v))}const d=qm(e.baseURL,e.url);u.open(e.method.toUpperCase(),Vm(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const w=vr.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};I2(function(h){r(h),c()},function(h){n(h),c()},x),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(n(new ve("Request aborted",ve.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ve("Network Error",ve.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||Ym;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),n(new ve(v,x.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,e,u)),u=null},or.isStandardBrowserEnv){const w=(e.withCredentials||H2(d))&&e.xsrfCookieName&&F2.read(e.xsrfCookieName);w&&i.set(e.xsrfHeaderName,w)}o===void 0&&i.setContentType(null),"setRequestHeader"in u&&_.forEach(i.toJSON(),function(v,x){u.setRequestHeader(x,v)}),_.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Tf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Tf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{u&&(n(!w||w.type?new ki(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=W2(d);if(g&&or.protocols.indexOf(g)===-1){n(new ve("Unsupported protocol "+g+":",ve.ERR_BAD_REQUEST,e));return}u.send(o||null)})},la={http:v2,xhr:Q2};_.forEach(la,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const K2={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let r,n;for(let o=0;o<t&&(r=e[o],!(n=_.isString(r)?la[r.toLowerCase()]:r));o++);if(!n)throw n===!1?new ve(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(la,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!_.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:la};function fl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ki(null,e)}function Of(e){return fl(e),e.headers=vr.from(e.headers),e.data=dl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),K2.getAdapter(e.adapter||Au.adapter)(e).then(function(n){return fl(e),n.data=dl.call(e,e.transformResponse,n),n.headers=vr.from(n.headers),n},function(n){return Km(n)||(fl(e),n&&n.response&&(n.response.data=dl.call(e,e.transformResponse,n.response),n.response.headers=vr.from(n.response.headers))),Promise.reject(n)})}const zf=e=>e instanceof vr?e.toJSON():e;function Zn(e,t){t=t||{};const r={};function n(u,d,f){return _.isPlainObject(u)&&_.isPlainObject(d)?_.merge.call({caseless:f},u,d):_.isPlainObject(d)?_.merge({},d):_.isArray(d)?d.slice():d}function o(u,d,f){if(_.isUndefined(d)){if(!_.isUndefined(u))return n(void 0,u,f)}else return n(u,d,f)}function i(u,d){if(!_.isUndefined(d))return n(void 0,d)}function a(u,d){if(_.isUndefined(d)){if(!_.isUndefined(u))return n(void 0,u)}else return n(void 0,d)}function l(u,d,f){if(f in t)return n(u,d);if(f in e)return n(void 0,u)}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>o(zf(u),zf(d),!0)};return _.forEach(Object.keys(e).concat(Object.keys(t)),function(d){const f=c[d]||o,g=f(e[d],t[d],d);_.isUndefined(g)&&f!==l||(r[d]=g)}),r}const Gm="1.3.6",Lu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Lu[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Af={};Lu.transitional=function(t,r,n){function o(i,a){return"[Axios v"+Gm+"] Transitional option '"+i+"'"+a+(n?". "+n:"")}return(i,a,l)=>{if(t===!1)throw new ve(o(a," has been removed"+(r?" in "+r:"")),ve.ERR_DEPRECATED);return r&&!Af[a]&&(Af[a]=!0,console.warn(o(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,a,l):!0}};function q2(e,t,r){if(typeof e!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const l=e[i],c=l===void 0||a(l,i,e);if(c!==!0)throw new ve("option "+i+" must be "+c,ve.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ve("Unknown option "+i,ve.ERR_BAD_OPTION)}}const Sc={assertOptions:q2,validators:Lu},Rr=Sc.validators;class Ma{constructor(t){this.defaults=t,this.interceptors={request:new Rf,response:new Rf}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Zn(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&Sc.assertOptions(n,{silentJSONParsing:Rr.transitional(Rr.boolean),forcedJSONParsing:Rr.transitional(Rr.boolean),clarifyTimeoutError:Rr.transitional(Rr.boolean)},!1),o!=null&&(_.isFunction(o)?r.paramsSerializer={serialize:o}:Sc.assertOptions(o,{encode:Rr.function,serialize:Rr.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let a;a=i&&_.merge(i.common,i[r.method]),a&&_.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),r.headers=vr.concat(a,i);const l=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(r)===!1||(c=c&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let d,f=0,g;if(!c){const v=[Of.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,u),g=v.length,d=Promise.resolve(r);f<g;)d=d.then(v[f++],v[f++]);return d}g=l.length;let w=r;for(f=0;f<g;){const v=l[f++],x=l[f++];try{w=v(w)}catch(m){x.call(this,m);break}}try{d=Of.call(this,w)}catch(v){return Promise.reject(v)}for(f=0,g=u.length;f<g;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Zn(this.defaults,t);const r=qm(t.baseURL,t.url);return Vm(r,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){Ma.prototype[t]=function(r,n){return this.request(Zn(n||{},{method:t,url:r,data:(n||{}).data}))}});_.forEach(["post","put","patch"],function(t){function r(n){return function(i,a,l){return this.request(Zn(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Ma.prototype[t]=r(),Ma.prototype[t+"Form"]=r(!0)});const ca=Ma;class Du{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{n.subscribe(l),i=l}).then(o);return a.cancel=function(){n.unsubscribe(i)},a},t(function(i,a,l){n.reason||(n.reason=new ki(i,a,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Du(function(o){t=o}),cancel:t}}}const G2=Du;function X2(e){return function(r){return e.apply(null,r)}}function J2(e){return _.isObject(e)&&e.isAxiosError===!0}const jc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(jc).forEach(([e,t])=>{jc[t]=e});const Z2=jc;function Xm(e){const t=new ca(e),r=zm(ca.prototype.request,t);return _.extend(r,ca.prototype,t,{allOwnKeys:!0}),_.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Xm(Zn(e,o))},r}const qe=Xm(Au);qe.Axios=ca;qe.CanceledError=ki;qe.CancelToken=G2;qe.isCancel=Km;qe.VERSION=Gm;qe.toFormData=xs;qe.AxiosError=ve;qe.Cancel=qe.CanceledError;qe.all=function(t){return Promise.all(t)};qe.spread=X2;qe.isAxiosError=J2;qe.mergeConfig=Zn;qe.AxiosHeaders=vr;qe.formToJSON=e=>Qm(_.isHTMLForm(e)?new FormData(e):e);qe.HttpStatusCode=Z2;qe.default=qe;const ew=qe,ue=ew.create({baseURL:"/api/v1"});Q.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;const tw=Q.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`,js=Q.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: var(--the-primary-color);
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: crimson;
    border: 1px solid black;
  }
`,Jm=Q(js)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`,Zm=Q(js)`
  background-color: white;
  color: crimson;
  border: 1px solid black;
  a {
    color: crimson;
  }
  &:hover {
    background-color: crimson;
    color: white;
    border: none;
  }
`;Q(tw)`
  width: 30px;
  height: 30px;
`;const Ao={base:"base",google:"google-sign-in",inverted:"inverted"},rw=(e=Ao.base)=>({[Ao.base]:js,[Ao.google]:Jm,[Ao.inverted]:Zm})[e],it=({children:e,buttonType:t,...r})=>{const n=rw(t);return s.jsx(n,{...r,children:e})},nw="/assets/sanshop-green-c46f0463.png",Ci=()=>s.jsx("img",{src:nw,alt:"sanshop",className:"logo"}),Se=({type:e,name:t,labelText:r,defaultValue:n,onChange:o})=>s.jsxs("div",{className:"form-row",children:[s.jsx("label",{htmlFor:t,className:"form-label",children:r||t}),s.jsx("input",{type:e,id:t,name:t,className:"form-input",defaultValue:n||"",onChange:o,required:!0})]}),ow=Q.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .logo {
      width: 100%;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      /* padding-left: 2.5rem; */
      padding: 1.5rem;
      justify-content: center;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      color: black;
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }
`,e0=P.createContext({products:[],setProducts:()=>[],user:{},setUser:()=>{}}),iw=({children:e})=>{const[t,r]=P.useState({}),[n,o]=P.useState([]),[i,a]=P.useState([]),[l,c]=P.useState(!1),[u,d]=P.useState(!1),[f,g]=P.useState([]),[w,v]=P.useState(b0()),[x,m]=P.useState([]),[h,p]=P.useState("");P.useEffect(()=>{const k=f.map(C=>C.createdBy.fullName).filter((C,O,V)=>V.indexOf(C)===O),E=k.map((C,O)=>({sellerId:C+O,sellerName:C,products:[]}));f.map(C=>{k.map((O,V)=>{if(O===C.createdBy.fullName&&E[V].sellerName===C.createdBy.fullName)return E[V].products.push(C)})}),m(E)},[f]);const y=()=>{const H=!w;v(H),document.body.classList.toggle("dark-theme",H),localStorage.setItem("darkTheme",H)},S=()=>{c(!l)},b=(H,k)=>{if(H.find(C=>C._id===k._id))return[...H.filter(O=>O._id!==k._id)]},z=(H,k)=>{if(H.find(C=>C._id===k._id))return H.map((C,O)=>C._id===k._id?{...C,quantity:C.quantity+1}:C)},F=(H,k)=>{const E=H.find(C=>C._id===k._id);if(k.quantity===1)return[...H.filter(O=>O._id!==k._id)];if(E)return console.log(E),H.map((C,O)=>C._id===k._id&&k.quantity!==1?{...C,quantity:C.quantity-1}:C)},A=(H,k)=>H.find(C=>C._id===k._id)?H.map(C=>C._id===k._id?{...C,quantity:C.quantity+1}:C):[...H,{...k,quantity:1}],D={user:t,setUser:r,products:n,setProducts:o,featuredProducts:i,setFeaturedProducts:a,showSidebar:l,setShowSidebar:c,showCartDropdown:u,setShowCartDropdown:d,cartItems:f,setCartItems:g,isDarkTheme:w,setIsDarkTheme:v,sellerUniqueArray:x,setUniqueCartItems:m,toggleDarkTheme:y,toggleSidebar:S,addProductToCart:H=>{g(A(f,H))},decreaseQuantityFromCart:H=>{g(F(f,H))},increaseQuantityFromCart:H=>{g(z(f,H))},removeItemFromCart:H=>{g(b(f,H))},searchKeyword:h,setSearchKeyword:p,toggleCartDropdown:()=>{d(!u)},logoutUser:async()=>{mv("/"),await ue.get("/authentications/logout")}};return s.jsx(e0.Provider,{value:D,children:e})},Xe=()=>P.useContext(e0);var t0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lf=ie.createContext&&ie.createContext(t0),Vr=globalThis&&globalThis.__assign||function(){return Vr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Vr.apply(this,arguments)},aw=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function r0(e){return e&&e.map(function(t,r){return ie.createElement(t.tag,Vr({key:r},t.attr),r0(t.child))})}function Ce(e){return function(t){return ie.createElement(sw,Vr({attr:Vr({},e.attr)},t),r0(e.child))}}function sw(e){var t=function(r){var n=e.attr,o=e.size,i=e.title,a=aw(e,["attr","size","title"]),l=o||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),ie.createElement("svg",Vr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:c,style:Vr(Vr({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&ie.createElement("title",null,i),e.children)};return Lf!==void 0?ie.createElement(Lf.Consumer,null,function(r){return t(r)}):t(t0)}function lw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"}}]})(e)}function cw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"176",cy:"416",r:"16",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"400",cy:"416",r:"16",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M48 80h64l48 272h256"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"}}]})(e)}function uw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"}}]})(e)}function n0(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 256a16 16 0 0116-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h160a56.06 56.06 0 0056-56V272H176a16 16 0 01-16-16zm299.31-11.31l-80-80a16 16 0 00-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1022.62 22.62l80-80a16 16 0 000-22.62z"}}]})(e)}function dw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"}}]})(e)}function o0(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"}}]})(e)}function ks(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M112 352l-64-64 64-64"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M64 288h294c58.76 0 106-49.33 106-108v-20"}}]})(e)}function fi(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M112 160l-64 64 64 64"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M64 224h294c58.76 0 106 49.33 106 108v20"}}]})(e)}function fw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zm224 0h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zm112 0h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zm-224 0h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z"}}]})(e)}function pw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"}}]})(e)}function hw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0112.28 0C16.43 19.18 14.03 20 12 20z"}}]})(e)}function mw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12.9 229.2c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4h-.2zM224 96.6c-7.1 0-14.6.6-21.4 1.7l3.7 67.4-22-64c-14.3 3.7-27.7 9.4-40 16.6l29.4 61.4-45.1-50.9c-11.4 8.9-21.7 19.1-30.6 30.9l50.6 45.4-61.1-29.7c-7.1 12.3-12.9 25.7-16.6 40l64.3 22.6-68-4c-.9 7.1-1.4 14.6-1.4 22s.6 14.6 1.4 21.7l67.7-4-64 22.6c3.7 14.3 9.4 27.7 16.6 40.3l61.1-29.7L97.7 352c8.9 11.7 19.1 22.3 30.9 30.9l44.9-50.9-29.5 61.4c12.3 7.4 25.7 13.1 40 16.9l22.3-64.6-4 68c7.1 1.1 14.6 1.7 21.7 1.7 7.4 0 14.6-.6 21.7-1.7l-4-68.6 22.6 65.1c14.3-4 27.7-9.4 40-16.9L274.9 332l44.9 50.9c11.7-8.9 22-19.1 30.6-30.9l-50.6-45.1 61.1 29.4c7.1-12.3 12.9-25.7 16.6-40.3l-64-22.3 67.4 4c1.1-7.1 1.4-14.3 1.4-21.7s-.3-14.9-1.4-22l-67.7 4 64-22.3c-3.7-14.3-9.1-28-16.6-40.3l-60.9 29.7 50.6-45.4c-8.9-11.7-19.1-22-30.6-30.9l-45.1 50.9 29.4-61.1c-12.3-7.4-25.7-13.1-40-16.9L241.7 166l4-67.7c-7.1-1.2-14.3-1.7-21.7-1.7zM443.4 128v256L224 512 4.6 384V128L224 0l219.4 128zm-17.1 10.3L224 20.9 21.7 138.3v235.1L224 491.1l202.3-117.7V138.3zM224 37.1l187.7 109.4v218.9L224 474.9 36.3 365.4V146.6L224 37.1zm0 50.9c-92.3 0-166.9 75.1-166.9 168 0 92.6 74.6 167.7 166.9 167.7 92 0 166.9-75.1 166.9-167.7 0-92.9-74.9-168-166.9-168z"}}]})(e)}function gw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"}}]})(e)}function yw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(e)}function vw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"}}]})(e)}function xw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"}}]})(e)}function pl(e){return Ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"}}]})(e)}function i0(e){return Ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function a0(e){return Ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function hl(e){return Ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"}}]})(e)}function eo(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"}}]})(e)}function ww(e){return Ce({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 288h-80v96l-32-21.3-32 21.3v-96h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16zm-384-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v96l-32-21.3L256 96V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16zm64 64h-80v96l-32-21.3L96 384v-96H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16z"}}]})(e)}function Sw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"}}]})(e)}function Cs(e){return Ce({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64z"}}]})(e)}function Df(e){return Ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(e)}function pi(e){return Ce({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"}}]})(e)}function jw(e){return Ce({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function kw(e){return Ce({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"}}]})(e)}function Cw(e){return Ce({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 8c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.38 3.602c1.56 0.846 2.62 2.498 2.62 4.398s-1.059 3.552-2.62 4.398c0.689-1.096 1.12-2.66 1.12-4.398s-0.431-3.302-1.12-4.398zM4.5 8c0 1.738 0.431 3.302 1.12 4.398-1.56-0.846-2.62-2.498-2.62-4.398s1.059-3.552 2.62-4.398c-0.689 1.096-1.12 2.66-1.12 4.398zM1.5 8c0 2.686 0.85 5.097 2.198 6.746-2.223-1.421-3.698-3.911-3.698-6.746s1.474-5.325 3.698-6.746c-1.348 1.649-2.198 4.060-2.198 6.746zM12.302 1.254c2.223 1.421 3.698 3.911 3.698 6.746s-1.474 5.325-3.698 6.746c1.348-1.649 2.198-4.060 2.198-6.746s-0.85-5.097-2.198-6.746z"}}]})(e)}const bw=[{icon:s.jsx(kw,{}),text:"Home",path:"."},{icon:s.jsx(gw,{}),text:"Store",path:"store"},{icon:s.jsx(fw,{}),text:"Stats",path:"stats"},{icon:s.jsx(Cw,{}),text:"Feed",path:"feed"},{icon:s.jsx(Df,{}),text:"History",path:"user-histories"},{icon:s.jsx(Df,{}),text:"History",path:"seller-histories"},{icon:s.jsx(hw,{}),text:"Account",path:"account-information"}],s0=({isBigSidebar:e})=>{const{toggleSidebar:t,user:r}=Xe();return s.jsx("div",{className:"nav-links",children:bw.map(n=>{const{text:o,path:i,icon:a}=n,{role:l}=r;if(!(i==="."&&l!=="user")&&!(i==="user-histories"&&l!=="user")&&!(i==="seller-histories"&&l!=="seller")&&!(i==="store"&&l!=="seller")&&!(i==="store"&&l!=="seller")&&!(i==="stats"&&l!=="admin"))return s.jsxs(Av,{to:i,className:"nav-link",onClick:e?null:t,end:!0,children:[s.jsx("span",{className:"icon",children:a})," ",o]},o)})})},Ew=()=>{const{showSidebar:e}=Xe();return s.jsx(ow,{children:s.jsx("div",{className:e?"sidebar-container":"sidebar-container show-sidebar",children:s.jsxs("div",{className:"content",children:[s.jsx("header",{children:s.jsx(Ci,{})}),s.jsx(s0,{isBigSidebar:!0})]})})})},Nw=Q.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`,Pw=()=>s.jsx(Nw,{children:s.jsx("div",{className:"sidebar-container",children:s.jsxs("div",{className:"content",children:[s.jsx("button",{type:"button",className:"close-btn",children:s.jsx(jw,{})}),s.jsx("header",{children:s.jsx(Ci,{})})]})})}),Rw=Q.nav`
  height: var(--nav-height);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  z-index: 120;
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .nav-form-row {
    display: flex;
    align-items: center;
    button {
      background: none;
      border: 2px solid var(--the-primary);
      color: var(--text-color);
      border-radius: 0;
      margin-left: 0.75rem;
      padding: 0.25rem 0.4rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .submit-icon {
        font-size: 1.25rem;
      }
    }
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: none;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .toggle-btn {
      display: flex;
    }
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;Q.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;const _w=Q.button`
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  .toggle-icon {
    font-size: 1.15rem;
    color: var(--text-color);
  }
`,Tw=()=>{const{isDarkTheme:e,toggleDarkTheme:t}=Xe();return s.jsx(_w,{onClick:t,children:e?s.jsx(pw,{className:"toggle-icon"}):s.jsx(dw,{className:"toggle-icon"})})};Q.img`
  width: 24px;
  height: 24px;
`;const Ow=Q.div`
  font-size: 1.5rem;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,zw=Q.span`
  position: absolute;
  font-size: 12.5px;
  font-weight: bold;
  right: 5px;
  bottom: 25px;
  background-color: white;
  color: var(--text-secondary-color);
  padding: 1.25px 2.5px;
  border-radius: 50%;
`,l0=()=>{const{toggleCartDropdown:e,sellerUniqueArray:t}=Xe(),[r,n]=P.useState(0);return P.useEffect(()=>{let o=0;t.map(i=>o+=i.products.length),n(o)},[t]),s.jsxs(Ow,{onClick:e,children:[s.jsx(cw,{className:"shopping-icon"}),s.jsx(zw,{className:"shopping-icon",children:r})]})},Aw=Q.div`
  position: absolute;
  z-index: 100;
  width: 260px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: var(--background-secondary-color);
  top: 90px;
  right: 25px;

  ${js}, ${Jm}, ${Zm} {
    margin-top: auto;
    font-size: 12px;
  }
`;Q.span`
  font-size: 18px;
  margin: 50px auto;
  z-index: 100;
`;const Lw=Q.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scroll-behavior: smooth;
`,Dw=Q.div`
  border: 2px solid var(--the-primary-color);
  margin-bottom: 0.5rem;
  .seller-name {
    background-color: var(--the-primary-color);
    color: white;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    h2 {
      font-size: 1rem;
    }
  }
  .products {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem 0.5rem 0.5rem;
    .product-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.25rem 0;
      .product-name {
        width: 80%;
      }
      .product-quantity {
        min-width: 20%;

        display: flex;
        justify-content: end;
      }
    }
  }
`,$w=({cartItem:e})=>{const{sellerName:t,products:r}=e;return s.jsxs(Dw,{children:[s.jsx("div",{className:"seller-name",children:s.jsx("h2",{children:t})}),s.jsx("div",{className:"products",children:r.map(n=>s.jsxs("div",{className:"product-info",children:[s.jsx("span",{className:"product-name",children:n.name.length>=22?n.name.substring(0,22)+"...":n.name}),s.jsx("div",{className:"product-quantity",children:s.jsxs("span",{children:["x ",n.quantity]})})]},n._id))})]})},c0=()=>{const{cartItems:e}=Xe(),[t,r]=P.useState([]);return P.useEffect(()=>{const o=e.map(a=>a.createdBy.fullName).filter((a,l,c)=>c.indexOf(a)===l),i=o.map((a,l)=>({sellerId:a+l,sellerName:a,products:[]}));e.map(a=>{o.map((l,c)=>{if(l===a.createdBy.fullName&&i[c].sellerName===a.createdBy.fullName)return i[c].products.push(a)})}),r(i)},[e]),s.jsxs(Aw,{children:[s.jsx(Lw,{children:t.map(n=>s.jsx($w,{cartItem:n},n.sellerId))}),s.jsx(it,{children:s.jsx(Te,{to:"/checkout",children:"GO TO CHECKOUT"})})]})},Mw=()=>{const{toggleSidebar:e,showCartDropdown:t,user:r,setSearchKeyword:n}=Xe(),o=Ft(),[i,a]=P.useState(),l=u=>{a(u.target.value)},c=async u=>{if(u.preventDefault(),i){n(i);let d=new URLSearchParams;return d.append("search",i),console.log(d),o(`/search?${d}`)}};return s.jsx(Rw,{children:s.jsxs("div",{className:"nav-center",children:[s.jsx("button",{type:"button",className:"toggle-btn",onClick:e,children:s.jsx(yw,{})}),s.jsxs("div",{className:"nav-center",children:[s.jsx("form",{onSubmit:c,children:s.jsxs("div",{className:"nav-form-row",children:[s.jsx("input",{type:"text",name:"toSearch",className:"form-input",placeholder:"search",onChange:l}),s.jsx("button",{type:"submit",children:s.jsx(a0,{className:"submit-icon"})})]})}),s.jsx("h4",{className:"logo-text",children:" Dashboard"})]}),s.jsxs("div",{className:"btn-container",children:[s.jsx(Tw,{}),r.role==="user"&&s.jsx(l0,{})]}),t&&s.jsx(c0,{})]})})},$u=({name:e,labelText:t,list:r,defaultValue:n="",onChange:o})=>s.jsxs("div",{className:"form-row",children:[s.jsx("label",{htmlFor:e,className:"form-label",children:t||e}),s.jsx("select",{name:e,id:e,className:"form-select",defaultValue:n,onChange:o,children:r.map(i=>s.jsx("option",{value:i,children:i},i))})]});Q.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  border-bottom: 5px solid ${e=>e.color};
  border-radius: var(--border-radius);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${e=>e.color};
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: left;
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${e=>e.bcg};
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${e=>e.color};
    }
  }
`;const bi=({formBtn:e})=>{const r=xm().state==="submitting";return s.jsx(it,{type:"submit",disabled:r,children:r?"submitting ....":"submit"})};Q.button`
  background-color: var(--primary-500);
  font-size: medium;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  margin: 0 2rem;
  .temp-link {
    color: white;
  }
`;const Iw=Q.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  /* padding: 1rem 0.5rem; */
  .test-status {
    width: 100%;
    height: 50px;
    background-color: aliceblue;
    margin-top: 1rem;
  }
  .featured {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    background-color: aliceblue;
    h1 {
      margin: 1.5rem 0 0.25rem 1rem;
      font-size: 1.25rem;
    }
    .featured-container {
      display: grid;
      grid-auto-flow: column;

      overflow-x: scroll;
      grid-gap: 0.5rem;
      padding: 0.5rem;
    }
  }
  .all-products {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1rem;
    margin-bottom: 4rem;
    h1 {
      text-align: center;
      margin: 1rem;
    }
    .products-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem;
      padding: 0.5rem;
    }
  }
`,Fw=Q.div`
  .product-item {
    background-color: white;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 40%;
    height: 250px;
    width: 300px;
    .product-image {
      width: 100%;
      height: 100%;
      background-color: crimson;
    }
    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .product-main-info {
        .product-name {
          font-size: 1.25rem;
          margin-top: 0.5rem;
        }
        .product-brand {
          font-size: 0.85rem;
          color: darkgray;
        }
      }
      .product-bottom-holder {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .product-price {
          margin-bottom: 0.5rem;
        }
        .button-container {
          display: flex;
          /* justify-content: end; */
          align-items: end;
          .btn-add {
            display: flex;
            align-items: center;
            background: crimson;
            border-radius: 0;
            border: none;
            color: white;
            padding: 0.1rem 0.25rem 0.1rem 0.5rem;
            span {
              padding: 0;
              font-size: 2rem;
              margin-left: 0.75rem;
            }
          }
        }
      }
    }

    a {
      color: white;
    }
  }
`,Uw=({product:e})=>{var g,w;const{addProductToCart:t,cartItems:r}=Xe(),{_id:n,brand:o,name:i,price:a,countInStock:l}=e,c=Ft(),u=()=>c(`product-showcase/${n}`),d=()=>t(e),f=r.filter(v=>v._id===n);return s.jsx(Fw,{children:s.jsxs("div",{className:"product-item",children:[s.jsx("div",{className:"product-image",onClick:u}),s.jsxs("div",{className:"product-info",children:[s.jsxs("div",{className:"product-main-info",onClick:u,children:[s.jsx("h2",{className:"product-name",children:i.length>=20?i.substring(0,20)+"...":i}),s.jsx("h4",{className:"product-brand",children:o})]}),s.jsxs("div",{className:"product-bottom-holder",children:[s.jsxs("h3",{className:"product-price",children:["$ ",a]}),s.jsx("div",{className:"button-container",children:r&&r.length===0||!((g=f[0])!=null&&g.quantity)?s.jsxs("button",{type:"button",className:"btn-add",onClick:d,children:["Add to cart ",s.jsx("span",{children:"+"})]}):((w=f[0])==null?void 0:w.quantity)+1>l?s.jsx("button",{type:"button",className:"btn",disabled:!0,children:"maxed"}):s.jsxs("button",{type:"button",className:"btn-add",onClick:d,children:["Add to cart ",s.jsx("span",{children:"+"})]})})]})]})]})})},Bw=Q.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  z-index: 0;
  position: relative;
  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
    .slide {
      display: inline-flex;
      height: 200px;
      width: 100%;
    }
  }
  .slideshowDots {
    text-align: center;
    position: absolute;
    bottom: 3rem;
    left: 1rem;
    .slideshowDot {
      display: inline-block;
      height: 10px;
      width: 10px;
      cursor: pointer;
      margin: 15px 7px 0;
      background-color: #c4c4c4;
    }
    .slideshowDot.active {
      background-color: crimson;
    }
  }
`,ml=["#0088fe","#00c49f","#ffbb28"],Hw=2500,Ww=()=>{const[e,t]=P.useState(0),r=P.useRef(null),n=()=>{r.current&&clearTimeout(r.current)};return P.useEffect(()=>(n(),r.current=setTimeout(()=>t(o=>o===ml.length-1?0:o+1),Hw),console.log("fired"),()=>{n()}),[e]),s.jsxs(Bw,{children:[s.jsx("div",{className:"slideshowSlider",style:{transform:`translate3d(${-e*100}%,0,0)`},children:ml.map((o,i)=>s.jsx("div",{className:"slide",style:{backgroundColor:o}},i))}),s.jsx("div",{className:"slideshowDots",children:ml.map((o,i)=>s.jsx("div",{className:`slideshowDot${e===i?" active":""}`,onClick:()=>{t(i)}},i))})]})},Vw=Q.div`
  .product-item {
    background-color: var(--background-secondary-color);
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 30% 10%;
    height: 300px;
    width: 100%;
    .product-image {
      width: 100%;
      height: 100%;
      background-color: crimson;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .product-img {
        width: 100%;
      }
    }
    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .product-main-info {
        .product-name {
          font-size: 1.25rem;
        }
        .product-brand {
          font-size: 0.85rem;
          /* color: darkgray; */
        }
      }
      .product-price {
        margin-bottom: 0.5rem;
      }
    }
    .button-container {
      display: flex;
      justify-content: end;
      .btn-add {
        display: flex;
        align-items: center;
        background-color: var(--the-primary-color);
        border-radius: 0;
        border: none;
        color: white;
        padding: 0.1rem 0.25rem 0.1rem 0.5rem;
        span {
          padding: 0;
          font-size: 2rem;
          margin-left: 0.75rem;
        }
      }
    }
    a {
      color: white;
    }
  }
`,u0=({product:e})=>{var w,v;const{addProductToCart:t,cartItems:r}=Xe(),{_id:n,brand:o,name:i,price:a,countInStock:l,image:c}=e,u=Ft(),d=()=>u(`/dashboard/product-showcase/${n}`),f=()=>t(e),g=r.filter(x=>x._id===n);return s.jsx(Vw,{children:s.jsxs("div",{className:"product-item",children:[s.jsx("div",{className:"product-image",onClick:d,children:c&&s.jsx("img",{src:c,className:"product-img"})}),s.jsxs("div",{className:"product-info",onClick:d,children:[s.jsxs("div",{className:"product-main-info",children:[s.jsx("h2",{className:"product-name",children:i.length>=20?i.substring(0,20)+"...":i}),s.jsx("h4",{className:"product-brand",children:o})]}),s.jsxs("h3",{className:"product-price",children:["$ ",a]})]}),s.jsx("div",{className:"button-container",children:r&&r.length===0||!((w=g[0])!=null&&w.quantity)?s.jsxs("button",{type:"button",className:"btn-add",onClick:f,children:["Add to cart ",s.jsx("span",{children:"+"})]}):((v=g[0])==null?void 0:v.quantity)+1>l?s.jsx("button",{type:"button",className:"btn",disabled:!0,children:"maxed"}):s.jsxs("button",{type:"button",className:"btn-add",onClick:f,children:["Add to cart ",s.jsx("span",{children:"+"})]})})]})})},Yw=Q.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 90%;
  margin-top: -2rem;
  background-color: var(--background-secondary-color);
  z-index: 100;
  padding: 1rem 0.5rem;
  .acc-info-item {
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    color: white;
    background-color: var(--the-primary-color);
    /* border: 2px solid white; */
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0.5rem;
      font-size: 1rem;
      .icon {
        font-size: 1.75rem;
      }
      .text-icon {
        margin-top: 0.5rem;
      }
      .avatar {
        width: 40px;
        height: 40px;
        background-color: white;
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .acc-info-logout {
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    background-color: var(--the-primary-color);
    color: white;
    .text-icon {
      margin-top: 0.5rem;
    }
    .icon {
      font-size: 1.75rem;
    }
  }
`,Qw=()=>{const{user:e,setUser:t}=Xe(),r=Ft(),n=async()=>{await ue.get("/authentications/logout"),t(null),r("/")};return s.jsxs(Yw,{children:[s.jsx("div",{className:"acc-info-item",children:s.jsxs(Te,{to:"/dashboard/account-information",children:[e.avatar?s.jsx("div",{className:"avatar",children:s.jsx("img",{src:e.avatar,alt:"avatar",className:"img"})}):s.jsx(o0,{className:"icon"}),s.jsx("span",{className:"text-icon",children:"Info"})]})}),s.jsx("div",{className:"acc-info-item",children:s.jsxs(Te,{to:"/order/order-items",children:[s.jsx(mw,{className:"icon"}),s.jsx("span",{className:"text-icon",children:"Order"})]})}),s.jsx("div",{className:"acc-info-item",children:s.jsxs(Te,{to:"/dashboard/user-histories",children:[s.jsx(Sw,{className:"icon"}),s.jsx("span",{className:"text-icon",children:"History"})]})}),s.jsxs("div",{className:"acc-info-logout",onClick:n,children:[s.jsx(n0,{className:"icon"}),s.jsx("span",{className:"text-icon",children:"Logout"})]})]})},Kw=()=>{const{featuredProducts:e,products:t}=Xe();return s.jsxs(Iw,{children:[s.jsx(Ww,{}),s.jsx(Qw,{}),e.length>1&&s.jsxs("div",{className:"featured",children:[s.jsx("h1",{children:"Featured Products"}),s.jsx("div",{className:"featured-container",children:e.map(r=>s.jsx(Uw,{product:r},r._id))})]}),s.jsx("div",{className:"all-products",children:s.jsx("div",{className:"products-container",children:t.map(r=>s.jsx(u0,{product:r},r._id))})})]})},qw=Q.div``,Gw=({orderListItemData:e})=>{const{orderItems:t,wholeTotalPrice:r,_id:n}=e;return s.jsx(qw,{children:s.jsxs("div",{className:"order-container",children:[t.map(o=>s.jsxs("div",{className:"order-item-container",children:[s.jsx("div",{children:s.jsx("h1",{children:o.seller.fullName})}),o.orderedProducts.map(i=>s.jsxs("div",{className:"ordered-products-container",children:[s.jsxs("div",{className:"ordered-products-top",children:[s.jsx("h4",{children:i.product.brand}),s.jsx("h3",{children:i.product.name}),s.jsx("h5",{children:i.product.price})]}),s.jsx("div",{className:"ordered-products-bottom",children:s.jsx("h3",{children:i.quantity})})]},i.product._id))]},o._id)),s.jsx("div",{className:"total-price",children:s.jsx("h2",{children:r})}),s.jsx("div",{className:"order-detail-button",children:s.jsx("button",{className:"btn btn-block",children:s.jsx(Te,{className:"order-button-link",to:`order-detail/${n}`,children:"See the details"})})})]})})},Xw=Q.div`
  margin-bottom: 3rem;
  border: 4px solid var(--the-primary-color);
  color: var(--text-color);
  background-color: var(--background-secondary-color);
  .order-item-title {
    padding: 1rem;
    background-color: var(--the-primary-color);
    text-align: center;
    width: 100%;
    color: var(--text-color);
  }
  .order-item-body {
    .ordered-products {
      display: flex;
      width: 100%;
      // border-bottom: 4px solid crimson;
      .left {
        width: 30%;
        padding: 0.5rem;
        .image {
          background-color: crimson;
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 70%;
        padding: 1rem;
        .ordered-products-total {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          .ordered-products-total-info {
            display: flex;
            h3 {
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
  .user-address {
    .user-address-title {
      background-color: crimson;
      padding: 1rem;
      color: white;
      text-align: center;
    }
    .user-address-info {
      padding: 1rem;
      .user-address-info-item {
        margin: 1rem 0;
      }
    }
  }
  .order-bottom {
    .order-bottom-total {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      h5 {
        font-size: 1.5rem;
      }
    }
    .order-bottom-status {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      background-color: var(--the-primary-color);
      .order-bottom-status-status {
        display: flex;
        width: 100%;
        .order-bottom-status-text {
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: var(--text-color);
          width: 100%;
          padding-top: 1rem;
          padding-left: 1rem;
        }
        .order-bottom-status-orderstatus {
          color: var(--text-color);
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          text-align: center;
          padding: 1rem;
          margin-bottom: 0.5rem;
        }
        .order-bottom-status-deliverystatus {
          color: var(--text-color);
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          text-align: center;
          padding: 1rem;
        }
      }
    }
  }
`,d0=({orderItem:e,isSeller:t})=>{const{user:r,seller:n,orderStatus:o,deliveryStatus:i,totalPrice:a}=e,l=u=>{if(u==="processing")return"gray";if(u==="readyToApprove")return"teal";if(u==="approved")return"lime";if(u==="notApproved"||u==="return")return"red"},c=u=>{if(u==="pending")return"gray";if(u==="shipping")return"teal";if(u==="delivered")return"yellowgreen";if(u==="returning")return"black";if(u==="canceled")return"red"};return s.jsxs(Xw,{children:[s.jsx("div",{className:"order-item-title",children:t?s.jsxs("h3",{children:["To: ",r==null?void 0:r.fullName]}):s.jsxs("h3",{children:["From: ",n==null?void 0:n.fullName]})}),s.jsx("div",{className:"order-bottom",children:s.jsxs("div",{className:"order-bottom-status",children:[s.jsxs("div",{className:"order-bottom-status-status",children:[s.jsx("h2",{className:"order-bottom-status-text",children:"Order Status"}),s.jsx("div",{className:"order-bottom-status-orderstatus",style:{backgroundColor:l(o)},children:o})]}),s.jsxs("div",{className:"order-bottom-status-status",children:[s.jsx("h2",{className:"order-bottom-status-text",children:"Delivery Status"}),s.jsx("div",{className:"order-bottom-status-deliverystatus",style:{backgroundColor:c(i)},children:i})]})]})}),s.jsx("div",{className:"order-bottom",children:s.jsxs("div",{className:"order-bottom-total",children:[s.jsx("h5",{children:"total"}),s.jsxs("h5",{children:["$",a]})]})})]})},Jw=Q.div`
  .order-status-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    padding: 2rem 0;
    .order-status-info-icon {
      font-size: 2rem;
    }
  }
`,bs=({deliveryStatus:e})=>{console.log(e);const t=r=>{const n={color:null,icon:null};if(r==="pending")return n.color="gray",n.icon=s.jsx(Cs,{}),n;if(r==="shipping")return n.color="teal",n.icon=s.jsx(pi,{}),n;if(r==="delivered")return n.color="yellowgreen",n.icon=s.jsx(eo,{}),n;if(r==="returning")return n.color="black",n.icon=s.jsx(ks,{}),n;if(r==="canceled")return n.color="red",n.icon=s.jsx(fi,{}),n};return s.jsx(Jw,{children:s.jsxs("div",{className:"order-status-info",style:{backgroundColor:t(e).color},children:[s.jsxs("div",{className:"order-status-info-text",children:[s.jsx("h5",{children:"Delivery Status"}),s.jsx("h1",{children:e})]}),s.jsx("div",{className:"order-status-info-icon",children:t(e).icon})]})})},Zw=Q.div`
  border-top: 4px solid var(--the-primary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: var(--text-color);
  .order-detail-status-status {
    .order-detail-status-text {
      margin-bottom: 1rem;
      font-size: 0.75rem;
      text-align: center;
    }
    .order-detail-status-orderstatus {
      color: var(--text-color);
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 1rem;
    }
    .order-detail-status-deliverystatus {
      color: var(--text-color);
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 1rem;
    }
  }
`,lo=({orderStatus:e,deliveryStatus:t})=>{const r=o=>{if(o==="processing")return"gray";if(o==="readyToApprove")return"teal";if(o==="approved")return"lime";if(o==="notApproved")return"black";if(o==="return")return"red"},n=o=>{const i={color:null,icon:null};if(o==="pending")return i.color="gray",i.icon=s.jsx(Cs,{}),i;if(o==="shipping")return i.color="teal",i.icon=s.jsx(pi,{}),i;if(o==="delivered")return i.color="yellowgreen",i.icon=s.jsx(eo,{}),i;if(o==="returning")return i.color="black",i.icon=s.jsx(ks,{}),i;if(o==="canceled")return i.color="red",i.icon=s.jsx(fi,{}),i};return s.jsxs(Zw,{children:[s.jsxs("div",{className:"order-detail-status-status",children:[s.jsx("h2",{className:"order-detail-status-text",children:"Order Status"}),s.jsx("div",{className:"order-detail-status-orderstatus",style:{backgroundColor:r(e)},children:e})]}),s.jsxs("div",{className:"order-detail-status-status",children:[s.jsx("h2",{className:"order-detail-status-text",children:"Delivery Status"}),s.jsx("div",{className:"order-detail-status-deliverystatus",style:{backgroundColor:n(t).color},children:t})]})]})},e4=Q.div`
  padding: 1rem;
  background-color: var(--the-primary-color);
  width: 100%;
  color: white;
`,co=({orderItem:e,isSeller:t})=>s.jsx(e4,{children:t?s.jsxs("h3",{children:["To: ",e.user.fullName]}):s.jsxs("h3",{children:["From: ",e.seller.fullName]})}),t4=Q.div`
  border-bottom: 5px solid var(--the-primary-color);
  padding: 1rem;
  color: var(--text-color);
  text-align: center;
  .order-item-order-item {
    /* text-align: center; */
  }
`,uo=()=>s.jsx(t4,{children:s.jsx("h3",{className:"order-item-order-item",children:"Order Items Info"})}),r4=Q.div`
  display: flex;
  width: 100%;
  border-bottom: 4px solid var(--the-primary-color);
  .left {
    width: 30%;
    padding: 0.5rem;
    .image {
      width: 100%;
      height: 100px;
      background-color: var(--the-primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .product-img {
        // height: 100%;
        width: 100%;
      }
    }
  }
  .right {
    width: 70%;
    padding: 1rem;
    color: var(--text-color);
    .ordered-products-total {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      color: var(--text-color);
      .ordered-products-total-info {
        display: flex;
        h3 {
          margin-right: 0.5rem;
        }
      }
    }
  }
`,fo=({orderedProduct:e})=>{const{product:{image:t,name:r,price:n},quantity:o}=e;return s.jsxs(r4,{children:[s.jsx("div",{className:"left",children:s.jsx("div",{className:"image",children:t&&s.jsx("img",{className:"product-img",src:t,alt:"product-img"})})}),s.jsxs("div",{className:"right",children:[s.jsx("h2",{children:r}),s.jsxs("div",{className:"ordered-products-total",children:[s.jsxs("div",{className:"ordered-products-total-info",children:[s.jsxs("h3",{children:["$",n]}),s.jsxs("h3",{children:[" ","x"," "]}),s.jsx("h3",{children:o})]}),s.jsxs("h2",{children:["$",n*o]})]})]})]})};var f0={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(z0,function(){var r=1e3,n=6e4,o=36e5,i="millisecond",a="second",l="minute",c="hour",u="day",d="week",f="month",g="quarter",w="year",v="date",x="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Y){var U=["th","st","nd","rd"],D=Y%100;return"["+Y+(U[(D-20)%10]||U[D]||U[0])+"]"}},y=function(Y,U,D){var H=String(Y);return!H||H.length>=U?Y:""+Array(U+1-H.length).join(D)+Y},S={s:y,z:function(Y){var U=-Y.utcOffset(),D=Math.abs(U),H=Math.floor(D/60),k=D%60;return(U<=0?"+":"-")+y(H,2,"0")+":"+y(k,2,"0")},m:function Y(U,D){if(U.date()<D.date())return-Y(D,U);var H=12*(D.year()-U.year())+(D.month()-U.month()),k=U.clone().add(H,f),E=D-k<0,C=U.clone().add(H+(E?-1:1),f);return+(-(H+(D-k)/(E?k-C:C-k))||0)},a:function(Y){return Y<0?Math.ceil(Y)||0:Math.floor(Y)},p:function(Y){return{M:f,y:w,w:d,d:u,D:v,h:c,m:l,s:a,ms:i,Q:g}[Y]||String(Y||"").toLowerCase().replace(/s$/,"")},u:function(Y){return Y===void 0}},b="en",z={};z[b]=p;var F=function(Y){return Y instanceof ge},A=function Y(U,D,H){var k;if(!U)return b;if(typeof U=="string"){var E=U.toLowerCase();z[E]&&(k=E),D&&(z[E]=D,k=E);var C=U.split("-");if(!k&&C.length>1)return Y(C[0])}else{var O=U.name;z[O]=U,k=O}return!H&&k&&(b=k),k||!H&&b},q=function(Y,U){if(F(Y))return Y.clone();var D=typeof U=="object"?U:{};return D.date=Y,D.args=arguments,new ge(D)},W=S;W.l=A,W.i=F,W.w=function(Y,U){return q(Y,{locale:U.$L,utc:U.$u,x:U.$x,$offset:U.$offset})};var ge=function(){function Y(D){this.$L=A(D.locale,null,!0),this.parse(D)}var U=Y.prototype;return U.parse=function(D){this.$d=function(H){var k=H.date,E=H.utc;if(k===null)return new Date(NaN);if(W.u(k))return new Date;if(k instanceof Date)return new Date(k);if(typeof k=="string"&&!/Z$/i.test(k)){var C=k.match(m);if(C){var O=C[2]-1||0,V=(C[7]||"0").substring(0,3);return E?new Date(Date.UTC(C[1],O,C[3]||1,C[4]||0,C[5]||0,C[6]||0,V)):new Date(C[1],O,C[3]||1,C[4]||0,C[5]||0,C[6]||0,V)}}return new Date(k)}(D),this.$x=D.x||{},this.init()},U.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},U.$utils=function(){return W},U.isValid=function(){return this.$d.toString()!==x},U.isSame=function(D,H){var k=q(D);return this.startOf(H)<=k&&k<=this.endOf(H)},U.isAfter=function(D,H){return q(D)<this.startOf(H)},U.isBefore=function(D,H){return this.endOf(H)<q(D)},U.$g=function(D,H,k){return W.u(D)?this[H]:this.set(k,D)},U.unix=function(){return Math.floor(this.valueOf()/1e3)},U.valueOf=function(){return this.$d.getTime()},U.startOf=function(D,H){var k=this,E=!!W.u(H)||H,C=W.p(D),O=function(L,le){var ce=W.w(k.$u?Date.UTC(k.$y,le,L):new Date(k.$y,le,L),k);return E?ce:ce.endOf(u)},V=function(L,le){return W.w(k.toDate()[L].apply(k.toDate("s"),(E?[0,0,0,0]:[23,59,59,999]).slice(le)),k)},T=this.$W,$=this.$M,M=this.$D,G="set"+(this.$u?"UTC":"");switch(C){case w:return E?O(1,0):O(31,11);case f:return E?O(1,$):O(0,$+1);case d:var j=this.$locale().weekStart||0,re=(T<j?T+7:T)-j;return O(E?M-re:M+(6-re),$);case u:case v:return V(G+"Hours",0);case c:return V(G+"Minutes",1);case l:return V(G+"Seconds",2);case a:return V(G+"Milliseconds",3);default:return this.clone()}},U.endOf=function(D){return this.startOf(D,!1)},U.$set=function(D,H){var k,E=W.p(D),C="set"+(this.$u?"UTC":""),O=(k={},k[u]=C+"Date",k[v]=C+"Date",k[f]=C+"Month",k[w]=C+"FullYear",k[c]=C+"Hours",k[l]=C+"Minutes",k[a]=C+"Seconds",k[i]=C+"Milliseconds",k)[E],V=E===u?this.$D+(H-this.$W):H;if(E===f||E===w){var T=this.clone().set(v,1);T.$d[O](V),T.init(),this.$d=T.set(v,Math.min(this.$D,T.daysInMonth())).$d}else O&&this.$d[O](V);return this.init(),this},U.set=function(D,H){return this.clone().$set(D,H)},U.get=function(D){return this[W.p(D)]()},U.add=function(D,H){var k,E=this;D=Number(D);var C=W.p(H),O=function($){var M=q(E);return W.w(M.date(M.date()+Math.round($*D)),E)};if(C===f)return this.set(f,this.$M+D);if(C===w)return this.set(w,this.$y+D);if(C===u)return O(1);if(C===d)return O(7);var V=(k={},k[l]=n,k[c]=o,k[a]=r,k)[C]||1,T=this.$d.getTime()+D*V;return W.w(T,this)},U.subtract=function(D,H){return this.add(-1*D,H)},U.format=function(D){var H=this,k=this.$locale();if(!this.isValid())return k.invalidDate||x;var E=D||"YYYY-MM-DDTHH:mm:ssZ",C=W.z(this),O=this.$H,V=this.$m,T=this.$M,$=k.weekdays,M=k.months,G=function(le,ce,de,Z){return le&&(le[ce]||le(H,E))||de[ce].slice(0,Z)},j=function(le){return W.s(O%12||12,le,"0")},re=k.meridiem||function(le,ce,de){var Z=le<12?"AM":"PM";return de?Z.toLowerCase():Z},L={YY:String(this.$y).slice(-2),YYYY:this.$y,M:T+1,MM:W.s(T+1,2,"0"),MMM:G(k.monthsShort,T,M,3),MMMM:G(M,T),D:this.$D,DD:W.s(this.$D,2,"0"),d:String(this.$W),dd:G(k.weekdaysMin,this.$W,$,2),ddd:G(k.weekdaysShort,this.$W,$,3),dddd:$[this.$W],H:String(O),HH:W.s(O,2,"0"),h:j(1),hh:j(2),a:re(O,V,!0),A:re(O,V,!1),m:String(V),mm:W.s(V,2,"0"),s:String(this.$s),ss:W.s(this.$s,2,"0"),SSS:W.s(this.$ms,3,"0"),Z:C};return E.replace(h,function(le,ce){return ce||L[le]||C.replace(":","")})},U.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},U.diff=function(D,H,k){var E,C=W.p(H),O=q(D),V=(O.utcOffset()-this.utcOffset())*n,T=this-O,$=W.m(this,O);return $=(E={},E[w]=$/12,E[f]=$,E[g]=$/3,E[d]=(T-V)/6048e5,E[u]=(T-V)/864e5,E[c]=T/o,E[l]=T/n,E[a]=T/r,E)[C]||T,k?$:W.a($)},U.daysInMonth=function(){return this.endOf(f).$D},U.$locale=function(){return z[this.$L]},U.locale=function(D,H){if(!D)return this.$L;var k=this.clone(),E=A(D,H,!0);return E&&(k.$L=E),k},U.clone=function(){return W.w(this.$d,this)},U.toDate=function(){return new Date(this.valueOf())},U.toJSON=function(){return this.isValid()?this.toISOString():null},U.toISOString=function(){return this.$d.toISOString()},U.toString=function(){return this.$d.toUTCString()},Y}(),fe=ge.prototype;return q.prototype=fe,[["$ms",i],["$s",a],["$m",l],["$H",c],["$W",u],["$M",f],["$y",w],["$D",v]].forEach(function(Y){fe[Y[1]]=function(U){return this.$g(U,Y[0],Y[1])}}),q.extend=function(Y,U){return Y.$i||(Y(U,ge,q),Y.$i=!0),q},q.locale=A,q.isDayjs=F,q.unix=function(Y){return q(1e3*Y)},q.en=z[b],q.Ls=z,q.p={},q})})(f0);var n4=f0.exports;const Mu=Ia(n4),o4=Q.div`
  .user-address-title {
    background-color: var(--the-primary-color);
    padding: 1rem;
    color: white;
    text-align: center;
  }
  .user-address-info {
    padding: 1rem;
    color: var(--text-color);
    .user-address-info-item {
      margin: 1rem 0;
    }
  }
`,po=({sellerOrderItem:e})=>{const{city:t,country:r,shippingAdress1:n,shippingAdress2:o,phoneNumber:i,dateOrdered:a}=e,l=new Date(a),c=Mu(l).format("DD MMM YYYY");return s.jsxs(o4,{children:[s.jsx("div",{className:"user-address-title",children:s.jsx("h3",{children:"Customer Address Info"})}),s.jsxs("div",{className:"user-address-info",children:[s.jsxs("div",{className:"user-address-info-item",children:[s.jsx("h5",{children:"City"}),s.jsx("h3",{children:t})]}),s.jsxs("div",{className:"user-address-info-item",children:[s.jsx("h5",{children:"Country"}),s.jsx("h3",{children:r})]}),s.jsxs("div",{className:"user-address-info-item",children:[s.jsx("h5",{children:"Shipping Address 1"}),s.jsx("h3",{children:n})]}),s.jsxs("div",{className:"user-address-info-item",children:[s.jsx("h5",{children:"Shipping Address 2"}),s.jsx("h3",{children:o})]}),s.jsxs("div",{className:"user-address-info-item",children:[s.jsx("h5",{children:"Date Ordered"}),s.jsx("h3",{children:c})]}),s.jsxs("div",{className:"user-address-info-item",children:[s.jsx("h5",{children:"Phone Number"}),s.jsx("h3",{children:i})]})]})]})},i4=Q.div`
  border-top: 4px solid var(--the-primary-color);
  padding: 1rem;
  display: flex;
  color: var(--text-color);
  justify-content: space-between;
  h5 {
    font-size: 1.5rem;
  }
`,ho=({totalPrice:e})=>s.jsxs(i4,{children:[s.jsx("h5",{children:"total"}),s.jsxs("h5",{children:["$",e]})]}),a4=()=>s.jsxs(Ix,{children:[s.jsxs("div",{className:"top-container",children:[s.jsx(Ci,{}),s.jsx("h1",{className:"title",children:"Explore your bags"})]}),s.jsxs("div",{className:"bottom-container",children:[s.jsx(it,{buttonType:Ao.inverted,children:s.jsx(Te,{to:"sign-up",children:"Sign Up"})}),s.jsx(it,{children:s.jsx(Te,{to:"sign-in",children:"Sign In"})})]})]}),p0=Q.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;
  .container {
    .top-container {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 1rem;
      h2 {
        margin: 0.5rem 0;
      }
    }
    width: 100%;
    min-height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    .logo {
      width: 100%;
      height: 4rem;
    }
    a {
      color: black;
      text-decoration: underline;
    }
  }
`,s4=async({request:e})=>{const t=await e.formData(),r=await Object.fromEntries(t);try{return await ue.post("/authentications/register",r),bt("/sign-in")}catch(n){return console.log(n),n}},l4=()=>s.jsx(p0,{children:s.jsx("div",{className:"container",children:s.jsxs($t,{method:"post",children:[s.jsxs("div",{className:"top-container",children:[s.jsx(Ci,{}),s.jsx("h2",{children:"Already have an account?"}),s.jsxs("span",{children:[s.jsx(Te,{to:"/sign-in",children:"Sign in"})," with your email and password"]})]}),s.jsx(Se,{type:"text",name:"fullName",labelText:"full name"}),s.jsx(Se,{type:"email",name:"email"}),s.jsx(Se,{type:"password",name:"password",defaultValue:""}),s.jsx(Se,{type:"text",name:"phoneNumber",labelText:"phone number"}),s.jsx($u,{name:"role",labelText:"role",list:["user","seller"]}),s.jsx(bi,{})]})})}),c4=async({request:e})=>{const t=await e.formData(),r=await Object.fromEntries(t);try{const n=await ue.post("/authentications/login",r),{data:{user:o}}=await ue.get("/users/get-current-user");if(o.role==="user")return bt("/dashboard");if(o.role==="seller")return bt("/dashboard/store")}catch(n){return console.log(n),n}},u4=()=>s.jsx(p0,{children:s.jsx("div",{className:"container",children:s.jsxs($t,{method:"post",children:[s.jsxs("div",{className:"top-container",children:[s.jsx(Ci,{}),s.jsxs("h2",{children:["Don","'t"," have an account?"]}),s.jsxs("span",{children:[s.jsx(Te,{to:"/sign-up",children:"Sign up"})," with your email and password"]})]}),s.jsx(Se,{type:"email",name:"email",defaultValue:""}),s.jsx(Se,{type:"password",name:"password",defaultValue:""}),s.jsx(bi,{})]})})}),d4=Q.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
  .dashboard-page {
    width: 100vw;
    margin: 0 auto;
    padding: 1rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`,f4=Q.nav`
  display: block;
  height: 70px;
  width: 100%;
  background: var(--background-secondary-color);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  .nav-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
  }
  .nav-link {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: padding-left 0.8s ease-in-out;
    color: var(--text-color);
  }
  .icon {
    font-size: 2rem;
  }
  .text-icon {
    font-size: 0.75rem;
  }
  .active {
    color: var(--text-color);
    border: 4px solid var(--the-primary-color);
    /* border-radius: 20px; */
    width: 30%;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.25rem 5px;
    transition: padding-left 0.8s ease-in-out;
    .icon {
      font-size: 1.75rem;
      margin-left: 0.05rem;
    }
    .text-icon {
      font-size: 1.05rem;
      /* margin-left: 0.05rem; */
    }
  }
  .pending {
    background: var(--grey-50);
  }
  @media (min-width: 992px) {
    display: none;
  }
`,p4=()=>s.jsx(f4,{children:s.jsx("div",{className:"nav-links",children:s.jsx(s0,{})})});P.createContext();const h4=async({request:e})=>{try{const{data:{user:t}}=await ue.get("/users/get-current-user"),{data:{products:r,featuredProducts:n}}=await ue.get("/products");return{response:{takedUser:t,products:r,featuredProducts:n}}}catch{return bt("/")}},m4=()=>{const{response:{takedUser:e,featuredProducts:t,products:r}}=Ge(),{user:n,setUser:o,products:i,setProducts:a,featuredProducts:l,setFeaturedProducts:c}=Xe();return P.useEffect(()=>{o(e),a(r),c(t)},[o,e,a,r,c,t]),s.jsx(d4,{children:s.jsxs("main",{className:"dashboard",children:[s.jsx(Pw,{}),s.jsx(Ew,{}),s.jsxs("div",{children:[s.jsx(Mw,{}),s.jsx("div",{className:"dashboard-page",children:s.jsx(cr,{})}),s.jsx(p4,{})]})]})})},g4=Q.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  .temp-text {
    margin: 2rem;
  }
`,y4=()=>s.jsx(g4,{children:s.jsx("h1",{children:"404 Not Found"})}),v4=()=>(Xe(),s.jsx("div",{children:s.jsx(Kw,{})})),x4=Q.div`
  display: flex;
  flex-direction: column;
  .search-bar {
    .search-form-row {
      .top {
        height: 40px;
        width: 100%;
        font-size: 1.5rem;
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: 10% 60% 15% 15%;
        .back-arrow {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: var(--the-primary-color);
          padding: 0.375rem 0.75rem;
        }
        .form-input {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .search-submit-button {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--the-primary-color);
          color: var(--text-color);
        }
      }
      .search-links {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        .button-container {
          width: 100%;
          height: 40px;
          background-color: var(--background-secondary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          .button-item {
            color: white;
            font-size: 1.15rem;
            background: none;
            text-transform: capitalize;
            border: none;
          }
        }
        .active {
          background-color: var(--the-primary-color);
          .button-item {
            color: var(--text-color);
          }
        }
      }
    }
  }
`,w4=async({request:e})=>{const t=Object.fromEntries([...new URL(e.url).searchParams.entries()]);console.log(t);try{const{data:r}=await ue.get("/products/searchedProduct",{params:t});return{data:r,searchValues:{...t}}}catch(r){return console.log(r),r}},S4=()=>{const{data:e}=Ge(),{searchKeyword:t,showCartDropdown:r}=Xe(),[n,o]=P.useState(""),[i,a]=P.useState(!1),[l,c]=P.useState(!1),[u,d]=P.useState(!1),f=Ft(),g=()=>f("/dashboard");console.log(t);const w=h=>p=>{let y;const S=p.currentTarget.form;clearTimeout(y),y=setTimeout(()=>{h(S)},2e3),h(S)},v=()=>{if(a(!i),i===!0)return o("ascending");if(i===!1)return o("descending")},x=()=>{if(c(!l),l===!0)return o("mostExpensive");if(l===!1)return o("cheapest")},m=()=>{if(d(!u),u===!0)return o("newest");if(u===!1)return o("oldest")};return s.jsxs(x4,{children:[s.jsx("div",{className:"search-bar",children:s.jsx($t,{children:s.jsxs("div",{className:"search-form-row",children:[s.jsxs("div",{className:"top",children:[s.jsx("div",{className:"back-arrow",onClick:g,children:s.jsx(i0,{})}),s.jsx("input",{type:"search",name:"search",id:"search",className:"form-input",placeholder:"search",defaultValue:t,onChange:w(h=>{})}),s.jsx("input",{type:"hidden",id:"sorter",name:"sorter",value:n}),s.jsx("button",{type:"submit",className:"search-submit-button",children:s.jsx(a0,{className:"submit-icon"})}),s.jsx(l0,{})]}),s.jsxs("div",{className:"search-links",children:[s.jsx("div",{className:n==="newest"||n==="oldest"?"button-container active":"button-container",onClick:()=>m(),children:s.jsxs("button",{type:"submit",className:"button-item",children:["newest"," ",n==="newest"?s.jsx(hl,{}):n==="oldest"?s.jsx(pl,{}):""]})}),s.jsx("div",{className:n==="ascending"||n==="descending"?"button-container active":"button-container",onClick:()=>v(),children:s.jsxs("button",{type:"submit",className:"button-item",children:["ascending"," ",n==="ascending"?s.jsx(hl,{}):n==="descending"?s.jsx(pl,{}):""]})}),s.jsx("div",{className:n==="mostExpensive"||n==="cheapest"?"button-container active":"button-container",onClick:()=>x(),children:s.jsxs("button",{type:"submit",className:"button-item",children:["price"," ",n==="mostExpensive"?s.jsx(hl,{}):n==="cheapest"?s.jsx(pl,{}):""]})})]})]})})}),s.jsx("div",{className:"search-list",children:s.jsx(cr,{context:e})}),r&&s.jsx(c0,{})]})},j4=Q.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  .all-products {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    h1 {
      text-align: center;
      margin: 1rem;
    }
    .products-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem;
      padding: 0.5rem;
    }
  }
`,k4=async({params:e})=>null,C4=()=>{const{products:e}=iv();return s.jsx(j4,{children:s.jsx("div",{className:"all-products",children:s.jsx("div",{className:"products-container",children:e.map(t=>s.jsx(u0,{product:t},t._id))})})})},b4=Q.div``,E4=()=>s.jsx(b4,{children:s.jsx("h1",{children:"Search By Date"})}),N4=Q.div`
`,P4=()=>s.jsx(N4,{children:s.jsx("h1",{children:"Search By Price"})}),R4=Q.div`
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  .body {
    height: 100%;
    width: 100%;
    .top {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: crimson;
      overflow: hidden;
      .product-img {
        width: 100%;
      }
    }
    .title {
      text-align: left;
      padding: 1rem;
      .name {
        font-size: 2rem;
      }
      .brand {
        font-size: 1rem;
        margin-top: 0.5rem;
      }
      .date {
        margin-top: 1rem;
        font-size: 1rem;
      }
    }
    .description {
      padding: 1rem;
    }
  }
  .footer {
    position: fixed;
    bottom: 4rem;
    width: 100%;
    height: 5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    .button-container {
      display: flex;
      align-items: end;
      .btn-add {
        display: flex;
        align-items: center;
        background: crimson;
        border-radius: 0;
        border: none;
        color: white;
        padding: 0.1rem 0.25rem 0.1rem 0.5rem;
        span {
          padding: 0;
          font-size: 2rem;
          margin-left: 0.75rem;
        }
      }
    }
  }
`,_4=Q.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  .back-arrow {
    margin-left: 1rem;
    font-size: 1.5rem;
    border: 1px solid var(--the-primary-color);
    padding: 0.25rem 0.5rem;
  }
  .title {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`,h0=({title:e})=>{const t=Ft(),r=()=>t(-1);return s.jsxs(_4,{children:[s.jsx("div",{className:"back-arrow",onClick:r,children:s.jsx(i0,{})}),s.jsx("h1",{className:"title",children:e})]})},T4=Q.div``,vt=({children:e,title:t})=>s.jsxs(T4,{children:[s.jsx("div",{children:s.jsx(h0,{title:t})}),s.jsx("div",{children:e})]}),O4=async({params:e})=>{const{data:t}=await ue.get(`/products/${e.productId}`);return{response:{data:t}}},z4=()=>{var x,m;const{addProductToCart:e,cartItems:t}=Xe(),{response:{data:{product:r}}}=Ge(),{_id:n,brand:o,name:i,image:a,dateCreated:l,price:c,richDescription:u,countInStock:d}=r,f=()=>e(r),g=t.filter(h=>h._id===n),w=new Date(l),v=Mu(w).format("DD MMM YYYY");return s.jsx(vt,{title:i.length>=20?i.substring(0,20)+"...":i,children:s.jsxs(R4,{children:[s.jsxs("div",{className:"body",children:[s.jsx("div",{className:"top",children:a&&s.jsx("img",{src:a,alt:"product-img",className:"product-img"})}),s.jsxs("div",{className:"title",children:[s.jsx("div",{className:"name",children:s.jsx("span",{children:i})}),s.jsx("div",{className:"brand",children:s.jsx("span",{children:o})}),s.jsx("div",{className:"date",children:s.jsx("span",{children:v})})]}),s.jsx("div",{className:"description",children:s.jsx("p",{children:u})})]}),s.jsxs("div",{className:"footer",children:[s.jsx("div",{className:"price",children:s.jsxs("h1",{children:["$",c]})}),s.jsx("div",{className:"button-container",children:t&&t.length===0||!((x=g[0])!=null&&x.quantity)?s.jsxs("button",{type:"button",className:"btn-add",onClick:f,children:["Add to cart ",s.jsx("span",{children:"+"})]}):((m=g[0])==null?void 0:m.quantity)+1>d?s.jsx("button",{type:"button",className:"btn",disabled:!0,children:"maxed"}):s.jsxs("button",{type:"button",className:"btn-add",onClick:f,children:["Add to cart ",s.jsx("span",{children:"+"})]})})]})]})})},A4=()=>s.jsx("div",{children:"Feed"}),L4=()=>{const{user:e,setUser:t}=Xe(),r=Ft(),n=async()=>{await ue.get("/authentications/logout"),t(null),r("/")};return s.jsxs("div",{children:[e.role==="user"&&s.jsxs("div",{children:[s.jsx("div",{children:s.jsx(it,{type:"button",className:"btn btn-block",children:s.jsx(Te,{to:"/order",style:{color:"white"},children:"Order List"})})}),s.jsx("div",{children:s.jsx(it,{type:"button",className:"btn btn-block",children:s.jsx(Te,{to:"/order/order-items",style:{color:"white"},children:"Order Item List"})})})]}),s.jsx("div",{children:s.jsx(it,{type:"button",className:"btn btn-block",children:s.jsx(Te,{to:"update-user",style:{color:"white"},children:"Edit User Info"})})}),s.jsx("div",{children:s.jsx(it,{type:"button",className:"btn btn-block",onClick:n,children:"Logout"})})]})},D4=()=>s.jsx("div",{children:s.jsx(cr,{})}),$4=Q.div`
  margin-bottom: 200px;
`,M4=async()=>{const{data:{user:e}}=await ue.get("/users/get-current-user");return e},I4=async({request:e})=>{const t=await e.formData(),r=t.get("avatar");if(r&&r.size>5e5)return console.log("image size is too large"),null;try{await ue.patch("users/update-user",t)}catch(o){console.log(o)}const{data:{user:n}}=await ue.get("/users/get-current-user");if(n.role==="user")return bt("/dashboard");if(n.role==="seller")return bt("/dashboard/store")},F4=()=>{const e=Ge();return s.jsxs($4,{children:[s.jsx(h0,{}),s.jsx("div",{className:"container",children:s.jsxs($t,{method:"post",encType:"multipart/form-data",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{htmlFor:"avatar",className:"form-label",children:"Select an image file (max 0.5 MB)"}),s.jsx("input",{type:"file",id:"avatar",name:"avatar",className:"form-input",accept:"image/*"})]}),s.jsx(Se,{type:"text",name:"fullName",labelText:"full name",defaultValue:e.fullName}),s.jsx(Se,{type:"email",name:"email",defaultValue:e.email}),s.jsx(Se,{type:"text",name:"phoneNumber",labelText:"phone number",defaultValue:e.phoneNumber}),s.jsx(Se,{type:"text",name:"country",labelText:"country",defaultValue:e.country}),s.jsx(Se,{type:"text",name:"city",labelText:"city",defaultValue:e.city}),s.jsx(Se,{type:"text",name:"address",labelText:"address",defaultValue:e.address}),s.jsx(Se,{type:"text",name:"zipCode",labelText:"zipCode",defaultValue:e.zipCode}),s.jsx(bi,{})]})})]})},U4=Q.div`
  .header {
    display: flex;
    background-color: var(--background-secondary-color);
    height: 8rem;
    width: 100%;
    padding: 1rem;
    align-items: center;
    justify-content: space-around;
    color: var(--text-color);
    .header-right {
      /* background-color: aliceblue; */
      width: 25%;
      height: 90%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      .avatar-icon {
        color: white;
        font-size: 4rem;
      }
    }
  }
  .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
    padding: 1rem;
    gap: 1rem;
    .body-item {
      display: flex;
      width: 100%;
      justify-content: space-around;
      background-color: var(--background-secondary-color);
      border: 3px solid var(--the-primary-color);
      padding: 1rem;
      /* color: var(--text-secondary-color); */
      color: var(--text-color);
      .body-item-left {
        width: 70%;
        height: 100%;
        padding-right: 1rem;
        display: flex;
        align-items: center;
      }
      .body-item-right {
        width: 30%;
        height: 100%;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .avatar {
        width: 100px;
        height: 100px;
      }
    }
  }
`,B4=()=>{const{user:e,setUser:t}=Xe(),r=Ft(),n=async()=>{await ue.get("/authentications/logout"),t(null),r("/")};return console.log(e),s.jsxs(U4,{children:[s.jsxs("div",{className:"header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx("h4",{children:"Welcome Back !!!"}),s.jsx("h1",{children:e.fullName})]}),s.jsx("div",{className:"header-right",children:e.avatar?s.jsx("div",{className:"avatar",children:s.jsx("img",{src:e.avatar,alt:"avatar",className:"img"})}):s.jsx(o0,{className:"avatar-icon"})})]}),s.jsxs("div",{className:"body",children:[s.jsxs(Te,{to:"seller-all-products",className:"body-item",children:[s.jsx("div",{className:"body-item-left",children:s.jsx("span",{children:"See all products"})}),s.jsx("div",{className:"body-item-right",children:s.jsx(ww,{})})]}),s.jsxs(Te,{to:"seller-add-product",className:"body-item",children:[s.jsx("div",{className:"body-item-left",children:s.jsx("span",{children:"Add new product"})}),s.jsx("div",{className:"body-item-right",children:s.jsx(lw,{})})]}),s.jsxs(Te,{to:"seller-all-orders",className:"body-item",children:[s.jsx("div",{className:"body-item-left",children:s.jsx("span",{children:"See all orders"})}),s.jsx("div",{className:"body-item-right",children:s.jsx(eo,{})})]}),s.jsxs("div",{className:"body-item",onClick:n,children:[s.jsx("div",{className:"body-item-left",children:s.jsx("span",{children:"Log Out"})}),s.jsx("div",{className:"body-item-right",children:s.jsx(n0,{})})]})]}),s.jsx("div",{className:"footer"})]})},H4=()=>s.jsx("div",{children:"Stats"});var m0={exports:{}},W4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V4=W4,Y4=V4;function g0(){}function y0(){}y0.resetWarningCache=g0;var Q4=function(){function e(n,o,i,a,l,c){if(c!==Y4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y0,resetWarningCache:g0};return r.PropTypes=r,r};m0.exports=Q4();var K4=m0.exports;const Pe=Ia(K4);function $f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Mf(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$f(Object(r),!0).forEach(function(n){v0(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$f(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ua(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ua=function(t){return typeof t}:ua=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ua(e)}function v0(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function da(e,t){return q4(e)||G4(e,t)||X4(e,t)||J4()}function q4(e){if(Array.isArray(e))return e}function G4(e,t){var r=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(r!=null){var n=[],o=!0,i=!1,a,l;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(c){i=!0,l=c}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw l}}return n}}function X4(e,t){if(e){if(typeof e=="string")return If(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return If(e,t)}}function If(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function J4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kc=function(t){var r=ie.useRef(t);return ie.useEffect(function(){r.current=t},[t]),r.current},to=function(t){return t!==null&&ua(t)==="object"},Z4=function(t){return to(t)&&typeof t.then=="function"},eS=function(t){return to(t)&&typeof t.elements=="function"&&typeof t.createToken=="function"&&typeof t.createPaymentMethod=="function"&&typeof t.confirmCardPayment=="function"},Ff="[object Object]",tS=function e(t,r){if(!to(t)||!to(r))return t===r;var n=Array.isArray(t),o=Array.isArray(r);if(n!==o)return!1;var i=Object.prototype.toString.call(t)===Ff,a=Object.prototype.toString.call(r)===Ff;if(i!==a)return!1;if(!i&&!n)return t===r;var l=Object.keys(t),c=Object.keys(r);if(l.length!==c.length)return!1;for(var u={},d=0;d<l.length;d+=1)u[l[d]]=!0;for(var f=0;f<c.length;f+=1)u[c[f]]=!0;var g=Object.keys(u);if(g.length!==l.length)return!1;var w=t,v=r,x=function(h){return e(w[h],v[h])};return g.every(x)},x0=function(t,r,n){return to(t)?Object.keys(t).reduce(function(o,i){var a=!to(r)||!tS(t[i],r[i]);return n.includes(i)?(a&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):a?Mf(Mf({},o||{}),{},v0({},i,t[i])):o},null):null},w0="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Uf=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w0;if(t===null||eS(t))return t;throw new Error(r)},rS=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w0;if(Z4(t))return{tag:"async",stripePromise:Promise.resolve(t).then(function(o){return Uf(o,r)})};var n=Uf(t,r);return n===null?{tag:"empty"}:{tag:"sync",stripe:n}},nS=function(t){!t||!t._registerWrapper||!t.registerAppInfo||(t._registerWrapper({name:"react-stripe-js",version:"2.3.0"}),t.registerAppInfo({name:"react-stripe-js",version:"2.3.0",url:"https://stripe.com/docs/stripe-js/react"}))},S0=ie.createContext(null);S0.displayName="CustomCheckoutSdkContext";var oS=function(t,r){if(!t)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(r," in an <CustomCheckoutProvider> provider."));return t},iS=ie.createContext(null);iS.displayName="CustomCheckoutContext";Pe.any,Pe.shape({clientSecret:Pe.string.isRequired,elementsOptions:Pe.object}).isRequired;var Cc=function(t){var r=ie.useContext(S0),n=ie.useContext(Es);if(r&&n)throw new Error("You cannot wrap the part of your app that ".concat(t," in both <CustomCheckoutProvider> and <Elements> providers."));return r?oS(r,t):j0(n,t)},Es=ie.createContext(null);Es.displayName="ElementsContext";var j0=function(t,r){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return t},Iu=ie.createContext(null);Iu.displayName="CartElementContext";var aS=function(t,r){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return t},k0=function(t){var r=t.stripe,n=t.options,o=t.children,i=ie.useMemo(function(){return rS(r)},[r]),a=ie.useState(null),l=da(a,2),c=l[0],u=l[1],d=ie.useState(null),f=da(d,2),g=f[0],w=f[1],v=ie.useState(function(){return{stripe:i.tag==="sync"?i.stripe:null,elements:i.tag==="sync"?i.stripe.elements(n):null}}),x=da(v,2),m=x[0],h=x[1];ie.useEffect(function(){var S=!0,b=function(F){h(function(A){return A.stripe?A:{stripe:F,elements:F.elements(n)}})};return i.tag==="async"&&!m.stripe?i.stripePromise.then(function(z){z&&S&&b(z)}):i.tag==="sync"&&!m.stripe&&b(i.stripe),function(){S=!1}},[i,m,n]);var p=kc(r);ie.useEffect(function(){p!==null&&p!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[p,r]);var y=kc(n);return ie.useEffect(function(){if(m.elements){var S=x0(n,y,["clientSecret","fonts"]);S&&m.elements.update(S)}},[n,y,m.elements]),ie.useEffect(function(){nS(m.stripe)},[m.stripe]),ie.createElement(Es.Provider,{value:m},ie.createElement(Iu.Provider,{value:{cart:c,setCart:u,cartState:g,setCartState:w}},o))};k0.propTypes={stripe:Pe.any,options:Pe.object};var sS=function(t){var r=ie.useContext(Es);return j0(r,t)},lS={cart:null,cartState:null,setCart:function(){},setCartState:function(){}},Bf=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=ie.useContext(Iu);return r?lS:aS(n,t)},cS=function(){var t=sS("calls useElements()"),r=t.elements;return r},uS=function(){var t=Cc("calls useStripe()"),r=t.stripe;return r};Pe.func.isRequired;var pt=function(t,r,n){var o=!!n,i=ie.useRef(n);ie.useEffect(function(){i.current=n},[n]),ie.useEffect(function(){if(!o||!t)return function(){};var a=function(){i.current&&i.current.apply(i,arguments)};return t.on(r,a),function(){t.off(r,a)}},[o,r,t,i])},dS=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},Be=function(t,r){var n="".concat(dS(t),"Element"),o=function(c){var u=c.id,d=c.className,f=c.options,g=f===void 0?{}:f,w=c.onBlur,v=c.onFocus,x=c.onReady,m=c.onChange,h=c.onEscape,p=c.onClick,y=c.onLoadError,S=c.onLoaderStart,b=c.onNetworksChange,z=c.onCheckout,F=c.onLineItemClick,A=c.onConfirm,q=c.onCancel,W=c.onShippingAddressChange,ge=c.onShippingRateChange,fe=Cc("mounts <".concat(n,">")),Y="elements"in fe?fe.elements:null,U="customCheckoutSdk"in fe?fe.customCheckoutSdk:null,D=ie.useState(null),H=da(D,2),k=H[0],E=H[1],C=ie.useRef(null),O=ie.useRef(null),V=Bf("mounts <".concat(n,">"),"customCheckoutSdk"in fe),T=V.setCart,$=V.setCartState;pt(k,"blur",w),pt(k,"focus",v),pt(k,"escape",h),pt(k,"click",p),pt(k,"loaderror",y),pt(k,"loaderstart",S),pt(k,"networkschange",b),pt(k,"lineitemclick",F),pt(k,"confirm",A),pt(k,"cancel",q),pt(k,"shippingaddresschange",W),pt(k,"shippingratechange",ge);var M;t==="cart"?M=function(le){$(le),x&&x(le)}:x&&(t==="expressCheckout"?M=x:M=function(){x(k)}),pt(k,"ready",M);var G=t==="cart"?function(L){$(L),m&&m(L)}:m;pt(k,"change",G);var j=t==="cart"?function(L){$(L),z&&z(L)}:z;pt(k,"checkout",j),ie.useLayoutEffect(function(){if(C.current===null&&O.current!==null&&(Y||U)){var L=null;U?L=U.createElement(t,g):Y&&(L=Y.create(t,g)),t==="cart"&&T&&T(L),C.current=L,E(L),L&&L.mount(O.current)}},[Y,U,g,T]);var re=kc(g);return ie.useEffect(function(){if(C.current){var L=x0(g,re,["paymentRequest"]);L&&C.current.update(L)}},[g,re]),ie.useLayoutEffect(function(){return function(){if(C.current&&typeof C.current.destroy=="function")try{C.current.destroy(),C.current=null}catch{}}},[]),ie.createElement("div",{id:u,className:d,ref:O})},i=function(c){var u=Cc("mounts <".concat(n,">"));Bf("mounts <".concat(n,">"),"customCheckoutSdk"in u);var d=c.id,f=c.className;return ie.createElement("div",{id:d,className:f})},a=r?i:o;return a.propTypes={id:Pe.string,className:Pe.string,onChange:Pe.func,onBlur:Pe.func,onFocus:Pe.func,onReady:Pe.func,onEscape:Pe.func,onClick:Pe.func,onLoadError:Pe.func,onLoaderStart:Pe.func,onNetworksChange:Pe.func,onCheckout:Pe.func,onLineItemClick:Pe.func,onConfirm:Pe.func,onCancel:Pe.func,onShippingAddressChange:Pe.func,onShippingRateChange:Pe.func,options:Pe.object},a.displayName=n,a.__elementType=t,a},He=typeof window>"u",fS=ie.createContext(null);fS.displayName="EmbeddedCheckoutProviderContext";Be("auBankAccount",He);Be("card",He);var Hf=Be("cardNumber",He),pS=Be("cardExpiry",He),hS=Be("cardCvc",He);Be("fpxBank",He);Be("iban",He);Be("idealBank",He);Be("p24Bank",He);Be("epsBank",He);Be("payment",He);Be("expressCheckout",He);Be("paymentRequestButton",He);Be("linkAuthentication",He);Be("address",He);Be("shippingAddress",He);Be("cart",He);Be("paymentMethodMessaging",He);Be("affirmMessage",He);Be("afterpayClearpayMessage",He);Q.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    min-width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;Q.form`
  height: 100px;
  min-width: 500px;
  @media screen and (max-width: 800px) {
    min-width: 200px;
  }
`;Q.button`
  margin-left: auto;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;const mS=Q.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 1rem;
  .body {
    padding: 0 2rem 2rem 2rem;
    .card-container {
      margin-top: 2rem;
      border: 4px solid var(--the-primary-color);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
    .card-title {
    }
    .card {
      margin-top: 1rem;
      border: 1px solid var(--the-primary-color);
      padding: 0.5rem;
    }
  }
`,gS=()=>P.useMemo(()=>({style:{base:{fontSize:"20px",color:"white",letterSpacing:"0.025em","::placeholder":{color:"lightblue"}},invalid:{color:"#9e2146"}}})),yS=()=>{const{user:e,cartItems:t,setCartItems:r}=Xe(),n=uS(),o=cS(),i=gS(),a=Ft(),[l,c]=P.useState(""),[u,d]=P.useState(""),[f,g]=P.useState(""),[w,v]=P.useState(""),[x,m]=P.useState(""),[h,p]=P.useState(""),y=k=>{c(k.target.value)},S=k=>{d(k.target.value)},b=k=>{g(k.target.value)},z=k=>{v(k.target.value)},F=k=>{m(k.target.value)},A=k=>{p(k.target.value)},{address:q,city:W,country:ge,fullName:fe,phoneNumber:Y,zipCode:U,_id:D}=e,H=async k=>{k.preventDefault();const C=t.map(V=>V.createdBy._id).filter((V,T,$)=>$.indexOf(V)===T),O=C.map((V,T)=>({orderedProducts:[],shippingAdress1:l||k.target.elements.shippingAdress1.value,shippingAdress2:u||k.target.elements.shippingAdress2.value,city:f||k.target.elements.city.value,zipCode:w||k.target.elements.zipCode.value,country:x||k.target.elements.country.value,phoneNumber:h||k.target.elements.phoneNumber.value,seller:V,user:D}));if(t.map(V=>{C.map((T,$)=>{if(T===V.createdBy._id&&O[$].seller===V.createdBy._id){const M={product:V._id,quantity:V.quantity};return O[$].orderedProducts.push(M)}})}),!(!n||!o))try{const V=await ue.post("/orders/user/create-order",{orderItems:O}),T=V.data.resolvedOrder.stripePaymentIntentId,$=V.data.resolvedOrder._id;r([]);const M=await n.confirmCardPayment(T,{payment_method:{card:o.getElement(Hf),billing_details:{name:fe,address:{city:f||k.target.elements.city.value,postal_code:w||k.target.elements.zipCode.value,line1:l||k.target.elements.shippingAdress1.value,line2:u||k.target.elements.shippingAdress2.value},phone:h||k.target.elements.phoneNumber.value}}});if(M.error&&alert(M.error),M.paymentIntent.status==="succeeded")return console.log(M.paymentIntent.status),a(`/order/order-success/${$}`)}catch(V){return console.log(V),V}};return s.jsx(vt,{title:"Make a Payment",children:s.jsx(mS,{children:s.jsx("div",{className:"body",children:s.jsxs("form",{onSubmit:H,children:[s.jsx(Se,{type:"text",name:"shippingAdress1",defaultValue:q,onChange:y}),s.jsx(Se,{type:"text",name:"shippingAdress2",defaultValue:q,onChange:S}),s.jsx(Se,{type:"text",name:"city",defaultValue:W,onChange:b}),s.jsx(Se,{type:"text",name:"zipCode",defaultValue:U,onChange:z}),s.jsx(Se,{type:"text",name:"country",defaultValue:ge,onChange:F}),s.jsx(Se,{type:"text",name:"phoneNumber",defaultValue:Y,onChange:A}),s.jsxs("div",{className:"card-container",children:[s.jsx("h2",{className:"card-title",children:"Credit Card Payment :"}),s.jsxs("div",{className:"card",children:[s.jsx("h5",{children:"Card Number"}),s.jsx(Hf,{options:i})]}),s.jsxs("div",{className:"card",children:[s.jsx("h5",{children:"Card Expiry"}),s.jsx(pS,{options:i})]}),s.jsxs("div",{className:"card",children:[s.jsx("h5",{children:"Card CVC"}),s.jsx(hS,{options:i})]})]}),s.jsx(it,{type:"submit",children:"CHECKOUT"})]})})})})},vS=()=>s.jsx("div",{children:s.jsx(cr,{})}),C0=Q.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 1.5rem;
  .order-container {
    padding: 20px;
    background-color: aqua;
    border-radius: 20px;
    margin: 30px 0;
  }
  .order-title {
    justify-items: center;
  }
  .order-item-container {
    border: 4px solid crimson;
    border-radius: 20px;
    padding: 1rem;
    margin: 20px 0;
  }
  .ordered-products-container {
    background-color: aliceblue;
    border-radius: 20px;
    margin: 10px 0;
  }
  .order-button-link {
    color: white;
    font-size: 20px;
  }
`,xS=async({params:e})=>{try{const{orderId:t}=e,{data:r}=await ue.get(`/orders/user/get-order/${t}`);return r.userOrder}catch(t){return console.log(t),t}},wS=()=>{const e=Ge(),{orderItems:t,wholeTotalPrice:r}=e;return console.log(e),s.jsx(C0,{children:s.jsxs("div",{className:"order-container",children:[t.map(n=>s.jsxs("div",{className:"order-item-container",children:[s.jsx("div",{children:s.jsx("h1",{children:n.seller.fullName})}),n.orderedProducts.map(o=>s.jsxs("div",{className:"ordered-products-container",children:[s.jsxs("div",{className:"ordered-products-top",children:[s.jsx("h4",{children:o.product.brand}),s.jsx("h3",{children:o.product.name}),s.jsx("h5",{children:o.product.price})]}),s.jsx("div",{className:"ordered-products-bottom",children:s.jsx("h3",{children:o.quantity})})]},o.product._id))]},n._id)),s.jsx("div",{className:"total-price",children:s.jsx("h2",{children:r})})]})})},SS=async()=>{try{const{data:e}=await ue.get("/orders/user/get-order");return e.userOrders}catch(e){return console.log(e),e}},jS=()=>{const e=Ge();return s.jsxs(C0,{children:[s.jsx("h1",{className:"order-title",children:"Order List"}),e.map(t=>s.jsx(Gw,{orderListItemData:t},t._id))]})},kS=Q.div`
  display: grid;
  width: 100%;
  height: 100vh;
  justify-items: center;
  align-items: center;
  .body {
    .title {
      color: var(--the-primary-color);
      h1 {
        margin-bottom: 1rem;
      }
      .icon {
        font-size: 5rem;
        color: greenyellow;
        margin-bottom: 2rem;
      }
    }
  }
`,CS=async({params:e})=>e,bS=()=>(Ge(),s.jsx(kS,{children:s.jsxs("div",{className:"body",children:[s.jsxs("div",{className:"title",children:[s.jsx("h3",{children:"Payment"}),s.jsx("h1",{children:"Success"}),s.jsx(uw,{className:"icon"})]}),s.jsx(it,{type:"button",children:s.jsx(Te,{to:"/order/order-items",children:"Check your Order"})})]})})),ES=()=>s.jsx("div",{children:s.jsx(cr,{})}),NS=()=>s.jsx("div",{children:s.jsx(cr,{})}),PS=Q.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  width: 100%;
  .seller-product {
    margin-bottom: 3rem;
    width: 100%;
    .product-item {
      background-color: var(--background-secondary-color);
      border: 4px solid var(--the-primary-color);
      border-bottom: none;
      padding: 1rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 65% 25% 10%;
      height: 300px;
      width: 100%;
      .product-image {
        width: 100%;
        height: 100%;
        background-color: crimson;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .avatar {
        }
      }
      .product-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem 0;
        .product-main-info {
          .product-name {
            font-size: 1.25rem;
          }
          .product-brand {
            font-size: 0.85rem;
            color: darkgray;
          }
        }
        .product-price {
          margin-bottom: 0.5rem;
        }
      }
      a {
        color: white;
      }
    }
    .seller-product-buttons {
      display: flex;
      width: 100%;
      font-size: 1.5rem;
      justify-content: space-around;
      border-bottom: 4px solid var(--the-primary-color);
      background-color: var(--background-secondary-color);
      padding: 1rem 0;
      .seller-product-buttons-link {
        width: 40%;
        height: 3rem;
        background-color: var(--the-primary-color);
        display: flex;
        justify-content: center;
        padding: 0;
        align-items: center;
        font-size: 1rem;
        .seller-product-buttons-link-text {
        }
      }
    }
  }
`,RS=async()=>{try{const{data:e}=await ue.get("/products/seller");return e.sellerProducts}catch(e){return console.log(e),e}},_S=()=>{const e=Ge(),t=Ft();return console.log(e),s.jsx(vt,{title:"All products",children:s.jsx(PS,{children:e.map(r=>{const n=()=>t(`/dashboard/store/seller-product-detail/${r._id}`);return s.jsxs("div",{className:"seller-product",children:[s.jsxs("div",{className:"product-item",children:[s.jsx("div",{className:"product-image",onClick:n,children:r.image?s.jsx("div",{className:"avatar",children:s.jsx("img",{src:r.image,alt:"avatar",className:"img"})}):s.jsx("div",{})}),s.jsxs("div",{className:"product-info",onClick:n,children:[s.jsxs("div",{className:"product-main-info",children:[s.jsx("h2",{className:"product-name",children:r.name.length>=20?r.name.substring(0,20)+"...":r.name}),s.jsx("h4",{className:"product-brand",children:r.brand})]}),s.jsxs("h3",{className:"product-price",children:["$ ",r.price]})]})]}),s.jsxs("div",{className:"seller-product-buttons",children:[s.jsx(Te,{to:`/dashboard/store/seller-product-detail/${r._id}`,className:"seller-product-buttons-link",children:s.jsx("div",{className:"seller-product-buttons-link-text",children:"Detail"})}),s.jsx(Te,{to:`/dashboard/store/seller-update-product/${r._id}`,className:"seller-product-buttons-link",children:s.jsx("div",{className:"seller-product-buttons-link-text",children:"Edit"})})]})]},r._id)})})})},TS=Q.div`
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  margin-bottom: 6rem;
  .body {
    height: 100%;
    width: 100%;
    .top {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: crimson;
      overflow: hidden;
      .product-image {
        width: 100%;
      }
    }
    .title {
      text-align: left;
      padding: 1rem;
      .name {
        font-size: 2rem;
      }
      .brand {
        font-size: 1rem;
        margin-top: 0.5rem;
      }
      .date {
        margin-top: 1rem;
        font-size: 1rem;
      }
    }
    .description {
      padding: 1rem;
    }
  }
  .footer {
    position: fixed;
    bottom: 4rem;
    width: 100%;
    height: 5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    .button-container {
      display: flex;
      align-items: end;
      .btn-add {
        display: flex;
        align-items: center;
        background: crimson;
        border-radius: 0;
        border: none;
        color: white;
        padding: 0.1rem 0.25rem 0.1rem 0.5rem;
        span {
          padding: 0;
          font-size: 2rem;
          margin-left: 0.75rem;
        }
      }
    }
  }
`,OS=async({params:e})=>{const{productId:t}=e;try{const{data:r}=await ue.get(`/products/seller/${t}`);return r.sellerProduct}catch(r){return console.log(r),r}},zS=async({request:e})=>{const t=await e.formData(),{productId:r}=await Object.fromEntries(t);try{return await ue.delete(`/products/seller/${r}`),bt("/dashboard/store/seller-all-products")}catch(n){return console.log(n),n}},AS=()=>{const e=Ge(),r=xm().state==="submitting",{name:n,brand:o,dateCreated:i,richDescription:a,image:l}=e,c=new Date(i),u=Mu(c).format("DD MMM YYYY");return console.log(e),s.jsx(vt,{title:n.length>=20?n.substring(0,20)+"...":n,children:s.jsx(TS,{children:s.jsxs("div",{className:"body",children:[s.jsx("div",{className:"top",children:l&&s.jsx("img",{src:l,alt:"product-image",className:"product-image"})}),s.jsxs("div",{className:"title",children:[s.jsx("div",{className:"name",children:s.jsx("span",{children:n})}),s.jsx("div",{className:"brand",children:s.jsx("span",{children:o})}),s.jsx("div",{className:"date",children:s.jsx("span",{children:u})})]}),s.jsx("div",{className:"description",children:s.jsx("p",{children:a})}),s.jsx("div",{className:"delete-button",children:s.jsxs($t,{method:"post",children:[s.jsx("input",{type:"hidden",id:"productId",name:"productId",value:e._id}),s.jsx(it,{type:"submit",disabled:r,children:r?"deleting ....":"delete"})]})})]})})})},LS=Q.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  margin-bottom: 6rem;
  .title {
    padding: 1rem;
    h1 {
      font-size: 1.25rem;
    }
  }
`,DS=async()=>{try{const{data:e}=await ue.get("/categories");return{categoryList:e.categories}}catch(e){return console.log(e),e}},$S=async({request:e})=>{const t=await e.formData(),r=t.get("image");if(r&&r.size>5e5)return console.log("image size is too large"),null;const n=t.get("categoryToFilter"),{data:o}=await ue.get("/categories"),a=o.categories.filter(l=>l.name===n);t.delete("categoryToFilter"),t.append("category",a[0]._id),console.log(t.get("category"));try{const l=await ue.post("/products/seller",t);return console.log(l),bt("/dashboard/store/seller-all-products")}catch(l){return console.log(l),l}},MS=()=>{const{categoryList:e}=Ge(),t=e.map(r=>r.name);return s.jsx(vt,{title:"Add new product",children:s.jsx(LS,{children:s.jsxs($t,{method:"post",encType:"multipart/form-data",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{htmlFor:"image",className:"form-label",children:"Select an image file (max 0.5 MB)"}),s.jsx("input",{type:"file",id:"image",name:"image",className:"form-input",accept:"image/*"})]}),s.jsx(Se,{type:"text",labelText:"name",name:"name"}),s.jsx(Se,{type:"text",labelText:"description",name:"description"}),s.jsx(Se,{type:"text",labelText:"richDescription",name:"richDescription"}),s.jsx(Se,{type:"text",labelText:"brand",name:"brand"}),s.jsx(Se,{type:"number",labelText:"price",name:"price"}),s.jsx($u,{name:"categoryToFilter",labelText:"categoryToFilter",list:t}),s.jsx(Se,{type:"number",labelText:"countInStock",name:"countInStock"}),s.jsx(bi,{})]})})})},IS=Q.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  margin-bottom: 6rem;
  .title {
    padding: 1rem;
    h1 {
      font-size: 1.25rem;
    }
  }
`,FS=async({params:e})=>{const{productId:t}=e;try{const{data:r}=await ue.get(`/products/seller/${t}`),{data:n}=await ue.get("/categories");return{product:r.sellerProduct,categoryList:n.categories}}catch(r){return console.log(r),r}},US=async({request:e,params:t})=>{const r=await e.formData(),{productId:n}=t,o=r.get("image");if(o&&o.size>5e5)return console.log("image size is too large"),null;const i=r.get("categoryToFilter"),{data:a}=await ue.get("/categories"),c=a.categories.filter(u=>u.name===i);r.delete("categoryToFilter"),r.append("category",c[0]._id);try{const u=await ue.patch(`/products/seller/${n}`,r);return console.log(u),bt("/dashboard/store/seller-all-products")}catch(u){return console.log(u),u}},BS=()=>{const{product:e,categoryList:t}=Ge(),r=t.map(n=>n.name);return s.jsx(vt,{title:"Update product",children:s.jsx(IS,{children:s.jsxs($t,{method:"post",encType:"multipart/form-data",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{htmlFor:"image",className:"form-label",children:"Select an image file (max 0.5 MB)"}),s.jsx("input",{type:"file",id:"image",name:"image",className:"form-input",accept:"image/*"})]}),s.jsx(Se,{type:"text",labelText:"name",name:"name",defaultValue:e.name}),s.jsx(Se,{type:"text",labelText:"description",name:"description",defaultValue:e.description}),s.jsx(Se,{type:"text",labelText:"richDescription",name:"richDescription",defaultValue:e.richDescription}),s.jsx(Se,{type:"text",labelText:"brand",name:"brand",defaultValue:e.brand}),s.jsx(Se,{type:"number",labelText:"price",name:"price",defaultValue:e.price}),s.jsx($u,{name:"categoryToFilter",labelText:"category",defaultValue:e.category.name,list:r}),s.jsx(Se,{type:"number",labelText:"countInStock",name:"countInStock",defaultValue:e.countInStock}),s.jsx(bi,{})]})})})},HS=()=>s.jsx("div",{children:s.jsx(cr,{})}),WS=Q.div`
  .title {
    padding: 1rem;
  }
  .body {
    padding: 0.5rem;
    .order-item {
      margin-bottom: 3rem;
      border: 4px solid var(--the-primary-color);
      color: var(--text-color);
      .order-item-title {
        padding: 1rem;
        background-color: var(--the-primary-color);
        width: 100%;
        color: var(--text-color);
      }
      .order-item-title-order-item-title {
        border-bottom: 5px solid var(--the-primary-color);
        padding: 1rem;
        color: var(--text-color);
        text-align: center;
        .order-item-order-item {
          /* text-align: center; */
        }
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid var(--the-primary-color);
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              width: 100%;
              height: 100px;
              background-color: var(--the-primary-color);
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              .product-img {
                // height: 100%;
                width: 100%;
              }
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: var(--the-primary-color);
          padding: 1rem;
          color: var(--text-color);
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-status {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          .order-bottom-status-status {
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.95rem;
              text-align: center;
            }
            .order-bottom-status-orderstatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
            .order-bottom-status-deliverystatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`,VS=async()=>{try{const{data:e}=await ue.get("/orders/seller/get-all-order-item");return e.sellerOrderItems}catch(e){return console.log(e),e}},YS=()=>{const e=Ge();return s.jsx(vt,{title:"Order Items",children:s.jsx(WS,{children:s.jsx("div",{className:"body",children:e.map(t=>s.jsx(Te,{to:`/dashboard/store/seller-all-orders/seller-order/${t._id}`,children:s.jsxs("div",{className:"order-item",children:[s.jsx(co,{orderItem:t,isSeller:!0}),s.jsx(uo,{}),s.jsxs("div",{className:"order-item-body",children:[t.orderedProducts.map(r=>s.jsx(fo,{orderedProduct:r},r._id)),s.jsx(po,{sellerOrderItem:t})]}),s.jsxs("div",{className:"order-bottom",children:[s.jsx(ho,{totalPrice:t.totalPrice}),s.jsx(lo,{deliveryStatus:t.deliveryStatus,orderStatus:t.orderStatus})]})]})},t._id))})})})},QS=Q.div`
  .title {
    padding: 1rem;
  }
  .order-ordered-products {
    padding: 0.5rem;
    .order-item {
      margin-bottom: 3rem;
      border: 4px solid var(--the-primary-color);
      color: var(--text-color);
      .order-status-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--text-color);
        padding: 2rem 0;
        .order-status-info-icon {
          font-size: 2rem;
        }
      }
      .order-item-title {
        padding: 1rem;
        background-color: var(--the-primary-color);
        width: 100%;
        color: var(--text-color);
      }
      .order-item-title-order-item-title {
        border-bottom: 5px solid var(--the-primary-color);
        padding: 1rem;
        color: var(--text-color);
        text-align: center;
        .order-item-order-item {
          /* text-align: center; */
        }
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid var(--the-primary-color);
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              width: 100%;
              height: 100px;
              background-color: var(--the-primary-color);
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              .product-img {
                // height: 100%;
                width: 100%;
              }
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: var(--the-primary-color);
          padding: 1rem;
          color: var(--text-color);
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-function {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-around;
          .seller-feedback-status {
            font-size: 1rem;
          }
          .delivery-icon {
            margin-left: 1rem;
            font-size: 2rem;
          }
        }
        .order-bottom-status {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          .order-bottom-status-status {
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.75rem;
              text-align: center;
            }
            .order-bottom-status-orderstatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
            .order-bottom-status-deliverystatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`,KS=async({params:e})=>{const{orderItemId:t}=e;try{const{data:r}=await ue.get(`/orders/seller/get-single-order-item/${t}`);return r.sellerOrderItem}catch(r){return console.log(r),r}},qS=()=>{const e=Ge(),{deliveryStatus:t,totalPrice:r,orderStatus:n}=e,o=i=>{const a={color:null,icon:null};if(i==="pending")return a.color="gray",a.icon=s.jsx(Cs,{}),a;if(i==="shipping")return a.color="teal",a.icon=s.jsx(pi,{}),a;if(i==="delivered")return a.color="yellowgreen",a.icon=s.jsx(eo,{}),a;if(i==="returning")return a.color="black",a.icon=s.jsx(ks,{}),a;if(i==="returned")return a.color="red",a.icon=s.jsx(fi,{}),a};return s.jsx(vt,{title:"Order item detail",children:s.jsx(QS,{children:s.jsx("div",{className:"order-ordered-products",children:s.jsxs("div",{className:"order-item",children:[s.jsx(bs,{deliveryStatus:t}),s.jsx(lo,{deliveryStatus:t,orderStatus:n}),s.jsx(co,{orderItem:e,isSeller:!0}),s.jsx(uo,{}),s.jsx("div",{className:"order-item-body",children:e.orderedProducts.map(i=>s.jsx(fo,{orderedProduct:i},i._id))}),s.jsx(po,{sellerOrderItem:e}),s.jsxs("div",{className:"order-bottom",children:[s.jsx(ho,{totalPrice:r}),s.jsxs("div",{className:"order-bottom-function",children:[e.deliveryStatus==="pending"&&s.jsx($t,{method:"post",action:`/dashboard/store/seller-all-orders/seller-order/proceed-to-shipping/${e._id}`,children:s.jsxs(it,{type:"submit",style:{backgroundColor:o(e.deliveryStatus).color},children:["To Shipping",s.jsx(pi,{className:"delivery-icon"})]})}),e.deliveryStatus==="shipping"&&s.jsx($t,{method:"post",action:`/dashboard/store/seller-all-orders/seller-order/proceed-to-delivered/${e._id}`,children:s.jsxs(it,{type:"submit",style:{backgroundColor:o(e.deliveryStatus).color},children:["To Delivered ",s.jsx(eo,{className:"delivery-icon"})]})}),e.deliveryStatus==="returning"&&s.jsx($t,{method:"post",action:`/dashboard/store/seller-all-orders/seller-order/proceed-to-returned/${e._id}`,children:s.jsxs(it,{type:"submit",style:{backgroundColor:o(e.deliveryStatus).color},children:["To Returned ",s.jsx(fi,{className:"delivery-icon"})]})}),e.deliveryStatus==="delivered"&&s.jsx("div",{children:s.jsxs("h2",{className:"seller-feedback-status",children:["Waiting for user","'s"," feedback"]})})]})]})]})})})})},GS=Q.div`
  .title {
    padding: 1rem;
  }
  .body {
    padding: 0.5rem;
    .order-item {
      margin-bottom: 3rem;
      border: 4px solid var(--the-primary-color);
      color: var(--text-color);
      background-color: var(--background-secondary-color);
      .order-item-title {
        padding: 1rem;
        background-color: var(--the-primary-color);
        width: 100%;
        color: var(--text-color);
      }
      .order-item-title-order-item-title {
        border-bottom: 5px solid var(--the-primary-color);
        padding: 1rem;
        color: white;
        text-align: center;
        .order-item-order-item {
          /* text-align: center; */
        }
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid var(--the-primary-color);
          .left {
            width: 30%;
            padding: 0.5rem;
            // .image {
            //   background-color: var(--the-primary-color);
            //   width: 100%;
            //   height: 100%;
            //   display: flex;
            //   align-items: center;
            //   justify-content: center;
            //   overflow: hidden;
            //   .product-img {
            //     width: 100%;
            //   }
            // }
            .image {
              width: 100%;
              height: 100px;
              background-color: transparent;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              .product-img {
                // height: 100%;
                width: 100%;
              }
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: var(--the-primary-color);
          border-bottom: 5px solid var(--the-primary-color);
          padding: 1rem;
          color: white;
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-status {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          .order-bottom-status-status {
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.95rem;
              text-align: center;
            }
            .order-bottom-status-orderstatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
            .order-bottom-status-deliverystatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`,XS=async()=>{try{const{data:e}=await ue.get("/orders/user/get-all-order-item");return e.userOrderItems}catch(e){return console.log(e),e}},JS=()=>{const e=Ge();return s.jsx(vt,{title:"Order Items",children:s.jsx(GS,{children:s.jsx("div",{className:"body",children:e.map(t=>s.jsx(Te,{to:`/order/order-item/${t._id}`,children:s.jsxs("div",{className:"order-item",children:[s.jsx(co,{orderItem:t}),s.jsx(uo,{}),s.jsxs("div",{className:"order-item-body",children:[t.orderedProducts.map(r=>s.jsx(fo,{orderedProduct:r},r._id)),s.jsx(po,{sellerOrderItem:t})]}),s.jsxs("div",{className:"order-bottom",children:[s.jsx(ho,{totalPrice:t.totalPrice}),s.jsx(lo,{deliveryStatus:t.deliveryStatus,orderStatus:t.orderStatus})]})]})},t._id))})})})},ZS=Q.div`
  .title {
    padding: 1rem;
  }
  .order-ordered-products {
    padding: 0.5rem;
    background-color: var(--background-secondary-color);
    .order-item {
      margin-bottom: 3rem;
      border: 4px solid var(--the-primary-color);
      color: var(--text-color);
      background-color: var(--background-secondary-color);
      .order-status-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--text-color);
        padding: 2rem 0;
        .order-status-info-icon {
          font-size: 2rem;
        }
      }
      .order-item-title {
        padding: 1rem;
        background-color: var(--the-primary-color);
        width: 100%;
        color: white;
      }
      .order-item-title-order-item-title {
        border-bottom: 5px solid var(--the-primary-color);
        padding: 1rem;
        color: white;
        text-align: center;
        .order-item-order-item {
          /* text-align: center; */
        }
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid var(--the-primary-color);
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              width: 100%;
              height: 100px;
              background-color: transparent;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              .product-img {
                // height: 100%;
                width: 100%;
              }
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: var(--the-primary-color);
          padding: 1rem;
          color: white;
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-function-title {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          text-align: center;
        }
        .order-bottom-function {
          border-top: 1px solid var(--the-primary-color);
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .seller-feedback-status {
            font-size: 1rem;
            text-align: center;
          }
        }
        .order-bottom-status {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          .order-bottom-status-status {
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.75rem;
              text-align: center;
            }
            .order-bottom-status-orderstatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
            .order-bottom-status-deliverystatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`,e3=async({params:e})=>{const{orderItemId:t}=e;try{const{data:r}=await ue.get(`/orders/user/get-single-order-item/${t}`);return r.userOrderItem}catch(r){return console.log(r),r}},t3=()=>{const e=Ge(),{deliveryStatus:t,orderStatus:r,orderedProducts:n,totalPrice:o}=e,i=a=>{const l={color:null,icon:null};if(a==="pending")return l.color="gray",l.icon=s.jsx(Cs,{}),l;if(a==="shipping")return l.color="teal",l.icon=s.jsx(pi,{}),l;if(a==="delivered")return l.color="yellowgreen",l.icon=s.jsx(eo,{}),l;if(a==="returning")return l.color="black",l.icon=s.jsx(ks,{}),l;if(a==="canceled")return l.color="red",l.icon=s.jsx(fi,{}),l};return s.jsx(vt,{title:"Your Order Detail",children:s.jsx(ZS,{children:s.jsx("div",{className:"order-ordered-products",children:s.jsxs("div",{className:"order-item",children:[s.jsx(bs,{deliveryStatus:t}),s.jsx(lo,{deliveryStatus:t,orderStatus:r}),s.jsx(co,{orderItem:e}),s.jsx(uo,{}),s.jsxs("div",{className:"order-item-body",children:[n.map(a=>s.jsx(fo,{orderedProduct:a},a._id)),s.jsx(po,{sellerOrderItem:e}),s.jsxs("div",{className:"order-bottom",children:[s.jsx(ho,{totalPrice:o}),s.jsx("div",{className:"order-bottom-function-title",children:s.jsx("h3",{className:"order-bottom-function-title-h3",children:"Order Items Info"})}),s.jsxs("div",{className:"order-bottom-function",children:[e.orderStatus==="processing"&&s.jsx("h2",{className:"seller-feedback-status",children:"Waiting for Seller Feedback"}),e.orderStatus==="readyToApprove"&&s.jsx($t,{method:"post",action:`/order/order-item/proceed-to-approved/${e._id}`,children:s.jsx(it,{type:"submit",style:{backgroundColor:i(e.deliveryStatus).color},children:"Approve"})}),e.orderStatus==="readyToApprove"&&s.jsx($t,{method:"post",action:`/order/order-item/proceed-to-not-approved/${e._id}`,children:s.jsx(it,{type:"submit",style:{backgroundColor:"red",marginTop:"1rem"},children:"Not Approve"})}),e.orderStatus==="notApproved"&&s.jsx("div",{children:s.jsx("h2",{className:"seller-feedback-status",children:"Waiting for Seller Feedback"})})]})]})]})]})})})})},r3=async({params:e})=>{const{orderItemId:t}=e,r={deliveryStatus:"shipping"};try{await ue.patch(`/orders/seller/to-shipping/${t}`,r)}catch(n){return console.log(n),n}return bt(`/dashboard/store/seller-all-orders/seller-order/${t}`)},n3=async({params:e})=>{const{orderItemId:t}=e,r={deliveryStatus:"delivered"};try{await ue.patch(`/orders/seller/to-delivered/${t}`,r)}catch(n){return console.log(n),n}return bt(`/dashboard/store/seller-all-orders/seller-order/${t}`)},o3=async({params:e})=>{const{orderItemId:t}=e,r={orderStatus:"approved"};try{await ue.patch(`/orders/user/to-approved/${t}`,r)}catch(n){return console.log(n),n}return bt("/order/order-items")},i3=async({params:e})=>{const{orderItemId:t}=e,r={orderStatus:"notApproved"};try{await ue.patch(`/orders/user/to-not-approved/${t}`,r)}catch(n){return console.log(n),n}return bt("/order/order-items")},a3=async({params:e})=>{const{orderItemId:t}=e,r={deliveryStatus:"returned"};try{await ue.patch(`/orders/seller/to-returned/${t}`,r)}catch(n){return console.log(n),n}return bt("/dashboard/store/seller-all-orders/")},s3=()=>s.jsx("div",{children:s.jsx(cr,{})}),l3=Q.div`
  .title {
    padding: 1rem;
  }
  .body {
    padding: 0.5rem;
    .order-item {
      margin-bottom: 3rem;
      border: 4px solid crimson;
      color: black;
      .order-item-title {
        padding: 1rem;
        background-color: crimson;
        width: 100%;
        color: white;
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid crimson;
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              background-color: crimson;
              width: 100%;
              height: 100%;
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: crimson;
          padding: 1rem;
          color: white;
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-status {
          border-top: 4px solid crimson;
          display: flex;
          /* flex-direction: column; */
          align-items: start;
          justify-content: center;
          background-color: crimson;
          .order-bottom-status-status {
            display: flex;
            flex-direction: column;
            width: 100%;
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.95rem;
              text-align: center;
              color: white;
              width: 100%;
              padding-top: 1rem;
            }
            .order-bottom-status-orderstatus {
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              text-align: center;
              padding: 1rem;
              margin-bottom: 0.5rem;
            }
            .order-bottom-status-deliverystatus {
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              text-align: center;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`,c3=async()=>{try{const{data:e}=await ue.get("/orders/user/get-history");return e.userHistories}catch(e){return console.log(e),e}},u3=()=>{const e=Ge();return s.jsx(vt,{title:"Transaction Histories",children:s.jsx(l3,{children:s.jsx("div",{className:"body",children:e.map(t=>s.jsx(Te,{to:`history-detail/${t._id}`,children:s.jsx(d0,{orderItem:t})},t._id))})})})},d3=Q.div`
  .title {
    padding: 1rem;
  }
  .order-ordered-products {
    background-color: var(--background-secondary-color);
    margin-bottom: 5rem;
    border: 4px solid var(--the-primary-color);
    .order-item {
      color: black;
      .order-status-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
        padding: 2rem 0;
        .order-status-info-icon {
          font-size: 2rem;
        }
      }
      .order-item-title {
        padding: 1rem;
        background-color: crimson;
        width: 100%;
        color: white;
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid crimson;
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              background-color: crimson;
              width: 100%;
              height: 100%;
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: crimson;
          padding: 1rem;
          color: white;
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-function {
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-around;
        }
        .order-bottom-status {
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          .order-bottom-status-status {
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.75rem;
              text-align: center;
            }
            .order-bottom-status-orderstatus {
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
            .order-bottom-status-deliverystatus {
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`,f3=async({params:e})=>{const{userHistoryId:t}=e;try{const{data:r}=await ue.get(`/orders/user/get-history/${t}`);return r.userHistory}catch(r){return console.log(r),r}},p3=()=>{const e=Ge(),{deliveryStatus:t,orderStatus:r,orderedProducts:n,totalPrice:o}=e;return s.jsx(vt,{title:"Transaction Detail",children:s.jsx(d3,{children:s.jsxs("div",{className:"order-ordered-products",children:[s.jsx("div",{className:"order-item",children:s.jsx(bs,{deliveryStatus:t})}),s.jsxs("div",{className:"order-bottom",children:[s.jsx(lo,{deliveryStatus:t,orderStatus:r}),s.jsx(co,{orderItem:e}),s.jsx(uo,{}),s.jsxs("div",{className:"order-item-body",children:[n.map(i=>s.jsx(fo,{orderedProduct:i},i._id)),s.jsx(po,{sellerOrderItem:e}),s.jsx("div",{className:"order-bottom",children:s.jsx(ho,{totalPrice:o})})]})]})]})})})},h3=()=>s.jsx("div",{children:s.jsx(cr,{})}),m3=Q.div`
  .title {
    padding: 1rem;
  }
  .body {
    padding: 0.5rem;
    .order-item {
      margin-bottom: 3rem;
      border: 4px solid var(--the-primary-color);
      color: var(--text-color);
      background-color: var(--background-secondary-color);
      .order-item-title {
        padding: 1rem;
        background-color: var(--the-primary-color);
        text-align: center;
        width: 100%;
        color: var(--text-color);
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          // border-bottom: 4px solid crimson;
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              background-color: crimson;
              width: 100%;
              height: 100%;
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: crimson;
          padding: 1rem;
          color: white;
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-status {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: space-between;
          background-color: var(--the-primary-color);
          .order-bottom-status-status {
            display: flex;
            width: 100%;
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.95rem;
              color: var(--text-color);
              width: 100%;
              padding-top: 1rem;
              padding-left: 1rem;
            }
            .order-bottom-status-orderstatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              text-align: center;
              padding: 1rem;
              margin-bottom: 0.5rem;
            }
            .order-bottom-status-deliverystatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              text-align: center;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`,g3=async()=>{try{const{data:e}=await ue.get("/orders/seller/get-history");return console.log(e),e.sellerHistories}catch(e){return console.log(e),e}},y3=()=>{const e=Ge();return s.jsx(vt,{title:"Transaction Histories",children:s.jsx(m3,{children:s.jsx("div",{className:"body",children:e.map(t=>s.jsx(Te,{to:`history-detail/${t._id}`,children:s.jsx(d0,{orderItem:t,isSeller:!0})},t._id))})})})},v3=Q.div`
  .title {
    padding: 1rem;
  }
  .order-ordered-products {
    background-color: var(--background-secondary-color);
    margin-bottom: 5rem;
    border: 4px solid var(--the-primary-color);
    .order-item {
      color: black;
      .order-status-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
        padding: 2rem 0;
        .order-status-info-icon {
          font-size: 2rem;
        }
      }
      .order-item-title {
        padding: 1rem;
        background-color: crimson;
        width: 100%;
        color: white;
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid crimson;
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              background-color: crimson;
              width: 100%;
              height: 100%;
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: crimson;
          padding: 1rem;
          color: white;
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-function {
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-around;
        }
        .order-bottom-status {
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          .order-bottom-status-status {
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.75rem;
              text-align: center;
            }
            .order-bottom-status-orderstatus {
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
            .order-bottom-status-deliverystatus {
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`,x3=async({params:e})=>{const{sellerHistoryId:t}=e;try{const{data:r}=await ue.get(`/orders/seller/get-history/${t}`),n=r.sellerHistory;return console.log(n),n}catch(r){return console.log(r),r}},w3=()=>{const e=Ge(),{deliveryStatus:t,orderStatus:r,orderedProducts:n,totalPrice:o}=e;return s.jsx(vt,{title:"Transaction Detail",children:s.jsx(v3,{children:s.jsxs("div",{className:"order-ordered-products",children:[s.jsx("div",{className:"order-item",children:s.jsx(bs,{deliveryStatus:t})}),s.jsxs("div",{className:"order-bottom",children:[s.jsx(lo,{deliveryStatus:t,orderStatus:r}),s.jsx(co,{orderItem:e,isSeller:!0}),s.jsx(uo,{}),s.jsxs("div",{className:"order-item-body",children:[n.map(i=>s.jsx(fo,{orderedProduct:i},i._id)),s.jsx(po,{sellerOrderItem:e}),s.jsx("div",{className:"order-bottom",children:s.jsx(ho,{totalPrice:o})})]})]})]})})})},S3=Q.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding-bottom: 6rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  .checkout-footer {
    position: fixed;
    bottom: 0;
    height: 6rem;
    width: 100%;
    background-color: var(--background-secondary-color);
    border-top: 4px solid var(--the-primary-color);
    display: flex;
    .checkout-total {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: center;
      padding-right: 1rem;
      .total-text {
        font-size: 1rem;
        font-weight: 700;
      }
      .total-number {
        font-size: 1.5rem;
      }
    }
    .checkout-button {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 2rem;
    }
  }
`,j3=Q.div`
  width: 100%;
  height: max-content;
  border: 5px solid var(--the-primary-color);
  margin-bottom: 1rem;
  .checkout-item-header {
    background-color: var(--the-primary-color);
    padding: 1rem;
    color: var(--text-color);
  }
  .checkout-item-body {
  }
  .checkout-item-product-container {
    display: flex;
    border-top: 5px solid var(--the-primary-color);
    .image-container {
      height: 100%px;
      width: 25%;
      background-color: var(--the-primary-color);
      margin: 0.5rem;
    }
    .product-info-container {
      width: 70%;
      .checkout-item-product-name-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .checkout-item-product-name {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .checkout-item-quantity-container {
    width: 100%;
    margin: 10px 10px 10px 10px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .checkout-item-quantity {
    margin: 0 10px;
  }
  .remove-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid crimson;
    color: crimson;
    margin-right: 15px;
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
`,k3=({product:e})=>{const{decreaseQuantityFromCart:t,increaseQuantityFromCart:r,removeItemFromCart:n}=Xe(),{quantity:o,countInStock:i}=e,a=()=>t(e),l=()=>r(e),c=()=>n(e);return s.jsxs("div",{className:"checkout-item-quantity-container",children:[s.jsxs("div",{children:[s.jsx(xw,{onClick:a}),s.jsx("span",{className:"checkout-item-quantity",children:o}),i>0&&i>o?s.jsx(vw,{onClick:l}):""]}),s.jsx("div",{className:"remove-button",onClick:c,children:s.jsx("span",{children:"x"})})]})},C3=({cartItem:e})=>{const{sellerName:t,products:r}=e;return s.jsxs(j3,{children:[s.jsx("h2",{className:"checkout-item-header",children:t}),s.jsx("div",{className:"checkout-item-body",children:r.map(n=>s.jsxs("div",{className:"checkout-item-product-container",children:[s.jsx("div",{className:"image-container"}),s.jsxs("div",{className:"product-info-container",children:[s.jsxs("div",{className:"checkout-item-product-name-price",children:[s.jsx("span",{className:"checkout-item-product-name",children:n.name.length>=22?n.name.substring(0,22)+"...":n.name}),s.jsx("div",{className:"checkout-item-product-name",children:s.jsxs("span",{children:["$",n.price*n.quantity]})})]}),s.jsx(k3,{product:n})]})]},n._id))})]})},b3=()=>{const{sellerUniqueArray:e}=Xe();console.log(e);const r=e.map(n=>n.products.map(a=>a.price*a.quantity).reduce((a,l)=>a+l,0)).reduce((n,o)=>n+o,0);return s.jsx(vt,{title:"checkout",children:s.jsxs(S3,{children:[e.map(n=>s.jsx(C3,{cartItem:n},n.sellerId)),s.jsxs("div",{className:"checkout-footer",children:[s.jsxs("div",{className:"checkout-total",children:[s.jsx("span",{className:"total-text",children:"Total "}),s.jsxs("span",{className:"total-number",children:["$",r]})]}),s.jsx("div",{className:"checkout-button",children:s.jsx(it,{children:s.jsx(Te,{to:"/checkout/payment",children:"CHECKOUT"})})})]})]})})},b0=()=>{const e=localStorage.getItem("darkTheme")==="true";return document.body.classList.toggle("dark-theme",e),e};b0();function E3(){const e=Rv([{path:"/",element:s.jsx(iw,{children:s.jsx(Iv,{})}),errorElement:s.jsx(y4,{}),children:[{index:!0,element:s.jsx(a4,{})},{path:"sign-up",element:s.jsx(l4,{}),action:s4},{path:"sign-in",element:s.jsx(u4,{}),action:c4},{path:"checkout",element:s.jsx(ES,{}),children:[{index:!0,element:s.jsx(b3,{})},{path:"payment",element:s.jsx(yS,{})}]},{path:"order",element:s.jsx(vS,{}),children:[{index:!0,element:s.jsx(jS,{}),loader:SS},{path:"order-detail/:orderId",element:s.jsx(wS,{}),loader:xS},{path:"order-success/:orderId",element:s.jsx(bS,{}),loader:CS},{path:"order-items/",element:s.jsx(JS,{}),loader:XS},{path:"order-item/:orderItemId",element:s.jsx(t3,{}),loader:e3},{path:"order-item/proceed-to-approved/:orderItemId",action:o3},{path:"order-item/proceed-to-not-approved/:orderItemId",action:i3}]},{path:"search",element:s.jsx(S4,{}),loader:w4,children:[{index:!0,element:s.jsx(C4,{}),loader:k4},{path:"orderByDate",element:s.jsx(E4,{})},{path:"orderByPrice",element:s.jsx(P4,{})}]},{path:"dashboard",element:s.jsx(m4,{}),loader:h4,children:[{index:!0,element:s.jsx(v4,{})},{path:"feed",element:s.jsx(A4,{})},{path:"user-histories",element:s.jsx(s3,{}),children:[{index:!0,element:s.jsx(u3,{}),loader:c3},{path:"history-detail/:userHistoryId",element:s.jsx(p3,{}),loader:f3}]},{path:"seller-histories",element:s.jsx(h3,{}),children:[{index:!0,element:s.jsx(y3,{}),loader:g3},{path:"history-detail/:sellerHistoryId",element:s.jsx(w3,{}),loader:x3}]},{path:"account-information",element:s.jsx(D4,{}),children:[{index:!0,element:s.jsx(L4,{})},{path:"update-user",element:s.jsx(F4,{}),loader:M4,action:I4}]},{path:"store",element:s.jsx(NS,{}),children:[{index:!0,element:s.jsx(B4,{})},{path:"seller-all-products",element:s.jsx(_S,{}),loader:RS},{path:"seller-product-detail/:productId",element:s.jsx(AS,{}),action:zS,loader:OS},{path:"seller-add-product",element:s.jsx(MS,{}),action:$S,loader:DS},{path:"seller-update-product/:productId",element:s.jsx(BS,{}),action:US,loader:FS},{path:"seller-all-orders",element:s.jsx(HS,{}),children:[{index:!0,element:s.jsx(YS,{}),loader:VS},{path:"seller-order/:orderItemId",element:s.jsx(qS,{}),loader:KS},{path:"seller-order/proceed-to-shipping/:orderItemId",action:r3},{path:"seller-order/proceed-to-delivered/:orderItemId",action:n3},{path:"seller-order/proceed-to-returned/:orderItemId",action:a3}]}]},{path:"stats",element:s.jsx(H4,{})},{path:"product-showcase/:productId",element:s.jsx(z4,{}),loader:O4}]}]}]);return s.jsx(hv,{router:e})}var E0="https://js.stripe.com/v3",N3=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Wf="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",P3=function(){for(var t=document.querySelectorAll('script[src^="'.concat(E0,'"]')),r=0;r<t.length;r++){var n=t[r];if(N3.test(n.src))return n}return null},R3=function(t){var r=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(E0).concat(r);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},_3=function(t,r){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"2.1.6",startTime:r})},Vi=null,T3=function(t){return Vi!==null||(Vi=new Promise(function(r,n){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&t&&console.warn(Wf),window.Stripe){r(window.Stripe);return}try{var o=P3();o&&t?console.warn(Wf):o||(o=R3(t)),o.addEventListener("load",function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(i){n(i);return}})),Vi},O3=function(t,r,n){if(t===null)return null;var o=t.apply(void 0,r);return _3(o,n),o},N0=Promise.resolve().then(function(){return T3(null)}),P0=!1;N0.catch(function(e){P0||console.warn(e)});var z3=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];P0=!0;var o=Date.now();return N0.then(function(i){return O3(i,r,o)})};const A3=z3("pk_test_51NuEswKjef86mZWenTYdeoiLrnRoBnLdCde3IRBVJ8NSchbe9z6MDvzudwND8R3YKRvOqYzKR8BUwl7nYxh1zLpX00cRo8VmP7");yl.createRoot(document.getElementById("root")).render(s.jsx(ie.StrictMode,{children:s.jsx(k0,{stripe:A3,children:s.jsx(E3,{})})}));

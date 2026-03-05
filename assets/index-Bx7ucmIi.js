(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Zy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ud={exports:{}},Oa={},cd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Ow(){if(dg)return Re;dg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),x=Symbol.iterator;function I(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,Y={};function B(O,H,he){this.props=O,this.context=H,this.refs=Y,this.updater=he||U}B.prototype.isReactComponent={},B.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function fe(){}fe.prototype=B.prototype;function me(O,H,he){this.props=O,this.context=H,this.refs=Y,this.updater=he||U}var ge=me.prototype=new fe;ge.constructor=me,$(ge,B.prototype),ge.isPureReactComponent=!0;var Ae=Array.isArray,Oe=Object.prototype.hasOwnProperty,ke={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(O,H,he){var de,we={},Pe=null,Me=null;if(H!=null)for(de in H.ref!==void 0&&(Me=H.ref),H.key!==void 0&&(Pe=""+H.key),H)Oe.call(H,de)&&!k.hasOwnProperty(de)&&(we[de]=H[de]);var De=arguments.length-2;if(De===1)we.children=he;else if(1<De){for(var ze=Array(De),Qe=0;Qe<De;Qe++)ze[Qe]=arguments[Qe+2];we.children=ze}if(O&&O.defaultProps)for(de in De=O.defaultProps,De)we[de]===void 0&&(we[de]=De[de]);return{$$typeof:r,type:O,key:Pe,ref:Me,props:we,_owner:ke.current}}function R(O,H){return{$$typeof:r,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return H[he]})}var V=/\/+/g;function C(O,H){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):H.toString(36)}function st(O,H,he,de,we){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Pe){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case r:case e:Me=!0}}if(Me)return Me=O,we=we(Me),O=de===""?"."+C(Me,0):de,Ae(we)?(he="",O!=null&&(he=O.replace(V,"$&/")+"/"),st(we,H,he,"",function(Qe){return Qe})):we!=null&&(N(we)&&(we=R(we,he+(!we.key||Me&&Me.key===we.key?"":(""+we.key).replace(V,"$&/")+"/")+O)),H.push(we)),1;if(Me=0,de=de===""?".":de+":",Ae(O))for(var De=0;De<O.length;De++){Pe=O[De];var ze=de+C(Pe,De);Me+=st(Pe,H,he,ze,we)}else if(ze=I(O),typeof ze=="function")for(O=ze.call(O),De=0;!(Pe=O.next()).done;)Pe=Pe.value,ze=de+C(Pe,De++),Me+=st(Pe,H,he,ze,we);else if(Pe==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Me}function kt(O,H,he){if(O==null)return O;var de=[],we=0;return st(O,de,"","",function(Pe){return H.call(he,Pe,we++)}),de}function Et(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var $e={current:null},K={transition:null},le={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:K,ReactCurrentOwner:ke};function te(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:kt,forEach:function(O,H,he){kt(O,function(){H.apply(this,arguments)},he)},count:function(O){var H=0;return kt(O,function(){H++}),H},toArray:function(O){return kt(O,function(H){return H})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=B,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=me,Re.StrictMode=i,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Re.act=te,Re.cloneElement=function(O,H,he){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var de=$({},O.props),we=O.key,Pe=O.ref,Me=O._owner;if(H!=null){if(H.ref!==void 0&&(Pe=H.ref,Me=ke.current),H.key!==void 0&&(we=""+H.key),O.type&&O.type.defaultProps)var De=O.type.defaultProps;for(ze in H)Oe.call(H,ze)&&!k.hasOwnProperty(ze)&&(de[ze]=H[ze]===void 0&&De!==void 0?De[ze]:H[ze])}var ze=arguments.length-2;if(ze===1)de.children=he;else if(1<ze){De=Array(ze);for(var Qe=0;Qe<ze;Qe++)De[Qe]=arguments[Qe+2];de.children=De}return{$$typeof:r,type:O.type,key:we,ref:Pe,props:de,_owner:Me}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=S,Re.createFactory=function(O){var H=S.bind(null,O);return H.type=O,H},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=N,Re.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:Et}},Re.memo=function(O,H){return{$$typeof:v,type:O,compare:H===void 0?null:H}},Re.startTransition=function(O){var H=K.transition;K.transition={};try{O()}finally{K.transition=H}},Re.unstable_act=te,Re.useCallback=function(O,H){return $e.current.useCallback(O,H)},Re.useContext=function(O){return $e.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return $e.current.useDeferredValue(O)},Re.useEffect=function(O,H){return $e.current.useEffect(O,H)},Re.useId=function(){return $e.current.useId()},Re.useImperativeHandle=function(O,H,he){return $e.current.useImperativeHandle(O,H,he)},Re.useInsertionEffect=function(O,H){return $e.current.useInsertionEffect(O,H)},Re.useLayoutEffect=function(O,H){return $e.current.useLayoutEffect(O,H)},Re.useMemo=function(O,H){return $e.current.useMemo(O,H)},Re.useReducer=function(O,H,he){return $e.current.useReducer(O,H,he)},Re.useRef=function(O){return $e.current.useRef(O)},Re.useState=function(O){return $e.current.useState(O)},Re.useSyncExternalStore=function(O,H,he){return $e.current.useSyncExternalStore(O,H,he)},Re.useTransition=function(){return $e.current.useTransition()},Re.version="18.3.1",Re}var fg;function tf(){return fg||(fg=1,cd.exports=Ow()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function Mw(){if(pg)return Oa;pg=1;var r=tf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var T,x={},I=null,U=null;v!==void 0&&(I=""+v),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(U=g.ref);for(T in g)i.call(g,T)&&!l.hasOwnProperty(T)&&(x[T]=g[T]);if(m&&m.defaultProps)for(T in g=m.defaultProps,g)x[T]===void 0&&(x[T]=g[T]);return{$$typeof:e,type:m,key:I,ref:U,props:x,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=h,Oa.jsxs=h,Oa}var mg;function Lw(){return mg||(mg=1,ud.exports=Mw()),ud.exports}var w=Lw(),ae=tf();const Mo=Zy(ae);var Pu={},hd={exports:{}},fn={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function jw(){return gg||(gg=1,(function(r){function e(K,le){var te=K.length;K.push(le);e:for(;0<te;){var O=te-1>>>1,H=K[O];if(0<o(H,le))K[O]=le,K[te]=H,te=O;else break e}}function t(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var le=K[0],te=K.pop();if(te!==le){K[0]=te;e:for(var O=0,H=K.length,he=H>>>1;O<he;){var de=2*(O+1)-1,we=K[de],Pe=de+1,Me=K[Pe];if(0>o(we,te))Pe<H&&0>o(Me,we)?(K[O]=Me,K[Pe]=te,O=Pe):(K[O]=we,K[de]=te,O=de);else if(Pe<H&&0>o(Me,te))K[O]=Me,K[Pe]=te,O=Pe;else break e}}return le}function o(K,le){var te=K.sortIndex-le.sortIndex;return te!==0?te:K.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],v=[],T=1,x=null,I=3,U=!1,$=!1,Y=!1,B=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(K){for(var le=t(v);le!==null;){if(le.callback===null)i(v);else if(le.startTime<=K)i(v),le.sortIndex=le.expirationTime,e(g,le);else break;le=t(v)}}function Ae(K){if(Y=!1,ge(K),!$)if(t(g)!==null)$=!0,Et(Oe);else{var le=t(v);le!==null&&$e(Ae,le.startTime-K)}}function Oe(K,le){$=!1,Y&&(Y=!1,fe(S),S=-1),U=!0;var te=I;try{for(ge(le),x=t(g);x!==null&&(!(x.expirationTime>le)||K&&!D());){var O=x.callback;if(typeof O=="function"){x.callback=null,I=x.priorityLevel;var H=O(x.expirationTime<=le);le=r.unstable_now(),typeof H=="function"?x.callback=H:x===t(g)&&i(g),ge(le)}else i(g);x=t(g)}if(x!==null)var he=!0;else{var de=t(v);de!==null&&$e(Ae,de.startTime-le),he=!1}return he}finally{x=null,I=te,U=!1}}var ke=!1,k=null,S=-1,R=5,N=-1;function D(){return!(r.unstable_now()-N<R)}function V(){if(k!==null){var K=r.unstable_now();N=K;var le=!0;try{le=k(!0,K)}finally{le?C():(ke=!1,k=null)}}else ke=!1}var C;if(typeof me=="function")C=function(){me(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,kt=st.port2;st.port1.onmessage=V,C=function(){kt.postMessage(null)}}else C=function(){B(V,0)};function Et(K){k=K,ke||(ke=!0,C())}function $e(K,le){S=B(function(){K(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_continueExecution=function(){$||U||($=!0,Et(Oe))},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(K){switch(I){case 1:case 2:case 3:var le=3;break;default:le=I}var te=I;I=le;try{return K()}finally{I=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(K,le){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var te=I;I=K;try{return le()}finally{I=te}},r.unstable_scheduleCallback=function(K,le,te){var O=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,K){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=te+H,K={id:T++,callback:le,priorityLevel:K,startTime:te,expirationTime:H,sortIndex:-1},te>O?(K.sortIndex=te,e(v,K),t(g)===null&&K===t(v)&&(Y?(fe(S),S=-1):Y=!0,$e(Ae,te-O))):(K.sortIndex=H,e(g,K),$||U||($=!0,Et(Oe))),K},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(K){var le=I;return function(){var te=I;I=le;try{return K.apply(this,arguments)}finally{I=te}}}})(fd)),fd}var yg;function Fw(){return yg||(yg=1,dd.exports=jw()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Uw(){if(vg)return fn;vg=1;var r=tf(),e=Fw();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},x={};function I(n){return g.call(x,n)?!0:g.call(T,n)?!1:v.test(n)?x[n]=!0:(T[n]=!0,!1)}function U(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,s,a,c){if(s===null||typeof s>"u"||U(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Y(n,s,a,c,d,p,_){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=p,this.removeEmptyString=_}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];B[s]=new Y(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function me(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(fe,me);B[s]=new Y(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(fe,me);B[s]=new Y(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(fe,me);B[s]=new Y(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,s,a,c){var d=B.hasOwnProperty(s)?B[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var Ae=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),ke=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),K=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var he=!1;function de(n,s){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(F){var c=F}Reflect.construct(n,[],s)}else{try{s.call()}catch(F){c=F}n.call(s.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,A=p.length-1;1<=_&&0<=A&&d[_]!==p[A];)A--;for(;1<=_&&0<=A;_--,A--)if(d[_]!==p[A]){if(_!==1||A!==1)do if(_--,A--,0>A||d[_]!==p[A]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=A);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function we(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=de(n.type,!1),n;case 11:return n=de(n.type.render,!1),n;case 1:return n=de(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case ke:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case st:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case V:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return s=n.displayName||null,s!==null?s:Pe(n.type)||"Memo";case Et:s=n._payload,n=n._init;try{return Pe(n(s))}catch{}}return null}function Me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qe(n){var s=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function kn(n){n._valueTracker||(n._valueTracker=Qe(n))}function ir(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function or(n,s){var a=s.checked;return te({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function mn(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=De(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Gs(n,s){s=s.checked,s!=null&&ge(n,"checked",s,!1)}function Jr(n,s){Gs(n,s);var a=De(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?xr(n,s.type,a):s.hasOwnProperty("defaultValue")&&xr(n,s.type,De(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Ri(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function xr(n,s,a){(s!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Cn=Array.isArray;function G(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+De(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function xe(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qe(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Cn(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:De(a)}}function gn(n,s){var a=De(s.value),c=De(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Yt(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Mt,Rn=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Mt=Mt||document.createElement("div"),Mt.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Mt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Tt(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ar=["Webkit","ms","Moz","O"];Object.keys(sn).forEach(function(n){Ar.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),sn[s]=sn[n]})});function Wo(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||sn.hasOwnProperty(n)&&sn[n]?(""+s).trim():s+"px"}function Go(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Wo(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ko=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(n,s){if(s){if(Ko[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Xo(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ks=null;function Pi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ni=null,Pn=null,ar=null;function bi(n){if(n=wa(n)){if(typeof Ni!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Hl(s),Ni(n.stateNode,n.type,s))}}function lr(n){Pn?ar?ar.push(n):ar=[n]:Pn=n}function Yo(){if(Pn){var n=Pn,s=ar;if(ar=Pn=null,bi(n),s)for(n=0;n<s.length;n++)bi(s[n])}}function Qs(n,s){return n(s)}function Jo(){}var kr=!1;function Zo(n,s,a){if(kr)return n(s,a);kr=!0;try{return Qs(n,s,a)}finally{kr=!1,(Pn!==null||ar!==null)&&(Jo(),Yo())}}function ct(n,s){var a=n.stateNode;if(a===null)return null;var c=Hl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Di=!1;if(m)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Di=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Di=!1}function Xs(n,s,a,c,d,p,_,A,P){var F=Array.prototype.slice.call(arguments,3);try{s.apply(a,F)}catch(X){this.onError(X)}}var Ys=!1,Vi=null,zn=!1,ea=null,Lc={onError:function(n){Ys=!0,Vi=n}};function Oi(n,s,a,c,d,p,_,A,P){Ys=!1,Vi=null,Xs.apply(Lc,arguments)}function gl(n,s,a,c,d,p,_,A,P){if(Oi.apply(this,arguments),Ys){if(Ys){var F=Vi;Ys=!1,Vi=null}else throw Error(t(198));zn||(zn=!0,ea=F)}}function Bn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Js(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function $n(n){if(Bn(n)!==n)throw Error(t(188))}function yl(n){var s=n.alternate;if(!s){if(s=Bn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return $n(d),n;if(p===c)return $n(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,A=d.child;A;){if(A===a){_=!0,a=d,c=p;break}if(A===c){_=!0,c=d,a=p;break}A=A.sibling}if(!_){for(A=p.child;A;){if(A===a){_=!0,a=p,c=d;break}if(A===c){_=!0,c=p,a=d;break}A=A.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function ta(n){return n=yl(n),n!==null?Mi(n):null}function Mi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Mi(n);if(s!==null)return s;n=n.sibling}return null}var Li=e.unstable_scheduleCallback,na=e.unstable_cancelCallback,vl=e.unstable_shouldYield,jc=e.unstable_requestPaint,Ye=e.unstable_now,_l=e.unstable_getCurrentPriorityLevel,Zs=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,Nn=e.unstable_NormalPriority,ra=e.unstable_LowPriority,wl=e.unstable_IdlePriority,ei=null,yn=null;function El(n){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(ei,n,void 0,(n.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:Il,sa=Math.log,Tl=Math.LN2;function Il(n){return n>>>=0,n===0?32:31-(sa(n)/Tl|0)|0}var ji=64,Fi=4194304;function es(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ti(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var A=_&~d;A!==0?c=es(A):(p&=_,p!==0&&(c=es(p)))}else _=a&~d,_!==0?c=es(_):p!==0&&(c=es(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-Jt(s),d=1<<a,c|=n[a],s&=~d;return c}function Fc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Jt(p),A=1<<_,P=d[_];P===-1?((A&a)===0||(A&c)!==0)&&(d[_]=Fc(A,s)):P<=s&&(n.expiredLanes|=A),p&=~A}}function vn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ni(){var n=ji;return ji<<=1,(ji&4194240)===0&&(ji=64),n}function ts(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function ns(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Jt(s),n[s]=a}function Ke(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Jt(a),p=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function rs(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-Jt(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Ve=0;function ss(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Sl,Ui,xl,Al,kl,ia=!1,ur=[],Lt=null,qn=null,Hn=null,is=new Map,bn=new Map,cr=[],Uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cl(n,s){switch(n){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":is.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(s.pointerId)}}function on(n,s,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=wa(s),s!==null&&Ui(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function zc(n,s,a,c,d){switch(s){case"focusin":return Lt=on(Lt,n,s,a,c,d),!0;case"dragenter":return qn=on(qn,n,s,a,c,d),!0;case"mouseover":return Hn=on(Hn,n,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return is.set(p,on(is.get(p)||null,n,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,bn.set(p,on(bn.get(p)||null,n,s,a,c,d)),!0}return!1}function Rl(n){var s=ai(n.target);if(s!==null){var a=Bn(s);if(a!==null){if(s=a.tag,s===13){if(s=Js(a),s!==null){n.blockedOn=s,kl(n.priority,function(){xl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Rr(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=zi(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ks=c,a.target.dispatchEvent(c),Ks=null}else return s=wa(a),s!==null&&Ui(s),n.blockedOn=a,!1;s.shift()}return!0}function ri(n,s,a){Rr(n)&&a.delete(s)}function Pl(){ia=!1,Lt!==null&&Rr(Lt)&&(Lt=null),qn!==null&&Rr(qn)&&(qn=null),Hn!==null&&Rr(Hn)&&(Hn=null),is.forEach(ri),bn.forEach(ri)}function Wn(n,s){n.blockedOn===s&&(n.blockedOn=null,ia||(ia=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pl)))}function Gn(n){function s(d){return Wn(d,n)}if(0<ur.length){Wn(ur[0],n);for(var a=1;a<ur.length;a++){var c=ur[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Lt!==null&&Wn(Lt,n),qn!==null&&Wn(qn,n),Hn!==null&&Wn(Hn,n),is.forEach(s),bn.forEach(s),a=0;a<cr.length;a++)c=cr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Rl(a),a.blockedOn===null&&cr.shift()}var Pr=Ae.ReactCurrentBatchConfig,os=!0;function nt(n,s,a,c){var d=Ve,p=Pr.transition;Pr.transition=null;try{Ve=1,oa(n,s,a,c)}finally{Ve=d,Pr.transition=p}}function Bc(n,s,a,c){var d=Ve,p=Pr.transition;Pr.transition=null;try{Ve=4,oa(n,s,a,c)}finally{Ve=d,Pr.transition=p}}function oa(n,s,a,c){if(os){var d=zi(n,s,a,c);if(d===null)Zc(n,s,c,si,a),Cl(n,c);else if(zc(d,n,s,a,c))c.stopPropagation();else if(Cl(n,c),s&4&&-1<Uc.indexOf(n)){for(;d!==null;){var p=wa(d);if(p!==null&&Sl(p),p=zi(n,s,a,c),p===null&&Zc(n,s,c,si,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Zc(n,s,c,null,a)}}var si=null;function zi(n,s,a,c){if(si=null,n=Pi(c),n=ai(n),n!==null)if(s=Bn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Js(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return si=n,null}function aa(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_l()){case Zs:return 1;case Zr:return 4;case Nn:case ra:return 16;case wl:return 536870912;default:return 16}default:return 16}}var _n=null,Bi=null,an=null;function la(){if(an)return an;var n,s=Bi,a=s.length,c,d="value"in _n?_n.value:_n.textContent,p=d.length;for(n=0;n<a&&s[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&s[a-c]===d[p-c];c++);return an=d.slice(n,1<c?1-c:void 0)}function $i(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function hr(){return!0}function ua(){return!1}function jt(n){function s(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?hr:ua,this.isPropagationStopped=ua,this}return te(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),s}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=jt(Kn),dr=te({},Kn,{view:0,detail:0}),$c=jt(dr),Hi,Nr,as,ii=te({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==as&&(as&&n.type==="mousemove"?(Hi=n.screenX-as.screenX,Nr=n.screenY-as.screenY):Nr=Hi=0,as=n),Hi)},movementY:function(n){return"movementY"in n?n.movementY:Nr}}),Wi=jt(ii),ca=te({},ii,{dataTransfer:0}),Nl=jt(ca),Gi=te({},dr,{relatedTarget:0}),Ki=jt(Gi),bl=te({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),br=jt(bl),Dl=te({},Kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vl=jt(Dl),Ol=te({},Kn,{data:0}),ha=jt(Ol),Qi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ml={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ll(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Ml[n])?!!s[n]:!1}function fr(){return Ll}var u=te({},dr,{key:function(n){if(n.key){var s=Qi[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=$i(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(n){return n.type==="keypress"?$i(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$i(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=jt(u),y=te({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=jt(y),M=te({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr}),z=jt(M),ee=te({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=jt(ee),It=te({},ii,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=jt(It),Ct=[9,13,27,32],mt=m&&"CompositionEvent"in window,Dn=null;m&&"documentMode"in document&&(Dn=document.documentMode);var wn=m&&"TextEvent"in window&&!Dn,oi=m&&(!mt||Dn&&8<Dn&&11>=Dn),Xi=" ",op=!1;function ap(n,s){switch(n){case"keyup":return Ct.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Yi=!1;function b_(n,s){switch(n){case"compositionend":return lp(s);case"keypress":return s.which!==32?null:(op=!0,Xi);case"textInput":return n=s.data,n===Xi&&op?null:n;default:return null}}function D_(n,s){if(Yi)return n==="compositionend"||!mt&&ap(n,s)?(n=la(),an=Bi=_n=null,Yi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return oi&&s.locale!=="ko"?null:s.data;default:return null}}var V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!V_[n.type]:s==="textarea"}function cp(n,s,a,c){lr(c),s=Bl(s,"onChange"),0<s.length&&(a=new qi("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var da=null,fa=null;function O_(n){Cp(n,0)}function jl(n){var s=no(n);if(ir(s))return n}function M_(n,s){if(n==="change")return s}var hp=!1;if(m){var qc;if(m){var Hc="oninput"in document;if(!Hc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Hc=typeof dp.oninput=="function"}qc=Hc}else qc=!1;hp=qc&&(!document.documentMode||9<document.documentMode)}function fp(){da&&(da.detachEvent("onpropertychange",pp),fa=da=null)}function pp(n){if(n.propertyName==="value"&&jl(fa)){var s=[];cp(s,fa,n,Pi(n)),Zo(O_,s)}}function L_(n,s,a){n==="focusin"?(fp(),da=s,fa=a,da.attachEvent("onpropertychange",pp)):n==="focusout"&&fp()}function j_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jl(fa)}function F_(n,s){if(n==="click")return jl(s)}function U_(n,s){if(n==="input"||n==="change")return jl(s)}function z_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Qn=typeof Object.is=="function"?Object.is:z_;function pa(n,s){if(Qn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Qn(n[d],s[d]))return!1}return!0}function mp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gp(n,s){var a=mp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mp(a)}}function yp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?yp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function vp(){for(var n=window,s=pt();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=pt(n.document)}return s}function Wc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function B_(n){var s=vp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&yp(a.ownerDocument.documentElement,a)){if(c!==null&&Wc(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=gp(a,p);var _=gp(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(s),n.extend(_.node,_.offset)):(s.setEnd(_.node,_.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $_=m&&"documentMode"in document&&11>=document.documentMode,Ji=null,Gc=null,ma=null,Kc=!1;function _p(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Ji==null||Ji!==pt(c)||(c=Ji,"selectionStart"in c&&Wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=Bl(Gc,"onSelect"),0<c.length&&(s=new qi("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Ji)))}function Fl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Zi={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},Qc={},wp={};m&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Ul(n){if(Qc[n])return Qc[n];if(!Zi[n])return n;var s=Zi[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in wp)return Qc[n]=s[a];return n}var Ep=Ul("animationend"),Tp=Ul("animationiteration"),Ip=Ul("animationstart"),Sp=Ul("transitionend"),xp=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(n,s){xp.set(n,s),l(s,[n])}for(var Xc=0;Xc<Ap.length;Xc++){var Yc=Ap[Xc],q_=Yc.toLowerCase(),H_=Yc[0].toUpperCase()+Yc.slice(1);ls(q_,"on"+H_)}ls(Ep,"onAnimationEnd"),ls(Tp,"onAnimationIteration"),ls(Ip,"onAnimationStart"),ls("dblclick","onDoubleClick"),ls("focusin","onFocus"),ls("focusout","onBlur"),ls(Sp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function kp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,gl(c,s,void 0,n),n.currentTarget=null}function Cp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var _=c.length-1;0<=_;_--){var A=c[_],P=A.instance,F=A.currentTarget;if(A=A.listener,P!==p&&d.isPropagationStopped())break e;kp(d,A,F),p=P}else for(_=0;_<c.length;_++){if(A=c[_],P=A.instance,F=A.currentTarget,A=A.listener,P!==p&&d.isPropagationStopped())break e;kp(d,A,F),p=P}}}if(zn)throw n=ea,zn=!1,ea=null,n}function Ze(n,s){var a=s[ih];a===void 0&&(a=s[ih]=new Set);var c=n+"__bubble";a.has(c)||(Rp(s,n,2,!1),a.add(c))}function Jc(n,s,a){var c=0;s&&(c|=4),Rp(a,n,c,s)}var zl="_reactListening"+Math.random().toString(36).slice(2);function ya(n){if(!n[zl]){n[zl]=!0,i.forEach(function(a){a!=="selectionchange"&&(W_.has(a)||Jc(a,!1,n),Jc(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[zl]||(s[zl]=!0,Jc("selectionchange",!1,s))}}function Rp(n,s,a,c){switch(aa(s)){case 1:var d=nt;break;case 4:d=Bc;break;default:d=oa}a=d.bind(null,s,a,n),d=void 0,!Di||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function Zc(n,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;A!==null;){if(_=ai(A),_===null)return;if(P=_.tag,P===5||P===6){c=p=_;continue e}A=A.parentNode}}c=c.return}Zo(function(){var F=p,X=Pi(a),J=[];e:{var Q=xp.get(n);if(Q!==void 0){var re=qi,oe=n;switch(n){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":oe="focus",re=Ki;break;case"focusout":oe="blur",re=Ki;break;case"beforeblur":case"afterblur":re=Ki;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Wi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=z;break;case Ep:case Tp:case Ip:re=br;break;case Sp:re=He;break;case"scroll":re=$c;break;case"wheel":re=Le;break;case"copy":case"cut":case"paste":re=Vl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var ue=(s&4)!==0,ht=!ue&&n==="scroll",L=ue?Q!==null?Q+"Capture":null:Q;ue=[];for(var b=F,j;b!==null;){j=b;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,L!==null&&(Z=ct(b,L),Z!=null&&ue.push(va(b,Z,j)))),ht)break;b=b.return}0<ue.length&&(Q=new re(Q,oe,null,a,X),J.push({event:Q,listeners:ue}))}}if((s&7)===0){e:{if(Q=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",Q&&a!==Ks&&(oe=a.relatedTarget||a.fromElement)&&(ai(oe)||oe[Dr]))break e;if((re||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,re?(oe=a.relatedTarget||a.toElement,re=F,oe=oe?ai(oe):null,oe!==null&&(ht=Bn(oe),oe!==ht||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(re=null,oe=F),re!==oe)){if(ue=Wi,Z="onMouseLeave",L="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(ue=E,Z="onPointerLeave",L="onPointerEnter",b="pointer"),ht=re==null?Q:no(re),j=oe==null?Q:no(oe),Q=new ue(Z,b+"leave",re,a,X),Q.target=ht,Q.relatedTarget=j,Z=null,ai(X)===F&&(ue=new ue(L,b+"enter",oe,a,X),ue.target=j,ue.relatedTarget=ht,Z=ue),ht=Z,re&&oe)t:{for(ue=re,L=oe,b=0,j=ue;j;j=eo(j))b++;for(j=0,Z=L;Z;Z=eo(Z))j++;for(;0<b-j;)ue=eo(ue),b--;for(;0<j-b;)L=eo(L),j--;for(;b--;){if(ue===L||L!==null&&ue===L.alternate)break t;ue=eo(ue),L=eo(L)}ue=null}else ue=null;re!==null&&Pp(J,Q,re,ue,!1),oe!==null&&ht!==null&&Pp(J,ht,oe,ue,!0)}}e:{if(Q=F?no(F):window,re=Q.nodeName&&Q.nodeName.toLowerCase(),re==="select"||re==="input"&&Q.type==="file")var ce=M_;else if(up(Q))if(hp)ce=U_;else{ce=j_;var ve=L_}else(re=Q.nodeName)&&re.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(ce=F_);if(ce&&(ce=ce(n,F))){cp(J,ce,a,X);break e}ve&&ve(n,Q,F),n==="focusout"&&(ve=Q._wrapperState)&&ve.controlled&&Q.type==="number"&&xr(Q,"number",Q.value)}switch(ve=F?no(F):window,n){case"focusin":(up(ve)||ve.contentEditable==="true")&&(Ji=ve,Gc=F,ma=null);break;case"focusout":ma=Gc=Ji=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,_p(J,a,X);break;case"selectionchange":if($_)break;case"keydown":case"keyup":_p(J,a,X)}var _e;if(mt)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Yi?ap(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(oi&&a.locale!=="ko"&&(Yi||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Yi&&(_e=la()):(_n=X,Bi="value"in _n?_n.value:_n.textContent,Yi=!0)),ve=Bl(F,Te),0<ve.length&&(Te=new ha(Te,n,null,a,X),J.push({event:Te,listeners:ve}),_e?Te.data=_e:(_e=lp(a),_e!==null&&(Te.data=_e)))),(_e=wn?b_(n,a):D_(n,a))&&(F=Bl(F,"onBeforeInput"),0<F.length&&(X=new ha("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:F}),X.data=_e))}Cp(J,s)})}function va(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Bl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ct(n,a),p!=null&&c.unshift(va(n,p,d)),p=ct(n,s),p!=null&&c.push(va(n,p,d))),n=n.return}return c}function eo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pp(n,s,a,c,d){for(var p=s._reactName,_=[];a!==null&&a!==c;){var A=a,P=A.alternate,F=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&F!==null&&(A=F,d?(P=ct(a,p),P!=null&&_.unshift(va(a,P,A))):d||(P=ct(a,p),P!=null&&_.push(va(a,P,A)))),a=a.return}_.length!==0&&n.push({event:s,listeners:_})}var G_=/\r\n?/g,K_=/\u0000|\uFFFD/g;function Np(n){return(typeof n=="string"?n:""+n).replace(G_,`
`).replace(K_,"")}function $l(n,s,a){if(s=Np(s),Np(n)!==s&&a)throw Error(t(425))}function ql(){}var eh=null,th=null;function nh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,Q_=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,X_=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(n){return bp.resolve(null).then(n).catch(Y_)}:rh;function Y_(n){setTimeout(function(){throw n})}function sh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Gn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Gn(s)}function us(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Dp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var to=Math.random().toString(36).slice(2),pr="__reactFiber$"+to,_a="__reactProps$"+to,Dr="__reactContainer$"+to,ih="__reactEvents$"+to,J_="__reactListeners$"+to,Z_="__reactHandles$"+to;function ai(n){var s=n[pr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Dr]||a[pr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Dp(n);n!==null;){if(a=n[pr])return a;n=Dp(n)}return s}n=a,a=n.parentNode}return null}function wa(n){return n=n[pr]||n[Dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function no(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Hl(n){return n[_a]||null}var oh=[],ro=-1;function cs(n){return{current:n}}function et(n){0>ro||(n.current=oh[ro],oh[ro]=null,ro--)}function Je(n,s){ro++,oh[ro]=n.current,n.current=s}var hs={},qt=cs(hs),ln=cs(!1),li=hs;function so(n,s){var a=n.type.contextTypes;if(!a)return hs;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function un(n){return n=n.childContextTypes,n!=null}function Wl(){et(ln),et(qt)}function Vp(n,s,a){if(qt.current!==hs)throw Error(t(168));Je(qt,s),Je(ln,a)}function Op(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(n)||"Unknown",d));return te({},a,c)}function Gl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hs,li=qt.current,Je(qt,n),Je(ln,ln.current),!0}function Mp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Op(n,s,li),c.__reactInternalMemoizedMergedChildContext=n,et(ln),et(qt),Je(qt,n)):et(ln),Je(ln,a)}var Vr=null,Kl=!1,ah=!1;function Lp(n){Vr===null?Vr=[n]:Vr.push(n)}function ew(n){Kl=!0,Lp(n)}function ds(){if(!ah&&Vr!==null){ah=!0;var n=0,s=Ve;try{var a=Vr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Vr=null,Kl=!1}catch(d){throw Vr!==null&&(Vr=Vr.slice(n+1)),Li(Zs,ds),d}finally{Ve=s,ah=!1}}return null}var io=[],oo=0,Ql=null,Xl=0,Vn=[],On=0,ui=null,Or=1,Mr="";function ci(n,s){io[oo++]=Xl,io[oo++]=Ql,Ql=n,Xl=s}function jp(n,s,a){Vn[On++]=Or,Vn[On++]=Mr,Vn[On++]=ui,ui=n;var c=Or;n=Mr;var d=32-Jt(c)-1;c&=~(1<<d),a+=1;var p=32-Jt(s)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Or=1<<32-Jt(s)+d|a<<d|c,Mr=p+n}else Or=1<<p|a<<d|c,Mr=n}function lh(n){n.return!==null&&(ci(n,1),jp(n,1,0))}function uh(n){for(;n===Ql;)Ql=io[--oo],io[oo]=null,Xl=io[--oo],io[oo]=null;for(;n===ui;)ui=Vn[--On],Vn[On]=null,Mr=Vn[--On],Vn[On]=null,Or=Vn[--On],Vn[On]=null}var En=null,Tn=null,rt=!1,Xn=null;function Fp(n,s){var a=Fn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Up(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,En=n,Tn=us(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,En=n,Tn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ui!==null?{id:Or,overflow:Mr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Fn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,En=n,Tn=null,!0):!1;default:return!1}}function ch(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hh(n){if(rt){var s=Tn;if(s){var a=s;if(!Up(n,s)){if(ch(n))throw Error(t(418));s=us(a.nextSibling);var c=En;s&&Up(n,s)?Fp(c,a):(n.flags=n.flags&-4097|2,rt=!1,En=n)}}else{if(ch(n))throw Error(t(418));n.flags=n.flags&-4097|2,rt=!1,En=n}}}function zp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;En=n}function Yl(n){if(n!==En)return!1;if(!rt)return zp(n),rt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!nh(n.type,n.memoizedProps)),s&&(s=Tn)){if(ch(n))throw Bp(),Error(t(418));for(;s;)Fp(n,s),s=us(s.nextSibling)}if(zp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){Tn=us(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}Tn=null}}else Tn=En?us(n.stateNode.nextSibling):null;return!0}function Bp(){for(var n=Tn;n;)n=us(n.nextSibling)}function ao(){Tn=En=null,rt=!1}function dh(n){Xn===null?Xn=[n]:Xn.push(n)}var tw=Ae.ReactCurrentBatchConfig;function Ea(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(_){var A=d.refs;_===null?delete A[p]:A[p]=_},s._stringRef=p,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Jl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function $p(n){var s=n._init;return s(n._payload)}function qp(n){function s(L,b){if(n){var j=L.deletions;j===null?(L.deletions=[b],L.flags|=16):j.push(b)}}function a(L,b){if(!n)return null;for(;b!==null;)s(L,b),b=b.sibling;return null}function c(L,b){for(L=new Map;b!==null;)b.key!==null?L.set(b.key,b):L.set(b.index,b),b=b.sibling;return L}function d(L,b){return L=ws(L,b),L.index=0,L.sibling=null,L}function p(L,b,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<b?(L.flags|=2,b):j):(L.flags|=2,b)):(L.flags|=1048576,b)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function A(L,b,j,Z){return b===null||b.tag!==6?(b=rd(j,L.mode,Z),b.return=L,b):(b=d(b,j),b.return=L,b)}function P(L,b,j,Z){var ce=j.type;return ce===k?X(L,b,j.props.children,Z,j.key):b!==null&&(b.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Et&&$p(ce)===b.type)?(Z=d(b,j.props),Z.ref=Ea(L,b,j),Z.return=L,Z):(Z=Tu(j.type,j.key,j.props,null,L.mode,Z),Z.ref=Ea(L,b,j),Z.return=L,Z)}function F(L,b,j,Z){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=sd(j,L.mode,Z),b.return=L,b):(b=d(b,j.children||[]),b.return=L,b)}function X(L,b,j,Z,ce){return b===null||b.tag!==7?(b=vi(j,L.mode,Z,ce),b.return=L,b):(b=d(b,j),b.return=L,b)}function J(L,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=rd(""+b,L.mode,j),b.return=L,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Oe:return j=Tu(b.type,b.key,b.props,null,L.mode,j),j.ref=Ea(L,null,b),j.return=L,j;case ke:return b=sd(b,L.mode,j),b.return=L,b;case Et:var Z=b._init;return J(L,Z(b._payload),j)}if(Cn(b)||le(b))return b=vi(b,L.mode,j,null),b.return=L,b;Jl(L,b)}return null}function Q(L,b,j,Z){var ce=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ce!==null?null:A(L,b,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Oe:return j.key===ce?P(L,b,j,Z):null;case ke:return j.key===ce?F(L,b,j,Z):null;case Et:return ce=j._init,Q(L,b,ce(j._payload),Z)}if(Cn(j)||le(j))return ce!==null?null:X(L,b,j,Z,null);Jl(L,j)}return null}function re(L,b,j,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return L=L.get(j)||null,A(b,L,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Oe:return L=L.get(Z.key===null?j:Z.key)||null,P(b,L,Z,ce);case ke:return L=L.get(Z.key===null?j:Z.key)||null,F(b,L,Z,ce);case Et:var ve=Z._init;return re(L,b,j,ve(Z._payload),ce)}if(Cn(Z)||le(Z))return L=L.get(j)||null,X(b,L,Z,ce,null);Jl(b,Z)}return null}function oe(L,b,j,Z){for(var ce=null,ve=null,_e=b,Te=b=0,Nt=null;_e!==null&&Te<j.length;Te++){_e.index>Te?(Nt=_e,_e=null):Nt=_e.sibling;var Be=Q(L,_e,j[Te],Z);if(Be===null){_e===null&&(_e=Nt);break}n&&_e&&Be.alternate===null&&s(L,_e),b=p(Be,b,Te),ve===null?ce=Be:ve.sibling=Be,ve=Be,_e=Nt}if(Te===j.length)return a(L,_e),rt&&ci(L,Te),ce;if(_e===null){for(;Te<j.length;Te++)_e=J(L,j[Te],Z),_e!==null&&(b=p(_e,b,Te),ve===null?ce=_e:ve.sibling=_e,ve=_e);return rt&&ci(L,Te),ce}for(_e=c(L,_e);Te<j.length;Te++)Nt=re(_e,L,Te,j[Te],Z),Nt!==null&&(n&&Nt.alternate!==null&&_e.delete(Nt.key===null?Te:Nt.key),b=p(Nt,b,Te),ve===null?ce=Nt:ve.sibling=Nt,ve=Nt);return n&&_e.forEach(function(Es){return s(L,Es)}),rt&&ci(L,Te),ce}function ue(L,b,j,Z){var ce=le(j);if(typeof ce!="function")throw Error(t(150));if(j=ce.call(j),j==null)throw Error(t(151));for(var ve=ce=null,_e=b,Te=b=0,Nt=null,Be=j.next();_e!==null&&!Be.done;Te++,Be=j.next()){_e.index>Te?(Nt=_e,_e=null):Nt=_e.sibling;var Es=Q(L,_e,Be.value,Z);if(Es===null){_e===null&&(_e=Nt);break}n&&_e&&Es.alternate===null&&s(L,_e),b=p(Es,b,Te),ve===null?ce=Es:ve.sibling=Es,ve=Es,_e=Nt}if(Be.done)return a(L,_e),rt&&ci(L,Te),ce;if(_e===null){for(;!Be.done;Te++,Be=j.next())Be=J(L,Be.value,Z),Be!==null&&(b=p(Be,b,Te),ve===null?ce=Be:ve.sibling=Be,ve=Be);return rt&&ci(L,Te),ce}for(_e=c(L,_e);!Be.done;Te++,Be=j.next())Be=re(_e,L,Te,Be.value,Z),Be!==null&&(n&&Be.alternate!==null&&_e.delete(Be.key===null?Te:Be.key),b=p(Be,b,Te),ve===null?ce=Be:ve.sibling=Be,ve=Be);return n&&_e.forEach(function(Vw){return s(L,Vw)}),rt&&ci(L,Te),ce}function ht(L,b,j,Z){if(typeof j=="object"&&j!==null&&j.type===k&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Oe:e:{for(var ce=j.key,ve=b;ve!==null;){if(ve.key===ce){if(ce=j.type,ce===k){if(ve.tag===7){a(L,ve.sibling),b=d(ve,j.props.children),b.return=L,L=b;break e}}else if(ve.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Et&&$p(ce)===ve.type){a(L,ve.sibling),b=d(ve,j.props),b.ref=Ea(L,ve,j),b.return=L,L=b;break e}a(L,ve);break}else s(L,ve);ve=ve.sibling}j.type===k?(b=vi(j.props.children,L.mode,Z,j.key),b.return=L,L=b):(Z=Tu(j.type,j.key,j.props,null,L.mode,Z),Z.ref=Ea(L,b,j),Z.return=L,L=Z)}return _(L);case ke:e:{for(ve=j.key;b!==null;){if(b.key===ve)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(L,b.sibling),b=d(b,j.children||[]),b.return=L,L=b;break e}else{a(L,b);break}else s(L,b);b=b.sibling}b=sd(j,L.mode,Z),b.return=L,L=b}return _(L);case Et:return ve=j._init,ht(L,b,ve(j._payload),Z)}if(Cn(j))return oe(L,b,j,Z);if(le(j))return ue(L,b,j,Z);Jl(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(L,b.sibling),b=d(b,j),b.return=L,L=b):(a(L,b),b=rd(j,L.mode,Z),b.return=L,L=b),_(L)):a(L,b)}return ht}var lo=qp(!0),Hp=qp(!1),Zl=cs(null),eu=null,uo=null,fh=null;function ph(){fh=uo=eu=null}function mh(n){var s=Zl.current;et(Zl),n._currentValue=s}function gh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function co(n,s){eu=n,fh=uo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(cn=!0),n.firstContext=null)}function Mn(n){var s=n._currentValue;if(fh!==n)if(n={context:n,memoizedValue:s,next:null},uo===null){if(eu===null)throw Error(t(308));uo=n,eu.dependencies={lanes:0,firstContext:n}}else uo=uo.next=n;return s}var hi=null;function yh(n){hi===null?hi=[n]:hi.push(n)}function Wp(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,yh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Lr(n,c)}function Lr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var fs=!1;function vh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function jr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ps(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ue&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Lr(n,a)}return d=c.interleaved,d===null?(s.next=s,yh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Lr(n,a)}function tu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,rs(n,a)}}function Kp(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function nu(n,s,a,c){var d=n.updateQueue;fs=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,F=P.next;P.next=null,_===null?p=F:_.next=F,_=P;var X=n.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==_&&(A===null?X.firstBaseUpdate=F:A.next=F,X.lastBaseUpdate=P))}if(p!==null){var J=d.baseState;_=0,X=F=P=null,A=p;do{var Q=A.lane,re=A.eventTime;if((c&Q)===Q){X!==null&&(X=X.next={eventTime:re,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var oe=n,ue=A;switch(Q=s,re=a,ue.tag){case 1:if(oe=ue.payload,typeof oe=="function"){J=oe.call(re,J,Q);break e}J=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ue.payload,Q=typeof oe=="function"?oe.call(re,J,Q):oe,Q==null)break e;J=te({},J,Q);break e;case 2:fs=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,Q=d.effects,Q===null?d.effects=[A]:Q.push(A))}else re={eventTime:re,lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(F=X=re,P=J):X=X.next=re,_|=Q;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Q=A,A=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(X===null&&(P=J),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do _|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);pi|=_,n.lanes=_,n.memoizedState=J}}function Qp(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ta={},mr=cs(Ta),Ia=cs(Ta),Sa=cs(Ta);function di(n){if(n===Ta)throw Error(t(174));return n}function _h(n,s){switch(Je(Sa,s),Je(Ia,n),Je(mr,Ta),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Xe(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Xe(s,n)}et(mr),Je(mr,s)}function ho(){et(mr),et(Ia),et(Sa)}function Xp(n){di(Sa.current);var s=di(mr.current),a=Xe(s,n.type);s!==a&&(Je(Ia,n),Je(mr,a))}function wh(n){Ia.current===n&&(et(mr),et(Ia))}var it=cs(0);function ru(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Eh=[];function Th(){for(var n=0;n<Eh.length;n++)Eh[n]._workInProgressVersionPrimary=null;Eh.length=0}var su=Ae.ReactCurrentDispatcher,Ih=Ae.ReactCurrentBatchConfig,fi=0,ot=null,St=null,Rt=null,iu=!1,xa=!1,Aa=0,nw=0;function Ht(){throw Error(t(321))}function Sh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Qn(n[a],s[a]))return!1;return!0}function xh(n,s,a,c,d,p){if(fi=p,ot=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,su.current=n===null||n.memoizedState===null?ow:aw,n=a(c,d),xa){p=0;do{if(xa=!1,Aa=0,25<=p)throw Error(t(301));p+=1,Rt=St=null,s.updateQueue=null,su.current=lw,n=a(c,d)}while(xa)}if(su.current=lu,s=St!==null&&St.next!==null,fi=0,Rt=St=ot=null,iu=!1,s)throw Error(t(300));return n}function Ah(){var n=Aa!==0;return Aa=0,n}function gr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ot.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function Ln(){if(St===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=St.next;var s=Rt===null?ot.memoizedState:Rt.next;if(s!==null)Rt=s,St=n;else{if(n===null)throw Error(t(310));St=n,n={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Rt===null?ot.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}function ka(n,s){return typeof s=="function"?s(n):s}function kh(n){var s=Ln(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=St,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var A=_=null,P=null,F=p;do{var X=F.lane;if((fi&X)===X)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var J={lane:X,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(A=P=J,_=c):P=P.next=J,ot.lanes|=X,pi|=X}F=F.next}while(F!==null&&F!==p);P===null?_=c:P.next=A,Qn(c,s.memoizedState)||(cn=!0),s.memoizedState=c,s.baseState=_,s.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,ot.lanes|=p,pi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Ch(n){var s=Ln(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Qn(p,s.memoizedState)||(cn=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function Yp(){}function Jp(n,s){var a=ot,c=Ln(),d=s(),p=!Qn(c.memoizedState,d);if(p&&(c.memoizedState=d,cn=!0),c=c.queue,Rh(tm.bind(null,a,c,n),[n]),c.getSnapshot!==s||p||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,Ca(9,em.bind(null,a,c,d,s),void 0,null),Pt===null)throw Error(t(349));(fi&30)!==0||Zp(a,s,d)}return d}function Zp(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=ot.updateQueue,s===null?(s={lastEffect:null,stores:null},ot.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function em(n,s,a,c){s.value=a,s.getSnapshot=c,nm(s)&&rm(n)}function tm(n,s,a){return a(function(){nm(s)&&rm(n)})}function nm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Qn(n,a)}catch{return!0}}function rm(n){var s=Lr(n,1);s!==null&&er(s,n,1,-1)}function sm(n){var s=gr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},s.queue=n,n=n.dispatch=iw.bind(null,ot,n),[s.memoizedState,n]}function Ca(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=ot.updateQueue,s===null?(s={lastEffect:null,stores:null},ot.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function im(){return Ln().memoizedState}function ou(n,s,a,c){var d=gr();ot.flags|=n,d.memoizedState=Ca(1|s,a,void 0,c===void 0?null:c)}function au(n,s,a,c){var d=Ln();c=c===void 0?null:c;var p=void 0;if(St!==null){var _=St.memoizedState;if(p=_.destroy,c!==null&&Sh(c,_.deps)){d.memoizedState=Ca(s,a,p,c);return}}ot.flags|=n,d.memoizedState=Ca(1|s,a,p,c)}function om(n,s){return ou(8390656,8,n,s)}function Rh(n,s){return au(2048,8,n,s)}function am(n,s){return au(4,2,n,s)}function lm(n,s){return au(4,4,n,s)}function um(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function cm(n,s,a){return a=a!=null?a.concat([n]):null,au(4,4,um.bind(null,s,n),a)}function Ph(){}function hm(n,s){var a=Ln();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Sh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function dm(n,s){var a=Ln();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Sh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function fm(n,s,a){return(fi&21)===0?(n.baseState&&(n.baseState=!1,cn=!0),n.memoizedState=a):(Qn(a,s)||(a=ni(),ot.lanes|=a,pi|=a,n.baseState=!0),s)}function rw(n,s){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=Ih.transition;Ih.transition={};try{n(!1),s()}finally{Ve=a,Ih.transition=c}}function pm(){return Ln().memoizedState}function sw(n,s,a){var c=vs(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},mm(n))gm(s,a);else if(a=Wp(n,s,a,c),a!==null){var d=tn();er(a,n,c,d),ym(a,s,c)}}function iw(n,s,a){var c=vs(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(mm(n))gm(s,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var _=s.lastRenderedState,A=p(_,a);if(d.hasEagerState=!0,d.eagerState=A,Qn(A,_)){var P=s.interleaved;P===null?(d.next=d,yh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Wp(n,s,d,c),a!==null&&(d=tn(),er(a,n,c,d),ym(a,s,c))}}function mm(n){var s=n.alternate;return n===ot||s!==null&&s===ot}function gm(n,s){xa=iu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function ym(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,rs(n,a)}}var lu={readContext:Mn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},ow={readContext:Mn,useCallback:function(n,s){return gr().memoizedState=[n,s===void 0?null:s],n},useContext:Mn,useEffect:om,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,ou(4194308,4,um.bind(null,s,n),a)},useLayoutEffect:function(n,s){return ou(4194308,4,n,s)},useInsertionEffect:function(n,s){return ou(4,2,n,s)},useMemo:function(n,s){var a=gr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=gr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=sw.bind(null,ot,n),[c.memoizedState,n]},useRef:function(n){var s=gr();return n={current:n},s.memoizedState=n},useState:sm,useDebugValue:Ph,useDeferredValue:function(n){return gr().memoizedState=n},useTransition:function(){var n=sm(!1),s=n[0];return n=rw.bind(null,n[1]),gr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=ot,d=gr();if(rt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Pt===null)throw Error(t(349));(fi&30)!==0||Zp(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,om(tm.bind(null,c,p,n),[n]),c.flags|=2048,Ca(9,em.bind(null,c,p,a,s),void 0,null),a},useId:function(){var n=gr(),s=Pt.identifierPrefix;if(rt){var a=Mr,c=Or;a=(c&~(1<<32-Jt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Aa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=nw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},aw={readContext:Mn,useCallback:hm,useContext:Mn,useEffect:Rh,useImperativeHandle:cm,useInsertionEffect:am,useLayoutEffect:lm,useMemo:dm,useReducer:kh,useRef:im,useState:function(){return kh(ka)},useDebugValue:Ph,useDeferredValue:function(n){var s=Ln();return fm(s,St.memoizedState,n)},useTransition:function(){var n=kh(ka)[0],s=Ln().memoizedState;return[n,s]},useMutableSource:Yp,useSyncExternalStore:Jp,useId:pm,unstable_isNewReconciler:!1},lw={readContext:Mn,useCallback:hm,useContext:Mn,useEffect:Rh,useImperativeHandle:cm,useInsertionEffect:am,useLayoutEffect:lm,useMemo:dm,useReducer:Ch,useRef:im,useState:function(){return Ch(ka)},useDebugValue:Ph,useDeferredValue:function(n){var s=Ln();return St===null?s.memoizedState=n:fm(s,St.memoizedState,n)},useTransition:function(){var n=Ch(ka)[0],s=Ln().memoizedState;return[n,s]},useMutableSource:Yp,useSyncExternalStore:Jp,useId:pm,unstable_isNewReconciler:!1};function Yn(n,s){if(n&&n.defaultProps){s=te({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Nh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:te({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var uu={isMounted:function(n){return(n=n._reactInternals)?Bn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=tn(),d=vs(n),p=jr(c,d);p.payload=s,a!=null&&(p.callback=a),s=ps(n,p,d),s!==null&&(er(s,n,d,c),tu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=tn(),d=vs(n),p=jr(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=ps(n,p,d),s!==null&&(er(s,n,d,c),tu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=tn(),c=vs(n),d=jr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ps(n,d,c),s!==null&&(er(s,n,c,a),tu(s,n,c))}};function vm(n,s,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):s.prototype&&s.prototype.isPureReactComponent?!pa(a,c)||!pa(d,p):!0}function _m(n,s,a){var c=!1,d=hs,p=s.contextType;return typeof p=="object"&&p!==null?p=Mn(p):(d=un(s)?li:qt.current,c=s.contextTypes,p=(c=c!=null)?so(n,d):hs),s=new s(a,p),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=uu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),s}function wm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&uu.enqueueReplaceState(s,s.state,null)}function bh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},vh(n);var p=s.contextType;typeof p=="object"&&p!==null?d.context=Mn(p):(p=un(s)?li:qt.current,d.context=so(n,p)),d.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Nh(n,s,p,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&uu.enqueueReplaceState(d,d.state,null),nu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function fo(n,s){try{var a="",c=s;do a+=we(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:s,stack:d,digest:null}}function Dh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Vh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function Em(n,s,a){a=jr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){gu||(gu=!0,Qh=c),Vh(n,s)},a}function Tm(n,s,a){a=jr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Vh(n,s)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Vh(n,s),typeof c!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var _=s.stack;this.componentDidCatch(s.value,{componentStack:_!==null?_:""})}),a}function Im(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new uw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=Iw.bind(null,n,s,a),s.then(n,n))}function Sm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function xm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=jr(-1,1),s.tag=2,ps(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var cw=Ae.ReactCurrentOwner,cn=!1;function en(n,s,a,c){s.child=n===null?Hp(s,null,a,c):lo(s,n.child,a,c)}function Am(n,s,a,c,d){a=a.render;var p=s.ref;return co(s,d),c=xh(n,s,a,c,p,d),a=Ah(),n!==null&&!cn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Fr(n,s,d)):(rt&&a&&lh(s),s.flags|=1,en(n,s,c,d),s.child)}function km(n,s,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!nd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,Cm(n,s,p,c,d)):(n=Tu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(_,c)&&n.ref===s.ref)return Fr(n,s,d)}return s.flags|=1,n=ws(p,c),n.ref=s.ref,n.return=s,s.child=n}function Cm(n,s,a,c,d){if(n!==null){var p=n.memoizedProps;if(pa(p,c)&&n.ref===s.ref)if(cn=!1,s.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(cn=!0);else return s.lanes=n.lanes,Fr(n,s,d)}return Oh(n,s,a,c,d)}function Rm(n,s,a){var c=s.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(mo,In),In|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Je(mo,In),In|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Je(mo,In),In|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,Je(mo,In),In|=c;return en(n,s,d,a),s.child}function Pm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Oh(n,s,a,c,d){var p=un(a)?li:qt.current;return p=so(s,p),co(s,d),a=xh(n,s,a,c,p,d),c=Ah(),n!==null&&!cn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Fr(n,s,d)):(rt&&c&&lh(s),s.flags|=1,en(n,s,a,d),s.child)}function Nm(n,s,a,c,d){if(un(a)){var p=!0;Gl(s)}else p=!1;if(co(s,d),s.stateNode===null)hu(n,s),_m(s,a,c),bh(s,a,c,d),c=!0;else if(n===null){var _=s.stateNode,A=s.memoizedProps;_.props=A;var P=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=Mn(F):(F=un(a)?li:qt.current,F=so(s,F));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof _.getSnapshotBeforeUpdate=="function";J||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==c||P!==F)&&wm(s,_,c,F),fs=!1;var Q=s.memoizedState;_.state=Q,nu(s,c,_,d),P=s.memoizedState,A!==c||Q!==P||ln.current||fs?(typeof X=="function"&&(Nh(s,a,X,c),P=s.memoizedState),(A=fs||vm(s,a,A,c,Q,P,F))?(J||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(s.flags|=4194308)):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),_.props=c,_.state=P,_.context=F,c=A):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{_=s.stateNode,Gp(n,s),A=s.memoizedProps,F=s.type===s.elementType?A:Yn(s.type,A),_.props=F,J=s.pendingProps,Q=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=Mn(P):(P=un(a)?li:qt.current,P=so(s,P));var re=a.getDerivedStateFromProps;(X=typeof re=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==J||Q!==P)&&wm(s,_,c,P),fs=!1,Q=s.memoizedState,_.state=Q,nu(s,c,_,d);var oe=s.memoizedState;A!==J||Q!==oe||ln.current||fs?(typeof re=="function"&&(Nh(s,a,re,c),oe=s.memoizedState),(F=fs||vm(s,a,F,c,Q,oe,P)||!1)?(X||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,P)),typeof _.componentDidUpdate=="function"&&(s.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof _.componentDidUpdate!="function"||A===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=oe),_.props=c,_.state=oe,_.context=P,c=F):(typeof _.componentDidUpdate!="function"||A===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),c=!1)}return Mh(n,s,a,c,p,d)}function Mh(n,s,a,c,d,p){Pm(n,s);var _=(s.flags&128)!==0;if(!c&&!_)return d&&Mp(s,a,!1),Fr(n,s,p);c=s.stateNode,cw.current=s;var A=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&_?(s.child=lo(s,n.child,null,p),s.child=lo(s,null,A,p)):en(n,s,A,p),s.memoizedState=c.state,d&&Mp(s,a,!0),s.child}function bm(n){var s=n.stateNode;s.pendingContext?Vp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Vp(n,s.context,!1),_h(n,s.containerInfo)}function Dm(n,s,a,c,d){return ao(),dh(d),s.flags|=256,en(n,s,a,c),s.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function jh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Vm(n,s,a){var c=s.pendingProps,d=it.current,p=!1,_=(s.flags&128)!==0,A;if((A=_)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(p=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Je(it,d&1),n===null)return hh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=s.mode,p=s.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Iu(_,c,0,null),n=vi(n,c,a,null),p.return=s,n.return=s,p.sibling=n,s.child=p,s.child.memoizedState=jh(a),s.memoizedState=Lh,n):Fh(s,_));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return hw(n,s,_,c,A,d,a);if(p){p=c.fallback,_=s.mode,d=n.child,A=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=ws(d,P),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?p=ws(A,p):(p=vi(p,_,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,_=n.child.memoizedState,_=_===null?jh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,s.memoizedState=Lh,c}return p=n.child,n=p.sibling,c=ws(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Fh(n,s){return s=Iu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function cu(n,s,a,c){return c!==null&&dh(c),lo(s,n.child,null,a),n=Fh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function hw(n,s,a,c,d,p,_){if(a)return s.flags&256?(s.flags&=-257,c=Dh(Error(t(422))),cu(n,s,_,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=Iu({mode:"visible",children:c.children},d,0,null),p=vi(p,d,_,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&lo(s,n.child,null,_),s.child.memoizedState=jh(_),s.memoizedState=Lh,p);if((s.mode&1)===0)return cu(n,s,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,p=Error(t(419)),c=Dh(p,c,void 0),cu(n,s,_,c)}if(A=(_&n.childLanes)!==0,cn||A){if(c=Pt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Lr(n,d),er(c,n,d,-1))}return td(),c=Dh(Error(t(421))),cu(n,s,_,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=Sw.bind(null,n),d._reactRetry=s,null):(n=p.treeContext,Tn=us(d.nextSibling),En=s,rt=!0,Xn=null,n!==null&&(Vn[On++]=Or,Vn[On++]=Mr,Vn[On++]=ui,Or=n.id,Mr=n.overflow,ui=s),s=Fh(s,c.children),s.flags|=4096,s)}function Om(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),gh(n.return,s,a)}function Uh(n,s,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Mm(n,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if(en(n,s,c.children,a),c=it.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Om(n,a,s);else if(n.tag===19)Om(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Je(it,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&ru(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Uh(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&ru(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Uh(s,!0,a,null,p);break;case"together":Uh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function hu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Fr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),pi|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=ws(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=ws(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function dw(n,s,a){switch(s.tag){case 3:bm(s),ao();break;case 5:Xp(s);break;case 1:un(s.type)&&Gl(s);break;case 4:_h(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Je(Zl,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Je(it,it.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Vm(n,s,a):(Je(it,it.current&1),n=Fr(n,s,a),n!==null?n.sibling:null);Je(it,it.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Mm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Je(it,it.current),c)break;return null;case 22:case 23:return s.lanes=0,Rm(n,s,a)}return Fr(n,s,a)}var Lm,zh,jm,Fm;Lm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zh=function(){},jm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,di(mr.current);var p=null;switch(a){case"input":d=or(n,d),c=or(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=xe(n,d),c=xe(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ql)}Qo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var A=d[F];for(_ in A)A.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(A=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==A&&(P!=null||A!=null))if(F==="style")if(A){for(_ in A)!A.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&A[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&Ze("scroll",n),p||A===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(s.updateQueue=F)&&(s.flags|=4)}},Fm=function(n,s,a,c){a!==c&&(s.flags|=4)};function Ra(n,s){if(!rt)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Wt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function fw(n,s,a){var c=s.pendingProps;switch(uh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(s),null;case 1:return un(s.type)&&Wl(),Wt(s),null;case 3:return c=s.stateNode,ho(),et(ln),et(qt),Th(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Yl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Xn!==null&&(Jh(Xn),Xn=null))),zh(n,s),Wt(s),null;case 5:wh(s);var d=di(Sa.current);if(a=s.type,n!==null&&s.stateNode!=null)jm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Wt(s),null}if(n=di(mr.current),Yl(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[pr]=s,c[_a]=p,n=(s.mode&1)!==0,a){case"dialog":Ze("cancel",c),Ze("close",c);break;case"iframe":case"object":case"embed":Ze("load",c);break;case"video":case"audio":for(d=0;d<ga.length;d++)Ze(ga[d],c);break;case"source":Ze("error",c);break;case"img":case"image":case"link":Ze("error",c),Ze("load",c);break;case"details":Ze("toggle",c);break;case"input":mn(c,p),Ze("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ze("invalid",c);break;case"textarea":qe(c,p),Ze("invalid",c)}Qo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var A=p[_];_==="children"?typeof A=="string"?c.textContent!==A&&(p.suppressHydrationWarning!==!0&&$l(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(p.suppressHydrationWarning!==!0&&$l(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(_)&&A!=null&&_==="onScroll"&&Ze("scroll",c)}switch(a){case"input":kn(c),Ri(c,p,!0);break;case"textarea":kn(c),Yt(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=ql)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[pr]=s,n[_a]=c,Lm(n,s,!1,!1),s.stateNode=n;e:{switch(_=Xo(a,c),a){case"dialog":Ze("cancel",n),Ze("close",n),d=c;break;case"iframe":case"object":case"embed":Ze("load",n),d=c;break;case"video":case"audio":for(d=0;d<ga.length;d++)Ze(ga[d],n);d=c;break;case"source":Ze("error",n),d=c;break;case"img":case"image":case"link":Ze("error",n),Ze("load",n),d=c;break;case"details":Ze("toggle",n),d=c;break;case"input":mn(n,c),d=or(n,c),Ze("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),Ze("invalid",n);break;case"textarea":qe(n,c),d=xe(n,c),Ze("invalid",n);break;default:d=c}Qo(a,d),A=d;for(p in A)if(A.hasOwnProperty(p)){var P=A[p];p==="style"?Go(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Rn(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Tt(n,P):typeof P=="number"&&Tt(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ze("scroll",n):P!=null&&ge(n,p,P,_))}switch(a){case"input":kn(n),Ri(n,c,!1);break;case"textarea":kn(n),Yt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+De(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?G(n,!!c.multiple,p,!1):c.defaultValue!=null&&G(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ql)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Wt(s),null;case 6:if(n&&s.stateNode!=null)Fm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=di(Sa.current),di(mr.current),Yl(s)){if(c=s.stateNode,a=s.memoizedProps,c[pr]=s,(p=c.nodeValue!==a)&&(n=En,n!==null))switch(n.tag){case 3:$l(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$l(c.nodeValue,a,(n.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[pr]=s,s.stateNode=c}return Wt(s),null;case 13:if(et(it),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rt&&Tn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Bp(),ao(),s.flags|=98560,p=!1;else if(p=Yl(s),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[pr]=s}else ao(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Wt(s),p=!1}else Xn!==null&&(Jh(Xn),Xn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(it.current&1)!==0?xt===0&&(xt=3):td())),s.updateQueue!==null&&(s.flags|=4),Wt(s),null);case 4:return ho(),zh(n,s),n===null&&ya(s.stateNode.containerInfo),Wt(s),null;case 10:return mh(s.type._context),Wt(s),null;case 17:return un(s.type)&&Wl(),Wt(s),null;case 19:if(et(it),p=s.memoizedState,p===null)return Wt(s),null;if(c=(s.flags&128)!==0,_=p.rendering,_===null)if(c)Ra(p,!1);else{if(xt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(_=ru(n),_!==null){for(s.flags|=128,Ra(p,!1),c=_.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Je(it,it.current&1|2),s.child}n=n.sibling}p.tail!==null&&Ye()>go&&(s.flags|=128,c=!0,Ra(p,!1),s.lanes=4194304)}else{if(!c)if(n=ru(_),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ra(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!rt)return Wt(s),null}else 2*Ye()-p.renderingStartTime>go&&a!==1073741824&&(s.flags|=128,c=!0,Ra(p,!1),s.lanes=4194304);p.isBackwards?(_.sibling=s.child,s.child=_):(a=p.last,a!==null?a.sibling=_:s.child=_,p.last=_)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ye(),s.sibling=null,a=it.current,Je(it,c?a&1|2:a&1),s):(Wt(s),null);case 22:case 23:return ed(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(In&1073741824)!==0&&(Wt(s),s.subtreeFlags&6&&(s.flags|=8192)):Wt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function pw(n,s){switch(uh(s),s.tag){case 1:return un(s.type)&&Wl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ho(),et(ln),et(qt),Th(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return wh(s),null;case 13:if(et(it),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ao()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return et(it),null;case 4:return ho(),null;case 10:return mh(s.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var du=!1,Gt=!1,mw=typeof WeakSet=="function"?WeakSet:Set,ie=null;function po(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ut(n,s,c)}else a.current=null}function Bh(n,s,a){try{a()}catch(c){ut(n,s,c)}}var Um=!1;function gw(n,s){if(eh=os,n=vp(),Wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,A=-1,P=-1,F=0,X=0,J=n,Q=null;t:for(;;){for(var re;J!==a||d!==0&&J.nodeType!==3||(A=_+d),J!==p||c!==0&&J.nodeType!==3||(P=_+c),J.nodeType===3&&(_+=J.nodeValue.length),(re=J.firstChild)!==null;)Q=J,J=re;for(;;){if(J===n)break t;if(Q===a&&++F===d&&(A=_),Q===p&&++X===c&&(P=_),(re=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=re}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:n,selectionRange:a},os=!1,ie=s;ie!==null;)if(s=ie,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,ie=n;else for(;ie!==null;){s=ie;try{var oe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ue=oe.memoizedProps,ht=oe.memoizedState,L=s.stateNode,b=L.getSnapshotBeforeUpdate(s.elementType===s.type?ue:Yn(s.type,ue),ht);L.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){ut(s,s.return,Z)}if(n=s.sibling,n!==null){n.return=s.return,ie=n;break}ie=s.return}return oe=Um,Um=!1,oe}function Pa(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Bh(s,a,p)}d=d.next}while(d!==c)}}function fu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function $h(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function zm(n){var s=n.alternate;s!==null&&(n.alternate=null,zm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[pr],delete s[_a],delete s[ih],delete s[J_],delete s[Z_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bm(n){return n.tag===5||n.tag===3||n.tag===4}function $m(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ql));else if(c!==4&&(n=n.child,n!==null))for(qh(n,s,a),n=n.sibling;n!==null;)qh(n,s,a),n=n.sibling}function Hh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Hh(n,s,a),n=n.sibling;n!==null;)Hh(n,s,a),n=n.sibling}var Ft=null,Jn=!1;function ms(n,s,a){for(a=a.child;a!==null;)qm(n,s,a),a=a.sibling}function qm(n,s,a){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(ei,a)}catch{}switch(a.tag){case 5:Gt||po(a,s);case 6:var c=Ft,d=Jn;Ft=null,ms(n,s,a),Ft=c,Jn=d,Ft!==null&&(Jn?(n=Ft,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ft.removeChild(a.stateNode));break;case 18:Ft!==null&&(Jn?(n=Ft,a=a.stateNode,n.nodeType===8?sh(n.parentNode,a):n.nodeType===1&&sh(n,a),Gn(n)):sh(Ft,a.stateNode));break;case 4:c=Ft,d=Jn,Ft=a.stateNode.containerInfo,Jn=!0,ms(n,s,a),Ft=c,Jn=d;break;case 0:case 11:case 14:case 15:if(!Gt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Bh(a,s,_),d=d.next}while(d!==c)}ms(n,s,a);break;case 1:if(!Gt&&(po(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){ut(a,s,A)}ms(n,s,a);break;case 21:ms(n,s,a);break;case 22:a.mode&1?(Gt=(c=Gt)||a.memoizedState!==null,ms(n,s,a),Gt=c):ms(n,s,a);break;default:ms(n,s,a)}}function Hm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new mw),s.forEach(function(c){var d=xw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Zn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=s,A=_;e:for(;A!==null;){switch(A.tag){case 5:Ft=A.stateNode,Jn=!1;break e;case 3:Ft=A.stateNode.containerInfo,Jn=!0;break e;case 4:Ft=A.stateNode.containerInfo,Jn=!0;break e}A=A.return}if(Ft===null)throw Error(t(160));qm(p,_,d),Ft=null,Jn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){ut(d,s,F)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Wm(s,n),s=s.sibling}function Wm(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Zn(s,n),yr(n),c&4){try{Pa(3,n,n.return),fu(3,n)}catch(ue){ut(n,n.return,ue)}try{Pa(5,n,n.return)}catch(ue){ut(n,n.return,ue)}}break;case 1:Zn(s,n),yr(n),c&512&&a!==null&&po(a,a.return);break;case 5:if(Zn(s,n),yr(n),c&512&&a!==null&&po(a,a.return),n.flags&32){var d=n.stateNode;try{Tt(d,"")}catch(ue){ut(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,A=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{A==="input"&&p.type==="radio"&&p.name!=null&&Gs(d,p),Xo(A,_);var F=Xo(A,p);for(_=0;_<P.length;_+=2){var X=P[_],J=P[_+1];X==="style"?Go(d,J):X==="dangerouslySetInnerHTML"?Rn(d,J):X==="children"?Tt(d,J):ge(d,X,J,F)}switch(A){case"input":Jr(d,p);break;case"textarea":gn(d,p);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?G(d,!!p.multiple,re,!1):Q!==!!p.multiple&&(p.defaultValue!=null?G(d,!!p.multiple,p.defaultValue,!0):G(d,!!p.multiple,p.multiple?[]:"",!1))}d[_a]=p}catch(ue){ut(n,n.return,ue)}}break;case 6:if(Zn(s,n),yr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ue){ut(n,n.return,ue)}}break;case 3:if(Zn(s,n),yr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Gn(s.containerInfo)}catch(ue){ut(n,n.return,ue)}break;case 4:Zn(s,n),yr(n);break;case 13:Zn(s,n),yr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Kh=Ye())),c&4&&Hm(n);break;case 22:if(X=a!==null&&a.memoizedState!==null,n.mode&1?(Gt=(F=Gt)||X,Zn(s,n),Gt=F):Zn(s,n),yr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!X&&(n.mode&1)!==0)for(ie=n,X=n.child;X!==null;){for(J=ie=X;ie!==null;){switch(Q=ie,re=Q.child,Q.tag){case 0:case 11:case 14:case 15:Pa(4,Q,Q.return);break;case 1:po(Q,Q.return);var oe=Q.stateNode;if(typeof oe.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,oe.props=s.memoizedProps,oe.state=s.memoizedState,oe.componentWillUnmount()}catch(ue){ut(c,a,ue)}}break;case 5:po(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Qm(J);continue}}re!==null?(re.return=Q,ie=re):Qm(J)}X=X.sibling}e:for(X=null,J=n;;){if(J.tag===5){if(X===null){X=J;try{d=J.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(A=J.stateNode,P=J.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=Wo("display",_))}catch(ue){ut(n,n.return,ue)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=F?"":J.memoizedProps}catch(ue){ut(n,n.return,ue)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Zn(s,n),yr(n),c&4&&Hm(n);break;case 21:break;default:Zn(s,n),yr(n)}}function yr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Bm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Tt(d,""),c.flags&=-33);var p=$m(n);Hh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,A=$m(n);qh(n,A,_);break;default:throw Error(t(161))}}catch(P){ut(n,n.return,P)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function yw(n,s,a){ie=n,Gm(n)}function Gm(n,s,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||du;if(!_){var A=d.alternate,P=A!==null&&A.memoizedState!==null||Gt;A=du;var F=Gt;if(du=_,(Gt=P)&&!F)for(ie=d;ie!==null;)_=ie,P=_.child,_.tag===22&&_.memoizedState!==null?Xm(d):P!==null?(P.return=_,ie=P):Xm(d);for(;p!==null;)ie=p,Gm(p),p=p.sibling;ie=d,du=A,Gt=F}Km(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):Km(n)}}function Km(n){for(;ie!==null;){var s=ie;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Gt||fu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Gt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Yn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&Qp(s,p,c);break;case 3:var _=s.updateQueue;if(_!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Qp(s,_,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var F=s.alternate;if(F!==null){var X=F.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Gn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gt||s.flags&512&&$h(s)}catch(Q){ut(s,s.return,Q)}}if(s===n){ie=null;break}if(a=s.sibling,a!==null){a.return=s.return,ie=a;break}ie=s.return}}function Qm(n){for(;ie!==null;){var s=ie;if(s===n){ie=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ie=a;break}ie=s.return}}function Xm(n){for(;ie!==null;){var s=ie;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{fu(4,s)}catch(P){ut(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){ut(s,d,P)}}var p=s.return;try{$h(s)}catch(P){ut(s,p,P)}break;case 5:var _=s.return;try{$h(s)}catch(P){ut(s,_,P)}}}catch(P){ut(s,s.return,P)}if(s===n){ie=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ie=A;break}ie=s.return}}var vw=Math.ceil,pu=Ae.ReactCurrentDispatcher,Wh=Ae.ReactCurrentOwner,jn=Ae.ReactCurrentBatchConfig,Ue=0,Pt=null,gt=null,Ut=0,In=0,mo=cs(0),xt=0,Na=null,pi=0,mu=0,Gh=0,ba=null,hn=null,Kh=0,go=1/0,Ur=null,gu=!1,Qh=null,gs=null,yu=!1,ys=null,vu=0,Da=0,Xh=null,_u=-1,wu=0;function tn(){return(Ue&6)!==0?Ye():_u!==-1?_u:_u=Ye()}function vs(n){return(n.mode&1)===0?1:(Ue&2)!==0&&Ut!==0?Ut&-Ut:tw.transition!==null?(wu===0&&(wu=ni()),wu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:aa(n.type)),n)}function er(n,s,a,c){if(50<Da)throw Da=0,Xh=null,Error(t(185));ns(n,a,c),((Ue&2)===0||n!==Pt)&&(n===Pt&&((Ue&2)===0&&(mu|=a),xt===4&&_s(n,Ut)),dn(n,c),a===1&&Ue===0&&(s.mode&1)===0&&(go=Ye()+500,Kl&&ds()))}function dn(n,s){var a=n.callbackNode;Cr(n,s);var c=ti(n,n===Pt?Ut:0);if(c===0)a!==null&&na(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&na(a),s===1)n.tag===0?ew(Jm.bind(null,n)):Lp(Jm.bind(null,n)),X_(function(){(Ue&6)===0&&ds()}),a=null;else{switch(ss(c)){case 1:a=Zs;break;case 4:a=Zr;break;case 16:a=Nn;break;case 536870912:a=wl;break;default:a=Nn}a=og(a,Ym.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function Ym(n,s){if(_u=-1,wu=0,(Ue&6)!==0)throw Error(t(327));var a=n.callbackNode;if(yo()&&n.callbackNode!==a)return null;var c=ti(n,n===Pt?Ut:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Eu(n,c);else{s=c;var d=Ue;Ue|=2;var p=eg();(Pt!==n||Ut!==s)&&(Ur=null,go=Ye()+500,gi(n,s));do try{Ew();break}catch(A){Zm(n,A)}while(!0);ph(),pu.current=p,Ue=d,gt!==null?s=0:(Pt=null,Ut=0,s=xt)}if(s!==0){if(s===2&&(d=vn(n),d!==0&&(c=d,s=Yh(n,d))),s===1)throw a=Na,gi(n,0),_s(n,c),dn(n,Ye()),a;if(s===6)_s(n,c);else{if(d=n.current.alternate,(c&30)===0&&!_w(d)&&(s=Eu(n,c),s===2&&(p=vn(n),p!==0&&(c=p,s=Yh(n,p))),s===1))throw a=Na,gi(n,0),_s(n,c),dn(n,Ye()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:yi(n,hn,Ur);break;case 3:if(_s(n,c),(c&130023424)===c&&(s=Kh+500-Ye(),10<s)){if(ti(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){tn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=rh(yi.bind(null,n,hn,Ur),s);break}yi(n,hn,Ur);break;case 4:if(_s(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var _=31-Jt(c);p=1<<_,_=s[_],_>d&&(d=_),c&=~p}if(c=d,c=Ye()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*vw(c/1960))-c,10<c){n.timeoutHandle=rh(yi.bind(null,n,hn,Ur),c);break}yi(n,hn,Ur);break;case 5:yi(n,hn,Ur);break;default:throw Error(t(329))}}}return dn(n,Ye()),n.callbackNode===a?Ym.bind(null,n):null}function Yh(n,s){var a=ba;return n.current.memoizedState.isDehydrated&&(gi(n,s).flags|=256),n=Eu(n,s),n!==2&&(s=hn,hn=a,s!==null&&Jh(s)),n}function Jh(n){hn===null?hn=n:hn.push.apply(hn,n)}function _w(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Qn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function _s(n,s){for(s&=~Gh,s&=~mu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Jt(s),c=1<<a;n[a]=-1,s&=~c}}function Jm(n){if((Ue&6)!==0)throw Error(t(327));yo();var s=ti(n,0);if((s&1)===0)return dn(n,Ye()),null;var a=Eu(n,s);if(n.tag!==0&&a===2){var c=vn(n);c!==0&&(s=c,a=Yh(n,c))}if(a===1)throw a=Na,gi(n,0),_s(n,s),dn(n,Ye()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,yi(n,hn,Ur),dn(n,Ye()),null}function Zh(n,s){var a=Ue;Ue|=1;try{return n(s)}finally{Ue=a,Ue===0&&(go=Ye()+500,Kl&&ds())}}function mi(n){ys!==null&&ys.tag===0&&(Ue&6)===0&&yo();var s=Ue;Ue|=1;var a=jn.transition,c=Ve;try{if(jn.transition=null,Ve=1,n)return n()}finally{Ve=c,jn.transition=a,Ue=s,(Ue&6)===0&&ds()}}function ed(){In=mo.current,et(mo)}function gi(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Q_(a)),gt!==null)for(a=gt.return;a!==null;){var c=a;switch(uh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Wl();break;case 3:ho(),et(ln),et(qt),Th();break;case 5:wh(c);break;case 4:ho();break;case 13:et(it);break;case 19:et(it);break;case 10:mh(c.type._context);break;case 22:case 23:ed()}a=a.return}if(Pt=n,gt=n=ws(n.current,null),Ut=In=s,xt=0,Na=null,Gh=mu=pi=0,hn=ba=null,hi!==null){for(s=0;s<hi.length;s++)if(a=hi[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}hi=null}return n}function Zm(n,s){do{var a=gt;try{if(ph(),su.current=lu,iu){for(var c=ot.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}iu=!1}if(fi=0,Rt=St=ot=null,xa=!1,Aa=0,Wh.current=null,a===null||a.return===null){xt=1,Na=s,gt=null;break}e:{var p=n,_=a.return,A=a,P=s;if(s=Ut,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,X=A,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var re=Sm(_);if(re!==null){re.flags&=-257,xm(re,_,A,p,s),re.mode&1&&Im(p,F,s),s=re,P=F;var oe=s.updateQueue;if(oe===null){var ue=new Set;ue.add(P),s.updateQueue=ue}else oe.add(P);break e}else{if((s&1)===0){Im(p,F,s),td();break e}P=Error(t(426))}}else if(rt&&A.mode&1){var ht=Sm(_);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),xm(ht,_,A,p,s),dh(fo(P,A));break e}}p=P=fo(P,A),xt!==4&&(xt=2),ba===null?ba=[p]:ba.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var L=Em(p,P,s);Kp(p,L);break e;case 1:A=P;var b=p.type,j=p.stateNode;if((p.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(gs===null||!gs.has(j)))){p.flags|=65536,s&=-s,p.lanes|=s;var Z=Tm(p,A,s);Kp(p,Z);break e}}p=p.return}while(p!==null)}ng(a)}catch(ce){s=ce,gt===a&&a!==null&&(gt=a=a.return);continue}break}while(!0)}function eg(){var n=pu.current;return pu.current=lu,n===null?lu:n}function td(){(xt===0||xt===3||xt===2)&&(xt=4),Pt===null||(pi&268435455)===0&&(mu&268435455)===0||_s(Pt,Ut)}function Eu(n,s){var a=Ue;Ue|=2;var c=eg();(Pt!==n||Ut!==s)&&(Ur=null,gi(n,s));do try{ww();break}catch(d){Zm(n,d)}while(!0);if(ph(),Ue=a,pu.current=c,gt!==null)throw Error(t(261));return Pt=null,Ut=0,xt}function ww(){for(;gt!==null;)tg(gt)}function Ew(){for(;gt!==null&&!vl();)tg(gt)}function tg(n){var s=ig(n.alternate,n,In);n.memoizedProps=n.pendingProps,s===null?ng(n):gt=s,Wh.current=null}function ng(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=fw(a,s,In),a!==null){gt=a;return}}else{if(a=pw(a,s),a!==null){a.flags&=32767,gt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{xt=6,gt=null;return}}if(s=s.sibling,s!==null){gt=s;return}gt=s=n}while(s!==null);xt===0&&(xt=5)}function yi(n,s,a){var c=Ve,d=jn.transition;try{jn.transition=null,Ve=1,Tw(n,s,a,c)}finally{jn.transition=d,Ve=c}return null}function Tw(n,s,a,c){do yo();while(ys!==null);if((Ue&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ke(n,p),n===Pt&&(gt=Pt=null,Ut=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yu||(yu=!0,og(Nn,function(){return yo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=jn.transition,jn.transition=null;var _=Ve;Ve=1;var A=Ue;Ue|=4,Wh.current=null,gw(n,a),Wm(a,n),B_(th),os=!!eh,th=eh=null,n.current=a,yw(a),jc(),Ue=A,Ve=_,jn.transition=p}else n.current=a;if(yu&&(yu=!1,ys=n,vu=d),p=n.pendingLanes,p===0&&(gs=null),El(a.stateNode),dn(n,Ye()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(gu)throw gu=!1,n=Qh,Qh=null,n;return(vu&1)!==0&&n.tag!==0&&yo(),p=n.pendingLanes,(p&1)!==0?n===Xh?Da++:(Da=0,Xh=n):Da=0,ds(),null}function yo(){if(ys!==null){var n=ss(vu),s=jn.transition,a=Ve;try{if(jn.transition=null,Ve=16>n?16:n,ys===null)var c=!1;else{if(n=ys,ys=null,vu=0,(Ue&6)!==0)throw Error(t(331));var d=Ue;for(Ue|=4,ie=n.current;ie!==null;){var p=ie,_=p.child;if((ie.flags&16)!==0){var A=p.deletions;if(A!==null){for(var P=0;P<A.length;P++){var F=A[P];for(ie=F;ie!==null;){var X=ie;switch(X.tag){case 0:case 11:case 15:Pa(8,X,p)}var J=X.child;if(J!==null)J.return=X,ie=J;else for(;ie!==null;){X=ie;var Q=X.sibling,re=X.return;if(zm(X),X===F){ie=null;break}if(Q!==null){Q.return=re,ie=Q;break}ie=re}}}var oe=p.alternate;if(oe!==null){var ue=oe.child;if(ue!==null){oe.child=null;do{var ht=ue.sibling;ue.sibling=null,ue=ht}while(ue!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ie=_;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Pa(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ie=L;break e}ie=p.return}}var b=n.current;for(ie=b;ie!==null;){_=ie;var j=_.child;if((_.subtreeFlags&2064)!==0&&j!==null)j.return=_,ie=j;else e:for(_=b;ie!==null;){if(A=ie,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:fu(9,A)}}catch(ce){ut(A,A.return,ce)}if(A===_){ie=null;break e}var Z=A.sibling;if(Z!==null){Z.return=A.return,ie=Z;break e}ie=A.return}}if(Ue=d,ds(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(ei,n)}catch{}c=!0}return c}finally{Ve=a,jn.transition=s}}return!1}function rg(n,s,a){s=fo(a,s),s=Em(n,s,1),n=ps(n,s,1),s=tn(),n!==null&&(ns(n,1,s),dn(n,s))}function ut(n,s,a){if(n.tag===3)rg(n,n,a);else for(;s!==null;){if(s.tag===3){rg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gs===null||!gs.has(c))){n=fo(a,n),n=Tm(s,n,1),s=ps(s,n,1),n=tn(),s!==null&&(ns(s,1,n),dn(s,n));break}}s=s.return}}function Iw(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=tn(),n.pingedLanes|=n.suspendedLanes&a,Pt===n&&(Ut&a)===a&&(xt===4||xt===3&&(Ut&130023424)===Ut&&500>Ye()-Kh?gi(n,0):Gh|=a),dn(n,s)}function sg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Fi,Fi<<=1,(Fi&130023424)===0&&(Fi=4194304)));var a=tn();n=Lr(n,s),n!==null&&(ns(n,s,a),dn(n,a))}function Sw(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),sg(n,a)}function xw(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),sg(n,a)}var ig;ig=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||ln.current)cn=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return cn=!1,dw(n,s,a);cn=(n.flags&131072)!==0}else cn=!1,rt&&(s.flags&1048576)!==0&&jp(s,Xl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;hu(n,s),n=s.pendingProps;var d=so(s,qt.current);co(s,a),d=xh(null,s,c,n,d,a);var p=Ah();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,un(c)?(p=!0,Gl(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,vh(s),d.updater=uu,s.stateNode=d,d._reactInternals=s,bh(s,c,n,a),s=Mh(null,s,c,!0,p,a)):(s.tag=0,rt&&p&&lh(s),en(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(hu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=kw(c),n=Yn(c,n),d){case 0:s=Oh(null,s,c,n,a);break e;case 1:s=Nm(null,s,c,n,a);break e;case 11:s=Am(null,s,c,n,a);break e;case 14:s=km(null,s,c,Yn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Yn(c,d),Oh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Yn(c,d),Nm(n,s,c,d,a);case 3:e:{if(bm(s),n===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,Gp(n,s),nu(s,c,null,a);var _=s.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=fo(Error(t(423)),s),s=Dm(n,s,c,a,d);break e}else if(c!==d){d=fo(Error(t(424)),s),s=Dm(n,s,c,a,d);break e}else for(Tn=us(s.stateNode.containerInfo.firstChild),En=s,rt=!0,Xn=null,a=Hp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ao(),c===d){s=Fr(n,s,a);break e}en(n,s,c,a)}s=s.child}return s;case 5:return Xp(s),n===null&&hh(s),c=s.type,d=s.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,nh(c,d)?_=null:p!==null&&nh(c,p)&&(s.flags|=32),Pm(n,s),en(n,s,_,a),s.child;case 6:return n===null&&hh(s),null;case 13:return Vm(n,s,a);case 4:return _h(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=lo(s,null,c,a):en(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Yn(c,d),Am(n,s,c,d,a);case 7:return en(n,s,s.pendingProps,a),s.child;case 8:return en(n,s,s.pendingProps.children,a),s.child;case 12:return en(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,_=d.value,Je(Zl,c._currentValue),c._currentValue=_,p!==null)if(Qn(p.value,_)){if(p.children===d.children&&!ln.current){s=Fr(n,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var A=p.dependencies;if(A!==null){_=p.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=jr(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var X=F.pending;X===null?P.next=P:(P.next=X.next,X.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),gh(p.return,a,s),A.lanes|=a;break}P=P.next}}else if(p.tag===10)_=p.type===s.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,A=_.alternate,A!==null&&(A.lanes|=a),gh(_,a,s),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===s){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}en(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,co(s,a),d=Mn(d),c=c(d),s.flags|=1,en(n,s,c,a),s.child;case 14:return c=s.type,d=Yn(c,s.pendingProps),d=Yn(c.type,d),km(n,s,c,d,a);case 15:return Cm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Yn(c,d),hu(n,s),s.tag=1,un(c)?(n=!0,Gl(s)):n=!1,co(s,a),_m(s,c,d),bh(s,c,d,a),Mh(null,s,c,!0,n,a);case 19:return Mm(n,s,a);case 22:return Rm(n,s,a)}throw Error(t(156,s.tag))};function og(n,s){return Li(n,s)}function Aw(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(n,s,a,c){return new Aw(n,s,a,c)}function nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function kw(n){if(typeof n=="function")return nd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===kt)return 14}return 2}function ws(n,s){var a=n.alternate;return a===null?(a=Fn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Tu(n,s,a,c,d,p){var _=2;if(c=n,typeof n=="function")nd(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return vi(a.children,d,p,s);case S:_=8,d|=8;break;case R:return n=Fn(12,a,s,d|2),n.elementType=R,n.lanes=p,n;case C:return n=Fn(13,a,s,d),n.elementType=C,n.lanes=p,n;case st:return n=Fn(19,a,s,d),n.elementType=st,n.lanes=p,n;case $e:return Iu(a,d,p,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:_=10;break e;case D:_=9;break e;case V:_=11;break e;case kt:_=14;break e;case Et:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=Fn(_,a,s,d),s.elementType=n,s.type=c,s.lanes=p,s}function vi(n,s,a,c){return n=Fn(7,n,c,s),n.lanes=a,n}function Iu(n,s,a,c){return n=Fn(22,n,c,s),n.elementType=$e,n.lanes=a,n.stateNode={isHidden:!1},n}function rd(n,s,a){return n=Fn(6,n,null,s),n.lanes=a,n}function sd(n,s,a){return s=Fn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Cw(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function id(n,s,a,c,d,p,_,A,P){return n=new Cw(n,s,a,A,P),s===1?(s=1,p===!0&&(s|=8)):s=0,p=Fn(3,null,null,s),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},vh(p),n}function Rw(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function ag(n){if(!n)return hs;n=n._reactInternals;e:{if(Bn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(un(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(un(a))return Op(n,a,s)}return s}function lg(n,s,a,c,d,p,_,A,P){return n=id(a,c,!0,n,d,p,_,A,P),n.context=ag(null),a=n.current,c=tn(),d=vs(a),p=jr(c,d),p.callback=s??null,ps(a,p,d),n.current.lanes=d,ns(n,d,c),dn(n,c),n}function Su(n,s,a,c){var d=s.current,p=tn(),_=vs(d);return a=ag(a),s.context===null?s.context=a:s.pendingContext=a,s=jr(p,_),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ps(d,s,_),n!==null&&(er(n,d,_,p),tu(n,d,_)),_}function xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ug(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function od(n,s){ug(n,s),(n=n.alternate)&&ug(n,s)}function Pw(){return null}var cg=typeof reportError=="function"?reportError:function(n){console.error(n)};function ad(n){this._internalRoot=n}Au.prototype.render=ad.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Su(n,s,null,null)},Au.prototype.unmount=ad.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;mi(function(){Su(null,n,null,null)}),s[Dr]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var s=Al();n={blockedOn:null,target:n,priority:s};for(var a=0;a<cr.length&&s!==0&&s<cr[a].priority;a++);cr.splice(a,0,n),a===0&&Rl(n)}};function ld(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hg(){}function Nw(n,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=xu(_);p.call(F)}}var _=lg(s,c,n,0,null,!1,!1,"",hg);return n._reactRootContainer=_,n[Dr]=_.current,ya(n.nodeType===8?n.parentNode:n),mi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var F=xu(P);A.call(F)}}var P=id(n,0,!1,null,null,!1,!1,"",hg);return n._reactRootContainer=P,n[Dr]=P.current,ya(n.nodeType===8?n.parentNode:n),mi(function(){Su(s,P,a,c)}),P}function Cu(n,s,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var A=d;d=function(){var P=xu(_);A.call(P)}}Su(s,_,n,d)}else _=Nw(a,s,n,d,c);return xu(_)}Sl=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=es(s.pendingLanes);a!==0&&(rs(s,a|1),dn(s,Ye()),(Ue&6)===0&&(go=Ye()+500,ds()))}break;case 13:mi(function(){var c=Lr(n,1);if(c!==null){var d=tn();er(c,n,1,d)}}),od(n,1)}},Ui=function(n){if(n.tag===13){var s=Lr(n,134217728);if(s!==null){var a=tn();er(s,n,134217728,a)}od(n,134217728)}},xl=function(n){if(n.tag===13){var s=vs(n),a=Lr(n,s);if(a!==null){var c=tn();er(a,n,s,c)}od(n,s)}},Al=function(){return Ve},kl=function(n,s){var a=Ve;try{return Ve=n,s()}finally{Ve=a}},Ni=function(n,s,a){switch(s){case"input":if(Jr(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Hl(c);if(!d)throw Error(t(90));ir(c),Jr(c,d)}}}break;case"textarea":gn(n,a);break;case"select":s=a.value,s!=null&&G(n,!!a.multiple,s,!1)}},Qs=Zh,Jo=mi;var bw={usingClientEntryPoint:!1,Events:[wa,no,Hl,lr,Yo,Zh]},Va={findFiberByHostInstance:ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dw={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ta(n),n===null?null:n.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||Pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{ei=Ru.inject(Dw),yn=Ru}catch{}}return fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bw,fn.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(s))throw Error(t(200));return Rw(n,s,null,a)},fn.createRoot=function(n,s){if(!ld(n))throw Error(t(299));var a=!1,c="",d=cg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=id(n,1,!1,null,null,a,!1,c,d),n[Dr]=s.current,ya(n.nodeType===8?n.parentNode:n),new ad(s)},fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ta(s),n=n===null?null:n.stateNode,n},fn.flushSync=function(n){return mi(n)},fn.hydrate=function(n,s,a){if(!ku(s))throw Error(t(200));return Cu(null,n,s,!0,a)},fn.hydrateRoot=function(n,s,a){if(!ld(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=cg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),s=lg(s,null,n,1,a??null,d,!1,p,_),n[Dr]=s.current,ya(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Au(s)},fn.render=function(n,s,a){if(!ku(s))throw Error(t(200));return Cu(null,n,s,!1,a)},fn.unmountComponentAtNode=function(n){if(!ku(n))throw Error(t(40));return n._reactRootContainer?(mi(function(){Cu(null,null,n,!1,function(){n._reactRootContainer=null,n[Dr]=null})}),!0):!1},fn.unstable_batchedUpdates=Zh,fn.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!ku(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cu(n,s,a,!1,c)},fn.version="18.3.1-next-f1338f8080-20240426",fn}var _g;function zw(){if(_g)return hd.exports;_g=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=Uw(),hd.exports}var wg;function Bw(){if(wg)return Pu;wg=1;var r=zw();return Pu.createRoot=r.createRoot,Pu.hydrateRoot=r.hydrateRoot,Pu}var $w=Bw();const qw=Zy($w);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ev=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ww={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=ae.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...m},g)=>ae.createElement("svg",{ref:g,...Ww,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:ev("lucide",o),...m},[...h.map(([v,T])=>ae.createElement(v,T)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=(r,e)=>{const t=ae.forwardRef(({className:i,...o},l)=>ae.createElement(Gw,{ref:l,iconNode:e,className:ev(`lucide-${Hw(r)}`,i),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=We("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=We("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=We("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=We("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=We("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=We("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=We("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=We("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=We("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=We("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=We("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=We("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=We("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=We("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=We("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=We("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=We("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=We("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=We("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=We("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=We("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=We("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=We("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=We("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=We("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=We("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=We("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=We("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=We("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),d1=()=>{};var Ig={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},f1=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},av={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,T=l>>2,x=(l&3)<<4|m>>4;let I=(m&15)<<2|v>>6,U=v&63;g||(U=64,h||(I=64)),i.push(t[T],t[x],t[I],t[U])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ov(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):f1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const x=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||m==null||v==null||x==null)throw new p1;const I=l<<2|m>>4;if(i.push(I),v!==64){const U=m<<4&240|v>>2;if(i.push(U),x!==64){const $=v<<6&192|x;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class p1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m1=function(r){const e=ov(r);return av.encodeByteArray(e,!0)},Ku=function(r){return m1(r).replace(/\./g,"")},lv=function(r){try{return av.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=()=>g1().__FIREBASE_DEFAULTS__,v1=()=>{if(typeof process>"u"||typeof Ig>"u")return;const r=Ig.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},_1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&lv(r[1]);return e&&JSON.parse(e)},gc=()=>{try{return d1()||y1()||v1()||_1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},uv=r=>{var e,t;return(t=(e=gc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},w1=r=>{const e=uv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},cv=()=>{var r;return(r=gc())===null||r===void 0?void 0:r.config},hv=r=>{var e;return(e=gc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dv(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ku(JSON.stringify(t)),Ku(JSON.stringify(h)),""].join(".")}const Fa={};function I1(){const r={prod:[],emulator:[]};for(const e of Object.keys(Fa))Fa[e]?r.emulator.push(e):r.prod.push(e);return r}function S1(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Sg=!1;function fv(r,e){if(typeof window>"u"||typeof document>"u"||!Lo(window.location.host)||Fa[r]===e||Fa[r]||Sg)return;Fa[r]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=I1().prod.length>0;function h(){const I=document.getElementById(i);I&&I.remove()}function m(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,U){I.setAttribute("width","24"),I.setAttribute("id",U),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function v(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Sg=!0,h()},I}function T(I,U){I.setAttribute("id",U),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function x(){const I=S1(i),U=t("text"),$=document.getElementById(U)||document.createElement("span"),Y=t("learnmore"),B=document.getElementById(Y)||document.createElement("a"),fe=t("preprendIcon"),me=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ge=I.element;m(ge),T(B,Y);const Ae=v();g(me,fe),ge.append(me,$,B,Ae),document.body.appendChild(ge)}l?($.innerText="Preview backend disconnected.",me.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(me.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function x1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function A1(){var r;const e=(r=gc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function k1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function C1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function R1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P1(){const r=Xt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function N1(){return!A1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b1(){try{return typeof indexedDB=="object"}catch{return!1}}function D1(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="FirebaseError";class Xr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=V1,Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?O1(l,i):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Xr(o,m,i)}}function O1(r,e){return r.replace(M1,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const M1=/\{\$([^}]+)}/g;function L1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ti(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(xg(l)&&xg(h)){if(!Ti(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function xg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function j1(r,e){const t=new F1(r,e);return t.subscribe.bind(t)}class F1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");U1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=pd),o.error===void 0&&(o.error=pd),o.complete===void 0&&(o.complete=pd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U1(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function pd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(r){return r&&r._delegate?r._delegate:r}class Ii{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new E1;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($1(e))try{this.getOrInitializeService({instanceIdentifier:_i})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=_i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_i){return this.instances.has(e)}getOptions(e=_i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);i===m&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:B1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_i){return this.component?this.component.multipleInstances?e:_i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B1(r){return r===_i?void 0:r}function $1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new z1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const H1={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},W1=Ne.INFO,G1={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},K1=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=G1[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sf{constructor(e){this.name=e,this._logLevel=W1,this._logHandler=K1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?H1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const Q1=(r,e)=>e.some(t=>r instanceof t);let Ag,kg;function X1(){return Ag||(Ag=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y1(){return kg||(kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pv=new WeakMap,kd=new WeakMap,mv=new WeakMap,md=new WeakMap,of=new WeakMap;function J1(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Rs(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&pv.set(t,r)}).catch(()=>{}),of.set(e,r),e}function Z1(r){if(kd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});kd.set(r,e)}let Cd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return kd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||mv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function eE(r){Cd=r(Cd)}function tE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(gd(this),e,...t);return mv.set(i,e.sort?e.sort():[e]),Rs(i)}:Y1().includes(r)?function(...e){return r.apply(gd(this),e),Rs(pv.get(this))}:function(...e){return Rs(r.apply(gd(this),e))}}function nE(r){return typeof r=="function"?tE(r):(r instanceof IDBTransaction&&Z1(r),Q1(r,X1())?new Proxy(r,Cd):r)}function Rs(r){if(r instanceof IDBRequest)return J1(r);if(md.has(r))return md.get(r);const e=nE(r);return e!==r&&(md.set(r,e),of.set(e,r)),e}const gd=r=>of.get(r);function rE(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),m=Rs(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Rs(h.result),g.oldVersion,g.newVersion,Rs(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const sE=["get","getKey","getAll","getAllKeys","count"],iE=["put","add","delete","clear"],yd=new Map;function Cg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(yd.get(e))return yd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=iE.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||sE.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return i&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return yd.set(e,l),l}eE(r=>({...r,get:(e,t,i)=>Cg(e,t)||r.get(e,t,i),has:(e,t)=>!!Cg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aE(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function aE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rd="@firebase/app",Rg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new sf("@firebase/app"),lE="@firebase/app-compat",uE="@firebase/analytics-compat",cE="@firebase/analytics",hE="@firebase/app-check-compat",dE="@firebase/app-check",fE="@firebase/auth",pE="@firebase/auth-compat",mE="@firebase/database",gE="@firebase/data-connect",yE="@firebase/database-compat",vE="@firebase/functions",_E="@firebase/functions-compat",wE="@firebase/installations",EE="@firebase/installations-compat",TE="@firebase/messaging",IE="@firebase/messaging-compat",SE="@firebase/performance",xE="@firebase/performance-compat",AE="@firebase/remote-config",kE="@firebase/remote-config-compat",CE="@firebase/storage",RE="@firebase/storage-compat",PE="@firebase/firestore",NE="@firebase/ai",bE="@firebase/firestore-compat",DE="firebase",VE="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="[DEFAULT]",OE={[Rd]:"fire-core",[lE]:"fire-core-compat",[cE]:"fire-analytics",[uE]:"fire-analytics-compat",[dE]:"fire-app-check",[hE]:"fire-app-check-compat",[fE]:"fire-auth",[pE]:"fire-auth-compat",[mE]:"fire-rtdb",[gE]:"fire-data-connect",[yE]:"fire-rtdb-compat",[vE]:"fire-fn",[_E]:"fire-fn-compat",[wE]:"fire-iid",[EE]:"fire-iid-compat",[TE]:"fire-fcm",[IE]:"fire-fcm-compat",[SE]:"fire-perf",[xE]:"fire-perf-compat",[AE]:"fire-rc",[kE]:"fire-rc-compat",[CE]:"fire-gcs",[RE]:"fire-gcs-compat",[PE]:"fire-fst",[bE]:"fire-fst-compat",[NE]:"fire-vertex","fire-js":"fire-js",[DE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map,ME=new Map,Nd=new Map;function Pg(r,e){try{r.container.addComponent(e)}catch(t){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Po(r){const e=r.name;if(Nd.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;Nd.set(e,r);for(const t of Qu.values())Pg(t,r);for(const t of ME.values())Pg(t,r);return!0}function af(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function tr(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ps=new nl("app","Firebase",LE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ps.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=VE;function gv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Pd,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ps.create("bad-app-name",{appName:String(o)});if(t||(t=cv()),!t)throw Ps.create("no-options");const l=Qu.get(o);if(l){if(Ti(t,l.options)&&Ti(i,l.config))return l;throw Ps.create("duplicate-app",{appName:o})}const h=new q1(o);for(const g of Nd.values())h.addComponent(g);const m=new jE(t,i,h);return Qu.set(o,m),m}function yv(r=Pd){const e=Qu.get(r);if(!e&&r===Pd&&cv())return gv();if(!e)throw Ps.create("no-app",{appName:r});return e}function Ns(r,e,t){var i;let o=(i=OE[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const m=[`Unable to register library "${o}" with version "${e}":`];l&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(m.join(" "));return}Po(new Ii(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="firebase-heartbeat-database",UE=1,Wa="firebase-heartbeat-store";let vd=null;function vv(){return vd||(vd=rE(FE,UE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Wa)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ps.create("idb-open",{originalErrorMessage:r.message})})),vd}async function zE(r){try{const t=(await vv()).transaction(Wa),i=await t.objectStore(Wa).get(_v(r));return await t.done,i}catch(e){if(e instanceof Xr)Hr.warn(e.message);else{const t=Ps.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(t.message)}}}async function Ng(r,e){try{const i=(await vv()).transaction(Wa,"readwrite");await i.objectStore(Wa).put(e,_v(r)),await i.done}catch(t){if(t instanceof Xr)Hr.warn(t.message);else{const i=Ps.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Hr.warn(i.message)}}}function _v(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=1024,$E=30;class qE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new WE(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=bg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>$E){const h=GE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Hr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bg(),{heartbeatsToSend:i,unsentEntries:o}=HE(this._heartbeatsCache.heartbeats),l=Ku(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Hr.warn(t),""}}}function bg(){return new Date().toISOString().substring(0,10)}function HE(r,e=BE){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Dg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Dg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class WE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b1()?D1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Dg(r){return Ku(JSON.stringify({version:2,heartbeats:r})).length}function GE(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(r){Po(new Ii("platform-logger",e=>new oE(e),"PRIVATE")),Po(new Ii("heartbeat",e=>new qE(e),"PRIVATE")),Ns(Rd,Rg,r),Ns(Rd,Rg,"esm2017"),Ns("fire-js","")}KE("");var QE="firebase",XE="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ns(QE,XE,"app");var Vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bs,wv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function R(){}R.prototype=S.prototype,k.D=S.prototype,k.prototype=new R,k.prototype.constructor=k,k.C=function(N,D,V){for(var C=Array(arguments.length-2),st=2;st<arguments.length;st++)C[st-2]=arguments[st];return S.prototype[D].apply(N,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)N[D]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(D=0;16>D;++D)N[D]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=k.g[0],R=k.g[1],D=k.g[2];var V=k.g[3],C=S+(V^R&(D^V))+N[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=V+(D^S&(R^D))+N[1]+3905402710&4294967295,V=S+(C<<12&4294967295|C>>>20),C=D+(R^V&(S^R))+N[2]+606105819&4294967295,D=V+(C<<17&4294967295|C>>>15),C=R+(S^D&(V^S))+N[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(V^R&(D^V))+N[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=V+(D^S&(R^D))+N[5]+1200080426&4294967295,V=S+(C<<12&4294967295|C>>>20),C=D+(R^V&(S^R))+N[6]+2821735955&4294967295,D=V+(C<<17&4294967295|C>>>15),C=R+(S^D&(V^S))+N[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(V^R&(D^V))+N[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=V+(D^S&(R^D))+N[9]+2336552879&4294967295,V=S+(C<<12&4294967295|C>>>20),C=D+(R^V&(S^R))+N[10]+4294925233&4294967295,D=V+(C<<17&4294967295|C>>>15),C=R+(S^D&(V^S))+N[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(V^R&(D^V))+N[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=V+(D^S&(R^D))+N[13]+4254626195&4294967295,V=S+(C<<12&4294967295|C>>>20),C=D+(R^V&(S^R))+N[14]+2792965006&4294967295,D=V+(C<<17&4294967295|C>>>15),C=R+(S^D&(V^S))+N[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(D^V&(R^D))+N[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=V+(R^D&(S^R))+N[6]+3225465664&4294967295,V=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(V^S))+N[11]+643717713&4294967295,D=V+(C<<14&4294967295|C>>>18),C=R+(V^S&(D^V))+N[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^V&(R^D))+N[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=V+(R^D&(S^R))+N[10]+38016083&4294967295,V=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(V^S))+N[15]+3634488961&4294967295,D=V+(C<<14&4294967295|C>>>18),C=R+(V^S&(D^V))+N[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^V&(R^D))+N[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=V+(R^D&(S^R))+N[14]+3275163606&4294967295,V=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(V^S))+N[3]+4107603335&4294967295,D=V+(C<<14&4294967295|C>>>18),C=R+(V^S&(D^V))+N[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^V&(R^D))+N[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=V+(R^D&(S^R))+N[2]+4243563512&4294967295,V=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(V^S))+N[7]+1735328473&4294967295,D=V+(C<<14&4294967295|C>>>18),C=R+(V^S&(D^V))+N[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(R^D^V)+N[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=V+(S^R^D)+N[8]+2272392833&4294967295,V=S+(C<<11&4294967295|C>>>21),C=D+(V^S^R)+N[11]+1839030562&4294967295,D=V+(C<<16&4294967295|C>>>16),C=R+(D^V^S)+N[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^V)+N[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=V+(S^R^D)+N[4]+1272893353&4294967295,V=S+(C<<11&4294967295|C>>>21),C=D+(V^S^R)+N[7]+4139469664&4294967295,D=V+(C<<16&4294967295|C>>>16),C=R+(D^V^S)+N[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^V)+N[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=V+(S^R^D)+N[0]+3936430074&4294967295,V=S+(C<<11&4294967295|C>>>21),C=D+(V^S^R)+N[3]+3572445317&4294967295,D=V+(C<<16&4294967295|C>>>16),C=R+(D^V^S)+N[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^V)+N[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=V+(S^R^D)+N[12]+3873151461&4294967295,V=S+(C<<11&4294967295|C>>>21),C=D+(V^S^R)+N[15]+530742520&4294967295,D=V+(C<<16&4294967295|C>>>16),C=R+(D^V^S)+N[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(D^(R|~V))+N[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=V+(R^(S|~D))+N[7]+1126891415&4294967295,V=S+(C<<10&4294967295|C>>>22),C=D+(S^(V|~R))+N[14]+2878612391&4294967295,D=V+(C<<15&4294967295|C>>>17),C=R+(V^(D|~S))+N[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~V))+N[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=V+(R^(S|~D))+N[3]+2399980690&4294967295,V=S+(C<<10&4294967295|C>>>22),C=D+(S^(V|~R))+N[10]+4293915773&4294967295,D=V+(C<<15&4294967295|C>>>17),C=R+(V^(D|~S))+N[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~V))+N[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=V+(R^(S|~D))+N[15]+4264355552&4294967295,V=S+(C<<10&4294967295|C>>>22),C=D+(S^(V|~R))+N[6]+2734768916&4294967295,D=V+(C<<15&4294967295|C>>>17),C=R+(V^(D|~S))+N[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~V))+N[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=V+(R^(S|~D))+N[11]+3174756917&4294967295,V=S+(C<<10&4294967295|C>>>22),C=D+(S^(V|~R))+N[2]+718787259&4294967295,D=V+(C<<15&4294967295|C>>>17),C=R+(V^(D|~S))+N[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+D&4294967295,k.g[3]=k.g[3]+V&4294967295}i.prototype.u=function(k,S){S===void 0&&(S=k.length);for(var R=S-this.blockSize,N=this.B,D=this.h,V=0;V<S;){if(D==0)for(;V<=R;)o(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<S;)if(N[D++]=k.charCodeAt(V++),D==this.blockSize){o(this,N),D=0;break}}else for(;V<S;)if(N[D++]=k[V++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=S},i.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;var R=8*this.o;for(S=k.length-8;S<k.length;++S)k[S]=R&255,R/=256;for(this.u(k),k=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)k[R++]=this.g[S]>>>N&255;return k};function l(k,S){var R=m;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=S(k)}function h(k,S){this.h=S;for(var R=[],N=!0,D=k.length-1;0<=D;D--){var V=k[D]|0;N&&V==S||(R[D]=V,N=!1)}this.g=R}var m={};function g(k){return-128<=k&&128>k?l(k,function(S){return new h([S|0],0>S?-1:0)}):new h([k|0],0>k?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return x;if(0>k)return B(v(-k));for(var S=[],R=1,N=0;k>=R;N++)S[N]=k/R|0,R*=4294967296;return new h(S,0)}function T(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return B(T(k.substring(1),S));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(S,8)),N=x,D=0;D<k.length;D+=8){var V=Math.min(8,k.length-D),C=parseInt(k.substring(D,D+V),S);8>V?(V=v(Math.pow(S,V)),N=N.j(V).add(v(C))):(N=N.j(R),N=N.add(v(C)))}return N}var x=g(0),I=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-B(this).m();for(var k=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);k+=(0<=N?N:4294967296+N)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if($(this))return"0";if(Y(this))return"-"+B(this).toString(k);for(var S=v(Math.pow(k,6)),R=this,N="";;){var D=Ae(R,S).g;R=fe(R,D.j(S));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(k);if(R=D,$(R))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},r.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function $(k){if(k.h!=0)return!1;for(var S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function Y(k){return k.h==-1}r.l=function(k){return k=fe(this,k),Y(k)?-1:$(k)?0:1};function B(k){for(var S=k.g.length,R=[],N=0;N<S;N++)R[N]=~k.g[N];return new h(R,~k.h).add(I)}r.abs=function(){return Y(this)?B(this):this},r.add=function(k){for(var S=Math.max(this.g.length,k.g.length),R=[],N=0,D=0;D<=S;D++){var V=N+(this.i(D)&65535)+(k.i(D)&65535),C=(V>>>16)+(this.i(D)>>>16)+(k.i(D)>>>16);N=C>>>16,V&=65535,C&=65535,R[D]=C<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function fe(k,S){return k.add(B(S))}r.j=function(k){if($(this)||$(k))return x;if(Y(this))return Y(k)?B(this).j(B(k)):B(B(this).j(k));if(Y(k))return B(this.j(B(k)));if(0>this.l(U)&&0>k.l(U))return v(this.m()*k.m());for(var S=this.g.length+k.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<k.g.length;D++){var V=this.i(N)>>>16,C=this.i(N)&65535,st=k.i(D)>>>16,kt=k.i(D)&65535;R[2*N+2*D]+=C*kt,me(R,2*N+2*D),R[2*N+2*D+1]+=V*kt,me(R,2*N+2*D+1),R[2*N+2*D+1]+=C*st,me(R,2*N+2*D+1),R[2*N+2*D+2]+=V*st,me(R,2*N+2*D+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new h(R,0)};function me(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function ge(k,S){this.g=k,this.h=S}function Ae(k,S){if($(S))throw Error("division by zero");if($(k))return new ge(x,x);if(Y(k))return S=Ae(B(k),S),new ge(B(S.g),B(S.h));if(Y(S))return S=Ae(k,B(S)),new ge(B(S.g),S.h);if(30<k.g.length){if(Y(k)||Y(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,N=S;0>=N.l(k);)R=Oe(R),N=Oe(N);var D=ke(R,1),V=ke(N,1);for(N=ke(N,2),R=ke(R,2);!$(N);){var C=V.add(N);0>=C.l(k)&&(D=D.add(R),V=C),N=ke(N,1),R=ke(R,1)}return S=fe(k,D.j(S)),new ge(D,S)}for(D=x;0<=k.l(S);){for(R=Math.max(1,Math.floor(k.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=v(R),C=V.j(S);Y(C)||0<C.l(k);)R-=N,V=v(R),C=V.j(S);$(V)&&(V=I),D=D.add(V),k=fe(k,C)}return new ge(D,k)}r.A=function(k){return Ae(this,k).h},r.and=function(k){for(var S=Math.max(this.g.length,k.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&k.i(N);return new h(R,this.h&k.h)},r.or=function(k){for(var S=Math.max(this.g.length,k.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|k.i(N);return new h(R,this.h|k.h)},r.xor=function(k){for(var S=Math.max(this.g.length,k.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^k.i(N);return new h(R,this.h^k.h)};function Oe(k){for(var S=k.g.length+1,R=[],N=0;N<S;N++)R[N]=k.i(N)<<1|k.i(N-1)>>>31;return new h(R,k.h)}function ke(k,S){var R=S>>5;S%=32;for(var N=k.g.length-R,D=[],V=0;V<N;V++)D[V]=0<S?k.i(V+R)>>>S|k.i(V+R+1)<<32-S:k.i(V+R);return new h(D,k.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,wv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=T,bs=h}).apply(typeof Vg<"u"?Vg:typeof self<"u"?self:typeof window<"u"?window:{});var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ev,Ma,Tv,ju,bd,Iv,Sv,xv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,y){return u==Array.prototype||u==Object.prototype||(u[f]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nu=="object"&&Nu];for(var f=0;f<u.length;++f){var y=u[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,f){if(f)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in y))break e;y=y[M]}u=u[u.length-1],E=y[u],f=f(E),f!=E&&f!=null&&e(y,u,{configurable:!0,writable:!0,value:f})}}function l(u,f){u instanceof String&&(u+="");var y=0,E=!1,M={next:function(){if(!E&&y<u.length){var z=y++;return{value:f(z,u[z]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function v(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function T(u,f,y){return u.call.apply(u.bind,arguments)}function x(u,f,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(f,M)}}return function(){return u.apply(f,arguments)}}function I(u,f,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:x,I.apply(null,arguments)}function U(u,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,f){function y(){}y.prototype=f.prototype,u.aa=f.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,M,z){for(var ee=Array(arguments.length-2),He=2;He<arguments.length;He++)ee[He-2]=arguments[He];return f.prototype[M].apply(E,ee)}}function Y(u){const f=u.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=u[E];return y}return[]}function B(u,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=u.length||0,z=E.length||0;u.length=M+z;for(let ee=0;ee<z;ee++)u[M+ee]=E[ee]}else u.push(E)}}class fe{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function me(u){return/^[\s\xa0]*$/.test(u)}function ge(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function Ae(u){return Ae[" "](u),u}Ae[" "]=function(){};var Oe=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function ke(u,f,y){for(const E in u)f.call(y,u[E],E,u)}function k(u,f){for(const y in u)f.call(void 0,u[y],y,u)}function S(u){const f={};for(const y in u)f[y]=u[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,f){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)u[y]=E[y];for(let z=0;z<R.length;z++)y=R[z],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var f=1;u=u.split(":");const y=[];for(;0<f&&u.length;)y.push(u.shift()),f--;return u.length&&y.push(u.join(":")),y}function V(u){m.setTimeout(()=>{throw u},0)}function C(){var u=le;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class st{constructor(){this.h=this.g=null}add(f,y){const E=kt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new fe(()=>new Et,u=>u.reset());class Et{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,K=!1,le=new st,te=()=>{const u=m.Promise.resolve(void 0);$e=()=>{u.then(O)}};var O=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(y){V(y)}var f=kt;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}K=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var de=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return u})();function we(u,f){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(Oe){e:{try{Ae(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else y=="mouseover"?f=u.fromElement:y=="mouseout"&&(f=u.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&we.aa.h.call(this)}}$(we,he);var Pe={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),De=0;function ze(u,f,y,E,M){this.listener=u,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=M,this.key=++De,this.da=this.fa=!1}function Qe(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function kn(u){this.src=u,this.g={},this.h=0}kn.prototype.add=function(u,f,y,E,M){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var ee=pt(u,f,E,M);return-1<ee?(f=u[ee],y||(f.fa=!1)):(f=new ze(f,this.src,z,!!E,M),f.fa=y,u.push(f)),f};function ir(u,f){var y=f.type;if(y in u.g){var E=u.g[y],M=Array.prototype.indexOf.call(E,f,void 0),z;(z=0<=M)&&Array.prototype.splice.call(E,M,1),z&&(Qe(f),u.g[y].length==0&&(delete u.g[y],u.h--))}}function pt(u,f,y,E){for(var M=0;M<u.length;++M){var z=u[M];if(!z.da&&z.listener==f&&z.capture==!!y&&z.ha==E)return M}return-1}var or="closure_lm_"+(1e6*Math.random()|0),mn={};function Gs(u,f,y,E,M){if(Array.isArray(f)){for(var z=0;z<f.length;z++)Gs(u,f[z],y,E,M);return null}return y=Yt(y),u&&u[Me]?u.K(f,y,v(E)?!!E.capture:!1,M):Jr(u,f,y,!1,E,M)}function Jr(u,f,y,E,M,z){if(!f)throw Error("Invalid event type");var ee=v(M)?!!M.capture:!!M,He=qe(u);if(He||(u[or]=He=new kn(u)),y=He.add(f,y,E,ee,z),y.proxy)return y;if(E=Ri(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)de||(M=ee),M===void 0&&(M=!1),u.addEventListener(f.toString(),E,M);else if(u.attachEvent)u.attachEvent(G(f.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ri(){function u(y){return f.call(u.src,u.listener,y)}const f=xe;return u}function xr(u,f,y,E,M){if(Array.isArray(f))for(var z=0;z<f.length;z++)xr(u,f[z],y,E,M);else E=v(E)?!!E.capture:!!E,y=Yt(y),u&&u[Me]?(u=u.i,f=String(f).toString(),f in u.g&&(z=u.g[f],y=pt(z,y,E,M),-1<y&&(Qe(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[f],u.h--)))):u&&(u=qe(u))&&(f=u.g[f.toString()],u=-1,f&&(u=pt(f,y,E,M)),(y=-1<u?f[u]:null)&&Cn(y))}function Cn(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Me])ir(f.i,u);else{var y=u.type,E=u.proxy;f.removeEventListener?f.removeEventListener(y,E,u.capture):f.detachEvent?f.detachEvent(G(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=qe(f))?(ir(y,u),y.h==0&&(y.src=null,f[or]=null)):Qe(u)}}}function G(u){return u in mn?mn[u]:mn[u]="on"+u}function xe(u,f){if(u.da)u=!0;else{f=new we(f,this);var y=u.listener,E=u.ha||u.src;u.fa&&Cn(u),u=y.call(E,f)}return u}function qe(u){return u=u[or],u instanceof kn?u:null}var gn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yt(u){return typeof u=="function"?u:(u[gn]||(u[gn]=function(f){return u.handleEvent(f)}),u[gn])}function lt(){H.call(this),this.i=new kn(this),this.M=this,this.F=null}$(lt,H),lt.prototype[Me]=!0,lt.prototype.removeEventListener=function(u,f,y,E){xr(this,u,f,y,E)};function Xe(u,f){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=f.type||f,typeof f=="string")f=new he(f,u);else if(f instanceof he)f.target=f.target||u;else{var M=f;f=new he(E,u),N(f,M)}if(M=!0,y)for(var z=y.length-1;0<=z;z--){var ee=f.g=y[z];M=Mt(ee,E,!0,f)&&M}if(ee=f.g=u,M=Mt(ee,E,!0,f)&&M,M=Mt(ee,E,!1,f)&&M,y)for(z=0;z<y.length;z++)ee=f.g=y[z],M=Mt(ee,E,!1,f)&&M}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var y=u.g[f],E=0;E<y.length;E++)Qe(y[E]);delete u.g[f],u.h--}}this.F=null},lt.prototype.K=function(u,f,y,E){return this.i.add(String(u),f,!1,y,E)},lt.prototype.L=function(u,f,y,E){return this.i.add(String(u),f,!0,y,E)};function Mt(u,f,y,E){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,z=0;z<f.length;++z){var ee=f[z];if(ee&&!ee.da&&ee.capture==y){var He=ee.listener,It=ee.ha||ee.src;ee.fa&&ir(u.i,ee),M=He.call(It,E)!==!1&&M}}return M&&!E.defaultPrevented}function Rn(u,f,y){if(typeof u=="function")y&&(u=I(u,y));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(u,f||0)}function Tt(u){u.g=Rn(()=>{u.g=null,u.i&&(u.i=!1,Tt(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class sn extends H{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ar(u){H.call(this),this.h=u,this.g={}}$(Ar,H);var Wo=[];function Go(u){ke(u.g,function(f,y){this.g.hasOwnProperty(y)&&Cn(f)},u),u.g={}}Ar.prototype.N=function(){Ar.aa.N.call(this),Go(this)},Ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ko=m.JSON.stringify,Qo=m.JSON.parse,Xo=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function Ks(){}Ks.prototype.h=null;function Pi(u){return u.h||(u.h=u.i())}function Ni(){}var Pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ar(){he.call(this,"d")}$(ar,he);function bi(){he.call(this,"c")}$(bi,he);var lr={},Yo=null;function Qs(){return Yo=Yo||new lt}lr.La="serverreachability";function Jo(u){he.call(this,lr.La,u)}$(Jo,he);function kr(u){const f=Qs();Xe(f,new Jo(f))}lr.STAT_EVENT="statevent";function Zo(u,f){he.call(this,lr.STAT_EVENT,u),this.stat=f}$(Zo,he);function ct(u){const f=Qs();Xe(f,new Zo(f,u))}lr.Ma="timingevent";function Di(u,f){he.call(this,lr.Ma,u),this.size=f}$(Di,he);function Un(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},f)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function Ys(u,f,y,E,M,z){u.info(function(){if(u.g)if(z)for(var ee="",He=z.split("&"),It=0;It<He.length;It++){var Le=He[It].split("=");if(1<Le.length){var Ct=Le[0];Le=Le[1];var mt=Ct.split("_");ee=2<=mt.length&&mt[1]=="type"?ee+(Ct+"="+Le+"&"):ee+(Ct+"=redacted&")}}else ee=null;else ee=z;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+f+`
`+y+`
`+ee})}function Vi(u,f,y,E,M,z,ee){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+f+`
`+y+`
`+z+" "+ee})}function zn(u,f,y,E){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+Lc(u,y)+(E?" "+E:"")})}function ea(u,f){u.info(function(){return"TIMEOUT: "+f})}Xs.prototype.info=function(){};function Lc(u,f){if(!u.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return Ko(y)}catch{return f}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bn;function Js(){}$(Js,Ks),Js.prototype.g=function(){return new XMLHttpRequest},Js.prototype.i=function(){return{}},Bn=new Js;function $n(u,f,y,E){this.j=u,this.i=f,this.l=y,this.R=E||1,this.U=new Ar(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yl}function yl(){this.i=null,this.g="",this.h=!1}var ta={},Mi={};function Li(u,f,y){u.L=1,u.v=rs(vn(f)),u.m=y,u.P=!0,na(u,null)}function na(u,f){u.F=Date.now(),Ye(u),u.A=vn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),is(y.i,"t",E),u.C=0,y=u.j.J,u.h=new yl,u.g=Ol(u.j,y?f:null,!u.m),0<u.O&&(u.M=new sn(I(u.Y,u,u.g),u.O)),f=u.U,y=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Wo[0]=M.toString()),M=Wo);for(var z=0;z<M.length;z++){var ee=Gs(y,M[z],E||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),kr(),Ys(u.i,u.u,u.A,u.l,u.R,u.m)}$n.prototype.ca=function(u){u=u.target;const f=this.M;f&&an(u)==3?f.j():this.Y(u)},$n.prototype.Y=function(u){try{if(u==this.g)e:{const mt=an(this.g);var f=this.g.Ba();const Dn=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||la(this.g)))){this.J||mt!=4||f==7||(f==8||0>=Dn?kr(3):kr(2)),Zs(this);var y=this.g.Z();this.X=y;t:if(vl(this)){var E=la(this.g);u="";var M=E.length,z=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),Zr(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,u+=this.h.i.decode(E[f],{stream:!(z&&f==M-1)});E.length=0,this.h.g+=u,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,Vi(this.i,this.u,this.A,this.l,this.R,mt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var He,It=this.g;if((He=It.g?It.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!me(He)){var Le=He;break t}}Le=null}if(y=Le)zn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,y);else{this.o=!1,this.s=3,ct(12),Nn(this),Zr(this);break e}}if(this.P){y=!0;let wn;for(;!this.J&&this.C<ee.length;)if(wn=jc(this,ee),wn==Mi){mt==4&&(this.s=4,ct(14),y=!1),zn(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==ta){this.s=4,ct(15),zn(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else zn(this.i,this.l,wn,null),ra(this,wn);if(vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||ee.length!=0||this.h.h||(this.s=1,ct(16),y=!1),this.o=this.o&&y,!y)zn(this.i,this.l,ee,"[Invalid Chunked Response]"),Nn(this),Zr(this);else if(0<ee.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ca(Ct),Ct.M=!0,ct(11))}}else zn(this.i,this.l,ee,null),ra(this,ee);mt==4&&Nn(this),this.o&&!this.J&&(mt==4?Ki(this.j,this):(this.o=!1,Ye(this)))}else $i(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Nn(this),Zr(this)}}}catch{}finally{}};function vl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jc(u,f){var y=u.C,E=f.indexOf(`
`,y);return E==-1?Mi:(y=Number(f.substring(y,E)),isNaN(y)?ta:(E+=1,E+y>f.length?Mi:(f=f.slice(E,E+y),u.C=E+y,f)))}$n.prototype.cancel=function(){this.J=!0,Nn(this)};function Ye(u){u.S=Date.now()+u.I,_l(u,u.I)}function _l(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Un(I(u.ba,u),f)}function Zs(u){u.B&&(m.clearTimeout(u.B),u.B=null)}$n.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ea(this.i,this.A),this.L!=2&&(kr(),ct(17)),Nn(this),this.s=2,Zr(this)):_l(this,this.S-u)};function Zr(u){u.j.G==0||u.J||Ki(u.j,u)}function Nn(u){Zs(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,Go(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function ra(u,f){try{var y=u.j;if(y.G!=0&&(y.g==u||Jt(y.h,u))){if(!u.K&&Jt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Gi(y),Kn(y);else break e;Wi(y),ct(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Un(I(y.Za,y),6e3));if(1>=El(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else br(y,11)}else if((u.K||y.g==u)&&Gi(y),!me(f))for(M=y.Da.g.parse(f),f=0;f<M.length;f++){let Le=M[f];if(y.T=Le[0],Le=Le[1],y.G==2)if(Le[0]=="c"){y.K=Le[1],y.ia=Le[2];const Ct=Le[3];Ct!=null&&(y.la=Ct,y.j.info("VER="+y.la));const mt=Le[4];mt!=null&&(y.Aa=mt,y.j.info("SVER="+y.Aa));const Dn=Le[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(E=1.5*Dn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const wn=u.g;if(wn){const oi=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var z=E.h;z.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(sa(z,z.h),z.h=null))}if(E.D){const Xi=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Xi&&(E.ya=Xi,Ke(E.I,E.D,Xi))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var ee=u;if(E.qa=Vl(E,E.J?E.ia:null,E.W),ee.K){Tl(E.h,ee);var He=ee,It=E.L;It&&(He.I=It),He.B&&(Zs(He),Ye(He)),E.g=ee}else ii(E);0<y.i.length&&dr(y)}else Le[0]!="stop"&&Le[0]!="close"||br(y,7);else y.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?br(y,7):jt(y):Le[0]!="noop"&&y.l&&y.l.ta(Le),y.v=0)}}kr(4)}catch{}}var wl=class{constructor(u,f){this.g=u,this.map=f}};function ei(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function El(u){return u.h?1:u.g?u.g.size:0}function Jt(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function sa(u,f){u.g?u.g.add(f):u.h=f}function Tl(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}ei.prototype.cancel=function(){if(this.i=Il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Il(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const y of u.g.values())f=f.concat(y.D);return f}return Y(u.i)}function ji(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var f=[],y=u.length,E=0;E<y;E++)f.push(u[E]);return f}f=[],y=0;for(E in u)f[y++]=u[E];return f}function Fi(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var f=[];u=u.length;for(var y=0;y<u;y++)f.push(y);return f}f=[],y=0;for(const E in u)f[y++]=E;return f}}}function es(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var y=Fi(u),E=ji(u),M=E.length,z=0;z<M;z++)f.call(void 0,E[z],y&&y[z],u)}var ti=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fc(u,f){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),M=null;if(0<=E){var z=u[y].substring(0,E);M=u[y].substring(E+1)}else z=u[y];f(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Cr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Cr){this.h=u.h,ni(this,u.j),this.o=u.o,this.g=u.g,ts(this,u.s),this.l=u.l;var f=u.i,y=new ur;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),ns(this,y),this.m=u.m}else u&&(f=String(u).match(ti))?(this.h=!1,ni(this,f[1]||"",!0),this.o=Ve(f[2]||""),this.g=Ve(f[3]||"",!0),ts(this,f[4]),this.l=Ve(f[5]||"",!0),ns(this,f[6]||"",!0),this.m=Ve(f[7]||"")):(this.h=!1,this.i=new ur(null,this.h))}Cr.prototype.toString=function(){var u=[],f=this.j;f&&u.push(ss(f,Ui,!0),":");var y=this.g;return(y||f=="file")&&(u.push("//"),(f=this.o)&&u.push(ss(f,Ui,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ss(y,y.charAt(0)=="/"?Al:xl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ss(y,ia)),u.join("")};function vn(u){return new Cr(u)}function ni(u,f,y){u.j=y?Ve(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function ts(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function ns(u,f,y){f instanceof ur?(u.i=f,cr(u.i,u.h)):(y||(f=ss(f,kl)),u.i=new ur(f,u.h))}function Ke(u,f,y){u.i.set(f,y)}function rs(u){return Ke(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ve(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ss(u,f,y){return typeof u=="string"?(u=encodeURI(u).replace(f,Sl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Sl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ui=/[#\/\?@]/g,xl=/[#\?:]/g,Al=/[#\?]/g,kl=/[#\?@]/g,ia=/#/g;function ur(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function Lt(u){u.g||(u.g=new Map,u.h=0,u.i&&Fc(u.i,function(f,y){u.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=ur.prototype,r.add=function(u,f){Lt(this),this.i=null,u=bn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(f),this.h+=1,this};function qn(u,f){Lt(u),f=bn(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Hn(u,f){return Lt(u),f=bn(u,f),u.g.has(f)}r.forEach=function(u,f){Lt(this),this.g.forEach(function(y,E){y.forEach(function(M){u.call(f,M,E,this)},this)},this)},r.na=function(){Lt(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const M=u[E];for(let z=0;z<M.length;z++)y.push(f[E])}return y},r.V=function(u){Lt(this);let f=[];if(typeof u=="string")Hn(this,u)&&(f=f.concat(this.g.get(bn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)f=f.concat(u[y])}return f},r.set=function(u,f){return Lt(this),this.i=null,u=bn(this,u),Hn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},r.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function is(u,f,y){qn(u,f),0<y.length&&(u.i=null,u.g.set(bn(u,f),Y(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const z=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var M=z;ee[E]!==""&&(M+="="+encodeURIComponent(String(ee[E]))),u.push(M)}}return this.i=u.join("&")};function bn(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function cr(u,f){f&&!u.j&&(Lt(u),u.i=null,u.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(qn(this,E),is(this,M,y))},u)),u.j=f}function Uc(u,f){const y=new Xs;if(m.Image){const E=new Image;E.onload=U(on,y,"TestLoadImage: loaded",!0,f,E),E.onerror=U(on,y,"TestLoadImage: error",!1,f,E),E.onabort=U(on,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=U(on,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else f(!1)}function Cl(u,f){const y=new Xs,E=new AbortController,M=setTimeout(()=>{E.abort(),on(y,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:E.signal}).then(z=>{clearTimeout(M),z.ok?on(y,"TestPingServer: ok",!0,f):on(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),on(y,"TestPingServer: error",!1,f)})}function on(u,f,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function zc(){this.g=new Xo}function Rl(u,f,y){const E=y||"";try{es(u,function(M,z){let ee=M;v(M)&&(ee=Ko(M)),f.push(E+z+"="+encodeURIComponent(ee))})}catch(M){throw f.push(E+"type="+encodeURIComponent("_badmap")),M}}function Rr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(Rr,Ks),Rr.prototype.g=function(){return new ri(this.l,this.j)},Rr.prototype.i=(function(u){return function(){return u}})({});function ri(u,f){lt.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(ri,lt),r=ri.prototype,r.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Gn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Wn(this):Gn(this),this.readyState==3&&Pl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Wn(this))},r.Qa=function(u){this.g&&(this.response=u,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Gn(u)}r.setRequestHeader=function(u,f){this.u.append(u,f)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=f.next();return u.join(`\r
`)};function Gn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Pr(u){let f="";return ke(u,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function os(u,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Pr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Ke(u,f,y))}function nt(u){lt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(nt,lt);var Bc=/^https?$/i,oa=["POST","PUT"];r=nt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bn.g(),this.v=this.o?Pi(this.o):Pi(Bn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(z){si(this,z);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(oa,f,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ee]of y)this.g.setRequestHeader(z,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bi(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){si(this,z)}};function si(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,zi(u),_n(u)}function zi(u){u.A||(u.A=!0,Xe(u,"complete"),Xe(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Xe(this,"complete"),Xe(this,"abort"),_n(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_n(this,!0)),nt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},r.bb=function(){aa(this)};function aa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||an(u)!=4||u.Z()!=2)){if(u.u&&an(u)==4)Rn(u.Ea,0,u);else if(Xe(u,"readystatechange"),an(u)==4){u.h=!1;try{const ee=u.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=ee===0){var M=String(u.D).match(ti)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),E=!Bc.test(M?M.toLowerCase():"")}y=E}if(y)Xe(u,"complete"),Xe(u,"success");else{u.m=6;try{var z=2<an(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",zi(u)}}finally{_n(u)}}}}function _n(u,f){if(u.g){Bi(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||Xe(u,"ready");try{y.onreadystatechange=E}catch{}}}function Bi(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function an(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),Qo(f)}};function la(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function $i(u){const f={};u=(u.g&&2<=an(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(me(u[E]))continue;var y=D(u[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=f[M]||[];f[M]=z,z.push(y)}k(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hr(u,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||f}function ua(u){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hr("baseRetryDelayMs",5e3,u),this.cb=hr("retryDelaySeedMs",1e4,u),this.Wa=hr("forwardChannelMaxRetries",2,u),this.wa=hr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ei(u&&u.concurrentRequestLimit),this.Da=new zc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ua.prototype,r.la=8,r.G=1,r.connect=function(u,f,y,E){ct(0),this.W=u,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Vl(this,null,this.W),dr(this)};function jt(u){if(qi(u),u.G==3){var f=u.U++,y=vn(u.I);if(Ke(y,"SID",u.K),Ke(y,"RID",f),Ke(y,"TYPE","terminate"),Nr(u,y),f=new $n(u,u.j,f),f.L=2,f.v=rs(vn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Ol(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ye(f)}Dl(u)}function Kn(u){u.g&&(ca(u),u.g.cancel(),u.g=null)}function qi(u){Kn(u),u.u&&(m.clearTimeout(u.u),u.u=null),Gi(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function dr(u){if(!yn(u.h)&&!u.s){u.s=!0;var f=u.Ga;$e||te(),K||($e(),K=!0),le.add(f,u),u.B=0}}function $c(u,f){return El(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Un(I(u.Ga,u,f),bl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new $n(this,this.j,u);let z=this.o;if(this.S&&(z?(z=S(z),N(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=as(this,M,f),y=vn(this.I),Ke(y,"RID",u),Ke(y,"CVER",22),this.D&&Ke(y,"X-HTTP-Session-Id",this.D),Nr(this,y),z&&(this.O?f="headers="+encodeURIComponent(String(Pr(z)))+"&"+f:this.m&&os(y,this.m,z)),sa(this.h,M),this.Ua&&Ke(y,"TYPE","init"),this.P?(Ke(y,"$req",f),Ke(y,"SID","null"),M.T=!0,Li(M,y,null)):Li(M,y,f),this.G=2}}else this.G==3&&(u?Hi(this,u):this.i.length==0||yn(this.h)||Hi(this))};function Hi(u,f){var y;f?y=f.l:y=u.U++;const E=vn(u.I);Ke(E,"SID",u.K),Ke(E,"RID",y),Ke(E,"AID",u.T),Nr(u,E),u.m&&u.o&&os(E,u.m,u.o),y=new $n(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),f&&(u.i=f.D.concat(u.i)),f=as(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sa(u.h,y),Li(y,E,f)}function Nr(u,f){u.H&&ke(u.H,function(y,E){Ke(f,E,y)}),u.l&&es({},function(y,E){Ke(f,E,y)})}function as(u,f,y){y=Math.min(u.i.length,y);var E=u.l?I(u.l.Na,u.l,u):null;e:{var M=u.i;let z=-1;for(;;){const ee=["count="+y];z==-1?0<y?(z=M[0].g,ee.push("ofs="+z)):z=0:ee.push("ofs="+z);let He=!0;for(let It=0;It<y;It++){let Le=M[It].g;const Ct=M[It].map;if(Le-=z,0>Le)z=Math.max(0,M[It].g-100),He=!1;else try{Rl(Ct,ee,"req"+Le+"_")}catch{E&&E(Ct)}}if(He){E=ee.join("&");break e}}}return u=u.i.splice(0,y),f.D=u,E}function ii(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;$e||te(),K||($e(),K=!0),le.add(f,u),u.v=0}}function Wi(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Un(I(u.Fa,u),bl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Un(I(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Kn(this),Nl(this))};function ca(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function Nl(u){u.g=new $n(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=vn(u.qa);Ke(f,"RID","rpc"),Ke(f,"SID",u.K),Ke(f,"AID",u.T),Ke(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ke(f,"TO",u.ja),Ke(f,"TYPE","xmlhttp"),Nr(u,f),u.m&&u.o&&os(f,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=rs(vn(f)),y.m=null,y.P=!0,na(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Kn(this),Wi(this),ct(19))};function Gi(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function Ki(u,f){var y=null;if(u.g==f){Gi(u),ca(u),u.g=null;var E=2}else if(Jt(u.h,f))y=f.D,Tl(u.h,f),E=1;else return;if(u.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var M=u.B;E=Qs(),Xe(E,new Di(E,y)),dr(u)}else ii(u);else if(M=f.s,M==3||M==0&&0<f.X||!(E==1&&$c(u,f)||E==2&&Wi(u)))switch(y&&0<y.length&&(f=u.h,f.i=f.i.concat(y)),M){case 1:br(u,5);break;case 4:br(u,10);break;case 3:br(u,6);break;default:br(u,2)}}}function bl(u,f){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*f}function br(u,f){if(u.j.info("Error code "+f),f==2){var y=I(u.fb,u),E=u.Xa;const M=!E;E=new Cr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ni(E,"https"),rs(E),M?Uc(E.toString(),y):Cl(E.toString(),y)}else ct(2);u.G=0,u.l&&u.l.sa(f),Dl(u),qi(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Dl(u){if(u.G=0,u.ka=[],u.l){const f=Il(u.h);(f.length!=0||u.i.length!=0)&&(B(u.ka,f),B(u.ka,u.i),u.h.i.length=0,Y(u.i),u.i.length=0),u.l.ra()}}function Vl(u,f,y){var E=y instanceof Cr?vn(y):new Cr(y);if(E.g!="")f&&(E.g=f+"."+E.g),ts(E,E.s);else{var M=m.location;E=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var z=new Cr(null);E&&ni(z,E),f&&(z.g=f),M&&ts(z,M),y&&(z.l=y),E=z}return y=u.D,f=u.ya,y&&f&&Ke(E,y,f),Ke(E,"VER",u.la),Nr(u,E),E}function Ol(u,f,y){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new nt(new Rr({eb:y})):new nt(u.pa),f.Ha(u.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ha(){}r=ha.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Qi(){}Qi.prototype.g=function(u,f){return new Zt(u,f)};function Zt(u,f){lt.call(this),this.g=new ua(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!me(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!me(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new fr(this)}$(Zt,lt),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){jt(this.g)},Zt.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Ko(u),u=y);f.i.push(new wl(f.Ya++,u)),f.G==3&&dr(f)},Zt.prototype.N=function(){this.g.l=null,delete this.j,jt(this.g),delete this.g,Zt.aa.N.call(this)};function Ml(u){ar.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const y in f){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}$(Ml,ar);function Ll(){bi.call(this),this.status=1}$(Ll,bi);function fr(u){this.g=u}$(fr,ha),fr.prototype.ua=function(){Xe(this.g,"a")},fr.prototype.ta=function(u){Xe(this.g,new Ml(u))},fr.prototype.sa=function(u){Xe(this.g,new Ll)},fr.prototype.ra=function(){Xe(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,xv=function(){return new Qi},Sv=function(){return Qs()},Iv=lr,bd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,ju=Oi,gl.COMPLETE="complete",Tv=gl,Ni.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ma=Ni,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Ev=nt}).apply(typeof Nu<"u"?Nu:typeof self<"u"?self:typeof window<"u"?window:{});const Og="@firebase/firestore",Mg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new sf("@firebase/firestore");function vo(){return Si.logLevel}function se(r,...e){if(Si.logLevel<=Ne.DEBUG){const t=e.map(lf);Si.debug(`Firestore (${Fo}): ${r}`,...t)}}function Wr(r,...e){if(Si.logLevel<=Ne.ERROR){const t=e.map(lf);Si.error(`Firestore (${Fo}): ${r}`,...t)}}function Ms(r,...e){if(Si.logLevel<=Ne.WARN){const t=e.map(lf);Si.warn(`Firestore (${Fo}): ${r}`,...t)}}function lf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Av(r,i,t)}function Av(r,e,t){let i=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Wr(i),new Error(i)}function Fe(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||Av(e,o,i)}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Xr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Qt.UNAUTHENTICATED)))}shutdown(){}}class JE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ZE{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new qr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new qr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string",31837,{l:i}),new kv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Qt(e)}}class eT{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tT{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new eT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Lg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const i=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Lg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Lg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=rT(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ce(r,e){return r<e?-1:r>e?1:0}function Dd(r,e){let t=0;for(;t<r.length&&t<e.length;){const i=r.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ce(i,o);{const l=Cv(),h=sT(l.encode(jg(r,t)),l.encode(jg(e,t)));return h!==0?h:Ce(i,o)}}t+=i>65535?2:1}return Ce(r.length,e.length)}function jg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function sT(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ce(r[t],e[t]);return Ce(r.length,e.length)}function No(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="__name__";class vr{constructor(e,t,i){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ye(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=vr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const i=vr.isNumericId(e),o=vr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?vr.extractNumericId(e).compare(vr.extractNumericId(t)):Dd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bs.fromString(e.substring(4,e.length-2))}}class Ge extends vr{construct(e,t,i){return new Ge(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ne(q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const iT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends vr{construct(e,t,i){return new Bt(e,t,i)}static isValidIdentifier(e){return iT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fg}static keyField(){return new Bt([Fg])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ne(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(i+=m,o++):(l(),o++)}if(l(),h)throw new ne(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(t)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ge.fromString(e))}static fromName(e){return new pe(Ge.fromString(e).popFirst(5))}static empty(){return new pe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(r,e,t){if(!t)throw new ne(q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function oT(r,e,t,i){if(e===!0&&i===!0)throw new ne(q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ug(r){if(!pe.isDocumentKey(r))throw new ne(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function zg(r){if(pe.isDocumentKey(r))throw new ne(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Pv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function yc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ye(12329,{type:typeof r})}function rr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ne(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yc(r);throw new ne(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r,e){const t={typeString:r};return e&&(t.value=e),t}function sl(r,e){if(!Pv(r))throw new ne(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ne(q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=-62135596800,$g=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*$g);return new tt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bg)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$g}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(sl(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:_t("string",tt._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new tt(0,0))}static max(){return new Ee(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=-1;function aT(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new tt(t+1,0):new tt(t,i));return new Ls(o,pe.empty(),e)}function lT(r){return new Ls(r.readTime,r.key,Ga)}class Ls{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ls(Ee.min(),pe.empty(),Ga)}static max(){return new Ls(Ee.max(),pe.empty(),Ga)}}function uT(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:Ce(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(r){if(r.code!==q.FAILED_PRECONDITION||r.message!==cT)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,i)=>{t(e)}))}static reject(e){return new W(((t,i)=>{i(e)}))}static waitFor(e){return new W(((t,i)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next((o=>o?W.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new W(((i,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next((T=>{h[v]=T,++m,m===l&&i(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new W(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function dT(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}vc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=-1;function il(r){return r==null}function Xu(r){return r===0&&1/r==-1/0}function fT(r){return typeof r=="number"&&Number.isInteger(r)&&!Xu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="";function pT(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=qg(e)),e=mT(r.get(t),e);return qg(e)}function mT(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Nv:t+="";break;default:t+=l}}return t}function qg(r){return r+Nv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Hs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function bv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??zt.RED,this.left=o??zt.EMPTY,this.right=l??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new zt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return zt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wg(this.data.getIterator())}getIteratorFrom(e){return new Wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class Wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new xn([])}unionWith(e){let t=new At(Bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return No(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Dv("Invalid base64 string: "+l):l}})(e);return new $t(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new $t(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const gT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function js(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=gT.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(r.seconds),nanos:dt(r.nanos)}}function dt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Fs(r){return typeof r=="string"?$t.fromBase64String(r):$t.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="server_timestamp",Ov="__type__",Mv="__previous_value__",Lv="__local_write_time__";function hf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ov])===null||t===void 0?void 0:t.stringValue)===Vv}function _c(r){const e=r.mapValue.fields[Mv];return hf(e)?_c(e):e}function Ka(r){const e=js(r.mapValue.fields[Lv].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t,i,o,l,h,m,g,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=T}}const Yu="(default)";class Qa{constructor(e,t){this.projectId=e,this.database=t||Yu}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database===Yu}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="__type__",vT="__max__",Du={mapValue:{}},Fv="__vector__",Ju="value";function Us(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?hf(r)?4:wT(r)?9007199254740991:_T(r)?10:11:ye(28295,{value:r})}function Sr(r,e){if(r===e)return!0;const t=Us(r);if(t!==Us(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ka(r).isEqual(Ka(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=js(o.timestampValue),m=js(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Fs(o.bytesValue).isEqual(Fs(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=dt(o.doubleValue),m=dt(l.doubleValue);return h===m?Xu(h)===Xu(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return No(r.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(Hg(h)!==Hg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Sr(h[g],m[g])))return!1;return!0})(r,e);default:return ye(52216,{left:r})}}function Xa(r,e){return(r.values||[]).find((t=>Sr(t,e)))!==void 0}function bo(r,e){if(r===e)return 0;const t=Us(r),i=Us(e);if(t!==i)return Ce(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=dt(l.integerValue||l.doubleValue),g=dt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Gg(r.timestampValue,e.timestampValue);case 4:return Gg(Ka(r),Ka(e));case 5:return Dd(r.stringValue,e.stringValue);case 6:return(function(l,h){const m=Fs(l),g=Fs(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const T=Ce(m[v],g[v]);if(T!==0)return T}return Ce(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=Ce(dt(l.latitude),dt(h.latitude));return m!==0?m:Ce(dt(l.longitude),dt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Kg(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var m,g,v,T;const x=l.fields||{},I=h.fields||{},U=(m=x[Ju])===null||m===void 0?void 0:m.arrayValue,$=(g=I[Ju])===null||g===void 0?void 0:g.arrayValue,Y=Ce(((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0,((T=$==null?void 0:$.values)===null||T===void 0?void 0:T.length)||0);return Y!==0?Y:Kg(U,$)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Du.mapValue&&h===Du.mapValue)return 0;if(l===Du.mapValue)return 1;if(h===Du.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),v=h.fields||{},T=Object.keys(v);g.sort(),T.sort();for(let x=0;x<g.length&&x<T.length;++x){const I=Dd(g[x],T[x]);if(I!==0)return I;const U=bo(m[g[x]],v[T[x]]);if(U!==0)return U}return Ce(g.length,T.length)})(r.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function Gg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ce(r,e);const t=js(r),i=js(e),o=Ce(t.seconds,i.seconds);return o!==0?o:Ce(t.nanos,i.nanos)}function Kg(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=bo(t[o],i[o]);if(l)return l}return Ce(t.length,i.length)}function Do(r){return Vd(r)}function Vd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=js(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Fs(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Vd(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Vd(t.fields[h])}`;return o+"}"})(r.mapValue):ye(61005,{value:r})}function Fu(r){switch(Us(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_c(r);return e?16+Fu(e):16;case 5:return 2*r.stringValue.length;case 6:return Fs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Fu(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Hs(i.fields,((l,h)=>{o+=l.length+Fu(h)})),o})(r.mapValue);default:throw ye(13486,{value:r})}}function Qg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Od(r){return!!r&&"integerValue"in r}function df(r){return!!r&&"arrayValue"in r}function Xg(r){return!!r&&"nullValue"in r}function Yg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uu(r){return!!r&&"mapValue"in r}function _T(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[jv])===null||t===void 0?void 0:t.stringValue)===Fv}function Ua(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Hs(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ua(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return Object.assign({},r)}function wT(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===vT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=Bt.emptyPath(),i={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=m.popLast()}h?i[m.lastSegment()]=Ua(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Hs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new nn(Ua(this.value))}}function Uv(r){const e=[];return Hs(r.fields,((t,i)=>{const o=new Bt([t]);if(Uu(i)){const l=Uv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new xn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,i,o,l,h,m){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Vt(e,0,Ee.min(),Ee.min(),Ee.min(),nn.empty(),0)}static newFoundDocument(e,t,i,o){return new Vt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Vt(e,2,t,Ee.min(),Ee.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new Vt(e,3,t,Ee.min(),Ee.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.position=e,this.inclusive=t}}function Jg(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=bo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Zg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Sr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t="asc"){this.field=e,this.dir=t}}function ET(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{}class vt extends zv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new IT(e,t,i):t==="array-contains"?new AT(e,i):t==="in"?new kT(e,i):t==="not-in"?new CT(e,i):t==="array-contains-any"?new RT(e,i):new vt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ST(e,i):new xT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bo(t,this.value)):t!==null&&Us(this.value)===Us(t)&&this.matchesComparison(bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sr extends zv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new sr(e,t)}matches(e){return Bv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Bv(r){return r.op==="and"}function $v(r){return TT(r)&&Bv(r)}function TT(r){for(const e of r.filters)if(e instanceof sr)return!1;return!0}function Md(r){if(r instanceof vt)return r.field.canonicalString()+r.op.toString()+Do(r.value);if($v(r))return r.filters.map((e=>Md(e))).join(",");{const e=r.filters.map((t=>Md(t))).join(",");return`${r.op}(${e})`}}function qv(r,e){return r instanceof vt?(function(i,o){return o instanceof vt&&i.op===o.op&&i.field.isEqual(o.field)&&Sr(i.value,o.value)})(r,e):r instanceof sr?(function(i,o){return o instanceof sr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,m)=>l&&qv(h,o.filters[m])),!0):!1})(r,e):void ye(19439)}function Hv(r){return r instanceof vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`})(r):r instanceof sr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Hv).join(" ,")+"}"})(r):"Filter"}class IT extends vt{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class ST extends vt{constructor(e,t){super(e,"in",t),this.keys=Wv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xT extends vt{constructor(e,t){super(e,"not-in",t),this.keys=Wv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class AT extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return df(t)&&Xa(t.arrayValue,this.value)}}class kT extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xa(this.value.arrayValue,t)}}class CT extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xa(this.value.arrayValue,t)}}class RT extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!df(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Xa(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t=null,i=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Pe=null}}function ey(r,e=null,t=[],i=[],o=null,l=null,h=null){return new PT(r,e,t,i,o,l,h)}function ff(r){const e=Se(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Md(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),il(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Do(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Do(i))).join(",")),e.Pe=t}return e.Pe}function pf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!ET(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!qv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Zg(r.startAt,e.startAt)&&Zg(r.endAt,e.endAt)}function Ld(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t=null,i=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function NT(r,e,t,i,o,l,h,m){return new Bo(r,e,t,i,o,l,h,m)}function mf(r){return new Bo(r)}function ty(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Gv(r){return r.collectionGroup!==null}function za(r){const e=Se(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new At(Bt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Ya(l,i))})),t.has(Bt.keyField().canonicalString())||e.Te.push(new Ya(Bt.keyField(),i))}return e.Te}function _r(r){const e=Se(r);return e.Ie||(e.Ie=bT(e,za(r))),e.Ie}function bT(r,e){if(r.limitType==="F")return ey(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Ya(o.field,l)}));const t=r.endAt?new Zu(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new Zu(r.startAt.position,r.startAt.inclusive):null;return ey(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function jd(r,e){const t=r.filters.concat([e]);return new Bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ec(r,e,t){return new Bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function wc(r,e){return pf(_r(r),_r(e))&&r.limitType===e.limitType}function Kv(r){return`${ff(_r(r))}|lt:${r.limitType}`}function _o(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Hv(o))).join(", ")}]`),il(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Do(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Do(o))).join(",")),`Target(${i})`})(_r(r))}; limitType=${r.limitType})`}function Ec(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of za(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,m,g){const v=Jg(h,m,g);return h.inclusive?v<=0:v<0})(i.startAt,za(i),o)||i.endAt&&!(function(h,m,g){const v=Jg(h,m,g);return h.inclusive?v>=0:v>0})(i.endAt,za(i),o))})(r,e)}function DT(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Qv(r){return(e,t)=>{let i=!1;for(const o of za(r)){const l=VT(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function VT(r,e,t){const i=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),v=m.data.field(l);return g!==null&&v!==null?bo(g,v):ye(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return ye(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new at(pe.comparator);function Gr(){return OT}const Xv=new at(pe.comparator);function La(...r){let e=Xv;for(const t of r)e=e.insert(t.key,t);return e}function Yv(r){let e=Xv;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function wi(){return Ba()}function Jv(){return Ba()}function Ba(){return new ki((r=>r.toString()),((r,e)=>r.isEqual(e)))}const MT=new at(pe.comparator),LT=new At(pe.comparator);function be(...r){let e=LT;for(const t of r)e=e.add(t);return e}const jT=new At(Ce);function FT(){return jT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function Zv(r){return{integerValue:""+r}}function UT(r,e){return fT(e)?Zv(e):gf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this._=void 0}}function zT(r,e,t){return r instanceof Ja?(function(o,l){const h={fields:{[Ov]:{stringValue:Vv},[Lv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&hf(l)&&(l=_c(l)),l&&(h.fields[Mv]=l),{mapValue:h}})(t,e):r instanceof Za?t0(r,e):r instanceof el?n0(r,e):(function(o,l){const h=e0(o,l),m=ny(h)+ny(o.Ee);return Od(h)&&Od(o.Ee)?Zv(m):gf(o.serializer,m)})(r,e)}function BT(r,e,t){return r instanceof Za?t0(r,e):r instanceof el?n0(r,e):t}function e0(r,e){return r instanceof tc?(function(i){return Od(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Ja extends Tc{}class Za extends Tc{constructor(e){super(),this.elements=e}}function t0(r,e){const t=r0(e);for(const i of r.elements)t.some((o=>Sr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class el extends Tc{constructor(e){super(),this.elements=e}}function n0(r,e){let t=r0(e);for(const i of r.elements)t=t.filter((o=>!Sr(o,i)));return{arrayValue:{values:t}}}class tc extends Tc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ny(r){return dt(r.integerValue||r.doubleValue)}function r0(r){return df(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t){this.field=e,this.transform=t}}function qT(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof Za&&o instanceof Za||i instanceof el&&o instanceof el?No(i.elements,o.elements,Sr):i instanceof tc&&o instanceof tc?Sr(i.Ee,o.Ee):i instanceof Ja&&o instanceof Ja})(r.transform,e.transform)}class HT{constructor(e,t){this.version=e,this.transformResults=t}}class Ot{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ic{}function s0(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Sc(r.key,Ot.none()):new ol(r.key,r.data,Ot.none());{const t=r.data,i=nn.empty();let o=new At(Bt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Ws(r.key,i,new xn(o.toArray()),Ot.none())}}function WT(r,e,t){r instanceof ol?(function(o,l,h){const m=o.value.clone(),g=sy(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Ws?(function(o,l,h){if(!zu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=sy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(i0(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function $a(r,e,t,i){return r instanceof ol?(function(l,h,m,g){if(!zu(l.precondition,h))return m;const v=l.value.clone(),T=iy(l.fieldTransforms,g,h);return v.setAll(T),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ws?(function(l,h,m,g){if(!zu(l.precondition,h))return m;const v=iy(l.fieldTransforms,g,h),T=h.data;return T.setAll(i0(l)),T.setAll(v),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((x=>x.field)))})(r,e,t,i):(function(l,h,m){return zu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function GT(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=e0(i.transform,o||null);l!=null&&(t===null&&(t=nn.empty()),t.set(i.field,l))}return t||null}function ry(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&No(i,o,((l,h)=>qT(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ol extends Ic{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ws extends Ic{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function i0(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function sy(r,e,t){const i=new Map;Fe(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,m=e.data.field(l.field);i.set(l.field,BT(h,m,t[o]))}return i}function iy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,zT(l,h,e))}return i}class Sc extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class o0 extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&WT(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=$a(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=$a(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Jv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=s0(h,m);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&No(this.mutations,e.mutations,((t,i)=>ry(t,i)))&&No(this.baseMutations,e.baseMutations,((t,i)=>ry(t,i)))}}class yf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return MT})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new yf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,je;function a0(r){switch(r){case q.OK:return ye(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ye(15467,{code:r})}}function l0(r){if(r===void 0)return Wr("GRPC error has no .code"),q.UNKNOWN;switch(r){case yt.OK:return q.OK;case yt.CANCELLED:return q.CANCELLED;case yt.UNKNOWN:return q.UNKNOWN;case yt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case yt.INTERNAL:return q.INTERNAL;case yt.UNAVAILABLE:return q.UNAVAILABLE;case yt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case yt.NOT_FOUND:return q.NOT_FOUND;case yt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case yt.ABORTED:return q.ABORTED;case yt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case yt.DATA_LOSS:return q.DATA_LOSS;default:return ye(39323,{code:r})}}(je=yt||(yt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new bs([4294967295,4294967295],0);function oy(r){const e=Cv().encode(r),t=new wv;return t.update(e),new Uint8Array(t.digest())}function ay(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new bs([t,i],0),new bs([o,l],0)]}class vf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ja(`Invalid padding: ${t}`);if(i<0)throw new ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ja(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=bs.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(bs.fromNumber(i)));return o.compare(YT)===1&&(o=new bs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=oy(e),[i,o]=ay(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new vf(l,o,t);return i.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=oy(e),[i,o]=ay(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new xc(Ee.min(),o,new at(Ce),Gr(),be())}}class al{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new al(i,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class u0{constructor(e,t){this.targetId=e,this.De=t}}class c0{constructor(e,t,i=$t.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class ly{constructor(){this.ve=0,this.Ce=uy(),this.Fe=$t.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=be(),t=be(),i=be();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ye(38017,{changeType:l})}})),new al(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=uy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class JT{constructor(e){this.We=e,this.Ge=new Map,this.ze=Gr(),this.je=Vu(),this.Je=Vu(),this.He=new at(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Ld(l))if(i===0){const h=new pe(l.path);this.Xe(t,h,Vt.newNoDocument(h,Ee.min()))}else Fe(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=Fs(i).toUint8Array()}catch(g){if(g instanceof Dv)return Ms("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new vf(h,o,l)}catch(g){return Ms(g instanceof ja?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const m=this.st(h);if(m){if(l.current&&Ld(m.target)){const g=new pe(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Vt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=be();this.Je.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new xc(e,t,this.He,this.ze,i);return this.ze=Gr(),this.je=Vu(),this.Je=Vu(),this.He=new at(Ce),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ly,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new At(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new At(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ly),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Vu(){return new at(pe.comparator)}function uy(){return new at(pe.comparator)}const ZT={asc:"ASCENDING",desc:"DESCENDING"},eI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tI={and:"AND",or:"OR"};class nI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fd(r,e){return r.useProto3Json||il(e)?e:{value:e}}function nc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function h0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function rI(r,e){return nc(r,e.toTimestamp())}function An(r){return Fe(!!r,49232),Ee.fromTimestamp((function(t){const i=js(t);return new tt(i.seconds,i.nanos)})(r))}function _f(r,e){return Ud(r,e).canonicalString()}function Ud(r,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function d0(r){const e=Ge.fromString(r);return Fe(v0(e),10190,{key:e.toString()}),e}function rc(r,e){return _f(r.databaseId,e.path)}function qa(r,e){const t=d0(e);if(t.get(1)!==r.databaseId.projectId)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(p0(t))}function f0(r,e){return _f(r.databaseId,e)}function sI(r){const e=d0(r);return e.length===4?Ge.emptyPath():p0(e)}function zd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function p0(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function cy(r,e,t){return{name:rc(r,e),fields:t.value.mapValue.fields}}function iI(r,e){return"found"in e?(function(i,o){Fe(!!o.found,43571),o.found.name,o.found.updateTime;const l=qa(i,o.found.name),h=An(o.found.updateTime),m=o.found.createTime?An(o.found.createTime):Ee.min(),g=new nn({mapValue:{fields:o.found.fields}});return Vt.newFoundDocument(l,h,m,g)})(r,e):"missing"in e?(function(i,o){Fe(!!o.missing,3894),Fe(!!o.readTime,22933);const l=qa(i,o.missing),h=An(o.readTime);return Vt.newNoDocument(l,h)})(r,e):ye(7234,{result:e})}function oI(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ye(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,T){return v.useProto3Json?(Fe(T===void 0||typeof T=="string",58123),$t.fromBase64String(T||"")):(Fe(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),$t.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const T=v.code===void 0?q.UNKNOWN:l0(v.code);return new ne(T,v.message||"")})(h);t=new c0(i,o,l,m||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=qa(r,i.document.name),l=An(i.document.updateTime),h=i.document.createTime?An(i.document.createTime):Ee.min(),m=new nn({mapValue:{fields:i.document.fields}}),g=Vt.newFoundDocument(o,l,h,m),v=i.targetIds||[],T=i.removedTargetIds||[];t=new Bu(v,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=qa(r,i.document),l=i.readTime?An(i.readTime):Ee.min(),h=Vt.newNoDocument(o,l),m=i.removedTargetIds||[];t=new Bu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=qa(r,i.document),l=i.removedTargetIds||[];t=new Bu([],l,o,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new XT(o,l),m=i.targetId;t=new u0(m,h)}}return t}function m0(r,e){let t;if(e instanceof ol)t={update:cy(r,e.key,e.value)};else if(e instanceof Sc)t={delete:rc(r,e.key)};else if(e instanceof Ws)t={update:cy(r,e.key,e.data),updateMask:mI(e.fieldMask)};else{if(!(e instanceof o0))return ye(16599,{Rt:e.type});t={verify:rc(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const m=h.transform;if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Za)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof el)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof tc)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw ye(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:rI(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ye(27497)})(r,e.precondition)),t}function aI(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?An(o.updateTime):An(l);return h.isEqual(Ee.min())&&(h=An(l)),new HT(h,o.transformResults||[])})(t,e)))):[]}function lI(r,e){return{documents:[f0(r,e.path)]}}function uI(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=f0(r,o);const l=(function(v){if(v.length!==0)return y0(sr.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((T=>(function(I){return{field:wo(I.field),direction:dI(I.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Fd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function cI(r){let e=sI(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let l=[];t.where&&(l=(function(x){const I=g0(x);return I instanceof sr&&$v(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(x){return x.map((I=>(function($){return new Ya(Eo($.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(I)))})(t.orderBy));let m=null;t.limit&&(m=(function(x){let I;return I=typeof x=="object"?x.value:x,il(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(x){const I=!!x.before,U=x.values||[];return new Zu(U,I)})(t.startAt));let v=null;return t.endAt&&(v=(function(x){const I=!x.before,U=x.values||[];return new Zu(U,I)})(t.endAt)),NT(e,o,h,l,m,"F",g,v)}function hI(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function g0(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Eo(t.unaryFilter.field);return vt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Eo(t.unaryFilter.field);return vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Eo(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(r):r.fieldFilter!==void 0?(function(t){return vt.create(Eo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return sr.create(t.compositeFilter.filters.map((i=>g0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(r):ye(30097,{filter:r})}function dI(r){return ZT[r]}function fI(r){return eI[r]}function pI(r){return tI[r]}function wo(r){return{fieldPath:r.canonicalString()}}function Eo(r){return Bt.fromServerFormat(r.fieldPath)}function y0(r){return r instanceof vt?(function(t){if(t.op==="=="){if(Yg(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NAN"}};if(Xg(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yg(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NAN"}};if(Xg(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(t.field),op:fI(t.op),value:t.value}}})(r):r instanceof sr?(function(t){const i=t.getFilters().map((o=>y0(o)));return i.length===1?i[0]:{compositeFilter:{op:pI(t.op),filters:i}}})(r):ye(54877,{filter:r})}function mI(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function v0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),m=$t.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ks(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.gt=e}}function yI(r){const e=cI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ec(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.Dn=new _I}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Ls.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Ls.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class _I{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new At(Ge.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new At(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_0=41943040;class pn{static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(_0,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Vo(0)}static ur(){return new Vo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="LruGarbageCollector",wI=1048576;function fy([r,e],[t,i]){const o=Ce(r,t);return o===0?Ce(e,i):o}class EI{constructor(e){this.Tr=e,this.buffer=new At(fy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();fy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class TI{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(dy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zo(t)?se(dy,"Ignoring IndexedDB error during garbage collection: ",t):await Uo(t)}await this.Rr(3e5)}))}}class II{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(vc.ue);const i=new EI(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(hy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,m,g,v;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,h=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(i=x,m=Date.now(),this.removeTargets(e,i,t)))).next((x=>(l=x,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((x=>(v=Date.now(),vo()<=Ne.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${x} documents in `+(v-g)+`ms
Total Duration: ${v-T}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:x}))))}}function SI(r,e){return new II(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.changes=new ki((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&$a(i.mutation,o,xn.empty(),tt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,be()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=be()){const o=wi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=La();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=wi();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,be())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,i,o){let l=Gr();const h=Ba(),m=(function(){return Ba()})();return t.forEach(((g,v)=>{const T=i.get(v.key);o.has(v.key)&&(T===void 0||T.mutation instanceof Ws)?l=l.insert(v.key,v):T!==void 0?(h.set(v.key,T.mutation.getFieldMask()),$a(T.mutation,v,T.mutation.getFieldMask(),tt.now())):h.set(v.key,xn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((v,T)=>h.set(v,T))),t.forEach(((v,T)=>{var x;return m.set(v,new AI(T,(x=h.get(v))!==null&&x!==void 0?x:null))})),m)))}recalculateAndSaveOverlays(e,t){const i=Ba();let o=new at(((h,m)=>h-m)),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let T=i.get(g)||xn.empty();T=m.applyToLocalView(v,T),i.set(g,T);const x=(o.get(m.batchId)||be()).add(g);o=o.insert(m.batchId,x)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,T=g.value,x=Jv();T.forEach((I=>{if(!l.has(I)){const U=s0(t.get(I),i.get(I));U!==null&&x.set(I,U),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,x))}return W.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(wi());let m=Ga,g=l;return h.next((v=>W.forEach(v,((T,x)=>(m<x.largestBatchId&&(m=x.largestBatchId),l.get(T)?W.resolve():this.remoteDocumentCache.getEntry(e,T).next((I=>{g=g.insert(T,I)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,g,v,be()))).next((T=>({batchId:m,changes:Yv(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=La();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=La();return this.indexManager.getCollectionParents(e,l).next((m=>W.forEach(m,(g=>{const v=(function(x,I){return new Bo(I,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((T=>{T.forEach(((x,I)=>{h=h.insert(x,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,v)=>{const T=v.getKey();h.get(T)===null&&(h=h.insert(T,Vt.newInvalidDocument(T)))}));let m=La();return h.forEach(((g,v)=>{const T=l.get(g);T!==void 0&&$a(T.mutation,v,xn.empty(),tt.now()),Ec(t,v)&&(m=m.insert(g,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:An(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:yI(o.bundledQuery),readTime:An(o.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.overlays=new at(pe.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=wi();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=wi(),l=t.length+1,h=new pe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new at(((v,T)=>v-T));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let T=l.get(v.largestBatchId);T===null&&(T=wi(),l=l.insert(v.largestBatchId,T)),T.set(v.getKey(),v)}}const m=wi(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,T)=>m.set(v,T))),!(m.size()>=o)););return W.resolve(m)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new QT(t,i));let l=this.kr.get(t);l===void 0&&(l=be(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.sessionToken=$t.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.qr=new At(bt.Qr),this.$r=new At(bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new bt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new bt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new pe(new Ge([])),i=new bt(t,e),o=new bt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new Ge([])),i=new bt(t,e),o=new bt(t,e+1);let l=be();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new bt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class bt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new At(bt.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new KT(l,t,i,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new bt(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?cf:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new bt(t,0),o=new bt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const m=this.Zr(h.Hr);l.push(m)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new At(Ce);return t.forEach((o=>{const l=new bt(o,0),h=new bt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(m=>{i=i.add(m.Hr)}))})),W.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new bt(new pe(l),0);let m=new At(Ce);return this.Yr.forEachWhile((g=>{const v=g.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.Hr)),!0)}),h),W.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return W.forEach(t.mutations,(o=>{const l=new bt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new bt(t,0),o=this.Yr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.ni=e,this.docs=(function(){return new at(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():Vt.newInvalidDocument(t))}getEntries(e,t){let i=Gr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Vt.newInvalidDocument(o))})),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Gr();const h=t.path,m=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:T}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||uT(lT(T),i)<=0||(o.has(T.key)||Ec(t,T))&&(l=l.insert(T.key,T.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ye(9500)}ri(e,t){return W.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new DI(this)}getSize(e){return W.resolve(this.size)}}class DI extends xI{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.persistence=e,this.ii=new ki((t=>ff(t)),pf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new wf,this.targetCount=0,this._i=Vo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Vo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&i.get(m.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,t){this.ai={},this.overlays={},this.ui=new vc(0),this.ci=!1,this.ci=!0,this.li=new PI,this.referenceDelegate=e(this),this.hi=new VI(this),this.indexManager=new vI,this.remoteDocumentCache=(function(o){return new bI(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new gI(t),this.Ti=new CI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new RI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new NI(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new OI(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return W.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class OI extends hT{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Ai=new wf,this.Ri=null}static Vi(e){return new Ef(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,(i=>{const o=pe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class sc{constructor(e,t){this.persistence=e,this.gi=new ki((i=>pT(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=SI(this,t)}static Vi(e,t){return new sc(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return W.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(i++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}Sr(e,t,i){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=be(),o=be();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Tf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return N1()?8:dT(Xt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new MI;return this.ws(e,t,h).next((m=>{if(l.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(vo()<=Ne.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",_o(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(vo()<=Ne.DEBUG&&se("QueryEngine","Query:",_o(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(vo()<=Ne.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",_o(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(t))):W.resolve())}ps(e,t){if(ty(t))return W.resolve(null);let i=_r(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=ec(t,null,"F"),i=_r(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=be(...l);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,i).next((g=>{const v=this.bs(t,m);return this.Ds(t,v,h,g.readTime)?this.ps(e,ec(t,null,"F")):this.vs(e,v,t,g)}))))})))))}ys(e,t,i,o){return ty(t)||o.isEqual(Ee.min())?W.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?W.resolve(null):(vo()<=Ne.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),_o(t)),this.vs(e,h,t,aT(o,Ga)).next((m=>m)))}))}bs(e,t){let i=new At(Qv(e));return t.forEach(((o,l)=>{Ec(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return vo()<=Ne.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",_o(t)),this.gs.getDocumentsMatchingQuery(e,t,Ls.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="LocalStore",jI=3e8;class FI{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new at(Ce),this.Ms=new ki((l=>ff(l)),pf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kI(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function UI(r,e,t,i){return new FI(r,e,t,i)}async function E0(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],m=[];let g=be();for(const v of o){h.push(v.batchId);for(const T of v.mutations)g=g.add(T.key)}for(const v of l){m.push(v.batchId);for(const T of v.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(i,g).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function zI(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,v,T){const x=v.batch,I=x.keys();let U=W.resolve();return I.forEach(($=>{U=U.next((()=>T.getEntry(g,$))).next((Y=>{const B=v.docVersions.get($);Fe(B!==null,48541),Y.version.compareTo(B)<0&&(x.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),T.addEntry(Y)))}))})),U.next((()=>m.mutationQueue.removeMutationBatch(g,x)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(m){let g=be();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function T0(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function BI(r,e){const t=Se(r),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((T,x)=>{const I=o.get(x);if(!I)return;m.push(t.hi.removeMatchingKeys(l,T.removedDocuments,x).next((()=>t.hi.addMatchingKeys(l,T.addedDocuments,x))));let U=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(x)!==null?U=U.withResumeToken($t.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):T.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(T.resumeToken,i)),o=o.insert(x,U),(function(Y,B,fe){return Y.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=jI?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0})(I,U,T)&&m.push(t.hi.updateTargetData(l,U))}));let g=Gr(),v=be();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,T))})),m.push($I(l,h,e.documentUpdates).next((T=>{g=T.Ls,v=T.ks}))),!i.isEqual(Ee.min())){const T=t.hi.getLastRemoteSnapshotVersion(l).next((x=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));m.push(T)}return W.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,v))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function $I(r,e,t){let i=be(),o=be();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=Gr();return t.forEach(((m,g)=>{const v=l.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):se(If,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function qI(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=cf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function HI(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new ks(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Bd(r,e,t){const i=Se(r),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!zo(h))throw h;se(If,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function py(r,e,t){const i=Se(r);let o=Ee.min(),l=be();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,T){const x=Se(g),I=x.Ms.get(T);return I!==void 0?W.resolve(x.Fs.get(I)):x.hi.getTargetData(v,T)})(i,h,_r(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:be()))).next((m=>(WI(i,DT(e),m),{documents:m,qs:l})))))}function WI(r,e,t){let i=r.xs.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.xs.set(e,i)}class my{constructor(){this.activeTargetIds=FT()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GI{constructor(){this.Fo=new my,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new my,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="ConnectivityMonitor";class yy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se(gy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se(gy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou=null;function $d(){return Ou===null?Ou=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ou++,"0x"+Ou.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="RestConnection",QI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class XI{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Yu?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=$d(),m=this.Go(e,t.toUriEncodedString());se(_d,`Sending RPC '${e}' ${h}:`,m,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:v}=new URL(m),T=Lo(v);return this.jo(e,m,g,i,T).then((x=>(se(_d,`Received RPC '${e}' ${h}: `,x),x)),(x=>{throw Ms(_d,`RPC '${e}' ${h} failed with error: `,x,"url: ",m,"request:",i),x}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=QI[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class JI extends XI{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=$d();return new Promise(((m,g)=>{const v=new Ev;v.setWithCredentials(!0),v.listenOnce(Tv.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case ju.NO_ERROR:const x=v.getResponseJson();se(Kt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(x)),m(x);break;case ju.TIMEOUT:se(Kt,`RPC '${e}' ${h} timed out`),g(new ne(q.DEADLINE_EXCEEDED,"Request time out"));break;case ju.HTTP_ERROR:const I=v.getStatus();if(se(Kt,`RPC '${e}' ${h} failed with status:`,I,"response text:",v.getResponseText()),I>0){let U=v.getResponseJson();Array.isArray(U)&&(U=U[0]);const $=U==null?void 0:U.error;if($&&$.status&&$.message){const Y=(function(fe){const me=fe.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(me)>=0?me:q.UNKNOWN})($.status);g(new ne(Y,$.message))}else g(new ne(q.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ne(q.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{se(Kt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);se(Kt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",T,i,15)}))}P_(e,t,i){const o=$d(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=xv(),m=Sv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const T=l.join("");se(Kt,`Creating RPC '${e}' stream ${o}: ${T}`,g);const x=h.createWebChannel(T,g);this.T_(x);let I=!1,U=!1;const $=new YI({Ho:B=>{U?se(Kt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(I||(se(Kt,`Opening RPC '${e}' stream ${o} transport.`),x.open(),I=!0),se(Kt,`RPC '${e}' stream ${o} sending:`,B),x.send(B))},Yo:()=>x.close()}),Y=(B,fe,me)=>{B.listen(fe,(ge=>{try{me(ge)}catch(Ae){setTimeout((()=>{throw Ae}),0)}}))};return Y(x,Ma.EventType.OPEN,(()=>{U||(se(Kt,`RPC '${e}' stream ${o} transport opened.`),$.s_())})),Y(x,Ma.EventType.CLOSE,(()=>{U||(U=!0,se(Kt,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(x))})),Y(x,Ma.EventType.ERROR,(B=>{U||(U=!0,Ms(Kt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),$.__(new ne(q.UNAVAILABLE,"The operation could not be completed")))})),Y(x,Ma.EventType.MESSAGE,(B=>{var fe;if(!U){const me=B.data[0];Fe(!!me,16349);const ge=me,Ae=(ge==null?void 0:ge.error)||((fe=ge[0])===null||fe===void 0?void 0:fe.error);if(Ae){se(Kt,`RPC '${e}' stream ${o} received error:`,Ae);const Oe=Ae.status;let ke=(function(R){const N=yt[R];if(N!==void 0)return l0(N)})(Oe),k=Ae.message;ke===void 0&&(ke=q.INTERNAL,k="Unknown error status: "+Oe+" with message "+Ae.message),U=!0,$.__(new ne(ke,k)),x.close()}else se(Kt,`RPC '${e}' stream ${o} received:`,me),$.a_(me)}})),Y(m,Iv.STAT_EVENT,(B=>{B.stat===bd.PROXY?se(Kt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===bd.NOPROXY&&se(Kt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.o_()}),0),$}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function wd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(r){return new nI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="PersistentStream";class I0{constructor(e,t,i,o,l,h,m,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Sf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Wr(t.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ne(q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return se(vy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(se(vy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ZI extends I0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=oI(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?An(h.readTime):Ee.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=zd(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=Ld(g)?{documents:lI(l,g)}:{query:uI(l,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=h0(l,h.resumeToken);const v=Fd(l,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=nc(l,h.snapshotVersion.toTimestamp());const v=Fd(l,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const i=hI(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=zd(this.serializer),t.removeTarget=e,this.k_(t)}}class eS extends I0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=aI(e.writeResults,e.commitTime),i=An(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=zd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>m0(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{}class nS extends tS{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Ud(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ne(q.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Ud(t,i),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne(q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class rS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Wr(t),this._a=!1):se("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="RemoteStore";class sS{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Ci(this)&&(se(xi,"Restarting streams for network reachability change."),await(async function(g){const v=Se(g);v.Ia.add(4),await ll(v),v.Aa.set("Unknown"),v.Ia.delete(4),await kc(v)})(this))}))})),this.Aa=new rS(i,o)}}async function kc(r){if(Ci(r))for(const e of r.da)await e(!0)}async function ll(r){for(const e of r.da)await e(!1)}function S0(r,e){const t=Se(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Cf(t)?kf(t):$o(t).x_()&&Af(t,e))}function xf(r,e){const t=Se(r),i=$o(t);t.Ta.delete(e),i.x_()&&x0(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ci(t)&&t.Aa.set("Unknown"))}function Af(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(r).H_(e)}function x0(r,e){r.Ra.$e(e),$o(r).Y_(e)}function kf(r){r.Ra=new JT({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),$o(r).start(),r.Aa.aa()}function Cf(r){return Ci(r)&&!$o(r).M_()&&r.Ta.size>0}function Ci(r){return Se(r).Ia.size===0}function A0(r){r.Ra=void 0}async function iS(r){r.Aa.set("Online")}async function oS(r){r.Ta.forEach(((e,t)=>{Af(r,e)}))}async function aS(r,e){A0(r),Cf(r)?(r.Aa.la(e),kf(r)):r.Aa.set("Unknown")}async function lS(r,e,t){if(r.Aa.set("Online"),e instanceof c0&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(r,e)}catch(i){se(xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ic(r,i)}else if(e instanceof Bu?r.Ra.Ye(e):e instanceof u0?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ee.min()))try{const i=await T0(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const m=l.Ra.Pt(h);return m.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const T=l.Ta.get(v);T&&l.Ta.set(v,T.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,v)=>{const T=l.Ta.get(g);if(!T)return;l.Ta.set(g,T.withResumeToken($t.EMPTY_BYTE_STRING,T.snapshotVersion)),x0(l,g);const x=new ks(T.target,g,v,T.sequenceNumber);Af(l,x)})),l.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(i){se(xi,"Failed to raise snapshot:",i),await ic(r,i)}}async function ic(r,e,t){if(!zo(e))throw e;r.Ia.add(1),await ll(r),r.Aa.set("Offline"),t||(t=()=>T0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(xi,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await kc(r)}))}function k0(r,e){return e().catch((t=>ic(r,t,e)))}async function Cc(r){const e=Se(r),t=zs(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:cf;for(;uS(e);)try{const o=await qI(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,cS(e,o)}catch(o){await ic(e,o)}C0(e)&&R0(e)}function uS(r){return Ci(r)&&r.Pa.length<10}function cS(r,e){r.Pa.push(e);const t=zs(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function C0(r){return Ci(r)&&!zs(r).M_()&&r.Pa.length>0}function R0(r){zs(r).start()}async function hS(r){zs(r).na()}async function dS(r){const e=zs(r);for(const t of r.Pa)e.X_(t.mutations)}async function fS(r,e,t){const i=r.Pa.shift(),o=yf.from(i,e,t);await k0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Cc(r)}async function pS(r,e){e&&zs(r).Z_&&await(async function(i,o){if((function(h){return a0(h)&&h!==q.ABORTED})(o.code)){const l=i.Pa.shift();zs(i).N_(),await k0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Cc(i)}})(r,e),C0(r)&&R0(r)}async function _y(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),se(xi,"RemoteStore received new credentials");const i=Ci(t);t.Ia.add(3),await ll(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await kc(t)}async function mS(r,e){const t=Se(r);e?(t.Ia.delete(2),await kc(t)):e||(t.Ia.add(2),await ll(t),t.Aa.set("Unknown"))}function $o(r){return r.Va||(r.Va=(function(t,i,o){const l=Se(t);return l.ia(),new ZI(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:iS.bind(null,r),e_:oS.bind(null,r),n_:aS.bind(null,r),J_:lS.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Cf(r)?kf(r):r.Aa.set("Unknown")):(await r.Va.stop(),A0(r))}))),r.Va}function zs(r){return r.ma||(r.ma=(function(t,i,o){const l=Se(t);return l.ia(),new eS(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:hS.bind(null,r),n_:pS.bind(null,r),ea:dS.bind(null,r),ta:fS.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Cc(r)):(await r.ma.stop(),r.Pa.length>0&&(se(xi,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,m=new Rf(e,t,h,o,l);return m.start(i),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(r,e){if(Wr("AsyncQueue",`${e}: ${r}`),zo(r))return new ne(q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static emptySet(e){return new So(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=La(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new So;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.fa=new at(pe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Oo{constructor(e,t,i,o,l,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Oo(e,t,So.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class yS{constructor(){this.queries=Ey(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=Ey(),l.forEach(((h,m)=>{for(const g of m.wa)g.onError(i)}))})(this,new ne(q.ABORTED,"Firestore shutting down"))}}function Ey(){return new ki((r=>Kv(r)),wc)}async function P0(r,e){const t=Se(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new gS,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Pf(h,`Initialization of query '${_o(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Nf(t)}async function N0(r,e){const t=Se(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function vS(r,e){const t=Se(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.wa)m.Ca(o)&&(i=!0);h.ya=o}}i&&Nf(t)}function _S(r,e,t){const i=Se(r),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Nf(r){r.Da.forEach((e=>{e.next()}))}var qd,Ty;(Ty=qd||(qd={})).Fa="default",Ty.Cache="cache";class b0{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Oo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==qd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.key=e}}class V0{constructor(e){this.key=e}}class wS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=be(),this.mutatedKeys=be(),this.Xa=Qv(e),this.eu=new So(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new wy,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,x)=>{const I=o.get(T),U=Ec(this.query,x)?x:null,$=!!I&&this.mutatedKeys.has(I.key),Y=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let B=!1;I&&U?I.data.isEqual(U.data)?$!==Y&&(i.track({type:3,doc:U}),B=!0):this.iu(I,U)||(i.track({type:2,doc:U}),B=!0,(g&&this.Xa(U,g)>0||v&&this.Xa(U,v)<0)&&(m=!0)):!I&&U?(i.track({type:0,doc:U}),B=!0):I&&!U&&(i.track({type:1,doc:I}),B=!0,(g||v)&&(m=!0)),B&&(U?(h=h.add(U),l=Y?l.add(T):l.delete(T)):(h=h.delete(T),l=l.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),l=l.delete(T.key),i.track({type:1,doc:T})}return{eu:h,ru:i,Ds:m,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((T,x)=>(function(U,$){const Y=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:B})}};return Y(U)-Y($)})(T.type,x.type)||this.Xa(T.doc,x.doc))),this.su(i),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new Oo(this.query,e.eu,l,h,e.mutatedKeys,g===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new wy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=be(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new V0(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new D0(i))})),t}uu(e){this.Ha=e.qs,this.Za=be();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Oo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const bf="SyncEngine";class ES{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class TS{constructor(e){this.key=e,this.lu=!1}}class IS{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ki((m=>Kv(m)),wc),this.Tu=new Map,this.Iu=new Set,this.du=new at(pe.comparator),this.Eu=new Map,this.Au=new wf,this.Ru={},this.Vu=new Map,this.mu=Vo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function SS(r,e,t=!0){const i=U0(r);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await O0(i,e,t,!0),o}async function xS(r,e){const t=U0(r);await O0(t,e,!0,!1)}async function O0(r,e,t,i){const o=await HI(r.localStore,_r(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let m;return i&&(m=await AS(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&S0(r.remoteStore,o),m}async function AS(r,e,t,i,o){r.gu=(x,I,U)=>(async function(Y,B,fe,me){let ge=B.view.nu(fe);ge.Ds&&(ge=await py(Y.localStore,B.query,!1).then((({documents:k})=>B.view.nu(k,ge))));const Ae=me&&me.targetChanges.get(B.targetId),Oe=me&&me.targetMismatches.get(B.targetId)!=null,ke=B.view.applyChanges(ge,Y.isPrimaryClient,Ae,Oe);return Sy(Y,B.targetId,ke._u),ke.snapshot})(r,x,I,U);const l=await py(r.localStore,e,!0),h=new wS(e,l.qs),m=h.nu(l.documents),g=al.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),v=h.applyChanges(m,r.isPrimaryClient,g);Sy(r,t,v._u);const T=new ES(e,t,h);return r.Pu.set(e,T),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function kS(r,e,t){const i=Se(r),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!wc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Bd(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&xf(i.remoteStore,o.targetId),Hd(i,o.targetId)})).catch(Uo)):(Hd(i,o.targetId),await Bd(i.localStore,o.targetId,!0))}async function CS(r,e){const t=Se(r),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),xf(t.remoteStore,i.targetId))}async function RS(r,e,t){const i=MS(r);try{const o=await(function(h,m){const g=Se(h),v=tt.now(),T=m.reduce(((U,$)=>U.add($.key)),be());let x,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let $=Gr(),Y=be();return g.Os.getEntries(U,T).next((B=>{$=B,$.forEach(((fe,me)=>{me.isValidDocument()||(Y=Y.add(fe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,$))).next((B=>{x=B;const fe=[];for(const me of m){const ge=GT(me,x.get(me.key).overlayedDocument);ge!=null&&fe.push(new Ws(me.key,ge,Uv(ge.value.mapValue),Ot.exists(!0)))}return g.mutationQueue.addMutationBatch(U,v,fe,m)})).next((B=>{I=B;const fe=B.applyToLocalDocumentSet(x,Y);return g.documentOverlayCache.saveOverlays(U,B.batchId,fe)}))})).then((()=>({batchId:I.batchId,changes:Yv(x)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new at(Ce)),v=v.insert(m,g),h.Ru[h.currentUser.toKey()]=v})(i,o.batchId,t),await ul(i,o.changes),await Cc(i.remoteStore)}catch(o){const l=Pf(o,"Failed to persist write");t.reject(l)}}async function M0(r,e){const t=Se(r);try{const i=await BI(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await ul(t,i,e)}catch(i){await Uo(i)}}function Iy(r,e,t){const i=Se(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Se(h);g.onlineState=m;let v=!1;g.queries.forEach(((T,x)=>{for(const I of x.wa)I.va(m)&&(v=!0)})),v&&Nf(g)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function PS(r,e,t){const i=Se(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new at(pe.comparator);h=h.insert(l,Vt.newNoDocument(l,Ee.min()));const m=be().add(l),g=new xc(Ee.min(),new Map,new at(Ce),h,m);await M0(i,g),i.du=i.du.remove(l),i.Eu.delete(e),Df(i)}else await Bd(i.localStore,e,!1).then((()=>Hd(i,e,t))).catch(Uo)}async function NS(r,e){const t=Se(r),i=e.batch.batchId;try{const o=await zI(t.localStore,e);j0(t,i,null),L0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ul(t,o)}catch(o){await Uo(o)}}async function bS(r,e,t){const i=Se(r);try{const o=await(function(h,m){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let T;return g.mutationQueue.lookupMutationBatch(v,m).next((x=>(Fe(x!==null,37113),T=x.keys(),g.mutationQueue.removeMutationBatch(v,x)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,T,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,T))).next((()=>g.localDocuments.getDocuments(v,T)))}))})(i.localStore,e);j0(i,e,t),L0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ul(i,o)}catch(o){await Uo(o)}}function L0(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function j0(r,e,t){const i=Se(r);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Hd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Tu.get(e))r.Pu.delete(i),t&&r.hu.pu(i,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((i=>{r.Au.containsKey(i)||F0(r,i)}))}function F0(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(xf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Df(r))}function Sy(r,e,t){for(const i of t)i instanceof D0?(r.Au.addReference(i.key,e),DS(r,i)):i instanceof V0?(se(bf,"Document no longer in limbo: "+i.key),r.Au.removeReference(i.key,e),r.Au.containsKey(i.key)||F0(r,i.key)):ye(19791,{yu:i})}function DS(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Iu.has(i)||(se(bf,"New document in limbo: "+t),r.Iu.add(i),Df(r))}function Df(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new pe(Ge.fromString(e)),i=r.mu.next();r.Eu.set(i,new TS(t)),r.du=r.du.insert(t,i),S0(r.remoteStore,new ks(_r(mf(t.path)),i,"TargetPurposeLimboResolution",vc.ue))}}async function ul(r,e,t){const i=Se(r),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((m,g)=>{h.push(i.gu(g,e,t).then((v=>{var T;if((v||t)&&i.isPrimaryClient){const x=v?!v.fromCache:(T=t==null?void 0:t.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;i.sharedClientState.updateQueryState(g.targetId,x?"current":"not-current")}if(v){o.push(v);const x=Tf.Es(g.targetId,v);l.push(x)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(g,v){const T=Se(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>W.forEach(v,(I=>W.forEach(I.Is,(U=>T.persistence.referenceDelegate.addReference(x,I.targetId,U))).next((()=>W.forEach(I.ds,(U=>T.persistence.referenceDelegate.removeReference(x,I.targetId,U)))))))))}catch(x){if(!zo(x))throw x;se(If,"Failed to update sequence numbers: "+x)}for(const x of v){const I=x.targetId;if(!x.fromCache){const U=T.Fs.get(I),$=U.snapshotVersion,Y=U.withLastLimboFreeSnapshotVersion($);T.Fs=T.Fs.insert(I,Y)}}})(i.localStore,l))}async function VS(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){se(bf,"User change. New user:",e.toKey());const i=await E0(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((m=>{m.forEach((g=>{g.reject(new ne(q.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ul(t,i.Bs)}}function OS(r,e){const t=Se(r),i=t.Eu.get(e);if(i&&i.lu)return be().add(i.key);{let o=be();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function U0(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=M0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PS.bind(null,e),e.hu.J_=vS.bind(null,e.eventManager),e.hu.pu=_S.bind(null,e.eventManager),e}function MS(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bS.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ac(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return UI(this.persistence,new LI,e.initialUser,this.serializer)}Du(e){return new w0(Ef.Vi,this.serializer)}bu(e){return new GI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class LS extends oc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof sc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new TI(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new w0((i=>sc.Vi(i,t)),this.serializer)}}class Wd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Iy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=VS.bind(null,this.syncEngine),await mS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new yS})()}createDatastore(e){const t=Ac(e.databaseInfo.databaseId),i=(function(l){return new JI(l)})(e.databaseInfo);return(function(l,h,m,g){return new nS(l,h,m,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,m){return new sS(i,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Iy(this.syncEngine,t,0)),(function(){return yy.C()?new yy:new KI})())}createSyncEngine(e,t){return(function(o,l,h,m,g,v,T){const x=new IS(o,l,h,m,g,v);return T&&(x.fu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Se(o);se(xi,"RemoteStore shutting down."),l.Ia.add(5),await ll(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wd.provider={build:()=>new Wd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Wr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ne(q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(o,l){const h=Se(o),m={documents:l.map((x=>rc(h.serializer,x)))},g=await h.Jo("BatchGetDocuments",h.serializer.databaseId,Ge.emptyPath(),m,l.length),v=new Map;g.forEach((x=>{const I=iI(h.serializer,x);v.set(I.key.toString(),I)}));const T=[];return l.forEach((x=>{const I=v.get(x.toString());Fe(!!I,55234,{key:x}),T.push(I)})),T})(this.datastore,e);return t.forEach((i=>this.recordVersion(i))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Sc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,i)=>{const o=pe.fromPath(i);this.mutations.push(new o0(o,this.precondition(o)))})),await(async function(i,o){const l=Se(i),h={writes:o.map((m=>m0(l.serializer,m)))};await l.Wo("Commit",l.serializer.databaseId,Ge.emptyPath(),h)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ye(50498,{Wu:e.constructor.name});t=Ee.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new ne(q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ee.min())?Ot.exists(!1):Ot.updateTime(t):Ot.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ee.min()))throw new ne(q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ot.updateTime(t)}return Ot.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t,i,o,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=o,this.deferred=l,this.Gu=i.maxAttempts,this.F_=new Sf(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new jS(this.datastore),t=this.Ju(e);t&&t.then((i=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(i)})).catch((o=>{this.Hu(o)}))))})).catch((i=>{this.Hu(i)}))}))}Ju(e){try{const t=this.updateFunction(e);return!il(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!a0(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="FirestoreClient";class US{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Qt.UNAUTHENTICATED,this.clientId=uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{se(Bs,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(se(Bs,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Pf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Ed(r,e){r.asyncQueue.verifyOperationInProgress(),se(Bs,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await E0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ms("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ms("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function xy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await zS(r);se(Bs,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>_y(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>_y(e.remoteStore,o))),r._onlineComponents=e}async function zS(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(Bs,"Using user provided OfflineComponentProvider");try{await Ed(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ms("Error using user provided cache. Falling back to memory cache: "+t),await Ed(r,new oc)}}else se(Bs,"Using default OfflineComponentProvider"),await Ed(r,new LS(void 0));return r._offlineComponents}async function Vf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(Bs,"Using user provided OnlineComponentProvider"),await xy(r,r._uninitializedComponentsProvider._online)):(se(Bs,"Using default OnlineComponentProvider"),await xy(r,new Wd))),r._onlineComponents}function BS(r){return Vf(r).then((e=>e.syncEngine))}function $S(r){return Vf(r).then((e=>e.datastore))}async function Gd(r){const e=await Vf(r),t=e.eventManager;return t.onListen=SS.bind(null,e.syncEngine),t.onUnlisten=kS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CS.bind(null,e.syncEngine),t}function qS(r,e,t={}){const i=new qr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,v){const T=new z0({next:I=>{T.Ou(),h.enqueueAndForget((()=>N0(l,x))),I.fromCache&&g.source==="server"?v.reject(new ne(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(I)},error:I=>v.reject(I)}),x=new b0(m,T,{includeMetadataChanges:!0,ka:!0});return P0(l,x)})(await Gd(r),r.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="firestore.googleapis.com",ky=!0;class Cy{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$0,this.ssl=ky}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ky;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wI)throw new ne(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new YE;switch(i.type){case"firstParty":return new tT(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ne(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Ay.get(t);i&&(se("ComponentProvider","Removing Datastore"),Ay.delete(t),i.terminate())})(this),Promise.resolve()}}function HS(r,e,t,i={}){var o;r=rr(r,Rc);const l=Lo(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(dv(`https://${g}`),fv("Firestore",!0)),h.host!==$0&&h.host!==g&&Ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!Ti(v,m)&&(r._setSettings(v),i.mockUserToken)){let T,x;if(typeof i.mockUserToken=="string")T=i.mockUserToken,x=Qt.MOCK_USER;else{T=T1(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new ne(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new Qt(I)}r._authCredentials=new JE(new kv(T,x))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class ft{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(sl(t,ft._jsonSchema))return new ft(e,i||null,new pe(Ge.fromString(t.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:_t("string",ft._jsonSchemaVersion),referencePath:_t("string")};class Ds extends Yr{constructor(e,t,i){super(e,t,mf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new pe(e))}withConverter(e){return new Ds(this.firestore,e,this._path)}}function zr(r,e,...t){if(r=wt(r),Rv("collection","path",e),r instanceof Rc){const i=Ge.fromString(e,...t);return zg(i),new Ds(r,null,i)}{if(!(r instanceof ft||r instanceof Ds))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ge.fromString(e,...t));return zg(i),new Ds(r.firestore,null,i)}}function xo(r,e,...t){if(r=wt(r),arguments.length===1&&(e=uf.newId()),Rv("doc","path",e),r instanceof Rc){const i=Ge.fromString(e,...t);return Ug(i),new ft(r,null,new pe(i))}{if(!(r instanceof ft||r instanceof Ds))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ge.fromString(e,...t));return Ug(i),new ft(r.firestore,r instanceof Ds?r.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="AsyncQueue";class Py{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Sf(this,"async_queue_retry"),this.oc=()=>{const i=wd();i&&se(Ry,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=wd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=wd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new qr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!zo(e))throw e;se(Ry,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Wr("INTERNAL UNHANDLED ERROR: ",Ny(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Rf.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ye(47125,{hc:Ny(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ny(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class $s extends Rc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Py,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Py(e),this._firestoreClient=void 0,await e}}}function WS(r,e){const t=typeof r=="object"?r:yv(),i=typeof r=="string"?r:Yu,o=af(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=w1("firestore");l&&HS(o,...l)}return o}function cl(r){if(r._terminated)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||GS(r),r._firestoreClient}function GS(r){var e,t,i;const o=r._freezeSettings(),l=(function(m,g,v,T){return new yT(m,g,v,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,B0(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new US(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn($t.fromBase64String(e))}catch(t){throw new ne(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(sl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:_t("string",Sn._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wr._jsonSchemaVersion}}static fromJSON(e){if(sl(e,wr._jsonSchema))return new wr(e.latitude,e.longitude)}}wr._jsonSchemaVersion="firestore/geoPoint/1.0",wr._jsonSchema={type:_t("string",wr._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(sl(e,Er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Er(e.vectorValues);throw new ne(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Er._jsonSchemaVersion="firestore/vectorValue/1.0",Er._jsonSchema={type:_t("string",Er._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=/^__.*__$/;class QS{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ws(e,this.data,this.fieldMask,t,this.fieldTransforms):new ol(e,this.data,t,this.fieldTransforms)}}class q0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ws(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function H0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:r})}}class Of{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Of(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ac(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(H0(this.Ec)&&KS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class XS{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Ac(e)}Dc(e,t,i,o=!1){return new Of({Ec:e,methodName:t,bc:i,path:Bt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hl(r){const e=r._freezeSettings(),t=Ac(r._databaseId);return new XS(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Mf(r,e,t,i,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);Uf("Data must be an object, but it was:",h,i);const m=W0(i,h);let g,v;if(l.merge)g=new xn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const T=[];for(const x of l.mergeFields){const I=Kd(e,x,t);if(!h.contains(I))throw new ne(q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);K0(T,I)||T.push(I)}g=new xn(T),v=h.fieldTransforms.filter((x=>g.covers(x.field)))}else g=null,v=h.fieldTransforms;return new QS(new nn(m),g,v)}class Nc extends Pc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nc}}class Lf extends Pc{_toFieldTransform(e){return new $T(e.path,new Ja)}isEqual(e){return e instanceof Lf}}function jf(r,e,t,i){const o=r.Dc(1,e,t);Uf("Data must be an object, but it was:",o,i);const l=[],h=nn.empty();Hs(i,((g,v)=>{const T=zf(e,g,t);v=wt(v);const x=o.gc(T);if(v instanceof Nc)l.push(T);else{const I=dl(v,x);I!=null&&(l.push(T),h.set(T,I))}}));const m=new xn(l);return new q0(h,m,o.fieldTransforms)}function Ff(r,e,t,i,o,l){const h=r.Dc(1,e,t),m=[Kd(e,i,t)],g=[o];if(l.length%2!=0)throw new ne(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)m.push(Kd(e,l[I])),g.push(l[I+1]);const v=[],T=nn.empty();for(let I=m.length-1;I>=0;--I)if(!K0(v,m[I])){const U=m[I];let $=g[I];$=wt($);const Y=h.gc(U);if($ instanceof Nc)v.push(U);else{const B=dl($,Y);B!=null&&(v.push(U),T.set(U,B))}}const x=new xn(v);return new q0(T,x,h.fieldTransforms)}function YS(r,e,t,i=!1){return dl(t,r.Dc(i?4:3,e))}function dl(r,e){if(G0(r=wt(r)))return Uf("Unsupported field value:",e,r),W0(r,e);if(r instanceof Pc)return(function(i,o){if(!H0(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const m of i){let g=dl(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=wt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return UT(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=tt.fromDate(i);return{timestampValue:nc(o.serializer,l)}}if(i instanceof tt){const l=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:nc(o.serializer,l)}}if(i instanceof wr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Sn)return{bytesValue:h0(o.serializer,i._byteString)};if(i instanceof ft){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:_f(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Er)return(function(h,m){return{mapValue:{fields:{[jv]:{stringValue:Fv},[Ju]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.wc("VectorValues must only contain numeric values.");return gf(m.serializer,v)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${yc(i)}`)})(r,e)}function W0(r,e){const t={};return bv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(r,((i,o)=>{const l=dl(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function G0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof tt||r instanceof wr||r instanceof Sn||r instanceof ft||r instanceof Pc||r instanceof Er)}function Uf(r,e,t){if(!G0(t)||!Pv(t)){const i=yc(t);throw i==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+i)}}function Kd(r,e,t){if((e=wt(e))instanceof qo)return e._internalPath;if(typeof e=="string")return zf(r,e);throw ac("Field path arguments must be of type string or ",r,!1,void 0,t)}const JS=new RegExp("[~\\*/\\[\\]]");function zf(r,e,t){if(e.search(JS)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new qo(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ac(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ne(q.INVALID_ARGUMENT,m+r+g)}function K0(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ZS extends lc{data(){return super.data()}}function Bf(r,e){return typeof e=="string"?zf(r,e):e instanceof qo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $f{}class qf extends $f{}function uc(r,e,...t){let i=[];e instanceof $f&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof Wf)).length,m=l.filter((g=>g instanceof Hf)).length;if(h>1||h>0&&m>0)throw new ne(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class Hf extends qf{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Hf(e,t,i)}_apply(e){const t=this._parse(e);return X0(e._query,t),new Yr(e.firestore,e.converter,jd(e._query,t))}_parse(e){const t=hl(e.firestore);return(function(l,h,m,g,v,T,x){let I;if(v.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ne(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){Vy(x,T);const $=[];for(const Y of x)$.push(Dy(g,l,Y));I={arrayValue:{values:$}}}else I=Dy(g,l,x)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||Vy(x,T),I=YS(m,h,x,T==="in"||T==="not-in");return vt.create(v,T,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Wf extends $f{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wf(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:sr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)X0(h,g),h=jd(h,g)})(e._query,t),new Yr(e.firestore,e.converter,jd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gf extends qf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Gf(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ne(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ya(l,h)})(e._query,this._field,this._direction);return new Yr(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Bo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Qd(r,e="asc"){const t=e,i=Bf("orderBy",r);return Gf._create(i,t)}class Kf extends qf{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Kf(e,t,i)}_apply(e){return new Yr(e.firestore,e.converter,ec(e._query,this._limit,this._limitType))}}function ex(r){return Kf._create("limit",r,"F")}function Dy(r,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new ne(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gv(e)&&t.indexOf("/")!==-1)throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ge.fromString(t));if(!pe.isDocumentKey(i))throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Qg(r,new pe(i))}if(t instanceof ft)return Qg(r,t._key);throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yc(t)}.`)}function Vy(r,e){if(!Array.isArray(r)||r.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function X0(r,e){const t=(function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Y0{convertValue(e,t="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Hs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Ju].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>dt(h.doubleValue)));return new Er(l)}convertGeoPoint(e){return new wr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=_c(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ka(e));default:return null}}convertTimestamp(e){const t=js(e);return new tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ge.fromString(e);Fe(v0(i),9688,{name:e});const o=new Qa(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Wr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class tx extends Y0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,t)}}class To{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vs extends lc{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $u(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Bf("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vs._jsonSchema={type:_t("string",Vs._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class $u extends Vs{data(e={}){return super.data(e)}}class Ei{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new To(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new $u(this._firestore,this._userDataWriter,i.key,i,new To(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new $u(o._firestore,o._userDataWriter,m.doc.key,m.doc,new To(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new $u(o._firestore,o._userDataWriter,m.doc.key,m.doc,new To(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,T=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:nx(m.type),doc:g,oldIndex:v,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ei._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nx(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:r})}}Ei._jsonSchemaVersion="firestore/querySnapshot/1.0",Ei._jsonSchema={type:_t("string",Ei._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};class bc extends Y0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,t)}}function Xd(r){r=rr(r,Yr);const e=rr(r.firestore,$s),t=cl(e),i=new bc(e);return Q0(r._query),qS(t,r._query).then((o=>new Ei(e,i,r,o)))}function rx(r,e,t,...i){r=rr(r,ft);const o=rr(r.firestore,$s),l=hl(o);let h;return h=typeof(e=wt(e))=="string"||e instanceof qo?Ff(l,"updateDoc",r._key,e,t,i):jf(l,"updateDoc",r._key,e),Xf(o,[h.toMutation(r._key,Ot.exists(!0))])}function Yd(r,e){const t=rr(r.firestore,$s),i=xo(r),o=Qf(r.converter,e);return Xf(t,[Mf(hl(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,Ot.exists(!1))]).then((()=>i))}function sx(r,...e){var t,i,o;r=wt(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||by(e[h])||(l=e[h++]);const m={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(by(e[h])){const x=e[h];e[h]=(t=x.next)===null||t===void 0?void 0:t.bind(x),e[h+1]=(i=x.error)===null||i===void 0?void 0:i.bind(x),e[h+2]=(o=x.complete)===null||o===void 0?void 0:o.bind(x)}let g,v,T;if(r instanceof ft)v=rr(r.firestore,$s),T=mf(r._key.path),g={next:x=>{e[h]&&e[h](ix(v,r,x))},error:e[h+1],complete:e[h+2]};else{const x=rr(r,Yr);v=rr(x.firestore,$s),T=x._query;const I=new bc(v);g={next:U=>{e[h]&&e[h](new Ei(v,I,x,U))},error:e[h+1],complete:e[h+2]},Q0(r._query)}return(function(I,U,$,Y){const B=new z0(Y),fe=new b0(U,B,$);return I.asyncQueue.enqueueAndForget((async()=>P0(await Gd(I),fe))),()=>{B.Ou(),I.asyncQueue.enqueueAndForget((async()=>N0(await Gd(I),fe)))}})(cl(v),T,m,g)}function Xf(r,e){return(function(i,o){const l=new qr;return i.asyncQueue.enqueueAndForget((async()=>RS(await BS(i),o,l))),l.promise})(cl(r),e)}function ix(r,e,t){const i=t.docs.get(e._key),o=new bc(r);return new Vs(r,o,e._key,i,new To(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=hl(e)}set(e,t,i){this._verifyNotCommitted();const o=Cs(e,this._firestore),l=Qf(o.converter,t,i),h=Mf(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,i);return this._mutations.push(h.toMutation(o._key,Ot.none())),this}update(e,t,i,...o){this._verifyNotCommitted();const l=Cs(e,this._firestore);let h;return h=typeof(t=wt(t))=="string"||t instanceof qo?Ff(this._dataReader,"WriteBatch.update",l._key,t,i,o):jf(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,Ot.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Cs(e,this._firestore);return this._mutations=this._mutations.concat(new Sc(t._key,Ot.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ne(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Cs(r,e){if((r=wt(r)).firestore!==e)throw new ne(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=hl(e)}get(e){const t=Cs(e,this._firestore),i=new tx(this._firestore);return this._transaction.lookup([t._key]).then((o=>{if(!o||o.length!==1)return ye(24041);const l=o[0];if(l.isFoundDocument())return new lc(this._firestore,i,l.key,l,t.converter);if(l.isNoDocument())return new lc(this._firestore,i,t._key,null,t.converter);throw ye(18433,{doc:l})}))}set(e,t,i){const o=Cs(e,this._firestore),l=Qf(o.converter,t,i),h=Mf(this._dataReader,"Transaction.set",o._key,l,o.converter!==null,i);return this._transaction.set(o._key,h),this}update(e,t,i,...o){const l=Cs(e,this._firestore);let h;return h=typeof(t=wt(t))=="string"||t instanceof qo?Ff(this._dataReader,"Transaction.update",l._key,t,i,o):jf(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,h),this}delete(e){const t=Cs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux extends lx{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Cs(e,this._firestore),i=new bc(this._firestore);return super.get(e).then((o=>new Vs(this._firestore,i,t._key,o._document,new To(!1,!1),t.converter)))}}function cx(r,e,t){r=rr(r,$s);const i=Object.assign(Object.assign({},ox),t);return(function(l){if(l.maxAttempts<1)throw new ne(q.INVALID_ARGUMENT,"Max attempts must be at least 1")})(i),(function(l,h,m){const g=new qr;return l.asyncQueue.enqueueAndForget((async()=>{const v=await $S(l);new FS(l.asyncQueue,v,m,h,g).zu()})),g.promise})(cl(r),(o=>e(new ux(r,o))),i)}function Ao(){return new Lf("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(r){return cl(r=rr(r,$s)),new ax(r,(e=>Xf(r,e)))}(function(e,t=!0){(function(o){Fo=o})(jo),Po(new Ii("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),m=new $s(new ZE(i.getProvider("auth-internal")),new nT(h,i.getProvider("app-check-internal")),(function(v,T){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ne(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(v.options.projectId,T)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),Ns(Og,Mg,e),Ns(Og,Mg,"esm2017")})();function Yf(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function J0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hx=J0,Z0=new nl("auth","Firebase",J0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new sf("@firebase/auth");function dx(r,...e){cc.logLevel<=Ne.WARN&&cc.warn(`Auth (${jo}): ${r}`,...e)}function qu(r,...e){cc.logLevel<=Ne.ERROR&&cc.error(`Auth (${jo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(r,...e){throw Jf(r,...e)}function Tr(r,...e){return Jf(r,...e)}function e_(r,e,t){const i=Object.assign(Object.assign({},hx()),{[e]:t});return new nl("auth","Firebase",i).create(e,{appName:r.name})}function Os(r){return e_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return Z0.create(r,...e)}function Ie(r,e,...t){if(!r)throw Jf(e,...t)}function Br(r){const e="INTERNAL ASSERTION FAILED: "+r;throw qu(e),new Error(e)}function Qr(r,e){r||Br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function fx(){return Oy()==="http:"||Oy()==="https:"}function Oy(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fx()||C1()||"connection"in navigator)?navigator.onLine:!0}function mx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qr(t>e,"Short delay should be less than long delay!"),this.isMobile=x1()||R1()}get(){return px()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(r,e){Qr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vx=new fl(3e4,6e4);function Dc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ho(r,e,t,i,o={}){return n_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const m=rl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},l);return k1()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Lo(r.emulatorConfig.host)&&(v.credentials="include"),t_.fetch()(await s_(r,r.config.apiHost,t,m),v)})}async function n_(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},gx),e);try{const o=new _x(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Mu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Mu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Mu(r,"user-disabled",h);const T=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw e_(r,T,v);Kr(r,T)}}catch(o){if(o instanceof Xr)throw o;Kr(r,"network-request-failed",{message:String(o)})}}async function r_(r,e,t,i,o={}){const l=await Ho(r,e,t,i,o);return"mfaPendingCredential"in l&&Kr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function s_(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?Zf(r.config,o):`${r.config.apiScheme}://${o}`;return yx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class _x{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Tr(this.auth,"network-request-failed")),vx.get())})}}function Mu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Tr(r,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(r,e){return Ho(r,"POST","/v1/accounts:delete",e)}async function hc(r,e){return Ho(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ex(r,e=!1){const t=wt(r),i=await t.getIdToken(e),o=ep(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ha(Id(o.auth_time)),issuedAtTime:Ha(Id(o.iat)),expirationTime:Ha(Id(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Id(r){return Number(r)*1e3}function ep(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=lv(t);return o?JSON.parse(o):(qu("Failed to decode base64 JWT payload"),null)}catch(o){return qu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function My(r){const e=ep(r);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Xr&&Tx(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function Tx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ha(this.lastLoginAt),this.creationTime=Ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(r){var e;const t=r.auth,i=await r.getIdToken(),o=await tl(r,hc(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?i_(l.providerUserInfo):[],m=xx(r.providerData,h),g=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(m!=null&&m.length),T=g?v:!1,x={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Zd(l.createdAt,l.lastLoginAt),isAnonymous:T};Object.assign(r,x)}async function Sx(r){const e=wt(r);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xx(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function i_(r){return r.map(e=>{var{providerId:t}=e,i=Yf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(r,e){const t=await n_(r,{},async()=>{const i=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await s_(r,o,"/v1/token",`key=${l}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:i};return r.emulatorConfig&&Lo(r.emulatorConfig.host)&&(g.credentials="include"),t_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kx(r,e){return Ho(r,"POST","/v2/accounts:revokeToken",Dc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):My(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=My(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await Ax(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new ko;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ko,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r,e){Ie(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ix(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Zd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await tl(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ex(this,e)}reload(){return Sx(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await dc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(Os(this.auth));const e=await this.getIdToken();return await tl(this,wx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,m,g,v,T;const x=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,fe=(v=t.createdAt)!==null&&v!==void 0?v:void 0,me=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ge,emailVerified:Ae,isAnonymous:Oe,providerData:ke,stsTokenManager:k}=t;Ie(ge&&k,e,"internal-error");const S=ko.fromJSON(this.name,k);Ie(typeof ge=="string",e,"internal-error"),Ts(x,e.name),Ts(I,e.name),Ie(typeof Ae=="boolean",e,"internal-error"),Ie(typeof Oe=="boolean",e,"internal-error"),Ts(U,e.name),Ts($,e.name),Ts(Y,e.name),Ts(B,e.name),Ts(fe,e.name),Ts(me,e.name);const R=new nr({uid:ge,auth:e,email:I,emailVerified:Ae,displayName:x,isAnonymous:Oe,photoURL:$,phoneNumber:U,tenantId:Y,stsTokenManager:S,createdAt:fe,lastLoginAt:me});return ke&&Array.isArray(ke)&&(R.providerData=ke.map(N=>Object.assign({},N))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new ko;o.updateFromServerResponse(t);const l=new nr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await dc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?i_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new ko;m.updateFromIdToken(i);const g=new nr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Zd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Map;function $r(r){Qr(r instanceof Function,"Expected a class definition");let e=Ly.get(r);return e?(Qr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ly.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}o_.type="NONE";const jy=o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(r,e,t){return`firebase:${r}:${e}:${t}`}class Co{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Hu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Hu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await hc(this.auth,{idToken:e}).catch(()=>{});return t?nr._fromGetAccountInfoResponse(this.auth,t,e):null}return nr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Co($r(jy),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||$r(jy);const h=Hu(i,e.config.apiKey,e.name);let m=null;for(const v of t)try{const T=await v._get(h);if(T){let x;if(typeof T=="string"){const I=await hc(e,{idToken:T}).catch(()=>{});if(!I)break;x=await nr._fromGetAccountInfoResponse(e,I,T)}else x=nr._fromJSON(e,T);v!==l&&(m=x),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Co(l,e,i):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new Co(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(f_(e))return"Webos";if(l_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(h_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function a_(r=Xt()){return/firefox\//i.test(r)}function l_(r=Xt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(r=Xt()){return/crios\//i.test(r)}function c_(r=Xt()){return/iemobile/i.test(r)}function h_(r=Xt()){return/android/i.test(r)}function d_(r=Xt()){return/blackberry/i.test(r)}function f_(r=Xt()){return/webos/i.test(r)}function tp(r=Xt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Cx(r=Xt()){var e;return tp(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rx(){return P1()&&document.documentMode===10}function p_(r=Xt()){return tp(r)||h_(r)||f_(r)||d_(r)||/windows phone/i.test(r)||c_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(r,e=[]){let t;switch(r){case"Browser":t=Fy(Xt());break;case"Worker":t=`${Fy(Xt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(r,e={}){return Ho(r,"GET","/v2/passwordPolicy",Dc(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=6;class Dx{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:bx,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uy(this),this.idTokenSubscription=new Uy(this),this.beforeStateQueue=new Px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$r(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hc(this,{idToken:e}),i=await nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(Os(this));const t=e?wt(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(Os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(Os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nx(this),t=new Dx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await kx(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$r(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[$r(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(tr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Vc(r){return wt(r)}class Uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=j1(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ox(r){np=r}function Mx(r){return np.loadJS(r)}function Lx(){return np.gapiScript}function jx(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(r,e){const t=af(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ti(l,e??{}))return o;Kr(o,"already-initialized")}return t.initialize({options:e})}function Ux(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map($r);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zx(r,e,t){const i=Vc(r);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=g_(e),{host:h,port:m}=Bx(e),g=m===null?"":`:${m}`,v={url:`${l}//${h}${g}/`},T=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(Ti(v,i.config.emulator)&&Ti(T,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=T,i.settings.appVerificationDisabledForTesting=!0,Lo(h)?(dv(`${l}//${h}${g}`),fv("Auth",!0)):$x()}function g_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Bx(r){const e=g_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:zy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:zy(h)}}}function zy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function $x(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(r,e){return r_(r,"POST","/v1/accounts:signInWithIdp",Dc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx="http://localhost";class Ai extends y_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Yf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new Ai(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ro(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ro(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ro(e,t)}buildRequest(){const e={requestUri:qx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends v_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends pl{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.FACEBOOK_SIGN_IN_METHOD="facebook.com";Is.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ai._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ss.credential(t,i)}catch{return null}}}Ss.GOOGLE_SIGN_IN_METHOD="google.com";Ss.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends pl{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xs.credential(e.oauthAccessToken)}catch{return null}}}xs.GITHUB_SIGN_IN_METHOD="github.com";xs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends pl{constructor(){super("twitter.com")}static credential(e,t){return Ai._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return As.credential(t,i)}catch{return null}}}As.TWITTER_SIGN_IN_METHOD="twitter.com";As.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(r,e){return r_(r,"POST","/v1/accounts:signUp",Dc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await nr._fromIdTokenResponse(e,i,o),h=By(i);return new qs({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=By(i);return new qs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function By(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(r){var e;if(tr(r.app))return Promise.reject(Os(r));const t=Vc(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new qs({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Hx(t,{returnSecureToken:!0}),o=await qs._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends Xr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new fc(e,t,i,o)}}function __(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(r,l,e,i):l})}async function Gx(r,e,t=!1){const i=await tl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return qs._forOperation(r,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(r,e,t=!1){const{auth:i}=r;if(tr(i.app))return Promise.reject(Os(i));const o="reauthenticate";try{const l=await tl(r,__(i,o,e,r),t);Ie(l.idToken,i,"internal-error");const h=ep(l.idToken);Ie(h,i,"internal-error");const{sub:m}=h;return Ie(r.uid===m,i,"user-mismatch"),qs._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Kr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(r,e,t=!1){if(tr(r.app))return Promise.reject(Os(r));const i="signIn",o=await __(r,i,e),l=await qs._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}function Xx(r,e,t,i){return wt(r).onIdTokenChanged(e,t,i)}function Yx(r,e,t){return wt(r).beforeAuthStateChanged(e,t)}function Jx(r,e,t,i){return wt(r).onAuthStateChanged(e,t,i)}const pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=1e3,eA=10;class E_ extends w_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);Rx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,eA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}E_.type="LOCAL";const tA=E_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_ extends w_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}T_.type="SESSION";const I_=T_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Oc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,l)),g=await nA(m);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const v=rp("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(x){const I=x;if(I.data.eventId===v)switch(I.data.status){case"ack":clearTimeout(T),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(I.data.response);break;default:clearTimeout(T),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return window}function sA(r){Ir().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return typeof Ir().WorkerGlobalScope<"u"&&typeof Ir().importScripts=="function"}async function iA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oA(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function aA(){return S_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebaseLocalStorageDb",lA=1,mc="firebaseLocalStorage",A_="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mc(r,e){return r.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function uA(){const r=indexedDB.deleteDatabase(x_);return new ml(r).toPromise()}function ef(){const r=indexedDB.open(x_,lA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(mc,{keyPath:A_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(mc)?e(i):(i.close(),await uA(),e(await ef()))})})}async function $y(r,e,t){const i=Mc(r,!0).put({[A_]:e,value:t});return new ml(i).toPromise()}async function cA(r,e){const t=Mc(r,!1).get(e),i=await new ml(t).toPromise();return i===void 0?null:i.value}function qy(r,e){const t=Mc(r,!0).delete(e);return new ml(t).toPromise()}const hA=800,dA=3;class k_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ef(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>dA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(aA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await iA(),!this.activeServiceWorker)return;this.sender=new rA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ef();return await $y(e,pc,"1"),await qy(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>$y(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>cA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Mc(o,!1).getAll();return new ml(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k_.type="LOCAL";const fA=k_;new fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(r,e){return e?$r(e):(Ie(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp extends y_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mA(r){return Qx(r.auth,new sp(r),r.bypassAuthState)}function gA(r){const{auth:e,user:t}=r;return Ie(t,e,"internal-error"),Kx(t,new sp(r),r.bypassAuthState)}async function yA(r){const{auth:e,user:t}=r;return Ie(t,e,"internal-error"),Gx(t,new sp(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mA;case"linkViaPopup":case"linkViaRedirect":return yA;case"reauthViaPopup":case"reauthViaRedirect":return gA;default:Kr(this.auth,"internal-error")}}resolve(e){Qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=new fl(2e3,1e4);class Io extends C_{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Qr(this.filter.length===1,"Popup operations only handle one event");const e=rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vA.get())};e()}}Io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="pendingRedirect",Wu=new Map;class wA extends C_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Wu.get(this.auth._key());if(!e){try{const i=await EA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Wu.set(this.auth._key(),e)}return this.bypassAuthState||Wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EA(r,e){const t=SA(e),i=IA(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function TA(r,e){Wu.set(r._key(),e)}function IA(r){return $r(r._redirectPersistence)}function SA(r){return Hu(_A,r.config.apiKey,r.name)}async function xA(r,e,t=!1){if(tr(r.app))return Promise.reject(Os(r));const i=Vc(r),o=pA(i,e),h=await new wA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=600*1e3;class kA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!R_(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Tr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hy(e))}saveEventToCache(e){this.cachedEventUids.add(Hy(e)),this.lastProcessedEventTime=Date.now()}}function Hy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function R_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return R_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(r,e={}){return Ho(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NA=/^https?/;async function bA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await RA(r);for(const t of e)try{if(DA(t))return}catch{}Kr(r,"unauthorized-domain")}function DA(r){const e=Jd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!NA.test(t))return!1;if(PA.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new fl(3e4,6e4);function Wy(){const r=Ir().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function OA(r){return new Promise((e,t)=>{var i,o,l;function h(){Wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wy(),t(Tr(r,"network-request-failed"))},timeout:VA.get()})}if(!((o=(i=Ir().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Ir().gapi)===null||l===void 0)&&l.load)h();else{const m=jx("iframefcb");return Ir()[m]=()=>{gapi.load?h():t(Tr(r,"network-request-failed"))},Mx(`${Lx()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function MA(r){return Gu=Gu||OA(r),Gu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new fl(5e3,15e3),jA="__/auth/iframe",FA="emulator/auth/iframe",UA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BA(r){const e=r.config;Ie(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Zf(e,FA):`https://${r.config.authDomain}/${jA}`,i={apiKey:e.apiKey,appName:r.name,v:jo},o=zA.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${rl(i).slice(1)}`}async function $A(r){const e=await MA(r),t=Ir().gapi;return Ie(t,r,"internal-error"),e.open({where:document.body,url:BA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=Tr(r,"network-request-failed"),m=Ir().setTimeout(()=>{l(h)},LA.get());function g(){Ir().clearTimeout(m),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HA=500,WA=600,GA="_blank",KA="http://localhost";class Gy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QA(r,e,t,i=HA,o=WA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let m="";const g=Object.assign(Object.assign({},qA),{width:i.toString(),height:o.toString(),top:l,left:h}),v=Xt().toLowerCase();t&&(m=u_(v)?GA:t),a_(v)&&(e=e||KA,g.scrollbars="yes");const T=Object.entries(g).reduce((I,[U,$])=>`${I}${U}=${$},`,"");if(Cx(v)&&m!=="_self")return XA(e||"",m),new Gy(null);const x=window.open(e||"",m,T);Ie(x,r,"popup-blocked");try{x.focus()}catch{}return new Gy(x)}function XA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="__/auth/handler",JA="emulator/auth/handler",ZA=encodeURIComponent("fac");async function Ky(r,e,t,i,o,l){Ie(r.config.authDomain,r,"auth-domain-config-required"),Ie(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:jo,eventId:o};if(e instanceof v_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",L1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,x]of Object.entries({}))h[T]=x}if(e instanceof pl){const T=e.getScopes().filter(x=>x!=="");T.length>0&&(h.scopes=T.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await r._getAppCheckToken(),v=g?`#${ZA}=${encodeURIComponent(g)}`:"";return`${e2(r)}?${rl(m).slice(1)}${v}`}function e2({config:r}){return r.emulator?Zf(r,JA):`https://${r.authDomain}/${YA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="webStorageSupport";class t2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I_,this._completeRedirectFn=xA,this._overrideRedirectResult=TA}async _openPopup(e,t,i,o){var l;Qr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Ky(e,t,i,Jd(),o);return QA(e,h,rp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ky(e,t,i,Jd(),o);return sA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Qr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await $A(e),i=new kA(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sd,{type:Sd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Sd];h!==void 0&&t(!!h),Kr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return p_()||l_()||tp()}}const n2=t2;var Qy="@firebase/auth",Xy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i2(r){Po(new Ii("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=i.options;Ie(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(r)},v=new Vx(i,o,l,g);return Ux(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Po(new Ii("auth-internal",e=>{const t=Vc(e.getProvider("auth").getImmediate());return(i=>new r2(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ns(Qy,Xy,s2(r)),Ns(Qy,Xy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=300,a2=hv("authIdTokenMaxAge")||o2;let Yy=null;const l2=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>a2)return;const o=t==null?void 0:t.token;Yy!==o&&(Yy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function u2(r=yv()){const e=af(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Fx(r,{popupRedirectResolver:n2,persistence:[fA,tA,I_]}),i=hv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=l2(l.toString());Yx(t,h,()=>h(t.currentUser)),Xx(t,m=>h(m))}}const o=uv("auth");return o&&zx(t,`http://${o}`),t}function c2(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Ox({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=Tr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",c2().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i2("Browser");const h2={apiKey:"AIzaSyCdFH7WL30FLTUzMv1ubQXnq4D5ZrpoxL0",authDomain:"job-inn-ade9f.firebaseapp.com",projectId:"job-inn-ade9f",storageBucket:"job-inn-ade9f.firebasestorage.app",messagingSenderId:"490616814897",appId:"1:490616814897:web:d27d52af755f5b31058410"},P_=gv(h2),Dt=WS(P_),xd=u2(P_),d2="job-inn",rn={companies:"companies",salaryEntries:"salary_entries",discussions:"discussions",messages:"messages"},ip=()=>[{id:"c1",name:"Google",aliases:["谷歌","美商科高","google"],industry:"軟體/網路",stats:{median:185e4,avg:22e5,count:450,year:112}},{id:"c2",name:"TSMC 台積電",aliases:["tsmc","台灣積體電路","台積"],industry:"半導體/電子",stats:{median:25e5,avg:317e4,count:6e4,year:112}},{id:"c3",name:"MediaTek 聯發科",aliases:["mediatek","發哥","聯發科技"],industry:"半導體/電子",stats:{median:3e6,avg:38e5,count:12e3,year:112}},{id:"c4",name:"Shopee 蝦皮",aliases:["shopee","蝦皮購物","樂購蝦皮"],industry:"電商/零售",stats:{median:11e5,avg:13e5,count:800,year:112}},{id:"c5",name:"LINE Taiwan",aliases:["line","連線","台灣連線"],industry:"軟體/網路",stats:{median:16e5,avg:19e5,count:600,year:112}},{id:"c6",name:"Uber",aliases:["優步"],industry:"軟體/網路",stats:{median:17e5,avg:21e5,count:200,year:112}},{id:"c7",name:"Foodpanda",aliases:["富胖達","熊貓"],industry:"軟體/網路",stats:{median:9e5,avg:11e5,count:500,year:112}},{id:"c8",name:"ASUS 華碩",aliases:["asus","華碩電腦"],industry:"半導體/電子",stats:{median:13e5,avg:16e5,count:8e3,year:112}},{id:"c9",name:"Acer 宏碁",aliases:["acer"],industry:"半導體/電子",stats:{median:115e4,avg:14e5,count:5e3,year:112}},{id:"c10",name:"Trend Micro 趨勢科技",aliases:["trend","趨勢"],industry:"軟體/網路",stats:{median:155e4,avg:18e5,count:1500,year:112}},{id:"c11",name:"Dcard",aliases:["狄卡"],industry:"軟體/網路",stats:{median:95e4,avg:11e5,count:300,year:112}},{id:"c12",name:"Momo 富邦媒",aliases:["momo","富邦媒體"],industry:"電商/零售",stats:{median:85e4,avg:1e6,count:2e3,year:112}},{id:"c13",name:"國泰世華",aliases:["cathay","國泰金控"],industry:"金融/銀行",stats:{median:105e4,avg:125e4,count:9e3,year:112}},{id:"c14",name:"中國信託",aliases:["ctbc","中信"],industry:"金融/銀行",stats:{median:11e5,avg:135e4,count:1e4,year:112}},{id:"c15",name:"Gogoro",aliases:["睿能創意"],industry:"傳統製造",stats:{median:9e5,avg:105e4,count:2500,year:112}},{id:"c16",name:"Nvidia",aliases:["輝達","nv"],industry:"半導體/電子",stats:{median:35e5,avg:45e5,count:1500,year:112}},{id:"c17",name:"Microsoft",aliases:["微軟"],industry:"軟體/網路",stats:{median:22e5,avg:28e5,count:600,year:112}},{id:"c18",name:"ByteDance",aliases:["字節跳動","tiktok","抖音"],industry:"軟體/網路",stats:{median:2e6,avg:25e5,count:300,year:112}}],N_=(r=50)=>{const e=ip(),t=["資深軟體工程師","前端工程師","後端工程師","產品經理 (PM)","UI/UX 設計師","行銷企劃","資料科學家"],i=["台北市","新竹縣市","遠端 (Remote)"],o=["年終獎金很敢給，但相對壓力也大，適合想拚高薪的人。","辦公室環境優美，有免費零食櫃和咖啡，WFH 政策很彈性。","部門氣氛很好，前輩都很願意教學，適合新鮮人練功。","常常需要跟國外團隊開會，英文能力要好，時差比較辛苦。","專案時程通常很趕，加班是常態，要有心理準備。","雖然底薪在業界不算頂尖，但生活品質 (WLB) 很好，準時上下班。","內部流程有點繁瑣，大公司的通病，但福利制度很完善。","同事技術都很強，Code Review 很嚴格，可以學到很多 best practice。","面試過程有三關，白板題要多刷，考驗演算法能力。","每季都有 Team Building，部門聚餐預算很高，吃得很好。","升遷制度透明，只要有戰功就有機會，不怕被埋沒。","使用的技術疊比較舊，維護 legacy code 比較痛苦。","雖然是傳產，但正在推動數位轉型，有很多發揮空間。","主管很有能力，跟著他可以學到很多專案管理技巧。"],l=[];for(let h=0;h<r;h++){const m=e[Math.floor(Math.random()*e.length)],g=4e4+Math.floor(Math.random()*160)*1e3;l.push({id:`mock-${h+1}`,company:m.name,industry:m.industry,title:t[Math.floor(Math.random()*t.length)],department:"研發部",annual_package:`${Math.floor(g*14/1e4)}萬`,salary:g.toString(),currency:"TWD",period:"月薪",experience:"3.0",location:i[Math.floor(Math.random()*i.length)],content:o[Math.floor(Math.random()*o.length)],status:"approved",createdAt:{seconds:Date.now()/1e3-Math.floor(Math.random()*86400*30)},interactions:[],authorId:`mock-user-${h}`})}return l.sort((h,m)=>m.createdAt.seconds-h.createdAt.seconds)};async function f2(){if(console.log("🌱 Seeding database..."),!(await Xd(uc(zr(Dt,rn.companies),ex(1)))).empty)return console.log("⚠️ Database already has data. Skipping seed."),!1;const e=Td(Dt),t=ip();for(const l of t){const h=xo(Dt,rn.companies,l.id);e.set(h,{name:l.name,aliases:l.aliases||[],industry:l.industry,stats:l.stats||{median:0,avg:0,count:0,year:112},createdAt:Ao()})}await e.commit(),console.log(`✅ Seeded ${t.length} companies`);const i=N_(30),o=Td(Dt);for(const l of i){const h=xo(zr(Dt,rn.salaryEntries));o.set(h,{company:l.company,industry:l.industry,title:l.title,department:l.department,annual_package:l.annual_package,salary:l.salary,currency:l.currency,period:l.period,experience:l.experience,location:l.location,content:l.content,status:"approved",interactions:[],authorId:"seed",createdAt:Ao()})}await o.commit(),console.log(`✅ Seeded ${i.length} salary entries`);for(let l=0;l<3;l++){const h=t[l],m=[{user:"TechGuy_99",type:"推",content:`${h.name} 的風氣真的不錯，WFH 很自由。`},{user:"FreshMan",type:"→",content:"請問面試大概多久會收到通知？"},{user:"AngryBird",type:"噓",content:"年終今年砍很多，不要被騙了，塊陶阿！"},{user:"HR_Helper",type:"推",content:"內部福利其實一直在增加，免費午餐回來了。"}],g=Td(Dt);for(const v of m){const T=xo(zr(Dt,rn.discussions,h.id,rn.messages));g.set(T,{...v,authorId:"seed",createdAt:Ao()})}await g.commit()}return console.log("✅ Seeded discussion threads"),console.log("🎉 Seed complete!"),!0}const p2=({companies:r,filters:e,setFilters:t,activeView:i,viewingCompany:o,currentRole:l,setCurrentRole:h,onCompanyClick:m,onBackToHome:g,requireLogin:v,onShowSubmitModal:T,onShowSettingsModal:x})=>w.jsxs("div",{className:"w-72 flex-shrink-0 bg-[#F9FAFB] border-r border-slate-200 flex flex-col h-full hidden md:flex",children:[w.jsxs("div",{className:"p-4 border-b border-slate-200 flex items-center gap-2 flex-shrink-0",children:[w.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm",children:w.jsx(sv,{size:16})}),w.jsx("h1",{className:"font-semibold text-slate-800 tracking-tight",children:"Salary Notebook"})]}),w.jsxs("div",{className:"p-4 space-y-4 overflow-y-auto flex-1 custom-scrollbar",children:[w.jsxs("button",{onClick:()=>!v()&&T(),className:"w-full flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-slate-700 font-medium group",children:[w.jsx("div",{className:"w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 group-hover:scale-110 transition-transform",children:w.jsx(nv,{size:18})}),"新增薪資情報"]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1",children:"資料來源 (公司)"}),w.jsxs("div",{className:"space-y-1",children:[w.jsxs("button",{onClick:()=>{t({...e,selectedCompany:null}),g()},className:`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${!e.selectedCompany&&i==="home"?"bg-indigo-100 text-indigo-700 font-medium":"text-slate-600 hover:bg-slate-100"}`,children:[w.jsx(r1,{size:16}),"全部情報"]}),r.map(I=>w.jsxs("button",{onClick:()=>m(I.name),className:`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${(o==null?void 0:o.name)===I.name&&i==="company-detail"?"bg-indigo-100 text-indigo-700 font-medium":"text-slate-600 hover:bg-slate-100"}`,children:[w.jsx("div",{className:"w-4 h-4 rounded bg-slate-200 flex items-center justify-center text-[8px] text-slate-500 font-bold flex-shrink-0",children:I.name.charAt(0)}),w.jsx("span",{className:"truncate",children:I.name})]},I.id))]})]})]}),w.jsxs("div",{className:"p-4 border-t border-slate-200 bg-slate-50 flex-shrink-0",children:[w.jsx("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1",children:"設定"}),w.jsxs("div",{className:"space-y-1",children:[w.jsxs("button",{onClick:x,className:"w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-slate-600 hover:bg-slate-100",children:[w.jsx(rv,{size:16})," 系統管理"]}),w.jsxs("button",{onClick:()=>{const I=["guest","user","admin"],U=I[(I.indexOf(l)+1)%I.length];h(U)},className:"w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-slate-600 hover:bg-slate-100",children:[w.jsx(iv,{size:16})," 切換身份: ",l]})]})]})]}),m2=Mo.memo(p2),g2=({activeTab:r,setActiveTab:e,filters:t,setFilters:i,onBackToHome:o,requireLogin:l,onShowSubmitModal:h})=>w.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-16 flex items-center justify-around z-40 pb-safe",children:[w.jsxs("button",{onClick:()=>{e("home"),i({...t,selectedCompany:null}),o()},className:`flex flex-col items-center gap-1 ${r==="home"?"text-indigo-600":"text-slate-400"}`,children:[w.jsx(t1,{size:24}),w.jsx("span",{className:"text-[10px] font-medium",children:"首頁"})]}),w.jsxs("button",{onClick:()=>!l()&&h(),className:"flex flex-col items-center gap-1 text-slate-400",children:[w.jsx("div",{className:"w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg -mt-5 border-4 border-slate-50",children:w.jsx(nv,{size:24})}),w.jsx("span",{className:"text-[10px] font-medium",children:"新增"})]}),w.jsxs("button",{onClick:()=>e("settings"),className:`flex flex-col items-center gap-1 ${r==="settings"?"text-indigo-600":"text-slate-400"}`,children:[w.jsx(rv,{size:24}),w.jsx("span",{className:"text-[10px] font-medium",children:"設定"})]})]}),y2=Mo.memo(g2),v2=({company:r,onBack:e,role:t,currentUserId:i})=>{var ke;const[o,l]=ae.useState("overview"),[h,m]=ae.useState([]),[g,v]=ae.useState(!0),[T,x]=ae.useState(""),[I,U]=ae.useState("推"),[$,Y]=ae.useState(!1),[B,fe]=ae.useState(r.stats||{median:0,avg:0,count:0,year:112});ae.useEffect(()=>{if(!(r!=null&&r.id))return;v(!0);const k=zr(Dt,rn.discussions,r.id,rn.messages),S=uc(k,Qd("createdAt","desc")),R=sx(S,N=>{const D=N.docs.map(V=>({id:V.id,...V.data(),time:V.data().createdAt?me(V.data().createdAt):"剛剛"}));m(D),v(!1)},N=>{console.error("Discussion subscription error:",N),v(!1)});return()=>R()},[r==null?void 0:r.id]);const me=k=>{if(!(k!=null&&k.seconds))return"剛剛";const S=new Date(k.seconds*1e3),N=(new Date-S)/1e3;return N<60?"剛剛":N<3600?`${Math.floor(N/60)} 分鐘前`:N<86400?`${Math.floor(N/3600)} 小時前`:`${S.getMonth()+1}/${S.getDate()}`},ge=ae.useCallback(async()=>{if(!T.trim())return;const k=t==="guest"?"Guest_User":`User_${(i==null?void 0:i.slice(-4))||"TW"}`;try{const S=zr(Dt,rn.discussions,r.id,rn.messages);await Yd(S,{user:k,type:I,content:T.trim(),authorId:i||"anonymous",createdAt:Ao()}),x("")}catch(S){console.error("Failed to post comment:",S)}},[T,I,r.id,i,t]),Ae=ae.useCallback(async()=>{try{const k=xo(Dt,rn.companies,r.id);await rx(k,{stats:B}),Y(!1)}catch(k){console.error("Failed to save stats:",k)}},[r.id,B]),Oe=k=>k?parseInt(k).toLocaleString():"-";return w.jsxs("div",{className:"flex flex-col h-full bg-slate-50 animate-in slide-in-from-right-4 fade-in duration-300",children:[w.jsxs("div",{className:"bg-white border-b border-slate-200 sticky top-0 z-20",children:[w.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-3 flex items-center gap-4",children:[w.jsx("button",{onClick:e,className:"p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors",children:w.jsx(Kw,{size:20})}),w.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[w.jsx("div",{className:"w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm",children:r.name.charAt(0)}),w.jsxs("div",{children:[w.jsx("h1",{className:"font-bold text-lg text-slate-900 leading-tight",children:r.name}),w.jsxs("div",{className:"text-xs text-slate-500 flex items-center gap-2",children:[w.jsx(nf,{size:12})," ",r.industry,r.aliases&&w.jsx("span",{className:"text-slate-300",children:"|"}),w.jsx("span",{className:"text-slate-400",children:(ke=r.aliases)==null?void 0:ke[0]})]})]})]})]}),w.jsxs("div",{className:"max-w-3xl mx-auto px-4 flex gap-6 text-sm font-medium",children:[w.jsx("button",{onClick:()=>l("overview"),className:`pb-3 border-b-2 transition-colors ${o==="overview"?"border-indigo-600 text-indigo-600":"border-transparent text-slate-500 hover:text-slate-800"}`,children:"公司概況 & 薪資"}),w.jsxs("button",{onClick:()=>l("discussion"),className:`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${o==="discussion"?"border-indigo-600 text-indigo-600":"border-transparent text-slate-500 hover:text-slate-800"}`,children:["討論串",w.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse",title:"即時同步"})]})]})]}),w.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar",children:w.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[o==="overview"&&w.jsxs("div",{className:"space-y-6 animate-in fade-in zoom-in-95",children:[w.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",children:[w.jsxs("div",{className:"p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(n1,{className:"text-slate-400",size:18}),w.jsx("h3",{className:"font-bold text-slate-700",children:"主計處 / 公開資訊觀測站 申報資料"})]}),$?w.jsxs("button",{onClick:Ae,className:"text-xs flex items-center gap-1 text-emerald-600 hover:bg-emerald-50 px-2 py-1 rounded transition-colors font-medium",children:[w.jsx(s1,{size:12})," 儲存變更"]}):w.jsxs("button",{onClick:()=>Y(!0),className:"text-xs flex items-center gap-1 text-indigo-600 hover:bg-indigo-50 px-2 py-1 rounded transition-colors font-medium",children:[w.jsx(rf,{size:12})," 編輯數據"]})]}),w.jsxs("div",{className:"p-6",children:[w.jsxs("div",{className:"flex items-center justify-between mb-6",children:[w.jsx("div",{className:"text-sm text-slate-500 font-medium",children:"統計年度"}),$?w.jsxs("div",{className:"flex items-center gap-1",children:[w.jsx("span",{className:"text-slate-400 text-sm",children:"民國"}),w.jsx("input",{type:"number",className:"w-16 p-1 border rounded text-right",value:B.year,onChange:k=>fe({...B,year:k.target.value})}),w.jsx("span",{className:"text-slate-400 text-sm",children:"年"})]}):w.jsxs("div",{className:"bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold",children:["民國 ",B.year," 年"]})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[w.jsxs("div",{className:"p-4 rounded-xl bg-indigo-50 border border-indigo-100 relative group",children:[w.jsx("div",{className:"text-xs text-indigo-600 font-bold mb-1 uppercase tracking-wider",children:"非主管職務平均薪資"}),$?w.jsx("input",{type:"number",className:"w-full bg-white p-2 border border-indigo-200 rounded text-lg font-bold",value:B.avg,onChange:k=>fe({...B,avg:k.target.value})}):w.jsxs("div",{className:"text-2xl font-black text-indigo-900 tracking-tight",children:["$",Oe(B.avg)]}),w.jsx(u1,{className:"absolute right-4 bottom-4 text-indigo-200",size:24})]}),w.jsxs("div",{className:"p-4 rounded-xl bg-emerald-50 border border-emerald-100 relative group",children:[w.jsx("div",{className:"text-xs text-emerald-600 font-bold mb-1 uppercase tracking-wider",children:"薪資中位數"}),$?w.jsx("input",{type:"number",className:"w-full bg-white p-2 border border-emerald-200 rounded text-lg font-bold",value:B.median,onChange:k=>fe({...B,median:k.target.value})}):w.jsxs("div",{className:"text-2xl font-black text-emerald-900 tracking-tight",children:["$",Oe(B.median)]}),w.jsx(Qw,{className:"absolute right-4 bottom-4 text-emerald-200",size:24})]}),w.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 border border-slate-200 relative group",children:[w.jsx("div",{className:"text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider",children:"員工人數"}),$?w.jsx("input",{type:"number",className:"w-full bg-white p-2 border border-slate-200 rounded text-lg font-bold",value:B.count,onChange:k=>fe({...B,count:k.target.value})}):w.jsxs("div",{className:"text-2xl font-black text-slate-700 tracking-tight",children:[Oe(B.count)," ",w.jsx("span",{className:"text-sm font-normal text-slate-400",children:"人"})]}),w.jsx(h1,{className:"absolute right-4 bottom-4 text-slate-200",size:24})]})]}),w.jsx("div",{className:"mt-4 text-[10px] text-slate-400 text-center",children:"* 資料來源：公開資訊觀測站 / 行政院主計總處。本平台數據僅供參考。"})]})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[w.jsxs("button",{className:"p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-left group",children:[w.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform",children:w.jsx(tv,{size:16})}),w.jsx("div",{className:"font-bold text-slate-700",children:"查看職缺"}),w.jsx("div",{className:"text-xs text-slate-400",children:"前往求職網站"})]}),w.jsxs("button",{className:"p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-left group",children:[w.jsx("div",{className:"w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform",children:w.jsx(c1,{size:16})}),w.jsx("div",{className:"font-bold text-slate-700",children:"回報資訊錯誤"}),w.jsx("div",{className:"text-xs text-slate-400",children:"協助修正數據"})]})]})]}),o==="discussion"&&w.jsxs("div",{className:"bg-black/90 rounded-2xl overflow-hidden shadow-2xl min-h-[500px] flex flex-col animate-in fade-in zoom-in-95 font-mono",children:[w.jsxs("div",{className:"bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700",children:[w.jsxs("div",{className:"text-emerald-400 text-xs flex items-center gap-2",children:[w.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"bbs://salary-notebook/",r.id," — 即時同步"]}),w.jsxs("div",{className:"text-slate-500 text-xs",children:[h.length," 則留言"]})]}),w.jsxs("div",{className:"flex-1 p-4 space-y-3 overflow-y-auto",children:[g&&w.jsx("div",{className:"flex justify-center py-10",children:w.jsx(Lu,{className:"animate-spin text-slate-500"})}),!g&&h.length===0&&w.jsx("div",{className:"text-slate-500 text-center py-10",children:"尚無討論，成為第一個發言者！"}),h.map(k=>w.jsxs("div",{className:"flex gap-3 text-sm group",children:[w.jsx("div",{className:`shrink-0 font-bold ${k.type==="推"?"text-emerald-400":k.type==="噓"?"text-red-500":"text-yellow-400"}`,children:k.type}),w.jsxs("div",{className:"flex-1 text-slate-300 break-all",children:[w.jsxs("span",{className:"text-slate-500 mr-2",children:[k.user,":"]}),k.content,w.jsx("span",{className:"text-slate-600 text-xs ml-2 opacity-50 group-hover:opacity-100",children:k.time})]})]},k.id))]}),w.jsxs("div",{className:"p-3 bg-slate-800 border-t border-slate-700",children:[w.jsx("div",{className:"flex gap-2 mb-2",children:["推","→","噓"].map(k=>w.jsx("button",{onClick:()=>U(k),className:`px-3 py-1 rounded text-xs font-bold transition-colors ${I===k?k==="推"?"bg-emerald-600 text-white":k==="噓"?"bg-red-600 text-white":"bg-yellow-600 text-white":"bg-slate-700 text-slate-400 hover:bg-slate-600"}`,children:k},k))}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("input",{className:"flex-1 bg-slate-900 border border-slate-700 rounded p-2 text-slate-200 text-sm outline-none focus:border-slate-500 placeholder:text-slate-600",placeholder:"輸入討論內容...",value:T,onChange:k=>x(k.target.value),onKeyDown:k=>k.key==="Enter"&&ge()}),w.jsx("button",{onClick:ge,className:"px-4 py-2 bg-slate-700 text-slate-200 rounded hover:bg-slate-600 text-sm font-bold",children:"送出"})]})]})]})]})})]})},_2=Mo.memo(v2),w2=({value:r,onChange:e,onSelect:t,companies:i,onCreateNew:o})=>{const[l,h]=ae.useState([]),[m,g]=ae.useState(!1),v=ae.useRef(null);ae.useEffect(()=>{function I(U){v.current&&!v.current.contains(U.target)&&g(!1)}return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]);const T=I=>{const U=I.target.value;if(e(U),!U.trim()){h([]);return}const $=U.toLowerCase(),Y=i.filter(B=>B.name.toLowerCase().includes($)||B.aliases&&B.aliases.some(fe=>fe.toLowerCase().includes($)));h(Y),g(!0)},x=I=>{e(I.name),t&&t(I),g(!1)};return w.jsxs("div",{className:"relative",ref:v,children:[w.jsxs("div",{className:"relative",children:[w.jsx(nf,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",size:18}),w.jsx("input",{required:!0,type:"text",className:"w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all",value:r,onChange:T,onFocus:()=>{r&&g(!0)},placeholder:"公司名稱 (如: Google...)",autoComplete:"off"})]}),m&&w.jsxs("div",{className:"absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-60 overflow-y-auto",children:[l.length>0?l.map(I=>w.jsx("div",{onClick:()=>x(I),className:"px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0 flex items-center justify-between group",children:w.jsxs("div",{children:[w.jsx("div",{className:"font-medium text-slate-900 group-hover:text-indigo-600 transition-colors",children:I.name}),w.jsx("div",{className:"text-xs text-slate-400",children:I.industry})]})},I.id)):w.jsxs("div",{className:"px-4 py-3 text-sm text-slate-500 text-center",children:['找不到 "',r,'"']}),w.jsxs("div",{onClick:()=>{g(!1),o(r)},className:"px-4 py-3 bg-indigo-50 hover:bg-indigo-100 cursor-pointer text-indigo-700 font-bold text-sm sticky bottom-0 text-center",children:['+ 建立 "',r,'"']})]})]})},E2=Mo.memo(w2),T2=({entry:r,currentUserId:e,onInteract:t,onDelete:i,onLoginRequire:o})=>{const[l,h]=ae.useState(""),[m,g]=ae.useState(null),[v,T]=ae.useState(!1),x=r.interactions||[],I=ae.useMemo(()=>e?x.find($=>$.userId===e):null,[e,x]);ae.useEffect(()=>{v&&I&&(h(I.comment),g(I.type))},[v,I]);const U=()=>{l.trim()&&(t(r.id,m,l),h(""),g(null),T(!1))};return w.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-100",children:[w.jsxs("div",{className:"flex items-center justify-between mb-3 text-slate-500",children:[w.jsxs("div",{className:"flex gap-4 text-xs font-medium",children:[w.jsxs("span",{className:"flex items-center gap-1",children:[w.jsx(Tg,{size:14})," ",x.filter($=>$.type==="like").length]}),w.jsxs("span",{className:"flex items-center gap-1",children:[w.jsx(Eg,{size:14})," ",x.filter($=>$.type==="dislike").length]})]}),I&&!v&&w.jsx("span",{className:"text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-600",children:"已評價"})]}),I&&!v?w.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg flex justify-between items-start group",children:[w.jsxs("div",{className:"flex-1",children:[w.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[w.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded ${I.type==="like"?"bg-emerald-100 text-emerald-700":"bg-rose-100 text-rose-700"}`,children:I.type==="like"?"推薦":"反推"}),w.jsx("span",{className:"text-xs text-slate-400",children:"我"})]}),w.jsx("p",{className:"text-sm text-slate-700 break-all",children:I.comment})]}),w.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[w.jsx("button",{onClick:()=>T(!0),className:"p-1 text-slate-400 hover:text-indigo-600",children:w.jsx(rf,{size:14})}),w.jsx("button",{onClick:()=>i(r.id),className:"p-1 text-slate-400 hover:text-red-500",children:w.jsx(l1,{size:14})})]})]}):w.jsxs("div",{className:"space-y-3 animate-in fade-in slide-in-from-top-1",children:[w.jsxs("div",{className:"flex gap-2",children:[w.jsxs("button",{onClick:()=>{if(!e)return o();g("like")},className:`flex-1 py-2 flex items-center justify-center gap-2 text-sm rounded-lg border transition-all ${m==="like"?"bg-emerald-50 border-emerald-500 text-emerald-700 ring-1 ring-emerald-500":"border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:[w.jsx(Tg,{size:16,className:m==="like"?"fill-current":""})," 值得推薦"]}),w.jsxs("button",{onClick:()=>{if(!e)return o();g("dislike")},className:`flex-1 py-2 flex items-center justify-center gap-2 text-sm rounded-lg border transition-all ${m==="dislike"?"bg-rose-50 border-rose-500 text-rose-700 ring-1 ring-rose-500":"border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:[w.jsx(Eg,{size:16,className:m==="dislike"?"fill-current":""})," 考慮一下"]})]}),m&&w.jsxs("div",{className:"flex gap-2",children:[w.jsx("input",{className:"flex-1 text-sm p-2.5 border border-slate-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",value:l,onChange:$=>h($.target.value),placeholder:m==="like"?"分享這間公司的優點...":"分享需要注意的地方...",onKeyDown:$=>$.key==="Enter"&&U()}),w.jsx("button",{onClick:U,disabled:!l.trim(),className:"px-4 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors",children:w.jsx(o1,{size:16})})]})]})]})},I2=Mo.memo(T2),S2=({children:r,className:e="",onClick:t})=>w.jsx("div",{onClick:t,className:`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden ${e}`,children:r}),Jy=({children:r,color:e="blue"})=>{const t={blue:"bg-blue-50 text-blue-700 border-blue-100",green:"bg-emerald-50 text-emerald-700 border-emerald-100",gray:"bg-slate-100 text-slate-600 border-slate-200"};return w.jsx("span",{className:`px-2.5 py-1 rounded-md text-xs font-semibold border ${t[e]||t.blue}`,children:r})},x2=({initialName:r,onClose:e,onSubmit:t})=>{const[i,o]=ae.useState({name:r||"",industry:"軟體/網路",aliases:""}),l=h=>{h.preventDefault();const m=i.aliases.split(",").map(g=>g.trim()).filter(Boolean);i.name&&!m.includes(i.name.toLowerCase())&&m.push(i.name.toLowerCase()),t({...i,aliases:m})};return w.jsx("div",{className:"fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",children:w.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-md w-full p-6",children:[w.jsx("h3",{className:"text-xl font-bold mb-4",children:"新增公司"}),w.jsxs("form",{onSubmit:l,className:"space-y-4",children:[w.jsx("input",{className:"w-full p-3 border rounded-xl",value:i.name,onChange:h=>o({...i,name:h.target.value}),placeholder:"公司名稱",autoFocus:!0,required:!0}),w.jsxs("select",{className:"w-full p-3 border rounded-xl bg-white",value:i.industry,onChange:h=>o({...i,industry:h.target.value}),children:[w.jsx("option",{children:"軟體/網路"}),w.jsx("option",{children:"半導體/電子"}),w.jsx("option",{children:"金融/銀行"}),w.jsx("option",{children:"電商/零售"}),w.jsx("option",{children:"傳統製造"})]}),w.jsxs("div",{className:"flex gap-3 mt-4",children:[w.jsx("button",{type:"button",onClick:e,className:"flex-1 py-3 text-slate-500 font-bold",children:"取消"}),w.jsx("button",{type:"submit",className:"flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold",children:"建立"})]})]})]})})},A2=({onClose:r})=>w.jsx("div",{className:"fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",children:w.jsxs("div",{className:"bg-white p-8 rounded-3xl max-w-sm w-full shadow-2xl text-center",children:[w.jsx("div",{className:"w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600",children:w.jsx(iv,{size:32})}),w.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-2",children:"請先登入"}),w.jsx("p",{className:"text-slate-500 mb-8",children:"此功能需要會員權限，請切換身份後繼續。"}),w.jsx("button",{onClick:r,className:"w-full py-3 bg-slate-900 text-white rounded-xl font-bold",children:"我知道了"})]})}),k2=({onClose:r,appSettings:e,setAppSettings:t,appId:i})=>w.jsx("div",{className:"fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",children:w.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden",children:[w.jsxs("div",{className:"p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center",children:[w.jsx("h3",{className:"font-bold text-slate-700",children:"系統設定"}),w.jsx("button",{onClick:r,children:w.jsx(Ad,{size:20,className:"text-slate-400"})})]}),w.jsxs("div",{className:"p-6 space-y-4",children:[w.jsxs("div",{className:"flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-sm",children:[w.jsxs("div",{className:"flex flex-col",children:[w.jsx("span",{className:"font-bold text-slate-700 text-sm",children:"資料來源模式"}),w.jsxs("span",{className:"text-xs text-slate-400",children:["目前: ",e.useMockData?"模擬資料":"Firebase API"]})]}),w.jsx("button",{onClick:()=>t(o=>({...o,useMockData:!o.useMockData})),className:`relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${e.useMockData?"bg-amber-400":"bg-indigo-600"}`,children:w.jsx("div",{className:`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${e.useMockData?"translate-x-0":"translate-x-6"}`})})]}),w.jsxs("div",{className:"text-xs text-center text-slate-400 mt-4",children:["App ID: ",i," ",w.jsx("br",{}),"Version: 11.0 (Notebook Style)"]})]})]})}),C2=1800*1e3;function R2(){const[r,e]=ae.useState(null),[t,i]=ae.useState(!0),[o,l]=ae.useState([]),[h,m]=ae.useState([]),[g,v]=ae.useState(""),[T,x]=ae.useState({show:!1,message:"",type:"success"}),[I,U]=ae.useState(!1),[$,Y]=ae.useState("home"),[B,fe]=ae.useState(null),[me,ge]=ae.useState(!1),[Ae,Oe]=ae.useState(!1),[ke,k]=ae.useState(!1),[S,R]=ae.useState(!1),[N,D]=ae.useState("home"),[V,C]=ae.useState([]),[st,kt]=ae.useState(""),[Et,$e]=ae.useState(!1),[K,le]=ae.useState({industry:"all",selectedCompany:null,title:"",minSalary:"",minExperience:""}),[te,O]=ae.useState("user"),[H,he]=ae.useState({useMockData:!1}),[de,we]=ae.useState({company:"",title:"",industry:"軟體/網路",department:"",annual_package:"",salary:"",currency:"TWD",period:"月薪",experience:"",location:"台北市",content:""}),[Pe,Me]=ae.useState(!1),De=ae.useRef(null);ae.useEffect(()=>{if(!xd){console.warn("Firebase auth not available"),i(!1);return}return(async()=>{try{await Wx(xd)}catch(xe){console.warn("Auth init error:",xe.message)}})(),Jx(xd,e)},[]);const ze=ae.useCallback(async()=>{if(Dt)try{const xe=(await Xd(uc(zr(Dt,rn.companies),Qd("name")))).docs.map(qe=>({id:qe.id,...qe.data()}));C(xe)}catch(G){console.error("Fetch companies error:",G)}},[]),Qe=ae.useCallback(async()=>{if(Dt){i(!0);try{const xe=(await Xd(uc(zr(Dt,rn.salaryEntries),Qd("createdAt","desc")))).docs.map(qe=>({id:qe.id,...qe.data()}));l(xe)}catch(G){console.error("Fetch entries error:",G)}i(!1)}},[]);ae.useEffect(()=>{if(H.useMockData){C(ip()),l(N_(50)),i(!1);return}return ze(),Qe(),De.current=setInterval(()=>{console.log("🔄 Auto-refreshing data (30 min)..."),ze(),Qe()},C2),()=>{De.current&&clearInterval(De.current)}},[H.useMockData,ze,Qe]),ae.useEffect(()=>{let G=[...o];if(te==="guest"&&(G=G.filter(xe=>xe.status==="approved")),g){const xe=g.toLowerCase();G=G.filter(qe=>{var gn,Yt;return((gn=qe.company)==null?void 0:gn.toLowerCase().includes(xe))||((Yt=qe.title)==null?void 0:Yt.toLowerCase().includes(xe))||qe.content&&qe.content.toLowerCase().includes(xe)})}K.industry!=="all"&&(G=G.filter(xe=>xe.industry===K.industry)),K.selectedCompany&&(G=G.filter(xe=>xe.company===K.selectedCompany)),K.title&&(G=G.filter(xe=>{var qe;return(qe=xe.title)==null?void 0:qe.toLowerCase().includes(K.title.toLowerCase())})),K.minSalary&&(G=G.filter(xe=>parseInt(xe.salary||0)>=parseInt(K.minSalary))),K.minExperience&&(G=G.filter(xe=>parseFloat(xe.experience||0)>=parseFloat(K.minExperience))),m(G)},[o,g,K,te]);const kn=ae.useCallback(G=>{const xe=V.find(qe=>qe.name===G)||{id:G.toLowerCase().replace(/\s+/g,"-"),name:G,industry:"未知",aliases:[],stats:{median:0,avg:0,count:0,year:112}};fe(xe),Y("company-detail")},[V]),ir=ae.useCallback(()=>{fe(null),Y("home")},[]),pt=ae.useCallback((G,xe)=>{x({show:!0,message:G,type:xe}),setTimeout(()=>x({show:!1,message:"",type:"success"}),3e3)},[]),or=ae.useCallback(()=>te==="guest"?(ge(!0),!0):!1,[te]),mn=ae.useMemo(()=>({add:async G=>{const xe=(r==null?void 0:r.uid)||"anonymous",qe={...G,createdAt:Ao(),interactions:[],authorId:xe,status:"approved"};await Yd(zr(Dt,rn.salaryEntries),qe),Qe()},addCompany:async G=>{const xe=await Yd(zr(Dt,rn.companies),{...G,createdAt:Ao()});C(qe=>[...qe,{id:xe.id,...G}])},interact:async(G,xe,qe)=>{const gn=(r==null?void 0:r.uid)||"anonymous",Yt=xe?{userId:gn,type:xe,comment:qe,createdAt:new Date().toISOString()}:null,lt=xo(Dt,rn.salaryEntries,G);try{await cx(Dt,async Xe=>{const Mt=await Xe.get(lt);if(!Mt.exists())return;let Tt=[...Mt.data().interactions||[]];const sn=Tt.findIndex(Ar=>Ar.userId===gn);Yt===null?sn>-1&&Tt.splice(sn,1):sn>-1?Tt[sn]=Yt:Tt.push(Yt),Xe.update(lt,{interactions:Tt})}),l(Xe=>Xe.map(Mt=>{if(Mt.id!==G)return Mt;let Rn=[...Mt.interactions||[]];const Tt=Rn.findIndex(sn=>sn.userId===gn);return Yt===null?Tt>-1&&Rn.splice(Tt,1):Tt>-1?Rn[Tt]=Yt:Rn.push(Yt),{...Mt,interactions:Rn}}))}catch(Xe){console.error("Interaction Failed",Xe),pt("操作失敗，請重試","error")}}}),[r,pt,Qe]),Gs=ae.useCallback(async G=>{await mn.addCompany(G),we(xe=>({...xe,company:G.name,industry:G.industry})),R(!1),pt(`已建立公司：${G.name}`,"success")},[mn,pt]),Jr=ae.useCallback(async G=>{G&&G.preventDefault&&G.preventDefault(),Me(!0);try{await mn.add(de),pt("提交成功！","success"),we({company:"",title:"",industry:"軟體/網路",department:"",annual_package:"",salary:"",currency:"TWD",period:"月薪",experience:"",location:"台北市",content:""}),Oe(!1)}catch(xe){console.error("Submit error:",xe),pt("提交失敗","error")}Me(!1)},[mn,de,pt]),Ri=ae.useCallback(async()=>{$e(!0);try{await f2()?(pt("種子資料已寫入 🌱","success"),ze(),Qe()):pt("資料庫已有資料，跳過寫入","success")}catch(G){console.error("Seed error:",G),pt("寫入失敗: "+G.message,"error")}$e(!1)},[pt,ze,Qe]),xr=ae.useCallback(()=>{le({industry:"all",selectedCompany:null,title:"",minSalary:"",minExperience:""})},[]),Cn=(r==null?void 0:r.uid)||"anonymous";return w.jsxs("div",{className:"flex h-screen bg-white text-slate-900 font-sans overflow-hidden",children:[w.jsx(m2,{companies:V,filters:K,setFilters:le,activeView:$,viewingCompany:B,currentRole:te,setCurrentRole:O,onCompanyClick:kn,onBackToHome:ir,requireLogin:or,onShowSubmitModal:()=>Oe(!0),onShowSettingsModal:()=>k(!0)}),w.jsxs("div",{className:"flex-1 flex flex-col h-full relative",children:[w.jsxs("div",{className:"md:hidden h-14 border-b border-slate-100 flex items-center justify-between px-4 bg-white z-20",children:[w.jsxs("div",{className:"flex items-center gap-2 font-bold text-slate-800",children:[w.jsx(sv,{size:18,className:"text-indigo-600"})," Salary Notebook"]}),w.jsx("div",{className:"text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-500",children:te})]}),$==="company-detail"&&B?w.jsx(_2,{company:B,onBack:ir,role:te,currentUserId:Cn}):w.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar pb-24 md:pb-4",children:w.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[!t&&o.length===0&&!H.useMockData&&w.jsxs("div",{className:"text-center py-16",children:[w.jsx("div",{className:"w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-400",children:w.jsx(Jw,{size:32})}),w.jsx("h3",{className:"text-lg font-bold text-slate-700 mb-2",children:"資料庫是空的"}),w.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"首次使用？點擊下方按鈕寫入初始資料"}),w.jsx("button",{onClick:Ri,disabled:Et,className:"px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all disabled:opacity-50",children:Et?w.jsx(Lu,{className:"animate-spin mx-auto",size:20}):"🌱 寫入種子資料"})]}),(o.length>0||H.useMockData)&&w.jsxs("div",{className:"sticky top-0 z-10 bg-white/80 backdrop-blur-md py-2 -mx-2 px-2 md:static md:bg-transparent md:p-0",children:[w.jsxs("div",{className:"flex gap-2 mb-2",children:[w.jsxs("div",{className:"relative group flex-1",children:[w.jsx(i1,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors",size:20}),w.jsx("input",{className:"w-full pl-10 pr-4 py-3 md:py-4 bg-slate-100 md:bg-white border-none md:border md:border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all shadow-sm text-base",placeholder:K.selectedCompany?`搜尋 ${K.selectedCompany} 的內容...`:"搜尋公司、職稱或關鍵字...",value:g,onChange:G=>v(G.target.value)}),K.selectedCompany&&w.jsx("button",{onClick:()=>le({...K,selectedCompany:null}),className:"absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full",children:w.jsx(Ad,{size:16,className:"text-slate-400"})})]}),w.jsxs("button",{onClick:()=>U(!I),className:`px-4 rounded-xl border transition-all flex items-center gap-2 font-medium ${I?"bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200":"bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,children:[w.jsx(a1,{size:18}),w.jsx("span",{className:"hidden md:inline",children:"篩選"})]})]}),I&&w.jsxs("div",{className:"bg-white border border-slate-200 rounded-2xl p-4 shadow-sm animate-in slide-in-from-top-2 fade-in",children:[w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[w.jsxs("div",{className:"space-y-1.5",children:[w.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase flex items-center gap-1",children:[w.jsx(nf,{size:12})," 公司"]}),w.jsxs("select",{className:"w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500",value:K.selectedCompany||"",onChange:G=>le({...K,selectedCompany:G.target.value||null}),children:[w.jsx("option",{value:"",children:"全部公司"}),V.map(G=>w.jsx("option",{value:G.name,children:G.name},G.id))]})]}),w.jsxs("div",{className:"space-y-1.5",children:[w.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase flex items-center gap-1",children:[w.jsx(tv,{size:12})," 職稱關鍵字"]}),w.jsx("input",{className:"w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"例如: 前端",value:K.title,onChange:G=>le({...K,title:G.target.value})})]}),w.jsxs("div",{className:"space-y-1.5",children:[w.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase flex items-center gap-1",children:[w.jsx(Zw,{size:12})," 最低月薪"]}),w.jsx("input",{type:"number",className:"w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"例如: 40000",value:K.minSalary,onChange:G=>le({...K,minSalary:G.target.value})})]}),w.jsxs("div",{className:"space-y-1.5",children:[w.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase flex items-center gap-1",children:[w.jsx(Yw,{size:12})," 最低年資 (年)"]}),w.jsx("input",{type:"number",className:"w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"例如: 3",value:K.minExperience,onChange:G=>le({...K,minExperience:G.target.value})})]})]}),w.jsx("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-end",children:w.jsx("button",{onClick:xr,className:"text-xs text-slate-400 hover:text-rose-500 font-medium",children:"重置所有條件"})})]})]}),h.length===0&&!t&&o.length>0&&w.jsxs("div",{className:"text-center py-20",children:[w.jsx("div",{className:"w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300",children:w.jsx(e1,{size:32})}),w.jsx("h3",{className:"text-slate-500 font-medium",children:"沒有找到相關筆記"}),w.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"試試看其他關鍵字或切換來源"}),w.jsx("button",{onClick:xr,className:"mt-4 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-200",children:"清除篩選"})]}),w.jsx("div",{className:"grid gap-4",children:N==="home"?h.map(G=>{var xe;return w.jsxs(S2,{onClick:()=>kn(G.company),className:"p-5 md:p-6 group",children:[w.jsxs("div",{className:"flex items-start justify-between mb-3",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg group-hover:scale-110 transition-transform",children:(xe=G.company)==null?void 0:xe.charAt(0)}),w.jsxs("div",{children:[w.jsx("h3",{className:"font-bold text-lg text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors",children:G.company}),w.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500 mt-0.5",children:[w.jsx("span",{children:G.title}),w.jsx("span",{children:"•"}),w.jsx("span",{children:G.location})]})]})]}),w.jsxs("div",{className:"text-right",children:[w.jsxs("div",{className:"text-xl font-bold text-emerald-600 font-mono tracking-tight",children:[te==="guest"?"****":parseInt(G.salary).toLocaleString(),w.jsx("span",{className:"text-xs text-slate-400 font-sans font-normal ml-1",children:"/月"})]}),w.jsxs("div",{className:"text-xs text-slate-400 mt-1",children:["年資 ",G.experience," 年"]})]})]}),w.jsx("div",{className:"relative pl-4 border-l-2 border-indigo-100 py-1 my-4",children:w.jsx("p",{className:"text-slate-700 leading-relaxed text-sm md:text-base line-clamp-2",children:G.content})}),w.jsxs("div",{className:"flex items-center gap-2 mt-4",children:[w.jsx(Jy,{color:"gray",children:G.industry}),w.jsx(Jy,{color:"blue",children:G.annual_package})]}),w.jsx(I2,{entry:G,currentUserId:Cn,onInteract:mn.interact,onDelete:qe=>mn.interact(qe,null,null),onLoginRequire:()=>ge(!0)})]},G.id)}):w.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200",children:[w.jsx("h2",{className:"text-xl font-bold mb-4",children:"設定"}),w.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-slate-100",children:[w.jsx("span",{children:"資料來源"}),w.jsx("button",{onClick:()=>he(G=>({...G,useMockData:!G.useMockData})),className:`px-3 py-1 rounded-full text-xs font-bold ${H.useMockData?"bg-amber-100 text-amber-700":"bg-indigo-100 text-indigo-700"}`,children:H.useMockData?"模擬資料":"Firebase"})]}),w.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-slate-100",children:[w.jsx("span",{children:"目前身份"}),w.jsx("span",{className:"text-sm text-slate-500",children:te})]})]})}),t&&w.jsx("div",{className:"flex justify-center py-10",children:w.jsx(Lu,{className:"animate-spin text-indigo-500"})})]})}),w.jsx(y2,{activeTab:N,setActiveTab:D,filters:K,setFilters:le,onBackToHome:ir,requireLogin:or,onShowSubmitModal:()=>Oe(!0)})]}),Ae&&w.jsx("div",{className:"fixed inset-0 z-50 bg-white md:bg-black/50 md:backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 animate-in slide-in-from-bottom-10 fade-in",children:w.jsxs("div",{className:"bg-white w-full md:max-w-lg md:rounded-2xl h-[95vh] md:h-auto flex flex-col shadow-2xl",children:[w.jsxs("div",{className:"p-4 border-b border-slate-100 flex items-center justify-between",children:[w.jsxs("h2",{className:"text-lg font-bold flex items-center gap-2",children:[w.jsx(rf,{size:18})," 新增筆記"]}),w.jsx("button",{onClick:()=>Oe(!1),className:"p-2 hover:bg-slate-100 rounded-full",children:w.jsx(Ad,{size:20,className:"text-slate-400"})})]}),w.jsx("div",{className:"p-6 overflow-y-auto flex-1",children:w.jsxs("form",{onSubmit:Jr,className:"space-y-5",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-bold text-slate-500 mb-1.5 uppercase",children:"Company"}),w.jsx(E2,{value:de.company,onChange:G=>we({...de,company:G}),onSelect:G=>we({...de,company:G.name,industry:G.industry}),companies:V,onCreateNew:G=>{kt(G),R(!0)}})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-bold text-slate-500 mb-1.5 uppercase",children:"Title"}),w.jsx("input",{required:!0,className:"w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500",value:de.title,onChange:G=>we({...de,title:G.target.value}),placeholder:"例如: 前端工程師"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-bold text-slate-500 mb-1.5 uppercase",children:"Years of Exp"}),w.jsx("input",{required:!0,className:"w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500",value:de.experience,onChange:G=>we({...de,experience:G.target.value}),placeholder:"3.5"})]})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-bold text-slate-500 mb-1.5 uppercase",children:"Monthly Pay"}),w.jsx("input",{required:!0,type:"number",className:"w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500",value:de.salary,onChange:G=>we({...de,salary:G.target.value}),placeholder:"45000"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-bold text-slate-500 mb-1.5 uppercase",children:"Annual Package"}),w.jsx("input",{required:!0,className:"w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500",value:de.annual_package,onChange:G=>we({...de,annual_package:G.target.value}),placeholder:"例如: 100萬"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-bold text-slate-500 mb-1.5 uppercase",children:"Location"}),w.jsxs("select",{className:"w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none",value:de.location,onChange:G=>we({...de,location:G.target.value}),children:[w.jsx("option",{children:"台北市"}),w.jsx("option",{children:"新北市"}),w.jsx("option",{children:"新竹縣市"}),w.jsx("option",{children:"台中市"}),w.jsx("option",{children:"高雄市"}),w.jsx("option",{children:"遠端 (Remote)"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-bold text-slate-500 mb-1.5 uppercase",children:"Notes / Review"}),w.jsx("textarea",{className:"w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none",placeholder:"分享一些工作心得、面試過程或公司文化...",value:de.content,onChange:G=>we({...de,content:G.target.value})})]})]})}),w.jsxs("div",{className:"p-4 border-t border-slate-100 bg-slate-50 md:rounded-b-2xl flex gap-3",children:[w.jsx("button",{onClick:()=>Oe(!1),className:"flex-1 py-3 text-slate-600 font-bold hover:bg-slate-200 rounded-xl transition-colors",children:"取消"}),w.jsx("button",{onClick:Jr,disabled:Pe,className:"flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all disabled:opacity-50",children:Pe?w.jsx(Lu,{className:"animate-spin mx-auto"}):"確認發布"})]})]})}),ke&&w.jsx(k2,{onClose:()=>k(!1),appSettings:H,setAppSettings:he,appId:d2}),S&&w.jsx(x2,{initialName:st,onClose:()=>R(!1),onSubmit:Gs}),me&&w.jsx(A2,{onClose:()=>ge(!1)}),T.show&&w.jsxs("div",{className:"fixed top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-xl z-[100] animate-in fade-in slide-in-from-top-5 flex items-center gap-2",children:[w.jsx(Xw,{size:16,className:"text-emerald-400"}),w.jsx("span",{className:"text-sm font-medium",children:T.message})]})]})}qw.createRoot(document.getElementById("root")).render(w.jsx(Mo.StrictMode,{children:w.jsx(R2,{})}));

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.error=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.error=t())}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){var n=r(1);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(3)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:125;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-skin-default .xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-skin-default .xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-skin-default.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e){return document.querySelector(e)},l=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=s.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,f=0,u=[],p=r(4);function d(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(v(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(v(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function y(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function h(e,t){var r=l(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function m(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function v(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=f++;r=c||(c=m(t)),n=j.bind(null,r,a,!1),o=j.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),n=O.bind(null,r,t),o=function(){g(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(t),n=L.bind(null,r),o=function(){g(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=y(e,t);return d(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}e&&d(y(e,t),t);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function j(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function L(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function O(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=p(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,r){"use strict";r.r(t);function n(e="div",t="",r={},n=""){let o=document.createElement(e);return o.className=n,o.innerHTML=t,Object.keys(r).forEach(t=>{let n=t,i=r[t];"video"===e||"audio"===e?i&&o.setAttribute(n,i):o.setAttribute(n,i)}),o}function o(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,e=>e===t):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function i(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(t=>{t&&e.classList.add(t)}):o(e,t)||(e.className+=" "+t))}function a(e,t){e&&(e.classList?t.split(/\s+/g).forEach(t=>{e.classList.remove(t)}):o(e,t)&&t.split(/\s+/g).forEach(t=>{let r=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(r," ")}))}r(0);var s={name:"s_error",method:function(){let e=this,t=e.root,r=n("xg-error",'<span class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</span>',{},"xgplayer-error");e.once("ready",()=>{t.appendChild(r)});let o=r.querySelector(".xgplayer-error-text"),s=null;function l(){e.config.lang&&"zh-cn"===e.config.lang?o.innerHTML=e.config.errorTips||'请<span class="xgplayer-error-refresh">刷新</span>试试':o.innerHTML=e.config.errorTips||'please try to <span class="xgplayer-error-refresh">refresh</span>',i(e.root,"xgplayer-is-error"),s=r.querySelector(".xgplayer-error-refresh"),s&&["touchend","click"].forEach(t=>{s.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),e.autoplay=!0;let r=e.currentTime;e.once("playing",()=>{e.currentTime=r,a(e.root,"xgplayer-is-error")}),e.src=e.config.url}))})}e.on("error",l),e.once("destroy",(function t(){e.off("error",l),e.off("destroy",t)}))}};t.default={name:"error",method:function(){s.method.call(this)}}}])}));
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).NIM=e()}(this,(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var i={},a={appkey:"",debugLevel:"off"},c=function(){function e(){var r=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,e),this.V2NIMMessageService={},this.V2NIMSessionService={},this.options=n,this.otherOptions=o,e.instance=this,Object.keys(i).forEach((function(t){var e=i[t];r[t]=new e(r)})),Object.keys(this.otherOptions).forEach((function(t){var e=t.indexOf("Config");if(e>-1){var n=t.slice(0,e);r[n]&&r[n].setOptions&&r[n].setOptions(r.otherOptions[t])}}))}return o(e,[{key:"destroy",value:function(){e.instance=null}}],[{key:"registerService",value:function(t){var e=t.moduleName;i[e]=t}},{key:"getInstance",value:function(t,r){return e.instance?e.instance:new e(t,r)}}]),e}();function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function f(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function p(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}c.instance=null;var h={exports:{}},v={exports:{}};!function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(v);var y=v.exports;!function(t){var e=y.default;function r(){t.exports=r=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:j(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var v={};function y(){}function d(){}function g(){}var b={};l(b,u,(function(){return this}));var _=Object.getPrototypeOf,m=_&&_(_(k([])));m&&m!==o&&i.call(m,u)&&(b=m);var w=g.prototype=y.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,r){function n(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==e(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=g,a(w,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:d,configurable:!0}),d.displayName=l(g,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,f,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},x(O.prototype),l(O.prototype,s,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,f,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},n}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports}(h);var d=(0,h.exports)(),g=d;try{regeneratorRuntime=d}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=d:Function("r","regeneratorRuntime = r")(d)}var b=p(g);function _(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function c(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}u((n=n.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var m={exports:{}};!function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}function o(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function i(t,e,n,i,a){if("function"!=typeof n)throw new TypeError("The listener must be a function");var c=new o(n,i||t,a),u=r?r+e:e;return t._events[u]?t._events[u].fn?t._events[u]=[t._events[u],c]:t._events[u].push(c):(t._events[u]=c,t._eventsCount++),t}function a(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function c(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),c.prototype.eventNames=function(){var t,n,o=[];if(0===this._eventsCount)return o;for(n in t=this._events)e.call(t,n)&&o.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},c.prototype.listeners=function(t){var e=r?r+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,i=n.length,a=new Array(i);o<i;o++)a[o]=n[o].fn;return a},c.prototype.listenerCount=function(t){var e=r?r+t:t,n=this._events[e];return n?n.fn?1:n.length:0},c.prototype.emit=function(t,e,n,o,i,a){var c=r?r+t:t;if(!this._events[c])return!1;var u,s,f=this._events[c],l=arguments.length;if(f.fn){switch(f.once&&this.removeListener(t,f.fn,void 0,!0),l){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,e),!0;case 3:return f.fn.call(f.context,e,n),!0;case 4:return f.fn.call(f.context,e,n,o),!0;case 5:return f.fn.call(f.context,e,n,o,i),!0;case 6:return f.fn.call(f.context,e,n,o,i,a),!0}for(s=1,u=new Array(l-1);s<l;s++)u[s-1]=arguments[s];f.fn.apply(f.context,u)}else{var p,h=f.length;for(s=0;s<h;s++)switch(f[s].once&&this.removeListener(t,f[s].fn,void 0,!0),l){case 1:f[s].fn.call(f[s].context);break;case 2:f[s].fn.call(f[s].context,e);break;case 3:f[s].fn.call(f[s].context,e,n);break;case 4:f[s].fn.call(f[s].context,e,n,o);break;default:if(!u)for(p=1,u=new Array(l-1);p<l;p++)u[p-1]=arguments[p];f[s].fn.apply(f[s].context,u)}}return!0},c.prototype.on=function(t,e,r){return i(this,t,e,r,!1)},c.prototype.once=function(t,e,r){return i(this,t,e,r,!0)},c.prototype.removeListener=function(t,e,n,o){var i=r?r+t:t;if(!this._events[i])return this;if(!e)return a(this,i),this;var c=this._events[i];if(c.fn)c.fn!==e||o&&!c.once||n&&c.context!==n||a(this,i);else{for(var u=0,s=[],f=c.length;u<f;u++)(c[u].fn!==e||o&&!c[u].once||n&&c[u].context!==n)&&s.push(c[u]);s.length?this._events[i]=1===s.length?s[0]:s:a(this,i)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=r?r+t:t,this._events[e]&&a(this,e)):(this._events=new n,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,t.exports=c}(m);var w=p(m.exports),x="object"==typeof global&&global&&global.Object===Object&&global,O="object"==typeof self&&self&&self.Object===Object&&self,j=x||O||Function("return this")(),S=j.Symbol,E=Object.prototype,L=E.hasOwnProperty,P=E.toString,k=S?S.toStringTag:void 0;var T=Object.prototype.toString;var N="[object Null]",C="[object Undefined]",R=S?S.toStringTag:void 0;function M(t){return null==t?void 0===t?C:N:R&&R in Object(t)?function(t){var e=L.call(t,k),r=t[k];try{t[k]=void 0;var n=!0}catch(t){}var o=P.call(t);return n&&(e?t[k]=r:delete t[k]),o}(t):function(t){return T.call(t)}(t)}var z="[object Symbol]";function A(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&M(t)==z}var F=Array.isArray,I=1/0,G=S?S.prototype:void 0,$=G?G.toString:void 0;function B(t){if("string"==typeof t)return t;if(F(t))return function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,B)+"";if(A(t))return $?$.call(t):"";var e=t+"";return"0"==e&&1/t==-I?"-0":e}function V(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var Y="[object AsyncFunction]",D="[object Function]",U="[object GeneratorFunction]",q="[object Proxy]";var H,J=j["__core-js_shared__"],K=(H=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"";var Q=Function.prototype.toString;var W=/^\[object .+?Constructor\]$/,X=Function.prototype,Z=Object.prototype,tt=X.toString,et=Z.hasOwnProperty,rt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function nt(t){if(!V(t)||(e=t,K&&K in e))return!1;var e,r=function(t){if(!V(t))return!1;var e=M(t);return e==D||e==U||e==Y||e==q}(t)?rt:W;return r.test(function(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ot(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return nt(r)?r:void 0}var it=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,at=/^\w*$/;var ct=ot(Object,"create");var ut=Object.prototype.hasOwnProperty;var st=Object.prototype.hasOwnProperty;function ft(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function lt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}ft.prototype.clear=function(){this.__data__=ct?ct(null):{},this.size=0},ft.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ft.prototype.get=function(t){var e=this.__data__;if(ct){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return ut.call(e,t)?e[t]:void 0},ft.prototype.has=function(t){var e=this.__data__;return ct?void 0!==e[t]:st.call(e,t)},ft.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ct&&void 0===e?"__lodash_hash_undefined__":e,this};var pt=Array.prototype.splice;function ht(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ht.prototype.clear=function(){this.__data__=[],this.size=0},ht.prototype.delete=function(t){var e=this.__data__,r=lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():pt.call(e,r,1),--this.size,!0)},ht.prototype.get=function(t){var e=this.__data__,r=lt(e,t);return r<0?void 0:e[r][1]},ht.prototype.has=function(t){return lt(this.__data__,t)>-1},ht.prototype.set=function(t,e){var r=this.__data__,n=lt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var vt=ot(j,"Map");function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function dt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}dt.prototype.clear=function(){this.size=0,this.__data__={hash:new ft,map:new(vt||ht),string:new ft}},dt.prototype.delete=function(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e},dt.prototype.get=function(t){return yt(this,t).get(t)},dt.prototype.has=function(t){return yt(this,t).has(t)},dt.prototype.set=function(t,e){var r=yt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var gt="Expected a function";function bt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(gt);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(bt.Cache||dt),r}bt.Cache=dt;var _t,mt,wt,xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ot=/\\(\\)?/g,jt=(_t=function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(xt,(function(t,r,n,o){e.push(n?o.replace(Ot,"$1"):r||t)})),e},mt=bt(_t,(function(t){return 500===wt.size&&wt.clear(),t})),wt=mt.cache,mt),St=jt;function Et(t,e){return F(t)?t:function(t,e){if(F(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!A(t))||at.test(t)||!it.test(t)||null!=e&&t in Object(e)}(t,e)?[t]:St(function(t){return null==t?"":B(t)}(t))}var Lt=1/0;function Pt(t){if("string"==typeof t||A(t))return t;var e=t+"";return"0"==e&&1/t==-Lt?"-0":e}function kt(t,e,r){var n=null==t?void 0:function(t,e){for(var r=0,n=(e=Et(e,t)).length;null!=t&&r<n;)t=t[Pt(e[r++])];return r&&r==n?t:void 0}(t,e);return void 0===n?r:n}function Tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var Nt=function(e){s(n,e);var r=Tt(n);function n(e){var o;return t(this,n),(o=r.call(this)).core=e,o}return o(n,[{key:"sendMessage",value:function(t){return _(this,void 0,void 0,b.mark((function e(){var r;return b.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendCmd(t);case 2:if(!kt(r=e.sent,"idClient")){e.next=7;break}return e.abrupt("return",r);case 7:throw new Error("generate message failed");case 8:case"end":return e.stop()}}),e,this)})))}},{key:"sendCmd",value:function(t){return new Promise((function(e,r){setTimeout((function(){e({idClient:"This is a idClient",idServer:"This is a idServer",body:t})}),1e3)}))}}]),n}(w);function Ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}Nt.moduleName="V2NIMMessageService";var Rt=function(e){s(n,e);var r=Ct(n);function n(e){var o;return t(this,n),(o=r.call(this)).list=new Map,o.core=e,o}return o(n,[{key:"getSession",value:function(t){var e=this.list.get(t);if(!e)throw new Error("can not get ".concat(t));return e}},{key:"createSession",value:function(t){var e=t.sessionId;if(this.list.get(e))throw new Error("can not create ".concat(e));return this.list.set(e,t),t}},{key:"updateSession",value:function(t,e){var r=this.list.get(t);if(!r)throw new Error("can update ".concat(t));var n=Object.assign(r,e);return this.list.set(t,n),this.emit("update",n),n}},{key:"deleteSession",value:function(t){var e=this.list.get(t);return this.list.delete(t),e}}]),n}(w);return Rt.moduleName="V2NIMSessionService",c.registerService(Nt),c.registerService(Rt),c}));
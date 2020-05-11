!function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var t={};__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(exports,e,t){__webpack_require__.o(exports,e)||Object.defineProperty(exports,e,{configurable:!1,enumerable:!0,get:t})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=46)}([function(e,exports,t){"use strict";function escapeChar(e){return n[e]}function extend(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function indexOf(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function escapeExpression(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return a.test(e)?e.replace(r,escapeChar):e}function isEmpty(e){return!e&&0!==e||!(!s(e)||0!==e.length)}function createFrame(e){var t=extend({},e);return t._parent=e,t}function blockParams(e,t){return e.path=t,e}function appendContextPath(e,t){return(e?e+".":"")+t}exports.__esModule=!0,exports.extend=extend,exports.indexOf=indexOf,exports.escapeExpression=escapeExpression,exports.isEmpty=isEmpty,exports.createFrame=createFrame,exports.blockParams=blockParams,exports.appendContextPath=appendContextPath;var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/g,a=/[&<>"'`=]/,i=Object.prototype.toString;exports.toString=i;var o=function(e){return"function"==typeof e};o(/x/)&&(exports.isFunction=o=function(e){return"function"==typeof e&&"[object Function]"===i.call(e)}),exports.isFunction=o;var s=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===i.call(e)};exports.isArray=s},function(e,exports,t){"use strict";function Exception(e,t){var r=t&&t.loc,a=void 0,i=void 0;r&&(a=r.start.line,i=r.start.column,e+=" - "+a+":"+i);for(var o=Error.prototype.constructor.call(this,e),s=0;s<n.length;s++)this[n[s]]=o[n[s]];Error.captureStackTrace&&Error.captureStackTrace(this,Exception);try{r&&(this.lineNumber=a,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}exports.__esModule=!0;var n=["description","fileName","lineNumber","message","name","number","stack"];Exception.prototype=new Error,exports.default=Exception,e.exports=exports.default},function(e,exports,t){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function HandlebarsEnvironment(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},i.registerDefaultHelpers(this),o.registerDefaultDecorators(this)}exports.__esModule=!0,exports.HandlebarsEnvironment=HandlebarsEnvironment;var n=t(0),r=t(1),a=_interopRequireDefault(r),i=t(8),o=t(16),s=t(18),u=_interopRequireDefault(s);exports.VERSION="4.1.2";exports.COMPILER_REVISION=7;var l={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};exports.REVISION_CHANGES=l;HandlebarsEnvironment.prototype={constructor:HandlebarsEnvironment,logger:u.default,log:u.default.log,registerHelper:function(e,t){if("[object Object]"===n.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");n.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===n.toString.call(e))n.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===n.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");n.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=u.default.log;exports.log=c,exports.createFrame=n.createFrame,exports.logger=u.default},function(e,exports){function cssWithMappingToString(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=toComment(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function toComment(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=cssWithMappingToString(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,exports,t){function addStylesToDom(e,t){for(var r=0;r<e.length;r++){var a=e[r],i=n[a.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(addStyle(a.parts[o],t))}else{for(var s=[],o=0;o<a.parts.length;o++)s.push(addStyle(a.parts[o],t));n[a.id]={id:a.id,refs:1,parts:s}}}}function listToStyles(e,t){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=t.base?i[0]+t.base:i[0],s=i[1],u=i[2],l=i[3],c={css:s,media:u,sourceMap:l};r[o]?r[o].parts.push(c):n.push(r[o]={id:o,parts:[c]})}return n}function insertStyleElement(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function removeStyleElement(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function createStyleElement(e){var t=document.createElement("style");return e.attrs.type="text/css",addAttrs(t,e.attrs),insertStyleElement(e,t),t}function createLinkElement(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",addAttrs(t,e.attrs),insertStyleElement(e,t),t}function addAttrs(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function addStyle(e,t){var n,r,a,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var u=o++;n=i||(i=createStyleElement(t)),r=applyToSingletonTag.bind(null,n,u,!1),a=applyToSingletonTag.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=createLinkElement(t),r=updateLink.bind(null,n,t),a=function(){removeStyleElement(n),n.href&&URL.revokeObjectURL(n.href)}):(n=createStyleElement(t),r=applyToTag.bind(null,n),a=function(){removeStyleElement(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function applyToSingletonTag(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function applyToTag(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function updateLink(e,t,n){var r=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(r=u(r)),a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var n={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),i=null,o=0,s=[],u=t(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var a=listToStyles(e,t);return addStylesToDom(a,t),function(e){for(var r=[],i=0;i<a.length;i++){var o=a[i],s=n[o.id];s.refs--,r.push(s)}if(e){addStylesToDom(listToStyles(e,t),t)}for(var i=0;i<r.length;i++){var s=r[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete n[s.id]}}}};var l=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,exports){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a))return e;var i;return i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,exports,t){e.exports=t(7).default},function(e,exports,t){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function create(){var e=new r.HandlebarsEnvironment;return l.extend(e,r),e.SafeString=i.default,e.Exception=s.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=p,e.template=function(t){return p.template(t,e)},e}exports.__esModule=!0;var n=t(2),r=_interopRequireWildcard(n),a=t(19),i=_interopRequireDefault(a),o=t(1),s=_interopRequireDefault(o),u=t(0),l=_interopRequireWildcard(u),c=t(20),p=_interopRequireWildcard(c),d=t(21),f=_interopRequireDefault(d),h=create();h.create=create,f.default(h),h.default=h,exports.default=h,e.exports=exports.default},function(e,exports,t){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function registerDefaultHelpers(e){r.default(e),i.default(e),s.default(e),l.default(e),p.default(e),f.default(e),m.default(e)}exports.__esModule=!0,exports.registerDefaultHelpers=registerDefaultHelpers;var n=t(9),r=_interopRequireDefault(n),a=t(10),i=_interopRequireDefault(a),o=t(11),s=_interopRequireDefault(o),u=t(12),l=_interopRequireDefault(u),c=t(13),p=_interopRequireDefault(c),d=t(14),f=_interopRequireDefault(d),h=t(15),m=_interopRequireDefault(h)},function(e,exports,t){"use strict";exports.__esModule=!0;var n=t(0);exports.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var a=r.inverse,i=r.fn;if(!0===t)return i(this);if(!1===t||null==t)return a(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):a(this);if(r.data&&r.ids){var o=n.createFrame(r.data);o.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:o}}return i(t,r)})},e.exports=exports.default},function(e,exports,t){"use strict";exports.__esModule=!0;var n=t(0),r=t(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r);exports.default=function(e){e.registerHelper("each",function(e,t){function execIteration(t,a,i){u&&(u.key=t,u.index=a,u.first=0===a,u.last=!!i,l&&(u.contextPath=l+t)),s+=r(e[t],{data:u,blockParams:n.blockParams([e[t],t],[l+t,null])})}if(!t)throw new a.default("Must pass iterator to #each");var r=t.fn,i=t.inverse,o=0,s="",u=void 0,l=void 0;if(t.data&&t.ids&&(l=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(u=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var c=e.length;o<c;o++)o in e&&execIteration(o,o,o===e.length-1);else{var p=void 0;for(var d in e)e.hasOwnProperty(d)&&(void 0!==p&&execIteration(p,o-1),p=d,o++);void 0!==p&&execIteration(p,o-1,!0)}return 0===o&&(s=i(this)),s})},e.exports=exports.default},function(e,exports,t){"use strict";exports.__esModule=!0;var n=t(1),r=function(e){return e&&e.__esModule?e:{default:e}}(n);exports.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new r.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=exports.default},function(e,exports,t){"use strict";exports.__esModule=!0;var n=t(0);exports.default=function(e){e.registerHelper("if",function(e,t){return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=exports.default},function(e,exports,t){"use strict";exports.__esModule=!0,exports.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),t[0]=a,e.log.apply(e,t)})},e.exports=exports.default},function(e,exports,t){"use strict";exports.__esModule=!0,exports.default=function(e){e.registerHelper("lookup",function(e,t){if(!e)return e;if("constructor"!==t||e.propertyIsEnumerable(t))return e[t]})},e.exports=exports.default},function(e,exports,t){"use strict";exports.__esModule=!0;var n=t(0);exports.default=function(e){e.registerHelper("with",function(e,t){n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var a=t.data;return t.data&&t.ids&&(a=n.createFrame(t.data),a.contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:a,blockParams:n.blockParams([e],[a&&a.contextPath])})})},e.exports=exports.default},function(e,exports,t){"use strict";function registerDefaultDecorators(e){r.default(e)}exports.__esModule=!0,exports.registerDefaultDecorators=registerDefaultDecorators;var n=t(17),r=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,exports,t){"use strict";exports.__esModule=!0;var n=t(0);exports.default=function(e){e.registerDecorator("inline",function(e,t,r,a){var i=e;return t.partials||(t.partials={},i=function(a,i){var o=r.partials;r.partials=n.extend({},o,t.partials);var s=e(a,i);return r.partials=o,s}),t.partials[a.args[0]]=a.fn,i})},e.exports=exports.default},function(e,exports,t){"use strict";exports.__esModule=!0;var n=t(0),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(r.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=r.lookupLevel(e),"undefined"!=typeof console&&r.lookupLevel(r.level)<=e){var t=r.methodMap[e];console[t]||(t="log");for(var n=arguments.length,a=Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];console[t].apply(console,a)}}};exports.default=r,e.exports=exports.default},function(e,exports,t){"use strict";function SafeString(e){this.string=e}exports.__esModule=!0,SafeString.prototype.toString=SafeString.prototype.toHTML=function(){return""+this.string},exports.default=SafeString,e.exports=exports.default},function(e,exports,t){"use strict";function checkRevision(e){var t=e&&e[0]||1,n=o.COMPILER_REVISION;if(t!==n){if(t<n){var r=o.REVISION_CHANGES[n],a=o.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function template(e,t){function invokePartialWrapper(n,a,o){o.hash&&(a=r.extend({},a,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,a,o);var s=t.VM.invokePartial.call(this,n,a,o);if(null==s&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),s=o.partials[o.name](a,o)),null!=s){if(o.indent){for(var u=s.split("\n"),l=0,c=u.length;l<c&&(u[l]||l+1!==c);l++)u[l]=o.indent+u[l];s=u.join("\n")}return s}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")}function ret(t){function main(t){return""+e.main(n,t,n.helpers,n.partials,a,o,i)}var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=r.data;ret._setup(r),!r.partial&&e.useData&&(a=initData(t,a));var i=void 0,o=e.useBlockParams?[]:void 0;return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(main=executeDecorators(e.main,main,n,r.depths||[],a,o))(t,r)}if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new i.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:r.escapeExpression,invokePartial:invokePartialWrapper,fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,a){var i=this.programs[e],o=this.fn(e);return t||a||r||n?i=wrapProgram(this,e,o,t,n,r,a):i||(i=this.programs[e]=wrapProgram(this,e,o)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=r.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};return ret.isTop=!0,ret._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},ret._child=function(t,r,a,o){if(e.useBlockParams&&!a)throw new i.default("must pass block params");if(e.useDepths&&!o)throw new i.default("must pass parent depths");return wrapProgram(n,t,e[t],r,0,a,o)},ret}function wrapProgram(e,t,n,r,a,i,o){function prog(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(s=[t].concat(o)),n(e,t,e.helpers,e.partials,a.data||r,i&&[a.blockParams].concat(i),s)}return prog=executeDecorators(n,prog,e,o,r,i),prog.program=t,prog.depth=o?o.length:0,prog.blockParams=a||0,prog}function resolvePartial(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function invokePartial(e,t,n){var a=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var s=void 0;if(n.fn&&n.fn!==noop&&function(){n.data=o.createFrame(n.data);var e=n.fn;s=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=o.createFrame(n.data),n.data["partial-block"]=a,e(t,n)},e.partials&&(n.partials=r.extend({},n.partials,e.partials))}(),void 0===e&&s&&(e=s),void 0===e)throw new i.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function noop(){return""}function initData(e,t){return t&&"root"in t||(t=t?o.createFrame(t):{},t.root=e),t}function executeDecorators(e,t,n,a,i,o){if(e.decorator){var s={};t=e.decorator(t,s,n,a&&a[0],i,o,a),r.extend(t,s)}return t}exports.__esModule=!0,exports.checkRevision=checkRevision,exports.template=template,exports.wrapProgram=wrapProgram,exports.resolvePartial=resolvePartial,exports.invokePartial=invokePartial,exports.noop=noop;var n=t(0),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n),a=t(1),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o=t(2)},function(e,exports,t){"use strict";(function(t){exports.__esModule=!0,exports.default=function(e){var n=void 0!==t?t:window,r=n.Handlebars;e.noConflict=function(){return n.Handlebars===e&&(n.Handlebars=r),e}},e.exports=exports.default}).call(exports,t(22))},function(e,exports){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},,,,,,,,,,,function(e,exports,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.OcceditorsBanner=void 0;var n=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=t(34),a=t(35);exports.OcceditorsBanner=function(){function OcceditorsBanner(e,t){_classCallCheck(this,OcceditorsBanner),this.bannerCloseTrackRatio=.01,this.impCount=new a.LocalImpressionCount(e),this.trackingEvents=new r.EventLoggingTracker(e,this.impCount),this.bannerTemplate=t}return n(OcceditorsBanner,[{key:"init",value:function(){var e=mw.config.get("wgPageName");-1===e.indexOf("Wikipedia:Wikipedia_vor_Ort")&&-1===e.indexOf("Aktionstag")&&"Wikipedia:Wikimedia_Deutschland/LerneWikipedia"!==e&&"Wikipedia:Spezial:Benutzerkonto_anlegen"!==e?(this.createBanner(),this.registerClickEvents()):mw.centralNotice.setBannerLoadedButHidden()}},{key:"createBanner",value:function(){$("#WMDE-Banner-Container").html(this.bannerTemplate({})),this.addBannerSpace(),$("body").prepend($("#centralNotice")),$("#author-banner-container").show(),this.impCount.incrementImpressionCount()}},{key:"removeBanner",value:function(){$("#WMDE-Banner-Container").hide(),this.removeBannerSpace()}},{key:"registerClickEvents",value:function(){var e=this,t=$(".author-banner-close");this.trackingEvents.trackClickEvent(t,"banner-closed",this.bannerCloseTrackRatio),this.trackingEvents.trackClickEvent($("#author-banner-link"),"banner-clicked",this.bannerCloseTrackRatio),t.click(function(){e.removeBanner(),mw.centralNotice.hideBanner()}),$("#ca-ve-edit, .mw-editsection-visualeditor").click(function(){$("#author-banner-container").hide(),e.removeBanner()})}},{key:"addBannerSpace",value:function(){var e=$("#author-banner-container").height();switch(mw.config.get("skin")){case"vector":$("#mw-panel").css("top",e),$("#mw-head").css("top",e);break;case"monobook":var t=$("#globalWrapper"),n=$("#author-banner");t.css("position","relative"),t.css("top",e),n.css("top","-20px"),n.css("background","none")}}},{key:"removeBannerSpace",value:function(){switch(mw.config.get("skin")){case"vector":$("#mw-panel").css("top",0),$("#mw-head").css("top",0),$("#mw-page-base").css("padding-top",0);break;case"monobook":var e=$("#globalWrapper");e.css("position","relative"),e.css("top",0)}}}]),OcceditorsBanner}()},function(e,exports,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();exports.EventLoggingTracker=function(){function EventLoggingTracker(e,t){_classCallCheck(this,EventLoggingTracker),this.bannerName=e,this.impressionCounter=t}return n(EventLoggingTracker,[{key:"trackClickEvent",value:function(e,t,n){e.click(this.createTrackHandler(t,n))}},{key:"createTrackHandler",value:function(e,t){var n=this;return void 0===t&&(t=1),function(){Math.random()<t&&mw.track("event.WMDEBannerInteractions",{bannerName:n.bannerName,bannerAction:e,bannerImpressions:n.impressionCounter.getImpressionCount()})}}}]),EventLoggingTracker}()},function(e,exports,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();exports.LocalImpressionCount=function(){function LocalImpressionCount(e){if(_classCallCheck(this,LocalImpressionCount),this.bannerName=e,this.itemName="authors_impressions-"+this.bannerName,this.overallCount=0,window.localStorage){var t=window.localStorage.getItem(this.itemName)||"0";this.overallCount=parseInt(t,10)}}return n(LocalImpressionCount,[{key:"incrementImpressionCount",value:function(){this.overallCount++,window.localStorage&&window.localStorage.setItem(this.itemName,this.overallCount.toFixed(0))}},{key:"getImpressionCount",value:function(){return window.localStorage?window.localStorage.getItem(this.itemName):0}}]),LocalImpressionCount}()},function(e,exports,t){var n=t(37);"string"==typeof n&&(n=[[e.i,n,""]]);var r={};r.transform=void 0;t(4)(n,r);n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(3)(!1),exports.push([e.i,':root{--banner-color-primary:#ff9a50;--banner-color-secondary:#fff;--banner-color-outline:#919191;--banner-color-black:#000}.author-banner{z-index:101;width:100%;background-color:#ff9a50;background-color:var(--banner-color-primary);text-align:center;overflow:hidden;height:400px;display:none;position:relative}.author-banner a{text-decoration:none}.author-banner .mobile-break{display:block}.author-banner-inner{-webkit-box-sizing:border-box;box-sizing:border-box;display:relative;height:100%;text-align:left;width:100%}.author-banner-space{width:100%;height:25px}.author-banner-title{background:transparent url("//upload.wikimedia.org/wikipedia/commons/0/02/Danke-s%402x.png") no-repeat 0;background-size:contain;width:233px;height:72px;margin-left:25px;margin-top:0}.author-banner-banner{background:transparent url("//upload.wikimedia.org/wikipedia/commons/5/5a/Banner1-s%402x.png") no-repeat 0;background-size:contain;width:263px;height:119px;margin-left:25px;margin-top:33px}.author-banner-illustration{position:absolute;left:0;right:unset;bottom:24px;background:transparent url("//upload.wikimedia.org/wikipedia/commons/a/a1/Illustration-s%402x.png") no-repeat 0 100%;background-size:contain;width:180px;height:110px}.author-banner-button{position:absolute;right:14px;bottom:37px;background:transparent url("//upload.wikimedia.org/wikipedia/commons/9/9c/Button2-s%402x.png") no-repeat 50%;background-size:contain;width:146px;height:60px}.author-banner-close{background:transparent url("//upload.wikimedia.org/wikipedia/commons/b/b7/Close%402x.png") no-repeat 50%/60%;background-size:contain;cursor:pointer;position:absolute;z-index:1002;width:30px;height:30px;right:25px;top:25px}@media (min-width:600px){.author-banner{height:390px}.author-banner-space{width:100%;height:30px}.author-banner-title{background:transparent url("//upload.wikimedia.org/wikipedia/commons/8/81/Danke-m%402x.png") no-repeat 0;background-size:contain;width:360px;height:52px;margin-left:30px}.author-banner-banner{background:transparent url("//upload.wikimedia.org/wikipedia/commons/6/65/Banner1-m%402x.png") no-repeat 0;background-size:contain;width:435px;height:110px;margin-left:30px;margin-top:38px}.author-banner-illustration{bottom:0;background:transparent url("//upload.wikimedia.org/wikipedia/commons/1/15/Illustration-m%402x.png") no-repeat 0 100%;background-size:contain;width:330px;height:138px}.author-banner-button{right:27px;bottom:31px;background:transparent url("//upload.wikimedia.org/wikipedia/commons/c/ca/Button2-m%402x.png") no-repeat 50%;background-size:contain;width:176px;height:65px}.author-banner-close{right:30px;top:30px}.skin-minerva .author-banner-text{width:auto}}@media (min-width:1200px){.author-banner{height:240px}.author-banner-space{width:100%;height:40px}.author-banner-title{background:transparent url("//upload.wikimedia.org/wikipedia/commons/c/c3/Danke-l%402x.png") no-repeat 0;background-size:contain;width:808px;height:30px;margin-left:40px}.author-banner-banner{background:transparent url("//upload.wikimedia.org/wikipedia/commons/f/ff/Banner1-l%402x.png") no-repeat 0;background-size:contain;width:692px;height:79px;margin-left:40px;margin-top:50px}.author-banner-illustration{right:0;left:unset;background:transparent url("//upload.wikimedia.org/wikipedia/commons/b/bc/Illustration-l%402x.png") no-repeat 0 100%;background-size:contain;width:350px;height:203px}.author-banner-button{right:37px;bottom:33px;background:transparent url("//upload.wikimedia.org/wikipedia/commons/5/52/Button2-l%402x.png") no-repeat 50%;background-size:contain;width:209px;height:70px}.author-banner-close{right:40px;top:40px}}',""])},,,,,,,,,function(e,exports,t){"use strict";var n=t(33);t(36),$(document).ready(function(){var e=t(47),r=new n.OcceditorsBanner("B20WMDE_occeditors_spring_2020_1cs",e);r.init()})},function(e,exports,t){var n=t(6);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<div id="author-banner-container" class="author-banner">\n    <div class="author-banner-close">\n        <a id="author-banner-close-button" href="#" title="Schließen">\n            <div class="author-banner-close-button"></div>\n        </a>\n    </div>\n    <a id="author-banner-link" href="https://de.wikipedia.org/wiki/Wikipedia:Wikimedia_Deutschland/DeinEngagement?campaign=WMDE_oceditors_spring_2020_1cs">\n\t\t<div class="author-banner-inner">\n\t\t\t<div class="author-banner-space">\n\t\t\t</div>\n\t\t\t<div class="author-banner-title">\n\t\t\t\t\x3c!-- Danke, deine Bearbeitungen verbessern Wikipedia! --\x3e\n\t\t\t</div>\n\t\t\t<div class="author-banner-banner">\n\t\t\t\t\x3c!-- Du bist nicht alleine: Förderangebote für Autorinnen und Autoren wie dich! --\x3e\n\t\t\t</div>\n\t\t\t<div class="author-banner-illustration">\n\t\t\t\t\x3c!-- illustration --\x3e\n\t\t\t</div>\n\t\t\t<div class="author-banner-button">\n\t\t\t\t\x3c!-- Her damit! --\x3e\n\t\t\t</div>\n\t\t</div>\n    </a>\n</div>\n'},useData:!0})}]);
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,a,i,l=L;for(i=arguments.length;i-- >2;)T.push(arguments[i]);for(t&&null!=t.children&&(T.length||T.push(t.children),delete t.children);T.length;)if((o=T.pop())&&void 0!==o.pop)for(i=o.length;i--;)T.push(o[i]);else"boolean"==typeof o&&(o=null),(a="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(a=!1)),a&&n?l[l.length-1]+=o:l===L?l=[o]:l.push(o),n=a;var u=new r;return u.nodeName=e,u.children=l,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==B.vnode&&B.vnode(u),u}function a(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t){return o(e.nodeName,a(a({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function l(e){!e._dirty&&(e._dirty=!0)&&1==I.push(e)&&(B.debounceRendering||W)(u)}function u(){var e,t=I;for(I=[];e=t.pop();)e._dirty&&S(e)}function s(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function f(e){var t=a({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function p(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===A.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,_,i):e.removeEventListener(t,_,i),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)v(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var l=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function v(e,t,n){try{e[t]=n}catch(e){}}function _(e){return this._listeners[e.type](B.event&&B.event(e)||e)}function m(){for(var e;e=V.pop();)B.afterMount&&B.afterMount(e),e.componentDidMount&&e.componentDidMount()}function b(e,t,n,r,o,a){D++||(H=null!=o&&void 0!==o.ownerSVGElement,R=null!=e&&!("__preactattr_"in e));var i=y(e,t,n,r,a);return o&&i.parentNode!==o&&o.appendChild(i),--D||(R=!1,a||m()),i}function y(e,t,n,r,o){var a=e,i=H;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),C(e,!0))),a.__preactattr_=!0,a;var l=t.nodeName;if("function"==typeof l)return O(e,t,n,r);if(H="svg"===l||"foreignObject"!==l&&H,l=String(l),(!e||!c(e,l))&&(a=p(l,H),e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),C(e,!0)}var u=a.firstChild,s=a.__preactattr_,f=t.children;if(null==s){s=a.__preactattr_={};for(var d=a.attributes,h=d.length;h--;)s[d[h].name]=d[h].value}return!R&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&g(a,f,n,r,R||null!=s.dangerouslySetInnerHTML),w(a,t.attributes,s),H=i,a}function g(e,t,n,r,o){var a,i,l,u,c,f=e.childNodes,p=[],h={},v=0,_=0,m=f.length,b=0,g=t?t.length:0;if(0!==m)for(var x=0;x<m;x++){var w=f[x],N=w.__preactattr_,M=g&&N?w._component?w._component.__key:N.key:null;null!=M?(v++,h[M]=w):(N||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(p[b++]=w)}if(0!==g)for(var x=0;x<g;x++){u=t[x],c=null;var M=u.key;if(null!=M)v&&void 0!==h[M]&&(c=h[M],h[M]=void 0,v--);else if(!c&&_<b)for(a=_;a<b;a++)if(void 0!==p[a]&&s(i=p[a],u,o)){c=i,p[a]=void 0,a===b-1&&b--,a===_&&_++;break}c=y(c,u,n,r),l=f[x],c&&c!==e&&c!==l&&(null==l?e.appendChild(c):c===l.nextSibling?d(l):e.insertBefore(c,l))}if(v)for(var x in h)void 0!==h[x]&&C(h[x],!1);for(;_<=b;)void 0!==(c=p[b--])&&C(c,!1)}function C(e,t){var n=e._component;n?j(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}function w(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,H);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],H)}function N(e){var t=e.constructor.name;(z[t]||(z[t]=[])).push(e)}function M(e,t,n){var r,o=z[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),E.call(r,t,n)):(r=new E(t,n),r.constructor=e,r.render=k),o)for(var a=o.length;a--;)if(o[a].constructor===e){r.nextBase=o[a].nextBase,o.splice(a,1);break}return r}function k(e,t,n){return this.constructor(e,n)}function P(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===B.syncComponentUpdates&&e.base?l(e):S(e,1,o)),e.__ref&&e.__ref(e))}function S(e,t,n,r){if(!e._disable){var o,i,l,u=e.props,s=e.state,c=e.context,p=e.prevProps||u,d=e.prevState||s,h=e.prevContext||c,v=e.base,_=e.nextBase,y=v||_,g=e._component,x=!1;if(v&&(e.props=p,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,s,c)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(u,s,c),e.props=u,e.state=s,e.context=c),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){o=e.render(u,s,c),e.getChildContext&&(c=a(a({},c),e.getChildContext()));var w,N,k=o&&o.nodeName;if("function"==typeof k){var O=f(o);i=g,i&&i.constructor===k&&O.key==i.__key?P(i,O,1,c,!1):(w=i,e._component=i=M(k,O,c),i.nextBase=i.nextBase||_,i._parentComponent=e,P(i,O,0,c,!1),S(i,1,n,!0)),N=i.base}else l=y,w=g,w&&(l=e._component=null),(y||1===t)&&(l&&(l._component=null),N=b(l,o,c,n||!v,y&&y.parentNode,!0));if(y&&N!==y&&i!==g){var E=y.parentNode;E&&N!==E&&(E.replaceChild(N,y),w||(y._component=null,C(y,!1)))}if(w&&j(w),e.base=N,N&&!r){for(var U=e,T=e;T=T._parentComponent;)(U=T).base=N;N._component=U,N._componentConstructor=U.constructor}}if(!v||n?V.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(p,d,h),B.afterUpdate&&B.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);D||r||m()}}function O(e,t,n,r){for(var o=e&&e._component,a=o,i=e,l=o&&e._componentConstructor===t.nodeName,u=l,s=f(t);o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(P(o,s,3,n,r),e=o.base):(a&&!l&&(j(a),e=i=null),o=M(t.nodeName,s,n),e&&!o.nextBase&&(o.nextBase=e,i=null),P(o,s,1,n,r),e=o.base,i&&e!==i&&(i._component=null,C(i,!1))),e}function j(e){B.beforeUnmount&&B.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?j(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),N(e),x(t)),e.__ref&&e.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function U(e,t,n){return b(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return o}),n.d(t,"createElement",function(){return o}),n.d(t,"cloneElement",function(){return i}),n.d(t,"Component",function(){return E}),n.d(t,"render",function(){return U}),n.d(t,"rerender",function(){return u}),n.d(t,"options",function(){return B});var B={},T=[],L=[],W="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,A=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,I=[],V=[],D=0,H=!1,R=!1,z={};a(E.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=a({},n)),a(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),l(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),S(this,2)},render:function(){}});var $={h:o,createElement:o,cloneElement:i,Component:E,render:U,rerender:u,options:B};t.default=$},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),i=n(2),l=r(i);n(5),console.log("hi"),a.default.render(a.default.h(l.default,null),document.getElementById("root"))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(3),f=r(c),p=n(4),d=r(p),h=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={bits:128,base:16},e}return i(t,e),l(t,[{key:"render",value:function(e,t){var n=void 0,r=void 0;try{r=(0,f.default)(t.bits,t.base)}catch(e){n=e}return s.default.h("center",null,s.default.h("h1",null,"Here, have a string."),s.default.h("h3",null,"strings provided by ",s.default.h("a",{href:"https://npmjs.com/package/hat"},"hat")),s.default.h(v,{value:n||r}),s.default.h("h3",null,"Configure the string?"),s.default.h("label",null,"Bits: ",s.default.h("input",{value:t.bits,type:"number",onInput:(0,d.default)(this,"bits")})),s.default.h("label",null,"Base: ",s.default.h("input",{value:t.base,type:"number",onInput:(0,d.default)(this,"base")})))}}]),t}(s.default.Component);t.default=h;var v=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(e,t){var n=this;return s.default.h("input",{type:"text",value:e.value,readonly:!0,onFocus:function(){return n.base.setSelectionRange(0,n.base.value.length)},autofocus:!0,style:{width:"90%",maxWidth:"500px",textAlign:"center"}})}}]),t}(s.default.Component)},function(e,t){var n=e.exports=function(e,t){if(t||(t=16),void 0===e&&(e=128),e<=0)return"0";for(var r=Math.log(Math.pow(2,e))/Math.log(t),o=2;r===1/0;o*=2)r=Math.log(Math.pow(2,e/o))/Math.log(t)*o;for(var a=r-Math.floor(r),i="",o=0;o<Math.floor(r);o++){var l=Math.floor(Math.random()*t).toString(t);i=l+i}if(a){var u=Math.pow(t,a),l=Math.floor(Math.random()*u).toString(t);i=l+i}var s=parseInt(i,t);return s!==1/0&&s>=Math.pow(2,e)?n(e,t):i};n.rack=function(e,t,r){var o=function(o){var i=0;do{if(i++>10){if(!r)throw new Error("too many ID collisions, use more bits");e+=r}var l=n(e,t)}while(Object.hasOwnProperty.call(a,l));return a[l]=o,l},a=o.hats={};return o.get=function(e){return o.hats[e]},o.set=function(e,t){return o.hats[e]=t,o},o.bits=e||128,o.base=t||16,o}},function(e,t,n){"use strict";function r(e,t,n,r){for(r=0,t=t.split?t.split("."):t;e&&r<t.length;)e=e[t[r++]];return void 0===e?n:e}function o(e,t,n){var o=t.split("."),a=e.__lsc||(e.__lsc={});return a[t+n]||(a[t+n]=function(t){for(var a=t&&t.target||this,i={},l=i,u="string"==typeof n?r(t,n):a.nodeName?a.type.match(/^che|rad/)?a.checked:a.value:t,s=0;s<o.length-1;s++)l=l[o[s]]||(l[o[s]]=!s&&e.state[o[s]]||{});l[o[s]]=u,e.setState(i)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){e.exports=n.p+"CNAME"}]);
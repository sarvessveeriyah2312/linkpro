_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var s=p[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var y=b;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},NhNA:function(e){e.exports=JSON.parse('[{"icon":"github","url":"https://github.com/sarvessveeriyah2312"},{"icon":"twitter","url":"https://mobile.twitter.com/sarvess_10"},{"icon":"instagram","url":"https://instagram.com/iamsarvess_23"}]')},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addTrackers",(function(){return ne})),n.d(r,"initialize",(function(){return re})),n.d(r,"ga",(function(){return oe})),n.d(r,"set",(function(){return ae})),n.d(r,"send",(function(){return ie})),n.d(r,"pageview",(function(){return ce})),n.d(r,"modalview",(function(){return ue})),n.d(r,"timing",(function(){return se})),n.d(r,"event",(function(){return le})),n.d(r,"exception",(function(){return fe})),n.d(r,"plugin",(function(){return pe})),n.d(r,"outboundLink",(function(){return de})),n.d(r,"testModeAPI",(function(){return be})),n.d(r,"default",(function(){return ye}));var o=n("nKUr");var a=function(){return Object(o.jsx)("header",{className:"container flex text-center mx-auto py-10",children:Object(o.jsxs)("div",{className:"md:w-4/6 mx-auto",children:[Object(o.jsx)("img",{src:"/profile-pic.jpg",alt:"Profile Picture",className:"h-24 rounded-full mx-auto mb-6"}),Object(o.jsx)("h1",{className:"font-bold",children:"Sarvess Veeriyah"}),Object(o.jsx)("p",{children:"Final Year of Software Engineering Student "})]})})},i=n("ZGIp");var c=function(){return Object(o.jsx)("main",{className:"flex px-3 sm:px-0",children:Object(o.jsx)("ul",{className:"w-4/5 md:w-4/5 lg:w-3/6 mx-auto",children:i.map((function(e){return Object(o.jsx)("li",{className:"mb-4",children:Object(o.jsxs)("a",{className:"relative transition duration-200 font-bold  bg-blue-600 border-blue-800 border-2 hover:bg-transparent py-4 w-75 block text-center text-white hover:text-blue-400 rounded-lg pl-10 md:px-12",href:e.url,alt:e.title,target:"_blank",rel:"noopener",children:[Object(o.jsx)("span",{className:"text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center",children:e.emoji}),Object(o.jsx)("span",{children:e.title})]})},e.title)}))})})},u=n("NhNA");var s=function(){return Object(o.jsx)("ul",{className:"py-6",children:u.map((function(e){return Object(o.jsx)("li",{className:"mr-3 inline",children:Object(o.jsx)("a",{className:"text-blue-600  hover:text-blue-600",href:e.url,target:"_blank",rel:"noopener",alt:e.icon,children:Object(o.jsx)("i",{className:"fa fa-2x fa-".concat(e.icon)})})},e.icon)}))})};var l=function(){return Object(o.jsx)("form",{action:"https://www.buymeacoffee.com/sarvessveeri",target:"_blank",className:"mb-2",children:Object(o.jsx)("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-600 text-gray-900 font-bold uppercase p-1 rounded-lg px-4",children:"Buy Me A Coffee"})})};n("kiQV");var f=function(){return Object(o.jsxs)("div",{className:"text-xs",children:[Object(o.jsxs)("p",{className:"mb-3",children:[Object(o.jsx)("a",{href:"https://github.com/sarvessveeriyah2312",target:"_blank",className:"text-blue-600",rel:"noopener",children:"LinkPro"})," is a linked list single page built on React and Tailwind. ",Object(o.jsx)("br",{className:"hidden sm:block"}),"If you find this useful, feel free to buy me a coffee",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(l,{}),Object(o.jsx)("i",{className:"fa fa-coffee"})]}),Object(o.jsxs)("p",{className:"",children:["Code with \u2764\ufe0f by ",Object(o.jsx)("a",{href:"https://github.com/sarvessveeriyah2312",target:"_blank",className:"text-blue-600",rel:"noopener",children:"Sarvess Veeriyah"})]})]})};var p=function(){return Object(o.jsx)("footer",{className:"px-3 sm:px-0",children:Object(o.jsx)("div",{className:"container text-center mx-auto",children:Object(o.jsxs)("div",{className:"md:w-4/6 mx-auto",children:[Object(o.jsx)(s,{}),Object(o.jsx)(f,{})]})})})},d=n("8Kt/"),b=n.n(d),y=n("q1tI"),g=n.n(y),m=n("17x9"),h=n.n(m);function v(e){console.warn("[react-ga]",e)}function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,r,o=A(a);function a(){var e;k(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(_(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,s={label:o},l="_blank"!==r,f=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);l&&f?(t.preventDefault(),a.trackLink(s,(function(){window.location.href=i}),u)):a.trackLink(s,(function(){}),u),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=w(w({},x(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return"_blank"===n&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,g.a.createElement("a",r)}}])&&S(t.prototype,n),r&&S(t,r),a}(y.Component);C(I,"trackLink",(function(){v("ga tracking not enabled")})),I.propTypes={eventLabel:h.a.string.isRequired,target:h.a.string,to:h.a.string,onClick:h.a.func,trackerNames:h.a.arrayOf(h.a.string)},I.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function D(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(v("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function M(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var T=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function q(e){return M(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(T)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}function L(e){console.info("[react-ga]",e)}var R=[],J={calls:R,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];R.push([].concat(t))},resetCalls:function(){R.length=0}};function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F="undefined"===typeof window||"undefined"===typeof document,Q=!1,U=!0,z=!1,Y=!0,$=!0,B=function(){var e;return z?J.ga.apply(J,arguments):!F&&(window.ga?(e=window).ga.apply(e,arguments):v("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function X(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=q(e)),t&&(n=D(n)),n}(e,U,$)}function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!Y&&Array.isArray(e)||B.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){B.apply(void 0,K(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):v("ga command must be a string")}function te(e,t){e?t&&(t.debug&&!0===t.debug&&(Q=!0),!1===t.titleCase&&(U=!1),!1===t.redactEmail&&($=!1),t.useExistingGa)||(t&&t.gaOptions?B("create",e,t.gaOptions):B("create",e,"auto")):v("gaTrackingID is required in initialize()")}function ne(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===V(e)?te(e.trackingId,e):v("All configs must be an object")})):te(e,t),!0}function re(e,t){if(t&&!0===t.testMode)z=!0;else{if(F)return;t&&!0===t.standardImplementation||function(e){var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,i,c,u,s=e&&e.onerror;n=window,r=document,o="script",a=t,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=a,c.onerror=s,u.parentNode.insertBefore(c,u)}(t)}Y=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,ne(e,t)}function oe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(B.apply(void 0,t),Q&&(L("called ga('arguments');"),L("with arguments: ".concat(JSON.stringify(t))))),window.ga}function ae(e,t){e?"object"===V(e)?(0===Object.keys(e).length&&v("empty `fieldsObject` given to .set()"),ee(t,"set",e),Q&&(L("called ga('set', fieldsObject);"),L("with fieldsObject: ".concat(JSON.stringify(e))))):v("Expected `fieldsObject` arg to be an Object"):v("`fieldsObject` is required in .set()")}function ie(e,t){ee(t,"send",e),Q&&(L("called ga('send', fieldObject);"),L("with fieldObject: ".concat(JSON.stringify(e))),L("with trackers: ".concat(JSON.stringify(t))))}function ce(e,t,n){if(e){var r=M(e);if(""!==r){var o={};if(n&&(o.title=n),ee(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),Q){L("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),L("with path: ".concat(r).concat(a))}}else v("path cannot be an empty string in .pageview()")}else v("path is required in .pageview()")}function ue(e,t){if(e){var n,r="/"===(n=M(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);ee(t,"send","pageview",o),Q&&(L("called ga('send', 'pageview', path);"),L("with path: ".concat(o)))}else v("modalName cannot be an empty string or a single / in .modalview()")}else v("modalName is required in .modalview(modalName)")}function se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var i={hitType:"timing",timingCategory:X(t),timingVar:X(n),timingValue:r};o&&(i.timingLabel=X(o)),ie(i,a)}else v("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=H(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:X(t),eventAction:X(n)};r&&(s.eventLabel=X(r)),"undefined"!==typeof o&&("number"!==typeof o?v("Expected `args.value` arg to be a Number."):s.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?v("`args.nonInteraction` must be a boolean."):s.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?v("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&v("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){s[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){s[e]=c[e]})),ie(s,u)}else v("args.category AND args.action are required in event()")}function fe(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=X(n)),"undefined"!==typeof r&&("boolean"!==typeof r?v("`args.fatal` must be a boolean."):o.exFatal=r),ie(o,t)}var pe={require:function(e,t,n){if(e){var r=M(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==V(t))return void v("Expected `options` arg to be an Object");0===Object.keys(t).length&&v("Empty `options` given to .require()"),oe(o,r,t),Q&&L("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else oe(o,r),Q&&L("called ga('require', '".concat(r,"');"))}else v("`name` cannot be an empty string in .require()")}else v("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!==typeof e)v("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)v("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(oe(c,r,n),Q&&(L("called ga('".concat(c,"');")),L('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(oe(c,n),Q&&(L("called ga('".concat(c,"');")),L("with payload: ".concat(JSON.stringify(n))))):(oe(c),Q&&L("called ga('".concat(c,"');")))}}};function de(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:X(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},ie(r,n)}else v("args.label is required in outboundLink()");else v("hitCallback function is required")}var be=J,ye={initialize:re,ga:oe,set:ae,send:ie,pageview:ce,modalview:ue,timing:se,event:le,exception:fe,plugin:pe,outboundLink:de,testModeAPI:J};function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){he(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}I.origTrackLink=I.trackLink,I.trackLink=de;var ve=I,Oe=me(me({},r),{},{OutboundLink:ve});t.default=function(){return Object(y.useEffect)((function(){window.GA_INITIALIZED||(console.log("GA init"),Oe.initialize("UA-127894545-3"),window.GA_INITIALIZED=!0),console.log("Logging pageview for ".concat(window.location.pathname)),Oe.set({page:window.location.pathname}),Oe.pageview(window.location.pathname)}),[]),Object(o.jsxs)("div",{className:"flex flex-col min-h-screen",children:[Object(o.jsxs)(b.a,{children:[Object(o.jsx)("title",{children:"Sarvess Veeriyah | LinkPro"}),Object(o.jsx)("meta",{name:"description",content:"\ud83c\udf32 A free Linktree alternative built with React and Tailwind."}),Object(o.jsx)("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"})]}),Object(o.jsx)(a,{}),Object(o.jsx)(c,{}),Object(o.jsx)(p,{})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},ZGIp:function(e){e.exports=JSON.parse('[{"title":"Linkedln Profile","url":"https://www.linkedin.com/in/sarvess-veeriyah-839345192/","emoji":"\ud83e\udd19"},{"title":"Portfolio ","url":"","emoji":"\ud83d\udea7"},{"title":"Github Page","url":"https://github.com/sarvessveeriyah2312","emoji":"\ud83d\udc68\u200d\ud83d\udcbb"}]')},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},kiQV:function(e){e.exports=JSON.parse("{}")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);
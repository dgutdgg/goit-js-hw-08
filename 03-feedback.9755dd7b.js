!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(O,t),s?p(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=b();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?y(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?p(e):(o=i=void 0,u)}function T(){var e=b(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=w(t)||0,g(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(w(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?u:h(b())},T}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),O=document.querySelector(".feedback-form textarea"),h={email:"",message:""};null!=localStorage.getItem("feedback-form-state")&&(h=JSON.parse(localStorage.getItem("feedback-form-state")),j.value=h.email,O.value=h.message,console.log(h));var T=e(t)((function(){h.email=j.value,h.message=O.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500);S.addEventListener("input",(function(){T()})),S.addEventListener("submit",(function(e){e.preventDefault(),""!==j.value&&""!==O.value?(localStorage.removeItem("feedback-form-state"),j.value="",O.value="",console.log("Formularz został wysłany.",h)):alert("Proszę wypełnić wszystkie pola formularza.")}))}();
//# sourceMappingURL=03-feedback.9755dd7b.js.map

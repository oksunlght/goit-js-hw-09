function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("7Y9D8");const i=document.querySelector(".form");function u(t,n){return new Promise(((r,o)=>{const i=Math.random()>.3;setTimeout((()=>i?r(e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)):o(e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`))),n)}))}i.addEventListener("submit",(e=>{e.preventDefault();const t=Number(i.elements.delay.value),n=Number(i.elements.step.value),r=Number(i.elements.amount.value);let o=0,l=t;for(let e=1;e<=r;e+=1)o+=1,1===o&&(l=t),l+=n,u(o,l).then((e=>e)).catch((e=>e))}));
//# sourceMappingURL=03-promises.57261672.js.map

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire07b5;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire07b5=r);var i=r("2shzp");const o=document.querySelector(".popular-recipes-container");function l(){i.default.get("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then((e=>{const n=e.data,t=window.innerWidth<768?2:4,r=n.slice(0,t),i=r.map((e=>{return`\n    <ul class="popular-recipe-list list">\n      <li class="popular-recipe-item">\n        <div class="popular-recipe-card">\n          <img class="card-image" src="${e.preview}" alt="${e.title}">\n          <div class="card-content">\n            <h3 class="card-heading">${n=e.title,n.length>15?n.slice(0,15)+"...":n}</h3>\n            <p class="card-description">${d(e.description)}</p>\n          </div>\n        </div>\n      </li>\n    </ul>\n`;var n})).join("");o.innerHTML=i})).catch((e=>{console.error("Error fetching popular recipes:",e)}))}window.addEventListener("resize",l),l();const a=document.querySelectorAll(".card-description");let c=80;function s(){c=window.innerWidth<768?110:80,a.forEach((e=>{const n=e.textContent;e.textContent=d(n)}))}function d(e){return e.length>c?e.slice(0,c)+"...":e}window.addEventListener("DOMContentLoaded",s),window.addEventListener("resize",s);
//# sourceMappingURL=index.861ef711.js.map

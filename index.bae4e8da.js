!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire07b5;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire07b5=r);var i=r("dIxxU"),o=document.querySelector(".popular-recipes-card");function a(){i.default.get("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then((function(e){var n=e.data,t=window.innerWidth<768?2:4,r=n.slice(0,t),i=r.map((function(e){return'\n    <ul class="popular-recipe-list list">\n      <li class="popular-recipe-item">\n        <div class="popular-recipe-card">\n          <img class="popular-card-image" src="'.concat(e.preview,'" alt="').concat(e.title,'">\n          <div class="popular-card-content">\n            <h3 class="popular-card-heading">').concat((n=e.title,n.length>15?n.slice(0,15)+"...":n),'</h3>\n            <p class="popular-card-description">').concat(p(e.description),"</p>\n          </div>\n        </div>\n      </li>\n    </ul>\n");var n})).join("");o.innerHTML=i})).catch((function(e){console.error("Error fetching popular recipes:",e)}))}window.addEventListener("resize",a),a();var c=document.querySelectorAll(".card-description"),l=80;function d(){l=window.innerWidth<768?110:80,c.forEach((function(e){var n=e.textContent;e.textContent=p(n)}))}function p(e){return e.length>l?e.slice(0,l)+"...":e}window.addEventListener("DOMContentLoaded",d),window.addEventListener("resize",d)}();
//# sourceMappingURL=index.bae4e8da.js.map
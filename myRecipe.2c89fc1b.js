function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=r.parcelRequire07b5;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,r){t[e]=r},r.parcelRequire07b5=i),i.register("kyEFX",(function(r,n){var t,i;e(r.exports,"register",(function(){return t}),(function(e){return t=e})),e(r.exports,"resolve",(function(){return i}),(function(e){return i=e}));var c={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)c[r[n]]=e[r[n]]},i=function(e){var r=c[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),i("kyEFX").register(JSON.parse('{"bn9XI":"myRecipe.2c89fc1b.js","bwpHV":"Spanish-rice-0aad18a.8f1ff01a.jpg","h10Dp":"favorites.aabf74e7.js"}')),i("hV168"),i("7Th1V"),i("imn7x"),i("jyXRc");var c;c=new URL(i("kyEFX").resolve("bwpHV"),import.meta.url).toString();const o=document.querySelector(".my-recipe__list-cards");try{const e=JSON.parse(localStorage.getItem("recipes")),r=e.map((({instructions:e,name:r,id:n})=>`\n        <li class="my-recipe__cards-item">\n          <div class="favorit__img-thumb">\n            <img src="${c}" alt="${r}" width="335">\n          </div>\n          <div class="my-recipe__cards-thumb">\n            <h2 class="favorites__cards-title">${r}</h2>\n            <p class="favorites__cards-text">${e}</p>\n            <div class="favorites__rating-thumb">\n              <button class="favorites__cards-btn js-card-button" data-id="${n}">See recipe</button>\n            </div>\n          </div>\n          <button class="my-recipe__change-btn js-change-btn btn" data-id="${n}">\n            <svg height="1em" viewBox="0 0 512 512" class="change-recipe-icon">\n              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>\n            </svg>\n          </button>\n        </li>`)).join("");if(!e)throw new Error("Sorry, but you currently don't have your recipes.");o.innerHTML=r}catch(e){console.log(e.message)}
//# sourceMappingURL=myRecipe.2c89fc1b.js.map

function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequire07b5;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequire07b5=s),s.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"favorites.1e183be7.js","6vWST":"elements.5eac9335.jpg"}'));const a=document.querySelector(".open-modal-button"),c=document.querySelector(".mobile-menu"),o=(document.querySelector(".mobile-menu-content"),document.querySelector(".close-modal-button"));document.querySelector(".mobile-menu input");function l(){c.classList.toggle("is-hidden")}a.addEventListener("click",l),o.addEventListener("click",l),c.addEventListener("click",(e=>{e.target.closest(".mobile-menu-content")||l()}));document.querySelector(".svg-list"),document.querySelector(".switch"),window.matchMedia("(min-width: 768px)");const d=document.querySelector(".js-gallery");(new class{fetchRecipes(){const e=`https://tasty-treats-backend.p.goit.global/api/recipes?title=${this.searchQuery}&category=${this.category}&page=${this.page}&limit=${this.limit}&time=${this.time}&area=${this.area}&ingredient=${this.ingredient}`;return fetch(e).then((e=>e.json())).then((e=>(this.incrementPage(),e)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.title="",this.category="",this.time="",this.area="",this.ingredient="",this.page=1,this.limit=9}}).fetchRecipes().then((e=>{var t;console.log(e),console.log(e.results),t=e.results,d.insertAdjacentHTML("beforeend",t.map((e=>`<li class="card-item">\n          <div class="card-block">\n            <img class="card-image" src="${e.preview}" alt="${e.title}" width="335px">\n        <div class="heart-block" id="card-checkbox-${e._id}">\n            <span class="unchecked-heart">\n            <svg class="heartIconGrey" width="18" height="18">\n                <use href="./images/sprite.svg#icon-search"></use>\n              </svg></span>\n            <span class="checked-heart">\n            <svg class="heartIconWhite" width="18" height="18">\n                <use href="./images/sprite.svg#icon-search"></use>\n              </svg></span>\n            </span>\n        </div>\n            <div class="card-content">\n              <h3 class="card-heading">${e.title}</h3>\n              <p class="card-description">${e.description}</p>\n            </div>\n            <div class="card-bottom">\n              <div class="card-rating-block">\n                <p class="card-rating">${e.rating}</p>\n                <div class="eating-stars">generateStars(recipe.rating)</div>\n              </div>\n              <button class="card-button" data-id="${e._id}">See recipe</button>\n            </div>\n          </div>\n        </li>`)).join(""))}));var u;u=new URL(s("kyEFX").resolve("6vWST"),import.meta.url).toString();const h=e=>{e.classList.add("empty"),e.innerHTML=`<div class="favorites__empty">\n  <div class="favorites__img"></div>\n    <img src="${t(u)}" alt="chef's hat">\n    <p class="favorites__text">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p></div>`},g=document.querySelector(".favorites__wrap");console.log(g);localStorage.getItem("setting")||h(g);
//# sourceMappingURL=favorites.1e183be7.js.map
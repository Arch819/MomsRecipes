!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequire07b5;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequire07b5=i),i.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i("iE7OH").register(JSON.parse('{"i4hX4":"favorites.13d85a8a.js","ee16w":"sprite.7aa8ebb7.svg","gt5lo":"favorites.afba10c3.js"}'));var o=i("bpxeT"),s=i("2TvXO"),c=document.querySelector(".btn_scroll"),l=!1;function u(){window.pageYOffset>0?(window.scrollBy(0,-45),requestAnimationFrame(u)):l=!1}c.addEventListener("click",(function(){l||(l=!0,u())})),window.addEventListener("scroll",(function(){window.pageYOffset<=200&&window.pageYOffset>=0?c.style.opacity="0":c.style.opacity="1"}));var f={openModalButton:document.querySelector(".open-modal-button"),modulWindow:document.querySelector(".mobile-menu"),closeModalButton:document.querySelector(".close-modal-button"),navigationLinks:document.querySelectorAll(".header-navigation-list li a"),iconMoon:document.querySelectorAll(".icon-moon"),iconSun:document.querySelectorAll(".icon-sun"),switcher:document.querySelector(".switch"),sliderEl:document.querySelectorAll("input[type=checkbox]"),bodyEl:document.querySelector("body")};function d(){f.modulWindow.classList.toggle("is-visible"),f.modulWindow.classList.contains("is-visible")?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open")}f.openModalButton.addEventListener("click",d),f.closeModalButton.addEventListener("click",d),f.modulWindow.addEventListener("click",(function(e){e.target.closest(".mobile-menu-content")||d()}));var v=f.iconMoon,p=f.iconSun;document.addEventListener("DOMContentLoaded",(function(){v.forEach((function(e,t){var n=p[t];f.sliderEl.forEach((function(t){t.addEventListener("change",(function(){var r=t.checked;n.classList.toggle("visibility-hidden",r),e.classList.toggle("visibility-hidden",!r)}));var r=t.checked;n.classList.toggle("visibility-hidden",r),e.classList.toggle("visibility-hidden",!r)}))}))}));var g=window.location.pathname,_=Array.from(f.navigationLinks);function m(){"black"===localStorage.getItem("theme")?(localStorage.removeItem("theme"),f.sliderEl.forEach((function(e){return e.checked=!1}))):(localStorage.setItem("theme","black"),f.sliderEl.forEach((function(e){return e.checked=!0}))),h()}function h(){try{"black"===localStorage.getItem("theme")?f.bodyEl.classList.add("dark"):f.bodyEl.classList.remove("dark")}catch(e){}}_.some((function(e){return e.getAttribute("href")===g}))?f.navigationLinks.forEach((function(e){e.getAttribute("href")===g?e.classList.add("current-link"):e.classList.remove("current-link")})):_.forEach((function(e){"Home"===e.textContent&&e.classList.add("current-link")})),window.onscroll=function(){var e;e=768,window.screen.width>=e&&(scrollY<=70?document.getElementById("header").classList.remove("header-scroll"):document.getElementById("header").classList.add("header-scroll"))},f.sliderEl.forEach((function(e){e.addEventListener("click",m)})),"black"===localStorage.getItem("theme")&&(h(),f.sliderEl.forEach((function(e){return e.checked=!0})));o=i("bpxeT"),s=i("2TvXO"),o=i("bpxeT"),s=i("2TvXO");var y,b=i("dIxxU");y=i("aNJCr").getBundleURL("i4hX4")+i("iE7OH").resolve("ee16w");var w,x,k=i("6JpON"),L=function(e){return"<div class='favorites__rating'>\n              <div class=\"favorites__rating-body\">\n                <div class=\"favorites__rating-active\"><div class='favorites__cards-rating'>".concat(e,"</div>").concat(function(e){for(var n=Math.round(e),r='<svg class="favorites__star-active"><use href="'.concat(t(y),'#icon-star"></use></svg>'),a='<svg class="favorites__star-notActive"><use href="'.concat(t(y),'#icon-star-grey"></use></svg>'),i=[],o=1;o<=5;o+=1)i.push(o>n?a:r);return i.join("")}(e),'</div>\n                <div class="favorites__rating-items">\n                  <input type="radio" class="favorites__rating-item" value="1" name="rating">\n                  <input type="radio" class="favorites__rating-item" value="2" name="rating">\n                  <input type="radio" class="favorites__rating-item" value="3" name="rating">\n                  <input type="radio" class="favorites__rating-item" value="4" name="rating">\n                  <input type="radio" class="favorites__rating-item" value="5" name="rating">\n                </div>\n              </div>\n  \n    </div>')},S=function(e){var n;return(n=e,n.map((function(e){var n=e.data;return'\n        <li class="favorites__cards-item">\n        <button type="button" id="#'.concat(n._id,'" class="icon-button" data-category="').concat(n.category,'" aria-label="Heart"><svg class="favorites__heart heart-isActive"><use href="').concat(t(y),'#icon-heart"></use></svg></button>\n          <div class="favorit__img-thumb"><img src="').concat(n.preview,'" alt="').concat(n.title,'" width="335"></div>\n          <div class="favorites__cards-thumb">\n            <h2 class="favorites__cards-title">').concat(n.title,'</h2>\n            <p class="favorites__cards-text">').concat(n.description,'</p>\n            <div class="favorites__rating-thumb">\n              ').concat(L(n.rating),'\n              <button class="favorites__cards-btn js-card-button" data-id="').concat(n._id,'">See recipe</button>\n            </div>\n          </div>\n        </li>')}))).join("")},E=function(){return'<svg class="favorites__empty-img">\n      <use href="'.concat(t(y),'#icon-elements"></use>\n    </svg>\n    <p class="favorites__text">').concat("It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.","</p>")},H=function(e){try{var t=localStorage.getItem(e);if(t)return JSON.parse(t)}catch(e){console.error("Error while parsing local storage data:",e)}},T=function(){return t(k).Report.failure("Error","Oops! Something went wrong! Try reloading the page!","OK")},M=(w=t(o)(t(s).mark((function e(n){var r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.default.get("".concat("https://tasty-treats-backend.p.goit.global/api/recipes/").concat(n));case 3:if(404!==(r=e.sent).status){e.next=6;break}throw new Error("Page not found error 404");case 6:return e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),T();case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),function(e){return w.apply(this,arguments)}),q=(x=t(o)(t(s).mark((function e(n){var r,a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.map(function(){var e=t(o)(t(s).mark((function e(n){var r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),function(e){return x.apply(this,arguments)}),O=function(e){return function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;t.includes(s)||t.push(s)}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}var c=t.map((function(e){return'<li><button type="button" class="favorites__filter-btn">'.concat(e,"</button></li>")}));return c.unshift('<li><button type="button" class="favorites__filter-btn favorites__active-btn">All categories</button></li>'),c}(e).join("")},A=function(){var e=t(o)(t(s).mark((function e(n){var r,a,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(n.map((function(e){return e.id})));case 3:return r=e.sent,a=r.map((function(e){return e.data.category})),i=O(a),e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),T();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=t(o)(t(s).mark((function e(n,r,a){var i,o,c,l,u;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(n.map((function(e){return e.id})));case 3:return i=e.sent,c=(o=(r-1)*a)+a,l=i.slice(o,c),u=S(l),e.abrupt("return",u);case 11:e.prev=11,e.t0=e.catch(0),T(),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r){return e.apply(this,arguments)}}(),j=(o=i("bpxeT"),s=i("2TvXO"),document.querySelector(".favorites__empty")),C=document.querySelector(".favorites__img"),N=document.querySelector(".favorites__list-filter"),B=document.querySelector(".favorites__list-cards"),R=document.querySelector(".favorites__pagination"),W=(document.querySelector(".favorites__list-cards-thumb"),document.querySelector(".favorites__container-cards")),F=window.innerWidth;function J(e,n){var r="",a=n-1,i=n+1;r+='<li class="favorites__pagination-item">\n    <div class="favorites__pag-container start-container">\n      <svg class="favorites__start-arrow-first">\n        <use href="'.concat(t(y),'#icon-arrow"></use>\n      </svg>\n      <svg class="favorites__start-arrow-second">\n        <use href="').concat(t(y),'#icon-arrow"></use>\n      </svg>\n    </div>\n  </li>\n  <li class="favorites__pagination-item">\n    <div class="favorites__pag-container prew-container">\n      <svg class="favorites__prew-arrow">\n        <use href="').concat(t(y),'#icon-arrow"></use>\n      </svg>\n    </div>\n  </li>'),n>2&&(r+='<li class="favorites__pagination-item">\n    <span class="favorites_page-dots-first">...</span>\n  </li>'),F>=768&&(n==e&&(a-=1),1==n&&(i+=1));for(var o=a;o<=i;o++)if(!(o>e)){if(F>=768)0==o&&(o+=1);else if(o<=0)continue;r+='<li class="favorites__pagination-item '.concat(n==o?"favorites__active-btn":"",'">\n    <span class="favorites__pag-page">').concat(o,"</span>\n  </li>")}n<e-1&&(r+='<li class="favorites__pagination-item">\n    <span class="favorites_page-dots-first">...</span>\n  </li>'),r+='<li class="favorites__pagination-item">\n    <div class="favorites__pag-container next-container">\n      <svg class="favorites__next-arrow">\n        <use href="'.concat(t(y),'#icon-arrow"></use>\n      </svg>\n    </div>\n  </li>\n  <li class="favorites__pagination-item">\n    <div class="favorites__pag-container end-container">\n      <svg class="favorites__end-arrow-first">\n        <use href="').concat(t(y),'#icon-arrow"></use>\n      </svg>\n      <svg class="favorites__end-arrow-second">\n        <use href="').concat(t(y),'#icon-arrow"></use>\n      </svg>\n    </div>\n  </li>'),R.innerHTML=r}var X=function(){var e=t(o)(t(s).mark((function e(n,r,a,i){var o,c,l,u,f,d;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o=Number(localStorage.getItem("page")))||(o=1),!n.target.closest(".start-container")){e.next=10;break}return o=1,e.next=6,I(r,o,a);case 6:c=e.sent,B.innerHTML=c,J(i,o),localStorage.setItem("page",o);case 10:if(!n.target.closest(".favorites__prew-arrow")){e.next=19;break}if(1===o){e.next=19;break}return o-=1,e.next=15,I(r,o,a);case 15:l=e.sent,B.innerHTML=l,J(i,o),localStorage.setItem("page",o);case 19:if(!n.target.closest(".favorites__pag-page")){e.next=33;break}return e.prev=20,o=Number(n.target.textContent),e.next=24,I(r,o,a);case 24:u=e.sent,B.innerHTML=u,J(i,o),localStorage.setItem("page",o),e.next=33;break;case 30:e.prev=30,e.t0=e.catch(20),console.error("An error occurred:",e.t0);case 33:if(!n.target.closest(".favorites__next-arrow")){e.next=42;break}if(o===i){e.next=42;break}return o+=1,e.next=38,I(r,o,a);case 38:f=e.sent,B.innerHTML=f,J(i,o),localStorage.setItem("page",o);case 42:if(!n.target.closest(".end-container")){e.next=50;break}return o=i,e.next=46,I(r,o,a);case 46:d=e.sent,B.innerHTML=d,J(i,o),localStorage.setItem("page",o);case 50:case"end":return e.stop()}}),e,null,[[20,30]])})));return function(t,n,r,a){return e.apply(this,arguments)}}();i("axyAW"),i("8rl3z"),i("62eWH");var U=window.innerWidth,Y=12;U<768&&(Y=9);var z=H("favorites"),D=null,P=function(){B.innerHTML='<li class="favorites__list-cards-thumb">'.concat(E(),"</li>"),B.style.justifyContent="center"},$=function(e){if(e.classList.contains("favorites__filter-btn")){var t=document.querySelector(".favorites__active-btn");t&&t.classList.remove("favorites__active-btn"),e.classList.add("favorites__active-btn")}},K=function(){var e=t(o)(t(s).mark((function e(n){var r,a,i,o,c,l,u,f;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.target.closest(".icon-button")){e.next=3;break}return e.abrupt("return");case 3:if(!(a=n.target.closest(".favorites__cards-item"))){e.next=19;break}return a.classList.toggle("is-Hidden-F"),z=z.filter((function(e){return e.id!==r.id.slice(1)})),e.next=9,A(z);case 9:return i=e.sent,N.innerHTML=i,D=Math.ceil(z.length/Y),e.next=14,I(z,1,Y);case 14:o=e.sent,B.innerHTML=o,J(D,1),1===D&&(R.style.display="none"),0===z.length&&P();case 19:c=r.id.slice(1),l=r.getAttribute("data-category"),u=H("favorites")||[],-1!==(f=u.findIndex((function(e){return e.id===c})))?u.splice(f,1):u.push({id:c,category:l}),localStorage.setItem("favorites",JSON.stringify(u)),r.querySelector(".favorites__heart").classList.toggle("heart-isActive");case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=t(o)(t(s).mark((function e(n){var r,a,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("button"===(r=n.target).type){e.next=3;break}return e.abrupt("return");case 3:if($(r),a=z,"All categories"!==r.textContent&&(a=z.filter((function(e){return e.category===r.textContent}))),console.log(a),0===a.length){e.next=19;break}return localStorage.setItem("page",1),D=Math.ceil(a.length/Y),R.style.display=D>1?"flex":"none",J(D,1),e.next=14,I(a,1,Y);case 14:i=e.sent,B.innerHTML=i,B.style.justifyContent="start",e.next=20;break;case 19:P();case 20:return e.abrupt("return",1);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=t(o)(t(s).mark((function e(){var n,r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R.style.display="none",z=H("favorites")||[],U<768&&0===z.length&&(B.style.minHeight="100hv"),0!==z.length){e.next=8;break}return U<768&&(C.style.display="none"),(t=j).classList.add("empty"),t.insertAdjacentHTML("beforeend",E()),W.classList.toggle("is-Hidden-F"),e.abrupt("return");case 8:return C.style.display="block",D=Math.ceil(z.length/Y),e.next=12,A(z);case 12:if(n=e.sent){e.next=17;break}return N.style.display="none",B.innerHTML='\n    <li class="error-message"><h2>Error</h2>\n    <p>Oops! Something went wrong! Try reloading the page!</p></li>',e.abrupt("return");case 17:return e.next=19,I(z,1,Y);case 19:r=e.sent,N.innerHTML=n,B.innerHTML=r,D>1&&(R.style.display="flex",J(D,1)),B.addEventListener("click",K);case 24:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}();document.querySelector(".favorites__list-filter").addEventListener("click",G),R.addEventListener("click",(function(e){X(e,z,Y,D)})),Q(),window.addEventListener("beforeunload",(function(){localStorage.removeItem("page")}))}();
//# sourceMappingURL=favorites.13d85a8a.js.map
(()=>{var e={634:()=>{const e=document.querySelector(".portfolio-tabs-nav"),t=document.querySelectorAll(".portfolio-tabs-nav__btn"),o=document.querySelectorAll(".portfolio-tabs__item"),r=document.querySelectorAll(".portfolio-tabs__item--visible"),s=document.querySelector(".portfolio-more");if(e){const i=e=>{e.length<=9?s.style.display="none":s.style.display="inline-flex"},l=e=>{if(e.length>9){Array.from(e).slice(9,e.length).forEach((e=>{e.classList.remove("portfolio-tabs__item--visible"),e.classList.remove("portfolio-tabs__item--visible-more")}))}};e.addEventListener("click",(e=>{const r=e.target;if(r.classList.contains("portfolio-tabs-nav__btn")){const e=r.dataset.path;t.forEach((e=>{e.classList.remove("portfolio-tabs-nav__btn--active")})),r.classList.add("portfolio-tabs-nav__btn--active"),o.forEach((e=>{e.classList.remove("portfolio-tabs__item--visible"),e.classList.remove("portfolio-tabs__item--visible-more")})),document.querySelectorAll(`[data-target="${e}"]`).forEach((e=>{e.closest(".portfolio-tabs__item").classList.add("portfolio-tabs__item--visible")})),i(document.querySelectorAll(`[data-target="${e}"]`)),l(document.querySelectorAll(".portfolio-tabs__item--visible")),"all"===e&&(o.forEach((e=>{e.classList.add("portfolio-tabs__item--visible")})),i(document.querySelectorAll(".portfolio-tabs__item--visible")),l(document.querySelectorAll(".portfolio-tabs__item--visible")))}})),l(o),i(r),s.addEventListener("click",(()=>{const e=document.querySelector(".portfolio-tabs-nav__btn--active").dataset.path;console.log(e),"all"===e?o.forEach((e=>{e.classList.add("portfolio-tabs__item--visible-more"),s.style.display="none"})):(document.querySelectorAll(`[data-target="${e}"]`).forEach((e=>{e.closest(".portfolio-tabs__item").classList.add("portfolio-tabs__item--visible-more")})),s.style.display="none")}))}},45:()=>{document.querySelectorAll(".facts-element__circle").forEach((e=>{if("true"===e.dataset.percentage){let t=e.querySelector(".progress"),o=e.querySelector(".facts-element__value"),r=t.getAttribute("r"),s=2*Math.PI*r,i=e.dataset.full,l=e.dataset.value,a=Math.floor(l/i*100);o.textContent=l,t.setAttribute("stroke-dasharray",`${s}`),t.setAttribute("stroke-dashoffset",""+(s-s*a/100))}else{let t=e.querySelector(".progress"),o=e.querySelector(".facts-element__value"),r=t.getAttribute("r"),s=2*Math.PI*r,i=e.dataset.percent,l=Math.floor(parseInt(i));o.textContent=i+"%",t.setAttribute("stroke-dasharray",`${s}`),t.setAttribute("stroke-dashoffset",""+(s-s*l/100))}}))},113:()=>{const e=window.getComputedStyle(document.body),t=parseInt(e.getPropertyValue("--grid-gap")),o=parseInt(e.getPropertyValue("--slider-width")),r=(new Swiper(".swiper",{width:o,slidesPerView:3,spaceBetween:t,loop:!0,navigation:{nextEl:".portfolio-section__next",prevEl:".portfolio-section__prev"}}),new Swiper(".swiperRecalls",{slidesPerView:1,spaceBetween:t,loop:!0,navigation:{nextEl:".recalls-section__next",prevEl:".recalls-section__prev"}}),new Swiper(".swiperRelatedProjects",{width:o,slidesPerView:3,spaceBetween:t,loop:!0,navigation:{nextEl:".related-projects__next",prevEl:".related-projects__prev"}}),document.querySelector(".projects-images-slider"));if(r){const e=new Swiper(".projects-images-nav",{spaceBetween:20,slidesPerView:10,freeMode:!0,watchSlidesProgress:!0});new Swiper(r,{spaceBetween:20,slidesPerView:1,navigation:{nextEl:".projects-images__next",prevEl:".projects-images__prev"},thumbs:{swiper:e}})}new Swiper(".swiperSimilarProjects",{width:o,slidesPerView:3,spaceBetween:t,loop:!0,navigation:{nextEl:".similar-projects__next",prevEl:".similar-projects__prev"}})},100:()=>{document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".accordion").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget,o=t.querySelector(".accordion__control"),r=t.querySelector(".accordion__content");t.classList.toggle("open"),t.classList.contains("open")?(o.setAttribute("aria-expended",!0),r.setAttribute("aria-hidden",!1),r.style.maxHeight=r.scrollHeight+"px"):(o.setAttribute("aria-expended",!1),r.setAttribute("aria-hidden",!0),r.style.maxHeight=null)}))}))}))}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(113),o(45),o(634),o(100)})()})();
//# sourceMappingURL=scripts.fa06abdfc859332aa946.js.map
import{f as h}from"./assets/vendor-EyZmBGcZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();function p({mobMenu:t,mobMenuButton:r}){t.classList.toggle("is-open"),t.classList.contains("is-open")?r.classList.add("close"):r.classList.remove("close")}function g(t,{faqAnswer:r}){if(t.preventDefault(),t.target.classList.contains("faq-list-item-question")){const i=t.target.parentElement.children;for(const e of i)e.classList.contains("faq-list-item-answer-wrap")&&e.classList.toggle("is-show"),e.classList.contains("faq-button")&&e.firstElementChild.classList.toggle("rotate")}t.target.classList.contains("faq-button")&&(t.target.nextElementSibling.classList.toggle("is-show"),t.target.firstElementChild.classList.toggle("rotate"))}const L=(t,r)=>{const i=t.target.nextElementSibling;i.classList.add("is-show");for(const e of q)e.name===r&&(i.innerHTML=e.options.map(s=>`<span class="select-custom-list-item" data-select="${s.value}">${s.text}</span>`).join(""));i.addEventListener("click",e=>{let s=e.target.dataset.select;t.target.value=s,i.classList.remove("is-show")})},q=[{name:"service",options:[{value:"Residential/Commercial moving",text:"Residential/Commercial moving"},{value:"Long distance",text:"Long distance"},{value:"Furniture delivery",text:"Furniture delivery"},{value:"Internal (No truck)",text:"Internal (No truck)"},{value:"Cold/hot tub",text:"Cold/hot tub"},{value:"Piano",text:"Piano"},{value:"Gym",text:"Gym"}]},{name:"requirement",options:[{value:"Office",text:"Office"},{value:"Gym",text:"Gym"},{value:"Сlinic etc",text:"Сlinic etc"},{value:"House",text:"House"},{value:"Townhouse",text:"Townhouse"}]}],v=(t,{expGalleryList:r,expGalleryItem:i},e)=>{const s="gallery-right-arrow",n="gallery-left-arrow",a=i.offsetWidth,m=r.children.length;let c=15;if(t.target.classList.contains(s))return e===m-1||(e+=1,c*=e,r.style.transform=`translateX(-${a*e+c}px)`),e;if(t.target.classList.contains(n))return e===0?e=0:(e-=1,c*=e,r.style.transform=`translateX(-${a*e+c}px)`,e)},f=(t,{expGalleryList:r,expGalleryItem:i},e)=>{const s=i.offsetWidth,n=r.children.length;let a=15;if(t==="left")return e===n-1||(e+=1,a*=e,r.style.transform=`translateX(-${s*e+a}px)`),e;if(t==="right")return e===0?e=0:(e-=1,a*=e,r.style.transform=`translateX(-${s*e+a}px)`,e)},o={mobMenuButton:document.querySelector(".mob-menu-button"),mobMenu:document.querySelector(".mobile-menu"),faqList:document.querySelector(".faq-list"),faqAnswer:document.querySelectorAll(".faq-list-item-answer"),modalBackDrop:document.querySelector(".modal-backdrop"),modalForm:document.querySelector(".modal-form"),modalCloseButton:document.querySelector(".modal-close-button"),modalServiceSelect:document.querySelector('[data-listname="service"]'),modalRequirementSelect:document.querySelector('[data-listname="requirement"]'),expGalleryButtonsWrap:document.querySelector(".gallery-arrow-wrap"),expGalleryList:document.querySelector(".experience-gallery-list"),expGalleryItem:document.querySelector(".experience-gallery-item")};o.mobMenuButton.addEventListener("click",()=>{p(o)});o.faqList.addEventListener("click",t=>{g(t,o)});o.modalForm.addEventListener("click",t=>{if(t.target.dataset.type==="customSelect"){const r=t.target.name;L(t,r)}else o.modalServiceSelect.classList.remove("is-show"),o.modalRequirementSelect.classList.remove("is-show")});o.modalCloseButton.addEventListener("click",()=>o.modalBackDrop.classList.add("is-hidden"));document.querySelector("body").addEventListener("click",t=>{t.target.dataset.set==="open-modal"&&o.modalBackDrop.classList.remove("is-hidden")});h("#date",{position:"below center",onChange:function(t,r,i){console.log(r)},minDate:Date.now(),static:!0,disableMobile:!0});let l=0;o.expGalleryButtonsWrap.addEventListener("click",t=>{l=v(t,o,l)});let d=0,u=0;function y(){u<d&&f("left",o,l),u>d&&f("right",o,l)}o.expGalleryList.addEventListener("touchstart",t=>{d=t.changedTouches[0].screenX});o.expGalleryList.addEventListener("touchend",t=>{u=t.changedTouches[0].screenX,y()});
//# sourceMappingURL=index.js.map

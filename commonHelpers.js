import{S as c,N as m,K as v,M as y,P as L,A as q,a as g}from"./assets/vendor-8a454a08.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();c.use([m,v,y,L]);new c(".swiper-about-me",{slidesPerView:"auto",breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},speed:800,initialSlide:0,loop:!0,autoplay:{delay:5e3},grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},navigation:{nextEl:".about-me-btn-next"},navigationPosition:"right",effect:"fade",allowSlidePrev:!1,on:{slideChange:function(){document.querySelector(".swiper-slide.skills-item-wrap-activ").classList.remove("skills-item-wrap-activ"),this.slides[this.activeIndex].classList.add("skills-item-wrap-activ")}}});const E=document.querySelectorAll(".ac-trigger"),x=document.querySelectorAll(".about-me-icon");E.forEach((e,o)=>{e.addEventListener("click",()=>{const t=x[o];t.classList.contains("about-me-icon-open")?t.classList.remove("about-me-icon-open"):t.classList.add("about-me-icon-open")})});new q(".accordion-container",{duration:400,showMultiple:!1,activeClass:"is-active",showMultiple:!0,openOnInit:[0]});c.use([m,v,y]);const u=new c(".swiper-projects",{slidesPerView:"auto",loop:!1,speed:400,grabCursor:!0,spaceBetween:16,slidesPerView:1,keyboard:{enabled:!0},navigation:{nextEl:".btn-next",prevEl:".btn-prev"},mousewheel:{sensitivity:1}});u.on("slideChange",function(){u.isBeginning?document.querySelector(".btn-prev").classList.add("no-active"):u.isEnd?document.querySelector(".btn-next").classList.add("no-active"):(document.querySelector(".btn-prev").classList.remove("no-active"),document.querySelector(".btn-next").classList.remove("no-active"))});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-element").forEach(o=>{o.addEventListener("click",()=>{const t=o.querySelector(".accordion-content"),s=o.querySelector(".accordion-button");t.classList.toggle("active"),s.querySelector(".accordion-button-icon").classList.toggle("active");const n=s.querySelector(".accordion-button-icon use");t.classList.contains("active")?(n.setAttribute("xlink:href","./img/icons.svg#icon-more"),s.querySelector(".accordion-button-icon").style.transform="rotate(180deg)"):(n.setAttribute("xlink:href","./img/icons.svg#icon-less"),s.querySelector(".accordion-button-icon").style.transform="rotate(0deg)"),t.classList.contains("active")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight=null,document.querySelectorAll(".faq-element").forEach(r=>{r!==o&&(r.querySelector(".accordion-content").classList.remove("active"),r.querySelector(".accordion-button-icon").classList.remove("active"),r.querySelector(".accordion-button-icon use").setAttribute("xlink:href","./img/icons.svg#icon-less"),r.querySelector(".accordion-button-icon").style.transform="rotate(0deg)",r.querySelector(".accordion-content").style.maxHeight=null)})})})});function A(e){document.querySelectorAll(".marquee__inner img").forEach(t=>{e?t.classList.add("running"):t.classList.remove("running")})}const P=document.querySelector(".covers"),k=.4,B={threshold:k},V=new IntersectionObserver(e=>{e.forEach(o=>{A(o.isIntersecting)})},B);V.observe(P);async function O(){const o="https://portfolio-js.b.goit.study/api/reviews";try{return(await g.get(o)).data}catch(t){throw console.error("Error fetching reviews:",t),t}}async function I(e){const t="https://portfolio-js.b.goit.study/api/requests";try{return(await g.post(t,e)).data}catch(s){throw console.error("Error posting request:",s),s}}c.use([m,v,y]);const d=new c(".swiper-reviews",{slidesPerView:"auto",breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},loop:!1,mousewheel:{sensitivity:1},keyboard:{enabled:!0,onlyInViewport:!0},spaceBetween:16,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},grabCursor:!0,speed:800});d.on("slideChange",function(){d.isBeginning?document.querySelector(".reviews-btn-prev").classList.add("no-active"):d.isEnd?document.querySelector(".reviews-btn-next").classList.add("no-active"):(document.querySelector(".reviews-btn-prev").classList.remove("no-active"),document.querySelector(".reviews-btn-next").classList.remove("no-active"))});function R({author:e,avatar_url:o,review:t}){return`<li class="reviews-list-item swiper-slide">
          <a class="reviews-image" href='${o}'>
            <img src='${o}' alt="avatar author" class="photo-img" />
          </a>
          <h3 class="reviews-title-name">${e}</h3>
          <p class="reviews-text">${t}
          </p>
        </li>`}function C(e){return e.map(R).join(" ")}window.onload=M;const w=document.querySelector(".reviews-list");async function M(){try{const e=await O(),o=C(e);w.innerHTML=o}catch(e){console.error("Error fetching reviews:",e),w.innerHTML='<p id="reviews-text-err">Not found</p>',document.querySelector(".reviews-btn-next").classList.add("no-active")}}const b=document.querySelector(".form"),h=document.getElementById("email"),$=document.getElementById("comment");document.querySelector(".submit-btn");const a=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-window"),N=document.querySelector(".modal-btn-close");h.addEventListener("input",function(){const e=this.value;/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(this.classList.remove("input-error"),this.classList.add("input-success")):(this.classList.remove("input-success"),this.classList.add("input-error"))});b.addEventListener("submit",D);async function D(e){e.preventDefault();const o={email:h.value,comment:$.value};try{(await I(o)).title!==" "&&(a.style.opacity=1,a.style.visibility="visible",l.style.opacity=1,l.style.visibility="visible",b.reset())}catch(t){throw t}}N.addEventListener("click",p);function p(){a.style.opacity=0,a.style.visibility="hidden",l.style.opacity=0,l.style.visibility="hidden"}a.addEventListener("click",p);window.addEventListener("keydown",e=>{e.key==="Escape"&&p()});const H=document.querySelector(".menu-btn"),_=document.querySelector(".menu-nav"),T=document.querySelectorAll(".menu-nav li a");document.querySelector(".order-button");function S(){_.classList.toggle("show-menu")}H.addEventListener("click",function(){S()});T.forEach(e=>e.addEventListener("click",j));function j(e){S()}const U=document.querySelector(".mobile-button-menu"),K=document.querySelector(".modal-window-mb"),z=document.querySelector(".modal-menu-close-btn"),Z=document.querySelectorAll(".modal-menu-item");function f(e){K.classList.toggle("is-open")}U.addEventListener("click",f);z.addEventListener("click",f);Z.forEach(e=>e.addEventListener("click",f));
//# sourceMappingURL=commonHelpers.js.map

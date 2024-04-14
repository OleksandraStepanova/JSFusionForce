import{S as c,N as d,K as m,M as v,P as L,a as f}from"./assets/vendor-ce43954b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();c.use([d,m,v,L]);new c(".swiper-about-me",{slidesPerView:"auto",breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:5}},initialSlide:0,loop:!0,autoplay:{delay:5e3},grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},navigation:{nextEl:".btn-next"},navigationPosition:"right",effect:"fade",allowSlidePrev:!1,on:{slideChange:function(){document.querySelector(".swiper-slide.skills-item-wrap-activ").classList.remove("skills-item-wrap-activ"),this.slides[this.activeIndex].classList.add("skills-item-wrap-activ")}}});c.use([d,m,v]);new c(".swiper-projects",{slidesPerView:"auto",loop:!1,speed:400,grabCursor:!0,spaceBetween:16,slidesPerView:1,keyboard:{enabled:!0},navigation:{nextEl:".btn-next",prevEl:".btn-prev"},mousewheel:{sensitivity:1},on:{reachEnd:function(){document.querySelector(".btn-prev").classList.remove("no-active"),document.querySelector(".btn-next").classList.add("no-active")},reachBeginning:function(){document.querySelector(".btn-next").classList.remove("no-active"),document.querySelector(".btn-prev").classList.add("no-active")}}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion-button").forEach(t=>{t.addEventListener("click",()=>{const o=t.closest(".faq-element"),i=o.querySelector(".accordion-content");i.classList.toggle("active"),t.querySelector(".accordion-button-icon").classList.toggle("active");const s=t.querySelector(".accordion-button-icon use");i.classList.contains("active")?s.setAttribute("href","./img/icons.svg#icon-more"):s.setAttribute("href","./img/icons.svg#icon-less"),i.classList.contains("active")?i.style.maxHeight=i.scrollHeight+"px":i.style.maxHeight=null,document.querySelectorAll(".faq-element").forEach(p=>{p!==o&&(p.style.height=null)})})})});function S(e){document.querySelectorAll(".marquee__inner img").forEach(o=>{e?o.classList.add("running"):o.classList.remove("running")})}const q=document.querySelector(".covers"),E=.4,P={threshold:E},B=new IntersectionObserver(e=>{e.forEach(t=>{S(t.isIntersecting)})},P);B.observe(q);async function x(){const t="https://portfolio-js.b.goit.study/api/reviews";try{return(await f.get(t)).data}catch(o){throw console.error("Error fetching reviews:",o),o}}async function A(e){const o="https://portfolio-js.b.goit.study/api/requests";try{return(await f.post(o,e)).data}catch(i){throw console.error("Error posting request:",i),i}}c.use([d,m,v]);new c(".swiper-reviews",{slidesPerView:"auto",breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},loop:!1,mousewheel:{sensitivity:1},keyboard:{enabled:!0,onlyInViewport:!0},spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},grabCursor:!0,on:{reachEnd:function(){document.querySelector(".swiper-button-prev").classList.remove("no-active"),document.querySelector(".swiper-button-next").classList.add("no-active")},reachBeginning:function(){document.querySelector(".swiper-button-next").classList.remove("no-active"),document.querySelector(".swiper-button-prev").classList.add("no-active")}},speed:800});function k({author:e,avatar_url:t,review:o}){return`<li class="reviews-list-item swiper-slide">
          <a class="reviews-image" href='${t}'>
            <img src='${t}' alt="avatar author" class="photo-img" />
          </a>
          <h3 class="reviews-title-name">${e}</h3>
          <p class="reviews-text">${o}
          </p>
        </li>`}function I(e){return e.map(k).join(" ")}window.onload=R;const V=document.querySelector(".reviews-list");async function R(){try{const e=await x(),t=I(e);V.innerHTML=t}catch(e){console.log(e)}}const w=document.querySelector(".form"),g=document.getElementById("email"),M=document.getElementById("comment");document.querySelector(".submit-btn");const l=document.querySelector(".modal-overlay"),u=document.querySelector(".modal-window"),O=document.querySelector(".modal-btn-close");g.addEventListener("input",function(){const e=this.value;/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(this.classList.remove("input-error"),this.classList.add("input-success")):(this.classList.remove("input-success"),this.classList.add("input-error"))});w.addEventListener("submit",C);async function C(e){e.preventDefault();const t={email:g.value,comment:M.value};try{(await A(t)).title!==" "&&(l.style.opacity=1,l.style.visibility="visible",u.style.opacity=1,u.style.visibility="visible",w.reset())}catch(o){throw o}}O.addEventListener("click",y);function y(){l.style.opacity=0,l.style.visibility="hidden",u.style.opacity=0,u.style.visibility="hidden"}l.addEventListener("click",y);window.addEventListener("keydown",e=>{e.key==="Escape"&&y()});const $=document.querySelector(".menu-btn"),D=document.querySelector(".menu-nav"),N=document.querySelectorAll(".menu-nav li a");document.querySelector(".order-button");function h(){D.classList.toggle("show-menu")}$.addEventListener("click",function(){h()});N.forEach(e=>e.addEventListener("click",_));function _(e){h()}const j=document.querySelector(".mobile-button-menu"),r=document.querySelector(".mobile-menu"),H=document.querySelector(".mobile-menu-svg");function T(){return r.style.right!=="-100%"?(r.style.right="0",r.style.display="flex"):(r.style.right="0",r.style.display="none"),0}function b(){r.style.right="-100%"}const U=document.querySelectorAll(".mobile-menu-part");U.forEach(e=>{e.addEventListener("click",()=>{b()})});j.addEventListener("click",T);H.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map

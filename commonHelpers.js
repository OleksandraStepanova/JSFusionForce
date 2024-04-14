import{a as m}from"./assets/vendor-34f890c2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(n){const s="https://portfolio-js.b.goit.study/api/requests";try{return(await m.post(s,n)).data}catch(o){throw console.error("Error posting request:",o),o}}const a=document.querySelector(".form"),d=document.getElementById("email"),y=document.getElementById("comment");document.querySelector(".submit-btn");const i=document.querySelector(".modal-overlay"),c=document.querySelector(".modal-window"),p=document.querySelector(".modal-btn-close");d.addEventListener("input",function(){const n=this.value;/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)?(this.classList.remove("input-error"),this.classList.add("input-success")):(this.classList.remove("input-success"),this.classList.add("input-error"))});a.addEventListener("submit",v);async function v(n){n.preventDefault();const r={email:d.value,comment:y.value};try{(await f(r)).title!==" "&&(i.style.opacity=1,i.style.visibility="visible",c.style.opacity=1,c.style.visibility="visible",a.reset())}catch(s){throw s}}p.addEventListener("click",l);function l(){i.style.opacity=0,i.style.visibility="hidden",c.style.opacity=0,c.style.visibility="hidden"}i.addEventListener("click",l);window.addEventListener("keydown",n=>{n.key==="Escape"&&l()});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".menu-btn"),r=document.querySelector(".menu-nav");function s(){r.classList.toggle("visually-hidden")}n.addEventListener("click",function(){s()}),document.querySelectorAll(".menu-nav li a").forEach(function(e){e.addEventListener("click",function(){s()})})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".menu-nav li a"),r=document.querySelector(".order-button");function s(o){const e=document.querySelector(o);if(e){const t=e.offsetTop;window.scrollTo({top:t,behavior:"smooth"})}}n.forEach(function(o){o.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href");s(t)})}),r.addEventListener("click",function(o){o.preventDefault();const e=this.getAttribute("href");s(e)})});
//# sourceMappingURL=commonHelpers.js.map

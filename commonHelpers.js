import{a as m}from"./assets/vendor-34f890c2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function y(o){const i="https://portfolio-js.b.goit.study/api/requests";try{return(await m.post(i,o)).data}catch(r){throw console.error("Error posting request:",r),r}}const u=document.querySelector(".form"),d=document.getElementById("email"),p=document.getElementById("comment");document.querySelector(".submit-btn");const n=document.querySelector(".modal-overlay"),c=document.querySelector(".modal-window"),f=document.querySelector(".modal-btn-close");d.addEventListener("input",function(){const o=this.value;/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o)?(this.classList.remove("input-error"),this.classList.add("input-success")):(this.classList.remove("input-success"),this.classList.add("input-error"))});u.addEventListener("submit",v);async function v(o){o.preventDefault();const s={email:d.value,comment:p.value};try{(await y(s)).title!==" "&&(n.style.opacity=1,n.style.visibility="visible",c.style.opacity=1,c.style.visibility="visible",u.reset())}catch(i){throw i}}f.addEventListener("click",a);function a(){n.style.opacity=0,n.style.visibility="hidden",c.style.opacity=0,c.style.visibility="hidden"}n.addEventListener("click",a);window.addEventListener("keydown",o=>{o.key==="Escape"&&a()});
//# sourceMappingURL=commonHelpers.js.map

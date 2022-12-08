// ==UserScript==
// @name         zjyycoj by.jsxf
// @description  1.修改oj配色
// @namespace    https://jinsexinfeng.github.io
// @version      0.1
// @author       jinsexinfeng.github.io
// @match        https://nwanna.cn/home
// @include      *://nwanna.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nwanna.cn
// @grant        none
// ==/UserScript==


(function() {
let css = "";
css += `
:root {
    --ojcolor:#e83b86;
    --ojcolorb:#ee87b4;
    --white:#FFF
}

a {
    color: var(--ojcolor) ;
}
.is-primary{
    background-color: var(--ojcolorb) !important;
    color: var(--white) !important;
}

.is-light{
    background-color: var(--white) ;
    color: var(--ojcolorb);
}

.is-outlined{
    color: var(--ojcolor) !important;
    border-color: var(--ojcolorb) !important;
    background-color: var(--white) !important;
}

.is-outlined:focus{
    color: var(--ojcolor) !important;
    border-color: var(--ojcolor) !important;
    background-color: var(--white) !important;
}

.has-text-primary{
    color: var(--ojcolor) !important;
}

a.navbar-item:focus,
a.navbar-item:hover{
    background-color: var(--ojcolor) !important;
    border-radius: 15px;
}

li.is-active > a,
.tabs > li.is-active > a{
    color: var(--ojcolor) !important;
    border-bottom-color: var(--ojcolor) !important;
}

li:not(.is-active) > a:focus,
.b-tabs > .tabs > li:not(.is-active) > a:focus,
li:not(.is-active) > a:hover,
.b-tabs > .tabs > li:not(.is-active) > a:hover{
    color: var(--ojcolorb) !important;
    border-bottom-color: var(--ojcolorb) !important;
}

.tooltip-trigger{
   background-color: white !important;
}


.pagination-link.is-current{
    background-color: var(--ojcolor) !important;
    border-color:var(--ojcolor) !important;
    color: white;
}

.problem-title{
    border-left: 5px solid var(--ojcolor) !important;
}

.router-link-exact-active{
     border: 2px solid var(--ojcolor) !important;
     border-radius: 8px;
}

.is-flex-wrap-wrap>.is-flex-grow-0>.content{
     border-radius: 8px;
}

.vs-switch{
    --vs-color: 232,59,134 !important;
}

progress::-webkit-progress-value{
    background-color:var(--ojcolorb) !important;
}

.vs-loading__load__text{
    color: var(--ojcolor) !important;
}

`
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
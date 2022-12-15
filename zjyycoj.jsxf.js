// ==UserScript==
// @name         zjyycoj by.jsxf
// @description  1.修改oj配色
// @namespace    https://jinsexinfeng.github.io
// @version      0.6
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
    --vs-ojcolor: 232,59,134;
    --white:#FFF
}

a {
    color: var(--ojcolor) ;
}
a.navbar-item{
    border-radius: 15px;
}

.button.is-primary:focus,
.button.is-primary:hover,
a.navbar-item:focus,
a.navbar-item:hover{
    background-color: var(--ojcolor) !important;
}

.button.is-primary,
.navbar.is-primary{
    background-color: var(--ojcolorb);
    color: var(--white);
}


.button.is-primary.is-light {
    background-color: rgba(var(--vs-ojcolor),0.08);
    color: var(--ojcolor);
}

.button.is-primary.is-light:hover,
.button.is-primary.is-light:focus {
    background-color: var(--ojcolor);
    color: var(--white);
}

.is-outlined{
    color: var(--ojcolor) !important;
    border-color: var(--ojcolorb) !important;
    background-color: var(--white) !important;
}

.is-outlined:hover,
.is-outlined:focus{
    color: var(--white) !important;
    border-color: var(--ojcolor) !important;
    background-color: var(--white) !important;
}

.has-text-primary{
    color: var(--ojcolor) !important;
}

.router-link-exact-active{
     border: 2px solid var(--ojcolor) !important;
     border-radius: 8px;
}

li.is-active > a,
.tabs > li.is-active > a{
    color: var(--ojcolor) !important;
    border-color: var(--ojcolor) !important;
}

li:not(.is-active) > a:focus,
.b-tabs > .tabs > li:not(.is-active) > a:focus,
li:not(.is-active) > a:hover,
.b-tabs > .tabs > li:not(.is-active) > a:hover{
    color: var(--ojcolorb) !important;
    border-color: var(--ojcolorb) !important;
}
.b-tooltip.is-right .tooltip-content:before{
    border-right: 5px solid var(--ojcolorb) !important;
}
.b-tooltip.is-top .tooltip-content:before{
    border-top: 5px solid var(--ojcolorb) !important;
}

.b-tooltip.is-primary .tooltip-content {
    background: var(--ojcolorb) !important;
    color: white !important;
}

.tooltip-trigger{
   color: var(--ojcolor) !important;
}

.pagination-link.is-current{
    background-color: var(--ojcolor) !important;
    border-color:var(--ojcolor) !important;
    color: white;
}

.problem-title{
    border-left: 5px solid var(--ojcolor) !important;
}



.is-flex-wrap-wrap>.is-flex-grow-0>.content{
     border-radius: 8px;
}

.el-page-header__title,
.el-icon-back{
    color: var(--ojcolor) !important;
}

progress::-webkit-progress-value{
    background-color:var(--ojcolorb) !important;
}

.hljs{
    font-family: Consolas, "Courier New", monospace;
    font-weight: normal;
    font-size: 20px;
    font-feature-settings: "liga" 0, "calt" 0; line-height: 27px;
}

.table-wrapper{
    overflow: overlay;
}

.table-wrapper::-webkit-scrollbar {
    height: 10px;
}
[class*="--default"], [class*="--primary"] {
    --vs-color: var(--vs-ojcolor);
}

.vs-switch {
    --vs-color: var(--vs-ojcolor) !important;
}

.vs-loading__load__animation__3,
.vs-loading__load__animation__2,
.vs-loading__load__animation__1{
    border: 4px solid rgba(var(--vs-ojcolor),1) !important;
}

.vs-loading__load__text{
    color: var(--ojcolor) !important;
}

#rank-content>.card{
    box-shadow: rgb(var(--vs-ojcolor)) 0px 10px 0px 0px, rgb(var(--vs-ojcolor)) 0px 0px 0px 0px !important;
}


.rank>thead>tr>th{
    background-color :rgba(var(--vs-ojcolor),0.08) !important;
    vertical-align:bottom !important;
}

.button.is-small:not(.is-rounded) {
    border-radius: 12px;
}

.button.is-small {
    font-size: 0.86rem;
}

.team-position> .team-users{
    max-width: max-content !important;
    margin-left: 20px !important;
    margin-right: 20px;
}
.team-position> .team-users> .is-flex-grow-0{
    flex-basis: 160px;
}


.default-theme .splitpanes--vertical>.splitpanes__splitter,
.default-theme.splitpanes--vertical>.splitpanes__splitter {
    background: gray !important;
}

.default-theme .splitpanes--vertical>.splitpanes__splitter:hover,
.default-theme.splitpanes--vertical>.splitpanes__splitter:hover {
    background: var(--ojcolorb) !important;

}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: var(--ojcolorb);
    color: #fff;
}

.p-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(var(--vs-ojcolor),0.2);
}

#judgeStatusBtn .status-1 {
    background: rgba(var(--vs-ojcolor),0.2) !important;
    color: var(--ojcolor) !important;
}

::-webkit-scrollbar-thumb {
    background-color: var(--ojcolorb) !important;
}

.title.is-3:not(.problem-title) {
    border-bottom: 3px solid var(--ojcolor) !important;
}

#problem-tab:hover::-webkit-scrollbar {
    width: 8px !important;
}
#problem-tab::-webkit-scrollbar {
    width: 0px !important;
}
#problem-tab:hover{
   padding-right: 0px;
}
#problem-tab{
   padding-right: 8px;
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

"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[5373],{"../web-components/dist/esm/OpenInNew-cdeed5ce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>OpenInNew});const OpenInNew='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>'},"../web-components/dist/esm/ic-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_link:()=>Link});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_OpenInNew_cdeed5ce_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/OpenInNew-cdeed5ce.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");const Link=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.inheritedAttributes={},this.hostMutationObserver=null,this.hostMutationCallback=mutationList=>{let forceComponentUpdate=!1;mutationList.forEach((({attributeName})=>{_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.y.includes(attributeName)&&(this.inheritedAttributes[attributeName]=this.el.getAttribute(attributeName),forceComponentUpdate=!0)})),forceComponentUpdate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.appearance="default",this.download=!1,this.href=null,this.hreflang=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0}componentWillLoad(){this.inheritedAttributes=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.y),this.updateTheme()}componentDidLoad(){this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0})}disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}themeChangeHandler({detail}){this.updateTheme(detail.mode)}async setFocus(){var _a;null===(_a=this.el.shadowRoot.querySelector("a"))||void 0===_a||_a.focus()}updateTheme(newTheme=null){const theme=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.l)(this.el,newTheme);theme!==_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Default&&(this.appearance=theme)}hasRouterSlot(){return this.routerSlot=this.el.querySelector('[slot="router-item"]'),this.routerSlot&&(this.routerSlot.ariaLabel=this.routerSlot.textContent),!!this.routerSlot}render(){const{download,href,hreflang,referrerpolicy,rel,target,appearance}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-link":!0,[`ic-link-${appearance}`]:!0}},this.hasRouterSlot()?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"router-item"}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({class:{link:null!==href,[`${appearance}`]:null!==href},download:!1!==download?download:null,href,hrefLang:hreflang,referrerPolicy:referrerpolicy,rel,target,tabindex:null!==href?"0":"-1"},this.inheritedAttributes),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),"_blank"===target&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"ic-link-open-in-new-icon",innerHTML:_OpenInNew_cdeed5ce_js__WEBPACK_IMPORTED_MODULE_3__.O})))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Link.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-link) .link,:host(.ic-link) ::slotted(a){color:var(--ic-hyperlink);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}:host(.ic-link.ic-link-dark) .link.dark,:host(.ic-link.ic-link-dark) ::slotted(a){color:var(--ic-color-primary-text-light)}:host(.ic-link.ic-link-light) .link.light,:host(.ic-link.ic-link-light) ::slotted(a){color:var(--ic-color-primary-text-dark)}:host(.ic-link) .link:visited,:host(.ic-link) ::slotted(a:visited){color:var(--ic-hyperlink-visited)}:host(.ic-link) .link:hover,:host(.ic-link) .link:focus,:host(.ic-link) ::slotted(a:hover),:host(.ic-link) ::slotted(a:focus){outline:none;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}@supports (text-underline-offset: 10%){:host(.ic-link) .link:hover,:host(.ic-link) .link:focus,:host(.ic-link) ::slotted(a:hover),:host(.ic-link) ::slotted(a:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:10%;border-bottom:0 !important;margin-bottom:0 !important}}:host(.ic-link) .link:active,:host(.ic-link) .link:focus:active,:host(.ic-link) .link:visited:active,:host(.ic-link) ::slotted(a:active),:host(.ic-link) ::slotted(a:focus:active),:host(.ic-link) ::slotted(a:visited:active){text-decoration:none}.ic-link-open-in-new-icon{vertical-align:middle;margin-left:var(--ic-space-xxs)}.link>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink)}.ic-link-open-in-new-icon>svg{width:var(--ic-space-md);height:var(--ic-space-md);fill:currentcolor}.link:visited>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink-visited)}.link.light:visited>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink-contrast-visited)}:host(.breadcrumb-link) .link{display:var(--breadcrumb-link-display);align-items:var(--breadcrumb-link-align-items);gap:var(--breadcrumb-link-gap)}:host(.breadcrumb-link) .link ::slotted(.back-icon){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.breadcrumb-link.current-page) a,:host(.breadcrumb-link.current-page) ::slotted(a){font-weight:normal;color:inherit;text-decoration:none;display:flex;align-items:center}:host(.breadcrumb-link.current-page) .link,:host(.breadcrumb-link.current-page) ::slotted(a:focus){outline:var(--ic-hc-focus-outline);text-decoration:none}:host(.breadcrumb-link.current-page) .link:visited{color:var(--ic-color-primary-text)}'}}]);
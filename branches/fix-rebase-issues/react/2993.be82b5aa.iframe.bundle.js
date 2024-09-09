"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2993],{"../web-components/dist/esm/ic-switch.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_switch:()=>Switch});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js");__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");let inputIds=0;const Switch=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icBlur",7),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icFocus=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icFocus",7),this.inputId="ic-switch-input-"+inputIds++,this.handleChange=()=>{this.checkedState=!this.checkedState,this.icChange.emit({checked:this.checkedState,value:this.value})},this.onFocus=()=>{this.icFocus.emit()},this.onBlur=()=>{this.icBlur.emit()},this.handleFormReset=()=>{this.checkedState=this.initiallyChecked},this.checkedState=!1,this.initiallyChecked=this.checked,this.checked=!1,this.disabled=!1,this.helperText="",this.hideLabel=!1,this.label=void 0,this.name=this.inputId,this.showState=!1,this.size="default",this.value="on"}checkedChangeHandler(){this.checkedState=this.checked}disconnectedCallback(){(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.el,this.handleFormReset)}componentWillLoad(){this.checkedState=this.checked,(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.el,this.handleFormReset),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.disabled,this.el)}componentDidLoad(){(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Switch")}async setFocus(){this.el.shadowRoot.querySelector("input")&&this.el.shadowRoot.querySelector("input").focus()}render(){const{label,checkedState,size,disabled,name,showState,value,hideLabel,helperText,inputId}=this;(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.p)(!0,this.el,name,checkedState?value:"",disabled);const describedBy=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.s)(inputId,""!==helperText,!1);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:{"ic-switch-container":!0,"ic-switch-disabled":disabled,"ic-switch-small":"small"===size},htmlFor:inputId},!hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{for:inputId,label,helperText,readonly:!0,disabled,class:{"ic-switch-label":!0,"ic-switch-label-small":"small"===size}}),!hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"ic-switch-line-break"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{checked:checkedState,disabled,"aria-label":label,"aria-checked":checkedState?"true":"false","aria-describedby":describedBy,role:"switch",class:"ic-switch-input",type:"checkbox",name:"toggle",id:inputId,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"ic-switch-toggle"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("line",{class:"ic-switch-icon-line",x1:"9",y1:"small"===size?"2":"1",x2:"9",y2:"small"===size?"8":"9"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{class:"ic-switch-icon-circle",fill:"none",cx:"5",cy:"5",r:"small"===size?"3.335":"4.445"}))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"right-adornment"}),showState&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{"aria-hidden":"true",variant:"label",class:"ic-switch-checked-status"},checkedState?"On":"Off")))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{checked:["checkedChangeHandler"]}}};Switch.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}input{overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.ic-switch-container{display:flex;flex-wrap:wrap;align-items:center;gap:var(--ic-space-xxs);cursor:pointer}.ic-switch-label{margin-left:var(--ic-space-xxs);margin-bottom:var(--ic-space-sm)}.ic-switch-label-small{margin-bottom:0.625rem}.ic-switch-toggle{display:flex;align-items:center;justify-content:space-around;width:4rem;height:var(--ic-space-xl);position:relative;border-radius:100vw;background-color:var(--ic-architectural-200);border:var(--ic-border-width) solid var(--ic-architectural-700);box-sizing:border-box;transition:var(--ic-transition-duration-fast)}.ic-switch-line-break{flex:1 0 100%}.ic-switch-checked-status{padding-left:var(--ic-space-xxs);width:var(--ic-space-lg)}.ic-switch-toggle::before{content:"";width:1.333rem;height:1.333rem;border-radius:50%;position:absolute;z-index:2;top:50%;left:0.333rem;transform:translate(0, -50%);background-color:var(--ic-architectural-700);transition:var(--ic-transition-duration-slow)}.ic-switch-icon{display:inline-block;vertical-align:middle;width:0.625rem;height:0.625rem}.ic-switch-icon-circle,.ic-switch-icon-line{stroke-width:1}.ic-switch-icon-circle{stroke:var(--ic-architectural-700)}.ic-switch-icon-line{stroke:var(--ic-architectural-white)}@media (prefers-reduced-motion: reduce){.ic-switch-toggle::before{transition-duration:0ms}}.ic-switch-input:checked+.ic-switch-toggle{background-color:var(--ic-action-default);border:none}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-xl), -50%);background-color:var(--ic-architectural-white)}.ic-switch-input:not([disabled])+.ic-switch-toggle:hover::before{box-shadow:0 0 0 0.75rem var(--ic-action-dark-bg-hover)}.ic-switch-input:not([disabled])+.ic-switch-toggle:active::before{box-shadow:0 0 0 0.75rem var(--ic-action-dark-bg-active)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:hover::before{box-shadow:0 0 0 0.75rem var(--ic-action-default-bg-hover)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:active::before{box-shadow:0 0 0 0.75rem var(--ic-action-default-bg-active)}.ic-switch-input:focus:not([disabled])+.ic-switch-toggle,.ic-switch-input:focus-visible:not([disabled])+.ic-switch-toggle{box-shadow:var(--ic-border-focus)}.ic-switch-disabled{cursor:default}.ic-switch-disabled .ic-switch-icon-circle{stroke:var(--ic-architectural-300)}.ic-switch-disabled .ic-switch-icon-line{stroke:var(--ic-action-default-bg-active)}.ic-switch-input:disabled+.ic-switch-toggle{background-color:var(--ic-architectural-80);border:var(--ic-border-disabled)}.ic-switch-input:disabled~.ic-switch-checked-status{color:var(--ic-architectural-300)}.ic-switch-input:disabled+.ic-switch-toggle::before{background-color:var(--ic-architectural-300)}.ic-switch-input:disabled:checked+.ic-switch-toggle{background-color:var(--ic-status-info-light);border:var(--ic-border-width) dashed #98c9f5}.ic-switch-input:disabled:checked+.ic-switch-toggle::before{background-color:var(--ic-architectural-white)}.ic-switch-small{gap:var(--ic-space-xxxs)}.ic-switch-small .ic-switch-checked-status{padding-left:0.375rem}.ic-switch-small .ic-switch-toggle{width:var(--ic-space-xxl);height:var(--ic-space-lg)}.ic-switch-small .ic-switch-toggle::before{width:var(--ic-space-md);height:var(--ic-space-md);left:var(--ic-space-xxs)}.ic-switch-small .ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-lg), -50%)}::slotted(*){margin-left:var(--ic-space-sm)}::slotted(svg){fill:currentcolor}@media (forced-colors: active){.ic-switch-toggle::before,.ic-switch-input:checked+.ic-switch-toggle{border:var(--ic-hc-border)}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(calc(var(--ic-space-xl) - 0.125rem), -50%)}.ic-switch-input:disabled+.ic-switch-toggle,.ic-switch-input:disabled:checked+.ic-switch-toggle,.ic-switch-input:disabled+.ic-switch-toggle::before{border-color:GrayText}.ic-switch-input:disabled~.ic-switch-checked-status{color:GrayText}.ic-switch-disabled .ic-switch-icon-circle,.ic-switch-disabled .ic-switch-icon-line{stroke:GrayText}}'}}]);
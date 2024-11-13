"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[3943],{"../canary-web-components/dist/esm/ic-popover-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_popover_menu:()=>PopoverMenu});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-c326255f.js"),_popper_b8cc3f16_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../canary-web-components/dist/esm/popper-b8cc3f16.js");const PopoverMenu=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icPopoverClosed=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icPopoverClosed",7),this.ARIA_LABEL="aria-label",this.popoverMenuEls=[],this.setButtonFocus=()=>{var _a;null===(_a=this.popoverMenuEls[this.currentFocus])||void 0===_a||_a.focus()},this.findAnchorEl=anchor=>{let anchorElement=null;return anchor?(anchorElement=document.querySelector(0===anchor.indexOf("#")?anchor:"#"+anchor),null===anchorElement&&console.error(`Popover anchor element '${anchor}' not found`)):void 0===this.submenuId&&console.error("No anchor specified for popover component"),anchorElement},this.isNotPopoverMenuEl=ev=>{const{id,tagName}=ev.target;return id!==this.anchor&&"IC-MENU-ITEM"!==tagName&&"IC-MENU-GROUP"!==tagName&&"IC-POPOVER-MENU"!==tagName},this.getNextItemToSelect=(currentItem,movingDown)=>{const numButtons=this.popoverMenuEls.length-1;currentItem<1&&(currentItem=0);let nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numButtons:nextItem>numButtons&&(nextItem=0),nextItem},this.addMenuItems=elements=>{for(let i=0;i<elements.length;i++){const el=elements[i];if("IC-MENU-ITEM"===el.tagName)this.popoverMenuEls.push(el);else if("IC-MENU-GROUP"===el.tagName){const groupSlotWrapper=el.shadowRoot.querySelector(".menu-items-wrapper"),menuGroupElements=(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.y)(groupSlotWrapper);this.addMenuItems(menuGroupElements)}}},this.getMenuAriaLabel=()=>{const ariaLabel=this.el.getAttribute(this.ARIA_LABEL);return(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuId)?`${ariaLabel}, within nested level ${this.submenuLevel} ${this.parentLabel} submenu,`:ariaLabel},this.handleBackButtonClick=()=>{this.parentPopover.openFromChild(),this.open=!1},this.initPopperJS=()=>{this.popperInstance=(0,_popper_b8cc3f16_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.anchorEl,this.el,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"flip",options:{fallbackPlacements:["top-start","top-end","bottom-end"],rootBoundary:"viewport"}}]})},this.openingFromChild=!1,this.openingFromParent=!1,this.anchor=void 0,this.parentLabel=void 0,this.parentPopover=void 0,this.submenuId=void 0,this.submenuLevel=1,this.theme="inherit",this.open=void 0}watchOpenHandler(){this.open?(void 0===this.parentPopover||this.popoverMenuEls.some((menuItem=>menuItem.id))||this.popoverMenuEls.unshift(this.backButton),this.currentFocus=0,setTimeout(this.setButtonFocus,50)):this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}componentDidLoad(){const slotWrapper=this.el.shadowRoot.querySelector("ul.button"),popoverMenuElements=(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.y)(slotWrapper);null!==popoverMenuElements&&this.addMenuItems(popoverMenuElements),void 0===this.submenuId&&null===this.el.getAttribute(this.ARIA_LABEL)&&console.error("No aria-label specified for popover menu component - aria-label required")}componentWillRender(){this.anchorEl=this.findAnchorEl(this.anchor)}componentDidRender(){this.open&&!this.popperInstance&&this.initPopperJS()}handleMenuItemClick(ev){ev.detail.hasSubMenu||"Back"===ev.detail.label||this.closeMenu()}handleSubmenuChange(ev){const target=ev.target;this.open=!1;const childEl=document.querySelector(`ic-popover-menu[submenu-id=${target.submenuTriggerFor}]`);childEl.parentPopover=this.el,childEl.anchor=this.anchor,childEl.ariaLabel=this.el.getAttribute(this.ARIA_LABEL),childEl.openFromParent(),childEl.submenuLevel=this.submenuLevel+1,childEl.parentLabel=target.label}handleClick(ev){this.open&&this.isNotPopoverMenuEl(ev)&&this.closeMenu()}handleKeyDown(ev){switch(ev.key){case"ArrowDown":case"ArrowUp":ev.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,"ArrowDown"===ev.key),this.setButtonFocus();break;case"Home":this.currentFocus=0,this.setButtonFocus();break;case"End":this.currentFocus=this.popoverMenuEls.length-1,this.setButtonFocus();break;case"Escape":case"Tab":ev.preventDefault(),this.open&&(this.closeMenu(!0),this.el.blur())}}async openFromChild(){this.open=!0,this.openingFromChild=!0,setTimeout((()=>this.openingFromChild=!1),1e3)}async openFromParent(){this.open=!0,this.openingFromParent=!0,setTimeout((()=>this.openingFromParent=!1),1e3)}async closeMenu(setFocusToAnchor=!1){var _a;this.open=!1,this.parentPopover?this.parentPopover.closeMenu(setFocusToAnchor):(setFocusToAnchor&&(null===(_a=this.anchorEl)||void 0===_a||_a.focus()),this.icPopoverClosed.emit())}render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-popover-menu-open":this.open,[`ic-theme-${this.theme}`]:"inherit"!==this.theme}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:void 0===this.parentPopover?`ic-popover-submenu-${this.submenuId}`:"",class:{menu:!0},tabindex:open?"0":"-1"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"opening-from-parent":this.openingFromParent,"opening-from-child":this.openingFromChild}},(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuId)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{role:"menu"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-menu-item",{class:"ic-popover-submenu-back-button",ref:el=>this.backButton=el,label:"Back",onClick:this.handleBackButtonClick,id:`ic-popover-submenu-back-button-${this.submenuLevel}`},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{slot:"icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"submenu-back-icon"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"currentColor"})))),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small",class:"parent-label"},this.parentLabel)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"button","aria-label":this.getMenuAriaLabel(),role:"menu"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))))}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{open:["watchOpenHandler"]}}};PopoverMenu.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){:host .opening-from-parent{animation:slide-in var(--ic-transition-duration-slow) ease-in-out}:host .opening-from-child{animation:slide-out var(--ic-transition-duration-slow) ease-in-out}}:host{border-radius:var(--ic-border-radius);color:var(--ic-popover-nav-text);--ic-typography-color:var(--ic-popover-nav-text);position:relative;z-index:var(--ic-z-index-popover);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);display:none}:host(.on-dialog){inset:auto !important}:host(.on-dialog-fix-translate){transform:translate(0, var(--ic-space-xs)) !important}:host(.on-dialog-translate-y){transform:translate(0, calc(-1 * var(--translate-y))) !important}.menu{border:var(--ic-border-default);border-color:var(--ic-popover-border);border-radius:var(--ic-border-radius);background-color:var(--ic-popover-background);visibility:hidden;height:0}.button{text-decoration:none;list-style-type:none}:host(:focus-within){box-shadow:var(--ic-border-focus)}.menu:focus-visible{outline:none}:host(.ic-popover-menu-open){display:block;min-width:calc(20rem - var(--ic-space-xl));width:var(--popover-width, 20rem);max-width:calc(100vw - var(--ic-space-xl))}:host(.ic-popover-menu-open) .menu{visibility:visible;height:-moz-fit-content;height:fit-content;max-height:var(--max-height, -moz-fit-content);max-height:var(--max-height, fit-content);overflow-y:auto;overflow-x:hidden}.parent-label{--ic-typography-color:var(--ic-popover-parent-label);margin:var(--ic-space-xs) var(--ic-space-xs) 0}@keyframes slide-in{from{opacity:0;transform:translateX(10rem)}to{opacity:1;transform:translateX(0)}}@keyframes slide-out{from{opacity:0;transform:translateX(-10rem)}to{opacity:1;transform:translateX(0)}}'}}]);
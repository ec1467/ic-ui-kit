"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[3910],{"../web-components/dist/esm/ic-popover-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_popover_menu:()=>PopoverMenu});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-3905ccc4.js"),_popper_0fbeff6d_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/popper-0fbeff6d.js"),console=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),__webpack_require__("./node_modules/console-browserify/index.js")),PopoverMenu=function(){function PopoverMenu(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__.A)(this,PopoverMenu),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.icPopoverClosed=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icPopoverClosed",7),this.ARIA_LABEL="aria-label",this.popoverMenuEls=[],this.setButtonFocus=function(){var _a;null===(_a=_this.popoverMenuEls[_this.currentFocus])||void 0===_a||_a.focus()},this.findAnchorEl=function(anchor){var anchorElement=null;return anchor?null===(anchorElement=document.querySelector(0===anchor.indexOf("#")?anchor:"#"+anchor))&&console.error("Popover anchor element '".concat(anchor,"' not found")):void 0===_this.submenuId&&console.error("No anchor specified for popover component"),anchorElement},this.isNotPopoverMenuEl=function(ev){var _ev$target=ev.target,id=_ev$target.id,tagName=_ev$target.tagName;return id!==_this.anchor&&"IC-MENU-ITEM"!==tagName&&"IC-MENU-GROUP"!==tagName&&"IC-POPOVER-MENU"!==tagName},this.closeMenu=function(){var _a,setFocusToAnchor=arguments.length>0&&void 0!==arguments[0]&&arguments[0];_this.open=!1,setFocusToAnchor&&(null===(_a=_this.anchorEl)||void 0===_a||_a.focus()),_this.icPopoverClosed.emit()},this.getNextItemToSelect=function(currentItem,movingDown){var numButtons=_this.popoverMenuEls.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numButtons:nextItem>numButtons&&(nextItem=0),nextItem},this.addMenuItems=function(elements){for(var i=0;i<elements.length;i++){var el=elements[i];if("IC-MENU-ITEM"===el.tagName)_this.popoverMenuEls.push(el);else if("IC-MENU-GROUP"===el.tagName){var groupSlotWrapper=el.shadowRoot.querySelector("ul"),menuGroupElements=(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_2__.A)(groupSlotWrapper);_this.addMenuItems(menuGroupElements)}}},this.getMenuAriaLabel=function(){var ariaLabel=_this.el.getAttribute(_this.ARIA_LABEL);return(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_2__.d)(_this.submenuId)?"".concat(ariaLabel,", within nested level ").concat(_this.submenuLevel," ").concat(_this.parentLabel," submenu,"):ariaLabel},this.handleBackButtonClick=function(){_this.parentPopover.openFromChild(),_this.open=!1},this.initPopperJS=function(){_this.popperInstance=(0,_popper_0fbeff6d_js__WEBPACK_IMPORTED_MODULE_3__.c)(_this.anchorEl,_this.el,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"flip",options:{fallbackPlacements:["top-start","top-end","bottom-end"],rootBoundary:"viewport"}}]})},this.openingFromChild=!1,this.openingFromParent=!1,this.anchor=void 0,this.parentLabel=void 0,this.parentPopover=void 0,this.submenuId=void 0,this.submenuLevel=1,this.open=void 0}var _openFromParent,_openFromChild;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(PopoverMenu,[{key:"watchOpenHandler",value:function watchOpenHandler(){this.open?(void 0===this.parentPopover||this.popoverMenuEls.some((function(menuItem){return menuItem.id}))||this.popoverMenuEls.unshift(this.backButton),this.currentFocus=(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.submenuId)?1:0,setTimeout(this.setButtonFocus,50)):this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}},{key:"componentDidLoad",value:function componentDidLoad(){var slotWrapper=this.el.shadowRoot.querySelector("ul.button"),popoverMenuElements=(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_2__.A)(slotWrapper);null!==popoverMenuElements&&this.addMenuItems(popoverMenuElements),void 0===this.submenuId&&null===this.el.getAttribute(this.ARIA_LABEL)&&console.error("No aria-label specified for popover menu component - aria-label required")}},{key:"componentWillRender",value:function componentWillRender(){this.anchorEl=this.findAnchorEl(this.anchor)}},{key:"componentDidRender",value:function componentDidRender(){this.open&&!this.popperInstance&&this.initPopperJS()}},{key:"handleMenuItemClick",value:function handleMenuItemClick(ev){ev.detail.hasSubMenu||"Back"===ev.detail.label||this.closeMenu()}},{key:"handleSubmenuChange",value:function handleSubmenuChange(ev){var target=ev.target;this.open=!1;var childEl=document.querySelector("ic-popover-menu[submenu-id=".concat(target.submenuTriggerFor,"]"));childEl.parentPopover=this.el,childEl.anchor=this.anchor,childEl.ariaLabel=this.el.getAttribute(this.ARIA_LABEL),childEl.openFromParent(),childEl.submenuLevel=this.submenuLevel+1,childEl.parentLabel=target.label}},{key:"handleClick",value:function handleClick(ev){this.open&&this.isNotPopoverMenuEl(ev)&&this.closeMenu()}},{key:"handleKeyDown",value:function handleKeyDown(ev){switch(ev.key){case"ArrowDown":case"ArrowUp":ev.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,"ArrowDown"===ev.key),this.setButtonFocus();break;case"Home":this.currentFocus=0,this.setButtonFocus();break;case"End":this.currentFocus=this.popoverMenuEls.length-1,this.setButtonFocus();break;case"Escape":case"Tab":this.open&&(this.closeMenu(!0),this.el.blur())}}},{key:"openFromChild",value:(_openFromChild=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){var _this2=this;return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.open=!0,this.openingFromChild=!0,setTimeout((function(){return _this2.openingFromChild=!1}),1e3);case 3:case"end":return _context.stop()}}),_callee,this)}))),function openFromChild(){return _openFromChild.apply(this,arguments)})},{key:"openFromParent",value:(_openFromParent=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee2(){var _this3=this;return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.open=!0,this.openingFromParent=!0,setTimeout((function(){return _this3.openingFromParent=!1}),1e3);case 3:case"end":return _context2.stop()}}),_callee2,this)}))),function openFromParent(){return _openFromParent.apply(this,arguments)})},{key:"render",value:function render(){var _this4=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:{open:this.open}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{id:void 0===this.parentPopover?"ic-popover-submenu-".concat(this.submenuId):"",class:{menu:!0},tabindex:open?"0":"-1"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{"opening-from-parent":this.openingFromParent,"opening-from-child":this.openingFromChild}},(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.submenuId)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-menu-item",{class:"ic-popover-submenu-back-button",ref:function ref(el){return _this4.backButton=el},label:"Back",onClick:this.handleBackButtonClick,id:"ic-popover-submenu-back-button-".concat(this.submenuLevel)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{slot:"icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"submenu-back-icon"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"currentColor"}))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"subtitle-small",class:"parent-label"},this.parentLabel)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ul",{class:"button","aria-label":this.getMenuAriaLabel(),role:"menu","aria-owns":!!(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.submenuId)&&"ic-popover-submenu-back-button-".concat(this.submenuLevel),"aria-controls":!!(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.submenuId)&&"ic-popover-submenu-back-button-".concat(this.submenuLevel)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null)))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{open:["watchOpenHandler"]}}}]),PopoverMenu}();PopoverMenu.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){:host .opening-from-parent{animation:slide-in var(--ic-transition-duration-slow) ease-in-out}:host .opening-from-child{animation:slide-out var(--ic-transition-duration-slow) ease-in-out}}:host{border-radius:var(--ic-border-radius);color:var(--ic-color-primary-text);background-color:var(--ic-architectural-white);position:relative;z-index:var(--ic-z-index-popover);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);display:none}:host(.on-dialog){inset:auto !important}:host(.on-dialog-fix-translate){transform:translate(0, var(--ic-space-xs)) !important}:host(.on-dialog-translate-y){transform:translate(0, calc(-1 * var(--translate-y))) !important}.menu{border:var(--ic-border-default);border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);visibility:hidden;height:0}.button{text-decoration:none;list-style-type:none}:host(:focus-within){box-shadow:var(--ic-border-focus)}.menu:focus-visible{outline:none}:host(.open){display:block;min-width:calc(20rem - var(--ic-space-xl));width:var(--popover-width, 20rem);max-width:calc(100vw - var(--ic-space-xl))}:host(.open) .menu{visibility:visible;height:-moz-fit-content;height:fit-content;max-height:var(--max-height, -moz-fit-content);max-height:var(--max-height, fit-content);overflow-y:auto;overflow-x:hidden}.parent-label{color:var(--ic-color-tertiary-text);margin:var(--ic-space-xs) var(--ic-space-xs) 0}@keyframes slide-in{from{opacity:0;transform:translateX(10rem)}to{opacity:1;transform:translateX(0)}}@keyframes slide-out{from{opacity:0;transform:translateX(-10rem)}to{opacity:1;transform:translateX(0)}}'}}]);
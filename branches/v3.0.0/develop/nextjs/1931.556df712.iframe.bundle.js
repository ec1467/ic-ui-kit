"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[1931],{"../web-components/dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});var Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-card.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_card:()=>Card});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-6192f61a.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/chevron-icon-589e3b46.js"),Card=function(){function Card(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,Card),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.hostMutationObserver=null,this.parentFocussed=function(){_this.isFocussed=!0},this.parentBlurred=function(){_this.isFocussed=!1},this.toggleExpanded=function(){_this.areaExpanded=!_this.areaExpanded},this.hostMutationCallback=function(mutationList){mutationList.some((function(_ref){var type=_ref.type,addedNodes=_ref.addedNodes,removedNodes=_ref.removedNodes;return"childList"===type&&(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.c)(addedNodes,removedNodes,["message","adornment","expanded-content","image-top","image-mid","icon","interaction-button","badge","interaction-controls"])}))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.f)(_this)},this.appearance="default",this.areaExpanded=!1,this.isFocussed=!1,this.parentEl=null,this.parentIsAnchorTag=!1,this.clickable=!1,this.disabled=!1,this.expandable=!1,this.fullWidth=!1,this.heading=void 0,this.href=void 0,this.hreflang="",this.message="",this.referrerpolicy=void 0,this.rel=void 0,this.subheading=void 0,this.target=void 0}var _setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__.A)(Card,[{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;this.parentIsAnchorTag&&(this.parentEl.removeEventListener("focus",this.parentFocussed),this.parentEl.removeEventListener("blur",this.parentBlurred)),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.parentEl=this.el.parentElement,"A"===this.parentEl.tagName&&(this.clickable=!0,this.parentIsAnchorTag=!0,this.parentEl.classList.add("ic-card-wrapper-link"),this.parentEl.addEventListener("focus",this.parentFocussed),this.parentEl.addEventListener("blur",this.parentBlurred)),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.k)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){!(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"heading")&&(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.heading,propName:"heading"}],"Card"),this.updateTheme(),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}},{key:"handleHostClick",value:function handleHostClick(event){this.disabled&&event.stopImmediatePropagation()}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.updateTheme(theme.mode)}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.el.shadowRoot.querySelector("a")?this.el.shadowRoot.querySelector("a").focus():this.el.shadowRoot.querySelector("button")&&this.el.shadowRoot.querySelector("button").focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"updateTheme",value:function updateTheme(){var newTheme=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,foregroundColor=(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.l)(this.el,newTheme||null);foregroundColor!==_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_3__.I.Default&&(this.appearance=foregroundColor)}},{key:"render",value:function render(){var clickable=this.clickable,disabled=this.disabled,expandable=this.expandable,heading=this.heading,message=this.message,href=this.href,hreflang=this.hreflang,referrerpolicy=this.referrerpolicy,rel=this.rel,subheading=this.subheading,target=this.target,fullWidth=this.fullWidth,parentIsAnchorTag=this.parentIsAnchorTag,isFocussed=this.isFocussed,Component=parentIsAnchorTag?"div":clickable?void 0===this.href?"button":"a":"div",attrs="a"==Component&&{href,hrefLang:hreflang,referrerPolicy:referrerpolicy,rel,target};return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(Component,Object.assign({class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"card",!0),"clickable",clickable&&!disabled),"disabled",disabled),"fullwidth",fullWidth),"focussed",isFocussed),"dark",this.appearance===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_3__.I.Dark),tabindex:clickable&&!parentIsAnchorTag?0:null,"aria-disabled":disabled?"true":null,disabled:!!disabled||null},attrs),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"image-top")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"image-top"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"image-top"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"card-header"},(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"icon")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"icon"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"icon"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"card-title"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"h4"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("p",null,heading)))),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"interaction-button")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"interaction-button"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"interaction-button"}))),(subheading||(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"subheading"))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"subheading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"subheading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"subtitle-small"},subheading))),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"adornment")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"adornment"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"adornment"})),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"image-mid")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"image-mid"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"image-mid"})),(message||(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"message"))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"card-message",!0)},message&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"body"},message),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"message")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"message"})),((0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"interaction-controls")||expandable)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"interaction-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"interaction-controls"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"interaction-controls"})),expandable&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-tooltip",{id:"ic-tooltip-expand-button",label:"Toggle expandable area",silent:!0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("button",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"toggle-button",!0),"toggle-button-".concat(this.areaExpanded?"expanded":"closed"),!0),"aria-label":"Toggle expandable area","aria-expanded":"".concat(this.areaExpanded),"aria-controls":this.areaExpanded?"expanded-content-area":null,onClick:this.toggleExpanded,innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_8__.C}))),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"expanded-content")&&this.areaExpanded&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"expanded-content",id:"expanded-content-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"expanded-content"})),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"badge")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"badge"}))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}]),Card}();Card.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex}a{text-decoration:none !important;color:var(--ic-architechtural-black) !important}button{border:none;background-color:transparent;outline:var(--ic-hc-focus-outline)}.card,.card.clickable{display:flex;flex-direction:column;border:var(--ic-border-default);border-radius:var(--ic-border-radius);box-sizing:border-box;padding:var(--ic-space-md);text-align:left;color:var(--ic-architechtural-black);transition:var(--ic-easing-transition-fast);position:relative;width:inherit;min-width:-moz-fit-content;min-width:fit-content;height:-moz-fit-content;height:fit-content;min-height:100%}.dark.card,.dark.card.clickable{border:var(--ic-border-width) solid var(--ic-architectural-700)}.card.clickable:hover{background-color:var(--ic-action-default-bg-hover);border:var(--ic-border-hover);cursor:pointer}.card.clickable:focus,.card.clickable.focussed{background-color:var(--ic-action-default-bg-hover);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);border:var(--ic-border-pressed)}.card.clickable:active{background-color:var(--ic-action-default-bg-active);box-shadow:var(--ic-border-focus)}.card.disabled{border:var(--ic-border-disabled)}.card.fullwidth{width:100%}.card-header{display:flex;align-items:center}.icon{display:flex;align-items:center;padding-right:var(--ic-space-xs)}.card.disabled ::slotted(svg){fill:var(--ic-color-tertiary-text)}.card.clickable .card-title{color:var(--ic-hyperlink);text-decoration:underline;text-decoration-thickness:var(--ic-space-1px)}.card.clickable:hover .card-title,.card.clickable:focus .card-title,.card.clickable.focussed .card-title{display:inline-block;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}@supports (text-underline-offset: 25%){.card.clickable:hover .card-title,.card.clickable:focus .card-title,.card.clickable.focussed .card-title{text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}.card.clickable:active .card-title{text-decoration:none}.card.disabled .card-title{text-decoration:underline;text-decoration-thickness:var(--ic-space-1px);text-decoration-color:var(--ic-color-tertiary-text);color:var(--ic-color-tertiary-text)}.subheading{margin-top:var(--ic-space-xxs)}.adornment{margin-top:var(--ic-space-xxs)}.card-message{margin-top:var(--ic-space-md);align-items:left}.card.disabled .card-message,.card.disabled .subheading{color:var(--ic-color-tertiary-text)}.interaction-button{margin-left:auto}.image-top{margin-bottom:var(--ic-space-md);display:flex;justify-content:center}.image-mid{margin-top:var(--ic-space-md);display:flex;justify-content:center}.interaction-area{display:flex;flex-grow:1;gap:var(--ic-space-md);margin-top:var(--ic-space-md);align-items:flex-end}.interaction-controls{display:flex;align-items:center;flex-wrap:wrap;gap:var(--ic-space-sm)}.toggle-button{color:var(--ic-action-default);width:2.5rem;height:2.5rem;padding:var(--ic-space-xs);margin:var(--ic-space-1px) 0;min-width:0;cursor:pointer;transition:var(--ic-easing-transition-fast);border-radius:var(--ic-border-radius);display:inline-flex;flex-direction:row;justify-content:center;align-items:center;background:none;border:none;box-sizing:border-box;white-space:nowrap;vertical-align:middle}#ic-tooltip-expand-button{margin-left:auto;position:relative}.toggle-button:hover,.toggle-button:hover:focus{background-color:var(--ic-action-default-bg-hover);color:var(--ic-action-default-hover)}.toggle-button:focus{box-shadow:var(--ic-border-focus)}.toggle-button:active:not(:focus){background-color:var(--ic-action-default-bg-active);color:var(--ic-action-default-active)}.toggle-button svg{pointer-events:none;width:100% !important;height:100% !important;fill:currentcolor !important}.toggle-button-closed svg{transform:rotate(90deg)}.toggle-button-expanded svg{transform:rotate(-90deg)}.expanded-content{margin-top:var(--ic-space-md)}@media (forced-colors: active){.card ::slotted(svg){fill:currentcolor}.card.disabled ::slotted(svg){fill:GrayText !important}.card.disabled{border-color:GrayText !important}.card.disabled .card-message,.card.disabled .subheading,.card.disabled .card-title{color:GrayText}}'}}]);
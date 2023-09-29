"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[485],{"../web-components/dist/esm/ic-data-row.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_data_row:()=>DataRow});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../web-components/dist/esm/index-b006ae9d.js"),_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../web-components/dist/esm/helpers-b0e80358.js");__webpack_require__("../web-components/dist/esm/types-b2398b37.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var DataRow=function(){function DataRow(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DataRow),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.r)(this,hostRef),this.hasEndComponent=!1,this.resizeObserver=null,this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.checkLabelAbove()})),_this.resizeObserver.observe(_this.el)},this.renderLabel=function(label){return(0,_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_11__.i)(_this.el,"label")?(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"label"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot",{name:"label"})):label?(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"label"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("ic-typography",{variant:"xs"===_this.entitySize?"label":"subtitle-large"},label)):null},this.deviceSize=_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_11__.D.XL,this.entitySize=void 0,this.label=void 0,this.small=!1,this.value=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DataRow,[{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.deviceSize=(0,_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_11__.g)(),this.hasEndComponent=(0,_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_11__.s)(this.el,"end-component"),this.checkLabelAbove()}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_11__.c)(this.runResizeObserver),this.hasEndComponent&&this.labelEndComponent()}},{key:"checkLabelAbove",value:function checkLabelAbove(){var _a,rowSize=null===(_a=this.el.shadowRoot.querySelector(".data"))||void 0===_a?void 0:_a.clientWidth;rowSize&&(rowSize+46<_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_11__.D.S?this.entitySize="xs":rowSize+46<_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_11__.D.M?this.entitySize="m":this.entitySize="xl")}},{key:"labelEndComponent",value:function labelEndComponent(){var _this2=this;this.el.shadowRoot.querySelectorAll("slot[name=end-component]").forEach((function(child){return child.setAttribute("aria-label","for "+_this2.label+" row")}))}},{key:"render",value:function render(){var _class,label=this.label,value=this.value,small=this.small;return(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)(_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.H,{class:(_class={},_class.small=small,_class["breakpoint-medium"]="m"===this.entitySize,_class["breakpoint-xs"]="xs"===this.entitySize,_class),role:"listitem"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"data"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"text-cells"},this.renderLabel(label),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"value"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot",{name:"value"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("ic-typography",{variant:"body"},value)))),this.hasEndComponent&&(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"end-component"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{role:"cell"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot",{name:"end-component"})))),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"divider"}))}},{key:"el",get:function get(){return(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_10__.g)(this)}}]),DataRow}();DataRow.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:relative;display:block}.data{display:flex;align-items:center}.text-cells{display:flex;flex-grow:1;min-width:0}.label{width:12.5rem;min-width:12.5rem;margin-right:var(--ic-space-md);color:var(--ic-color-tertiary-text)}.value{flex-grow:1}slot[name="value"]::slotted(ic-text-field[readonly][hide-label]){margin-top:calc(var(--ic-space-xs) * -1)}slot[name="value"]::slotted(ic-text-field[small][readonly][hide-label]){margin-top:calc(var(--ic-space-xxs) * -1)}slot[name="value"]::slotted(ic-text-field[readonly][hide-label][rows]){margin-top:calc(var(--ic-space-xxs) * -1 - var(--ic-space-xxxs))}.end-component{width:-moz-fit-content;width:fit-content;margin-left:3.5rem}.divider{margin-top:var(--ic-space-md);height:var(--ic-space-1px);background-color:var(--ic-architectural-300)}:host(.small) .divider{margin-top:var(--ic-space-xs)}:host(.breakpoint-medium) .label{width:10rem;min-width:10rem}:host(.breakpoint-xs) .text-cells{flex-direction:column}:host(.breakpoint-xs) .label{width:8rem;margin-bottom:var(--ic-space-xs)}:host(.breakpoint-xs) .value{max-width:95%}:host(.breakpoint-xs) .end-component{margin-left:0}@media (forced-colors: active){.divider{background-color:canvastext}}'}}]);
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4446],{"../web-components/dist/esm/ic-data-entity.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_data_entity:()=>DataEntity});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/index-fd30b77e.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var DataEntity=function(){function DataEntity(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DataEntity),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.heading=void 0,this.small=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DataEntity,[{key:"render",value:function render(){var _class,heading=this.heading,small=this.small,children=this.el.children;if(small)for(var i=0;i<children.length;i++)children[i].setAttribute("small","true");return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class={},_class.small=small,_class)},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"heading",id:"data-entity-heading"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"heading"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"h3"},heading))),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"divider"}),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("ul",{"aria-labelledby":"data-entity-heading",class:"rows"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),DataEntity}();DataEntity.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}.rows{display:flex;flex-direction:column;gap:var(--ic-space-md)}:host(.small) .rows{gap:var(--ic-space-xs)}.divider{margin-top:var(--ic-space-lg);margin-bottom:var(--ic-space-md);height:var(--ic-space-1px);background-color:var(--ic-architectural-300)}:host(.small) .divider{margin-top:var(--ic-space-sm);margin-bottom:var(--ic-space-xs)}@media (forced-colors: active){.divider{background-color:canvastext}}'}}]);
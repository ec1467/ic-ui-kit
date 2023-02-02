"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1416],{"./dist/esm/ic-radio-option.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_option:()=>RadioOption});__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/helpers-46e5291b.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var RadioOption=function(){function RadioOption(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RadioOption),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.radioOptionSelect=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"radioOptionSelect",7),this.icCheck=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"icCheck",7),this.defaultRadioValue="",this.skipFocus=!1,this.handleClick=function(){if(!_this.disabled){if(!1===_this.skipFocus&&_this.radioElement.focus(),_this.skipFocus=!1,_this.hasAdditionalField){var textfield=_this.host.querySelector("ic-text-field");_this.value=""!==textfield.value?textfield.value:_this.defaultRadioValue}_this.icCheck.emit({value:_this.value}),_this.radioOptionSelect.emit({value:_this.value})}},this.swallowClick=function(event){event.stopPropagation()},this.hasAdditionalField=!1,this.handleFormReset=function(){_this.skipFocus=!0,_this.selected=_this.initiallySelected},this.selected=!1,this.disabled=!1,this.label=void 0,this.value=void 0,this.name=void 0,this.groupLabel=void 0,this.dynamicText="This selection requires additional answers",this.additionalFieldDisplay="static",this.initiallySelected=this.selected}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(RadioOption,[{key:"selectedChangeHandler",value:function selectedChangeHandler(selected){selected&&this.handleClick()}},{key:"componentWillLoad",value:function componentWillLoad(){var additonalFieldContent=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.host,"additional-field");if(null!==additonalFieldContent){this.hasAdditionalField=!0;var Element=additonalFieldContent[0];if("IC-TEXT-FIELD"===Element.tagName)Element.hiddenInput=!1}this.defaultRadioValue=this.value,(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_9__.d)(this.host,this.handleFormReset)}},{key:"textfieldValueHandler",value:function textfieldValueHandler(event){var textFieldValue=event.detail.value;this.selected&&(""!==textFieldValue?(this.value=event.detail.value,this.icCheck.emit({value:this.value}),this.radioOptionSelect.emit({value:this.value})):(this.value=this.defaultRadioValue,this.icCheck.emit({value:this.defaultRadioValue}),this.radioOptionSelect.emit({value:this.defaultRadioValue})))}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_9__.a)([{prop:this.value,propName:"value"}],"Radio Option")}},{key:"componentDidRender",value:function componentDidRender(){if("static"===this.additionalFieldDisplay){var textfield=this.host.querySelector("ic-text-field");this.selected?textfield&&textfield.removeAttribute("disabled"):textfield&&textfield.setAttribute("disabled","")}}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.host,this.handleFormReset)}},{key:"render",value:function render(){var _class,_this2=this,id="ic-radio-option-"+(void 0!==this.label?this.label:this.value)+"-"+this.groupLabel;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.H,{onClick:this.handleClick},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(_class={},_class.container=!0,_class.disabled=this.disabled,_class)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("input",{role:"radio",tabindex:this.selected?"0":"-1",type:"radio",name:this.name,id,value:this.value,disabled:!!this.disabled||null,checked:this.selected,ref:function ref(el){return _this2.radioElement=el}}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"checkmark"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{class:"radio-label",variant:"body"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("label",{htmlFor:id},this.label))),this.hasAdditionalField&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{onClick:this.swallowClick,class:{"dynamic-container":!0,hidden:"dynamic"===this.additionalFieldDisplay&&!this.selected}},"dynamic"===this.additionalFieldDisplay&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"branch-corner"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",null,"dynamic"===this.additionalFieldDisplay&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"caption"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("p",{class:"dynamic-text"},this.dynamicText)),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:{"addition-field-wrapper":"static"===this.additionalFieldDisplay}},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"additional-field"})))))}},{key:"host",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}],[{key:"watchers",get:function get(){return{selected:["selectedChangeHandler"]}}}]),RadioOption}();RadioOption.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex;flex-direction:column;margin-bottom:var(--ic-space-sm);width:-moz-fit-content;width:fit-content}:host([small]){margin-bottom:0.625rem}:host([additional-field-display="static"]) ::slotted(ic-textfield){margin-top:var(--ic-space-xs);margin-left:var(--ic-space-xl)}:host([disabled]){color:var(--ic-architectural-200)}.container input:focus+span.checkmark,:host(:focus) .container input:checked+span.checkmark{box-shadow:var(--ic-border-focus)}.container{display:inline-flex;position:relative;cursor:pointer;align-items:center;margin-left:var(--ic-space-xxs)}.container.disabled,.container.disabled input:disabled{cursor:default}.container input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.checkmark{display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:transparent;border:0.063rem solid #a7acb3;border-radius:50%;transition:var(--ic-easing-transition-fast);box-sizing:border-box}.container input:checked~.checkmark::after{display:inline-block}.container:hover input~.checkmark{background-color:var(--ic-action-default-bg-hover);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:0.063rem solid var(--ic-action-default)}.container:active input~.checkmark{background-color:var(--ic-action-default-bg-active);border:0.063rem solid var(--ic-action-default-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark{background-color:var(--ic-action-default-bg-active);border:0.125rem solid var(--ic-action-default-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark::after{background-color:var(--ic-action-default-active)}.container input:checked~.checkmark{border:0.125rem solid var(--ic-action-default)}.container input:checked:disabled~.checkmark{background-color:transparent;border:0.125rem solid var(--ic-architectural-200)}.container input:disabled~.checkmark{border:0.063rem dashed var(--ic-architectural-200)}.container input:disabled~.checkmark::after{background:var(--ic-architectural-200)}.container:hover input:disabled~.checkmark{background-color:transparent;box-shadow:none;border:0.125rem solid none}.container:active input:disabled~.checkmark::after{background-color:var(--ic-architectural-200)}.container .checkmark::after{content:"";position:absolute;display:none;top:calc(50% - var(--ic-space-xs));left:calc(50% - var(--ic-space-xs));width:var(--ic-space-md);height:var(--ic-space-md);border-radius:50%;background:var(--ic-action-default)}.radio-label{font-size:1rem;font-weight:400;margin-left:var(--ic-space-sm)}.addition-field-wrapper{margin-left:2.75rem}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default);margin-left:-0.063rem}.dynamic-container{display:flex;position:relative;margin-left:var(--ic-space-md);margin-top:0.375rem;gap:var(--ic-space-xs)}.dynamic-container.hidden{display:none}.dynamic-text{color:var(--ic-action-default);margin-top:0.313rem;margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.container input:checked~.checkmark,.container:active input:checked~.checkmark{border-color:Highlight}.container input:checked~.checkmark::after,.container:active input:checked~.checkmark::after{background-color:Highlight}.container input:disabled~.checkmark,.container input:checked:disabled~.checkmark{border-color:GrayText}.container input:disabled~.checkmark::after,.container:active input:disabled~.checkmark::after{background-color:GrayText}}'}}]);
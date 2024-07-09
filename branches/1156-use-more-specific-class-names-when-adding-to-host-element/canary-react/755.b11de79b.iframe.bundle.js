"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[755],{"../web-components/dist/esm/ic-input-label_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_input_label:()=>InputLabel,ic_input_validation:()=>InputValidation});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-988ce06b.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");const InputLabel=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.appearance="default",this.dark=!1,this.disabled=!1,this.error=!1,this.for=void 0,this.helperText="",this.label=void 0,this.readonly=!1,this.required=!1}componentDidLoad(){(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Input Label")}render(){const{disabled,readonly,label,required,helperText,error,dark,appearance}=this,labelText=required?label+" *":label,labelContent=readonly?`${labelText}`:(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.for},labelText),id=(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.Q)(this.for);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-input-label-disabled":disabled,"ic-input-label-readonly":readonly,"with-helper":""!==helperText}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",class:{"readonly-label":readonly,"error-label":error&&!(readonly||disabled),dark:dark||"dark"===appearance}},labelContent),""!==helperText&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:{helpertext:!0,"helpertext-normal":!disabled&&!readonly,"helpertext-readonly":readonly}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id},helperText)))}};InputLabel.style="ic-input-label{margin-bottom:var(--ic-space-xs)}ic-input-label.with-helper{margin-bottom:var(--ic-space-xxxs)}ic-input-label.ic-input-label-readonly,ic-input-label.ic-input-label-disabled{color:var(--ic-color-tertiary-text)}ic-input-label .helpertext{margin-top:var(--ic-space-xxxs)}ic-input-label .helpertext-normal{color:var(--ic-color-secondary-text)}ic-input-label .helpertext-readonly{color:var(--ic-color-tertiary-text)}ic-input-label .readonly-label{color:var(--ic-color-secondary-text)}ic-input-label .error-label{color:var(--ic-status-error)}ic-input-label .dark{color:var(--ic-architectural-white)}";const icon={[_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Warning]:_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.S,[_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Error]:_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.T,[_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Success]:_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.O},InputValidation=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLiveMode="polite",this.for=void 0,this.fullWidth=!1,this.message=void 0,this.status=""}componentDidLoad(){(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.message,propName:"message"}],"Input Validation")}render(){const displayIcon=""!==this.status?icon[this.status]:"",id=(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.R)(this.for);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-input-validation-${this.status}`]:""!==this.status,"ic-input-validation-full-width":this.fullWidth}},""!==displayIcon&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"status-icon":!0,[`icon-${this.status}`]:!0},innerHTML:displayIcon}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:"statustext"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-live":this.ariaLiveMode,id},this.message)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"validation-message-adornment"}))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};InputValidation.style="ic-input-validation{width:var(--input-width, 20rem);margin-top:var(--ic-space-xs);display:flex}ic-input-validation.ic-input-validation-full-width{width:100%}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-status-success)}ic-input-validation span.icon-error>svg{fill:var(--ic-status-error)}ic-input-validation span.icon-warning>svg{fill:var(--ic-status-warning)}ic-input-validation .statustext{flex-grow:1}"}}]);
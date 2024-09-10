"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[7400],{"../canary-web-components/dist/esm/helpers-82456386.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>isPropDefined,B:()=>isNumeric,C:()=>capitalize,D:()=>checkResizeObserver,E:()=>isMacDevice,I:()=>IcThemeForegroundEnum,a:()=>isEmptyString,b:()=>addDataToPosition,c:()=>checkSlotInChildMutations,d:()=>debounce,e:()=>IcDayNames,f:()=>IcDateInputMonths,g:()=>getThemeFromContext,h:()=>IcWeekDays,i:()=>isSlotUsed,j:()=>IcShortDayNames,k:()=>getLabelFromValue,l:()=>getFilteredMenuOptions,m:()=>getOptionsWithoutGroupTitlesCount,n:()=>removeFormResetListener,o:()=>onComponentRequiredPropUndefined,p:()=>pxToRem,q:()=>inheritAttributes,r:()=>removeDisabledFalse,s:()=>stringEnumToArray,t:()=>addFormResetListener,u:()=>renderHiddenInput,v:()=>getInputDescribedByText,w:()=>isMobileOrTablet,x:()=>hasValidationStatus,y:()=>IC_INHERITED_ARIA,z:()=>IcInformationStatus});const IC_INHERITED_ARIA=["aria-atomic","aria-autocomplete","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]};var IcInformationStatus,IcThemeForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},inheritAttributes=(element,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(element.hasAttribute(attr)){null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr)}})),attributeObject},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},getThemeFromContext=(el,themeFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcThemeForegroundEnum.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)?IcThemeForegroundEnum.Dark:IcThemeForegroundEnum.Light:themeFromEvent}return IcThemeForegroundEnum.Default},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar);Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},isMobileOrTablet=()=>"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,getLabelFromValue=(value,options,valueField="value",labelField="label")=>{const ungroupedOptions=[];if(options.length>0&&options.map){options.map((option=>{option.children?option.children.map((option=>ungroupedOptions.push(option))):ungroupedOptions.push(option)}));const matchingValue=ungroupedOptions.find((option=>option[valueField]===value));if(void 0!==matchingValue)return matchingValue[labelField]}},getFilteredMenuOptions=(options,includeDescriptions,searchString,position,labelField="label")=>options.filter((option=>{var _a;const label=option[labelField].toLowerCase(),description=null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase(),lowerSearchString=searchString.toLowerCase();return"anywhere"===position?includeDescriptions?label.includes(lowerSearchString)||(null==description?void 0:description.includes(lowerSearchString)):label.includes(lowerSearchString):includeDescriptions?label.startsWith(lowerSearchString)||(null==description?void 0:description.startsWith(lowerSearchString)):label.startsWith(lowerSearchString)})),getOptionsWithoutGroupTitlesCount=options=>{const optionsWithoutGroupTitles=[];return options.length>0&&options.map&&options.map((option=>{option.children?option.children.map((option=>optionsWithoutGroupTitles.push(option))):optionsWithoutGroupTitles.push(option)})),optionsWithoutGroupTitles.length},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",isNumeric=value=>/^-?\d+$/.test(value),hasValidationStatus=(status,disabled)=>""!==status&&!disabled,onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},isMacDevice=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0,capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),checkSlotInChildMutations=(addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)},addDataToPosition=(dataObject,newKey,newValue,position)=>{const newData={};return Object.keys(dataObject).forEach(((dataKey,index)=>{Object.prototype.hasOwnProperty.call(dataObject,dataKey)&&(index===position&&(newData[newKey]=newValue),newData[dataKey]=dataObject[dataKey])})),newData}},"../canary-web-components/dist/esm/ic-tree-view.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tree_view:()=>TreeView});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_82456386_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-82456386.js");let treeViewIds=0;const TreeView=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.treeViewId="ic-tree-view-"+treeViewIds++,this.treeItemTag="IC-TREE-ITEM",this.hostMutationObserver=null,this.handleKeyDown=event=>{var _a;const focussedChild=this.treeItems.indexOf(this.treeItems.filter((el=>el===document.activeElement))[0]),expanded=null===(_a=this.treeItems[focussedChild])||void 0===_a?void 0:_a.expanded;switch(event.key){case"ArrowDown":this.treeItems[this.getNextItemToSelect(focussedChild,!0)].setFocus(),focussedChild!==this.treeItems.length-1&&event.preventDefault();break;case"ArrowUp":this.treeItems[this.getNextItemToSelect(focussedChild,!1)].setFocus(),0!==focussedChild&&event.preventDefault();break;case"ArrowRight":this.treeItems[focussedChild].isParent&&!expanded?(this.treeItems[focussedChild].expanded=!0,this.treeItems[focussedChild].hasParentExpanded=!0,this.treeItems[focussedChild].updateAriaLabel()):this.treeItems[focussedChild].isParent&&expanded&&this.treeItems[focussedChild].children[0].setFocus(),event.preventDefault();break;case"ArrowLeft":this.treeItems[focussedChild].isParent&&expanded?(this.treeItems[focussedChild].expanded=!1,this.treeItems[focussedChild].hasParentExpanded=!1,this.treeItems[focussedChild].updateAriaLabel()):this.treeItems[focussedChild].parentElement.tagName===this.treeItemTag&&this.treeItems[focussedChild].parentElement.setFocus(),event.preventDefault()}},this.getNextItemToSelect=(currentItem,movingDown)=>{const numItems=this.treeItems.length-1;currentItem<1&&(currentItem=0);let nextItem=movingDown?currentItem+1:currentItem-1;nextItem<0?nextItem=0:nextItem>numItems&&(nextItem=numItems);const maxAttempts=numItems+1;let attempts=0;for(;attempts<maxAttempts;){if(nextItem<0||nextItem>numItems)return currentItem;if(!this.treeItems[nextItem].disabled&&(this.treeItems[nextItem].parentElement.tagName!==this.treeItemTag||this.treeItems[nextItem].parentElement.expanded))return nextItem;if(nextItem===numItems&&this.treeItems[nextItem].disabled)return currentItem;nextItem=movingDown?nextItem+1:nextItem-1,attempts++}return currentItem},this.linkTreeItems=()=>{this.treeItems.forEach((treeItem=>{treeItem.setAttribute("context-id",this.treeViewId)}))},this.setTreeItems=()=>{this.treeItems=this.getAllTreeItems(this.el),this.linkTreeItems()},this.addSlotChangeListener=()=>{this.el.addEventListener("slotchange",this.setTreeItems)},this.truncateTreeViewHeading=()=>{const typographyEl=this.el.shadowRoot.querySelector(".tree-view-header"),tooltip=typographyEl.closest("ic-tooltip"),headingContainer=this.el.shadowRoot.querySelector(".heading-area-container");if((null==typographyEl?void 0:typographyEl.scrollHeight)>(null==headingContainer?void 0:headingContainer.clientHeight)&&(typographyEl.classList.add("ic-text-overflow"),!tooltip)){const tooltipEl=document.createElement("ic-tooltip");tooltipEl.setAttribute("target",this.el.id),tooltipEl.setAttribute("label",typographyEl.textContent),tooltipEl.classList.add("ic-tooltip-overflow"),tooltipEl.setAttribute("placement","right"),headingContainer.appendChild(tooltipEl),tooltipEl.appendChild(typographyEl)}},this.hostMutationCallback=mutationList=>{mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&(0,_helpers_82456386_js__WEBPACK_IMPORTED_MODULE_1__.c)(addedNodes,removedNodes,"icon")))&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.isHeadingDefined=()=>(0,_helpers_82456386_js__WEBPACK_IMPORTED_MODULE_1__.A)(this.heading)&&null!==this.heading,this.hasHeadingAreaContent=()=>(0,_helpers_82456386_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")||this.isHeadingDefined()||(0,_helpers_82456386_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon"),this.treeItems=void 0,this.appearance="dark",this.heading="",this.size="default"}watchAppearanceHandler(){this.treeItems.forEach((treeItem=>{treeItem.appearance=this.appearance}))}watchSizeHandler(){this.treeItems.forEach((treeItem=>{treeItem.size=this.size}))}disconnectedCallback(){var _a,_b;null===(_a=this.el)||void 0===_a||_a.removeEventListener("slotchange",this.setTreeItems),null===(_b=this.hostMutationObserver)||void 0===_b||_b.disconnect()}componentDidLoad(){this.setTreeItems(),this.watchAppearanceHandler(),this.watchSizeHandler(),setTimeout((()=>{this.truncateTreeViewHeading()}),100),this.addSlotChangeListener(),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}handleTreeItemSelected(event){this.treeItems.forEach((treeItem=>{treeItem.selected&&treeItem.id!==event.detail.id&&(treeItem.selected=!1)}))}getAllTreeItems(element){const treeItems=[],collectTreeItems=el=>{Array.from(el.children).forEach((child=>{child.tagName===this.treeItemTag&&treeItems.push(child),collectTreeItems(child)}))};return collectTreeItems(element),treeItems}render(){const{appearance,heading,size}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{"context-id":this.treeViewId,class:{[`ic-tree-view-${appearance}`]:!0,[`ic-tree-view-${size}`]:"default"!==size},onKeyDown:this.handleKeyDown,"aria-label":this.isHeadingDefined()?heading:null},this.hasHeadingAreaContent()&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading-area-container"},(0,_helpers_82456386_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-large",class:"tree-view-header"},(0,_helpers_82456386_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"}):heading)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{appearance:["watchAppearanceHandler"],size:["watchSizeHandler"]}}};TreeView.style=':host{display:block;width:var(--tree-view-width, 100%)}:host .heading-area-container{border-bottom:var(--ic-border-default);display:flex;align-items:center;height:calc(var(--ic-space-xl) + var(--ic-space-xs) - var(--ic-space-1px));padding:0 var(--ic-space-xs)}:host(.ic-tree-view-small) .heading-area-container{height:calc(var(--ic-space-xl) - var(--ic-space-1px))}:host(.ic-tree-view-large) .heading-area-container{height:calc(var(--ic-space-xxl) - var(--ic-space-1px))}:host(.ic-tree-view-light) .heading-area-container{color:var(--ic-architectural-white);fill:var(--ic-architectural-white)}.icon-container{width:var(--ic-space-lg);height:var(--ic-space-lg);margin:0 var(--ic-space-xs) 0 0}:host(.ic-tree-view-small) .icon-container{margin:0 var(--ic-space-xxs) 0 0}.ic-text-overflow{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ic-tooltip-overflow{overflow:hidden}@media (forced-colors: active){::slotted([slot="icon"]){fill:currentcolor}}'}}]);
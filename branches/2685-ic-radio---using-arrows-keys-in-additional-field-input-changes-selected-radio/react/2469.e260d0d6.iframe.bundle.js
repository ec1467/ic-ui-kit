"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2469],{"../web-components/dist/esm/helpers-7bf8c67f.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,{A:()=>getFilteredMenuOptions,B:()=>handleHiddenFormButtonClick,C:()=>getLabelFromValue,D:()=>DEVICE_SIZES,E:()=>getOptionsWithoutGroupTitlesCount,F:()=>isMobileOrTablet,G:()=>IcInformationStatus,H:()=>isEmptyString,I:()=>IcThemeForegroundEnum,J:()=>pxToRem,K:()=>getThemeColorBrightness,L:()=>BLACK_MIN_COLOR_BRIGHTNESS,M:()=>getSlot,N:()=>getSlotContent,O:()=>capitalize,P:()=>debounceEvent,Q:()=>successIcon,R:()=>isMacDevice,S:()=>elementOverflowsX,T:()=>getInputHelperTextID,U:()=>getInputValidationTextID,V:()=>VARIANT_ICONS,W:()=>WHITE_MAX_COLOR_BRIGHTNESS,X:()=>warningIcon,Y:()=>errorIcon,Z:()=>renderFileHiddenInput,a:()=>onComponentRequiredPropUndefined,b:()=>convertToRGBA,c:()=>checkSlotInChildMutations,d:()=>isPropDefined,e:()=>getCurrentDeviceSize,f:()=>checkResizeObserver,g:()=>getThemeForegroundColor,h:()=>getThemeFromContext,i:()=>isSlotUsed,j:()=>addFormResetListener,k:()=>removeFormResetListener,l:()=>renderHiddenInput,m:()=>removeHiddenInput,n:()=>getInputDescribedByText,o:()=>onComponentPropUndefinedChange,p:()=>hasValidationStatus,q:()=>isElInAGGrid,r:()=>removeDisabledFalse,s:()=>slotHasContent,t:()=>IC_DEVICE_SIZES,u:()=>hasClassificationBanner,v:()=>inheritAttributes,w:()=>IC_INHERITED_ARIA,x:()=>getNavItemParentDetails,y:()=>getCssProperty,z:()=>getSlotElements}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}));const errorIcon='<svg aria-labelledby="error-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">\n    <title id="error-title">Error</title>\n    <g id="close-octagon">\n        <path id="Vector" d="M8.77 3L3.5 8.27V15.73L8.77 21H16.23L21.5 15.73V8.27L16.23 3M8.91 7L12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41" />\n    </g>\n</svg>\n',successIcon='<svg aria-labelledby="success-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">\n    <title id="success-title">Success</title>\n    <g id="check_circle">\n        <path id="Vector" d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM9.79 16.29L6.2 12.7C5.81 12.31 5.81 11.68 6.2 11.29C6.59 10.9 7.22 10.9 7.61 11.29L10.5 14.17L17.38 7.29C17.77 6.9 18.4 6.9 18.79 7.29C19.18 7.68 19.18 8.31 18.79 8.7L11.2 16.29C10.82 16.68 10.18 16.68 9.79 16.29Z" />\n    </g>\n</svg>\n',warningIcon='<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">\n    <title id="warning-title">Warning</title>\n    <g id="warning">\n        <path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />\n    </g>\n</svg>\n',VARIANT_ICONS={neutral:{icon:'<svg aria-labelledby="neutral-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">\n<title id="neutral-title">Neutral</title>\n    <g id="Icon">\n        <path id="Vector" d="M19.5 3H5.5C4.4 3 3.5 3.9 3.5 5V19C3.5 20.1 4.4 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM12.51 18C11.81 18 11.25 17.44 11.25 16.74C11.25 16.03 11.81 15.49 12.51 15.49C13.22 15.49 13.76 16.03 13.76 16.74C13.75 17.43 13.22 18 12.51 18ZM15.52 10.6C14.76 11.71 14.04 12.06 13.65 12.77C13.55 12.95 13.49 13.09 13.46 13.4C13.41 13.85 13.01 14.18 12.56 14.18H12.5C11.98 14.18 11.57 13.74 11.62 13.22C11.65 12.88 11.73 12.53 11.92 12.19C12.41 11.32 13.34 10.8 13.88 10.03C14.45 9.22 14.13 7.7 12.51 7.7C11.8 7.7 11.33 8.06 11.04 8.49C10.79 8.85 10.35 9.02 9.94 8.85C9.41 8.64 9.22 8 9.54 7.54C10.15 6.65 11.17 6 12.49 6C13.97 6 14.98 6.67 15.5 7.52C15.94 8.24 16.2 9.59 15.52 10.6Z" />\n    </g>\n</svg>\n',ariaLabel:"Neutral"},info:{icon:'<svg aria-labelledby="info-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">\n    <title id="info-title">For your information</title>\n    <g id="info">\n        <path id="Vector" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z" />\n    </g>\n</svg>\n',ariaLabel:"For your information"},warning:{icon:warningIcon,ariaLabel:"Warning"},error:{icon:errorIcon,ariaLabel:"Error"},success:{icon:successIcon,ariaLabel:"Success"}},IC_INHERITED_ARIA=["aria-atomic","aria-autocomplete","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],IC_DEVICE_SIZES={XS:576,S:768,M:992,L:1200,XL:99999},IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]},BLACK_MIN_COLOR_BRIGHTNESS=136.701,WHITE_MAX_COLOR_BRIGHTNESS=130,inheritAttributes=(element,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(element.hasAttribute(attr)){const value=element.getAttribute(attr);null!==value&&(attributeObject[attr]=value),element.removeAttribute(attr)}})),attributeObject},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},renderFileHiddenInput=(event,container,multiple,name,value,disabled,accept)=>{if(void 0!==name&&hasShadowDom(container)){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.classList.add("ic-input"),container.appendChild(input)),input.type="file",input.hidden=!0,input.multiple=multiple,input.name=name,input.files=value,input.disabled=disabled,input.accept=accept,input.onchange=()=>{event.emit(input.files)},input.click()}},removeHiddenInput=container=>{const inputs=container.querySelectorAll("input.ic-input"),input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input||input.remove()},hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputHelperTextID=id=>id+"-helper-text",getInputValidationTextID=id=>id+"-validation-text",getInputDescribedByText=(inputId,helperText,validationText)=>`${helperText?getInputHelperTextID(inputId):""} ${validationText?getInputValidationTextID(inputId):""}`.trim(),getThemeFromContext=(el,themeFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcThemeForegroundEnum.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(`${parentTag}-${IcThemeForegroundEnum.Dark}`)||blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)?IcThemeForegroundEnum.Light:IcThemeForegroundEnum.Dark:themeFromEvent}return IcThemeForegroundEnum.Default},isMobileOrTablet=()=>"maxTouchPoints"in navigator&&"userAgent"in navigator&&(navigator.maxTouchPoints>0&&/iPad|iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),handleHiddenFormButtonClick=(form,button)=>{const hiddenFormButton=document.createElement("button");hiddenFormButton.setAttribute("type",button.type),hiddenFormButton.style.display="none",form.appendChild(hiddenFormButton),hiddenFormButton.click(),hiddenFormButton.remove()},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,getLabelFromValue=(value,options,valueField="value",labelField="label")=>{const ungroupedOptions=[];if(options.length>0&&options.map){options.map((option=>{option.children?option.children.map((option=>ungroupedOptions.push(option))):ungroupedOptions.push(option)}));const matchingValue=ungroupedOptions.find((option=>option[valueField]===value));if(void 0!==matchingValue)return matchingValue[labelField]}},getFilteredMenuOptions=(options,includeDescriptions,searchString,position,labelField="label")=>options.filter((option=>{var _a;const label=option[labelField].toLowerCase(),description=null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase(),lowerSearchString=searchString.toLowerCase();return"anywhere"===position?includeDescriptions?label.includes(lowerSearchString)||(null==description?void 0:description.includes(lowerSearchString)):label.includes(lowerSearchString):includeDescriptions?label.startsWith(lowerSearchString)||(null==description?void 0:description.startsWith(lowerSearchString)):label.startsWith(lowerSearchString)})),getOptionsWithoutGroupTitlesCount=options=>{const optionsWithoutGroupTitles=[];return options.length>0&&options.map&&options.map((option=>{option.children?option.children.map((option=>optionsWithoutGroupTitles.push(option))):optionsWithoutGroupTitles.push(option)})),optionsWithoutGroupTitles.length},deviceSizeMatches=size=>window.matchMedia(`(max-width: ${size}px)`).matches,getCurrentDeviceSize=()=>deviceSizeMatches(DEVICE_SIZES.S)?DEVICE_SIZES.S:deviceSizeMatches(DEVICE_SIZES.M)?DEVICE_SIZES.M:deviceSizeMatches(DEVICE_SIZES.L)?DEVICE_SIZES.L:deviceSizeMatches(DEVICE_SIZES.XL)?DEVICE_SIZES.XL:DEVICE_SIZES.UNDEFINED,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar),getThemeColorBrightness=()=>{const themeRed=getCssProperty("--ic-theme-primary-r"),themeGreen=getCssProperty("--ic-theme-primary-g"),themeBlue=getCssProperty("--ic-theme-primary-b");return(299*parseInt(themeRed)+587*parseInt(themeGreen)+114*parseInt(themeBlue))/1e3},getThemeForegroundColor=(brightness=getThemeColorBrightness())=>brightness>133.3505?IcThemeForegroundEnum.Dark:IcThemeForegroundEnum.Light,getSlot=(element,name)=>element&&element.querySelector?element.querySelector(`[slot="${name}"]`):null,slotHasContent=(element,name)=>null!==getSlot(element,name),getSlotContent=(element,name)=>{const slot=getSlot(element,name);return slot?getSlotElements(slot):null},getSlotElements=slot=>{const slotContent=slot.firstElementChild;if(null!==slotContent){const elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:slot.tagName?[slot]:null}return null===slot?null:[slot]},getNavItemParentDetails=({parentElement})=>{let navType={navType:"",parent:null};switch(parentElement.tagName){case"IC-NAVIGATION-GROUP":navType=getNavItemParentDetails(parentElement);break;case"IC-TOP-NAVIGATION":navType={navType:"top",parent:parentElement};break;case"IC-SIDE-NAVIGATION":navType={navType:"side",parent:parentElement};break;case"IC-PAGE-HEADER":navType={navType:"page-header",parent:null}}return navType},DEVICE_SIZES={XS:Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),S:Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),M:Number(getCssProperty("--ic-breakpoint-md").replace("px","")),L:Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),XL:Number(getCssProperty("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},hasValidationStatus=(status,disabled)=>!!status&&!disabled,isSlotUsed=({children},slotName)=>Array.from(children).some((child=>child.getAttribute("slot")===slotName)),onComponentPropUndefinedChange=(oldValue,newValue,callback)=>{void 0===oldValue&&newValue!==oldValue&&callback()},onComponentRequiredPropUndefined=(props,component)=>{props.forEach((({prop,propName})=>{null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}))},kebabToCamelCase=kebabCase=>kebabCase.toLowerCase().split("-").map(((word,index)=>0===index?word:`${word.substring(0,1).toUpperCase()}${word.substring(1)}`)).join(""),checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},hex2dec=v=>parseInt(v,16),elementOverflowsX=({scrollWidth,clientWidth})=>scrollWidth>clientWidth,hasClassificationBanner=()=>!!document.querySelector("ic-classification-banner:not([inline='true'])"),addFormResetListener=(el,callbackFn)=>{var _a;null===(_a=el.closest("FORM"))||void 0===_a||_a.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{var _a;null===(_a=el.closest("FORM"))||void 0===_a||_a.removeEventListener("reset",callbackFn)},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},isMacDevice=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0,convertToRGBA=color=>{const firstChar=null==color?void 0:color.slice(0,1).toLowerCase();return"#"===firstChar?(hex=>{const hexChars=hex.replace("#","").split("").map((char=>char.repeat(2)));return{r:hex2dec(4===hex.length?hexChars[0]:hex.slice(1,3)),g:hex2dec(4===hex.length?hexChars[1]:hex.slice(3,5)),b:hex2dec(4===hex.length?hexChars[2]:hex.slice(5)),a:1}})(color):"r"===firstChar?(rgbaStr=>{const isRGBA="a"===rgbaStr.slice(3,4).toLowerCase(),rgbValues=rgbaStr.substring(isRGBA?5:4,rgbaStr.length-1).replace(/ /g,"").split(",").map(Number);return{r:rgbValues[0],g:rgbValues[1],b:rgbValues[2],a:isRGBA?rgbValues[3]:1}})(color):null},capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),checkSlotInChildMutations=(addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>Array.isArray(slotName)?slotName.some((name=>node.slot===name)):node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)},isElInAGGrid=el=>!!el.closest(".ag-cell")&&!!el.closest(".ag-root")}}]);
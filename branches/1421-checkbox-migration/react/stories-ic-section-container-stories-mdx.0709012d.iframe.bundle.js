/*! For license information please see stories-ic-section-container-stories-mdx.0709012d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4235],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-section-container.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,centerAlignment:()=>centerAlignment,default:()=>ic_section_container_stories,fullHeight:()=>fullHeight,fullWidthAlignment:()=>fullWidthAlignment,leftAligned:()=>leftAligned});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-section-container\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute     | Description                                                                  | Type                                 | Default  |\n| ------------ | ------------- | ---------------------------------------------------------------------------- | ------------------------------------ | -------- |\n| `aligned`    | `aligned`     | The alignment of the container.                                              | `"center" \\| "full-width" \\| "left"` | `"left"` |\n| `fullHeight` | `full-height` | If `true`, the standard vertical padding from the container will be removed. | `boolean`                            | `false`  |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-footer](../ic-footer)\n - [ic-footer-link-group](../ic-footer-link-group)\n - [ic-hero](../ic-hero)\n - [ic-page-header](../ic-page-header)\n - [ic-top-navigation](../ic-top-navigation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-footer --\x3e ic-section-container\n  ic-footer-link-group --\x3e ic-section-container\n  ic-hero --\x3e ic-section-container\n  ic-page-header --\x3e ic-section-container\n  ic-top-navigation --\x3e ic-section-container\n  style ic-section-container fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"React Components/Section container",component:components.x5}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned",children:"Left aligned"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Left aligned",children:(0,jsx_runtime.jsx)(components.x5,{children:(0,jsx_runtime.jsx)("main",{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)("button",{children:"Start"}),(0,jsx_runtime.jsx)("button",{children:"End"})]})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"center-alignment",children:"Center alignment"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Center alignment",children:(0,jsx_runtime.jsx)(components.x5,{aligned:"center",children:(0,jsx_runtime.jsx)("main",{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)("button",{children:"Start"}),(0,jsx_runtime.jsx)("button",{children:"End"})]})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width-alignment",children:"Full-width alignment"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Full-width alignment",children:(0,jsx_runtime.jsx)(components.x5,{aligned:"full-width",children:(0,jsx_runtime.jsx)("main",{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)("button",{children:"Start"}),(0,jsx_runtime.jsx)("button",{children:"End"})]})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-height",children:"Full height"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Full-height",children:(0,jsx_runtime.jsx)(components.x5,{aligned:"full-width","full-height":!0,children:(0,jsx_runtime.jsx)("main",{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)("button",{children:"Start"}),(0,jsx_runtime.jsx)("button",{children:"End"})]})})})})})]})}const leftAligned=()=>(0,jsx_runtime.jsx)(components.x5,{children:(0,jsx_runtime.jsx)("main",{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)("button",{children:"Start"}),(0,jsx_runtime.jsx)("button",{children:"End"})]})})});leftAligned.storyName="Left aligned",leftAligned.parameters={storySource:{source:'<IcSectionContainer><main><div style={{\n      display: "flex",\n      justifyContent: "space-between"\n    }}><button>{"Start"}</button><button>{"End"}</button></div></main></IcSectionContainer>'}};const centerAlignment=()=>(0,jsx_runtime.jsx)(components.x5,{aligned:"center",children:(0,jsx_runtime.jsx)("main",{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)("button",{children:"Start"}),(0,jsx_runtime.jsx)("button",{children:"End"})]})})});centerAlignment.storyName="Center alignment",centerAlignment.parameters={storySource:{source:'<IcSectionContainer aligned="center"><main><div style={{\n      display: "flex",\n      justifyContent: "space-between"\n    }}><button>{"Start"}</button><button>{"End"}</button></div></main></IcSectionContainer>'}};const fullWidthAlignment=()=>(0,jsx_runtime.jsx)(components.x5,{aligned:"full-width",children:(0,jsx_runtime.jsx)("main",{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)("button",{children:"Start"}),(0,jsx_runtime.jsx)("button",{children:"End"})]})})});fullWidthAlignment.storyName="Full-width alignment",fullWidthAlignment.parameters={storySource:{source:'<IcSectionContainer aligned="full-width"><main><div style={{\n      display: "flex",\n      justifyContent: "space-between"\n    }}><button>{"Start"}</button><button>{"End"}</button></div></main></IcSectionContainer>'}};const fullHeight=()=>(0,jsx_runtime.jsx)(components.x5,{aligned:"full-width","full-height":!0,children:(0,jsx_runtime.jsx)("main",{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)("button",{children:"Start"}),(0,jsx_runtime.jsx)("button",{children:"End"})]})})});fullHeight.storyName="Full-height",fullHeight.parameters={storySource:{source:'<IcSectionContainer aligned="full-width" full-height><main><div style={{\n      display: "flex",\n      justifyContent: "space-between"\n    }}><button>{"Start"}</button><button>{"End"}</button></div></main></IcSectionContainer>'}};const componentMeta={title:"React Components/Section container",component:components.x5,tags:["stories-mdx"],includeStories:["leftAligned","centerAlignment","fullWidthAlignment","fullHeight"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_section_container_stories=componentMeta,__namedExportsOrder=["leftAligned","centerAlignment","fullWidthAlignment","fullHeight"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
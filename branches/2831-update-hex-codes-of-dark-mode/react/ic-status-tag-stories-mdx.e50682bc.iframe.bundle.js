(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[9223],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-status-tag.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,danger:()=>danger,default:()=>ic_status_tag_stories,defaultArgs:()=>defaultArgs,letterCase:()=>letterCase,neutral:()=>neutral,playground:()=>playground,size:()=>size,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-status-tag\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute   | Description                                                                                                                                                                  | Type                                              | Default     |\n| -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |\n| `announced`          | `announced` | If `true`, role=\'status\' is added to the component and it will act as an \'aria-live\' region. Screen readers will announce changes to the `label`, but not the initial value. | `boolean`                                         | `false`     |\n| `label` _(required)_ | `label`     | The content rendered within the status tag.                                                                                                                                  | `string`                                          | `undefined` |\n| `size`               | `size`      | The size of the status tag component.                                                                                                                                        | `"large" \\| "medium" \\| "small"`                  | `"medium"`  |\n| `status`             | `status`    | The colour of the status tag.                                                                                                                                                | `"danger" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `theme`              | `theme`     | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                      | `"dark" \\| "inherit" \\| "light"`                  | `"inherit"` |\n| `uppercase`          | `uppercase` | The letter case of the status tag\'s label.                                                                                                                                   | `boolean`                                         | `true`      |\n| `variant`            | `variant`   | The emphasis of the status tag.                                                                                                                                              | `"filled" \\| "outlined"`                          | `"filled"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-status-tag --\x3e ic-typography\n  style ic-status-tag fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={announced:!1,label:"Status tag label",size:"medium",status:"neutral",variant:"filled",theme:"inherit",uppercase:!0};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Status tag",component:components.JY}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"neutral",children:"Neutral"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Neutral",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.JY,{label:"Neutral",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Success",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Success",status:"success"}),(0,jsx_runtime.jsx)(components.JY,{label:"Success",status:"success",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Warning",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Warning",status:"warning"}),(0,jsx_runtime.jsx)(components.JY,{label:"Warning",status:"warning",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"danger",children:"Danger"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Danger",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Danger",status:"danger"}),(0,jsx_runtime.jsx)(components.JY,{label:"Danger",status:"danger",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"letter-case",children:"Letter case"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Letter case",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Uppercase status tag"}),(0,jsx_runtime.jsx)(components.JY,{label:"Uppercase status tag",variant:"outlined"}),(0,jsx_runtime.jsx)(components.JY,{label:"Sentence case status tag",uppercase:"false"}),(0,jsx_runtime.jsx)(components.JY,{label:"Sentence case status tag",variant:"outlined",uppercase:"false"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Size",children:[(0,jsx_runtime.jsx)(components.JY,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.JY,{label:"Small",variant:"outlined",size:"small"}),(0,jsx_runtime.jsx)(components.JY,{label:"Medium",size:"medium"}),(0,jsx_runtime.jsx)(components.JY,{label:"Medium",variant:"outlined",size:"medium"}),(0,jsx_runtime.jsx)(components.JY,{label:"large",size:"large"}),(0,jsx_runtime.jsx)(components.JY,{label:"large",variant:"outlined",size:"large"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{size:{options:["default","small","large"],control:{type:"inline-radio"}},status:{options:["neutral","success","warning","danger"],control:{type:"select"}},variant:{options:["filled","outlined"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(components.JY,{label:args.label,size:args.size,status:args.status,variant:args.variant,announced:args.announced,theme:args.theme,uppercase:args.uppercase})})})]})}const neutral=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.JY,{label:"Neutral",variant:"outlined"})]});neutral.storyName="Neutral",neutral.parameters={storySource:{source:'<IcStatusTag label="Neutral" />\n<IcStatusTag label="Neutral" variant="outlined" />'}};const success=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Success",status:"success"}),(0,jsx_runtime.jsx)(components.JY,{label:"Success",status:"success",variant:"outlined"})]});success.storyName="Success",success.parameters={storySource:{source:'<IcStatusTag label="Success" status="success" />\n<IcStatusTag label="Success" status="success" variant="outlined" />'}};const warning=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Warning",status:"warning"}),(0,jsx_runtime.jsx)(components.JY,{label:"Warning",status:"warning",variant:"outlined"})]});warning.storyName="Warning",warning.parameters={storySource:{source:'<IcStatusTag label="Warning" status="warning" />\n<IcStatusTag label="Warning" status="warning" variant="outlined" />'}};const danger=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Danger",status:"danger"}),(0,jsx_runtime.jsx)(components.JY,{label:"Danger",status:"danger",variant:"outlined"})]});danger.storyName="Danger",danger.parameters={storySource:{source:'<IcStatusTag label="Danger" status="danger" />\n<IcStatusTag label="Danger" status="danger" variant="outlined" />'}};const letterCase=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Uppercase status tag"}),(0,jsx_runtime.jsx)(components.JY,{label:"Uppercase status tag",variant:"outlined"}),(0,jsx_runtime.jsx)(components.JY,{label:"Sentence case status tag",uppercase:"false"}),(0,jsx_runtime.jsx)(components.JY,{label:"Sentence case status tag",variant:"outlined",uppercase:"false"})]});letterCase.storyName="Letter case",letterCase.parameters={storySource:{source:'<IcStatusTag label="Uppercase status tag" />\n<IcStatusTag label="Uppercase status tag" variant="outlined" />\n<IcStatusTag label="Sentence case status tag" uppercase="false" />\n<IcStatusTag label="Sentence case status tag" variant="outlined" uppercase="false" />'}};const size=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.JY,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.JY,{label:"Small",variant:"outlined",size:"small"}),(0,jsx_runtime.jsx)(components.JY,{label:"Medium",size:"medium"}),(0,jsx_runtime.jsx)(components.JY,{label:"Medium",variant:"outlined",size:"medium"}),(0,jsx_runtime.jsx)(components.JY,{label:"large",size:"large"}),(0,jsx_runtime.jsx)(components.JY,{label:"large",variant:"outlined",size:"large"})]});size.storyName="Size",size.parameters={storySource:{source:'<IcStatusTag label="Small" size="small" />\n<IcStatusTag label="Small" variant="outlined" size="small" />\n<IcStatusTag label="Medium" size="medium" />\n<IcStatusTag label="Medium" variant="outlined" size="medium" />\n<IcStatusTag label="large" size="large" />\n<IcStatusTag label="large" variant="outlined" size="large" />'}};const playground=args=>(0,jsx_runtime.jsx)(components.JY,{label:args.label,size:args.size,status:args.status,variant:args.variant,announced:args.announced,theme:args.theme,uppercase:args.uppercase});playground.storyName="Playground",playground.argTypes={size:{options:["default","small","large"],control:{type:"inline-radio"}},status:{options:["neutral","success","warning","danger"],control:{type:"select"}},variant:{options:["filled","outlined"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:"args => <IcStatusTag label={args.label} size={args.size} status={args.status} variant={args.variant} announced={args.announced} theme={args.theme} uppercase={args.uppercase}></IcStatusTag>"},loki:{skip:!0}};const componentMeta={title:"Status tag",component:components.JY,tags:["stories-mdx"],includeStories:["neutral","success","warning","danger","letterCase","size","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_status_tag_stories=componentMeta,__namedExportsOrder=["defaultArgs","neutral","success","warning","danger","letterCase","size","playground"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
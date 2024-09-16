"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[976],{"../react/src/stories/ic-alert.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,customMessage:()=>customMessage,customMessageAndTitleAbove:()=>customMessageAndTitleAbove,default:()=>ic_alert_stories,defaultArgs:()=>defaultArgs,defaultIconOverridden:()=>defaultIconOverridden,dismissible:()=>dismissible,dismissibleWithAction:()=>dismissibleWithAction,messageOnly:()=>messageOnly,noIcon:()=>noIcon,playground:()=>playground,responsiveTitle:()=>responsiveTitle,slottedIcon:()=>slottedIcon,titleAbove:()=>titleAbove,variants:()=>variants,withAction:()=>withAction});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-alert\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property          | Attribute           | Description                                                                                   | Type                                                       | Default     |\n| ----------------- | ------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |\n| `announced`       | `announced`         | If `true`, the alert will have the \'alert\' ARIA role and will be announced to screen readers. | `boolean`                                                  | `true`      |\n| `dismissible`     | `dismissible`       | If `true`, the alert will have a close icon at the end to dismiss it.                         | `boolean`                                                  | `false`     |\n| `heading`         | `heading`           | The optional title to display at the start of the alert.                                      | `string`                                                   | `""`        |\n| `message`         | `message`           | The main body message of the alert.                                                           | `string`                                                   | `undefined` |\n| `showDefaultIcon` | `show-default-icon` | If `true`, the default icon for the neutral variant will be appear on the left of the alert.  | `boolean`                                                  | `true`      |\n| `titleAbove`      | `title-above`       | If `true`, the title and message will appear above and below instead of inline.               | `boolean`                                                  | `false`     |\n| `variant`         | `variant`           | The variant of the alert which will be rendered.                                              | `"error" \\| "info" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n\n\n## Events\n\n| Event       | Description                                                                                                             | Type                |\n| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |\n| `dismiss`   | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icDismiss instead.<br/><br/> | `CustomEvent<void>` |\n| `icDismiss` | Is emitted when the user dismisses the alert.                                                                           | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot             | Description                                                                                            |\n| ---------------- | ------------------------------------------------------------------------------------------------------ |\n| `"action"`       | Content is placed to the right of the message.                                                         |\n| `"message"`      | Content is placed to the right of the title.                                                           |\n| `"neutral-icon"` | A custom neutral icon is placed to the left of the title. This will override the default icon if used. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-dialog](../ic-dialog)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-alert --\x3e ic-typography\n  ic-alert --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-dialog --\x3e ic-alert\n  style ic-alert fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var slottedSVG=__webpack_require__("../react/src/react-component-lib/slottedSVG.tsx"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const defaultArgs={dismissible:!1,heading:"Heading",message:"Message",titleAbove:!1,variant:"neutral",showAction:!1,showDefaultIcon:!0,showSlottedIcon:!1};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",path:"path"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Alert",component:components.LP}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Variants",children:[(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages"}),(0,jsx_runtime.jsx)(components.LP,{variant:"info",heading:"Info",message:"This alert is for displaying information"}),(0,jsx_runtime.jsx)(components.LP,{variant:"error",heading:"Error",message:"This alert is for displaying errors"}),(0,jsx_runtime.jsx)(components.LP,{variant:"warning",heading:"Warning",message:"This alert is for displaying warnings"}),(0,jsx_runtime.jsx)(components.LP,{variant:"success",heading:"Success",message:"This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn't overflow"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"message-only",children:"Message only"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Message only",children:(0,jsx_runtime.jsx)(components.LP,{message:"This alert is for displaying miscellaneous messages"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible",children:"Dismissible"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Dismissible",children:(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-action",children:"With action"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With action",children:(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",children:(0,jsx_runtime.jsx)(components.nP,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)(_components.p,{children:"Button"})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible-with-action",children:"Dismissible with action"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Dismissible with action",children:(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0,children:(0,jsx_runtime.jsx)(components.nP,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)(_components.p,{children:"Button"})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"title-above",children:"Title above"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Title above",children:(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",titleAbove:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive-title",children:"Responsive title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Responsive title",children:[(0,jsx_runtime.jsx)(components.LP,{heading:"This title is very long so should force the alert to add 'title-above'",message:"This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"}),(0,jsx_runtime.jsx)(components.LP,{variant:"success",heading:"Shorter title",message:"Neither of these has 'title-above' set to true"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-message",children:"Custom message"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom message",children:(0,jsx_runtime.jsx)(components.LP,{heading:"This alert uses a custom message slot",children:(0,jsx_runtime.jsxs)("p",{slot:"message",children:[(0,jsx_runtime.jsx)(_components.p,{children:"This is some text and"}),(0,jsx_runtime.jsx)(components.D9,{href:"/",inline:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"this is an inline link"})}),(0,jsx_runtime.jsx)(_components.p,{children:"within the text."})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-message-and-title-above",children:"Custom message and title above"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom message and title above",children:(0,jsx_runtime.jsx)(components.LP,{heading:"Want to know more about our coffee?",titleAbove:!0,children:(0,jsx_runtime.jsx)("span",{slot:"message",style:{font:"var(--ic-font-body)"},children:(0,jsx_runtime.jsxs)(_components.p,{children:["Go to our ",(0,jsx_runtime.jsx)(components.D9,{href:"/",children:"coffee page"})," to learn more."]})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-icon",children:"Slotted icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted icon",children:(0,jsx_runtime.jsx)(components.LP,{id:"alert",heading:"Neutral",message:"This alert contains a slotted icon",showDefaultIcon:"false",children:(0,jsx_runtime.jsxs)(slottedSVG.k,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"no-icon",children:"No icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"No icon",children:(0,jsx_runtime.jsx)(components.LP,{id:"alert",heading:"Neutral",message:"This alert has no icon",showDefaultIcon:"false"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-icon-overridden",children:"Default icon overridden"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default icon overridden",children:(0,jsx_runtime.jsx)(components.LP,{id:"alert",heading:"Neutral",message:"This alert contains a slotted icon that overrides the default icon",children:(0,jsx_runtime.jsxs)(slottedSVG.k,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{variant:{options:["neutral","info","warning","error","success"],control:{type:"select"}}},name:"Playground",children:args=>(0,jsx_runtime.jsxs)(components.LP,{dismissible:args.dismissible,variant:args.variant,heading:args.heading,message:args.message,titleAbove:args.titleAbove,showDefaultIcon:args.showDefaultIcon,children:[args.showAction&&(0,jsx_runtime.jsx)(components.nP,{slot:"action",variant:"secondary",children:"Button"}),args.showSlottedIcon&&(0,jsx_runtime.jsxs)(slottedSVG.k,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)(_components.path,{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})]})})})]})}const variants=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages"}),(0,jsx_runtime.jsx)(components.LP,{variant:"info",heading:"Info",message:"This alert is for displaying information"}),(0,jsx_runtime.jsx)(components.LP,{variant:"error",heading:"Error",message:"This alert is for displaying errors"}),(0,jsx_runtime.jsx)(components.LP,{variant:"warning",heading:"Warning",message:"This alert is for displaying warnings"}),(0,jsx_runtime.jsx)(components.LP,{variant:"success",heading:"Success",message:"This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn't overflow"})]});variants.storyName="Variants",variants.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" />\n<IcAlert variant="info" heading="Info" message="This alert is for displaying information" />\n<IcAlert variant="error" heading="Error" message="This alert is for displaying errors" />\n<IcAlert variant="warning" heading="Warning" message="This alert is for displaying warnings" />\n<IcAlert variant="success" heading="Success" message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn\'t overflow" />'}};const messageOnly=()=>(0,jsx_runtime.jsx)(components.LP,{message:"This alert is for displaying miscellaneous messages"});messageOnly.storyName="Message only",messageOnly.parameters={storySource:{source:'<IcAlert message="This alert is for displaying miscellaneous messages" />'}};const dismissible=()=>(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0});dismissible.storyName="Dismissible",dismissible.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" dismissible />'}};const withAction=()=>(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",children:(0,jsx_runtime.jsx)(components.nP,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)("p",{children:"Button"})})});withAction.storyName="With action",withAction.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages"><IcButton slot="action" variant="secondary"><p>{"Button"}</p></IcButton></IcAlert>'}};const dismissibleWithAction=()=>(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0,children:(0,jsx_runtime.jsx)(components.nP,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)("p",{children:"Button"})})});dismissibleWithAction.storyName="Dismissible with action",dismissibleWithAction.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" dismissible><IcButton slot="action" variant="secondary"><p>{"Button"}</p></IcButton></IcAlert>'}};const titleAbove=()=>(0,jsx_runtime.jsx)(components.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",titleAbove:!0});titleAbove.storyName="Title above",titleAbove.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" titleAbove />'}};const responsiveTitle=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.LP,{heading:"This title is very long so should force the alert to add 'title-above'",message:"This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"}),(0,jsx_runtime.jsx)(components.LP,{variant:"success",heading:"Shorter title",message:"Neither of these has 'title-above' set to true"})]});responsiveTitle.storyName="Responsive title",responsiveTitle.parameters={storySource:{source:'<IcAlert heading="This title is very long so should force the alert to add \'title-above\'" message="This alert does not have \'title-above\' added as a prop but it is forced to add it due to the length of the title" />\n<IcAlert variant="success" heading="Shorter title" message="Neither of these has \'title-above\' set to true" />'}};const customMessage=()=>(0,jsx_runtime.jsx)(components.LP,{heading:"This alert uses a custom message slot",children:(0,jsx_runtime.jsxs)("p",{slot:"message",children:[(0,jsx_runtime.jsx)("p",{children:"This is some text and"}),(0,jsx_runtime.jsx)(components.D9,{href:"/",inline:!0,children:(0,jsx_runtime.jsx)("p",{children:"this is an inline link"})}),(0,jsx_runtime.jsx)("p",{children:"within the text."})]})});customMessage.storyName="Custom message",customMessage.parameters={storySource:{source:'<IcAlert heading="This alert uses a custom message slot"><p slot="message"><p>{"This is some text and"}</p><IcLink href="/" inline><p>{"this is an inline link"}</p></IcLink><p>{"within the text."}</p></p></IcAlert>'}};const customMessageAndTitleAbove=()=>(0,jsx_runtime.jsx)(components.LP,{heading:"Want to know more about our coffee?",titleAbove:!0,children:(0,jsx_runtime.jsx)("span",{slot:"message",style:{font:"var(--ic-font-body)"},children:(0,jsx_runtime.jsxs)("p",{children:["Go to our ",(0,jsx_runtime.jsx)(components.D9,{href:"/",children:"coffee page"})," to learn more."]})})});customMessageAndTitleAbove.storyName="Custom message and title above",customMessageAndTitleAbove.parameters={storySource:{source:'<IcAlert heading="Want to know more about our coffee?" titleAbove><span slot="message" style={{\n    font: "var(--ic-font-body)"\n  }}><p>{"Go to our "}<IcLink href="/">{"coffee page"}</IcLink>{" to learn more."}</p></span></IcAlert>'}};const slottedIcon=()=>(0,jsx_runtime.jsx)(components.LP,{id:"alert",heading:"Neutral",message:"This alert contains a slotted icon",showDefaultIcon:"false",children:(0,jsx_runtime.jsxs)(slottedSVG.k,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})});slottedIcon.storyName="Slotted icon",slottedIcon.parameters={storySource:{source:'<IcAlert id="alert" heading="Neutral" message="This alert contains a slotted icon" showDefaultIcon="false"><SlottedSVG slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></SlottedSVG></IcAlert>'}};const noIcon=()=>(0,jsx_runtime.jsx)(components.LP,{id:"alert",heading:"Neutral",message:"This alert has no icon",showDefaultIcon:"false"});noIcon.storyName="No icon",noIcon.parameters={storySource:{source:'<IcAlert id="alert" heading="Neutral" message="This alert has no icon" showDefaultIcon="false" />'}};const defaultIconOverridden=()=>(0,jsx_runtime.jsx)(components.LP,{id:"alert",heading:"Neutral",message:"This alert contains a slotted icon that overrides the default icon",children:(0,jsx_runtime.jsxs)(slottedSVG.k,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})});defaultIconOverridden.storyName="Default icon overridden",defaultIconOverridden.parameters={storySource:{source:'<IcAlert id="alert" heading="Neutral" message="This alert contains a slotted icon that overrides the default icon"><SlottedSVG slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></SlottedSVG></IcAlert>'}};const playground=args=>(0,jsx_runtime.jsxs)(components.LP,{dismissible:args.dismissible,variant:args.variant,heading:args.heading,message:args.message,titleAbove:args.titleAbove,showDefaultIcon:args.showDefaultIcon,children:[args.showAction&&(0,jsx_runtime.jsx)(components.nP,{slot:"action",variant:"secondary",children:"Button"}),args.showSlottedIcon&&(0,jsx_runtime.jsxs)(slottedSVG.k,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})]})]});playground.storyName="Playground",playground.argTypes={variant:{options:["neutral","info","warning","error","success"],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <IcAlert dismissible={args.dismissible} variant={args.variant} heading={args.heading} message={args.message} titleAbove={args.titleAbove} showDefaultIcon={args.showDefaultIcon}>\n        {args.showAction && <IcButton slot="action" variant="secondary">\n            Button\n          </IcButton>}\n        {args.showSlottedIcon && <SlottedSVG slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n        </SlottedSVG>}\n      </IcAlert>'}};const componentMeta={title:"Alert",component:components.LP,tags:["stories-mdx"],includeStories:["variants","messageOnly","dismissible","withAction","dismissibleWithAction","titleAbove","responsiveTitle","customMessage","customMessageAndTitleAbove","slottedIcon","noIcon","defaultIconOverridden","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_alert_stories=componentMeta,__namedExportsOrder=["defaultArgs","variants","messageOnly","dismissible","withAction","dismissibleWithAction","titleAbove","responsiveTitle","customMessage","customMessageAndTitleAbove","slottedIcon","noIcon","defaultIconOverridden","playground"]},"../react/src/react-component-lib/slottedSVG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>SlottedSVG});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["path","slot","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,defaultProps={xmlns:"http://www.w3.org/2000/svg"};var SlottedSVG=function SlottedSVG(_ref){var path=_ref.path,slotName=_ref.slot,children=_ref.children,props=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded);return __jsx("svg",(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},function slot(){var name=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{ref:function ref(e){return e?e.setAttribute("slot",name):null}}}(slotName),props,defaultProps),!!path&&__jsx("path",{d:path}),children)};SlottedSVG.displayName="SlottedSVG";try{SlottedSVG.displayName="SlottedSVG",SlottedSVG.__docgenInfo={description:"",displayName:"SlottedSVG",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../react/src/react-component-lib/slottedSVG.tsx#SlottedSVG"]={docgenInfo:SlottedSVG.__docgenInfo,name:"SlottedSVG",path:"../react/src/react-component-lib/slottedSVG.tsx#SlottedSVG"})}catch(__react_docgen_typescript_loader_error){}}}]);
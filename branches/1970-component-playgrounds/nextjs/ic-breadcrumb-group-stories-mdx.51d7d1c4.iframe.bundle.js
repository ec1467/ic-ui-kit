"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[2675],{"../react/src/stories/ic-breadcrumb-group.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{About:()=>About,Breadcrumbs:()=>Breadcrumbs,DailyTippers:()=>DailyTippers,HomePage:()=>HomePage,__namedExportsOrder:()=>__namedExportsOrder,appearance:()=>appearance,back:()=>back,collapsed:()=>collapsed,default:()=>ic_breadcrumb_group_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,icon:()=>icon,playground:()=>playground,reactRouter:()=>reactRouter,slottedLinks:()=>slottedLinks});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-breadcrumb-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute              | Description                                                                         | Type                             | Default     |\n| -------------------- | ---------------------- | ----------------------------------------------------------------------------------- | -------------------------------- | ----------- |\n| `appearance`         | `appearance`           | The appearance of the breadcrumb group.                                             | `"dark" \\| "default" \\| "light"` | `"default"` |\n| `backBreadcrumbOnly` | `back-breadcrumb-only` | If `true`, display only a single breadcrumb for the parent page with a back icon.   | `boolean`                        | `false`     |\n| `collapsed`          | `collapsed`            | If `true`, all breadcrumbs between the first and last breadcrumb will be collapsed. | `boolean`                        | `false`     |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-breadcrumb](../ic-breadcrumb)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb-group --\x3e ic-breadcrumb\n  ic-breadcrumb --\x3e ic-link\n  style ic-breadcrumb-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_breadcrumb_readme_namespaceObject='# ic-breadcrumb\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute    | Description                                            | Type      | Default     |\n| ------------------------ | ------------ | ------------------------------------------------------ | --------- | ----------- |\n| `current`                | `current`    | If `true`, aria-current will be set on the breadcrumb. | `boolean` | `false`     |\n| `href`                   | `href`       | The URL that the breadcrumb link points to.            | `string`  | `undefined` |\n| `pageTitle` _(required)_ | `page-title` | The title of the breadcrumb.                           | `string`  | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the breadcrumb.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot     | Description                                                        |\n| -------- | ------------------------------------------------------------------ |\n| `"icon"` | Content will be rendered to the left of the breadcrumb page title. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-breadcrumb-group](../ic-breadcrumb-group)\n\n### Depends on\n\n- [ic-link](../ic-link)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb --\x3e ic-link\n  ic-breadcrumb-group --\x3e ic-breadcrumb\n  style ic-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var react_router_dist=__webpack_require__("../react/node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("../react/node_modules/react-router-dom/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const HomePage=props=>(0,jsx_runtime.jsxs)(components.vU,{children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:"Hi there!"}),(0,jsx_runtime.jsx)(components.Cu,{children:"This example is demonstrating the breadcrumb and breadcrumb group components with React Router"})]}),DailyTippers=()=>(0,jsx_runtime.jsxs)(components.vU,{children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:"Daily tippers"}),(0,jsx_runtime.jsx)(components.Cu,{children:"Lorem ipsum doloe sit amet, consectetur adipiscing"})]}),About=()=>(0,jsx_runtime.jsxs)(components.vU,{children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:"About"}),(0,jsx_runtime.jsx)(components.Cu,{children:"Lorem ipsum doloe sit amet, consectetur adipiscing"})]}),Breadcrumbs=()=>{const location=(0,react_router_dist.zy)();return(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Home",current:"/"===location.pathname,children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.k2,{to:"/",slot:"router-item",children:"Home"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Daily Tippers",current:"/daily-tippers"===location.pathname,children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.k2,{to:"/daily-tippers",slot:"router-item",children:"Daily Tippers"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"About",current:"/about"===location.pathname,children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.k2,{to:"/about",slot:"router-item",children:"About"})})})]})},defaultArgs={appearance:"default",backBreadcrumbOnly:!1,collapsed:!1,current:!1,href:"/",pageTitle:"Home",iconSlot:"icon"};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",svg:"svg",path:"path"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject+ic_breadcrumb_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.W8,{title:"Breadcrumb",component:components.NX}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"foo",href:"/foo"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"bar",href:"/bar"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"baz",href:"/baz",current:!0})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-links",children:"Slotted links"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted links",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)("a",{slot:"router-item",href:"/foo",children:(0,jsx_runtime.jsx)(_components.p,{children:"Foo"})})})}),(0,jsx_runtime.jsx)(components.qM,{children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)("a",{slot:"router-item",href:"/bar",children:(0,jsx_runtime.jsx)(_components.p,{children:"Bar"})})})}),(0,jsx_runtime.jsx)(components.qM,{current:!0,children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)("a",{slot:"router-item",href:"/baz",children:(0,jsx_runtime.jsx)(_components.p,{children:"Baz"})})})})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"back",children:"Back"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Back",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{backBreadcrumbOnly:!0,children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"foo",href:"/foo"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"bar",href:"/bar"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"baz",href:"/baz",current:!0})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance",children:"Appearance"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Appearance",children:[(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 2",current:"true",href:"/",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})})]}),(0,jsx_runtime.jsxs)(components.NX,{backBreadcrumbOnly:"true",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1"}),(0,jsx_runtime.jsx)(components.qM,{current:"true",pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"})]}),(0,jsx_runtime.jsxs)(components.NX,{appearance:"dark",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 2",current:"true",href:"/",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})})]}),(0,jsx_runtime.jsxs)(components.NX,{appearance:"dark",backBreadcrumbOnly:"true",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1"}),(0,jsx_runtime.jsx)(components.qM,{current:"true",pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"})]}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",width:"fit-content"},children:(0,jsx_runtime.jsxs)(components.NX,{appearance:"light",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 2",current:"true",href:"/",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})})]})}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",width:"fit-content"},children:(0,jsx_runtime.jsxs)(components.NX,{appearance:"light",backBreadcrumbOnly:"true",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1"}),(0,jsx_runtime.jsx)(components.qM,{current:"true",pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"})]})})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Icon",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"foo",href:"/foo",children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"bar",href:"/bar",children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"baz",href:"/baz",current:!0,children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]})})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"collapsed",children:"Collapsed"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Collapsed",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{collapsed:!0,children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"foo",href:"/foo"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"bar",href:"/bar"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"baz",href:"/baz"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"qux",href:"/qux"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"quxx",href:"/quxx",current:!0})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"react-router",children:"React Router"}),"\n","\n","\n","\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"React Router",decorators:[Story=>(0,jsx_runtime.jsx)(react_router_dist.fS,{initialEntries:["/"],children:(0,jsx_runtime.jsx)(Story,{})})],children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Breadcrumbs,{}),(0,jsx_runtime.jsxs)(react_router_dist.BV,{children:[(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/",element:(0,jsx_runtime.jsx)(HomePage,{})}),(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/daily-tippers",element:(0,jsx_runtime.jsx)(DailyTippers,{})}),(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/about",element:(0,jsx_runtime.jsx)(About,{})})]}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"10px",marginTop:"16px"},children:[(0,jsx_runtime.jsx)(components.Cu,{children:(0,jsx_runtime.jsx)(_components.p,{children:"Click the links to switch pages and update breadcrumb states:"})}),(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.N_,{slot:"router-item",to:"/",children:(0,jsx_runtime.jsx)(_components.p,{children:"Home"})})}),(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.N_,{slot:"router-item",to:"/daily-tippers",children:(0,jsx_runtime.jsx)(_components.p,{children:"Daily Tippers"})})}),(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.N_,{slot:"router-item",to:"/about",children:(0,jsx_runtime.jsx)(_components.p,{children:"About"})})})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{appearance:{options:["default","dark","light"],control:{type:"radio"}},iconSlot:{options:["icon",""],control:{type:"select"}}},name:"Playground",children:args=>(0,jsx_runtime.jsxs)(components.NX,{appearance:args.appearance,backBreadcrumbOnly:args.backBreadcrumbOnly,collapsed:args.collapsed,children:[(0,jsx_runtime.jsx)(components.qM,{current:args.current,pageTitle:args.pageTitle,href:args.href,children:(0,jsx_runtime.jsx)(_components.svg,{slot:args.iconSlot,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)(_components.path,{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 3",href:"/breadcrumb-3"})]})})})]})}const defaultStory=()=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"foo",href:"/foo"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"bar",href:"/bar"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"baz",href:"/baz",current:!0})]})});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<div><IcBreadcrumbGroup><IcBreadcrumb pageTitle="foo" href="/foo" /><IcBreadcrumb pageTitle="bar" href="/bar" /><IcBreadcrumb pageTitle="baz" href="/baz" current /></IcBreadcrumbGroup></div>'}};const slottedLinks=()=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)("a",{slot:"router-item",href:"/foo",children:(0,jsx_runtime.jsx)("p",{children:"Foo"})})})}),(0,jsx_runtime.jsx)(components.qM,{children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)("a",{slot:"router-item",href:"/bar",children:(0,jsx_runtime.jsx)("p",{children:"Bar"})})})}),(0,jsx_runtime.jsx)(components.qM,{current:!0,children:(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)("a",{slot:"router-item",href:"/baz",children:(0,jsx_runtime.jsx)("p",{children:"Baz"})})})})]})});slottedLinks.storyName="Slotted links",slottedLinks.parameters={storySource:{source:'<div><IcBreadcrumbGroup><IcBreadcrumb><IcLink><a slot="router-item" href="/foo"><p>{"Foo"}</p></a></IcLink></IcBreadcrumb><IcBreadcrumb><IcLink><a slot="router-item" href="/bar"><p>{"Bar"}</p></a></IcLink></IcBreadcrumb><IcBreadcrumb current><IcLink><a slot="router-item" href="/baz"><p>{"Baz"}</p></a></IcLink></IcBreadcrumb></IcBreadcrumbGroup></div>'}};const back=()=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{backBreadcrumbOnly:!0,children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"foo",href:"/foo"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"bar",href:"/bar"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"baz",href:"/baz",current:!0})]})});back.storyName="Back",back.parameters={storySource:{source:'<div><IcBreadcrumbGroup backBreadcrumbOnly><IcBreadcrumb pageTitle="foo" href="/foo" /><IcBreadcrumb pageTitle="bar" href="/bar" /><IcBreadcrumb pageTitle="baz" href="/baz" current /></IcBreadcrumbGroup></div>'}};const appearance=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 2",current:"true",href:"/",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})})]}),(0,jsx_runtime.jsxs)(components.NX,{backBreadcrumbOnly:"true",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1"}),(0,jsx_runtime.jsx)(components.qM,{current:"true",pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"})]}),(0,jsx_runtime.jsxs)(components.NX,{appearance:"dark",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 2",current:"true",href:"/",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})})]}),(0,jsx_runtime.jsxs)(components.NX,{appearance:"dark",backBreadcrumbOnly:"true",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1"}),(0,jsx_runtime.jsx)(components.qM,{current:"true",pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"})]}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",width:"fit-content"},children:(0,jsx_runtime.jsxs)(components.NX,{appearance:"light",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 2",current:"true",href:"/",children:(0,jsx_runtime.jsx)("svg",{slot:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})})]})}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",width:"fit-content"},children:(0,jsx_runtime.jsxs)(components.NX,{appearance:"light",backBreadcrumbOnly:"true",children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 1",href:"/breadcrumb-1"}),(0,jsx_runtime.jsx)(components.qM,{current:"true",pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"})]})})]});appearance.storyName="Appearance",appearance.parameters={storySource:{source:'<IcBreadcrumbGroup><IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1"><svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" /></svg></IcBreadcrumb><IcBreadcrumb pageTitle="Breadcrumb 2" current="true" href="/"><svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" /></svg></IcBreadcrumb></IcBreadcrumbGroup>\n<IcBreadcrumbGroup backBreadcrumbOnly="true"><IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1" /><IcBreadcrumb current="true" pageTitle="Breadcrumb 2" href="/breadcrumb-2" /></IcBreadcrumbGroup>\n<IcBreadcrumbGroup appearance="dark"><IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1"><svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" /></svg></IcBreadcrumb><IcBreadcrumb pageTitle="Breadcrumb 2" current="true" href="/"><svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" /></svg></IcBreadcrumb></IcBreadcrumbGroup>\n<IcBreadcrumbGroup appearance="dark" backBreadcrumbOnly="true"><IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1" /><IcBreadcrumb current="true" pageTitle="Breadcrumb 2" href="/breadcrumb-2" /></IcBreadcrumbGroup>\n<div style={{\n  backgroundColor: "black",\n  width: "fit-content"\n}}><IcBreadcrumbGroup appearance="light"><IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1"><svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" /></svg></IcBreadcrumb><IcBreadcrumb pageTitle="Breadcrumb 2" current="true" href="/"><svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" /></svg></IcBreadcrumb></IcBreadcrumbGroup></div>\n<div style={{\n  backgroundColor: "black",\n  width: "fit-content"\n}}><IcBreadcrumbGroup appearance="light" backBreadcrumbOnly="true"><IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1" /><IcBreadcrumb current="true" pageTitle="Breadcrumb 2" href="/breadcrumb-2" /></IcBreadcrumbGroup></div>'}};const icon=()=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"foo",href:"/foo",children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"bar",href:"/bar",children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"baz",href:"/baz",current:!0,children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]})})]})});icon.storyName="Icon",icon.parameters={storySource:{source:'<div><IcBreadcrumbGroup><IcBreadcrumb pageTitle="foo" href="/foo"><svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" /></svg></IcBreadcrumb><IcBreadcrumb pageTitle="bar" href="/bar"><svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" /></svg></IcBreadcrumb><IcBreadcrumb pageTitle="baz" href="/baz" current><svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" /></svg></IcBreadcrumb></IcBreadcrumbGroup></div>'}};const collapsed=()=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(components.NX,{collapsed:!0,children:[(0,jsx_runtime.jsx)(components.qM,{pageTitle:"foo",href:"/foo"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"bar",href:"/bar"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"baz",href:"/baz"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"qux",href:"/qux"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"quxx",href:"/quxx",current:!0})]})});collapsed.storyName="Collapsed",collapsed.parameters={storySource:{source:'<div><IcBreadcrumbGroup collapsed><IcBreadcrumb pageTitle="foo" href="/foo" /><IcBreadcrumb pageTitle="bar" href="/bar" /><IcBreadcrumb pageTitle="baz" href="/baz" /><IcBreadcrumb pageTitle="qux" href="/qux" /><IcBreadcrumb pageTitle="quxx" href="/quxx" current /></IcBreadcrumbGroup></div>'}};const reactRouter=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Breadcrumbs,{}),(0,jsx_runtime.jsxs)(react_router_dist.BV,{children:[(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/",element:(0,jsx_runtime.jsx)(HomePage,{})}),(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/daily-tippers",element:(0,jsx_runtime.jsx)(DailyTippers,{})}),(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"/about",element:(0,jsx_runtime.jsx)(About,{})})]}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"10px",marginTop:"16px"},children:[(0,jsx_runtime.jsx)(components.Cu,{children:(0,jsx_runtime.jsx)("p",{children:"Click the links to switch pages and update breadcrumb states:"})}),(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.N_,{slot:"router-item",to:"/",children:(0,jsx_runtime.jsx)("p",{children:"Home"})})}),(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.N_,{slot:"router-item",to:"/daily-tippers",children:(0,jsx_runtime.jsx)("p",{children:"Daily Tippers"})})}),(0,jsx_runtime.jsx)(components.D9,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.N_,{slot:"router-item",to:"/about",children:(0,jsx_runtime.jsx)("p",{children:"About"})})})]})]});reactRouter.storyName="React Router",reactRouter.parameters={storySource:{source:'<div><Breadcrumbs /><Routes><Route path="/" element={<HomePage />} /><Route path="/daily-tippers" element={<DailyTippers />} /><Route path="/about" element={<About />} /></Routes><div style={{\n    display: "flex",\n    gap: "10px",\n    marginTop: "16px"\n  }}><IcTypography><p>{"Click the links to switch pages and update breadcrumb states:"}</p></IcTypography><IcLink><Link slot="router-item" to="/"><p>{"Home"}</p></Link></IcLink><IcLink><Link slot="router-item" to="/daily-tippers"><p>{"Daily Tippers"}</p></Link></IcLink><IcLink><Link slot="router-item" to="/about"><p>{"About"}</p></Link></IcLink></div></div>'}},reactRouter.decorators=[Story=>(0,jsx_runtime.jsx)(react_router_dist.fS,{initialEntries:["/"],children:(0,jsx_runtime.jsx)(Story,{})})];const playground=args=>(0,jsx_runtime.jsxs)(components.NX,{appearance:args.appearance,backBreadcrumbOnly:args.backBreadcrumbOnly,collapsed:args.collapsed,children:[(0,jsx_runtime.jsx)(components.qM,{current:args.current,pageTitle:args.pageTitle,href:args.href,children:(0,jsx_runtime.jsx)("svg",{slot:args.iconSlot,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"}),(0,jsx_runtime.jsx)(components.qM,{pageTitle:"Breadcrumb 3",href:"/breadcrumb-3"})]});playground.storyName="Playground",playground.argTypes={appearance:{options:["default","dark","light"],control:{type:"radio"}},iconSlot:{options:["icon",""],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <IcBreadcrumbGroup appearance={args.appearance} backBreadcrumbOnly={args.backBreadcrumbOnly} collapsed={args.collapsed}>\n        <IcBreadcrumb current={args.current} pageTitle={args.pageTitle} href={args.href}>\n          <svg slot={args.iconSlot} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor"></path>\n          </svg>\n        </IcBreadcrumb>\n        <IcBreadcrumb pageTitle="Breadcrumb 2" href="/breadcrumb-2" />\n        <IcBreadcrumb pageTitle="Breadcrumb 3" href="/breadcrumb-3" />\n      </IcBreadcrumbGroup>'}};const componentMeta={title:"Breadcrumb",component:components.NX,tags:["stories-mdx"],includeStories:["defaultStory","slottedLinks","back","appearance","icon","collapsed","reactRouter","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_breadcrumb_group_stories=componentMeta,__namedExportsOrder=["HomePage","DailyTippers","About","Breadcrumbs","defaultArgs","defaultStory","slottedLinks","back","appearance","icon","collapsed","reactRouter","playground"]}}]);
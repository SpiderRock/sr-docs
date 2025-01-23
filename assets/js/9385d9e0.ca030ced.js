"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[42344],{96833:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var a=n(74848),o=n(28453);const t={title:"Schemas",hide_table_of_contents:!0,sidebar_position:1},r=void 0,i={id:"MessageSchemas/Schema/Schema",title:"Schemas",description:"SpiderRock schemas and their related live data objects, records, messages, classes, and instances are a key part of the SpiderRock open message architecture. SpiderRock Connect has hundreds of schemas, and while most schemas and their instance objects or messages can only be viewed or received by clients, some can also be created or updated as well depending on the schema's permissions and the client's user configurations.",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/Schema.md",sourceDirName:"MessageSchemas/Schema",slug:"/MessageSchemas/Schema/",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",sidebarPosition:1,frontMatter:{title:"Schemas",hide_table_of_contents:!0,sidebar_position:1},sidebar:"messageSchemasSidebar",next:{title:"Topics",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/"}},c={},d=[];function h(e){const s={a:"a",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["SpiderRock schemas and their related live data objects, records, messages, classes, and instances are a key part of the SpiderRock ",(0,a.jsx)(s.a,{href:"/docs/8.5.1.3/Documentation/PlatformAPIs/Overview",children:"open message architecture"}),". SpiderRock Connect has hundreds of schemas, and while most schemas and their instance objects or messages can only be viewed or received by clients, some can also be created or updated as well depending on the schema's permissions and the client's user configurations."]}),"\n",(0,a.jsx)(s.p,{children:"The schemas themselves are organized into topics for convenience."}),"\n",(0,a.jsxs)(s.p,{children:["Schemas are also assigned either an ",(0,a.jsx)(s.strong,{children:"MLink Token"})," or a ",(0,a.jsx)(s.strong,{children:"SRSE Product Code"})," which is part of how they are provisioned. When you connect through one of our APIs (MLink or SRSE) your access to messages or records will be restricted to only those for which an associated MLink Token or SRSE Product Code has been provisioned for your username."]}),"\n",(0,a.jsx)(s.p,{children:"Some schemas contain market and related data that is distributed under license from an exchange or other market data organization or vendor. Individual message or record instances will only be available if you have the associated access codes provisioned for your username."}),"\n",(0,a.jsxs)(s.p,{children:["Finally, many messages or records contain private client information (the schema will either have an ",(0,a.jsx)(s.em,{children:"accnt"})," or ",(0,a.jsx)(s.em,{children:"clientFirm"})," field in the message). These messages or records are only visible if your username is provisioned to access them."]}),"\n",(0,a.jsx)(s.p,{children:"The best way to understand SpiderRock schemas if you are approaching them for the first time is to explore this Schema site. Gain access to one of our MLink or SRSE APIs and splunk around."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"NOTE:"})," Almost all of the information in the ",(0,a.jsx)(s.strong,{children:"Message Schemas"})," section of this site is code generated and might change as we release newer versions of the system.  As a result, a best practice would be, when writing code against our APIs, to use techniques that would not be 'fragile' to simple schema changes such as adding a field to a schema or a value to an enum."]}),"\n",(0,a.jsxs)(s.p,{children:["Happy exploring! ",(0,a.jsx)("br",{})," The SpiderRock Team"]})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>i});var a=n(96540);const o={},t=a.createContext(o);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);
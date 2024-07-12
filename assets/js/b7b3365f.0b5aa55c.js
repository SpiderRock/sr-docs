"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82093],{4160:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=a(74848),t=a(28453);const n={title:"Schemas",hide_table_of_contents:!0,sidebar_position:1},r=void 0,c={id:"MessageSchemas/Schema/Schema",title:"Schemas",description:"SpiderRock schemas and their related live data objects, records, messages, classes, and instances are a key part of the SpiderRock open message architecture.  The platform has hundreds of schemas. Most schemas and their instance objects or messages can only be viewed or received by clients but some can be created or updated as well.",source:"@site/docs/MessageSchemas/Schema/Schema.md",sourceDirName:"MessageSchemas/Schema",slug:"/MessageSchemas/Schema/",permalink:"/docs/MessageSchemas/Schema/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Schemas",hide_table_of_contents:!0,sidebar_position:1},sidebar:"messageSchemasSidebar",next:{title:"Topics",permalink:"/docs/MessageSchemas/Schema/Topics/"}},i={},d=[];function h(e){const s={a:"a",blockquote:"blockquote",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["SpiderRock schemas and their related live data objects, records, messages, classes, and instances are a key part of the SpiderRock ",(0,o.jsx)(s.a,{href:"/docs/Documentation/PlatformAPIs/Overview",children:"open message architecture"}),".  The platform has hundreds of schemas. Most schemas and their instance objects or messages can only be viewed or received by clients but some can be created or updated as well."]}),"\n",(0,o.jsx)(s.p,{children:"The schemas themselves are organized into topics for convenience."}),"\n",(0,o.jsxs)(s.p,{children:["Schemas are also assigned either an ",(0,o.jsx)(s.strong,{children:"MLink Token"})," or a ",(0,o.jsx)(s.strong,{children:"SRSE Product Code"})," which is part of how they are provisioned. When you connect through one of our APIs (MLink or SRSE) your access to messages or records will be restricted to only those for which an associated MLink Token or SRSE Product Code has been provisioned for your user name."]}),"\n",(0,o.jsx)(s.p,{children:"Some schemas contain market and related data that is distributed under license from an exchange or other market data organization or vendor. Individual message or record instances only be available if you have the associated access codes provisioned for your user name."}),"\n",(0,o.jsx)(s.p,{children:"Finally, many messages or records contain client private information (schema will either have an accnt or clientFirm field in the message). These messages or records are only visible if your user name is provisioned to access them."}),"\n",(0,o.jsx)(s.p,{children:"The best way to understand SpiderRock schemas if you are approaching them for the first time is to to explore. Explore this site or get accesss to one of our MLink or SRSE APIs and splunk around."}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Almost all of the information in the ",(0,o.jsx)(s.strong,{children:"Message Schemas"})," section of this site is code generated and might change between as we release newer versions of the system.  As a result, a best practice would be, when writing code against our APIs, to use techniques that would not be 'fragile' to simple schema changes such as adding a field to a schema or a value to an enum."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Happy exploring! ",(0,o.jsx)("br",{})," The SpiderRock Team"]})]})}function l(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>c});var o=a(96540);const t={},n=o.createContext(t);function r(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);
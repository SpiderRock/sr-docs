"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["74120"],{66453:function(e,s,n){n.r(s),n.d(s,{default:()=>l,frontMatter:()=>r,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"MessageSchemas/Schema/Schema","title":"Schemas","description":"SpiderRock schemas and their related live data objects, records, messages, classes, and instances are a key part of the SpiderRock open message architecture. SpiderRock Connect has hundreds of schemas, and while most schemas and their instance objects or messages can only be viewed or received by clients, some can also be created or updated as well depending on the schema\'s permissions and the client\'s user configurations.","source":"@site/docs/MessageSchemas/Schema/Schema.md","sourceDirName":"MessageSchemas/Schema","slug":"/MessageSchemas/Schema/","permalink":"/docs/next/MessageSchemas/Schema/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Schemas","hide_table_of_contents":true,"sidebar_position":1},"sidebar":"messageSchemasSidebar","next":{"title":"Topics","permalink":"/docs/next/MessageSchemas/Schema/Topics/"}}'),t=n("52676"),o=n("91503");let r={title:"Schemas",hide_table_of_contents:!0,sidebar_position:1},i=void 0,c={},d=[];function h(e){let s={a:"a",em:"em",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["SpiderRock schemas and their related live data objects, records, messages, classes, and instances are a key part of the SpiderRock ",(0,t.jsx)(s.a,{href:"/docs/next/Documentation/PlatformAPIs/Overview",children:"open message architecture"}),". SpiderRock Connect has hundreds of schemas, and while most schemas and their instance objects or messages can only be viewed or received by clients, some can also be created or updated as well depending on the schema's permissions and the client's user configurations."]}),"\n",(0,t.jsx)(s.p,{children:"The schemas themselves are organized into topics for convenience."}),"\n",(0,t.jsxs)(s.p,{children:["Schemas are also assigned either an ",(0,t.jsx)(s.strong,{children:"MLink Token"})," or a ",(0,t.jsx)(s.strong,{children:"SRSE Product Code"})," which is part of how they are provisioned. When you connect through one of our APIs (MLink or SRSE) your access to messages or records will be restricted to only those for which an associated MLink Token or SRSE Product Code has been provisioned for your username."]}),"\n",(0,t.jsx)(s.p,{children:"Some schemas contain market and related data that is distributed under license from an exchange or other market data organization or vendor. Individual message or record instances will only be available if you have the associated access codes provisioned for your username."}),"\n",(0,t.jsxs)(s.p,{children:["Finally, many messages or records contain private client information (the schema will either have an ",(0,t.jsx)(s.em,{children:"accnt"})," or ",(0,t.jsx)(s.em,{children:"clientFirm"})," field in the message). These messages or records are only visible if your username is provisioned to access them."]}),"\n",(0,t.jsx)(s.p,{children:"The best way to understand SpiderRock schemas if you are approaching them for the first time is to explore this Schema site. Gain access to one of our MLink or SRSE APIs and splunk around."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"NOTE:"})," Almost all of the information in the ",(0,t.jsx)(s.strong,{children:"Message Schemas"})," section of this site is code generated and might change as we release newer versions of the system.  As a result, a best practice would be, when writing code against our APIs, to use techniques that would not be 'fragile' to simple schema changes such as adding a field to a schema or a value to an enum."]}),"\n",(0,t.jsxs)(s.p,{children:["Happy exploring! ",(0,t.jsx)("br",{})," The SpiderRock Team"]})]})}function l(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},91503:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return r}});var a=n(75271);let t={},o=a.createContext(t);function r(e){let s=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);
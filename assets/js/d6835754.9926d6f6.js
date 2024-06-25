"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74293],{31131:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=s(74848),r=s(28453);const i={title:"SpdrExecutionAllocationStatus"},d="Schema: SpdrExecutionAllocationStatus (ID: 3715)",c={id:"Schema/Topics/order-allocation/SpdrExecutionAllocationStatus",title:"SpdrExecutionAllocationStatus",description:"META DATA",source:"@site/docs/Schema/Topics/3695-order-allocation/SpdrExecutionAllocationStatus.md",sourceDirName:"Schema/Topics/3695-order-allocation",slug:"/Schema/Topics/order-allocation/SpdrExecutionAllocationStatus",permalink:"/docs/Schema/Topics/order-allocation/SpdrExecutionAllocationStatus",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrExecutionAllocationStatus"},sidebar:"schemaSidebar",previous:{title:"SpdrExecutionAllocation",permalink:"/docs/Schema/Topics/order-allocation/SpdrExecutionAllocation"},next:{title:"SpdrOmniOrder",permalink:"/docs/Schema/Topics/order-allocation/SpdrOmniOrder"}},l={},o=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-spdrexecutionallocationstatus-id-3715",children:["Schema: SpdrExecutionAllocationStatus ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 3715)"})]}),"\n",(0,n.jsxs)("div",{className:"single-message-meta",children:[(0,n.jsx)(t.h3,{id:"meta-data",children:"META DATA"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SystemData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"order-allocation"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-primarykey",children:[(0,n.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"allocNumber"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"unique number for this allocation request"})]})})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-body",children:[(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"allocDetail"}),(0,n.jsx)(t.td,{children:"text2"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"allocStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AllocStatus",children:"enum : AllocStatus"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"modifiedBy"}),(0,n.jsx)(t.td,{children:"string(24)"}),(0,n.jsx)(t.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"modifiedIn"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"secKey"}),(0,n.jsx)(t.td,{children:"OptionKey"}),(0,n.jsx)(t.td,{children:"security key (stock, future, or option)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"secType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,n.jsx)(t.td,{children:"security type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"timestamp of last modification"})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var n=s(96540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
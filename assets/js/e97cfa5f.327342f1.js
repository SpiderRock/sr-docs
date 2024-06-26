"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21209],{74122:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>x});var d=t(74848),s=t(28453);const n={title:"SpdrFixParentExecution"},i="Schema: SpdrFixParentExecution (ID: 4005)",c={id:"Schemas/Schema/Topics/parent-orders/SpdrFixParentExecution",title:"SpdrFixParentExecution",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/3985-parent-orders/SpdrFixParentExecution.md",sourceDirName:"Schemas/Schema/Topics/3985-parent-orders",slug:"/Schemas/Schema/Topics/parent-orders/SpdrFixParentExecution",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrFixParentExecution",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrFixParentExecution"},sidebar:"schemaSidebar",previous:{title:"SpdrFixParentCancel",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrFixParentCancel"},next:{title:"SpdrFixParentReject",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrFixParentReject"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"schema-spdrfixparentexecution-id-4005",children:["Schema: SpdrFixParentExecution ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 4005)"})]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"parent-orders"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SRSE Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fillNumber"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uniqueMsgID"}),(0,d.jsx)(r.td,{children:"string(30)"}),(0,d.jsx)(r.td,{children:"internal stream unique messageId.  Usually either an execId, clOrdId, or crossId.   Unique across drop stream (drop server and client firm)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"serverCode"}),(0,d.jsx)(r.td,{children:"string(32)"}),(0,d.jsx)(r.td,{children:"SR Drop Server Code"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"SR Client Firm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"streamType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/StreamType",children:"enum : StreamType"})}),(0,d.jsx)(r.td,{})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(r.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"SR internal account (used for permissioning/routing)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"avgFillPrice"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"from SpdrParentExecution.avgFillPrice"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"baseParentNumber"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{children:"SpiderRock base parent number"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clOrdId"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{children:"SR Child Order Number (matches SpdrChildOrder.pkey.clOrdId)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cumFillQty"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"from SpdrParentExecution.cumFillQty"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"execStatus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ExecStatus",children:"enum : ExecStatus"})}),(0,d.jsx)(r.td,{children:"SpiderRock execution status (Fill,Bust,Correct)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fillVersion"}),(0,d.jsx)(r.td,{children:"byte"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixAvgFillPx"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"stream avgPx<6>"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixClOrdId"}),(0,d.jsx)(r.td,{children:"string(32)"}),(0,d.jsx)(r.td,{children:"stream clOrdID<11>"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixCrossId"}),(0,d.jsx)(r.td,{children:"string(32)"}),(0,d.jsx)(r.td,{children:"stream crossID<548>"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixCumFillQty"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"stream cumQty<14>"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixExecId"}),(0,d.jsx)(r.td,{children:"string(32)"}),(0,d.jsx)(r.td,{children:"stream execID<17>"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixExecType"}),(0,d.jsx)(r.td,{children:"string(4)"}),(0,d.jsx)(r.td,{children:"stream execType<150>"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixOrdStatus"}),(0,d.jsx)(r.td,{children:"string(4)"}),(0,d.jsx)(r.td,{children:"stream ordStatus<39>"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixTransactDttm"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{children:"stream transactTime<60>"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"lastFillDttm"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"lastFillPrice"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"lastFillQty"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"netTimestamp"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{children:"drop gateway arrival timestamp"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"parentNumber"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{children:"SpiderRock parent number"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"side"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{})]})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var d=t(96540);const s={},n=d.createContext(s);function i(e){const r=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(n.Provider,{value:r},e.children)}}}]);
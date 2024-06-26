"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[20885],{53966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>n,toc:()=>o});var s=r(74848),d=r(28453);const i={title:"SpdrAvailExecAllocation"},l="Schema: SpdrAvailExecAllocation (ID: 3705)",n={id:"Schemas/Schema/Topics/order-allocation/SpdrAvailExecAllocation",title:"SpdrAvailExecAllocation",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/3695-order-allocation/SpdrAvailExecAllocation.md",sourceDirName:"Schemas/Schema/Topics/3695-order-allocation",slug:"/Schemas/Schema/Topics/order-allocation/SpdrAvailExecAllocation",permalink:"/docs/Schemas/Schema/Topics/order-allocation/SpdrAvailExecAllocation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrAvailExecAllocation"},sidebar:"schemaSidebar",previous:{title:"SpdrAllocationNoticeStatus",permalink:"/docs/Schemas/Schema/Topics/order-allocation/SpdrAllocationNoticeStatus"},next:{title:"SpdrExecutionAllocation",permalink:"/docs/Schemas/Schema/Topics/order-allocation/SpdrExecutionAllocation"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-spdravailexecallocation-id-3705",children:["Schema: SpdrAvailExecAllocation ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3705)"})]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"order-allocation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"availExecNumber"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"unique number for this message"})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/ExecAllocStatus",children:"enum : ExecAllocStatus"})}),(0,s.jsx)(t.td,{children:"allocation status"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"avgFillPrc"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"average fill price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"baseParentNumber"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"SR BaseParentNumber these executions belong to (can be zero if executions are drop)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"SR client firm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cumFillQty"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"net cumFillQty (total for the day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"groupingCode"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"unique broker code"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mlegLegKey"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"omniAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"omnibus accnt (SR accnt)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(t.td,{children:"order side (always buy for MLEG orders)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"positionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,s.jsx)(t.td,{children:"positionType (None if not equity option)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey"}),(0,s.jsx)(t.td,{children:"OptionKey"}),(0,s.jsx)(t.td,{children:"security key (stock, future, or option)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(t.td,{children:"security type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spdrSource"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,s.jsx)(t.td,{children:"parent order source"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ssaleFlag"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,s.jsx)(t.td,{children:"ssale flag (None if not stock)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]}),(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,s.jsx)(t.p,{children:"ChildOrders"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clOrdId"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"childOrders in the above allocation"})]})})]})]})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>n});var s=r(96540);const d={},i=s.createContext(d);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
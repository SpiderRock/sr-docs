"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6812],{44890:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=d(74848),s=d(28453);const n={title:"SpdrOmniOrder"},i="Schema: SpdrOmniOrder (ID: 3720)",l={id:"Schema/Topics/order-allocation/SpdrOmniOrder",title:"SpdrOmniOrder",description:"META DATA",source:"@site/docs/Schema/Topics/3695-order-allocation/SpdrOmniOrder.md",sourceDirName:"Schema/Topics/3695-order-allocation",slug:"/Schema/Topics/order-allocation/SpdrOmniOrder",permalink:"/docs/Schema/Topics/order-allocation/SpdrOmniOrder",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrOmniOrder"},sidebar:"schemaSidebar",previous:{title:"SpdrExecutionAllocationStatus",permalink:"/docs/Schema/Topics/order-allocation/SpdrExecutionAllocationStatus"},next:{title:"SpdrParentAllocation",permalink:"/docs/Schema/Topics/order-allocation/SpdrParentAllocation"}},c={},h=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function o(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-spdromniorder-id-3720",children:["Schema: SpdrOmniOrder ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3720)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"meta-data",children:"META DATA"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SystemData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"order-allocation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"omniOrderNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"unique number for this message"})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"allocStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/OmniAllocStatus",children:"enum : OmniAllocStatus"})}),(0,t.jsx)(r.td,{children:"allocation status"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgFillPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"average fill price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"baseParentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"SR BaseParentNumber these executions belong to (can be zero if executions are drop)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR client firm"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumFillQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"net cumFillQty (total for the day)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupingCode"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"unique broker code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mlegLegKey"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"omniAccnt"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"omnibus accnt (SR accnt)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderSide"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(r.td,{children:"order side (always buy for MLEG orders)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"positionType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,t.jsx)(r.td,{children:"positionType (None if not equity option)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secKey"}),(0,t.jsx)(r.td,{children:"OptionKey"}),(0,t.jsx)(r.td,{children:"security key (stock, future, or option)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(r.td,{children:"security type"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(r.td,{children:"parent order source"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ssaleFlag"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,t.jsx)(r.td,{children:"ssale flag (None if not stock)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]})]})]}),(0,t.jsx)(r.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(r.p,{children:"ChildOrders"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clOrdId"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"childOrders in the above allocation"})]})})]})]})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>l});var t=d(96540);const s={},n=t.createContext(s);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
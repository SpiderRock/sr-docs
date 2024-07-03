"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39169],{18727:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var t=d(74848),r=d(28453);const i={title:"SpdrAvailExecAllocation"},l="Schema: SpdrAvailExecAllocation (ID: 3705)",n={id:"MessageSchemas/Schema/Topics/order-allocation/SpdrAvailExecAllocation",title:"SpdrAvailExecAllocation",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/3695-order-allocation/SpdrAvailExecAllocation.md",sourceDirName:"MessageSchemas/Schema/Topics/3695-order-allocation",slug:"/MessageSchemas/Schema/Topics/order-allocation/SpdrAvailExecAllocation",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrAvailExecAllocation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrAvailExecAllocation"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrAllocationNoticeStatus",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNoticeStatus"},next:{title:"SpdrExecutionAllocation",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrExecutionAllocation"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-spdravailexecallocation-id-3705",children:["Schema: SpdrAvailExecAllocation ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3705)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"3695-order-allocation"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10"}),(0,t.jsx)(s.td,{children:"availExecNumber"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"unique number for this message"})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"136"}),(0,t.jsx)(s.td,{children:"allocStatus"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ExecAllocStatus",children:"enum : ExecAllocStatus"})}),(0,t.jsx)(s.td,{children:"allocation status"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"133"}),(0,t.jsx)(s.td,{children:"avgFillPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"average fill price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"127"}),(0,t.jsx)(s.td,{children:"baseParentNumber"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"SR BaseParentNumber these executions belong to (can be zero if executions are drop)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"146"}),(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"SR client firm"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"130"}),(0,t.jsx)(s.td,{children:"cumFillQty"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"net cumFillQty (total for the day)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"121"}),(0,t.jsx)(s.td,{children:"groupingCode"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"unique broker code"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"124"}),(0,t.jsx)(s.td,{children:"mlegLegKey"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"100"}),(0,t.jsx)(s.td,{children:"omniAccnt"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"omnibus accnt (SR accnt)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"109"}),(0,t.jsx)(s.td,{children:"orderSide"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(s.td,{children:"order side (always buy for MLEG orders)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"115"}),(0,t.jsx)(s.td,{children:"positionType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,t.jsx)(s.td,{children:"positionType (None if not equity option)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"103"}),(0,t.jsx)(s.td,{children:"secKey"}),(0,t.jsx)(s.td,{children:"OptionKey"}),(0,t.jsx)(s.td,{children:"security key (stock, future, or option)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"106"}),(0,t.jsx)(s.td,{children:"secType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(s.td,{children:"security type"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"118"}),(0,t.jsx)(s.td,{children:"spdrSource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(s.td,{children:"parent order source"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"112"}),(0,t.jsx)(s.td,{children:"ssaleFlag"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,t.jsx)(s.td,{children:"ssale flag (None if not stock)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"139"}),(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{})]})]})]}),(0,t.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(s.p,{children:"ChildOrders"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"145"}),(0,t.jsx)(s.td,{children:"clOrdId"}),(0,t.jsx)(s.td,{children:"long"})]})})]})]})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>l,x:()=>n});var t=d(96540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
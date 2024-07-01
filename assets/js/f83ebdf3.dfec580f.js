"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[59358],{6957:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var t=r(74848),d=r(28453);const n={title:"SpdrParentAllocation"},i="Schema: SpdrParentAllocation (ID: 3725)",l={id:"MessageSchemas/Schema/Topics/order-allocation/SpdrParentAllocation",title:"SpdrParentAllocation",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/3695-order-allocation/SpdrParentAllocation.md",sourceDirName:"MessageSchemas/Schema/Topics/3695-order-allocation",slug:"/MessageSchemas/Schema/Topics/order-allocation/SpdrParentAllocation",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrParentAllocation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentAllocation"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrOmniOrder",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrOmniOrder"},next:{title:"SpdrParentAllocationStatus",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrParentAllocationStatus"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-spdrparentallocation-id-3725",children:["Schema: SpdrParentAllocation ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3725)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"order-allocation"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"baseParentNumber"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"allocationRule"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AllocationRule",children:"enum : AllocationRule"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"SR client firm"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"groupingCode"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"unique broker code"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"mlegLegKey"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"modifiedBy"}),(0,t.jsx)(s.td,{children:"string(24)"}),(0,t.jsx)(s.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"modifiedIn"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"omniAccnt"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"omnibus accnt (SR accnt)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"orderSide"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(s.td,{children:"order side (always buy for MLEG orders)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"positionType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,t.jsx)(s.td,{children:"positionType (None if not equity option)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"readyToSend"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey"}),(0,t.jsx)(s.td,{children:"OptionKey"}),(0,t.jsx)(s.td,{children:"security key (stock, future, or option)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(s.td,{children:"security type"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spdrSource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(s.td,{children:"parent order source"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ssaleFlag"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,t.jsx)(s.td,{children:"ssale flag (None if not stock)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"timestamp of last modification"})]})]})]}),(0,t.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(s.p,{children:"Fragments"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"allocAccnt"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"target SR alloc accnt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"allocFraction"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"target alloc size (if parent order 100% fills)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"allocSize"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"target alloc size (assuming parent order 100% fills)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"SR client firm"})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var t=r(96540);const d={},n=t.createContext(d);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);
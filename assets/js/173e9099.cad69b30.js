"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9330],{97331:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var d=t(74848),n=t(28453);const s={title:"SpdrParentAllocation"},i="Message: SpdrParentAllocation (ID: 3725)",l={id:"Schema/Topics/order-allocation/SpdrParentAllocation",title:"SpdrParentAllocation",description:"META DATA  (Topic: order-allocation )",source:"@site/docs/Schema/Topics/3695-order-allocation/SpdrParentAllocation.md",sourceDirName:"Schema/Topics/3695-order-allocation",slug:"/Schema/Topics/order-allocation/SpdrParentAllocation",permalink:"/docs/Schema/Topics/order-allocation/SpdrParentAllocation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentAllocation"},sidebar:"schemaSidebar",previous:{title:"SpdrOmniOrder",permalink:"/docs/Schema/Topics/order-allocation/SpdrOmniOrder"},next:{title:"SpdrParentAllocationStatus",permalink:"/docs/Schema/Topics/order-allocation/SpdrParentAllocationStatus"}},c={},o=[{value:"META DATA  (Topic: order-allocation )",id:"meta-data--topic-order-allocation-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"message-spdrparentallocation-id-3725",children:["Message: SpdrParentAllocation ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 3725)"})]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(r.h3,{id:"meta-data--topic-order-allocation-",children:"META DATA  (Topic: order-allocation )"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SRSE Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"baseParentNumber"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(r.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"allocationRule"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AllocationRule",children:"enum : AllocationRule"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"SR client firm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"groupingCode"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{children:"unique broker code"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mlegLegKey"}),(0,d.jsx)(r.td,{children:"text1"}),(0,d.jsx)(r.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"modifiedBy"}),(0,d.jsx)(r.td,{children:"string(24)"}),(0,d.jsx)(r.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"modifiedIn"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"omniAccnt"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"omnibus accnt (SR accnt)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderSide"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,d.jsx)(r.td,{children:"order side (always buy for MLEG orders)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"positionType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,d.jsx)(r.td,{children:"positionType (None if not equity option)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"readyToSend"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(r.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{children:"security key (stock, future, or option)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,d.jsx)(r.td,{children:"security type"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,d.jsx)(r.td,{children:"parent order source"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,d.jsx)(r.td,{children:"ssale flag (None if not stock)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{children:"timestamp of last modification"})]})]})]}),(0,d.jsx)(r.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,d.jsx)(r.p,{children:"Fragments"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"allocAccnt"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"target SR alloc accnt"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"allocFraction"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"target alloc size (if parent order 100% fills)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"allocSize"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"target alloc size (assuming parent order 100% fills)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"SR client firm"})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var d=t(96540);const n={},s=d.createContext(n);function i(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);
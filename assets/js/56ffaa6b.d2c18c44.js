"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13844],{13157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var d=n(74848),i=n(28453);const s={title:"SpdrExecutionAllocation"},r="Schema: SpdrExecutionAllocation (ID: 3710)",l={id:"Schema/Topics/order-allocation/SpdrExecutionAllocation",title:"SpdrExecutionAllocation",description:"META DATA",source:"@site/docs/Schema/Topics/3695-order-allocation/SpdrExecutionAllocation.md",sourceDirName:"Schema/Topics/3695-order-allocation",slug:"/Schema/Topics/order-allocation/SpdrExecutionAllocation",permalink:"/docs/Schema/Topics/order-allocation/SpdrExecutionAllocation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrExecutionAllocation"},sidebar:"schemaSidebar",previous:{title:"SpdrAvailExecAllocation",permalink:"/docs/Schema/Topics/order-allocation/SpdrAvailExecAllocation"},next:{title:"SpdrExecutionAllocationStatus",permalink:"/docs/Schema/Topics/order-allocation/SpdrExecutionAllocationStatus"}},c={},o=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-spdrexecutionallocation-id-3710",children:["Schema: SpdrExecutionAllocation ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 3710)"})]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"meta-data",children:"META DATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"order-allocation"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"allocNumber"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"unique number for this allocation request"})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"allocationRule"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AllocationRule",children:"enum : AllocationRule"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"baseParentNumber"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"Filled only when generated from SpdrParentAllocation. 0 otherwise"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{children:"SR client firm"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mlegLegKey"}),(0,d.jsx)(t.td,{children:"text1"}),(0,d.jsx)(t.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modifiedBy"}),(0,d.jsx)(t.td,{children:"string(24)"}),(0,d.jsx)(t.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modifiedIn"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"omniAccnt"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{children:"omnibus accnt (SR accnt)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderSide"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,d.jsx)(t.td,{children:"order side (always buy for MLEG orders)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"positionType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,d.jsx)(t.td,{children:"positionType (None if not equity option)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"readyToSend"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsx)(t.td,{children:"OptionKey"}),(0,d.jsx)(t.td,{children:"security key (stock, future, or option)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,d.jsx)(t.td,{children:"security type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ssaleFlag"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,d.jsx)(t.td,{children:"ssale flag (None if not stock)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{children:"timestamp of last modification"})]})]})]}),(0,d.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,d.jsx)(t.p,{children:"ChildOrders"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clOrdId"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{})]})})]}),(0,d.jsx)(t.p,{children:"Fragments"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"allocAccnt"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{children:"SR alloc accnt"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"allocSize"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"target alloc size"})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var d=n(96540);const i={},s=d.createContext(i);function r(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);
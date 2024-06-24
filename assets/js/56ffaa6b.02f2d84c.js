"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13844],{13157:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=i(74848),n=i(28453);const d={title:"SpdrExecutionAllocation"},r="Message: SpdrExecutionAllocation (ID: 3710)",l={id:"Schema/Topics/order-allocation/SpdrExecutionAllocation",title:"SpdrExecutionAllocation",description:"META DATA  (Topic: order-allocation )",source:"@site/docs/Schema/Topics/3695-order-allocation/SpdrExecutionAllocation.md",sourceDirName:"Schema/Topics/3695-order-allocation",slug:"/Schema/Topics/order-allocation/SpdrExecutionAllocation",permalink:"/sr-docs/docs/Schema/Topics/order-allocation/SpdrExecutionAllocation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrExecutionAllocation"},sidebar:"schemaSidebar",previous:{title:"SpdrAvailExecAllocation",permalink:"/sr-docs/docs/Schema/Topics/order-allocation/SpdrAvailExecAllocation"},next:{title:"SpdrExecutionAllocationStatus",permalink:"/sr-docs/docs/Schema/Topics/order-allocation/SpdrExecutionAllocationStatus"}},c={},o=[{value:"META DATA  (Topic: order-allocation )",id:"meta-data--topic-order-allocation-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"message-spdrexecutionallocation-id-3710",children:["Message: SpdrExecutionAllocation ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3710)"})]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"meta-data--topic-order-allocation-",children:"META DATA  (Topic: order-allocation )"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocNumber"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"unique number for this allocation request"})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocationRule"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AllocationRule",children:"enum : AllocationRule"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"baseParentNumber"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"Filled only when generated from SpdrParentAllocation. 0 otherwise"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"SR client firm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mlegLegKey"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedBy"}),(0,s.jsx)(t.td,{children:"string(24)"}),(0,s.jsx)(t.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedIn"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"omniAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"omnibus accnt (SR accnt)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(t.td,{children:"order side (always buy for MLEG orders)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"positionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,s.jsx)(t.td,{children:"positionType (None if not equity option)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"readyToSend"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey"}),(0,s.jsx)(t.td,{children:"OptionKey"}),(0,s.jsx)(t.td,{children:"security key (stock, future, or option)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(t.td,{children:"security type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ssaleFlag"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,s.jsx)(t.td,{children:"ssale flag (None if not stock)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"timestamp of last modification"})]})]})]}),(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,s.jsx)(t.p,{children:"ChildOrders"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clOrdId"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]})})]}),(0,s.jsx)(t.p,{children:"Fragments"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"SR alloc accnt"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"target alloc size"})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var s=i(96540);const n={},d=s.createContext(n);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);
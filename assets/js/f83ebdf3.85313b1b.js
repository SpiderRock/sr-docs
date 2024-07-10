"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[59358],{6957:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=d(74848),n=d(28453);const s={title:"SpdrParentAllocation"},i="Schema: SpdrParentAllocation (ID: 3725)",c={id:"MessageSchemas/Schema/Topics/order-allocation/SpdrParentAllocation",title:"SpdrParentAllocation",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/3695-order-allocation/SpdrParentAllocation.md",sourceDirName:"MessageSchemas/Schema/Topics/3695-order-allocation",slug:"/MessageSchemas/Schema/Topics/order-allocation/SpdrParentAllocation",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrParentAllocation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentAllocation"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrOmniOrder",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrOmniOrder"},next:{title:"SpdrParentAllocationStatus",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrParentAllocationStatus"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-spdrparentallocation-id-3725",children:["Schema: SpdrParentAllocation ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3725)"})]}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"3695-order-allocation"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"baseParentNumber"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"omniAccnt"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{children:"omnibus accnt (SR accnt)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"152"}),(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{children:"SR client firm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"secKey"}),(0,r.jsx)(t.td,{children:"OptionKey"}),(0,r.jsx)(t.td,{children:"security key (stock, future, or option)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"secType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(t.td,{children:"security type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"mlegLegKey"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"orderSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(t.td,{children:"order side (always buy for MLEG orders)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"ssaleFlag"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(t.td,{children:"ssale flag (None if not stock)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"positionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,r.jsx)(t.td,{children:"positionType (None if not equity option)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"spdrSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,r.jsx)(t.td,{children:"parent order source"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"groupingCode"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"unique broker code"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"allocationRule"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AllocationRule",children:"enum : AllocationRule"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"readyToSend"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"145"}),(0,r.jsx)(t.td,{children:"modifiedBy"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"148"}),(0,r.jsx)(t.td,{children:"modifiedIn"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"151"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,r.jsx)(t.p,{children:"Fragments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"allocAccnt"}),(0,r.jsx)(t.td,{children:"string(16)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"153"}),(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"string(16)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"allocFraction"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"142"}),(0,r.jsx)(t.td,{children:"allocSize"}),(0,r.jsx)(t.td,{children:"int"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>i,x:()=>c});var r=d(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
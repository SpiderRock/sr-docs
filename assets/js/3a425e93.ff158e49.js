"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[57571],{20805:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=d(74848),r=d(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/SpdrExecutionAllocation",title:"SpdrExecutionAllocation",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/SpdrExecutionAllocation.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrExchRiskReset",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/"},next:{title:"SpdrExecutionAllocationStatus",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocationStatus/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(e){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"3695-order-allocation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT,INSERT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocNumber"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"unique number for this allocation request"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"baseParentNumber"}),(0,s.jsx)(t.td,{children:"CHAR(19)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Filled only when generated from SpdrParentAllocation 0 otherwise"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"omniAccnt"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"omnibus accnt SR accnt"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"SR client firm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_at"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_ts"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_yr"}),(0,s.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_mn"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_dy"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_xx"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_cp"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mlegLegKey"}),(0,s.jsx)(t.td,{children:"TINYTEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"secKeyStringKeylegRatiosidepositionEffect secKeyStringKeylegRatiosidepositionEffect"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderSide"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"order side always buy for MLEG orders"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ssaleFlag"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"ssale flag None if not stock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"positionType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"positionType None if not equity option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocationRule"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"readyToSend"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedBy"}),(0,s.jsx)(t.td,{children:"VARCHAR(24)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedIn"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"timestamp of last modification"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ChildOrdersList"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FragmentsList"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocNumber"}),(0,s.jsx)(t.td,{children:"1"})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>c});var s=d(96540);const r={},i=s.createContext(r);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
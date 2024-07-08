"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[57571],{20805:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var s=t(74848),r=t(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/SpdrExecutionAllocation",title:"SpdrExecutionAllocation",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/SpdrExecutionAllocation.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrExchRiskReset",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/"},next:{title:"SpdrExecutionAllocationStatus",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocationStatus/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Attribute"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Topic"}),(0,s.jsx)(d.td,{children:"3695-order-allocation"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"MLink Token"}),(0,s.jsx)(d.td,{children:"SystemData"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Product"}),(0,s.jsx)(d.td,{children:"SRTrade"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accessType"}),(0,s.jsx)(d.td,{children:"SELECT,INSERT"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Key"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"allocNumber"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"unique number for this allocation request"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"baseParentNumber"}),(0,s.jsx)(d.td,{children:"CHAR(19)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Filled only when generated from SpdrParentAllocation 0 otherwise"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"omniAccnt"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"omnibus accnt SR accnt"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"clientFirm"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"SR client firm"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_at"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_ts"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_tk"}),(0,s.jsx)(d.td,{children:"VARCHAR(12)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_yr"}),(0,s.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_mn"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_dy"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_xx"}),(0,s.jsx)(d.td,{children:"DOUBLE"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_cp"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secType"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"security type"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"mlegLegKey"}),(0,s.jsx)(d.td,{children:"VARCHAR(255)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"secKeyStringKeylegRatiosidepositionEffect secKeyStringKeylegRatiosidepositionEffect"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"orderSide"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"order side always buy for MLEG orders"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ssaleFlag"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"ssale flag None if not stock"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"positionType"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"positionType None if not equity option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"allocationRule"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"readyToSend"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"modifiedBy"}),(0,s.jsx)(d.td,{children:"VARCHAR(24)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"modifiedIn"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"timestamp"}),(0,s.jsx)(d.td,{children:"DATETIME(6)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"timestamp of last modification"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ChildOrdersList"}),(0,s.jsx)(d.td,{children:"JSON"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"FragmentsList"}),(0,s.jsx)(d.td,{children:"JSON"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_isDeleted"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromRotation"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromCache"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromApplication"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromBridge"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_timeSent"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_timeReceived"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_netTimeReceived"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sysEnvironmentOrigin"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sysRealmOrigin"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sourceId"}),(0,s.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Sequence"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"allocNumber"}),(0,s.jsx)(d.td,{children:"1"})]})})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function n(e){const d=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:d},e.children)}}}]);
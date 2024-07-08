"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[18475],{53110:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>x});var r=t(74848),s=t(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder/SpdrOmniOrder",title:"SpdrOmniOrder",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder/SpdrOmniOrder.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrMLegBrkrState",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrState/"},next:{title:"SpdrParentAllocation",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentAllocation/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"3695-order-allocation"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRTrade"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"omniOrderNumber"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"unique number for this message"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"omniAccnt"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"omnibus accnt SR accnt"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"SR client firm"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_at"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_ts"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_xx"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_cp"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"security type"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderSide"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"order side always buy for MLEG orders"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"ssale flag None if not stock"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"positionType"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"positionType None if not equity option"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"spdrSource"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"parent order source"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"groupingCode"}),(0,r.jsx)(d.td,{children:"CHAR(19)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"unique broker code"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"baseParentNumber"}),(0,r.jsx)(d.td,{children:"CHAR(19)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"SR BaseParentNumber these executions belong to can be zero if executions are drop"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"mlegLegKey"}),(0,r.jsx)(d.td,{children:"VARCHAR(255)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"secKeyStringKeylegRatiosidepositionEffect secKeyStringKeylegRatiosidepositionEffect"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"cumFillQty"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"net cumFillQty total for the day"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"avgFillPrc"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"average fill price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"allocStatus"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"allocation status"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ChildOrdersList"}),(0,r.jsx)(d.td,{children:"JSON"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_isDeleted"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromRotation"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromCache"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromApplication"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromBridge"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_timeSent"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_timeReceived"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_netTimeReceived"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sysEnvironmentOrigin"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sysRealmOrigin"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sourceId"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsx)(d.tbody,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"omniOrderNumber"}),(0,r.jsx)(d.td,{children:"1"})]})})]})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>c});var r=t(96540);const s={},n=r.createContext(s);function i(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);
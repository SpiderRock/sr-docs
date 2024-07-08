"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74165],{51477:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=t(74848),n=t(28453);const r={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAccntCancel/SpdrAccntCancel",title:"SpdrAccntCancel",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAccntCancel/SpdrAccntCancel.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAccntCancel",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAccntCancel/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAccntCancel/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SecDefRequestGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SecDefRequestGateway/"},next:{title:"SpdrAllocationNotice",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAllocationNotice/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function x(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Attribute"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Topic"}),(0,s.jsx)(d.td,{children:"3985-parent-orders"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"MLink Token"}),(0,s.jsx)(d.td,{children:"ClientTrading"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Product"}),(0,s.jsx)(d.td,{children:"SRTrade"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accessType"}),(0,s.jsx)(d.td,{children:"SELECT,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Key"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accnt"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"SR trading account"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"clientFirm"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"SR client firm"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"sysEnvironment"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"original source sys environment Stable Current etc"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"runStatus"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"original source run status ProdBeta"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cxlReason"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"altCancelId"}),(0,s.jsx)(d.td,{children:"VARCHAR(24)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"engineName"}),(0,s.jsx)(d.td,{children:"VARCHAR(32)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"set by the engine handling event should be blank on arrival"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"modifiedBy"}),(0,s.jsx)(d.td,{children:"VARCHAR(24)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"modifiedIn"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"timestamp"}),(0,s.jsx)(d.td,{children:"DATETIME(6)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"timestamp of last modification"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_isDeleted"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromRotation"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromCache"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromApplication"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromBridge"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_timeSent"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_timeReceived"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_netTimeReceived"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sysEnvironmentOrigin"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sysRealmOrigin"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sourceId"}),(0,s.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Sequence"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accnt"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"clientFirm"}),(0,s.jsx)(d.td,{children:"2"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>c});var s=t(96540);const n={},r=s.createContext(n);function i(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);
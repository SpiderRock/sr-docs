"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49451],{50490:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=t(74848),r=t(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatus/ProductTradingStatus",title:"ProductTradingStatus",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatus/ProductTradingStatus.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatus",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatus/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatus/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ProductPriceBand",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/ProductPriceBand/"},next:{title:"ProductTradingStatusV2",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatusV2/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function x(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Attribute"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Topic"}),(0,s.jsx)(d.td,{children:"4440-product-status"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"MLink Token"}),(0,s.jsx)(d.td,{children:"SystemData"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Product"}),(0,s.jsx)(d.td,{children:"SRLive"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accessType"}),(0,s.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Key"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ccode_at"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"product group"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ccode_ts"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"product group"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ccode_tk"}),(0,s.jsx)(d.td,{children:"VARCHAR(12)"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"product group"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"assetCode"}),(0,s.jsx)(d.td,{children:"VARCHAR(6)"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"asset code if this status update applies to a specific asset group Can be empty"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"securityID"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"product ID if this status update applies to a specific instrument Can be 0"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"tradeDate"}),(0,s.jsx)(d.td,{children:"DATE"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"marketStatus"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"market status open halted etc"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"timestamp"}),(0,s.jsx)(d.td,{children:"DATETIME(6)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"time of last state update CST"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_isDeleted"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromRotation"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromCache"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromApplication"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_fromBridge"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_timeSent"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_timeReceived"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_netTimeReceived"}),(0,s.jsx)(d.td,{children:"BIGINT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sysEnvironmentOrigin"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sysRealmOrigin"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_sourceId"}),(0,s.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"readonly"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Sequence"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ccode_tk"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ccode_at"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ccode_ts"}),(0,s.jsx)(d.td,{children:"3"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"assetCode"}),(0,s.jsx)(d.td,{children:"4"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"securityID"}),(0,s.jsx)(d.td,{children:"5"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>c});var s=t(96540);const r={},n=s.createContext(r);function i(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);
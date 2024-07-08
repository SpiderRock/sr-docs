"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[97632],{33144:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>n,toc:()=>h});var d=s(74848),i=s(28453);const r={},c=void 0,n={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/StockBookQuote",title:"StockBookQuote",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/StockBookQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockAuctionSummary",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/"},next:{title:"StockCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockCloseMark/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function x(e){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"EqtMktData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRLive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"updateType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marketStatus"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"market status open halted etc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidPrice1"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bid price for best price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidSize1"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bid size for best price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidExch1"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidMask1"}),(0,d.jsx)(t.td,{children:"INT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bid exchange bit mask for best bid price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askPrice1"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ask price for best price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askSize1"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ask size for best price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askExch1"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"exchange"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askMask1"}),(0,d.jsx)(t.td,{children:"INT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ask exchange bit mask for best ask price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidPrice2"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bid price for next best price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidSize2"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bid size for next best price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidExch2"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"exchange"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidMask2"}),(0,d.jsx)(t.td,{children:"INT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bid exchange bit mask for next best bid price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askPrice2"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ask price for next best price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askSize2"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ask size for next best price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askExch2"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"exchange"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askMask2"}),(0,d.jsx)(t.td,{children:"INT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ask exchange bit mask for next best ask price level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"haltMask"}),(0,d.jsx)(t.td,{children:"INT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bit mask of halted exchanges"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"srcTimestamp"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"source high precision timestamp if available"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netTimestamp"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:"3"})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>n});var d=s(96540);const i={},r=d.createContext(i);function c(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);
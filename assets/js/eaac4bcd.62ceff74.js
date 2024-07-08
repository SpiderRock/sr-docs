"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7338],{37201:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var d=s(74848),r=s(28453);const c={},n=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRControl/StockLocateResponse/StockLocateResponse",title:"StockLocateResponse",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateResponse/StockLocateResponse.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/StockLocateResponse",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateResponse/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateResponse/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockLocateRequestGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/"},next:{title:"StockPoolBorrowRate",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockPoolBorrowRate/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function o(e){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"1725-client-borrow"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRControl"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"coreClientFirm"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locateFirm"}),(0,d.jsx)(t.td,{children:"VARCHAR(6)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"typically a clearing firm or 3rd party locate desk"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locatePool"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"locate pool  firm granting the locate"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isLivePool"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"DATE"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locateID"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ID used to make locate requests SR generated request ID if SR made the locate request client supplied otherwise"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"requestQuan"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"original request quantity for requestID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locateQuan"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locateStatus"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locateSource"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isLocateExempt"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Yes  ticker is locate exempt only allowed for market makers"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"altSecurityId"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"An alternative securityID can be cusip or other"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"requestOrigin"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"requestTimestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modifiedIn"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"coreClientFirm"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locateFirm"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locatePool"}),(0,d.jsx)(t.td,{children:"6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isLivePool"}),(0,d.jsx)(t.td,{children:"7"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"8"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>i});var d=s(96540);const r={},c=d.createContext(r);function n(e){const t=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(c.Provider,{value:t},e.children)}}}]);
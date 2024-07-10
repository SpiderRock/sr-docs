"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56022],{10972:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var r=s(74848),d=s(28453);const n={title:"ProductTradingStatusV2"},a="Schema: ProductTradingStatusV2 (ID: 4470)",c={id:"MessageSchemas/Schema/Topics/product-status/ProductTradingStatusV2",title:"ProductTradingStatusV2",description:"This table contains live trading status records for entire product groups (futures and options) and asset groups and individual instruments",source:"@site/docs/MessageSchemas/Schema/Topics/4440-product-status/ProductTradingStatusV2.md",sourceDirName:"MessageSchemas/Schema/Topics/4440-product-status",slug:"/MessageSchemas/Schema/Topics/product-status/ProductTradingStatusV2",permalink:"/docs/MessageSchemas/Schema/Topics/product-status/ProductTradingStatusV2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ProductTradingStatusV2"},sidebar:"messageSchemasSidebar",previous:{title:"ProductTradingStatus",permalink:"/docs/MessageSchemas/Schema/Topics/product-status/ProductTradingStatus"},next:{title:"StockRegSHOStatus",permalink:"/docs/MessageSchemas/Schema/Topics/product-status/StockRegSHOStatus"}},i={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function u(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"schema-producttradingstatusv2-id-4470",children:["Schema: ProductTradingStatusV2 ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4470)"})]}),"\n",(0,r.jsx)(e.p,{children:"This table contains live trading status records for entire product groups (futures and options) and asset groups and individual instruments"}),"\n",(0,r.jsx)(e.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Attribute"}),(0,r.jsx)(e.th,{children:"Value"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Topic"}),(0,r.jsx)(e.td,{children:"4440-product-status"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MLink Token"}),(0,r.jsx)(e.td,{children:"SystemData"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SRSE Product"}),(0,r.jsx)(e.td,{children:"SRLive"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(e.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"#"}),(0,r.jsx)(e.th,{children:"Field"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Comment"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"10="}),(0,r.jsx)(e.td,{children:"secKey"}),(0,r.jsx)(e.td,{children:"OptionKey"}),(0,r.jsx)(e.td,{children:"trading status product key. Interpretation depends on the status type"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"11="}),(0,r.jsx)(e.td,{children:"secType"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"12="}),(0,r.jsx)(e.td,{children:"tradingStatusType"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"../../../Enums/TradingStatusType",children:"enum : TradingStatusType"})}),(0,r.jsx)(e.td,{children:"Processing level for the product trading status: 1 = statusKey is the product group key, 2 = statusKey is the security group key, statusKey is for an individual instrument"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"100"}),(0,r.jsx)(e.td,{children:"tradeDate"}),(0,r.jsx)(e.td,{children:"DateKey"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"103"}),(0,r.jsx)(e.td,{children:"marketStatus"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"../../../Enums/MarketStatus",children:"enum : MarketStatus"})}),(0,r.jsx)(e.td,{children:"market status (open, halted, etc)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"106"}),(0,r.jsx)(e.td,{children:"timestamp"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"time of last state update (CST)"})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,d.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>a,x:()=>c});var r=s(96540);const d={},n=r.createContext(d);function a(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(d):t.components||d:a(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);
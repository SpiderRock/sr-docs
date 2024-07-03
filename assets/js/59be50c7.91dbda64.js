"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[67555],{62712:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var d=s(74848),r=s(28453);const n={title:"ProductTradingStatus"},i="Schema: ProductTradingStatus (ID: 4465)",c={id:"MessageSchemas/Schema/Topics/product-status/ProductTradingStatus",title:"ProductTradingStatus",description:"This table contains live trading status records for entire product groups (futures and options) and asset groups and individual instruments",source:"@site/docs/MessageSchemas/Schema/Topics/4440-product-status/ProductTradingStatus.md",sourceDirName:"MessageSchemas/Schema/Topics/4440-product-status",slug:"/MessageSchemas/Schema/Topics/product-status/ProductTradingStatus",permalink:"/docs/MessageSchemas/Schema/Topics/product-status/ProductTradingStatus",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ProductTradingStatus"},sidebar:"messageSchemasSidebar",previous:{title:"ProductPriceBand",permalink:"/docs/MessageSchemas/Schema/Topics/product-status/ProductPriceBand"},next:{title:"ProductTradingStatusV2",permalink:"/docs/MessageSchemas/Schema/Topics/product-status/ProductTradingStatusV2"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(t){const e={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.h1,{id:"schema-producttradingstatus-id-4465",children:["Schema: ProductTradingStatus ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 4465)"})]}),"\n",(0,d.jsx)(e.p,{children:"This table contains live trading status records for entire product groups (futures and options) and asset groups and individual instruments"}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(e.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Attribute"}),(0,d.jsx)(e.th,{children:"Value"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Topic"}),(0,d.jsx)(e.td,{children:"4440-product-status"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"MLink Token"}),(0,d.jsx)(e.td,{children:"SystemData"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SRSE Product"}),(0,d.jsx)(e.td,{children:"SRLive"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(e.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"#"}),(0,d.jsx)(e.th,{children:"Field"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Comment"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"10"}),(0,d.jsx)(e.td,{children:"ccode"}),(0,d.jsx)(e.td,{children:"TickerKey"}),(0,d.jsx)(e.td,{children:"product group"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"11"}),(0,d.jsx)(e.td,{children:"assetCode"}),(0,d.jsx)(e.td,{children:"string(6)"}),(0,d.jsx)(e.td,{children:"asset code if this status update applies to a specific asset group (Can be empty)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"12"}),(0,d.jsx)(e.td,{children:"securityID"}),(0,d.jsx)(e.td,{children:"long"}),(0,d.jsx)(e.td,{children:"product ID if this status update applies to a specific instrument (Can be 0)"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(e.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"#"}),(0,d.jsx)(e.th,{children:"Field"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Comment"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"103"}),(0,d.jsx)(e.td,{children:"marketStatus"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../../../Enums/MarketStatus",children:"enum : MarketStatus"})}),(0,d.jsx)(e.td,{children:"market status (open, halted, etc)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"106"}),(0,d.jsx)(e.td,{children:"timestamp"}),(0,d.jsx)(e.td,{children:"DateTime"}),(0,d.jsx)(e.td,{children:"time of last state update (CST)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"100"}),(0,d.jsx)(e.td,{children:"tradeDate"}),(0,d.jsx)(e.td,{children:"DateKey"}),(0,d.jsx)(e.td,{})]})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,d.jsx)(e,{...t,children:(0,d.jsx)(h,{...t})}):h(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>c});var d=s(96540);const r={},n=d.createContext(r);function i(t){const e=d.useContext(n);return d.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),d.createElement(n.Provider,{value:e},t.children)}}}]);
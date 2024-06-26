"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[60422],{84815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(74848),s=n(28453);const r={title:"OptionOpenAuction"},c="Schema: OptionOpenAuction (ID: 2790)",d={id:"Schemas/Schema/Topics/market-data-options/OptionOpenAuction",title:"OptionOpenAuction",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/2750-market-data-options/OptionOpenAuction.md",sourceDirName:"Schemas/Schema/Topics/2750-market-data-options",slug:"/Schemas/Schema/Topics/market-data-options/OptionOpenAuction",permalink:"/docs/Schemas/Schema/Topics/market-data-options/OptionOpenAuction",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionOpenAuction"},sidebar:"schemaSidebar",previous:{title:"OptionNbboQuote",permalink:"/docs/Schemas/Schema/Topics/market-data-options/OptionNbboQuote"},next:{title:"OptionOpenAuctionSummary",permalink:"/docs/Schemas/Schema/Topics/market-data-options/OptionOpenAuctionSummary"}},o={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"schema-optionopenauction-id-2790",children:["Schema: OptionOpenAuction ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2790)"})]}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SystemData"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"market-data-options"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRSE Product"}),(0,i.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey"}),(0,i.jsx)(t.td,{children:"OptionKey"}),(0,i.jsx)(t.td,{})]})})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionOnlyPrc"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Uncollared VMIM price on the queueing book only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/OpenAuctionType",children:"enum : OpenAuctionType"})}),(0,i.jsx)(t.td,{children:"Opening auction type"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"buyContracts"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Cumulative buy contracts at and above the reference price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"compMktAskPrc"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Current ask price of prevailing composite market"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"compMktBidPrc"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Current bid price of prevailing composite market"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"indicativePrc"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Current collared VMIM price on the queueing book and continuous book, equal to reference price for options without GTH sessions"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with f"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"openingCond"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/OptAuctionOpenCondition",children:"enum : OptAuctionOpenCondition"})}),(0,i.jsx)(t.td,{children:"Current opening condition based on the auction"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"refPrc"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Current collared VMIM (Volume Maximizing/Imbalance Minimizing) price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sellContracts"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Cumulative sell contracts at or below the reference price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"srcTimestamp"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var i=n(96540);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
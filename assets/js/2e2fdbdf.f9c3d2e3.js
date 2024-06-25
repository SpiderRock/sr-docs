"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[18204],{74590:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=c(74848),n=c(28453);const a={title:"StockExchImbalanceV2"},s="Schema: StockExchImbalanceV2 (ID: 3020)",i={id:"Schema/Topics/market-data-stock/StockExchImbalanceV2",title:"StockExchImbalanceV2",description:"StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.Final StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close.",source:"@site/docs/Schema/Topics/2990-market-data-stock/StockExchImbalanceV2.md",sourceDirName:"Schema/Topics/2990-market-data-stock",slug:"/Schema/Topics/market-data-stock/StockExchImbalanceV2",permalink:"/docs/Schema/Topics/market-data-stock/StockExchImbalanceV2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockExchImbalanceV2"},sidebar:"schemaSidebar",previous:{title:"StockExchImbalance",permalink:"/docs/Schema/Topics/market-data-stock/StockExchImbalance"},next:{title:"StockImbalance",permalink:"/docs/Schema/Topics/market-data-stock/StockImbalance"}},l={},d=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-stockexchimbalancev2-id-3020",children:["Schema: StockExchImbalanceV2 ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3020)"})]}),"\n",(0,r.jsxs)(t.p,{children:["StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Final StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close."]}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"meta-data",children:"META DATA"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"EqtExchImbalance"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"market-data-stock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionTime"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"Projected Auction Time (hhmm)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionReason",children:"enum : AuctionReason"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchange"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrimaryExchange",children:"enum : PrimaryExchange"})}),(0,r.jsx)(t.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionStatus"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionStatus",children:"enum : AuctionStatus"})}),(0,r.jsx)(t.td,{children:"Indicates whether the auction will run."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"closingOnlyClrPx"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"For Pillar-powered markets, the price at which all eligible auction-only interest would trade, subject to auction collars."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"continuousBookClrPx"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"For Pillar-powered markets, the price at which all interest on the book can trade, including auction and imbalance offset interest, and disregarding auction collars."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"freezeStatus"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"imbalanceSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/ImbalanceSide",children:"enum : ImbalanceSide"})}),(0,r.jsx)(t.td,{children:"The side of the TotalImbalanceQty."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"indicativeMatchPx"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"For Pillar-powered markets, the price that has the highest executable volume of auction-eligible shares, subject to auction collars. It includes the non-displayed quantity of Reserve Orders."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lowerCollar"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"marketImbalanceQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"For Pillar-powered markets, the total market order imbalance quantity at the Indicative Match Price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"PTP timestamp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numExtensions"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"Number of times the halt period has been extended."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pairedQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"For Pillar-powered markets, the number of shares paired off at the Indicative Match Price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"referencePx"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"For Pillar-powered markets, the Reference Price is used to calculate the Indicative Match Price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ssrFillingPx"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"For Pillar-powered markets, not supported and defaulted to 0."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalImbalanceQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"For Pillar-powered markets, the total imbalance quantity at the Indicative Match Price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"upperCollar"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details."})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,c)=>{c.d(t,{R:()=>s,x:()=>i});var r=c(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
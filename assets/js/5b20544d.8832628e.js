"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[51823],{91632:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=c(74848),s=c(28453);const r={title:"StockExchImbalance"},i="Schema: StockExchImbalance (ID: 3015)",a={id:"MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalance",title:"StockExchImbalance",description:"StockExchImbalance records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.Final StockExchImbalance records are published to the SpiderRock elastic cluster nightly after the auction close.",source:"@site/docs/MessageSchemas/Schema/Topics/2990-market-data-stock/StockExchImbalance.md",sourceDirName:"MessageSchemas/Schema/Topics/2990-market-data-stock",slug:"/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalance",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalance",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockExchImbalance"},sidebar:"messageSchemasSidebar",previous:{title:"StockBookQuote",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-stock/StockBookQuote"},next:{title:"StockExchImbalanceV2",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalanceV2"}},d={},l=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-stockexchimbalance-id-3015",children:["Schema: StockExchImbalance ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 3015)"})]}),"\n",(0,n.jsxs)(t.p,{children:["StockExchImbalance records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Final StockExchImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SystemData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRLive"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"11="}),(0,n.jsx)(t.td,{children:"auctionTime"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"Projected Auction Time (hhmm)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"12="}),(0,n.jsx)(t.td,{children:"auctionType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AuctionReason",children:"enum : AuctionReason"})}),(0,n.jsx)(t.td,{children:"Auction type: None; Open; Market; Halt; Closing; RegulatoryImbalance"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"13="}),(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PrimaryExchange",children:"enum : PrimaryExchange"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"referencePx"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"For Pillar-powered markets, the Reference Price is used to calculate the Indicative Match Price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"pairedQty"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"For Pillar-powered markets, the number of shares paired off at the Indicative Match Price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"totalImbalanceQty"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"For Pillar-powered markets, the total imbalance quantity at the Indicative Match Price. If the value is negative, the imbalance is on the sell side; if the value is positive, the imbalance is on the buy side."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"marketImbalanceQty"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"For Pillar-powered markets, the total market order imbalance quantity at the Indicative Match Price. If the value is negative, the imbalance is on the sell side; if the value is positive the imbalance is on the buy side."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"imbalanceSide"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ImbalanceSide",children:"enum : ImbalanceSide"})}),(0,n.jsx)(t.td,{children:"The side of the TotalImbalanceQty."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"continuousBookClrPx"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"For Pillar-powered markets, the price at which all interest on the book can trade, including auction and imbalance offset interest, and disregarding auction collars."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"closingOnlyClrPx"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"For Pillar-powered markets, the price at which all eligible auction-only interest would trade, subject to auction collars."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"ssrFillingPx"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"For Pillar-powered markets, not supported and defaulted to 0."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"indicativeMatchPx"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"For Pillar-powered markets, the price that has the highest executable volume of auction-eligible shares, subject to auction collars. It includes the non-displayed quantity of Reserve Orders."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"upperCollar"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"lowerCollar"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"auctionStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AuctionStatus",children:"enum : AuctionStatus"})}),(0,n.jsx)(t.td,{children:"Indicates whether the auction will run."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"freezeStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(t.td,{children:"Indicates freeze"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"numExtensions"}),(0,n.jsx)(t.td,{children:"byte"}),(0,n.jsx)(t.td,{children:"Number of times the halt period has been extended."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"sourceTime"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"Time record was generated in the order book (in seconds)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"netTimestamp"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"PTP timestamp"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,c)=>{c.d(t,{R:()=>i,x:()=>a});var n=c(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
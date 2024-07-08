"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84855],{85098:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=d(74848),r=d(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalance/StockExchImbalance",title:"StockExchImbalance",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalance/StockExchImbalance.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalance",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalance/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalance/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockCloseMark/"},next:{title:"StockExchImbalanceV2",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function a(e){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRLive"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionTime"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"Projected Auction Time hhmm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"Auction type None Open Market Halt Closing RegulatoryImbalance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchange"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"referencePx"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"For Pillarpowered markets the Reference Price is used to calculate the Indicative Match Price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pairedQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"For Pillarpowered markets the number of shares paired off at the Indicative Match Price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"totalImbalanceQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"For Pillarpowered markets the total imbalance quantity at the Indicative Match Price If the value is negative the imbalance is on the sell side if the value is positive the imbalance is on the buy side"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"marketImbalanceQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"For Pillarpowered markets the total market order imbalance quantity at the Indicative Match Price If the value is negative the imbalance is on the sell side if the value is positive the imbalance is on the buy side"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"imbalanceSide"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The side of the TotalImbalanceQty"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"continuousBookClrPx"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"For Pillarpowered markets the price at which all interest on the book can trade including auction and imbalance offset interest and disregarding auction collars"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"closingOnlyClrPx"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"For Pillarpowered markets the price at which all eligible auctiononly interest would trade subject to auction collars"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ssrFillingPx"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"For Pillarpowered markets not supported and defaulted to 0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"indicativeMatchPx"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"For Pillarpowered markets the price that has the highest executable volume of auctioneligible shares subject to auction collars It includes the nondisplayed quantity of Reserve Orders"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"upperCollar"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar special auction rules apply See Rule 735P for details"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lowerCollar"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar special auction rules apply See Rule 735P for details"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionStatus"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Indicates whether the auction will run"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"freezeStatus"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Indicates freeze"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"numExtensions"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Number of times the halt period has been extended"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sourceTime"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Time record was generated in the order book in seconds"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"PTP timestamp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_isDeleted"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_fromRotation"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_fromCache"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_fromApplication"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_fromBridge"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_timeSent"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_timeReceived"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_netTimeReceived"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_sysEnvironmentOrigin"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_sysRealmOrigin"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_sourceId"}),(0,s.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionTime"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchange"}),(0,s.jsx)(t.td,{children:"6"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>c});var s=d(96540);const r={},i=s.createContext(r);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
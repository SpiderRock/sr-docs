"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[30928],{73438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var r=n(74848),i=n(28453);const c={},s=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/StockExchImbalanceV2",title:"StockExchImbalanceV2",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/StockExchImbalanceV2.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockExchImbalance",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalance/"},next:{title:"StockImbalance",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockImbalance/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (TickerSrcIndex) (Not Unique)",id:"secondary-index-tickersrcindex-not-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/market-data-stock/StockExchImbalanceV2",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"EqtExchImbalance"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionTime"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"Projected Auction Time hhmm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionReason",children:"enum - AuctionReason"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchange"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrimaryExchange",children:"enum - PrimaryExchange"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"referencePx"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"For Pillarpowered markets the Reference Price is used to calculate the Indicative Match Price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pairedQty"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"For Pillarpowered markets the number of shares paired off at the Indicative Match Price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalImbalanceQty"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"For Pillarpowered markets the total imbalance quantity at the Indicative Match Price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"marketImbalanceQty"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"For Pillarpowered markets the total market order imbalance quantity at the Indicative Match Price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"imbalanceSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/ImbalanceSide",children:"enum - ImbalanceSide"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The side of the TotalImbalanceQty"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"continuousBookClrPx"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"For Pillarpowered markets the price at which all interest on the book can trade including auction and imbalance offset interest and disregarding auction collars"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"closingOnlyClrPx"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"For Pillarpowered markets the price at which all eligible auctiononly interest would trade subject to auction collars"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ssrFillingPx"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"For Pillarpowered markets not supported and defaulted to 0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"indicativeMatchPx"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"For Pillarpowered markets the price that has the highest executable volume of auctioneligible shares subject to auction collars It includes the nondisplayed quantity of Reserve Orders"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"upperCollar"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar special auction rules apply See Rule 735P for details"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lowerCollar"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar special auction rules apply See Rule 735P for details"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionStatus"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionStatus",children:"enum - AuctionStatus"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Indicates whether the auction will run"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"freezeStatus"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numExtensions"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Number of times the halt period has been extended"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"PTP timestamp"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionTime"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionType"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchange"}),(0,r.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"secondary-index-tickersrcindex-not-unique",children:"SECONDARY INDEX (TickerSrcIndex) (Not Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockExchImbalanceV2` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `auctionTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'Projected Auction Time (hhmm).',\n    `auctionType` ENUM('None','Open','Market','Halt','Closing','RegulatoryImbalance') NOT NULL DEFAULT 'None',\n    `exchange` ENUM('None','NYSE','NYSEArca','NYSEMkt','NASDAQ','NASDAQBOS','BATS','PHLX','IEXG','CSE','NSE','FINRA','PORTAL','OTC','CME','CBOT','NYMEX','COMEX','ICE','EUREX','XETRA','CDEX','BXE','CXE','DXE','LSE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP') NOT NULL DEFAULT 'None',\n    `referencePx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the Reference Price is used to calculate the Indicative Match Price.',\n    `pairedQty` INT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the number of shares paired off at the Indicative Match Price.',\n    `totalImbalanceQty` INT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the total imbalance quantity at the Indicative Match Price.',\n    `marketImbalanceQty` INT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the total market order imbalance quantity at the Indicative Match Price.',\n    `imbalanceSide` ENUM('None','Buy','Sell','NoImbalance','InsufOrdsToCalc') NOT NULL DEFAULT 'None' COMMENT 'The side of the TotalImbalanceQty.',\n    `continuousBookClrPx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the price at which all interest on the book can trade, including auction and imbalance offset interest, and disregarding auction collars.',\n    `closingOnlyClrPx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the price at which all eligible auction-only interest would trade, subject to auction collars.',\n    `ssrFillingPx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, not supported and defaulted to 0.',\n    `indicativeMatchPx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the price that has the highest executable volume of auction-eligible shares, subject to auction collars. It includes the non-displayed quantity of Reserve Orders.',\n    `upperCollar` FLOAT NOT NULL DEFAULT 0 COMMENT 'If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details.',\n    `lowerCollar` FLOAT NOT NULL DEFAULT 0 COMMENT 'If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details.',\n    `auctionStatus` ENUM('None','WillRunOpenAndClose','WillRunInterest','WillNotRunImbalance','WillNotRunClsAuction') NOT NULL DEFAULT 'None' COMMENT 'Indicates whether the auction will run.',\n    `freezeStatus` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `numExtensions` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Number of times the halt period has been extended.',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'PTP timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`auctionTime`,`auctionType`,`exchange`),\n    KEY `TickerSrcIndex` (`ticker_ts`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.\\nFinal StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close.';\n\n"})})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
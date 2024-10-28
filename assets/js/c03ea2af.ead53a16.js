"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[30338],{9793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var i=n(74848),r=n(28453);const c={},l=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/StockExchImbalanceV2",title:"StockExchImbalanceV2",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/StockExchImbalanceV2.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockExchImbalance",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalance/"},next:{title:"StockImbalance",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRLive/StockImbalance/"}},a={},d=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (TickerSrcIndex) (Not Unique)",id:"secondary-index-tickersrcindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/market-data-stock/StockExchImbalanceV2",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.p,{children:"StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.\\nFinal StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close."}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"EqtExchImbalance"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRLive"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Default Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{children:"PRI, SEC"}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionTime"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{children:"Projected Auction Time hhmm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionReason",children:"enum - AuctionReason"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchange"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrimaryExchange",children:"enum - PrimaryExchange"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"referencePx"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"For Pillarpowered markets the Reference Price is used to calculate the Indicative Match Price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pairedQty"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"For Pillarpowered markets the number of shares paired off at the Indicative Match Price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"totalImbalanceQty"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"For Pillarpowered markets the total imbalance quantity at the Indicative Match Price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"marketImbalanceQty"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"For Pillarpowered markets the total market order imbalance quantity at the Indicative Match Price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"imbalanceSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/ImbalanceSide",children:"enum - ImbalanceSide"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"The side of the TotalImbalanceQty"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"continuousBookClrPx"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"For Pillarpowered markets the price at which all interest on the book can trade including auction and imbalance offset interest and disregarding auction collars"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"closingOnlyClrPx"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"For Pillarpowered markets the price at which all eligible auctiononly interest would trade subject to auction collars"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ssrFillingPx"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"For Pillarpowered markets not supported and defaulted to 0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"indicativeMatchPx"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"For Pillarpowered markets the price that has the highest executable volume of auctioneligible shares subject to auction collars It includes the nondisplayed quantity of Reserve Orders"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"upperCollar"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar special auction rules apply See Rule 735P for details"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"lowerCollar"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar special auction rules apply See Rule 735P for details"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionStatus"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionStatus",children:"enum - AuctionStatus"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"Indicates whether the auction will run"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"freezeStatus"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"numExtensions"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Number of times the halt period has been extended"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"PTP timestamp"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:"3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionTime"}),(0,i.jsx)(t.td,{children:"4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionType"}),(0,i.jsx)(t.td,{children:"5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchange"}),(0,i.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"secondary-index-tickersrcindex-not-unique",children:"SECONDARY INDEX (TickerSrcIndex) (Not Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockExchImbalanceV2` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `auctionTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'Projected Auction Time (hhmm).',\n    `auctionType` ENUM('None','Open','Market','Halt','Closing','RegulatoryImbalance') NOT NULL DEFAULT 'None',\n    `exchange` ENUM('None','NYSE','NYSEArca','NYSEMkt','NASDAQ','NASDAQBOS','BATS','PHLX','IEXG','CSE','NSE','FINRA','PORTAL','OTC','CME','CBOT','NYMEX','COMEX','ICE','EUREX','XETRA','CDEX','BXE','CXE','DXE','LSE','NXAM','NXBR','NXLS','NXML','NXOS','NXP') NOT NULL DEFAULT 'None',\n    `referencePx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the Reference Price is used to calculate the Indicative Match Price.',\n    `pairedQty` INT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the number of shares paired off at the Indicative Match Price.',\n    `totalImbalanceQty` INT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the total imbalance quantity at the Indicative Match Price.',\n    `marketImbalanceQty` INT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the total market order imbalance quantity at the Indicative Match Price.',\n    `imbalanceSide` ENUM('None','Buy','Sell','NoImbalance','InsufOrdsToCalc') NOT NULL DEFAULT 'None' COMMENT 'The side of the TotalImbalanceQty.',\n    `continuousBookClrPx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the price at which all interest on the book can trade, including auction and imbalance offset interest, and disregarding auction collars.',\n    `closingOnlyClrPx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the price at which all eligible auction-only interest would trade, subject to auction collars.',\n    `ssrFillingPx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, not supported and defaulted to 0.',\n    `indicativeMatchPx` FLOAT NOT NULL DEFAULT 0 COMMENT 'For Pillar-powered markets, the price that has the highest executable volume of auction-eligible shares, subject to auction collars. It includes the non-displayed quantity of Reserve Orders.',\n    `upperCollar` FLOAT NOT NULL DEFAULT 0 COMMENT 'If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details.',\n    `lowerCollar` FLOAT NOT NULL DEFAULT 0 COMMENT 'If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details.',\n    `auctionStatus` ENUM('None','WillRunOpenAndClose','WillRunInterest','WillNotRunImbalance','WillNotRunClsAuction') NOT NULL DEFAULT 'None' COMMENT 'Indicates whether the auction will run.',\n    `freezeStatus` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `numExtensions` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Number of times the halt period has been extended.',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'PTP timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`auctionTime`,`auctionType`,`exchange`),\n    KEY `TickerSrcIndex` (`ticker_ts`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.\\nFinal StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close.';\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `auctionTime`,\n    `auctionType`,\n    `exchange`,\n    `referencePx`,\n    `pairedQty`,\n    `totalImbalanceQty`,\n    `marketImbalanceQty`,\n    `imbalanceSide`,\n    `continuousBookClrPx`,\n    `closingOnlyClrPx`,\n    `ssrFillingPx`,\n    `indicativeMatchPx`,\n    `upperCollar`,\n    `lowerCollar`,\n    `auctionStatus`,\n    `freezeStatus`,\n    `numExtensions`,\n    `netTimestamp`\nFROM `SRLive`.`MsgStockExchImbalanceV2`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a DATETIME(6) */\n    `auctionTime` = '2022-01-01 12:34:56.000000'\n  AND\n    /* Replace with a ENUM('None','Open','Market','Halt','Closing','RegulatoryImbalance') */ \n    `auctionType` = 'None'\n  AND\n    /* Replace with a ENUM('None','NYSE','NYSEArca','NYSEMkt','NASDAQ','NASDAQBOS','BATS','PHLX','IEXG','CSE','NSE','FINRA','PORTAL','OTC','CME','CBOT','NYMEX','COMEX','ICE','EUREX','XETRA','CDEX','BXE','CXE','DXE','LSE','NXAM','NXBR','NXLS','NXML','NXOS','NXP') */ \n    `exchange` = 'None';\n"})}),"\n",(0,i.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='StockExchImbalanceV2' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var i=n(96540);const r={},c=i.createContext(r);function l(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);
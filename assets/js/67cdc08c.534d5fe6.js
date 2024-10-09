"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[15321],{27122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var c=t(74848),s=t(28453);const i={},d=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockImbalance/StockImbalance",title:"StockImbalance",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockImbalance/StockImbalance.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockImbalance",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockImbalance/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/StockImbalance/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockExchImbalanceV2",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalanceV2/"},next:{title:"StockMarketSummary",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/StockMarketSummary/"}},l={},r=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"../../../Topics/market-data-stock/StockImbalance",children:"V8 Message Definiton"})}),"\n",(0,c.jsx)(n.p,{children:"StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.\\nFinal StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."}),"\n",(0,c.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Attribute"}),(0,c.jsx)(n.th,{children:"Value"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Topic"}),(0,c.jsx)(n.td,{children:"2990-market-data-stock"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"MLink Token"}),(0,c.jsx)(n.td,{children:"ClientLive"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Product"}),(0,c.jsx)(n.td,{children:"SRLive"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"accessType"}),(0,c.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,c.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Field"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Key"}),(0,c.jsx)(n.th,{children:"Default Value"}),(0,c.jsx)(n.th,{children:"Comment"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ticker_at"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,c.jsx)(n.td,{children:"PRI"}),(0,c.jsx)(n.td,{children:"'None'"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ticker_ts"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,c.jsx)(n.td,{children:"PRI"}),(0,c.jsx)(n.td,{children:"'None'"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ticker_tk"}),(0,c.jsx)(n.td,{children:"VARCHAR(12)"}),(0,c.jsx)(n.td,{children:"PRI"}),(0,c.jsx)(n.td,{children:"''"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"auctionType"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../../Enums/AuctionReason",children:"enum - AuctionReason"})}),(0,c.jsx)(n.td,{children:"PRI"}),(0,c.jsx)(n.td,{children:"'None'"}),(0,c.jsx)(n.td,{children:"OpeningClosing"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"auctionTime"}),(0,c.jsx)(n.td,{children:"DATETIME(6)"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"maxImbalance"}),(0,c.jsx)(n.td,{children:"INT"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"maxImbalanceExch"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../../Enums/StkExch",children:"enum - StkExch"})}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"'None'"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"maxImbalanceMatchPx"}),(0,c.jsx)(n.td,{children:"DOUBLE"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"maxImbalanceStatus"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../../Enums/AuctionStatus",children:"enum - AuctionStatus"})}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"'None'"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cumBidImbalanceMkt"}),(0,c.jsx)(n.td,{children:"INT"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cumAskImbalanceMkt"}),(0,c.jsx)(n.td,{children:"INT"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cumBidImbalanceTot"}),(0,c.jsx)(n.td,{children:"INT"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cumAskImbalanceTot"}),(0,c.jsx)(n.td,{children:"INT"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cumPairedQty"}),(0,c.jsx)(n.td,{children:"INT"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"timestamp"}),(0,c.jsx)(n.td,{children:"DATETIME(6)"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,c.jsx)(n.td,{})]})]})]}),"\n",(0,c.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Field"}),(0,c.jsx)(n.th,{children:"Sequence"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ticker_tk"}),(0,c.jsx)(n.td,{children:"1"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ticker_at"}),(0,c.jsx)(n.td,{children:"2"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ticker_ts"}),(0,c.jsx)(n.td,{children:"3"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"auctionType"}),(0,c.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,c.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockImbalance` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `auctionType` ENUM('None','Open','Market','Halt','Closing','RegulatoryImbalance') NOT NULL DEFAULT 'None' COMMENT 'Opening/Closing',\n    `auctionTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `maxImbalance` INT NOT NULL DEFAULT 0,\n    `maxImbalanceExch` ENUM('None','AMEX','NQBX','NSX','FNRA','ISE','EDGA','EDGX','CHX','NYSE','ARCA','NSDQ','CBSX','PSX','BTSY','BATS','CBIDX','IEX','OTC','MPRL','LTSE','MEMX','MXIDX','DJIDX','BXE','CXE','DXE','XETRA','NXAM','NXBR','NXLS','NXML','NXOS','NXP') NOT NULL DEFAULT 'None',\n    `maxImbalanceMatchPx` DOUBLE NOT NULL DEFAULT 0,\n    `maxImbalanceStatus` ENUM('None','WillRunOpenAndClose','WillRunInterest','WillNotRunImbalance','WillNotRunClsAuction') NOT NULL DEFAULT 'None',\n    `cumBidImbalanceMkt` INT NOT NULL DEFAULT 0,\n    `cumAskImbalanceMkt` INT NOT NULL DEFAULT 0,\n    `cumBidImbalanceTot` INT NOT NULL DEFAULT 0,\n    `cumAskImbalanceTot` INT NOT NULL DEFAULT 0,\n    `cumPairedQty` INT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`auctionType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.\\nFinal StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close.';\n\n"})}),"\n",(0,c.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `auctionType`,\n    `auctionTime`,\n    `maxImbalance`,\n    `maxImbalanceExch`,\n    `maxImbalanceMatchPx`,\n    `maxImbalanceStatus`,\n    `cumBidImbalanceMkt`,\n    `cumAskImbalanceMkt`,\n    `cumBidImbalanceTot`,\n    `cumAskImbalanceTot`,\n    `cumPairedQty`,\n    `timestamp`\nFROM `SRLive`.`MsgStockImbalance`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Open','Market','Halt','Closing','RegulatoryImbalance') */ \n    `auctionType` = 'None';\n"})}),"\n",(0,c.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='StockImbalance' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var c=t(96540);const s={},i=c.createContext(s);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);
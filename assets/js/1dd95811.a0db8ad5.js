"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[97632],{33144:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(74848),n=t(28453);const r={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/StockBookQuote",title:"StockBookQuote",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/StockBookQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockAuctionSummary",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/"},next:{title:"StockCloseMark",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/StockCloseMark/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"../../../Topics/market-data-stock/StockBookQuote",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(s.p,{children:"This table contains live equity quote records for all CQS/UQDF securities as well as US OTC equity securities, SpiderRock synthetic markets, and a number of major indexes.  Each record contains up to two price levels and represents a live snapshot of the book for a specific market."}),"\n",(0,i.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Attribute"}),(0,i.jsx)(s.th,{children:"Value"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Topic"}),(0,i.jsx)(s.td,{children:"2990-market-data-stock"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"MLink Token"}),(0,i.jsx)(s.td,{children:"EqtMktData"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Product"}),(0,i.jsx)(s.td,{children:"SRLive"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"accessType"}),(0,i.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Key"}),(0,i.jsx)(s.th,{children:"Default Value"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker_at"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(s.td,{children:"PRI"}),(0,i.jsx)(s.td,{children:"'None'"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker_ts"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(s.td,{children:"PRI"}),(0,i.jsx)(s.td,{children:"'None'"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker_tk"}),(0,i.jsx)(s.td,{children:"VARCHAR(12)"}),(0,i.jsx)(s.td,{children:"PRI"}),(0,i.jsx)(s.td,{children:"''"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"updateType"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/UpdateType",children:"enum - UpdateType"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"'None'"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"marketStatus"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/MarketStatus",children:"enum - MarketStatus"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"'None'"}),(0,i.jsx)(s.td,{children:"market status open halted etc"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bidPrice1"}),(0,i.jsx)(s.td,{children:"FLOAT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"bid price for best price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bidSize1"}),(0,i.jsx)(s.td,{children:"INT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"bid size for best price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bidExch1"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/StkExch",children:"enum - StkExch"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"'None'"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bidMask1"}),(0,i.jsx)(s.td,{children:"INT UNSIGNED"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"bid exchange bit mask for best bid price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"askPrice1"}),(0,i.jsx)(s.td,{children:"FLOAT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"ask price for best price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"askSize1"}),(0,i.jsx)(s.td,{children:"INT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"ask size for best price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"askExch1"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/StkExch",children:"enum - StkExch"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"'None'"}),(0,i.jsx)(s.td,{children:"exchange"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"askMask1"}),(0,i.jsx)(s.td,{children:"INT UNSIGNED"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"ask exchange bit mask for best ask price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bidPrice2"}),(0,i.jsx)(s.td,{children:"FLOAT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"bid price for next best price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bidSize2"}),(0,i.jsx)(s.td,{children:"INT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"bid size for next best price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bidExch2"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/StkExch",children:"enum - StkExch"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"'None'"}),(0,i.jsx)(s.td,{children:"exchange"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bidMask2"}),(0,i.jsx)(s.td,{children:"INT UNSIGNED"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"bid exchange bit mask for next best bid price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"askPrice2"}),(0,i.jsx)(s.td,{children:"FLOAT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"ask price for next best price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"askSize2"}),(0,i.jsx)(s.td,{children:"INT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"ask size for next best price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"askExch2"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/StkExch",children:"enum - StkExch"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"'None'"}),(0,i.jsx)(s.td,{children:"exchange"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"askMask2"}),(0,i.jsx)(s.td,{children:"INT UNSIGNED"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"ask exchange bit mask for next best ask price level"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"haltMask"}),(0,i.jsx)(s.td,{children:"INT UNSIGNED"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"bit mask of halted exchanges"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"srcTimestamp"}),(0,i.jsx)(s.td,{children:"BIGINT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"source high precision timestamp if available"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"netTimestamp"}),(0,i.jsx)(s.td,{children:"BIGINT"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Sequence"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker_tk"}),(0,i.jsx)(s.td,{children:"1"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker_at"}),(0,i.jsx)(s.td,{children:"2"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker_ts"}),(0,i.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockBookQuote` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `updateType` ENUM('None','PrcChange','SizeOnly','PrevPeriod') NOT NULL DEFAULT 'None',\n    `marketStatus` ENUM('None','PreOpen','PreCross','Cross','Open','Closed','Halted','AfterHours') NOT NULL DEFAULT 'None' COMMENT 'market status (open, halted, etc)',\n    `bidPrice1` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid price for best price level',\n    `bidSize1` INT NOT NULL DEFAULT 0 COMMENT 'bid size for best price level',\n    `bidExch1` ENUM('None','AMEX','NQBX','NSX','FNRA','ISE','EDGA','EDGX','CHX','NYSE','ARCA','NSDQ','CBSX','PSX','BTSY','BATS','CBIDX','IEX','OTC','MPRL','LTSE','MEMX','MXIDX','DJIDX','BXE','CXE','DXE','XETRA','NXAM','NXBR','NXLS','NXML','NXOS','NXP') NOT NULL DEFAULT 'None',\n    `bidMask1` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'bid exchange bit mask for best bid price level',\n    `askPrice1` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask price for best price level',\n    `askSize1` INT NOT NULL DEFAULT 0 COMMENT 'ask size for best price level',\n    `askExch1` ENUM('None','AMEX','NQBX','NSX','FNRA','ISE','EDGA','EDGX','CHX','NYSE','ARCA','NSDQ','CBSX','PSX','BTSY','BATS','CBIDX','IEX','OTC','MPRL','LTSE','MEMX','MXIDX','DJIDX','BXE','CXE','DXE','XETRA','NXAM','NXBR','NXLS','NXML','NXOS','NXP') NOT NULL DEFAULT 'None' COMMENT 'exchange',\n    `askMask1` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ask exchange bit mask for best ask price level',\n    `bidPrice2` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid price for next best price level',\n    `bidSize2` INT NOT NULL DEFAULT 0 COMMENT 'bid size for next best price level',\n    `bidExch2` ENUM('None','AMEX','NQBX','NSX','FNRA','ISE','EDGA','EDGX','CHX','NYSE','ARCA','NSDQ','CBSX','PSX','BTSY','BATS','CBIDX','IEX','OTC','MPRL','LTSE','MEMX','MXIDX','DJIDX','BXE','CXE','DXE','XETRA','NXAM','NXBR','NXLS','NXML','NXOS','NXP') NOT NULL DEFAULT 'None' COMMENT 'exchange',\n    `bidMask2` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'bid exchange bit mask for next best bid price level',\n    `askPrice2` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask price for next best price level',\n    `askSize2` INT NOT NULL DEFAULT 0 COMMENT 'ask size for next best price level',\n    `askExch2` ENUM('None','AMEX','NQBX','NSX','FNRA','ISE','EDGA','EDGX','CHX','NYSE','ARCA','NSDQ','CBSX','PSX','BTSY','BATS','CBIDX','IEX','OTC','MPRL','LTSE','MEMX','MXIDX','DJIDX','BXE','CXE','DXE','XETRA','NXAM','NXBR','NXLS','NXML','NXOS','NXP') NOT NULL DEFAULT 'None' COMMENT 'exchange',\n    `askMask2` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ask exchange bit mask for next best ask price level',\n    `haltMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'bit mask of halted exchanges',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'source high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains live equity quote records for all CQS/UQDF securities as well as US OTC equity securities, SpiderRock synthetic markets, and a number of major indexes.  Each record contains up to two price levels and represents a live snapshot of the book for a specific market.';\n\n"})}),"\n",(0,i.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `updateType`,\n    `marketStatus`,\n    `bidPrice1`,\n    `bidSize1`,\n    `bidExch1`,\n    `bidMask1`,\n    `askPrice1`,\n    `askSize1`,\n    `askExch1`,\n    `askMask1`,\n    `bidPrice2`,\n    `bidSize2`,\n    `bidExch2`,\n    `bidMask2`,\n    `askPrice2`,\n    `askSize2`,\n    `askExch2`,\n    `askMask2`,\n    `haltMask`,\n    `srcTimestamp`,\n    `netTimestamp`\nFROM `SRLive`.`MsgStockBookQuote`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,i.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='StockBookQuote' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var i=t(96540);const n={},r=i.createContext(n);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);
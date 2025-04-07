"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["49054"],{84584:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintSet/FuturePrintSet","title":"FuturePrintSet","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintSet/FuturePrintSet.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintSet","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintSet/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintSet/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"FuturePrintProbability","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintProbability/"},"next":{"title":"FutureQuoteProbability","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureQuoteProbability/"}}'),i=r("52676"),s=r("91503");let d={},c=void 0,l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/market-data-futures/FuturePrintSet",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.p,{children:"FuturePrintSet records are created for all future prints (outrights and spreads) and published to the SpiderRock elastic cluster when markup detail is complete (F+10M)"}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"2580-market-data-futures"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"FutAnalytics"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRAnalytics"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Default Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_yr"}),(0,i.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_mn"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_dy"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtNumber"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Unique print set identifier will increment but not guaranteed to be sequential"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"updateType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrtUpdateType",children:"enum - PrtUpdateType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"underlying stock key"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"underlying stock key"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"underlying stock key"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtExch"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/FutExch",children:"enum - FutExch"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"print exchange"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"print size contracts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPrice"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"print price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtType"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"print type exchange specific"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtOrders"}),(0,i.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"number of orders participating in this print"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtClusterNum"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"incremental print cluster counter one counter per fkey used to group prints into clusters"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtClusterSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"cumulative size of prints in this sequence prints  same or more aggressive price with less than 25 ms elapsing since first print can span exchanges"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtVolume"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"cumulative day electronic print volume in contracts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum - PrtSide"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"Print side None Mid Bid Ask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exchange high precision timestamp if available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exch best bid  print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exch best ask  print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"bid size  print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"ask size  print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice2"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exch 2nd best bid  print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice2"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exch 2nd best ask  print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidSize2"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"2nd best bid  print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askSize2"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"2nd best ask  print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtProbability"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"M1 probability that buying prtQuan contracts  prtPrice will have positive m1 pnl prtPriceM1  prtPrice recorded at time of print"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPriceM1"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"bid price 1 minute"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPriceM1"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"ask price 1 minute"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPriceM1"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"market price 1 minute midquote if not intervening printsmost recent print otherwise"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pnlM1"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"pnl after 1 minute"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pnlM1Err"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_tk"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_yr"}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_mn"}),(0,i.jsx)(t.td,{children:"3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_dy"}),(0,i.jsx)(t.td,{children:"4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_at"}),(0,i.jsx)(t.td,{children:"5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey_ts"}),(0,i.jsx)(t.td,{children:"6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtNumber"}),(0,i.jsx)(t.td,{children:"7"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgFuturePrintSet` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `prtNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'Unique print set identifier; will increment but not guaranteed to be sequential.',\n    `updateType` ENUM('None','Print','Markup') NOT NULL DEFAULT 'None',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlying stock key',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlying stock key',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlying stock key',\n    `prtExch` ENUM('None','CFE','CME','CBOT','COMEX','NYMEX','ICE','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'print exchange',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'print size [contracts]',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'print price',\n    `prtType` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'print type [exchange specific]',\n    `prtOrders` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of orders participating in this print',\n    `prtClusterNum` INT NOT NULL DEFAULT 0 COMMENT 'incremental print cluster counter (one counter per fkey; used to group prints into clusters)',\n    `prtClusterSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'cumulative day (electronic) print volume in contracts',\n    `prtSide` ENUM('None','Mid','Bid','Ask') NOT NULL DEFAULT 'None' COMMENT 'Print side: None; Mid; Bid; Ask',\n    `prtTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `bidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exch best bid @ print arrival time',\n    `askPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exch best ask @ print arrival time',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'bid size @ print arrival time',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'ask size @ print arrival time',\n    `bidPrice2` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exch 2nd best bid @ print arrival time',\n    `askPrice2` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exch 2nd best ask @ print arrival time',\n    `bidSize2` INT NOT NULL DEFAULT 0 COMMENT '2nd best bid @ print arrival time',\n    `askSize2` INT NOT NULL DEFAULT 0 COMMENT '2nd best ask @ print arrival time',\n    `prtProbability` FLOAT NOT NULL DEFAULT 0 COMMENT '[M1] probability that buying prtQuan contracts @ prtPrice will have positive m1 pnl (prtPriceM1 >= prtPrice) [recorded at time of print]',\n    `bidPriceM1` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price +1 minute',\n    `askPriceM1` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price +1 minute',\n    `prtPriceM1` DOUBLE NOT NULL DEFAULT 0 COMMENT 'market price +1 minute [mid-quote if not intervening prints;most recent print otherwise]',\n    `pnlM1` FLOAT NOT NULL DEFAULT 0 COMMENT 'pnl after 1 minute',\n    `pnlM1Err` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`,`prtNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='FuturePrintSet records are created for all future prints (outrights and spreads) and published to the SpiderRock elastic cluster when markup detail is complete (F+10M)';\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `prtNumber`,\n    `updateType`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `prtExch`,\n    `prtSize`,\n    `prtPrice`,\n    `prtType`,\n    `prtOrders`,\n    `prtClusterNum`,\n    `prtClusterSize`,\n    `prtVolume`,\n    `prtSide`,\n    `prtTimestamp`,\n    `netTimestamp`,\n    `timestamp`,\n    `bidPrice`,\n    `askPrice`,\n    `bidSize`,\n    `askSize`,\n    `bidPrice2`,\n    `askPrice2`,\n    `bidSize2`,\n    `askSize2`,\n    `prtProbability`,\n    `bidPriceM1`,\n    `askPriceM1`,\n    `prtPriceM1`,\n    `pnlM1`,\n    `pnlM1Err`\nFROM `SRAnalytics`.`MsgFuturePrintSet`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1\n  AND\n    /* Replace with a BIGINT */ \n    `prtNumber` = 1234567890;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='FuturePrintSet' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},91503:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return d}});var n=r(75271);let i={},s=n.createContext(i);function d(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
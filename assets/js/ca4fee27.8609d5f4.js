"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[12322],{8890:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>x});var n=t(74848),s=t(28453);const i={},r=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVolV4/OptionImpliedVolV4",title:"OptionImpliedVolV4",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVolV4/OptionImpliedVolV4.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVolV4",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVolV4/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVolV4/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionImpliedVol",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVol/"},next:{title:"OptionLookback",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionLookback/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"../../../Topics/srse-calculators/OptionImpliedVolV4",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(d.p,{children:"This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed."}),"\n",(0,n.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Topic"}),(0,n.jsx)(d.td,{children:"5030-srse-calculators"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MLink Token"}),(0,n.jsx)(d.td,{children:"Internal"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Product"}),(0,n.jsx)(d.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"accessType"}),(0,n.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Key"}),(0,n.jsx)(d.th,{children:"Default Value"}),(0,n.jsx)(d.th,{children:"Comment"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_at"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_ts"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_tk"}),(0,n.jsx)(d.td,{children:"VARCHAR(12)"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_xx"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_cp"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'Call'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_at"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_ts"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_tk"}),(0,n.jsx)(d.td,{children:"VARCHAR(12)"}),(0,n.jsx)(d.td,{children:"SEC"}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"uPrc"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"years"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"rate"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sdiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ddiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cash"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"obid"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oask"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"obiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"volatility implied by option bid price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oaiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"volatility implied by option ask price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sVol"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"bVol"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"rVol"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sPrc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"atmVol"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"atmSDiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"xMult"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"xShift"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"skewMult"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"xAxis"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"xDeBS"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"de"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ga"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"th"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ve"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ro"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ph"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"err"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"theoErr"}),(0,n.jsx)(d.td,{children:"VARCHAR(24)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"calcErr"}),(0,n.jsx)(d.td,{children:"VARCHAR(24)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"timestamp"}),(0,n.jsx)(d.td,{children:"DATETIME(6)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(d.td,{})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_tk"}),(0,n.jsx)(d.td,{children:"1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"3"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"4"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_xx"}),(0,n.jsx)(d.td,{children:"5"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_cp"}),(0,n.jsx)(d.td,{children:"6"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_at"}),(0,n.jsx)(d.td,{children:"7"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_ts"}),(0,n.jsx)(d.td,{children:"8"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_tk"}),(0,n.jsx)(d.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionImpliedVolV4` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0,\n    `years` FLOAT NOT NULL DEFAULT 0,\n    `rate` FLOAT NOT NULL DEFAULT 0,\n    `sdiv` FLOAT NOT NULL DEFAULT 0,\n    `ddiv` FLOAT NOT NULL DEFAULT 0,\n    `cash` FLOAT NOT NULL DEFAULT 0,\n    `obid` FLOAT NOT NULL DEFAULT 0,\n    `oask` FLOAT NOT NULL DEFAULT 0,\n    `obiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option bid price',\n    `oaiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option ask price',\n    `sVol` FLOAT NOT NULL DEFAULT 0,\n    `bVol` FLOAT NOT NULL DEFAULT 0,\n    `rVol` FLOAT NOT NULL DEFAULT 0,\n    `sPrc` FLOAT NOT NULL DEFAULT 0,\n    `atmVol` FLOAT NOT NULL DEFAULT 0,\n    `atmSDiv` FLOAT NOT NULL DEFAULT 0,\n    `xMult` FLOAT NOT NULL DEFAULT 0,\n    `xShift` FLOAT NOT NULL DEFAULT 0,\n    `skewMult` FLOAT NOT NULL DEFAULT 0,\n    `xAxis` FLOAT NOT NULL DEFAULT 0,\n    `xDeBS` FLOAT NOT NULL DEFAULT 0,\n    `de` FLOAT NOT NULL DEFAULT 0,\n    `ga` FLOAT NOT NULL DEFAULT 0,\n    `th` FLOAT NOT NULL DEFAULT 0,\n    `ve` FLOAT NOT NULL DEFAULT 0,\n    `ro` FLOAT NOT NULL DEFAULT 0,\n    `ph` FLOAT NOT NULL DEFAULT 0,\n    `err` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `theoErr` VARCHAR(24) NOT NULL DEFAULT '',\n    `calcErr` VARCHAR(24) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed.';\n\n"})}),"\n",(0,n.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `uPrc`,\n    `years`,\n    `rate`,\n    `sdiv`,\n    `ddiv`,\n    `cash`,\n    `obid`,\n    `oask`,\n    `obiv`,\n    `oaiv`,\n    `sVol`,\n    `bVol`,\n    `rVol`,\n    `sPrc`,\n    `atmVol`,\n    `atmSDiv`,\n    `xMult`,\n    `xShift`,\n    `skewMult`,\n    `xAxis`,\n    `xDeBS`,\n    `de`,\n    `ga`,\n    `th`,\n    `ve`,\n    `ro`,\n    `ph`,\n    `err`,\n    `theoErr`,\n    `calcErr`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgOptionImpliedVolV4`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,n.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='OptionImpliedVolV4' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>r,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function r(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);
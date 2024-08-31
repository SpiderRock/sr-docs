"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32504],{52206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var d=n(74848),s=n(28453);const r={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintSummary/OptionPrintSummary",title:"OptionPrintSummary",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintSummary/OptionPrintSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrintProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintProbability/"},next:{title:"OptionQuoteProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionQuoteProbability/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/market-data-options/OptionPrintSummary",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.p,{children:"Root/Expiration trading summaries.  Includes contracts and vega trade in total and on the public bid or offer.  Records update live as public trades occur."}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRLive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtSummaryType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/PrtSummaryType",children:"enum - PrtSummaryType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cnPrt"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"total contracts printed"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cnBot"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"total contracts bot print price closer to bid"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cnSld"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"total contracts sld print price closer to ask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vePrt"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veBot"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veSld"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDdPrt"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDnPrt"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veAtPrt"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veUpPrt"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDuPrt"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDdBot"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDnBot"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veAtBot"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veUpBot"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDuBot"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDdSld"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDnSld"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veAtSld"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veUpSld"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veDuSld"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sumabscn  upc  ve  side  0  fuzzy bucket"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"recCnt"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"number of print reports included in totals"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netTimestamp"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_yr"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_mn"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_dy"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_at"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey_ts"}),(0,d.jsx)(t.td,{children:"6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtSummaryType"}),(0,d.jsx)(t.td,{children:"7"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionPrintSummary` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `prtSummaryType` ENUM('None','Live','PriorDay') NOT NULL DEFAULT 'None',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `cnPrt` INT NOT NULL DEFAULT 0 COMMENT 'total contracts printed',\n    `cnBot` INT NOT NULL DEFAULT 0 COMMENT 'total contracts bot (print price closer to bid)',\n    `cnSld` INT NOT NULL DEFAULT 0 COMMENT 'total contracts sld (print price closer to ask)',\n    `vePrt` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve))',\n    `veBot` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0',\n    `veSld` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side < 0',\n    `veDdPrt` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) & fuzzy bucket',\n    `veDnPrt` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) & fuzzy bucket',\n    `veAtPrt` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) & fuzzy bucket',\n    `veUpPrt` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) & fuzzy bucket',\n    `veDuPrt` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) & fuzzy bucket',\n    `veDdBot` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veDnBot` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veAtBot` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veUpBot` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veDuBot` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veDdSld` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veDnSld` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veAtSld` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veUpSld` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `veDuSld` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(abs(cn * upc * ve)) | side > 0 & fuzzy bucket',\n    `recCnt` INT NOT NULL DEFAULT 0 COMMENT 'number of print reports included in totals',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`prtSummaryType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Root/Expiration trading summaries.  Includes contracts and vega trade in total and on the public bid or offer.  Records update live as public trades occur.';\n\n"})}),"\n",(0,d.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `prtSummaryType`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `cnPrt`,\n    `cnBot`,\n    `cnSld`,\n    `vePrt`,\n    `veBot`,\n    `veSld`,\n    `veDdPrt`,\n    `veDnPrt`,\n    `veAtPrt`,\n    `veUpPrt`,\n    `veDuPrt`,\n    `veDdBot`,\n    `veDnBot`,\n    `veAtBot`,\n    `veUpBot`,\n    `veDuBot`,\n    `veDdSld`,\n    `veDnSld`,\n    `veAtSld`,\n    `veUpSld`,\n    `veDuSld`,\n    `recCnt`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRLive`.`MsgOptionPrintSummary`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Live','PriorDay') */ \n    `prtSummaryType` = 'None';\n"})}),"\n",(0,d.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='OptionPrintSummary' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var d=n(96540);const s={},r=d.createContext(s);function c(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);
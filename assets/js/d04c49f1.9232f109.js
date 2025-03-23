"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[24222],{47447:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(74848),d=s(28453);const t={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/TradingSchedule/TradingSchedule",title:"TradingSchedule",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/TradingSchedule/TradingSchedule.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/TradingSchedule",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/TradingSchedule/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/TradingSchedule/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"TickerDefinitionExt",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinitionExt/"},next:{title:"SRRisk",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRRisk/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/product-status/TradingSchedule",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"Product trading schedule for the current week.  Includes an expected trading day market schedule for each SpiderRock ticker and day-of-week.  Including schedules for equity and futures markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"4440-product-status"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SystemData"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRLive"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR Underlying ticker or product group  SPY MSFT ES etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR Underlying ticker or product group  SPY MSFT ES etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"SR Underlying ticker or product group  SPY MSFT ES etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weekDay"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/WeekDay",children:"enum - WeekDay"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'Sunday'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undTicker_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR Underlying ticker  SPY MSFT ES ZC GC ED etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undTicker_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR Underlying ticker  SPY MSFT ES ZC GC ED etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undTicker_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"SR Underlying ticker  SPY MSFT ES ZC GC ED etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"marketDayType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarketDayType",children:"enum - MarketDayType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"srCloseMarkTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"SR Close Mark Timeusually regular market close  1 minute C  1M"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"earlyPreOpenTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"early session preopen orders accepted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"earlySessionOpenTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"early session market open"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"earlySessionCloseTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"early session market close"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regPreOpenTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"regular session preopen order accepted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regSessionOpenTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"regular session open"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regSessionCloseTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"regular session close"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"latePreOpenTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"extended session preopen orders accepted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lateSessionOpenTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"extended session open"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lateSessionCloseTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"extended session close"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nextDayPreOpenTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"next day session preopen order accepted for first T1 session"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nextDaySessionOpenTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"next day session open first T1 session"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isDefault"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weekDay"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgTradingSchedule` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Underlying ticker or product group - SPY, MSFT, @ES, etc.',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Underlying ticker or product group - SPY, MSFT, @ES, etc.',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Underlying ticker or product group - SPY, MSFT, @ES, etc.',\n    `weekDay` ENUM('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday') NOT NULL DEFAULT 'Sunday',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `undTicker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Underlying ticker - SPY, MSFT, @ES, @ZC, @GC, @ED, etc.',\n    `undTicker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Underlying ticker - SPY, MSFT, @ES, @ZC, @GC, @ED, etc.',\n    `undTicker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Underlying ticker - SPY, MSFT, @ES, @ZC, @GC, @ED, etc.',\n    `marketDayType` ENUM('None','RegularDay','ModifiedDay','MarketClosed') NOT NULL DEFAULT 'None',\n    `srCloseMarkTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'SR Close Mark Time;usually regular market close - 1 minute (C - 1M)',\n    `earlyPreOpenTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'early session pre-open (orders accepted)',\n    `earlySessionOpenTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'early session market open',\n    `earlySessionCloseTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'early session market close',\n    `regPreOpenTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'regular session pre-open (order accepted)',\n    `regSessionOpenTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'regular session open',\n    `regSessionCloseTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'regular session close',\n    `latePreOpenTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'extended session pre-open (orders accepted)',\n    `lateSessionOpenTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'extended session open',\n    `lateSessionCloseTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'extended session close',\n    `nextDayPreOpenTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'next day session pre-open (order accepted for first T+1 session)',\n    `nextDaySessionOpenTime` TIME(6) NOT NULL DEFAULT '00:00:00.000000' COMMENT 'next day session open (first T+1 session)',\n    `isDefault` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`weekDay`,`secType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Product trading schedule for the current week.  Includes an expected trading day market schedule for each SpiderRock ticker and day-of-week.  Including schedules for equity and futures markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `weekDay`,\n    `secType`,\n    `undTicker_at`,\n    `undTicker_ts`,\n    `undTicker_tk`,\n    `marketDayType`,\n    `srCloseMarkTime`,\n    `earlyPreOpenTime`,\n    `earlySessionOpenTime`,\n    `earlySessionCloseTime`,\n    `regPreOpenTime`,\n    `regSessionOpenTime`,\n    `regSessionCloseTime`,\n    `latePreOpenTime`,\n    `lateSessionOpenTime`,\n    `lateSessionCloseTime`,\n    `nextDayPreOpenTime`,\n    `nextDaySessionOpenTime`,\n    `isDefault`,\n    `timestamp`\nFROM `SRLive`.`MsgTradingSchedule`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday') */ \n    `weekDay` = 'Sunday'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='TradingSchedule' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(96540);const d={},t=r.createContext(d);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
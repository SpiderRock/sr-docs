"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["30794"],{86190:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/AutoResponderVegaDir","title":"AutoResponderVegaDir","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/AutoResponderVegaDir.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"AutoResponderSN","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderSN/"},"next":{"title":"ExternAggGroupGateway","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupGateway/"}}'),d=t("52676"),s=t("91503");let i={},a=void 0,l={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"../../../Topics/liquidity-notice/AutoResponderVegaDir",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Topic"}),(0,d.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"MLink Token"}),(0,d.jsx)(n.td,{children:"SRATS"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Product"}),(0,d.jsx)(n.td,{children:"SRTrade"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accessType"}),(0,d.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accnt"}),(0,d.jsx)(n.td,{children:"VARCHAR(16)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"clientFirm"}),(0,d.jsx)(n.td,{children:"VARCHAR(16)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"root_at"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"root_ts"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"root_tk"}),(0,d.jsx)(n.td,{children:"VARCHAR(12)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"respSide"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"auction responder side your side"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"responderID"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"client supplied responder ID can be any number including zero"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"userName"}),(0,d.jsx)(n.td,{children:"VARCHAR(24)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"username used for responding to auction notices"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"isDisabled"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"if Yes this autoresponder record is disabled"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"enabledUntil"}),(0,d.jsx)(n.td,{children:"DATETIME(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(n.td,{children:"will be enabled up until this time"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"canIncludeFlex"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"if yes can respond to auction notices that include flex option legs"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"canIncludeStock"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"if yes can respond to auction notices that include a stock leg"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cpFlag"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'Pair'"}),(0,d.jsx)(n.td,{children:"if not Pair must match all option legs"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minNetVegaRatio"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"1.0"}),(0,d.jsx)(n.td,{children:"minimum ratio of absnetVegatotalVega to enable a response hard lower limit of 025"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minYears"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"all leg years must be between minYears maxYears"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxYears"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"10.0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minExpiry"}),(0,d.jsx)(n.td,{children:"DATETIME(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(n.td,{children:"all leg expiries must be between minExpiry maxExpiry"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxExpiry"}),(0,d.jsx)(n.td,{children:"DATETIME(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minXDelta"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-0.50"}),(0,d.jsx)(n.td,{children:"all leg xDelta must be between minXDelta maxXDelta"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxXDelta"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"+0.50"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minStrike"}),(0,d.jsx)(n.td,{children:"DOUBLE"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"all leg strikes must be between minStrike maxStrike"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxStrike"}),(0,d.jsx)(n.td,{children:"DOUBLE"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"999999"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minSurfEdgePrem"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-99"}),(0,d.jsx)(n.td,{children:"spread surface edge in premium   through surface   behind surface"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minSurfEdgeVol"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-99"}),(0,d.jsx)(n.td,{children:"spread surface edge in vol 001  10 vol pts   through surface   behind surface"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"incFeesInResp"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"include all estimated responder fees in final response price"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"roundRule"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/RoundRule",children:"enum - RoundRule"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxResponseSize"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"maximum number of contracts per response will respond for 100 if auction size  maxResponseSize"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxResponseVega"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"maximum total vega per response"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"totalResponseVega"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"maximum vega filled all day"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"totalResponseWtVega"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"maximum wtVega filled all day"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"autoHedge"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AutoHedge",children:"enum - AutoHedge"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeInstrument"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/HedgeInst",children:"enum - HedgeInst"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"Defaultactual underlier EQT or FUT IndexOptions use ETF FrontMonthactual underlier EQT or front month FUT IndexOptions use FM Fut StockhedgeSecKeyTickerKey FuturehedgeSecKeyExpiryKey"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeSecKey_at"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeSecKey_ts"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeSecKey_tk"}),(0,d.jsx)(n.td,{children:"VARCHAR(12)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeSecKey_yr"}),(0,d.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeSecKey_mn"}),(0,d.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeSecKey_dy"}),(0,d.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeBetaRatio"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"portion of executed money to autohedge can be 10  Beta for beta hedging 40 to 40"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeScope"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/HedgeScope",children:"enum - HedgeScope"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"hedge group scope RiskGroup or Accnt"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeSession"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/MarketSession",children:"enum - MarketSession"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"time in force for the autohedge order can be Day or ExtDay None defaults to pOrdertimeInForce"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"riskGroupId"}),(0,d.jsx)(n.td,{children:"CHAR(19)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,d.jsx)(n.td,{children:"Default 0 none  Required to be nonzero if autoHedge is something other than None"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modifiedBy"}),(0,d.jsx)(n.td,{children:"VARCHAR(24)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modifiedIn"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"timestamp"}),(0,d.jsx)(n.td,{children:"DATETIME(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Sequence"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accnt"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"clientFirm"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"root_tk"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"root_at"}),(0,d.jsx)(n.td,{children:"4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"root_ts"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"respSide"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"responderID"}),(0,d.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAutoResponderVegaDir` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `respSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'auction responder side (your side)',\n    `responderID` INT NOT NULL DEFAULT 0 COMMENT 'client supplied responder ID (can be any number including zero)',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'username used for responding to auction notices',\n    `isDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this auto-responder record is disabled',\n    `enabledUntil` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'will be enabled up until this time',\n    `canIncludeFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, can respond to auction notices that include flex option legs',\n    `canIncludeStock` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, can respond to auction notices that include a stock leg',\n    `cpFlag` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Pair' COMMENT 'if not Pair must match all option legs',\n    `minNetVegaRatio` FLOAT NOT NULL DEFAULT 1.0 COMMENT 'minimum ratio of abs(netVega)/totalVega to enable a response (hard lower limit of 0.25)',\n    `minYears` FLOAT NOT NULL DEFAULT 0 COMMENT 'all leg years must be between [minYears, maxYears]',\n    `maxYears` FLOAT NOT NULL DEFAULT 10.0,\n    `minExpiry` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'all leg expiries must be between [minExpiry, maxExpiry]',\n    `maxExpiry` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `minXDelta` FLOAT NOT NULL DEFAULT -0.50 COMMENT 'all leg xDelta must be between [minXDelta, maxXDelta]',\n    `maxXDelta` FLOAT NOT NULL DEFAULT +0.50,\n    `minStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'all leg strikes must be between [minStrike, maxStrike]',\n    `maxStrike` DOUBLE NOT NULL DEFAULT 999999,\n    `minSurfEdgePrem` FLOAT NOT NULL DEFAULT -99 COMMENT 'spread surface edge (in premium) (+ = through surface; - = behind surface)',\n    `minSurfEdgeVol` FLOAT NOT NULL DEFAULT -99 COMMENT 'spread surface edge (in vol) (0.01 = 1.0 vol pts) (+ = through surface; - = behind surface)',\n    `incFeesInResp` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'include all estimated responder fees in final response price',\n    `roundRule` ENUM('None','Exact','Fuzzy') NOT NULL DEFAULT 'None',\n    `maxResponseSize` INT NOT NULL DEFAULT 0 COMMENT 'maximum number of contracts per response (will respond for 100% if auction size <= maxResponseSize)',\n    `maxResponseVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum total vega per response',\n    `totalResponseVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum vega (filled) all day',\n    `totalResponseWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum wtVega (filled) all day',\n    `autoHedge` ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') NOT NULL DEFAULT 'None',\n    `hedgeInstrument` ENUM('None','Default','FrontMonth','Stock','Future') NOT NULL DEFAULT 'None' COMMENT 'Default=actual underlier (EQT or FUT) [IndexOptions use ETF]; FrontMonth=actual underlier (EQT) or front month (FUT) [IndexOptions use FM Fut]; Stock=hedgeSecKey.TickerKey; Future=hedgeSecKey.ExpiryKey',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeBetaRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'portion of executed $money to auto-hedge (can be 1.0 / Beta for beta hedging) [-4.0 to +4.0]',\n    `hedgeScope` ENUM('None','Accnt','RiskGroup') NOT NULL DEFAULT 'None' COMMENT 'hedge group scope [RiskGroup or Accnt]',\n    `hedgeSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None' COMMENT 'time in force for the autohedge order (can be Day or ExtDay) [None defaults to pOrder.timeInForce]',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'Default: 0 (none).  Required to be non-zero if `autoHedge` is something other than None.',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`,`root_tk`,`root_at`,`root_ts`,`respSide`,`responderID`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,d.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFirm`,\n    `root_at`,\n    `root_ts`,\n    `root_tk`,\n    `respSide`,\n    `responderID`,\n    `userName`,\n    `isDisabled`,\n    `enabledUntil`,\n    `canIncludeFlex`,\n    `canIncludeStock`,\n    `cpFlag`,\n    `minNetVegaRatio`,\n    `minYears`,\n    `maxYears`,\n    `minExpiry`,\n    `maxExpiry`,\n    `minXDelta`,\n    `maxXDelta`,\n    `minStrike`,\n    `maxStrike`,\n    `minSurfEdgePrem`,\n    `minSurfEdgeVol`,\n    `incFeesInResp`,\n    `roundRule`,\n    `maxResponseSize`,\n    `maxResponseVega`,\n    `totalResponseVega`,\n    `totalResponseWtVega`,\n    `autoHedge`,\n    `hedgeInstrument`,\n    `hedgeSecKey_at`,\n    `hedgeSecKey_ts`,\n    `hedgeSecKey_tk`,\n    `hedgeSecKey_yr`,\n    `hedgeSecKey_mn`,\n    `hedgeSecKey_dy`,\n    `hedgeBetaRatio`,\n    `hedgeScope`,\n    `hedgeSession`,\n    `riskGroupId`,\n    `timestamp`\nFROM `SRTrade`.`MsgAutoResponderVegaDir`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None'\n  AND\n    /* Replace with a INT */ \n    `responderID` = 5;\n"})}),"\n",(0,d.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgAutoResponderVegaDir` \nSET\n    /* Replace with a VARCHAR(24) */ \n    `userName` = 'Example_userName',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled` = 'None',\n    /* Replace with a DATETIME(6) */\n    `enabledUntil` = '2022-01-01 12:34:56.000000',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `canIncludeFlex` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `canIncludeStock` = 'None',\n    /* Replace with a ENUM('Call','Put','Pair') */\n    `cpFlag` = 'Pair',\n    /* Replace with a FLOAT */\n    `minNetVegaRatio` = 1.23,\n    /* Replace with a FLOAT */\n    `minYears` = 1.23,\n    /* Replace with a FLOAT */\n    `maxYears` = 1.23,\n    /* Replace with a DATETIME(6) */\n    `minExpiry` = '2022-01-01 12:34:56.000000',\n    /* Replace with a DATETIME(6) */\n    `maxExpiry` = '2022-01-01 12:34:56.000000',\n    /* Replace with a FLOAT */\n    `minXDelta` = 1.23,\n    /* Replace with a FLOAT */\n    `maxXDelta` = 1.23,\n    /* Replace with a DOUBLE */\n    `minStrike` = 4.56,\n    /* Replace with a DOUBLE */\n    `maxStrike` = 4.56,\n    /* Replace with a FLOAT */\n    `minSurfEdgePrem` = 1.23,\n    /* Replace with a FLOAT */\n    `minSurfEdgeVol` = 1.23,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `incFeesInResp` = 'None',\n    /* Replace with a ENUM('None','Exact','Fuzzy') */ \n    `roundRule` = 'None',\n    /* Replace with a INT */ \n    `maxResponseSize` = 5,\n    /* Replace with a FLOAT */ \n    `maxResponseVega` = 1.23,\n    /* Replace with a FLOAT */ \n    `totalResponseVega` = 1.23,\n    /* Replace with a FLOAT */ \n    `totalResponseWtVega` = 1.23,\n    /* Replace with a ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') */ \n    `autoHedge` = 'None',\n    /* Replace with a ENUM('None','Default','FrontMonth','Stock','Future') */ \n    `hedgeInstrument` = 'None',\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `hedgeSecKey_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `hedgeSecKey_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `hedgeSecKey_tk` = 'Example_hedgeSecKey_tk',\n    /* Replace with a SMALLINT UNSIGNED */ \n    `hedgeSecKey_yr` = 123,\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_mn` = 1,\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_dy` = 1,\n    /* Replace with a FLOAT */ \n    `hedgeBetaRatio` = 1.23,\n    /* Replace with a ENUM('None','Accnt','RiskGroup') */ \n    `hedgeScope` = 'None',\n    /* Replace with a ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') */ \n    `hedgeSession` = 'None',\n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None'\n  AND\n    /* Replace with a INT */ \n    `responderID` = 5;\n"})}),"\n",(0,d.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgAutoResponderVegaDir`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `root_tk`,\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide`,\n    /* Replace with a INT */ \n    `responderID`,\n    /* Replace with a VARCHAR(24) */ \n    `userName`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled`,\n    /* Replace with a DATETIME(6) */\n    `enabledUntil`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `canIncludeFlex`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `canIncludeStock`,\n    /* Replace with a ENUM('Call','Put','Pair') */\n    `cpFlag`,\n    /* Replace with a FLOAT */\n    `minNetVegaRatio`,\n    /* Replace with a FLOAT */\n    `minYears`,\n    /* Replace with a FLOAT */\n    `maxYears`,\n    /* Replace with a DATETIME(6) */\n    `minExpiry`,\n    /* Replace with a DATETIME(6) */\n    `maxExpiry`,\n    /* Replace with a FLOAT */\n    `minXDelta`,\n    /* Replace with a FLOAT */\n    `maxXDelta`,\n    /* Replace with a DOUBLE */\n    `minStrike`,\n    /* Replace with a DOUBLE */\n    `maxStrike`,\n    /* Replace with a FLOAT */\n    `minSurfEdgePrem`,\n    /* Replace with a FLOAT */\n    `minSurfEdgeVol`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `incFeesInResp`,\n    /* Replace with a ENUM('None','Exact','Fuzzy') */ \n    `roundRule`,\n    /* Replace with a INT */ \n    `maxResponseSize`,\n    /* Replace with a FLOAT */ \n    `maxResponseVega`,\n    /* Replace with a FLOAT */ \n    `totalResponseVega`,\n    /* Replace with a FLOAT */ \n    `totalResponseWtVega`,\n    /* Replace with a ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') */ \n    `autoHedge`,\n    /* Replace with a ENUM('None','Default','FrontMonth','Stock','Future') */ \n    `hedgeInstrument`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `hedgeSecKey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `hedgeSecKey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `hedgeSecKey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `hedgeSecKey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_dy`,\n    /* Replace with a FLOAT */ \n    `hedgeBetaRatio`,\n    /* Replace with a ENUM('None','Accnt','RiskGroup') */ \n    `hedgeScope`,\n    /* Replace with a ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') */ \n    `hedgeSession`,\n    /* Replace with a CHAR(19) */\n    `riskGroupId`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_root_tk',\n    'None',\n    5,\n    'Example_userName',\n    'None',\n    '2022-01-01 12:34:56.000000',\n    'None',\n    'None',\n    'Pair',\n    1.23,\n    1.23,\n    1.23,\n    '2022-01-01 12:34:56.000000',\n    '2022-01-01 12:34:56.000000',\n    1.23,\n    1.23,\n    4.56,\n    4.56,\n    1.23,\n    1.23,\n    'None',\n    'None',\n    5,\n    1.23,\n    1.23,\n    1.23,\n    'None',\n    'None',\n    'None',\n    'None',\n    'Example_hedgeSecKey_tk',\n    123,\n    1,\n    1,\n    1.23,\n    'None',\n    'None',\n    'Example_riskGroupId',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,d.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgAutoResponderVegaDir` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None'\n  AND\n    /* Replace with a INT */ \n    `responderID` = 5;\n"})}),"\n",(0,d.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AutoResponderVegaDir' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},91503:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(75271);let d={},s=r.createContext(d);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
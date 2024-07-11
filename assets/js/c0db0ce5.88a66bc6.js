"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64573],{55250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var d=r(74848),n=r(28453);const s={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/AutoResponderVegaDir",title:"AutoResponderVegaDir",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/AutoResponderVegaDir.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AutoResponderSN",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderSN/"},next:{title:"ExternAggGroupGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupGateway/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AutoResponderVegaDir",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRTrade"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"expiry"}),(0,d.jsx)(t.td,{children:"DATE"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'1900-01-01'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"respSide"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"auction responder side your side"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"userName"}),(0,d.jsx)(t.td,{children:"VARCHAR(24)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"username used for responding to auction notices"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isDisabled"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"if Yes this autoresponder record is disabled"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"canIncludeFlex"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"if yes can respond to auction notices that include flex option legs"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"canIncludeStock"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"if yes can respond to auction notices that include a stock leg"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cpFlag"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'Pair'"}),(0,d.jsx)(t.td,{children:"if not Pair must match all option legs"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minXDelta"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"-0.50"}),(0,d.jsx)(t.td,{children:"all leg xDelta must be between minXDelta maxXDelta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxXDelta"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"+0.50"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minStrike"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"all leg strikes must be between minStrike maxStrike"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxStrike"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"999999"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minSurfEdgePrem"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"-99"}),(0,d.jsx)(t.td,{children:"spread surface edge in premium   through surface   behind surface"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minSurfEdgeVol"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"-99"}),(0,d.jsx)(t.td,{children:"spread surface edge in vol 001  10 vol pts   through surface   behind surface"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"incFeesInResp"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"include all estimated responder fees in final response price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"roundRule"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/RoundRule",children:"enum - RoundRule"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxResponseSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"maximum number of contracts per response will respond for 100 if auction size  maxResponseSize"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxResponseVega"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"maximum total vega per response"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"totalResponseVega"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"maximum vega filled all day"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"totalResponseWtVega"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"maximum wtVega filled all day"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"autoHedge"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AutoHedge",children:"enum - AutoHedge"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeInstrument"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/HedgeInst",children:"enum - HedgeInst"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"Defaultactual underlier EQT or FUT IndexOptions use ETF FrontMonthactual underlier EQT or front month FUT IndexOptions use FM Fut StockhedgeSecKeyTickerKey FuturehedgeSecKeyExpiryKey"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeBetaRatio"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"portion of executed money to autohedge can be 10  Beta for beta hedging 40 to 40"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeScope"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/HedgeScope",children:"enum - HedgeScope"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"hedge group scope RiskGroup or Accnt"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSession"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MarketSession",children:"enum - MarketSession"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"time in force for the autohedge order can be Day or ExtDay None defaults to pOrdertimeInForce"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"riskGroupId"}),(0,d.jsx)(t.td,{children:"CHAR(19)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,d.jsx)(t.td,{children:"Default 0 none  Required to be nonzero if autoHedge is something other than None"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modifiedBy"}),(0,d.jsx)(t.td,{children:"VARCHAR(24)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modifiedIn"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(t.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"expiry"}),(0,d.jsx)(t.td,{children:"6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"respSide"}),(0,d.jsx)(t.td,{children:"7"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAutoResponderVegaDir` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `respSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'auction responder side (your side)',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'username used for responding to auction notices',\n    `isDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this auto-responder record is disabled',\n    `canIncludeFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, can respond to auction notices that include flex option legs',\n    `canIncludeStock` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, can respond to auction notices that include a stock leg',\n    `cpFlag` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Pair' COMMENT 'if not Pair must match all option legs',\n    `minXDelta` FLOAT NOT NULL DEFAULT -0.50 COMMENT 'all leg xDelta must be between [minXDelta, maxXDelta]',\n    `maxXDelta` FLOAT NOT NULL DEFAULT +0.50,\n    `minStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'all leg strikes must be between [minStrike, maxStrike]',\n    `maxStrike` DOUBLE NOT NULL DEFAULT 999999,\n    `minSurfEdgePrem` FLOAT NOT NULL DEFAULT -99 COMMENT 'spread surface edge (in premium) (+ = through surface; - = behind surface)',\n    `minSurfEdgeVol` FLOAT NOT NULL DEFAULT -99 COMMENT 'spread surface edge (in vol) (0.01 = 1.0 vol pts) (+ = through surface; - = behind surface)',\n    `incFeesInResp` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'include all estimated responder fees in final response price',\n    `roundRule` ENUM('None','Exact','Fuzzy') NOT NULL DEFAULT 'None',\n    `maxResponseSize` INT NOT NULL DEFAULT 0 COMMENT 'maximum number of contracts per response (will respond for 100% if auction size <= maxResponseSize)',\n    `maxResponseVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum total vega per response',\n    `totalResponseVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum vega (filled) all day',\n    `totalResponseWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum wtVega (filled) all day',\n    `autoHedge` ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') NOT NULL DEFAULT 'None',\n    `hedgeInstrument` ENUM('None','Default','FrontMonth','Stock','Future') NOT NULL DEFAULT 'None' COMMENT 'Default=actual underlier (EQT or FUT) [IndexOptions use ETF]; FrontMonth=actual underlier (EQT) or front month (FUT) [IndexOptions use FM Fut]; Stock=hedgeSecKey.TickerKey; Future=hedgeSecKey.ExpiryKey',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeBetaRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'portion of executed $money to auto-hedge (can be 1.0 / Beta for beta hedging) [-4.0 to +4.0]',\n    `hedgeScope` ENUM('None','Accnt','RiskGroup') NOT NULL DEFAULT 'None' COMMENT 'hedge group scope [RiskGroup or Accnt]',\n    `hedgeSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None' COMMENT 'time in force for the autohedge order (can be Day or ExtDay) [None defaults to pOrder.timeInForce]',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'Default: 0 (none).  Required to be non-zero if `autoHedge` is something other than None.',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`,`ticker_tk`,`ticker_at`,`ticker_ts`,`expiry`,`respSide`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var d=r(96540);const n={},s=d.createContext(n);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);
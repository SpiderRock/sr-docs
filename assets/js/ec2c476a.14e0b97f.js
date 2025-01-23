"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[65601],{96266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(74848),d=t(28453);const s={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/NoticeResponse/NoticeResponse",title:"NoticeResponse",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/NoticeResponse/NoticeResponse.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/NoticeResponse",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/NoticeResponse/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/NoticeResponse/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"NoticeExecReport",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/NoticeExecReport/"},next:{title:"OptAwayTktGateway",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/OptAwayTktGateway/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (OrderLegsList)",id:"json-block-orderlegslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/liquidity-notice/NoticeResponse",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SRATS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRTrade"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"noticeNumber"}),(0,r.jsx)(n.td,{children:"CHAR(19)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(n.td,{children:"required AuctionNoticenoticeNumber"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"required SR Accnt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"optional SR ClientFirm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"responseId"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"required client ResponseId of this response reflected back on NoticeExecReport messages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"filled in on server underlier ticker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"filled in on server underlier ticker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"filled in on server underlier ticker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tradeDate"}),(0,r.jsx)(n.td,{children:"DATE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01'"}),(0,r.jsx)(n.td,{children:"filled in on server"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stageType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrStageType",children:"enum - SpdrStageType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"optional default is NoneLive can only be supplied on the initial notice response in a cancelreplace chain"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"respSide"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"respSize"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"respPrice"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refUPrc"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refDe"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refGa"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"deltaAdj"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/DeltaDirection",children:"enum - DeltaDirection"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"optional Delta Adjusted Limit type None  Price Limit"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minUBid"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxUAsk"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskGroupId"}),(0,r.jsx)(n.td,{children:"CHAR(19)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(n.td,{children:"optional any auction response is associated with this riskGroupID and SpdrRiskGroupControl"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"strategy"}),(0,r.jsx)(n.td,{children:"VARCHAR(32)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"optional user strategy field visible on SR tools"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userData1"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"optional user data field free text reflected on NoticeResponse"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"locateFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"locatePool"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"reqAuxRiskGroupCtrl"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autoHedge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AutoHedge",children:"enum - AutoHedge"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeInstrument"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/HedgeInst",children:"enum - HedgeInst"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeSecKey_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeSecKey_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeSecKey_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeSecKey_yr"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeSecKey_mn"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeSecKey_dy"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeBetaRatio"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"portion of executed money to autohedge can be 10  Beta for beta hedging 40 to 40"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeScope"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/HedgeScope",children:"enum - HedgeScope"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"hedge group scope RiskGroup or Accnt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hedgeSession"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarketSession",children:"enum - MarketSession"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedBy"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrderLegsList"}),(0,r.jsx)(n.td,{children:"JSON"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'JSON_ARRAY()'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"noticeNumber"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"responseId"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"json-block-orderlegslist",children:"JSON Block (OrderLegsList)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/secKey",children:"enum - secKey"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"side"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"positionType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/LegPositionType",children:"enum - LegPositionType"})}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgNoticeResponse` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT '(required) AuctionNotice.noticeNumber',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT '(required) SR Accnt',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT '(optional) SR ClientFirm',\n    `responseId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT '(required) client ResponseId of this response; reflected back on NoticeExecReport messages',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT '(filled in on server) underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT '(filled in on server) underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT '(filled in on server) underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT '(filled in on server)',\n    `stageType` ENUM('None','ModifyAny','ModifyAlgo') NOT NULL DEFAULT 'None' COMMENT '(optional) (default is None/Live) can only be supplied on the initial notice response in a cancel/replace chain',\n    `respSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `respSize` INT NOT NULL DEFAULT 0,\n    `respPrice` DOUBLE NOT NULL DEFAULT 0,\n    `refUPrc` DOUBLE NOT NULL DEFAULT 0,\n    `refDe` FLOAT NOT NULL DEFAULT 0,\n    `refGa` FLOAT NOT NULL DEFAULT 0,\n    `deltaAdj` ENUM('None','OneWay','TwoWay') NOT NULL DEFAULT 'None' COMMENT '(optional) Delta Adjusted Limit type. (None = Price Limit)',\n    `minUBid` FLOAT NOT NULL DEFAULT 0,\n    `maxUAsk` FLOAT NOT NULL DEFAULT 0,\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT '(optional) any auction response is associated with this riskGroupID (and SpdrRiskGroupControl)',\n    `strategy` VARCHAR(32) NOT NULL DEFAULT '' COMMENT '(optional) user strategy field (visible on SR tools)',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT '(optional) user data field (free text) (reflected on NoticeResponse)',\n    `locateFirm` VARCHAR(6) NOT NULL DEFAULT '',\n    `locatePool` VARCHAR(16) NOT NULL DEFAULT '',\n    `reqAuxRiskGroupCtrl` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `autoHedge` ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') NOT NULL DEFAULT 'None',\n    `hedgeInstrument` ENUM('None','Default','FrontMonth','Stock','Future') NOT NULL DEFAULT 'None',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeBetaRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'portion of executed $money to auto-hedge (can be 1.0 / Beta for beta hedging) [-4.0 to +4.0]',\n    `hedgeScope` ENUM('None','Accnt','RiskGroup') NOT NULL DEFAULT 'None' COMMENT 'hedge group scope [RiskGroup or Accnt]',\n    `hedgeSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `OrderLegsList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(OrderLegsList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`,`accnt`,`clientFirm`,`responseId`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `noticeNumber`,\n    `accnt`,\n    `clientFirm`,\n    `responseId`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `stageType`,\n    `respSide`,\n    `respSize`,\n    `respPrice`,\n    `refUPrc`,\n    `refDe`,\n    `refGa`,\n    `deltaAdj`,\n    `minUBid`,\n    `maxUAsk`,\n    `riskGroupId`,\n    `strategy`,\n    `userData1`,\n    `locateFirm`,\n    `locatePool`,\n    `reqAuxRiskGroupCtrl`,\n    `autoHedge`,\n    `hedgeInstrument`,\n    `hedgeSecKey_at`,\n    `hedgeSecKey_ts`,\n    `hedgeSecKey_tk`,\n    `hedgeSecKey_yr`,\n    `hedgeSecKey_mn`,\n    `hedgeSecKey_dy`,\n    `hedgeBetaRatio`,\n    `hedgeScope`,\n    `hedgeSession`,\n    `timestamp`,\n    `OrderLegsList`\nFROM `SRTrade`.`MsgNoticeResponse`\nWHERE \n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(24) */ \n    `responseId` = 'Example_responseId';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgNoticeResponse` \nSET\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk',\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01',\n    /* Replace with a ENUM('None','ModifyAny','ModifyAlgo') */ \n    `stageType` = 'None',\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None',\n    /* Replace with a INT */ \n    `respSize` = 5,\n    /* Replace with a DOUBLE */ \n    `respPrice` = 4.56,\n    /* Replace with a DOUBLE */ \n    `refUPrc` = 4.56,\n    /* Replace with a FLOAT */ \n    `refDe` = 1.23,\n    /* Replace with a FLOAT */ \n    `refGa` = 1.23,\n    /* Replace with a ENUM('None','OneWay','TwoWay') */ \n    `deltaAdj` = 'None',\n    /* Replace with a FLOAT */ \n    `minUBid` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxUAsk` = 1.23,\n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId',\n    /* Replace with a VARCHAR(32) */ \n    `strategy` = 'Example_strategy',\n    /* Replace with a TINYTEXT */ \n    `userData1` = 'dummy tiny text',\n    /* Replace with a VARCHAR(6) */ \n    `locateFirm` = 'Example_locateFirm',\n    /* Replace with a VARCHAR(16) */ \n    `locatePool` = 'Example_locatePool',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `reqAuxRiskGroupCtrl` = 'None',\n    /* Replace with a ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') */ \n    `autoHedge` = 'None',\n    /* Replace with a ENUM('None','Default','FrontMonth','Stock','Future') */ \n    `hedgeInstrument` = 'None',\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `hedgeSecKey_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `hedgeSecKey_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `hedgeSecKey_tk` = 'Example_hedgeSecKey_tk',\n    /* Replace with a SMALLINT UNSIGNED */ \n    `hedgeSecKey_yr` = 123,\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_mn` = 1,\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_dy` = 1,\n    /* Replace with a FLOAT */ \n    `hedgeBetaRatio` = 1.23,\n    /* Replace with a ENUM('None','Accnt','RiskGroup') */ \n    `hedgeScope` = 'None',\n    /* Replace with a ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') */ \n    `hedgeSession` = 'None',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000',\n    /* Replace with a JSON */\n    `OrderLegsList` = '{\"key\": \"value\"}'\nWHERE\n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(24) */ \n    `responseId` = 'Example_responseId';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgNoticeResponse`(\n    /* Replace with a CHAR(19) */\n    `noticeNumber`,\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a VARCHAR(24) */ \n    `responseId`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a DATE */\n    `tradeDate`,\n    /* Replace with a ENUM('None','ModifyAny','ModifyAlgo') */ \n    `stageType`,\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide`,\n    /* Replace with a INT */ \n    `respSize`,\n    /* Replace with a DOUBLE */ \n    `respPrice`,\n    /* Replace with a DOUBLE */ \n    `refUPrc`,\n    /* Replace with a FLOAT */ \n    `refDe`,\n    /* Replace with a FLOAT */ \n    `refGa`,\n    /* Replace with a ENUM('None','OneWay','TwoWay') */ \n    `deltaAdj`,\n    /* Replace with a FLOAT */ \n    `minUBid`,\n    /* Replace with a FLOAT */ \n    `maxUAsk`,\n    /* Replace with a CHAR(19) */\n    `riskGroupId`,\n    /* Replace with a VARCHAR(32) */ \n    `strategy`,\n    /* Replace with a TINYTEXT */ \n    `userData1`,\n    /* Replace with a VARCHAR(6) */ \n    `locateFirm`,\n    /* Replace with a VARCHAR(16) */ \n    `locatePool`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `reqAuxRiskGroupCtrl`,\n    /* Replace with a ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') */ \n    `autoHedge`,\n    /* Replace with a ENUM('None','Default','FrontMonth','Stock','Future') */ \n    `hedgeInstrument`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `hedgeSecKey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `hedgeSecKey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `hedgeSecKey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `hedgeSecKey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_dy`,\n    /* Replace with a FLOAT */ \n    `hedgeBetaRatio`,\n    /* Replace with a ENUM('None','Accnt','RiskGroup') */ \n    `hedgeScope`,\n    /* Replace with a ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') */ \n    `hedgeSession`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`,\n    /* Replace with a JSON */\n    `OrderLegsList`\n) \nVALUES(\n    'Example_noticeNumber',\n    'Example_accnt',\n    'Example_clientFirm',\n    'Example_responseId',\n    'None',\n    'None',\n    'Example_ticker_tk',\n    '2022-01-01',\n    'None',\n    'None',\n    5,\n    4.56,\n    4.56,\n    1.23,\n    1.23,\n    'None',\n    1.23,\n    1.23,\n    'Example_riskGroupId',\n    'Example_strategy',\n    'dummy tiny text',\n    'Example_locateFirm',\n    'Example_locatePool',\n    'None',\n    'None',\n    'None',\n    'None',\n    'None',\n    'Example_hedgeSecKey_tk',\n    123,\n    1,\n    1,\n    1.23,\n    'None',\n    'None',\n    '2022-01-01 12:34:56.000000',\n    '{\"key\": \"value\"}'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgNoticeResponse` \nWHERE\n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(24) */ \n    `responseId` = 'Example_responseId';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='NoticeResponse' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const d={},s=r.createContext(d);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
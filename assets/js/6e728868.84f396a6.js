"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[66653],{56340:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(74848),d=s(28453);const r={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/SymbolRiskDetailV5",title:"SymbolRiskDetailV5",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/SymbolRiskDetailV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SymbolMarginSummaryV5",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolMarginSummaryV5/"},next:{title:"SymbolRiskSummaryV5",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskSummaryV5/"}},a={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/risk-v5/SymbolRiskDetailV5",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(t.p,{children:"SymbolRiskDetail records contain semi-static markup detail for SymbolRiskSummary records."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"4740-risk-v5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"ClientRisk"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRRisk"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tradeDate"}),(0,n.jsx)(t.td,{children:"DATE"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'1900-01-01'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"SR assigned client firm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientTags"}),(0,n.jsx)(t.td,{children:"TEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"optional user defined account tags eg tagtagtagtag max of 10000 total chars including seps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stkStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/StkStatus",children:"enum - StkStatus"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'Hold'"}),(0,n.jsx)(t.td,{children:"Stock trading status indicator user controlledused by the HedgeTool and by trade controllers SymbolControlstkStatus"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"optStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/OptStatus",children:"enum - OptStatus"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'Hold'"}),(0,n.jsx)(t.td,{children:"Option trading status indicator user controlledonly used by trade controllers SymbolControloptStatus"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"riskClass"}),(0,n.jsx)(t.td,{children:"VARCHAR(8)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"Symbol Risk Class Code user supplied SymbolControlriskClass"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"theoModel"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"SR assigned theo model tag associated with user supplied theo surfaces AccountConfigtheoModel"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"theoModel2"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"SR assigned theo model2 tag associated with user supplied theo surfaces AccountConfigtheoModel2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeDeltaRule"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/HedgeDeltaRule",children:"enum - HedgeDeltaRule"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"HedgeDelta Source IVol  use SR implied surface sticky strike IvS  use SR surface sticky delta TVol  use user supplied theo surface sticky strike TvS  use user supplied theo surface and atm veSlope sticky delta AccountConfighedgeDelta"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"holdReason"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/HoldReason",children:"enum - HoldReason"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"User supplied description only informational SymbolControlholdReason"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"binaryDays"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Fractional days 0  50 prior to expiration after which hedgeDeltas become binary 10 05 0 05 10 SymbolControlbinaryDays"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ctrlUpdate"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{children:"last update dttm of SymbolControl record SymbolControltimestamp"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"periodEndTime"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{children:"DTTM of the end of the current trading period"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbolType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"SymbolType Equity ETF ShortETF ADR CashIndex FutureComplex"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"Symbol namedescription"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sector"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"beta usually beta to SPX see AccountConfigbetaSource"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"betaSource"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BetaSource",children:"enum - BetaSource"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stkVolume"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"trailing 30 day average daily stock volume"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"optVolume"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"trailing 30 day average daily option volume"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tapeCode"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TapeCode",children:"enum - TapeCode"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"market data tape code"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"marginType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/MarginType",children:"enum - MarginType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"margin slide type NMSEquity   15 NMSIndex  86 NMSMedium  10"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pointCurrency"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dAmt"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"amount of the next expected dividend"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dDays"}),(0,n.jsx)(t.td,{children:"SMALLINT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"days to next expected dividend negative indicates days from a recent exdate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eDays"}),(0,n.jsx)(t.td,{children:"SMALLINT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"days to next expected earnings negative indicates days from a recent announcement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"locateQuan"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"starting locate quantity in this symbol befores trades"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"availableLocateQuan"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"available equity locate quantity in this symbol after trades"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gcFlag"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"is this symbol a general collateral name no special borrow rate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gcRate"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"expected overnight rate if general collateral usually FF overnight rate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"borrowRate"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"expected overnight borrow rate special borrrow"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stMinIVol"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"minimum atm implied volatility all expirations with a position"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stMaxIVol"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"maximum atm implied volatility all expirations with a position"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"earnMult"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"expected earnings multiplier affects some risk slides 10  80"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"earnMultErr"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"baseVol"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"from earn mult fit 075 yrs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tailVol"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"weighted toward max expiration"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_tk"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_at"}),(0,n.jsx)(t.td,{children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_ts"}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tradeDate"}),(0,n.jsx)(t.td,{children:"5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgSymbolRiskDetailV5` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `clientTags` TEXT NOT NULL DEFAULT '' COMMENT '(optional) user defined account tag(s) (eg. tag,tag,tag,tag) [max of 10,000 total chars (including seps)]' CHECK(LENGTH(clientTags) <= 10000),\n    `stkStatus` ENUM('Hold','TwoWay','DayHold') NOT NULL DEFAULT 'Hold' COMMENT 'Stock trading status indicator (user controlled;used by the HedgeTool and by trade controllers) [SymbolControl.stkStatus]',\n    `optStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'Hold' COMMENT 'Option trading status indicator (user controlled;only used by trade controllers) [SymbolControl.optStatus]',\n    `riskClass` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'Symbol Risk Class Code (user supplied) [SymbolControl.riskClass]',\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned theo model tag (associated with user supplied theo surfaces) [AccountConfig.theoModel]',\n    `theoModel2` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned theo model#2 tag (associated with user supplied theo surfaces) [AccountConfig.theoModel2]',\n    `hedgeDeltaRule` ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') NOT NULL DEFAULT 'None' COMMENT 'HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (sticky delta), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface and atm veSlope (sticky delta)) [AccountConfig.hedgeDelta]',\n    `holdReason` ENUM('None','BadData','CorpAction','PendDeal','PendEvent','ExtTrade','LowPrice','PendEarn','DealRumour','BadDiv','Watch','NewSym','NoLoc','NegPerf','NegEdge') NOT NULL DEFAULT 'None' COMMENT 'User supplied description (only informational) [SymbolControl.holdReason]',\n    `binaryDays` FLOAT NOT NULL DEFAULT 0 COMMENT 'Fractional days [0 - 5.0] prior to expiration after which hedgeDeltas become binary [-1.0, -0.5, 0, +0.5, +1.0] [SymbolControl.binaryDays]',\n    `ctrlUpdate` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last update dttm of SymbolControl record [SymbolControl.timestamp]',\n    `periodEndTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'DTTM of the end of the current trading period',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None' COMMENT 'SymbolType (Equity, ETF, ShortETF, ADR, CashIndex, FutureComplex)',\n    `name` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'Symbol name/description',\n    `industry` INT NOT NULL DEFAULT 0,\n    `sector` VARCHAR(16) NOT NULL DEFAULT '',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'beta (usually beta to SPX; see AccountConfig.betaSource)',\n    `betaSource` ENUM('None','betaSPX','betaQQQ','betaIWM','clientBeta') NOT NULL DEFAULT 'None',\n    `stkVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'trailing 30 day average daily stock volume',\n    `optVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'trailing 30 day average daily option volume',\n    `tapeCode` ENUM('None','A','B','C') NOT NULL DEFAULT 'None' COMMENT 'market data tape code',\n    `marginType` ENUM('None','NMS_Equity','NMS_Index','NMS_Medium') NOT NULL DEFAULT 'None' COMMENT 'margin slide type: NMS_Equity = +/- 15%, NMS_Index = -8%/+6%, NMS_Medium = +/-10%',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `dAmt` FLOAT NOT NULL DEFAULT 0 COMMENT '$amount of the next expected dividend',\n    `dDays` SMALLINT NOT NULL DEFAULT 0 COMMENT 'days to next expected dividend (negative indicates days from a recent ex-date)',\n    `eDays` SMALLINT NOT NULL DEFAULT 0 COMMENT 'days to next expected earnings (negative indicates days from a recent announcement)',\n    `locateQuan` INT NOT NULL DEFAULT 0 COMMENT 'starting locate quantity in this symbol befores trades',\n    `availableLocateQuan` INT NOT NULL DEFAULT 0 COMMENT 'available equity locate quantity in this symbol after trades',\n    `gcFlag` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'is this symbol a general collateral name (no special borrow rate)',\n    `gcRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'expected overnight rate if general collateral (usually FF overnight rate)',\n    `borrowRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'expected overnight borrow rate (special borrrow)',\n    `stMinIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'minimum atm implied volatility (all expirations with a position)',\n    `stMaxIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum atm implied volatility (all expirations with a position)',\n    `earnMult` FLOAT NOT NULL DEFAULT 0 COMMENT 'expected earnings multiplier (affects some risk slides) [1.0 - 8.0]',\n    `earnMultErr` FLOAT NOT NULL DEFAULT 0,\n    `baseVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'from earn mult fit (<0.75 yrs)',\n    `tailVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'weighted toward max expiration',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`accnt`,`tradeDate`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SymbolRiskDetail records contain semi-static markup detail for SymbolRiskSummary records.';\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `accnt`,\n    `tradeDate`,\n    `clientFirm`,\n    `clientTags`,\n    `stkStatus`,\n    `optStatus`,\n    `riskClass`,\n    `theoModel`,\n    `theoModel2`,\n    `hedgeDeltaRule`,\n    `holdReason`,\n    `binaryDays`,\n    `ctrlUpdate`,\n    `periodEndTime`,\n    `symbolType`,\n    `name`,\n    `industry`,\n    `sector`,\n    `beta`,\n    `betaSource`,\n    `stkVolume`,\n    `optVolume`,\n    `tapeCode`,\n    `marginType`,\n    `pointCurrency`,\n    `dAmt`,\n    `dDays`,\n    `eDays`,\n    `locateQuan`,\n    `availableLocateQuan`,\n    `gcFlag`,\n    `gcRate`,\n    `borrowRate`,\n    `stMinIVol`,\n    `stMaxIVol`,\n    `earnMult`,\n    `earnMultErr`,\n    `baseVol`,\n    `tailVol`,\n    `timestamp`\nFROM `SRRisk`.`MsgSymbolRiskDetailV5`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='SymbolRiskDetailV5' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const d={},r=n.createContext(d);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
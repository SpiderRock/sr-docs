"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84804],{39345:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var d=s(74848),r=s(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskDetailV5/ProductRiskDetailV5",title:"ProductRiskDetailV5",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskDetailV5/ProductRiskDetailV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskDetailV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskDetailV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskDetailV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/OptionPositionRecordV5/"},next:{title:"ProductRiskSummaryV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskSummaryV5/"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/risk-v5/ProductRiskDetailV5",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.p,{children:"ProductRiskDetail records contain semi-static markup detail for FutureRiskSummary records."}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"4740-risk-v5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRRisk"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"DATE"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"1900-01-01"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"SR assigned client firm"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"periodEndTime"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(t.td,{children:"DTTM of the end of the current trading period"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"viewGroup1"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"Account Group 1 SR Assigned used to organize account groups AccountConfigviewGroup1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"viewGroup2"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"Account Group 2 SR Assigned used to organize account groups AccountConfigviewGroup2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"viewGroup3"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"Account Group 3 SR Assigned used to organize account groups AccountConfigviewGroup3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"futStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/FutStatus",children:"enum - FutStatus"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'Hold'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"optStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/OptStatus",children:"enum - OptStatus"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'Hold'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"riskClass"}),(0,d.jsx)(t.td,{children:"VARCHAR(8)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"Symbol Risk Class Code user supplied SymbolControlriskClass"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theoModel"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"SR assigned theo model tag associated with user supplied theo surfaces AccountConfigtheoModel"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theoModel2"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"SR assigned theo model2 tag associated with user supplied theo surfaces AccountConfigtheoModel2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeDeltaRule"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/HedgeDeltaRule",children:"enum - HedgeDeltaRule"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"HedgeDelta Source IVol  use SR implied surface sticky strike IvS  use SR surface sticky delta TVol  use user supplied theo surface sticky strike TvS  use user supplied theo surface and atm veSlope sticky delta AccountConfighedgeDelta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"holdReason"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/HoldReason",children:"enum - HoldReason"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"User supplied description only informational SymbolControlholdReason"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"binaryDays"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"Fractional days 0  50 prior to expiration after which hedgeDeltas become binary 10 05 0 05 10 SymbolControlbinaryDays"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ctrlUpdate"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(t.td,{children:"last update dttm of SymbolControl record SymbolControltimestamp"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbolType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"SymbolType Equity ETF ShortETF ADR CashIndex FutureComplex"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"Symbol namedescription"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"beta"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"beta usually beta to SPX see AccountConfigbetaSource"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"betaSource"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BetaSource",children:"enum - BetaSource"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"futVolume"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"trailing 30 day average daily stock volume"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"optVolume"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"trailing 30 day average daily option volume"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MarginType",children:"enum - MarginType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"margin slide type NMSEquity   15 NMSIndex  86 NMSMedium  10"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isYieldBased"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"is the symbol a yield based futurecan affect greeks and pricing eg eurodollars"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"shortTermVol"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"estimatedimplied short term underlier volatility"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pointValue"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"point value of this future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pointCurrency"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"underliersPerCn"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"underliers per contract of the futures associated with this symbol if any default  1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"underlierType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/UnderlierType",children:"enum - UnderlierType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgProductRiskDetailV5` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `periodEndTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'DTTM of the end of the current trading period',\n    `viewGroup1` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Account Group #1 (SR Assigned) used to organize account groups [AccountConfig.viewGroup1]',\n    `viewGroup2` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Account Group #2 (SR Assigned) used to organize account groups [AccountConfig.viewGroup2]',\n    `viewGroup3` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Account Group #3 (SR Assigned) used to organize account groups [AccountConfig.viewGroup3]',\n    `futStatus` ENUM('Hold','TwoWay','DayHold') NOT NULL DEFAULT 'Hold',\n    `optStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'Hold',\n    `riskClass` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'Symbol Risk Class Code (user supplied) [SymbolControl.riskClass]',\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned theo model tag (associated with user supplied theo surfaces) [AccountConfig.theoModel]',\n    `theoModel2` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned theo model#2 tag (associated with user supplied theo surfaces) [AccountConfig.theoModel2]',\n    `hedgeDeltaRule` ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') NOT NULL DEFAULT 'None' COMMENT 'HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (sticky delta), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface and atm veSlope (sticky delta)) [AccountConfig.hedgeDelta]',\n    `holdReason` ENUM('None','BadData','CorpAction','PendDeal','PendEvent','ExtTrade','LowPrice','PendEarn','DealRumour','BadDiv','Watch','NewSym','NoLoc','NegPerf','NegEdge') NOT NULL DEFAULT 'None' COMMENT 'User supplied description (only informational) [SymbolControl.holdReason]',\n    `binaryDays` FLOAT NOT NULL DEFAULT 0 COMMENT 'Fractional days [0 - 5.0] prior to expiration after which hedgeDeltas become binary [-1.0, -0.5, 0, +0.5, +1.0] [SymbolControl.binaryDays]',\n    `ctrlUpdate` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last update dttm of SymbolControl record [SymbolControl.timestamp]',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None' COMMENT 'SymbolType (Equity, ETF, ShortETF, ADR, CashIndex, FutureComplex)',\n    `name` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'Symbol name/description',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'beta (usually beta to SPX; see AccountConfig.betaSource)',\n    `betaSource` ENUM('None','betaSPX','betaQQQ','betaIWM','clientBeta') NOT NULL DEFAULT 'None',\n    `futVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'trailing 30 day average daily stock volume',\n    `optVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'trailing 30 day average daily option volume',\n    `marginType` ENUM('None','NMS_Equity','NMS_Index','NMS_Medium') NOT NULL DEFAULT 'None' COMMENT 'margin slide type: NMS_Equity = +/- 15%, NMS_Index = -8%/+6%, NMS_Medium = +/-10%',\n    `isYieldBased` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'is the symbol a yield based future;can affect greeks and pricing (eg, eurodollars)',\n    `shortTermVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'estimated/implied short term underlier volatility',\n    `pointValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'point value of this future',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `underliersPerCn` INT NOT NULL DEFAULT 0 COMMENT 'underliers per contract of the futures associated with this symbol (if any) [default = 1]',\n    `underlierType` ENUM('None','Equity','Other','FX') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`accnt`,`tradeDate`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='ProductRiskDetail records contain semi-static markup detail for FutureRiskSummary records.';\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var d=s(96540);const r={},n=d.createContext(r);function i(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);
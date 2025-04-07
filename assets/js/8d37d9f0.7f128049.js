"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["49633"],{21906:function(e,t,r){r.r(t),r.d(t,{default:()=>N,frontMatter:()=>n,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>s});var d=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/OptionQuoteProbability","title":"OptionQuoteProbability","description":"V8 Message Definiton","source":"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/OptionQuoteProbability.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"OptionPrintSetSummary","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/"},"next":{"title":"OptionRiskFactor","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor/"}}'),o=r("52676"),i=r("91503");let n={},s=void 0,l={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"../../../Topics/probabilities/OptionQuoteProbability",children:"V8 Message Definiton"})}),"\n",(0,o.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Attribute"}),(0,o.jsx)(t.th,{children:"Value"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Topic"}),(0,o.jsx)(t.td,{children:"4255-probabilities"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"MLink Token"}),(0,o.jsx)(t.td,{children:"OptProbModel"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Product"}),(0,o.jsx)(t.td,{children:"SRAnalytics"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"accessType"}),(0,o.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Field"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Key"}),(0,o.jsx)(t.th,{children:"Default Value"}),(0,o.jsx)(t.th,{children:"Comment"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_at"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,o.jsx)(t.td,{children:"PRI"}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_ts"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,o.jsx)(t.td,{children:"PRI"}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_tk"}),(0,o.jsx)(t.td,{children:"VARCHAR(12)"}),(0,o.jsx)(t.td,{children:"PRI"}),(0,o.jsx)(t.td,{children:"''"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_yr"}),(0,o.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,o.jsx)(t.td,{children:"PRI, SEC"}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_mn"}),(0,o.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,o.jsx)(t.td,{children:"PRI, SEC"}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_dy"}),(0,o.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,o.jsx)(t.td,{children:"PRI, SEC"}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_xx"}),(0,o.jsx)(t.td,{children:"DOUBLE"}),(0,o.jsx)(t.td,{children:"PRI"}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_cp"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,o.jsx)(t.td,{children:"PRI"}),(0,o.jsx)(t.td,{children:"'Call'"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"stateModel"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/StateModel",children:"enum - StateModel"})}),(0,o.jsx)(t.td,{children:"PRI"}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"uMid"}),(0,o.jsx)(t.td,{children:"DOUBLE"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"reference underlier midPrice 05 prob price"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"uPrc"}),(0,o.jsx)(t.td,{children:"DOUBLE"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"reference underlier price midquote"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"bidPrice"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"nbbo bid price"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"askPrice"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"nbbo ask price"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"bidSize"}),(0,o.jsx)(t.td,{children:"INT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"cumulative size  bid price"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"askSize"}),(0,o.jsx)(t.td,{children:"INT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"cumulative size  ask price"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"bidTakeProb"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"bid take probability of current nbbo market zero exchange fee average size print"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"askTakeProb"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"ask take probability of current nbbo market zero exchange fee average size print"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"bidTakeRv"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{children:"model result code"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"askTakeRv"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{children:"model result code"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"bidImprPrice"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"trial improvement price usually 1 tick or 12 spread inside bidPrice"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"askImprPrice"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"trial improvement price usually 1 tick or 12 spread inside askPrice"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"bidTkImProb"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"bid take imprv probability of current nbbo market zero exchange fee prob to sell take  bid  imprIncrement"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"askTkImProb"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"ask take imprv probability of current nbbo market zero exchange fee prob to buy take  ask  imprIncrement"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"bidTkImRv"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{children:"model result code"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"askTkImRv"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{children:"model result code"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"surfPrice"}),(0,o.jsx)(t.td,{children:"DOUBLE"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"surface price"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"surfVol"}),(0,o.jsx)(t.td,{children:"DOUBLE"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"surface volatility"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"sdiv"}),(0,o.jsx)(t.td,{children:"DOUBLE"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"expiry sdiv"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"surfBuyProb"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"surface buy take probability zero exchange fee average size print"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"surfSellProb"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"surface sell take probability zero exchange fee average size print"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"bSurfRv"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{children:"model result code"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"sSurfRv"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{children:"model result code"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"vega"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"option vega"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"delta"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"option delta"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"midPrice"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"price corresponding to 050 probability"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"avgBidLink10m"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"average bid take prob link value 10 min"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"maeBidLink10m"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"bid link value mean abs err 10 min"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"avgAskLink10m"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"average ask take prob link value 10 min"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"maeAskLink10m"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"ask link value mean abs err 10 min"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"avgMktWidth10m"}),(0,o.jsx)(t.td,{children:"FLOAT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"askPrice  bidPrice 10 min"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"counter"}),(0,o.jsx)(t.td,{children:"INT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"record update counter zero  start of periodper okey"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"qpSource"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"../../../Enums/QPSource",children:"enum - QPSource"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"'None'"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"srcTimestamp"}),(0,o.jsx)(t.td,{children:"BIGINT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"feed timestamp from the packet"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"netTimestamp"}),(0,o.jsx)(t.td,{children:"BIGINT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch from OptionNbboQuote"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"smsTimestamp"}),(0,o.jsx)(t.td,{children:"BIGINT"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"state model server timestamp just before publish"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Field"}),(0,o.jsx)(t.th,{children:"Sequence"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_tk"}),(0,o.jsx)(t.td,{children:"1"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_yr"}),(0,o.jsx)(t.td,{children:"2"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_mn"}),(0,o.jsx)(t.td,{children:"3"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_dy"}),(0,o.jsx)(t.td,{children:"4"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_xx"}),(0,o.jsx)(t.td,{children:"5"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_cp"}),(0,o.jsx)(t.td,{children:"6"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_at"}),(0,o.jsx)(t.td,{children:"7"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_ts"}),(0,o.jsx)(t.td,{children:"8"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"stateModel"}),(0,o.jsx)(t.td,{children:"9"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Field"}),(0,o.jsx)(t.th,{children:"Sequence"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_yr"}),(0,o.jsx)(t.td,{children:"1"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_mn"}),(0,o.jsx)(t.td,{children:"2"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"okey_dy"}),(0,o.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionQuoteProbability` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `stateModel` ENUM('None','M1','M2','M3','M4') NOT NULL DEFAULT 'None',\n    `uMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier midPrice (0.5 prob price)',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier price (mid-quote)',\n    `bidPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo bid price',\n    `askPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo ask price',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ bid price',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ ask price',\n    `bidTakeProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid take probability of current nbbo market (zero exchange fee) [average size print]',\n    `askTakeProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask take probability of current nbbo market (zero exchange fee) [average size print]',\n    `bidTakeRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `askTakeRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `bidImprPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)',\n    `askImprPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'trial improvement price (usually 1 tick or 1/2 spread inside askPrice)',\n    `bidTkImProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]',\n    `askTkImProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]',\n    `bidTkImRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `askTkImRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `surfPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surface price',\n    `surfVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surface volatility',\n    `sdiv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'expiry sdiv',\n    `surfBuyProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface buy take probability (zero exchange fee) [average size print]',\n    `surfSellProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface sell take probability (zero exchange fee) [average size print]',\n    `bSurfRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `sSurfRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `vega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega',\n    `delta` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta',\n    `midPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'price corresponding to 0.50 probability',\n    `avgBidLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average bid take prob link value (~10 min)',\n    `maeBidLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (~10 min)',\n    `avgAskLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask take prob link value (~10 min)',\n    `maeAskLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (~10 min)',\n    `avgMktWidth10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'askPrice - bidPrice (~10 min)',\n    `counter` INT NOT NULL DEFAULT 0 COMMENT 'record update counter (zero @ start of period;per okey)',\n    `qpSource` ENUM('None','Loop','QteChg') NOT NULL DEFAULT 'None',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'feed timestamp from the packet',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch (from OptionNbboQuote)',\n    `smsTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'state model server timestamp (just before publish)',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`stateModel`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,o.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `stateModel`,\n    `uMid`,\n    `uPrc`,\n    `bidPrice`,\n    `askPrice`,\n    `bidSize`,\n    `askSize`,\n    `bidTakeProb`,\n    `askTakeProb`,\n    `bidTakeRv`,\n    `askTakeRv`,\n    `bidImprPrice`,\n    `askImprPrice`,\n    `bidTkImProb`,\n    `askTkImProb`,\n    `bidTkImRv`,\n    `askTkImRv`,\n    `surfPrice`,\n    `surfVol`,\n    `sdiv`,\n    `surfBuyProb`,\n    `surfSellProb`,\n    `bSurfRv`,\n    `sSurfRv`,\n    `vega`,\n    `delta`,\n    `midPrice`,\n    `avgBidLink10m`,\n    `maeBidLink10m`,\n    `avgAskLink10m`,\n    `maeAskLink10m`,\n    `avgMktWidth10m`,\n    `counter`,\n    `qpSource`,\n    `srcTimestamp`,\n    `netTimestamp`,\n    `smsTimestamp`\nFROM `SRAnalytics`.`MsgOptionQuoteProbability`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','M1','M2','M3','M4') */ \n    `stateModel` = 'None';\n"})}),"\n",(0,o.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='OptionQuoteProbability' ORDER BY ordinal_position ASC;\n"})})]})}function N(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},91503:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return n}});var d=r(75271);let o={},i=d.createContext(o);function n(e){let t=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);
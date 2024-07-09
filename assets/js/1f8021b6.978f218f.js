"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88865],{55756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>N,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(74848),d=r(28453);const o={},n=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability/StockQuoteProbability",title:"StockQuoteProbability",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability/StockQuoteProbability.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockPrintSet",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintSet/"},next:{title:"SyntheticExpiryCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryCloseMark/"}},c={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/probabilities/StockQuoteProbability",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"4255-probabilities"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"StkProbModel"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRAnalytics"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stateModel"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/StateModel",children:"enum - StateModel"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"nbbo bid price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"nbbo ask price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"cumulative size  bid price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"cumulative size  ask price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidTakeProb"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"bid take probability of current nbbo market zero exchange fee average size print"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askTakeProb"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"ask take probability of current nbbo market zero exchange fee average size print"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidTakeRv"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askTakeRv"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"model result code"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidImprPrice"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"trial improvement price usually 1 tick or 12 spread inside bidPrice"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askImprPrice"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"trial improvement price usually 1 tick or 12 spread inside askPrice"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidTkImProb"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"bid take imprv probability of current nbbo market zero exchange fee prob to sell take  bid  imprIncrement"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askTkImProb"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"ask take imprv probability of current nbbo market zero exchange fee prob to buy take  ask  imprIncrement"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidTkImRv"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"model result code"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askTkImRv"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum - PredictResult"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"model result code"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"midPrice"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"price corresponding to 050 probability"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgBidLink1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"average bid link value 1 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maeBidLink1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"bid link value mean abs err 10 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgAskLink1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"average ask link value 1 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maeAskLink1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"ask link value mean abs err 1 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgBidLink10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"average bid link value 10 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maeBidLink10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"bid link value mean abs err 10 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgAskLink10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"average ask link value 10 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maeAskLink10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"ask link value mean abs err 10 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgMktWidth1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"askPrice  bidPrice 1 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgMktWidth10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"askPrice  bidPrice 10 min"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"counter"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"record update counter zero  start of periodper ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"qpSource"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/QPSource",children:"enum - QPSource"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"srcTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"feed timestamp from the packet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch from StockBookQuotezero  size only change"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"smsTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"state model server timestamp just before publish"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:"3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stateModel"}),(0,i.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockQuoteProbability` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `stateModel` ENUM('None','M1','M2','M3','M4') NOT NULL DEFAULT 'None',\n    `bidPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo bid price',\n    `askPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo ask price',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ bid price',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ ask price',\n    `bidTakeProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid take probability of current nbbo market (zero exchange fee) [average size print]',\n    `askTakeProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask take probability of current nbbo market (zero exchange fee) [average size print]',\n    `bidTakeRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None',\n    `askTakeRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `bidImprPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)',\n    `askImprPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'trial improvement price (usually 1 tick or 1/2 spread inside askPrice)',\n    `bidTkImProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]',\n    `askTkImProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]',\n    `bidTkImRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `askTkImRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `midPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'price corresponding to 0.50 probability',\n    `avgBidLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average bid link value (~1 min)',\n    `maeBidLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (~10 min)',\n    `avgAskLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask link value (~1 min)',\n    `maeAskLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (~1 min)',\n    `avgBidLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average bid link value (~10 min)',\n    `maeBidLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (~10 min)',\n    `avgAskLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask link value (~10 min)',\n    `maeAskLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (~10 min)',\n    `avgMktWidth1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'askPrice - bidPrice (~1 min)',\n    `avgMktWidth10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'askPrice - bidPrice (~10 min)',\n    `counter` INT NOT NULL DEFAULT 0 COMMENT 'record update counter (zero @ start of period;per ticker)',\n    `qpSource` ENUM('None','Loop','QteChg') NOT NULL DEFAULT 'None',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'feed timestamp from the packet',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch (from StockBookQuote);zero = size only change',\n    `smsTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'state model server timestamp (just before publish)',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`stateModel`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function N(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>s});var i=r(96540);const d={},o=i.createContext(d);function n(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
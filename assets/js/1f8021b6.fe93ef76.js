"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88865],{55756:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var r=t(74848),N=t(28453);const i={title:"StockQuoteProbability"},a=void 0,n={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability/StockQuoteProbability",title:"StockQuoteProbability",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability/StockQuoteProbability.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockQuoteProbability/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockQuoteProbability"},sidebar:"messageSchemasSidebar",previous:{title:"StockPrintSet",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintSet/"},next:{title:"SyntheticExpiryCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryCloseMark/"}},d={},c=[];function l(e){const o={a:"a",code:"code",p:"p",pre:"pre",...(0,N.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"../../../Topics/probabilities/StockQuoteProbability",children:"V8 Message Definition"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockQuoteProbability` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `stateModel` ENUM('None','M1','M2','M3','M4') NOT NULL DEFAULT 'None',\n    `bidPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo bid price',\n    `askPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo ask price',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ bid price',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ ask price',\n    `bidTakeProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid take probability of current nbbo market (zero exchange fee) [average size print]',\n    `askTakeProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask take probability of current nbbo market (zero exchange fee) [average size print]',\n    `bidTakeRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None',\n    `askTakeRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `bidImprPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)',\n    `askImprPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'trial improvement price (usually 1 tick or 1/2 spread inside askPrice)',\n    `bidTkImProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]',\n    `askTkImProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]',\n    `bidTkImRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `askTkImRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `midPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'price corresponding to 0.50 probability',\n    `avgBidLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average bid link value (~1 min)',\n    `maeBidLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (~10 min)',\n    `avgAskLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask link value (~1 min)',\n    `maeAskLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (~1 min)',\n    `avgBidLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average bid link value (~10 min)',\n    `maeBidLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (~10 min)',\n    `avgAskLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask link value (~10 min)',\n    `maeAskLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (~10 min)',\n    `avgMktWidth1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'askPrice - bidPrice (~1 min)',\n    `avgMktWidth10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'askPrice - bidPrice (~10 min)',\n    `counter` INT NOT NULL DEFAULT 0 COMMENT 'record update counter (zero @ start of period;per ticker)',\n    `qpSource` ENUM('None','Loop','QteChg') NOT NULL DEFAULT 'None',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'feed timestamp from the packet',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch (from StockBookQuote);zero = size only change',\n    `smsTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'state model server timestamp (just before publish)',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`stateModel`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function s(e={}){const{wrapper:o}={...(0,N.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>n});var r=t(96540);const N={},i=r.createContext(N);function a(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(N):e.components||N:a(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[19534],{95290:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var r=t(74848),N=t(28453);const i={title:"OptionQuoteProbability"},a=void 0,n={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/OptionQuoteProbability",title:"OptionQuoteProbability",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/OptionQuoteProbability.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionQuoteProbability"},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrintSetSummary",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/"},next:{title:"OptionRiskFactor",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor/"}},d={},l=[];function c(o){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,N.R)(),...o.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"../../../Topics/probabilities/OptionQuoteProbability",children:"V8 Message Definition"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionQuoteProbability` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `stateModel` ENUM('None','M1','M2','M3','M4') NOT NULL DEFAULT 'None',\n    `uMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier midPrice (0.5 prob price)',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier price (mid-quote)',\n    `bidPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo bid price',\n    `askPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo ask price',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ bid price',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ ask price',\n    `bidTakeProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid take probability of current nbbo market (zero exchange fee) [average size print]',\n    `askTakeProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask take probability of current nbbo market (zero exchange fee) [average size print]',\n    `bidTakeRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `askTakeRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `bidImprPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)',\n    `askImprPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'trial improvement price (usually 1 tick or 1/2 spread inside askPrice)',\n    `bidTkImProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]',\n    `askTkImProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]',\n    `bidTkImRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `askTkImRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `surfPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surface price',\n    `surfVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surface volatility',\n    `sdiv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'expiry sdiv',\n    `surfBuyProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface buy take probability (zero exchange fee) [average size print]',\n    `surfSellProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface sell take probability (zero exchange fee) [average size print]',\n    `bSurfRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `sSurfRv` ENUM('None','OK','Skip','CalcErr','LowVol','NoSurfVol','WideOptMkt','Exception','NoOptObj','NoStkObj','NoOptNbbo','NoStkNbbo','NoGbmObj','NoOptMkt','NoOptSummary','NoOptQuoteModel','NoSymExpModel','QuoteModelNotInit','SymExpNotInit','RiskHold','ExchCheck','BrokerCheck','NoBrokers','NoDataChange','PostFlowCheck','SendHold','SendFail','SurfHold','ReduceSize','PendCxl','NoSize','NoExchQte','NoBroker','NoSurface','NoExchDef','NewOrder','NbboHold','PostPxRng','LimitPx','IWait','IHold','FailHold','FadeQuote','ExchRte','ExchHold','TwapState','CreateErr','ChangePx','BrkrNotVld','BadLimit','OffMkt','BhndMkt','NoAuction','Join','Imprv','PredMiss','WithMkt','LockFail','NoGrpModel','NoSpyModel','NoStkModel','NoStkPrt','NoFutNbbo','BadUPrc','BrkrEvent','Done','NoActSize','NoBorrow','NoChange','NoExch','NoFirmPos','NoOrdSize','NotActive','NoTakeLvl','OrderSent','OutLoudHold','PostClear','PredPass','ProbNotVld','RFQ','SpdrOptState','SpdrStkState','SpdrFutState','ExchCnt','ImprMkt','NoPostSz','NoInputs','PendNew','NoFutObj','NoImprRm','NoBid','NoAsk','CThreadErr','CModelNotInit','CDevNotInit','CXCopyErr','CRvMemSet','CCalcErr','CRvCopyErr','CDevFail','CError','NoFutModel','NoOptExpMap','NoImplQte','UPrcRng','BadUPrcAdj') NOT NULL DEFAULT 'None' COMMENT 'model result code',\n    `vega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega',\n    `delta` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta',\n    `midPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'price corresponding to 0.50 probability',\n    `avgBidLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average bid take prob link value (~10 min)',\n    `maeBidLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (~10 min)',\n    `avgAskLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask take prob link value (~10 min)',\n    `maeAskLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (~10 min)',\n    `avgMktWidth10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'askPrice - bidPrice (~10 min)',\n    `counter` INT NOT NULL DEFAULT 0 COMMENT 'record update counter (zero @ start of period;per okey)',\n    `qpSource` ENUM('None','Loop','QteChg') NOT NULL DEFAULT 'None',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'feed timestamp from the packet',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch (from OptionNbboQuote)',\n    `smsTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'state model server timestamp (just before publish)',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`stateModel`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function p(o={}){const{wrapper:e}={...(0,N.R)(),...o.components};return e?(0,r.jsx)(e,{...o,children:(0,r.jsx)(c,{...o})}):c(o)}},28453:(o,e,t)=>{t.d(e,{R:()=>a,x:()=>n});var r=t(96540);const N={},i=r.createContext(N);function a(o){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function n(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(N):o.components||N:a(o.components),r.createElement(i.Provider,{value:e},o.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[87840],{63062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>T,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>N,toc:()=>L});var i=r(74848),a=r(28453);const n={title:"SpdrParentBrkrDetail"},o=void 0,N={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrkrDetail/SpdrParentBrkrDetail",title:"SpdrParentBrkrDetail",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrkrDetail/SpdrParentBrkrDetail.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrkrDetail",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrkrDetail/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrkrDetail/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentBrkrDetail"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrParentAllocationStatus",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentAllocationStatus/"},next:{title:"SpdrParentBrkrEvent",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrkrEvent/"}},T={},L=[];function s(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/parent-orders/SpdrParentBrkrDetail",children:"V8 Message Definition"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRParentBrkrDetail` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'SR user name string',\n    `engineName` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'server stripe',\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SR parent number',\n    `baseParentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'all orders with the same riskGroupId share a common set of risk counters;.Grp. risk limits apply to these shared counters',\n    `triggerGroupId` BIGINT NOT NULL DEFAULT 0,\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'parent order strategy (description only)',\n    `spdrStageType` ENUM('None','ModifyAny','ModifyAlgo') NOT NULL DEFAULT 'None' COMMENT 'parent is a staged order [ToolVisible]',\n    `startType` ENUM('None','WaitTrigger','TriggerAll') NOT NULL DEFAULT 'None',\n    `maxExposureSize` INT NOT NULL DEFAULT 0 COMMENT 'maximum simultaneous cumulative child order public size exposure (-1 = orderActiveSize) [order can overfill if > orderActiveSize and numMakeExchanges > 1]',\n    `numMakeExchanges` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of exchanges (1 - 4) on which to publish public making orders.  Effective number might be less than requested number if sufficient exchanges are not available.',\n    `publicSize` ENUM('None','Randomize','MktSize','FullSize','MktSizeA','MktSizeB','MktSizeC','FullSizeR','Max25Pct','Max50Pct','Max75Pct','NoSize') NOT NULL DEFAULT 'None' COMMENT 'public order size handling',\n    `canOverlapCxlRepl` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'can execution engines overlap cancel/replace operations [order can overfill if YES] (at most one active overlapping cxl/replace operation for each parent order)',\n    `progressRule` ENUM('None','Twap','Vwap','TwapReset','VwapReset','FastReset','SlowReset','TwapAlpha','VwapAlpha','TwapAlphaC','VwapAlphaC','AutoComplete','AllowImmediate','Manual','SpdrPulse','IOC') NOT NULL DEFAULT 'None' COMMENT 'Immediate = all size immediately available;TWAP = size released in time intervals;VWAP = size released in volume intervals;',\n    `progressSliceCnt` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of progress slices to use (default = 4 or 8) [max 20]',\n    `progressExposeTime` INT NOT NULL DEFAULT 0 COMMENT 'minimum time (secs) to expose order (0 = no minimum; used to guarantee that the order is exposed at mid-market for some time before actively taking)',\n    `vwapParticipation` FLOAT NOT NULL DEFAULT 0 COMMENT 'target vwap participation rate (target % of trade activity)',\n    `minMktOnClosePct` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Minimum pct [0 - 100] of order reserved for the on-close auction',\n    `triggerType` ENUM('None','PrintPrc','PrintVol','SurfVol','PrtSurfVol') NOT NULL DEFAULT 'None' COMMENT 'type of trigger (PrintVol/SurfVol only for options) [print = print or actionable quote]',\n    `triggerLevel` FLOAT NOT NULL DEFAULT 0 COMMENT 'stop/trigger price for parent order to go active',\n    `marketSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None',\n    `startDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT '[optional] (parent order start time)',\n    `orderDuration` INT NOT NULL DEFAULT 0 COMMENT '[optional] (number of seconds)',\n    `goodTillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT '[optional] (default: 2099-01-01)',\n    `expireDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'EE Parent Order Expiry Dttm',\n    `cxlUPrcRange` ENUM('None','Yes','No','YesHalt','NoHalt') NOT NULL DEFAULT 'None' COMMENT 'cancel spdr order if/when outside stock price range',\n    `minUBid` FLOAT NOT NULL DEFAULT 0 COMMENT '[optional]',\n    `maxUAsk` FLOAT NOT NULL DEFAULT 0 COMMENT '[optional] (< $0.01 = none)',\n    `minMaxType` ENUM('None','Prc','Pct') NOT NULL DEFAULT 'None' COMMENT 'if Prc minUBid/maxUAsk are expressed as prices; if Pct then they are expresses as pct change since parent order arrival',\n    `minOptionPx` FLOAT NOT NULL DEFAULT 0 COMMENT '[optional] option price floor for tied to stock orders',\n    `maxChildOrders` INT NOT NULL DEFAULT 0 COMMENT 'maximum number of child orders that can be generated by this parent order [order will terminate if/when this cap is reached;zero or neg = unlimited]',\n    `exchMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'eligible exchanges (0 = all)',\n    `externExDest` VARCHAR(12) NOT NULL DEFAULT '',\n    `execBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'execBrkrCode attached to parent order (if any)',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None',\n    `locateQuan` INT NOT NULL DEFAULT 0 COMMENT 'available locate quantity (if selling short) @ child order send time',\n    `locateFirm` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'firm granting the locate (also locate firm used on street FIX orders)',\n    `locatePool` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'locate pool @ firm granting the locate',\n    `parentOrderHandling` ENUM('None','ActiveTaker','PostOnly','DMA','MktOnOpn','MktOnCls','Facilitate','Matrix','Legger','Seeker','SeekerLegger','CrossResponse','AuctionResponse','MLegAuctionResp','RFQRequest','AwayAlgo','ExchPing','BlockAuction','BlockResponse','SweepTake','CobMaker','FaceOmni','TestParent') NOT NULL DEFAULT 'None',\n    `parentBalanceHandling` ENUM('None','PostWith','PostTurn','PostImprove','PostLimit','MaxIntern','PostWthF','PostImprvR','PostFlash','PostFlashW','PostPeg','PostFlashI') NOT NULL DEFAULT 'None',\n    `blockVisibility` ENUM('None','Neither','Side','SidePrice') NOT NULL DEFAULT 'None',\n    `orderLimitType` ENUM('None','Market','MarketArrival','Prc','PrcDe','PrcDeX','PrcDeT','PrcDeP','PrcDeXT','PrcDeXP','Vol','VolX','PrcV','PrcVX','NoLimit','RelMid','RelJoin','RelCross','SmrtFast','SmrtNorm','RelTurn','PrcDeEm','VolEm','Aux','UPrcPct','PkgNeutral','RcPrem','SynthLimitMM','SynthLimitBW','SynthLimitWW') NOT NULL DEFAULT 'None',\n    `takeLimitClass` ENUM('Simple','Surface','Probability','SurfProb') NOT NULL DEFAULT 'Simple' COMMENT 'Simple = LimitPrice, Surface = BEST(LimitPrice, SurfLimit), Probability = BEST(LimitPrice, ProbLimit)',\n    `makeLimitClass` ENUM('Simple','Surface','Probability','SurfProb') NOT NULL DEFAULT 'Simple' COMMENT 'Simple = LimitPrice, Surface = BEST(LimitPrice, SurfLimit), Probability = BEST(LimitPrice, ProbLimit)',\n    `takeReachRule` ENUM('None','Delayed','Passive','WeakOnly','RespondOnly','FullSize','ISOSweep','AllOrNone','QtyOrMore','UpToQty','AtMost25','AtMost50') NOT NULL DEFAULT 'None' COMMENT 'Immediate = reach room immediately available; Delayed = available after [1-3] seconds; Passive = available if contra side aggresses; WeakOnly = only take if available size < avgMarketSize; ISOSweep = Intermarket Sweep [requires WaitTrigger]',\n    `orderPrcLimit` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Applies if LimitType = Prc[]',\n    `orderRefUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'default=underlier.mid',\n    `orderRefDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'default=option.delta',\n    `orderRefGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'default=option.gamma',\n    `orderRefTheta` FLOAT NOT NULL DEFAULT 0,\n    `orderRefYears` FLOAT NOT NULL DEFAULT 0,\n    `orderVolLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Applies if LimitType = Vol[] [uses SR dividends and borrow rates]',\n    `rateOverride` FLOAT NOT NULL DEFAULT 0 COMMENT 'zero = ignore;> zero = override',\n    `sdivOverride` FLOAT NOT NULL DEFAULT 0,\n    `ddivOverride` VARCHAR(10000) NOT NULL DEFAULT '' COMMENT 'discrete dividend string override ([yearsToExpiry,divYears:divAmount,divYears:divAmount, ...])' CHECK(LENGTH(ddivOverride) <= 10000),\n    `overrideCode` ENUM('None','SDivOnly','DDivOnly','Both') NOT NULL DEFAULT 'None',\n    `orderPrcOffset` DOUBLE NOT NULL DEFAULT 0 COMMENT 'default=0',\n    `takeAlphaType` ENUM('None','Static','Eagle','Hawk','Falcon','Relative') NOT NULL DEFAULT 'None' COMMENT 'Applies if takeLimitClass = Probability',\n    `makeAlphaType` ENUM('None','Static','Eagle','Hawk','Falcon','Relative') NOT NULL DEFAULT 'None' COMMENT 'Applies if makeLimitClass = Probability',\n    `takeAlphaFactor` FLOAT NOT NULL DEFAULT 0 COMMENT '[-2,+2] takeProbLimit = MAX(takeProbability, takeProbAvg + takeAlphaFactor * takeProbStd) [if takeAlphaType = Relative]',\n    `makeAlphaFactor` FLOAT NOT NULL DEFAULT 0 COMMENT '[-2,+2] makeProbLimit = MAX(makeProbability, makeProbAvg + makeAlphaFactor * makeProbStd) [if makeAlphaType = Relative]',\n    `takeProbability` FLOAT NOT NULL DEFAULT 0 COMMENT 'takeProbLimit = takeProbability [if takeAlphaType = Static]',\n    `makeProbability` FLOAT NOT NULL DEFAULT 0 COMMENT 'makeProbLimit = makeProbability [if makeAlphaType = Static]',\n    `takeSurfPrcOffset` DOUBLE NOT NULL DEFAULT 0 COMMENT 'default=0',\n    `takeSurfVolOffset` FLOAT NOT NULL DEFAULT 0 COMMENT 'default=0',\n    `takeSurfWidthOffset` FLOAT NOT NULL DEFAULT 0 COMMENT '[-1.x to +1.x]       -1.0 = -0.5 * avgMktWidth, +1.0 = +0.5 * avgMktWidth',\n    `makeSurfPrcOffset` DOUBLE NOT NULL DEFAULT 0 COMMENT 'default=0',\n    `makeSurfVolOffset` FLOAT NOT NULL DEFAULT 0 COMMENT 'default=0',\n    `makeSurfWidthOffset` FLOAT NOT NULL DEFAULT 0 COMMENT '[-1.x to +1.x]       -1.0 = -0.5 * avgMktWidth, +1.0 = +0.5 * avgMktWidth',\n    `expDayWtVegaOffset` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day wtVega offset (target)',\n    `maxExpDayWtVegaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'max accnt+expiration day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxExpDayWtVegaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max accnt+expiration day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `maxExpDayRMetric6Ln` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+expiration day rMetric6 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxExpDayRMetric6Sh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+expiration day rMetric6 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `symDayDDeltaOffset` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day $delta offset (target)',\n    `maxSymDayDDeltaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day $delta long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayDDeltaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day $delta short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `symDayVegaOffset` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day vega offset (target)',\n    `maxSymDayVegaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayVegaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `symDayWtVegaOffset` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day wtVega offset (target)',\n    `maxSymDayWtVegaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayWtVegaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `maxSymDayRMetric7Ln` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day rMetric7 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxSymDayRMetric7Sh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol day rMetric7 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayDDeltaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day $delta long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayDDeltaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day $delta short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayVegaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day vega long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayVegaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day vega short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayVegaAbs` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day vega abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `grpDayVegaRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'target bot / sld ratio (eg ratio=2.0 means that neutral is bot vega = 2x sld vega)',\n    `maxGrpDayContractsLn` INT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day opt contracts long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayContractsSh` INT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day opt contracts short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayContractsAbs` INT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day opt contracts abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `maxGrpDayRMetric1Ln` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric1 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric1Sh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric1 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric1Abs` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric1 abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `grpDayRMetric1Ratio` FLOAT NOT NULL DEFAULT 0 COMMENT 'target bot / sld ratio (eg ratio=0.5 means that neutral is bot rMetric1 = 0.5x sld rMetric1)',\n    `maxGrpDayRMetric2Ln` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric2 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric2Sh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric2 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric3Ln` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric3 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric3Sh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric3 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric4Ln` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric4 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric4Sh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric4 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric5Ln` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric5 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric5Sh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+riskGroup day rMetric5 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `symEmaCxlDDeltaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol 60s EMA $delta long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `symEmaCxlDDeltaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol 60s EMA $delta short (positive number; <= 0 is no limit)',\n    `symEmaCxlWtVegaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol 60s EMA wtVega long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `symEmaCxlWtVegaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'max acct+symbol 60s EMA wtVega short (positive number; <= 0 is no limit)',\n    `arriveBid` DOUBLE NOT NULL DEFAULT 0,\n    `arriveAsk` DOUBLE NOT NULL DEFAULT 0,\n    `arriveSweepCount` INT NOT NULL DEFAULT 0 COMMENT 'number of parent orders arriving with immediately available sweep qty',\n    `arriveSweepOrderQty` INT NOT NULL DEFAULT 0 COMMENT 'total size of all child orders generated due to parent order arrival sweep',\n    `arriveSweepFillQty` INT NOT NULL DEFAULT 0 COMMENT 'total fill size due to parent order arrival sweep',\n    `numSweepChildOrders` INT NOT NULL DEFAULT 0 COMMENT 'child orders generated in initial arrival sweep',\n    `auctionLink` INT NOT NULL DEFAULT 0 COMMENT 'total linkage auction contracts while parent order was active',\n    `auctionFace` INT NOT NULL DEFAULT 0 COMMENT 'total facilitation auction contracts while parent order was active',\n    `auctionResp` INT NOT NULL DEFAULT 0 COMMENT 'total auction response contracts',\n    `prtActiveCnt` INT NOT NULL DEFAULT 0 COMMENT 'total print events while parent order was active; [any exchange; all prints]',\n    `prtQtyActive` INT NOT NULL DEFAULT 0 COMMENT 'total quantity printed while parent order was active; [any exchange; all prints]',\n    `prtQtyActiveMny` FLOAT NOT NULL DEFAULT 0 COMMENT 'total of (quantity printed x print price) while parent order was active',\n    `prtEligibleCnt` INT NOT NULL DEFAULT 0 COMMENT 'total eligible (public) print events while parent order was active; [any exchange; all eligible prints]',\n    `prtQtyEligible` INT NOT NULL DEFAULT 0 COMMENT 'total eligible (public) quantity printed while parent order was active; [any exchange; all eligible prints]',\n    `prtQtyLimitOK` INT NOT NULL DEFAULT 0 COMMENT 'total quantity printed at or better than parent limit while parent was active; SUM(MIN(PrintSize,OpenParentOrderSize)) [any exchange]',\n    `prtQtyCompete` INT NOT NULL DEFAULT 0 COMMENT 'total quantity printed on an exchange on which we had a competitive child order on that exchange; SUM(MIN(PrintSize, OpenChildOrderSize)) [childOrder.exch = print.exch]',\n    `prtQtyAwayChld` INT NOT NULL DEFAULT 0 COMMENT 'total quantity printed on an away exchange when we had a competitive child order(s) in the market and the away exchange was competitive prior to the print; SUM(MIN(PrintSize, OpenChildOrderSize)) [childOrder.exch != print.exch]',\n    `prtQtyNoCompete` INT NOT NULL DEFAULT 0 COMMENT 'total quantity printed on an exchange when the print exchange was not competitive prior to the print (non quote-competitive prints)',\n    `prtQtyNoCompNbbo` INT NOT NULL DEFAULT 0 COMMENT 'total quantity printed on an exchange when the NBBO was not competitive prior to the print (non nbbo-competitive prints)',\n    `mkCheckCnt` INT NOT NULL DEFAULT 0 COMMENT 'total number of times order was checked for making',\n    `minMkProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'min make probability while broker active',\n    `avgMkProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'average make probability while broker active',\n    `curMkProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'current make probability',\n    `tkCheckCnt` INT NOT NULL DEFAULT 0 COMMENT 'total number of times order was checked for taking',\n    `maxTkProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'max take probability while broker active',\n    `avgTkProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'average take probability while broker active',\n    `curTkProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'current take probability',\n    `prtPrbCnt` INT NOT NULL DEFAULT 0 COMMENT 'total number of print probability records while broker active (all limit types)',\n    `prtPrbCheck` INT NOT NULL DEFAULT 0 COMMENT 'number of print probability records with active probability printTake handler',\n    `prtPrbLmtOK` INT NOT NULL DEFAULT 0 COMMENT 'number of print probability records that pass broker takeLimit',\n    `tkQtyLmtOK` INT NOT NULL DEFAULT 0 COMMENT 'total quantity available to take at parent limit or better while broker active',\n    `avgQteSzRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ratio of child size / nbbo size during the life of the working order when child order is at nbbo',\n    `cntQteSzRatio` INT NOT NULL DEFAULT 0 COMMENT 'sample counter for above [1 second intervals]; qteCnRatio / qteCnRatioCnt = avg of child size / nbbo size while broker active',\n    `minQteWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'minimum quote width during active order window',\n    `avgQteWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'average quote width (during active order window)',\n    `cntQteWidth` INT NOT NULL DEFAULT 0,\n    `updateSrc` ENUM('None','New','Done','Reject','BrokerStatus','CumActQty','CumFillQty','Dirty','OrderStatus','Refresh','StateReject','PermClosed','ParentLimit') NOT NULL DEFAULT 'None',\n    `numUpdates` INT NOT NULL DEFAULT 0 COMMENT 'number of record updates (cumulative for the day)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'SR system timestamp',\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    CONSTRAINT nonnegative_baseParentNumber CHECK(ASCII(baseParentNumber) < 56),\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`spdrSource`,`groupingCode`,`orderSide`,`clientFirm`),\n    KEY `AccntIndex` (`accnt`) USING HASH,\n    KEY `ClientFirmIndex` (`clientFirm`) USING HASH,\n    KEY `UserNameIndex` (`userName`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrParentBrkrDetail records are created/published by SpiderRock Execution Engines. Each record describes the current active detail of a single parent broker.';\n\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>N});var i=r(96540);const a={},n=i.createContext(a);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function N(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
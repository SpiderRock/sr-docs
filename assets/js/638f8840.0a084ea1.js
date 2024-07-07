"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9928],{5538:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>S,frontMatter:()=>o,metadata:()=>l,toc:()=>N});var n=t(74848),a=t(28453);const o={title:"SpdrMLegBrkrEvent"},d=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrEvent/SpdrMLegBrkrEvent",title:"SpdrMLegBrkrEvent",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrEvent/SpdrMLegBrkrEvent.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrEvent",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrEvent/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrEvent/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrMLegBrkrEvent"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrFixParentReject",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentReject/"},next:{title:"SpdrMLegBrkrState",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrState/"}},i={},N=[];function s(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrMLegBrkrEvent",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRMLegBrkrEvent` (\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `recType` ENUM('New','Modify','Replace','Close','Reject') NOT NULL DEFAULT 'New' COMMENT 'type of record [New,Repl,Close]',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm code',\n    `altAccnt` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'alternate (client assigned) \"long\" account string (optional)',\n    `altUserName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'alternate (client assigned) user name (optional)',\n    `eventNumber` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `stageType` ENUM('None','ModifyAny','ModifyAlgo') NOT NULL DEFAULT 'None' COMMENT 'parent is a staged order [ToolVisible]',\n    `stageReview` ENUM('None','Strict','Normal') NOT NULL DEFAULT 'None',\n    `baseParentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SPDR order number (initial number in cancel/replace sequence) (also, source parent for dynamically generated orders;eg auto-hedges)',\n    `prevParentNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SPDR order number (order being cancelled/replaced) (zero if none)',\n    `engineName` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'server stripe',\n    `spdrBrokerStatus` ENUM('None','Updating','Active','Closing','Closed','Rejected','ActiveHold') NOT NULL DEFAULT 'None',\n    `spdrOrderStatus` ENUM('PendNew','New','PendClose','Closed','Rejected','SendReject') NOT NULL DEFAULT 'PendNew',\n    `spdrCloseReason` ENUM('None','Cancelled','Filled','Replaced','Expired','Limit','System','LegReject','DoneForDay','IOCExpire','UserCxl','NoProgress','TooManyRej','ReplReject','AlgoClose','Restart','InvldParentLimit','FilledRepl','ForceClose','DmaReject','DmaExpire','DmaBrkrCxl','ReviewReject','MarketState','AlgoReject','ReviewTimeout','ChildReject','ChildCancel','ReviewClose','UPrcRange','LegBrkrClosed','ExchRisk','CrossFailed') NOT NULL DEFAULT 'None',\n    `spdrRejectReason` ENUM('None','AccntHold','UnknwnOpt','UnknwnStk','Expired','BadSize','BadOrdNum','DupOrdNum','BadVolPx','BadLmtType','BadMktPrc','BadLimit','SysReject','TestOrder','CustType','NoFirmPos','BadCent','NoSurface','UnknwnAcc','UnknwnRoot','OrdSpacing','BadOptMkt','BadStkMkt','SendFailed','BadExpose','BadPrem','NoOptLeg','Min2Leg','Max6Leg','BadStkSz','BadRatio','BadLegID','DupLegID','MixedRoots','OffMkt','CentVol','CentLeg','CentRng','CentSAtm','CentSpln','CentErr','NoRiskGrp','BadDDivs','NoPricer','CalcErr','TwapLate','TwapTime','NoAcctMap','UserUnk','UserHold','GTCHold','SysException','StkCrossed','BadOrdType','BadSSaleFlag','NoBorrow','NoFacilitateAccnt','UnknwnFut','MktNotOpen','NoRoutes','NoLocate','SSaleRstr','NoLegs','BadSide','BadLegKeyType','UnknwnRefStk','BadRefMktPrc','UnknwnRefFut','UnknwnRefAtm','BadRefVe','BadProdDef','StkOddLot','RiskException','MaxParticipation','MarExemptHold','NoMarRec','NullCounter','StkQty','FutQty','OptQty','StkDDelta','FutDDelta','OptDDelta','StkClsOnly','StkDisabled','FutClsOnly','FutDisabled','OptClsOnly','OptDisabled','OrderMargin','AccMargin','DayMargin','OpenExpose','DayLnDDelta','DayShDDelta','DayAbsDDelta','DayLnWtVega','DayShWtVega','DayAbsWtVega','DayLnNValue','DayShNValue','DayAbsNValue','AccFrozen','ConfigErr','NoFMFuture','NoLinkage','NoProdDef','BadRiskID','InvldAutoH','LegChange','CxlSpacing','BadHedgeInst','TooLateToReduce','PendCxlRepl','InvldCxlRepl','InvldCxl','DmaReject','NoUPrc','TwapSteps','UnknwnFirm','NoSSaleFlg','AccntNotMM','BadSource','VwapLate','AlreadyFilled','UnknownSecKey','InvldGTD','CutoffTime','ParentShape','NoFaceSide','NoFaceLegs','AuctionSize','InvldClFirm','BadLegBrkr','NoLegBrkr','StkLegNotAllowed','BadLeadSide','UnknwnRefUnd','ExecEngineType','NoExchAvail','SelfTrade','PointValueErr','StkCollar','FutCollar','OptCollar','LmtCollar','RefUPrcErr','InvldUser','InvldAccnt','UnknownCrossId','WidUMkt','UMktCls','UPrcRange','RiskCollarRng') NOT NULL DEFAULT 'None',\n    `spdrComment` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'additional detail if parent closed or rejected',\n    `cumSquareQty` INT NOT NULL DEFAULT 0 COMMENT 'cum spread quantity filled (all legs received)',\n    `avgSquarePrc` DOUBLE NOT NULL DEFAULT 0,\n    `cumPartialQty` INT NOT NULL DEFAULT 0 COMMENT 'cum spread quantity partially filled (at least one leg received) [expected cumFilledQty if all legs square up]',\n    `uBid` DOUBLE NOT NULL DEFAULT 0,\n    `uAsk` DOUBLE NOT NULL DEFAULT 0,\n    `bidPrc` FLOAT NOT NULL DEFAULT 0,\n    `askPrc` FLOAT NOT NULL DEFAULT 0,\n    `bidSize` INT NOT NULL DEFAULT 0,\n    `askSize` INT NOT NULL DEFAULT 0,\n    `openOrderSize` INT NOT NULL DEFAULT 0,\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'auto-hedge sec key',\n    `hedgeSecType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'auto-hedge sec type',\n    `riskLimitSize` INT NOT NULL DEFAULT 0 COMMENT 'risk limit size',\n    `riskLimitDesc` ENUM('None','NullCounter','StkClsOnly','StkDisabled','FutClsOnly','FutDisabled','OptClsOnly','OptDisabled','OrderMargin','AccMargin','DayMargin','OpenExpose','DayLnDDelta','DayShDDelta','DayAbsDDelta','DayLnWtVe','DayShWtVe','DayAbsWtVe','DayLnNValue','DayShNValue','DayAbsNValue','StkImpact','FutImpact','OptImpact','NullMRC','NullSRC','DDeltaLn','DDeltaSh','DDeltaAbs','WtVegaLn','WtVegaSh','WtVegaAbs','NValueLn','NValueSh','NValueAbs','CtrlDisable','AccEmaDdLn','AccEmaDdSh','AccEmaWvLn','AccEmaWvSh','SymEmaDdLn','SymEmaDdSh','SymEmaWvLn','SymEmaWvSh','ExpDDeltaLn','ExpDDeltaSh','ExpWtVegaLn','ExpWtVegaSh','ExpRm6Ln','ExpRm6Sh','SymDDeltaLn','SymDDeltaSh','SymVegaLn','SymVegaSh','SymWtVegaLn','SymWtVegaSh','SymRm7Ln','SymRm7Sh','GrpDdLn','GrpDdSh','GrpOptQtyLn','GrpOptQtySh','GrpOptQtyAbs','GrpVegaLn','GrpVegaSh','GrpVegaAbs','GrpRm1Ln','GrpRm1Sh','GrpRm1Abs','GrpRm2Ln','GrpRm2Sh','GrpRm3Ln','GrpRm3Sh','GrpRm4Ln','GrpRm4Sh','GrpRm5Ln','GrpRm5Sh','UDn50','UUp50','UDn15','UUp15','OrderSize','SysErr','StkErr','FutErr','OptErr','SSaleErr','SSaleRstr','StkSellLmt','Locate','StkRstct','SizeCap','ZeroCross','PreOpnQ','TrgWait','WaitStart','WaitTrigger','LegStep','TwapStep','MktNotReady','MaxRisk','NoStkBrw','BadMkt','BadLmt','NoAltOrdId','InvldBrkr','MaxChildOrders','MktHalted','UPrcErr','MinUBid','MaxUAsk','PreStart','ClntRteDn','ActiveSize','MktClosed','NoDDeltaMult','InvldDelta','RiskCollarRng','DayFutCnBot','DayFutCnSld','DayFutCnAbs','AccFutCnAbs') NOT NULL DEFAULT 'None' COMMENT 'reason for size reduction',\n    `riskLimitLevel` ENUM('None','MarExsOnSponsLvl','MarExsOnSponsTkLvl','MarExsOnCoreLvl','MarExsOnCoreTkLvl','MarSponsOnCoreLvl','MarSponsOnCoreTkLvl','MarCoreOnCoreLvl','MarCoreOnCoreTkLvl','MarCoreOnSubLvl','MarCoreOnSubTkLvl','MarCoreOnAccntLvl','MarCoreOnAccntTkLvl','MarSubOnAccntLvl','MarSubOnAccntTkLvl','MarCoreOnCustomLvl','MarCoreOnCustomTkLvl','MarSubOnCustomLvl','MarSubOnCustomTkLvl','UserLvl','UserTkLvl','AccntLvl','AccntTkLvl','CFirmLvl','CFirmTkLvl','RiskGroup','HardLvl','SoftLvl','GblTkLvl') NOT NULL DEFAULT 'None' COMMENT 'risk limit level responsible for reduction',\n    `riskLimitDetail` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'risk limit detail',\n    `limitPrice` DOUBLE NOT NULL DEFAULT 0,\n    `limitErr` ENUM('None','LmtPrcRng','NoStkNbbo','LowStkNbbo','WideStkNbbo','CrossStkNbbo','VolCalcErr','RefUPrcErr','RefDeltaRng','dUPrcRng','BadLmtType','LmtPrcErr','BadCent','CentVolLmt','BadSurf','CentPrcLmt','NoOptNbbo','WideOptNbbo','dYrsRng','BadRefDelta','BadStkNbbo','InvldMkt','BadVolLmt','CrossOptNbbo','NoFutNbbo','LowFutNbbo','WideFutNbbo','CrossFutNbbo','InvldRefMkt','TiedRtnRng','InvldAdjType','ProdDefErr','PrcBandViol','SysErr','NoQteProb','ProbRng','LmtClass','NoAlphaLvl','SurfErr','ProbErr','BadMult','NoUPrc','BadAlphaLvl','LegLimitErr','AuxLimit','NoFutMktSz','FutMktNotOpn','StaleProb','NoStkObj','NoFutObj','NoOptObj','dOpxGaRng','FadeProb','SurfNoTrd','SurfAge','SurfMktSess','SurfVolRng','SurfPrc','NoSurface','SurfLowCCnt','SurfLowPCnt','SurfFitPrcErr','SurfBidAskMiss','SurfLowCounter','SurfDefaultSkew','SurfSessionMiss','SurfBaseErr','SurfSwitchDelay','SurfWideMktV','SurfWideMktP','SurfUWidthEma','SurfCCntEma','SurfPCntEma','SurfVWidthEma','SurfPWidthEma','SurfWideUMkt','LowOptPrc','LegURng','WideMarket','dOpxThRng','NA','InvldMktWidth','Except','BadProbRecord','InterpErr','SurfImprErr','JoinImprErr','JoinItrpErr','JoinFadeErr','NoLimit') NOT NULL DEFAULT 'None',\n    `limitErrDesc` VARCHAR(255) NOT NULL DEFAULT '',\n    `algoState` ENUM('None','Posting','PendPost','OffMkt','BadFirmType','NoExchSet','BadOrder','NoPostSize','MaxActive','ActWait','SendHold','LmtErr','LmtRng','LmtPx','PendAct','MaxSize','OddLot','IWait','Quiet','Fade','InVld','MaxPSz','MaxOrd','MaxPxLv','MaxPec1','MaxPec2','MaxPec3','TryPxLvl1','TryPxLvl2','TryPxLvl3','DonePxLvl1','DonePxLvl2','DonePxLvl3','SendPxLvl1','SendPxLvl2','SendPxLvl3','NoExchQte','CrtErr','SizeWait','NbboHold','ExchHold','CxlRpl','SndErr','OldMdl','ExchRte','PrcHold','ModelErr','LowProb','PostWith','PostBhnd','NoModel','NoOptQte','NoStkQte','RiskHold','SurfHold','NoFutQte','NoStkPrt','PostClr','NoQte','PHold','StkEnv','OptEnv','FutEnv','TryExch','CkSend','PredMiss','SysEnv','NoExchAvail','PostWide','ZeroLmt','LockSkip','ProbLmt','PrcLmt','NoActSz','CkAdd','Locked','PendCxl','NewWait','EnterLimit','EnterPost','EnterFlow','EnterMake','EnterSeeker','EnterMatrix','EnterLegger','SendOK','SendFail','Except','Filled','TrySend','BadMkt','SysError','MktDataErr','TickSizeErr','NullParent','NoUPrc','TryTake','NoProb','SendThrtl','ProbErr','PendClear','MaxExCnt','MaxExpose','NoExDest','ReachDelay','ReachWait','ClearWait','CxlWait','LeavesErr','FeeWait','ActMaker','WthFade','SyncHold','AuctionDone','BadUDefKey','UDefReject','PendUDef','ExchRej','TrySendSprd','Working','RejDelay','NoStepSz','UpdtLegBrkr','LegNewWait','LegNoChng','LegBadMkt','LegImprvDelay','LegUpdtLmt','LegUpdtErr','NoExchList','PendTake','LeggerDone','MaxChildren','RiskCxlThrtl','FlashWait','NoImpRm','RollVlm','MoveVlm','AccelTake','NoMassQte','MktNotOpen','CreateSprd','InvldExch','RFQTimeout','TrySendRFQ','EnterResponder','CreateErr','LockFail','NoRoute','UnkCrossId','SelfTrade','ImpactHold','LegWait','TwapWait','InvalidSpread','PegHold','OffPeg','ChildCxlHold','CheckBrkr','FaceDone','CtrlSize','FacePromote','MatrixDone','TakeVlmHold','NoExchRoute','ExchNoMake','ExchWrking','ExchSingle','ExchMakeHold','ExchBrkrSkip','ExchNoQte','ExchMaxFee','ExchOffMkt','ExchNoImprv','FlashInitErr','FlashCalcErr','MarketClosed','ExchActOrd','ExchMaxFeeP','ExchNoRte','TakeFail','BestPxLmt','PennyProtected','WaitSquare','NotActive','RteOpnLmt','NoTiedMaker','WaitTrigger','CrossPending','NoResponders','SendThrtlHiLat','SendThrtlNewWin','SendThrtlRteQGap','SendThrtlRteQSz','SendThrtlRteQAge','ExRiskMgmt','RouteDayMax','ZeroChildSize','ExchTakeSkip','ExchNoSzSkip','ExchNoQteSkip','ExchNullRte','ExchRteFail','CxlCntWait','TryGetRoutes','GetMakePrice','MktPreOpen','MktClosed','MktHalted','PendCross','PendSweep','CrossMkt','Sweeping','SweepMiss','NoCrossSize','NoFace','ConfigErr','NExchOffMkt','CrossClear','LiqReqPend','CxlThrottle','RouteSafeMode','Crossing','CrossComplete','CrossExpired') NOT NULL DEFAULT 'None',\n    `algoCounter` INT NOT NULL DEFAULT 0,\n    `makeState` ENUM('None','Posting','PendPost','OffMkt','BadFirmType','NoExchSet','BadOrder','NoPostSize','MaxActive','ActWait','SendHold','LmtErr','LmtRng','LmtPx','PendAct','MaxSize','OddLot','IWait','Quiet','Fade','InVld','MaxPSz','MaxOrd','MaxPxLv','MaxPec1','MaxPec2','MaxPec3','TryPxLvl1','TryPxLvl2','TryPxLvl3','DonePxLvl1','DonePxLvl2','DonePxLvl3','SendPxLvl1','SendPxLvl2','SendPxLvl3','NoExchQte','CrtErr','SizeWait','NbboHold','ExchHold','CxlRpl','SndErr','OldMdl','ExchRte','PrcHold','ModelErr','LowProb','PostWith','PostBhnd','NoModel','NoOptQte','NoStkQte','RiskHold','SurfHold','NoFutQte','NoStkPrt','PostClr','NoQte','PHold','StkEnv','OptEnv','FutEnv','TryExch','CkSend','PredMiss','SysEnv','NoExchAvail','PostWide','ZeroLmt','LockSkip','ProbLmt','PrcLmt','NoActSz','CkAdd','Locked','PendCxl','NewWait','EnterLimit','EnterPost','EnterFlow','EnterMake','EnterSeeker','EnterMatrix','EnterLegger','SendOK','SendFail','Except','Filled','TrySend','BadMkt','SysError','MktDataErr','TickSizeErr','NullParent','NoUPrc','TryTake','NoProb','SendThrtl','ProbErr','PendClear','MaxExCnt','MaxExpose','NoExDest','ReachDelay','ReachWait','ClearWait','CxlWait','LeavesErr','FeeWait','ActMaker','WthFade','SyncHold','AuctionDone','BadUDefKey','UDefReject','PendUDef','ExchRej','TrySendSprd','Working','RejDelay','NoStepSz','UpdtLegBrkr','LegNewWait','LegNoChng','LegBadMkt','LegImprvDelay','LegUpdtLmt','LegUpdtErr','NoExchList','PendTake','LeggerDone','MaxChildren','RiskCxlThrtl','FlashWait','NoImpRm','RollVlm','MoveVlm','AccelTake','NoMassQte','MktNotOpen','CreateSprd','InvldExch','RFQTimeout','TrySendRFQ','EnterResponder','CreateErr','LockFail','NoRoute','UnkCrossId','SelfTrade','ImpactHold','LegWait','TwapWait','InvalidSpread','PegHold','OffPeg','ChildCxlHold','CheckBrkr','FaceDone','CtrlSize','FacePromote','MatrixDone','TakeVlmHold','NoExchRoute','ExchNoMake','ExchWrking','ExchSingle','ExchMakeHold','ExchBrkrSkip','ExchNoQte','ExchMaxFee','ExchOffMkt','ExchNoImprv','FlashInitErr','FlashCalcErr','MarketClosed','ExchActOrd','ExchMaxFeeP','ExchNoRte','TakeFail','BestPxLmt','PennyProtected','WaitSquare','NotActive','RteOpnLmt','NoTiedMaker','WaitTrigger','CrossPending','NoResponders','SendThrtlHiLat','SendThrtlNewWin','SendThrtlRteQGap','SendThrtlRteQSz','SendThrtlRteQAge','ExRiskMgmt','RouteDayMax','ZeroChildSize','ExchTakeSkip','ExchNoSzSkip','ExchNoQteSkip','ExchNullRte','ExchRteFail','CxlCntWait','TryGetRoutes','GetMakePrice','MktPreOpen','MktClosed','MktHalted','PendCross','PendSweep','CrossMkt','Sweeping','SweepMiss','NoCrossSize','NoFace','ConfigErr','NExchOffMkt','CrossClear','LiqReqPend','CxlThrottle','RouteSafeMode','Crossing','CrossComplete','CrossExpired') NOT NULL DEFAULT 'None',\n    `makeCounter` INT NOT NULL DEFAULT 0,\n    `brokerState` ENUM('None','Start','MarNotEnabled','CloseRequest','WaitTrigger','ChkBrkrFail','NotValid','StepChk','ResetOff','ResetOn','ResetActive','TwapChkWait','TwapChk','VwapChk','VwapVlmFail','CleanupBrkr','AlgoNormal','StkClosed','StkHalted','StkNotOpn','FutClosed','FutHalted','FutNotOpn','TryCxlChildrenCont','BrkrPendNew','BrkrPendClose','BrkrPreOpnQ','BrkrPendRpl','BrkrWaitTrig','TryCxlChildrenTerm','PendChildCxl','Done','BrkrClosing','BrkrClosed','BrkrRejected','MktHalted','LimitErr','RiskHold','SecTypeErr','MktDataErr','LmtErr','StkNotRdy','MinUPrcLmt','MaxUPrcLmt','InvldSysEnv','InvldRunStatus','InvldEngineType','MarketClosed','GoodTillDttmReached','TestExpired','AutoHedgeExpired','EngineClosed','EngPreOpn','OutsideMktDay','OutsideMktDay2','MaxChildRejects','IOCExpired','ProgressTimeout','NoStreetFixSession','StreetFixNotLoggedIn','StreetFixTimeout','HedgeHold','NewParent','AddUpdate','ClearAction','UpdateLegLimit','Exception','AlgoWorking','ReviewReject','ReviewPending','ReviewTimeout','PendTrigger','PendReview','PendCxlRpl','Suspended','LeggerWait','NoStkMkt','CkIncrProgress','TriggerHold','SwitchMOC','HoldMOC','VwapStepWait','MaxChildOrders','ActiveHold') NOT NULL DEFAULT 'None' COMMENT 'broker monitor state',\n    `spdrMktState` ENUM('None','PreOpen','Open','Closed','Halted','EngNotOpen','Exception') NOT NULL DEFAULT 'None',\n    `childOrderMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'bit-mask of all exchange for which a child order was generated',\n    `numChildOrders` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'total number of child orders generated by this parent broker (parent number)',\n    `numDayChildOrders` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'total number of child orders generated by this parent broker (all day; base parent number)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    CONSTRAINT nonnegative_baseParentNumber CHECK(ASCII(baseParentNumber) < 56),\n    PRIMARY KEY USING HASH (`parentNumber`,`recType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders.';\n\n"})})]})}function S(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>l});var n=t(96540);const a={},o=n.createContext(a);function d(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
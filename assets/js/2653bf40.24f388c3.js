"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81823],{95562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>x});var d=r(74848),s=r(28453);const i={},n=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/FutOrderGateway/FutOrderGateway",title:"FutOrderGateway",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/FutOrderGateway/FutOrderGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/FutOrderGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/FutOrderGateway/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/FutOrderGateway/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"FutAwayTktGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/FutAwayTktGateway/"},next:{title:"MLegOrderGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/MLegOrderGateway/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function a(e){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"5120-srse-gateway"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRTrade"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT,UPDATE(spdrActionType),INSERT,DELETE"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_at"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_ts"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"SR Account default  primary account associated with SRSE login"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderSide"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"Order side  Values BuySell"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"groupingCode"}),(0,d.jsx)(t.td,{children:"CHAR(19)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"Client supplied order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"spdrActionType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Add new order AddReplace add or replace order Cancel cxl existing Replace update existing only Release modify order active size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"altOrderId"}),(0,d.jsx)(t.td,{children:"VARCHAR(24)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Alternate client order ID  This order ID will be copied to all execution reports"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"altAccnt"}),(0,d.jsx)(t.td,{children:"VARCHAR(32)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"alternate client assigned long account string optional used to map between client and SR account strings"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"altUserName"}),(0,d.jsx)(t.td,{children:"VARCHAR(24)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"alternate client assigned user name optional used to map between client and SR account strings"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"execBrkrCode"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"optional override the default execBrkrCode for this order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"externExDest"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"routing code for orders directed to an external order router default  null should match FixRoutingTabledestination in SR accnt config"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"externParams"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"external algo namesparameters usually just an algo name"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"strategy"}),(0,d.jsx)(t.td,{children:"VARCHAR(36)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Client strategy string  This value will appear on the SR Trade Monitor and in execution reports"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderDttm"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"order entry time from clientif any"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"parent order size contracts 1  no changeused when spdrActionTypeRelease"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderActiveSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"total activated size total size released for execution 1  all size available 0  stagedlocked order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"addCumFillQuantity"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"If Yes then OrderSize is calculated  order arrival as requested OrderSize  existing CumFillQuantity"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxExposureSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"maximum simultaneous cumulative child order public size exposure 1  orderActiveSize order can overfill if  orderActiveSize and numMakeExchanges  1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"numMakeExchanges"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"number of exchanges 1  4 on which to publish public making orders  Effective number might be less than requested number if sufficient exchanges are not available"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"publicSize"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"public order size handling Noneuse default size handling usually limits public size to typical market size Randomizerandomize public size MktSizeexpose only typical market size FullSizeexpose entire order size where possible"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"randomizeSize"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"randomize public order size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"canOverlapCxlRepl"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"can execution engines overlap cancelreplace operations order can overfill if YES at most one active overlapping cxlreplace operation for each parent order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"progressRule"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"None  all size immediately availableTWAP  size released in time intervalsVWAP  size released in volume intervals"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"twapSliceCnt"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ProgressSliceCnt number of progress slices to use default  4 or 8 max 20"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"progressExposeTime"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"minimum time secs to expose order 0  no minimum used to guarantee that the order is exposed at midmarket for some time before actively taking"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vwapParticipation"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"target vwap participation rate target  of trade activity"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"auctionResponder"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"if set parent order can be an auction responder"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"triggerType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"type of trigger PrintVolSurfVol only for options print  print or actionable quote"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"triggerLevel"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"stoptrigger price for parent order to go active"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cxlUPrcRange"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"cancel parent order ifwhen outside minmax uPrc range Halt  also cancel if the securityunderlier has been halted"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minUBid"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"optional"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxUAsk"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"optional  001  none"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minMaxType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"if Prc minUBidmaxUAsk are expressed as prices if Pct then they are expresses as pct change since parent order arrival"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxChildOrders"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"maximum number of child orders that can be generated by this parent order order will terminate ifwhen this cap is reachedzero or neg  unlimited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"spdrStageType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"SizeLock  stage pending modification can reduce size SizeModify  stage pending modification can increasereduce size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marketSession"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"startDttm"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"optional parent order start time"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderDuration"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"optional number of seconds"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"activeDuration"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"goodTillDttm"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"optional default 20000101"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"startType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"WaitTrigger"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"parentOrderHandling"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"parentBalanceHandling"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderLimitType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Various Market Prc etc establishes the primary LimitPrice for a parent order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"takeLimitClass"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Simple  LimitPrice Probability  BESTLimitPrice ProbLimit"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"makeLimitClass"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Simple  LimitPrice Probability  BESTLimitPrice ProbLimit"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"takeReachRule"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"None  reach room immediately available Delayed  available after 13 seconds Passive  available if contra side aggresses WeakOnly  only take if available size  avgMarketSize ISOSweep  Intermarket Sweep requires WaitTrigger"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderPrcLimit"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Applies if LimitType  Prc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderPrcOffset"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"default0"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"takeAlphaType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Applies if takeLimitClass  Probability"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"makeAlphaType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Applies if makeLimitClass  Probability"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"takeAlphaFactor"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"22 takeProbLimit  MAXtakeProbability takeProbAvg  takeAlphaFactor  takeProbStd if takeAlphaType  Relative"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"makeAlphaFactor"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"22 makeProbLimit  MAXmakeProbability makeProbAvg  makeAlphaFactor  makeProbStd if makeAlphaType  Relative"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"takeProbability"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"takeProbLimit  takeProbability if takeAlphaType  Static"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"makeProbability"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"makeProbLimit  makeProbability if makeAlphaType  Static"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"autoHedge"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_at"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"autohedge instrument either TickerKey or ExpiryKey hedgeSecKey cannot equal orderFKey"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_ts"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"autohedge instrument either TickerKey or ExpiryKey hedgeSecKey cannot equal orderFKey"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"autohedge instrument either TickerKey or ExpiryKey hedgeSecKey cannot equal orderFKey"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"autohedge instrument either TickerKey or ExpiryKey hedgeSecKey cannot equal orderFKey"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"autohedge instrument either TickerKey or ExpiryKey hedgeSecKey cannot equal orderFKey"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"autohedge instrument either TickerKey or ExpiryKey hedgeSecKey cannot equal orderFKey"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"None Stock or Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeBetaRatio"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Portion of executed money to autohedge can be 10  Beta for beta hedging 40 to 40 note 00 will be interpreted as 10"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeScope"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Autohedge at the RiskGroup or Accnt level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSession"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"positionType"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"riskGroupId"}),(0,d.jsx)(t.td,{children:"CHAR(19)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"All group grp risk limits below are relative to this riskGroupId  Default 0 none  Required to be nonzero if autoHedge is something other than None"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"reqAuxRiskGroupCtrl"}),(0,d.jsx)(t.td,{children:"ENUM"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symDayDDeltaOffset"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctsymbol day delta offset target"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxSymDayDDeltaLn"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctsymbol day delta long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxSymDayDDeltaSh"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctsymbol day delta short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxGrpDayDDeltaLn"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctriskGroup day delta long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxGrpDayDDeltaSh"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctriskGroup day delta short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxGrpDayContractsLn"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctriskGroup day opt contracts long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxGrpDayContractsSh"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctriskGroup day opt contracts short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxGrpDayContractsAbs"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctriskGroup day opt contracts abs positive number1no limitrisk limit  max limit  abscurrent net counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxGrpDayRMetric1Ln"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctriskGroup day rMetric1 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxGrpDayRMetric1Sh"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctriskGroup day rMetric1 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxGrpDayRMetric1Abs"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"max acctriskGroup day rMetric1 abs positive number1no limitrisk limit  max limit  abscurrent net counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"grpDayRMetric1Ratio"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"target bot  sld ratio eg ratio05 means that neutral is bot rMetric1  05x sld rMetric1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"traderName"}),(0,d.jsx)(t.td,{children:"VARCHAR(32)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Name of the trader associated with the order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"userData1"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"userData2"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"childData"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"client supplied data field passes through to down stream child orders"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"checksum"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Must be set to 13  This helps detect some columnvalue misalignments"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_yr"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_mn"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_dy"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_at"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_ts"}),(0,d.jsx)(t.td,{children:"6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"7"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderSide"}),(0,d.jsx)(t.td,{children:"8"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"groupingCode"}),(0,d.jsx)(t.td,{children:"9"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"10"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var d=r(96540);const s={},i=d.createContext(s);function n(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);
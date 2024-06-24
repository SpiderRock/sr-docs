"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28950],{41882:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),d=t(28453);const s={title:"StkOrderGateway"},n="Message: StkOrderGateway (ID: 5225)",l={id:"Schema/Topics/srse-gateway/StkOrderGateway",title:"StkOrderGateway",description:"Records inserted, updated, or replaced into the StockOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.See the SpiderRock Execution Engine concept guide for more details.",source:"@site/docs/Schema/Topics/5120-srse-gateway/StkOrderGateway.md",sourceDirName:"Schema/Topics/5120-srse-gateway",slug:"/Schema/Topics/srse-gateway/StkOrderGateway",permalink:"/sr-docs/docs/Schema/Topics/srse-gateway/StkOrderGateway",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StkOrderGateway"},sidebar:"schemaSidebar",previous:{title:"StkAwayTktGateway",permalink:"/sr-docs/docs/Schema/Topics/srse-gateway/StkAwayTktGateway"},next:{title:"StockLocateRequestGateway",permalink:"/sr-docs/docs/Schema/Topics/srse-gateway/StockLocateRequestGateway"}},a={},c=[{value:"META DATA  (Topic: srse-gateway )",id:"meta-data--topic-srse-gateway-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"message-stkordergateway-id-5225",children:["Message: StkOrderGateway ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 5225)"})]}),"\n",(0,i.jsxs)(r.p,{children:["Records inserted, updated, or replaced into the StockOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(r.h3,{id:"meta-data--topic-srse-gateway-",children:"META DATA  (Topic: srse-gateway )"}),(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Attribute"}),(0,i.jsx)(r.th,{children:"Value"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"MLink Token"}),(0,i.jsx)(r.td,{children:"SystemData"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"SRSE Product"}),(0,i.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Comment"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ticker"}),(0,i.jsx)(r.td,{children:"TickerKey"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"accnt"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"SR Account (default = primary account associated with SRSE login)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"orderSide"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(r.td,{children:"Order side.  Values: Buy/Sell."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"groupingCode"}),(0,i.jsx)(r.td,{children:"long"}),(0,i.jsx)(r.td,{children:"Client supplied order"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clientFirm"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(r.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Comment"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"activeDuration"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"[optional] (number of seconds)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"addCumFillQuantity"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(r.td,{children:"If Yes then OrderSize is calculated @ order arrival as requested OrderSize + existing 'CumFillQuantity'."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"altAccnt"}),(0,i.jsx)(r.td,{children:"string(32)"}),(0,i.jsx)(r.td,{children:'alternate (client assigned) "long" account string (optional) [used to map between client and SR account strings]'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"altOrderId"}),(0,i.jsx)(r.td,{children:"string(24)"}),(0,i.jsx)(r.td,{children:"Alternate client order ID.  This order ID will be copied to all execution reports."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"altUserName"}),(0,i.jsx)(r.td,{children:"string(24)"}),(0,i.jsx)(r.td,{children:"alternate (client assigned) user name (optional) [used to map between client and SR account strings]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"auctionResponder"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/AuctionResponder",children:"enum : AuctionResponder"})}),(0,i.jsx)(r.td,{children:"if set, parent order can be an auction responder"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"autoHedge"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/AutoHedge",children:"enum : AutoHedge"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"canOverlapCxlRepl"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(r.td,{children:"can execution engines overlap cancel/replace operations [order can overfill if YES] (at most one active overlapping cxl/replace operation for each parent order)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"checksum"}),(0,i.jsx)(r.td,{children:"byte"}),(0,i.jsx)(r.td,{children:"Must be set to 13.  This helps detect some column/value misalignments."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childData"}),(0,i.jsx)(r.td,{children:"text1"}),(0,i.jsx)(r.td,{children:"client supplied data field; passes through to down stream child orders"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cxlUPrcRange"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/UPrcCxl",children:"enum : UPrcCxl"})}),(0,i.jsx)(r.td,{children:"cancel parent order if/when outside min/max uPrc range [_Halt = also cancel if the security/underlier has been halted]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"exchMask"}),(0,i.jsx)(r.td,{children:"uint"}),(0,i.jsx)(r.td,{children:"eligible exchanges (0 = all)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"execBrkrCode"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"(optional) override the default execBrkrCode for this order"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"externExDest"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"routing code for orders directed to an external order router (default = null); should match FixRoutingTable.destination (in SR accnt config)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"externParams"}),(0,i.jsx)(r.td,{children:"text1"}),(0,i.jsx)(r.td,{children:"external algo names/parameters (usually just an algo name)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"goodTillDttm"}),(0,i.jsx)(r.td,{children:"DateTime"}),(0,i.jsx)(r.td,{children:"[optional] (default: 2000-01-01)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"grpDayRMetric1Ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"target bot / sld ratio (eg ratio=0.5 means that neutral is bot rMetric1 = 0.5x sld rMetric1)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"hedgeBetaRatio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Portion of executed $money to auto-hedge (can be 1.0 / Beta for beta hedging) [-4.0 to +4.0]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"hedgeScope"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/HedgeScope",children:"enum : HedgeScope"})}),(0,i.jsx)(r.td,{children:"Auto-hedge at the RiskGroup or Accnt level"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"hedgeSecKey"}),(0,i.jsx)(r.td,{children:"ExpiryKey"}),(0,i.jsx)(r.td,{children:"auto-hedge instrument (either TickerKey or ExpiryKey) [hedgeSecKey.TickerKey cannot equal order.ticker]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"hedgeSecType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,i.jsx)(r.td,{children:"None, Stock, or Future"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"hedgeSession"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/MarketSession",children:"enum : MarketSession"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"makeAlphaFactor"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"[-2,+2] makeProbLimit = MAX(makeProbability, makeProbAvg + makeAlphaFactor * makeProbStd) [if makeAlphaType = Relative]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"makeAlphaType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/AlphaType",children:"enum : AlphaType"})}),(0,i.jsx)(r.td,{children:"Applies if makeLimitClass = Probability"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"makeLimitClass"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/SpdrLimitClass",children:"enum : SpdrLimitClass"})}),(0,i.jsx)(r.td,{children:"Simple = LimitPrice, Probability = BEST(LimitPrice, ProbLimit)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"makeProbability"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"makeProbLimit = makeProbability [if makeAlphaType = Static]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"marketSession"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/MarketSession",children:"enum : MarketSession"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxChildOrders"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"maximum number of child orders that can be generated by this parent order [order will terminate if/when this cap is reached;zero or neg = unlimited]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxExchFee"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"maximum exchange fee allowed when generating orders"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxExposureSize"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"maximum simultaneous cumulative child order public size exposure (-1 = orderActiveSize) [order can overfill if > orderActiveSize and numMakeExchanges > 1]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxGrpDayDDeltaLn"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"max acct+riskGroup day $delta long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxGrpDayDDeltaSh"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"max acct+riskGroup day $delta short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxGrpDayRMetric1Abs"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"max acct+riskGroup day rMetric1 abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxGrpDayRMetric1Ln"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"max acct+riskGroup day rMetric1 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxGrpDayRMetric1Sh"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"max acct+riskGroup day rMetric1 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxMakeExchFee"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"maximum making exchange fee (in point value) [zero = no limit; use non-zero number for limit to apply]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxSymDayDDeltaLn"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"max acct+symbol day $delta long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxSymDayDDeltaSh"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"max acct+symbol day $delta short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxTakeExchFee"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"maximum taking exchange fee (in point value) [zero = no limit; use non-zero number for limit to apply]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"maxUAsk"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"[optional] (< $0.01 = none)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"minMaxType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/MinMaxType",children:"enum : MinMaxType"})}),(0,i.jsx)(r.td,{children:"if Prc minUBid/maxUAsk are expressed as prices; if Pct then they are expresses as pct change since parent order arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"minMktOnClosePct"}),(0,i.jsx)(r.td,{children:"byte"}),(0,i.jsx)(r.td,{children:"Minimum pct [0 - 100] of order reserved for the on-close auction"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"minUBid"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"[optional]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"numMakeExchanges"}),(0,i.jsx)(r.td,{children:"byte"}),(0,i.jsx)(r.td,{children:"number of exchanges (1 - 4) on which to publish public making orders.  Effective number might be less than requested number if sufficient exchanges are not available."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"orderActiveSize"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"total activated size (total size released for execution) (-1 = all available size)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"orderDttm"}),(0,i.jsx)(r.td,{children:"DateTime"}),(0,i.jsx)(r.td,{children:"order entry time (from client;if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"orderDuration"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"[optional] (number of seconds)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"orderLimitType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/SpdrLimitType",children:"enum : SpdrLimitType"})}),(0,i.jsx)(r.td,{children:"Various (Market, Prc, etc.); establishes the primary LimitPrice for a parent order"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"orderPrcLimit"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"Applies if LimitType = Prc[]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"orderPrcOffset"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"default=0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"orderSize"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"parent order size (contracts) [-1 = no change;used when spdrActionType=Release]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentBalanceHandling"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/ParentBalanceHandling",children:"enum : ParentBalanceHandling"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentOrderHandling"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/ParentOrderHandling",children:"enum : ParentOrderHandling"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"progressExposeTime"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"minimum time (secs) to expose order (0 = no minimum; used to guarantee that the order is exposed at mid-market for some time before actively taking)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"progressRule"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/ProgressRule",children:"enum : ProgressRule"})}),(0,i.jsx)(r.td,{children:"None = all size immediately available;TWAP = size released in time intervals;VWAP = size released in volume intervals;"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"publicSize"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/PublicSizeHandling",children:"enum : PublicSizeHandling"})}),(0,i.jsx)(r.td,{children:"public order size handling: None=use default size handling (usually limits public size to 'typical' market size); Randomize=randomize public size; MktSize=expose only 'typical' market size; FullSize=expose entire order size where possible"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"randomizeSize"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(r.td,{children:"randomize public order size"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"reqAuxRiskGroupCtrl"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"riskGroupId"}),(0,i.jsx)(r.td,{children:"long"}),(0,i.jsxs)(r.td,{children:["All group (grp) risk limits below are relative to this riskGroupId.  Default: 0 (none).  Required to be non-zero if ",(0,i.jsx)(r.code,{children:"autoHedge"})," is something other than None."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spdrActionType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/SpdrActionType",children:"enum : SpdrActionType"})}),(0,i.jsx)(r.td,{children:"[Add (new order), AddReplace (add or replace order), Cancel (cxl existing), Replace (update existing only), Release (modify order active size)]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spdrStageType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,i.jsx)(r.td,{children:"SizeLock = stage pending modification (can reduce size); SizeModify = stage pending modification (can increase/reduce size)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ssaleFlag"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,i.jsx)(r.td,{children:"Used to determine stock auto-hedge flags."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"startDttm"}),(0,i.jsx)(r.td,{children:"DateTime"}),(0,i.jsx)(r.td,{children:"[optional] (parent order start time)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"startType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/StartType",children:"enum : StartType"})}),(0,i.jsx)(r.td,{children:"[None, WaitTrigger]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"strategy"}),(0,i.jsx)(r.td,{children:"string(36)"}),(0,i.jsx)(r.td,{children:"Client strategy string.  This value will appear on the SR Trade Monitor and in execution reports."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"symDayDDeltaOffset"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"max acct+symbol day $delta offset (target)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"takeAlphaFactor"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"[-2,+2] takeProbLimit = MAX(takeProbability, takeProbAvg + takeAlphaFactor * takeProbStd) [if takeAlphaType = Relative]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"takeAlphaType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/AlphaType",children:"enum : AlphaType"})}),(0,i.jsx)(r.td,{children:"Applies if takeLimitClass = Probability"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"takeLimitClass"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/SpdrLimitClass",children:"enum : SpdrLimitClass"})}),(0,i.jsx)(r.td,{children:"Simple = LimitPrice, Probability = BEST(LimitPrice, ProbLimit)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"takeProbability"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"takeProbLimit = takeProbability [if takeAlphaType = Static]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"takeReachRule"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/ReachRule",children:"enum : ReachRule"})}),(0,i.jsx)(r.td,{children:"None = reach room immediately available; Delayed = available after [1-3] seconds; Passive = available if contra side aggresses; WeakOnly = only take if available size < avgMarketSize; ISOSweep = Intermarket Sweep [requires WaitTrigger]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"traderName"}),(0,i.jsx)(r.td,{children:"string(32)"}),(0,i.jsx)(r.td,{children:"Name of the trader associated with the order"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"triggerLevel"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"stop/trigger price for parent order to go active"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"triggerType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Enums/TriggerType",children:"enum : TriggerType"})}),(0,i.jsx)(r.td,{children:"type of trigger (PrintVol/SurfVol only for options) [print = print or actionable quote]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"twapSliceCnt"}),(0,i.jsx)(r.td,{children:"byte"}),(0,i.jsx)(r.td,{children:"[ProgressSliceCnt] number of progress slices to use (default = 4 or 8) [max 20]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"userData1"}),(0,i.jsx)(r.td,{children:"text1"}),(0,i.jsx)(r.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX child orders and drops"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"userData2"}),(0,i.jsx)(r.td,{children:"text1"}),(0,i.jsx)(r.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX child orders and drops"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"vwapParticipation"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"target vwap participation rate (target % of trade activity)"})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>l});var i=t(96540);const d={},s=i.createContext(d);function n(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
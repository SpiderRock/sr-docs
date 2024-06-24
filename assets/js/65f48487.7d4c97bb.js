"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[18617],{38330:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=d(74848),s=d(28453);const n={title:"SpdrParentBrkrState"},i="Message: SpdrParentBrkrState (ID: 4070)",l={id:"Schema/Topics/parent-orders/SpdrParentBrkrState",title:"SpdrParentBrkrState",description:"SpdrParentBrkrState records are created/published by SpiderRock Execution Engines. Each record describes the current state of one (or more) parent orders. If a parent order is canceled/replaced then entire chain is represented by a single broker state record.",source:"@site/docs/Schema/Topics/3985-parent-orders/SpdrParentBrkrState.md",sourceDirName:"Schema/Topics/3985-parent-orders",slug:"/Schema/Topics/parent-orders/SpdrParentBrkrState",permalink:"/sr-docs/docs/Schema/Topics/parent-orders/SpdrParentBrkrState",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentBrkrState"},sidebar:"schemaSidebar",previous:{title:"SpdrParentBrkrEvent",permalink:"/sr-docs/docs/Schema/Topics/parent-orders/SpdrParentBrkrEvent"},next:{title:"SpdrParentBrokerSummary",permalink:"/sr-docs/docs/Schema/Topics/parent-orders/SpdrParentBrokerSummary"}},c={},h=[{value:"META DATA  (Topic: parent-orders )",id:"meta-data--topic-parent-orders-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"message-spdrparentbrkrstate-id-4070",children:["Message: SpdrParentBrkrState ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4070)"})]}),"\n",(0,t.jsx)(r.p,{children:"SpdrParentBrkrState records are created/published by SpiderRock Execution Engines. Each record describes the current state of one (or more) parent orders. If a parent order is canceled/replaced then entire chain is represented by a single broker state record."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"meta-data--topic-parent-orders-",children:"META DATA  (Topic: parent-orders )"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"ClientTrading"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secKey"}),(0,t.jsx)(r.td,{children:"OptionKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupingCode"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderSide"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR client firm"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"activeDuration"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"[optional] (number of seconds)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"activeSeconds"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"number of seconds that the parent order was active"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"aloneSeconds"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"number of seconds with one or more working child orders that make up 100% of nbbo"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altAccnt"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:'alternate (client assigned) "long" account string (optional)'})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altOrderId"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"alternate order ID (usually clOrdId from client)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altUserName"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"alternate (client assigned) user name (optional)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"autoHedge"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/AutoHedge",children:"enum : AutoHedge"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgFillPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"average fill price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgFillUPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"average fill underlier price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgFillVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"average fill volatility"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"baseParentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bestLimitOffset"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"(possible price improvement) (gap between best price and init/limit price) (Face/Matrix orders)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"brokerCounter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of times order checked by broker monitor (note: most checks result in no action)]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"brokerQwapMark"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"average quote mid-market (duration of parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"brokerQwapUMark"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"average underlier quote mid-market (duration of parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"brokerState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/BrokerState",children:"enum : BrokerState"})}),(0,t.jsx)(r.td,{children:"broker monitor state"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"brokerVwapMark"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"trade weighted average price (duration of parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"brokerVwapUMark"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"option-trade weighted average underlier price (duration of parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cMore"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{children:"number of additional child orders at inferior prices (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cex1"}),(0,t.jsx)(r.td,{children:"uint"}),(0,t.jsx)(r.td,{children:"bit mask of all exchanges where we are at this price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cex2"}),(0,t.jsx)(r.td,{children:"uint"}),(0,t.jsx)(r.td,{children:"bit mask of all exchanges where we are at this price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnDd"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"$delta per contract"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnDe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"delta per contract"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnGa"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnPr"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"premium per contract"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnTh"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnUPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnVe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"vega per contract"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnYrs"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnt1"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{children:"number of child orders at price level #1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnt2"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{children:"number of child orders at price level #2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cpx1"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"child price level #1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cpx2"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"child price level #2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"csz1"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cumulative size represented at this price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"csz2"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cumulative size represented at this price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumArrivalPnl"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumExchFee"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"cumulative fill exch fee"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumFillDDelta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"cumulative fill $Delta"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumFillQuantity"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cumulative fill quantity"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumFillTheta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"cumulative fill theta"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumFillVega"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"cumulative fill vega"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumM10Pnl"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ddMult"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"execBrkrCode"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"execBrkrCode attached to parent order (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"expiryKey"}),(0,t.jsx)(r.td,{children:"string(6)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"externHedgeExDest"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"external broker exDest (only used if orderHandling=Extern)\t\t\t# Should match FixRoutingTable.destination type (eg. #Nighthawk)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"externHedgeParams"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"external algo names/parameters (usually just an algo name)\t\t\t# usually copied from the FixRoutingTable.externParams"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"goodTillDttm"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"order expiration date/time (most recent parent order in cxl/replace chain)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeBetaRatio"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"auto-hedge ratio [from parent order (if supplied) or computed by SR]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeInstrument"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/HedgeInst",children:"enum : HedgeInst"})}),(0,t.jsx)(r.td,{children:"auto-hedge instrument (from parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeScope"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/HedgeScope",children:"enum : HedgeScope"})}),(0,t.jsx)(r.td,{children:"hedge group scope [RiskGroup or Accnt]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeSecKey"}),(0,t.jsx)(r.td,{children:"ExpiryKey"}),(0,t.jsx)(r.td,{children:"auto-hedge sec key (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeSecType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(r.td,{children:"auto-hedge sec type (Stock or Future)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeSession"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/MarketSession",children:"enum : MarketSession"})}),(0,t.jsx)(r.td,{children:"market session for the autohedge order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"isFlagged"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"broker state records is flagged for action (user alert only)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"isPermanentlyClosed"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"indicates that this broker is permanently closed (cannot be cxl/replaced or re-opened) [auto-hedge orders only]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"lastChildEvent"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/ChildEvent",children:"enum : ChildEvent"})}),(0,t.jsx)(r.td,{children:"[enum] last event code from broker/child order handler(s)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"lastChildRejectDttm"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"last child order reject dttm (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"lastChildRejectText"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"last child order reject reason/text (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"lastExternRiskReject"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"lastExternRiskText"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"last external (exch?) risk management reject"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"lastFillDttm"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"leavesQuantity"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"current child order leaves quantity (quantity actively working in the market;all child orders)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitErr"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/LimitError",children:"enum : LimitError"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitErrDesc"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"simple limit"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitRefUPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeCounter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of times order checked by post handler (note: most checks result in no action)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeLimitErr"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/LimitError",children:"enum : LimitError"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeLimitPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"make limit"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeProbLimit"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/AlgoState",children:"enum : AlgoState"})}),(0,t.jsx)(r.td,{children:"[enum] current state of non-marketable order handler (maker)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeSurfOffset"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"maxProgress"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/MaxProgress",children:"enum : MaxProgress"})}),(0,t.jsx)(r.td,{children:"maximum point of progress for most recent parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"maxProgressDetail"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"additional detail on point of maximum progress"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"maxProgressTime"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"time of last max progress advance"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mktCrossCounter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of times order checked by market cross handler (note: most checks result in no action)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mktCrossState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/MktCrossState",children:"enum : MktCrossState"})}),(0,t.jsx)(r.td,{children:"[enum] current state of mkt cross handler (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mktRespCounter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of times order checked by market response handler (note: most checks result in no action)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mktRespState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/MktRespState",children:"enum : MktRespState"})}),(0,t.jsx)(r.td,{children:"[enum] current state of response handler (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"modifyNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"most recent parent number affecting this order (AddReplace or Modify)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nbboAsk"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"current option nbbo ask (at time of record publish)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nbboAskSz"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"current option nbbo cum ask size (at time of record publish)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nbboBid"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"current option nbbo bid (at time of record publish)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nbboBidSz"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"current option nbbo cum bid size (at time of record publish)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"noticeNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"SR noticeNumber [required when parentOrderHandling = BlockAuction"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numExternRiskHold"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"num external risk management rejects received"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numImprvChld"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of child orders that improved an existing market"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numMakeThrottleSkips"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of childs orders not send to market dues to outbound lines being in a queued/throttled state"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numNewOrders"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of child orders generated by this broker (all parent orders)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numParentLimits"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of parent limit messages received for this broker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numRiskCancels"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of child orders cancels for risk reasons"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numUpdates"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of record updates (cumulative for the day)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderActiveSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"total activated size (total size released for execution) (-1 = all available size)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderRefSDiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderRefSDivType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/RefSDivType",children:"enum : RefSDivType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"order size of most recent parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"packageId"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"groups related order/brokers together (eg. Legger w/MLeg Parent)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"SR parent number"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pointCurrency"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pointValue"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"priceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(r.td,{children:"option price format code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"progressRuleDetail"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"Twap/Vwap progress detail"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"qwapDnPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"qwapPnL - uDriftQwapPnL"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"qwapPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"dir * qty * (brokerQwapMark - avgFillPrice)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskGroupId"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"all orders with the same riskGroupId share a common set of risk counters;.Grp. risk limits apply to these shared counters"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskHoldSeconds"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"number of seconds with parent order active but on risk hold (zero child order risk size)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitDesc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrRisk",children:"enum : SpdrRisk"})}),(0,t.jsx)(r.td,{children:"reason for size reduction"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitDetail"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"risk limit detail"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitLevel"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrRiskLevel",children:"enum : SpdrRiskLevel"})}),(0,t.jsx)(r.td,{children:"risk limit level responsible for reduction"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"risk limit size (maximum size to nearest risk limit)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskThrtlSeconds"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"number of seconds with parent order active but in risk throttle condition (temporary hold after fast/mass risk cancel)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sVolDrift"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface vol drift (since parent order start)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrBrokerStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrBrokerStatus",children:"enum : SpdrBrokerStatus"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrCloseReason"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrCloseReason",children:"enum : SpdrCloseReason"})}),(0,t.jsx)(r.td,{children:"close reason of most recent parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrComment"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrMktState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrMarketState",children:"enum : SpdrMarketState"})}),(0,t.jsx)(r.td,{children:"[enum] market state"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrOrderStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,t.jsx)(r.td,{children:"status of the most recent parent order handled by this broker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrRejectLevel"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrRiskLevel",children:"enum : SpdrRiskLevel"})}),(0,t.jsx)(r.td,{children:"reject level (if any) of most recent parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrRejectReason"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrRejectReason",children:"enum : SpdrRejectReason"})}),(0,t.jsx)(r.td,{children:"reject reason (if any) of most recent parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"stageType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,t.jsx)(r.td,{children:"parent is a staged order [ToolVisible]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"strategy"}),(0,t.jsx)(r.td,{children:"string(36)"}),(0,t.jsx)(r.td,{children:"parent order strategy string (can be user supplied)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sumMakeThrottleDelay"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"cumulative seconds of queue skip delay (seconds that a child order was not in the market dues to outbound lines being in a queued/throttled state)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfacePrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface price @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface volatility @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeCounter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of times order checked by take handler (note: most checks result in no action)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeLimitErr"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/LimitError",children:"enum : LimitError"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeLimitPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"take limit"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeProbLimit"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/AlgoState",children:"enum : AlgoState"})}),(0,t.jsx)(r.td,{children:"[enum] current state of marketable order handler (taker)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeSurfOffset"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"theoPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"theoVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tickValue"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{children:"underlier ticker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"SR system timestamp"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"triggerGroupId"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uDriftQwapPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"(dir * (de * qty * (brokerQwapUMark - avgFillUPrice)))"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uDriftVwapPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"(dir * (de * qty * (brokerVwapUMark - avgFillUPrice)))"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"underlier price (usually mid-market)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcDrift"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"underlier drift (since parent order start)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcOrder"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"underlier price at the time of last parent order arrival"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPriceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(r.td,{children:"underlier price format code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"underlierType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/UnderlierType",children:"enum : UnderlierType"})}),(0,t.jsx)(r.td,{children:"type of underlier (affects $greek calculations)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"underliersPerCn"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"option delivery underliers per contract"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"updateDttm"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"updateSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/UpdateSource",children:"enum : UpdateSource"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"userData1"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"userData2"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"userName"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"SR user name string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"vwapDnPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"vwapPnL - uDriftVwapPnL"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"vwapPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"dir * qty * (brokerVwapMark - avgFillPrice)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"withSeconds"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"number of seconds with one or more working child orders that are with of nbbo"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"workingSeconds"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"number of child order seconds (can be greater than activeSeconds if working on more than one exchange)"})]})]})]})]})]})}function j(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>l});var t=d(96540);const s={},n=t.createContext(s);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
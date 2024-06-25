"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6843],{46607:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=d(74848),s=d(28453);const i={title:"SpdrParentBrkrEvent"},n="Schema: SpdrParentBrkrEvent (ID: 4065)",l={id:"Schema/Topics/parent-orders/SpdrParentBrkrEvent",title:"SpdrParentBrkrEvent",description:"SpdrParentBrkrEvent records are published when a new or cxl/replace parent order arrives causes a broker to begin working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders.",source:"@site/docs/Schema/Topics/3985-parent-orders/SpdrParentBrkrEvent.md",sourceDirName:"Schema/Topics/3985-parent-orders",slug:"/Schema/Topics/parent-orders/SpdrParentBrkrEvent",permalink:"/docs/Schema/Topics/parent-orders/SpdrParentBrkrEvent",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentBrkrEvent"},sidebar:"schemaSidebar",previous:{title:"SpdrParentBrkrDetail",permalink:"/docs/Schema/Topics/parent-orders/SpdrParentBrkrDetail"},next:{title:"SpdrParentBrkrState",permalink:"/docs/Schema/Topics/parent-orders/SpdrParentBrkrState"}},c={},h=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-spdrparentbrkrevent-id-4065",children:["Schema: SpdrParentBrkrEvent ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4065)"})]}),"\n",(0,t.jsx)(r.p,{children:"SpdrParentBrkrEvent records are published when a new or cxl/replace parent order arrives causes a broker to begin working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"meta-data",children:"META DATA"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"ClientTrading"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"parent-orders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"recType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/EventRecType",children:"enum : EventRecType"})}),(0,t.jsx)(r.td,{children:"type of record [New,Modify,Replace,Close,Reject]"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"actionOrderSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"order size available for immediate action (note: not all algo combinations allow immediate action)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altAccnt"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:'alternate (client assigned) "long" account string (optional)'})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altUserName"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"alternate (client assigned) user name (optional)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrivalDDiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"effective cumulative discrete dividend @ parent order arrival (fixed for life of parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrivalRate"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"effective interest rate @ parent order arrival (fixed for life of parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrivalSDiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"effective sdiv rate @ parent order arrival (fixed for life of parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arriveCumSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cum size of all exchanges at NBBO price @ parent order arrival"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arriveLimitPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"expected average fill price if all immediately marketable size executed as advertized"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arriveLimitSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"immediately marketable size up to limit price on parent order arrival"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arriveNbboExch"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,t.jsx)(r.td,{children:"exchange representing largest size @ order arrival"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arriveNbboSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"size of the single largest exchange @ parent order arrival"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arriveNumExch"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{children:"num exchanges making up cum size @ parent order arrival"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askIVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"ask (nbbo) ivol @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"ask (nbbo) price @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"ask size (nbbo cum) @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgFillPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"average fill price of all fills attributed parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"baseParentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"SPDR order number (initial number in cancel/replace sequence) (also, source parent for dynamically generated orders;eg auto-hedges)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidIVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"bid (nbbo) ivol @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"bid (nbbo) price @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"bid size (nbbo cum) @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"brokerState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/BrokerState",children:"enum : BrokerState"})}),(0,t.jsx)(r.td,{children:"broker monitor state"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"childOrderLeaves"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of open child orders @ record send"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"childOrderMask"}),(0,t.jsx)(r.td,{children:"uint"}),(0,t.jsx)(r.td,{children:"bit-mask of all exchange for which a child order was generated"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR client firm code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumFillQuan"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cumulative fill quantity attributed to parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"engineName"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"server stripe"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eventNumber"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupingCode"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeSecKey"}),(0,t.jsx)(r.td,{children:"ExpiryKey"}),(0,t.jsx)(r.td,{children:"auto-hedge sec key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeSecType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(r.td,{children:"auto-hedge sec type"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"lastChildEvent"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/ChildEvent",children:"enum : ChildEvent"})}),(0,t.jsx)(r.td,{children:"most recent child handling event"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"leavesQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of active child order contracts (sum of all active child orders) @ record send"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"parent simple prc limit (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitRefUPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"effective reference underlier price @ record publish (usually either mid or bid/ask depending on limit type)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"parent simple vol limit (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeLimitErr"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/LimitError",children:"enum : LimitError"})}),(0,t.jsx)(r.td,{children:"limit price error code (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeLimitErrDesc"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"additional limit price error descriptive text"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeLimitPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"effective order limit price @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AlgoState",children:"enum : AlgoState"})}),(0,t.jsx)(r.td,{children:"[enum] current state of non-marketable order handler (maker)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mktCrossState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MktCrossState",children:"enum : MktCrossState"})}),(0,t.jsx)(r.td,{children:"[enum] current state of mkt cross handler (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numChildOrders"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"total number of child orders generated by this parent broker (parent number)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numDayChildOrders"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"total number of child orders generated by this parent broker (all day; base parent number)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numOrders"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number active child orders @ record send"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"openOrderSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"open order size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderSide"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prevParentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"SPDR order number (order being cancelled/replaced) (zero if none)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"priceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(r.td,{children:"price display format code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitDesc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrRisk",children:"enum : SpdrRisk"})}),(0,t.jsx)(r.td,{children:"reason for size reduction (identifies the most restrictive risk limit)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitDetail"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"risk limit level responsible for reduction"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitLevel"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrRiskLevel",children:"enum : SpdrRiskLevel"})}),(0,t.jsx)(r.td,{children:"risk limit level responsible for reduction"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"risk limit size (distance to most restrictive risk limit associated with this parent order)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secKey"}),(0,t.jsx)(r.td,{children:"OptionKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrBrokerStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrBrokerStatus",children:"enum : SpdrBrokerStatus"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrCloseReason"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrCloseReason",children:"enum : SpdrCloseReason"})}),(0,t.jsx)(r.td,{children:"parent order close reason (if closed)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrComment"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"additional detail (close/reject reason; last child order error)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrMktState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrMarketState",children:"enum : SpdrMarketState"})}),(0,t.jsx)(r.td,{children:"market state code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrOrderStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,t.jsx)(r.td,{children:"parent order status"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrRejectReason"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrRejectReason",children:"enum : SpdrRejectReason"})}),(0,t.jsx)(r.td,{children:"parent order reject reason (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"stageReview"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/StageReview",children:"enum : StageReview"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"stageType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,t.jsx)(r.td,{children:"parent is a staged order [ToolVisible]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceDe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceGa"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfacePh"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfacePrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface price @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceRate"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceRo"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceSDiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceTh"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceUPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceVe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface volatility @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfaceYrs"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SR surface calc value @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeLimitErr"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/LimitError",children:"enum : LimitError"})}),(0,t.jsx)(r.td,{children:"limit price error code (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeLimitErrDesc"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"additional limit price error descriptive text"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeLimitPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"effective order limit price @ record publish"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"takeState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AlgoState",children:"enum : AlgoState"})}),(0,t.jsx)(r.td,{children:"[enum] current state of marketable order handler (taker)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"theoOpx"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"option theo prc (from theoVol)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"theoVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"option theo vol (from theoModel;if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{children:"SpiderRock underlier stock key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"timestamp of last modification"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uAsk"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"underlier ask price @ record publish (options only)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uBid"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"underlier bid price @ record publish (options only)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPriceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(r.td,{children:"underlier price display format code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"userName"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"user associated with the most recent parent order"})]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>n,x:()=>l});var t=d(96540);const s={},i=t.createContext(s);function n(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);
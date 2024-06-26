"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84670],{24013:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=d(74848),s=d(28453);const n={title:"SpdrMLegBrkrEvent"},i="Schema: SpdrMLegBrkrEvent (ID: 4025)",l={id:"Schemas/Schema/Topics/parent-orders/SpdrMLegBrkrEvent",title:"SpdrMLegBrkrEvent",description:"SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders.",source:"@site/docs/Schemas/Schema/Topics/3985-parent-orders/SpdrMLegBrkrEvent.md",sourceDirName:"Schemas/Schema/Topics/3985-parent-orders",slug:"/Schemas/Schema/Topics/parent-orders/SpdrMLegBrkrEvent",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrMLegBrkrEvent",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrMLegBrkrEvent"},sidebar:"schemaSidebar",previous:{title:"SpdrFixParentReject",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrFixParentReject"},next:{title:"SpdrMLegBrkrState",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrMLegBrkrState"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-spdrmlegbrkrevent-id-4025",children:["Schema: SpdrMLegBrkrEvent ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4025)"})]}),"\n",(0,t.jsx)(r.p,{children:"SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"ClientTrading"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"parent-orders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"recType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/EventRecType",children:"enum : EventRecType"})}),(0,t.jsx)(r.td,{children:"type of record [New,Repl,Close]"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"algoCounter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"algoState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AlgoState",children:"enum : AlgoState"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altAccnt"}),(0,t.jsx)(r.td,{children:"string(32)"}),(0,t.jsx)(r.td,{children:'alternate (client assigned) "long" account string (optional)'})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altUserName"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"alternate (client assigned) user name (optional)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgSquarePrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"baseParentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"SPDR order number (initial number in cancel/replace sequence) (also, source parent for dynamically generated orders;eg auto-hedges)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"brokerState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/BrokerState",children:"enum : BrokerState"})}),(0,t.jsx)(r.td,{children:"broker monitor state"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"childOrderMask"}),(0,t.jsx)(r.td,{children:"uint"}),(0,t.jsx)(r.td,{children:"bit-mask of all exchange for which a child order was generated"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR client firm code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumPartialQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cum spread quantity partially filled (at least one leg received) [expected cumFilledQty if all legs square up]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumSquareQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cum spread quantity filled (all legs received)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"engineName"}),(0,t.jsx)(r.td,{children:"string(32)"}),(0,t.jsx)(r.td,{children:"server stripe"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eventNumber"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupingCode"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeSecKey"}),(0,t.jsx)(r.td,{children:"ExpiryKey"}),(0,t.jsx)(r.td,{children:"auto-hedge sec key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hedgeSecType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(r.td,{children:"auto-hedge sec type"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitErr"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/LimitError",children:"enum : LimitError"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitErrDesc"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limitPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeCounter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"makeState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AlgoState",children:"enum : AlgoState"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"modifiedBy"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"modifiedIn"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numChildOrders"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"total number of child orders generated by this parent broker (parent number)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numDayChildOrders"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"total number of child orders generated by this parent broker (all day; base parent number)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"openOrderSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderSide"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prevParentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"SPDR order number (order being cancelled/replaced) (zero if none)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitDesc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrRisk",children:"enum : SpdrRisk"})}),(0,t.jsx)(r.td,{children:"reason for size reduction"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitDetail"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"risk limit detail"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitLevel"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrRiskLevel",children:"enum : SpdrRiskLevel"})}),(0,t.jsx)(r.td,{children:"risk limit level responsible for reduction"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskLimitSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"risk limit size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrBrokerStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrBrokerStatus",children:"enum : SpdrBrokerStatus"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrCloseReason"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrCloseReason",children:"enum : SpdrCloseReason"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrComment"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{children:"additional detail if parent closed or rejected"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrMktState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrMarketState",children:"enum : SpdrMarketState"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrOrderStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrRejectReason"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrRejectReason",children:"enum : SpdrRejectReason"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"stageReview"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/StageReview",children:"enum : StageReview"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"stageType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,t.jsx)(r.td,{children:"parent is a staged order [ToolVisible]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"timestamp of last modification"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uAsk"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uBid"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>l});var t=d(96540);const s={},n=t.createContext(s);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[54742],{72801:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var d=s(74848),t=s(28453);const i={title:"StockPositionRecordV5"},n="Message: StockPositionRecordV5 (ID: 4850)",c={id:"Schema/Topics/risk-v5/StockPositionRecordV5",title:"StockPositionRecordV5",description:"StockPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.These records are published by a CoreRiskServer and represent the position and risk markup detail for a single equity or ETF security.New records are published immediately when a position changes and about once per minute if no position has changed.Note that all stock, future and option records for a single ticker are published simultaneously and records for the same chain should have consistent marks.",source:"@site/docs/Schema/Topics/4740-risk-v5/StockPositionRecordV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/StockPositionRecordV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/StockPositionRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockPositionRecordV5"},sidebar:"schemaSidebar",previous:{title:"SodClearingRecordV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/SodClearingRecordV5"},next:{title:"SymbolMarginSummaryV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/SymbolMarginSummaryV5"}},o={},l=[{value:"META DATA  (Topic: risk-v5 )",id:"meta-data--topic-risk-v5-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"message-stockpositionrecordv5-id-4850",children:["Message: StockPositionRecordV5 ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 4850)"})]}),"\n",(0,d.jsxs)(r.p,{children:["StockPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single equity or ETF security.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Note that all stock, future and option records for a single ticker are published simultaneously and records for the same chain should have consistent marks."]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(r.h3,{id:"meta-data--topic-risk-v5-",children:"META DATA  (Topic: risk-v5 )"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"ClientRisk"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SRSE Product"}),(0,d.jsx)(r.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker"}),(0,d.jsx)(r.td,{children:"TickerKey"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tradeDate"}),(0,d.jsx)(r.td,{children:"DateKey"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskSession"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/RiskSession",children:"enum : RiskSession"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(r.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"beta"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"beta (usually beta to SPX; see AccountConfig.betaSource)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"betaSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BetaSource",children:"enum : BetaSource"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"borrowRate"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"overnight rate required to borrow stock (if known)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"dayPnl"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"exDivAmt"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"amount of any dividend going ex today"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"marginUDn"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc dn"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"marginUUp"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc up"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"maxExecDttm"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{children:"max (timestamp) of included SpdrParentExecution records"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numExecutions"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of included SpdrParentExecution records"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"opnPnlClrMark"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"opnPnlMidMark"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"pointCurrency"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"pointValue"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"priAggGroup"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"primary aggregation group"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"priceFormat"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,d.jsx)(r.td,{children:"price display format code"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskServerCode"}),(0,d.jsx)(r.td,{children:"string(6)"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secAggGroup"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"secondary aggregation group"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBot"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares bot today"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBotHdg"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares bot today from hedging (spdrSource=HedgeTool)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBotOpn"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares bot today from hedging (spdrSource=OpenHedge)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBotTrd"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares bot today from any trade hedging source (AutoHedge or Trades loop)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBotTrh"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares bot today from hedging (spdrSource=TradeHedge)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSld"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares sld today"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldHdg"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares sld today from hedging (spdrSource=HedgeTool)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldOpn"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares sld today from hedging (spdrSource=OpenHedge)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldShrt"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares sld short today"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldTrd"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares sld today from any trade hedging source (AutoHedge or Trades loop)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldTrh"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares sld today from hedging (spdrSource=TradeHedge)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkAsk"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"current stock ask (any market session) (zero if market closed/halted)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkBid"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"current stock bid (any market session) (zero if market closed/halted)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMark"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"current stock mark (freezes at SR CloseMarkTime)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMarkErrCodes"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/MarkErrorCode",children:"flag : MarkErrorCode"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMarkSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/UMarkSource",children:"enum : UMarkSource"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMnyBot"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"sum of settle cash for all buy executions"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMnySld"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"sum of settle cash for all sell executions"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnClrMark"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"start-of-day CLR stock mark (supplied by client/clearing firm via clearing position load) [should be corp action adjusted]"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnMidMark"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"start-of-day SR stock mark (rotated from prior day record) [corp action adjusted]"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnPos"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"start of period share position (effective; can be from either CLR or SR)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnPosClr"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"start-of-day CLR share position (supplied by client/clearing firm via clearing position load) [should be corp action adjusted]"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnPosPrv"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"start-of-day SR share position (rotated from prior day record) [corp action adjusted]"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnPosSrc"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,d.jsx)(r.td,{children:"start of period position source"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkPrc"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"current stock price (any market session) (persists if market closed/halted)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"symbolType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tickValue"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{})]})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var d=s(96540);const t={},i=d.createContext(t);function n(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);
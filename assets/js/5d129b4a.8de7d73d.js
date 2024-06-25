"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35237],{23366:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var s=t(74848),d=t(28453);const n={title:"FuturePositionRecordV5"},i="Message: FuturePositionRecordV5 (ID: 4775)",c={id:"Schema/Topics/risk-v5/FuturePositionRecordV5",title:"FuturePositionRecordV5",description:"FuturePositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.These records are published by a CoreRiskServer and represent the position and risk markup detail for a single futures contract.New records are published immediately when a position changes and about once per minute if no position has changed.Note that all stock, future and option records for a chain are published simultaneously and records for the same chain should have consistent marks.",source:"@site/docs/Schema/Topics/4740-risk-v5/FuturePositionRecordV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/FuturePositionRecordV5",permalink:"/docs/Schema/Topics/risk-v5/FuturePositionRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FuturePositionRecordV5"},sidebar:"schemaSidebar",previous:{title:"ExpirationRiskRecordV5",permalink:"/docs/Schema/Topics/risk-v5/ExpirationRiskRecordV5"},next:{title:"FutureRiskDetailV5",permalink:"/docs/Schema/Topics/risk-v5/FutureRiskDetailV5"}},l={},o=[{value:"META DATA  (Topic: risk-v5 )",id:"meta-data--topic-risk-v5-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"message-futurepositionrecordv5-id-4775",children:["Message: FuturePositionRecordV5 ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4775)"})]}),"\n",(0,s.jsxs)(r.p,{children:["FuturePositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single futures contract.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Note that all stock, future and option records for a chain are published simultaneously and records for the same chain should have consistent marks."]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"meta-data--topic-risk-v5-",children:"META DATA  (Topic: risk-v5 )"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"ClientRisk"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fkey"}),(0,s.jsx)(r.td,{children:"ExpiryKey"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tradeDate"}),(0,s.jsx)(r.td,{children:"DateKey"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"riskSession"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/RiskSession",children:"enum : RiskSession"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"aggGroup"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"SR assigned aggregation group"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"beta"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"beta (usually beta to SPX; see AccountConfig.betaSource) (if applicable)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"betaSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BetaSource",children:"enum : BetaSource"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnBot"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts bot today"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnBotHdg"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts bot today from open pos hedging (spdrSource=HedgeTool)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnBotOpn"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts bot today from open pos hedging (spdrSource=OpenHedge)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnBotTrd"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts bot today"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnBotTrh"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts bot today from open pos hedging (spdrSource=TradeHedge)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnClosed"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts closed today"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnOpened"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts opened today"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnSld"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts sld today"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnSldHdg"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts sld today from open pos hedging (spdrSource=HedgeTool)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnSldOpn"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts sld today from open pos hedging (spdrSource=OpenHedge)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnSldTrd"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts sld today"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cnSldTrh"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of contracts sld today from open pos hedging (spdrSource=TradeHedge)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"dayPnl"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"days"}),(0,s.jsx)(r.td,{children:"short"}),(0,s.jsx)(r.td,{children:"days to expiration"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futAsk"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"current future ask (any market session) (zero if market closed/halted)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futBid"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"current future bid (any market session) (zero if market closed/halted)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futMark"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"current mark (usually mid market) (freezes at SR CloseMarkTime)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futMarkErrCodes"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MarkErrorCode",children:"flag : MarkErrorCode"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futMarkSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/UMarkSource",children:"enum : UMarkSource"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futMnyBot"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"sum of settle cash for all buy executions"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futMnySld"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"sum of settle cash for all sell executions"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futOpnClrMark"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"start of day clearing mark (usually exchange settlement mark)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futOpnMidMark"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"start of day SR mark"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futOpnPos"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"start of period contract position (effective; can be from either CLR or SR)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futOpnPosClr"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"start-of-day CKR contract position (supplied by client/clearing firm via clearing position load)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futOpnPosPrv"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"start-of-day SR contract position (rotated from prior day record)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futOpnPosSrc"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,s.jsx)(r.td,{children:"start of period position source"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futPrc"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"current future price (any market session) (persists if market closed/halted)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"marginUDn"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc dn"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"marginUUp"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc up"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"maxExecDttm"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{children:"maximum activity dttm of execution records included in this future risk record"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"numExecutions"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of included SpdrParentExecution records"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"opnPnlClrMark"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"opnPnlMidMark"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pointCurrency"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pointValue"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"priceFormat"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,s.jsx)(r.td,{children:"price display format code"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rate"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"global rate to expiration"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ratePr"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"start of period global rate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rh"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"rho; (dPrc / dRate) - only for STIR futures"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"riskServerCode"}),(0,s.jsx)(r.td,{children:"string(6)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tickValue"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ticker"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{children:"underlying ticker"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"underlierType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/UnderlierType",children:"enum : UnderlierType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"underliersPerCn"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of underlying units per futures contract"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ve"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"vega; (dPrc / dVol) - only for VIX futures"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"years"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"years to expiration"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"yearsPr"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"start of period years to expiration"})]})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var s=t(96540);const d={},n=s.createContext(d);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);
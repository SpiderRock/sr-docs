"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[16067],{94549:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var d=s(74848),r=s(28453);const i={title:"SymbolRiskDetailV5"},n="Schema: SymbolRiskDetailV5 (ID: 4860)",l={id:"Schema/Topics/risk-v5/SymbolRiskDetailV5",title:"SymbolRiskDetailV5",description:"SymbolRiskDetail records contain semi-static markup detail for SymbolRiskSummary records.",source:"@site/docs/Schema/Topics/4740-risk-v5/SymbolRiskDetailV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/SymbolRiskDetailV5",permalink:"/docs/Schema/Topics/risk-v5/SymbolRiskDetailV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SymbolRiskDetailV5"},sidebar:"schemaSidebar",previous:{title:"SymbolMarginSummaryV5",permalink:"/docs/Schema/Topics/risk-v5/SymbolMarginSummaryV5"},next:{title:"SymbolRiskSummaryV5",permalink:"/docs/Schema/Topics/risk-v5/SymbolRiskSummaryV5"}},c={},a=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-symbolriskdetailv5-id-4860",children:["Schema: SymbolRiskDetailV5 ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 4860)"})]}),"\n",(0,d.jsx)(t.p,{children:"SymbolRiskDetail records contain semi-static markup detail for SymbolRiskSummary records."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"meta-data",children:"META DATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"risk-v5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"DateKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"availableLocateQuan"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"available equity locate quantity in this symbol after trades"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"baseVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"from earn mult fit (<0.75 yrs)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"beta"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"beta (usually beta to SPX; see AccountConfig.betaSource)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"betaSource"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BetaSource",children:"enum : BetaSource"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"binaryDays"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Fractional days [0 - 5.0] prior to expiration after which hedgeDeltas become binary [-1.0, -0.5, 0, +0.5, +1.0] [SymbolControl.binaryDays]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"borrowRate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"expected overnight borrow rate (special borrrow)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientTags"}),(0,d.jsx)(t.td,{children:"text2"}),(0,d.jsx)(t.td,{children:"(optional) user defined account tag(s) (eg. tag,tag,tag,tag) [max of 10,000 total chars (including seps)]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ctrlUpdate"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{children:"last update dttm of SymbolControl record [SymbolControl.timestamp]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dAmt"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"$amount of the next expected dividend"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dDays"}),(0,d.jsx)(t.td,{children:"short"}),(0,d.jsx)(t.td,{children:"days to next expected dividend (negative indicates days from a recent ex-date)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"eDays"}),(0,d.jsx)(t.td,{children:"short"}),(0,d.jsx)(t.td,{children:"days to next expected earnings (negative indicates days from a recent announcement)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"earnMult"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"expected earnings multiplier (affects some risk slides) [1.0 - 8.0]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"earnMultErr"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"gcFlag"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"is this symbol a general collateral name (no special borrow rate)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"gcRate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"expected overnight rate if general collateral (usually FF overnight rate)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeDeltaRule"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/HedgeDeltaRule",children:"enum : HedgeDeltaRule"})}),(0,d.jsx)(t.td,{children:"HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (sticky delta), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface and atm veSlope (sticky delta)) [AccountConfig.hedgeDelta]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"holdReason"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/HoldReason",children:"enum : HoldReason"})}),(0,d.jsx)(t.td,{children:"User supplied description (only informational) [SymbolControl.holdReason]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"industry"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"locateQuan"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"starting locate quantity in this symbol befores trades"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MarginType",children:"enum : MarginType"})}),(0,d.jsx)(t.td,{children:"margin slide type: NMS_Equity = +/- 15%, NMS_Index = -8%/+6%, NMS_Medium = +/-10%"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{children:"Symbol name/description"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"optStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/OptStatus",children:"enum : OptStatus"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"optVolume"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"trailing 30 day average daily option volume"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"periodEndTime"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{children:"DTTM of the end of the current trading period"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pointCurrency"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"riskClass"}),(0,d.jsx)(t.td,{children:"string(8)"}),(0,d.jsx)(t.td,{children:"Symbol Risk Class Code (user supplied) [SymbolControl.riskClass]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sector"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"stMaxIVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"maximum atm implied volatility (all expirations with a position)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"stMinIVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"minimum atm implied volatility (all expirations with a position)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"stkStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/StkStatus",children:"enum : StkStatus"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"stkVolume"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"trailing 30 day average daily stock volume"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbolType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,d.jsx)(t.td,{children:"SymbolType (Equity, ETF, ShortETF, ADR, CashIndex, FutureComplex)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tailVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"weighted toward max expiration"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tapeCode"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TapeCode",children:"enum : TapeCode"})}),(0,d.jsx)(t.td,{children:"market data tape code"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theoModel"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{children:"SR assigned theo model tag (associated with user supplied theo surfaces) [AccountConfig.theoModel]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theoModel2"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{children:"SR assigned theo model#2 tag (associated with user supplied theo surfaces) [AccountConfig.theoModel2]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>l});var d=s(96540);const r={},i=d.createContext(r);function n(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);
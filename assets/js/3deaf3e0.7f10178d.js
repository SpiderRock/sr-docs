"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93718],{89566:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=t(74848),d=t(28453);const i={title:"FutureRiskDetailV5"},n="Message: FutureRiskDetailV5 (ID: 4780)",l={id:"Schema/Topics/risk-v5/FutureRiskDetailV5",title:"FutureRiskDetailV5",description:"FutureRiskDetail records contain semi-static markup detail for FutureRiskSummary records.",source:"@site/docs/Schema/Topics/4740-risk-v5/FutureRiskDetailV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/FutureRiskDetailV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/FutureRiskDetailV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FutureRiskDetailV5"},sidebar:"schemaSidebar",previous:{title:"FuturePositionRecordV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/FuturePositionRecordV5"},next:{title:"FutureRiskSummaryV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/FutureRiskSummaryV5"}},c={},h=[{value:"META DATA  (Topic: risk-v5 )",id:"meta-data--topic-risk-v5-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"message-futureriskdetailv5-id-4780",children:["Message: FutureRiskDetailV5 ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4780)"})]}),"\n",(0,r.jsx)(s.p,{children:"FutureRiskDetail records contain semi-static markup detail for FutureRiskSummary records."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"meta-data--topic-risk-v5-",children:"META DATA  (Topic: risk-v5 )"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"fkey"}),(0,r.jsx)(s.td,{children:"ExpiryKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accnt"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tradeDate"}),(0,r.jsx)(s.td,{children:"DateKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clientFirm"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"beta"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"beta (usually beta to SPX; see AccountConfig.betaSource)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"betaSource"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/BetaSource",children:"enum : BetaSource"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"binaryDays"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"Fractional days [0 - 5.0] prior to expiration after which hedgeDeltas become binary [-1.0, -0.5, 0, +0.5, +1.0] [SymbolControl.binaryDays]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ctrlUpdate"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{children:"last update dttm of SymbolControl record [SymbolControl.timestamp]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"futStatus"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/FutStatus",children:"enum : FutStatus"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"futVolume"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"trailing 30 day average daily stock volume"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeDeltaRule"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/HedgeDeltaRule",children:"enum : HedgeDeltaRule"})}),(0,r.jsx)(s.td,{children:"HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (sticky delta), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface and atm veSlope (sticky delta)) [AccountConfig.hedgeDelta]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"holdReason"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/HoldReason",children:"enum : HoldReason"})}),(0,r.jsx)(s.td,{children:"User supplied description (only informational) [SymbolControl.holdReason]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isYieldBased"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{children:"is the symbol a yield based future;can affect greeks and pricing (eg, eurodollars)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"marginType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/MarginType",children:"enum : MarginType"})}),(0,r.jsx)(s.td,{children:"margin slide type: NMS_Equity = +/- 15%, NMS_Index = -8%/+6%, NMS_Medium = +/-10%"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{children:"Symbol name/description"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"optStatus"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/OptStatus",children:"enum : OptStatus"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"optVolume"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"trailing 30 day average daily option volume"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"periodEndTime"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{children:"DTTM of the end of the current trading period"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pointCurrency"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/Currency",children:"enum : Currency"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pointValue"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"point value of this future"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"riskClass"}),(0,r.jsx)(s.td,{children:"string(8)"}),(0,r.jsx)(s.td,{children:"Symbol Risk Class Code (user supplied) [SymbolControl.riskClass]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"shortTermVol"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"estimated/implied short term underlier volatility"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"symbolType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,r.jsx)(s.td,{children:"SymbolType (Equity, ETF, ShortETF, ADR, CashIndex, FutureComplex)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theoModel"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{children:"SR assigned theo model tag (associated with user supplied theo surfaces) [AccountConfig.theoModel]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theoModel2"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{children:"SR assigned theo model#2 tag (associated with user supplied theo surfaces) [AccountConfig.theoModel2]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"underlierType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/UnderlierType",children:"enum : UnderlierType"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"underliersPerCn"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"underliers per contract of the futures associated with this symbol (if any) [default = 1]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"viewGroup1"}),(0,r.jsx)(s.td,{children:"string(12)"}),(0,r.jsx)(s.td,{children:"Account Group #1 (SR Assigned) used to organize account groups [AccountConfig.viewGroup1]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"viewGroup2"}),(0,r.jsx)(s.td,{children:"string(12)"}),(0,r.jsx)(s.td,{children:"Account Group #2 (SR Assigned) used to organize account groups [AccountConfig.viewGroup2]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"viewGroup3"}),(0,r.jsx)(s.td,{children:"string(12)"}),(0,r.jsx)(s.td,{children:"Account Group #3 (SR Assigned) used to organize account groups [AccountConfig.viewGroup3]"})]})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>l});var r=t(96540);const d={},i=r.createContext(d);function n(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
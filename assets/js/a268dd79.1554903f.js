"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[248],{61529:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var s=i(74848),d=i(28453);const t={title:"LiveSurfaceDetail"},n="Schema: LiveSurfaceDetail (ID: 1130)",c={id:"MessageSchemas/Schema/Topics/analytics/LiveSurfaceDetail",title:"LiveSurfaceDetail",description:"LiveSurfaceDetail (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit details.SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close).",source:"@site/docs/MessageSchemas/Schema/Topics/1000-analytics/LiveSurfaceDetail.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/LiveSurfaceDetail",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveSurfaceDetail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveSurfaceDetail"},sidebar:"messageSchemasSidebar",previous:{title:"LiveSurfaceCurve",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveSurfaceCurve"},next:{title:"LiveSurfaceFixedGrid",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveSurfaceFixedGrid"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"schema-livesurfacedetail-id-1130",children:["Schema: LiveSurfaceDetail ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 1130)"})]}),"\n",(0,s.jsxs)(r.p,{children:["LiveSurfaceDetail (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit details.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"1000-analytics"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"ekey"}),(0,s.jsx)(r.td,{children:"ExpiryKey"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"11"}),(0,s.jsx)(r.td,{children:"surfaceType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SurfaceCurveType",children:"enum : SurfaceCurveType"})}),(0,s.jsx)(r.td,{})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"100"}),(0,s.jsx)(r.td,{children:"ticker"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{children:"underlying stock key that this option expiration attaches to"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"103"}),(0,s.jsx)(r.td,{children:"fkey"}),(0,s.jsx)(r.td,{children:"ExpiryKey"}),(0,s.jsx)(r.td,{children:"underlying future key (if any)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"106"}),(0,s.jsx)(r.td,{children:"uPrcDriverKey"}),(0,s.jsx)(r.td,{children:"ExpiryKey"}),(0,s.jsx)(r.td,{children:"underlier driver key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"109"}),(0,s.jsx)(r.td,{children:"uPrcDriverType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(r.td,{children:"underlier driver key type (stock or future)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"112"}),(0,s.jsx)(r.td,{children:"ddiv"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"(expected) cumulative discrete dividend $ amounts prior to expiration"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"115"}),(0,s.jsx)(r.td,{children:"ddivPv"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"(expected) cumulative npv of discrete dividend $ amounts prior to expiration (SR global rate curve)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"118"}),(0,s.jsx)(r.td,{children:"ddivSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/DDivSource",children:"enum : DDivSource"})}),(0,s.jsx)(r.td,{children:"Forecast if any of the dividends prior to expiry are forecast rather than announced"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"121"}),(0,s.jsx)(r.td,{children:"symbolRatio"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"underlier price ratio (usually 1.0 or a multi-hedge option price ratio; if one exists)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"124"}),(0,s.jsx)(r.td,{children:"exType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,s.jsx)(r.td,{children:"exercise type (American or European)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"127"}),(0,s.jsx)(r.td,{children:"modelType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,s.jsx)(r.td,{children:"option pricing model used for price calcs (Normal, LogNormal, etc.)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"130"}),(0,s.jsx)(r.td,{children:"priceType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CalcPriceType",children:"enum : CalcPriceType"})}),(0,s.jsx)(r.td,{children:"Equity has independent sdiv and rate, Future has sdiv = rate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"133"}),(0,s.jsx)(r.td,{children:"earnCnt"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"number of qualifying earnings events prior to expiration [can be fractional] (from StockEarningsCalendar)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"136"}),(0,s.jsx)(r.td,{children:"earnCntAdj"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"number of qualifying earnings events prior to expiration [adjusted] (from StockEarningsCalendar + LiveSurfaceTerm)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"139"}),(0,s.jsx)(r.td,{children:"moneynessType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MoneynessType",children:"enum : MoneynessType"})}),(0,s.jsx)(r.td,{children:"moneyness (xAxis) convention"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"142"}),(0,s.jsx)(r.td,{children:"priceQuoteType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PriceQuoteType",children:"enum : PriceQuoteType"})}),(0,s.jsx)(r.td,{children:"Price or Vol"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"145"}),(0,s.jsx)(r.td,{children:"atmVolHist"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"historical realized volatility (includes eMoveHist x earnCntAdj adjustment).  Note that this is the default atmVol if no implied markets existed previous day."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"148"}),(0,s.jsx)(r.td,{children:"atmCenHist"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"censored (earnings events removed) historical realized volatility.  Trailing periods is 2x forward time to expiration.  From HistoricalVolatility(windowType=hlCen).mv_nnn"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"149"}),(0,s.jsx)(r.td,{children:"uBetaHist"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"beta (this underlier vs basis underlier; T + 1 week)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"151"}),(0,s.jsx)(r.td,{children:"eMove"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"implied earnings move (from LiveSurfaceTerm)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"154"}),(0,s.jsx)(r.td,{children:"eMoveHist"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"historical earnings move (avg of trailing 8 moves). From StockEarningsCalendar.eMoveHist"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"157"}),(0,s.jsx)(r.td,{children:"minXAxis"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"minimum xAxis value; left most point with a valid supporting strike"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"160"}),(0,s.jsx)(r.td,{children:"maxXAxis"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"maximum xAxis value; right most point with a valid supporting strike"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"163"}),(0,s.jsx)(r.td,{children:"atmPhi"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"surface phi @ xAxis = 0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"166"}),(0,s.jsx)(r.td,{children:"atmRho"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"surface rho @ xAxis = 0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"169"}),(0,s.jsx)(r.td,{children:"atmVega"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"surface vega @ xAxis = 0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"172"}),(0,s.jsx)(r.td,{children:"uPrcRatio"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"uPrcAdj = uPrc * uPrcRatioFit"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"175"}),(0,s.jsx)(r.td,{children:"pwidth"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"minimum mkt premium width"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"178"}),(0,s.jsx)(r.td,{children:"vwidth"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"minimum mkt volatility width"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"181"}),(0,s.jsx)(r.td,{children:"cCnt"}),(0,s.jsx)(r.td,{children:"ushort"}),(0,s.jsx)(r.td,{children:"num call strikes in base fit"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"184"}),(0,s.jsx)(r.td,{children:"pCnt"}),(0,s.jsx)(r.td,{children:"ushort"}),(0,s.jsx)(r.td,{children:"num put strikes in base fit"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"187"}),(0,s.jsx)(r.td,{children:"hasBracketMin"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"190"}),(0,s.jsx)(r.td,{children:"surfaceSkewType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SurfaceSkewType",children:"enum : SurfaceSkewType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"193"}),(0,s.jsx)(r.td,{children:"cBidMiss"}),(0,s.jsx)(r.td,{children:"byte"}),(0,s.jsx)(r.td,{children:"number of call bid violations (surface outside the market)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"196"}),(0,s.jsx)(r.td,{children:"cAskMiss"}),(0,s.jsx)(r.td,{children:"byte"}),(0,s.jsx)(r.td,{children:"number of call ask violations (surface outside the market)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"199"}),(0,s.jsx)(r.td,{children:"pBidMiss"}),(0,s.jsx)(r.td,{children:"byte"}),(0,s.jsx)(r.td,{children:"number of put bid violations"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"202"}),(0,s.jsx)(r.td,{children:"pAskMiss"}),(0,s.jsx)(r.td,{children:"byte"}),(0,s.jsx)(r.td,{children:"number of put ask violations"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"205"}),(0,s.jsx)(r.td,{children:"fitScoreT0"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"208"}),(0,s.jsx)(r.td,{children:"fitScoreT1"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"211"}),(0,s.jsx)(r.td,{children:"cumFitScoreT0"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"214"}),(0,s.jsx)(r.td,{children:"cumFitScoreT1"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"217"}),(0,s.jsx)(r.td,{children:"fitCounter"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of fit/count passes (current trade date / market open)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"220"}),(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>c});var s=i(96540);const d={},t=s.createContext(d);function n(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);
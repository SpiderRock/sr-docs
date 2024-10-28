"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[59793],{16634:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var t=i(74848),s=i(28453);const n={sidebar_position:1,title:"SRMLinkAnalytics"},a=void 0,c={id:"MessageSchemas/Schema/MLink Tokens/SRMLinkAnalytics",title:"SRMLinkAnalytics",description:"| # | Message Name | Description |",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/MLink Tokens/SRMLinkAnalytics.md",sourceDirName:"MessageSchemas/Schema/MLink Tokens",slug:"/MessageSchemas/Schema/MLink Tokens/SRMLinkAnalytics",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/SRMLinkAnalytics",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SRMLinkAnalytics"},sidebar:"messageSchemasSidebar",previous:{title:"SRConnect",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/SRConnect"},next:{title:"SpreadDefinition",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/SpreadDefinition"}},d={},o=[];function l(e){const r={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Message Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4350"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/product-definition/IndustryDefinition",children:"IndustryDefinition"})}),(0,t.jsx)(r.td,{children:"This table contains the definitions of ind (00), sub (0000), grp (000000), and nbr (00000000) numeric codes are used in the SpiderRock platform."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1130"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/analytics/LiveBasisCurve",children:"LiveBasisCurve"})}),(0,t.jsx)(r.td,{children:"var = vol^2 = skewMult * skewFN[ xMult * (xAxis - xShift) ]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1134"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/analytics/LiveExpiryAtm",children:"LiveExpiryAtm"})}),(0,t.jsxs)(r.td,{children:["LiveExpiryAtm (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1132"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/analytics/LiveExpirySurface",children:"LiveExpirySurface"})}),(0,t.jsxs)(r.td,{children:["LiveExpirySurface (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1025"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/analytics/LiveIVarSwapFixedTerm",children:"LiveIVarSwapFixedTerm"})}),(0,t.jsx)(r.td,{children:"LiveVarSwapFixedTerm records contain a live implied variance term record at standardized days-to-expiration."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1030"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/analytics/LiveSurfaceAtm",children:"LiveSurfaceAtm"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1055"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/analytics/LiveSurfacePerf",children:"LiveSurfacePerf"})}),(0,t.jsxs)(r.td,{children:["LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price 'resets' each day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"LiveSurfacePerf records are published to the SpiderRock elastic cluster at the end of the day for each option expiration.  These records are designed to allow fixed strike EOD to EOD attributed PnL to be easily calculated.  These records can also be used to measure atm volatility dynamics."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1090"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/analytics/OptionLookback",children:"OptionLookback"})}),(0,t.jsx)(r.td,{children:"OptionLookback records are published by the SurfaceModelServer and represent a stable frame lookback window on the option market (typically about 10 minutes)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3235"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/market-statistics/OptionOpenVega",children:"OptionOpenVega"})}),(0,t.jsx)(r.td,{children:"This table contains cumulative open interest, day trading volume in terms of both contracts and vega."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2820"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/market-data-options/OptionPrintSetSummary",children:"OptionPrintSetSummary"})}),(0,t.jsx)(r.td,{children:"OptionPrintSetSummary records are created at the end of each trading period and contain a summary of the activity for the period; Summary of OptionPrintSet records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5060"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/srse-calculators/SpanRiskCalculator",children:"SpanRiskCalculator"})}),(0,t.jsx)(r.td,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1730"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/client-borrow/StockBorrowRate",children:"StockBorrowRate"})}),(0,t.jsxs)(r.td,{children:["This data is sourced from various clearing firms and typically represents their public borrow rates.  Data is typically loaded once at the start of each trading day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"StockBorrowRate records are published to the SpiderRock elastic cluster at the end of each trading period."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3250"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/market-statistics/StockDetail",children:"StockDetail"})}),(0,t.jsx)(r.td,{children:"This table contains a ticker level summary of some earnings related information.  This information is also available in other records but is collected here for convenience."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3175"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/market-marks/SyntheticExpiryCloseMark",children:"SyntheticExpiryCloseMark"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3180"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/market-marks/SyntheticExpiryOpenMark",children:"SyntheticExpiryOpenMark"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5065"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/srse-calculators/VolTimeCalculator",children:"VolTimeCalculator"})}),(0,t.jsx)(r.td,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>c});var t=i(96540);const s={},n=t.createContext(s);function a(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
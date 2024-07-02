"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[51972],{69709:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>n,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=i(74848),s=i(28453);const a={sidebar_position:1,title:"1000-analytics"},d=void 0,c={id:"MessageSchemas/Schema/Topics/analytics/analytics",title:"1000-analytics",description:"| # | Message Name | Description |",source:"@site/docs/MessageSchemas/Schema/Topics/1000-analytics/1000-analytics.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"1000-analytics"},sidebar:"messageSchemasSidebar",previous:{title:"Topics",permalink:"/docs/MessageSchemas/Schema/Topics/"},next:{title:"LiveAtmVol",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveAtmVol"}},n={},o=[];function l(e){const r={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Message Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1010"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveAtmVol",children:"LiveAtmVol"})}),(0,t.jsx)(r.td,{children:"LiveAtmVol records are computed and publish continuously during trading hours"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1135"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveExpirySurface",children:"LiveExpirySurface"})}),(0,t.jsxs)(r.td,{children:["LiveExpirySurface (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1025"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveIVarSwapFixedTerm",children:"LiveIVarSwapFixedTerm"})}),(0,t.jsx)(r.td,{children:"LiveVarSwapFixedTerm records contain a live implied variance term record at standardized days-to-expiration."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1015"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveImpliedQuote",children:"LiveImpliedQuote"})}),(0,t.jsxs)(r.td,{children:["CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1020"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveImpliedQuoteAdj",children:"LiveImpliedQuoteAdj"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1125"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveRevConQuote",children:"LiveRevConQuote"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1030"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveSurfaceAtm",children:"LiveSurfaceAtm"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1035"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveSurfaceCurve",children:"LiveSurfaceCurve"})}),(0,t.jsxs)(r.td,{children:["LiveSurfaceCurve (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1130"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveSurfaceDetail",children:"LiveSurfaceDetail"})}),(0,t.jsxs)(r.td,{children:["LiveSurfaceDetail (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit details.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1040"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveSurfaceFixedGrid",children:"LiveSurfaceFixedGrid"})}),(0,t.jsxs)(r.td,{children:["This table contains a live grided (interpolated) censored implied volatility surface.  Each record contains standarized live and prior period implied volatilities at standarized skew points for a standardized days-to-expiration value.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"LiveSurfaceGrid records are published to the SpiderRock elastic cluster nightly."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1045"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveSurfaceFixedTerm",children:"LiveSurfaceFixedTerm"})}),(0,t.jsxs)(r.td,{children:["LiveSurfaceFixedTerm (surfaceType = 'Live') records contain a live implied volatility term record at standardized days-to-expiration.  SurfaceType = 'PriorDay' records contain the final record from the prior trading day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"These records include implied and histrical earnings moves, implied earnings date adjustments, and interpolated/gridded atm, sdiv, and quote width values.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"LiveSurfaceTerm records are published to the SpiderRock elastic cluster every 10 minutes for all equity and index underliers with options."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1055"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./LiveSurfacePerf",children:"LiveSurfacePerf"})}),(0,t.jsxs)(r.td,{children:["LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price 'resets' each day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"LiveSurfacePerf records are published to the SpiderRock elastic cluster at the end of the day for each option expiration.  These records are designed to allow fixed strike EOD to EOD attributed PnL to be easily calculated.  These records can also be used to measure atm volatility dynamics."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1090"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./OptionLookback",children:"OptionLookback"})}),(0,t.jsx)(r.td,{children:"OptionLookback records are published by the SurfaceModelServer and represent a stable frame lookback window on the option market (typically about 10 minutes)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1095"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./OptionRiskFactor",children:"OptionRiskFactor"})}),(0,t.jsx)(r.td,{children:"This table contains the up/dn underlier price slides used in OCC risk calculations.  Note that these values are computed by SpiderRock using similar methods but may not exactly match OCC values."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1110"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./SkewBasisCurveV4",children:"SkewBasisCurveV4"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1105"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"./TheoSurfacePerf",children:"TheoSurfacePerf"})}),(0,t.jsxs)(r.td,{children:["TheoSurfacePerf records are published throughout he day for each active client theoretical model in the SpiderRock system.  They are suitable for tracking performance of a theoretical model surface whether or not it is being traded.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"TheoSurfacePerf records are published to the SpiderRock elastic cluster at the end of each day."]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>c});var t=i(96540);const s={},a=t.createContext(s);function d(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);
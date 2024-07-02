"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49204],{39920:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var t=i(74848),s=i(28453);const d={sidebar_position:1,title:"SRAnalytics"},n="SRSE Product: SRAnalytics",a={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics",title:"SRAnalytics",description:"| # | Message Name | Description |",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics.md",sourceDirName:"MessageSchemas/Schema/SRSE Products",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SRAnalytics"},sidebar:"messageSchemasSidebar",previous:{title:"SRSE Products",permalink:"/docs/MessageSchemas/Schema/SRSE Products/"},next:{title:"SRAuction",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAuction"}},c={},o=[];function l(e){const r={a:"a",h1:"h1",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"srse-product-sranalytics",children:"SRSE Product: SRAnalytics"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Message Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4335"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./CCodeDefinition",children:"CCodeDefinition"})}),(0,t.jsxs)(r.td,{children:["Commodity code (product code) definitions for all futures.  Also maps future ccodes to SpiderRock tickers. Information is sourced from listing exchange product definitions.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"This table also contains definitions for exchange and user-defined spreads including spreads used as option underliers. SpiderRock typically uses a compact form of the exchange (spread) product ID as the ccode for these products if there is no natural (human-readable) exchange spread ticker issued for the spread.  Note that the full spread definition can be found in the ProductDefinition and human-readable version in the description field below.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note that SpiderRock tickers below are synthetic and are created for organizational purposes only.  SpiderRock synthetic tickers typically begin with a '@' character."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3120"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./FutureCloseMark",children:"FutureCloseMark"})}),(0,t.jsxs)(r.td,{children:["FutureCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright futures.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"FutureCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3125"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./FutureOpenMark",children:"FutureOpenMark"})}),(0,t.jsx)(r.td,{children:"FutureOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2605"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./FuturePrintMarkup",children:"FuturePrintMarkup"})}),(0,t.jsx)(r.td,{children:"FuturePrintMarkup records are created for all future prints"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4255"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./FuturePrintProbability",children:"FuturePrintProbability"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2610"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./FuturePrintSet",children:"FuturePrintSet"})}),(0,t.jsx)(r.td,{children:"FuturePrintSet records are created for all future prints (outrights and spreads) and published to the SpiderRock elastic cluster when markup detail is complete (F+10M)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4260"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./FutureQuoteProbability",children:"FutureQuoteProbability"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3590"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./GlobalDividends",children:"GlobalDividends"})}),(0,t.jsxs)(r.td,{children:["GlobalDividend records contain projected future discrete dividend payment dates and amounts for dividend paying equities.  These records are the dividend values that are incorporated into option pricing calculations.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note: Missing/empty DateAmt strings are interpreted as non-dividend paying"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3595"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./GlobalRates",children:"GlobalRates"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3225"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./HistoricalVolatilities",children:"HistoricalVolatilities"})}),(0,t.jsxs)(r.td,{children:["Values in this table are computed daily and are calculated from end-of-day marks from the previous period.  Official exchange closing values are used where possible.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"HistoricalVolatility records are published to the SpiderRock elastic cluster nightly."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4350"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./IndustryDefinition",children:"IndustryDefinition"})}),(0,t.jsx)(r.td,{children:"This table contains the definitions of ind (00), sub (0000), grp (000000), and nbr (00000000) numeric codes are used in the SpiderRock platform."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1010"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveAtmVol",children:"LiveAtmVol"})}),(0,t.jsx)(r.td,{children:"LiveAtmVol records are computed and publish continuously during trading hours"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1135"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveExpirySurface",children:"LiveExpirySurface"})}),(0,t.jsxs)(r.td,{children:["LiveExpirySurface (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1025"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveIVarSwapFixedTerm",children:"LiveIVarSwapFixedTerm"})}),(0,t.jsx)(r.td,{children:"LiveVarSwapFixedTerm records contain a live implied variance term record at standardized days-to-expiration."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1015"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveImpliedQuote",children:"LiveImpliedQuote"})}),(0,t.jsxs)(r.td,{children:["CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1020"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveImpliedQuoteAdj",children:"LiveImpliedQuoteAdj"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1125"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveRevConQuote",children:"LiveRevConQuote"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1030"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveSurfaceAtm",children:"LiveSurfaceAtm"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1035"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveSurfaceCurve",children:"LiveSurfaceCurve"})}),(0,t.jsxs)(r.td,{children:["LiveSurfaceCurve (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1130"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveSurfaceDetail",children:"LiveSurfaceDetail"})}),(0,t.jsxs)(r.td,{children:["LiveSurfaceDetail (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit details.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1040"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveSurfaceFixedGrid",children:"LiveSurfaceFixedGrid"})}),(0,t.jsxs)(r.td,{children:["This table contains a live grided (interpolated) censored implied volatility surface.  Each record contains standarized live and prior period implied volatilities at standarized skew points for a standardized days-to-expiration value.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"LiveSurfaceGrid records are published to the SpiderRock elastic cluster nightly."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1045"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveSurfaceFixedTerm",children:"LiveSurfaceFixedTerm"})}),(0,t.jsxs)(r.td,{children:["LiveSurfaceFixedTerm (surfaceType = 'Live') records contain a live implied volatility term record at standardized days-to-expiration.  SurfaceType = 'PriorDay' records contain the final record from the prior trading day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"These records include implied and histrical earnings moves, implied earnings date adjustments, and interpolated/gridded atm, sdiv, and quote width values.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"LiveSurfaceTerm records are published to the SpiderRock elastic cluster every 10 minutes for all equity and index underliers with options."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1055"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./LiveSurfacePerf",children:"LiveSurfacePerf"})}),(0,t.jsxs)(r.td,{children:["LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price 'resets' each day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"LiveSurfacePerf records are published to the SpiderRock elastic cluster at the end of the day for each option expiration.  These records are designed to allow fixed strike EOD to EOD attributed PnL to be easily calculated.  These records can also be used to measure atm volatility dynamics."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4355"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptExpiryDefinition",children:"OptExpiryDefinition"})}),(0,t.jsxs)(r.td,{children:["This table maps option root/expiration combinations to their deliverable future.  Mappings are sourced fromm listing exchange product definitions.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"BaseObj",":Root"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5030"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionCalculator",children:"OptionCalculator"})}),(0,t.jsx)(r.td,{children:"This table allows custom option pricing based on either user or SR supplied input values."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3140"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionCloseMark",children:"OptionCloseMark"})}),(0,t.jsxs)(r.td,{children:["OptionCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"OptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5035"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionImpliedPair",children:"OptionImpliedPair"})}),(0,t.jsx)(r.td,{children:"This table contains current live NBBO prices and implied volatilites as well as greeks and SpiderRock surface volatilities/prices for all call/put pairs in the market."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5045"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionImpliedVol",children:"OptionImpliedVol"})}),(0,t.jsx)(r.td,{children:"This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1090"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionLookback",children:"OptionLookback"})}),(0,t.jsx)(r.td,{children:"OptionLookback records are published by the SurfaceModelServer and represent a stable frame lookback window on the option market (typically about 10 minutes)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3145"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionOpenMark",children:"OptionOpenMark"})}),(0,t.jsx)(r.td,{children:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3235"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionOpenVega",children:"OptionOpenVega"})}),(0,t.jsx)(r.td,{children:"This table contains cumulative open interest, day trading volume in terms of both contracts and vega."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4265"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionPrintProbability",children:"OptionPrintProbability"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2815"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionPrintSet",children:"OptionPrintSet"})}),(0,t.jsx)(r.td,{children:"OptionPrintSet records contain every option print along with quote, surface, and SR probability details at print time.  These records also contain T+1M and T+10M forward mark details.   These records are created for every print at the time of print and are published to the SpiderRock elastic cluster 10 minutes later when T + 10M forward marks are available."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2820"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionPrintSetSummary",children:"OptionPrintSetSummary"})}),(0,t.jsx)(r.td,{children:"OptionPrintSetSummary records are created at the end of each trading period and contain a summary of the activity for the period; Summary of OptionPrintSet records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4270"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionQuoteProbability",children:"OptionQuoteProbability"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1095"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./OptionRiskFactor",children:"OptionRiskFactor"})}),(0,t.jsx)(r.td,{children:"This table contains the up/dn underlier price slides used in OCC risk calculations.  Note that these values are computed by SpiderRock using similar methods but may not exactly match OCC values."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4360"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./ProductDefinitionV2",children:"ProductDefinitionV2"})}),(0,t.jsx)(r.td,{children:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4365"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./RootDefinition",children:"RootDefinition"})}),(0,t.jsx)(r.td,{children:"RootDefinition records are sourced from the listing exchange for future options and from OCC for US equity options.  Records are updated as SpiderRock receives changes."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1110"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./SkewBasisCurveV4",children:"SkewBasisCurveV4"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5060"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./SpanRiskCalculator",children:"SpanRiskCalculator"})}),(0,t.jsx)(r.td,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3155"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./SpreadCloseMark",children:"SpreadCloseMark"})}),(0,t.jsxs)(r.td,{children:["SpreadCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all exchange spreads",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SpreadCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"BaseObj",":Spread"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3160"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./SpreadOpenMark",children:"SpreadOpenMark"})}),(0,t.jsxs)(r.td,{children:["SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"BaseObj",":Spread"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3240"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockBeta",children:"StockBeta"})}),(0,t.jsx)(r.td,{children:"Beta values are computed weekly for a few different ETFs."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3245"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockBetaExt",children:"StockBetaExt"})}),(0,t.jsx)(r.td,{children:"Beta values are computed nightly for a few different indexes and industries."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1730"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockBorrowRate",children:"StockBorrowRate"})}),(0,t.jsxs)(r.td,{children:["This data is sourced from various clearing firms and typically represents their public borrow rates.  Data is typically loaded once at the start of each trading day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"StockBorrowRate records are published to the SpiderRock elastic cluster at the end of each trading period."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3165"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockCloseMark",children:"StockCloseMark"})}),(0,t.jsxs)(r.td,{children:["StockCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"StockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3250"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockDetail",children:"StockDetail"})}),(0,t.jsx)(r.td,{children:"This table contains a ticker level summary of some earnings related information.  This information is also available in other records but is collected here for convenience."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3620"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockEarningsCalendar",children:"StockEarningsCalendar"})}),(0,t.jsx)(r.td,{children:"StockEarningsCalendar records contain a historical (prior 12) earnings dates and future (next 12) projected dates."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3170"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockOpenMark",children:"StockOpenMark"})}),(0,t.jsx)(r.td,{children:"StockOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3055"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockPrintMarkup",children:"StockPrintMarkup"})}),(0,t.jsx)(r.td,{children:"StockPrintMarkup records are created/published for all stock prints"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4275"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockPrintProbability",children:"StockPrintProbability"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3060"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockPrintSet",children:"StockPrintSet"})}),(0,t.jsx)(r.td,{children:"StockPrintSet records are created for each print and published to the SpiderRock elastic cluster 10 minutes later, when T+10M markup detail is available."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4280"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./StockQuoteProbability",children:"StockQuoteProbability"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3175"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./SyntheticExpiryCloseMark",children:"SyntheticExpiryCloseMark"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3180"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./SyntheticExpiryOpenMark",children:"SyntheticExpiryOpenMark"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3255"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./TickerAnalytics",children:"TickerAnalytics"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4375"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./TickerDefinition",children:"TickerDefinition"})}),(0,t.jsx)(r.td,{children:"TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4380"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./TickerDefinitionExt",children:"TickerDefinitionExt"})}),(0,t.jsx)(r.td,{children:"TickerDefinitionExt (external) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5065"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Topics/./VolTimeCalculator",children:"VolTimeCalculator"})}),(0,t.jsx)(r.td,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>a});var t=i(96540);const s={},d=t.createContext(s);function n(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["68052"],{48769:function(e,r,i){i.r(r),i.d(r,{default:()=>h,frontMatter:()=>n,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/SRAnalytics","title":"SRAnalytics","description":"| # | Message Name | Description |","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/SRAnalytics.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"SRAnalytics"},"sidebar":"messageSchemasSidebar","previous":{"title":"SRSE Products","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/"},"next":{"title":"CCodeDefinition","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/CCodeDefinition/"}}'),d=i("52676"),s=i("91503");let n={sidebar_position:1,title:"SRAnalytics"},a="SRSE Product: SRAnalytics",c={},l=[];function o(e){let r={a:"a",h1:"h1",header:"header",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"srse-product-sranalytics",children:"SRSE Product: SRAnalytics"})}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"#"}),(0,d.jsx)(r.th,{children:"Message Name"}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4335"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./CCodeDefinition",children:"CCodeDefinition"})}),(0,d.jsx)(r.td,{children:"Commodity code (product code) definitions for all futures.  Also maps future ccodes to SpiderRock tickers. Information is sourced from listing exchange product definitions."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3120"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./FutureCloseMark",children:"FutureCloseMark"})}),(0,d.jsx)(r.td,{children:"FutureCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3125"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./FutureOpenMark",children:"FutureOpenMark"})}),(0,d.jsx)(r.td,{children:"FutureOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"2605"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./FuturePrintMarkup",children:"FuturePrintMarkup"})}),(0,d.jsx)(r.td,{children:"FuturePrintMarkup records are created for all future prints"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4255"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./FuturePrintProbability",children:"FuturePrintProbability"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"2610"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./FuturePrintSet",children:"FuturePrintSet"})}),(0,d.jsx)(r.td,{children:"FuturePrintSet records are created for all future prints (outrights and spreads) and published to the SpiderRock elastic cluster when markup detail is complete (F+10M)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4260"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./FutureQuoteProbability",children:"FutureQuoteProbability"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3590"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./GlobalDividends",children:"GlobalDividends"})}),(0,d.jsx)(r.td,{children:"GlobalDividend records contain projected future discrete dividend payment dates and amounts for dividend paying equities.  These records are the dividend values that are incorporated into option pricing calculations."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3595"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./GlobalRates",children:"GlobalRates"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3225"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./HistoricalVolatilities",children:"HistoricalVolatilities"})}),(0,d.jsx)(r.td,{children:"Values in this table are computed daily and are calculated from end-of-day marks from the previous period.  Official exchange closing values are used where possible."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4350"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./IndustryDefinition",children:"IndustryDefinition"})}),(0,d.jsx)(r.td,{children:"This table contains the definitions of ind (00), sub (0000), grp (000000), and nbr (00000000) numeric codes are used in the SpiderRock platform."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1010"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveAtmVol",children:"LiveAtmVol"})}),(0,d.jsx)(r.td,{children:"LiveAtmVol records are computed and publish continuously during trading hours"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1131"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveBasisCurve",children:"LiveBasisCurve"})}),(0,d.jsx)(r.td,{children:"var = vol^2 = skewMult * skewFN[ xMult * (xAxis - xShift) ]"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1134"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveExpiryAtm",children:"LiveExpiryAtm"})}),(0,d.jsx)(r.td,{children:"LiveExpiryAtm (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1132"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveExpirySurface",children:"LiveExpirySurface"})}),(0,d.jsx)(r.td,{children:"LiveExpirySurface (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1025"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveIVarSwapFixedTerm",children:"LiveIVarSwapFixedTerm"})}),(0,d.jsx)(r.td,{children:"LiveVarSwapFixedTerm records contain a live implied variance term record at standardized days-to-expiration."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1015"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveImpliedQuote",children:"LiveImpliedQuote"})}),(0,d.jsx)(r.td,{children:"CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1020"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveImpliedQuoteAdj",children:"LiveImpliedQuoteAdj"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1125"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveRevConQuote",children:"LiveRevConQuote"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1030"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveSurfaceAtm",children:"LiveSurfaceAtm"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1035"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveSurfaceCurve",children:"LiveSurfaceCurve"})}),(0,d.jsx)(r.td,{children:"LiveSurfaceCurve (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1040"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveSurfaceFixedGrid",children:"LiveSurfaceFixedGrid"})}),(0,d.jsx)(r.td,{children:"This table contains a live grided (interpolated) censored implied volatility surface.  Each record contains standarized live and prior period implied volatilities at standarized skew points for a standardized days-to-expiration value."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1045"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveSurfaceFixedTerm",children:"LiveSurfaceFixedTerm"})}),(0,d.jsx)(r.td,{children:"LiveSurfaceFixedTerm (surfaceType = 'Live') records contain a live implied volatility term record at standardized days-to-expiration.  SurfaceType = 'PriorDay' records contain the final record from the prior trading day."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1055"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./LiveSurfacePerf",children:"LiveSurfacePerf"})}),(0,d.jsx)(r.td,{children:"LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price 'resets' each day."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4355"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptExpiryDefinition",children:"OptExpiryDefinition"})}),(0,d.jsx)(r.td,{children:"This table maps option root/expiration combinations to their deliverable future.  Mappings are sourced fromm listing exchange product definitions."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5030"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionCalculator",children:"OptionCalculator"})}),(0,d.jsx)(r.td,{children:"This table allows custom option pricing based on either user or SR supplied input values."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3140"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionCloseMark",children:"OptionCloseMark"})}),(0,d.jsx)(r.td,{children:"OptionCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5035"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionImpliedPair",children:"OptionImpliedPair"})}),(0,d.jsx)(r.td,{children:"This table contains current live NBBO prices and implied volatilites as well as greeks and SpiderRock surface volatilities/prices for all call/put pairs in the market."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5045"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionImpliedVol",children:"OptionImpliedVol"})}),(0,d.jsx)(r.td,{children:"This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5046"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionImpliedVolV4",children:"OptionImpliedVolV4"})}),(0,d.jsx)(r.td,{children:"This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1090"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionLookback",children:"OptionLookback"})}),(0,d.jsx)(r.td,{children:"OptionLookback records are published by the SurfaceModelServer and represent a stable frame lookback window on the option market (typically about 10 minutes)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3145"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionOpenMark",children:"OptionOpenMark"})}),(0,d.jsx)(r.td,{children:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3235"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionOpenVega",children:"OptionOpenVega"})}),(0,d.jsx)(r.td,{children:"This table contains cumulative open interest, day trading volume in terms of both contracts and vega."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4265"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionPrintProbability",children:"OptionPrintProbability"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"2815"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionPrintSet",children:"OptionPrintSet"})}),(0,d.jsx)(r.td,{children:"OptionPrintSet records contain every option print along with quote, surface, and SR probability details at print time.  These records also contain T+1M and T+10M forward mark details.   These records are created for every print at the time of print and are published to the SpiderRock elastic cluster 10 minutes later when T + 10M forward marks are available."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"2820"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionPrintSetSummary",children:"OptionPrintSetSummary"})}),(0,d.jsx)(r.td,{children:"OptionPrintSetSummary records are created at the end of each trading period and contain a summary of the activity for the period; Summary of OptionPrintSet records"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4270"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionQuoteProbability",children:"OptionQuoteProbability"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1095"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./OptionRiskFactor",children:"OptionRiskFactor"})}),(0,d.jsx)(r.td,{children:"This table contains the up/dn underlier price slides used in OCC risk calculations.  Note that these values are computed by SpiderRock using similar methods but may not exactly match OCC values."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4360"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./ProductDefinitionV2",children:"ProductDefinitionV2"})}),(0,d.jsx)(r.td,{children:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4365"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./RootDefinition",children:"RootDefinition"})}),(0,d.jsx)(r.td,{children:"RootDefinition records are sourced from the listing exchange for future options and from OCC for US equity options.  Records are updated as SpiderRock receives changes."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5060"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./SpanRiskCalculator",children:"SpanRiskCalculator"})}),(0,d.jsx)(r.td,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3155"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./SpreadCloseMark",children:"SpreadCloseMark"})}),(0,d.jsx)(r.td,{children:"SpreadCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all exchange spreads"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3160"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./SpreadOpenMark",children:"SpreadOpenMark"})}),(0,d.jsx)(r.td,{children:"SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3240"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockBeta",children:"StockBeta"})}),(0,d.jsx)(r.td,{children:"Beta values are computed weekly for a few different ETFs."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3245"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockBetaExt",children:"StockBetaExt"})}),(0,d.jsx)(r.td,{children:"Beta values are computed nightly for a few different indexes and industries."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1730"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockBorrowRate",children:"StockBorrowRate"})}),(0,d.jsx)(r.td,{children:"This data is sourced from various clearing firms and typically represents their public borrow rates.  Data is typically loaded once at the start of each trading day."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3165"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockCloseMark",children:"StockCloseMark"})}),(0,d.jsx)(r.td,{children:"StockCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3250"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockDetail",children:"StockDetail"})}),(0,d.jsx)(r.td,{children:"This table contains a ticker level summary of some earnings related information.  This information is also available in other records but is collected here for convenience."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3620"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockEarningsCalendar",children:"StockEarningsCalendar"})}),(0,d.jsx)(r.td,{children:"StockEarningsCalendar records contain a historical (prior 12) earnings dates and future (next 12) projected dates."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3170"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockOpenMark",children:"StockOpenMark"})}),(0,d.jsx)(r.td,{children:"StockOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3055"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockPrintMarkup",children:"StockPrintMarkup"})}),(0,d.jsx)(r.td,{children:"StockPrintMarkup records are created/published for all stock prints"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4275"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockPrintProbability",children:"StockPrintProbability"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3060"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockPrintSet",children:"StockPrintSet"})}),(0,d.jsx)(r.td,{children:"StockPrintSet records are created for each print and published to the SpiderRock elastic cluster 10 minutes later, when T+10M markup detail is available."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4280"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./StockQuoteProbability",children:"StockQuoteProbability"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3175"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./SyntheticExpiryCloseMark",children:"SyntheticExpiryCloseMark"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3180"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./SyntheticExpiryOpenMark",children:"SyntheticExpiryOpenMark"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3255"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./TickerAnalytics",children:"TickerAnalytics"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4375"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./TickerDefinition",children:"TickerDefinition"})}),(0,d.jsx)(r.td,{children:"TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4380"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./TickerDefinitionExt",children:"TickerDefinitionExt"})}),(0,d.jsx)(r.td,{children:"TickerDefinitionExt (external) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5065"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"./VolTimeCalculator",children:"VolTimeCalculator"})}),(0,d.jsx)(r.td,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},91503:function(e,r,i){i.d(r,{Z:function(){return a},a:function(){return n}});var t=i(75271);let d={},s=t.createContext(d);function n(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
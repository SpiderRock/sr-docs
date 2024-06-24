"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70215],{62326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var i=r(74848),s=r(28453);const n={sidebar_position:1},d=void 0,c={id:"Schema/SRSE Products/SRLive",title:"SRLive",description:"| # | Message Name | Description |",source:"@site/docs/Schema/SRSE Products/SRLive.md",sourceDirName:"Schema/SRSE Products",slug:"/Schema/SRSE Products/SRLive",permalink:"/docs/Schema/SRSE Products/SRLive",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"schemaSidebar",previous:{title:"SRControl",permalink:"/docs/Schema/SRSE Products/SRControl"},next:{title:"SRRisk",permalink:"/docs/Schema/SRSE Products/SRRisk"}},a={},o=[];function l(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"#"}),(0,i.jsx)(t.th,{children:"Message Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4335"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-definition/CCodeDefinition",children:"CCodeDefinition"})}),(0,i.jsxs)(t.td,{children:["Commodity code (product code) definitions for all futures.  Also maps future ccodes to SpiderRock tickers. Information is sourced from listing exchange product definitions.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"This table also contains definitions for exchange and user-defined spreads including spreads used as option underliers. SpiderRock typically uses a compact form of the exchange (spread) product ID as the ccode for these products if there is no natural (human-readable) exchange spread ticker issued for the spread.  Note that the full spread definition can be found in the ProductDefinition and human-readable version in the description field below.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Note that SpiderRock tickers below are synthetic and are created for organizational purposes only.  SpiderRock synthetic tickers typically begin with a '@' character."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2580"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-futures/FutureBookQuote",children:"FutureBookQuote"})}),(0,i.jsx)(t.td,{children:"This table contains live future quote records from the listing exchange.  Each record contains up to four price levels and represents a live snapshot of the book for a specific future."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3120"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/FutureCloseMark",children:"FutureCloseMark"})}),(0,i.jsxs)(t.td,{children:["FutureCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright futures.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"FutureCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2590"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-futures/FutureMarketSummary",children:"FutureMarketSummary"})}),(0,i.jsx)(t.td,{children:"These records represent live market summary snapshots for each active futures markets."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3125"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/FutureOpenMark",children:"FutureOpenMark"})}),(0,i.jsx)(t.td,{children:"FutureOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2595"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-futures/FuturePrint",children:"FuturePrint"})}),(0,i.jsx)(t.td,{children:"The most recent (last) print record for each active futures market."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4255"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/probabilities/FuturePrintProbability",children:"FuturePrintProbability"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4260"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/probabilities/FutureQuoteProbability",children:"FutureQuoteProbability"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3130"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/FutureSettlementMark",children:"FutureSettlementMark"})}),(0,i.jsx)(t.td,{children:"Future settlement marks from the listing exchange"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2675"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-index/IndexQuote",children:"IndexQuote"})}),(0,i.jsx)(t.td,{children:"Live index levels and quotes including SpiderRock synthetic index levels and quotes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4450"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-status/NMSCircuitBreaker",children:"NMSCircuitBreaker"})}),(0,i.jsx)(t.td,{children:"This table contains circuit breaker information for market centers with circuit breakers.  Note that circuit breaker records may not always exist for a market center."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2750"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OpraPrintType",children:"OpraPrintType"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4355"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-definition/OptExpiryDefinition",children:"OptExpiryDefinition"})}),(0,i.jsxs)(t.td,{children:["This table maps option root/expiration combinations to their deliverable future.  Mappings are sourced fromm listing exchange product definitions.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"BaseObj",":Root"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3140"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/OptionCloseMark",children:"OptionCloseMark"})}),(0,i.jsxs)(t.td,{children:["OptionCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"OptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2760"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionEOP",children:"OptionEOP"})}),(0,i.jsx)(t.td,{children:"The expected opening price and opening size for an option.  Based on the exchange open auction feed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2845"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionFlexEvent",children:"OptionFlexEvent"})}),(0,i.jsx)(t.td,{children:"The most recent (last) record for each active FLEX option."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1090"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/analytics/OptionLookback",children:"OptionLookback"})}),(0,i.jsx)(t.td,{children:"OptionLookback records are published by the SurfaceModelServer and represent a stable frame lookback window on the option market (typically about 10 minutes)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2780"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionMarketSummary",children:"OptionMarketSummary"})}),(0,i.jsx)(t.td,{children:"These records represent live market summary snapshots for each active option"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2785"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionNbboQuote",children:"OptionNbboQuote"})}),(0,i.jsx)(t.td,{children:"This table contains live option quote records from OPRA (equities) or the listing exchange (futures).  Each record contains up to two price levels and represents a live snapshot of the book for a specific option series.  There are typically 1mm+ records in this table if all ticker sources are enabled."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2790"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionOpenAuction",children:"OptionOpenAuction"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2795"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionOpenAuctionSummary",children:"OptionOpenAuctionSummary"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3230"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-statistics/OptionOpenInterest",children:"OptionOpenInterest"})}),(0,i.jsx)(t.td,{children:"Open interest for each option series. Records are from the live OPRA feed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3145"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/OptionOpenMark",children:"OptionOpenMark"})}),(0,i.jsx)(t.td,{children:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2800"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionPrint",children:"OptionPrint"})}),(0,i.jsx)(t.td,{children:"The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2805"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionPrint2",children:"OptionPrint2"})}),(0,i.jsx)(t.td,{children:"The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4265"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/probabilities/OptionPrintProbability",children:"OptionPrintProbability"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2825"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/OptionPrintSummary",children:"OptionPrintSummary"})}),(0,i.jsx)(t.td,{children:"Root/Expiration trading summaries.  Includes contracts and vega trade in total and on the public bid or offer.  Records update live as public trades occur."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4270"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/probabilities/OptionQuoteProbability",children:"OptionQuoteProbability"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3150"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/OptionSettlementMark",children:"OptionSettlementMark"})}),(0,i.jsx)(t.td,{children:"Option settlement marks from the listing exchange."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4360"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-definition/ProductDefinitionV2",children:"ProductDefinitionV2"})}),(0,i.jsx)(t.td,{children:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4460"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-status/ProductPriceBand",children:"ProductPriceBand"})}),(0,i.jsx)(t.td,{children:"This table contains live trading bands, as advertised by the listing exchange, for futures markets with bands."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4465"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-status/ProductTradingStatus",children:"ProductTradingStatus"})}),(0,i.jsx)(t.td,{children:"This table contains live trading status records for entire product groups (futures and options) and asset groups and individual instruments"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4470"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-status/ProductTradingStatusV2",children:"ProductTradingStatusV2"})}),(0,i.jsx)(t.td,{children:"This table contains live trading status records for entire product groups (futures and options) and asset groups and individual instruments"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6225"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/tool-rows/RFQQuoteBroadcast",children:"RFQQuoteBroadcast"})}),(0,i.jsx)(t.td,{children:"Live spread quotes with SpiderRock markup details for equity and future option spreads.  Legs details are included in a packed field.  This table contains the most recent market for each spread."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4365"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-definition/RootDefinition",children:"RootDefinition"})}),(0,i.jsx)(t.td,{children:"RootDefinition records are sourced from the listing exchange for future options and from OCC for US equity options.  Records are updated as SpiderRock receives changes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2830"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/SOQConstituentSymbolMap",children:"SOQConstituentSymbolMap"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2835"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-options/SOQStrikeRangeUpdate",children:"SOQStrikeRangeUpdate"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2995"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-stock/StockAuctionSummary",children:"StockAuctionSummary"})}),(0,i.jsx)(t.td,{children:"These records represent current and recent trailing market open/close auction results"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3000"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-stock/StockBookQuote",children:"StockBookQuote"})}),(0,i.jsx)(t.td,{children:"This table contains live equity quote records for all CQS/UQDF securities as well as US OTC equity securities, SpiderRock synthetic markets, and a number of major indexes.  Each record contains up to two price levels and represents a live snapshot of the book for a specific market."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3165"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/StockCloseMark",children:"StockCloseMark"})}),(0,i.jsxs)(t.td,{children:["StockCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"StockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3015"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-stock/StockExchImbalance",children:"StockExchImbalance"})}),(0,i.jsxs)(t.td,{children:["StockExchImbalance records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Final StockExchImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3020"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-stock/StockExchImbalanceV2",children:"StockExchImbalanceV2"})}),(0,i.jsxs)(t.td,{children:["StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Final StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3035"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-stock/StockImbalance",children:"StockImbalance"})}),(0,i.jsxs)(t.td,{children:["StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Final StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3040"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-stock/StockMarketSummary",children:"StockMarketSummary"})}),(0,i.jsx)(t.td,{children:"These records represent live market summary snapshots for equity, index, and synthetic markets."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3170"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/StockOpenMark",children:"StockOpenMark"})}),(0,i.jsx)(t.td,{children:"StockOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3045"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-stock/StockPrint",children:"StockPrint"})}),(0,i.jsx)(t.td,{children:"The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4275"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/probabilities/StockPrintProbability",children:"StockPrintProbability"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4280"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/probabilities/StockQuoteProbability",children:"StockQuoteProbability"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4475"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-status/StockRegSHOStatus",children:"StockRegSHOStatus"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3175"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/SyntheticExpiryCloseMark",children:"SyntheticExpiryCloseMark"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3180"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-marks/SyntheticExpiryOpenMark",children:"SyntheticExpiryOpenMark"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2700"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-index/SyntheticExpiryQuote",children:"SyntheticExpiryQuote"})}),(0,i.jsx)(t.td,{children:"Live synthetic expiry quotes are SpiderRock option/expiry underlier quotes.  These can be from synthetic/implied futures quotes or other sources"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2695"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-data-index/SyntheticFutureQuote",children:"SyntheticFutureQuote"})}),(0,i.jsx)(t.td,{children:"Live synthetic future quotes are SpiderRock implied futures quotes derived from roll prices."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3255"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/market-statistics/TickerAnalytics",children:"TickerAnalytics"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4375"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-definition/TickerDefinition",children:"TickerDefinition"})}),(0,i.jsx)(t.td,{children:"TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4380"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-definition/TickerDefinitionExt",children:"TickerDefinitionExt"})}),(0,i.jsx)(t.td,{children:"TickerDefinitionExt (external) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4480"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../Topics/product-status/TradingSchedule",children:"TradingSchedule"})}),(0,i.jsx)(t.td,{children:"Product trading schedule for the current week.  Includes an expected trading day market schedule for each SpiderRock ticker and day-of-week.  Including schedules for equity and futures markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange."})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var i=r(96540);const s={},n=i.createContext(s);function d(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
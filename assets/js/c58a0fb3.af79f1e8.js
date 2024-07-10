"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25069],{34661:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=t(74848),r=t(28453);const d={title:"Historical Data",sidebar_position:6},n=void 0,l={id:"Documentation/HistoricalData/HistoricalData",title:"Historical Data",description:"SpiderRock has a suite of historical data products in multiple asset classes and the ability to deliver this data to a broad range of clients who don\u2019t require the high-speed infrastructure or routing engines of the SpiderRock Trading platform.",source:"@site/docs/Documentation/HistoricalData/HistoricalData.md",sourceDirName:"Documentation/HistoricalData",slug:"/Documentation/HistoricalData/",permalink:"/docs/Documentation/HistoricalData/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Historical Data",sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"V8 Migration",permalink:"/docs/Documentation/V8Migration/"}},a={},c=[{value:"Stocks",id:"stocks",level:2},{value:"Options and Greeks",id:"options-and-greeks",level:2},{value:"Historical Greeks Data",id:"historical-greeks-data",level:3},{value:"Historical Implied Volatility Calculations",id:"historical-implied-volatility-calculations",level:3},{value:"Futures",id:"futures",level:2},{value:"Futures Closing Marks",id:"futures-closing-marks",level:3},{value:"Options on Futures Quote Intervals Records",id:"options-on-futures-quote-intervals-records",level:3},{value:"Supported Futures",id:"supported-futures",level:3},{value:"Minute Bars",id:"minute-bars",level:3},{value:"Print Sets",id:"print-sets",level:3},{value:"Historical Price Data for Volatility",id:"historical-price-data-for-volatility",level:2},{value:"VOL2G Database",id:"vol2g-database",level:3},{value:"Live Surface Curve",id:"live-surface-curve",level:3},{value:"Live Surace Grid Records (Skew Surfaces)",id:"live-surace-grid-records-skew-surfaces",level:3},{value:"Live Surface Fixed Term",id:"live-surface-fixed-term",level:3},{value:"Data and Analytics Product Offerings",id:"data-and-analytics-product-offerings",level:2},{value:"Stocks",id:"stocks-1",level:3},{value:"Equity Options",id:"equity-options",level:3},{value:"US Futures Indexes, ETFs, Index Options",id:"us-futures-indexes-etfs-index-options",level:3},{value:"Options Volatility Surfaces",id:"options-volatility-surfaces",level:3},{value:"VOL2G Equity Options Volatility Bundle",id:"vol2g-equity-options-volatility-bundle",level:3}];function o(e){const i={a:"a",br:"br",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"SpiderRock has a suite of historical data products in multiple asset classes and the ability to deliver this data to a broad range of clients who don\u2019t require the high-speed infrastructure or routing engines of the SpiderRock Trading platform."}),"\n",(0,s.jsx)(i.p,{children:"We offer robust historical market data and analytics enabling our clients to gain insights and make data-driven decisions."}),"\n",(0,s.jsx)(i.p,{children:"All datasets are well-documented with an extensive data dictionary. Data is point-in-time."}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock evaluates the data for validity and accuracy and performs statistical checks on the production databases daily to verify completeness."}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock includes multiple error codes and surface quality parameters to identify when input data does not support accurate options analytic calculations."}),"\n",(0,s.jsx)(i.h2,{id:"stocks",children:"Stocks"}),"\n",(0,s.jsx)(i.p,{children:"Our historical stock datasets recap the days\u2019 trading activity in the underlying security. Files show open/high/low/close/volume data for stocks, ETFs, and indexes from US exchanges. Delisted stocks are included for backtesting purposes."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Stock Closing Marks"})," \u2013 Created immediately after the market close when exchanges publish official marks. These records contain closing quotes and prices. Stock data also includes prior day opening and closing data with adjustments for corporate actions and daily returns. Single stocks, ETFs, and index data are tracked with reference data and security IDs that enable users to link symbol data with other corporate reference information."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Stock Minute Bars"})," \u2013 Created once per minute for each open stock and index market. Data in this set includes high/low values, spread data, print information, and bid/ask data."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Stock Print Set"})," \u2013 Created for each trade with trade cost analysis (TCA). Records are updated 1-minute and 10-minutes after the print."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Stock Imbalances"})," \u2013  Files contain buy and sell imbalance records during auctions throughout the trading day. This data is available for both the NYSE and ARCA listed securities."]}),"\n",(0,s.jsx)(i.h2,{id:"options-and-greeks",children:"Options and Greeks"}),"\n",(0,s.jsx)(i.p,{children:"Our options data is captured directly from the OPRA market data feeds. Our analytics include implied volatility, Greeks, and theoretical surfaces derived from underlying markets with critical supporting reference data to ensure highly accurate estimates, resulting in tradable market data."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Options Close Marks (EOD)"})," \u2013 Created immediately after the market closes and when exchanges publish official marks. These records contain closing quotes and prices, as well as markup details for all outright options. SpiderRock uses algorithms that estimate the correct theoretical price when creating the SpiderRock closing marks."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Options Quote Intervals"})," \u2013 Created every 5 minutes while options markets are open. They contain the call and put prices and sizes, as well as the underlying stock price for each outright options strike. They also include SpiderRock fitted surface implied volatilities and Greeks."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Options at-the-money (ATM) Volatility Minutes Bars"})," \u2013 Created at 1-minute intervals for all at-the-money options markets by symbol expiration. Data in this set includes open/high/low/close values and volatility data."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Options Print Set"})," \u2013 Created on every option print along with the quote, surface, size, and trade volume at the print time plus all relevant options analytics.  The print set also contains exchange published print types (single, complex, auction, block, sweep, etc.) and SpiderRock estimates of the trade side (buy, sell). Records also contain T+1M and T+10M forward mark details to support trade cost analysis (TCA)."]}),"\n",(0,s.jsx)(i.h3,{id:"historical-greeks-data",children:"Historical Greeks Data"}),"\n",(0,s.jsxs)(i.p,{children:["Our historical data packages contain all the option Greeks, including:\n",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Delta"})," \u2013 Measures the rate of change of option price with respect to a 1-point change in the underlying price."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Gamma"})," \u2013 Measures the rate of change of Delta with respect to a 1-point change in the underlying price."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Vega"}),"  \u2013 Measures the rate of change of the option price with respect to a 1% change in volatility."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Theta"})," \u2013 Measures the rate of change of the option price with respect to 1-day change in time to expiration."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Rho"})," \u2013 Measures the rate of change of the option price with respect to a 1% change in the interest rate."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Phi"})," \u2013 Measures the rate of change of the option price with respect to a 1% change in the dividend rate."]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"historical-implied-volatility-calculations",children:"Historical Implied Volatility Calculations"}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock historical implied volatility data uses a family of proprietary pricing models to compute prices, implied volatilities, common options Greeks (delta, gamma, theta, vega, rho, phi, volga, and vanna), and various scenario risk slides for equity and futures options."}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock pricing models are solutions (sometimes numeric) to the standard generalized Black-Scholes equation. The general form of this equation has several regions of interest for different types of options and within different regions of the skew curve. SpiderRock\u2019s general pricing model is a patchwork of distinct sub-models for a variety of regions of interest to address these different pricing situations in practice."}),"\n",(0,s.jsxs)(i.p,{children:["Learn more about ",(0,s.jsx)(i.a,{href:"/docs/Documentation/PlatformFeatures/Analytics/",children:(0,s.jsx)(i.strong,{children:"SpiderRock's analytics here."})})]}),"\n",(0,s.jsx)(i.h2,{id:"futures",children:"Futures"}),"\n",(0,s.jsx)(i.p,{children:"Our futures datasets provide individual prices, prints, volume, and other price-related data for all exchange-traded products listed on the CME, CBOT, NYMEX, and COMEX. The wide range of futures data includes indexes, treasuries, currency, metals, agriculture, energy, and more."}),"\n",(0,s.jsx)(i.h3,{id:"futures-closing-marks",children:"Futures Closing Marks"}),"\n",(0,s.jsx)(i.p,{children:"Created immediately after the market closes when the exchanges publish official marks and at the top of the daily rotation. SpiderRock creates and broadcasts a closing mark record for both Futures and Options on Futures. The file is comprised of a unique set of over 30 data fields including the SpiderRock closing mark. Data featured includes:"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Closing quotes"}),(0,s.jsx)("li",{children:"Closing prices"}),(0,s.jsx)("li",{children:"Closing underlier bid"}),(0,s.jsx)("li",{children:"Options bid, ask, and marks"}),(0,s.jsx)("li",{children:"Option implied bid/ask volatilities"}),(0,s.jsx)("li",{children:"Greeks"}),(0,s.jsx)("li",{children:"Theoretical surface prices and volatilities"}),(0,s.jsx)("li",{children:"Prior day closing quotes and prices are included. SpiderRock\u2019s proprietary approach selects the most appropriate closing price for the given security type."})]}),"\n",(0,s.jsx)(i.h3,{id:"options-on-futures-quote-intervals-records",children:"Options on Futures Quote Intervals Records"}),"\n",(0,s.jsx)(i.p,{children:"Options on Futures intraday records are created every 5 minutes while markets are open. They contain the call and put prices and sizes, as well as the underlying stock price for each outright options strike."}),"\n",(0,s.jsx)(i.p,{children:"They also contain SpiderRock fitted surface implied volatilities and Greeks."}),"\n",(0,s.jsx)(i.h3,{id:"supported-futures",children:"Supported Futures"}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock datasets and feeds include equity index products from the CME, CFE, and CBOE."}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Index Products"})," \u2013 Top indexes by volume, including S&P 500, Dow, VIX, Nasdaq, and Russell traded on CME and CFE. Datasets also include broad-based ETFs and other volatility index products."]})}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock can also offer other historical commodities datasets from NYMEX, COMEX, CBOT."}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Energy products"})," \u2013 Top 20 traded futures and futures spread for oil, natural gas, refined products primality traded on NYMEX"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Treasuries"})," \u2013 Top 20 treasuries futures and futures options Including T-bill, and Treasury Bonds (5, 10, 30 year), and various spread products traded on CBOT"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:" Metals"})," \u2013Top Gold, Silver, and other commercial or precious metals traded on COMEX"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Agricultural products"})," \u2013 Wheat, Corn, Soybeans traded on the CME and CBOT"]})]}),"\n",(0,s.jsx)(i.h3,{id:"minute-bars",children:"Minute Bars"}),"\n",(0,s.jsx)(i.p,{children:"Future minute bar records contain open, high, low, close, vwap, volume, and other price-related data for all futures and options on futures based on SpiderRock live market data streams."}),"\n",(0,s.jsx)(i.p,{children:"Bars for options on futures are created every 1 minute and contain open/high/low/close volatility at-the-money for each expiration."}),"\n",(0,s.jsx)(i.h3,{id:"print-sets",children:"Print Sets"}),"\n",(0,s.jsx)(i.p,{children:"Print set records contain every print along with quotes, surface, and SpiderRock trade details at print time."}),"\n",(0,s.jsx)(i.p,{children:"These records are created for every print at the time of print and are published 10 minutes later when T + 10M forward marks are available to evaluate trade performance."}),"\n",(0,s.jsx)(i.h2,{id:"historical-price-data-for-volatility",children:"Historical Price Data for Volatility"}),"\n",(0,s.jsx)(i.p,{children:"Volatility is a crucial feature of the options market and superior options data forms the foundation for insightful volatility analysis. Smoothed volatility curves with a constant maturity format allow for easy incorporation of data into models and analysis. Researchers can use skew curves on a standard grid as indicators of directional market pressure."}),"\n",(0,s.jsx)(i.p,{children:"Theoretical volatility surfaces are models of the fair market value of an option between the bid and offer. These surfaces reflect the best fit of current markets and are subject to change if or when market conditions change."}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock continually computes dynamic implied volatility surfaces for all options expiration months, updating these surfaces as new live market quotes are received. Each curve record contains the spline parameters for the shape of a surface, the live calibrated at-the-money volatility, the stock dividend rate, any price offset, and other related curve adjustments."}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock has multiple volatility surface datasets. These datasets include surfaces for each expiration at end-of-day and 10-minute intervals archived at the market close. SpiderRock produces daily subscription feeds for both intraday and EOD surfaces."}),"\n",(0,s.jsx)(i.p,{children:"All SpiderRock options datasets for equities or futures on options include documented theoretical surface prices and volatilities for each option strike."}),"\n",(0,s.jsx)(i.h3,{id:"vol2g-database",children:"VOL2G Database"}),"\n",(0,s.jsx)(i.p,{children:"A new SpiderRock analytics database for US stock and equity options pricing and volatility designed to meet the needs of institutional and academic researchers who depend on high-quality historical volatility analytics."}),"\n",(0,s.jsx)(i.h3,{id:"live-surface-curve",children:"Live Surface Curve"}),"\n",(0,s.jsx)(i.p,{children:"This table contains spline curve parameters, implied volatility surfaces, Greeks, and hedge deltas for all options expiration months with live market quotes."}),"\n",(0,s.jsx)(i.p,{children:"The records backing each SpiderRock surface represent a two-dimensional curve with strikes in the X-axis expressed in terms of moneyness (i.e., standardized lognormal or normal) and options volatilities in the Y-axis expressed as a multiple of at-the-money volatility."}),"\n",(0,s.jsx)(i.h3,{id:"live-surace-grid-records-skew-surfaces",children:"Live Surace Grid Records (Skew Surfaces)"}),"\n",(0,s.jsx)(i.p,{children:"This table contains a fixed grid of volatility for a given expiration as a function of delta for uncensored curves. The file also includes days until the next earnings date and implied earnings moves."}),"\n",(0,s.jsx)(i.h3,{id:"live-surface-fixed-term",children:"Live Surface Fixed Term"}),"\n",(0,s.jsxs)(i.p,{children:["This dataset contains snapshots of the censored at-the-money volatility term structure with the impact of implied earnings events removed for each ticker. Censored curves are created by eliminating the earnings volatility from the observed fitted curve which enables the user to better understand the ticker\u2019s underlying volatility.",(0,s.jsx)(i.br,{}),"\n","Each snapshot contains at-the-money volatilities for fixed-term expirations: atm5d, atm10d, atm21d, atm42d, atm63d, atm84d, atm105d, atm126d, atm189d, atm252d, atm378d, and atm504d (two years)."]}),"\n",(0,s.jsx)(i.p,{children:"The data also includes historical earnings move history, estimated implied earnings moves, uncensored curves with earnings events included, and censored curves with the impact of implied earnings events removed."}),"\n",(0,s.jsx)(i.h2,{id:"data-and-analytics-product-offerings",children:"Data and Analytics Product Offerings"}),"\n",(0,s.jsx)(i.h3,{id:"stocks-1",children:"Stocks"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Item"}),(0,s.jsx)(i.th,{children:"Frequency"}),(0,s.jsx)(i.th,{children:"History"}),(0,s.jsx)(i.th,{children:"Prices"}),(0,s.jsx)(i.th,{children:"Volume"}),(0,s.jsx)(i.th,{children:"Size"}),(0,s.jsx)(i.th,{children:"Greeks"}),(0,s.jsx)(i.th,{children:"Implied Vol"}),(0,s.jsx)(i.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Stock Close Marks"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Stock Minute Bars"}),(0,s.jsx)(i.td,{children:"1 Min"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Stock Print Set"}),(0,s.jsx)(i.td,{children:"Trades"}),(0,s.jsx)(i.td,{children:"Jan-16"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Stock Imbalances"}),(0,s.jsx)(i.td,{children:"Every Tick"}),(0,s.jsx)(i.td,{children:"Aug-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"equity-options",children:"Equity Options"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Item"}),(0,s.jsx)(i.th,{children:"Frequency"}),(0,s.jsx)(i.th,{children:"History"}),(0,s.jsx)(i.th,{children:"Prices"}),(0,s.jsx)(i.th,{children:"Volume"}),(0,s.jsx)(i.th,{children:"Size"}),(0,s.jsx)(i.th,{children:"Greeks"}),(0,s.jsx)(i.th,{children:"Implied Vol"}),(0,s.jsx)(i.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Option Close Marks"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Option Price History ID"}),(0,s.jsx)(i.td,{children:"20 Min"}),(0,s.jsx)(i.td,{children:"Sep-14"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Option Price History HID"}),(0,s.jsx)(i.td,{children:"5 Min"}),(0,s.jsx)(i.td,{children:"Jan-20"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Option 1 Minute Bars ATM"}),(0,s.jsx)(i.td,{children:"1 Min"}),(0,s.jsx)(i.td,{children:"Aug-20"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Options Print Set"}),(0,s.jsx)(i.td,{children:"Trades"}),(0,s.jsx)(i.td,{children:"Jan-16"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"us-futures-indexes-etfs-index-options",children:"US Futures Indexes, ETFs, Index Options"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Item"}),(0,s.jsx)(i.th,{children:"Frequency"}),(0,s.jsx)(i.th,{children:"History"}),(0,s.jsx)(i.th,{children:"Prices"}),(0,s.jsx)(i.th,{children:"Volume"}),(0,s.jsx)(i.th,{children:"Size"}),(0,s.jsx)(i.th,{children:"Greeks"}),(0,s.jsx)(i.th,{children:"Implied Vol"}),(0,s.jsx)(i.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Futures Close Marks"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-19"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Futures Minute Bars"}),(0,s.jsx)(i.td,{children:"1 Min"}),(0,s.jsx)(i.td,{children:"Jan-16"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Futures Print Set"}),(0,s.jsx)(i.td,{children:"Trades"}),(0,s.jsx)(i.td,{children:"Jan-16"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Options (F) Close Marks"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Options (F) Price History HID"}),(0,s.jsx)(i.td,{children:"5 Min"}),(0,s.jsx)(i.td,{children:"Aug-20"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Options (F) Minute Bars ATM"}),(0,s.jsx)(i.td,{children:"1 Min"}),(0,s.jsx)(i.td,{children:"Aug-20"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Options (F) Print Set"}),(0,s.jsx)(i.td,{children:"Trades"}),(0,s.jsx)(i.td,{children:"Jan-19"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"options-volatility-surfaces",children:"Options Volatility Surfaces"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Item"}),(0,s.jsx)(i.th,{children:"Frequency"}),(0,s.jsx)(i.th,{children:"History"}),(0,s.jsx)(i.th,{children:"Prices"}),(0,s.jsx)(i.th,{children:"Volume"}),(0,s.jsx)(i.th,{children:"Size"}),(0,s.jsx)(i.th,{children:"Greeks"}),(0,s.jsx)(i.th,{children:"Implied Vol"}),(0,s.jsx)(i.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Surface Curves EOD"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fixed Grid Surface EOD"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fixed Term Surface ATM EOD"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Surface Curves ID"}),(0,s.jsx)(i.td,{children:"30 Min"}),(0,s.jsx)(i.td,{children:"Mar-16"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fixed Grid Surface ID"}),(0,s.jsx)(i.td,{children:"30 Min"}),(0,s.jsx)(i.td,{children:"Mar-16"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fixed Term Surface ATM ID"}),(0,s.jsx)(i.td,{children:"30 Min"}),(0,s.jsx)(i.td,{children:"Mar-16"}),(0,s.jsx)(i.td,{children:"="}),(0,s.jsx)(i.td,{children:"="}),(0,s.jsx)(i.td,{children:"="}),(0,s.jsx)(i.td,{children:"="}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Surface Curves ID"}),(0,s.jsx)(i.td,{children:"5 Min"}),(0,s.jsx)(i.td,{children:"Aug-20"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fixed Grid Surface ID"}),(0,s.jsx)(i.td,{children:"5 Min"}),(0,s.jsx)(i.td,{children:"Dec-20"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fixed Term Surfaces ATM ID"}),(0,s.jsx)(i.td,{children:"5 Min"}),(0,s.jsx)(i.td,{children:"Dec-20"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"vol2g-equity-options-volatility-bundle",children:"VOL2G Equity Options Volatility Bundle"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Item"}),(0,s.jsx)(i.th,{children:"Frequency"}),(0,s.jsx)(i.th,{children:"History"}),(0,s.jsx)(i.th,{children:"Prices"}),(0,s.jsx)(i.th,{children:"Volume"}),(0,s.jsx)(i.th,{children:"Size"}),(0,s.jsx)(i.th,{children:"Greeks"}),(0,s.jsx)(i.th,{children:"Implied Vol"}),(0,s.jsx)(i.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Stock Close Marks"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Options Close Marks"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fixed Grid Surfaces"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fixed Term Surfaces ATM"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Volatility History by Ticker"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Equity References Tables"}),(0,s.jsx)(i.td,{children:"EOD"}),(0,s.jsx)(i.td,{children:"Jan-10"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"X"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>l});var s=t(96540);const r={},d=s.createContext(r);function n(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);
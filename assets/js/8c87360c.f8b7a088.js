"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[72971],{34326:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var s=i(74848),r=i(28453),n=i(64210);const d={title:"Historical Data",sidebar_position:7},l=void 0,a={id:"Documentation/HistoricalData/HistoricalData",title:"Historical Data",description:"SpiderRock has a suite of historical data products in multiple asset classes and the ability to deliver this data to a broad range of clients who don\u2019t require data for back-testing and research.",source:"@site/versioned_docs/version-8.5.3.1/Documentation/HistoricalData/HistoricalData.md",sourceDirName:"Documentation/HistoricalData",slug:"/Documentation/HistoricalData/",permalink:"/docs/8.5.3.1/Documentation/HistoricalData/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",sidebarPosition:7,frontMatter:{title:"Historical Data",sidebar_position:7},sidebar:"documentationSidebar",previous:{title:"V7 to V8 Migration",permalink:"/docs/8.5.3.1/Documentation/V8Migration/"}},c={},o=[{value:"Stocks",id:"stocks",level:2},{value:"Options and Greeks",id:"options-and-greeks",level:2},{value:"Historical Greeks Data",id:"historical-greeks-data",level:3},{value:"Historical Implied Volatility Calculations",id:"historical-implied-volatility-calculations",level:3},{value:"Historical Price Data for Volatility",id:"historical-price-data-for-volatility",level:2},{value:"Historical Volatility Surfaces",id:"historical-volatility-surfaces",level:2},{value:"Surface Curve",id:"surface-curve",level:3},{value:"Surface ATM (At-The-Money)",id:"surface-atm-at-the-money",level:3},{value:"Surface Grid (Skew Surfaces)",id:"surface-grid-skew-surfaces",level:3},{value:"Surface Fixed Term",id:"surface-fixed-term",level:3},{value:"Data and Analytics Product Offerings",id:"data-and-analytics-product-offerings",level:2},{value:"VOL2G Database",id:"vol2g-database",level:3},{value:"Stocks",id:"stocks-1",level:3},{value:"Equity Options",id:"equity-options",level:3},{value:"Options Volatility Surfaces",id:"options-volatility-surfaces",level:3},{value:"VOL2G Equity Options Volatility Bundle",id:"vol2g-equity-options-volatility-bundle",level:3},{value:"US Futures and Options on Futures",id:"us-futures-and-options-on-futures",level:3},{value:"Download our data dictionaries",id:"download-our-data-dictionaries",level:2},{value:"EOD Features Dataset",id:"eod-features-dataset",level:3},{value:"SpiderRock Historical Data Dictionary",id:"spiderrock-historical-data-dictionary",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"SpiderRock has a suite of historical data products in multiple asset classes and the ability to deliver this data to a broad range of clients who don\u2019t require data for back-testing and research."}),"\n",(0,s.jsx)(t.p,{children:"We offer robust historical market data and analytics enabling our clients to gain insights and make data-driven decisions."}),"\n",(0,s.jsx)(t.p,{children:"All datasets are well-documented with an extensive data dictionary. Data is point-in-time."}),"\n",(0,s.jsx)(t.p,{children:"SpiderRock evaluates the data for validity and accuracy and performs statistical checks on the production databases daily to verify completeness."}),"\n",(0,s.jsx)(t.p,{children:"SpiderRock includes multiple error codes and surface quality parameters to identify when input data does not support accurate options analytic calculations."}),"\n",(0,s.jsx)(t.h2,{id:"stocks",children:"Stocks"}),"\n",(0,s.jsx)(t.p,{children:"Our historical stock datasets recap the days\u2019 trading activity in the underlying security. Files show open/high/low/close/volume data for stocks, ETFs, and indexes from US exchanges. Delisted stocks are included for backtesting purposes."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Stock Closing Marks"})," \u2013 Created approximately 1 minute before the market close and updated when exchanges publish official marks. These records contain closing quotes and prices. Stock data also includes prior day opening and closing data with adjustments for corporate actions and daily returns. Single stocks, ETFs, and index data are tracked with reference data and security IDs that enable users to link symbol data with other corporate reference information."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Stock Minute Bars"})," \u2013 Created once per minute for each open stock and index market. Data in this set includes high/low values, spread data, print information, and bid/ask data."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Stock Print Set"})," \u2013 Created for each trade with trade cost analysis (TCA). Records are updated 1-minute and 10-minutes after the print."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Stock Imbalances"})," \u2013  Files contain buy and sell imbalance records during auctions throughout the trading day. This data is available for both the NYSE and ARCA listed securities."]}),"\n",(0,s.jsx)(t.h2,{id:"options-and-greeks",children:"Options and Greeks"}),"\n",(0,s.jsx)(t.p,{children:"Our options data is captured directly from the OPRA market data feeds. Our analytics include implied volatility, Greeks, and theoretical surfaces derived from underlying markets with critical supporting reference data to ensure highly accurate estimates, resulting in tradable market data."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Options Close Marks (EOD)"})," \u2013 SpiderRock Option Close Marks are created 1 or 5 minutes before the regular session close. These records contain closing quotes and prices, as well as markup details for all outright options. SpiderRock uses algorithms that estimate the correct theoretical price when creating the SpiderRock closing marks."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Options Quote Intervals"})," \u2013 Snapped every 5 or 30 minutes while options markets are open. They contain the call and put prices and sizes, as well as the underlying stock price for each outright options strike. They also include SpiderRock fitted surface implied volatilities and Greeks."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Options at-the-money (ATM) Volatility Minutes Bars"})," \u2013 Created at 1-minute intervals for all at-the-money options markets by symbol expiration. Data in this set includes open/high/low/close values and volatility data."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Options Print Set"})," \u2013 Created on every option print along with the quote, surface, size, and trade volume at the print time plus all relevant options analytics.  The print set also contains exchange published print types (single, complex, auction, block, sweep, etc.) and SpiderRock estimates of the trade side (buy, sell). Records also contain T+1M and T+10M forward mark details to support trade cost analysis (TCA)."]}),"\n",(0,s.jsx)(t.h3,{id:"historical-greeks-data",children:"Historical Greeks Data"}),"\n",(0,s.jsx)(t.p,{children:"Our historical data packages contain all the option Greeks, including:"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Delta"})," \u2013 Measures the rate of change of option price with respect to a 1-point change in the underlying price."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Gamma"})," \u2013 Measures the rate of change of Delta with respect to a 1-point change in the underlying price."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Vega"}),"  \u2013 Measures the rate of change of the option price with respect to a 1% change in volatility."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Theta"})," \u2013 Measures the rate of change of the option price with respect to 1-day change in time to expiration."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Rho"})," \u2013 Measures the rate of change of the option price with respect to a 1% change in the interest rate."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Phi"})," \u2013 Measures the rate of change of the option price with respect to a 1% change in the dividend rate."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Vanna"})," \u2013 Measures the rate of change of Delta with respect to changes in the underlying asset's price and changes in volatility."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"Volga"})," \u2013 Measures the rate of change of Vega with respect to changes in volatility."]})]}),"\n",(0,s.jsx)(t.h3,{id:"historical-implied-volatility-calculations",children:"Historical Implied Volatility Calculations"}),"\n",(0,s.jsx)(t.p,{children:"SpiderRock historical implied volatility data uses a family of proprietary pricing models to compute prices, implied volatilities, common options Greeks (delta, gamma, theta, vega, rho, phi, volga, and vanna), and various scenario risk slides for equity and futures options."}),"\n",(0,s.jsx)(t.p,{children:"SpiderRock pricing models are solutions (sometimes numeric) to the standard generalized Black-Scholes equation. The general form of this equation has several regions of interest for different types of options and within different regions of the skew curve. SpiderRock\u2019s general pricing model is a patchwork of distinct sub-models for a variety of regions of interest to address these different pricing situations in practice."}),"\n",(0,s.jsxs)(t.p,{children:["Learn more about ",(0,s.jsx)(t.a,{href:"/docs/8.5.3.1/Documentation/PlatformFeatures/Analytics/",children:(0,s.jsx)(t.strong,{children:"SpiderRock's analytics here."})})]}),"\n",(0,s.jsx)(t.h2,{id:"historical-price-data-for-volatility",children:"Historical Price Data for Volatility"}),"\n",(0,s.jsx)(t.p,{children:"Volatility is a crucial feature of the options market and superior options data forms the foundation for insightful volatility analysis. Smoothed volatility curves with a constant maturity format allow for easy incorporation of data into models and analysis. Researchers can use skew curves on a standard grid as indicators of directional market pressure."}),"\n",(0,s.jsx)(t.p,{children:"Theoretical volatility surfaces are models of the fair market value of an option between the bid and offer. These surfaces reflect the best fit of current markets and are subject to change if or when market conditions change."}),"\n",(0,s.jsx)(t.p,{children:"SpiderRock continually computes dynamic implied volatility surfaces for all options expiration months, updating these surfaces as new live market quotes are received. Each curve record contains the spline parameters for the shape of a surface, the live calibrated at-the-money volatility, the stock dividend rate, any price offset, and other related curve adjustments."}),"\n",(0,s.jsx)(t.p,{children:"SpiderRock has multiple volatility surface datasets. These datasets include surfaces for each expiration at end-of-day and 10-minute intervals archived at the market close. SpiderRock produces daily subscription feeds for both intra-day and EOD surfaces."}),"\n",(0,s.jsx)(t.p,{children:"All SpiderRock options datasets for equities or futures on options include documented theoretical surface prices and volatilities for each option strike."}),"\n",(0,s.jsx)(t.h2,{id:"historical-volatility-surfaces",children:"Historical Volatility Surfaces"}),"\n",(0,s.jsx)(t.p,{children:"SpiderRock computes implied volatility surfaces for all option expiration months with live market quotes. Surface data can be used by volatility traders to better understand and identify opportunities in skew and relative option value."}),"\n",(0,s.jsx)(t.p,{children:"Curves can also be used to historically compare implied versus realized volatility or cross asset implied volatility over long-term time horizons."}),"\n",(0,s.jsx)(t.h3,{id:"surface-curve",children:"Surface Curve"}),"\n",(0,s.jsx)(t.p,{children:"This table contains spline curve parameters, implied volatility surfaces, Greeks, and hedge deltas for all options expiration months with live market quotes."}),"\n",(0,s.jsx)(t.p,{children:"The records backing each SpiderRock surface represent a two-dimensional curve with strikes in the X-axis expressed in terms of moneyness (i.e., standardized lognormal or normal) and options volatilities in the Y-axis expressed as a multiple of at-the-money volatility."}),"\n",(0,s.jsx)(t.h3,{id:"surface-atm-at-the-money",children:"Surface ATM (At-The-Money)"}),"\n",(0,s.jsx)(t.p,{children:"This table provides ATM implied volatilities across fixed terms, including ex-earnings term structures and skew slopes. Each row contains 12 columns with ATM volatilities for different expirations. The records also include implied estimates of earnings moves and allow for interpolation of ATM volatilities affected by earnings releases for any time to expiration."}),"\n",(0,s.jsx)(t.h3,{id:"surface-grid-skew-surfaces",children:"Surface Grid (Skew Surfaces)"}),"\n",(0,s.jsx)(t.p,{children:"This table contains a grid surface (skew surface) of volatility for a given expiration as a function of delta without earnings effects. The file also includes days until the next earnings date and implied earnings moves."}),"\n",(0,s.jsx)(t.h3,{id:"surface-fixed-term",children:"Surface Fixed Term"}),"\n",(0,s.jsx)(t.p,{children:"This dataset contains snapshots of the at-the-money volatility term structure with or without earnings effects with the impact of implied earnings events removed for each ticker. Curves are created by eliminating the earnings volatility from the observed fitted curve which enables the user to better understand the ticker\u2019s underlying volatility."}),"\n",(0,s.jsx)(t.h2,{id:"data-and-analytics-product-offerings",children:"Data and Analytics Product Offerings"}),"\n",(0,s.jsx)(t.h3,{id:"vol2g-database",children:"VOL2G Database"}),"\n",(0,s.jsx)(t.p,{children:"SpiderRock delivers a comprehensive volatility database and suite of extended data products designed to meet the needs of institutional and academic researchers who depend on high quality historical volatility analytics"}),"\n",(0,s.jsx)(t.h3,{id:"stocks-1",children:"Stocks"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Item"}),(0,s.jsx)(t.th,{children:"Frequency"}),(0,s.jsx)(t.th,{children:"History"}),(0,s.jsx)(t.th,{children:"Prices"}),(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Size"}),(0,s.jsx)(t.th,{children:"Greeks"}),(0,s.jsx)(t.th,{children:"Implied Vol"}),(0,s.jsx)(t.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stock Close Marks"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-10"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stock Minute Bars"}),(0,s.jsx)(t.td,{children:"1 Min"}),(0,s.jsx)(t.td,{children:"Jan-10"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stock Print Set"}),(0,s.jsx)(t.td,{children:"Trades"}),(0,s.jsx)(t.td,{children:"Jan-16"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stock Imbalances"}),(0,s.jsx)(t.td,{children:"Every Tick"}),(0,s.jsx)(t.td,{children:"Aug-10"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"equity-options",children:"Equity Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Item"}),(0,s.jsx)(t.th,{children:"Frequency"}),(0,s.jsx)(t.th,{children:"History"}),(0,s.jsx)(t.th,{children:"Prices"}),(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Size"}),(0,s.jsx)(t.th,{children:"Greeks"}),(0,s.jsx)(t.th,{children:"Implied Vol"}),(0,s.jsx)(t.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Option Close Marks"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-10"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Option Price History ID"}),(0,s.jsx)(t.td,{children:"30 Min"}),(0,s.jsx)(t.td,{children:"Sep-14"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Option Price History ID"}),(0,s.jsx)(t.td,{children:"5 Min"}),(0,s.jsx)(t.td,{children:"Jan-20"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Option 1 Minute Bars ATM"}),(0,s.jsx)(t.td,{children:"1 Min"}),(0,s.jsx)(t.td,{children:"Aug-20"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Options Print Set"}),(0,s.jsx)(t.td,{children:"Trades"}),(0,s.jsx)(t.td,{children:"Jan-16"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"options-volatility-surfaces",children:"Options Volatility Surfaces"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Item"}),(0,s.jsx)(t.th,{children:"Frequency"}),(0,s.jsx)(t.th,{children:"History"}),(0,s.jsx)(t.th,{children:"Prices"}),(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Size"}),(0,s.jsx)(t.th,{children:"Greeks"}),(0,s.jsx)(t.th,{children:"Implied Vol"}),(0,s.jsx)(t.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Curves EOD"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface ATM EOD"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Grid EOD"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Fixed Term Surface ATM EOD"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Curves ID"}),(0,s.jsx)(t.td,{children:"30 Min"}),(0,s.jsx)(t.td,{children:"Mar-16"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Grid ID"}),(0,s.jsx)(t.td,{children:"30 Min"}),(0,s.jsx)(t.td,{children:"Mar-16"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Fixed Term ID"}),(0,s.jsx)(t.td,{children:"30 Min"}),(0,s.jsx)(t.td,{children:"Mar-16 Aug-20"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Curves ID"}),(0,s.jsx)(t.td,{children:"5 Min"}),(0,s.jsx)(t.td,{children:"Aug-20"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Grid ID"}),(0,s.jsx)(t.td,{children:"5 Min"}),(0,s.jsx)(t.td,{children:"Dec-20"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Fixed Term ID"}),(0,s.jsx)(t.td,{children:"5 Min"}),(0,s.jsx)(t.td,{children:"Dec-20"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"vol2g-equity-options-volatility-bundle",children:"VOL2G Equity Options Volatility Bundle"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Item"}),(0,s.jsx)(t.th,{children:"Frequency"}),(0,s.jsx)(t.th,{children:"History"}),(0,s.jsx)(t.th,{children:"Prices"}),(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Size"}),(0,s.jsx)(t.th,{children:"Greeks"}),(0,s.jsx)(t.th,{children:"Implied Vol"}),(0,s.jsx)(t.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stock Close Marks"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Option Close Marks"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Grid"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Surface Fixed Term"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Volatility History by Ticker"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Equity References Tables"}),(0,s.jsx)(t.td,{children:"EOD"}),(0,s.jsx)(t.td,{children:"Jan-14"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"us-futures-and-options-on-futures",children:"US Futures and Options on Futures"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Item"}),(0,s.jsx)(t.th,{children:"Frequency"}),(0,s.jsx)(t.th,{children:"History"}),(0,s.jsx)(t.th,{children:"Prices"}),(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Size"}),(0,s.jsx)(t.th,{children:"Greeks"}),(0,s.jsx)(t.th,{children:"Implied Vol"}),(0,s.jsx)(t.th,{children:"Vol Surfaces"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Futures Minute Bars"}),(0,s.jsx)(t.td,{children:"1 Min"}),(0,s.jsx)(t.td,{children:"Jan-16"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Futures Print Set"}),(0,s.jsx)(t.td,{children:"Trades"}),(0,s.jsx)(t.td,{children:"Jan-16"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Options (F) Price History ID"}),(0,s.jsx)(t.td,{children:"5 Min"}),(0,s.jsx)(t.td,{children:"Aug-20"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Options (F) Minute Bars ATM"}),(0,s.jsx)(t.td,{children:"1 Min"}),(0,s.jsx)(t.td,{children:"Aug-20"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Options (F) Print Set"}),(0,s.jsx)(t.td,{children:"Trades"}),(0,s.jsx)(t.td,{children:"Jan-19"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"X"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"download-our-data-dictionaries",children:"Download our data dictionaries"}),"\n",(0,s.jsx)(t.h3,{id:"eod-features-dataset",children:"EOD Features Dataset"}),"\n",(0,s.jsx)(n.p,{label:"EOD Features Dataset",url:"/files/EODFeaturesDataset_DataDictionary(04222024).xlsx"}),"\n",(0,s.jsx)(t.h3,{id:"spiderrock-historical-data-dictionary",children:"SpiderRock Historical Data Dictionary"}),"\n",(0,s.jsx)(n.p,{label:"SpiderRock Historical Data Dictionary",url:"/files/SpiderRockHistoricalDataDictionary(10142024).xlsx"})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},30332:(e,t,i)=>{i.d(t,{A:()=>m});var s=i(96540),r=i(34164),n=i(75659),d=i(28466),l=i(11848),a=i(49559),c=i(46126),o=i(38413),h=i(31609);function x(e){return(0,h.Ay)("MuiSvgIcon",e)}(0,o.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var j=i(74848);const u=(0,l.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,"inherit"!==i.color&&t[`color${(0,d.A)(i.color)}`],t[`fontSize${(0,d.A)(i.fontSize)}`]]}})((0,a.A)((({theme:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:e.transitions?.create?.("fill",{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:e.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:e.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter((([,e])=>e&&e.main)).map((([t])=>({props:{color:t},style:{color:(e.vars??e).palette?.[t]?.main}}))),{props:{color:"action"},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:"disabled"},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]})))),p=s.forwardRef((function(e,t){const i=(0,c.b)({props:e,name:"MuiSvgIcon"}),{children:l,className:a,color:o="inherit",component:h="svg",fontSize:p="medium",htmlColor:f,inheritViewBox:m=!1,titleAccess:y,viewBox:v="0 0 24 24",...g}=i,k=s.isValidElement(l)&&"svg"===l.type,S={...i,color:o,component:h,fontSize:p,instanceFontSize:e.fontSize,inheritViewBox:m,viewBox:v,hasSvgAsChild:k},b={};m||(b.viewBox=v);const X=(e=>{const{color:t,fontSize:i,classes:s}=e,r={root:["root","inherit"!==t&&`color${(0,d.A)(t)}`,`fontSize${(0,d.A)(i)}`]};return(0,n.A)(r,x,s)})(S);return(0,j.jsxs)(u,{as:h,className:(0,r.A)(X.root,a),focusable:"false",color:f,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t,...b,...g,...k&&l.props,ownerState:S,children:[k?l.props.children:l,y?(0,j.jsx)("title",{children:y}):null]})}));p.muiName="SvgIcon";const f=p;function m(e,t){function i(i,s){return(0,j.jsx)(f,{"data-testid":`${t}Icon`,ref:s,...i,children:e})}return i.muiName=f.muiName,s.memo(s.forwardRef(i))}},64210:(e,t,i)=>{i.d(t,{p:()=>a});i(96540);var s=i(58968),r=i(1861),n=i(30332),d=i(74848);const l=(0,n.A)((0,d.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"FileDownload"),a=e=>{let{url:t,label:i}=e;return(0,d.jsx)(s.A,{className:"DownloadApp-root",sx:{marginTop:"32px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"24px"},children:(0,d.jsxs)(r.A,{onClick:()=>{const e=document.createElement("a");e.href=t,e.download=i,document.body.appendChild(e),e.click(),document.body.removeChild(e)},sx:{padding:1,display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",fontWeight:700,fontSize:"12px",minHeight:"30px",lineHeight:"12px",borderRadius:"4px",backgroundColor:"#333747","&:hover":{backgroundColor:"#44495B"},"& .DownloadFile-icon":{display:"flex",alignItems:"center",justifyContent:"center","& svg":{fill:"#A1A7BF",width:"20px",height:"20px"}}},children:[(0,d.jsx)("div",{className:"DownloadFile-icon",children:(0,d.jsx)(l,{})}),(0,d.jsx)("span",{children:i})]},"downloadButton")})}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>l});var s=i(96540);const r={},n=s.createContext(r);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["4760"],{64709:function(e,r,t){t.r(r),t.d(r,{default:()=>o,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"Documentation/PlatformFeatures/OrderManagement/TCAMetrics","title":"TCA Metrics","description":"TCA Overview","source":"@site/docs/Documentation/PlatformFeatures/OrderManagement/TCAMetrics.md","sourceDirName":"Documentation/PlatformFeatures/OrderManagement","slug":"/Documentation/PlatformFeatures/OrderManagement/TCAMetrics","permalink":"/docs/next/Documentation/PlatformFeatures/OrderManagement/TCAMetrics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"TCA Metrics","sidebar_position":5},"sidebar":"documentationSidebar","previous":{"title":"Order Staging","permalink":"/docs/next/Documentation/PlatformFeatures/OrderManagement/Staged-Orders"},"next":{"title":"Risk Management System","permalink":"/docs/next/Documentation/PlatformFeatures/RiskManagement/"}}'),s=t("52676"),n=t("91503");let l={title:"TCA Metrics",sidebar_position:5},d=void 0,a={},c=[{value:"TCA Overview",id:"tca-overview",level:2},{value:"What does TCA mean for Derivatives?",id:"what-does-tca-mean-for-derivatives",level:3},{value:"What is the likely cost of Execution... PRE-CA?",id:"what-is-the-likely-cost-of-execution-pre-ca",level:3},{value:"How can I beat the benchmark?",id:"how-can-i-beat-the-benchmark",level:3},{value:"TCA Metrics Glossary",id:"tca-metrics-glossary",level:2},{value:"Parent Order Summary",id:"parent-order-summary",level:3},{value:"Child Order Summary",id:"child-order-summary",level:3},{value:"Quote Benchmark PnL Summary",id:"quote-benchmark-pnl-summary",level:3},{value:"Active Maker Details",id:"active-maker-details",level:3},{value:"Active Taker Details",id:"active-taker-details",level:3},{value:"Sweeper Details",id:"sweeper-details",level:3},{value:"Spread Details",id:"spread-details",level:3},{value:"Auction Details",id:"auction-details",level:3}];function h(e){let r={annotation:"annotation",em:"em",h2:"h2",h3:"h3",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"tca-overview",children:"TCA Overview"}),"\n",(0,s.jsx)(r.p,{children:"In an environment of increased regulatory scrutiny and fierce competition, Transaction Cost Analysis (TCA) is\nincreasingly important to help firms measure how effectively portfolio orders are being executed. In the\nderivative space, the TCA concept is fairly new. Due to the nature of a derivative, which is tied to an\nunderlying asset, simple equity style arrival time TCA metrics are not appropriate and often give spurious\nanswers. At SpiderRock, we believe that measuring TCA for derivatives is about more than simply the price\nimprovement at time of execution. This method speaks to improvement but is silent on what you really pay\nthe market. We believe a better approach is to turn the question around to estimate what your counterparty(s)\nare likely making (or losing) when they trade with you. We believe this approach gives a more accurate\npicture of what you are truly paying (or collecting) from your market interaction and is a more appropriate\nmetric for evaluation true execution performance."}),"\n",(0,s.jsx)(r.p,{children:"SpiderRock Connect TCA metrics are based on a simple model: Your counter-party will act like a market maker and\nwill hedge their side of all trades in the underlying market(s) immediately and will then look to get out of\ntheir risk exposure a short time after trading with you. We assume, in this context, that your counter-party\ncan execute underlying market hedge trades at exactly mid-market at any size. We also assume that they can\nget out of the trade they executed with you at mid-market in the derivatives market 10 minutes after they\ntraded with you, all without paying any transaction fees. Given these basic assumptions, we can precisely\nmeasure what your counter-party made (or lost) trading with you and, conversely, what you made or lost\ntrading with them. We believe this approach gives a better indication of what your true cost of accessing\nmarket liquidity than any of the available alternatives."}),"\n",(0,s.jsx)(r.h3,{id:"what-does-tca-mean-for-derivatives",children:"What does TCA mean for Derivatives?"}),"\n",(0,s.jsx)(r.p,{children:"In the context of trading derivatives, TCA can be tricky as trading a derivative depends on the volatility of the\nunderlying asset and the notion that the underlying asset price moves faster than the derivative price itself.\nTiming the execution of a derivative relative to the move of its underling asset is key. This is why we measure\nexecution performance on a \u201C10-minute forward delta neutral PnL\u201D metric, as opposed to looking at the\nprice improvement at time of execution. When trading options, how much do you pay the market to trade is\nthe same as asking how much do you pay the market makers to cross bid/ask prices. The answer is half the\nspread between bid/ask prices. The trick to reduce this half spread cost is to time the crossing of the\nbid/ask prices so that it corresponds to a contraction of the spread from its average width. In this dynamic,\ncomparing your fill price to the mid-market mark 10 minutes after execution when prices revert to a normal\nstate, often translates into a mid-market or close-to-mid-market fill. Without micro-market dynamic\nmeasurement technics, a market participant would most likely cross the market blindly and pay half the\nspread to the market makers. With precise micro-market dynamic measurement technics, the market\nparticipant can take advantage of the mean reverting characteristic of the derivative market and optimize the\ntiming of crossing the market so that the trade would have a high likelihood of being at the mid-market mark\nor better a few minutes after it was executed."}),"\n",(0,s.jsx)(r.p,{children:"The SpiderRock Connect model mimics how market makers behave and help market participants reducing their\ntransaction costs. When market makers trade against a customer order, they hedge immediately with stock.\nThe SpiderRock Connect model assumes the market maker gets out of both the option and stock positions 10 minutes\nlater at mid-market, thus realizing a profit on the option trade."}),"\n",(0,s.jsxs)(r.p,{children:["In the listed equity option market, exchange fees are typically plus or minus ",(0,s.jsxs)(r.span,{className:"katex",children:[(0,s.jsx)(r.span,{className:"katex-mathml",children:(0,s.jsx)(r.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(r.semantics,{children:[(0,s.jsxs)(r.mrow,{children:[(0,s.jsx)(r.mn,{children:"0.25"}),(0,s.jsx)(r.mi,{children:"t"}),(0,s.jsx)(r.mi,{children:"o"})]}),(0,s.jsx)(r.annotation,{encoding:"application/x-tex",children:"0.25 to "})]})})}),(0,s.jsx)(r.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(r.span,{className:"base",children:[(0,s.jsx)(r.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(r.span,{className:"mord",children:"0.25"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"t"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"o"})]})})]}),"0.50 per contract but\nthe total access cost when crossing blindly can easily be $3.00 or more per contract when factoring in market\nmakers\u2019 likely profitability. Technics to reduce this cost are becoming more and more relevant in the\nderivative space and involve a high level of expertise in both market structure and technologies applied to\ntrading derivatives."]}),"\n",(0,s.jsx)(r.h3,{id:"what-is-the-likely-cost-of-execution-pre-ca",children:"What is the likely cost of Execution... PRE-CA?"}),"\n",(0,s.jsx)(r.p,{children:"SpiderRock Connect is modeling the likely profitability of the market maker on a per trade basis, by archiving every\nprint in the marketplace, identifying whether it went up on the bid or offer with precision, and making\nassumptions on a variety of criteria such as high/low delta, volatility, volume, stock price, penny/non-penny\nstock and many more variables to characterize the trade. In essence the PRE-CA model represents a\nperformance benchmark across all listed options; what a customer pays the market is the reversed image of\nthe market maker profitability."}),"\n",(0,s.jsx)(r.h3,{id:"how-can-i-beat-the-benchmark",children:"How can I beat the benchmark?"}),"\n",(0,s.jsx)(r.p,{children:"As we mentioned above, precise micro-market dynamic measurement technics allows the market participant\nto take advantage of the mean reverting characteristic of the derivative market. At SpiderRock, we believe\nquality of execution is an inherent part of the transaction cost. We have engineered algorithmic execution\nstrategies to outperform the pre-CA benchmarks and give our clients the flexibility to be more or less\naggressive on fill rates. Some of the SpiderRock Connect Algorithms are calibrated on this 10-minute forward delta\nneutral PnL, and are being triggered only when user limits are not violated and the probability of this PnL\nmetric being positive reaches a certain threshold. More specifically, the SpiderRock Connect Algo engines continually\nscore every tick of the market for an opportunity of positive 10-minute delta neutral PnL metric. Our \u03B1Algos\nTAKER are designed to trigger an order to cross the market when such opportunity has a high enough\nprobability scoring. In addition, the client can couple dynamic posting strategies (\u03B1Algos MAKER), which can\nenhance fill quality and mitigate exchange fees by capturing maker rebates."}),"\n",(0,s.jsx)(r.p,{children:"Lastly, an important aspect of optimizing trading strategies is monitoring PnL in real time calculations\nthroughout the execution process. By enabling the execution PnL of a strategy to be monitored in real-time,\nand also allowing the strategy to use these calculations to adjust its own behavior, trading profits can be\nmaximized while risks are minimized. The SpiderRock Connect platform is an integrated system, which computes\nthese real time PnL calculations, and helps the client optimize trading strategies."}),"\n",(0,s.jsx)(r.h2,{id:"tca-metrics-glossary",children:"TCA Metrics Glossary"}),"\n",(0,s.jsx)(r.h3,{id:"parent-order-summary",children:"Parent Order Summary"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Variable/Measure"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Definition"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"FIX"}),(0,s.jsx)(r.td,{children:"Orders sent via FIX"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE"}),(0,s.jsx)(r.td,{children:"Orders sent via SRSE"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"GUI Tools"}),(0,s.jsx)(r.td,{children:"Orders sent via the GUI"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Other"}),(0,s.jsx)(r.td,{children:"Orders sent via OM, Legger orders, MLegResponse, Auction Strategy orders, etc."})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"child-order-summary",children:"Child Order Summary"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Variable/Measure"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Definition"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Child Orders"}),(0,s.jsx)(r.td,{children:"Average number of child orders sent per day"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Child Order Size"}),(0,s.jsx)(r.td,{children:"Average contract size of child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Contracts"}),(0,s.jsx)(r.td,{children:"Average number of filled contracts per day"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Contract Fill (%)"}),(0,s.jsx)(r.td,{children:"Average daily fill rate (filled contracts/total number of contracts sent)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Order Fill (%)"}),(0,s.jsx)(r.td,{children:"Average daily fill rate (filled orders/number of orders sent)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Price Improve / Cn"}),(0,s.jsxs)(r.td,{children:["Fill price vs. Bid or Ask price ",(0,s.jsx)("br",{})," If Buy, then Ask price - Fill price ",(0,s.jsx)("br",{})," If Sell, then Fill price - Bid price"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Near-Touch PnL"}),(0,s.jsxs)(r.td,{children:["Fill Price vs. Fill Bid or Ask price. ",(0,s.jsx)("br",{})," If Buy, then Fill Ask Prc - Fill Price. ",(0,s.jsx)("br",{})," If Sell, then Fill Price - Fill Bid Price."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Far-Touch PnL"}),(0,s.jsxs)(r.td,{children:["Fill Price vs. Arrival (Parent) Bid or Ask price. ",(0,s.jsx)("br",{})," If Buy, then Arrival Ask Prc - Fill Price. ",(0,s.jsx)("br",{})," If Sell then Fill Price - Arrival Bid Price."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Surf Edge / Cn"}),(0,s.jsxs)(r.td,{children:["Fill price vs. Surface price ",(0,s.jsx)("br",{})," If Buy, then Surface price - Fill price ",(0,s.jsx)("br",{})," If Sell, then Fill price - Surface price"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Fill Prob"}),(0,s.jsx)(r.td,{children:"Average fill probability per contract"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Short-tern Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Surface price T + 10min (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Day Dn Pnl / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. SpiderRock closing mark (delta neutral; delta at time of fill)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Arrival Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Parent order arrival time mid-mark (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1/2-Width Cost / Cn"}),(0,s.jsx)(r.td,{children:"(Ask price - Bid Price) / 2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Exchange fees / Cn"}),(0,s.jsxs)(r.td,{children:["Average exchange fees associated with fills ",(0,s.jsx)("br",{})," (Negative is a fee; Positive is a rebate)"]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"quote-benchmark-pnl-summary",children:"Quote Benchmark PnL Summary"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Variable/Measure"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Definition"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"High Liquidity"}),(0,s.jsxs)(r.td,{children:["Less than $0.05 spread - relative to $100 underlier ",(0,s.jsx)("br",{})," Ex: A $300 name will end up in this bucket if spread is less than $0.15."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mid Liquidity"}),(0,s.jsx)(r.td,{children:"Less than $0.25 spread - relative to $100 underlier"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Low Liquidity"}),(0,s.jsx)(r.td,{children:"$0.25 and above - relative to $100 underlier"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Symbols"}),(0,s.jsx)(r.td,{children:"Represent the three most active (by contract)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"<5 sec"}),(0,s.jsx)(r.td,{children:"Average order working time of 5 seconds"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"<5 min"}),(0,s.jsx)(r.td,{children:"Average order working time of 5 minutes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"> 5 mins"}),(0,s.jsx)(r.td,{children:"Average order working time of more than 5 minutes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Qwap PnL"}),(0,s.jsx)(r.td,{children:"Fill price vs. Average quoted market (mid-mark) over the life of an order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Qwap Dn PnL"}),(0,s.jsx)(r.td,{children:"Fill price vs. Average quoted market (mid-mark) over the life of an order (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"uDrift Qwap PnL"}),(0,s.jsx)(r.td,{children:"Underlying price drift over the life of an order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Qwap Fill Cns"}),(0,s.jsx)(r.td,{children:"Average daily number of filled contracts considered for the Qwap analysis"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"With Time (%)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Alone Time (%)"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"active-maker-details",children:"Active Maker Details"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Variable/Measure"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Definition"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"High Liquidity"}),(0,s.jsxs)(r.td,{children:["Less than $0.05 spread - relative to $100 underlier ",(0,s.jsx)("br",{})," Ex: A $300 name will end up in this bucket if spread is less than $0.15."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mid Liquidity"}),(0,s.jsx)(r.td,{children:"Less than $0.25 spread - relative to $100 underlier"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Low Liquidity"}),(0,s.jsx)(r.td,{children:"$0.25 and above - relative to $100 underlier"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Symbols"}),(0,s.jsx)(r.td,{children:"Represent the three most active (by contract)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Market Width"}),(0,s.jsx)(r.td,{children:"Average market width (not relative)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Orders"}),(0,s.jsx)(r.td,{children:"Number of active maker child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of BBO Joining Orders"}),(0,s.jsx)(r.td,{children:"Number of child orders joining the current BBO at send time"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of BBO Improving Orders"}),(0,s.jsx)(r.td,{children:"Number of child orders improving exchange BBO at send time"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of NBBO Joining Orders"}),(0,s.jsx)(r.td,{children:"Number of child orders joining the current NBBO at send time"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of NBBO Improving Orders"}),(0,s.jsx)(r.td,{children:"Number of child orders improving the current NBBO at send time"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Child Order Size"}),(0,s.jsx)(r.td,{children:"Average contract size of child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Child Duration(s)"}),(0,s.jsx)(r.td,{children:"Average life-span of the child orders in seconds"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Fills"}),(0,s.jsx)(r.td,{children:"Number of child orders that resulted in a fill or partial fill"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Contracts"}),(0,s.jsx)(r.td,{children:"Average number of filled contracts per day"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Abs Vega"}),(0,s.jsx)(r.td,{children:"Total absolute filled Vega (100 multiplier applies)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Abs Wt Vega"}),(0,s.jsxs)(r.td,{children:["Total absolute filled Vega normalized by volatility and time-to-expiration ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Cn * iVol * (0.25/years)"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Half-Width Cost / Cn"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.em,{children:"(AskPrice - BidPrice) / 2"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Short-Term Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Surface price T + 10min (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Day Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. SpiderRock closing mark (delta neutral; delta at time of fill)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Arrival Dn Pnl / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Parent order arrival time mid-mark (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Cross Impr / Cn"}),(0,s.jsx)(r.td,{children:"Price improvement weighted by fill size. If Buy, Order Ask minus Fill Price; if Sell, Fill Price minus Order Bid. Expressed in dollar terms."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Cross Impr (%)"}),(0,s.jsx)(r.td,{children:"Percentage-based price improvement relative to the spread. Calculated as total price improvement divided by the potential improvement (Order Ask minus Order Bid)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Surf Edge / Cn"}),(0,s.jsxs)(r.td,{children:["Fill price vs. Surface price ",(0,s.jsx)("br",{})," If Buy, then Surface price - Fill price ",(0,s.jsx)("br",{})," If Sell, then Fill price - Surface price"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Fill Prob"}),(0,s.jsx)(r.td,{children:"Average fill probability per contract"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Exchange fees / Cn"}),(0,s.jsxs)(r.td,{children:["Average exchange fees associated with fills ",(0,s.jsx)("br",{})," (Negative is a fee, Positive is a rebate)"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. (+) Limit Variations"}),(0,s.jsx)(r.td,{children:"Number of orders where child order fills were better than the limit price (computed at fill time)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(+) Slippage Contracts"}),(0,s.jsx)(r.td,{children:"Total number of contracts filled better than the limit price (computed at fill time)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(+) Limit Slippage / Cn"}),(0,s.jsx)(r.td,{children:"Average positive edge per contract when filled better than the limit price (computed at fill time)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. (-) Limit Variations"}),(0,s.jsx)(r.td,{children:"Number of orders where child order fills were worse than the limit price (computed at fill time)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(-) Slippage Contracts"}),(0,s.jsx)(r.td,{children:"Total number of contracts filled worse than the limit price (computed at fill time)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(-) Limit Slippage / Cn"}),(0,s.jsx)(r.td,{children:"Average negative edge per contract when filled better than the limit price (computed at fill time)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Low Priority Cxl"}),(0,s.jsx)(r.td,{children:"Any cancel not associated with an underlier change or a risk threshold violation"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of High Priority Cxl"}),(0,s.jsx)(r.td,{children:"Cancels associated with an underlier quote change or a risk threshold violation"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Fast Cancels"}),(0,s.jsxs)(r.td,{children:["Underlier print contingent cancels; ",(0,s.jsx)("br",{})," Takes place on street side gateways; ",(0,s.jsx)("br",{})," Lowest latency pathway"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. Fills After Cancel"}),(0,s.jsx)(r.td,{children:"Number of orders filled after a cancel is attempted"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Fill/Cancel Slippage / Cn"}),(0,s.jsx)(r.td,{children:"Average $ slippage per contract after a cancel is attempted"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. Cxl Attempted Contracts"}),(0,s.jsx)(r.td,{children:"Number of contracts filled after a cancel is attempted"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Low Priority Cxl Latency (ms)"}),(0,s.jsx)(r.td,{children:"Average latency of low priority cancel in milliseconds"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"High Priority Cxl Latency (ms)"}),(0,s.jsx)(r.td,{children:"Average latency of a high priority cancel in milliseconds"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"active-taker-details",children:"Active Taker Details"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Variable/Measure"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Definition"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"High Liquidity"}),(0,s.jsxs)(r.td,{children:["Less than $0.05 spread - relative to $100 underlier ",(0,s.jsx)("br",{})," Ex: A $300 name will end up in this bucket if spread is less than $0.15."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mid Liquidity"}),(0,s.jsx)(r.td,{children:"Less than $0.25 spread - relative to $100 underlier"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Low Liquidity"}),(0,s.jsx)(r.td,{children:"$0.25 and above - relative to $100 underlier"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Symbols"}),(0,s.jsx)(r.td,{children:"Represent the three most active (by contract)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Market Width"}),(0,s.jsx)(r.td,{children:"Average market width (not relative)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Orders"}),(0,s.jsx)(r.td,{children:"Number of active maker child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Child Order Size"}),(0,s.jsx)(r.td,{children:"Average contract size of child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Fills"}),(0,s.jsx)(r.td,{children:"Number of child orders that resulted in a fill or partial fill"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Contracts"}),(0,s.jsx)(r.td,{children:"Average number of filled contracts per day"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Contract Fill %"}),(0,s.jsxs)(r.td,{children:["Average daily fill rate ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Filled contracts/contracts sent"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Order Fill %"}),(0,s.jsxs)(r.td,{children:["Average daily fill rate ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Filled orders/orders sent"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Abs Vega"}),(0,s.jsx)(r.td,{children:"Total absolute filled Vega (100 multiplier applies)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Abs Wt Vega"}),(0,s.jsxs)(r.td,{children:["Total absolute filled Vega normalized by volatility and time-to-expiration ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Cn * iVol * (0.25/years)"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Half-Width Cost / Cn"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.em,{children:"(AskPrice - BidPrice) / 2"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Short-Term Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Surface price T + 10min (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Day Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. SpiderRock closing mark (delta neutral; delta at time of fill)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Arrival Dn Pnl / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Parent order arrival time mid-mark (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Surf Edge / Cn"}),(0,s.jsxs)(r.td,{children:["Fill price vs. Surface price ",(0,s.jsx)("br",{})," If Buy, then Surface price - Fill price ",(0,s.jsx)("br",{})," If Sell, then Fill price - Surface price"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Fill Prob"}),(0,s.jsx)(r.td,{children:"Average fill probability per contract"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Exchange fees / Cn"}),(0,s.jsxs)(r.td,{children:["Average exchange fees associated with fills ",(0,s.jsx)("br",{})," (Negative is a fee, Positive is a rebate)"]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"sweeper-details",children:"Sweeper Details"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Variable/Measure"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Definition"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Single-Line"}),(0,s.jsx)(r.td,{children:"One Strike per order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Multi-Line"}),(0,s.jsx)(r.td,{children:"Anything greater than 1 strike"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. NBBO Size"}),(0,s.jsx)(r.td,{children:"Average NBBO size at time of order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Orders"}),(0,s.jsx)(r.td,{children:"Number of child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Child Order Size"}),(0,s.jsx)(r.td,{children:"Average contract size of child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Order Fills"}),(0,s.jsx)(r.td,{children:"Number of child orders that resulted in a fill or partial fill"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Contracts"}),(0,s.jsx)(r.td,{children:"Average number of filled contracts per day"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Contract Fill %"}),(0,s.jsxs)(r.td,{children:["Average daily fill rate ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Filled contracts/contracts sent"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Order Fill %"}),(0,s.jsxs)(r.td,{children:["Average daily fill rate ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Filled orders/orders sent"})]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"spread-details",children:"Spread Details"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Variable/Measure"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Definition"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"COBs"}),(0,s.jsx)(r.td,{children:"Performance metrics associated to Spread orders sent to the Complex Order Books"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Marketable Leggers"}),(0,s.jsx)(r.td,{children:"Spread orders that will interact with the Central Limit Order books and are marketable at time of submission"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Non-Marketable Leggers"}),(0,s.jsx)(r.td,{children:"Spread orders that will interact with the Central Limit Order books and are non-marketable at time of submisison"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Market Width"}),(0,s.jsx)(r.td,{children:"Average market width (not relative)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Orders"}),(0,s.jsx)(r.td,{children:"Number of child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Child Order Size"}),(0,s.jsx)(r.td,{children:"Average contact size of child orders sent to exchanges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Fills"}),(0,s.jsx)(r.td,{children:"Number of child orders that resulted in a fill or partial fill"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Contracts"}),(0,s.jsx)(r.td,{children:"Average number of filled contracts per day"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Contract Fill %"}),(0,s.jsxs)(r.td,{children:["Average daily fill rate ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Filled contracts/contracts sent"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Abs Vega"}),(0,s.jsx)(r.td,{children:"Total absolute filled Vega (100 multiplier applies)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Abs Wt Vega"}),(0,s.jsxs)(r.td,{children:["Total absolute filled Vega normalized by volatility and time-to-expiration ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Cn * iVol * (0.25/years)"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Surf Edge / Cn"}),(0,s.jsxs)(r.td,{children:["Fill price vs. Surface price ",(0,s.jsx)("br",{})," If Buy, then Surface price - Fill price ",(0,s.jsx)("br",{})," If Sell, then Fill price - Surface price"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Fill Prob"}),(0,s.jsx)(r.td,{children:"Average fill probability per contract"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Short-Term Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Surface price T + 10min (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Day Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. SpiderRock closing mark (delta neutral; delta at time of fill)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Arrival Dn Pnl / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Parent order arrival time mid-mark (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Half-Width Cost / Cn"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.em,{children:"(AskPrice - BidPrice) / 2"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Exchange fees / Cn"}),(0,s.jsxs)(r.td,{children:["Average exchange fees associated with fills ",(0,s.jsx)("br",{})," (Negative is a fee, Positive is a rebate)"]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"auction-details",children:"Auction Details"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)("b",{children:"Note:"}),' In a TCA Report, the client will receive two separate Auction Detail tables - one titled "SPX" and one titled "Except SPX".']})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Variable/Measure"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Definition"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Single Exposure"}),(0,s.jsxs)(r.td,{children:["Single strike exposure auction detail ",(0,s.jsx)("br",{})," (Step up to NBBO / fast auction)"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Single Improve"}),(0,s.jsx)(r.td,{children:"Single strike price improvement auction detail"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLeg Exposure"}),(0,s.jsxs)(r.td,{children:["Multileg order exposure auction detail ",(0,s.jsx)("br",{})," (Step up to NBBO / fast auction)"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLeg Improve"}),(0,s.jsx)(r.td,{children:"Multileg order price improvement auction detail"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Market Width"}),(0,s.jsx)(r.td,{children:"Average market width (not relative)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Auc Responses"}),(0,s.jsx)(r.td,{children:"Total number of Auction Responses"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num. of Child Fills"}),(0,s.jsx)(r.td,{children:"Number of child orders that resulted in a fill or partial fill"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled contracts"}),(0,s.jsx)(r.td,{children:"Average number of filled contracts per day"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Resp. Size"}),(0,s.jsx)(r.td,{children:"Average number of contracts in auction response child orders"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Order Fill %"}),(0,s.jsxs)(r.td,{children:["Average daily fill rate ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Filled orders/Order sent"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Abs Vega"}),(0,s.jsx)(r.td,{children:"Total absolute filled Vega (100 multiplier applies)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filled Abs Wt Vega"}),(0,s.jsxs)(r.td,{children:["Total absolute filled Vega normalized by volatility and time-to-expiration ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.em,{children:"Cn * iVol * (0.25/years)"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Surf Edge / Cn"}),(0,s.jsxs)(r.td,{children:["Fill price vs. Surface price ",(0,s.jsx)("br",{})," If Buy, then Surface price - Fill price ",(0,s.jsx)("br",{})," If Sell, then Fill price - Surface price"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avg. Fill Prob"}),(0,s.jsx)(r.td,{children:"Average fill probability per contract"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Short-Term Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Surface price T + 10min (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Day Dn PnL / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. SpiderRock closing mark (delta neutral; delta at time of fill)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Arrival Dn Pnl / Cn"}),(0,s.jsx)(r.td,{children:"Fill price vs. Parent order arrival time mid-mark (delta neutral)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Half-Width Cost / Cn"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.em,{children:"(AskPrice - BidPrice) / 2"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Exchange fees / Cn"}),(0,s.jsxs)(r.td,{children:["Average exchange fees associated with fills ",(0,s.jsx)("br",{})," (Negative is a fee, Positive is a rebate)"]})]})]})]})]})}function o(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},91503:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return l}});var i=t(75271);let s={},n=i.createContext(s);function l(e){let r=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);
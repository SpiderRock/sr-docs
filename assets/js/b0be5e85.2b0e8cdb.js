"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38569],{64624:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>n,toc:()=>a});var t=r(74848),d=r(28453);const s={title:"Option Algos"},l=void 0,n={id:"Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/OptionAlgos",title:"Option Algos",description:"Algo Overview",source:"@site/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/1.OptionAlgos.md",sourceDirName:"Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms",slug:"/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/OptionAlgos",permalink:"/docs/next/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/OptionAlgos",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Option Algos"},sidebar:"documentationSidebar",previous:{title:"Execution Algorithms",permalink:"/docs/next/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/"},next:{title:"Hedging Algos",permalink:"/docs/next/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/HedgingAlgos"}},c={},a=[{value:"Algo Overview",id:"algo-overview",level:2},{value:"Sweep Algos",id:"sweep-algos",level:3},{value:"Volatility Algos",id:"volatility-algos",level:3},{value:"Multi-leg Algos",id:"multi-leg-algos",level:3},{value:"Alpha Taking Algos",id:"alpha-taking-algos",level:3},{value:"Alpha Making Algos",id:"alpha-making-algos",level:3},{value:"Facilitation Algos",id:"facilitation-algos",level:3},{value:"Sweep Algos",id:"sweep-algos-1",level:2},{value:"Corresponding FIX Tags",id:"corresponding-fix-tags",level:4},{value:"Volatility Algos",id:"volatility-algos-1",level:2},{value:"Corresponding FIX Tags",id:"corresponding-fix-tags-1",level:4},{value:"Multi-Leg Algos",id:"multi-leg-algos-1",level:2},{value:"Corresponding FIX Tags",id:"corresponding-fix-tags-2",level:4},{value:"Alpha Taking Algos",id:"alpha-taking-algos-1",level:2},{value:"Corresponding FIX Tags",id:"corresponding-fix-tags-3",level:4},{value:"Alpha Making Algos",id:"alpha-making-algos-1",level:2},{value:"Corresponding FIX Tags",id:"corresponding-fix-tags-4",level:4},{value:"Corresponding Alpha Taking and Making Algos",id:"corresponding-alpha-taking-and-making-algos",level:2},{value:"Corresponding FIX Tags",id:"corresponding-fix-tags-5",level:4},{value:"Common Order Parameters",id:"common-order-parameters",level:2}];function h(e){const i={h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"algo-overview",children:"Algo Overview"}),"\n",(0,t.jsx)(i.h3,{id:"sweep-algos",children:"Sweep Algos"}),"\n",(0,t.jsx)(i.p,{children:"Sweep algorithms enable a synchronized order delivery mechanism to multiple exchanges to maximize liquidity capture."}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Users can send marketable limit orders to the engine to maximize liquidity capture."}),(0,t.jsx)("li",{children:"Orders will automatically route to the optimal exchange(s) based on exchange fees and available liquidity."}),(0,t.jsx)("li",{children:"Orders can interact with off-exchange liquidity pools to increase available liquidity and reduce exchange fees."})]}),"\n",(0,t.jsx)(i.h3,{id:"volatility-algos",children:"Volatility Algos"}),"\n",(0,t.jsx)(i.p,{children:"Volatility algorithms enable orders with dynamic price or volatility limits to accurately represent client's trading intent in fast markets."}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"User seeks best possible fill relative to limit provided. SpiderRock Connect supports a number of tied-to-underlier limit types including volatility and price + delta limits."}),(0,t.jsx)("li",{children:"Orders will automatically route to the optimal exchange(s) based on exchange fees and available liquidity."})]}),"\n",(0,t.jsx)(i.h3,{id:"multi-leg-algos",children:"Multi-leg Algos"}),"\n",(0,t.jsx)(i.p,{children:"Multi-leg algorithms enable spread orders to sweep available liquidity across Exchange COBs or working orders in single-leg markets."}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Spread orders (up to 6 option legs and 1 stock leg) can seek liquidity on Exchange COBs or source liquidity across multiple single-leg exchanges."}),(0,t.jsx)("li",{children:"Spread limit price can be static or tied to the underlying instrument."}),(0,t.jsx)("li",{children:"Options fills can be automatically hedged / legging style orders can include an auto-complete slippage and a leg size exposure parameter."})]}),"\n",(0,t.jsx)(i.h3,{id:"alpha-taking-algos",children:"Alpha Taking Algos"}),"\n",(0,t.jsx)(i.p,{children:"Alpha taking algorithms reduce transaction costs by timing the release of marketable limit orders based on dynamic surface limits or probability limits."}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Orders wait for actionable opportunity to remove liquidity so that fills are statistically targeting a mid-market or better fill a few minutes forward."}),(0,t.jsx)("li",{children:"Probability calculations are inclusive of expected exchange fees."}),(0,t.jsx)("li",{children:"Alpha probabilities are recomputed continuously as market data changes."})]}),"\n",(0,t.jsx)(i.h3,{id:"alpha-making-algos",children:"Alpha Making Algos"}),"\n",(0,t.jsx)(i.p,{children:"Alpha making algorithms reduce transaction costs by posting and moving orders into exchange order books based on dynamic surface limits or probability limits."}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Orders are almost always liquidity-adding orders on exchange and can include a traditional static or tied-to-underlier limit."}),(0,t.jsx)("li",{children:"Algo instructions specify how much orders can improve markets."}),(0,t.jsx)("li",{children:"Probability calculations are inclusive of expected exchange fees and expected depth profile when adding a new order to an exchange order book."})]}),"\n",(0,t.jsx)(i.h3,{id:"facilitation-algos",children:"Facilitation Algos"}),"\n",(0,t.jsx)(i.p,{children:"Facilitation algorithms enable client firms to submit facilitation orders to exchanges for public exposure prior to crossing with firm interest."}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Crossing algos can be used to either maximize or minimize firm interaction with client orders."}),(0,t.jsx)("li",{children:"Orders will sweep all available liquidity or create space to facilitate via exchange auction mechanisms."}),(0,t.jsx)("li",{children:"Client can leverage SpiderRock alpha probabilities to make real-time facilitation decisions."})]}),"\n",(0,t.jsx)(i.h2,{id:"sweep-algos-1",children:"Sweep Algos"}),"\n",(0,t.jsx)(i.p,{children:"Sweep algos maximize liquidity capture with immediately marketable limit orders on products that are multiply listed."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Order type:"})," Simple market orders without an explicit destination."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Mechanism:"})," SpiderRock Connect optimizes the child-order delivery to available exchanges in order to either minimize exchange fees when attempting to trade less than visible size, or maximize liquidity capture when attempting to trade visible size or more."]}),"\n",(0,t.jsx)(i.h4,{id:"corresponding-fix-tags",children:"Corresponding FIX Tags"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"GUI Tool"}),(0,t.jsx)(i.th,{children:"FIX Tag"}),(0,t.jsx)(i.th,{children:"FIX Value"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Order Type"}),(0,t.jsx)(i.td,{children:"ActiveTaker"}),(0,t.jsx)(i.td,{children:"5094"}),(0,t.jsx)(i.td,{children:"1"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Post Type"}),(0,t.jsx)(i.td,{children:"NoPost"}),(0,t.jsx)(i.td,{children:"5096"}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Limit Class"}),(0,t.jsx)(i.td,{children:"Simple"}),(0,t.jsx)(i.td,{children:"5102"}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Limit Class"}),(0,t.jsx)(i.td,{children:"Simple"}),(0,t.jsx)(i.td,{children:"5100"}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type"}),(0,t.jsx)(i.td,{children:"Market"}),(0,t.jsx)(i.td,{children:"5098"}),(0,t.jsx)(i.td,{children:"0"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"volatility-algos-1",children:"Volatility Algos"}),"\n",(0,t.jsx)(i.p,{children:"Volatility algos work an order at the best possible price relative to the user-limit expressed in volatility or price + delta based."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Order Type:"})," Simple dynamic limit orders that are sensitive to exchange fee/rebate profiles"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Mechanism:"})," SpiderRock Connect's execution engines will dynamically determine the best venue based primarily on exchange fees followed by available liquidity, and will cancel and replace child orders as the underlier price moves to accurately represent client trading intent."]}),"\n",(0,t.jsx)(i.h4,{id:"corresponding-fix-tags-1",children:"Corresponding FIX Tags"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"GUI Tool"}),(0,t.jsx)(i.th,{children:"FIX Tag"}),(0,t.jsx)(i.th,{children:"FIX Value"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Order Type"}),(0,t.jsx)(i.td,{children:"ActiveTaker"}),(0,t.jsx)(i.td,{children:"5094"}),(0,t.jsx)(i.td,{children:"1"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Post Type"}),(0,t.jsx)(i.td,{children:"PostLimit"}),(0,t.jsx)(i.td,{children:"5096"}),(0,t.jsx)(i.td,{children:"4"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Limit Class"}),(0,t.jsx)(i.td,{children:"Simple"}),(0,t.jsx)(i.td,{children:"5102"}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Limit Class"}),(0,t.jsx)(i.td,{children:"Simple"}),(0,t.jsx)(i.td,{children:"5100"}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type if Vol"}),(0,t.jsx)(i.td,{children:"Mid, Cross, Market"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"5098"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type if Prc"}),(0,t.jsx)(i.td,{children:"Market, MarketArrival, Prc, PrcDe, PrcDeX, PrcDeT, PrcDeP, PrcDeXT, PrcDeXP, Vol, VolX, PrcV, PrcVX, VolPrc, RelMid, RelJoin, RelCross, SmrtFast, SmrtNorm, RelTurn"}),(0,t.jsx)(i.td,{children:"5098"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"multi-leg-algos-1",children:"Multi-Leg Algos"}),"\n",(0,t.jsx)(i.p,{children:"The SpiderRock spread order handler offers enhanced ways to source liquidity by sweeping the complex order books (COBs) or work orders in single-leg markets."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Order Type:"})," Simple dynamic limit orders that are sensitive to exchange fee/rebate profiles"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Mechanism:"})," Spread orders are comprised of a maximum of 6 option legs and 1 stock leg. They are either static limit orders or have a price + delta limit tied to an underlying symbol. They can post liquidity or wait to be marketable before being represented in the market. They can also be auto-hedged with the corresponding underlying instrument."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Mechanism/Algo Settings:"})," Spread orders can be sent up to 3 different COBs. If any responses are received and the parent order remains unfilled, the parent order balance will be moved to the exchange with the best response. If no responses are received, the order will either be left on the COB (Seeker) or switched to the MultiLegLegger handle depending on the order type selected. This handler can source liquidity across multiple single-leg exchanges. While this handler attempts to fill the order in discrete leg packages, it does have legging risk. Users can choose not to post liquidity and wait until some number of spread units become marketable, or post liquidity to compete more aggressively with public interest."]}),"\n",(0,t.jsx)(i.h4,{id:"corresponding-fix-tags-2",children:"Corresponding FIX Tags"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"GUI Tool"}),(0,t.jsx)(i.th,{children:"FIX Tag"}),(0,t.jsx)(i.th,{children:"FIX Value"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Order Type"}),(0,t.jsx)(i.td,{children:"Seeker, Seek/Leg, Legger, Facilitate"}),(0,t.jsx)(i.td,{children:"5094"}),(0,t.jsx)(i.td,{children:"9, 10, 8, 6"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Post Type"}),(0,t.jsx)(i.td,{children:"NoPost, PostWith, PostTurn, PostImpr, PostLimit, PostLmtW, PostWithF"}),(0,t.jsx)(i.td,{children:"5096"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3, 4, 5, 7"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Limit Class,"}),(0,t.jsx)(i.td,{children:"Simple, Surface, Probability, mksurf|tkprob"}),(0,t.jsx)(i.td,{children:"5102"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Limit Class"}),(0,t.jsx)(i.td,{children:"Simple, Surface, Probability, mksurf|tkprob"}),(0,t.jsx)(i.td,{children:"5100"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type"}),(0,t.jsx)(i.td,{children:"Market, MarketArrival, Prc, PrcDe, PrcDeX, PrcDeT, PrcDeP, PrcDeXT, PrcDeXP, Vol, VolX, PrcV, PrcVX, VolPrc, RelMid, RelJoin, RelCross, SmrtFast, SmrtNorm, RelTurn"}),(0,t.jsx)(i.td,{children:"5098"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Exposure"}),(0,t.jsx)(i.td,{children:"10%, 20$, 50%, 100%"}),(0,t.jsx)(i.td,{children:"5046"}),(0,t.jsx)(i.td,{children:"Integer (%)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Slippage"}),(0,t.jsx)(i.td,{children:"Pennies (num field)"}),(0,t.jsx)(i.td,{children:"5204"}),(0,t.jsx)(i.td,{children:"Price"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Lead"}),(0,t.jsx)(i.td,{children:"Buy, Sell, Any"}),(0,t.jsx)(i.td,{children:"5202"}),(0,t.jsx)(i.td,{children:"1, 2, 0"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"alpha-taking-algos-1",children:"Alpha Taking Algos"}),"\n",(0,t.jsx)(i.p,{children:"Alpha taking algos reduce transaction costs by timing the release of marketable limit orders based on surface limits or probability limits."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Order Type:"})," These orders are marketable limit orders triggered by the SpiderRock dynamic surface (+ or \u2013 an offset) or alpha probabilities. Users can express the probability at which they want to work an order. Parent orders are discretionary and wait for an actionable opportunity. Orders don\u2019t necessarily fill."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Mechanism/Algo Settings:"})," Orders remain dark until triggered by a secondary limit (Surface or Probability). Alpha probabilities are numerical estimates of expected short term profitability of the available price points at or between the current public bid and offer and are derived from SpiderRock machine learning algorithms."]}),"\n",(0,t.jsx)(i.h4,{id:"corresponding-fix-tags-3",children:"Corresponding FIX Tags"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"GUI Tool"}),(0,t.jsx)(i.th,{children:"FIX Tag"}),(0,t.jsx)(i.th,{children:"FIX Value"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Order Type"}),(0,t.jsx)(i.td,{children:"ActiveTaker"}),(0,t.jsx)(i.td,{children:"5094"}),(0,t.jsx)(i.td,{children:"1"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Post Type"}),(0,t.jsx)(i.td,{children:"NoPost"}),(0,t.jsx)(i.td,{children:"5096"}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Limit Class"}),(0,t.jsx)(i.td,{children:"Surface, Probability, mksurf|tkprob"}),(0,t.jsx)(i.td,{children:"5100"}),(0,t.jsx)(i.td,{children:"1, 2, 3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type if Vol"}),(0,t.jsx)(i.td,{children:"Mid, Cross, Market"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"5098"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type if Prc"}),(0,t.jsx)(i.td,{children:"Market, MarketArrival, Prc, PrcDe, PrcDeX, PrcDeT, PrcDeP, PrcDeXT, PrcDeXP, Vol, VolX, PrcV, PrcVX, VolPrc, RelMid, RelJoin, RelCross, SmrtFast, SmrtNorm, RelTurn"}),(0,t.jsx)(i.td,{children:"5098"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Surface Limit"}),(0,t.jsx)(i.td,{children:"Prc Offset ask, Prc Offset bid"}),(0,t.jsx)(i.td,{children:"5518, 5536"}),(0,t.jsx)(i.td,{children:"Price"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Probability Alpha Type"}),(0,t.jsx)(i.td,{children:"Static, Relative, Eagle, Hawk, Falcon"}),(0,t.jsx)(i.td,{children:"5128"}),(0,t.jsx)(i.td,{children:"1, 5, 3, 2, 4"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Probability Limit"}),(0,t.jsx)(i.td,{children:"If Static: set TakeLimit (Num)"}),(0,t.jsx)(i.td,{children:"5136"}),(0,t.jsx)(i.td,{children:"float"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"alpha-making-algos-1",children:"Alpha Making Algos"}),"\n",(0,t.jsx)(i.p,{children:"Alpha making algos reduce transaction costs by posting liquidity based on dynamic surface limits or probability limits (which are often better the NBBO)."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Order Type:"})," These orders are non-marketable limit orders that are designed to never remove liquidity. These orders typically have a primary user-supplied limit, which acts as a top or bottom limit, and a secondary limit expressed as a + or - offset from the SpiderRock surface, or leaning on the SpiderRock alpha probabilities. Orders are discretionary resting orders and may not fill."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Mechanism/Algo settings:"})," Orders will post in the market at levels that are computed from the effective limit, which is the tightest of the user-supplied limit and the secondary limit (based on the Surface or Probability). The limit at which the order is represented in the market is highly dynamic and will generate a number of cancels/replaces to achieve the desired level of execution."]}),"\n",(0,t.jsx)(i.h4,{id:"corresponding-fix-tags-4",children:"Corresponding FIX Tags"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"GUI Tool"}),(0,t.jsx)(i.th,{children:"FIX Tag"}),(0,t.jsx)(i.th,{children:"FIX Value"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Order Type"}),(0,t.jsx)(i.td,{children:"PostOnly"}),(0,t.jsx)(i.td,{children:"5094"}),(0,t.jsx)(i.td,{children:"2"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Post Type"}),(0,t.jsx)(i.td,{children:"PostWith, PostTurn, PostImpr, PostLimit, PostLmtW, PostWithF, PostFlash"}),(0,t.jsx)(i.td,{children:"5096"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3, 4, 5, 7"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Limit Class"}),(0,t.jsx)(i.td,{children:"Surface, Probability"}),(0,t.jsx)(i.td,{children:"5102"}),(0,t.jsx)(i.td,{children:"1, 2, 3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type if Vol"}),(0,t.jsx)(i.td,{children:"Mid, Cross, Market"}),(0,t.jsx)(i.td,{children:"5098"}),(0,t.jsx)(i.td,{children:"9, 10, 0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type if Prc"}),(0,t.jsx)(i.td,{children:"Market, MarketArrival, Prc, PrcDe, PrcDeX, PrcDeT, PrcDeP, PrcDeXT, PrcDeXP, Vol, VolX, PrcV, PrcVX, VolPrc, RelMid, RelJoin, RelCross, SmrtFast, SmrtNorm, RelTurn"}),(0,t.jsx)(i.td,{children:"5098"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Surface Limit"}),(0,t.jsx)(i.td,{children:"Prc Offset ask, Prc Offset bid"}),(0,t.jsx)(i.td,{children:"5518, 5536"}),(0,t.jsx)(i.td,{children:"Price"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Probability Alpha Type"}),(0,t.jsx)(i.td,{children:"Static, Relative, Eagle, Hawk, Falcon"}),(0,t.jsx)(i.td,{children:"5130"}),(0,t.jsx)(i.td,{children:"1, 5, 3, 2, 4"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Probability Limit"}),(0,t.jsx)(i.td,{children:"If Static: set MakeLimit (Num)"}),(0,t.jsx)(i.td,{children:"5138"}),(0,t.jsx)(i.td,{children:"float"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"corresponding-alpha-taking-and-making-algos",children:"Corresponding Alpha Taking and Making Algos"}),"\n",(0,t.jsx)(i.p,{children:"Alpha Taking and Alpha Making algos can be combined. Users will post in the market, if the limit becomes marketable the taking component of the algo will take that price."}),"\n",(0,t.jsx)(i.h4,{id:"corresponding-fix-tags-5",children:"Corresponding FIX Tags"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"GUI Tool"}),(0,t.jsx)(i.th,{children:"FIX Tag"}),(0,t.jsx)(i.th,{children:"FIX Value"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Order Type"}),(0,t.jsx)(i.td,{children:"ActiveTaker"}),(0,t.jsx)(i.td,{children:"5094"}),(0,t.jsx)(i.td,{children:"1"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Post Type"}),(0,t.jsx)(i.td,{children:"PostWith, PostTurn, PostImpr, PostLimit, PostLmtW, PostWithF, PostFlash"}),(0,t.jsx)(i.td,{children:"5096"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3, 4, 5, 7"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Limit Class"}),(0,t.jsx)(i.td,{children:"Surface, Probability, mksurf|tkprob"}),(0,t.jsx)(i.td,{children:"5100"}),(0,t.jsx)(i.td,{children:"1, 2, 3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Limit Class,"}),(0,t.jsx)(i.td,{children:"Simple, Surface, Probability, mksurf|tkprob"}),(0,t.jsx)(i.td,{children:"5102"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type if Vol"}),(0,t.jsx)(i.td,{children:"Mid, Cross, Market"}),(0,t.jsx)(i.td,{children:"5098"}),(0,t.jsx)(i.td,{children:"9, 10, 0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Type if Prc"}),(0,t.jsx)(i.td,{children:"Market, MarketArrival, Prc, PrcDe, PrcDeX, PrcDeT, PrcDeP, PrcDeXT, PrcDeXP, Vol, VolX, PrcV, PrcVX, VolPrc, RelMid, RelJoin, RelCross, SmrtFast, SmrtNorm, RelTurn"}),(0,t.jsx)(i.td,{children:"5098"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Surface Limit"}),(0,t.jsx)(i.td,{children:"Prc Offset ask, Prc Offset bid"}),(0,t.jsx)(i.td,{children:"5518, 5536"}),(0,t.jsx)(i.td,{children:"Price"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Probability Alpha Type"}),(0,t.jsx)(i.td,{children:"Static, Relative, Eagle, Hawk, Falcon"}),(0,t.jsx)(i.td,{children:"5128"}),(0,t.jsx)(i.td,{children:"1, 5, 3, 2, 4"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Probability Alpha Type"}),(0,t.jsx)(i.td,{children:"Static, Relative, Eagle, Hawk, Falcon"}),(0,t.jsx)(i.td,{children:"5130"}),(0,t.jsx)(i.td,{children:"1, 5, 3, 2, 4"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Take Probability Limit"}),(0,t.jsx)(i.td,{children:"If Static: set TakeLimit (Num)"}),(0,t.jsx)(i.td,{children:"5136"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Make Probability Limit"}),(0,t.jsx)(i.td,{children:"If Static: set MakeLimit (Num)"}),(0,t.jsx)(i.td,{children:"5138"}),(0,t.jsx)(i.td,{children:"float"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"common-order-parameters",children:"Common Order Parameters"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Common Order Modifiers"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"FIX Tag"}),(0,t.jsx)(i.th,{children:"FIX Value"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Start Type"}),(0,t.jsx)(i.td,{children:"Immediate, WaitTrigger, Staged"}),(0,t.jsx)(i.td,{children:"5090"}),(0,t.jsx)(i.td,{children:"0, 1, 2"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ActiveOrderSize"}),(0,t.jsx)(i.td,{children:"(num)"}),(0,t.jsx)(i.td,{children:"5044"}),(0,t.jsx)(i.td,{children:"int"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"TimeInForce"}),(0,t.jsx)(i.td,{children:"Day, IOC, GTD, ExtDay, Week, ExtWeek"}),(0,t.jsx)(i.td,{children:"5084"}),(0,t.jsx)(i.td,{children:"1, 2, 3, 4, 5, 6"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderDuration"}),(0,t.jsx)(i.td,{children:"(num)seconds"}),(0,t.jsx)(i.td,{children:"5086"}),(0,t.jsx)(i.td,{children:"int"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"GoodTillDttm"}),(0,t.jsx)(i.td,{children:"UTC Timestamp"}),(0,t.jsx)(i.td,{children:"5088"}),(0,t.jsx)(i.td,{children:"datetime"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"AltRouteCode"}),(0,t.jsx)(i.td,{children:"Alternative child order route code"}),(0,t.jsx)(i.td,{children:"5028"}),(0,t.jsx)(i.td,{children:"string"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Strategy"}),(0,t.jsx)(i.td,{children:"Text strategy field"}),(0,t.jsx)(i.td,{children:"5034"}),(0,t.jsx)(i.td,{children:"string"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Exchanges"}),(0,t.jsx)(i.td,{children:"Comma-separated exchange list, default=all"}),(0,t.jsx)(i.td,{children:"5082"}),(0,t.jsx)(i.td,{children:"string"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"MaxExposureSize"}),(0,t.jsx)(i.td,{children:"Maximum exposure size of order"}),(0,t.jsx)(i.td,{children:"5046"}),(0,t.jsx)(i.td,{children:"int"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"NumMakeExchanges"}),(0,t.jsx)(i.td,{children:"Number of public exchanges to post"}),(0,t.jsx)(i.td,{children:"5048"}),(0,t.jsx)(i.td,{children:"int"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"PublicSize"}),(0,t.jsx)(i.td,{children:"None, Randomize, MktSize, FullSize"}),(0,t.jsx)(i.td,{children:"5050"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CanCxlOverlap"}),(0,t.jsx)(i.td,{children:"Yes, No"}),(0,t.jsx)(i.td,{children:"5052"}),(0,t.jsx)(i.td,{children:"Y, N"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"MaxChildOrders"}),(0,t.jsx)(i.td,{children:"Upper bound for the number of child orders"}),(0,t.jsx)(i.td,{children:"5080"}),(0,t.jsx)(i.td,{children:"int"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"TwapSliceCount"}),(0,t.jsx)(i.td,{children:"Number of TWAP slices (default = 1)"}),(0,t.jsx)(i.td,{children:"5056"}),(0,t.jsx)(i.td,{children:"int"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"TakeReach"}),(0,t.jsx)(i.td,{children:"Immediate, Delayed, Passive, WeakOnly"}),(0,t.jsx)(i.td,{children:"5104"}),(0,t.jsx)(i.td,{children:"0, 1, 2, 3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderPriceOffset"}),(0,t.jsx)(i.td,{children:"default = 0"}),(0,t.jsx)(i.td,{children:"5126"}),(0,t.jsx)(i.td,{children:"price"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderPrcLimit"}),(0,t.jsx)(i.td,{children:"If LimitType = Prc"}),(0,t.jsx)(i.td,{children:"5106"}),(0,t.jsx)(i.td,{children:"price"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"TakeAlphaFactor"}),(0,t.jsx)(i.td,{children:"For relative probability limit"}),(0,t.jsx)(i.td,{children:"5132"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"MakeAlphaFactor"}),(0,t.jsx)(i.td,{children:"For relative probability limit"}),(0,t.jsx)(i.td,{children:"5134"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"MaxAccDayDDeltaLn"}),(0,t.jsx)(i.td,{children:"max account day $delta long (num)"}),(0,t.jsx)(i.td,{children:"5253"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"MaxAccDayDDeltaSh"}),(0,t.jsx)(i.td,{children:"max account day $delta short (num)"}),(0,t.jsx)(i.td,{children:"5254"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"MaxSymDayDDeltaLn"}),(0,t.jsx)(i.td,{children:"max symbol day $delta long (num)"}),(0,t.jsx)(i.td,{children:"5259"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"MaxSymDayDDeltaSh"}),(0,t.jsx)(i.td,{children:"max symbol day $delta short (num)"}),(0,t.jsx)(i.td,{children:"5260"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderRefUPrc"}),(0,t.jsx)(i.td,{children:"stock reference price, default = 0"}),(0,t.jsx)(i.td,{children:"5108"}),(0,t.jsx)(i.td,{children:"price"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderRefDelta"}),(0,t.jsx)(i.td,{children:"Reference delta, default = option delta"}),(0,t.jsx)(i.td,{children:"5110"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderRefGamma"}),(0,t.jsx)(i.td,{children:"Reference delta, default = option gamma"}),(0,t.jsx)(i.td,{children:"5112"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderRefTheta"}),(0,t.jsx)(i.td,{children:"Reference theta, default = option theta"}),(0,t.jsx)(i.td,{children:"5114"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderRefMetric1"}),(0,t.jsx)(i.td,{children:"User-supplied custom risk metric #1"}),(0,t.jsx)(i.td,{children:"5192"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderRefMetric2"}),(0,t.jsx)(i.td,{children:"User-supplied custom risk metric #2"}),(0,t.jsx)(i.td,{children:"5194"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderRefMetric3"}),(0,t.jsx)(i.td,{children:"User-supplied custom risk metric #3"}),(0,t.jsx)(i.td,{children:"5196"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderRefMetric4"}),(0,t.jsx)(i.td,{children:"User-supplied custom risk metric #4"}),(0,t.jsx)(i.td,{children:"5198"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"OrderVolLimit"}),(0,t.jsx)(i.td,{children:"if LmtType=Vol, VolX,VolPrc. Igrored if LmtType=Market"}),(0,t.jsx)(i.td,{children:"5116"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"RateOverride"}),(0,t.jsx)(i.td,{children:"ignore is 0, if > 0, override"}),(0,t.jsx)(i.td,{children:"5118"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"SDivOverride"}),(0,t.jsx)(i.td,{children:"SDivOverride"}),(0,t.jsx)(i.td,{children:"5120"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"DDivOverride"}),(0,t.jsx)(i.td,{children:"Discrete Div Override"}),(0,t.jsx)(i.td,{children:"5122"}),(0,t.jsx)(i.td,{children:"string"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srOverrideCode"}),(0,t.jsx)(i.td,{children:"is LimitType = Vol, SDivOnly, DDivOnly, Both"}),(0,t.jsx)(i.td,{children:"5124"}),(0,t.jsx)(i.td,{children:"S, D, B"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMakeSurfacePrcOffset"}),(0,t.jsx)(i.td,{children:"default = 0"}),(0,t.jsx)(i.td,{children:"5144"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srTakeSurfacePrcOffset"}),(0,t.jsx)(i.td,{children:"default = 0"}),(0,t.jsx)(i.td,{children:"5410"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMakeSurfaceVolOffset"}),(0,t.jsx)(i.td,{children:"default = 0"}),(0,t.jsx)(i.td,{children:"5146"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srTakeSurfaceVolOffset"}),(0,t.jsx)(i.td,{children:"default = 0"}),(0,t.jsx)(i.td,{children:"5142"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srCxlUPrcRange"}),(0,t.jsx)(i.td,{children:"Cancel order is outside stock price range"}),(0,t.jsx)(i.td,{children:"5072"}),(0,t.jsx)(i.td,{children:"Y, N"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMinUBid"}),(0,t.jsx)(i.td,{children:"Will hold if outside min stock price"}),(0,t.jsx)(i.td,{children:"5074"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMaxUAsk"}),(0,t.jsx)(i.td,{children:"Will hold if outside max stock price"}),(0,t.jsx)(i.td,{children:"5076"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMinOptionPx"}),(0,t.jsx)(i.td,{children:"Option floor price for tied to stock orders"}),(0,t.jsx)(i.td,{children:"5078"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srAutoHedge"}),(0,t.jsx)(i.td,{children:"NoHedge, FastCrx, AutoCrx, AutoTrn, AutoMid, SpdrAuto, Spdr10S, Spdr30S, Spdr90S, Spdr5M, Spdr30M, Static"}),(0,t.jsx)(i.td,{children:"5152"}),(0,t.jsx)(i.td,{children:"N, X, F, S, M, A, 1, 3, 9, 5, H, T"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srAutoHedgeSSaleFlag"}),(0,t.jsx)(i.td,{children:"Long, Short, Exempt, Auto, Open, Close, Cover, NA"}),(0,t.jsx)(i.td,{children:"5172"}),(0,t.jsx)(i.td,{children:"1, 2, 3, 4, 5, 6, 8, 7"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srAutoHedgeClOrdID"}),(0,t.jsx)(i.td,{children:"Required if AutoHedge enabled. ClOrdld that will be used on hedge execution"}),(0,t.jsx)(i.td,{children:"5010"}),(0,t.jsx)(i.td,{children:"string"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMaxAccDayWtVegaLn"}),(0,t.jsx)(i.td,{children:"max account day wvega (time-weighted) short"}),(0,t.jsx)(i.td,{children:"5251"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMaxAccDayWtVegaSh"}),(0,t.jsx)(i.td,{children:"max account day wvega (time-weighted) long"}),(0,t.jsx)(i.td,{children:"5252"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMaxExpDayWtVegaLn"}),(0,t.jsx)(i.td,{children:"max account+expiration day wvega (time-weighted) long"}),(0,t.jsx)(i.td,{children:"5255"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMaxExpDayWtVegaSh"}),(0,t.jsx)(i.td,{children:"max account+expiration day wvega (time-weighted) short"}),(0,t.jsx)(i.td,{children:"5256"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMaxSymDayWtVegaLn"}),(0,t.jsx)(i.td,{children:"max account+symbol day vega long"}),(0,t.jsx)(i.td,{children:"5257"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"srMaxSymDayWtVegaSh"}),(0,t.jsx)(i.td,{children:"max account+symbol day vega short"}),(0,t.jsx)(i.td,{children:"5258"}),(0,t.jsx)(i.td,{children:"float"})]})]})]})]})}function o(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>n});var t=r(96540);const d={},s=t.createContext(d);function l(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);
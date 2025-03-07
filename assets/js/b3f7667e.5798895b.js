"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81348],{97187:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=r(74848),t=r(28453);const n={title:"Progression Algos"},o=void 0,l={id:"Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/ProgressionAlgos",title:"Progression Algos",description:"Progression rule algos all work parent orders in distinct quantity slices at increasing levels of aggressiveness. SpiderRock Connect categorizes progression algos as follows:",source:"@site/versioned_docs/version-8.5.3.1/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/3.ProgressionAlgos.md",sourceDirName:"Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms",slug:"/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/ProgressionAlgos",permalink:"/docs/8.5.3.1/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/ProgressionAlgos",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",sidebarPosition:3,frontMatter:{title:"Progression Algos"},sidebar:"documentationSidebar",previous:{title:"Hedging Algos",permalink:"/docs/8.5.3.1/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/HedgingAlgos"},next:{title:"Execution Risk Controls",permalink:"/docs/8.5.3.1/Documentation/PlatformFeatures/OrderManagement/ExecutionRiskControl"}},a={},d=[{value:"How do they work?",id:"how-do-they-work",level:2},{value:"Passive Mode",id:"passive-mode",level:3},{value:"Moderate Mode",id:"moderate-mode",level:3},{value:"Aggressive Mode",id:"aggressive-mode",level:3},{value:"Try Take Mode",id:"try-take-mode",level:3},{value:"Legger Mode",id:"legger-mode",level:3},{value:"Common Progression Algo Questions",id:"common-progression-algo-questions",level:2},{value:"Progression Algo Summary",id:"progression-algo-summary",level:2}];function c(e){const s={em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Progression rule algos all work parent orders in distinct quantity slices at increasing levels of aggressiveness. SpiderRock Connect categorizes progression algos as follows:"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"TwapAlpha:"})," A progression algo that is intended to work for the full duration of the parent order. This algo determines a slice size, count, and target duration. It then works the next slice in increasing levels of aggressiveness until the slice either fills or the order reaches a client-specified top. If a slice fills before its target time has elapsed, the algo waits until the fully allotted time has passed, before switching to the next slice."]}),"\n",(0,i.jsx)(s.p,{children:"TwapAlpha is available for equities, options, futures, and MLEG orders. There is also a variation for equities called TwapAlphaC that will promote any parent order balance into the primary equity closing auction just before auction cutoff time as a market on close order. Please note that any limits in place will not be followed for a TWAPAlphaC order. SRSE and FIX users can define their own participation level in the closing auction by populating the Vwap participation field in the order gateway or tag 5058, via FIX."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"VwapAlpha:"})," This algo is similar to TwapAlpha except that it waits until the volume traded in the market is getting large enough for the SpiderRock Connect system to move to the next slice rather than waiting for the target slice time to elapse. For example, a 1% VwapAlpha with an order size of 1,000 shares would wait for the current slice to fully fill and for the market to trade 100,000 shares before moving to the next slice. We also enforce a half-second delay after the fill occurs before moving to the next slice."]}),"\n",(0,i.jsx)(s.p,{children:"VwapAlpha is available for equities and futures. Similar to TWAPAlphaC there is a variation for equities called VwapAlphaC that interacts with the equity closing auctions in the same manner. This is also available for auto-hedges at 1,2,5 & 25% levels."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SpdrPulse:"})," This algo is similar to TwapAlpha and VwapAlpha. What differentiates SpdrPulse is that it switches to the next slices immediately after the prior one fills. The default duration for each SpdrPulse slice is 30 seconds but can be set on each individual parent order. SpdrPulse is available for equities, futures, options, and MLEG orders."]}),"\n",(0,i.jsx)(s.p,{children:"SpdrPulse is designed to work each parent order in distinct slices, therefore each slice starts shortly after the previous slice is completed. This implies that fully filling a parent order with N slices requires at least N child orders."}),"\n",(0,i.jsx)(s.h2,{id:"how-do-they-work",children:"How do they work?"}),"\n",(0,i.jsx)(s.p,{children:"Progression algos work by breaking parent orders into distinct quantity slices. Slices are then worked in the market at increasing levels of aggressiveness. These algos typically progress through the following aggressiveness modes:"}),"\n",(0,i.jsx)(s.h3,{id:"passive-mode",children:"Passive Mode"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"ActiveMaking + ActiveTaking (Mid-Market Minus)"})}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"ActiveMaking in this mode will use standard PostLimit balance handling rules and will post orders at levels slightly better than fair mid-market. Orders left in an exchange order book will be canceled/replaced as the underlier moves around (options) or as the SR probability values (ML model) change (stock and futures)."}),(0,i.jsx)("li",{children:"ActiveTaking will immediately cross and take if the opposite side scores at least a 50% Alpha Probability (stock, futures, and options). Note that there is no ActiveTaking for COB orders in this mode."})]}),"\n",(0,i.jsx)(s.h3,{id:"moderate-mode",children:"Moderate Mode"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"ActiveMaking + ActiveTaking (Mid-Market Plus)"})}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"ActiveMaking switches to PostImprove and steps up (in minimum tick increments if necessary) to a more aggressive posting level that is slightly worse than a fair mid-market price."}),(0,i.jsx)("li",{children:"ActiveTaking becomes more aggressive and will take at a 40% (options) or 49% (stock and futures) probability. There is no ActiveTaking for COB orders in this mode as well."})]}),"\n",(0,i.jsx)(s.h3,{id:"aggressive-mode",children:"Aggressive Mode"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"ActiveMaking (Full Parent Limit) + ActiveTaking (Mid-Market Plus)"})}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"ActiveMaking continues with PostImprove and steps up (in minimum tick increments if necessary) to the full parent order limit (primary + secondary)."}),(0,i.jsx)("li",{children:"Note that all aggressive mode ActiveMaking orders are Add Liquidity Only orders and will not aggressively cross a live market."}),(0,i.jsx)("li",{children:"ActiveTaking continues as in moderate mode."})]}),"\n",(0,i.jsx)(s.h3,{id:"try-take-mode",children:"Try Take Mode"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"ActiveTaking (Full Parent Limit / Cross Market)"})}),"\n",(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"The ActiveTaking restrictions are relaxed, and orders can fully cross the market and take unless prevented by a client-supplied parent order limit (primary and/or secondary). For stock, future, and option single-leg orders, we will directly initiate trading in this mode. For MLEG orders, we will send orders into an exchange COB order book that will touch the corresponding NBBO leg market."})}),"\n",(0,i.jsx)(s.h3,{id:"legger-mode",children:"Legger Mode"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"MLeg Orders Only (Full Parent Limit / Cross Market) [Optional]"})}),"\n",(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"If enabled, this will promote the balance of the slice to aggressive taking in the individual leg markets. This requires that the full parent limit is marketable to proceed but can ensure that an individual slice is executed at the best possible leg market price."})}),"\n",(0,i.jsx)(s.h2,{id:"common-progression-algo-questions",children:"Common Progression Algo Questions"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"What are the primary parent order parameters that are user selectable?"})}),"\n",(0,i.jsxs)(s.p,{children:["Parent Limit: Primary (Prc, Vol, PrcDe, etc.) and/or Secondary (Surface or Probability) ",(0,i.jsx)("br",{}),"\nNumber of Slices [1 \u2013 100]: default = 4 (adjusted based on size of order and remain order duration). ",(0,i.jsx)("i",{children:"This is currently only configurable via SRSE or FIX, progressSliceCnt(tag 5056)"})," ",(0,i.jsx)("br",{}),"\nSlice Duration [min 1s]: default = 30s (Pulse, Vwap) or target order duration / #slices (Twap). Cannot exceed the remaining order duration. ",(0,i.jsx)("br",{}),"\nMLEG Orders: COB Only (Seeker) or COB + Legger (Seeker/Legger)"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Will my progression algo order always fill completely?"})}),"\n",(0,i.jsx)(s.p,{children:"If you supply parent order limits (primary and secondary) that are fully marketable then you should expect your progression algo order to fill completely, unless there is a good reason not to fill (market is halted, no remaining risk room, no available locate, etc)."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"What do I do if I always want my parent limit to allow the market to be crossed?"})}),"\n",(0,i.jsxs)(s.p,{children:["Tickets: Use Market order without secondary limits. ",(0,i.jsx)("br",{}),"\nSRSE: Use OrderLimitType = Market, MakeLimitClass = Simple, TakeLimitClass = Simple"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"How does a progression algo catch up if it is temporarily unable to continue (ex.: market is temporarily halted or the parent order limit temporarily prevents completion of a slice)?"})}),"\n",(0,i.jsx)(s.p,{children:"Progression algos will continue working the current slice until it completes and then re-compute the progression parameters (number of slices, slice size, and/or slice duration) necessary to complete the order on schedule if it is possible to do so."}),"\n",(0,i.jsx)(s.h2,{id:"progression-algo-summary",children:"Progression Algo Summary"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"TwapAlpha"}),(0,i.jsx)(s.th,{children:"VWapAlpha"}),(0,i.jsx)(s.th,{children:"SpdrPulse"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Description"}),(0,i.jsx)(s.td,{children:"Long-lasting order type, slices orders in equal chunks of time and size and works at increasing levels of aggressiveness within each slice"}),(0,i.jsx)(s.td,{children:"Order type working in volume slices and working at increasing levels of aggressiveness within each slice"}),(0,i.jsx)(s.td,{children:"Potentially short-lasting order type that probes markets and slices orders to work at increasing levels of aggressiveness"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Available for Equities"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Available for Futures"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Available for Options"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Available for Single-leg Order"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Available for Multi-leg Order"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Work in passive/moderate/aggressive modes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Single-leg orders use both Making/Taking Logic"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Multi-leg orders use Making logic only"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"N/A"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Works for full order duration"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Might not"}),(0,i.jsx)(s.td,{children:"Might not"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Waits for slice time to end"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Might not"}),(0,i.jsx)(s.td,{children:"Might not"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Waits for slice volume target"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"No"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Closing auction feature"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"No"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"User-selectable Order Parameters"})})}),(0,i.jsx)(s.td,{children:"---"}),(0,i.jsx)(s.td,{children:"---"}),(0,i.jsx)(s.td,{children:"---"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Default value for number of slices"}),(0,i.jsx)(s.td,{children:"4 (adjusted on size of order)"}),(0,i.jsx)(s.td,{children:"4 (adjusted on size of order)"}),(0,i.jsx)(s.td,{children:"4 (adjusted on size of order)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Default slice duration"}),(0,i.jsx)(s.td,{children:"Order duration / # of slices"}),(0,i.jsx)(s.td,{children:"30 sec"}),(0,i.jsx)(s.td,{children:"30 sec"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Primary limit supported"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Secondary limit supported"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Yes"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>l});var i=r(96540);const t={},n=i.createContext(t);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);
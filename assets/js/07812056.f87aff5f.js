"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3442],{81058:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>o});var t=i(74848),s=i(28453);const n={title:"Execution Algorithms",sidebar_position:2},d=void 0,a={id:"Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/ExecutionAlgorithms",title:"Execution Algorithms",description:"SpiderRock execution algorithms are the collection of behaviors that are possible with SpiderRock SpdrParentOrder messages and their associated execution engine ParentBrokers. These ParentBrokers, in turn, can generate child orders that take liquidity, rest in exchange order books, initiate and respond to ATS auctions, respond to exchange auctions, and interact with other execution venues and systems in a variety of ways.",source:"@site/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/ExecutionAlgorithms.md",sourceDirName:"Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms",slug:"/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/",permalink:"/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Execution Algorithms",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Order Management",permalink:"/docs/Documentation/PlatformFeatures/OrderManagement/"},next:{title:"Hedging Algos",permalink:"/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/HedgingAlgos"}},l={},o=[{value:"Primary and Secondary Order Limits",id:"primary-and-secondary-order-limits",level:2},{value:"Primary Order Limit",id:"primary-order-limit",level:3},{value:"Secondary Order Limit(s)",id:"secondary-order-limits",level:3},{value:"ActiveTaker Algo Family (parentOrderHandling = &#39;ActiveTaker&#39;)",id:"activetaker-algo-family-parentorderhandling--activetaker",level:2},{value:"ActiveMaker Algo Family (parentBalanceHandling = <em>MakerAlgo</em>)",id:"activemaker-algo-family-parentbalancehandling--makeralgo",level:2},{value:"Progression Algos (progressRule = <em>ProgressionAlgo</em>)",id:"progression-algos-progressrule--progressionalgo",level:2},{value:"Market/Limit On Open/Close Child Orders",id:"marketlimit-on-openclose-child-orders",level:2},{value:"DMA Child Orders",id:"dma-child-orders",level:2},{value:"Auction Response Orders",id:"auction-response-orders",level:2}];function c(e){const r={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["SpiderRock execution algorithms are the collection of behaviors that are possible with SpiderRock ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," messages and their associated execution engine ParentBrokers. These ParentBrokers, in turn, can generate child orders that take liquidity, rest in exchange order books, initiate and respond to ATS auctions, respond to exchange auctions, and interact with other execution venues and systems in a variety of ways."]}),"\n",(0,t.jsx)(r.p,{children:"These execution algorithms are integrated into our OMS/EMS trading tools and can also be accessed programmatically via FIX, MLink or SRSE for clients who wish to build higher level systematic execution and trading strategies using the SpiderRock platform."}),"\n",(0,t.jsx)(r.h2,{id:"primary-and-secondary-order-limits",children:"Primary and Secondary Order Limits"}),"\n",(0,t.jsx)(r.p,{children:"All of our algo order handling frameworks feature split (primary and secondary) client limit price handling.  Clients directly supply the primary limit, either as a static limit or a simple formula based limit (volatility, delta/gamma adjusted, etc). The secondary limit is computed from a combination of an offset the client has supplied and a live fair market value that SpiderRock supplies. The effective limit when creating or canceling child orders is then the combination of the primary and secondary limit."}),"\n",(0,t.jsx)(r.p,{children:"For example, a BUY order with a primary limit of $1.00 and a secondary offset of +$0.01 with the SpiderRock fair market value at $0.95 would have an effective limit of $0.96 (minimum of the primary and instantaneous secondary limit)."}),"\n",(0,t.jsx)(r.h3,{id:"primary-order-limit",children:"Primary Order Limit"}),"\n",(0,t.jsx)(r.p,{children:"All parent order are required to have a primary client limit. This limit can be expressed a number of ways include:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"SecType"}),(0,t.jsx)(r.th,{children:"Details"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Market"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"Client limit will be set to several increment through the prevailing BBO market. Not available if there is no BBO market or the market is halted."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MarketArrival"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"Client limit is set to touch the opposite side of the BBO market on arrival and is not adjusted further."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Prc"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"Client limit is the orderPrcLimit value."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PrcDe"}),(0,t.jsx)(r.td,{children:"option, spread"}),(0,t.jsx)(r.td,{children:"Client limit is initially the orderPrcLimit but then delta/gamma adjusted based on underlier BBO mid-market, orderRefUPrc, orderRefDelta, and orderRefGamma. xRef values will default to SpiderRock values on arrival if not supplied."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PrcDeX"}),(0,t.jsx)(r.td,{children:"option, spread"}),(0,t.jsx)(r.td,{children:"Similar to PrcDe except the live market reference underlier BBO bid or ask that is most aggressive when hedging."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PrcDeT"}),(0,t.jsx)(r.td,{children:"option, spread"}),(0,t.jsx)(r.td,{children:"Similar to PrcDe but include a theta (time-decay) component as well."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PrcDeP"}),(0,t.jsx)(r.td,{children:"option, spread"}),(0,t.jsx)(r.td,{children:"Similar to PrcDe except that the effect limit price cannot become more aggressive than the original orderPrcLimit."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PrcDeXT"}),(0,t.jsx)(r.td,{children:"option, spread"}),(0,t.jsx)(r.td,{children:"Similar to PrcDeX but includes a theta (time-decay) component as well."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PrcDeXP"}),(0,t.jsx)(r.td,{children:"option, spread"}),(0,t.jsx)(r.td,{children:"Similar to PrcDeX and PrcDeP. Order is protected by the original orderPrcLimit and is adjusted based on BBO bid or ask instead of mid."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Vol"}),(0,t.jsx)(r.td,{children:"option"}),(0,t.jsx)(r.td,{children:"Client limit is the price calculated from orderVolLimit using underlier BBO mid-market and SpiderRock default pricing values including years, rate, sdiv, and discrete dividends. Pricing displayed on SR tools will generally match pricing in our execution engines, including if pricing overrides have been applied at the point where the order was created."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"VolX"}),(0,t.jsx)(r.td,{children:"option"}),(0,t.jsx)(r.td,{children:"Similar to VolX except instead of mid-market the live underlier BBO reference value will be the least aggressive of the bid or ask."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PrcV"}),(0,t.jsx)(r.td,{children:"option"}),(0,t.jsx)(r.td,{children:"Client supplied both orderLimitPrc. Spider computes an implied volatility on arrival from the client orderPrcLimit and treats the order as a Vol type order at the arrival implied vol level."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PrcVX"}),(0,t.jsx)(r.td,{children:"option"}),(0,t.jsx)(r.td,{children:"Similar to PrcV except the underlier reference is BBO bid or ask instead of mid."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RelMid"}),(0,t.jsx)(r.td,{children:"stock"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RelJoin"}),(0,t.jsx)(r.td,{children:"stock"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RelCross"}),(0,t.jsx)(r.td,{children:"stock"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SmrtFast"}),(0,t.jsx)(r.td,{children:"stock"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SmrtNorm"}),(0,t.jsx)(r.td,{children:"stock"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RelTurn"}),(0,t.jsx)(r.td,{children:"stock"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"UPrcPct"}),(0,t.jsx)(r.td,{children:"option, spread"}),(0,t.jsx)(r.td,{children:"effective limit price = uPrcPct * underlier BBO mid-market."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PkgNeutral"}),(0,t.jsx)(r.td,{children:"spread w/stock"}),(0,t.jsx)(r.td,{children:"effective limit price = orderPrcLimit + 0.01 * stockDir * stockShares * orderRefUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RcPrem"}),(0,t.jsx)(r.td,{children:"rev/con"}),(0,t.jsx)(r.td,{children:"effective limit price = orderPrcLimit + strikeDir * Strike"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SynthLimitMM"}),(0,t.jsx)(r.td,{children:"synthetic"}),(0,t.jsx)(r.td,{children:"effective limit price = underlier BBO (mid) + orderPrcLimit."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SynthLimitBW"}),(0,t.jsx)(r.td,{children:"synthetic"}),(0,t.jsx)(r.td,{children:"effective limit price = underlier BBO (best way) + orderPrcLimit"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SynthLimitWW"}),(0,t.jsx)(r.td,{children:"synthetic"}),(0,t.jsx)(r.td,{children:"effective limit price = underlier BBO (worst way) + orderPrcLimit"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Aux"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"A corresponding ParentLimit is required. Limit details are supplied in that record."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"NoLimit"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"Client actively declines to supply a limit.  This option is generally only valid in special situations."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"If the primary client limit is dynamic (tied to the underlier or other markets) it will be continually recomputed and applied both when creating new child orders and also as a cancel condition for working child orders."}),"\n",(0,t.jsx)(r.h3,{id:"secondary-order-limits",children:"Secondary Order Limit(s)"}),"\n",(0,t.jsx)(r.p,{children:"Parent orders can also have secondary order limits that work along side (in addition to) the client supplied primary order limit.  These secondary limits are based on offsets to a SpiderRock supplied fair mid-market value and often used as the more tactile limit control for working child orders in a market."}),"\n",(0,t.jsx)(r.p,{children:"Secondary limits can be set relative to a SpiderRock surface dynamic volatility model (options only) or relative to a ML based fair market value, or both. Independent secondary limits can be set for ActiveMaker and ActiveTaker algo."}),"\n",(0,t.jsx)(r.p,{children:"Using a SpiderRock surface volatility model client can express an offset in either premium, volatility, or market width terms (or a combination) for any options market with a valid SpiderRock surface."}),"\n",(0,t.jsx)(r.p,{children:"Using a SpiderRock ML/probability model clients can specify a secondary limit as a probability [0-1] value where 0.50 = fair mid-market and values greater than 0.50 are more passive (better probability of a positive PnL). The fair market price (0.50) points are computed from ML models designed for each asset class which include information from the market in question as well as related markets and are frequently recomputed. The the associated ML probability distribution widths reflect expected market print scatter as well as market drift over relatively short time horizons. As a result, a probability specification of 0.60 would result in an effective limit price that, if executed, would have a 60% chance of being better than the average expected print in the subject market."}),"\n",(0,t.jsx)(r.p,{children:"All SpiderRock fair market models are statistical in nature and it is not possible to guarantee the performance of any particular order or effective limit. For clients who wish to experiment with these types of orders in a simulated trading context we offer special trading accounts (T.XXX) that allow fake trading with live market data and high quality exchange simulators."}),"\n",(0,t.jsx)(r.h2,{id:"activetaker-algo-family-parentorderhandling--activetaker",children:"ActiveTaker Algo Family (parentOrderHandling = 'ActiveTaker')"}),"\n",(0,t.jsx)(r.p,{children:"The ActiveTaker algo family instructs a ParentBroker to send child orders that will actively take liquidity only if/when all order conditions are met.  If an order is marketable these algo handlers optimize liquidity taking across all available exchanges, including with respect to fees and available liquidity.  Active taker orders range from aggressive (take all available liquidity letting as little as possible escape) to passive (wait patiently for a high probability opportunity to take)."}),"\n",(0,t.jsx)(r.p,{children:"ActiveTaker option orders can also, in some circumstances, start flash auctions in the SpiderRock Connect ATS. This is typically to either seek liquidity in wider markets ahead of fully crossing, to seek more liquidity that is available at NBBO, or to attempt to trade at a lower fee that would be required to take liquidity on a public exchange."}),"\n",(0,t.jsx)(r.p,{children:"ActiveTaker order handling is also a component of our most complex progression algos that break orders up and work them over time."}),"\n",(0,t.jsx)(r.p,{children:"The following parameters control active taking behavior:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"ReachRule"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Delayed"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Passive"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"WeakOnly"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"FullSize"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ISOSweep"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RespondOnly"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsxs)(r.h2,{id:"activemaker-algo-family-parentbalancehandling--makeralgo",children:["ActiveMaker Algo Family (parentBalanceHandling = ",(0,t.jsx)(r.em,{children:"MakerAlgo"}),")"]}),"\n",(0,t.jsx)(r.p,{children:"The ActiveMaker algo family instructs a ParentBroker to send resting child orders or quotes into exchange order books. The child orders are never immediately marketable when created within our execution engines and are subject to both primary and secondary limit constraints as well as other ActiveMaker balance handling behaviors. The often include maker size controls that limit their size profile in exchange order books."}),"\n",(0,t.jsx)(r.p,{children:"ActiveMaker orders range from passive (post orders in an exchange order book behind a fair mid-market value) to aggressive (post orders through a fair mid-market level but behind the opposite touch market price)."}),"\n",(0,t.jsx)(r.p,{children:"ActiveMaker orders can be used in combination with ActiveTaker orders to create hybrid order handling, including at split limit levels. ActiveMaker orders are also a core component of our longer running progression algo."}),"\n",(0,t.jsx)(r.p,{children:"The following parent order parameters control active making behavior:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"MakerAlgo"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostWith"}),(0,t.jsx)(r.td,{children:"Posts child orders with BBO"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostTurn"}),(0,t.jsx)(r.td,{children:"Turn NBBO one time"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostImprove"}),(0,t.jsx)(r.td,{children:"Turn NBBO, improve again if joined"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostLimit"}),(0,t.jsx)(r.td,{children:"Post to limit price (primary + secondary/offset)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostWthF"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostImprvR"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostFlash"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostFlashW"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostPeg"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PostFlashI"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"PublicSize"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Randomize"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MktSize"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"FullSize"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MktSizeA"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MktSizeB"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MktSizeC"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"FullSizeR"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Max25Pct"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Max50Pct"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Max75Pct"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"ExchRule"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MaxPart"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"FeeOptimal"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ImprvOnly"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"FeeStrict"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RoundRobin"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ProRataOptim"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsxs)(r.h2,{id:"progression-algos-progressrule--progressionalgo",children:["Progression Algos (progressRule = ",(0,t.jsx)(r.em,{children:"ProgressionAlgo"}),")"]}),"\n",(0,t.jsx)(r.p,{children:"Progression algos are available for stock, futures, and options. They typically work by breaking an order in several slices (up to 20 depending on order size and duration and client request) and work an order one slice at a time. Individual slices can step from more passive to more aggressive while the slice is working.  They can trigger flash auctions prior to crossing markets and put an order balance in the exchange closing auctions (if one exists).  They can actively take (including leg) public markets at the end of slices. And they always honor a clients primary limit, even at the cost of not completing a progression sequence."}),"\n",(0,t.jsx)(r.p,{children:"Progression algos can be configured to work in simple time/slice steps (TWAP handling) or more dynamic print volume/slice steps (VWAP handling) that directly match the velocity of child order release with the public trading volume."}),"\n",(0,t.jsx)(r.p,{children:"The following parameters control progression algo behaviors:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"ProgressionAlgo"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Twap"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Vwap"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TwapReset"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"VwapReset"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"FastReset"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SlowReset"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TwapAlpha"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"VwapAlpha"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TwapAlphaC"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"VwapAlphaC"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SpdrPulse"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"marketlimit-on-openclose-child-orders",children:"Market/Limit On Open/Close Child Orders"}),"\n",(0,t.jsx)(r.p,{children:"Parent order algo handlers can place child orders in exchange opening or closing auctions and have integrated these child orders into some of our progression algos as well."}),"\n",(0,t.jsx)(r.h2,{id:"dma-child-orders",children:"DMA Child Orders"}),"\n",(0,t.jsx)(r.p,{children:"Simple algo handlers that generate zero or one child order with a static limit price are called DMA algo handlers within our execution engines.  If the resulting child order terminates the ParentBroker that generated will either auto-close (direct orders) or go into an active hold state (staged orders) pending further instructions."}),"\n",(0,t.jsx)(r.p,{children:"DMA orders can be sent to exchanges (sometimes useful as they have no requirement that the target or underlier market is open and are somewhat less restricted that our normal algo child orders). They can also be sent to other brokers and venues (we sometimes call these away orders) if appropriate routes have been established."}),"\n",(0,t.jsx)(r.h2,{id:"auction-response-orders",children:"Auction Response Orders"}),"\n",(0,t.jsx)(r.p,{children:"Parent orders responding to either exchange auction notices or our ATS notices must include a SpiderRock auction notice ID. We then immediately generated a responsive child order for the notice."}),"\n",(0,t.jsx)(r.p,{children:"These orders are subject to all normal parent order handling rules and risk checks and can go through a StageReview sequence (if client systems are fast enough)."})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>a});var t=i(96540);const s={},n=t.createContext(s);function d(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
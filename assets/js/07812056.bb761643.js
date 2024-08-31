"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3442],{81058:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=t(74848),s=t(28453);const n={title:"Execution Algorithms",sidebar_position:2},a=void 0,o={id:"Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/ExecutionAlgorithms",title:"Execution Algorithms",description:"SpiderRock Connect execution algorithms are the collection of behaviors that are possible with SpiderRock Connect SpdrParentOrder messages and their associated execution engine ParentBrokers. These ParentBrokers, in turn, can generate child orders that take liquidity, rest in exchange order books, initiate and respond to ATS auctions, respond to exchange auctions, and interact with other execution venues and systems in a variety of ways.",source:"@site/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/ExecutionAlgorithms.md",sourceDirName:"Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms",slug:"/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/",permalink:"/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Execution Algorithms",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Order Management",permalink:"/docs/Documentation/PlatformFeatures/OrderManagement/"},next:{title:"Option Algos",permalink:"/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms/OptionAlgos"}},d={},l=[{value:"Primary and Secondary Order Limits",id:"primary-and-secondary-order-limits",level:2},{value:"Primary Order Limit",id:"primary-order-limit",level:3},{value:"Secondary Order Limit(s)",id:"secondary-order-limits",level:3},{value:"ActiveTaker Algo Family",id:"activetaker-algo-family",level:2},{value:"ActiveMaker Algo Family",id:"activemaker-algo-family",level:2},{value:"Progression Algos",id:"progression-algos",level:2},{value:"Market/Limit On Open/Close Child Orders",id:"marketlimit-on-openclose-child-orders",level:2},{value:"DMA Child Orders",id:"dma-child-orders",level:2},{value:"Auction Response Orders",id:"auction-response-orders",level:2}];function c(e){const i={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["SpiderRock Connect execution algorithms are the collection of behaviors that are possible with SpiderRock Connect ",(0,r.jsx)(i.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,r.jsx)(i.em,{children:"SpdrParentOrder"})})," messages and their associated execution engine ParentBrokers. These ParentBrokers, in turn, can generate child orders that take liquidity, rest in exchange order books, initiate and respond to ATS auctions, respond to exchange auctions, and interact with other execution venues and systems in a variety of ways."]}),"\n",(0,r.jsx)(i.p,{children:"These execution algorithms are integrated into our OMS/EMS trading tools and can also be accessed programmatically via FIX, MLink or SRSE for clients who wish to build higher level systematic execution and trading strategies using the SpiderRock Connect platform."}),"\n",(0,r.jsx)(i.h2,{id:"primary-and-secondary-order-limits",children:"Primary and Secondary Order Limits"}),"\n",(0,r.jsx)(i.p,{children:"All of our algo order handling frameworks feature split (primary and secondary) client limit price handling.  Clients directly supply the primary limit, either as a static limit or a simple formula based limit (volatility, delta/gamma adjusted, etc). The secondary limit is computed from a combination of an offset the client has supplied and a live fair market value that SpiderRock Connect supplies. The effective limit when creating or canceling child orders is then the combination of the primary and secondary limit."}),"\n",(0,r.jsx)(i.p,{children:"For example, a BUY order with a primary limit of $1.00 and a secondary offset of +$0.01 with the SpiderRock fair market value at $0.95 would have an effective limit of $0.96 (minimum of the primary and instantaneous secondary limit)."}),"\n",(0,r.jsx)(i.h3,{id:"primary-order-limit",children:"Primary Order Limit"}),"\n",(0,r.jsx)(i.p,{children:"All parent order are required to have a primary client limit. This limit can be expressed in a number of ways, including:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"SecType"}),(0,r.jsx)(i.th,{children:"Details"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Market"}),(0,r.jsx)(i.td,{children:"any"}),(0,r.jsx)(i.td,{children:"Client limit will be set to several increment through the prevailing BBO market. Not available if there is no BBO market or the market is halted."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"MarketArrival"}),(0,r.jsx)(i.td,{children:"any"}),(0,r.jsx)(i.td,{children:"Client limit is set to touch the opposite side of the BBO market on arrival and is not adjusted further."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Prc"}),(0,r.jsx)(i.td,{children:"any"}),(0,r.jsx)(i.td,{children:"Client limit is the orderPrcLimit value."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PrcDe"}),(0,r.jsx)(i.td,{children:"option, spread"}),(0,r.jsx)(i.td,{children:"Client limit is initially the orderPrcLimit but then delta/gamma adjusted based on underlier BBO mid-market, orderRefUPrc, orderRefDelta, and orderRefGamma. xRef values will default to SpiderRock values on arrival if not supplied."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PrcDeX"}),(0,r.jsx)(i.td,{children:"option, spread"}),(0,r.jsx)(i.td,{children:"Similar to PrcDe except the live market reference underlier BBO bid or ask that is most aggressive when hedging."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PrcDeT"}),(0,r.jsx)(i.td,{children:"option, spread"}),(0,r.jsx)(i.td,{children:"Similar to PrcDe but include a theta (time-decay) component as well."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PrcDeP"}),(0,r.jsx)(i.td,{children:"option, spread"}),(0,r.jsx)(i.td,{children:"Similar to PrcDe except that the effect limit price cannot become more aggressive than the original orderPrcLimit."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PrcDeXT"}),(0,r.jsx)(i.td,{children:"option, spread"}),(0,r.jsx)(i.td,{children:"Similar to PrcDeX but includes a theta (time-decay) component as well."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PrcDeXP"}),(0,r.jsx)(i.td,{children:"option, spread"}),(0,r.jsx)(i.td,{children:"Similar to PrcDeX and PrcDeP. Order is protected by the original orderPrcLimit and is adjusted based on BBO bid or ask instead of mid."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Vol"}),(0,r.jsx)(i.td,{children:"option"}),(0,r.jsx)(i.td,{children:"Client limit is the price calculated from orderVolLimit using underlier BBO mid-market and SpiderRock default pricing values including years, rate, sdiv, and discrete dividends. Pricing displayed on SR tools will generally match pricing in our execution engines, including if pricing overrides have been applied at the point where the order was created."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"VolX"}),(0,r.jsx)(i.td,{children:"option"}),(0,r.jsx)(i.td,{children:"Similar to VolX except instead of mid-market the live underlier BBO reference value will be the least aggressive of the bid or ask."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PrcV"}),(0,r.jsx)(i.td,{children:"option"}),(0,r.jsx)(i.td,{children:"Client supplied both orderLimitPrc. Spider computes an implied volatility on arrival from the client orderPrcLimit and treats the order as a Vol type order at the arrival implied vol level."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PrcVX"}),(0,r.jsx)(i.td,{children:"option"}),(0,r.jsx)(i.td,{children:"Similar to PrcV except the underlier reference is BBO bid or ask instead of mid."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"RelMid"}),(0,r.jsx)(i.td,{children:"stock"}),(0,r.jsxs)(i.td,{children:["This limit works in conjunction with the size release ",(0,r.jsx)("br",{})," Immediate: Limit will be put at mid-market and won't change ",(0,r.jsx)("br",{})," Fast reset: Limit will be put at mid-market and reset on and off every 15 seconds ",(0,r.jsx)("br",{})," Slow reset: Limit will be put at mid-market and reset on and off every minute"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"RelJoin"}),(0,r.jsx)(i.td,{children:"stock"}),(0,r.jsx)(i.td,{children:"Same as above, but the limit will be on the bid if buying and on the offer if selling"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"RelCross"}),(0,r.jsx)(i.td,{children:"stock"}),(0,r.jsx)(i.td,{children:"Same as above, but limit will cross the market"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"RelTurn"}),(0,r.jsx)(i.td,{children:"stock"}),(0,r.jsx)(i.td,{children:"Same as above, but limit will turn the market by one price increment"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"UPrcPct"}),(0,r.jsx)(i.td,{children:"option, spread"}),(0,r.jsx)(i.td,{children:"effective limit price = uPrcPct * underlier BBO mid-market."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PkgNeutral"}),(0,r.jsx)(i.td,{children:"spread w/stock"}),(0,r.jsx)(i.td,{children:"effective limit price = orderPrcLimit + 0.01 * stockDir * stockShares * orderRefUPrc"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"RcPrem"}),(0,r.jsx)(i.td,{children:"rev/con"}),(0,r.jsx)(i.td,{children:"effective limit price = orderPrcLimit + strikeDir * Strike"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"SynthLimitMM"}),(0,r.jsx)(i.td,{children:"synthetic"}),(0,r.jsx)(i.td,{children:"effective limit price = underlier BBO (mid) + orderPrcLimit."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"SynthLimitBW"}),(0,r.jsx)(i.td,{children:"synthetic"}),(0,r.jsx)(i.td,{children:"effective limit price = underlier BBO (best way) + orderPrcLimit"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"SynthLimitWW"}),(0,r.jsx)(i.td,{children:"synthetic"}),(0,r.jsx)(i.td,{children:"effective limit price = underlier BBO (worst way) + orderPrcLimit"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Aux"}),(0,r.jsx)(i.td,{children:"any"}),(0,r.jsx)(i.td,{children:"A corresponding ParentLimit is required. Limit details are supplied in that record."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"NoLimit"}),(0,r.jsx)(i.td,{children:"any"}),(0,r.jsx)(i.td,{children:"Client actively declines to supply a limit.  This option is generally only valid in special situations."})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"If the primary client limit is dynamic (tied to the underlier or other markets) it will be continually recomputed and applied both when creating new child orders and also as a cancel condition for working child orders."}),"\n",(0,r.jsx)(i.h3,{id:"secondary-order-limits",children:"Secondary Order Limit(s)"}),"\n",(0,r.jsx)(i.p,{children:"Parent orders can also have secondary order limits that work along side (in addition to) the client supplied primary order limit.  These secondary limits are based on offsets to a SpiderRock supplied fair mid-market value and often used as the more tactile limit control for working child orders in a market."}),"\n",(0,r.jsx)(i.p,{children:"Secondary limits can be set relative to a SpiderRock surface dynamic volatility model (options only) or relative to a ML based fair market value, or both. Independent secondary limits can be set for ActiveMaker and ActiveTaker algo."}),"\n",(0,r.jsx)(i.p,{children:"Using a SpiderRock surface volatility model client can express an offset in either premium, volatility, or market width terms (or a combination) for any options market with a valid SpiderRock surface."}),"\n",(0,r.jsx)(i.p,{children:"Using a SpiderRock ML/probability model clients can specify a secondary limit as a probability [0-1] value where 0.50 = fair mid-market and values greater than 0.50 are more passive (better probability of a positive PnL). The fair market price (0.50) points are computed from ML models designed for each asset class which include information from the market in question as well as related markets and are frequently recomputed. The associated ML probability distribution widths reflect expected market print scatter as well as market drift over relatively short time horizons. As a result, a probability specification of 0.60 would result in an effective limit price that, if executed, would have a 60% chance of being better than the average expected print in the subject market."}),"\n",(0,r.jsx)(i.p,{children:"All SpiderRock fair market models are statistical in nature and it is not possible to guarantee the performance of any particular order or effective limit. For clients who wish to experiment with these types of orders in a simulated trading context we offer special trading accounts (T.XXX) that allow fake trading with live market data and high quality exchange simulators."}),"\n",(0,r.jsx)(i.h2,{id:"activetaker-algo-family",children:"ActiveTaker Algo Family"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsxs)(i.strong,{children:["(parentOrderHandling = ",(0,r.jsx)(i.em,{children:"ActiveTaker"}),")"]})}),"\n",(0,r.jsx)(i.p,{children:"The ActiveTaker algo family instructs a ParentBroker to send child orders that will actively take liquidity only if/when all order conditions are met.  If an order is marketable these algo handlers optimize liquidity taking across all available exchanges, including with respect to fees and available liquidity.  Active taker orders range from aggressive (take all available liquidity letting as little as possible escape) to passive (wait patiently for a high probability opportunity to take)."}),"\n",(0,r.jsx)(i.p,{children:"ActiveTaker option orders can also, in some circumstances, start flash auctions in the SpiderRock ATS. This is typically to either seek liquidity in wider markets ahead of fully crossing, to seek more liquidity that is available at NBBO, or to attempt to trade at a lower fee that would be required to take liquidity on a public exchange."}),"\n",(0,r.jsx)(i.p,{children:"ActiveTaker order handling is also a component of our most complex progression algos that break orders up and work them over time."}),"\n",(0,r.jsx)(i.p,{children:"The following parameters control active taking behavior:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"ReachRule"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Delayed"}),(0,r.jsx)(i.td,{children:"The algo waits a few seconds before taking thus giving the posting side an opportunity to generate fills"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Passive"}),(0,r.jsx)(i.td,{children:"The algo does not take until the market turns one price increment in the client's favor"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"WeakOnly"}),(0,r.jsx)(i.td,{children:"The algo only takes liquidity when the opposite side size is less than the average market size."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"FullSize"}),(0,r.jsx)(i.td,{children:"This will send the full order size on the taking side of the algo"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ISOSweep"}),(0,r.jsx)(i.td,{children:"Utilizes ISO market code to sweep the market. Can only be used if setup to use ISO"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"RespondOnly"}),(0,r.jsx)(i.td,{})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"activemaker-algo-family",children:"ActiveMaker Algo Family"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsxs)(i.strong,{children:["(parentBalanceHandling = ",(0,r.jsx)(i.em,{children:"MakerAlgo"}),")"]})}),"\n",(0,r.jsx)(i.p,{children:"The ActiveMaker algo family instructs a ParentBroker to send resting child orders or quotes into exchange order books. The child orders are never immediately marketable when created within our execution engines and are subject to both primary and secondary limit constraints as well as other ActiveMaker balance handling behaviors. They often include maker size controls that limit their size profile in exchange order books."}),"\n",(0,r.jsx)(i.p,{children:"ActiveMaker orders range from passive (post orders in an exchange order book behind a fair mid-market value) to aggressive (post orders through a fair mid-market level but behind the opposite touch market price)."}),"\n",(0,r.jsx)(i.p,{children:"ActiveMaker orders can be used in combination with ActiveTaker orders to create hybrid order handling, including at split limit levels. ActiveMaker orders are also a core component of our longer running progression algo."}),"\n",(0,r.jsx)(i.p,{children:"The following parent order parameters control active making behavior:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"MakerAlgo"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostWith"}),(0,r.jsx)(i.td,{children:"Posts child orders with BBO"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostTurn"}),(0,r.jsx)(i.td,{children:"Turn NBBO one time"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostImprove"}),(0,r.jsx)(i.td,{children:"Turn NBBO, improve again if joined"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostLimit"}),(0,r.jsx)(i.td,{children:"Post to limit price (primary + secondary/offset)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostWthF"}),(0,r.jsx)(i.td,{children:"Join existing markets if the size on the join side is at least 25% of the opposite side. Will fade if the ratio between the sides drops below 20%. Designed to prevent your order from being the last at a price. Will use dynamic market sizing to prevent out sizing the prevailing market size."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostImprv"}),(0,r.jsx)(i.td,{children:"Join or improve an existing market if there is sufficient limit room to do so. Will improve own market periodically (~30 \u2013 60 seconds) if there is sufficient limit room. Will be dynamically sized if the child order would outsize the prevailing market size."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostFlash"}),(0,r.jsx)(i.td,{children:"Same as post limit, but flashes the order in the market for a 1 second and then is removed from the market. It will only flash if the child order is improving the market. It will flash again at a random time between 45 seconds."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostFlashW"}),(0,r.jsx)(i.td,{children:"This is as PostFlash, where the order will flash in the market for 1 second, but will post on the bid for the remaining time."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"PostFlashI"}),(0,r.jsx)(i.td,{children:"Similar to PostFlash. However instead of posting immediately at on the limit price, the order will first flash one price increment better than the NBBO. With each subsequent flash the algo will further improve. This will continue until the algo has reach the user limit. Like PostFlash, the order will post for 1 second and then go dark (no child orders) for a random time of 45 seconds. At the end of the timer the order will flash the market again."})]})]})]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"PublicSize"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Randomize"}),(0,r.jsx)(i.td,{children:"Will randomize the last 10% of the average market size."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"MktSize"}),(0,r.jsx)(i.td,{children:"Uses dynamic sizing, which is the average of the public size on the NBBO and the second best price."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"FullSize"}),(0,r.jsx)(i.td,{children:"References the user's full order size."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"MktSizeA"}),(0,r.jsx)(i.td,{children:"A will join your order with 25% of the visible market size on the bid/offer."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"MktSizeB"}),(0,r.jsx)(i.td,{children:"B will join your order with 50% of the visible market size on the bid/offer."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"MktSizeC"}),(0,r.jsx)(i.td,{children:"C will join your order with 75% of the visible market size on the bid/offer."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"FullSizeR"}),(0,r.jsx)(i.td,{children:"Will randomize the last 10% of the user's full order size."})]})]})]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"ExchRule"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"MaxPart"}),(0,r.jsx)(i.td,{children:"Will pick exchanges to maximize participation."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"FeeOptimal"}),(0,r.jsx)(i.td,{children:"Balances receiving rebates with cost of the other side to take liquidity. May not post at the highest rebate exchange in order to get flow. Default for account setting."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ImprvOnly"}),(0,r.jsx)(i.td,{children:"Will only make when improving the NBBO."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"FeeStrict"}),(0,r.jsx)(i.td,{children:"Only takes maximum rebate potential into routing logic."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"RoundRobin"}),(0,r.jsx)(i.td,{children:"Will work through full exchange list one exchange at a time."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ProRataOptim"}),(0,r.jsx)(i.td,{children:"Will send orders to pro-rata exchanges first."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"progression-algos",children:"Progression Algos"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsxs)(i.strong,{children:["(progressRule = ",(0,r.jsx)(i.em,{children:"ProgressionAlgo"}),")"]})}),"\n",(0,r.jsx)(i.p,{children:"Progression algos are available for stock, futures, and options. They typically work by breaking an order in several slices (up to 20 depending on order size and duration and client request) and work an order one slice at a time. Individual slices can step from more passive to more aggressive while the slice is working.  They can trigger flash auctions prior to crossing markets and put an order balance in the exchange closing auctions (if one exists).  They can actively take (including leg) public markets at the end of slices. And they always honor a clients primary limit, even at the cost of not completing a progression sequence."}),"\n",(0,r.jsx)(i.p,{children:"Progression algos can be configured to work in simple time/slice steps (TWAP handling) or more dynamic print volume/slice steps (VWAP handling) that directly match the velocity of child order release with the public trading volume."}),"\n",(0,r.jsx)(i.p,{children:"The following parameters control progression algo behaviors:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"ProgressionAlgo"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Twap"}),(0,r.jsx)(i.td,{children:"The order's working size is divided into slices of both size and time."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Vwap"}),(0,r.jsx)(i.td,{children:"The size is released based on volume traded."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"FastReset"}),(0,r.jsx)(i.td,{children:"Limit will be reset on and off every 15 seconds."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"SlowReset"}),(0,r.jsx)(i.td,{children:"Limit will be reset on and off every minute."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"TwapAlpha"}),(0,r.jsx)(i.td,{children:"This progression algo is intended to work for the full duration of the parent order. This algo takes the slice size, count, and target duration. It then works the next slice through the different modes (passive, moderate, and aggressive). If a slice fills before its target time has elapsed, the algo waits until the fully allotted time has passed, before switching to the next slice. TwapAlpha is available for equities, options, futures, and MLEG orders."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"VwapAlpha"}),(0,r.jsx)(i.td,{children:"This progression algo is intended to work for the full duration of the parent order. This algo takes the volume and target duration. It then works the next slice through the different modes (passive, moderate, and aggressive). If a slice fills before its target time has elapsed, the algo waits until the fully allotted time has passed, before switching to the next slice. VwapAlpha is available for equities, options, futures, and MLEG orders."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"TwapAlphaC"}),(0,r.jsx)(i.td,{children:"This progression algo that is intended to work for the full duration of the parent order. This algo determines a slice size, count, and target duration. It then works the next slice through the different modes (passive, moderate, and aggressive). If a slice fills before its target time has elapsed, the algo waits until the fully allotted time has passed, before switching to the next slice. There is also a variation for equities called TwapAlphaC that will promote any parent order balance into the primary equity closing auction just before auction cutoff time."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"VwapAlphaC"}),(0,r.jsx)(i.td,{children:"This progression algo that is intended to work for the full duration of the parent order. This algo determines a volume and target duration. It then works the next slice through the different modes (passive, moderate, and aggressive). If a slice fills before its target time has elapsed, the algo waits until the fully allotted time has passed, before switching to the next slice. There is also a variation for equities called VwapAlphaC that will promote any parent order balance into the primary equity closing auction just before auction cutoff time."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"SpdrPulse"}),(0,r.jsx)(i.td,{children:"SpdrPulse is designed to work each parent order in distinct slices. Each slice will work through passive, moderate, and aggressive modes. If any slice fills, the order will immediately revert to passive mode and start working the next slice. The SpdrPulse is designed to work each parent order in distinct slices duration for each SpdrPulse slice is 30 seconds but can be set on each individual parent order. SpdrPulse is available for equities, futures, options, and MLEG orders."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"marketlimit-on-openclose-child-orders",children:"Market/Limit On Open/Close Child Orders"}),"\n",(0,r.jsx)(i.p,{children:"Parent order algo handlers can place child orders in exchange opening or closing auctions and have integrated these child orders into some of our progression algos as well."}),"\n",(0,r.jsx)(i.h2,{id:"dma-child-orders",children:"DMA Child Orders"}),"\n",(0,r.jsx)(i.p,{children:"Simple algo handlers that generate zero or one child order with a static limit price are called DMA algo handlers within our execution engines.  If the resulting child order terminates the ParentBroker that generated it, the DMA algo handler will either auto-close (direct orders) or go into an active hold state (staged orders) pending further instructions."}),"\n",(0,r.jsx)(i.p,{children:"DMA orders can be sent to exchanges (sometimes useful as they have no requirement that the target or underlier market is open and are somewhat less restricted that our normal algo child orders). They can also be sent to other brokers and venues (we sometimes call these away orders) if appropriate routes have been established."}),"\n",(0,r.jsx)(i.h2,{id:"auction-response-orders",children:"Auction Response Orders"}),"\n",(0,r.jsx)(i.p,{children:"Parent orders responding to either exchange auction notices or our ATS notices must include a SpiderRock auction notice ID. We then immediately generate a responsive child order for the notice."}),"\n",(0,r.jsx)(i.p,{children:"These orders are subject to all normal parent order handling rules and risk checks and can go through a StageReview sequence (if client systems are fast enough)."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var r=t(96540);const s={},n=r.createContext(s);function a(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);
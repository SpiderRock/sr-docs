"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45170],{61762:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=n(74848),i=n(28453);const a={title:"Order Management",sidebar_position:4},s=void 0,o={id:"Documentation/PlatformFeatures/OrderManagement/OrderManagement",title:"Order Management",description:"Execution Engine Overview",source:"@site/docs/Documentation/PlatformFeatures/OrderManagement/OrderManagement.md",sourceDirName:"Documentation/PlatformFeatures/OrderManagement",slug:"/Documentation/PlatformFeatures/OrderManagement/",permalink:"/docs/Documentation/PlatformFeatures/OrderManagement/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Order Management",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Client Volatility Surfaces",permalink:"/docs/Documentation/PlatformFeatures/Analytics/ClientVolatilitySurfaces"},next:{title:"Execution Algorithms",permalink:"/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms"}},d={},c=[{value:"Execution Engine Overview",id:"execution-engine-overview",level:2},{value:"Parent Orders",id:"parent-orders",level:2},{value:"Child Orders",id:"child-orders",level:3},{value:"Spreads vs Singles",id:"spreads-vs-singles",level:3},{value:"Arrival Actions",id:"arrival-actions",level:3},{value:"Cancelling Orders",id:"cancelling-orders",level:3},{value:"ParentBroker State Records",id:"parentbroker-state-records",level:3},{value:"Order Execution",id:"order-execution",level:2},{value:"Execution Algorithms",id:"execution-algorithms",level:3},{value:"Street Gateways",id:"street-gateways",level:3},{value:"Child Order Flow Control",id:"child-order-flow-control",level:3},{value:"Legging Orders",id:"legging-orders",level:3},{value:"Contingent Pair Trading",id:"contingent-pair-trading",level:3},{value:"Exchange Auction Responding",id:"exchange-auction-responding",level:3},{value:"Away Order Routing",id:"away-order-routing",level:3},{value:"AutoHedging",id:"autohedging",level:2},{value:"TCA Metrics",id:"tca-metrics",level:2},{value:"Execution Risk Controls",id:"execution-risk-controls",level:2},{value:"Execution Risk Counters",id:"execution-risk-counters",level:3},{value:"Integrated MAR Risk Controls",id:"integrated-mar-risk-controls",level:3},{value:"Integrated Supervisory Risk Controls",id:"integrated-supervisory-risk-controls",level:3},{value:"Risk Group Controls",id:"risk-group-controls",level:3},{value:"Compliance Controls",id:"compliance-controls",level:2},{value:"Integrated Compliance Controls",id:"integrated-compliance-controls",level:3},{value:"Selling Stock",id:"selling-stock",level:3},{value:"Market Data Considerations",id:"market-data-considerations",level:2},{value:"Embedded Exchange Simulators",id:"embedded-exchange-simulators",level:2}];function l(e){const r={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"execution-engine-overview",children:"Execution Engine Overview"}),"\n",(0,t.jsx)(r.p,{children:"SpiderRock Execution Engines are at the center of order and execution management within the SpiderRock platform.  Each engine is responsible for parent and child order handling and adjacent tasks for a subset of the SpiderRock product universe.  At present, this product universe is divided into 10 US Equity/Option stripes, 1 CME Future/Option stripe, 1 CFE Future/Option stripe, and 1 EUX Future/Option stripe with stripes and their associated engines located near the relevant exchange matching engine.  All execution engines process all of the market data for their product subset regardless of whether resting parent order or client interest exists for a specific product within a subset. As a result, our execution engine topology reflects both geography as well as market data load balancing considerations and is subject to change over time."}),"\n",(0,t.jsx)(r.h2,{id:"parent-orders",children:"Parent Orders"}),"\n",(0,t.jsx)(r.p,{children:"All client orders that enter SpiderRock execution engines are considered parent orders (from our perspective) regardless of the order source (Tools, SRSE, MLink, or FIX)."}),"\n",(0,t.jsxs)(r.p,{children:["All SpdrParentOrders have a primary key (parentNumber",":long",") that is assigned by SpiderRock and is globally unique (for about 6 months). This parentNumber represents a single link in a parent order chain that can have one or multiple links.  Each ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," has a corresponding ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentReport",children:(0,t.jsx)(r.em,{children:"SpdrParentReport"})})," record that is published by the execution engine handling the parent order.  This record, along with any ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrFixParentExecution",children:(0,t.jsx)(r.em,{children:"SpdrParentExecution"})})," associated with the same parentNumber, contains the complete state for one link in a parent order chain. These records, in combination, contain all of the details necessary to (re)create either a FIX parent order drop replay stream or a FIX execution only drop stream.   They also contain all of the details necessary to generate SpiderRock side CAT reports."]}),"\n",(0,t.jsxs)(r.p,{children:["On arrival, a ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," message will create (or modify, if it already exists) a ParentBroker and its' parent order chain. If a ParentBroker ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"does not"})})," exist already, a new arriving ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," will be consider as the beginning of an order chain. If a parentBroker ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"does"})})," exist, the new ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," will update the existing ParentBroker, thus creating a addition parent order link in the order chain. The parent number of the first link in the chain become the baseParentNumber for the chain and is used to represent the entire chain. ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrders"})})," contain the ParentBroker primary key fields (accnt, clientFirm, secKey, secType, orderSide, spdrSource, and groupingCode) within the body of the ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," message."]}),"\n",(0,t.jsxs)(r.p,{children:["For clients that wish to operate longer running algos, SpiderRock provides ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentLimit",children:(0,t.jsx)(r.em,{children:"SpdrParentLimit"})})," messages. These records contain many of the same fields that are found in the SpdrParentOrder messages.  If a ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," allows for 'delegation' to a ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentLimit",children:(0,t.jsx)(r.em,{children:"SpdrParentLimit"})})," (uses a SpdrLimitType=Aux) then fields in the ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentLimit",children:(0,t.jsx)(r.em,{children:"SpdrParentLimit"})})," record will take precedence over those found in the ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," message.  This is advantageous because ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentLimit",children:(0,t.jsx)(r.em,{children:"SpdrParentLimit"})})," records can be accepted and processed at much higher rates that ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(r.em,{children:"SpdrParentOrder"})})," records and do not cause excessive FIX cancel/replace transactions when creating downstream drop copies."]}),"\n",(0,t.jsx)(r.h3,{id:"child-orders",children:"Child Orders"}),"\n",(0,t.jsx)(r.p,{children:"The execution engine, upon receiving a SpdrParentOrder message, will then create a set of child orders according to the parameters set in the original and corresponding SpdrParentOrder. All child orders are limit orders and SpiderRock controls all cancel/replace actions for child orders. The SpdrParentOrder is the set of instructions that will dictate the limits of the child orders and the child orders themselves are the orders sent to the exchange."}),"\n",(0,t.jsx)(r.h3,{id:"spreads-vs-singles",children:"Spreads vs Singles"}),"\n",(0,t.jsx)(r.p,{children:"SpiderRock execution engines are capable of handling parent order for single items (stock, future, or option) or spread (up to 6 legs + 1 stock leg). The algos for handling spreads are slightly different than those for single instruments but are roughly analogous in most respects."}),"\n",(0,t.jsx)(r.h3,{id:"arrival-actions",children:"Arrival Actions"}),"\n",(0,t.jsx)(r.p,{children:"A ParentBroker goes through a number of steps to validate the newly arriving parent order and activate it for child order generation including:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Action"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Validation"}),(0,t.jsx)(r.td,{children:"Check user permissions for the account and clientFirm of the parent order."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Arrival Risk"}),(0,t.jsx)(r.td,{children:"Check MAR, supervisory (client), and global/soft arrival limits."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Route Check"}),(0,t.jsx)(r.td,{children:"Check for available market routes and build child order routing trees."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"StageReview"}),(0,t.jsx)(r.td,{children:"(Only valid for stage review clients.) Initiate any stage review sequence with the appropriate client or sponsor order routing gateway."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Cancel/Replace"}),(0,t.jsx)(r.td,{children:"If necessary, cancel any open child orders that are no longer valid and promote remaining to the new parent order / parent report pair."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Activate"}),(0,t.jsx)(r.td,{children:"When all pending actions complete (if any) attach appropriate algo handler(s) and activate the ParentBroker. If part of a risk group and arrival staging is active wait until the group is complete and activate the entire group as an arrival optimized package."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"When successfully activated, a ParentBroker will begin generating child orders according the instructions attached to the most recent parent order in the order chain."}),"\n",(0,t.jsx)(r.p,{children:"ParentBrokers will close on user cancel, order expiry, or if/when filled."}),"\n",(0,t.jsx)(r.h3,{id:"cancelling-orders",children:"Cancelling Orders"}),"\n",(0,t.jsx)(r.p,{children:"ParentBrokers and all associated child orders can be cancelled by sending one of the following:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Message"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentCancel",children:(0,t.jsx)(r.em,{children:"SpdrParentCancel"})})}),(0,t.jsx)(r.td,{children:"Cancels a ParentBroker by parent number. Can be any parent number in the chain, including the baseParentNumber"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrFixParentCancel",children:(0,t.jsx)(r.em,{children:"SpdrFixParentCancel"})})}),(0,t.jsx)(r.td,{children:"Message generated by FIX gateways when a client cancels a FIX order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrBrokerCancel",children:(0,t.jsx)(r.em,{children:"SpdrBrokerCancel"})})}),(0,t.jsx)(r.td,{children:"Cancels a ParentBroker by ParentBroker primary key (accnt, clientFirm, secKey, secType, orderSide, spdrSource, and groupingCode)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrAccntCancel",children:(0,t.jsx)(r.em,{children:"SpdrAccntCancel"})})}),(0,t.jsx)(r.td,{children:"Cancels all ParentBrokers by SpiderRock accnt/clientFirm"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrUserCancel",children:(0,t.jsx)(r.em,{children:"SpdrUserCancel"})})}),(0,t.jsx)(r.td,{children:"Cancels all ParentBrokers by SpiderRock user ID"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrRiskGroupCancel",children:(0,t.jsx)(r.em,{children:"SpdrRiskGroupCancel"})})}),(0,t.jsx)(r.td,{children:"Cancels all ParentBrokers by riskGroupID"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"parentbroker-state-records",children:"ParentBroker State Records"}),"\n",(0,t.jsxs)(r.p,{children:["In addition, at regular intervals, execution engines publish ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentBrkrState",children:(0,t.jsx)(r.em,{children:"SpdrParentBrkrState"})})," and ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrParentBrkrDetail",children:(0,t.jsx)(r.em,{children:"SpdrParentBrkrDetail"})})," records that contain current state for each active (single instrument) ParentBrokers as well as ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrMLegBrkrState",children:(0,t.jsx)(r.em,{children:"SpdrMLegBrkrState"})})," records that contain state and markup details for all active (multi-leg) ParentBrokers. These records contain information (eg. current effective limit prices, TCA execution markup, risk control state, etc) not usually found in simpler FIX execution reports."]}),"\n",(0,t.jsx)(r.h2,{id:"order-execution",children:"Order Execution"}),"\n",(0,t.jsx)(r.h3,{id:"execution-algorithms",children:"Execution Algorithms"}),"\n",(0,t.jsx)(r.p,{children:"SpiderRock execution algorithms, or more specifically, parent order handling frameworks, are the engine components primarily responsible for creating and canceling child orders. The most commonly utilized frameworks are ActiveTaker and ActiveMaker which can operate either individually or in combination.  The ActiveTaker framework will generate child orders that take liquidity only and ActiveMaker will generate child orders that provide liquidity only. Some parent order instructions are designed to generate at most one child order while others can create and cancel many child orders over time as related markets move around."}),"\n",(0,t.jsx)(r.p,{children:"These frameworks can be used for equities, futures, and options as well as spreads and are the underlying handlers for our longer running progression algo family."}),"\n",(0,t.jsx)(r.p,{children:"With the introduction of the SpiderRock Connect ATS active taker handlers are also capable of initiating flash auctions in some circumstances. In addition, both our active maker and active taker frameworks are capable of responding to SpiderRock Connect auction as well as all exchange or other ATS originated auctions."}),"\n",(0,t.jsx)(r.p,{children:"We also have special purpose order handling frameworks that can place child orders in exchange open/closing auctions, perform coordinated cross market sweeps, and execute other specialized order actions."}),"\n",(0,t.jsx)(r.p,{children:"At a higher level, our engines also feature several types of multi-step progression algos that work parent orders over time utilizing single purpose frameworks at each step. Examples include the VWAP, TWAP, and SpiderPulse as well as Seeker and Legger (spreads) algo families."}),"\n",(0,t.jsxs)(r.p,{children:["See our ",(0,t.jsx)(r.a,{href:"/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionAlgorithms",children:"ExecutionAlgo"})," guide for more details."]}),"\n",(0,t.jsx)(r.h3,{id:"street-gateways",children:"Street Gateways"}),"\n",(0,t.jsx)(r.p,{children:"SpiderRock operates street-side order gateway servers located between our execution engines and the various exchange and market access points. These street gateways are responsible for routing child (exchange or broker) orders and quotes either directly to exchange matching engines and other alternative trading systems or to other market access brokers for forwarding."}),"\n",(0,t.jsx)(r.p,{children:"These gateways can also preemptively cancel (contingent cancel) child orders in exchange order books if market data based signals breach a contingent trigger threshold. Similarly, the can send pre-cached child order to take liquidity (contingent create) based on either related market data or child fill events. All contingent triggers are set and managed by SpiderRock systems and are transparent to users. Contingent trigger based pathways are the fastest latency paths in the SpiderRock platform and are generally only used in situations where latency of action is of high importance."}),"\n",(0,t.jsx)(r.p,{children:"The latency hierarchy of actions that might occur with respect to the handling of child orders in exchange order books is:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Action Source"}),(0,t.jsx)(r.th,{children:"Typical Latency Range"}),(0,t.jsx)(r.th,{children:"Range of possible actions"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Parent Orders (External Systems)"}),(0,t.jsx)(r.td,{children:"1 - 100 ms"}),(0,t.jsx)(r.td,{children:"Almost any type of trading strategy that has a time horizon of seconds or longer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Parent Orders (Internal Systems)"}),(0,t.jsx)(r.td,{children:"1.0 - 2.0 ms"}),(0,t.jsx)(r.td,{children:"Specific trading strategies coded into SpiderRock systems"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Child Orders (Execution Engine)"}),(0,t.jsx)(r.td,{children:"0.25 - 1.0 ms"}),(0,t.jsx)(r.td,{children:"Child order create and cancel events associated with execution engine algo handlers"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Child Orders (Contingent Triggers)"}),(0,t.jsx)(r.td,{children:"5 - 10 us"}),(0,t.jsx)(r.td,{children:"Child order trigger-cancel or trigger-create buffer flush operations"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"child-order-flow-control",children:"Child Order Flow Control"}),"\n",(0,t.jsx)(r.p,{children:"SpiderRock execution engines are usually capable of generating child orders (much) faster than downstream systems can consume them.  This is especially common when simultaneously managing large numbers of orders in option markets with active/volatile underlying securities and tight cancel/replace child order thresholds."}),"\n",(0,t.jsx)(r.p,{children:"In order to successfully manage orders in this type of environment SpiderRock utilizes a sophisticated child order flow control design that classifies and prioritizes child order flow to ensure that immediate high priority cancel bandwidth is always available under normal operation at the potential cost of delaying creation of new child orders. This acts to protect down stream systems from queuing or rejecting child orders and cancels during market bursts, both of which can adversely affect execution quality."}),"\n",(0,t.jsx)(r.p,{children:"To mitigate the impacts of this type of flow control, SpiderRock monitors its own exchange connectivity pool and adds capacity as necessary and also works with downstream brokers to ensure sufficient capacity on order handling sessions in which SpiderRock does not control the last leg of the exchange routing path."}),"\n",(0,t.jsx)(r.h3,{id:"legging-orders",children:"Legging Orders"}),"\n",(0,t.jsx)(r.p,{children:"Spread orders (multiple stock, future, or option legs) can be worked as a spread legging package with a common limit price. There are two forms of order legging within the SpiderRock platform:"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)("i",{children:"(a)"})," The first is directly implemented in our execution engines but has a restriction that all legs in the spread package must be from a common product group (ticker)."]})}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)("i",{children:"(b)"})," The second moves the order legging activity out of our executions engines into a specialized strategy server that generated parent orders targeting any of our execution engines.  This second form can manage spread legging packages with legs from any product group, including product groups that are in different global geographies."]})}),"\n",(0,t.jsx)(r.p,{children:"With either form of legging clients can specify a lead leg as well as whether any of the legs should be posted in exchange order books and worked 'out loud' or held in SpiderRock systems until leg alignment is observed. Clients are also able to specify a specific amount of slippage to be used, only if necessary, to complete a leg package."}),"\n",(0,t.jsx)(r.h3,{id:"contingent-pair-trading",children:"Contingent Pair Trading"}),"\n",(0,t.jsx)(r.p,{children:"In the near future, SpiderRock is planning to introduce contingent pair trading (a form of fast legging) in which a child order is placed in an exchange order book and 'tied' to the market of a dependent leg.  If the depended leg market moves the 'leaning' child order will be cancelled using our contingent cancel trigger.  Similarly, fills that arrive for the 'leaning' trigger a corresponding continent order create. Both cancel and create latencies should be less than 10 us (plus exchange latency) if both legs are targeting the same exchange matching engine. We plan to introduce this new type for order handling for any pair (stock vs stock, stock vs future, future vs future, options vs any) across all markets that we integrate with."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/ContactUs/",children:"Contact us for more details."})}),"\n",(0,t.jsx)(r.h3,{id:"exchange-auction-responding",children:"Exchange Auction Responding"}),"\n",(0,t.jsxs)(r.p,{children:["SpiderRock's system is capable of processing auction notices from a number of exchanges and venues including our own ATS. Clients with resting (usually active making) parent orders can be set to auto-respond to these auction notices.  Clients can also listen for notices from our MLink/Websocket API and directly respond by sending parent orders set to respond to a specific auction notice IDs. Clients can also respond by establishing auction auto-responders (eg. ",(0,t.jsx)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderVegaDir",children:(0,t.jsx)(r.em,{children:"AutoResponderVegaDir"})}),") that will generate automatically generate parent orders in response to auction notices."]}),"\n",(0,t.jsx)(r.p,{children:"For more information see our AuctionResponder guide."}),"\n",(0,t.jsx)(r.h3,{id:"away-order-routing",children:"Away Order Routing"}),"\n",(0,t.jsx)(r.p,{children:"SpiderRock's execution engines can also route child orders to away systems and algorithms on client request."}),"\n",(0,t.jsx)(r.h2,{id:"autohedging",children:"AutoHedging"}),"\n",(0,t.jsx)(r.p,{children:"Option executions (whether from our execution engines or away systems) can be configured for auto-hedging. In general, auto-hedging falls into one of two categories:"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)("i",{children:"(a)"})," Strategies that hedge each individual option fill immediately and minimize any slippage (typically used with dynamic order limits that 'lean' on one side or the other of a hedge target market), or"]})}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)("i",{children:"(b)"})," Auto-hedging strategies that act somewhat slower and simultaneously hedge groups of option orders with a common hedge target."]})}),"\n",(0,t.jsx)(r.p,{children:"The first strategy will typically result in small and consistent slippage between option fill and hedge target fill but will also (usually) trade the maximum quantity of the hedge target and have a high percentage of take fee paying executions. The second strategy will have more variation in slippage (sometimes positive, sometimes negative) but will trade less of the hedge target and have a better blend of make, take, and lower cost dark pool executions."}),"\n",(0,t.jsx)(r.p,{children:"Either strategy can be implemented with the SpiderRock platform."}),"\n",(0,t.jsxs)(r.p,{children:["See our AutoHedging Guide for more details. ",(0,t.jsx)(r.em,{children:"The AutoHedging Guide is coming soon."})]}),"\n",(0,t.jsx)(r.h2,{id:"tca-metrics",children:"TCA Metrics"}),"\n",(0,t.jsx)(r.p,{children:"We have an extensive set of TCA metrics that we capture for all parent and child orders.  These metrics include PnL from parent arrival to fill, PnL from fill to F+1m, F+10m, and F+EOD, underlier and hedge target slippage and order handling metrics such as total seconds active at SpiderRock, seconds on exchange, child create and cancel latencies, pct time on market, pct time alone, total shares or contracts traded (from print reports) while active, etc."}),"\n",(0,t.jsx)(r.p,{children:"These metrics (and others) are available in our SpdrParentExecution and SpdrParentBrkrState records as well as our SpdrChildOrderSummary records."}),"\n",(0,t.jsx)(r.h2,{id:"execution-risk-controls",children:"Execution Risk Controls"}),"\n",(0,t.jsx)(r.h3,{id:"execution-risk-counters",children:"Execution Risk Counters"}),"\n",(0,t.jsxs)(r.p,{children:["SpiderRock execution engines maintain a collection of risk counters for all orders and executions handled by the engine. These risk counters are used with MAR and Supervisory risk controls as well as parent order RiskGroupID controls to constrain the generation of child orders. ParentBrokers continually check all risk counters and their associated risk controls to establish a ",(0,t.jsx)(r.strong,{children:"Minimum Available Risk Size"})," (size to the most restrictive risk limit) while they are active. This available risk size value becomes an upper bound on the size of any child order generated by the system and can also result in resting child order being immediately cancelled if they no longer have enough risk size to fill the balance of the child order."]}),"\n",(0,t.jsx)(r.h3,{id:"integrated-mar-risk-controls",children:"Integrated MAR Risk Controls"}),"\n",(0,t.jsx)(r.p,{children:"Up to four sets of MAR risk control records typically exist for each clientFirm and account in the system. The first of these record sets is under the exclusive control of SpiderRock and its existence is required for any order handling to proceed. Any MAR risk control record following the first record is optional. The second level of MAR risk controls can be set and controlled by the client and the third and fourth levels of MAR risk controls are under the control of the client's prime broker or sponsor."}),"\n",(0,t.jsx)(r.p,{children:"MAR risk control records contain restrictions on parent order size as well as total account and ticker margin and contracts."}),"\n",(0,t.jsx)(r.p,{children:"Parent orders are rejected if they violate a parent order arrival constraint from any of the MAR risk control sets.  Once an associated ParentBroker is active all potential child orders are constrained by all related MAR risk control records."}),"\n",(0,t.jsx)(r.h3,{id:"integrated-supervisory-risk-controls",children:"Integrated Supervisory Risk Controls"}),"\n",(0,t.jsx)(r.p,{children:"Clients can, in addition to MAR risk controls, establish firm specific supervisory risk controls.  These controls focus on accounts and product groups and allow share, contract, and greek based constraints."}),"\n",(0,t.jsx)(r.p,{children:"Parent orders are rejected if they violate a parent order arrival constraint from a supervisory risk record.  And all associated child order size are also constrained by relevant supervisory risk controls (if any)."}),"\n",(0,t.jsx)(r.h3,{id:"risk-group-controls",children:"Risk Group Controls"}),"\n",(0,t.jsx)(r.p,{children:"Parent orders and associated ParentBrokers can be part of an account RiskGroup (RiskGroupID + Accnt). If associated with a RiskGroup all child orders that would be generated by a ParentBroker are constrained by the RiskGroup controls established by the parent order."}),"\n",(0,t.jsx)(r.p,{children:"RiskGroup control values can be supplied on individual parent orders (RiskGroupID and the risk group control fields are parent order parameters) or they can be established by created via SpdrRiskGroupControl live-data objects (parent order contains a RiskGroupID and the associated SpdrRiskGroupControl message contains teh control levels)."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.a,{href:"/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionRiskControl",children:["For more information on the above topics, please see our ",(0,t.jsx)(r.strong,{children:"Execution Risk Control"})," documentation."]})}),"\n",(0,t.jsx)(r.h2,{id:"compliance-controls",children:"Compliance Controls"}),"\n",(0,t.jsx)(r.h3,{id:"integrated-compliance-controls",children:"Integrated Compliance Controls"}),"\n",(0,t.jsx)(r.p,{children:"SpiderRock execution engines have integrated compliance controls that minimize the risk of most types of compliance mistakes. We force all child orders selling stock short to have valid locates (or be sent to a downstream broker that is performing a locate check)."}),"\n",(0,t.jsx)(r.h3,{id:"selling-stock",children:"Selling Stock"}),"\n",(0,t.jsx)(r.p,{children:"We have several methods of determining whether a stock child order should be marked long or short.  One is simply that the client directly tells us that a parent order is to sell stock either long or short.  In this case, we will mark all child orders according to client instructions."}),"\n",(0,t.jsx)(r.p,{children:"In addition, we offer a number of more automated methods. The first requires clients to load and maintain positions (or at least 'stub' positions if actual positions are large) within our platform. Clients can notify us of away trading and order activity and we will keep track of all SpiderRock facilitated executions and exchange child orders.  We will then mark each individual child order as either long or short based on our records at the time of child order generation."}),"\n",(0,t.jsx)(r.p,{children:"An alternate method is built into our StageReview handling of parent orders. With this method, when a parent order arrives we initially place it in a stage review hold state and send a simple equity child order to either a client or sponsor order routing gateway.  This gateway then performs both a risk check and short sale check on the order.  If successful the order is forward (back) to SpiderRock and acts to both release the parent order from its' stage review hold state and transfer its' sell long/sell short markup to the parent order.  Any child orders generated from this reviewed parent order are then marked long or short as instructed."}),"\n",(0,t.jsx)(r.p,{children:"Regardless of the underlying technique used, any child order deemed a sell short order will be required to have a locate or be forwarded to a downstream system capable of performing a locate check.  Locates can be loaded at the start day or during the trading day and, in some circumstances, we can get locate from your prime broker on your behalf."}),"\n",(0,t.jsx)(r.p,{children:"Properly managing the compliance issues involved in selling stock can be involved and we work with clients and sponsors to find solutions."}),"\n",(0,t.jsx)(r.h2,{id:"market-data-considerations",children:"Market Data Considerations"}),"\n",(0,t.jsx)(r.p,{children:"SpiderRock execution engines directly process low level market data multicast feeds where possible.  In general, market data handling latencies within our execution engines are very low and we can process market data at very high rates."}),"\n",(0,t.jsx)(r.h2,{id:"embedded-exchange-simulators",children:"Embedded Exchange Simulators"}),"\n",(0,t.jsx)(r.p,{children:"Our execution engines feature exchange simulators that attempt to accurately replicate expected market behavior, including, for example, triggering fills for only the expected allocation size of a (simulated) order that is resting along side public (live) orders in our simulated exchange order books when a (live) print occurs on an exchange."}),"\n",(0,t.jsx)(r.p,{children:"Any order sent to one of our exchange engines that is for a T.XXXX trading account will route child orders to one of our simulated exchanges. We generally allow clients to do a (limited) amount of testing or practice trading in this fashion to better understand the behavior of our algorithms in an environment that is as close to real market behavior as possible."})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(96540);const i={},a=t.createContext(i);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);
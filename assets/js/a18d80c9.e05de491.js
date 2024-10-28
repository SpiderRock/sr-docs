"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36457],{63846:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(74848),n=t(28453);const i={title:"Order Staging",sidebar_position:4},a=void 0,s={id:"Documentation/PlatformFeatures/OrderManagement/Staged-Orders",title:"Order Staging",description:"SpiderRock Connect execution engines and OMS/EMS tools support a form of order staging (workflow staging) in which parent orders are submitted in a state in which they are initially held (activeOrderSize = 0) pending action by a user to modify and/or release them before they become working parent orders.  This workflow process can be used by a user staging orders to themselves for future action or by a ControlParty user staging an order to a ModifyParty user for the ModifyParty user to later activate and release into the market.",source:"@site/versioned_docs/version-8.4.10.4/Documentation/PlatformFeatures/OrderManagement/Staged-Orders.md",sourceDirName:"Documentation/PlatformFeatures/OrderManagement",slug:"/Documentation/PlatformFeatures/OrderManagement/Staged-Orders",permalink:"/docs/8.4.10.4/Documentation/PlatformFeatures/OrderManagement/Staged-Orders",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",sidebarPosition:4,frontMatter:{title:"Order Staging",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Execution Risk Controls",permalink:"/docs/8.4.10.4/Documentation/PlatformFeatures/OrderManagement/ExecutionRiskControl"},next:{title:"TCA Metrics",permalink:"/docs/8.4.10.4/Documentation/PlatformFeatures/OrderManagement/TCAMetrics"}},d={},l=[{value:"Control and Modify Parties",id:"control-and-modify-parties",level:2},{value:"Order Workflow",id:"order-workflow",level:2},{value:"Step One: Order Entry",id:"step-one-order-entry",level:4},{value:"Step Two: Order Handling",id:"step-two-order-handling",level:4},{value:"Step Three: Order Modification:",id:"step-three-order-modification",level:4},{value:"Market Session Handling",id:"market-session-handling",level:2},{value:"Order Lifecycle and Termination",id:"order-lifecycle-and-termination",level:3},{value:"Active and Effective Order Duration",id:"active-and-effective-order-duration",level:3}];function c(e){const r={h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"SpiderRock Connect execution engines and OMS/EMS tools support a form of order staging (workflow staging) in which parent orders are submitted in a state in which they are initially held (activeOrderSize = 0) pending action by a user to modify and/or release them before they become working parent orders.  This workflow process can be used by a user staging orders to themselves for future action or by a ControlParty user staging an order to a ModifyParty user for the ModifyParty user to later activate and release into the market."}),"\n",(0,o.jsx)(r.p,{children:"Note that this process is separate from a StageReview sequence which allows a client firm or their sponsor to perform and automated risk review of parent orders before they become active."}),"\n",(0,o.jsx)(r.h2,{id:"control-and-modify-parties",children:"Control and Modify Parties"}),"\n",(0,o.jsx)(r.p,{children:"The two primary parties involved in staging an order are the Control Party and the Modify Party."}),"\n",(0,o.jsxs)(r.p,{children:["The Control Party refers to the original account submitting the order into SpiderRock Connect\u2019s system. The source of the order can be a SpiderRock Connect Tool (SV or TradeTool) or an order entered via MLink, SRSE, FIX.  The Control Party is responsible for setting an order\u2019s ",(0,o.jsx)(r.strong,{children:"hard"})," parameters such as:"]}),"\n",(0,o.jsxs)(r.p,{children:["\u2022\titem or spread ",(0,o.jsx)("br",{}),"\n\u2022\torder side ",(0,o.jsx)("br",{}),"\n\u2022\ttotal order size ",(0,o.jsx)("br",{}),"\n\u2022\ttotal order duration"]}),"\n",(0,o.jsx)(r.p,{children:"The control party has permissions to:"}),"\n",(0,o.jsxs)(r.p,{children:["\u2022\tCreate a new order ",(0,o.jsx)("br",{}),"\n\u2022\tCancel/replace and existing order ",(0,o.jsx)("br",{}),"\n\u2022\tCancel an existing order"]}),"\n",(0,o.jsxs)(r.p,{children:["The Modify Party can be considered the opposite of the Control Party. They are either from the same client firm as the Control Party\u2019s account or are a FINRA-licensed broker such as SpiderRock's Concierge Desk. The Modify Party is not capable of changing the original order\u2019s ",(0,o.jsx)(r.strong,{children:"hard"})," parameters but they are capable of modifying:"]}),"\n",(0,o.jsxs)(r.p,{children:["\u2022\tActive order size ",(0,o.jsx)("br",{}),"\n\u2022\tActive order duration ",(0,o.jsx)("br",{}),"\n\u2022\tThe order execution algo."]}),"\n",(0,o.jsx)(r.p,{children:"When an order is received by SpiderRock Connect\u2019s system, it will have a total order size that has been set by the Control Party but its active order size will be set to zero. The same is true for the order\u2019s total duration and active duration. When either of these two dimensions are set to zero, the order will be in a \u201chold\u201d state which allows the Modify Party to then review the order and then selectively decide when the next slice of the order should be activated, how long that slice should be live for, and when alive, which algo should determine its behavior in the marketplace."}),"\n",(0,o.jsx)(r.p,{children:"If an order fills up to it's active size (but not to it's total order size) it will go back to a \"hold\" state as there is nothing more to do.  Alternatively, the Modify Party can reduce the active size of an order to zero to return it to a \"hold\" state.  If an order fills to it's entire total order size then the complete order will be closed (Filled) or if an order reaches it's total order duration it will also be closed (Expired) and a terminal order status will be returned to the Control Party."}),"\n",(0,o.jsx)(r.p,{children:"The Modify Party can then work the order slice by slice until the original order\u2019s size has been filled completely or until it has been terminated by the Control Party."}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Party"}),(0,o.jsx)(r.th,{children:"Summary"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.strong,{children:"Control Party"})}),(0,o.jsxs)(r.td,{children:["Sets the original order\u2019s parameters ",(0,o.jsx)("br",{})," Responsible for creating, cancelling, or replacing orders"]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.strong,{children:"Modify Party"})}),(0,o.jsxs)(r.td,{children:["Has limited modification capabilities ",(0,o.jsx)("br",{})," Cannot change the order item, order size, or total order duration ",(0,o.jsx)("br",{})," Can adjust algorithm settings, active order size, and active order duration"]})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"order-workflow",children:"Order Workflow"}),"\n",(0,o.jsx)(r.h4,{id:"step-one-order-entry",children:"Step One: Order Entry"}),"\n",(0,o.jsx)(r.p,{children:"An account submits a new order which is passed through client gateways and into SpiderRock Connect\u2019s Execution Engine."}),"\n",(0,o.jsx)(r.p,{children:"The order has the total order size, the activeSize set to 0, and the stageType set to Modify."}),"\n",(0,o.jsx)(r.h4,{id:"step-two-order-handling",children:"Step Two: Order Handling"}),"\n",(0,o.jsx)(r.p,{children:"A Parent Broker State Record is created and passed through the system to appear in the Trade Tool."}),"\n",(0,o.jsx)(r.p,{children:"If the order is being sent to the Concierge Desk to be staged, a User Proxy Record will also be created so the Concierge Desk\u2019s broker will not receive any confidential client information beyond what is necessary to complete the stage review."}),"\n",(0,o.jsx)(r.h4,{id:"step-three-order-modification",children:"Step Three: Order Modification:"}),"\n",(0,o.jsx)(r.p,{children:"Within SpiderRock Connect's Trade Tool, users belonging to the Modify Party will be able to view the actions they have permissions for and from the tool, and adjust the order parameters at their discretion."}),"\n",(0,o.jsx)(r.p,{children:"The orders will then work within the specified active sizes and active durations until the original order is filled or terminated."}),"\n",(0,o.jsxs)("ol",{children:[" ",(0,o.jsx)("strong",{children:" Note: "})," Stage Review Checks are triggered by changes in the total size of an order or during cancel/replace operations. These checks are also activated when an order previously marked as closed is reawakened. "]}),"\n",(0,o.jsx)(r.h2,{id:"market-session-handling",children:"Market Session Handling"}),"\n",(0,o.jsx)(r.p,{children:"According to client instructions, orders are assigned to market sessions (pre-market, regular market, or post-market)."}),"\n",(0,o.jsx)(r.p,{children:"SpiderRock Connect\u2019s Execution Engine will create and submit the Market-on-Open and Market-on-Close orders before either Market Open or Market Close in order to participate in the relevant auction. Otherwise, simple orders are eligible for pre-market sessions with start times and good-till times managed by SpiderRock Connect."}),"\n",(0,o.jsx)(r.h3,{id:"order-lifecycle-and-termination",children:"Order Lifecycle and Termination"}),"\n",(0,o.jsx)(r.p,{children:"Orders have a final reaping time, typically five minutes after the regular good-till time of the relevant exchange. SpiderRock Connect aims to receive cancel acknowledgments from exchanges within this window. A Control Party can explicitly set start and good-till times which would take precedence over session-derived times."}),"\n",(0,o.jsx)(r.h3,{id:"active-and-effective-order-duration",children:"Active and Effective Order Duration"}),"\n",(0,o.jsx)(r.p,{children:"The active duration of an order can be modified by the Control or Modify party. The Execution Engine recalculates order start and good-till times based on the effective duration, ensuring proper order handling."})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>s});var o=t(96540);const n={},i=o.createContext(n);function a(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);
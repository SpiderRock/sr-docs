"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75260],{31519:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(74848),o=t(28453);const i={title:"Order Execution Risk Controls"},n=void 0,l={id:"Documentation/PlatformFeatures/OrderExecution/RiskControls/RiskControls",title:"Order Execution Risk Controls",description:"Risk Controls Summary",source:"@site/docs/Documentation/PlatformFeatures/OrderExecution/RiskControls/RiskControls.md",sourceDirName:"Documentation/PlatformFeatures/OrderExecution/RiskControls",slug:"/Documentation/PlatformFeatures/OrderExecution/RiskControls/",permalink:"/docs/Documentation/PlatformFeatures/OrderExecution/RiskControls/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Order Execution Risk Controls"},sidebar:"documentationSidebar",previous:{title:"Markets And Products",permalink:"/docs/Documentation/PlatformFeatures/ProductCoverage"},next:{title:"Risk Checkpoints and Counters",permalink:"/docs/Documentation/PlatformFeatures/OrderExecution/RiskControls/RiskCheckpointsCounters"}},a={},c=[{value:"Risk Controls Summary",id:"risk-controls-summary",level:2},{value:"Overview",id:"overview",level:2},{value:"Risk Controls",id:"risk-controls",level:2},{value:"Global and Soft Limits Risk Controls",id:"global-and-soft-limits-risk-controls",level:3},{value:"MAR Risk Controls",id:"mar-risk-controls",level:3},{value:"MAR Risk Controls - Ticker Override",id:"mar-risk-controls---ticker-override",level:3},{value:"Supervisory Risk Controls",id:"supervisory-risk-controls",level:3},{value:"Risk Group Controls",id:"risk-group-controls",level:3}];function d(e){const r={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"risk-controls-summary",children:"Risk Controls Summary"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(99336).A+"",width:"627",height:"831"})}),"\n",(0,s.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(r.p,{children:"SpiderRock provides a robust framework for order arrival validation as well as continual risk assessment within its trading platform."}),"\n",(0,s.jsx)(r.p,{children:"SpiderRock operates four distinct risk control categories:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Risk Controls"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Global Risk Controls"})}),(0,s.jsxs)(r.td,{children:["Global risk controls are used to establish symbol specific max order size risk limits. Clients will not be able to edit the Global Risk Controls themselves. However, any violation of these limits will result in a rejection of the parent order. ",(0,s.jsx)("br",{})," Soft limits are another aspect of the Global Risk Controls that are internally found separate from the associated SRSE table."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"MAR Risk Controls"})}),(0,s.jsx)(r.td,{children:"These pre-trade limits are compliant with the 15c3-5 SEC Market Access Rule (MAR), which require broker-dealers to establish parent order-level risk controls. These MAR limits are mandatory when sending orders via SpiderRock. A client can set ticker-specific MAR limit controls with the optional MAR Risk Control Ticker Override message. If any of these controls are breached, new parent orders will be rejected, and the size of child orders will be constrained. There can be up to four \u2018Control Parties\u2019 for each parent order; SpiderRock is always one and is mandatory."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Supervisory Risk Controls"})}),(0,s.jsx)(r.td,{children:"These limits are tactical in nature and not required. They enable clients to implement more restrictive controls at the book, symbol, and user level. They are used to both constrain child orders and potentially reject parent orders."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Risk Group Controls"})}),(0,s.jsx)(r.td,{children:"These limits are associated with a given Risk Group ID linked to a distinct set of parent orders and dictate the size of the corresponding child orders being created. They can be implemented on expiry risk, symbol/day risk, EMA cancel triggers, as well as on greeks and notional values."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"risk-controls",children:"Risk Controls"}),"\n",(0,s.jsx)(r.h3,{id:"global-and-soft-limits-risk-controls",children:"Global and Soft Limits Risk Controls"}),"\n",(0,s.jsxs)(r.p,{children:["In addition to the client-set controls found in MAR and Supervisory Risk Controls, SpiderRock itself sets ",(0,s.jsx)(r.strong,{children:"global baseline"})," risk limits throughout its platform on a symbol basis. Clients cannot edit these global controls themselves but can be ",(0,s.jsx)(r.strong,{children:"overridden by the client\u2019s MAR risk controls"}),". SpiderRock\u2019s global controls are viewable to clients in SRSE in srcontrol.msgglobalriskcontrol. The majority of the limits present in Global Risk Controls are static in nature with the exception of the DDelta limits on options, stocks, or futures. These can be set according to a symbol\u2019s trading volume via the soft DDelta limit."]}),"\n",(0,s.jsxs)(r.p,{children:["In the SpiderRock system, a ",(0,s.jsx)(r.strong,{children:"soft DDelta limit"})," is a variable order metric that is calculated and adjusted based upon industry-wide trading activity in that specific symbol. These metrics are pre-set to relatively low levels and adjust upward based on current and previous day trading underlier and option trading volumes and well as underlier market cap."]}),"\n",(0,s.jsx)(r.p,{children:"For example, a high-volume symbol like AAPL will have relatively high soft DDelta limits while a low-volume symbol (less than $1B in market cap and less than 500,000 shares trade per day) would have DDelta limits at the lower pre-set level."}),"\n",(0,s.jsxs)("ol",{children:[" ",(0,s.jsx)("b",{children:" Implementation: "})," SpiderRock Admin Portal or programmatically via SRSE and MLink (srcontrol.msgglobalriskcontrol). ",(0,s.jsx)("br",{})," ",(0,s.jsx)("b",{children:" Control Parties: "})," SpiderRock is the control party. Clients are only able to view, not modify the controls. "]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/risk-control/GlobalRiskControl",children:["Click here to view the ",(0,s.jsx)(r.strong,{children:"Global Risk Control message."})]})}),"\n",(0,s.jsx)(r.h3,{id:"mar-risk-controls",children:"MAR Risk Controls"}),"\n",(0,s.jsxs)(r.p,{children:["MAR risk controls can be applied to both single and/or a group of SpiderRock accounts. The SpiderRock system supports sub-risk groups with up to four tiers for each SpiderRock account to support the organization of a client firm. ",(0,s.jsx)(r.strong,{children:"The most restrictive risk control will prevail."})]}),"\n",(0,s.jsxs)("ol",{children:[" ",(0,s.jsx)("b",{children:" Implementation: "})," SpiderRock Admin Portal or programmatically via SRSE (srcontrol.msgmarriskcontrol) ",(0,s.jsx)("br",{})," ",(0,s.jsx)("b",{children:" Control Parties:  "})," The SpiderRock support desk implements initial MAR risk controls at the time of onboarding per client instructions. Only client risk administrators have editing capabilities over MAR limits. "]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/risk-control/MarRiskControl",children:["Click here to view the ",(0,s.jsx)(r.strong,{children:"MAR Risk Control message."})]})}),"\n",(0,s.jsx)(r.h3,{id:"mar-risk-controls---ticker-override",children:"MAR Risk Controls - Ticker Override"}),"\n",(0,s.jsx)(r.p,{children:"To apply MAR risk controls to a specific ticker, a client risk administrator can use the MAR Risk Control TK Override message to set those limits. If a ticker control message has been created, that will be the top-level control limit for that ticker."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note that"})," SpiderRock will consider which limit is most restrictive when comparing the MAR controls and the MAR Ticker Override controls."]}),"\n",(0,s.jsxs)("ol",{children:[" ",(0,s.jsx)("b",{children:" Implementation: "})," SpiderRock Admin Portal or programmatically via SRSE (srcontrol.msgmarriskcontroltkoverride) ",(0,s.jsx)("br",{})," ",(0,s.jsx)("b",{children:" Control Parties:  "})," The SpiderRock support desk implements initial MAR risk controls at the time of onboarding per client instructions. Only client risk administrators have editing capabilities over MAR limits. "]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride",children:["Click here to view the ",(0,s.jsx)(r.strong,{children:"MAR Risk Control - TK Override message."})]})}),"\n",(0,s.jsx)(r.h3,{id:"supervisory-risk-controls",children:"Supervisory Risk Controls"}),"\n",(0,s.jsx)(r.p,{children:"The SpiderRock supervisory risk controls are tactical and optional. They can be applied at the account, ticker, and user level."}),"\n",(0,s.jsxs)("ol",{children:[" ",(0,s.jsx)("b",{children:" Implementation: "})," SpiderRock Admin Portal or programmatically via SRSE (srcontrol.msgsrriskcontrol) ",(0,s.jsx)("br",{})," ",(0,s.jsx)("b",{children:" Control Parties:  "})," Authorized clients can implement and edit supervisory risk controls. "]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl",children:["Click here to view the ",(0,s.jsx)(r.strong,{children:"Supervisory Risk Control message."})]})}),"\n",(0,s.jsx)(r.h3,{id:"risk-group-controls",children:"Risk Group Controls"}),"\n",(0,s.jsxs)(r.p,{children:["The Risk Group Controls provides order level tactical controls to groups of parent orders that are associated with a shared risk group ID. Any changes to the risk group control will immediately be applied to ",(0,s.jsx)(r.strong,{children:"all active parent orders with the same ID."})]}),"\n",(0,s.jsx)(r.p,{children:"Previously, clients would have to set risk group ID controls for every parent order entered into the system. If they needed to update any of the controls, a client would have to update every parent order to reflect those modifications. With the new table, a client will not have to enter the controls at the order level and can have the changes instead now impact all current parent orders and any new orders placed in the same risk group."}),"\n",(0,s.jsx)(r.p,{children:"A client will no longer be required to insert risk controls for each desired risk dimension while inserting orders. Now, as long as they include the risk group ID on new orders, the order will be included within the desired risk limits."}),"\n",(0,s.jsxs)("ol",{children:[" ",(0,s.jsx)("b",{children:" Implementation: "})," SpiderRock Admin Portal or programmatically via SRSE (srtrade.msgsrriskgroupcontrol) ",(0,s.jsx)("br",{})," ",(0,s.jsx)("b",{children:" Control Parties:  "})," Authorized clients can implement and edit risk group controls. "]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.a,{href:"/docs/MessageSchemas/Schema/Topics/risk-control/SpdrRiskGroupControl",children:["Click here to view the ",(0,s.jsx)(r.strong,{children:"Risk Group Control message."})]})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},99336:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/image-1ab6bb81f3fc20ec7a9b36e63bdf0c9e.png"},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>l});var s=t(96540);const o={},i=s.createContext(o);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);
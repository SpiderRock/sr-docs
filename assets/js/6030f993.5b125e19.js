"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14011],{17759:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=n(74848),r=n(28453);const s={title:"V7 to V8 Migration",sidebar_position:6},o=void 0,l={id:"Documentation/V8Migration/V8Migration",title:"V7 to V8 Migration",description:'Please find the list below which SpiderRock has put together. This can be used as a "migration checklist" when clients are looking to migrate from Version 7 to Version 8.',source:"@site/docs/Documentation/V8Migration/V8Migration.md",sourceDirName:"Documentation/V8Migration",slug:"/Documentation/V8Migration/",permalink:"/docs/Documentation/V8Migration/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"V7 to V8 Migration",sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"SRSE Servers",permalink:"/docs/Documentation/Integration/SRSEAccess"},next:{title:"Historical Data",permalink:"/docs/Documentation/HistoricalData/"}},c={},a=[{value:"Phase One:",id:"phase-one",level:2},{value:"Phase Two:",id:"phase-two",level:2},{value:"V7 to V8 Message Differences",id:"v7-to-v8-message-differences",level:2},{value:"Order Execution Risk Controls",id:"order-execution-risk-controls",level:2}];function d(e){const i={a:"a",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:'Please find the list below which SpiderRock has put together. This can be used as a "migration checklist" when clients are looking to migrate from Version 7 to Version 8.'}),"\n",(0,t.jsxs)("ul",{children:[" ",(0,t.jsx)("b",{children:"Note"})," - Many of these workflows are client-specific, so not all line items will apply to every single firm. If there are any questions regarding any checklist item, please reach out to ",(0,t.jsx)(i.a,{href:"mailto:desk@spiderrock.net",children:"desk@spiderrock.net"})," and we can advise."]}),"\n",(0,t.jsx)(i.h2,{id:"phase-one",children:"Phase One:"}),"\n",(0,t.jsx)("p",{style:{listStyleType:"square"},children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Confirm if new connectivity is required for V8"}),(0,t.jsx)("li",{children:"Migrate/establish new child level FIX drops"}),(0,t.jsx)("li",{children:"Migrate/establish new FIX Order Entry sessions (Client->SpiderRock)"}),(0,t.jsx)("li",{children:"Audit ClientFirm Config Setup (SR Admin work)"}),(0,t.jsx)("li",{children:"Confirm User Access Levels"}),(0,t.jsx)("li",{children:"Audit User Config Setup"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Tool Access"}),(0,t.jsx)("li",{children:"SRSE Access"}),(0,t.jsx)("li",{children:"Market Data Access"})]}),(0,t.jsx)("li",{children:"Audit AccountConfig (SR Admin work)"}),(0,t.jsx)("li",{children:"Ensure FIX order routing sessions are connected and configured properly in V8 (SpiderRock->Executing Broker)"}),(0,t.jsx)("li",{children:"Audit/work with client to adjust MAR, Supervisory, and future risk controls for new V8 logic"}),(0,t.jsx)("li",{children:"Work with client to adjust any SRSE queries to new V8 table syntax"}),(0,t.jsx)("li",{children:"Replicate AltRouteCode/AltSymbolMap workflows"}),(0,t.jsx)("li",{children:"Audit product definitions for any futures/options on futures in scope"}),(0,t.jsx)("li",{children:"Audit TheoModelConfig records"}),(0,t.jsx)("li",{children:"Audit BillingSchedule records"}),(0,t.jsx)("li",{children:"Audit ClientAccntStrategy records"}),(0,t.jsx)("li",{children:"Audit ClientBeta records"}),(0,t.jsx)("li",{children:"Audit Sector/IndustryControl records"}),(0,t.jsx)("li",{children:"Audit AggGroup Mappings"})]})}),"\n",(0,t.jsxs)("ul",{children:[" ",(0,t.jsx)("b",{children:" Note: "})," Due to briding between the V7 and V8 environments, all start-of-day loaders and parent-level/execution-only FIX Drops can remain in V7 during a client's migration if that helps reduce entropy and risk. "]}),"\n",(0,t.jsx)(i.h2,{id:"phase-two",children:"Phase Two:"}),"\n",(0,t.jsx)("p",{style:{listStyleType:"square"},children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:" Migrating SoD Loaders: Positions, Locates, Restricted List "}),(0,t.jsx)("li",{children:" Migrating parent-level/execution-only FIX drops "})]})}),"\n",(0,t.jsx)(i.h2,{id:"v7-to-v8-message-differences",children:"V7 to V8 Message Differences"}),"\n",(0,t.jsxs)(i.p,{children:["Please review our ",(0,t.jsx)(i.a,{href:"/docs/MessageSchemas/V7%20to%20V8%20Differences/",children:(0,t.jsx)(i.strong,{children:"V7 to V8 Message Differences"})})," and take note of our deprecated and renamed messages as well as the SRSE structural differences."]}),"\n",(0,t.jsx)(i.h2,{id:"order-execution-risk-controls",children:"Order Execution Risk Controls"}),"\n",(0,t.jsxs)(i.p,{children:["Please review our ",(0,t.jsx)(i.a,{href:"/docs/Documentation/PlatformFeatures/OrderManagement/ExecutionRiskControl",children:(0,t.jsx)(i.strong,{children:"Order Execution Risk Controls"})})," to learn more about how Global, MAR, and Supervisory risk controls are used in V8."]})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);
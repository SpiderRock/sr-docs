"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73772],{34478:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var d=r(74848),n=r(28453);const i={title:"Stripes",sidebar_position:7},t=void 0,c={id:"Documentation/Integration/Stripes",title:"Stripes",description:"This page provides an overview of various groups of stripes, detailing the specific data associated with each. It also includes compound stripes, which are collections of multiple stripes grouped together to encompass broader topics.",source:"@site/versioned_docs/version-8.5.3.3/Documentation/Integration/Stripes.md",sourceDirName:"Documentation/Integration",slug:"/Documentation/Integration/Stripes",permalink:"/docs/8.5.3.3/Documentation/Integration/Stripes",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",sidebarPosition:7,frontMatter:{title:"Stripes",sidebar_position:7},sidebar:"documentationSidebar",previous:{title:"SRSE Servers",permalink:"/docs/8.5.3.3/Documentation/Integration/SRSEAccess"},next:{title:"V7 to V8 Migration",permalink:"/docs/8.5.3.3/Documentation/V8Migration/"}},l={},h=[{value:"Core Stripes",id:"core-stripes",level:2},{value:"Compound Stripes",id:"compound-stripes",level:3},{value:"Indexes",id:"indexes",level:2},{value:"Compound Stripes",id:"compound-stripes-1",level:3},{value:"Over-the-Counter / Mutual Fund / Other",id:"over-the-counter--mutual-fund--other",level:2},{value:"Compound Stripes",id:"compound-stripes-2",level:3},{value:"Market Indexes",id:"market-indexes",level:2},{value:"Compound Stripes",id:"compound-stripes-3",level:3},{value:"SPX / Global Trading Hours",id:"spx--global-trading-hours",level:2},{value:"Compound Stripes",id:"compound-stripes-4",level:3}];function o(e){const s={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"This page provides an overview of various groups of stripes, detailing the specific data associated with each. It also includes compound stripes, which are collections of multiple stripes grouped together to encompass broader topics."}),"\n",(0,d.jsx)(s.p,{children:"The SpiderRock Connect system organizes TickerKeys into stripe sets to help balance processing through the platform. Stripes allow data processing to be distributed across multiple processes, both from load balancing and geographical data management. In general, any TickerKey can be associated with a single (native) stripe and data subscriptions can be made for one or more native stripes. To help simplify data subscriptions we have also created compound stripes for use in data subscriptions. Compound stripes are simply groups of native stripes and can be used interchangeably with native stripes in subscription strings."}),"\n",(0,d.jsx)(s.p,{children:"Note that some native stripes are defined using specific ticker symbols and some are defined as ranges of tickers. The more specific ticker symbol stripes take precedence when determining which stripe a ticker is associated with."}),"\n",(0,d.jsx)(s.p,{children:"Note that stripes are exclusive, if a ticker is found within a specific stripe, it will not be available in another. When defined as a range, the symbol ending the range is not included in the stripe."}),"\n",(0,d.jsx)(s.p,{children:"SpiderRock Connect picks stripes and stripe boundaries, in part, to balance internal normalized data flows.  As a result, we do periodically change stripe boundaries as flow patterns change."}),"\n",(0,d.jsx)(s.p,{children:"If there are any upcoming changes being implemented to re-balance these stripes, they will be detailed at the bottom of the page along with the date those changes will go into effect."}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.em,{children:"This page is accurate as of December 2024."})}),"\n",(0,d.jsx)(s.h2,{id:"core-stripes",children:"Core Stripes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Stripe"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"A1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"A to ATUS"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"A2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"ATUS to COIN"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"B1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"COIN to ENQZZ"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"B2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"ENQZZ to GOOGL"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"C1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"GOOGL to IWM"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"C2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"IWM to LRCX"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"D1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LRCX to METAA"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"D2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"METAA to NFLX"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"E1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NFLX to NVDA"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"E2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NVDA to NVDAA"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"F1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NVDAA to QQQ"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"F2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"QQQ to QQQA"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"G1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"QQQA to SPY"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"G2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"SPY to SPYA"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"H1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"SPYA to TSLAA"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"H2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"TSLAA to ZZZZZZ"})})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"compound-stripes",children:"Compound Stripes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Compound Stripe"}),(0,d.jsx)(s.th,{children:"Stripes"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"A"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"A1, A2"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"B"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"B1, B2"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"C"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"C1, C2"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"D"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"D1, D2"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"E"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"E1, E2"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"F"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"F1, F2"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"G"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"G1, G2"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"H"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"H1, H2"})})]})]})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"indexes",children:"Indexes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Stripe"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"I1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"CIDX"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"I2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DJI"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"I3"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"RUT"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"I4"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"MIAX"})})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"compound-stripes-1",children:"Compound Stripes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Compound Stripe"}),(0,d.jsx)(s.th,{children:"Stripes"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"I"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"I1, I2, I3, I4"})})]})})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"over-the-counter--mutual-fund--other",children:"Over-the-Counter / Mutual Fund / Other"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Stripe"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"J1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"OTC"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"J2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"MFQS"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"J3"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"CUSIP"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"J4"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"ISIN"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"J5"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"SR"})})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"compound-stripes-2",children:"Compound Stripes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Compound Stripe"}),(0,d.jsx)(s.th,{children:"Stripes"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"J"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"J1, J2, J3, J4, J5"})})]})})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"market-indexes",children:"Market Indexes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Stripe"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"M1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"IWM, RUT, RUTW, MRUT"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"M2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"SPY, VXX"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"M3"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"QQQ, NDX, NDXP, NQX, XND"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"M4"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"OEF, OEX, DIA, DJX, EFA, MXEA, EEM, MXEF"})})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"compound-stripes-3",children:"Compound Stripes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Compound Stripe"}),(0,d.jsx)(s.th,{children:"Stripes"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"M"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"M1, M2, M3, M4"})})]})})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"spx--global-trading-hours",children:"SPX / Global Trading Hours"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Stripe"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"S"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"SPX, SPXW, XSP, VIX, VIXW"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"V"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"CFE"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"X1"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"CME"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"X2"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"CBOT"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"X3"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NYMEX"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"X4"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"COMEX"})})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"compound-stripes-4",children:"Compound Stripes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Compound Stripe"}),(0,d.jsx)(s.th,{children:"Stripes"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"X"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"X1, X2, X3, X4"})})]})})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>c});var d=r(96540);const n={},i=d.createContext(n);function t(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);
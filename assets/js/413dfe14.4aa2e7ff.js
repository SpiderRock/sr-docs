"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21375],{46901:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=t(74848),d=t(28453);const i={title:"Stripes",sidebar_position:2},n=void 0,l={id:"Documentation/PlatformAPIs/Stripes",title:"Stripes",description:"Ticker Key Stripes",source:"@site/docs/Documentation/PlatformAPIs/Stripes.md",sourceDirName:"Documentation/PlatformAPIs",slug:"/Documentation/PlatformAPIs/Stripes",permalink:"/docs/Documentation/PlatformAPIs/Stripes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Stripes",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Software Release Cycle",permalink:"/docs/Documentation/PlatformAPIs/SoftwareReleases"},next:{title:"MLink",permalink:"/docs/Documentation/PlatformAPIs/MLink/"}},c={},h=[{value:"Ticker Key Stripes",id:"ticker-key-stripes",level:2},{value:"Native Stripes",id:"native-stripes",level:2},{value:"US SPX Market Stripe",id:"us-spx-market-stripe",level:3},{value:"US Index/ETF Market Stripes",id:"us-indexetf-market-stripes",level:3},{value:"NMS Market Stripes",id:"nms-market-stripes",level:3},{value:"Spot Index Stripes",id:"spot-index-stripes",level:3},{value:"Exchange Specific Stripes",id:"exchange-specific-stripes",level:3},{value:"OTC / Mutual Fund / Other Source Stripes",id:"otc--mutual-fund--other-source-stripes",level:3},{value:"Compound Stripes",id:"compound-stripes",level:2}];function x(e){const s={h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"ticker-key-stripes",children:"Ticker Key Stripes"}),"\n",(0,r.jsx)(s.p,{children:"The SpiderRock Connect system organizes TickerKeys into stripe sets to help balance processing through the platform. Stripes allow data processing to be distributed across multiple processes, both from load balancing and geographical data management. In general, any TickerKey can be associated with a single (native) stripe and data subscriptions can be made for one or more native stripes. To help simplify data subscriptions we have also created compound stripes for use in data subscriptions. Compound stripes are simply groups of native stripes and can be used interchangeably with native stripes in subscription strings."}),"\n",(0,r.jsx)(s.p,{children:"Note that some native stripes are defined using specific ticker symbols and some are defined as ranges of tickers. The more specific ticker symbol stripes take precedence when determining which stripe a ticker is associated with. For example, QQQ-NMS-EQT is in the M1 stripe and not in the F2 stripe."}),"\n",(0,r.jsx)(s.p,{children:"Note that stripes are exclusive, if a ticker is found within a specific stripe, it will not be available in another. When defined as a range, the symbol ending the range is not included in the stripe."}),"\n",(0,r.jsx)(s.p,{children:"SpiderRock Connect picks stripes and stripe boundaries, in part, to balance internal normalized data flows.  As a result, we do periodically change stripe boundaries as flow patterns change."}),"\n",(0,r.jsx)(s.h2,{id:"native-stripes",children:"Native Stripes"}),"\n",(0,r.jsx)(s.h3,{id:"us-spx-market-stripe",children:"US SPX Market Stripe"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Stripe"}),(0,r.jsx)(s.th,{children:"TickerSrc"}),(0,r.jsx)(s.th,{children:"Symbols"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"S"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"SPX, SPXW, XSP, VIX, VIXW"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"us-indexetf-market-stripes",children:"US Index/ETF Market Stripes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Stripe"}),(0,r.jsx)(s.th,{children:"TickerSrc"}),(0,r.jsx)(s.th,{children:"Symbols"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"M1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"NDX, NDXP, RUT, RUTW, MRUT"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"M2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"SPY, VXX"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"M3"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"QQQ"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"M4"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"IWM"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"nms-market-stripes",children:"NMS Market Stripes"}),"\n",(0,r.jsx)(s.p,{children:"US NMS equity and option stripes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Stripe"}),(0,r.jsx)(s.th,{children:"TickerSrc"}),(0,r.jsx)(s.th,{children:"StartSymbol"}),(0,r.jsx)(s.th,{children:"EndSymbol"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"A1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"A"}),(0,r.jsx)(s.td,{children:"AMZN"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"A2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"AMZN"}),(0,r.jsx)(s.td,{children:"COIN"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"B1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"COIN"}),(0,r.jsx)(s.td,{children:"ENQZZ"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"B2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"ENQZZ"}),(0,r.jsx)(s.td,{children:"GOOGL"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"GOOGLE"}),(0,r.jsx)(s.td,{children:"IWM"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"IWM"}),(0,r.jsx)(s.td,{children:"LRCX"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"D1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"LRCX"}),(0,r.jsx)(s.td,{children:"METAA"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"D2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"METAA"}),(0,r.jsx)(s.td,{children:"NFLX"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"E1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"NFLX"}),(0,r.jsx)(s.td,{children:"NVDA"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"E2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"NVDA"}),(0,r.jsx)(s.td,{children:"NVDAA"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"F1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"NVDAA"}),(0,r.jsx)(s.td,{children:"QQQ"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"F2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"QQQ"}),(0,r.jsx)(s.td,{children:"QQQA"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"G1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"QQQA"}),(0,r.jsx)(s.td,{children:"SPY"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"G2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"SPY"}),(0,r.jsx)(s.td,{children:"SPYA"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"H1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"SPYA"}),(0,r.jsx)(s.td,{children:"TSLAA"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"H2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"TSLAA"}),(0,r.jsx)(s.td,{children:"ZZZZZZ"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"spot-index-stripes",children:"Spot Index Stripes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Stripe"}),(0,r.jsx)(s.th,{children:"TickerSrc"}),(0,r.jsx)(s.th,{children:"Symbol"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"I1"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"CDIX"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"I2"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"DJI"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"I3"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"RUT"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"I4"}),(0,r.jsx)(s.td,{children:"NMS"}),(0,r.jsx)(s.td,{children:"MIAX"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"exchange-specific-stripes",children:"Exchange Specific Stripes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Stripe"}),(0,r.jsx)(s.th,{children:"TickerSrc"}),(0,r.jsx)(s.th,{children:"Symbol"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"V"}),(0,r.jsx)(s.td,{children:"CFE"}),(0,r.jsx)(s.td,{children:"all"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"X1"}),(0,r.jsx)(s.td,{children:"CME"}),(0,r.jsx)(s.td,{children:"all"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"X2"}),(0,r.jsx)(s.td,{children:"CBOT"}),(0,r.jsx)(s.td,{children:"all"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"X3"}),(0,r.jsx)(s.td,{children:"NYMEX"}),(0,r.jsx)(s.td,{children:"all"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"X4"}),(0,r.jsx)(s.td,{children:"COMEX"}),(0,r.jsx)(s.td,{children:"all"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"otc--mutual-fund--other-source-stripes",children:"OTC / Mutual Fund / Other Source Stripes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Stripe"}),(0,r.jsx)(s.th,{children:"TickerSrc"}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"J1"}),(0,r.jsx)(s.td,{children:"OTC"}),(0,r.jsx)(s.td,{children:"all"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"J2"}),(0,r.jsx)(s.td,{children:"MFQS"}),(0,r.jsx)(s.td,{children:"all"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"J3"}),(0,r.jsx)(s.td,{children:"CUSIP"}),(0,r.jsx)(s.td,{children:"all"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"J4"}),(0,r.jsx)(s.td,{children:"ISIN"}),(0,r.jsx)(s.td,{children:"all"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"J5"}),(0,r.jsx)(s.td,{children:"SR"}),(0,r.jsx)(s.td,{children:"all"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"compound-stripes",children:"Compound Stripes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Stripe"}),(0,r.jsx)(s.th,{children:"Native Stripes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"A"}),(0,r.jsx)(s.td,{children:"A1, A2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"B"}),(0,r.jsx)(s.td,{children:"B1, B2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C"}),(0,r.jsx)(s.td,{children:"C1, C2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"D"}),(0,r.jsx)(s.td,{children:"D1, D2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"E"}),(0,r.jsx)(s.td,{children:"E1, E2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"F"}),(0,r.jsx)(s.td,{children:"F1, F2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"G"}),(0,r.jsx)(s.td,{children:"G1, G2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"H"}),(0,r.jsx)(s.td,{children:"H1, H2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"I"}),(0,r.jsx)(s.td,{children:"I1, I2, I3, I4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"J"}),(0,r.jsx)(s.td,{children:"J1, J2, J3, J4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"M"}),(0,r.jsx)(s.td,{children:"M1, M2, M3, M4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X1, X2, X3, X4"})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>l});var r=t(96540);const d={},i=r.createContext(d);function n(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[23888],{65054:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=s(74848),r=s(28453);const n={title:"SRSE",sidebar_position:4},o=void 0,i={id:"Documentation/PlatformAPIs/SRSE/SRSE",title:"SRSE",description:'SRSE is a relational database that provides a SQL interface to the SpiderRock Connect Live Messaging Platform. SRSE, pronounced "SAR-see", consists of a MariaDB 10.11.4 database whose data is managed by our proprietary in-memory storage engine.',source:"@site/versioned_docs/version-8.5.1.3/Documentation/PlatformAPIs/SRSE/SRSE.md",sourceDirName:"Documentation/PlatformAPIs/SRSE",slug:"/Documentation/PlatformAPIs/SRSE/",permalink:"/docs/8.5.1.3/Documentation/PlatformAPIs/SRSE/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",sidebarPosition:4,frontMatter:{title:"SRSE",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"LiveImpliedQuote to LiveImpliedQuoteAdj Conversion",permalink:"/docs/8.5.1.3/Documentation/PlatformAPIs/MLink/MessageConversion"},next:{title:"FIX",permalink:"/docs/8.5.1.3/Documentation/PlatformAPIs/FIX/"}},d={},c=[{value:"SRSE Databases Summary",id:"srse-databases-summary",level:2},{value:"DocTables and DocColumns",id:"doctables-and-doccolumns",level:2},{value:"Query Example",id:"query-example",level:4},{value:"How to Connect to SRSE",id:"how-to-connect-to-srse",level:2},{value:"Workflow Example: Implementation of a Systematic Strategy",id:"workflow-example-implementation-of-a-systematic-strategy",level:2}];function l(e){const t={a:"a",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:'SRSE is a relational database that provides a SQL interface to the SpiderRock Connect Live Messaging Platform. SRSE, pronounced "SAR-see", consists of a MariaDB 10.11.4 database whose data is managed by our proprietary in-memory storage engine.'}),"\n",(0,a.jsx)(t.p,{children:"Rows selected from SRSE tables represent the current (most recent) version of corresponding live data records within the SpiderRock Connect trading platform. Through SRSE, users can for example access live equity, options, and futures NBBO prices, implied volatilities, greeks, prints, risk records and more. Rows inserted into SRSE tables are published as live data records that are then consumed elsewhere in the platform. SRSE is also a high-throughput gateway via which users can upload parent orders that are tightly integrated with SpiderRock Connect's execution algorithms and the SpiderRock Connect GUI tools."}),"\n",(0,a.jsxs)("ol",{children:[" ",(0,a.jsx)("strong",{children:" Note: "})," Many of the live multicast streams that feed data to SRSE servers can be accessed directly from the wire using SpiderRock Connect's multicast packet handling libraries or by integrating our packet layouts directly into your multicast gateway(s). ",(0,a.jsx)("a",{href:"https://docs.spiderrockconnect.com/docs/next/ContactUs/",children:"Contact SpiderRock Client Support Desk for more details."})," "]}),"\n",(0,a.jsx)(t.h2,{id:"srse-databases-summary",children:"SRSE Databases Summary"}),"\n",(0,a.jsx)(t.p,{children:"SRSE consists of the following eight databases:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"SRSE Database"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/SRSE%20Products/SRAnalytics/",children:(0,a.jsx)(t.strong,{children:"SR Analytics"})})}),(0,a.jsxs)(t.td,{children:["- Live and prior day SpiderRock Connect live surfaces ",(0,a.jsx)("br",{})," - Live and prior day implied volatilities and greeks ",(0,a.jsx)("br",{})," - Rate curve, dividend, and earning estimates ",(0,a.jsx)("br",{})," - Historical underlying volatility tables"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/SRSE%20Products/SRTrade/",children:(0,a.jsx)(t.strong,{children:"SR Trade"})})}),(0,a.jsxs)(t.td,{children:["- SpiderRock Connect equity, option, and future parent order management ",(0,a.jsx)("br",{})," - Parent order executions and parent order reports ",(0,a.jsx)("br",{})," - Multi-leg parent order management ",(0,a.jsx)("br",{})," - Upload away executions (drops)"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/SRSE%20Products/SRLive/",children:(0,a.jsx)(t.strong,{children:"SR Live"})})}),(0,a.jsxs)(t.td,{children:["- U.S. equity, option, and future live quotes and prints ",(0,a.jsx)("br",{})," - Product definition tables (OCC, CME, ICE, & Equity NMS) ",(0,a.jsx)("br",{})," - Complex order book quotes and exchange imbalances ",(0,a.jsx)("br",{})," - High throughout bulk access to full market data universe"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/SRSE%20Products/SRSpread/",children:(0,a.jsx)(t.strong,{children:"SR Spread"})})}),(0,a.jsxs)(t.td,{children:["- U.S. equity options live quotes ",(0,a.jsx)("br",{})," - U.S. options on futures live quotes and prints ",(0,a.jsx)("br",{})," - Futures spread market tables"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/SRSE%20Products/SRAuction/",children:(0,a.jsx)(t.strong,{children:"SR Auction"})})}),(0,a.jsxs)(t.td,{children:["- Normalized equity option single leg and complex auction feeds ",(0,a.jsx)("br",{})," - Auction result analytics"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/SRSE%20Products/SRRisk/",children:(0,a.jsx)(t.strong,{children:"SR Risk"})})}),(0,a.jsxs)(t.td,{children:["- Prior day SpiderRock Connect archived positions and marks ",(0,a.jsx)("br",{})," - Start-of-period clearing firm positions and marks ",(0,a.jsx)("br",{})," - SpiderRock Connect executions and inbound away drops ",(0,a.jsx)("br",{})," - Live position greeks and slide risk across entire portfolio"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/SRSE%20Products/SRControl/",children:(0,a.jsx)(t.strong,{children:"SR Control"})})}),(0,a.jsxs)(t.td,{children:["- View and manage symbol and user supervisory trade risk controls ",(0,a.jsx)("br",{})," - Manage borrow rates, locates, and restricted trading lists ",(0,a.jsx)("br",{})," - Dynamically control algo configuration and delivery instructions ",(0,a.jsx)("br",{})," - Integrated with SpiderRock GUI tools"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/SRSE%20Products/SRTheo/",children:(0,a.jsx)(t.strong,{children:"SR Theo"})})}),(0,a.jsxs)(t.td,{children:["- Upload parameterized or splined theoretical volatility surfaces ",(0,a.jsx)("br",{})," - Download per-strike theoretical volatilities, price, and greeks ",(0,a.jsx)("br",{})," - Manage buy/sell/volatility levels for idea generation and position evaluation ",(0,a.jsx)("br",{})," -  Integrated with SpiderRock GUIs and other SRSE tables"]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"doctables-and-doccolumns",children:"DocTables and DocColumns"}),"\n",(0,a.jsx)(t.p,{children:"Each SRSE database contains two tables that have metadata about the tables in that database."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The docTables table contains descriptions for the tables available within that SRSE database"}),"\n",(0,a.jsx)(t.li,{children:"The docColumns table contains column descriptions, default values, repeating group schemas, and additional column metadata"}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"query-example",children:"Query Example"}),"\n",(0,a.jsx)(t.p,{children:"SELECT * FROM SRTrade.docColumns WHERE table_name = 'msgoptordergateway';"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-connect-to-srse",children:"How to Connect to SRSE"}),"\n",(0,a.jsx)(t.p,{children:"All SRSE servers are located in the SpiderRock Connect datacenters and managed by SpiderRock. Access to SRSE is available via a MariaDB TCP connection using an assigned address/port combination. SRSE servers are available in our NY5 (Secaucus, New Jersey) and DC3 (Aurora, Illinois) datacenters and can be accessed via cross connect or any suitable network connection, including over the public internet. Encrypted SSL connectivity is also available."}),"\n",(0,a.jsx)(t.p,{children:"SRSE can be accessed using SQL console tools or database drivers capable of connecting to MariaDb 10.11.4 or later."}),"\n",(0,a.jsx)(t.h2,{id:"workflow-example-implementation-of-a-systematic-strategy",children:"Workflow Example: Implementation of a Systematic Strategy"}),"\n",(0,a.jsx)(t.p,{children:"A typical approach to implement a systematic trading strategy via SRSE can be summarized with the following steps using the coding language of the client\u2019s choice:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Select the target strike greeks from the msgOptionImpliedQuote table (SRAnalytics)."}),"\n",(0,a.jsx)(t.li,{children:"Select current risk tallies for all associated executions so far today (SRRisk)."}),"\n",(0,a.jsx)(t.li,{children:"Compose a parent order basket based on the results from the above queries as well as any additional risk or order handling parameters and insert back into the msgOptOrderGateway table, usually using \u201cLOAD DATA INFILE\u201d syntax. (SRTrade)"}),"\n",(0,a.jsx)(t.li,{children:"Monitor working parent orders by repeatedly selecting from the msgSrOptBrkrState table (SRTrade) and/or watching the Order Manager tool."}),"\n",(0,a.jsx)(t.li,{children:"Monitor any resulting fills by either repeatedly selecting from the msgSrParentExecution table (SRTrade) and/or watching the Order Manager tool."}),"\n",(0,a.jsx)(t.li,{children:"Clients typically iterate through the same process to achieve objectives."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," If necessary, SpiderRock Connect can drop orders and fills back to the client via FIX, even if the orders were originally uploaded via SRSE."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var a=s(96540);const r={},n=a.createContext(r);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
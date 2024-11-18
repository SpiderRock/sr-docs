"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14011],{17759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(74848),o=n(28453);const r={title:"V7 to V8 Migration",sidebar_position:6},s=void 0,a={id:"Documentation/V8Migration/V8Migration",title:"V7 to V8 Migration",description:"SpiderRock Connect (aka Version 8) has the following key features and changes compared to our current production V7 system:",source:"@site/docs/Documentation/V8Migration/V8Migration.md",sourceDirName:"Documentation/V8Migration",slug:"/Documentation/V8Migration/",permalink:"/docs/next/Documentation/V8Migration/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"V7 to V8 Migration",sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"SRSE Servers",permalink:"/docs/next/Documentation/Integration/SRSEAccess"},next:{title:"Historical Data",permalink:"/docs/next/Documentation/HistoricalData/"}},c={},l=[{value:"Client Firm Structure",id:"client-firm-structure",level:2},{value:"New WebApp Tools",id:"new-webapp-tools",level:2},{value:"MLink API",id:"mlink-api",level:2},{value:"SpiderRock ATS",id:"spiderrock-ats",level:2},{value:"SRSE Upgrades and Changes",id:"srse-upgrades-and-changes",level:2},{value:"New Data Centers / System Environment",id:"new-data-centers--system-environment",level:2},{value:"Redesigned Network Access Layer",id:"redesigned-network-access-layer",level:2},{value:"Modifications and Enhancements to Execution Risk Controls",id:"modifications-and-enhancements-to-execution-risk-controls",level:2},{value:"User Access Control Upgrades",id:"user-access-control-upgrades",level:2}];function d(e){const t={h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"SpiderRock Connect (aka Version 8) has the following key features and changes compared to our current production V7 system:"}),"\n",(0,i.jsx)(t.h2,{id:"client-firm-structure",children:"Client Firm Structure"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:" We have expanded our existing trading account and client firm structure and now natively support a two level hierarchy for larger clients (a core client firm with any number of sub-client firms).  And we allow core client firms to be sponsored by a firm other that SpiderRock EXS itself.  Existing V7 client firms most closely represent core- client firms in V8.  Please confirm with our Client Support Desk that your current configuration is appropriate. "})}),"\n",(0,i.jsx)(t.h2,{id:"new-webapp-tools",children:"New WebApp Tools"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"SpiderRock is currently in the process of migrating our current Citrix-based Tools to WebApps.  We expect the process to convert the legacy tools to web-based to last at least a year or more.  The first incantation of our WebApps is the Trade App, which is a live order and execution management tool that will allow clients to view market data and interact with the SpiderRock ATS, as well as interact with any public market."}),(0,i.jsx)("li",{children:"The Control Viewer from V7 has been replaced by a new Web-based Portal. "}),(0,i.jsx)("li",{children:"All new WebApps will require 2-factor authentication to login and clients must reach out to the Client Support Desk to request a token for their initial login."})]}),"\n",(0,i.jsx)(t.h2,{id:"mlink-api",children:"MLink API"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[" SpiderRock Connect is offering a new MLink API to provide access to live-data objects via both REST queries and WebSocket streaming.  For further details, please visit: ",(0,i.jsx)("a",{href:"https://docs.spiderrockconnect.com/docs/next/Documentation/PlatformAPIs/MLink/",children:"MLink"})]})}),"\n",(0,i.jsx)(t.h2,{id:"spiderrock-ats",children:"SpiderRock ATS"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:["Coming soon, our new options ATS, SpiderRock ATS, will match indications of interest from liquidity seekers and responders in both Flash and Block Auctions.  Participation is available to broker-dealers and qualified institutional clients of SpiderRock EXS.  If you would like to participate, please reach out to our Client Support Desk to confirm if you are eligible.  For further information, please visit: ",(0,i.jsx)("a",{href:"https://docs.spiderrockconnect.com/docs/next/SpiderRockConnectATS/SpiderRockConnectATS/",children:"SpiderRock ATS."})]})}),"\n",(0,i.jsx)(t.h2,{id:"srse-upgrades-and-changes",children:"SRSE Upgrades and Changes"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" All SRSE instances will now be exclusively run on MariaDB databases.  Clients accessing a public SRSE will round-robin their access amongst a pool of SRSE instances, allowing real-time redundancy. "}),(0,i.jsxs)("li",{children:[" Some tables have been deprecated, while others have been modified and new tables have been added.  To learn more about the SRSE differences between V7 and V8, please visit: ",(0,i.jsx)("a",{href:"https://docs.spiderrockconnect.com/docs/next/MessageSchemas/V7%20to%20V8%20Differences/",children:"V7 to V8 Differences."})]})]}),"\n",(0,i.jsx)(t.h2,{id:"new-data-centers--system-environment",children:"New Data Centers / System Environment"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"SpiderRock Connect (V8) will operate out of the NY5 and DC3 data centers, in comparison to V7, which resides in NY4 and CH2 data centers.  While the two environments will run completely separate from a physical perspective, critical messages will be bridged between them to ensure that risk is updated real-time. This will allow clients to trade in both systems concurrently and manage their migration to V8 in stages as they see fit."}),(0,i.jsx)("li",{children:"Firms that currently maintain direct connectivity into our V7 environment should work with our Client Support Desk & Networking teams to ensure that this connectivity can be leveraged for V8 as well. "})]}),"\n",(0,i.jsx)(t.h2,{id:"redesigned-network-access-layer",children:"Redesigned Network Access Layer"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"SpiderRock Connect has implemented a network proxy layer in between all externally-sourced connections and our MLink, SRSE, FIX and WebApp infrastructures.  This will allow for increased redundancy amongst services, as well as enhance our protections against unexpected and potentially harmful activity. This implementation should be transparent to clients and require no further action from them."})}),"\n",(0,i.jsx)(t.h2,{id:"modifications-and-enhancements-to-execution-risk-controls",children:"Modifications and Enhancements to Execution Risk Controls"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:["SpiderRock Connect has modified our MAR limits (Market Access Rule/SEC 15c3-5) in V8 to what we believe are more appropriate and relevant limits to our clients\u2019 activity.  In addition, we\u2019ve introduced the ability to add symbol-specific limits at the MAR level.  Furthermore, we\u2019ve modified our $delta calculations for equity options, removing the multiplier component.  For further information, please visit: ",(0,i.jsx)("a",{href:"https://docs.spiderrockconnect.com/docs/next/Documentation/PlatformFeatures/OrderManagement/ExecutionRiskControl/",children:"Execution Risk Controls"})]})}),"\n",(0,i.jsx)(t.h2,{id:"user-access-control-upgrades",children:"User Access Control Upgrades"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:" The list of available User Types has been simplified and we have added a number of more granular Access Control Settings that will control a user\u2019s access going forward.  Please review your firm\u2019s current user list and coordinate with the Client Support Desk to configure the appropriate access control settings per user. "})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
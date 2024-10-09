"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[50330],{46160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=r(74848),i=r(28453);const n={sidebar_position:1,title:"ClientTheo"},o=void 0,c={id:"MessageSchemas/Schema/MLink Tokens/ClientTheo",title:"ClientTheo",description:"| # | Message Name | Description |",source:"@site/docs/MessageSchemas/Schema/MLink Tokens/ClientTheo.md",sourceDirName:"MessageSchemas/Schema/MLink Tokens",slug:"/MessageSchemas/Schema/MLink Tokens/ClientTheo",permalink:"/docs/next/MessageSchemas/Schema/MLink Tokens/ClientTheo",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ClientTheo"},sidebar:"messageSchemasSidebar",previous:{title:"ClientRisk",permalink:"/docs/next/MessageSchemas/Schema/MLink Tokens/ClientRisk"},next:{title:"ClientTrading",permalink:"/docs/next/MessageSchemas/Schema/MLink Tokens/ClientTrading"}},a={},d=[];function l(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Message Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5055"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Topics/srse-calculators/OptionTheoVol",children:"OptionTheoVol"})}),(0,s.jsx)(t.td,{children:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1950"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Topics/client-theos/SpdrOptTheoRecord",children:"SpdrOptTheoRecord"})}),(0,s.jsx)(t.td,{children:"SpdrOptTheoRecords can be used to override theoretical volatilities for specific strikes when using SpdrTheoExpSurface records."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1955"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Topics/client-theos/SpdrTheoExp2PtCurve",children:"SpdrTheoExp2PtCurve"})}),(0,s.jsx)(t.td,{children:"SpdrTheoExp2PtCurve records are used along side SpdrTheoExpSurface records to provide a complete x/y specification of a theoretical skew curve. Spline interpolation is used for values between x/y points"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1960"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Topics/client-theos/SpdrTheoExpSurface",children:"SpdrTheoExpSurface"})}),(0,s.jsxs)(t.td,{children:["SpdrTheoExpSurface records reprent a client theoretical volatility surface for a ExpiryKey (ticker + expiration).  These records can either directly specify parameters to be used in a parameterized surface function or can link to a record (eg. SpdrTheoExp2PtCurve) containing x/y points sampling a client constructed curve.  Alternatively, they can specify that a SpiderRock implied skew curve should be used along with client supplied atm volatilities.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Surface dynamics can be specified in multiple ways with these records and a number of pricing parameter overrides are also available.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"See the technical note on client supplied theoretical surfaces for more details."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1105"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Topics/analytics/TheoSurfacePerf",children:"TheoSurfacePerf"})}),(0,s.jsxs)(t.td,{children:["TheoSurfacePerf records are published throughout he day for each active client theoretical model in the SpiderRock system.  They are suitable for tracking performance of a theoretical model surface whether or not it is being traded.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"TheoSurfacePerf records are published to the SpiderRock elastic cluster at the end of each day."]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var s=r(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);
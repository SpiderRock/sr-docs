"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27570],{80761:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>n});var s=t(74848),c=t(28453);const i={sidebar_position:1,title:"SRTheo"},o="SRSE Product: SRTheo",a={id:"MessageSchemas/Schema/SRSE Products/SRTheo",title:"SRTheo",description:"| # | Message Name | Description |",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTheo.md",sourceDirName:"MessageSchemas/Schema/SRSE Products",slug:"/MessageSchemas/Schema/SRSE Products/SRTheo",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTheo",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SRTheo"},sidebar:"messageSchemasSidebar",previous:{title:"SRSpread",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread"},next:{title:"SRTrade",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade"}},d={},n=[];function h(e){const r={a:"a",h1:"h1",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"srse-product-srtheo",children:"SRSE Product: SRTheo"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Message Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"5055"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/srse-calculators/OptionTheoVol",children:"OptionTheoVol"})}),(0,s.jsx)(r.td,{children:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1950"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/client-theos/SpdrOptTheoRecord",children:"SpdrOptTheoRecord"})}),(0,s.jsx)(r.td,{children:"SpdrOptTheoRecords can be used to override theoretical volatilities for specific strikes when using SpdrTheoExpSurface records."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1955"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/client-theos/SpdrTheoExp2PtCurve",children:"SpdrTheoExp2PtCurve"})}),(0,s.jsx)(r.td,{children:"SpdrTheoExp2PtCurve records are used along side SpdrTheoExpSurface records to provide a complete x/y specification of a theoretical skew curve. Spline interpolation is used for values between x/y points"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1960"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/client-theos/SpdrTheoExpSurface",children:"SpdrTheoExpSurface"})}),(0,s.jsxs)(r.td,{children:["SpdrTheoExpSurface records reprent a client theoretical volatility surface for a ExpiryKey (ticker + expiration).  These records can either directly specify parameters to be used in a parameterized surface function or can link to a record (eg. SpdrTheoExp2PtCurve) containing x/y points sampling a client constructed curve.  Alternatively, they can specify that a SpiderRock implied skew curve should be used along with client supplied atm volatilities.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Surface dynamics can be specified in multiple ways with these records and a number of pricing parameter overrides are also available.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"See the technical note on client supplied theoretical surfaces for more details."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1105"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/analytics/TheoSurfacePerf",children:"TheoSurfacePerf"})}),(0,s.jsxs)(r.td,{children:["TheoSurfacePerf records are published throughout he day for each active client theoretical model in the SpiderRock system.  They are suitable for tracking performance of a theoretical model surface whether or not it is being traded.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"TheoSurfacePerf records are published to the SpiderRock elastic cluster at the end of each day."]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var s=t(96540);const c={},i=s.createContext(c);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);
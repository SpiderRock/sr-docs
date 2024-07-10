"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7689],{71634:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453);const i={title:"LiveAtmVol"},n="Schema: LiveAtmVol (ID: 1010)",c={id:"MessageSchemas/Schema/Topics/analytics/LiveAtmVol",title:"LiveAtmVol",description:"LiveAtmVol records are computed and publish continuously during trading hours",source:"@site/docs/MessageSchemas/Schema/Topics/1000-analytics/LiveAtmVol.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/LiveAtmVol",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveAtmVol",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveAtmVol"},sidebar:"messageSchemasSidebar",previous:{title:"1000-analytics",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/"},next:{title:"LiveExpirySurface",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveExpirySurface"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function a(e){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-liveatmvol-id-1010",children:["Schema: LiveAtmVol ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 1010)"})]}),"\n",(0,r.jsx)(d.p,{children:"LiveAtmVol records are computed and publish continuously during trading hours"}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"1000-analytics"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"OptSurface"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(d.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10="}),(0,r.jsx)(d.td,{children:"ekey"}),(0,r.jsx)(d.td,{children:"ExpiryKey"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:"ticker"}),(0,r.jsx)(d.td,{children:"TickerKey"}),(0,r.jsx)(d.td,{children:"underlying tickerKey (stock or product group) that this option expiration is associated with"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"103"}),(0,r.jsx)(d.td,{children:"uPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"effective underlier price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:"years"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR years to expiry metric"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:"rate"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"average expected interest rate to expiry (SR global rate curve)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"112"}),(0,r.jsx)(d.td,{children:"ddiv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"(expected) cumulative discrete dividend $ amounts prior to expiration (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"115"}),(0,r.jsx)(d.td,{children:"ddivPv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"(expected) cumulative npv of discrete dividend $ amounts prior to expiration (SR global rate curve) (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"118"}),(0,r.jsx)(d.td,{children:"ddivSource"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/DDivSource",children:"enum : DDivSource"})}),(0,r.jsx)(d.td,{children:"Forecast if any of the dividends prior to expiry are forecast rather than announced"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"121"}),(0,r.jsx)(d.td,{children:"atmVol"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"atm vol (xAxis = 0)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"124"}),(0,r.jsx)(d.td,{children:"atmEMA"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"atm vol exp moving average (half-life ~ 30 seconds)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"127"}),(0,r.jsx)(d.td,{children:"uPrcRatio"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"uPrc = uPrcDriver * uPrcRatio (when priceType = Future); uPrc = uPrcDriver (when priceType = Equity)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"130"}),(0,r.jsx)(d.td,{children:"uPrcRatioEMA"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"time smoothed implied uPrcRatio (half-life ~ 30 seconds)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"133"}),(0,r.jsx)(d.td,{children:"sdiv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"stock dividend (borrow rate) (derived from call/put balance when priceType=Stock; =rate otherwise)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"136"}),(0,r.jsx)(d.td,{children:"sdivEMA"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"sdiv exp moving average (half-life ~ 30 seconds)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"139"}),(0,r.jsx)(d.td,{children:"minCPAdjVal"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"minimum cpAdjVal (sdiv or uPrcRatio)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"142"}),(0,r.jsx)(d.td,{children:"maxCPAdjVal"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"minimum cpAdjVal (sdiv or uPrcRatio)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"145"}),(0,r.jsx)(d.td,{children:"cpAdjType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CPAdjType",children:"enum : CPAdjType"})}),(0,r.jsx)(d.td,{children:"adjustment used to align calls/puts"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"148"}),(0,r.jsx)(d.td,{children:"priceType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CalcPriceType",children:"enum : CalcPriceType"})}),(0,r.jsx)(d.td,{children:"[Equity] has independent uPrc and rate with sdiv derived from call/put balance; [Future] has sdiv = rate with uPrc' derived from call/put balance"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"151"}),(0,r.jsx)(d.td,{children:"uPrcDriverKey"}),(0,r.jsx)(d.td,{children:"ExpiryKey"}),(0,r.jsx)(d.td,{children:"underlier driver key"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"154"}),(0,r.jsx)(d.td,{children:"uPrcDriverType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{children:"underlier driver key type (stock or future)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"157"}),(0,r.jsx)(d.td,{children:"uPrcDriver"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"underlier driver (mid-market)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"160"}),(0,r.jsx)(d.td,{children:"axisFUPrc"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"forward underlier price;  also at-the-money (xAxis = 0) synthetic strike"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"163"}),(0,r.jsx)(d.td,{children:"synSpot"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"Synthetic spot price (market-derived spot when the underlying is not a traded instrument)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"166"}),(0,r.jsx)(d.td,{children:"vWidth"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"atm volatility market width (estimated from near expiries)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"169"}),(0,r.jsx)(d.td,{children:"numAtmStrikes"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"172"}),(0,r.jsx)(d.td,{children:"tradeableStatus"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TradeableStatus",children:"enum : TradeableStatus"})}),(0,r.jsx)(d.td,{children:"indicates whether the surface is currently tradeable or not (all server surface integrity checks pass)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"175"}),(0,r.jsx)(d.td,{children:"surfaceResult"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SurfaceAdjResult",children:"enum : SurfaceAdjResult"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"178"}),(0,r.jsx)(d.td,{children:"netTimestamp"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"most recent unix timestamp (all option quotes)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"181"}),(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);
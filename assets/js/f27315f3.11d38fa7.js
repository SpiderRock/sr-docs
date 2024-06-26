"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[68078],{27154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var d=r(74848),i=r(28453);const s={title:"LiveImpliedQuote"},n="Schema: LiveImpliedQuote (ID: 1015)",l={id:"Schemas/Schema/Topics/analytics/LiveImpliedQuote",title:"LiveImpliedQuote",description:"CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned.",source:"@site/docs/Schemas/Schema/Topics/1000-analytics/LiveImpliedQuote.md",sourceDirName:"Schemas/Schema/Topics/1000-analytics",slug:"/Schemas/Schema/Topics/analytics/LiveImpliedQuote",permalink:"/docs/Schemas/Schema/Topics/analytics/LiveImpliedQuote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveImpliedQuote"},sidebar:"schemaSidebar",previous:{title:"LiveIVarSwapFixedTerm",permalink:"/docs/Schemas/Schema/Topics/analytics/LiveIVarSwapFixedTerm"},next:{title:"LiveImpliedQuoteAdj",permalink:"/docs/Schemas/Schema/Topics/analytics/LiveImpliedQuoteAdj"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-liveimpliedquote-id-1015",children:["Schema: LiveImpliedQuote ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 1015)"})]}),"\n",(0,d.jsxs)(t.p,{children:["CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned."]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"OptAnalytics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"analytics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey"}),(0,d.jsx)(t.td,{children:"OptionKey"}),(0,d.jsx)(t.td,{})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option atm volatility (from SR surface)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calcErr"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/ImpliedQuoteError",children:"enum : ImpliedQuoteError"})}),(0,d.jsx)(t.td,{children:"option pricing calculation error (if any)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calcSource"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CalcSource",children:"enum : CalcSource"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ddiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"cumulative discrete dividend value"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"de"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option delta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"deDecay"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option delta decay"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dn08"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier dn 8% slide"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dn15"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier dn 15% slide"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dn50"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier dn 50% slide"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ga"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option gamma"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netTimestamp"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"SR timestamp @ publish time"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAsk"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskIv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"volatility implied by option ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidIv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"volatility implied by option bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ph"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option phi"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"priceType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CalcPriceType",children:"enum : CalcPriceType"})}),(0,d.jsx)(t.td,{children:"Equity or Future (Black76) pricing framework;  if Future then uPrc is the forwardUPrc and sdiv = rate"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"discount rate"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ro"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option rho"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sMark"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option surface mark (option surface price w/bounding rules; always between bid/ask)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sPrc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option surface price; ie. PRICE(sVol, uPrc + uOff, years, rate, sDiv, {discrete dividends, if any})"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option surface volatility (SR surface fit model)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sdiv (continuous stock dividend) rate"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"srcTimestamp"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"OPRA source timestamp (nanoseconds since epoch); will be zero if calcSource != Tick"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"synSpot"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Synthetic spot price (market-derived spot when the underlying is not a traded instrument)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"th"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option theta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{children:"SR Ticker that this option rolls up to"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uOff"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"implied underlier price offset (if any)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uPrc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier price (usually mid-market)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"up06"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier up 6% slide"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"up15"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier up 15% slide"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"up50"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier up 50% slide"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"va"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option vanna"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ve"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option vega"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"veSlope"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant); hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vo"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option volga"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"xAxis"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"option moneyness"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"years"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"years to expiration"})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var d=r(96540);const i={},s=d.createContext(i);function n(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);
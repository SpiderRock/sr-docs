"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[77226],{63827:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(74848),i=t(28453);const s={title:"LiveImpliedQuote"},n="Schema: LiveImpliedQuote (ID: 1015)",l={id:"MessageSchemas/Schema/Topics/analytics/LiveImpliedQuote",title:"LiveImpliedQuote",description:"CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned.",source:"@site/docs/MessageSchemas/Schema/Topics/1000-analytics/LiveImpliedQuote.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuote",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveImpliedQuote"},sidebar:"messageSchemasSidebar",previous:{title:"LiveIVarSwapFixedTerm",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveIVarSwapFixedTerm"},next:{title:"LiveImpliedQuoteAdj",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuoteAdj"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-liveimpliedquote-id-1015",children:["Schema: LiveImpliedQuote ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 1015)"})]}),"\n",(0,r.jsxs)(d.p,{children:["CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned."]}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"1000-analytics"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"OptAnalytics"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(d.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10="}),(0,r.jsx)(d.td,{children:"okey"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:"ticker"}),(0,r.jsx)(d.td,{children:"TickerKey"}),(0,r.jsx)(d.td,{children:"SR Ticker that this option rolls up to"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"103"}),(0,r.jsx)(d.td,{children:"uPrc"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"underlier price (usually mid-market)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:"uOff"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"implied underlier price offset (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:"years"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"years to expiration"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"112"}),(0,r.jsx)(d.td,{children:"xAxis"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option moneyness"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"115"}),(0,r.jsx)(d.td,{children:"rate"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"discount rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"118"}),(0,r.jsx)(d.td,{children:"sdiv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"sdiv (continuous stock dividend) rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"121"}),(0,r.jsx)(d.td,{children:"ddiv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"cumulative discrete dividend value"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"124"}),(0,r.jsx)(d.td,{children:"oBid"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option bid price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"127"}),(0,r.jsx)(d.td,{children:"oAsk"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option ask price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"130"}),(0,r.jsx)(d.td,{children:"oBidIv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"volatility implied by option bid price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"133"}),(0,r.jsx)(d.td,{children:"oAskIv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"volatility implied by option ask price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"136"}),(0,r.jsx)(d.td,{children:"atmVol"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option atm volatility (from SR surface)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"139"}),(0,r.jsx)(d.td,{children:"sVol"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option surface volatility (SR surface fit model)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"142"}),(0,r.jsx)(d.td,{children:"sPrc"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option surface price; ie. PRICE(sVol, uPrc + uOff, years, rate, sDiv, {discrete dividends, if any})"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"145"}),(0,r.jsx)(d.td,{children:"sMark"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option surface mark (option surface price w/bounding rules; always between bid/ask)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"148"}),(0,r.jsx)(d.td,{children:"veSlope"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant); hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"151"}),(0,r.jsx)(d.td,{children:"de"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option delta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"154"}),(0,r.jsx)(d.td,{children:"ga"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option gamma"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"157"}),(0,r.jsx)(d.td,{children:"th"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option theta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"160"}),(0,r.jsx)(d.td,{children:"ve"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option vega"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"163"}),(0,r.jsx)(d.td,{children:"va"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option vanna"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"166"}),(0,r.jsx)(d.td,{children:"vo"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option volga"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"169"}),(0,r.jsx)(d.td,{children:"ro"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option rho"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"172"}),(0,r.jsx)(d.td,{children:"ph"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option phi"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"175"}),(0,r.jsx)(d.td,{children:"deDecay"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"option delta decay"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"178"}),(0,r.jsx)(d.td,{children:"up50"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"underlier up 50% slide"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"181"}),(0,r.jsx)(d.td,{children:"dn50"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"underlier dn 50% slide"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"184"}),(0,r.jsx)(d.td,{children:"up15"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"underlier up 15% slide"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"187"}),(0,r.jsx)(d.td,{children:"dn15"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"underlier dn 15% slide"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"190"}),(0,r.jsx)(d.td,{children:"up06"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"underlier up 6% slide"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"193"}),(0,r.jsx)(d.td,{children:"dn08"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"underlier dn 8% slide"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"196"}),(0,r.jsx)(d.td,{children:"synSpot"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"Synthetic spot price (market-derived spot when the underlying is not a traded instrument)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"199"}),(0,r.jsx)(d.td,{children:"priceType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CalcPriceType",children:"enum : CalcPriceType"})}),(0,r.jsx)(d.td,{children:"Equity or Future (Black76) pricing framework;  if Future then uPrc is the forwardUPrc and sdiv = rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"202"}),(0,r.jsx)(d.td,{children:"calcErr"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ImpliedQuoteError",children:"enum : ImpliedQuoteError"})}),(0,r.jsx)(d.td,{children:"option pricing calculation error (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"205"}),(0,r.jsx)(d.td,{children:"calcSource"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CalcSource",children:"enum : CalcSource"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"208"}),(0,r.jsx)(d.td,{children:"srcTimestamp"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"OPRA source timestamp (nanoseconds since epoch); will be zero if calcSource != Tick"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"211"}),(0,r.jsx)(d.td,{children:"netTimestamp"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SR timestamp @ publish time"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"214"}),(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]})]})]})]})}function a(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function n(e){const d=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(s.Provider,{value:d},e.children)}}}]);
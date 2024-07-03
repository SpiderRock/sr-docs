"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6701],{57033:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=d(74848),r=d(28453);const s={title:"AuctionPrintSN"},n="Schema: AuctionPrintSN (ID: 2487)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN",title:"AuctionPrintSN",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionPrintSN.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionPrintSN"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionPrintRC",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintRC"},next:{title:"AuctionState",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const t={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"schema-auctionprintsn-id-2487",children:["Schema: AuctionPrintSN ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2487)"})]}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SRConnect"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRSE Product"}),(0,i.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"#"}),(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"10"}),(0,i.jsx)(t.td,{children:"noticeNumber"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"AuctionNotice.noticeNumber"})]})})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"#"}),(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"147"}),(0,i.jsx)(t.td,{children:"askPrc10m"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"option nbbo ask @ auction print time + 10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"143"}),(0,i.jsx)(t.td,{children:"askPrc1m"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"option nbbo ask @ auction print time + 1m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"105"}),(0,i.jsx)(t.td,{children:"auctionSource"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,i.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"104"}),(0,i.jsx)(t.td,{children:"auctionType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,i.jsx)(t.td,{children:"(eg. Block, Flash, Improvement, Facilitation, etc.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"146"}),(0,i.jsx)(t.td,{children:"bidPrc10m"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"option nbbo bid @ auction print time + 10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"142"}),(0,i.jsx)(t.td,{children:"bidPrc1m"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"option nbbo bid @ auction print time + 1m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"119"}),(0,i.jsx)(t.td,{children:"commEnhancement"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"additional commission (if any) paid by responder"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"106"}),(0,i.jsx)(t.td,{children:"containsFlex"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(t.td,{children:"Flex = European"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"118"}),(0,i.jsx)(t.td,{children:"custAgentMPID"}),(0,i.jsx)(t.td,{children:"string(6)"}),(0,i.jsx)(t.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"117"}),(0,i.jsx)(t.td,{children:"custFirmType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,i.jsx)(t.td,{children:"cust firm type (if disclosed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"115"}),(0,i.jsx)(t.td,{children:"custPrc"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"114"}),(0,i.jsx)(t.td,{children:"custQty"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"113"}),(0,i.jsx)(t.td,{children:"custSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"126"}),(0,i.jsx)(t.td,{children:"ddivPv"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"present value of any expected dividends to expiry [SR Supplied Estimate]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"108"}),(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"DateKey"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"116"}),(0,i.jsx)(t.td,{children:"hasCustPrc"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"127"}),(0,i.jsx)(t.td,{children:"hasEstDDivs"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(t.td,{children:"Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"123"}),(0,i.jsx)(t.td,{children:"iDays"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"124"}),(0,i.jsx)(t.td,{children:"iYears"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"iYears = iDays / 360.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"110"}),(0,i.jsx)(t.td,{children:"industry"}),(0,i.jsx)(t.td,{children:"text1"}),(0,i.jsx)(t.td,{children:"industry string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"102"}),(0,i.jsx)(t.td,{children:"isTestAuction"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"125"}),(0,i.jsx)(t.td,{children:"moneyRate"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"122"}),(0,i.jsx)(t.td,{children:"netSurfPrc"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SR Surface Price (entire package)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"103"}),(0,i.jsx)(t.td,{children:"noticeTime"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{children:"notice create timestamp (high precision)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"121"}),(0,i.jsx)(t.td,{children:"noticeUAsk"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"120"}),(0,i.jsx)(t.td,{children:"noticeUBid"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"131"}),(0,i.jsx)(t.td,{children:"prtPrice"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"reported OPRA print price (pkgPrice if MLeg)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"132"}),(0,i.jsx)(t.td,{children:"prtPrice2"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"if reported as 2 separate prints at different prices (ie, partial size improvement)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"133"}),(0,i.jsx)(t.td,{children:"prtSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"134"}),(0,i.jsx)(t.td,{children:"prtSize2"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"140"}),(0,i.jsx)(t.td,{children:"prtSurfPrc"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"135"}),(0,i.jsx)(t.td,{children:"prtTime"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{children:"reported OPRA print time (1st print if MLeg) (high precision)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"136"}),(0,i.jsx)(t.td,{children:"prtType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,i.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"138"}),(0,i.jsx)(t.td,{children:"prtUAsk"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"137"}),(0,i.jsx)(t.td,{children:"prtUBid"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"best estimate of uBid @ auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"139"}),(0,i.jsx)(t.td,{children:"prtUPrc"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"best estimate of uPrc @ auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"129"}),(0,i.jsx)(t.td,{children:"rcEExPrem"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"107"}),(0,i.jsx)(t.td,{children:"root"}),(0,i.jsx)(t.td,{children:"TickerKey"}),(0,i.jsx)(t.td,{children:"option root"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"128"}),(0,i.jsx)(t.td,{children:"sVol"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"surface volatility for rev/con strike [SR Supplied Estimate]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"109"}),(0,i.jsx)(t.td,{children:"strike"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"rev/con strike"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"130"}),(0,i.jsx)(t.td,{children:"strikePv"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"148"}),(0,i.jsx)(t.td,{children:"surfPrc10m"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"surface prc @ auction print time + 10m (@ uMid)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"144"}),(0,i.jsx)(t.td,{children:"surfPrc1m"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"surface prc @ auction print time + 1m (@ uMid)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"111"}),(0,i.jsx)(t.td,{children:"symbolType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100"}),(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"TickerKey"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"149"}),(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"101"}),(0,i.jsx)(t.td,{children:"tradeDate"}),(0,i.jsx)(t.td,{children:"DateKey"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"112"}),(0,i.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"145"}),(0,i.jsx)(t.td,{children:"uPrc10m"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"141"}),(0,i.jsx)(t.td,{children:"uPrc1m"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 1m"})]})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>c});var i=d(96540);const r={},s=i.createContext(r);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
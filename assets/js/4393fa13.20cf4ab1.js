"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[79259],{4419:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=t(74848),r=t(28453);const s={title:"AuctionPrintRC"},n="Schema: AuctionPrintRC (ID: 2486)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintRC",title:"AuctionPrintRC",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionPrintRC.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintRC",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintRC",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionPrintRC"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionPrintBX",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintBX"},next:{title:"AuctionPrintSN",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.h1,{id:"schema-auctionprintrc-id-2486",children:["Schema: AuctionPrintRC ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2486)"})]}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Attribute"}),(0,i.jsx)(d.th,{children:"Value"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"Topic"}),(0,i.jsx)(d.td,{children:"2450-liquidity-notice"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"MLink Token"}),(0,i.jsx)(d.td,{children:"SRConnect"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"SRSE Product"}),(0,i.jsx)(d.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"#"}),(0,i.jsx)(d.th,{children:"Field"}),(0,i.jsx)(d.th,{children:"Type"}),(0,i.jsx)(d.th,{children:"Comment"})]})}),(0,i.jsx)(d.tbody,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10"}),(0,i.jsx)(d.td,{children:"noticeNumber"}),(0,i.jsx)(d.td,{children:"long"}),(0,i.jsx)(d.td,{children:"AuctionNotice.noticeNumber"})]})})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(d.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"#"}),(0,i.jsx)(d.th,{children:"Field"}),(0,i.jsx)(d.th,{children:"Type"}),(0,i.jsx)(d.th,{children:"Comment"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"153"}),(0,i.jsx)(d.td,{children:"askPrc10m"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"option nbbo ask @ auction print time + 10m"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"147"}),(0,i.jsx)(d.td,{children:"askPrc1m"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"option nbbo ask @ auction print time + 1m"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"105"}),(0,i.jsx)(d.td,{children:"auctionSource"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,i.jsx)(d.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"104"}),(0,i.jsx)(d.td,{children:"auctionType"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,i.jsx)(d.td,{children:"(eg. Block, Flash, Improvement, Facilitation, etc.)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"152"}),(0,i.jsx)(d.td,{children:"bidPrc10m"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"option nbbo bid @ auction print time + 10m"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"146"}),(0,i.jsx)(d.td,{children:"bidPrc1m"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"option nbbo bid @ auction print time + 1m"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"119"}),(0,i.jsx)(d.td,{children:"commEnhancement"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"additional commission (if any) paid by responder"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"106"}),(0,i.jsx)(d.td,{children:"containsFlex"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(d.td,{children:"Flex = European"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"118"}),(0,i.jsx)(d.td,{children:"custAgentMPID"}),(0,i.jsx)(d.td,{children:"string(6)"}),(0,i.jsx)(d.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"117"}),(0,i.jsx)(d.td,{children:"custFirmType"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,i.jsx)(d.td,{children:"cust firm type (if disclosed)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"115"}),(0,i.jsx)(d.td,{children:"custPrc"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"114"}),(0,i.jsx)(d.td,{children:"custQty"}),(0,i.jsx)(d.td,{children:"int"}),(0,i.jsx)(d.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"113"}),(0,i.jsx)(d.td,{children:"custSide"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(d.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"126"}),(0,i.jsx)(d.td,{children:"ddivPv"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"present value of any expected dividends to expiry [SR Supplied Estimate]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"131"}),(0,i.jsx)(d.td,{children:"effStockLendPv"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"effStockLendPv = custPrice - strikePv - ddivPv - rcEExPrem  [if cust price is visible]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"132"}),(0,i.jsx)(d.td,{children:"effStockRate"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"effStockRate = effStockLendPv / (uMid * iYears) [if cust price is visible]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"108"}),(0,i.jsx)(d.td,{children:"expiry"}),(0,i.jsx)(d.td,{children:"DateKey"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"116"}),(0,i.jsx)(d.td,{children:"hasCustPrc"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(d.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"127"}),(0,i.jsx)(d.td,{children:"hasEstDDivs"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(d.td,{children:"Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"123"}),(0,i.jsx)(d.td,{children:"iDays"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"124"}),(0,i.jsx)(d.td,{children:"iYears"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"iYears = iDays / 360.0"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"110"}),(0,i.jsx)(d.td,{children:"industry"}),(0,i.jsx)(d.td,{children:"text1"}),(0,i.jsx)(d.td,{children:"industry string"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"102"}),(0,i.jsx)(d.td,{children:"isTestAuction"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(d.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"125"}),(0,i.jsx)(d.td,{children:"moneyRate"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"122"}),(0,i.jsx)(d.td,{children:"netSurfPrc"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"SR Surface Price (entire package)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"103"}),(0,i.jsx)(d.td,{children:"noticeTime"}),(0,i.jsx)(d.td,{children:"DateTime"}),(0,i.jsx)(d.td,{children:"notice create timestamp (high precision)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"121"}),(0,i.jsx)(d.td,{children:"noticeUAsk"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"120"}),(0,i.jsx)(d.td,{children:"noticeUBid"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"133"}),(0,i.jsx)(d.td,{children:"prtPrice"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"reported OPRA print price (pkgPrice if MLeg)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"134"}),(0,i.jsx)(d.td,{children:"prtPrice2"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"if reported as 2 separate prints at different prices (ie, partial size improvement)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"135"}),(0,i.jsx)(d.td,{children:"prtSize"}),(0,i.jsx)(d.td,{children:"int"}),(0,i.jsx)(d.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"136"}),(0,i.jsx)(d.td,{children:"prtSize2"}),(0,i.jsx)(d.td,{children:"int"}),(0,i.jsx)(d.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"143"}),(0,i.jsx)(d.td,{children:"prtStockLendPv"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"prtStockLendPv = prtPrice - strikePv - ddivPv - rcEExPrem"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"155"}),(0,i.jsx)(d.td,{children:"prtStockLendPv10m"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"prtStockLendPv10m = surfPrc10m - strikePv - ddivPv - rcEExPrem"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"149"}),(0,i.jsx)(d.td,{children:"prtStockLendPv1m"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"prtStockLendPv1m = surfPrc1m - strikePv - ddivPv - rcEExPrem"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"144"}),(0,i.jsx)(d.td,{children:"prtStockRate"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"prtStockRate = prtStockLendPv / (prtUPrc * iYears)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"156"}),(0,i.jsx)(d.td,{children:"prtStockRate10m"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"prtStockRate10m = prtStockLendPv10m / (uPrc10m * iYears)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"150"}),(0,i.jsx)(d.td,{children:"prtStockRate1m"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"prtStockRate1m = prtStockLendPv1m / (uPrc1m * iYears)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"142"}),(0,i.jsx)(d.td,{children:"prtSurfPrc"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"137"}),(0,i.jsx)(d.td,{children:"prtTime"}),(0,i.jsx)(d.td,{children:"DateTime"}),(0,i.jsx)(d.td,{children:"reported OPRA print time (1st print if MLeg) (high precision)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"138"}),(0,i.jsx)(d.td,{children:"prtType"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,i.jsx)(d.td,{children:"reported OPRA print type"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"140"}),(0,i.jsx)(d.td,{children:"prtUAsk"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"139"}),(0,i.jsx)(d.td,{children:"prtUBid"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"best estimate of uBid @ auction print time"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"141"}),(0,i.jsx)(d.td,{children:"prtUPrc"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"best estimate of uPrc @ auction print time"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"129"}),(0,i.jsx)(d.td,{children:"rcEExPrem"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"107"}),(0,i.jsx)(d.td,{children:"root"}),(0,i.jsx)(d.td,{children:"TickerKey"}),(0,i.jsx)(d.td,{children:"option root"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"128"}),(0,i.jsx)(d.td,{children:"sVol"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"surface volatility for rev/con strike [SR Supplied Estimate]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"109"}),(0,i.jsx)(d.td,{children:"strike"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"rev/con strike"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"130"}),(0,i.jsx)(d.td,{children:"strikePv"}),(0,i.jsx)(d.td,{children:"double"}),(0,i.jsx)(d.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"154"}),(0,i.jsx)(d.td,{children:"surfPrc10m"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"surface prc @ auction print time + 10m (@ uMid)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"148"}),(0,i.jsx)(d.td,{children:"surfPrc1m"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"surface prc @ auction print time + 1m (@ uMid)"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"111"}),(0,i.jsx)(d.td,{children:"symbolType"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"100"}),(0,i.jsx)(d.td,{children:"ticker"}),(0,i.jsx)(d.td,{children:"TickerKey"}),(0,i.jsx)(d.td,{children:"underlier ticker"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"157"}),(0,i.jsx)(d.td,{children:"timestamp"}),(0,i.jsx)(d.td,{children:"DateTime"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"101"}),(0,i.jsx)(d.td,{children:"tradeDate"}),(0,i.jsx)(d.td,{children:"DateKey"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"112"}),(0,i.jsx)(d.td,{children:"uAvgDailyVlm"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"underlier average daily trading volume"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"151"}),(0,i.jsx)(d.td,{children:"uPrc10m"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"uPrc (mid market) @ auction print time + 10m"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"145"}),(0,i.jsx)(d.td,{children:"uPrc1m"}),(0,i.jsx)(d.td,{children:"float"}),(0,i.jsx)(d.td,{children:"uPrc (mid market) @ auction print time + 1m"})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function n(e){const d=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:d},e.children)}}}]);
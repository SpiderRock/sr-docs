"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[71391],{24972:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=i(74848),d=i(28453);const s={title:"AuctionPrintRC"},n="Schema: AuctionPrintRC (ID: 2486)",c={id:"Schemas/Schema/Topics/liquidity-notice/AuctionPrintRC",title:"AuctionPrintRC",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/2450-liquidity-notice/AuctionPrintRC.md",sourceDirName:"Schemas/Schema/Topics/2450-liquidity-notice",slug:"/Schemas/Schema/Topics/liquidity-notice/AuctionPrintRC",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/AuctionPrintRC",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionPrintRC"},sidebar:"schemaSidebar",previous:{title:"AuctionPrintBX",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/AuctionPrintBX"},next:{title:"AuctionPrintSN",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/AuctionPrintSN"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const t={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-auctionprintrc-id-2486",children:["Schema: AuctionPrintRC ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2486)"})]}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SRConnect"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"liquidity-notice"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"noticeNumber"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"AuctionNotice.noticeNumber"})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askPrc10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo ask @ auction print time + 10m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askPrc1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo ask @ auction print time + 1m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,r.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auctionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,r.jsx)(t.td,{children:"(eg. Block, Flash, Improvement, Facilitation, etc.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidPrc10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo bid @ auction print time + 10m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidPrc1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo bid @ auction print time + 1m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"commEnhancement"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"additional commission (if any) paid by responder"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"containsFlex"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"Flex = European"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"custAgentMPID"}),(0,r.jsx)(t.td,{children:"string(6)"}),(0,r.jsx)(t.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"custFirmType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,r.jsx)(t.td,{children:"cust firm type (if disclosed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"custPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"custQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"custSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ddivPv"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"present value of any expected dividends to expiry [SR Supplied Estimate]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"effStockLendPv"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"effStockLendPv = custPrice - strikePv - ddivPv - rcEExPrem  [if cust price is visible]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"effStockRate"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"effStockRate = effStockLendPv / (uMid * iYears) [if cust price is visible]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expiry"}),(0,r.jsx)(t.td,{children:"DateKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hasCustPrc"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hasEstDDivs"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"iDays"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"iYears"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"iYears = iDays / 360.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"industry"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"industry string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isTestAuction"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"moneyRate"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netSurfPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Surface Price (entire package)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"noticeTime"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"notice create timestamp (high precision)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"noticeUAsk"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"noticeUBid"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtPrice"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"reported OPRA print price (pkgPrice if MLeg)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtPrice2"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"if reported as 2 separate prints at different prices (ie, partial size improvement)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtSize2"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtStockLendPv"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"prtStockLendPv = prtPrice - strikePv - ddivPv - rcEExPrem"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtStockLendPv10m"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"prtStockLendPv10m = surfPrc10m - strikePv - ddivPv - rcEExPrem"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtStockLendPv1m"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"prtStockLendPv1m = surfPrc1m - strikePv - ddivPv - rcEExPrem"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtStockRate"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"prtStockRate = prtStockLendPv / (prtUPrc * iYears)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtStockRate10m"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"prtStockRate10m = prtStockLendPv10m / (uPrc10m * iYears)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtStockRate1m"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"prtStockRate1m = prtStockLendPv1m / (uPrc1m * iYears)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtSurfPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtTime"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"reported OPRA print time (1st print if MLeg) (high precision)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,r.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtUAsk"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtUBid"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"best estimate of uBid @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtUPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"best estimate of uPrc @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rcEExPrem"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"root"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"option root"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sVol"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"surface volatility for rev/con strike [SR Supplied Estimate]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strike"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"rev/con strike"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strikePv"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"surfPrc10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface prc @ auction print time + 10m (@ uMid)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"surfPrc1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface prc @ auction print time + 1m (@ uMid)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbolType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"underlier ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tradeDate"}),(0,r.jsx)(t.td,{children:"DateKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uPrc10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 10m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uPrc1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 1m"})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>c});var r=i(96540);const d={},s=r.createContext(d);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
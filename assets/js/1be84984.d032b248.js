"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94964],{72080:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=i(74848),d=i(28453);const n={title:"AuctionNoticeRC"},r="Schema: AuctionNoticeRC (ID: 2466)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeRC",title:"AuctionNoticeRC",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionNoticeRC.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeRC",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeRC",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionNoticeRC"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeBX",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX"},next:{title:"AuctionNoticeSN",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-auctionnoticerc-id-2466",children:["Schema: AuctionNoticeRC ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 2466)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SRConnect"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"liquidity-notice"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"noticeNumber"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"auctionDuration"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"[expected] auction duration (in milliseconds)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"auctionEvent"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"auctionSource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,t.jsx)(s.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"auctionType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"commEnhancement"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"additional commission (if any) paid by responder"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"containsFlex"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"Flex = European"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custAgentMPID"}),(0,t.jsx)(s.td,{children:"string(6)"}),(0,t.jsx)(s.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custClientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"cust client firm (if disclosed)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custCommPaying"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"client is commission paying (to the responder)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custFirmType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,t.jsx)(s.td,{children:"cust firm type (if disclosed)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"public cust price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custQty"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custQtyCond"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/CustQtyCond",children:"enum : CustQtyCond"})}),(0,t.jsx)(s.td,{children:"UpToQty, AllOrNone, QtyOrMore"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custSide"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(s.td,{children:"if available"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ddivPv"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"present value of any expected dividends to expiry [SR Supplied Estimate]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"effStockLendPv"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"effStockLendPv = custPrice - strikePv - ddivPv - rcEExPrem  [if cust price is visible]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"effStockRate"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"effStockRate = effStockLendPv / (uMid * iYears) [if cust price is visible]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"expiry"}),(0,t.jsx)(s.td,{children:"DateKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hasCustPrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hasEstDDivs"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"iDays"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"iYears"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"iYears = iDays / 360.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"includeSRNetwork"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"industry"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"industry string"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"isTestAuction"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"moneyRate"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"netTimestamp"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rcEExPrem"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"root"}),(0,t.jsx)(s.td,{children:"TickerKey"}),(0,t.jsx)(s.td,{children:"option root  (+C/-P/-U)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sVol"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"surface volatility for rev/con strike [SR Supplied Estimate]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"shortCode"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srcAuctionID"}),(0,t.jsx)(s.td,{children:"string(20)"}),(0,t.jsx)(s.td,{children:"auction ID as known by the auction source (empty for SRC)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srcAuctionType"}),(0,t.jsx)(s.td,{children:"string(4)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srcTimestamp"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"strike"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"rev/con strike"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"strikePv"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"symbolType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ticker"}),(0,t.jsx)(s.td,{children:"TickerKey"}),(0,t.jsx)(s.td,{children:"underlier ticker"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"from ats / exchange net timestamp if possible"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tradeDate"}),(0,t.jsx)(s.td,{children:"DateKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uAsk"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uAvgDailyVlm"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"underlier average daily trading volume"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uBid"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"live stock price"})]})]})]}),(0,t.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(s.p,{children:"DirectedCounterParty"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"inclExcl"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"isCommPaying"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>c});var t=i(96540);const d={},n=t.createContext(d);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);
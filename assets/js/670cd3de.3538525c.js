"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[50931],{53516:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=i(74848),d=i(28453);const n={title:"AuctionNoticeBX"},r="Schema: AuctionNoticeBX (ID: 2468)",c={id:"Schemas/Schema/Topics/liquidity-notice/AuctionNoticeBX",title:"AuctionNoticeBX",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/2450-liquidity-notice/AuctionNoticeBX.md",sourceDirName:"Schemas/Schema/Topics/2450-liquidity-notice",slug:"/Schemas/Schema/Topics/liquidity-notice/AuctionNoticeBX",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/AuctionNoticeBX",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionNoticeBX"},sidebar:"schemaSidebar",previous:{title:"AuctionNotice",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/AuctionNotice"},next:{title:"AuctionNoticeRC",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/AuctionNoticeRC"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-auctionnoticebx-id-2468",children:["Schema: AuctionNoticeBX ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2468)"})]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SRConnect"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"liquidity-notice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionDuration"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"[expected] auction duration (in milliseconds)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionEvent"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionSource"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,s.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"commEnhancement"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"additional commission (if any) paid by responder"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custAgentMPID"}),(0,s.jsx)(t.td,{children:"string(6)"}),(0,s.jsx)(t.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custClientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"cust client firm (if disclosed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custCommPaying"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"client is commission paying (to the responder)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custFirmType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(t.td,{children:"cust firm type (if disclosed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custPrc"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"public cust price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custQty"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custQtyCond"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/CustQtyCond",children:"enum : CustQtyCond"})}),(0,s.jsx)(t.td,{children:"UpToQty, AllOrNone, QtyOrMore"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(t.td,{children:"if available"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"effMoneyRate"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"effMoneyRate = (1.0 - (custPrc / (hiStrike - loStrike)) / iYears"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expiry"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hasCustPrc"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hiStrike"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"hi strike"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"iDays"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"iYears"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"iYears = iDays / 360.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeSRNetwork"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"industry"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"industry string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAuction"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"loStrike"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"lo strike"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pointValue"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"point value of the associated options; expiry money = (hiStrike - loStrike) * pointValue;"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"root"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"option root (+C.Lo/-P.Lo/-C.Hi/+P.Hi)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shortCode"}),(0,s.jsx)(t.td,{children:"string(8)"}),(0,s.jsx)(t.td,{children:"8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"srcAuctionID"}),(0,s.jsx)(t.td,{children:"string(20)"}),(0,s.jsx)(t.td,{children:"auction ID as known by the auction source (empty for SRC)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"srcAuctionType"}),(0,s.jsx)(t.td,{children:"string(4)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"srcTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strikePv"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbolType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"from ats / exchange net timestamp if possible"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier average daily trading volume"})]})]})]}),(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,s.jsx)(t.p,{children:"DirectedCounterParty"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"inclExcl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isCommPaying"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var s=i(96540);const d={},n=s.createContext(d);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);
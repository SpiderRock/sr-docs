"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[18903],{44754:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=s(74848),i=s(28453);const n={title:"AuctionNoticeSN"},r="Schema: AuctionNoticeSN (ID: 2467)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN",title:"AuctionNoticeSN",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionNoticeSN.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionNoticeSN"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeRC",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeRC"},next:{title:"AuctionPrint",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"schema-auctionnoticesn-id-2467",children:["Schema: AuctionNoticeSN ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 2467)"})]}),"\n",(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"2450-liquidity-notice"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"SRConnect"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRTrade"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(d.blockquote,{children:["\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(d.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"10="}),(0,t.jsx)(d.td,{children:"noticeNumber"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"100"}),(0,t.jsx)(d.td,{children:"ticker"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"underlier ticker"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"101"}),(0,t.jsx)(d.td,{children:"tradeDate"}),(0,t.jsx)(d.td,{children:"DateKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"102"}),(0,t.jsx)(d.td,{children:"auctionType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"103"}),(0,t.jsx)(d.td,{children:"auctionEvent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"104"}),(0,t.jsx)(d.td,{children:"srcAuctionID"}),(0,t.jsx)(d.td,{children:"string(20)"}),(0,t.jsx)(d.td,{children:"auction ID as known by the auction source (empty for SRC)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"105"}),(0,t.jsx)(d.td,{children:"srcAuctionType"}),(0,t.jsx)(d.td,{children:"string(4)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"106"}),(0,t.jsx)(d.td,{children:"auctionSource"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,t.jsx)(d.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"107"}),(0,t.jsx)(d.td,{children:"isTestAuction"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"108"}),(0,t.jsx)(d.td,{children:"containsFlex"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"Flex = European"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"109"}),(0,t.jsx)(d.td,{children:"shortCode"}),(0,t.jsx)(d.td,{children:"string(8)"}),(0,t.jsx)(d.td,{children:"8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"110"}),(0,t.jsx)(d.td,{children:"industry"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"industry string"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"111"}),(0,t.jsx)(d.td,{children:"symbolType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"112"}),(0,t.jsx)(d.td,{children:"uAvgDailyVlm"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier average daily trading volume"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"113"}),(0,t.jsx)(d.td,{children:"root"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"option root (+C/-P)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"114"}),(0,t.jsx)(d.td,{children:"expiry"}),(0,t.jsx)(d.td,{children:"DateKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"115"}),(0,t.jsx)(d.td,{children:"strike"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"strike"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"116"}),(0,t.jsx)(d.td,{children:"custSide"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(d.td,{children:"if available"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"117"}),(0,t.jsx)(d.td,{children:"custQty"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"118"}),(0,t.jsx)(d.td,{children:"custPrc"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"public cust price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"119"}),(0,t.jsx)(d.td,{children:"hasCustPrc"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"120"}),(0,t.jsx)(d.td,{children:"custFirmType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,t.jsx)(d.td,{children:"cust firm type (if disclosed)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"121"}),(0,t.jsx)(d.td,{children:"custAgentMPID"}),(0,t.jsx)(d.td,{children:"string(6)"}),(0,t.jsx)(d.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"122"}),(0,t.jsx)(d.td,{children:"custClientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"cust client firm (if disclosed)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"123"}),(0,t.jsx)(d.td,{children:"commEnhancement"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"additional commission (if any) paid by responder"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"124"}),(0,t.jsx)(d.td,{children:"custCommPaying"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"client is commission paying (to the responder)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"125"}),(0,t.jsx)(d.td,{children:"custQtyCond"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/CustQtyCond",children:"enum : CustQtyCond"})}),(0,t.jsx)(d.td,{children:"UpToQty, AllOrNone, QtyOrMore"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"126"}),(0,t.jsx)(d.td,{children:"auctionDuration"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"[expected] auction duration (in milliseconds)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"127"}),(0,t.jsx)(d.td,{children:"uBid"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"live stock price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"128"}),(0,t.jsx)(d.td,{children:"uAsk"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"129"}),(0,t.jsx)(d.td,{children:"iDays"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"130"}),(0,t.jsx)(d.td,{children:"iYears"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"iYears = iDays / 360.0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"131"}),(0,t.jsx)(d.td,{children:"moneyRate"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"132"}),(0,t.jsx)(d.td,{children:"ddivPv"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"present value of any expected dividends to expiry [SR Supplied Estimate]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"133"}),(0,t.jsx)(d.td,{children:"hasEstDDivs"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"134"}),(0,t.jsx)(d.td,{children:"sVol"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"surface volatility for rev/con strike [SR Supplied Estimate]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"135"}),(0,t.jsx)(d.td,{children:"rcEExPrem"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"136"}),(0,t.jsx)(d.td,{children:"strikePv"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"137"}),(0,t.jsx)(d.td,{children:"srcTimestamp"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"138"}),(0,t.jsx)(d.td,{children:"netTimestamp"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"139"}),(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{children:"from ats / exchange net timestamp if possible"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"140"}),(0,t.jsx)(d.td,{children:"includeSRNetwork"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,t.jsx)(d.p,{children:"DirectedCounterParty"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"142"}),(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"143"}),(0,t.jsx)(d.td,{children:"inclExcl"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"144"}),(0,t.jsx)(d.td,{children:"isCommPaying"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>c});var t=s(96540);const i={},n=t.createContext(i);function r(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);
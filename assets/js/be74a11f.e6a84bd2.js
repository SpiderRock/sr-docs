"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[42746],{7236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var r=n(74848),s=n(28453),i=n(11470),d=n(19365);const c={title:"AuctionPrint"},l="Schema: AuctionPrint (ID: 2485)",a={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint",title:"AuctionPrint",description:"METADATA",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionPrint.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{title:"AuctionPrint"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeSN",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN"},next:{title:"AuctionPrintBX",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintBX"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-auctionprint-id-2485",children:["Schema: AuctionPrint ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2485)"})]}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SRATS"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"noticeNumber"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"AuctionNotice.noticeNumber"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"underlier ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"101"}),(0,r.jsx)(t.td,{children:"tradeDate"}),(0,r.jsx)(t.td,{children:"DateKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"157"}),(0,r.jsx)(t.td,{children:"isTestAuction"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"102"}),(0,r.jsx)(t.td,{children:"noticeTime"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"notice create timestamp (high precision)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"auctionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,r.jsx)(t.td,{children:"(eg. Block, Flash, Improvement, Facilitation, etc.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"104"}),(0,r.jsx)(t.td,{children:"auctionSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,r.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"111"}),(0,r.jsx)(t.td,{children:"industry"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"industry string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"symbolType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"113"}),(0,r.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"114"}),(0,r.jsx)(t.td,{children:"custSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"custQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"116"}),(0,r.jsx)(t.td,{children:"custPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"117"}),(0,r.jsx)(t.td,{children:"hasCustPrc"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"custFirmType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,r.jsx)(t.td,{children:"cust firm type (if disclosed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"119"}),(0,r.jsx)(t.td,{children:"custAgentMPID"}),(0,r.jsx)(t.td,{children:"string(6)"}),(0,r.jsx)(t.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"158"}),(0,r.jsx)(t.td,{children:"commEnhancement"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"additional commission (if any) paid by responder"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"105"}),(0,r.jsx)(t.td,{children:"numOptLegs"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"MLEG Only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"spreadClass"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/ToolSpreadClass",children:"enum : ToolSpreadClass"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"107"}),(0,r.jsx)(t.td,{children:"spreadFlavor"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpreadFlavor",children:"enum : SpreadFlavor"})}),(0,r.jsx)(t.td,{children:"MLEG Only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"108"}),(0,r.jsx)(t.td,{children:"containsHedge"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"MLEG Only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"containsFlex"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"contains FLEX options (not regular listed options)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"110"}),(0,r.jsx)(t.td,{children:"containsMultiHedge"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"contains MultiHedge (corp action adjusted) options"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"159"}),(0,r.jsx)(t.td,{children:"uBid"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"160"}),(0,r.jsx)(t.td,{children:"uAsk"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"142"}),(0,r.jsx)(t.td,{children:"netDe"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"143"}),(0,r.jsx)(t.td,{children:"netGa"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"144"}),(0,r.jsx)(t.td,{children:"netTh"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"145"}),(0,r.jsx)(t.td,{children:"netVe"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"161"}),(0,r.jsx)(t.td,{children:"pkgSurfPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Surface Price (entire package)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"162"}),(0,r.jsx)(t.td,{children:"pkgBidPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"pkg bid price (best way price) (entire package)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"163"}),(0,r.jsx)(t.td,{children:"pkgAskPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"pkg ask price (best way price) (entire package)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"prtPrice"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"reported OPRA print price (pkgPrice if MLeg)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"122"}),(0,r.jsx)(t.td,{children:"prtPrice2"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"if reported as 2 separate prints at different prices (ie, partial size improvement)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"123"}),(0,r.jsx)(t.td,{children:"prtSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"prtSize2"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"125"}),(0,r.jsx)(t.td,{children:"prtTime"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"reported OPRA print time (1st print if MLeg) (high precision)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"126"}),(0,r.jsx)(t.td,{children:"prtType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,r.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"prtUBid"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"best estimate of uBid @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"128"}),(0,r.jsx)(t.td,{children:"prtUAsk"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"129"}),(0,r.jsx)(t.td,{children:"prtUPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"best estimate of uPrc @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"prtSurfVol"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface vol @ auction print time (single option auction only)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"131"}),(0,r.jsx)(t.td,{children:"prtSurfPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"132"}),(0,r.jsx)(t.td,{children:"bidPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo bid @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"133"}),(0,r.jsx)(t.td,{children:"bidSz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"nbbo bid cum size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"134"}),(0,r.jsx)(t.td,{children:"bidMask"}),(0,r.jsx)(t.td,{children:"uint"}),(0,r.jsx)(t.td,{children:"nbbo bid exch mask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"135"}),(0,r.jsx)(t.td,{children:"askPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo ask @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"askSz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"nbbo ask cum size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"137"}),(0,r.jsx)(t.td,{children:"askMask"}),(0,r.jsx)(t.td,{children:"uint"}),(0,r.jsx)(t.td,{children:"nbbo ask exch mask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"138"}),(0,r.jsx)(t.td,{children:"exchBidPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"exch bid @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"exchBidSz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"exch bid size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"140"}),(0,r.jsx)(t.td,{children:"exchAskPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"exch ask @ auction print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"141"}),(0,r.jsx)(t.td,{children:"exchAskSz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"exch ask size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"146"}),(0,r.jsx)(t.td,{children:"uPrc1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 1m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"147"}),(0,r.jsx)(t.td,{children:"bidPrc1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo bid @ auction print time + 1m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"148"}),(0,r.jsx)(t.td,{children:"askPrc1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo ask @ auction print time + 1m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"149"}),(0,r.jsx)(t.td,{children:"surfVol1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface vol @ auction print time + 1m (single option auction only)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"150"}),(0,r.jsx)(t.td,{children:"surfPrc1m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface prc @ auction print time + 1m (@ uMid)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"151"}),(0,r.jsx)(t.td,{children:"uPrc10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 10m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"152"}),(0,r.jsx)(t.td,{children:"bidPrc10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo bid @ auction print time + 10m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"153"}),(0,r.jsx)(t.td,{children:"askPrc10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option nbbo ask @ auction print time + 10m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"154"}),(0,r.jsx)(t.td,{children:"surfVol10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface vol @ auction print time + 10m (single option auction only)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"155"}),(0,r.jsx)(t.td,{children:"surfPrc10m"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface prc @ auction print time + 10m (@ uMid)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"156"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,r.jsx)(t.p,{children:"OrderLegs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"165"}),(0,r.jsx)(t.td,{children:"secKey"}),(0,r.jsx)(t.td,{children:"OptionKey"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"166"}),(0,r.jsx)(t.td,{children:"secType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"167"}),(0,r.jsx)(t.td,{children:"side"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"168"}),(0,r.jsx)(t.td,{children:"ratio"}),(0,r.jsx)(t.td,{children:"ushort"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"169"}),(0,r.jsx)(t.td,{children:"undPerCn"}),(0,r.jsx)(t.td,{children:"int"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"170"}),(0,r.jsx)(t.td,{children:"pointValue"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"191"}),(0,r.jsx)(t.td,{children:"pointCurrency"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum : Currency"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"171"}),(0,r.jsx)(t.td,{children:"expType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/ExpiryType",children:"enum : ExpiryType"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"172"}),(0,r.jsx)(t.td,{children:"years"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"173"}),(0,r.jsx)(t.td,{children:"rate"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"174"}),(0,r.jsx)(t.td,{children:"atmVol"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"175"}),(0,r.jsx)(t.td,{children:"ddivPv"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"176"}),(0,r.jsx)(t.td,{children:"tVol"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"177"}),(0,r.jsx)(t.td,{children:"sVol"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"178"}),(0,r.jsx)(t.td,{children:"sDiv"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"179"}),(0,r.jsx)(t.td,{children:"sPrc"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"180"}),(0,r.jsx)(t.td,{children:"de"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"181"}),(0,r.jsx)(t.td,{children:"ga"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"182"}),(0,r.jsx)(t.td,{children:"th"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"183"}),(0,r.jsx)(t.td,{children:"ve"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"184"}),(0,r.jsx)(t.td,{children:"sVolOk"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"185"}),(0,r.jsx)(t.td,{children:"oBid"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"186"}),(0,r.jsx)(t.td,{children:"oBidSz"}),(0,r.jsx)(t.td,{children:"int"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"187"}),(0,r.jsx)(t.td,{children:"oBidMask"}),(0,r.jsx)(t.td,{children:"uint"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"188"}),(0,r.jsx)(t.td,{children:"oAsk"}),(0,r.jsx)(t.td,{children:"float"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"189"}),(0,r.jsx)(t.td,{children:"oAskSz"}),(0,r.jsx)(t.td,{children:"int"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"190"}),(0,r.jsx)(t.td,{children:"oAskMask"}),(0,r.jsx)(t.td,{children:"uint"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(d.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'AuctionPrint'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=AuctionPrint'\n\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(d.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrint\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|numOptLegs|spreadClass|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgBidPrc|pkgAskPrc|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfVol|prtSurfPrc|bidPrc|bidSz|bidMask|askPrc|askSz|askMask|exchBidPrc|exchBidSz|exchAskPrc|exchAskSz|uPrc1m|bidPrc1m|askPrc1m|surfVol1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfVol10m|surfPrc10m|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=AuctionPrint' \\\n--data-urlencode 'view=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|numOptLegs|spreadClass|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgBidPrc|pkgAskPrc|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfVol|prtSurfPrc|bidPrc|bidSz|bidMask|askPrc|askSz|askMask|exchBidPrc|exchBidSz|exchAskPrc|exchAskSz|uPrc1m|bidPrc1m|askPrc1m|surfVol1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfVol10m|surfPrc10m|timestamp' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(d.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrint\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|numOptLegs|spreadClass|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgBidPrc|pkgAskPrc|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfVol|prtSurfPrc|bidPrc|bidSz|bidMask|askPrc|askSz|askMask|exchBidPrc|exchBidSz|exchAskPrc|exchAskSz|uPrc1m|bidPrc1m|askPrc1m|surfVol1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfVol10m|surfPrc10m|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=AuctionPrint' \\\n--data-urlencode 'view=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|numOptLegs|spreadClass|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgBidPrc|pkgAskPrc|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfVol|prtSurfPrc|bidPrc|bidSz|bidMask|askPrc|askSz|askMask|exchBidPrc|exchBidSz|exchAskPrc|exchAskSz|uPrc1m|bidPrc1m|askPrc1m|surfVol1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfVol10m|surfPrc10m|timestamp' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(d.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrint\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|numOptLegs|spreadClass|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgBidPrc|pkgAskPrc|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfVol|prtSurfPrc|bidPrc|bidSz|bidMask|askPrc|askSz|askMask|exchBidPrc|exchBidSz|exchAskPrc|exchAskSz|uPrc1m|bidPrc1m|askPrc1m|surfVol1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfVol10m|surfPrc10m|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'isTestAuction|auctionType|auctionSource|symbolType|custSide|hasCustPrc|custFirmType|spreadClass|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|prtType\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=AuctionPrint' \\\n--data-urlencode 'measure=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|numOptLegs|spreadClass|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgBidPrc|pkgAskPrc|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfVol|prtSurfPrc|bidPrc|bidSz|bidMask|askPrc|askSz|askMask|exchBidPrc|exchBidSz|exchAskPrc|exchAskSz|uPrc1m|bidPrc1m|askPrc1m|surfVol1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfVol10m|surfPrc10m|timestamp' \\\n--data-urlencode 'group=isTestAuction|auctionType|auctionSource|symbolType|custSide|hasCustPrc|custFirmType|spreadClass|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|prtType' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(d.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrint\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=AuctionPrint' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function d(e){let{children:t,hidden:n,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,d),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),s=n(34164),i=n(23104),d=n(56347),c=n(205),l=n(57485),a=n(31682),o=n(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[d,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[a,h]=j({queryString:n,groupId:s}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),g=(()=>{const e=a??p;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{g&&l(g)}),[g]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var P=n(74848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:d,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),o=e=>{const t=e.currentTarget,n=l.indexOf(t),s=c[n].value;s!==r&&(a(t),d(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,P.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,P.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,P.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=p(e);return(0,P.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,P.jsx)(f,{...t,...e}),(0,P.jsx)(y,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,P.jsx)(b,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
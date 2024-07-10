"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32265],{86268:(d,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=t(74848),r=t(28453);const s={title:"AuctionPrint"},n="Schema: AuctionPrint (ID: 2485)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint",title:"AuctionPrint",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionPrint.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionPrint"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeSN",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN"},next:{title:"AuctionPrintBX",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintBX"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(d){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...d.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"schema-auctionprint-id-2485",children:["Schema: AuctionPrint ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2485)"})]}),"\n",(0,i.jsx)(e.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Attribute"}),(0,i.jsx)(e.th,{children:"Value"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Topic"}),(0,i.jsx)(e.td,{children:"2450-liquidity-notice"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"MLink Token"}),(0,i.jsx)(e.td,{children:"SRConnect"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"SRSE Product"}),(0,i.jsx)(e.td,{children:"SRTrade"})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Note:"})," The symbol ",(0,i.jsx)(e.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"body",children:"BODY"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"#"}),(0,i.jsx)(e.th,{children:"Field"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Comment"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"10="}),(0,i.jsx)(e.td,{children:"noticeNumber"}),(0,i.jsx)(e.td,{children:"long"}),(0,i.jsx)(e.td,{children:"AuctionNotice.noticeNumber"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"ticker"}),(0,i.jsx)(e.td,{children:"TickerKey"}),(0,i.jsx)(e.td,{children:"underlier ticker"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"101"}),(0,i.jsx)(e.td,{children:"tradeDate"}),(0,i.jsx)(e.td,{children:"DateKey"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"157"}),(0,i.jsx)(e.td,{children:"isTestAuction"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(e.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"102"}),(0,i.jsx)(e.td,{children:"noticeTime"}),(0,i.jsx)(e.td,{children:"DateTime"}),(0,i.jsx)(e.td,{children:"notice create timestamp (high precision)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"103"}),(0,i.jsx)(e.td,{children:"auctionType"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,i.jsx)(e.td,{children:"(eg. Block, Flash, Improvement, Facilitation, etc.)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"104"}),(0,i.jsx)(e.td,{children:"auctionSource"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,i.jsx)(e.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"111"}),(0,i.jsx)(e.td,{children:"industry"}),(0,i.jsx)(e.td,{children:"text1"}),(0,i.jsx)(e.td,{children:"industry string"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"112"}),(0,i.jsx)(e.td,{children:"symbolType"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"113"}),(0,i.jsx)(e.td,{children:"uAvgDailyVlm"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"underlier average daily trading volume"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"114"}),(0,i.jsx)(e.td,{children:"custSide"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(e.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"115"}),(0,i.jsx)(e.td,{children:"custQty"}),(0,i.jsx)(e.td,{children:"int"}),(0,i.jsx)(e.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"116"}),(0,i.jsx)(e.td,{children:"custPrc"}),(0,i.jsx)(e.td,{children:"double"}),(0,i.jsx)(e.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"117"}),(0,i.jsx)(e.td,{children:"hasCustPrc"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(e.td,{children:"from AuctionNotice (if known)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"118"}),(0,i.jsx)(e.td,{children:"custFirmType"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,i.jsx)(e.td,{children:"cust firm type (if disclosed)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"119"}),(0,i.jsx)(e.td,{children:"custAgentMPID"}),(0,i.jsx)(e.td,{children:"string(6)"}),(0,i.jsx)(e.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"158"}),(0,i.jsx)(e.td,{children:"commEnhancement"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"additional commission (if any) paid by responder"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"105"}),(0,i.jsx)(e.td,{children:"numOptLegs"}),(0,i.jsx)(e.td,{children:"byte"}),(0,i.jsx)(e.td,{children:"MLEG Only"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"106"}),(0,i.jsx)(e.td,{children:"spreadClass"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/ToolSpreadClass",children:"enum : ToolSpreadClass"})}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"107"}),(0,i.jsx)(e.td,{children:"spreadFlavor"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/SpreadFlavor",children:"enum : SpreadFlavor"})}),(0,i.jsx)(e.td,{children:"MLEG Only"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"108"}),(0,i.jsx)(e.td,{children:"containsHedge"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(e.td,{children:"MLEG Only"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"109"}),(0,i.jsx)(e.td,{children:"containsFlex"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(e.td,{children:"contains FLEX options (not regular listed options)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"110"}),(0,i.jsx)(e.td,{children:"containsMultiHedge"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(e.td,{children:"contains MultiHedge (corp action adjusted) options"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"159"}),(0,i.jsx)(e.td,{children:"uBid"}),(0,i.jsx)(e.td,{children:"double"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"160"}),(0,i.jsx)(e.td,{children:"uAsk"}),(0,i.jsx)(e.td,{children:"double"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"142"}),(0,i.jsx)(e.td,{children:"netDe"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"143"}),(0,i.jsx)(e.td,{children:"netGa"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"144"}),(0,i.jsx)(e.td,{children:"netTh"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"145"}),(0,i.jsx)(e.td,{children:"netVe"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"161"}),(0,i.jsx)(e.td,{children:"pkgSurfPrc"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"SR Surface Price (entire package)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"162"}),(0,i.jsx)(e.td,{children:"pkgBidPrc"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"pkg bid price (best way price) (entire package)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"163"}),(0,i.jsx)(e.td,{children:"pkgAskPrc"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"pkg ask price (best way price) (entire package)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"121"}),(0,i.jsx)(e.td,{children:"prtPrice"}),(0,i.jsx)(e.td,{children:"double"}),(0,i.jsx)(e.td,{children:"reported OPRA print price (pkgPrice if MLeg)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"122"}),(0,i.jsx)(e.td,{children:"prtPrice2"}),(0,i.jsx)(e.td,{children:"double"}),(0,i.jsx)(e.td,{children:"if reported as 2 separate prints at different prices (ie, partial size improvement)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"123"}),(0,i.jsx)(e.td,{children:"prtSize"}),(0,i.jsx)(e.td,{children:"int"}),(0,i.jsx)(e.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"124"}),(0,i.jsx)(e.td,{children:"prtSize2"}),(0,i.jsx)(e.td,{children:"int"}),(0,i.jsx)(e.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"125"}),(0,i.jsx)(e.td,{children:"prtTime"}),(0,i.jsx)(e.td,{children:"DateTime"}),(0,i.jsx)(e.td,{children:"reported OPRA print time (1st print if MLeg) (high precision)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"126"}),(0,i.jsx)(e.td,{children:"prtType"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,i.jsx)(e.td,{children:"reported OPRA print type"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"127"}),(0,i.jsx)(e.td,{children:"prtUBid"}),(0,i.jsx)(e.td,{children:"double"}),(0,i.jsx)(e.td,{children:"best estimate of uBid @ auction print time"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"128"}),(0,i.jsx)(e.td,{children:"prtUAsk"}),(0,i.jsx)(e.td,{children:"double"}),(0,i.jsx)(e.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"129"}),(0,i.jsx)(e.td,{children:"prtUPrc"}),(0,i.jsx)(e.td,{children:"double"}),(0,i.jsx)(e.td,{children:"best estimate of uPrc @ auction print time"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"130"}),(0,i.jsx)(e.td,{children:"prtSurfVol"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"surface vol @ auction print time (single option auction only)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"131"}),(0,i.jsx)(e.td,{children:"prtSurfPrc"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"132"}),(0,i.jsx)(e.td,{children:"bidPrc"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"option nbbo bid @ auction print time"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"133"}),(0,i.jsx)(e.td,{children:"bidSz"}),(0,i.jsx)(e.td,{children:"int"}),(0,i.jsx)(e.td,{children:"nbbo bid cum size"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"134"}),(0,i.jsx)(e.td,{children:"bidMask"}),(0,i.jsx)(e.td,{children:"uint"}),(0,i.jsx)(e.td,{children:"nbbo bid exch mask"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"135"}),(0,i.jsx)(e.td,{children:"askPrc"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"option nbbo ask @ auction print time"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"136"}),(0,i.jsx)(e.td,{children:"askSz"}),(0,i.jsx)(e.td,{children:"int"}),(0,i.jsx)(e.td,{children:"nbbo ask cum size"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"137"}),(0,i.jsx)(e.td,{children:"askMask"}),(0,i.jsx)(e.td,{children:"uint"}),(0,i.jsx)(e.td,{children:"nbbo ask exch mask"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"138"}),(0,i.jsx)(e.td,{children:"exchBidPrc"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"exch bid @ auction print time"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"139"}),(0,i.jsx)(e.td,{children:"exchBidSz"}),(0,i.jsx)(e.td,{children:"int"}),(0,i.jsx)(e.td,{children:"exch bid size"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"140"}),(0,i.jsx)(e.td,{children:"exchAskPrc"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"exch ask @ auction print time"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"141"}),(0,i.jsx)(e.td,{children:"exchAskSz"}),(0,i.jsx)(e.td,{children:"int"}),(0,i.jsx)(e.td,{children:"exch ask size"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"146"}),(0,i.jsx)(e.td,{children:"uPrc1m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"uPrc (mid market) @ auction print time + 1m"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"147"}),(0,i.jsx)(e.td,{children:"bidPrc1m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"option nbbo bid @ auction print time + 1m"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"148"}),(0,i.jsx)(e.td,{children:"askPrc1m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"option nbbo ask @ auction print time + 1m"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"149"}),(0,i.jsx)(e.td,{children:"surfVol1m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"surface vol @ auction print time + 1m (single option auction only)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"150"}),(0,i.jsx)(e.td,{children:"surfPrc1m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"surface prc @ auction print time + 1m (@ uMid)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"151"}),(0,i.jsx)(e.td,{children:"uPrc10m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"uPrc (mid market) @ auction print time + 10m"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"152"}),(0,i.jsx)(e.td,{children:"bidPrc10m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"option nbbo bid @ auction print time + 10m"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"153"}),(0,i.jsx)(e.td,{children:"askPrc10m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"option nbbo ask @ auction print time + 10m"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"154"}),(0,i.jsx)(e.td,{children:"surfVol10m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"surface vol @ auction print time + 10m (single option auction only)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"155"}),(0,i.jsx)(e.td,{children:"surfPrc10m"}),(0,i.jsx)(e.td,{children:"float"}),(0,i.jsx)(e.td,{children:"surface prc @ auction print time + 10m (@ uMid)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"156"}),(0,i.jsx)(e.td,{children:"timestamp"}),(0,i.jsx)(e.td,{children:"DateTime"}),(0,i.jsx)(e.td,{})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,i.jsx)(e.p,{children:"OrderLegs"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Field"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Comment"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"165"}),(0,i.jsx)(e.td,{children:"secKey"}),(0,i.jsx)(e.td,{children:"OptionKey"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"166"}),(0,i.jsx)(e.td,{children:"secType"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"167"}),(0,i.jsx)(e.td,{children:"side"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"168"}),(0,i.jsx)(e.td,{children:"ratio"}),(0,i.jsx)(e.td,{children:"ushort"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"169"}),(0,i.jsx)(e.td,{children:"undPerCn"}),(0,i.jsx)(e.td,{children:"int"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"170"}),(0,i.jsx)(e.td,{children:"pointValue"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"171"}),(0,i.jsx)(e.td,{children:"expType"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/ExpiryType",children:"enum : ExpiryType"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"172"}),(0,i.jsx)(e.td,{children:"years"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"173"}),(0,i.jsx)(e.td,{children:"rate"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"174"}),(0,i.jsx)(e.td,{children:"atmVol"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"175"}),(0,i.jsx)(e.td,{children:"ddivPv"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"176"}),(0,i.jsx)(e.td,{children:"tVol"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"177"}),(0,i.jsx)(e.td,{children:"sVol"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"178"}),(0,i.jsx)(e.td,{children:"sDiv"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"179"}),(0,i.jsx)(e.td,{children:"sPrc"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"180"}),(0,i.jsx)(e.td,{children:"de"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"181"}),(0,i.jsx)(e.td,{children:"ga"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"182"}),(0,i.jsx)(e.td,{children:"th"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"183"}),(0,i.jsx)(e.td,{children:"ve"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"184"}),(0,i.jsx)(e.td,{children:"sVolOk"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"185"}),(0,i.jsx)(e.td,{children:"oBid"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"186"}),(0,i.jsx)(e.td,{children:"oBidSz"}),(0,i.jsx)(e.td,{children:"int"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"187"}),(0,i.jsx)(e.td,{children:"oBidMask"}),(0,i.jsx)(e.td,{children:"uint"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"188"}),(0,i.jsx)(e.td,{children:"oAsk"}),(0,i.jsx)(e.td,{children:"float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"189"}),(0,i.jsx)(e.td,{children:"oAskSz"}),(0,i.jsx)(e.td,{children:"int"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"190"}),(0,i.jsx)(e.td,{children:"oAskMask"}),(0,i.jsx)(e.td,{children:"uint"})]})]})]})]})}function j(d={}){const{wrapper:e}={...(0,r.R)(),...d.components};return e?(0,i.jsx)(e,{...d,children:(0,i.jsx)(x,{...d})}):x(d)}},28453:(d,e,t)=>{t.d(e,{R:()=>n,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function n(d){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function c(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(r):d.components||r:n(d.components),i.createElement(s.Provider,{value:e},d.children)}}}]);
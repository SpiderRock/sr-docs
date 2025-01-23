"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[52644],{17338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>u});var s=t(74848),r=t(28453),i=t(11470),c=t(19365);const d={title:"AuctionNotice"},l="Schema: AuctionNotice (ID: 2465)",a={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",title:"AuctionNotice",description:"METADATA",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionNotice.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{title:"AuctionNotice"},sidebar:"messageSchemasSidebar",previous:{title:"2450-liquidity-notice",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/liquidity-notice/"},next:{title:"AuctionNoticeBX",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"schema-auctionnotice-id-2465",children:["Schema: AuctionNotice ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2465)"})]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"SRATS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SRSE Product"}),(0,s.jsx)(n.td,{children:"SRTrade"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11="}),(0,s.jsx)(n.td,{children:"noticeNumber"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"107"}),(0,s.jsx)(n.td,{children:"ticker"}),(0,s.jsx)(n.td,{children:"TickerKey"}),(0,s.jsx)(n.td,{children:"underlier ticker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"tradeDate"}),(0,s.jsx)(n.td,{children:"DateKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"104"}),(0,s.jsx)(n.td,{children:"isTestAuction"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"186"}),(0,s.jsx)(n.td,{children:"shortCode"}),(0,s.jsx)(n.td,{children:"string(10)"}),(0,s.jsx)(n.td,{children:"auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"auctionType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"101"}),(0,s.jsx)(n.td,{children:"auctionEvent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"169"}),(0,s.jsx)(n.td,{children:"srcAuctionID"}),(0,s.jsx)(n.td,{children:"string(20)"}),(0,s.jsx)(n.td,{children:"auction ID as known by the auction source (empty for SRC)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"170"}),(0,s.jsx)(n.td,{children:"srcAuctionType"}),(0,s.jsx)(n.td,{children:"string(4)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"auctionSource"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,s.jsx)(n.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"108"}),(0,s.jsx)(n.td,{children:"industry"}),(0,s.jsx)(n.td,{children:"text1"}),(0,s.jsx)(n.td,{children:"industry string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"symbolType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"110"}),(0,s.jsx)(n.td,{children:"uAvgDailyVlm"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"underlier average daily trading volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"111"}),(0,s.jsx)(n.td,{children:"custSide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(n.td,{children:"if available"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"custQty"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"113"}),(0,s.jsx)(n.td,{children:"custPrc"}),(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{children:"public cust price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"114"}),(0,s.jsx)(n.td,{children:"hasCustPrc"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"187"}),(0,s.jsx)(n.td,{children:"custNbboCap"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/NbboCap",children:"enum : NbboCap"})}),(0,s.jsx)(n.td,{children:"indicates if cust price is capped at NBBO (or 1, 5, 10 pennies through)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"162"}),(0,s.jsx)(n.td,{children:"custFirmType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(n.td,{children:"cust firm type (if disclosed)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"163"}),(0,s.jsx)(n.td,{children:"custAgentMPID"}),(0,s.jsx)(n.td,{children:"string(6)"}),(0,s.jsx)(n.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"custClientFirm"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"cust client firm (if disclosed)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"116"}),(0,s.jsx)(n.td,{children:"commEnhancement"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"additional commission (if any) paid by responder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"117"}),(0,s.jsx)(n.td,{children:"custCommPaying"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"client is commission paying (to the responder)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"custQtyCond"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/CustQtyCond",children:"enum : CustQtyCond"})}),(0,s.jsx)(n.td,{children:"UpToQty, AllOrNone, QtyOrMore"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"119"}),(0,s.jsx)(n.td,{children:"auctionDuration"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"[expected] auction duration (in milliseconds)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"120"}),(0,s.jsx)(n.td,{children:"numOptLegs"}),(0,s.jsx)(n.td,{children:"byte"}),(0,s.jsx)(n.td,{children:"MLEG Only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"spreadClass"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/ToolSpreadClass",children:"enum : ToolSpreadClass"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"171"}),(0,s.jsx)(n.td,{children:"limitType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrLimitType",children:"enum : SpdrLimitType"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"122"}),(0,s.jsx)(n.td,{children:"spreadFlavor"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpreadFlavor",children:"enum : SpreadFlavor"})}),(0,s.jsx)(n.td,{children:"MLEG Only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123"}),(0,s.jsx)(n.td,{children:"containsHedge"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"MLEG Only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"164"}),(0,s.jsx)(n.td,{children:"containsFlex"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"contains FLEX options (not regular listed options)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"165"}),(0,s.jsx)(n.td,{children:"containsMultiHedge"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"contains MultiHedge (corp action adjusted) options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"124"}),(0,s.jsx)(n.td,{children:"uBid"}),(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"125"}),(0,s.jsx)(n.td,{children:"uAsk"}),(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"184"}),(0,s.jsx)(n.td,{children:"refUPrc"}),(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"172"}),(0,s.jsx)(n.td,{children:"netDe"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"173"}),(0,s.jsx)(n.td,{children:"netGa"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"174"}),(0,s.jsx)(n.td,{children:"netTh"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"175"}),(0,s.jsx)(n.td,{children:"netVe"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"176"}),(0,s.jsx)(n.td,{children:"pkgSurfPrc"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"SR Surface Price (entire package)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"182"}),(0,s.jsx)(n.td,{children:"pkgTheoPrc"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Client Theo Price (entire package) (if client surfaces uploaded to SR)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"177"}),(0,s.jsx)(n.td,{children:"pkgBidPrc"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"leg market best way price (pkg bid)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"178"}),(0,s.jsx)(n.td,{children:"pkgAskPrc"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"leg market worst way price (pkg ask)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"179"}),(0,s.jsx)(n.td,{children:"pointValue"}),(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{children:"money settlement value of one (1.0) point of option premium/strike"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"185"}),(0,s.jsx)(n.td,{children:"pointCurrency"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"180"}),(0,s.jsx)(n.td,{children:"srcTimestamp"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"181"}),(0,s.jsx)(n.td,{children:"netTimestamp"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"166"}),(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{children:"from ats / exchange net timestamp if possible"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"157"}),(0,s.jsx)(n.td,{children:"includeSRNetwork"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,s.jsx)(n.p,{children:"OrderLegs"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"132"}),(0,s.jsx)(n.td,{children:"secKey"}),(0,s.jsx)(n.td,{children:"OptionKey"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"133"}),(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"134"}),(0,s.jsx)(n.td,{children:"side"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"135"}),(0,s.jsx)(n.td,{children:"ratio"}),(0,s.jsx)(n.td,{children:"ushort"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"136"}),(0,s.jsx)(n.td,{children:"undPerCn"}),(0,s.jsx)(n.td,{children:"int"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"138"}),(0,s.jsx)(n.td,{children:"expType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/ExpiryType",children:"enum : ExpiryType"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"139"}),(0,s.jsx)(n.td,{children:"years"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"140"}),(0,s.jsx)(n.td,{children:"rate"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"141"}),(0,s.jsx)(n.td,{children:"atmVol"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"142"}),(0,s.jsx)(n.td,{children:"ddivPv"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"143"}),(0,s.jsx)(n.td,{children:"tVol"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"183"}),(0,s.jsx)(n.td,{children:"tPrc"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"144"}),(0,s.jsx)(n.td,{children:"sVol"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"145"}),(0,s.jsx)(n.td,{children:"sDiv"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"146"}),(0,s.jsx)(n.td,{children:"sPrc"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"147"}),(0,s.jsx)(n.td,{children:"de"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"148"}),(0,s.jsx)(n.td,{children:"ga"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"149"}),(0,s.jsx)(n.td,{children:"th"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"150"}),(0,s.jsx)(n.td,{children:"ve"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"168"}),(0,s.jsx)(n.td,{children:"sVolOk"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"151"}),(0,s.jsx)(n.td,{children:"oBid"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"152"}),(0,s.jsx)(n.td,{children:"oBidSz"}),(0,s.jsx)(n.td,{children:"int"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"153"}),(0,s.jsx)(n.td,{children:"oBidMask"}),(0,s.jsx)(n.td,{children:"uint"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"154"}),(0,s.jsx)(n.td,{children:"oAsk"}),(0,s.jsx)(n.td,{children:"float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"155"}),(0,s.jsx)(n.td,{children:"oAskSz"}),(0,s.jsx)(n.td,{children:"int"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"156"}),(0,s.jsx)(n.td,{children:"oAskMask"}),(0,s.jsx)(n.td,{children:"uint"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"DirectedCounterParty"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"159"}),(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"string(16)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"160"}),(0,s.jsx)(n.td,{children:"inclExcl"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"161"}),(0,s.jsx)(n.td,{children:"isCommPaying"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'AuctionNotice'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=AuctionNotice'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNotice\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|tradeDate|isTestAuction|shortCode|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custNbboCap|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|numOptLegs|spreadClass|limitType|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|refUPrc|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgTheoPrc|pkgBidPrc|pkgAskPrc|pointValue|pointCurrency|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'shortCode:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=AuctionNotice' \\\n--data-urlencode 'view=ticker|tradeDate|isTestAuction|shortCode|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custNbboCap|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|numOptLegs|spreadClass|limitType|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|refUPrc|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgTheoPrc|pkgBidPrc|pkgAskPrc|pointValue|pointCurrency|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'where=shortCode:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNotice\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|tradeDate|isTestAuction|shortCode|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custNbboCap|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|numOptLegs|spreadClass|limitType|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|refUPrc|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgTheoPrc|pkgBidPrc|pkgAskPrc|pointValue|pointCurrency|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'shortCode:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=AuctionNotice' \\\n--data-urlencode 'view=ticker|tradeDate|isTestAuction|shortCode|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custNbboCap|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|numOptLegs|spreadClass|limitType|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|refUPrc|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgTheoPrc|pkgBidPrc|pkgAskPrc|pointValue|pointCurrency|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'where=shortCode:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNotice\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|tradeDate|isTestAuction|shortCode|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custNbboCap|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|numOptLegs|spreadClass|limitType|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|refUPrc|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgTheoPrc|pkgBidPrc|pkgAskPrc|pointValue|pointCurrency|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'isTestAuction|auctionType|auctionEvent|auctionSource|symbolType|custSide|hasCustPrc|custNbboCap|custFirmType|custCommPaying|custQtyCond|spreadClass|limitType|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|pointCurrency|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'shortCode:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=AuctionNotice' \\\n--data-urlencode 'measure=ticker|tradeDate|isTestAuction|shortCode|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custNbboCap|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|numOptLegs|spreadClass|limitType|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|uBid|uAsk|refUPrc|netDe|netGa|netTh|netVe|pkgSurfPrc|pkgTheoPrc|pkgBidPrc|pkgAskPrc|pointValue|pointCurrency|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'group=isTestAuction|auctionType|auctionEvent|auctionSource|symbolType|custSide|hasCustPrc|custNbboCap|custFirmType|custCommPaying|custQtyCond|spreadClass|limitType|spreadFlavor|containsHedge|containsFlex|containsMultiHedge|pointCurrency|includeSRNetwork' \\\n--data-urlencode 'where=shortCode:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNotice\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'shortCode:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=AuctionNotice' \\\n--data-urlencode 'where=shortCode:eq:ExampleString'\n"})})})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var s=t(96540),r=t(34164),i=t(23104),c=t(56347),d=t(205),l=t(57485),a=t(31682),o=t(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[c,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[a,u]=j({queryString:t,groupId:r}),[m,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),g=(()=>{const e=a??m;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{g&&l(g)}),[g]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function f(e){let{className:n,block:t,selectedValue:s,selectValue:c,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),o=e=>{const n=e.currentTarget,t=l.indexOf(n),r=d[t].value;r!==s&&(a(n),c(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function T(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,y.jsx)(f,{...n,...e}),(0,y.jsx)(T,{...n,...e})]})}function v(e){const n=(0,p.A)();return(0,y.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
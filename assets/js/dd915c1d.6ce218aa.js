"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1014],{24187:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=s(74848),i=s(28453);const n={title:"AuctionNotice"},r="Schema: AuctionNotice (ID: 2465)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",title:"AuctionNotice",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionNotice.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionNotice"},sidebar:"messageSchemasSidebar",previous:{title:"2450-liquidity-notice",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/"},next:{title:"AuctionNoticeBX",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"schema-auctionnotice-id-2465",children:["Schema: AuctionNotice ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 2465)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"2450-liquidity-notice"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"SRConnect"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsx)(d.tbody,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"10"}),(0,t.jsx)(d.td,{children:"noticeNumber"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"100"}),(0,t.jsx)(d.td,{children:"ticker"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"underlier ticker"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"103"}),(0,t.jsx)(d.td,{children:"tradeDate"}),(0,t.jsx)(d.td,{children:"DateKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"106"}),(0,t.jsx)(d.td,{children:"isTestAuction"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"109"}),(0,t.jsx)(d.td,{children:"shortCode"}),(0,t.jsx)(d.td,{children:"string(8)"}),(0,t.jsx)(d.td,{children:"8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"112"}),(0,t.jsx)(d.td,{children:"auctionType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"115"}),(0,t.jsx)(d.td,{children:"auctionEvent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"118"}),(0,t.jsx)(d.td,{children:"srcAuctionID"}),(0,t.jsx)(d.td,{children:"string(20)"}),(0,t.jsx)(d.td,{children:"auction ID as known by the auction source (empty for SRC)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"121"}),(0,t.jsx)(d.td,{children:"srcAuctionType"}),(0,t.jsx)(d.td,{children:"string(4)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"124"}),(0,t.jsx)(d.td,{children:"auctionSource"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,t.jsx)(d.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"127"}),(0,t.jsx)(d.td,{children:"industry"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"industry string"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"130"}),(0,t.jsx)(d.td,{children:"symbolType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"133"}),(0,t.jsx)(d.td,{children:"uAvgDailyVlm"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier average daily trading volume"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"136"}),(0,t.jsx)(d.td,{children:"custSide"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(d.td,{children:"if available"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"139"}),(0,t.jsx)(d.td,{children:"custQty"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"142"}),(0,t.jsx)(d.td,{children:"custPrc"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"public cust price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"145"}),(0,t.jsx)(d.td,{children:"hasCustPrc"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"148"}),(0,t.jsx)(d.td,{children:"custFirmType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,t.jsx)(d.td,{children:"cust firm type (if disclosed)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"151"}),(0,t.jsx)(d.td,{children:"custAgentMPID"}),(0,t.jsx)(d.td,{children:"string(6)"}),(0,t.jsx)(d.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"154"}),(0,t.jsx)(d.td,{children:"custClientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"cust client firm (if disclosed)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"157"}),(0,t.jsx)(d.td,{children:"commEnhancement"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"additional commission (if any) paid by responder"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"160"}),(0,t.jsx)(d.td,{children:"custCommPaying"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"client is commission paying (to the responder)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"163"}),(0,t.jsx)(d.td,{children:"custQtyCond"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/CustQtyCond",children:"enum : CustQtyCond"})}),(0,t.jsx)(d.td,{children:"UpToQty, AllOrNone, QtyOrMore"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"166"}),(0,t.jsx)(d.td,{children:"auctionDuration"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"[expected] auction duration (in milliseconds)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"169"}),(0,t.jsx)(d.td,{children:"numOptLegs"}),(0,t.jsx)(d.td,{children:"byte"}),(0,t.jsx)(d.td,{children:"MLEG Only"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"172"}),(0,t.jsx)(d.td,{children:"spreadClass"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ToolSpreadClass",children:"enum : ToolSpreadClass"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"175"}),(0,t.jsx)(d.td,{children:"limitType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrLimitType",children:"enum : SpdrLimitType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"178"}),(0,t.jsx)(d.td,{children:"spreadFlavor"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpreadFlavor",children:"enum : SpreadFlavor"})}),(0,t.jsx)(d.td,{children:"MLEG Only"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"181"}),(0,t.jsx)(d.td,{children:"containsHedge"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"MLEG Only"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"184"}),(0,t.jsx)(d.td,{children:"containsFlex"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"contains FLEX options (not regular listed options)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"187"}),(0,t.jsx)(d.td,{children:"containsMultiHedge"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"contains MultiHedge (corp action adjusted) options"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"190"}),(0,t.jsx)(d.td,{children:"uBid"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"193"}),(0,t.jsx)(d.td,{children:"uAsk"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"196"}),(0,t.jsx)(d.td,{children:"refUPrc"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"199"}),(0,t.jsx)(d.td,{children:"netDe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"202"}),(0,t.jsx)(d.td,{children:"netGa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"205"}),(0,t.jsx)(d.td,{children:"netTh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"208"}),(0,t.jsx)(d.td,{children:"netVe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"211"}),(0,t.jsx)(d.td,{children:"pkgSurfPrc"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"SR Surface Price (entire package)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"214"}),(0,t.jsx)(d.td,{children:"pkgTheoPrc"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Client Theo Price (entire package) (if client surfaces uploaded to SR)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"217"}),(0,t.jsx)(d.td,{children:"pkgBidPrc"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"leg market best way price (pkg bid)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"220"}),(0,t.jsx)(d.td,{children:"pkgAskPrc"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"leg market worst way price (pkg ask)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"223"}),(0,t.jsx)(d.td,{children:"pointValue"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"money settlement value of one (1.0) point of option premium/strike"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"307"}),(0,t.jsx)(d.td,{children:"srcTimestamp"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"310"}),(0,t.jsx)(d.td,{children:"netTimestamp"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"313"}),(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{children:"from ats / exchange net timestamp if possible"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"316"}),(0,t.jsx)(d.td,{children:"includeSRNetwork"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,t.jsx)(d.td,{})]})]})]}),(0,t.jsx)(d.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(d.p,{children:"OrderLegs"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"229"}),(0,t.jsx)(d.td,{children:"secKey"}),(0,t.jsx)(d.td,{children:"OptionKey"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"232"}),(0,t.jsx)(d.td,{children:"secType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"235"}),(0,t.jsx)(d.td,{children:"side"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"238"}),(0,t.jsx)(d.td,{children:"ratio"}),(0,t.jsx)(d.td,{children:"ushort"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"241"}),(0,t.jsx)(d.td,{children:"undPerCn"}),(0,t.jsx)(d.td,{children:"int"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"244"}),(0,t.jsx)(d.td,{children:"expType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ExpiryType",children:"enum : ExpiryType"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"247"}),(0,t.jsx)(d.td,{children:"years"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"250"}),(0,t.jsx)(d.td,{children:"rate"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"253"}),(0,t.jsx)(d.td,{children:"atmVol"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"256"}),(0,t.jsx)(d.td,{children:"ddivPv"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"259"}),(0,t.jsx)(d.td,{children:"tVol"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"262"}),(0,t.jsx)(d.td,{children:"tPrc"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"265"}),(0,t.jsx)(d.td,{children:"sVol"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"268"}),(0,t.jsx)(d.td,{children:"sDiv"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"271"}),(0,t.jsx)(d.td,{children:"sPrc"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"274"}),(0,t.jsx)(d.td,{children:"de"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"277"}),(0,t.jsx)(d.td,{children:"ga"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"280"}),(0,t.jsx)(d.td,{children:"th"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"283"}),(0,t.jsx)(d.td,{children:"ve"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"286"}),(0,t.jsx)(d.td,{children:"sVolOk"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"289"}),(0,t.jsx)(d.td,{children:"oBid"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"292"}),(0,t.jsx)(d.td,{children:"oBidSz"}),(0,t.jsx)(d.td,{children:"int"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"295"}),(0,t.jsx)(d.td,{children:"oBidMask"}),(0,t.jsx)(d.td,{children:"uint"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"298"}),(0,t.jsx)(d.td,{children:"oAsk"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"301"}),(0,t.jsx)(d.td,{children:"oAskSz"}),(0,t.jsx)(d.td,{children:"int"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"304"}),(0,t.jsx)(d.td,{children:"oAskMask"}),(0,t.jsx)(d.td,{children:"uint"})]})]})]}),(0,t.jsx)(d.p,{children:"DirectedCounterParty"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"322"}),(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"325"}),(0,t.jsx)(d.td,{children:"inclExcl"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"328"}),(0,t.jsx)(d.td,{children:"isCommPaying"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>c});var t=s(96540);const i={},n=t.createContext(i);function r(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);
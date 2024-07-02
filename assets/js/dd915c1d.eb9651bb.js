"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1014],{24187:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=d(74848),i=d(28453);const r={title:"AuctionNotice"},n="Schema: AuctionNotice (ID: 2465)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",title:"AuctionNotice",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionNotice.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionNotice"},sidebar:"messageSchemasSidebar",previous:{title:"2450-liquidity-notice",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/"},next:{title:"AuctionNoticeBX",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-auctionnotice-id-2465",children:["Schema: AuctionNotice ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 2465)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SRConnect"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"liquidity-notice"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"noticeNumber"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"auctionDuration"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"[expected] auction duration (in milliseconds)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"auctionEvent"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"auctionSource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,t.jsx)(s.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"auctionType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"commEnhancement"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"additional commission (if any) paid by responder"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"containsFlex"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"contains FLEX options (not regular listed options)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"containsHedge"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"MLEG Only"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"containsMultiHedge"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"contains MultiHedge (corp action adjusted) options"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custAgentMPID"}),(0,t.jsx)(s.td,{children:"string(6)"}),(0,t.jsx)(s.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custClientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"cust client firm (if disclosed)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custCommPaying"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"client is commission paying (to the responder)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custFirmType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,t.jsx)(s.td,{children:"cust firm type (if disclosed)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"public cust price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custQty"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custQtyCond"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/CustQtyCond",children:"enum : CustQtyCond"})}),(0,t.jsx)(s.td,{children:"UpToQty, AllOrNone, QtyOrMore"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"custSide"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(s.td,{children:"if available"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hasCustPrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"includeSRNetwork"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"industry"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"industry string"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"isTestAuction"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"limitType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrLimitType",children:"enum : SpdrLimitType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"netDe"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"netGa"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"netTh"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"netTimestamp"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"netVe"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"numOptLegs"}),(0,t.jsx)(s.td,{children:"byte"}),(0,t.jsx)(s.td,{children:"MLEG Only"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pkgAskPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"leg market worst way price (pkg ask)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pkgBidPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"leg market best way price (pkg bid)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pkgSurfPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SR Surface Price (entire package)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pkgTheoPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"Client Theo Price (entire package) (if client surfaces uploaded to SR)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pointValue"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"money settlement value of one (1.0) point of option premium/strike"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"refUPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"shortCode"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spreadClass"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ToolSpreadClass",children:"enum : ToolSpreadClass"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spreadFlavor"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpreadFlavor",children:"enum : SpreadFlavor"})}),(0,t.jsx)(s.td,{children:"MLEG Only"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srcAuctionID"}),(0,t.jsx)(s.td,{children:"string(20)"}),(0,t.jsx)(s.td,{children:"auction ID as known by the auction source (empty for SRC)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srcAuctionType"}),(0,t.jsx)(s.td,{children:"string(4)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srcTimestamp"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"symbolType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ticker"}),(0,t.jsx)(s.td,{children:"TickerKey"}),(0,t.jsx)(s.td,{children:"underlier ticker"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"from ats / exchange net timestamp if possible"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tradeDate"}),(0,t.jsx)(s.td,{children:"DateKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uAsk"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uAvgDailyVlm"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"underlier average daily trading volume"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uBid"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{})]})]})]}),(0,t.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(s.p,{children:"DirectedCounterParty"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"inclExcl"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"isCommPaying"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]})]})]}),(0,t.jsx)(s.p,{children:"OrderLegs"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"atmVol"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"ATM (fwd uPrc) SR surface volatility"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ddivPv"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SR present value of ddiv stream"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"de"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"expType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ExpiryType",children:"enum : ExpiryType"})}),(0,t.jsx)(s.td,{children:"ZDte,Daily,Weekly,Regular,Quarterly,LongTerm,OtherExp"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ga"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oAsk"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"NBBO ask price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oAskMask"}),(0,t.jsx)(s.td,{children:"uint"}),(0,t.jsx)(s.td,{children:"bit-mask of participating NBBO exchanges"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oAskSz"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"cumulative NBBO ask size"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oBid"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"NBBO bid price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oBidMask"}),(0,t.jsx)(s.td,{children:"uint"}),(0,t.jsx)(s.td,{children:"bit-mask of participating NBBO exchanges"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oBidSz"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"cumulative NBBO bid size"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rate"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SR global (discount) rate to expiry"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ratio"}),(0,t.jsx)(s.td,{children:"ushort"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sDiv"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SR Surface SDiv"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SR Surface Price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sVol"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SR Surface Volatility"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sVolOk"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"Yes if live market and sVol are tracking as expected"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey"}),(0,t.jsx)(s.td,{children:"OptionKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"side"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"client theo price (if client surfaces uploaded to SR)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tVol"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"client theo surface volatility (if client surfaces uploaded to SR)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"th"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"undPerCn"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ve"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"years"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SR volatility years to expiry"})]})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>n,x:()=>c});var t=d(96540);const i={},r=t.createContext(i);function n(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);
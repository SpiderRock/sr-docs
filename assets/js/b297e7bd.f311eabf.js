"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13837],{92194:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var d=s(74848),n=s(28453);const r={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/AuctionNotice",title:"AuctionNotice",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/AuctionNotice.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRTrade",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/"},next:{title:"AuctionNoticeBX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (DirectedCounterPartyList)",id:"json-block-directedcounterpartylist",level:3},{value:"JSON Block (OrderLegsList)",id:"json-block-orderlegslist",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionNotice",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SRConnect"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRTrade"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"noticeNumber"}),(0,d.jsx)(t.td,{children:"CHAR(19)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"underlier ticker"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"underlier ticker"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"underlier ticker"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"DATE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isTestAuction"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"shortCode"}),(0,d.jsx)(t.td,{children:"VARCHAR(8)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"8 letter auction short code unique per day block auctions only can be used to find auctions on SR tools"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"auctionType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"auctionEvent"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AuctionEvent",children:"enum - AuctionEvent"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"srcAuctionID"}),(0,d.jsx)(t.td,{children:"VARCHAR(20)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"auction ID as known by the auction source empty for SRC"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"srcAuctionType"}),(0,d.jsx)(t.td,{children:"VARCHAR(4)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"auctionSource"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum - AuctionSource"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"industry"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"industry string"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbolType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"custSide"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"if available"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"custQty"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"custPrc"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"public cust price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hasCustPrc"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"custFirmType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"cust firm type if disclosed"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"custAgentMPID"}),(0,d.jsx)(t.td,{children:"VARCHAR(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"custClientFirm"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"cust client firm if disclosed"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commEnhancement"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"additional commission if any paid by responder"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"custCommPaying"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"client is commission paying to the responder"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"custQtyCond"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CustQtyCond",children:"enum - CustQtyCond"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"UpToQty AllOrNone QtyOrMore"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"auctionDuration"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"expected auction duration in milliseconds"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"numOptLegs"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"MLEG Only"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"spreadClass"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/ToolSpreadClass",children:"enum - ToolSpreadClass"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"limitType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SpdrLimitType",children:"enum - SpdrLimitType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"spreadFlavor"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SpreadFlavor",children:"enum - SpreadFlavor"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"MLEG Only"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"containsHedge"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"MLEG Only"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"containsFlex"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"contains FLEX options not regular listed options"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"containsMultiHedge"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"contains MultiHedge corp action adjusted options"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uBid"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uAsk"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"refUPrc"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netDe"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netGa"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netTh"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netVe"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pkgSurfPrc"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"SR Surface Price entire package"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pkgTheoPrc"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Client Theo Price entire package if client surfaces uploaded to SR"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pkgBidPrc"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"leg market best way price pkg bid"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pkgAskPrc"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"leg market worst way price pkg ask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pointValue"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"money settlement value of one 10 point of option premiumstrike"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"srcTimestamp"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netTimestamp"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"from ats  exchange net timestamp if possible"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"includeSRNetwork"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum - InclExclDisclose"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DirectedCounterPartyList"}),(0,d.jsx)(t.td,{children:"JSON"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"OrderLegsList"}),(0,d.jsx)(t.td,{children:"JSON"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"noticeNumber"}),(0,d.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"json-block-directedcounterpartylist",children:"JSON Block (DirectedCounterPartyList)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"inclExcl"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/inclExcl",children:"enum - inclExcl"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isCommPaying"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/isCommPaying",children:"enum - isCommPaying"})}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"json-block-orderlegslist",children:"JSON Block (OrderLegsList)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsx)(t.td,{children:"OptionKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/secType",children:"enum - secType"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"side"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/side",children:"enum - side"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ratio"}),(0,d.jsx)(t.td,{children:"ushort"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"undPerCn"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"expType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/expType",children:"enum - expType"})}),(0,d.jsx)(t.td,{children:"ZDteDailyWeeklyRegularQuarterlyLongTermOtherExp"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"years"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR volatility years to expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR global discount rate to expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"ATM fwd uPrc SR surface volatility"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ddivPv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR present value of ddiv stream"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"client theo surface volatility if client surfaces uploaded to SR"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tPrc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"client theo price if client surfaces uploaded to SR"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR Surface Volatility"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sDiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR Surface SDiv"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sPrc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR Surface Price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"de"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ga"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"th"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ve"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sVolOk"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/sVolOk",children:"enum - sVolOk"})}),(0,d.jsx)(t.td,{children:"Yes if live market and sVol are tracking as expected"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"NBBO bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"cumulative NBBO bid size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidMask"}),(0,d.jsx)(t.td,{children:"uint"}),(0,d.jsx)(t.td,{children:"bitmask of participating NBBO exchanges"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAsk"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"NBBO ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"cumulative NBBO ask size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskMask"}),(0,d.jsx)(t.td,{children:"uint"}),(0,d.jsx)(t.td,{children:"bitmask of participating NBBO exchanges"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionNotice` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `shortCode` VARCHAR(8) NOT NULL DEFAULT '' COMMENT '8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None',\n    `auctionEvent` ENUM('None','Start','Update','End') NOT NULL DEFAULT 'None',\n    `srcAuctionID` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'auction ID as known by the auction source (empty for SRC)',\n    `srcAuctionType` VARCHAR(4) NOT NULL DEFAULT '',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `industry` TINYTEXT NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'if available',\n    `custQty` INT NOT NULL DEFAULT 0,\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'public cust price',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `custClientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'cust client firm (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `custCommPaying` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'client is commission paying (to the responder)',\n    `custQtyCond` ENUM('None','UpToQty','AllOrNone','QtyOrMore') NOT NULL DEFAULT 'None' COMMENT 'UpToQty, AllOrNone, QtyOrMore',\n    `auctionDuration` INT NOT NULL DEFAULT 0 COMMENT '[expected] auction duration (in milliseconds)',\n    `numOptLegs` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'MLEG Only',\n    `spreadClass` ENUM('None','Stk','Fut','Call','Put','Synth','RevCon','Box','JRoll','Roll','Straddle','Strangle','CSpread','PSpread','VStrip','VSpread','HStrip','HSpread','BFly','RiskRev','Mixed','VarSwap') NOT NULL DEFAULT 'None',\n    `limitType` ENUM('None','Market','MarketArrival','Prc','PrcDe','PrcDeX','PrcDeT','PrcDeP','PrcDeXT','PrcDeXP','Vol','VolX','PrcV','PrcVX','NoLimit','RelMid','RelJoin','RelCross','SmrtFast','SmrtNorm','RelTurn','PrcDeEm','VolEm','Aux','UPrcPct','PkgNeutral','RcPrem','SynthLimitMM','SynthLimitBW','SynthLimitWW') NOT NULL DEFAULT 'None',\n    `spreadFlavor` ENUM('None','Normal','Flipped') NOT NULL DEFAULT 'None' COMMENT 'MLEG Only',\n    `containsHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'MLEG Only',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'contains FLEX options (not regular listed options)',\n    `containsMultiHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'contains MultiHedge (corp action adjusted) options',\n    `uBid` DOUBLE NOT NULL DEFAULT 0,\n    `uAsk` DOUBLE NOT NULL DEFAULT 0,\n    `refUPrc` DOUBLE NOT NULL DEFAULT 0,\n    `netDe` FLOAT NOT NULL DEFAULT 0,\n    `netGa` FLOAT NOT NULL DEFAULT 0,\n    `netTh` FLOAT NOT NULL DEFAULT 0,\n    `netVe` FLOAT NOT NULL DEFAULT 0,\n    `pkgSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price (entire package)',\n    `pkgTheoPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Client Theo Price (entire package) (if client surfaces uploaded to SR)',\n    `pkgBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'leg market best way price (pkg bid)',\n    `pkgAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'leg market worst way price (pkg ask)',\n    `pointValue` DOUBLE NOT NULL DEFAULT 0 COMMENT 'money settlement value of one (1.0) point of option premium/strike',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from ats / exchange net timestamp if possible',\n    `includeSRNetwork` ENUM('None','Include','Exclude','Disclose') NOT NULL DEFAULT 'None',\n    `DirectedCounterPartyList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(DirectedCounterPartyList)),\n    `OrderLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(OrderLegsList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var d=s(96540);const n={},r=d.createContext(n);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);
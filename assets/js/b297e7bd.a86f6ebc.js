"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13837],{92194:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=s(74848),d=s(28453);const r={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/AuctionNotice",title:"AuctionNotice",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/AuctionNotice.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRTrade",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/"},next:{title:"AuctionNoticeBX",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (DirectedCounterPartyList)",id:"json-block-directedcounterpartylist",level:3},{value:"JSON Block (OrderLegsList)",id:"json-block-orderlegslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/liquidity-notice/AuctionNotice",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"SRATS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRTrade"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"noticeNumber"}),(0,t.jsx)(n.td,{children:"CHAR(19)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"underlier ticker"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_ts"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"underlier ticker"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_tk"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"underlier ticker"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tradeDate"}),(0,t.jsx)(n.td,{children:"DATE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isTestAuction"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"shortCode"}),(0,t.jsx)(n.td,{children:"VARCHAR(8)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"8 letter auction short code unique per day block auctions only can be used to find auctions on SR tools"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"auctionType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"auctionEvent"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AuctionEvent",children:"enum - AuctionEvent"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"srcAuctionID"}),(0,t.jsx)(n.td,{children:"VARCHAR(20)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"auction ID as known by the auction source empty for SRC"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"srcAuctionType"}),(0,t.jsx)(n.td,{children:"VARCHAR(4)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"auctionSource"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AuctionSource",children:"enum - AuctionSource"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"industry"}),(0,t.jsx)(n.td,{children:"TINYTEXT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"industry string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbolType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uAvgDailyVlm"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"underlier average daily trading volume"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custSide"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"if available"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custQty"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custPrc"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"public cust price"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hasCustPrc"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custFirmType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"cust firm type if disclosed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custAgentMPID"}),(0,t.jsx)(n.td,{children:"VARCHAR(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custClientFirm"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"cust client firm if disclosed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"commEnhancement"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"additional commission if any paid by responder"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custCommPaying"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"client is commission paying to the responder"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"custQtyCond"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/CustQtyCond",children:"enum - CustQtyCond"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"UpToQty AllOrNone QtyOrMore"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"auctionDuration"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"expected auction duration in milliseconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numOptLegs"}),(0,t.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"MLEG Only"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"spreadClass"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/ToolSpreadClass",children:"enum - ToolSpreadClass"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"limitType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SpdrLimitType",children:"enum - SpdrLimitType"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"spreadFlavor"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SpreadFlavor",children:"enum - SpreadFlavor"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"MLEG Only"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"containsHedge"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"MLEG Only"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"containsFlex"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"contains FLEX options not regular listed options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"containsMultiHedge"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"contains MultiHedge corp action adjusted options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uBid"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uAsk"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refUPrc"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"netDe"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"netGa"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"netTh"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"netVe"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pkgSurfPrc"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"SR Surface Price entire package"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pkgTheoPrc"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Client Theo Price entire package if client surfaces uploaded to SR"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pkgBidPrc"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"leg market best way price pkg bid"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pkgAskPrc"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"leg market worst way price pkg ask"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pointValue"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"money settlement value of one 10 point of option premiumstrike"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pointCurrency"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"srcTimestamp"}),(0,t.jsx)(n.td,{children:"BIGINT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"netTimestamp"}),(0,t.jsx)(n.td,{children:"BIGINT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{children:"from ats  exchange net timestamp if possible"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeSRNetwork"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/InclExclDisclose",children:"enum - InclExclDisclose"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DirectedCounterPartyList"}),(0,t.jsx)(n.td,{children:"JSON"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OrderLegsList"}),(0,t.jsx)(n.td,{children:"JSON"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"noticeNumber"}),(0,t.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"json-block-directedcounterpartylist",children:"JSON Block (DirectedCounterPartyList)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/clientFirm",children:"enum - clientFirm"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"inclExcl"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/InclExclDisclose",children:"enum - InclExclDisclose"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isCommPaying"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"json-block-orderlegslist",children:"JSON Block (OrderLegsList)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"secKey"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/secKey",children:"enum - secKey"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"secType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"side"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ratio"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/ratio",children:"enum - ratio"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"undPerCn"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/undPerCn",children:"enum - undPerCn"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/ExpiryType",children:"enum - ExpiryType"})}),(0,t.jsx)(n.td,{children:"ZDteDailyWeeklyRegularQuarterlyLongTermOtherExp"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"years"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/years",children:"enum - years"})}),(0,t.jsx)(n.td,{children:"SR volatility years to expiry"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rate"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/rate",children:"enum - rate"})}),(0,t.jsx)(n.td,{children:"SR global discount rate to expiry"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"atmVol"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/atmVol",children:"enum - atmVol"})}),(0,t.jsx)(n.td,{children:"ATM fwd uPrc SR surface volatility"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ddivPv"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/ddivPv",children:"enum - ddivPv"})}),(0,t.jsx)(n.td,{children:"SR present value of ddiv stream"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tVol"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/tVol",children:"enum - tVol"})}),(0,t.jsx)(n.td,{children:"client theo surface volatility if client surfaces uploaded to SR"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tPrc"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/tPrc",children:"enum - tPrc"})}),(0,t.jsx)(n.td,{children:"client theo price if client surfaces uploaded to SR"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sVol"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/sVol",children:"enum - sVol"})}),(0,t.jsx)(n.td,{children:"SR Surface Volatility"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sDiv"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/sDiv",children:"enum - sDiv"})}),(0,t.jsx)(n.td,{children:"SR Surface SDiv"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sPrc"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/sPrc",children:"enum - sPrc"})}),(0,t.jsx)(n.td,{children:"SR Surface Price"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"de"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/de",children:"enum - de"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ga"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/ga",children:"enum - ga"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"th"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/th",children:"enum - th"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ve"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/ve",children:"enum - ve"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sVolOk"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{children:"Yes if live market and sVol are tracking as expected"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oBid"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/oBid",children:"enum - oBid"})}),(0,t.jsx)(n.td,{children:"NBBO bid price"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oBidSz"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/oBidSz",children:"enum - oBidSz"})}),(0,t.jsx)(n.td,{children:"cumulative NBBO bid size"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oBidMask"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/oBidMask",children:"enum - oBidMask"})}),(0,t.jsx)(n.td,{children:"bitmask of participating NBBO exchanges"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oAsk"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/oAsk",children:"enum - oAsk"})}),(0,t.jsx)(n.td,{children:"NBBO ask price"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oAskSz"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/oAskSz",children:"enum - oAskSz"})}),(0,t.jsx)(n.td,{children:"cumulative NBBO ask size"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oAskMask"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/oAskMask",children:"enum - oAskMask"})}),(0,t.jsx)(n.td,{children:"bitmask of participating NBBO exchanges"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionNotice` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `shortCode` VARCHAR(8) NOT NULL DEFAULT '' COMMENT '8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None',\n    `auctionEvent` ENUM('None','Start','Update','End') NOT NULL DEFAULT 'None',\n    `srcAuctionID` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'auction ID as known by the auction source (empty for SRC)',\n    `srcAuctionType` VARCHAR(4) NOT NULL DEFAULT '',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `industry` TINYTEXT NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'if available',\n    `custQty` INT NOT NULL DEFAULT 0,\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'public cust price',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `custClientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'cust client firm (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `custCommPaying` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'client is commission paying (to the responder)',\n    `custQtyCond` ENUM('None','UpToQty','AllOrNone','QtyOrMore') NOT NULL DEFAULT 'None' COMMENT 'UpToQty, AllOrNone, QtyOrMore',\n    `auctionDuration` INT NOT NULL DEFAULT 0 COMMENT '[expected] auction duration (in milliseconds)',\n    `numOptLegs` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'MLEG Only',\n    `spreadClass` ENUM('None','Stk','Fut','Call','Put','Synth','RevCon','Box','JRoll','Roll','Straddle','Strangle','CSpread','PSpread','VStrip','VSpread','HStrip','HSpread','BFly','RiskRev','Mixed','VarSwap') NOT NULL DEFAULT 'None',\n    `limitType` ENUM('None','Market','MarketArrival','Prc','PrcDe','PrcDeX','PrcDeT','PrcDeP','PrcDeXT','PrcDeXP','Vol','VolX','PrcV','PrcVX','NoLimit','RelMid','RelJoin','RelCross','SmrtFast','SmrtNorm','RelTurn','PrcDeEm','VolEm','Aux','UPrcPct','PkgNeutral','RcPrem','SynthLimitMM','SynthLimitBW','SynthLimitWW') NOT NULL DEFAULT 'None',\n    `spreadFlavor` ENUM('None','Normal','Flipped') NOT NULL DEFAULT 'None' COMMENT 'MLEG Only',\n    `containsHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'MLEG Only',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'contains FLEX options (not regular listed options)',\n    `containsMultiHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'contains MultiHedge (corp action adjusted) options',\n    `uBid` DOUBLE NOT NULL DEFAULT 0,\n    `uAsk` DOUBLE NOT NULL DEFAULT 0,\n    `refUPrc` DOUBLE NOT NULL DEFAULT 0,\n    `netDe` FLOAT NOT NULL DEFAULT 0,\n    `netGa` FLOAT NOT NULL DEFAULT 0,\n    `netTh` FLOAT NOT NULL DEFAULT 0,\n    `netVe` FLOAT NOT NULL DEFAULT 0,\n    `pkgSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price (entire package)',\n    `pkgTheoPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Client Theo Price (entire package) (if client surfaces uploaded to SR)',\n    `pkgBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'leg market best way price (pkg bid)',\n    `pkgAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'leg market worst way price (pkg ask)',\n    `pointValue` DOUBLE NOT NULL DEFAULT 0 COMMENT 'money settlement value of one (1.0) point of option premium/strike',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from ats / exchange net timestamp if possible',\n    `includeSRNetwork` ENUM('None','Include','Exclude','Disclose') NOT NULL DEFAULT 'None',\n    `DirectedCounterPartyList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(DirectedCounterPartyList)),\n    `OrderLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(OrderLegsList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `noticeNumber`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `isTestAuction`,\n    `shortCode`,\n    `auctionType`,\n    `auctionEvent`,\n    `srcAuctionID`,\n    `srcAuctionType`,\n    `auctionSource`,\n    `industry`,\n    `symbolType`,\n    `uAvgDailyVlm`,\n    `custSide`,\n    `custQty`,\n    `custPrc`,\n    `hasCustPrc`,\n    `custFirmType`,\n    `custAgentMPID`,\n    `custClientFirm`,\n    `commEnhancement`,\n    `custCommPaying`,\n    `custQtyCond`,\n    `auctionDuration`,\n    `numOptLegs`,\n    `spreadClass`,\n    `limitType`,\n    `spreadFlavor`,\n    `containsHedge`,\n    `containsFlex`,\n    `containsMultiHedge`,\n    `uBid`,\n    `uAsk`,\n    `refUPrc`,\n    `netDe`,\n    `netGa`,\n    `netTh`,\n    `netVe`,\n    `pkgSurfPrc`,\n    `pkgTheoPrc`,\n    `pkgBidPrc`,\n    `pkgAskPrc`,\n    `pointValue`,\n    `pointCurrency`,\n    `srcTimestamp`,\n    `netTimestamp`,\n    `timestamp`,\n    `includeSRNetwork`,\n    `DirectedCounterPartyList`,\n    `OrderLegsList`\nFROM `SRTrade`.`MsgAuctionNotice`\nWHERE \n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AuctionNotice' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const d={},r=t.createContext(d);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
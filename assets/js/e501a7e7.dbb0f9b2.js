"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38224],{340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var i=n(74848),d=n(28453);const r={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/AuctionPrint",title:"AuctionPrint",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/AuctionPrint.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeSN",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN/"},next:{title:"AuctionPrintBX",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (OrderLegsList)",id:"json-block-orderlegslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionPrint",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SRConnect"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRTrade"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Default Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeNumber"}),(0,i.jsx)(t.td,{children:"CHAR(19)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,i.jsx)(t.td,{children:"AuctionNoticenoticeNumber"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tradeDate"}),(0,i.jsx)(t.td,{children:"DATE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isTestAuction"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeTime"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{children:"notice create timestamp high precision"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"eg Block Flash Improvement Facilitation etc"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionSource"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum - AuctionSource"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"industry"}),(0,i.jsx)(t.td,{children:"TINYTEXT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"industry string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbolType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custQty"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custPrc"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hasCustPrc"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custFirmType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"cust firm type if disclosed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custAgentMPID"}),(0,i.jsx)(t.td,{children:"VARCHAR(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"commEnhancement"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"additional commission if any paid by responder"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"numOptLegs"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"MLEG Only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"spreadClass"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/ToolSpreadClass",children:"enum - ToolSpreadClass"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"spreadFlavor"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SpreadFlavor",children:"enum - SpreadFlavor"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"MLEG Only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"containsHedge"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"MLEG Only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"containsFlex"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"contains FLEX options not regular listed options"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"containsMultiHedge"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"contains MultiHedge corp action adjusted options"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uBid"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uAsk"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netDe"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netGa"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTh"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netVe"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pkgSurfPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"SR Surface Price entire package"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pkgBidPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"pkg bid price best way price entire package"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pkgAskPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"pkg ask price best way price entire package"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPrice"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"reported OPRA print price pkgPrice if MLeg"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPrice2"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"if reported as 2 separate prints at different prices ie partial size improvement"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSize2"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtTime"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{children:"reported OPRA print time 1st print if MLeg high precision"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum - PrtType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtUBid"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"best estimate of uBid  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtUAsk"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"best estimate of uAsk  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtUPrc"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"best estimate of uPrc  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSurfVol"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface vol  auction print time single option auction only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSurfPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface prc  auction print time  uMid pkgSurfPrc if MLeg"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo bid  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidSz"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"nbbo bid cum size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidMask"}),(0,i.jsx)(t.td,{children:"INT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"nbbo bid exch mask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo ask  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askSz"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"nbbo ask cum size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askMask"}),(0,i.jsx)(t.td,{children:"INT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"nbbo ask exch mask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchBidPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exch bid  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchBidSz"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exch bid size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchAskPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exch ask  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchAskSz"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exch ask size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uPrc1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"uPrc mid market  auction print time  1m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrc1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo bid  auction print time  1m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrc1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo ask  auction print time  1m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"surfVol1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface vol  auction print time  1m single option auction only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"surfPrc1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface prc  auction print time  1m  uMid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uPrc10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"uPrc mid market  auction print time  10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrc10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo bid  auction print time  10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrc10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo ask  auction print time  10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"surfVol10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface vol  auction print time  10m single option auction only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"surfPrc10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface prc  auction print time  10m  uMid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OrderLegsList"}),(0,i.jsx)(t.td,{children:"JSON"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'JSON_OBJECT()'"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeNumber"}),(0,i.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"json-block-orderlegslist",children:"JSON Block (OrderLegsList)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey"}),(0,i.jsx)(t.td,{children:"OptionKey"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/secType",children:"enum - secType"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"side"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/side",children:"enum - side"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ratio"}),(0,i.jsx)(t.td,{children:"ushort"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"undPerCn"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pointValue"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/expType",children:"enum - expType"})}),(0,i.jsx)(t.td,{children:"ZDteDailyWeeklyRegularQuarterlyLongTermOtherExp"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"years"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SR volatility years to expiry"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"rate"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SR global discount rate to expiry"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"atmVol"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"ATM fwd uPrc SR surface volatility"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ddivPv"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SR present value of ddiv stream"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tVol"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"client theo surface volatility if client surfaces uploaded to SR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sVol"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SR Surface Volatility"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sDiv"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SR Surface SDiv"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sPrc"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SR Surface Price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"de"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ga"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"th"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ve"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sVolOk"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/sVolOk",children:"enum - sVolOk"})}),(0,i.jsx)(t.td,{children:"Yes if live market and sVol are tracking as expected"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oBid"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"NBBO bid price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oBidSz"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"cumulative NBBO bid size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oBidMask"}),(0,i.jsx)(t.td,{children:"uint"}),(0,i.jsx)(t.td,{children:"bitmask of participating NBBO exchanges"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oAsk"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"NBBO ask price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oAskSz"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"cumulative NBBO ask size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oAskMask"}),(0,i.jsx)(t.td,{children:"uint"}),(0,i.jsx)(t.td,{children:"bitmask of participating NBBO exchanges"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionPrint` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'AuctionNotice.noticeNumber',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `noticeTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'notice create timestamp (high precision)',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None' COMMENT '(eg. Block, Flash, Improvement, Facilitation, etc.)',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `industry` TINYTEXT NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'from AuctionNotice (if known)',\n    `custQty` INT NOT NULL DEFAULT 0 COMMENT 'from AuctionNotice (if known)',\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'from AuctionNotice (if known)',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'from AuctionNotice (if known)',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `numOptLegs` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'MLEG Only',\n    `spreadClass` ENUM('None','Stk','Fut','Call','Put','Synth','RevCon','Box','JRoll','Roll','Straddle','Strangle','CSpread','PSpread','VStrip','VSpread','HStrip','HSpread','BFly','RiskRev','Mixed','VarSwap') NOT NULL DEFAULT 'None',\n    `spreadFlavor` ENUM('None','Normal','Flipped') NOT NULL DEFAULT 'None' COMMENT 'MLEG Only',\n    `containsHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'MLEG Only',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'contains FLEX options (not regular listed options)',\n    `containsMultiHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'contains MultiHedge (corp action adjusted) options',\n    `uBid` DOUBLE NOT NULL DEFAULT 0,\n    `uAsk` DOUBLE NOT NULL DEFAULT 0,\n    `netDe` FLOAT NOT NULL DEFAULT 0,\n    `netGa` FLOAT NOT NULL DEFAULT 0,\n    `netTh` FLOAT NOT NULL DEFAULT 0,\n    `netVe` FLOAT NOT NULL DEFAULT 0,\n    `pkgSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price (entire package)',\n    `pkgBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'pkg bid price (best way price) (entire package)',\n    `pkgAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'pkg ask price (best way price) (entire package)',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reported OPRA print price (pkgPrice if MLeg)',\n    `prtPrice2` DOUBLE NOT NULL DEFAULT 0 COMMENT 'if reported as 2 separate prints at different prices (ie, partial size improvement)',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'reported OPRA print size (pgkSize if MLeg)',\n    `prtSize2` INT NOT NULL DEFAULT 0 COMMENT 'reported OPRA print size (pgkSize if MLeg)',\n    `prtTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'reported OPRA print time (1st print if MLeg) (high precision)',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None' COMMENT 'reported OPRA print type',\n    `prtUBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uBid @ auction print time',\n    `prtUAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uAsk @ auction print time',\n    `prtUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uPrc @ auction print time',\n    `prtSurfVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface vol @ auction print time (single option auction only)',\n    `prtSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)',\n    `bidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time',\n    `bidSz` INT NOT NULL DEFAULT 0 COMMENT 'nbbo bid cum size',\n    `bidMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'nbbo bid exch mask',\n    `askPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time',\n    `askSz` INT NOT NULL DEFAULT 0 COMMENT 'nbbo ask cum size',\n    `askMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'nbbo ask exch mask',\n    `exchBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'exch bid @ auction print time',\n    `exchBidSz` INT NOT NULL DEFAULT 0 COMMENT 'exch bid size',\n    `exchAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'exch ask @ auction print time',\n    `exchAskSz` INT NOT NULL DEFAULT 0 COMMENT 'exch ask size',\n    `uPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'uPrc (mid market) @ auction print time + 1m',\n    `bidPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time + 1m',\n    `askPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time + 1m',\n    `surfVol1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface vol @ auction print time + 1m (single option auction only)',\n    `surfPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time + 1m (@ uMid)',\n    `uPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'uPrc (mid market) @ auction print time + 10m',\n    `bidPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time + 10m',\n    `askPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time + 10m',\n    `surfVol10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface vol @ auction print time + 10m (single option auction only)',\n    `surfPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time + 10m (@ uMid)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `OrderLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(OrderLegsList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `noticeNumber`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `isTestAuction`,\n    `noticeTime`,\n    `auctionType`,\n    `auctionSource`,\n    `industry`,\n    `symbolType`,\n    `uAvgDailyVlm`,\n    `custSide`,\n    `custQty`,\n    `custPrc`,\n    `hasCustPrc`,\n    `custFirmType`,\n    `custAgentMPID`,\n    `commEnhancement`,\n    `numOptLegs`,\n    `spreadClass`,\n    `spreadFlavor`,\n    `containsHedge`,\n    `containsFlex`,\n    `containsMultiHedge`,\n    `uBid`,\n    `uAsk`,\n    `netDe`,\n    `netGa`,\n    `netTh`,\n    `netVe`,\n    `pkgSurfPrc`,\n    `pkgBidPrc`,\n    `pkgAskPrc`,\n    `prtPrice`,\n    `prtPrice2`,\n    `prtSize`,\n    `prtSize2`,\n    `prtTime`,\n    `prtType`,\n    `prtUBid`,\n    `prtUAsk`,\n    `prtUPrc`,\n    `prtSurfVol`,\n    `prtSurfPrc`,\n    `bidPrc`,\n    `bidSz`,\n    `bidMask`,\n    `askPrc`,\n    `askSz`,\n    `askMask`,\n    `exchBidPrc`,\n    `exchBidSz`,\n    `exchAskPrc`,\n    `exchAskSz`,\n    `uPrc1m`,\n    `bidPrc1m`,\n    `askPrc1m`,\n    `surfVol1m`,\n    `surfPrc1m`,\n    `uPrc10m`,\n    `bidPrc10m`,\n    `askPrc10m`,\n    `surfVol10m`,\n    `surfPrc10m`,\n    `timestamp`,\n    `OrderLegsList`\nFROM `SRTrade`.`MsgAuctionPrint`\nWHERE \n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber';\n"})}),"\n",(0,i.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AuctionPrint' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const d={},r=i.createContext(d);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
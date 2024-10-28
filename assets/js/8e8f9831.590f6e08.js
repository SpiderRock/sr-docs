"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81027],{47564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453);const d={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/AuctionPrint",title:"AuctionPrint",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/AuctionPrint.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeSN",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN/"},next:{title:"AuctionPrintBX",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (OrderLegsList)",id:"json-block-orderlegslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/liquidity-notice/AuctionPrint",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SRATS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRTrade"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"noticeNumber"}),(0,r.jsx)(n.td,{children:"CHAR(19)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(n.td,{children:"AuctionNoticenoticeNumber"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"underlier ticker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"underlier ticker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"underlier ticker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tradeDate"}),(0,r.jsx)(n.td,{children:"DATE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTestAuction"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"noticeTime"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"notice create timestamp high precision"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"auctionType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"eg Block Flash Improvement Facilitation etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"auctionSource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AuctionSource",children:"enum - AuctionSource"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"industry"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"industry string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"symbolType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uAvgDailyVlm"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"underlier average daily trading volume"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"custSide"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"from AuctionNotice if known"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"custQty"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"from AuctionNotice if known"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"custPrc"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"from AuctionNotice if known"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hasCustPrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"from AuctionNotice if known"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"custFirmType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"cust firm type if disclosed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"custAgentMPID"}),(0,r.jsx)(n.td,{children:"VARCHAR(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"commEnhancement"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"additional commission if any paid by responder"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numOptLegs"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"MLEG Only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spreadClass"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ToolSpreadClass",children:"enum - ToolSpreadClass"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spreadFlavor"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpreadFlavor",children:"enum - SpreadFlavor"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"MLEG Only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"containsHedge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"MLEG Only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"containsFlex"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"contains FLEX options not regular listed options"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"containsMultiHedge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"contains MultiHedge corp action adjusted options"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uBid"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uAsk"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netDe"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netGa"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netTh"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netVe"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pkgSurfPrc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR Surface Price entire package"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pkgBidPrc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"pkg bid price best way price entire package"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pkgAskPrc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"pkg ask price best way price entire package"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtPrice"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"reported OPRA print price pkgPrice if MLeg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtPrice2"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"if reported as 2 separate prints at different prices ie partial size improvement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtSize"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtSize2"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtTime"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"reported OPRA print time 1st print if MLeg high precision"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/PrtType",children:"enum - PrtType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"reported OPRA print type"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtUBid"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"best estimate of uBid  auction print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtUAsk"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"best estimate of uAsk  auction print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtUPrc"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"best estimate of uPrc  auction print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtSurfVol"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"surface vol  auction print time single option auction only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtSurfPrc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"surface prc  auction print time  uMid pkgSurfPrc if MLeg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bidPrc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"option nbbo bid  auction print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bidSz"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"nbbo bid cum size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bidMask"}),(0,r.jsx)(n.td,{children:"INT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"nbbo bid exch mask"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"askPrc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"option nbbo ask  auction print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"askSz"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"nbbo ask cum size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"askMask"}),(0,r.jsx)(n.td,{children:"INT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"nbbo ask exch mask"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exchBidPrc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exch bid  auction print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exchBidSz"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exch bid size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exchAskPrc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exch ask  auction print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exchAskSz"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exch ask size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uPrc1m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"uPrc mid market  auction print time  1m"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bidPrc1m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"option nbbo bid  auction print time  1m"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"askPrc1m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"option nbbo ask  auction print time  1m"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"surfVol1m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"surface vol  auction print time  1m single option auction only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"surfPrc1m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"surface prc  auction print time  1m  uMid"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uPrc10m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"uPrc mid market  auction print time  10m"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bidPrc10m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"option nbbo bid  auction print time  10m"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"askPrc10m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"option nbbo ask  auction print time  10m"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"surfVol10m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"surface vol  auction print time  10m single option auction only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"surfPrc10m"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"surface prc  auction print time  10m  uMid"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrderLegsList"}),(0,r.jsx)(n.td,{children:"JSON"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"noticeNumber"}),(0,r.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"json-block-orderlegslist",children:"JSON Block (OrderLegsList)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/secKey",children:"enum - secKey"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"side"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ratio"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ratio",children:"enum - ratio"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undPerCn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/undPerCn",children:"enum - undPerCn"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pointValue"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/pointValue",children:"enum - pointValue"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pointCurrency"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExpiryType",children:"enum - ExpiryType"})}),(0,r.jsx)(n.td,{children:"ZDteDailyWeeklyRegularQuarterlyLongTermOtherExp"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"years"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/years",children:"enum - years"})}),(0,r.jsx)(n.td,{children:"SR volatility years to expiry"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/rate",children:"enum - rate"})}),(0,r.jsx)(n.td,{children:"SR global discount rate to expiry"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"atmVol"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/atmVol",children:"enum - atmVol"})}),(0,r.jsx)(n.td,{children:"ATM fwd uPrc SR surface volatility"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ddivPv"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ddivPv",children:"enum - ddivPv"})}),(0,r.jsx)(n.td,{children:"SR present value of ddiv stream"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tVol"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/tVol",children:"enum - tVol"})}),(0,r.jsx)(n.td,{children:"client theo surface volatility if client surfaces uploaded to SR"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sVol"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/sVol",children:"enum - sVol"})}),(0,r.jsx)(n.td,{children:"SR Surface Volatility"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sDiv"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/sDiv",children:"enum - sDiv"})}),(0,r.jsx)(n.td,{children:"SR Surface SDiv"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sPrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/sPrc",children:"enum - sPrc"})}),(0,r.jsx)(n.td,{children:"SR Surface Price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"de"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/de",children:"enum - de"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ga"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ga",children:"enum - ga"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"th"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/th",children:"enum - th"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ve"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ve",children:"enum - ve"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sVolOk"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{children:"Yes if live market and sVol are tracking as expected"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oBid"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/oBid",children:"enum - oBid"})}),(0,r.jsx)(n.td,{children:"NBBO bid price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oBidSz"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/oBidSz",children:"enum - oBidSz"})}),(0,r.jsx)(n.td,{children:"cumulative NBBO bid size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oBidMask"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/oBidMask",children:"enum - oBidMask"})}),(0,r.jsx)(n.td,{children:"bitmask of participating NBBO exchanges"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oAsk"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/oAsk",children:"enum - oAsk"})}),(0,r.jsx)(n.td,{children:"NBBO ask price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oAskSz"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/oAskSz",children:"enum - oAskSz"})}),(0,r.jsx)(n.td,{children:"cumulative NBBO ask size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oAskMask"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/oAskMask",children:"enum - oAskMask"})}),(0,r.jsx)(n.td,{children:"bitmask of participating NBBO exchanges"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionPrint` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'AuctionNotice.noticeNumber',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `noticeTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'notice create timestamp (high precision)',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None' COMMENT '(eg. Block, Flash, Improvement, Facilitation, etc.)',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `industry` TINYTEXT NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'from AuctionNotice (if known)',\n    `custQty` INT NOT NULL DEFAULT 0 COMMENT 'from AuctionNotice (if known)',\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'from AuctionNotice (if known)',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'from AuctionNotice (if known)',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `numOptLegs` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'MLEG Only',\n    `spreadClass` ENUM('None','Stk','Fut','Call','Put','Synth','RevCon','Box','JRoll','Roll','Straddle','Strangle','CSpread','PSpread','VStrip','VSpread','HStrip','HSpread','BFly','RiskRev','Mixed','VarSwap') NOT NULL DEFAULT 'None',\n    `spreadFlavor` ENUM('None','Normal','Flipped') NOT NULL DEFAULT 'None' COMMENT 'MLEG Only',\n    `containsHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'MLEG Only',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'contains FLEX options (not regular listed options)',\n    `containsMultiHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'contains MultiHedge (corp action adjusted) options',\n    `uBid` DOUBLE NOT NULL DEFAULT 0,\n    `uAsk` DOUBLE NOT NULL DEFAULT 0,\n    `netDe` FLOAT NOT NULL DEFAULT 0,\n    `netGa` FLOAT NOT NULL DEFAULT 0,\n    `netTh` FLOAT NOT NULL DEFAULT 0,\n    `netVe` FLOAT NOT NULL DEFAULT 0,\n    `pkgSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price (entire package)',\n    `pkgBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'pkg bid price (best way price) (entire package)',\n    `pkgAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'pkg ask price (best way price) (entire package)',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reported OPRA print price (pkgPrice if MLeg)',\n    `prtPrice2` DOUBLE NOT NULL DEFAULT 0 COMMENT 'if reported as 2 separate prints at different prices (ie, partial size improvement)',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'reported OPRA print size (pgkSize if MLeg)',\n    `prtSize2` INT NOT NULL DEFAULT 0 COMMENT 'reported OPRA print size (pgkSize if MLeg)',\n    `prtTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'reported OPRA print time (1st print if MLeg) (high precision)',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None' COMMENT 'reported OPRA print type',\n    `prtUBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uBid @ auction print time',\n    `prtUAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uAsk @ auction print time',\n    `prtUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uPrc @ auction print time',\n    `prtSurfVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface vol @ auction print time (single option auction only)',\n    `prtSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)',\n    `bidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time',\n    `bidSz` INT NOT NULL DEFAULT 0 COMMENT 'nbbo bid cum size',\n    `bidMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'nbbo bid exch mask',\n    `askPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time',\n    `askSz` INT NOT NULL DEFAULT 0 COMMENT 'nbbo ask cum size',\n    `askMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'nbbo ask exch mask',\n    `exchBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'exch bid @ auction print time',\n    `exchBidSz` INT NOT NULL DEFAULT 0 COMMENT 'exch bid size',\n    `exchAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'exch ask @ auction print time',\n    `exchAskSz` INT NOT NULL DEFAULT 0 COMMENT 'exch ask size',\n    `uPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'uPrc (mid market) @ auction print time + 1m',\n    `bidPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time + 1m',\n    `askPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time + 1m',\n    `surfVol1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface vol @ auction print time + 1m (single option auction only)',\n    `surfPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time + 1m (@ uMid)',\n    `uPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'uPrc (mid market) @ auction print time + 10m',\n    `bidPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time + 10m',\n    `askPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time + 10m',\n    `surfVol10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface vol @ auction print time + 10m (single option auction only)',\n    `surfPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time + 10m (@ uMid)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `OrderLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(OrderLegsList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `noticeNumber`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `isTestAuction`,\n    `noticeTime`,\n    `auctionType`,\n    `auctionSource`,\n    `industry`,\n    `symbolType`,\n    `uAvgDailyVlm`,\n    `custSide`,\n    `custQty`,\n    `custPrc`,\n    `hasCustPrc`,\n    `custFirmType`,\n    `custAgentMPID`,\n    `commEnhancement`,\n    `numOptLegs`,\n    `spreadClass`,\n    `spreadFlavor`,\n    `containsHedge`,\n    `containsFlex`,\n    `containsMultiHedge`,\n    `uBid`,\n    `uAsk`,\n    `netDe`,\n    `netGa`,\n    `netTh`,\n    `netVe`,\n    `pkgSurfPrc`,\n    `pkgBidPrc`,\n    `pkgAskPrc`,\n    `prtPrice`,\n    `prtPrice2`,\n    `prtSize`,\n    `prtSize2`,\n    `prtTime`,\n    `prtType`,\n    `prtUBid`,\n    `prtUAsk`,\n    `prtUPrc`,\n    `prtSurfVol`,\n    `prtSurfPrc`,\n    `bidPrc`,\n    `bidSz`,\n    `bidMask`,\n    `askPrc`,\n    `askSz`,\n    `askMask`,\n    `exchBidPrc`,\n    `exchBidSz`,\n    `exchAskPrc`,\n    `exchAskSz`,\n    `uPrc1m`,\n    `bidPrc1m`,\n    `askPrc1m`,\n    `surfVol1m`,\n    `surfPrc1m`,\n    `uPrc10m`,\n    `bidPrc10m`,\n    `askPrc10m`,\n    `surfVol10m`,\n    `surfPrc10m`,\n    `timestamp`,\n    `OrderLegsList`\nFROM `SRTrade`.`MsgAuctionPrint`\nWHERE \n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AuctionPrint' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const i={},d=r.createContext(i);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
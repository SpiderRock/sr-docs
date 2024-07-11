"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27206],{47026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var i=r(74848),d=r(28453);const n={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintRC/AuctionPrintRC",title:"AuctionPrintRC",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintRC/AuctionPrintRC.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintRC",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintRC/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintRC/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AuctionPrintBX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX/"},next:{title:"AuctionPrintSN",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintSN/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionPrintRC",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SRConnect"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRTrade"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Default Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeNumber"}),(0,i.jsx)(t.td,{children:"CHAR(19)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,i.jsx)(t.td,{children:"AuctionNoticenoticeNumber"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tradeDate"}),(0,i.jsx)(t.td,{children:"DATE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isTestAuction"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeTime"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{children:"notice create timestamp high precision"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"eg Block Flash Improvement Facilitation etc"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionSource"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum - AuctionSource"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"containsFlex"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"Flex  European"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"root_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"option root"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"root_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"option root"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"root_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"option root"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"DATE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"strike"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"revcon strike"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"industry"}),(0,i.jsx)(t.td,{children:"TINYTEXT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"industry string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbolType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custQty"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custPrc"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hasCustPrc"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custFirmType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"cust firm type if disclosed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custAgentMPID"}),(0,i.jsx)(t.td,{children:"VARCHAR(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"commEnhancement"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"additional commission if any paid by responder"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeUBid"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeUAsk"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netSurfPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"SR Surface Price entire package"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"iDays"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"iDays  effective interest days SR supplied"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"iYears"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"iYears  iDays  3600"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"moneyRate"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"effective rate to borrowlend money to expiry 360 day convention compares to globalRate  360  365 SR Supplied Estimate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ddivPv"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"present value of any expected dividends to expiry SR Supplied Estimate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hasEstDDivs"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"Yes if one or more expected ddiv is an estimate not yet announced SR Supplied"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sVol"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface volatility for revcon strike SR Supplied Estimate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"rcEExPrem"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"rcEExPrem  pRvprice  pRvEprice  cRvprice  cRvEprice american price  european price same model parameters SR supplied parameters including DDivs is zero for flex revcons"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"strikePv"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"strikePv  strike  10  moneyRate  iYears moneyRate supplied above"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"effStockLendPv"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"effStockLendPv  custPrice  strikePv  ddivPv  rcEExPrem  if cust price is visible"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"effStockRate"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"effStockRate  effStockLendPv  uMid  iYears if cust price is visible"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPrice"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"reported OPRA print price pkgPrice if MLeg"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPrice2"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"if reported as 2 separate prints at different prices ie partial size improvement"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSize2"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtTime"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{children:"reported OPRA print time 1st print if MLeg high precision"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum - PrtType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtUBid"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"best estimate of uBid  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtUAsk"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"best estimate of uAsk  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtUPrc"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"best estimate of uPrc  auction print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSurfPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface prc  auction print time  uMid pkgSurfPrc if MLeg"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtStockLendPv"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"prtStockLendPv  prtPrice  strikePv  ddivPv  rcEExPrem"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtStockRate"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"prtStockRate  prtStockLendPv  prtUPrc  iYears"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uPrc1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"uPrc mid market  auction print time  1m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrc1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo bid  auction print time  1m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrc1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo ask  auction print time  1m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"surfPrc1m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface prc  auction print time  1m  uMid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtStockLendPv1m"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"prtStockLendPv1m  surfPrc1m  strikePv  ddivPv  rcEExPrem"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtStockRate1m"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"prtStockRate1m  prtStockLendPv1m  uPrc1m  iYears"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uPrc10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"uPrc mid market  auction print time  10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrc10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo bid  auction print time  10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrc10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"option nbbo ask  auction print time  10m"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"surfPrc10m"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"surface prc  auction print time  10m  uMid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtStockLendPv10m"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"prtStockLendPv10m  surfPrc10m  strikePv  ddivPv  rcEExPrem"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtStockRate10m"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"prtStockRate10m  prtStockLendPv10m  uPrc10m  iYears"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeNumber"}),(0,i.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionPrintRC` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'AuctionNotice.noticeNumber',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `noticeTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'notice create timestamp (high precision)',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None' COMMENT '(eg. Block, Flash, Improvement, Facilitation, etc.)',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Flex = European',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'option root',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'option root',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'option root',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `strike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'rev/con strike',\n    `industry` TINYTEXT NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'from AuctionNotice (if known)',\n    `custQty` INT NOT NULL DEFAULT 0 COMMENT 'from AuctionNotice (if known)',\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'from AuctionNotice (if known)',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'from AuctionNotice (if known)',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `noticeUBid` DOUBLE NOT NULL DEFAULT 0,\n    `noticeUAsk` DOUBLE NOT NULL DEFAULT 0,\n    `netSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price (entire package)',\n    `iDays` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iDays = effective interest days [SR supplied]',\n    `iYears` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iYears = iDays / 360.0',\n    `moneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]',\n    `ddivPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'present value of any expected dividends to expiry [SR Supplied Estimate]',\n    `hasEstDDivs` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]',\n    `sVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surface volatility for rev/con strike [SR Supplied Estimate]',\n    `rcEExPrem` DOUBLE NOT NULL DEFAULT 0 COMMENT 'rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]',\n    `strikePv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]',\n    `effStockLendPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effStockLendPv = custPrice - strikePv - ddivPv - rcEExPrem  [if cust price is visible]',\n    `effStockRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effStockRate = effStockLendPv / (uMid * iYears) [if cust price is visible]',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reported OPRA print price (pkgPrice if MLeg)',\n    `prtPrice2` DOUBLE NOT NULL DEFAULT 0 COMMENT 'if reported as 2 separate prints at different prices (ie, partial size improvement)',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'reported OPRA print size (pgkSize if MLeg)',\n    `prtSize2` INT NOT NULL DEFAULT 0 COMMENT 'reported OPRA print size (pgkSize if MLeg)',\n    `prtTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'reported OPRA print time (1st print if MLeg) (high precision)',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None' COMMENT 'reported OPRA print type',\n    `prtUBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uBid @ auction print time',\n    `prtUAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uAsk @ auction print time',\n    `prtUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uPrc @ auction print time',\n    `prtSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)',\n    `prtStockLendPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'prtStockLendPv = prtPrice - strikePv - ddivPv - rcEExPrem',\n    `prtStockRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'prtStockRate = prtStockLendPv / (prtUPrc * iYears)',\n    `uPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'uPrc (mid market) @ auction print time + 1m',\n    `bidPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time + 1m',\n    `askPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time + 1m',\n    `surfPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time + 1m (@ uMid)',\n    `prtStockLendPv1m` DOUBLE NOT NULL DEFAULT 0 COMMENT 'prtStockLendPv1m = surfPrc1m - strikePv - ddivPv - rcEExPrem',\n    `prtStockRate1m` DOUBLE NOT NULL DEFAULT 0 COMMENT 'prtStockRate1m = prtStockLendPv1m / (uPrc1m * iYears)',\n    `uPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'uPrc (mid market) @ auction print time + 10m',\n    `bidPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time + 10m',\n    `askPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time + 10m',\n    `surfPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time + 10m (@ uMid)',\n    `prtStockLendPv10m` DOUBLE NOT NULL DEFAULT 0 COMMENT 'prtStockLendPv10m = surfPrc10m - strikePv - ddivPv - rcEExPrem',\n    `prtStockRate10m` DOUBLE NOT NULL DEFAULT 0 COMMENT 'prtStockRate10m = prtStockLendPv10m / (uPrc10m * iYears)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var i=r(96540);const d={},n=i.createContext(d);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
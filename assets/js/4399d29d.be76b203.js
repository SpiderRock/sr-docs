"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44403],{4040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=r(74848),i=r(28453);const d={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX/AuctionPrintBX",title:"AuctionPrintBX",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX/AuctionPrintBX.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AuctionPrint",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/"},next:{title:"AuctionPrintRC",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintRC/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionPrintBX",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SRConnect"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRTrade"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"noticeNumber"}),(0,n.jsx)(t.td,{children:"CHAR(19)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,n.jsx)(t.td,{children:"AuctionNoticenoticeNumber"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"underlier ticker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"underlier ticker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"underlier ticker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tradeDate"}),(0,n.jsx)(t.td,{children:"DATE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isTestAuction"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"noticeTime"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{children:"notice create timestamp high precision"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auctionType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"eg Block Flash Improvement Facilitation etc"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auctionSource"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum - AuctionSource"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"containsFlex"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"Flex  European"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"root_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"option root"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"root_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"option root"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"root_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"option root"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expiry"}),(0,n.jsx)(t.td,{children:"DATE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loStrike"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"lo strike"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hiStrike"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"hi strike"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"industry string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbolType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"custSide"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"custQty"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"custPrc"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hasCustPrc"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"custFirmType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"cust firm type if disclosed"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"custAgentMPID"}),(0,n.jsx)(t.td,{children:"VARCHAR(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"commEnhancement"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"additional commission if any paid by responder"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"noticeUBid"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"noticeUAsk"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"netSurfPrc"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"SR Surface Price entire package"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"iDays"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"iDays  effective interest days SR supplied"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"iYears"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"iYears  iDays  3600"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"moneyRate"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"effective rate to borrowlend money to expiry 360 day convention compares to globalRate  360  365 SR Supplied Estimate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"strikePv"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"strikePv  strike  10  moneyRate  iYears moneyRate supplied above"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtPrice"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"reported OPRA print price pkgPrice if MLeg"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtPrice2"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"if reported as 2 separate prints at different prices ie partial size improvement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtSize"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtSize2"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtTime"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{children:"reported OPRA print time 1st print if MLeg high precision"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum - PrtType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtUPrc"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"best estimate of uPrc  auction print time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtSurfPrc"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"surface prc  auction print time  uMid pkgSurfPrc if MLeg"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtMoneyRate"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"prtMoneyRate  10  prtPrice  hiStrike  loStrike  iYears"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uPrc1m"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"uPrc mid market  auction print time  1m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bidPrc1m"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"option nbbo bid  auction print time  1m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"askPrc1m"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"option nbbo ask  auction print time  1m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"surfPrc1m"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"surface prc  auction print time  1m  uMid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"surfRate1m"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"surfRate1m  10  surfPrc1m  hiStrike  loStrike  iYears"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uPrc10m"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"uPrc mid market  auction print time  10m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bidPrc10m"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"option nbbo bid  auction print time  10m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"askPrc10m"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"option nbbo ask  auction print time  10m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"surfPrc10m"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"surface prc  auction print time  10m  uMid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"surfRate10m"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"surfRate10m  10  surfPrc10m  hiStrike  loStrike  iYears"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"noticeNumber"}),(0,n.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionPrintBX` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'AuctionNotice.noticeNumber',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `noticeTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'notice create timestamp (high precision)',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None' COMMENT '(eg. Block, Flash, Improvement, Facilitation, etc.)',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Flex = European',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'option root',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'option root',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'option root',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `loStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'lo strike',\n    `hiStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hi strike',\n    `industry` TINYTEXT NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'from AuctionNotice (if known)',\n    `custQty` INT NOT NULL DEFAULT 0 COMMENT 'from AuctionNotice (if known)',\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'from AuctionNotice (if known)',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'from AuctionNotice (if known)',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `noticeUBid` DOUBLE NOT NULL DEFAULT 0,\n    `noticeUAsk` DOUBLE NOT NULL DEFAULT 0,\n    `netSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price (entire package)',\n    `iDays` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iDays = effective interest days [SR supplied]',\n    `iYears` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iYears = iDays / 360.0',\n    `moneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]',\n    `strikePv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reported OPRA print price (pkgPrice if MLeg)',\n    `prtPrice2` DOUBLE NOT NULL DEFAULT 0 COMMENT 'if reported as 2 separate prints at different prices (ie, partial size improvement)',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'reported OPRA print size (pgkSize if MLeg)',\n    `prtSize2` INT NOT NULL DEFAULT 0 COMMENT 'reported OPRA print size (pgkSize if MLeg)',\n    `prtTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'reported OPRA print time (1st print if MLeg) (high precision)',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None' COMMENT 'reported OPRA print type',\n    `prtUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best estimate of uPrc @ auction print time',\n    `prtSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)',\n    `prtMoneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'prtMoneyRate = (1.0 - (prtPrice / (hiStrike - loStrike)) / iYears',\n    `uPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'uPrc (mid market) @ auction print time + 1m',\n    `bidPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time + 1m',\n    `askPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time + 1m',\n    `surfPrc1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time + 1m (@ uMid)',\n    `surfRate1m` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surfRate1m = (1.0 - (surfPrc1m / (hiStrike - loStrike)) / iYears',\n    `uPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'uPrc (mid market) @ auction print time + 10m',\n    `bidPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo bid @ auction print time + 10m',\n    `askPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'option nbbo ask @ auction print time + 10m',\n    `surfPrc10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface prc @ auction print time + 10m (@ uMid)',\n    `surfRate10m` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surfRate10m = (1.0 - (surfPrc10m / (hiStrike - loStrike)) / iYears',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `noticeNumber`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `isTestAuction`,\n    `noticeTime`,\n    `auctionType`,\n    `auctionSource`,\n    `containsFlex`,\n    `root_at`,\n    `root_ts`,\n    `root_tk`,\n    `expiry`,\n    `loStrike`,\n    `hiStrike`,\n    `industry`,\n    `symbolType`,\n    `uAvgDailyVlm`,\n    `custSide`,\n    `custQty`,\n    `custPrc`,\n    `hasCustPrc`,\n    `custFirmType`,\n    `custAgentMPID`,\n    `commEnhancement`,\n    `noticeUBid`,\n    `noticeUAsk`,\n    `netSurfPrc`,\n    `iDays`,\n    `iYears`,\n    `moneyRate`,\n    `strikePv`,\n    `prtPrice`,\n    `prtPrice2`,\n    `prtSize`,\n    `prtSize2`,\n    `prtTime`,\n    `prtType`,\n    `prtUPrc`,\n    `prtSurfPrc`,\n    `prtMoneyRate`,\n    `uPrc1m`,\n    `bidPrc1m`,\n    `askPrc1m`,\n    `surfPrc1m`,\n    `surfRate1m`,\n    `uPrc10m`,\n    `bidPrc10m`,\n    `askPrc10m`,\n    `surfPrc10m`,\n    `surfRate10m`,\n    `timestamp`\nFROM `SRTrade`.`MsgAuctionPrintBX`\nWHERE \n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber';\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AuctionPrintBX' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const i={},d=n.createContext(i);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);
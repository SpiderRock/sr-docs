"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74828],{93554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=n(74848),d=n(28453);const i={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN/AuctionNoticeSN",title:"AuctionNoticeSN",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN/AuctionNoticeSN.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeRC",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeRC/"},next:{title:"AuctionPrint",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (DirectedCounterPartyList)",id:"json-block-directedcounterpartylist",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionNoticeSN",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SRConnect"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Default Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"CHAR(19)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionEvent"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionEvent",children:"enum - AuctionEvent"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"srcAuctionID"}),(0,s.jsx)(t.td,{children:"VARCHAR(20)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"auction ID as known by the auction source empty for SRC"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"srcAuctionType"}),(0,s.jsx)(t.td,{children:"VARCHAR(4)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionSource"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum - AuctionSource"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAuction"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"containsFlex"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"Flex  European"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shortCode"}),(0,s.jsx)(t.td,{children:"VARCHAR(8)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"8 letter auction short code unique per day block auctions only can be used to find auctions on SR tools"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"industry"}),(0,s.jsx)(t.td,{children:"TINYTEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"industry string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbolType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"root_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"option root CP"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"root_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"option root CP"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"root_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"option root CP"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expiry"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strike"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"strike"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"if available"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custPrc"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"public cust price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hasCustPrc"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custFirmType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"cust firm type if disclosed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custAgentMPID"}),(0,s.jsx)(t.td,{children:"VARCHAR(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custClientFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"cust client firm if disclosed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"commEnhancement"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"additional commission if any paid by responder"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custCommPaying"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"client is commission paying to the responder"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custQtyCond"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/CustQtyCond",children:"enum - CustQtyCond"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"UpToQty AllOrNone QtyOrMore"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionDuration"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"expected auction duration in milliseconds"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uBid"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"live stock price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uAsk"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"iDays"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"iDays  effective interest days SR supplied"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"iYears"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"iYears  iDays  3600"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"moneyRate"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"effective rate to borrowlend money to expiry 360 day convention compares to globalRate  360  365 SR Supplied Estimate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ddivPv"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"present value of any expected dividends to expiry SR Supplied Estimate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hasEstDDivs"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"Yes if one or more expected ddiv is an estimate not yet announced SR Supplied"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sVol"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"surface volatility for revcon strike SR Supplied Estimate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rcEExPrem"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"rcEExPrem  pRvprice  pRvEprice  cRvprice  cRvEprice american price  european price same model parameters SR supplied parameters including DDivs is zero for flex revcons"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strikePv"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"strikePv  strike  10  moneyRate  iYears moneyRate supplied above"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"srcTimestamp"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(t.td,{children:"from ats  exchange net timestamp if possible"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeSRNetwork"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum - InclExclDisclose"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DirectedCounterPartyList"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'JSON_OBJECT()'"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"json-block-directedcounterpartylist",children:"JSON Block (DirectedCounterPartyList)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"inclExcl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/inclExcl",children:"enum - inclExcl"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isCommPaying"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/isCommPaying",children:"enum - isCommPaying"})}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionNoticeSN` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None',\n    `auctionEvent` ENUM('None','Start','Update','End') NOT NULL DEFAULT 'None',\n    `srcAuctionID` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'auction ID as known by the auction source (empty for SRC)',\n    `srcAuctionType` VARCHAR(4) NOT NULL DEFAULT '',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Flex = European',\n    `shortCode` VARCHAR(8) NOT NULL DEFAULT '' COMMENT '8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)',\n    `industry` TINYTEXT NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'option root (+C/-P)',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'option root (+C/-P)',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'option root (+C/-P)',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `strike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strike',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'if available',\n    `custQty` INT NOT NULL DEFAULT 0,\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'public cust price',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `custClientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'cust client firm (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `custCommPaying` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'client is commission paying (to the responder)',\n    `custQtyCond` ENUM('None','UpToQty','AllOrNone','QtyOrMore') NOT NULL DEFAULT 'None' COMMENT 'UpToQty, AllOrNone, QtyOrMore',\n    `auctionDuration` INT NOT NULL DEFAULT 0 COMMENT '[expected] auction duration (in milliseconds)',\n    `uBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'live stock price',\n    `uAsk` DOUBLE NOT NULL DEFAULT 0,\n    `iDays` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iDays = effective interest days [SR supplied]',\n    `iYears` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iYears = iDays / 360.0',\n    `moneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]',\n    `ddivPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'present value of any expected dividends to expiry [SR Supplied Estimate]',\n    `hasEstDDivs` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]',\n    `sVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surface volatility for rev/con strike [SR Supplied Estimate]',\n    `rcEExPrem` DOUBLE NOT NULL DEFAULT 0 COMMENT 'rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]',\n    `strikePv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from ats / exchange net timestamp if possible',\n    `includeSRNetwork` ENUM('None','Include','Exclude','Disclose') NOT NULL DEFAULT 'None',\n    `DirectedCounterPartyList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(DirectedCounterPartyList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const d={},i=s.createContext(d);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
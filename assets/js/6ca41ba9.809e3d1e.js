"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["40816"],{24892:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/AuctionNoticeBX","title":"AuctionNoticeBX","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/AuctionNoticeBX.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"AuctionNotice","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/"},"next":{"title":"AuctionNoticeRC","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeRC/"}}'),i=n("52676"),r=n("91503");let d={},c=void 0,l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (DirectedCounterPartyList)",id:"json-block-directedcounterpartylist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionNoticeBX",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SRATS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRTrade"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Default Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeNumber"}),(0,i.jsx)(t.td,{children:"CHAR(19)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"underlier ticker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tradeDate"}),(0,i.jsx)(t.td,{children:"DATE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionEvent"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionEvent",children:"enum - AuctionEvent"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"srcAuctionID"}),(0,i.jsx)(t.td,{children:"VARCHAR(20)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"auction ID as known by the auction source empty for SRC"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"srcAuctionType"}),(0,i.jsx)(t.td,{children:"VARCHAR(4)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionSource"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum - AuctionSource"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isTestAuction"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"containsFlex"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"shortCode"}),(0,i.jsx)(t.td,{children:"VARCHAR(10)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"auction short code unique per day block auctions only can be used to find auctions on SR tools"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"industry"}),(0,i.jsx)(t.td,{children:"TINYTEXT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"industry string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbolType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"root_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"option root CLoPLoCHiPHi"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"root_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"option root CLoPLoCHiPHi"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"root_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"option root CLoPLoCHiPHi"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"DATE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"loStrike"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"lo strike"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hiStrike"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"hi strike"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"if available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custQty"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custPrc"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"public cust price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hasCustPrc"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custFirmType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"cust firm type if disclosed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custAgentMPID"}),(0,i.jsx)(t.td,{children:"VARCHAR(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custClientFirm"}),(0,i.jsx)(t.td,{children:"VARCHAR(16)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"cust client firm if disclosed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"commEnhancement"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"additional commission if any paid by responder"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custCommPaying"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"client is commission paying to the responder"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custQtyCond"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/CustQtyCond",children:"enum - CustQtyCond"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"UpToQty AllOrNone QtyOrMore"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auctionDuration"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"expected auction duration in milliseconds"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pkgSurfPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"SR Surface Price entire package"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pkgBidPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"leg market best way price pkg bid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pkgAskPrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"leg market worst way price pkg ask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"iDays"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"iDays  effective interest days SR supplied"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"iYears"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"iYears  iDays  3600"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pointValue"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"point value of the associated options expiry money  hiStrike  loStrike  pointValue"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pointCurrency"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"strikePv"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"strikePv  strike  10  moneyRate  iYears moneyRate supplied above"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"effMoneyRate"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"effMoneyRate  10  custPrc  hiStrike  loStrike  iYears"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"srcTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{children:"from ats  exchange net timestamp if possible"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"includeSRNetwork"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum - InclExclDisclose"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DirectedCounterPartyList"}),(0,i.jsx)(t.td,{children:"JSON"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'JSON_ARRAY()'"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noticeNumber"}),(0,i.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"json-block-directedcounterpartylist",children:"JSON Block (DirectedCounterPartyList)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientFirm"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/clientFirm",children:"enum - clientFirm"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"inclExcl"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum - InclExclDisclose"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isCommPaying"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionNoticeBX` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None',\n    `auctionEvent` ENUM('None','Start','Update','End') NOT NULL DEFAULT 'None',\n    `srcAuctionID` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'auction ID as known by the auction source (empty for SRC)',\n    `srcAuctionType` VARCHAR(4) NOT NULL DEFAULT '',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `shortCode` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)',\n    `industry` TINYTEXT NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'option root (+C.Lo/-P.Lo/-C.Hi/+P.Hi)',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'option root (+C.Lo/-P.Lo/-C.Hi/+P.Hi)',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'option root (+C.Lo/-P.Lo/-C.Hi/+P.Hi)',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `loStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'lo strike',\n    `hiStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hi strike',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'if available',\n    `custQty` INT NOT NULL DEFAULT 0,\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'public cust price',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `custClientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'cust client firm (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `custCommPaying` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'client is commission paying (to the responder)',\n    `custQtyCond` ENUM('None','UpToQty','AllOrNone','QtyOrMore') NOT NULL DEFAULT 'None' COMMENT 'UpToQty, AllOrNone, QtyOrMore',\n    `auctionDuration` INT NOT NULL DEFAULT 0 COMMENT '[expected] auction duration (in milliseconds)',\n    `pkgSurfPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price (entire package)',\n    `pkgBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'leg market best way price (pkg bid)',\n    `pkgAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'leg market worst way price (pkg ask)',\n    `iDays` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iDays = effective interest days [SR supplied]',\n    `iYears` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iYears = iDays / 360.0',\n    `pointValue` DOUBLE NOT NULL DEFAULT 0 COMMENT 'point value of the associated options; expiry money = (hiStrike - loStrike) * pointValue;',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `strikePv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]',\n    `effMoneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effMoneyRate = (1.0 - (custPrc / (hiStrike - loStrike)) / iYears',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from ats / exchange net timestamp if possible',\n    `includeSRNetwork` ENUM('None','Include','Exclude','Disclose') NOT NULL DEFAULT 'None',\n    `DirectedCounterPartyList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(DirectedCounterPartyList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `noticeNumber`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `auctionType`,\n    `auctionEvent`,\n    `srcAuctionID`,\n    `srcAuctionType`,\n    `auctionSource`,\n    `isTestAuction`,\n    `containsFlex`,\n    `shortCode`,\n    `industry`,\n    `symbolType`,\n    `uAvgDailyVlm`,\n    `root_at`,\n    `root_ts`,\n    `root_tk`,\n    `expiry`,\n    `loStrike`,\n    `hiStrike`,\n    `custSide`,\n    `custQty`,\n    `custPrc`,\n    `hasCustPrc`,\n    `custFirmType`,\n    `custAgentMPID`,\n    `custClientFirm`,\n    `commEnhancement`,\n    `custCommPaying`,\n    `custQtyCond`,\n    `auctionDuration`,\n    `pkgSurfPrc`,\n    `pkgBidPrc`,\n    `pkgAskPrc`,\n    `iDays`,\n    `iYears`,\n    `pointValue`,\n    `pointCurrency`,\n    `strikePv`,\n    `effMoneyRate`,\n    `srcTimestamp`,\n    `netTimestamp`,\n    `timestamp`,\n    `includeSRNetwork`,\n    `DirectedCounterPartyList`\nFROM `SRTrade`.`MsgAuctionNoticeBX`\nWHERE \n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber';\n"})}),"\n",(0,i.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AuctionNoticeBX' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},91503:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var s=n(75271);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
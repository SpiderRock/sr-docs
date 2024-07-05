"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35680],{14078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>L,frontMatter:()=>i,metadata:()=>r,toc:()=>E});var o=n(74848),N=n(28453);const i={title:"AuctionNoticeRC"},c=void 0,r={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeRC/AuctionNoticeRC",title:"AuctionNoticeRC",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeRC/AuctionNoticeRC.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeRC",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeRC/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeRC/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionNoticeRC"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeBX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/"},next:{title:"AuctionNoticeSN",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN/"}},s={},E=[];function T(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,N.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionNoticeRC",children:"V8 Message Definition"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionNoticeRC` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None',\n    `auctionEvent` ENUM('None','Start','Update','End') NOT NULL DEFAULT 'None',\n    `srcAuctionID` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'auction ID as known by the auction source (empty for SRC)',\n    `srcAuctionType` VARCHAR(4) NOT NULL DEFAULT '',\n    `auctionSource` ENUM('None','SRC','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','EDGO','MCRY','MPRL','EMLD','MEMX','CME','CBOT','NYMEX','COMEX','ICE','EUREX') NOT NULL DEFAULT 'None' COMMENT 'source of the auction notice (eg. SRC, MIAX, etc.)',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `containsFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Flex = European',\n    `shortCode` VARCHAR(8) NOT NULL DEFAULT '' COMMENT '8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)',\n    `industry` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'industry string',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `uAvgDailyVlm` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier average daily trading volume',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'option root  (+C/-P/-U)',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'option root  (+C/-P/-U)',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'option root  (+C/-P/-U)',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `strike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'rev/con strike',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'if available',\n    `custQty` INT NOT NULL DEFAULT 0,\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'public cust price',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `custFirmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'cust firm type (if disclosed)',\n    `custAgentMPID` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'cust agent exchange member initiating the auction (if disclosed)',\n    `custClientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'cust client firm (if disclosed)',\n    `commEnhancement` FLOAT NOT NULL DEFAULT 0 COMMENT 'additional commission (if any) paid by responder',\n    `custCommPaying` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'client is commission paying (to the responder)',\n    `custQtyCond` ENUM('None','UpToQty','AllOrNone','QtyOrMore') NOT NULL DEFAULT 'None' COMMENT 'UpToQty, AllOrNone, QtyOrMore',\n    `auctionDuration` INT NOT NULL DEFAULT 0 COMMENT '[expected] auction duration (in milliseconds)',\n    `uBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'live stock price',\n    `uAsk` DOUBLE NOT NULL DEFAULT 0,\n    `iDays` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iDays = effective interest days [SR supplied]',\n    `iYears` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iYears = iDays / 360.0',\n    `moneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]',\n    `ddivPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'present value of any expected dividends to expiry [SR Supplied Estimate]',\n    `hasEstDDivs` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]',\n    `sVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'surface volatility for rev/con strike [SR Supplied Estimate]',\n    `rcEExPrem` DOUBLE NOT NULL DEFAULT 0 COMMENT 'rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]',\n    `strikePv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]',\n    `effStockLendPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effStockLendPv = custPrice - strikePv - ddivPv - rcEExPrem  [if cust price is visible]',\n    `effStockRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effStockRate = effStockLendPv / (uMid * iYears) [if cust price is visible]',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from ats / exchange net timestamp if possible',\n    `includeSRNetwork` ENUM('None','Include','Exclude','Disclose') NOT NULL DEFAULT 'None',\n    `DirectedCounterPartyList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(DirectedCounterPartyList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function L(e={}){const{wrapper:t}={...(0,N.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(T,{...e})}):T(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var o=n(96540);const N={},i=o.createContext(N);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(N):e.components||N:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
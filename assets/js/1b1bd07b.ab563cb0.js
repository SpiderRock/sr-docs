"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3460],{86916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>r,default:()=>T,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(74848),i=n(28453);const s={title:"AuctionState"},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState/AuctionState",title:"AuctionState",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState/AuctionState.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionState"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionPrintSN",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintSN/"},next:{title:"AutoHedgeControlGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeControlGateway/"}},N={},a=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionState",children:"V8 Message Definition"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionState` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None',\n    `blockAuctionCounter` INT NOT NULL DEFAULT 0,\n    `blockAuctionStatus` ENUM('None','Active','FinalTrial','Crossing','Crossed','CrossFailed','Closed') NOT NULL DEFAULT 'None' COMMENT 'Active,FinalTrial,Crossing,Crossed,CrossFailed,Closed',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'if available',\n    `custQty` INT NOT NULL DEFAULT 0,\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'public cust price',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `uBid` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier bid price (used to resolve limits during the last auction trial)',\n    `uAsk` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier ask price (used to resolve limits during the last auction trial)',\n    `nbboBid` FLOAT NOT NULL DEFAULT 0 COMMENT 'current option nbbo bid (at time of record publish)',\n    `nbboAsk` FLOAT NOT NULL DEFAULT 0 COMMENT 'current option nbbo ask (at time of record publish)',\n    `nbboBidSz` INT NOT NULL DEFAULT 0 COMMENT 'current option nbbo cum bid size (at time of record publish)',\n    `nbboAskSz` INT NOT NULL DEFAULT 0 COMMENT 'current option nbbo cum ask size (at time of record publish)',\n    `surfacePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR surface price @ record publish (uMid)',\n    `surfaceVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR surface volatility @ record publish',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'SR system timestamp (record publish)',\n    `AskSolutionList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(AskSolutionList)),\n    `BidSolutionList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(BidSolutionList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function T(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
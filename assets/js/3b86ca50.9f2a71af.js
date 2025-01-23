"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84521],{65427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(74848),i=n(28453);const r={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState/AuctionState",title:"AuctionState",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState/AuctionState.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState/",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionState/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AuctionPrintSN",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintSN/"},next:{title:"AutoHedgeControlGateway",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeControlGateway/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (AskSolutionList)",id:"json-block-asksolutionlist",level:3},{value:"JSON Block (BidSolutionList)",id:"json-block-bidsolutionlist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/liquidity-notice/AuctionState",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SRATS"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Default Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"CHAR(19)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAuction"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blockAuctionCounter"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blockAuctionStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BlockAuctionStatus",children:"enum - BlockAuctionStatus"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"ActiveFinalTrialCrossingCrossedCrossFailedClosed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"if available"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custPrc"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"public cust price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hasCustPrc"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uBid"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"underlier bid price used to resolve limits during the last auction trial"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uAsk"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"underlier ask price used to resolve limits during the last auction trial"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboBid"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"current option nbbo bid at time of record publish"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboAsk"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"current option nbbo ask at time of record publish"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboBidSz"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"current option nbbo cum bid size at time of record publish"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboAskSz"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"current option nbbo cum ask size at time of record publish"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"surfacePrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"SR surface price  record publish uMid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"surfaceVol"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"SR surface volatility  record publish"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(t.td,{children:"SR system timestamp record publish"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AskSolutionList"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'JSON_ARRAY()'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BidSolutionList"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'JSON_ARRAY()'"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"json-block-asksolutionlist",children:"JSON Block (AskSolutionList)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"numResponders"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/numResponders",children:"enum - numResponders"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"matchPrice"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/matchPrice",children:"enum - matchPrice"})}),(0,s.jsx)(t.td,{children:"current auction cross price in exchange price increments"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"matchSize"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/matchSize",children:"enum - matchSize"})}),(0,s.jsx)(t.td,{children:"current auction size available  match price"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"json-block-bidsolutionlist",children:"JSON Block (BidSolutionList)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"numResponders"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/numResponders",children:"enum - numResponders"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"matchPrice"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/matchPrice",children:"enum - matchPrice"})}),(0,s.jsx)(t.td,{children:"current auction cross price in exchange price increments"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"matchSize"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/matchSize",children:"enum - matchSize"})}),(0,s.jsx)(t.td,{children:"current auction size available  match price"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAuctionState` (\n    `noticeNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if yes, auction is a test auction (not a prod/live auction)',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None',\n    `blockAuctionCounter` INT NOT NULL DEFAULT 0,\n    `blockAuctionStatus` ENUM('None','Active','FinalTrial','Crossing','Crossed','CrossFailed','Closed') NOT NULL DEFAULT 'None' COMMENT 'Active,FinalTrial,Crossing,Crossed,CrossFailed,Closed',\n    `custSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'if available',\n    `custQty` INT NOT NULL DEFAULT 0,\n    `custPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'public cust price',\n    `hasCustPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `uBid` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier bid price (used to resolve limits during the last auction trial)',\n    `uAsk` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier ask price (used to resolve limits during the last auction trial)',\n    `nbboBid` FLOAT NOT NULL DEFAULT 0 COMMENT 'current option nbbo bid (at time of record publish)',\n    `nbboAsk` FLOAT NOT NULL DEFAULT 0 COMMENT 'current option nbbo ask (at time of record publish)',\n    `nbboBidSz` INT NOT NULL DEFAULT 0 COMMENT 'current option nbbo cum bid size (at time of record publish)',\n    `nbboAskSz` INT NOT NULL DEFAULT 0 COMMENT 'current option nbbo cum ask size (at time of record publish)',\n    `surfacePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR surface price @ record publish (uMid)',\n    `surfaceVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR surface volatility @ record publish',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'SR system timestamp (record publish)',\n    `AskSolutionList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(AskSolutionList)),\n    `BidSolutionList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(BidSolutionList)),\n    CONSTRAINT nonnegative_noticeNumber CHECK(ASCII(noticeNumber) < 56),\n    PRIMARY KEY USING HASH (`noticeNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `noticeNumber`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `isTestAuction`,\n    `auctionType`,\n    `blockAuctionCounter`,\n    `blockAuctionStatus`,\n    `custSide`,\n    `custQty`,\n    `custPrc`,\n    `hasCustPrc`,\n    `uBid`,\n    `uAsk`,\n    `nbboBid`,\n    `nbboAsk`,\n    `nbboBidSz`,\n    `nbboAskSz`,\n    `surfacePrc`,\n    `surfaceVol`,\n    `timestamp`,\n    `AskSolutionList`,\n    `BidSolutionList`\nFROM `SRTrade`.`MsgAuctionState`\nWHERE \n    /* Replace with a CHAR(19) */\n    `noticeNumber` = 'Example_noticeNumber';\n"})}),"\n",(0,s.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AuctionState' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
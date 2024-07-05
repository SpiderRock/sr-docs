"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45540],{87076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>N,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var c=n(74848),o=n(28453);const a={title:"StockAuctionSummary"},i=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/StockAuctionSummary",title:"StockAuctionSummary",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/StockAuctionSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockAuctionSummary"},sidebar:"messageSchemasSidebar",previous:{title:"SOQStrikeRangeUpdate",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/"},next:{title:"StockBookQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/"}},r={},u=[];function L(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"../../../Topics/market-data-stock/StockAuctionSummary",children:"V8 Message Definition"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockAuctionSummary` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `auctionType` ENUM('None','Opening','Closing') NOT NULL DEFAULT 'None',\n    `auctionPrice` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume` INT NOT NULL DEFAULT 0,\n    `auctionDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice1` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume1` INT NOT NULL DEFAULT 0,\n    `auctionDate1` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice2` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume2` INT NOT NULL DEFAULT 0,\n    `auctionDate2` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice3` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume3` INT NOT NULL DEFAULT 0,\n    `auctionDate3` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice4` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume4` INT NOT NULL DEFAULT 0,\n    `auctionDate4` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice5` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume5` INT NOT NULL DEFAULT 0,\n    `auctionDate5` DATE NOT NULL DEFAULT '1900-01-01',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`auctionType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='These records represent current and recent trailing market open/close auction results';\n\n"})})]})}function N(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(L,{...e})}):L(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var c=n(96540);const o={},a=c.createContext(o);function i(e){const t=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(a.Provider,{value:t},e.children)}}}]);
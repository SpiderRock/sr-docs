"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2531],{37492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>L,frontMatter:()=>a,metadata:()=>s,toc:()=>T});var n=r(74848),c=r(28453);const a={title:"TickerAnalytics"},i=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics/TickerAnalytics",title:"TickerAnalytics",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics/TickerAnalytics.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"TickerAnalytics"},sidebar:"messageSchemasSidebar",previous:{title:"SyntheticFutureQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/"},next:{title:"TickerDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/"}},o={},T=[];function N(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/market-statistics/TickerAnalytics",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgTickerAnalytics` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `tradingdate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'trading period',\n    `securityID` INT NOT NULL DEFAULT 0 COMMENT 'security ID is used to track a ticker over time.  It is a best effort attempt to track a ticker through name changes and other corporate actions',\n    `altID` INT NOT NULL DEFAULT 0 COMMENT 'SR security ID is used to track a ticker over time.  It is a best effort attempt to track a ticker through name changes and other corporate actions',\n    `dayNumber` INT NOT NULL DEFAULT 0 COMMENT 'cardinal day number (increments by 1 each trading period)',\n    `openprice` FLOAT NOT NULL DEFAULT 0 COMMENT 'open print',\n    `highprice` FLOAT NOT NULL DEFAULT 0 COMMENT 'highest regular hours print price',\n    `lowprice` FLOAT NOT NULL DEFAULT 0 COMMENT 'lowest regular hours print price',\n    `closeprice` FLOAT NOT NULL DEFAULT 0 COMMENT 'official exchange close (as reported by primary exchange)',\n    `prClose` FLOAT NOT NULL DEFAULT 0 COMMENT 'adjusted prior period close; closePr = prior Close X returnFactor',\n    `prCloseUnadj` FLOAT NOT NULL DEFAULT 0 COMMENT 'unadjusted prior period close',\n    `week52High` DOUBLE NOT NULL DEFAULT 0 COMMENT '52 week high',\n    `week52HighDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT '52 week high date',\n    `week52Low` DOUBLE NOT NULL DEFAULT 0 COMMENT '52 week low',\n    `week52LowDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT '52 week low date',\n    `avgVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'trailing average 20D daily stock volume',\n    `ccvar` DOUBLE NOT NULL DEFAULT 0 COMMENT 'close-close log return daily variance (using the adjusted yesterday close:Ln (Close/ClosePr) ^ 2',\n    `hlvar` DOUBLE NOT NULL DEFAULT 0 COMMENT 'high-low daily variance',\n    `dayreturn` FLOAT NOT NULL DEFAULT 0 COMMENT 'daily return (adjusted for CorpAction)',\n    `returnfactor` FLOAT NOT NULL DEFAULT 0 COMMENT 'adjustment factor',\n    `cumreturnfactor` FLOAT NOT NULL DEFAULT 0 COMMENT 'cumulative adjustment factor',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`tradingdate`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function L(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const c={},a=n.createContext(c);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[52729],{95996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(74848),d=r(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/TickerAnalytics/TickerAnalytics",title:"TickerAnalytics",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/TickerAnalytics/TickerAnalytics.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/TickerAnalytics",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/TickerAnalytics/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/TickerAnalytics/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SyntheticExpiryOpenMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryOpenMark/"},next:{title:"TickerDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/TickerDefinition/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/market-statistics/TickerAnalytics",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"3225-market-statistics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRAnalytics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradingdate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"trading period"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"securityID"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"security ID is used to track a ticker over time  It is a best effort attempt to track a ticker through name changes and other corporate actions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"altID"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"SR security ID is used to track a ticker over time  It is a best effort attempt to track a ticker through name changes and other corporate actions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dayNumber"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"cardinal day number increments by 1 each trading period"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"openprice"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"open print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"highprice"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"highest regular hours print price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lowprice"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"lowest regular hours print price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"closeprice"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"official exchange close as reported by primary exchange"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prClose"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"adjusted prior period close closePr  prior Close X returnFactor"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prCloseUnadj"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"unadjusted prior period close"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"week52High"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"52 week high"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"week52HighDate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"52 week high date"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"week52Low"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"52 week low"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"week52LowDate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"52 week low date"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"avgVolume"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"trailing average 20D daily stock volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ccvar"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"closeclose log return daily variance using the adjusted yesterday closeLn CloseClosePr  2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hlvar"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"highlow daily variance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dayreturn"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"daily return adjusted for CorpAction"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"returnfactor"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"adjustment factor"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cumreturnfactor"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"cumulative adjustment factor"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"record update timestamp"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradingdate"}),(0,s.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgTickerAnalytics` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `tradingdate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'trading period',\n    `securityID` INT NOT NULL DEFAULT 0 COMMENT 'security ID is used to track a ticker over time.  It is a best effort attempt to track a ticker through name changes and other corporate actions',\n    `altID` INT NOT NULL DEFAULT 0 COMMENT 'SR security ID is used to track a ticker over time.  It is a best effort attempt to track a ticker through name changes and other corporate actions',\n    `dayNumber` INT NOT NULL DEFAULT 0 COMMENT 'cardinal day number (increments by 1 each trading period)',\n    `openprice` FLOAT NOT NULL DEFAULT 0 COMMENT 'open print',\n    `highprice` FLOAT NOT NULL DEFAULT 0 COMMENT 'highest regular hours print price',\n    `lowprice` FLOAT NOT NULL DEFAULT 0 COMMENT 'lowest regular hours print price',\n    `closeprice` FLOAT NOT NULL DEFAULT 0 COMMENT 'official exchange close (as reported by primary exchange)',\n    `prClose` FLOAT NOT NULL DEFAULT 0 COMMENT 'adjusted prior period close; closePr = prior Close X returnFactor',\n    `prCloseUnadj` FLOAT NOT NULL DEFAULT 0 COMMENT 'unadjusted prior period close',\n    `week52High` DOUBLE NOT NULL DEFAULT 0 COMMENT '52 week high',\n    `week52HighDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT '52 week high date',\n    `week52Low` DOUBLE NOT NULL DEFAULT 0 COMMENT '52 week low',\n    `week52LowDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT '52 week low date',\n    `avgVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'trailing average 20D daily stock volume',\n    `ccvar` DOUBLE NOT NULL DEFAULT 0 COMMENT 'close-close log return daily variance (using the adjusted yesterday close:Ln (Close/ClosePr) ^ 2',\n    `hlvar` DOUBLE NOT NULL DEFAULT 0 COMMENT 'high-low daily variance',\n    `dayreturn` FLOAT NOT NULL DEFAULT 0 COMMENT 'daily return (adjusted for CorpAction)',\n    `returnfactor` FLOAT NOT NULL DEFAULT 0 COMMENT 'adjustment factor',\n    `cumreturnfactor` FLOAT NOT NULL DEFAULT 0 COMMENT 'cumulative adjustment factor',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`tradingdate`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var s=r(96540);const d={},i=s.createContext(d);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
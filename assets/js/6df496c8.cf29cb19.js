"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73823],{71872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=r(74848),n=r(28453);const d={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/StockOpenMark",title:"StockOpenMark",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/StockOpenMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockEarningsCalendar",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockEarningsCalendar/"},next:{title:"StockPrintMarkup",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintMarkup/"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/market-marks/StockOpenMark",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.p,{children:"StockOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"3120-market-marks"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"EqtMarkData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRAnalytics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"srClsPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"SR open mark SR close market close  1 min from previous day overnight adjusted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"closePrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"exchange open mark exchange close mark from previous day overnight adjusted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"bid price SR closing bid close  1 min from previous day overnight adjusted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"ask price SR closing ask close  1 min from previous day overnight adjusted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"corpAction"}),(0,s.jsx)(t.td,{children:"TINYTEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockOpenMark` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `srClsPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR open mark; [SR close market (close - 1 min) from previous day; overnight adjusted]',\n    `closePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange open mark; [exchange close mark from previous day; overnight adjusted]',\n    `bidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid price [SR closing bid (close - 1 min) from previous day; overnight adjusted]',\n    `askPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask price [SR closing ask (close - 1 min) from previous day; overnight adjusted]',\n    `corpAction` TINYTEXT NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.';\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var s=r(96540);const n={},d=s.createContext(n);function c(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);
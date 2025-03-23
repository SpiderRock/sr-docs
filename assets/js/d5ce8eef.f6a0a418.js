"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22282],{50745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(74848),s=n(28453);const c={},d=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/StockOpenMark",title:"StockOpenMark",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/StockOpenMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockEarningsCalendar",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockEarningsCalendar/"},next:{title:"StockPrintMarkup",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintMarkup/"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/market-marks/StockOpenMark",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.p,{children:"StockOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"3120-market-marks"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"EqtMarkData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRAnalytics"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tradeDate"}),(0,r.jsx)(t.td,{children:"DATE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"opnMarkState"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/OpnMarkState",children:"enum - OpnMarkState"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"Preview or Final note preview is not corp action adjusted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"srClsPrc"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"SR open mark SR close market close  5 min from previous day overnight adjusted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"closePrc"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exchange open mark exchange close mark from previous day overnight adjusted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"corpAction"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockOpenMark` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `opnMarkState` ENUM('None','Preview','Final') NOT NULL DEFAULT 'None' COMMENT 'Preview or Final (note: preview is not corp action adjusted)',\n    `srClsPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR open mark; [SR close market (close - 5 min) from previous day; overnight adjusted]',\n    `closePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange open mark; [exchange close mark from previous day; overnight adjusted]',\n    `corpAction` TINYTEXT NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `opnMarkState`,\n    `srClsPrc`,\n    `closePrc`,\n    `corpAction`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgStockOpenMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='StockOpenMark' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var r=n(96540);const s={},c=r.createContext(s);function d(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
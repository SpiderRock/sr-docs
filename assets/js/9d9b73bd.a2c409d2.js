"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[80089],{45037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var s=r(74848),n=r(28453);const c={},i=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBorrowRate/StockBorrowRate",title:"StockBorrowRate",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBorrowRate/StockBorrowRate.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBorrowRate",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBorrowRate/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBorrowRate/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockBetaExt",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBetaExt/"},next:{title:"StockCloseMark",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/client-borrow/StockBorrowRate",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.p,{children:"This data is sourced from various clearing firms and typically represents their public borrow rates.  Data is typically loaded once at the start of each trading day.\nStockBorrowRate records are published to the SpiderRock elastic cluster at the end of each trading period."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"1725-client-borrow"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SRMLinkAnalytics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRAnalytics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Default Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"clientFirm if clientFirm specific rates default  SR system default rates"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gcFlag"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"General collateral flag Yes No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gcRate"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"General collateral rate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"borrowRate"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"StockBorrow rate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockBorrowRate` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'clientFirm (if clientFirm specific rates); <default> = SR system default rates',\n    `gcFlag` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'General collateral flag: Yes; No',\n    `gcRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'General collateral rate',\n    `borrowRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'StockBorrow rate',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This data is sourced from various clearing firms and typically represents their public borrow rates.  Data is typically loaded once at the start of each trading day.\\nStockBorrowRate records are published to the SpiderRock elastic cluster at the end of each trading period.';\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `clientFirm`,\n    `gcFlag`,\n    `gcRate`,\n    `borrowRate`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgStockBorrowRate`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='StockBorrowRate' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var s=r(96540);const n={},c=s.createContext(n);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);
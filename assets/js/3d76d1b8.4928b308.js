"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58730],{64442:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=r(74848),s=r(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/FutureOpenMark/FutureOpenMark",title:"FutureOpenMark",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRLive/FutureOpenMark/FutureOpenMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/FutureOpenMark",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/FutureOpenMark/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRLive/FutureOpenMark/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"FutureMarketSummary",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRLive/FutureMarketSummary/"},next:{title:"FuturePrint",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRLive/FuturePrint/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/market-marks/FutureOpenMark",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.p,{children:"FutureOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"3120-market-marks"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"FutMarkData"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRLive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_ts"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_tk"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_yr"}),(0,t.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_mn"}),(0,t.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_dy"}),(0,t.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tradeDate"}),(0,t.jsx)(n.td,{children:"DATE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"opnMarkState"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/OpnMarkState",children:"enum - OpnMarkState"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"Preview or Final"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"srClsPrc"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"SR open mark SR close mark close  5min from previous day"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"closePrc"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"exchange open mark exchange close mark from previous day"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_tk"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_yr"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_mn"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_dy"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_at"}),(0,t.jsx)(n.td,{children:"5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fkey_ts"}),(0,t.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgFutureOpenMark` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `opnMarkState` ENUM('None','Preview','Final') NOT NULL DEFAULT 'None' COMMENT 'Preview or Final',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR open mark; [SR close mark (close - 5min) from previous day]',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exchange open mark; [exchange close mark from previous day]',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='FutureOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day.';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `tradeDate`,\n    `opnMarkState`,\n    `srClsPrc`,\n    `closePrc`,\n    `timestamp`\nFROM `SRLive`.`MsgFutureOpenMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='FutureOpenMark' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(96540);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[91674],{16378:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=r(74848),t=r(28453);const d={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/SpreadOpenMark",title:"SpreadOpenMark",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/SpreadOpenMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadCloseMark/"},next:{title:"StockBeta",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBeta/"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../../../Topics/market-marks/SpreadOpenMark",children:"V8 Message Definiton"})}),"\n",(0,n.jsxs)(s.p,{children:["SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.\\nBaseObj",":Spread"]}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"3120-market-marks"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"SystemData"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accessType"}),(0,n.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Default Value"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_at"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_ts"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_tk"}),(0,n.jsx)(s.td,{children:"VARCHAR(12)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"srClsPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"SR close mark close  1min from previous day"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"closePrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"official exchange closing mark  from previous day"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"bidPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"bid price SR mark from previous day"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"askPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"ask price SR mark from previous day"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Sequence"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_tk"}),(0,n.jsx)(s.td,{children:"1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_at"}),(0,n.jsx)(s.td,{children:"2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_ts"}),(0,n.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgSpreadOpenMark` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 1min) (from previous day)',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark  (from previous day)',\n    `bidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price (SR mark from previous day)',\n    `askPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price (SR mark from previous day)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.\\nBaseObj:Spread';\n\n"})}),"\n",(0,n.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `skey_at`,\n    `skey_ts`,\n    `skey_tk`,\n    `srClsPrc`,\n    `closePrc`,\n    `bidPrc`,\n    `askPrc`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgSpreadOpenMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `skey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `skey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `skey_tk` = 'Example_skey_tk';\n"})})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>i});var n=r(96540);const t={},d=n.createContext(t);function c(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);
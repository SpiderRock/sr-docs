"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56079],{87819:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var n=s(74848),d=s(28453);const t={},a=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadOpenMark/SpreadOpenMark",title:"SpreadOpenMark",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadOpenMark/SpreadOpenMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadOpenMark",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadOpenMark/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadOpenMark/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadMarketSummary",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/"},next:{title:"SpreadPrint",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadPrint/"}},i={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/market-marks/SpreadOpenMark",children:"V8 Message Definiton"})}),"\n",(0,n.jsxs)(r.p,{children:["SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.\\nBaseObj",":Spread"]}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"3120-market-marks"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"SystemData"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Product"}),(0,n.jsx)(r.td,{children:"SRSpread"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accessType"}),(0,n.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Key"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"skey_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"skey_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"skey_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"srClsPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"SR close mark close  1min from previous day"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"closePrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"official exchange closing mark  from previous day"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bidPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"bid price SR mark from previous day"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"askPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"ask price SR mark from previous day"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DATETIME(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"skey_tk"}),(0,n.jsx)(r.td,{children:"1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"skey_at"}),(0,n.jsx)(r.td,{children:"2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"skey_ts"}),(0,n.jsx)(r.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRSpread`.`MsgSpreadOpenMark` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 1min) (from previous day)',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark  (from previous day)',\n    `bidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price (SR mark from previous day)',\n    `askPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price (SR mark from previous day)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.\\nBaseObj:Spread';\n\n"})}),"\n",(0,n.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `skey_at`,\n    `skey_ts`,\n    `skey_tk`,\n    `srClsPrc`,\n    `closePrc`,\n    `bidPrc`,\n    `askPrc`,\n    `timestamp`\nFROM `SRSpread`.`MsgSpreadOpenMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `skey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `skey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `skey_tk` = 'Example_skey_tk';\n"})}),"\n",(0,n.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRSpread.doccolumns WHERE TABLE_NAME='SpreadOpenMark' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>c});var n=s(96540);const d={},t=n.createContext(d);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);
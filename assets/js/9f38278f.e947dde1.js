"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29772],{84465:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>i,toc:()=>x});var r=s(74848),n=s(28453);const t={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrDropExecutionAck/SpdrDropExecutionAck",title:"SpdrDropExecutionAck",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrDropExecutionAck/SpdrDropExecutionAck.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrDropExecutionAck",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrDropExecutionAck/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrDropExecutionAck/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrDropExecution",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrDropExecution/"},next:{title:"SpdrExchRiskDrop",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskDrop/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"../../../Topics/away-drop/SpdrDropExecutionAck",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"1450-away-drop"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRTrade"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Default Value"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"dropNumber"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SR drop record number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"routingCode"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_at"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_ts"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_xx"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_cp"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Call'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillVersion"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"dropExecStatus"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/DropExecStatus",children:"enum - DropExecStatus"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"otherDetail"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"errorDetail"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillNumber"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SR Fill Number if Accepted"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillDttm"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(d.td,{})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsx)(d.tbody,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"dropNumber"}),(0,r.jsx)(d.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRDropExecutionAck` (\n    `dropNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SR drop record number',\n    `routingCode` TINYTEXT NOT NULL DEFAULT '',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `fillVersion` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `dropExecStatus` ENUM('None','Skipped','Accepted','Error') NOT NULL DEFAULT 'None',\n    `otherDetail` TINYTEXT NOT NULL DEFAULT '',\n    `errorDetail` TINYTEXT NOT NULL DEFAULT '',\n    `fillNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SR Fill Number (if Accepted)',\n    `fillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`dropNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,r.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `dropNumber`,\n    `routingCode`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `clientFirm`,\n    `fillVersion`,\n    `dropExecStatus`,\n    `otherDetail`,\n    `errorDetail`,\n    `fillNumber`,\n    `fillDttm`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRDropExecutionAck`\nWHERE \n    /* Replace with a BIGINT */ \n    `dropNumber` = 1234567890;\n"})}),"\n",(0,r.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrDropExecutionAck' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>c,x:()=>i});var r=s(96540);const n={},t=r.createContext(n);function c(e){const d=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(t.Provider,{value:d},e.children)}}}]);
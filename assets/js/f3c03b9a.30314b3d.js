"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["52149"],{38477:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>o,contentTitle:()=>i});var n=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNoticeStatus/SRAllocationNoticeStatus","title":"SRAllocationNoticeStatus","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNoticeStatus/SRAllocationNoticeStatus.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNoticeStatus","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNoticeStatus/","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNoticeStatus/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SRAllocationNotice","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNotice/"},"next":{"title":"SRAutoHedgeControl","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/SRAutoHedgeControl/"}}'),r=s("52676"),c=s("91503");let d={},i=void 0,l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/order-allocation/SpdrAllocationNoticeStatus",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"3695-order-allocation"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"ClientTrading"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"allocNumber"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"matches AllocationNoticepkeyallocNumber"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"status"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AllocationStatus",children:"enum - AllocationStatus"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rejectReason"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_xx"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_cp"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'Call'"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"security type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modifiedBy"}),(0,r.jsx)(t.td,{children:"VARCHAR(24)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modifiedIn"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"allocNumber"}),(0,r.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRAllocationNoticeStatus` (\n    `allocNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'matches AllocationNotice.pkey.allocNumber',\n    `status` ENUM('None','Submitted','Accepted','Rejected','SRReject','Received','NoRoute','NothingToSend','NotReady') NOT NULL DEFAULT 'None',\n    `rejectReason` TINYTEXT NOT NULL DEFAULT '',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'security key (stock, future, or option)',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'security key (stock, future, or option)',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'security type',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`allocNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `allocNumber`,\n    `status`,\n    `rejectReason`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRAllocationNoticeStatus`\nWHERE \n    /* Replace with a BIGINT */ \n    `allocNumber` = 1234567890;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRAllocationNoticeStatus' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},91503:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return d}});var n=s(75271);let r={},c=n.createContext(r);function d(e){let t=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["32554"],{70689:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrUserCancel/SpdrUserCancel","title":"SpdrUserCancel","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrUserCancel/SpdrUserCancel.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrUserCancel","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrUserCancel/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrUserCancel/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SpdrSweepExchDetail","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSweepExchDetail/"},"next":{"title":"StkAwayTktGateway","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/StkAwayTktGateway/"}}'),r=s("52676"),l=s("91503");let i={},d=void 0,a={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/parent-orders/SpdrUserCancel",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"Records inserted into this table cancels all parent orders associated with userName/clientFirm"}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"3985-parent-orders"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SystemData"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRTrade"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cxlUserName"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"Cancel all parent orders associated with cxlUserName and clientFirm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sysEnvironment"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"original source sys environment Stable Current etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"runStatus"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/RunStatus",children:"enum - RunStatus"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"original source run status ProdBeta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cxlReason"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"engineName"}),(0,r.jsx)(n.td,{children:"VARCHAR(32)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"set by the engine handling event should be blank on arrival"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedBy"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cxlUserName"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRUserCancel` (\n    `cxlUserName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'Cancel all parent orders associated with cxlUserName and clientFirm',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `cxlReason` VARCHAR(16) NOT NULL DEFAULT '',\n    `engineName` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'set by the engine handling event (should be blank on arrival)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`cxlUserName`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records inserted into this table cancels all parent orders associated with userName/clientFirm';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `cxlUserName`,\n    `clientFirm`,\n    `sysEnvironment`,\n    `runStatus`,\n    `cxlReason`,\n    `engineName`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRUserCancel`\nWHERE \n    /* Replace with a VARCHAR(24) */ \n    `cxlUserName` = 'Example_cxlUserName'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgSRUserCancel`(\n    /* Replace with a VARCHAR(24) */ \n    `cxlUserName`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') */ \n    `sysEnvironment`,\n    /* Replace with a ENUM('None','Prod','Beta','UAT','SysTest') */ \n    `runStatus`,\n    /* Replace with a VARCHAR(16) */ \n    `cxlReason`,\n    /* Replace with a VARCHAR(32) */\n    `engineName`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_cxlUserName',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_cxlReason',\n    'Example_engineName',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgSRUserCancel` \nWHERE\n    /* Replace with a VARCHAR(24) */ \n    `cxlUserName` = 'Example_cxlUserName'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrUserCancel' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},91503:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(75271);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
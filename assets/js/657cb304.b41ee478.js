"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82899],{28881:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=l(74848),i=l(28453);const r={},s=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRControl/HedgePolicyAlgoConfig/HedgePolicyAlgoConfig",title:"HedgePolicyAlgoConfig",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/HedgePolicyAlgoConfig/HedgePolicyAlgoConfig.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/HedgePolicyAlgoConfig",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/HedgePolicyAlgoConfig/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/HedgePolicyAlgoConfig/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"GlobalRiskControl",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/GlobalRiskControl/"},next:{title:"IndustryControl",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/IndustryControl/"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/client-config/HedgePolicyAlgoConfig",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"1800-client-config"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"ClientControl"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRControl"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"execBrkrAlgo"}),(0,t.jsx)(n.td,{children:"VARCHAR(32)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"display name of exec broker algo should not have spaces"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"execBrkrCode"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"execBrkrCode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"execBkkrTags"}),(0,t.jsx)(n.td,{children:"TINYTEXT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"keyvalue set of algo tags that get forwarded to exec broker on order"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eodEligible"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"this algo can be used in EOD position hedging"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"modifiedBy"}),(0,t.jsx)(n.td,{children:"VARCHAR(24)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"modifiedIn"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"execBrkrAlgo"}),(0,t.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgHedgePolicyAlgoConfig` (\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `execBrkrAlgo` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'display name of exec broker algo (should not have spaces)',\n    `execBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'execBrkrCode',\n    `execBkkrTags` TINYTEXT NOT NULL DEFAULT '' COMMENT 'key/value set of algo tags that get forwarded to exec broker on order',\n    `eodEligible` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'this algo can be used in EOD position hedging',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`clientFirm`,`execBrkrAlgo`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `clientFirm`,\n    `execBrkrAlgo`,\n    `execBrkrCode`,\n    `execBkkrTags`,\n    `eodEligible`,\n    `timestamp`\nFROM `SRControl`.`MsgHedgePolicyAlgoConfig`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(32) */ \n    `execBrkrAlgo` = 'Example_execBrkrAlgo';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgHedgePolicyAlgoConfig` \nSET\n    /* Replace with a VARCHAR(16) */ \n    `execBrkrCode` = 'Example_execBrkrCode',\n    /* Replace with a TINYTEXT */ \n    `execBkkrTags` = 'dummy tiny text',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `eodEligible` = 'None',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(32) */ \n    `execBrkrAlgo` = 'Example_execBrkrAlgo';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgHedgePolicyAlgoConfig`(\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a VARCHAR(32) */ \n    `execBrkrAlgo`,\n    /* Replace with a VARCHAR(16) */ \n    `execBrkrCode`,\n    /* Replace with a TINYTEXT */ \n    `execBkkrTags`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `eodEligible`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_clientFirm',\n    'Example_execBrkrAlgo',\n    'Example_execBrkrCode',\n    'dummy tiny text',\n    'None',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgHedgePolicyAlgoConfig` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(32) */ \n    `execBrkrAlgo` = 'Example_execBrkrAlgo';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='HedgePolicyAlgoConfig' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>d});var t=l(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
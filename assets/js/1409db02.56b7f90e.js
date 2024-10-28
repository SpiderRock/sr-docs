"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29541],{95732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=n(74848),i=n(28453);const l={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRControl/ClientAccntStrategyMap/ClientAccntStrategyMap",title:"ClientAccntStrategyMap",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccntStrategyMap/ClientAccntStrategyMap.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/ClientAccntStrategyMap",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccntStrategyMap/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccntStrategyMap/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"BookControl",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/BookControl/"},next:{title:"ClientAccountConfig",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccountConfig/"}},a={},d=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/client-config/ClientAccntStrategyMap",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"1800-client-config"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"ClientControl"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRControl"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Default Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strategy"}),(0,s.jsx)(t.td,{children:"VARCHAR(36)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskUser"}),(0,s.jsx)(t.td,{children:"VARCHAR(25)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"SR assigned client firm acronym"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntID"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strategyID"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntName"}),(0,s.jsx)(t.td,{children:"TINYTEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"userEmail"}),(0,s.jsx)(t.td,{children:"TINYTEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"userPhone"}),(0,s.jsx)(t.td,{children:"VARCHAR(24)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"legalEntity"}),(0,s.jsx)(t.td,{children:"TINYTEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"defaultStrategy"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'No'"}),(0,s.jsx)(t.td,{children:"if yes UI tools will ignore saved selection and populate strategy dropdown with this item"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedBy"}),(0,s.jsx)(t.td,{children:"VARCHAR(24)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedIn"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(t.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strategy"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskUser"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgClientAccntStrategyMap` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '',\n    `riskUser` VARCHAR(25) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm acronym',\n    `accntID` BIGINT NOT NULL DEFAULT 0,\n    `strategyID` BIGINT NOT NULL DEFAULT 0,\n    `accntName` TINYTEXT NOT NULL DEFAULT '',\n    `userEmail` TINYTEXT NOT NULL DEFAULT '',\n    `userPhone` VARCHAR(24) NOT NULL DEFAULT '',\n    `legalEntity` TINYTEXT NOT NULL DEFAULT '',\n    `defaultStrategy` ENUM('None','Yes','No') NOT NULL DEFAULT 'No' COMMENT 'if yes, UI tools will ignore saved selection and populate strategy dropdown with this item',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`strategy`,`riskUser`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `strategy`,\n    `riskUser`,\n    `clientFirm`,\n    `accntID`,\n    `strategyID`,\n    `accntName`,\n    `userEmail`,\n    `userPhone`,\n    `legalEntity`,\n    `defaultStrategy`,\n    `timestamp`\nFROM `SRControl`.`MsgClientAccntStrategyMap`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(36) */ \n    `strategy` = 'Example_strategy'\n  AND\n    /* Replace with a VARCHAR(25) */ \n    `riskUser` = 'Example_riskUser'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(t.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgClientAccntStrategyMap` \nSET\n    /* Replace with a BIGINT */ \n    `accntID` = 1234567890,\n    /* Replace with a BIGINT */ \n    `strategyID` = 1234567890,\n    /* Replace with a TINYTEXT */ \n    `accntName` = 'dummy tiny text',\n    /* Replace with a TINYTEXT */ \n    `userEmail` = 'dummy tiny text',\n    /* Replace with a VARCHAR(24) */ \n    `userPhone` = 'Example_userPhone',\n    /* Replace with a TINYTEXT */ \n    `legalEntity` = 'dummy tiny text',\n    /* Replace with a ENUM('None','Yes','No') */\n    `defaultStrategy` = 'No',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(36) */ \n    `strategy` = 'Example_strategy'\n  AND\n    /* Replace with a VARCHAR(25) */ \n    `riskUser` = 'Example_riskUser'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(t.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgClientAccntStrategyMap`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(36) */ \n    `strategy`,\n    /* Replace with a VARCHAR(25) */ \n    `riskUser`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a BIGINT */ \n    `accntID`,\n    /* Replace with a BIGINT */ \n    `strategyID`,\n    /* Replace with a TINYTEXT */ \n    `accntName`,\n    /* Replace with a TINYTEXT */ \n    `userEmail`,\n    /* Replace with a VARCHAR(24) */ \n    `userPhone`,\n    /* Replace with a TINYTEXT */ \n    `legalEntity`,\n    /* Replace with a ENUM('None','Yes','No') */\n    `defaultStrategy`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'Example_strategy',\n    'Example_riskUser',\n    'Example_clientFirm',\n    1234567890,\n    1234567890,\n    'dummy tiny text',\n    'dummy tiny text',\n    'Example_userPhone',\n    'dummy tiny text',\n    'No',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgClientAccntStrategyMap` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(36) */ \n    `strategy` = 'Example_strategy'\n  AND\n    /* Replace with a VARCHAR(25) */ \n    `riskUser` = 'Example_riskUser'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='ClientAccntStrategyMap' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);
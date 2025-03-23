"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8607],{38818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var d=t(74848),i=t(28453);const s={},r=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgeTrigger/PositionHedgeTrigger",title:"PositionHedgeTrigger",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgeTrigger/PositionHedgeTrigger.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgeTrigger",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgeTrigger/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgeTrigger/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"PositionHedgePolicyConfig",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgePolicyConfig/"},next:{title:"RiskClassControl",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/RiskClassControl/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"../../../Topics/client-config/PositionHedgeTrigger",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Topic"}),(0,d.jsx)(n.td,{children:"1800-client-config"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"MLink Token"}),(0,d.jsx)(n.td,{children:"ClientControl"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Product"}),(0,d.jsx)(n.td,{children:"SRControl"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accessType"}),(0,d.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accnt"}),(0,d.jsx)(n.td,{children:"VARCHAR(16)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"clientFirm"}),(0,d.jsx)(n.td,{children:"VARCHAR(16)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"symHedgeBandDD"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"individual symbol hedge band delta"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"symHedgeBandGR"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"individual symbol hedge band gamma ratio"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"balanceSymbols"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"target net delta symbol balance"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hedgeAlgo"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/HedgeAlgo",children:"enum - HedgeAlgo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"execBrkrCode"}),(0,d.jsx)(n.td,{children:"VARCHAR(16)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"required if ALTBROKER"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"execBrkrAlgo"}),(0,d.jsx)(n.td,{children:"VARCHAR(32)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"display name of exec broker algo should not have spaces"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"execBkkrTags"}),(0,d.jsx)(n.td,{children:"TINYTEXT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"keyvalue set of algo tags that get forwarded to exec broker on order"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modifiedBy"}),(0,d.jsx)(n.td,{children:"VARCHAR(24)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modifiedIn"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"timestamp"}),(0,d.jsx)(n.td,{children:"DATETIME(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Sequence"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accnt"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"clientFirm"}),(0,d.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgPositionHedgeTrigger` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `symHedgeBandDD` FLOAT NOT NULL DEFAULT 0 COMMENT 'individual symbol hedge band ($delta)',\n    `symHedgeBandGR` FLOAT NOT NULL DEFAULT 0 COMMENT 'individual symbol hedge band (gamma ratio)',\n    `balanceSymbols` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'target net delta symbol balance',\n    `hedgeAlgo` ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') NOT NULL DEFAULT 'None',\n    `execBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'required if ALT_BROKER',\n    `execBrkrAlgo` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'display name of exec broker algo (should not have spaces)',\n    `execBkkrTags` TINYTEXT NOT NULL DEFAULT '' COMMENT 'key/value set of algo tags that get forwarded to exec broker on order',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,d.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFirm`,\n    `symHedgeBandDD`,\n    `symHedgeBandGR`,\n    `balanceSymbols`,\n    `hedgeAlgo`,\n    `execBrkrCode`,\n    `execBrkrAlgo`,\n    `execBkkrTags`,\n    `timestamp`\nFROM `SRControl`.`MsgPositionHedgeTrigger`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgPositionHedgeTrigger` \nSET\n    /* Replace with a FLOAT */ \n    `symHedgeBandDD` = 1.23,\n    /* Replace with a FLOAT */ \n    `symHedgeBandGR` = 1.23,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `balanceSymbols` = 'None',\n    /* Replace with a ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') */ \n    `hedgeAlgo` = 'None',\n    /* Replace with a VARCHAR(16) */ \n    `execBrkrCode` = 'Example_execBrkrCode',\n    /* Replace with a VARCHAR(32) */ \n    `execBrkrAlgo` = 'Example_execBrkrAlgo',\n    /* Replace with a TINYTEXT */ \n    `execBkkrTags` = 'dummy tiny text',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgPositionHedgeTrigger`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a FLOAT */ \n    `symHedgeBandDD`,\n    /* Replace with a FLOAT */ \n    `symHedgeBandGR`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `balanceSymbols`,\n    /* Replace with a ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') */ \n    `hedgeAlgo`,\n    /* Replace with a VARCHAR(16) */ \n    `execBrkrCode`,\n    /* Replace with a VARCHAR(32) */ \n    `execBrkrAlgo`,\n    /* Replace with a TINYTEXT */ \n    `execBkkrTags`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'Example_clientFirm',\n    1.23,\n    1.23,\n    'None',\n    'None',\n    'Example_execBrkrCode',\n    'Example_execBrkrAlgo',\n    'dummy tiny text',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,d.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgPositionHedgeTrigger` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='PositionHedgeTrigger' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var d=t(96540);const i={},s=d.createContext(i);function r(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);
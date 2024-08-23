"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36017],{21242:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(74848),r=s(28453);const i={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/SpdrExchRiskReset",title:"SpdrExchRiskReset",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/SpdrExchRiskReset.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrExchRiskMgmt",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskMgmt/"},next:{title:"SpdrExecutionAllocation",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/order-routing-control/SpdrExchRiskReset",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.p,{children:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"3790-order-routing-control"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"SystemData"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRTrade"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"exch"}),(0,t.jsx)(n.td,{children:"VARCHAR(8)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"securityGroup"}),(0,t.jsx)(n.td,{children:"VARCHAR(6)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"modifiedBy"}),(0,t.jsx)(n.td,{children:"VARCHAR(24)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"modifiedIn"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"exch"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"securityGroup"}),(0,t.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRExchRiskReset` (\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `exch` VARCHAR(8) NOT NULL DEFAULT '',\n    `securityGroup` VARCHAR(6) NOT NULL DEFAULT '',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`clientFirm`,`exch`,`securityGroup`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects.';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `clientFirm`,\n    `exch`,\n    `securityGroup`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRExchRiskReset`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(8) */ \n    `exch` = 'Example_exch'\n  AND\n    /* Replace with a VARCHAR(6) */ \n    `securityGroup` = 'Example_securityGroup';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgSRExchRiskReset` \nSET\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(8) */ \n    `exch` = 'Example_exch'\n  AND\n    /* Replace with a VARCHAR(6) */ \n    `securityGroup` = 'Example_securityGroup';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgSRExchRiskReset`(\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a VARCHAR(8) */ \n    `exch`,\n    /* Replace with a VARCHAR(6) */ \n    `securityGroup`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_clientFirm',\n    'Example_exch',\n    'Example_securityGroup',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgSRExchRiskReset` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(8) */ \n    `exch` = 'Example_exch'\n  AND\n    /* Replace with a VARCHAR(6) */ \n    `securityGroup` = 'Example_securityGroup';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrExchRiskReset' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
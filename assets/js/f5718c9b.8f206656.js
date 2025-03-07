"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89586],{81329:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(74848),i=t(28453);const s={},d=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrReleaseWaitTrigger/SpdrReleaseWaitTrigger",title:"SpdrReleaseWaitTrigger",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrReleaseWaitTrigger/SpdrReleaseWaitTrigger.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrReleaseWaitTrigger",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrReleaseWaitTrigger/",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrReleaseWaitTrigger/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrParentReviewResponse",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewResponse/"},next:{title:"SpdrRiskExecution",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskExecution/"}},a={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrReleaseWaitTrigger",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(r.p,{children:"SpdrReleaseWaitTrigger records are used to trigger the release of parent orders submitted with startType=WaitTrigger.  Note that all parent orders in a risk group will be triggered together."}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"SystemData"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Product"}),(0,n.jsx)(r.td,{children:"SRTrade"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accessType"}),(0,n.jsx)(r.td,{children:"SELECT,INSERT,DELETE"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Key"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accnt"}),(0,n.jsx)(r.td,{children:"VARCHAR(16)"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"triggerGroupId"}),(0,n.jsx)(r.td,{children:"BIGINT"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"clientFirm"}),(0,n.jsx)(r.td,{children:"VARCHAR(16)"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"SR client firm"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"modifiedBy"}),(0,n.jsx)(r.td,{children:"VARCHAR(24)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"modifiedIn"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DATETIME(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(r.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accnt"}),(0,n.jsx)(r.td,{children:"1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"triggerGroupId"}),(0,n.jsx)(r.td,{children:"2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"clientFirm"}),(0,n.jsx)(r.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRReleaseWaitTrigger` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `triggerGroupId` BIGINT NOT NULL DEFAULT 0,\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`triggerGroupId`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrReleaseWaitTrigger records are used to trigger the release of parent orders submitted with startType=WaitTrigger.  Note that all parent orders in a risk group will be triggered together.';\n\n"})}),"\n",(0,n.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `triggerGroupId`,\n    `clientFirm`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRReleaseWaitTrigger`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a BIGINT */ \n    `triggerGroupId` = 1234567890\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,n.jsx)(r.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgSRReleaseWaitTrigger`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a BIGINT */ \n    `triggerGroupId`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    1234567890,\n    'Example_clientFirm',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,n.jsx)(r.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgSRReleaseWaitTrigger` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a BIGINT */ \n    `triggerGroupId` = 1234567890\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,n.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrReleaseWaitTrigger' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>l});var n=t(96540);const i={},s=n.createContext(i);function d(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
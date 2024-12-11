"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84494],{31142:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453);const d={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger/SpdrStripeTrigger",title:"SpdrStripeTrigger",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger/SpdrStripeTrigger.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrStrategyStateLeggerX",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyStateLeggerX/"},next:{title:"SpdrSweepDetail",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSweepDetail/"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrStripeTrigger",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(r.p,{children:"SpdrStripeTrigger records are used to allocate sweep risk and trigger cross stripe release of parent orders submitted with startType=WaitTrigger.  These records are published by a SR Strategy Server if/when a SpdrReleaseWaitTrigger message is received."}),"\n",(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Product"}),(0,s.jsx)(r.td,{children:"SRTrade"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accessType"}),(0,s.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Key"}),(0,s.jsx)(r.th,{children:"Default Value"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"triggerGroupId"}),(0,s.jsx)(r.td,{children:"BIGINT"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"SR client firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"netTimestamp"}),(0,s.jsx)(r.td,{children:"BIGINT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DATETIME(6)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Sequence"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"1"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"triggerGroupId"}),(0,s.jsx)(r.td,{children:"2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRStripeTrigger` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `triggerGroupId` BIGINT NOT NULL DEFAULT 0,\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`accnt`,`triggerGroupId`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrStripeTrigger records are used to allocate sweep risk and trigger cross stripe release of parent orders submitted with startType=WaitTrigger.  These records are published by a SR Strategy Server if/when a SpdrReleaseWaitTrigger message is received.';\n\n"})}),"\n",(0,s.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `triggerGroupId`,\n    `clientFirm`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRStripeTrigger`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a BIGINT */ \n    `triggerGroupId` = 1234567890\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrStripeTrigger' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>c});var s=t(96540);const i={},d=s.createContext(i);function n(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);
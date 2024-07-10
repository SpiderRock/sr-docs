"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36017],{21242:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var r=t(74848),d=t(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/SpdrExchRiskReset",title:"SpdrExchRiskReset",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/SpdrExchRiskReset.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrExchRiskMgmt",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskMgmt/"},next:{title:"SpdrExecutionAllocation",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"../../../Topics/order-routing-control/SpdrExchRiskReset",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(s.p,{children:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"3790-order-routing-control"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product"}),(0,r.jsx)(s.td,{children:"SRTrade"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessType"}),(0,r.jsx)(s.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clientFirm"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exch"}),(0,r.jsx)(s.td,{children:"VARCHAR(8)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityGroup"}),(0,r.jsx)(s.td,{children:"VARCHAR(6)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modifiedBy"}),(0,r.jsx)(s.td,{children:"VARCHAR(24)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modifiedIn"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clientFirm"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exch"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityGroup"}),(0,r.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRExchRiskReset` (\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `exch` VARCHAR(8) NOT NULL DEFAULT '',\n    `securityGroup` VARCHAR(6) NOT NULL DEFAULT '',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`clientFirm`,`exch`,`securityGroup`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects.';\n\n"})})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var r=t(96540);const d={},n=r.createContext(d);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);
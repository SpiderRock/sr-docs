"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[525],{91736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var n=r(74848),s=r(28453);const i={},c=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/NMSCircuitBreaker",title:"NMSCircuitBreaker",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/NMSCircuitBreaker.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"IndexQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/IndexQuote/"},next:{title:"OpraPrintType",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/product-status/NMSCircuitBreaker",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(t.p,{children:"This table contains circuit breaker information for market centers with circuit breakers.  Note that circuit breaker records may not always exist for a market center."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"4440-product-status"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SystemData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRLive"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"marketCenter"}),(0,n.jsx)(t.td,{children:"VARCHAR(6)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"level1"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"level 1 threshold"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"level2"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"level 2 threshold"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"level3"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"level 3 threshold"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currentLevel"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"current market circuit breaker level 0  3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"marketCenter"}),(0,n.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgNMSCircuitBreaker` (\n    `marketCenter` VARCHAR(6) NOT NULL DEFAULT '',\n    `level1` FLOAT NOT NULL DEFAULT 0 COMMENT 'level 1 threshold',\n    `level2` FLOAT NOT NULL DEFAULT 0 COMMENT 'level 2 threshold',\n    `level3` FLOAT NOT NULL DEFAULT 0 COMMENT 'level 3 threshold',\n    `currentLevel` INT NOT NULL DEFAULT 0 COMMENT 'current market circuit breaker level (0 - 3)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`marketCenter`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains circuit breaker information for market centers with circuit breakers.  Note that circuit breaker records may not always exist for a market center.';\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `marketCenter`,\n    `level1`,\n    `level2`,\n    `level3`,\n    `currentLevel`,\n    `timestamp`\nFROM `SRLive`.`MsgNMSCircuitBreaker`\nWHERE \n    /* Replace with a VARCHAR(6) */ \n    `marketCenter` = 'Example_marketCenter';\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
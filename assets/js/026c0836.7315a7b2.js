"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46415],{72875:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(74848),i=r(28453);const s={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/OpraPrintType",title:"OpraPrintType",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/OpraPrintType.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"NMSCircuitBreaker",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/"},next:{title:"OptExpiryDefinition",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRLive/OptExpiryDefinition/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/market-data-options/OpraPrintType",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"2750-market-data-options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"ClientLive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRLive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"opraPrintType"}),(0,t.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"printTypeChar"}),(0,t.jsx)(n.td,{children:"VARCHAR(1)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"character value of printType"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"printCode"}),(0,t.jsx)(n.td,{children:"VARCHAR(4)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"eg AUTO CANC"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"printCodeString"}),(0,t.jsx)(n.td,{children:"TINYTEXT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"longer string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"printCodeDescription"}),(0,t.jsx)(n.td,{children:"TINYTEXT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"full description"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"opraPrintType"}),(0,t.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOpraPrintType` (\n    `opraPrintType` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `printTypeChar` VARCHAR(1) NOT NULL DEFAULT '' COMMENT 'character value of printType',\n    `printCode` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'eg, AUTO, CANC',\n    `printCodeString` TINYTEXT NOT NULL DEFAULT '' COMMENT 'longer string',\n    `printCodeDescription` TINYTEXT NOT NULL DEFAULT '' COMMENT 'full description',\n    PRIMARY KEY USING HASH (`opraPrintType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `opraPrintType`,\n    `printTypeChar`,\n    `printCode`,\n    `printCodeString`,\n    `printCodeDescription`\nFROM `SRLive`.`MsgOpraPrintType`\nWHERE \n    /* Replace with a TINYINT UNSIGNED */ \n    `opraPrintType` = 1;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='OpraPrintType' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var t=r(96540);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
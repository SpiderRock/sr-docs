"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["79293"],{90910:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>d});var l=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRControl/CustomControl/CustomControl","title":"CustomControl","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/CustomControl/CustomControl.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRControl/CustomControl","slug":"/MessageSchemas/Schema/SRSE Products/SRControl/CustomControl/","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/CustomControl/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"ClientStockLocate","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/ClientStockLocate/"},"next":{"title":"ExpirationControl","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/"}}'),s=t("52676"),r=t("91503");let i={},d=void 0,c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/client-book-risk/CustomControl",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"1630-client-book-risk"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"ClientControl"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRControl"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"key"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"user defined key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"userText"}),(0,s.jsx)(n.td,{children:"TINYTEXT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"user defined text"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"key"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgCustomControl` (\n    `key` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'user defined key',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `userText` TINYTEXT NOT NULL DEFAULT '' COMMENT 'user defined text',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`key`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `key`,\n    `clientFirm`,\n    `userText`,\n    `timestamp`\nFROM `SRControl`.`MsgCustomControl`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `key` = 'Example_key'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgCustomControl` \nSET\n    /* Replace with a TINYTEXT */ \n    `userText` = 'dummy tiny text',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `key` = 'Example_key'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgCustomControl`(\n    /* Replace with a VARCHAR(16) */ \n    `key`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a TINYTEXT */ \n    `userText`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_key',\n    'Example_clientFirm',\n    'dummy tiny text',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgCustomControl` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `key` = 'Example_key'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='CustomControl' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},91503:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var l=t(75271);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
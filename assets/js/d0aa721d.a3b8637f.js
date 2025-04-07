"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["70481"],{52565:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRLive/CurrencyConversion/CurrencyConversion","title":"CurrencyConversion","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/CurrencyConversion/CurrencyConversion.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRLive/CurrencyConversion","slug":"/MessageSchemas/Schema/SRSE Products/SRLive/CurrencyConversion/","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/CurrencyConversion/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"CCodeDefinition","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/CCodeDefinition/"},"next":{"title":"FutureBookQuote","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/FutureBookQuote/"}}'),t=r("52676"),c=r("91503");let i={},d=void 0,l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/market-data-currency/CurrencyConversion",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"2540-market-data-currency"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"FxMktData"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRLive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"srcCurrency"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tgtCurrency"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"convertRate"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"srcCurrency"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tgtCurrency"}),(0,t.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgCurrencyConversion` (\n    `srcCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `tgtCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `convertRate` DOUBLE NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`srcCurrency`,`tgtCurrency`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `srcCurrency`,\n    `tgtCurrency`,\n    `convertRate`,\n    `timestamp`\nFROM `SRLive`.`MsgCurrencyConversion`\nWHERE \n    /* Replace with a ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') */ \n    `srcCurrency` = 'None'\n  AND\n    /* Replace with a ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') */ \n    `tgtCurrency` = 'None';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='CurrencyConversion' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},91503:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(75271);let t={},c=s.createContext(t);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[10533],{59591:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=r(74848),t=r(28453);const i={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/CurrencyPositionRecordV5",title:"CurrencyPositionRecordV5",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/CurrencyPositionRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ClientBeta",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/"},next:{title:"CurrencyTransaction",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyTransaction/"}},o={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/risk-v5/CurrencyPositionRecordV5",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.p,{children:"CurrencyPositionRecords are live risk records that contain start-of-day positions and all subsequent transactions.\\nThese records are published by a CoreRiskServer and represent the position and risk markup detail for a single currency.\\nNew records are published immediately when a position changes and about once per minute if no position has changed."}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"4740-risk-v5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"SystemData"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRRisk"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"currency"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tradeDate"}),(0,s.jsx)(n.td,{children:"DATE"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'1900-01-01'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"SR assigned client firm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mnyOpnPosPrv"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"startofday SR currency position rotated from prior day record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mnyOpnPosClr"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"startofday CLR currency position supplied by clientclearing firm via clearing position load"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mnyOpnPos"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"start of period currency position effective can be from either CLR or SR"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mnyOpnPosSrc"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PositionSource",children:"enum - PositionSource"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"start of period position source"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mnyBot"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"currency units bot today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mnySld"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"currency units sld today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numExecutions"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number of currency transactions included in mnyBot and mnySld today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxExecDttm"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{children:"max timestamp of included currency transaction records"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"currency"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tradeDate"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgCurrencyPositionRecordV5` (\n    `currency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `mnyOpnPosPrv` INT NOT NULL DEFAULT 0 COMMENT 'start-of-day SR currency position (rotated from prior day record)',\n    `mnyOpnPosClr` INT NOT NULL DEFAULT 0 COMMENT 'start-of-day CLR currency position (supplied by client/clearing firm via clearing position load)',\n    `mnyOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'start of period currency position (effective; can be from either CLR or SR)',\n    `mnyOpnPosSrc` ENUM('None','Zero','SR','CLR') NOT NULL DEFAULT 'None' COMMENT 'start of period position source',\n    `mnyBot` INT NOT NULL DEFAULT 0 COMMENT 'currency units bot today',\n    `mnySld` INT NOT NULL DEFAULT 0 COMMENT 'currency units sld today',\n    `numExecutions` INT NOT NULL DEFAULT 0 COMMENT 'number of currency transactions included in mnyBot and mnySld today',\n    `maxExecDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'max (timestamp) of included currency transaction records',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`currency`,`accnt`,`tradeDate`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='CurrencyPositionRecords are live risk records that contain start-of-day positions and all subsequent transactions.\\nThese records are published by a CoreRiskServer and represent the position and risk markup detail for a single currency.\\nNew records are published immediately when a position changes and about once per minute if no position has changed.';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `currency`,\n    `accnt`,\n    `tradeDate`,\n    `clientFirm`,\n    `mnyOpnPosPrv`,\n    `mnyOpnPosClr`,\n    `mnyOpnPos`,\n    `mnyOpnPosSrc`,\n    `mnyBot`,\n    `mnySld`,\n    `numExecutions`,\n    `maxExecDttm`,\n    `timestamp`\nFROM `SRRisk`.`MsgCurrencyPositionRecordV5`\nWHERE \n    /* Replace with a ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') */ \n    `currency` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='CurrencyPositionRecordV5' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(96540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
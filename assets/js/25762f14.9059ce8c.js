"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[66056],{89429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>S,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var s=t(74848),r=t(28453);const c={title:"CurrencyTransaction"},a=void 0,o={id:"MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyTransaction/CurrencyTransaction",title:"CurrencyTransaction",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyTransaction/CurrencyTransaction.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyTransaction",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyTransaction/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyTransaction/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"CurrencyTransaction"},sidebar:"messageSchemasSidebar",previous:{title:"CurrencyPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/"},next:{title:"EquityCorpActionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/EquityCorpActionRecordV5/"}},i={},u=[];function R(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/risk-v5/CurrencyTransaction",children:"V8 Message Definition"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgCurrencyTransaction` (\n    `transactionID` BIGINT NOT NULL DEFAULT 0,\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `botCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `botQuantity` DOUBLE NOT NULL DEFAULT 0,\n    `sldCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `sldQuantity` DOUBLE NOT NULL DEFAULT 0,\n    `comment` VARCHAR(255) NOT NULL DEFAULT '',\n    `transactionDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`transactionID`,`tradeDate`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function S(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(R,{...e})}):R(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const r={},c=s.createContext(r);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
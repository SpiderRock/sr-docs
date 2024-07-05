"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75777],{44256:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>S,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var i=s(74848),n=s(28453);const a={title:"GlobalDividends"},o=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalDividends/GlobalDividends",title:"GlobalDividends",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalDividends/GlobalDividends.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalDividends",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalDividends/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalDividends/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"GlobalDividends"},sidebar:"messageSchemasSidebar",previous:{title:"FutureQuoteProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureQuoteProbability/"},next:{title:"GlobalRates",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalRates/"}},d={},r=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/option-pricing/GlobalDividends",children:"V8 Message Definition"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgGlobalDividends` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'publish time (GlobalDividend.timestamp = SRPricingCalcRecord.timestamp @ publish)',\n    `lastModified` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last dividend data modify timestamp',\n    `text` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'extra text (if any)',\n    `DateAmtList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(DateAmtList)),\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='GlobalDividend records contain projected future discrete dividend payment dates and amounts for dividend paying equities.  These records are the dividend values that are incorporated into option pricing calculations.\\nNote: Missing/empty DateAmt strings are interpreted as non-dividend paying';\n\n"})})]})}function S(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var i=s(96540);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
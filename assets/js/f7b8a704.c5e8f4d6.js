"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[77936],{52897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=n(74848),d=n(28453);const r={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRRisk/EquityCorpActionRecordV5/EquityCorpActionRecordV5",title:"EquityCorpActionRecordV5",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/EquityCorpActionRecordV5/EquityCorpActionRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/EquityCorpActionRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/EquityCorpActionRecordV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/EquityCorpActionRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"CurrencyTransaction",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyTransaction/"},next:{title:"ExpirationRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (CashList)",id:"json-block-cashlist",level:3},{value:"JSON Block (ComponentList)",id:"json-block-componentlist",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/risk-v5/EquityCorpActionRecordV5",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.p,{children:"corp action record (managed by SR)"}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"4740-risk-v5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRRisk"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Default Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"ticker at EOD on trading date"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"ticker at EOD on trading date"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"ticker at EOD on trading date"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exDate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'1900-01-01'"}),(0,s.jsx)(t.td,{children:"exdate of the action"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"corpActionText"}),(0,s.jsx)(t.td,{children:"TINYTEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"descriptive detail optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CashList"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'JSON_OBJECT()'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ComponentList"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'JSON_OBJECT()'"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exDate"}),(0,s.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"json-block-cashlist",children:"JSON Block (CashList)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"amount"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"currency"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/currency",children:"enum - currency"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cashType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/cashType",children:"enum - cashType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"description"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"json-block-componentlist",children:"JSON Block (ComponentList)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tickerSOD"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"ticker  SOD"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"componentRatio"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"priceposition adjustment ratio ratio x closemark  adjclosemark default  1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"componentFraction"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"position x componentFraction x spinoffMark  cashInLieu default  1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"componentMark"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"SOD mark for tickerSOD if not supplied SR calculated mark will be used"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"componentType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/componentType",children:"enum - componentType"})}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgEquityCorpActionRecordV5` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'ticker at EOD on trading date',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'ticker at EOD on trading date',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'ticker at EOD on trading date',\n    `exDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'ex-date of the action',\n    `corpActionText` TINYTEXT NOT NULL DEFAULT '' COMMENT 'descriptive detail (optional)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `CashList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(CashList)),\n    `ComponentList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(ComponentList)),\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`exDate`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='corp action record (managed by SR)';\n\n"})})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const d={},r=s.createContext(d);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
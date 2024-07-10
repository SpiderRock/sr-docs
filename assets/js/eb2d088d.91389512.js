"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32108],{60917:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var r=s(74848),t=s(28453);const n={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/SodClearingRecordV5",title:"SodClearingRecordV5",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/SodClearingRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SodCashRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SodCashRecordV5/"},next:{title:"StockPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/StockPositionRecordV5/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"../../../Topics/risk-v5/SodClearingRecordV5",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(d.p,{children:"SodClearingRecords contain start-of-day option position and mark details.  They can be source directly from a prime broker by SpiderRock or inserted by clients.\\nThey can also be modified after the start of trading. These records are the source of the CLR side positions in SR risk records."}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"4740-risk-v5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRRisk"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accnt"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_at"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_ts"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_xx"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_cp"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"tradeDate"}),(0,r.jsx)(d.td,{children:"DATE"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"effective tradeDate of this clearing record"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"SR assigned client firm"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"daySide"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/DaySide",children:"enum - DaySide"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"startofday or prev weekdays endofday ie corpaction adjusted or not"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clrPosition"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"clearing position  daySide"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clrMark"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"clearing mark  daySide"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"comment"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"upload timestamp will be identical per accnt"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accnt"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_tk"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_yr"}),(0,r.jsx)(d.td,{children:"3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_mn"}),(0,r.jsx)(d.td,{children:"4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_dy"}),(0,r.jsx)(d.td,{children:"5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_xx"}),(0,r.jsx)(d.td,{children:"6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_cp"}),(0,r.jsx)(d.td,{children:"7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_at"}),(0,r.jsx)(d.td,{children:"8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_ts"}),(0,r.jsx)(d.td,{children:"9"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType"}),(0,r.jsx)(d.td,{children:"10"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"tradeDate"}),(0,r.jsx)(d.td,{children:"11"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"12"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgSodClearingRecordV5` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'effective tradeDate of this clearing record',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `daySide` ENUM('StartOfDay','EndOfDay') NOT NULL DEFAULT 'StartOfDay' COMMENT 'start-of-day or prev weekday''s end-of-day; i.e. corpaction adjusted or not',\n    `clrPosition` INT NOT NULL DEFAULT 0 COMMENT 'clearing position @ daySide',\n    `clrMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'clearing mark @ daySide',\n    `comment` TINYTEXT NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'upload timestamp; will be identical per accnt',\n    PRIMARY KEY USING HASH (`accnt`,`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`tradeDate`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SodClearingRecords contain start-of-day option position and mark details.  They can be source directly from a prime broker by SpiderRock or inserted by clients.\\nThey can also be modified after the start of trading. These records are the source of the CLR side positions in SR risk records.';\n\n"})})]})}function o(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>c,x:()=>i});var r=s(96540);const t={},n=r.createContext(t);function c(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);
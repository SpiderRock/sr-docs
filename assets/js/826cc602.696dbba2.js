"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13717],{29090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={},d=void 0,o={id:"MessageSchemas/Schema/SRSE Products/SRRisk/OptionCorpActionRecordV5/OptionCorpActionRecordV5",title:"OptionCorpActionRecordV5",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/OptionCorpActionRecordV5/OptionCorpActionRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/OptionCorpActionRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/OptionCorpActionRecordV5/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRRisk/OptionCorpActionRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"IndustryRiskRecordV5",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/"},next:{title:"OptionExAsRecordV5",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRRisk/OptionExAsRecordV5/"}},c={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/risk-v5/OptionCorpActionRecordV5",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"4740-risk-v5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"ClientRisk"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRRisk"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"root_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"root at EOD on trading date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"root_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"root at EOD on trading date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"root_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"root at EOD on trading date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exDate"}),(0,r.jsx)(t.td,{children:"DATE"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'1900-01-01'"}),(0,r.jsx)(t.td,{children:"exdate of the action"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sodRoot_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"new mh root post adjustment"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sodRoot_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"new mh root post adjustment"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sodRoot_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"new mh root post adjustment"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"markMultiplier"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"sodMark  eodMark x markMultiplier"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"positionMultiplier"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"sodPosition  eodPosition x positionMultiplier"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strikeFactor"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"sodStrike  eodStrike x strikeMultiplier  strikeFactor"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strikeMultiplier"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"sodStrike  eodStrike x strikeMultiplier  strikeFactor"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strikePrecision"}),(0,r.jsx)(t.td,{children:"SMALLINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"number of decimal places to round after adjusting strike usually 2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"corpActionText"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"descriptive detail optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"corpActionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CAType",children:"enum - CAType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'Other'"}),(0,r.jsx)(t.td,{children:"corporate action type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"root_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"root_at"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"root_ts"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exDate"}),(0,r.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgOptionCorpActionRecordV5` (\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'root at EOD on trading date',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'root at EOD on trading date',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'root at EOD on trading date',\n    `exDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'ex-date of the action',\n    `sodRoot_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT '(new) mh root post adjustment',\n    `sodRoot_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT '(new) mh root post adjustment',\n    `sodRoot_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT '(new) mh root post adjustment',\n    `markMultiplier` DOUBLE NOT NULL DEFAULT 0 COMMENT 'sodMark = eodMark x markMultiplier',\n    `positionMultiplier` INT NOT NULL DEFAULT 0 COMMENT 'sodPosition = eodPosition x positionMultiplier',\n    `strikeFactor` DOUBLE NOT NULL DEFAULT 0 COMMENT 'sodStrike = eodStrike x strikeMultiplier - strikeFactor',\n    `strikeMultiplier` DOUBLE NOT NULL DEFAULT 0 COMMENT 'sodStrike = eodStrike x strikeMultiplier - strikeFactor',\n    `strikePrecision` SMALLINT NOT NULL DEFAULT 0 COMMENT 'number of decimal places to round after adjusting strike (usually 2)',\n    `corpActionText` TINYTEXT NOT NULL DEFAULT '' COMMENT 'descriptive detail (optional)',\n    `corpActionType` ENUM('Other','CashDividend','SpecialDividend','StockDividend','StockSplitNonInt','ReverseStockSplit','StockSplit','Merger','RightsOffering','Spinoff','SymbolConversion','Consolidation','NameChange','Liquidation') NOT NULL DEFAULT 'Other' COMMENT 'corporate action type',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`root_tk`,`root_at`,`root_ts`,`exDate`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `root_at`,\n    `root_ts`,\n    `root_tk`,\n    `exDate`,\n    `sodRoot_at`,\n    `sodRoot_ts`,\n    `sodRoot_tk`,\n    `markMultiplier`,\n    `positionMultiplier`,\n    `strikeFactor`,\n    `strikeMultiplier`,\n    `strikePrecision`,\n    `corpActionText`,\n    `corpActionType`,\n    `timestamp`\nFROM `SRRisk`.`MsgOptionCorpActionRecordV5`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a DATE */\n    `exDate` = '2022-01-01';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='OptionCorpActionRecordV5' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5815],{16415:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=n(74848),r=n(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryCloseMark/SyntheticExpiryCloseMark",title:"SyntheticExpiryCloseMark",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryCloseMark/SyntheticExpiryCloseMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryCloseMark",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryCloseMark/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryCloseMark/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockRegSHOStatus",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/StockRegSHOStatus/"},next:{title:"SyntheticExpiryOpenMark",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryOpenMark/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"../../../Topics/market-marks/SyntheticExpiryCloseMark",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"3120-market-marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SRMLinkAnalytics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Product"}),(0,t.jsx)(s.td,{children:"SRLive"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accessType"}),(0,t.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Key"}),(0,t.jsx)(s.th,{children:"Default Value"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_at"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_ts"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_tk"}),(0,t.jsx)(s.td,{children:"VARCHAR(12)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"''"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_yr"}),(0,t.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_mn"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_dy"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tradeDate"}),(0,t.jsx)(s.td,{children:"DATE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'1900-01-01'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clsMarkState"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ClsMarkState",children:"enum - ClsMarkState"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{children:"Close mark state None LastPrt SRClose ExchClose Final"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opnPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"Opening price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bidPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"bid price close  1min"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"askPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"ask price close  1min"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srClsPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"sr close mark close  1min"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"closePrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"official exchange closing mark"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hasSRClsPrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hasClosePrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srCloseMarkDttm"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(s.td,{children:"from MarketCloseQuotesrCloseMarkDttm"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Sequence"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_tk"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_yr"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_mn"}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_dy"}),(0,t.jsx)(s.td,{children:"4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_at"}),(0,t.jsx)(s.td,{children:"5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_ts"}),(0,t.jsx)(s.td,{children:"6"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgSyntheticExpiryCloseMark` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clsMarkState` ENUM('None','Preview','Final') NOT NULL DEFAULT 'None' COMMENT 'Close mark state: None; LastPrt; SRClose; ExchClose; Final',\n    `opnPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Opening price',\n    `bidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price (close - 1min)',\n    `askPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price (close - 1min)',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'sr close mark (close - 1min)',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark',\n    `hasSRClsPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `hasClosePrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `srCloseMarkDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from MarketCloseQuote.srCloseMarkDttm',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,t.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `tradeDate`,\n    `clsMarkState`,\n    `opnPrc`,\n    `bidPrc`,\n    `askPrc`,\n    `srClsPrc`,\n    `closePrc`,\n    `hasSRClsPrc`,\n    `hasClosePrc`,\n    `srCloseMarkDttm`,\n    `timestamp`\nFROM `SRLive`.`MsgSyntheticExpiryCloseMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='SyntheticExpiryCloseMark' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(96540);const r={},d=t.createContext(r);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);
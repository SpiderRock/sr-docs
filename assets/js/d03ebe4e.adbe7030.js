"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["39538"],{19001:function(e,s,r){r.r(s),r.d(s,{default:()=>o,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/SpreadCloseMark","title":"SpreadCloseMark","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/SpreadCloseMark.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark","slug":"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SpreadBookQuote","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/"},"next":{"title":"SpreadMarketSummary","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/"}}'),n=r("52676"),d=r("91503");let c={},l=void 0,i={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../../../Topics/market-marks/SpreadCloseMark",children:"V8 Message Definiton"})}),"\n",(0,n.jsxs)(s.p,{children:["SpreadCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all exchange spreads\nSpreadCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final\nBaseObj",":Spread"]}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"3120-market-marks"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"SpreadMktData"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"SRSpread"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accessType"}),(0,n.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Default Value"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_at"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_ts"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_tk"}),(0,n.jsx)(s.td,{children:"VARCHAR(12)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clsMarkState"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/ClsMarkState",children:"enum - ClsMarkState"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"Close mark state None LastPrt SRClose ExchClose Final"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opnPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Open price"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Low price"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"High price"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"prtCount"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Print count"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"prtVolume"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Print volume"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"avgMktSize"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Average market size"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"avgMktWidth"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Average market width"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"bidPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"bid price close  1min"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"askPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"ask price close  1min"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"srClsPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"SR close mark close  1min"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"closePrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"official exchange closing mark last printthen official close"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Sequence"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_tk"}),(0,n.jsx)(s.td,{children:"1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_at"}),(0,n.jsx)(s.td,{children:"2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skey_ts"}),(0,n.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRSpread`.`MsgSpreadCloseMark` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `clsMarkState` ENUM('None','Preview','Final') NOT NULL DEFAULT 'None' COMMENT 'Close mark state. None; LastPrt; SRClose; ExchClose; Final',\n    `opnPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Open price',\n    `minPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Low price',\n    `maxPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'High price',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'Print count',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'Print volume',\n    `avgMktSize` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Average market size',\n    `avgMktWidth` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Average market width',\n    `bidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price (close - 1min)',\n    `askPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price (close - 1min)',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 1min)',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark (last print;then official close)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpreadCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all exchange spreads\\nSpreadCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final\\nBaseObj:Spread';\n\n"})}),"\n",(0,n.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `skey_at`,\n    `skey_ts`,\n    `skey_tk`,\n    `clsMarkState`,\n    `opnPrc`,\n    `minPrc`,\n    `maxPrc`,\n    `prtCount`,\n    `prtVolume`,\n    `avgMktSize`,\n    `avgMktWidth`,\n    `bidPrc`,\n    `askPrc`,\n    `srClsPrc`,\n    `closePrc`,\n    `timestamp`\nFROM `SRSpread`.`MsgSpreadCloseMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `skey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `skey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `skey_tk` = 'Example_skey_tk';\n"})}),"\n",(0,n.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRSpread.doccolumns WHERE TABLE_NAME='SpreadCloseMark' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},91503:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return c}});var t=r(75271);let n={},d=t.createContext(n);function c(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);
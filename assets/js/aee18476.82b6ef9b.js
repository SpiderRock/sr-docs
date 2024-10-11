"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25176],{15971:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var n=s(74848),t=s(28453);const d={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureCloseMark/FutureCloseMark",title:"FutureCloseMark",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureCloseMark/FutureCloseMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureCloseMark",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureCloseMark/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureCloseMark/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"CCodeDefinition",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/CCodeDefinition/"},next:{title:"FutureOpenMark",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureOpenMark/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/market-marks/FutureCloseMark",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(r.p,{children:"FutureCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.\\nFutureCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"3120-market-marks"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"FutMarkData"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Product"}),(0,n.jsx)(r.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accessType"}),(0,n.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Key"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_yr"}),(0,n.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_mn"}),(0,n.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_dy"}),(0,n.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tradeDate"}),(0,n.jsx)(r.td,{children:"DATE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'1900-01-01'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"clsMarkState"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/ClsMarkState",children:"enum - ClsMarkState"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"Preview or Final"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"opnPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Open price start of regular hours"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Low price during regular hours"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"maxPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"High price during regular hours"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"openInterest"}),(0,n.jsx)(r.td,{children:"INT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Open interest"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prtCount"}),(0,n.jsx)(r.td,{children:"INT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Print count entire trading period"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prtVolume"}),(0,n.jsx)(r.td,{children:"INT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Print volume entire trading period"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"realizedCnt"}),(0,n.jsx)(r.td,{children:"INT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"number of minute bar segments used in realizedVar calc"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"realizedVol"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"realizedVar  SQRT SUM LOG qteTwapT  qteTwapT1   2   realizedCnt  1 minute intervals during market hours"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"avgMktSize"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Average market size"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"avgMktWidth"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Average market width"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bidPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"bid price close  5 min"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"askPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"ask price close  5 min"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"srClsPrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"SR close mark close  5 min"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"closePrc"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"official exchange closing mark or last print"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"hasSRClsPrc"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"srClsPrc is valid"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"hasClosePrc"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"closePrc is valid otherwise is last print"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"srCloseMarkDttm"}),(0,n.jsx)(r.td,{children:"DATETIME(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(r.td,{children:"close  5 min datetime"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DATETIME(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(r.td,{children:"record publishupdate timestamp"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_tk"}),(0,n.jsx)(r.td,{children:"1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_yr"}),(0,n.jsx)(r.td,{children:"2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_mn"}),(0,n.jsx)(r.td,{children:"3"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_dy"}),(0,n.jsx)(r.td,{children:"4"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_at"}),(0,n.jsx)(r.td,{children:"5"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fkey_ts"}),(0,n.jsx)(r.td,{children:"6"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgFutureCloseMark` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clsMarkState` ENUM('None','Preview','Final') NOT NULL DEFAULT 'None' COMMENT 'Preview or Final',\n    `opnPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Open price (start of regular hours)',\n    `minPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Low price (during regular hours)',\n    `maxPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'High price (during regular hours)',\n    `openInterest` INT NOT NULL DEFAULT 0 COMMENT 'Open interest',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'Print count (entire trading period)',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'Print volume (entire trading period)',\n    `realizedCnt` INT NOT NULL DEFAULT 0 COMMENT 'number of minute bar segments used in realizedVar calc',\n    `realizedVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'realizedVar = SQRT: SUM[ LOG( qteTwap(T) / qteTwap(T+1) ) ^ 2 ] / realizedCnt @ 1 minute intervals during market hours',\n    `avgMktSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'Average market size',\n    `avgMktWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'Average market width',\n    `bidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price (close - 5 min)',\n    `askPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price (close - 5 min)',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 5 min)',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark (or last print)',\n    `hasSRClsPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'srClsPrc is valid',\n    `hasClosePrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'closePrc is valid; otherwise is last print',\n    `srCloseMarkDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT '(close - 5 min) date/time',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record publish/update timestamp',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='FutureCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.\\nFutureCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final';\n\n"})}),"\n",(0,n.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `tradeDate`,\n    `clsMarkState`,\n    `opnPrc`,\n    `minPrc`,\n    `maxPrc`,\n    `openInterest`,\n    `prtCount`,\n    `prtVolume`,\n    `realizedCnt`,\n    `realizedVol`,\n    `avgMktSize`,\n    `avgMktWidth`,\n    `bidPrc`,\n    `askPrc`,\n    `srClsPrc`,\n    `closePrc`,\n    `hasSRClsPrc`,\n    `hasClosePrc`,\n    `srCloseMarkDttm`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgFutureCloseMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1;\n"})}),"\n",(0,n.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='FutureCloseMark' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var n=s(96540);const t={},d=n.createContext(t);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);
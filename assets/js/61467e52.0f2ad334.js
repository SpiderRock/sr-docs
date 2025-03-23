"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47711],{89407:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var s=n(74848),r=n(28453);const t={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionOpenMark/OptionOpenMark",title:"OptionOpenMark",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionOpenMark/OptionOpenMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionOpenMark",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionOpenMark/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionOpenMark/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionLookback",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionLookback/"},next:{title:"OptionOpenVega",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionOpenVega/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:(0,s.jsx)(d.a,{href:"../../../Topics/market-marks/OptionOpenMark",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(d.p,{children:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."}),"\n",(0,s.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Attribute"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Topic"}),(0,s.jsx)(d.td,{children:"3120-market-marks"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"MLink Token"}),(0,s.jsx)(d.td,{children:"OptMarkData"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Product"}),(0,s.jsx)(d.td,{children:"SRAnalytics"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accessType"}),(0,s.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Key"}),(0,s.jsx)(d.th,{children:"Default Value"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_at"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"'None'"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_ts"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"'None'"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_tk"}),(0,s.jsx)(d.td,{children:"VARCHAR(12)"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"''"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_yr"}),(0,s.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_mn"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_dy"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_xx"}),(0,s.jsx)(d.td,{children:"DOUBLE"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_cp"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"'Call'"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"tradeDate"}),(0,s.jsx)(d.td,{children:"DATE"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"'1900-01-01'"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"opnMarkState"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/OpnMarkState",children:"enum - OpnMarkState"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"'None'"}),(0,s.jsx)(d.td,{children:"Preview or Final note preview is not corp action adjusted"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"uSrCls"}),(0,s.jsx)(d.td,{children:"DOUBLE"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"SR open uMark SR close uMark C  5m overnight adjusted"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"uClose"}),(0,s.jsx)(d.td,{children:"DOUBLE"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"exchange open uMark exchange close uMark overnight adjusted"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"srClsPrc"}),(0,s.jsx)(d.td,{children:"DOUBLE"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"SR open mark SR close mark close  5m overnight adjusted"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"closePrc"}),(0,s.jsx)(d.td,{children:"DOUBLE"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"exchange open mark exchange close mark overnight adjusted if available"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"srPrc"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"SR open surface price SR close surface price overnight adjusted"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"srVol"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"SR surface volatility"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"srSrc"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/MarkSource",children:"enum - MarkSource"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"'None'"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"de"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"greeks from SR surface volatility"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ga"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"th"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ve"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"vo"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"volga SR surface"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"va"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"vanna SR surface"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"rh"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ph"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"srSlope"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"surface slope SR surface"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"deDecay"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"sdiv"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"term sdiv stock dividend rate"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ddiv"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"sum of discrete dividends"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ddivPv"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"sum of present value of discrete dividends"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"rate"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"term discount rate"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"years"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"years to expiration"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"error"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"pricing calc error 0  none"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"corpAction"}),(0,s.jsx)(d.td,{children:"TINYTEXT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"''"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"configNow"}),(0,s.jsx)(d.td,{children:"DATETIME(6)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(d.td,{children:"timestamp in the trading period local timezone"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"timestamp"}),(0,s.jsx)(d.td,{children:"DATETIME(6)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Sequence"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_tk"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_yr"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_mn"}),(0,s.jsx)(d.td,{children:"3"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_dy"}),(0,s.jsx)(d.td,{children:"4"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_xx"}),(0,s.jsx)(d.td,{children:"5"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_cp"}),(0,s.jsx)(d.td,{children:"6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_at"}),(0,s.jsx)(d.td,{children:"7"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_ts"}),(0,s.jsx)(d.td,{children:"8"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionOpenMark` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `opnMarkState` ENUM('None','Preview','Final') NOT NULL DEFAULT 'None' COMMENT 'Preview or Final (note: preview is not corp action adjusted)',\n    `uSrCls` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR open uMark; [SR close uMark (C - 5m) overnight adjusted]',\n    `uClose` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exchange open uMark; [exchange close uMark overnight adjusted]',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR open mark; [SR close mark (close - 5m) overnight adjusted]',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exchange open mark; [exchange close mark overnight adjusted] [if available]',\n    `srPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR open surface price; [SR close surface price overnight adjusted]',\n    `srVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR surface volatility',\n    `srSrc` ENUM('None','NbboMid','SRVol','LoBound','HiBound','Other') NOT NULL DEFAULT 'None',\n    `de` FLOAT NOT NULL DEFAULT 0 COMMENT 'greeks from SR surface volatility',\n    `ga` FLOAT NOT NULL DEFAULT 0,\n    `th` FLOAT NOT NULL DEFAULT 0,\n    `ve` FLOAT NOT NULL DEFAULT 0,\n    `vo` FLOAT NOT NULL DEFAULT 0 COMMENT 'volga (SR surface)',\n    `va` FLOAT NOT NULL DEFAULT 0 COMMENT 'vanna (SR surface)',\n    `rh` FLOAT NOT NULL DEFAULT 0,\n    `ph` FLOAT NOT NULL DEFAULT 0,\n    `srSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface slope (SR surface)',\n    `deDecay` FLOAT NOT NULL DEFAULT 0,\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'term sdiv (stock dividend) rate',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of discrete dividends',\n    `ddivPv` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of present value of discrete dividends',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'term discount rate',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `error` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'pricing calc error (0 = none)',\n    `corpAction` TINYTEXT NOT NULL DEFAULT '',\n    `configNow` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp in the trading period local timezone',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day.';\n\n"})}),"\n",(0,s.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `tradeDate`,\n    `opnMarkState`,\n    `uSrCls`,\n    `uClose`,\n    `srClsPrc`,\n    `closePrc`,\n    `srPrc`,\n    `srVol`,\n    `srSrc`,\n    `de`,\n    `ga`,\n    `th`,\n    `ve`,\n    `vo`,\n    `va`,\n    `rh`,\n    `ph`,\n    `srSlope`,\n    `deDecay`,\n    `sdiv`,\n    `ddiv`,\n    `ddivPv`,\n    `rate`,\n    `years`,\n    `error`,\n    `corpAction`,\n    `configNow`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgOptionOpenMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,s.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='OptionOpenMark' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>c});var s=n(96540);const r={},t=s.createContext(r);function i(e){const d=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:d},e.children)}}}]);
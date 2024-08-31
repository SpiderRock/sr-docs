"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58852],{28112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var s=t(74848),r=t(28453);const d={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupReport/ExternAggGroupReport",title:"ExternAggGroupReport",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupReport/ExternAggGroupReport.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupReport",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupReport/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupReport/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ExternAggGroupGateway",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupGateway/"},next:{title:"FutAwayTktGateway",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRTrade/FutAwayTktGateway/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/execution-engine/ExternAggGroupReport",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"2270-execution-engine"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"ClientTrading"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRTrade"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_yr"}),(0,s.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_mn"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_dy"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_xx"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_cp"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'Call'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"Security Type Stock Future Option"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aggGroup"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"SpiderRock assigned aggGroup identifier up to 16 characters stkAggGroup futAggGroup or optAggGroup"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"SpiderRock assigned client firm code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sysEnvironment"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"original source sys environment Stable Current etc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"runStatus"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/RunStatus",children:"enum - RunStatus"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"original source run status ProdBeta"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"externSource"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/ExternSource",children:"enum - ExternSource"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"openPosition"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"startofday position aggregate firm position for all accnts in this aggGroup can be truncated if necessary"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"openPosType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/OpenPosType",children:"enum - OpenPosType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"botQuantity"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"quantity bot today can be zero if reported via execution drops"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sldQuantity"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"quantity sld today can be zero if reported via execution drops"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bidLeaves"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"current live open stock orders buy"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"askLeaves"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"current live open stock orders sell"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_tk"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_yr"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_mn"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_dy"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_xx"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_cp"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_at"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_ts"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:"9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aggGroup"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"11"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sysEnvironment"}),(0,s.jsx)(n.td,{children:"12"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"runStatus"}),(0,s.jsx)(n.td,{children:"13"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"externSource"}),(0,s.jsx)(n.td,{children:"14"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgExternAggGroupReport` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Security Type [Stock, Future, Option]',\n    `aggGroup` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SpiderRock assigned aggGroup identifier (up to 16 characters) [stkAggGroup, futAggGroup, or optAggGroup]',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SpiderRock assigned client firm code',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `externSource` ENUM('None','ExecEngine','SRSE','FIX','Other') NOT NULL DEFAULT 'None',\n    `openPosition` INT NOT NULL DEFAULT 0 COMMENT 'start-of-day position (aggregate firm position for all accnts in this aggGroup) [can be truncated if necessary]',\n    `openPosType` ENUM('None','Exact','Truncated') NOT NULL DEFAULT 'None',\n    `botQuantity` INT NOT NULL DEFAULT 0 COMMENT 'quantity bot today (can be zero if reported via execution drops)',\n    `sldQuantity` INT NOT NULL DEFAULT 0 COMMENT 'quantity sld today (can be zero if reported via execution drops)',\n    `bidLeaves` INT NOT NULL DEFAULT 0 COMMENT 'current (live) open stock orders (buy)',\n    `askLeaves` INT NOT NULL DEFAULT 0 COMMENT 'current (live) open stock orders (sell)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`aggGroup`,`clientFirm`,`sysEnvironment`,`runStatus`,`externSource`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `aggGroup`,\n    `clientFirm`,\n    `sysEnvironment`,\n    `runStatus`,\n    `externSource`,\n    `openPosition`,\n    `openPosType`,\n    `botQuantity`,\n    `sldQuantity`,\n    `bidLeaves`,\n    `askLeaves`,\n    `timestamp`\nFROM `SRTrade`.`MsgExternAggGroupReport`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `secKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `secKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `secKey_tk` = 'Example_secKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `secKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `secKey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `secKey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `aggGroup` = 'Example_aggGroup'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') */ \n    `sysEnvironment` = 'None'\n  AND\n    /* Replace with a ENUM('None','Prod','Beta','UAT','SysTest') */ \n    `runStatus` = 'None'\n  AND\n    /* Replace with a ENUM('None','ExecEngine','SRSE','FIX','Other') */ \n    `externSource` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='ExternAggGroupReport' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(96540);const r={},d=s.createContext(r);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);
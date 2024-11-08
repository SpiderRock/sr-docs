"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2996],{57626:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var d=t(74848),i=t(28453);const s={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTheo/TheoSurfacePerf/TheoSurfacePerf",title:"TheoSurfacePerf",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTheo/TheoSurfacePerf/TheoSurfacePerf.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTheo/TheoSurfacePerf",slug:"/MessageSchemas/Schema/SRSE Products/SRTheo/TheoSurfacePerf/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTheo/TheoSurfacePerf/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrTheoExpSurface",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExpSurface/"},next:{title:"SRTrade",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/analytics/TheoSurfacePerf",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"TheoSurfacePerf records are published throughout he day for each active client theoretical model in the SpiderRock system.  They are suitable for tracking performance of a theoretical model surface whether or not it is being traded.\nTheoSurfacePerf records are published to the SpiderRock elastic cluster at the end of each day."}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"1000-analytics"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"ClientTheo"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRTheo"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"theoModel"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"theo model"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"client firm this theo model is associated with controls visibility"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"perfSurfType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PerfSurfaceType",children:"enum - PerfSurfaceType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"date"}),(0,d.jsx)(r.td,{children:"VARCHAR(10)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"time"}),(0,d.jsx)(r.td,{children:"VARCHAR(8)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"SpiderRock underlier stock key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"SpiderRock underlier stock key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SpiderRock underlier stock key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strike"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"atm strike fwd uPrcfrom LiveSurfacePerf record"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tEMove"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"theoretical event move if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cTVol"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"theo call volatility from theoModel  strike  strike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"pTVol"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"theo put volatility from theoModel  strike  strike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cTOpx"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"theo call price  cTVol uMark years sdiv rate ddiv"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"pTOpx"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"theo put price  pTVol uMark years sdiv rate ddiv"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixCTVol"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"fixed strike theo call volatility from theoModel  strike  prvStrike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixPTVol"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"fixed strike theo put volatility from theoModel  strike  prvStrike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixCTOpx"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"fixed strike theo call price  fixTVol uMark years sdiv rate ddivstrike  prvStrike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"fixPTOpx"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"fixed strike theo put price  fixTVol uMark years sdiv rate ddivstrike  prvStrike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prvStrike"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period atm strike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prvTEMove"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period theoretical event move if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prvCTVol"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period theo call volatility  strike  prvStrike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prvPTVol"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period theo put volatility  strike  prvStrike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prvCTOpx"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period theo call price  strike  prvStrike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prvPTOpx"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period theo call price  strike  prvStrike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_tk"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_yr"}),(0,d.jsx)(r.td,{children:"2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_mn"}),(0,d.jsx)(r.td,{children:"3"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_dy"}),(0,d.jsx)(r.td,{children:"4"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_at"}),(0,d.jsx)(r.td,{children:"5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_ts"}),(0,d.jsx)(r.td,{children:"6"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"theoModel"}),(0,d.jsx)(r.td,{children:"7"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"8"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"perfSurfType"}),(0,d.jsx)(r.td,{children:"9"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTheo`.`MsgTheoSurfacePerf` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE','SPHR') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'theo model',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm this theo model is associated with (controls visibility)',\n    `perfSurfType` ENUM('None','Live','PriorDay') NOT NULL DEFAULT 'None',\n    `date` VARCHAR(10) NOT NULL DEFAULT '',\n    `time` VARCHAR(8) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock underlier stock key',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE','SPHR') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock underlier stock key',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SpiderRock underlier stock key',\n    `strike` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm strike (fwd uPrc);from LiveSurfacePerf record',\n    `tEMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'theoretical event move (if any)',\n    `cTVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo call volatility (from theoModel @ strike = strike)',\n    `pTVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo put volatility (from theoModel @ strike = strike)',\n    `cTOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo call price @ (cTVol, uMark, years, sdiv, rate, ddiv)',\n    `pTOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo put price @ (pTVol, uMark, years, sdiv, rate, ddiv)',\n    `fixCTVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike theo call volatility (from theoModel @ strike = prvStrike)',\n    `fixPTVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike theo put volatility (from theoModel @ strike = prvStrike)',\n    `fixCTOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike theo call price @ (fixTVol, uMark, years, sdiv, rate, ddiv);strike = prvStrike',\n    `fixPTOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike theo put price @ (fixTVol, uMark, years, sdiv, rate, ddiv);strike = prvStrike',\n    `prvStrike` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period atm strike',\n    `prvTEMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period theoretical event move (if any)',\n    `prvCTVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period theo call volatility @ strike = prvStrike',\n    `prvPTVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period theo put volatility @ strike = prvStrike',\n    `prvCTOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period theo call price @ strike = prvStrike',\n    `prvPTOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period theo call price @ strike = prvStrike',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`theoModel`,`clientFirm`,`perfSurfType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='TheoSurfacePerf records are published throughout he day for each active client theoretical model in the SpiderRock system.  They are suitable for tracking performance of a theoretical model surface whether or not it is being traded.\\nTheoSurfacePerf records are published to the SpiderRock elastic cluster at the end of each day.';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `theoModel`,\n    `clientFirm`,\n    `perfSurfType`,\n    `date`,\n    `time`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `strike`,\n    `tEMove`,\n    `cTVol`,\n    `pTVol`,\n    `cTOpx`,\n    `pTOpx`,\n    `fixCTVol`,\n    `fixPTVol`,\n    `fixCTOpx`,\n    `fixPTOpx`,\n    `prvStrike`,\n    `prvTEMove`,\n    `prvCTVol`,\n    `prvPTVol`,\n    `prvCTOpx`,\n    `prvPTOpx`,\n    `timestamp`\nFROM `SRTheo`.`MsgTheoSurfacePerf`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE','SPHR') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','Live','PriorDay') */ \n    `perfSurfType` = 'None';\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTheo.doccolumns WHERE TABLE_NAME='TheoSurfacePerf' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>c});var d=t(96540);const i={},s=d.createContext(i);function n(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);
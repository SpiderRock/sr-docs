"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[51752],{2981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=t(74848),d=t(28453);const r={},i=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/SpdrOptTheoRecord",title:"SpdrOptTheoRecord",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/SpdrOptTheoRecord.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord",slug:"/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRTheoExpSurface",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTheo/SRTheoExpSurface/"},next:{title:"SpdrTheoExp2PtCurve",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExp2PtCurve/"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"../../../Topics/client-theos/SpdrOptTheoRecord",children:"V8 Message Definiton"})}),"\n",(0,l.jsx)(n.p,{children:"SpdrOptTheoRecords can be used to override theoretical volatilities for specific strikes when using SpdrTheoExpSurface records."}),"\n",(0,l.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Topic"}),(0,l.jsx)(n.td,{children:"1945-client-theos"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MLink Token"}),(0,l.jsx)(n.td,{children:"SystemData"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Product"}),(0,l.jsx)(n.td,{children:"SRTheo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accessType"}),(0,l.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Key"}),(0,l.jsx)(n.th,{children:"Default Value"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_at"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_ts"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_tk"}),(0,l.jsx)(n.td,{children:"VARCHAR(12)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_yr"}),(0,l.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_mn"}),(0,l.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_dy"}),(0,l.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_xx"}),(0,l.jsx)(n.td,{children:"DOUBLE"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_cp"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"'Call'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"theoModel"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"client firm this theo model is associated with controls visibility"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TheoVol"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"midpoint fair volatility"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"BVol"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"buy vol"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"SVol"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"sell vol"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"BEdge"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"edge premium spread when buying"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"SEdge"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"edge premium spread when selling"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"buySellConvention"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/BuySellConvention",children:"enum - BuySellConvention"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{children:"rule used to interpret BVol SVol BEdge and SEdge"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"refUPrc"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"Reference uPrc for dynamic vol vol  TheoVol  vegaSlope  uPrc  refUPrc"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vegaSlope"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"Set to zero for no dynamic  hedge delta  delta  vegaSlope  vegarequires accounthedgeType  TVol theo delta  vegaSlope or TvS surface delta  vegaSlope default is surface delta only"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"theoStatus"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/TheoStatus",children:"enum - TheoStatus"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'Hold'"}),(0,l.jsx)(n.td,{children:"indicates where theos for this ticker will be utilized"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"timestamp"}),(0,l.jsx)(n.td,{children:"DATETIME(6)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Sequence"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_tk"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_yr"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_mn"}),(0,l.jsx)(n.td,{children:"3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_dy"}),(0,l.jsx)(n.td,{children:"4"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_xx"}),(0,l.jsx)(n.td,{children:"5"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_cp"}),(0,l.jsx)(n.td,{children:"6"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_at"}),(0,l.jsx)(n.td,{children:"7"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"okey_ts"}),(0,l.jsx)(n.td,{children:"8"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"theoModel"}),(0,l.jsx)(n.td,{children:"9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"10"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTheo`.`MsgSROptTheoRecord` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm this theo model is associated with (controls visibility)',\n    `TheoVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'mid-point (fair) volatility',\n    `BVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'buy vol',\n    `SVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'sell vol',\n    `BEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge premium spread when buying',\n    `SEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge premium spread when selling',\n    `buySellConvention` ENUM('None','Minimum','BSSpread','BSPctSprd','BSOffsetPts','BSOffsetPct') NOT NULL DEFAULT 'None' COMMENT 'rule used to interpret BVol, SVol, BEdge, and SEdge',\n    `refUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Reference uPrc for dynamic vol: vol = TheoVol + vegaSlope * (uPrc - refUPrc).',\n    `vegaSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'Set to zero for no dynamic.  hedge delta = delta + vegaSlope * vega;requires account.hedgeType = [TVol (theo delta + vegaSlope) or TvS (surface delta + vegaSlope)] (default is surface delta only)',\n    `theoStatus` ENUM('Hold','Auto','Scanner','Markup','CloseOnly') NOT NULL DEFAULT 'Hold' COMMENT 'indicates where theos for this ticker will be utilized',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`theoModel`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrOptTheoRecords can be used to override theoretical volatilities for specific strikes when using SpdrTheoExpSurface records.';\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `theoModel`,\n    `clientFirm`,\n    `TheoVol`,\n    `BVol`,\n    `SVol`,\n    `BEdge`,\n    `SEdge`,\n    `buySellConvention`,\n    `refUPrc`,\n    `vegaSlope`,\n    `theoStatus`,\n    `timestamp`\nFROM `SRTheo`.`MsgSROptTheoRecord`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTheo`.`MsgSROptTheoRecord` \nSET\n    /* Replace with a FLOAT */ \n    `TheoVol` = 1.23,\n    /* Replace with a FLOAT */ \n    `BVol` = 1.23,\n    /* Replace with a FLOAT */ \n    `SVol` = 1.23,\n    /* Replace with a FLOAT */ \n    `BEdge` = 1.23,\n    /* Replace with a FLOAT */ \n    `SEdge` = 1.23,\n    /* Replace with a ENUM('None','Minimum','BSSpread','BSPctSprd','BSOffsetPts','BSOffsetPct') */ \n    `buySellConvention` = 'None',\n    /* Replace with a FLOAT */ \n    `refUPrc` = 1.23,\n    /* Replace with a FLOAT */\n    `vegaSlope` = 1.23,\n    /* Replace with a ENUM('Hold','Auto','Scanner','Markup','CloseOnly') */ \n    `theoStatus` = 'Hold',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTheo`.`MsgSROptTheoRecord`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy`,\n    /* Replace with a DOUBLE */ \n    `okey_xx`,\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp`,\n    /* Replace with a VARCHAR(16) */ \n    `theoModel`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a FLOAT */ \n    `TheoVol`,\n    /* Replace with a FLOAT */ \n    `BVol`,\n    /* Replace with a FLOAT */ \n    `SVol`,\n    /* Replace with a FLOAT */ \n    `BEdge`,\n    /* Replace with a FLOAT */ \n    `SEdge`,\n    /* Replace with a ENUM('None','Minimum','BSSpread','BSPctSprd','BSOffsetPts','BSOffsetPct') */ \n    `buySellConvention`,\n    /* Replace with a FLOAT */ \n    `refUPrc`,\n    /* Replace with a FLOAT */\n    `vegaSlope`,\n    /* Replace with a ENUM('Hold','Auto','Scanner','Markup','CloseOnly') */ \n    `theoStatus`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_okey_tk',\n    123,\n    1,\n    1,\n    4.56,\n    'Call',\n    'Example_theoModel',\n    'Example_clientFirm',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'None',\n    1.23,\n    1.23,\n    'Hold',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTheo`.`MsgSROptTheoRecord` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTheo.doccolumns WHERE TABLE_NAME='SpdrOptTheoRecord' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var l=t(96540);const d={},r=l.createContext(d);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
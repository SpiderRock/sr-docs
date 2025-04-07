"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["15491"],{17764:function(e,n,t){t.r(n),t.d(n,{default:()=>T,frontMatter:()=>l,metadata:()=>d,assets:()=>c,toc:()=>x,contentTitle:()=>r});var d=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTheo/SRTheoExp2PtCurve/SRTheoExp2PtCurve","title":"SRTheoExp2PtCurve","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTheo/SRTheoExp2PtCurve/SRTheoExp2PtCurve.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTheo/SRTheoExp2PtCurve","slug":"/MessageSchemas/Schema/SRSE Products/SRTheo/SRTheoExp2PtCurve/","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTheo/SRTheoExp2PtCurve/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SROptTheoRecord","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTheo/SROptTheoRecord/"},"next":{"title":"SRTheoExpSurface","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTheo/SRTheoExpSurface/"}}'),s=t("52676"),i=t("91503");let l={},r=void 0,c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/client-theos/SpdrTheoExp2PtCurve",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.p,{children:"SpdrTheoExp2PtCurve records are used along side SpdrTheoExpSurface records to provide a complete x/y specification of a theoretical skew curve. Spline interpolation is used for values between x/y points"}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"1945-client-theos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"ClientTheo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRTheo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_yr"}),(0,s.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_mn"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_dy"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"theoModel"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"theo model"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"client firm this theo model is associated with controls visibility"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"xAxisType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/XAxisType",children:"enum - XAxisType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"axisVol"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x00"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x01"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x02"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x03"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x04"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x05"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x06"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x07"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x08"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x09"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x10"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x11"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x12"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x13"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x14"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y00"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y01"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y02"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y03"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y04"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y05"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y06"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y07"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y08"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y09"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y10"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y11"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y12"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y13"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y14"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{children:"last update dttm from loader"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_tk"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_yr"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_mn"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_dy"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_at"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_ts"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"theoModel"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"8"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTheo`.`MsgSRTheoExp2PtCurve` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'theo model',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm this theo model is associated with (controls visibility)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `xAxisType` ENUM('None','Strike','SimpleMoney','RTMoney','VolRTMoney','TVolRTMoney','LogStdMoney','TLogStdMoney') NOT NULL DEFAULT 'None',\n    `axisVol` FLOAT NOT NULL DEFAULT 0,\n    `x00` FLOAT NOT NULL DEFAULT 0,\n    `x01` FLOAT NOT NULL DEFAULT 0,\n    `x02` FLOAT NOT NULL DEFAULT 0,\n    `x03` FLOAT NOT NULL DEFAULT 0,\n    `x04` FLOAT NOT NULL DEFAULT 0,\n    `x05` FLOAT NOT NULL DEFAULT 0,\n    `x06` FLOAT NOT NULL DEFAULT 0,\n    `x07` FLOAT NOT NULL DEFAULT 0,\n    `x08` FLOAT NOT NULL DEFAULT 0,\n    `x09` FLOAT NOT NULL DEFAULT 0,\n    `x10` FLOAT NOT NULL DEFAULT 0,\n    `x11` FLOAT NOT NULL DEFAULT 0,\n    `x12` FLOAT NOT NULL DEFAULT 0,\n    `x13` FLOAT NOT NULL DEFAULT 0,\n    `x14` FLOAT NOT NULL DEFAULT 0,\n    `y00` FLOAT NOT NULL DEFAULT 0,\n    `y01` FLOAT NOT NULL DEFAULT 0,\n    `y02` FLOAT NOT NULL DEFAULT 0,\n    `y03` FLOAT NOT NULL DEFAULT 0,\n    `y04` FLOAT NOT NULL DEFAULT 0,\n    `y05` FLOAT NOT NULL DEFAULT 0,\n    `y06` FLOAT NOT NULL DEFAULT 0,\n    `y07` FLOAT NOT NULL DEFAULT 0,\n    `y08` FLOAT NOT NULL DEFAULT 0,\n    `y09` FLOAT NOT NULL DEFAULT 0,\n    `y10` FLOAT NOT NULL DEFAULT 0,\n    `y11` FLOAT NOT NULL DEFAULT 0,\n    `y12` FLOAT NOT NULL DEFAULT 0,\n    `y13` FLOAT NOT NULL DEFAULT 0,\n    `y14` FLOAT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last update dttm (from loader)',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`theoModel`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrTheoExp2PtCurve records are used along side SpdrTheoExpSurface records to provide a complete x/y specification of a theoretical skew curve. Spline interpolation is used for values between x/y points';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `theoModel`,\n    `clientFirm`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `xAxisType`,\n    `axisVol`,\n    `x00`,\n    `x01`,\n    `x02`,\n    `x03`,\n    `x04`,\n    `x05`,\n    `x06`,\n    `x07`,\n    `x08`,\n    `x09`,\n    `x10`,\n    `x11`,\n    `x12`,\n    `x13`,\n    `x14`,\n    `y00`,\n    `y01`,\n    `y02`,\n    `y03`,\n    `y04`,\n    `y05`,\n    `y06`,\n    `y07`,\n    `y08`,\n    `y09`,\n    `y10`,\n    `y11`,\n    `y12`,\n    `y13`,\n    `y14`,\n    `timestamp`\nFROM `SRTheo`.`MsgSRTheoExp2PtCurve`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTheo`.`MsgSRTheoExp2PtCurve` \nSET\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk',\n    /* Replace with a ENUM('None','Strike','SimpleMoney','RTMoney','VolRTMoney','TVolRTMoney','LogStdMoney','TLogStdMoney') */ \n    `xAxisType` = 'None',\n    /* Replace with a FLOAT */ \n    `axisVol` = 1.23,\n    /* Replace with a FLOAT */ \n    `x00` = 1.23,\n    /* Replace with a FLOAT */ \n    `x01` = 1.23,\n    /* Replace with a FLOAT */ \n    `x02` = 1.23,\n    /* Replace with a FLOAT */ \n    `x03` = 1.23,\n    /* Replace with a FLOAT */ \n    `x04` = 1.23,\n    /* Replace with a FLOAT */ \n    `x05` = 1.23,\n    /* Replace with a FLOAT */ \n    `x06` = 1.23,\n    /* Replace with a FLOAT */ \n    `x07` = 1.23,\n    /* Replace with a FLOAT */ \n    `x08` = 1.23,\n    /* Replace with a FLOAT */ \n    `x09` = 1.23,\n    /* Replace with a FLOAT */ \n    `x10` = 1.23,\n    /* Replace with a FLOAT */ \n    `x11` = 1.23,\n    /* Replace with a FLOAT */ \n    `x12` = 1.23,\n    /* Replace with a FLOAT */ \n    `x13` = 1.23,\n    /* Replace with a FLOAT */ \n    `x14` = 1.23,\n    /* Replace with a FLOAT */ \n    `y00` = 1.23,\n    /* Replace with a FLOAT */ \n    `y01` = 1.23,\n    /* Replace with a FLOAT */ \n    `y02` = 1.23,\n    /* Replace with a FLOAT */ \n    `y03` = 1.23,\n    /* Replace with a FLOAT */ \n    `y04` = 1.23,\n    /* Replace with a FLOAT */ \n    `y05` = 1.23,\n    /* Replace with a FLOAT */ \n    `y06` = 1.23,\n    /* Replace with a FLOAT */ \n    `y07` = 1.23,\n    /* Replace with a FLOAT */ \n    `y08` = 1.23,\n    /* Replace with a FLOAT */ \n    `y09` = 1.23,\n    /* Replace with a FLOAT */ \n    `y10` = 1.23,\n    /* Replace with a FLOAT */ \n    `y11` = 1.23,\n    /* Replace with a FLOAT */ \n    `y12` = 1.23,\n    /* Replace with a FLOAT */ \n    `y13` = 1.23,\n    /* Replace with a FLOAT */ \n    `y14` = 1.23,\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTheo`.`MsgSRTheoExp2PtCurve`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy`,\n    /* Replace with a VARCHAR(16) */ \n    `theoModel`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a ENUM('None','Strike','SimpleMoney','RTMoney','VolRTMoney','TVolRTMoney','LogStdMoney','TLogStdMoney') */ \n    `xAxisType`,\n    /* Replace with a FLOAT */ \n    `axisVol`,\n    /* Replace with a FLOAT */ \n    `x00`,\n    /* Replace with a FLOAT */ \n    `x01`,\n    /* Replace with a FLOAT */ \n    `x02`,\n    /* Replace with a FLOAT */ \n    `x03`,\n    /* Replace with a FLOAT */ \n    `x04`,\n    /* Replace with a FLOAT */ \n    `x05`,\n    /* Replace with a FLOAT */ \n    `x06`,\n    /* Replace with a FLOAT */ \n    `x07`,\n    /* Replace with a FLOAT */ \n    `x08`,\n    /* Replace with a FLOAT */ \n    `x09`,\n    /* Replace with a FLOAT */ \n    `x10`,\n    /* Replace with a FLOAT */ \n    `x11`,\n    /* Replace with a FLOAT */ \n    `x12`,\n    /* Replace with a FLOAT */ \n    `x13`,\n    /* Replace with a FLOAT */ \n    `x14`,\n    /* Replace with a FLOAT */ \n    `y00`,\n    /* Replace with a FLOAT */ \n    `y01`,\n    /* Replace with a FLOAT */ \n    `y02`,\n    /* Replace with a FLOAT */ \n    `y03`,\n    /* Replace with a FLOAT */ \n    `y04`,\n    /* Replace with a FLOAT */ \n    `y05`,\n    /* Replace with a FLOAT */ \n    `y06`,\n    /* Replace with a FLOAT */ \n    `y07`,\n    /* Replace with a FLOAT */ \n    `y08`,\n    /* Replace with a FLOAT */ \n    `y09`,\n    /* Replace with a FLOAT */ \n    `y10`,\n    /* Replace with a FLOAT */ \n    `y11`,\n    /* Replace with a FLOAT */ \n    `y12`,\n    /* Replace with a FLOAT */ \n    `y13`,\n    /* Replace with a FLOAT */ \n    `y14`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ekey_tk',\n    123,\n    1,\n    1,\n    'Example_theoModel',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'None',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTheo`.`MsgSRTheoExp2PtCurve` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTheo.doccolumns WHERE TABLE_NAME='SRTheoExp2PtCurve' ORDER BY ordinal_position ASC;\n"})})]})}function T(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},91503:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var d=t(75271);let s={},i=d.createContext(s);function l(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);
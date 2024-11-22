"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75849],{43833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var r=n(74848),c=n(28453);const l={},i=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/AltSymbolMap",title:"AltSymbolMap",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/AltSymbolMap.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AccountRouteConfig",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/AccountRouteConfig/"},next:{title:"AssetAccountControl",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/AssetAccountControl/"}},d={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (AltClearingList)",id:"json-block-altclearinglist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/client-config/AltSymbolMap",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"1800-client-config"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"ClientControl"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRControl"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"srcAccnt"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"client enter order in this account"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"SR assigned client firm acronym"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accnt"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"this accnt will replace accnt on parent order if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"altAccnt"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace altAccnt on parent order if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"altUserName"}),(0,r.jsx)(t.td,{children:"VARCHAR(24)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace altUserName on parent order if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strategy"}),(0,r.jsx)(t.td,{children:"VARCHAR(36)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace strategy on parent order if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userData1"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace userData1 on parent order if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userData2"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace userData2 on parent order if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"childData"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace childData on parent order if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticketLocateFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"ticketchat default locate firm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticketLocatePool"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"ticketchat default locate poolid  firm granting the locate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stkExecBrkrCode"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace execBrkrCode on stk parent orders if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"futExecBrkrCode"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace execBrkrCode on fut parent orders if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"eqtOptExecBrkrCode"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace execBrkrCode on eqt optmleg parent orders if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"futOptExecBrkrCode"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"will replace execBrkrCode on fut optmleg parent orders if exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modifiedBy"}),(0,r.jsx)(t.td,{children:"VARCHAR(24)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modifiedIn"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{children:"timestamp of last modification"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AltClearingList"}),(0,r.jsx)(t.td,{children:"JSON"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'JSON_ARRAY()'"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"srcAccnt"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"5"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"json-block-altclearinglist",children:"JSON Block (AltClearingList)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"execBrkrCode"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/execBrkrCode",children:"enum - execBrkrCode"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exDest"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/exDest",children:"enum - exDest"})}),(0,r.jsx)(t.td,{children:"exDest eg CBOEOPT AMEXCOB NMSOPT NMSSTK NMSCOB CMXFUT"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clrFlipType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/FlipType",children:"enum - FlipType"})}),(0,r.jsx)(t.td,{children:"type of clearing corp delivery"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clrFlipFirm"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/clrFlipFirm",children:"enum - clrFlipFirm"})}),(0,r.jsx)(t.td,{children:"deliverTo clearing member eg OCC NSCC MPID or InstitutionID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clrFlipAccnt"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/clrFlipAccnt",children:"enum - clrFlipAccnt"})}),(0,r.jsx)(t.td,{children:"deliverTo client account eg OCC AID or a DVP FBO code"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clrAgent"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/clrAgent",children:"enum - clrAgent"})}),(0,r.jsx)(t.td,{children:"deliverTo agent eg DVP Agent Bank ID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clrTaxID"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/clrTaxID",children:"enum - clrTaxID"})}),(0,r.jsx)(t.td,{children:"deliverTo taxID eg DVP TaxID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"execBrkrAccnt"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/execBrkrAccnt",children:"enum - execBrkrAccnt"})}),(0,r.jsx)(t.td,{children:"exec broker account supplied by exec broker usually Account1 only used if clrFlipTypeBrkrAccnt"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"execBrkrClFirm"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/execBrkrClFirm",children:"enum - execBrkrClFirm"})}),(0,r.jsx)(t.td,{children:"exec broker clientfirm supplied by exec broker usually OnBehalfOfCompId115 only used if clrFlipTypeBrkrAccnt"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"execBrkrUserName"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/execBrkrUserName",children:"enum - execBrkrUserName"})}),(0,r.jsx)(t.td,{children:"exec broker user name supplied by exec broker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"badge"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/badge",children:"enum - badge"})}),(0,r.jsx)(t.td,{children:"exchange memembership and badge id"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgAltSymbolMap` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `srcAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client enter order in this account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm acronym',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'this accnt will replace accnt on parent order (if exists)',\n    `altAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'will replace altAccnt on parent order (if exists)',\n    `altUserName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'will replace altUserName on parent order (if exists)',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'will replace strategy on parent order (if exists)',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will replace userData1 on parent order (if exists)',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will replace userData2 on parent order (if exists)',\n    `childData` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will replace childData on parent order (if exists)',\n    `ticketLocateFirm` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'ticket/chat (default) locate firm',\n    `ticketLocatePool` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'ticket/chat (default) locate pool/id @ firm granting the locate',\n    `stkExecBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'will replace execBrkrCode on stk parent orders (if exists)',\n    `futExecBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'will replace execBrkrCode on fut parent orders (if exists)',\n    `eqtOptExecBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'will replace execBrkrCode on eqt opt/mleg parent orders (if exists)',\n    `futOptExecBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'will replace execBrkrCode on fut opt/mleg parent orders (if exists)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    `AltClearingList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(AltClearingList)),\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`srcAccnt`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `srcAccnt`,\n    `clientFirm`,\n    `accnt`,\n    `altAccnt`,\n    `altUserName`,\n    `strategy`,\n    `userData1`,\n    `userData2`,\n    `childData`,\n    `ticketLocateFirm`,\n    `ticketLocatePool`,\n    `stkExecBrkrCode`,\n    `futExecBrkrCode`,\n    `eqtOptExecBrkrCode`,\n    `futOptExecBrkrCode`,\n    `timestamp`,\n    `AltClearingList`\nFROM `SRControl`.`MsgAltSymbolMap`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `srcAccnt` = 'Example_srcAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgAltSymbolMap` \nSET\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt',\n    /* Replace with a VARCHAR(16) */ \n    `altAccnt` = 'Example_altAccnt',\n    /* Replace with a VARCHAR(24) */ \n    `altUserName` = 'Example_altUserName',\n    /* Replace with a VARCHAR(36) */ \n    `strategy` = 'Example_strategy',\n    /* Replace with a TINYTEXT */ \n    `userData1` = 'dummy tiny text',\n    /* Replace with a TINYTEXT */ \n    `userData2` = 'dummy tiny text',\n    /* Replace with a TINYTEXT */ \n    `childData` = 'dummy tiny text',\n    /* Replace with a VARCHAR(6) */ \n    `ticketLocateFirm` = 'Example_ticketLocateFirm',\n    /* Replace with a VARCHAR(16) */ \n    `ticketLocatePool` = 'Example_ticketLocatePool',\n    /* Replace with a VARCHAR(16) */ \n    `stkExecBrkrCode` = 'Example_stkExecBrkrCode',\n    /* Replace with a VARCHAR(16) */ \n    `futExecBrkrCode` = 'Example_futExecBrkrCode',\n    /* Replace with a VARCHAR(16) */ \n    `eqtOptExecBrkrCode` = 'Example_eqtOptExecBrkrCode',\n    /* Replace with a VARCHAR(16) */ \n    `futOptExecBrkrCode` = 'Example_futOptExecBrkrCode',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000',\n    /* Replace with a JSON */\n    `AltClearingList` = '{\"key\": \"value\"}'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `srcAccnt` = 'Example_srcAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgAltSymbolMap`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a VARCHAR(16) */ \n    `srcAccnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `altAccnt`,\n    /* Replace with a VARCHAR(24) */ \n    `altUserName`,\n    /* Replace with a VARCHAR(36) */ \n    `strategy`,\n    /* Replace with a TINYTEXT */ \n    `userData1`,\n    /* Replace with a TINYTEXT */ \n    `userData2`,\n    /* Replace with a TINYTEXT */ \n    `childData`,\n    /* Replace with a VARCHAR(6) */ \n    `ticketLocateFirm`,\n    /* Replace with a VARCHAR(16) */ \n    `ticketLocatePool`,\n    /* Replace with a VARCHAR(16) */ \n    `stkExecBrkrCode`,\n    /* Replace with a VARCHAR(16) */ \n    `futExecBrkrCode`,\n    /* Replace with a VARCHAR(16) */ \n    `eqtOptExecBrkrCode`,\n    /* Replace with a VARCHAR(16) */ \n    `futOptExecBrkrCode`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`,\n    /* Replace with a JSON */\n    `AltClearingList`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'Example_srcAccnt',\n    'Example_clientFirm',\n    'Example_accnt',\n    'Example_altAccnt',\n    'Example_altUserName',\n    'Example_strategy',\n    'dummy tiny text',\n    'dummy tiny text',\n    'dummy tiny text',\n    'Example_ticketLocateFirm',\n    'Example_ticketLocatePool',\n    'Example_stkExecBrkrCode',\n    'Example_futExecBrkrCode',\n    'Example_eqtOptExecBrkrCode',\n    'Example_futOptExecBrkrCode',\n    '2022-01-01 12:34:56.000000',\n    '{\"key\": \"value\"}'\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgAltSymbolMap` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `srcAccnt` = 'Example_srcAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='AltSymbolMap' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const c={},l=r.createContext(c);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
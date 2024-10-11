"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93115],{45510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=t(74848),r=t(28453);const i={},l=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskControl/SpdrRiskControl",title:"SpdrRiskControl",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskControl/SpdrRiskControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskControl/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskControl/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SectorControl",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRControl/SectorControl/"},next:{title:"SpdrRiskCounter",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskCounter/"}},d={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/risk-control/SpdrRiskControl",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.p,{children:"SpdrRiskControl records are used to establish supervisory control of equity, and equity option trading in SpiderRock execution engines.  These records are only viewable and editable by RiskAdmin users with access to the control record ClientFirm"}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"4535-risk-control"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"SystemData"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRControl"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"ANYANY default if a more precise ticker control does not exist"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"ANYANY default if a more precise ticker control does not exist"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"ANYANY default if a more precise ticker control does not exist"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskControlKey"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"must be an SRClientAccnt if riskControlLevelAccnt must be an SRUser if riskControlLevelUser ignored if riskControlLevelClientFirm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskControlLevel"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/RiskControlLevel",children:"enum - RiskControlLevel"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isTestAccnt"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"if Yes this control applies only to risk from test accnts"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stkEnabled"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"futEnabled"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"optEnabled"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"marginLimitDay"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"maximum net per symbolday day portfolio day trades only margin can include external sources"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"openExposureLimit"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"maximum abs open child order Delta no netting open child orders only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayDDeltaLn"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"open long Delta per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayDDeltaSh"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"open short Delta per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayDDeltaAbs"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"absolute Delta ddBot  ddSld position per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayWtVegaLn"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"open long WtVega per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayWtVegaSh"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"open short WtVega per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayWtVegaAbs"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"open absolute WtVega WtVeBot  WtVeSld per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayNValueLn"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"open long notional value per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayNValueSh"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"open short notional value per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxDayNValueAbs"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"absolute notional value NValueBot  NValueSld per trading session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifiedBy"}),(0,s.jsx)(n.td,{children:"VARCHAR(24)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifiedIn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_tk"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_at"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_ts"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskControlKey"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskControlLevel"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskFirm"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isTestAccnt"}),(0,s.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgSRRiskControl` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT '''*-ANY-ANY'' default (if a more precise ticker control does not exist)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT '''*-ANY-ANY'' default (if a more precise ticker control does not exist)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT '''*-ANY-ANY'' default (if a more precise ticker control does not exist)',\n    `riskControlKey` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'must be an SRClientAccnt if riskControlLevel=Accnt; must be an SRUser if riskControlLevel=User; ignored if riskControlLevel=ClientFirm',\n    `riskControlLevel` ENUM('None','ClientFirm','Accnt','User') NOT NULL DEFAULT 'None',\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this control applies only to risk from test accnts',\n    `stkEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `futEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `optEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `marginLimitDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum net (per symbol/day) day portfolio (day trades only) margin (can include external sources)',\n    `openExposureLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum abs open child order $Delta (no netting) (open child orders only)',\n    `maxDayDDeltaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'open long $Delta per trading session',\n    `maxDayDDeltaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'open short $Delta per trading session',\n    `maxDayDDeltaAbs` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute $Delta, |ddBot| + |ddSld| position per trading session',\n    `maxDayWtVegaLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'open long WtVega per trading session',\n    `maxDayWtVegaSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'open short WtVega per trading session',\n    `maxDayWtVegaAbs` FLOAT NOT NULL DEFAULT 0 COMMENT 'open absolute WtVega, |WtVeBot| + |WtVeSld| per trading session',\n    `maxDayNValueLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'open long notional value per trading session',\n    `maxDayNValueSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'open short notional value per trading session',\n    `maxDayNValueAbs` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute notional value, |NValueBot| + |NValueSld| per trading session',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`riskControlKey`,`riskControlLevel`,`riskFirm`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrRiskControl records are used to establish supervisory control of equity, and equity option trading in SpiderRock execution engines.  These records are only viewable and editable by RiskAdmin users with access to the control record ClientFirm';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `riskControlKey`,\n    `riskControlLevel`,\n    `riskFirm`,\n    `isTestAccnt`,\n    `stkEnabled`,\n    `futEnabled`,\n    `optEnabled`,\n    `marginLimitDay`,\n    `openExposureLimit`,\n    `maxDayDDeltaLn`,\n    `maxDayDDeltaSh`,\n    `maxDayDDeltaAbs`,\n    `maxDayWtVegaLn`,\n    `maxDayWtVegaSh`,\n    `maxDayWtVegaAbs`,\n    `maxDayNValueLn`,\n    `maxDayNValueSh`,\n    `maxDayNValueAbs`,\n    `timestamp`\nFROM `SRControl`.`MsgSRRiskControl`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskControlKey` = 'Example_riskControlKey'\n  AND\n    /* Replace with a ENUM('None','ClientFirm','Accnt','User') */ \n    `riskControlLevel` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgSRRiskControl` \nSET\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `stkEnabled` = 'None',\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `futEnabled` = 'None',\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `optEnabled` = 'None',\n    /* Replace with a FLOAT */ \n    `marginLimitDay` = 1.23,\n    /* Replace with a FLOAT */ \n    `openExposureLimit` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayDDeltaLn` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayDDeltaSh` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayDDeltaAbs` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayWtVegaLn` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayWtVegaSh` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayWtVegaAbs` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayNValueLn` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayNValueSh` = 1.23,\n    /* Replace with a FLOAT */ \n    `maxDayNValueAbs` = 1.23,\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskControlKey` = 'Example_riskControlKey'\n  AND\n    /* Replace with a ENUM('None','ClientFirm','Accnt','User') */ \n    `riskControlLevel` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgSRRiskControl`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a VARCHAR(16) */ \n    `riskControlKey`,\n    /* Replace with a ENUM('None','ClientFirm','Accnt','User') */ \n    `riskControlLevel`,\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `stkEnabled`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `futEnabled`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `optEnabled`,\n    /* Replace with a FLOAT */ \n    `marginLimitDay`,\n    /* Replace with a FLOAT */ \n    `openExposureLimit`,\n    /* Replace with a FLOAT */ \n    `maxDayDDeltaLn`,\n    /* Replace with a FLOAT */ \n    `maxDayDDeltaSh`,\n    /* Replace with a FLOAT */ \n    `maxDayDDeltaAbs`,\n    /* Replace with a FLOAT */ \n    `maxDayWtVegaLn`,\n    /* Replace with a FLOAT */ \n    `maxDayWtVegaSh`,\n    /* Replace with a FLOAT */ \n    `maxDayWtVegaAbs`,\n    /* Replace with a FLOAT */ \n    `maxDayNValueLn`,\n    /* Replace with a FLOAT */ \n    `maxDayNValueSh`,\n    /* Replace with a FLOAT */ \n    `maxDayNValueAbs`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'Example_riskControlKey',\n    'None',\n    'Example_riskFirm',\n    'None',\n    'None',\n    'None',\n    'None',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgSRRiskControl` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskControlKey` = 'Example_riskControlKey'\n  AND\n    /* Replace with a ENUM('None','ClientFirm','Accnt','User') */ \n    `riskControlLevel` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='SpdrRiskControl' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
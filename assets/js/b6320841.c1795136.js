"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[95905],{39009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=t(74848),s=t(28453);const l={},i=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/MarRiskControlTkOverride",title:"MarRiskControlTkOverride",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/MarRiskControlTkOverride.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskControl",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/"},next:{title:"MarRiskCounter",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/"}},a={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/risk-control/MarRiskControlTkOverride",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"MarRiskControlTkOverride records are used to establish ticker-specific risk controls SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"4535-risk-control"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SystemData"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRControl"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskGroup"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTestAccnt"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"if Yes this control applies only to risk from test accnts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stkEnabled"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"futEnabled"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"optEnabled"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blockShortSales"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"block all short sales"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxStkQty"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of equity shares that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxFutQty"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of futures contracts that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxOptQty"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of option contracts that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxStkDDelta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"maximum abs mny per stock parent order ddelta  001  shares  pointValue  midPrc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxFutDDelta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"maximum abs mny per future parent order ddelta  001  contracts  pointValue  midPrc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxOptDDelta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"maximum abs mny per option parent order ddelta  001  contracts  pointValue  ABSde  uMidPrc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stkCollarPct"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"maximum user limit vs bidask price control"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"futCollarPct"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"maximum user limit vs bidask price control"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"optCollarPct"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"maximum user limit vs bidask price control"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxAccFutCnAbs"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"max absolute net accnt future contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxDayFutCnBot"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day future contracts bot"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxDayFutCnSld"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day future contracts sld"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxDayFutCnAbs"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"max absolute net day future contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedBy"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskFirm"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskGroup"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTestAccnt"}),(0,r.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgMarRiskControlTkOverride` (\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskGroup` VARCHAR(16) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this control applies only to risk from test accnts',\n    `stkEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `futEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `optEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `blockShortSales` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'block all short sales',\n    `orderMaxStkQty` INT NOT NULL DEFAULT 0 COMMENT 'number of equity shares that can be bought or sold by a single parent order',\n    `orderMaxFutQty` INT NOT NULL DEFAULT 0 COMMENT 'number of futures contracts that can be bought or sold by a single parent order',\n    `orderMaxOptQty` INT NOT NULL DEFAULT 0 COMMENT 'number of option contracts that can be bought or sold by a single parent order',\n    `orderMaxStkDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc',\n    `orderMaxFutDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc',\n    `orderMaxOptDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc',\n    `stkCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `futCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `optCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `maxAccFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'max absolute (net) accnt future contracts',\n    `maxDayFutCnBot` INT NOT NULL DEFAULT 0 COMMENT 'day future contracts bot',\n    `maxDayFutCnSld` INT NOT NULL DEFAULT 0 COMMENT 'day future contracts sld',\n    `maxDayFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'max absolute (net) day future contracts',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`riskFirm`,`riskGroup`,`ticker_tk`,`ticker_at`,`ticker_ts`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='MarRiskControlTkOverride records are used to establish ticker-specific risk controls SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `riskFirm`,\n    `riskGroup`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `isTestAccnt`,\n    `stkEnabled`,\n    `futEnabled`,\n    `optEnabled`,\n    `blockShortSales`,\n    `orderMaxStkQty`,\n    `orderMaxFutQty`,\n    `orderMaxOptQty`,\n    `orderMaxStkDDelta`,\n    `orderMaxFutDDelta`,\n    `orderMaxOptDDelta`,\n    `stkCollarPct`,\n    `futCollarPct`,\n    `optCollarPct`,\n    `maxAccFutCnAbs`,\n    `maxDayFutCnBot`,\n    `maxDayFutCnSld`,\n    `maxDayFutCnAbs`,\n    `timestamp`\nFROM `SRControl`.`MsgMarRiskControlTkOverride`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup` = 'Example_riskGroup'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgMarRiskControlTkOverride` \nSET\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `stkEnabled` = 'None',\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `futEnabled` = 'None',\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `optEnabled` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `blockShortSales` = 'None',\n    /* Replace with a INT */ \n    `orderMaxStkQty` = 5,\n    /* Replace with a INT */ \n    `orderMaxFutQty` = 5,\n    /* Replace with a INT */ \n    `orderMaxOptQty` = 5,\n    /* Replace with a FLOAT */ \n    `orderMaxStkDDelta` = 1.23,\n    /* Replace with a FLOAT */ \n    `orderMaxFutDDelta` = 1.23,\n    /* Replace with a FLOAT */ \n    `orderMaxOptDDelta` = 1.23,\n    /* Replace with a FLOAT */ \n    `stkCollarPct` = 1.23,\n    /* Replace with a FLOAT */ \n    `futCollarPct` = 1.23,\n    /* Replace with a FLOAT */ \n    `optCollarPct` = 1.23,\n    /* Replace with a INT */ \n    `maxAccFutCnAbs` = 5,\n    /* Replace with a INT */ \n    `maxDayFutCnBot` = 5,\n    /* Replace with a INT */ \n    `maxDayFutCnSld` = 5,\n    /* Replace with a INT */ \n    `maxDayFutCnAbs` = 5,\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup` = 'Example_riskGroup'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgMarRiskControlTkOverride`(\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm`,\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `stkEnabled`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `futEnabled`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `optEnabled`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `blockShortSales`,\n    /* Replace with a INT */ \n    `orderMaxStkQty`,\n    /* Replace with a INT */ \n    `orderMaxFutQty`,\n    /* Replace with a INT */ \n    `orderMaxOptQty`,\n    /* Replace with a FLOAT */ \n    `orderMaxStkDDelta`,\n    /* Replace with a FLOAT */ \n    `orderMaxFutDDelta`,\n    /* Replace with a FLOAT */ \n    `orderMaxOptDDelta`,\n    /* Replace with a FLOAT */ \n    `stkCollarPct`,\n    /* Replace with a FLOAT */ \n    `futCollarPct`,\n    /* Replace with a FLOAT */ \n    `optCollarPct`,\n    /* Replace with a INT */ \n    `maxAccFutCnAbs`,\n    /* Replace with a INT */ \n    `maxDayFutCnBot`,\n    /* Replace with a INT */ \n    `maxDayFutCnSld`,\n    /* Replace with a INT */ \n    `maxDayFutCnAbs`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_riskFirm',\n    'Example_riskGroup',\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'None',\n    'None',\n    'None',\n    'None',\n    'None',\n    5,\n    5,\n    5,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    5,\n    5,\n    5,\n    5,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgMarRiskControlTkOverride` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup` = 'Example_riskGroup'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='MarRiskControlTkOverride' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
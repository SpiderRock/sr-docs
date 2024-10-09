"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45848],{59365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var r=t(74848),s=t(28453);const d={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRControl/SRRiskCounter/SRRiskCounter",title:"SRRiskCounter",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/SRRiskCounter/SRRiskCounter.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/SRRiskCounter",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/SRRiskCounter/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/SRRiskCounter/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRRiskControl",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/SRRiskControl/"},next:{title:"SectorControl",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/SectorControl/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/risk-counter/SpdrRiskCounter",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"Values in this table represent current (live) SpiderRock supervisory risk counters for a corresponding risk control key."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"4625-risk-counter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"ClientControl"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRControl"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"ANYANY represents the entire control group"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"ANYANY represents the entire control group"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"ANYANY represents the entire control group"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskControlKey"}),(0,r.jsx)(n.td,{children:"VARCHAR(64)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"must be an SRClientAccnt if riskControlLevelAccnt must be an SRUser if riskControlLevelUser ignored if riskControlLevelClientFirm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskControlLevel"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/RiskControlLevel",children:"enum - RiskControlLevel"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTestAccnt"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sysRealm"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysRealm",children:"enum - SysRealm"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sysEnvironment"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"original source sys environment Stable Current etc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskEngine"}),(0,r.jsx)(n.td,{children:"VARCHAR(32)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"EE engine name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netDayDDelta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"net day Delta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"absDayDDelta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"absolute day Delta ddBot  ddSld position"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netDayVega"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"net day Vega per"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"absDayVega"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"absolute day Vega veBot  veSld position"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netDayWtVega"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"net day WtVega"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"absDayWtVega"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"absolute day WtVega wvBot  wvSld position"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netDayNValue"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"net day Notional Value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"absDayNValue"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"absolute day Notional Value nvBot  nvSld position"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netDayRMetric7"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"net day RiskMetric7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"absDayRMetric7"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"absolute day RiskMetric7 rm7Bot  rm7Sld position"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netDayDDeltaEma"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"60s halflife EMA delta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netDayWtVegaEma"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"60s halflife EMA wtVega"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"emaTimestamp"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"liveMarginDay"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"live net per symbol day portfolio day trades only margin can include external sources"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"liveOpenExposure"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"live abs open child order Delta no netting open child orders only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dayMarginUDnVDn"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day margin UPrcDnVolDn"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dayMarginUDnVUp"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day margin UPrcDnVolUp"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dayMarginUUpVDn"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day margin UPrcUpVolDn"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dayMarginUUpVUp"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day margin UPrcUpVolUp"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numStkChildOrders"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numFutChildOrders"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numOptChildOrders"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numMLegChildOrders"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"counter"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskControlKey"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskControlLevel"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskFirm"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTestAccnt"}),(0,r.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgSRRiskCounter` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `riskControlKey` VARCHAR(64) NOT NULL DEFAULT '' COMMENT 'must be an SRClientAccnt if riskControlLevel=Accnt; must be an SRUser if riskControlLevel=User; ignored if riskControlLevel=ClientFirm',\n    `riskControlLevel` ENUM('None','ClientFirm','Accnt','User') NOT NULL DEFAULT 'None',\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `sysRealm` ENUM('None','SysTest','NMS','CME','FR2','LD4','DR') NOT NULL DEFAULT 'None',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `riskEngine` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'EE engine name',\n    `netDayDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day $Delta',\n    `absDayDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day $Delta, |ddBot| + |ddSld| position',\n    `netDayVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day Vega per',\n    `absDayVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day Vega, |veBot| + |veSld| position',\n    `netDayWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day WtVega',\n    `absDayWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day WtVega, |wvBot| + |wvSld| position',\n    `netDayNValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day Notional Value',\n    `absDayNValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day Notional Value, |nvBot| + |nvSld| position',\n    `netDayRMetric7` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day RiskMetric7',\n    `absDayRMetric7` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day RiskMetric7, |rm7Bot| + |rm7Sld| position',\n    `netDayDDeltaEma` FLOAT NOT NULL DEFAULT -1 COMMENT '60s (half-life) EMA $delta',\n    `netDayWtVegaEma` FLOAT NOT NULL DEFAULT -1 COMMENT '60s (half-life) EMA wtVega',\n    `emaTimestamp` DOUBLE NOT NULL DEFAULT 0,\n    `liveMarginDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'live net (per symbol) day portfolio (day trades only) margin (can include external sources)',\n    `liveOpenExposure` FLOAT NOT NULL DEFAULT 0 COMMENT 'live abs open child order $Delta (no netting) (open child orders only)',\n    `dayMarginUDnVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcDn/VolDn)',\n    `dayMarginUDnVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcDn/VolUp)',\n    `dayMarginUUpVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcUp/VolDn)',\n    `dayMarginUUpVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcUp/VolUp)',\n    `numStkChildOrders` INT NOT NULL DEFAULT 0,\n    `numFutChildOrders` INT NOT NULL DEFAULT 0,\n    `numOptChildOrders` INT NOT NULL DEFAULT 0,\n    `numMLegChildOrders` INT NOT NULL DEFAULT 0,\n    `counter` INT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`riskControlKey`,`riskControlLevel`,`riskFirm`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Values in this table represent current (live) SpiderRock supervisory risk counters for a corresponding risk control key.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `riskControlKey`,\n    `riskControlLevel`,\n    `riskFirm`,\n    `isTestAccnt`,\n    `sysRealm`,\n    `sysEnvironment`,\n    `riskEngine`,\n    `netDayDDelta`,\n    `absDayDDelta`,\n    `netDayVega`,\n    `absDayVega`,\n    `netDayWtVega`,\n    `absDayWtVega`,\n    `netDayNValue`,\n    `absDayNValue`,\n    `netDayRMetric7`,\n    `absDayRMetric7`,\n    `netDayDDeltaEma`,\n    `netDayWtVegaEma`,\n    `emaTimestamp`,\n    `liveMarginDay`,\n    `liveOpenExposure`,\n    `dayMarginUDnVDn`,\n    `dayMarginUDnVUp`,\n    `dayMarginUUpVDn`,\n    `dayMarginUUpVUp`,\n    `numStkChildOrders`,\n    `numFutChildOrders`,\n    `numOptChildOrders`,\n    `numMLegChildOrders`,\n    `counter`,\n    `timestamp`\nFROM `SRControl`.`MsgSRRiskCounter`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(64) */ \n    `riskControlKey` = 'Example_riskControlKey'\n  AND\n    /* Replace with a ENUM('None','ClientFirm','Accnt','User') */ \n    `riskControlLevel` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='SRRiskCounter' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
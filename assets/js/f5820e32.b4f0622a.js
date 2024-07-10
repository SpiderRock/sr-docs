"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[62300],{6637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var r=n(74848),s=n(28453);const d={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskCounter/SpdrRiskCounter",title:"SpdrRiskCounter",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskCounter/SpdrRiskCounter.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskCounter",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskCounter/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskCounter/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrRiskControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/SpdrRiskControl/"},next:{title:"StockLocateRequest",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequest/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/risk-counter/SpdrRiskCounter",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.p,{children:"Values in this table represent current (live) SpiderRock supervisory risk counters for a corresponding risk control key."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"4625-risk-counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRControl"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"ANYANY represents the entire control group"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"ANYANY represents the entire control group"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"ANYANY represents the entire control group"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"riskControlKey"}),(0,r.jsx)(t.td,{children:"VARCHAR(64)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"must be an SRClientAccnt if riskControlLevelAccnt must be an SRUser if riskControlLevelUser ignored if riskControlLevelClientFirm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"riskControlLevel"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/RiskControlLevel",children:"enum - RiskControlLevel"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"riskFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isTestAccnt"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sysRealm"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SysRealm",children:"enum - SysRealm"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sysEnvironment"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"original source sys environment Stable Current etc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"riskEngine"}),(0,r.jsx)(t.td,{children:"VARCHAR(32)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"EE engine name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netDayDDelta"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"net day Delta"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"absDayDDelta"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"absolute day Delta ddBot  ddSld position"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netDayVega"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"net day Vega per"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"absDayVega"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"absolute day Vega veBot  veSld position"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netDayWtVega"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"net day WtVega"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"absDayWtVega"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"absolute day WtVega wvBot  wvSld position"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netDayNValue"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"net day Notional Value"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"absDayNValue"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"absolute day Notional Value nvBot  nvSld position"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netDayRMetric7"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"net day RiskMetric7"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"absDayRMetric7"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"absolute day RiskMetric7 rm7Bot  rm7Sld position"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netDayDDeltaEma"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"-1"}),(0,r.jsx)(t.td,{children:"60s halflife EMA delta"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netDayWtVegaEma"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"-1"}),(0,r.jsx)(t.td,{children:"60s halflife EMA wtVega"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"emaTimestamp"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"liveMarginDay"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"live net per symbol day portfolio day trades only margin can include external sources"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"liveOpenExposure"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"live abs open child order Delta no netting open child orders only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dayMarginUDnVDn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"day margin UPrcDnVolDn"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dayMarginUDnVUp"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"day margin UPrcDnVolUp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dayMarginUUpVDn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"day margin UPrcUpVolDn"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dayMarginUUpVUp"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"day margin UPrcUpVolUp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numStkChildOrders"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numFutChildOrders"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numOptChildOrders"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numMLegChildOrders"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"counter"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"1900-01-01 00:00:00.000000"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"riskControlKey"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"riskControlLevel"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"riskFirm"}),(0,r.jsx)(t.td,{children:"6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isTestAccnt"}),(0,r.jsx)(t.td,{children:"7"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgSRRiskCounter` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `riskControlKey` VARCHAR(64) NOT NULL DEFAULT '' COMMENT 'must be an SRClientAccnt if riskControlLevel=Accnt; must be an SRUser if riskControlLevel=User; ignored if riskControlLevel=ClientFirm',\n    `riskControlLevel` ENUM('None','ClientFirm','Accnt','User') NOT NULL DEFAULT 'None',\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `sysRealm` ENUM('None','SysTest','NMS','CME','FR2','LD4','DR') NOT NULL DEFAULT 'None',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `riskEngine` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'EE engine name',\n    `netDayDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day $Delta',\n    `absDayDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day $Delta, |ddBot| + |ddSld| position',\n    `netDayVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day Vega per',\n    `absDayVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day Vega, |veBot| + |veSld| position',\n    `netDayWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day WtVega',\n    `absDayWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day WtVega, |wvBot| + |wvSld| position',\n    `netDayNValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day Notional Value',\n    `absDayNValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day Notional Value, |nvBot| + |nvSld| position',\n    `netDayRMetric7` FLOAT NOT NULL DEFAULT 0 COMMENT 'net day RiskMetric7',\n    `absDayRMetric7` FLOAT NOT NULL DEFAULT 0 COMMENT 'absolute day RiskMetric7, |rm7Bot| + |rm7Sld| position',\n    `netDayDDeltaEma` FLOAT NOT NULL DEFAULT -1 COMMENT '60s (half-life) EMA $delta',\n    `netDayWtVegaEma` FLOAT NOT NULL DEFAULT -1 COMMENT '60s (half-life) EMA wtVega',\n    `emaTimestamp` DOUBLE NOT NULL DEFAULT 0,\n    `liveMarginDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'live net (per symbol) day portfolio (day trades only) margin (can include external sources)',\n    `liveOpenExposure` FLOAT NOT NULL DEFAULT 0 COMMENT 'live abs open child order $Delta (no netting) (open child orders only)',\n    `dayMarginUDnVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcDn/VolDn)',\n    `dayMarginUDnVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcDn/VolUp)',\n    `dayMarginUUpVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcUp/VolDn)',\n    `dayMarginUUpVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcUp/VolUp)',\n    `numStkChildOrders` INT NOT NULL DEFAULT 0,\n    `numFutChildOrders` INT NOT NULL DEFAULT 0,\n    `numOptChildOrders` INT NOT NULL DEFAULT 0,\n    `numMLegChildOrders` INT NOT NULL DEFAULT 0,\n    `counter` INT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`riskControlKey`,`riskControlLevel`,`riskFirm`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Values in this table represent current (live) SpiderRock supervisory risk counters for a corresponding risk control key.';\n\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);
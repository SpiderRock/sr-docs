"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[41518],{986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=r(74848),s=r(28453);const i={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/MarRiskCounter",title:"MarRiskCounter",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/MarRiskCounter.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskControlTkOverride",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/"},next:{title:"RiskClassControl",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRControl/RiskClassControl/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/risk-counter/MarRiskCounter",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.p,{children:"Values in this table represent current (live) SpiderRock MAR risk counters for a risk group/risk firm combination.\nA risk group is typically a group of client accounts that have a common beneficial owner.  A risk firm is a firm with control of the corresponding risk settings for the risk group."}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"4625-risk-counter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"ClientControl"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRControl"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"ANYANY represents the entire control group"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_ts"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"ANYANY represents the entire control group"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_tk"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"ANYANY represents the entire control group"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"riskGroup"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"riskFirm"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"client firm that can viewedit this record"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isTestAccnt"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sysRealm"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SysRealm",children:"enum - SysRealm"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sysEnvironment"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"original source sys environment Stable Current etc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"riskEngine"}),(0,t.jsx)(n.td,{children:"VARCHAR(32)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"EE engine name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"liveMarginAcc"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"live net per symbol total portfolio startofday positions  day trades margin can include external sources"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"liveMarginDay"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"live net per symbol day portfolio day trades only margin can include external sources"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"liveOpenExposure"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"live abs open child order Delta no netting open child orders only"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dayFutCnBot"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"day future contracts bot"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dayFutCnSld"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"day future contracts sld"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accFutCnNet"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"accnt future contracts net can be  startofday positions  day trades"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dayMarginUDnVDn"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"day margin UPrcDnVolDn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dayMarginUDnVUp"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"day margin UPrcDnVolUp"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dayMarginUUpVDn"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"day margin UPrcUpVolDn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dayMarginUUpVUp"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"day margin UPrcUpVolUp"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accMarginUDnVDn"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"acc margin UPrcDnVolDn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accMarginUDnVUp"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"acc margin UPrcDnVolUp"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accMarginUUpVDn"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"acc margin UPrcUpVolDn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accMarginUUpVUp"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"acc margin UPrcUpVolUp"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"counter"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{children:"timestamp of latest change"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_tk"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_at"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_ts"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"riskGroup"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"riskFirm"}),(0,t.jsx)(n.td,{children:"5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isTestAccnt"}),(0,t.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgMarRiskCounter` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT '''*-ANY-ANY'' represents the entire control group',\n    `riskGroup` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm that can view/edit this record',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `sysRealm` ENUM('None','SysTest','NMS','CME','FR2','LD4','DR') NOT NULL DEFAULT 'None',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `riskEngine` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'EE engine name',\n    `liveMarginAcc` FLOAT NOT NULL DEFAULT 0 COMMENT 'live net (per symbol) total portfolio (start-of-day positions + day trades) margin (can include external sources)',\n    `liveMarginDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'live net (per symbol) day portfolio (day trades only) margin (can include external sources)',\n    `liveOpenExposure` FLOAT NOT NULL DEFAULT 0 COMMENT 'live abs open child order $Delta (no netting) (open child orders only)',\n    `dayFutCnBot` INT NOT NULL DEFAULT 0 COMMENT 'day future contracts bot',\n    `dayFutCnSld` INT NOT NULL DEFAULT 0 COMMENT 'day future contracts sld',\n    `accFutCnNet` INT NOT NULL DEFAULT 0 COMMENT 'accnt future contracts (net) [can be +/-] (start-of-day positions + day trades)',\n    `dayMarginUDnVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcDn/VolDn)',\n    `dayMarginUDnVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcDn/VolUp)',\n    `dayMarginUUpVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcUp/VolDn)',\n    `dayMarginUUpVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'day margin (UPrcUp/VolUp)',\n    `accMarginUDnVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'acc margin (UPrcDn/VolDn)',\n    `accMarginUDnVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'acc margin (UPrcDn/VolUp)',\n    `accMarginUUpVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'acc margin (UPrcUp/VolDn)',\n    `accMarginUUpVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'acc margin (UPrcUp/VolUp)',\n    `counter` INT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of latest change',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`riskGroup`,`riskFirm`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Values in this table represent current (live) SpiderRock MAR risk counters for a risk group/risk firm combination.\\nA risk group is typically a group of client accounts that have a common beneficial owner.  A risk firm is a firm with control of the corresponding risk settings for the risk group.';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `riskGroup`,\n    `riskFirm`,\n    `isTestAccnt`,\n    `sysRealm`,\n    `sysEnvironment`,\n    `riskEngine`,\n    `liveMarginAcc`,\n    `liveMarginDay`,\n    `liveOpenExposure`,\n    `dayFutCnBot`,\n    `dayFutCnSld`,\n    `accFutCnNet`,\n    `dayMarginUDnVDn`,\n    `dayMarginUDnVUp`,\n    `dayMarginUUpVDn`,\n    `dayMarginUUpVUp`,\n    `accMarginUDnVDn`,\n    `accMarginUDnVUp`,\n    `accMarginUUpVDn`,\n    `accMarginUUpVUp`,\n    `counter`,\n    `timestamp`\nFROM `SRControl`.`MsgMarRiskCounter`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup` = 'Example_riskGroup'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='MarRiskCounter' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var t=r(96540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11565],{69017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=r(74848),n=r(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/MarRiskControlTkOverride",title:"MarRiskControlTkOverride",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/MarRiskControlTkOverride.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/"},next:{title:"MarRiskCounter",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/risk-control/MarRiskControlTkOverride",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"4535-risk-control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRControl"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskGroup"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAccnt"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"if Yes this control applies only to risk from test accnts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stkEnabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"futEnabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"optEnabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blockShortSales"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"block all short sales"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxStkQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"number of equity shares that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxFutQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"number of futures contracts that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxOptQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"number of option contracts that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxStkDDelta"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"maximum abs mny per stock parent order ddelta  001  shares  pointValue  midPrc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxFutDDelta"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"maximum abs mny per future parent order ddelta  001  contracts  pointValue  midPrc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxOptDDelta"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"maximum abs mny per option parent order ddelta  001  contracts  pointValue  ABSde  uMidPrc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stkCollarPct"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"maximum user limit vs bidask price control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"futCollarPct"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"maximum user limit vs bidask price control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"optCollarPct"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"maximum user limit vs bidask price control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxAccFutCnAbs"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"max absolute net accnt future contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxDayFutCnBot"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"day future contracts bot"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxDayFutCnSld"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"day future contracts sld"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxDayFutCnAbs"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"max absolute net day future contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedBy"}),(0,s.jsx)(t.td,{children:"VARCHAR(24)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedIn"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskFirm"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskGroup"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAccnt"}),(0,s.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgMarRiskControlTkOverride` (\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskGroup` VARCHAR(16) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this control applies only to risk from test accnts',\n    `stkEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `futEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `optEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `blockShortSales` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'block all short sales',\n    `orderMaxStkQty` INT NOT NULL DEFAULT 0 COMMENT 'number of equity shares that can be bought or sold by a single parent order',\n    `orderMaxFutQty` INT NOT NULL DEFAULT 0 COMMENT 'number of futures contracts that can be bought or sold by a single parent order',\n    `orderMaxOptQty` INT NOT NULL DEFAULT 0 COMMENT 'number of option contracts that can be bought or sold by a single parent order',\n    `orderMaxStkDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc',\n    `orderMaxFutDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc',\n    `orderMaxOptDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc',\n    `stkCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `futCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `optCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `maxAccFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'max absolute (net) accnt future contracts',\n    `maxDayFutCnBot` INT NOT NULL DEFAULT 0 COMMENT 'day future contracts bot',\n    `maxDayFutCnSld` INT NOT NULL DEFAULT 0 COMMENT 'day future contracts sld',\n    `maxDayFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'max absolute (net) day future contracts',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`riskFirm`,`riskGroup`,`ticker_tk`,`ticker_at`,`ticker_ts`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='MarRiskControlTkOverride records are used to establish ticker-specific risk controls SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records.';\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var s=r(96540);const n={},d=s.createContext(n);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);
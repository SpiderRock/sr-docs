"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11565],{69017:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>T,frontMatter:()=>s,metadata:()=>i,toc:()=>N});var o=t(74848),n=t(28453);const s={title:"MarRiskControlTkOverride"},a=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/MarRiskControlTkOverride",title:"MarRiskControlTkOverride",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/MarRiskControlTkOverride.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MarRiskControlTkOverride"},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/"},next:{title:"MarRiskCounter",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/"}},c={},N=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"../../../Topics/risk-control/MarRiskControlTkOverride",children:"V8 Message Definition"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgMarRiskControlTkOverride` (\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskGroup` VARCHAR(16) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this control applies only to risk from test accnts',\n    `stkEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `futEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `optEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None',\n    `blockShortSales` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'block all short sales',\n    `orderMaxStkQty` INT NOT NULL DEFAULT 0 COMMENT 'number of equity shares that can be bought or sold by a single parent order',\n    `orderMaxFutQty` INT NOT NULL DEFAULT 0 COMMENT 'number of futures contracts that can be bought or sold by a single parent order',\n    `orderMaxOptQty` INT NOT NULL DEFAULT 0 COMMENT 'number of option contracts that can be bought or sold by a single parent order',\n    `orderMaxStkDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc',\n    `orderMaxFutDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc',\n    `orderMaxOptDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc',\n    `stkCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `futCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `optCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'maximum user limit vs bid/ask price control',\n    `maxAccFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'max absolute (net) accnt future contracts',\n    `maxDayFutCnBot` INT NOT NULL DEFAULT 0 COMMENT 'day future contracts bot',\n    `maxDayFutCnSld` INT NOT NULL DEFAULT 0 COMMENT 'day future contracts sld',\n    `maxDayFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'max absolute (net) day future contracts',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`riskFirm`,`riskGroup`,`ticker_tk`,`ticker_at`,`ticker_ts`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='MarRiskControlTkOverride records are used to establish ticker-specific risk controls SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records.';\n\n"})})]})}function T(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var o=t(96540);const n={},s=o.createContext(n);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);
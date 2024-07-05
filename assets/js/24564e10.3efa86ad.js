"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34498],{38092:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>L,frontMatter:()=>n,metadata:()=>m,toc:()=>c});var r=e(74848),a=e(28453);const n={title:"SpdrRiskGroupControl"},o=void 0,m={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/SpdrRiskGroupControl",title:"SpdrRiskGroupControl",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/SpdrRiskGroupControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrRiskGroupControl"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrRiskGroupCancel",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupCancel/"},next:{title:"SpdrRouteCancel",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRouteCancel/"}},s={},c=[];function l(t){const i={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"../../../Topics/risk-control/SpdrRiskGroupControl",children:"V8 Message Definition"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRRiskGroupControl` (\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `isDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'will disable all trading in this risk group (parent orders will cancel existing child orders and suspend new child orders)',\n    `expDayWtVegaOffset` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day wtVega offset (target)',\n    `maxExpDayWtVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max accnt+expiration day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxExpDayWtVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max accnt+expiration day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `maxExpDayRMetric6Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+expiration day rMetric6 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxExpDayRMetric6Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+expiration day rMetric6 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `symDayDDeltaOffset` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day $delta offset (target)',\n    `maxSymDayDDeltaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day $delta long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayDDeltaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day $delta short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `symDayVegaOffset` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day vega offset (target)',\n    `maxSymDayVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `symDayWtVegaOffset` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day wtVega offset (target)',\n    `maxSymDayWtVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayWtVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `maxSymDayRMetric7Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day rMetric7 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxSymDayRMetric7Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day rMetric7 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayContractsLn` INT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day opt contracts long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayContractsSh` INT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day opt contracts short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayContractsAbs` INT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day opt contracts abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `maxGrpDayDDeltaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day $delta long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayDDeltaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day $delta short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day vega long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day vega short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayVegaAbs` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day vega abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `grpDayVegaRatio` FLOAT NOT NULL DEFAULT 1.0 COMMENT 'target bot / sld ratio (eg ratio=2.0 means that neutral is bot vega = 2x sld vega)',\n    `maxGrpDayRMetric1Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric1 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric1Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric1 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric1Abs` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric1 abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `grpDayRMetric1Ratio` FLOAT NOT NULL DEFAULT 1.0 COMMENT 'target bot / sld ratio (eg ratio=0.5 means that neutral is bot rMetric1 = 0.5x sld rMetric1)',\n    `maxGrpDayRMetric2Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric2 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric2Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric2 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric3Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric3 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric3Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric3 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric4Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric4 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric4Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric4 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric5Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric5 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric5Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric5 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `accEmaCxlDDeltaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct 60s EMA $delta long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `accEmaCxlDDeltaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct 60s EMA $delta short (positive number; <= 0 is no limit)',\n    `accEmaCxlWtVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct 60s EMA wtVega long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `accEmaCxlWtVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct 60s EMA wtVega short (positive number; <= 0 is no limit)',\n    `symEmaCxlDDeltaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol 60s EMA $delta long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `symEmaCxlDDeltaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol 60s EMA $delta short (positive number; <= 0 is no limit)',\n    `symEmaCxlWtVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol 60s EMA wtVega long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `symEmaCxlWtVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol 60s EMA wtVega short (positive number; <= 0 is no limit)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`riskGroupId`,`accnt`,`riskFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function L(t={}){const{wrapper:i}={...(0,a.R)(),...t.components};return i?(0,r.jsx)(i,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},28453:(t,i,e)=>{e.d(i,{R:()=>o,x:()=>m});var r=e(96540);const a={},n=r.createContext(a);function o(t){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function m(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),r.createElement(n.Provider,{value:i},t.children)}}}]);
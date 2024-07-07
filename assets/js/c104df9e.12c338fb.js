"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[61015],{76491:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>T,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(74848),a=t(28453);const o={title:"RiskClassControl"},r=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRControl/RiskClassControl/RiskClassControl",title:"RiskClassControl",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/RiskClassControl/RiskClassControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/RiskClassControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/RiskClassControl/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/RiskClassControl/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RiskClassControl"},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskCounter",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/"},next:{title:"SectorControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/SectorControl/"}},l={},c=[];function m(s){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"../../../Topics/client-book-risk/RiskClassControl",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgRiskClassControl` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskClass` VARCHAR(8) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `riskClassLabel` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'risk class label',\n    `maxDDelta` INT NOT NULL DEFAULT 250000 COMMENT 'maximum symbol abs($delta) (suspends c/p trading)',\n    `minVaRs50` INT NOT NULL DEFAULT -50000 COMMENT '(xRM) max loss [underlier +/- 50%]',\n    `maxVaRs50` INT NOT NULL DEFAULT +50000 COMMENT '(xRM) max gain [underlier +/- 50%]',\n    `minVaRs15` INT NOT NULL DEFAULT -10000 COMMENT '(xRM) max loss [underlier +/- 15%]',\n    `maxVaRs15` INT NOT NULL DEFAULT +10000 COMMENT '(xRM) max gain [underlier +/- 15%]',\n    `minWtVega` INT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum symbol net wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `maxWtVega` INT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum symbol net wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `maxWtVePctM1` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max symbol wtVega in M1 {days < 10} expirations',\n    `maxWtVePctM2` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max symbol wtVega in M2 {10 < days < 25} expirations',\n    `maxWtVePctM3` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max symbol wtVega in M3 {25 < days < 65} expirations',\n    `maxWtVePctM4` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max symbol wtVega in M4 {65 < days < 130} expirations',\n    `maxWtVePctM5` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max symbol wtVega in M5 {130 < days} expirations',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`riskClass`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function T(s={}){const{wrapper:e}={...(0,a.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(m,{...s})}):m(s)}},28453:(s,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var n=t(96540);const a={},o=n.createContext(a);function r(s){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:r(s.components),n.createElement(o.Provider,{value:e},s.children)}}}]);
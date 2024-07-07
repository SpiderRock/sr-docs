"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94463],{81025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>T,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var o=n(74848),r=n(28453);const a={title:"ExpirationControl"},i=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/ExpirationControl",title:"ExpirationControl",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/ExpirationControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ExpirationControl"},sidebar:"messageSchemasSidebar",previous:{title:"CustomControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/CustomControl/"},next:{title:"FutureControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/FutureControl/"}},c={},m=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"../../../Topics/client-book-risk/ExpirationControl",children:"V8 Message Definition"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgExpirationControl` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `year` SMALLINT NOT NULL DEFAULT 0,\n    `month` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `day` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `expStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'Hold' COMMENT 'expiration trading control',\n    `minTheta` FLOAT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum net expiry theta',\n    `maxTheta` FLOAT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum net expiry theta',\n    `minWtVega` FLOAT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum net expiry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `maxWtVega` FLOAT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum net expiry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `maxWtVePctDd` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in DD {xde < -0.30} strikes',\n    `maxWtVePctDn` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in DN {-0.30 <= xde < -0.10} strikes',\n    `maxWtVePctAt` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in AT {-0.10 <= xde <= +0.10} strikes',\n    `maxWtVePctUp` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in UP {+0.10 < xde <= +0.30} strikes',\n    `maxWtVePctDu` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in DU {+0.30 < xde} strikes',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`year`,`month`,`day`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function T(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[50132],{99670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),l=t(28453);const s={},r=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/ExpirationControl",title:"ExpirationControl",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/ExpirationControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"CustomControl",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRControl/CustomControl/"},next:{title:"FutureControl",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRControl/FutureControl/"}},d={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../Topics/client-book-risk/ExpirationControl",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"1630-client-book-risk"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"ClientControl"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Product"}),(0,i.jsx)(n.td,{children:"SRControl"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessType"}),(0,i.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"year"}),(0,i.jsx)(n.td,{children:"SMALLINT"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"month"}),(0,i.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"day"}),(0,i.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"SR client firm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expStatus"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/OptStatus",children:"enum - OptStatus"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'Hold'"}),(0,i.jsx)(n.td,{children:"expiration trading control"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minTheta"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"xRM minimum net expiry theta"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxTheta"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"+1000"}),(0,i.jsx)(n.td,{children:"xRM maximum net expiry theta"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"xRM minimum net expiry wtVegawtVega  ve  vol  sqrtmax01 years  4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"+1000"}),(0,i.jsx)(n.td,{children:"xRM maximum net expiry wtVegawtVega  ve  vol  sqrtmax01 years  4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctDd"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax expiry wtVega in DD xde  030 strikes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctDn"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax expiry wtVega in DN 030  xde  010 strikes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctAt"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax expiry wtVega in AT 010  xde  010 strikes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctUp"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax expiry wtVega in UP 010  xde  030 strikes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctDu"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax expiry wtVega in DU 030  xde strikes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modifiedBy"}),(0,i.jsx)(n.td,{children:"VARCHAR(24)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"user who last modified this record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modifiedIn"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timestamp"}),(0,i.jsx)(n.td,{children:"DATETIME(6)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Sequence"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"year"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"month"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"day"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgExpirationControl` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `year` SMALLINT NOT NULL DEFAULT 0,\n    `month` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `day` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `expStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'Hold' COMMENT 'expiration trading control',\n    `minTheta` FLOAT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum net expiry theta',\n    `maxTheta` FLOAT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum net expiry theta',\n    `minWtVega` FLOAT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum net expiry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `maxWtVega` FLOAT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum net expiry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `maxWtVePctDd` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in DD {xde < -0.30} strikes',\n    `maxWtVePctDn` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in DN {-0.30 <= xde < -0.10} strikes',\n    `maxWtVePctAt` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in AT {-0.10 <= xde <= +0.10} strikes',\n    `maxWtVePctUp` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in UP {+0.10 < xde <= +0.30} strikes',\n    `maxWtVePctDu` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max expiry wtVega in DU {+0.30 < xde} strikes',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`year`,`month`,`day`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `year`,\n    `month`,\n    `day`,\n    `clientFirm`,\n    `expStatus`,\n    `minTheta`,\n    `maxTheta`,\n    `minWtVega`,\n    `maxWtVega`,\n    `maxWtVePctDd`,\n    `maxWtVePctDn`,\n    `maxWtVePctAt`,\n    `maxWtVePctUp`,\n    `maxWtVePctDu`,\n    `timestamp`\nFROM `SRControl`.`MsgExpirationControl`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a SMALLINT */ \n    `year` = 0\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `month` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `day` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgExpirationControl` \nSET\n    /* Replace with a ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') */\n    `expStatus` = 'Hold',\n    /* Replace with a FLOAT */\n    `minTheta` = 1.23,\n    /* Replace with a FLOAT */\n    `maxTheta` = 1.23,\n    /* Replace with a FLOAT */\n    `minWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctDd` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctDn` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctAt` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctUp` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctDu` = 1.23,\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a SMALLINT */ \n    `year` = 0\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `month` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `day` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgExpirationControl`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a SMALLINT */ \n    `year`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `month`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `day`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') */\n    `expStatus`,\n    /* Replace with a FLOAT */\n    `minTheta`,\n    /* Replace with a FLOAT */\n    `maxTheta`,\n    /* Replace with a FLOAT */\n    `minWtVega`,\n    /* Replace with a FLOAT */\n    `maxWtVega`,\n    /* Replace with a FLOAT */\n    `maxWtVePctDd`,\n    /* Replace with a FLOAT */\n    `maxWtVePctDn`,\n    /* Replace with a FLOAT */\n    `maxWtVePctAt`,\n    /* Replace with a FLOAT */\n    `maxWtVePctUp`,\n    /* Replace with a FLOAT */\n    `maxWtVePctDu`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    0,\n    1,\n    1,\n    'Example_clientFirm',\n    'Hold',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgExpirationControl` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a SMALLINT */ \n    `year` = 0\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `month` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `day` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='ExpirationControl' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const l={},s=i.createContext(l);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
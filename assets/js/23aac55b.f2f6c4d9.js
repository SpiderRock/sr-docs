"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11009],{24053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(74848),l=t(28453);const a={},s=void 0,r={id:"MessageSchemas/Schema/SRSE Products/SRControl/BookControl/BookControl",title:"BookControl",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/BookControl/BookControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/BookControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/BookControl/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/BookControl/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AwayStockLocateGateway",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/AwayStockLocateGateway/"},next:{title:"ClientAccntStrategyMap",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccntStrategyMap/"}},c={},d=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../Topics/client-book-risk/BookControl",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"1630-client-book-risk"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"ClientControl"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Product"}),(0,i.jsx)(n.td,{children:"SRControl"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessType"}),(0,i.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"SR client firm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bookStatus"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/BookStatus",children:"enum - BookStatus"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'TwoWay'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bookRiskMultiplier"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"1.0"}),(0,i.jsx)(n.td,{children:"book risk multiplier xRM"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxAccHaircut"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"1000000"}),(0,i.jsx)(n.td,{children:"xRM max preexpiration target haircut 3750"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minAccRho"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"minimum accnt rho ddInt"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxAccRho"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"+1000"}),(0,i.jsx)(n.td,{children:"maximum accnt rho ddInt"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minDDelta"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"1000000"}),(0,i.jsx)(n.td,{children:"min accnt delta"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxDDelta"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"1000000"}),(0,i.jsx)(n.td,{children:"max accnt delta"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxAccAbsWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10000"}),(0,i.jsx)(n.td,{children:"xRM max account abs wtVega sum of abssymbol net wtVegawtVega  ve  vol  sqrtmax01 years  4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minAccWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"xRM minimum accnt net wtVega"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxAccWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"+1000"}),(0,i.jsx)(n.td,{children:"xRM maximum accnt net wtVega"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minIndWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"xRM minimum ind 0 net wtVega applies to each industry unless overriden by an IndustryControl record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxIndWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"+1000"}),(0,i.jsx)(n.td,{children:"xRM maximum ind 0 net wtVega applies to each industry unless overriden by an IndustryControl record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minSubWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"xRM minimum sub 00 net wtVega applies to each subIndustry unless overriden by an IndustryControl record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxSubWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"+1000"}),(0,i.jsx)(n.td,{children:"xRM maximum sub 00 net wtVega applies to each subIndustry unless overriden by an IndustryControl record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minGrpWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"xRM minimum grp 000 net wtVega applies to each indGroup unless overriden by an IndustryControl record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxGrpWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"+1000"}),(0,i.jsx)(n.td,{children:"xRM maximum grp 000 net wtVega applies to each indGroup unless overriden by an IndustryControl record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userText"}),(0,i.jsx)(n.td,{children:"TINYTEXT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"free form text"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modifiedBy"}),(0,i.jsx)(n.td,{children:"VARCHAR(24)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"user who last modified this record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modifiedIn"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timestamp"}),(0,i.jsx)(n.td,{children:"DATETIME(6)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Sequence"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgBookControl` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `bookStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'TwoWay',\n    `bookRiskMultiplier` FLOAT NOT NULL DEFAULT 1.0 COMMENT 'book risk multiplier (xRM)',\n    `maxAccHaircut` FLOAT NOT NULL DEFAULT 1000000 COMMENT '(xRM) max pre-expiration target haircut ($37.50)',\n    `minAccRho` FLOAT NOT NULL DEFAULT -1000 COMMENT 'minimum accnt rho (d$/dInt)',\n    `maxAccRho` FLOAT NOT NULL DEFAULT +1000 COMMENT 'maximum accnt rho (d$/dInt)',\n    `minDDelta` INT NOT NULL DEFAULT 1000000 COMMENT 'min accnt $delta',\n    `maxDDelta` INT NOT NULL DEFAULT 1000000 COMMENT 'max accnt $delta',\n    `maxAccAbsWtVega` FLOAT NOT NULL DEFAULT 10000 COMMENT '(xRM) max account abs wtVega (sum of abs{symbol net wtVega});wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `minAccWtVega` FLOAT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum accnt net wtVega',\n    `maxAccWtVega` FLOAT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum accnt net wtVega',\n    `minIndWtVega` FLOAT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum ind (0) net wtVega (applies to each industry unless overriden by an IndustryControl record)',\n    `maxIndWtVega` FLOAT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum ind (0) net wtVega (applies to each industry unless overriden by an IndustryControl record)',\n    `minSubWtVega` FLOAT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum sub (00) net wtVega (applies to each subIndustry unless overriden by an IndustryControl record)',\n    `maxSubWtVega` FLOAT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum sub (00) net wtVega (applies to each subIndustry unless overriden by an IndustryControl record)',\n    `minGrpWtVega` FLOAT NOT NULL DEFAULT -1000 COMMENT '(xRM) minimum grp (000) net wtVega (applies to each indGroup unless overriden by an IndustryControl record)',\n    `maxGrpWtVega` FLOAT NOT NULL DEFAULT +1000 COMMENT '(xRM) maximum grp (000) net wtVega (applies to each indGroup unless overriden by an IndustryControl record)',\n    `userText` TINYTEXT NOT NULL DEFAULT '' COMMENT 'free form text',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFirm`,\n    `bookStatus`,\n    `bookRiskMultiplier`,\n    `maxAccHaircut`,\n    `minAccRho`,\n    `maxAccRho`,\n    `minDDelta`,\n    `maxDDelta`,\n    `maxAccAbsWtVega`,\n    `minAccWtVega`,\n    `maxAccWtVega`,\n    `minIndWtVega`,\n    `maxIndWtVega`,\n    `minSubWtVega`,\n    `maxSubWtVega`,\n    `minGrpWtVega`,\n    `maxGrpWtVega`,\n    `userText`,\n    `timestamp`\nFROM `SRControl`.`MsgBookControl`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgBookControl` \nSET\n    /* Replace with a ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') */\n    `bookStatus` = 'TwoWay',\n    /* Replace with a FLOAT */\n    `bookRiskMultiplier` = 1.23,\n    /* Replace with a FLOAT */\n    `maxAccHaircut` = 1.23,\n    /* Replace with a FLOAT */\n    `minAccRho` = 1.23,\n    /* Replace with a FLOAT */\n    `maxAccRho` = 1.23,\n    /* Replace with a INT */\n    `minDDelta` = 5,\n    /* Replace with a INT */\n    `maxDDelta` = 5,\n    /* Replace with a FLOAT */\n    `maxAccAbsWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `minAccWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `maxAccWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `minIndWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `maxIndWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `minSubWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSubWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `minGrpWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpWtVega` = 1.23,\n    /* Replace with a TINYTEXT */\n    `userText` = 'dummy tiny text',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgBookControl`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') */\n    `bookStatus`,\n    /* Replace with a FLOAT */\n    `bookRiskMultiplier`,\n    /* Replace with a FLOAT */\n    `maxAccHaircut`,\n    /* Replace with a FLOAT */\n    `minAccRho`,\n    /* Replace with a FLOAT */\n    `maxAccRho`,\n    /* Replace with a INT */\n    `minDDelta`,\n    /* Replace with a INT */\n    `maxDDelta`,\n    /* Replace with a FLOAT */\n    `maxAccAbsWtVega`,\n    /* Replace with a FLOAT */\n    `minAccWtVega`,\n    /* Replace with a FLOAT */\n    `maxAccWtVega`,\n    /* Replace with a FLOAT */\n    `minIndWtVega`,\n    /* Replace with a FLOAT */\n    `maxIndWtVega`,\n    /* Replace with a FLOAT */\n    `minSubWtVega`,\n    /* Replace with a FLOAT */\n    `maxSubWtVega`,\n    /* Replace with a FLOAT */\n    `minGrpWtVega`,\n    /* Replace with a FLOAT */\n    `maxGrpWtVega`,\n    /* Replace with a TINYTEXT */\n    `userText`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'Example_clientFirm',\n    'TwoWay',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    5,\n    5,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'dummy tiny text',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgBookControl` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='BookControl' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const l={},a=i.createContext(l);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13984],{12753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const d={},l=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRControl/IndustryControl/IndustryControl",title:"IndustryControl",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/IndustryControl/IndustryControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/IndustryControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/IndustryControl/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/IndustryControl/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"GlobalRiskControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/GlobalRiskControl/"},next:{title:"MarRiskControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/"}},r={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../Topics/client-book-risk/IndustryControl",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"1630-client-book-risk"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"SystemData"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Product"}),(0,i.jsx)(n.td,{children:"SRControl"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessType"}),(0,i.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"icode"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"can be 1 2 or 3 digits"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"SR client firm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"indStatus"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/OptStatus",children:"enum - OptStatus"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'TwoWay'"}),(0,i.jsx)(n.td,{children:"industry trading control"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-2000"}),(0,i.jsx)(n.td,{children:"xRM minimum net industry wtVegawtVega  ve  vol  sqrtmax01 years  4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVega"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"+2000"}),(0,i.jsx)(n.td,{children:"xRM maximum net industry wtVegawtVega  ve  vol  sqrtmax01 years  4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctM1"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax industry wtVega in M1 days  10 expirations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctM2"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax industry wtVega in M2 10  days  25 expirations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctM3"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax industry wtVega in M3 25  days  65 expirations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctM4"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax industry wtVega in M4 65  days  128 expirations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWtVePctM5"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"of minmax industry wtVega in M5 128  days expirations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modifiedBy"}),(0,i.jsx)(n.td,{children:"VARCHAR(24)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"user who last modified this record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modifiedIn"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timestamp"}),(0,i.jsx)(n.td,{children:"DATETIME(6)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Sequence"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"icode"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgIndustryControl` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `icode` INT NOT NULL DEFAULT 0 COMMENT 'can be 1, 2, or 3 digits',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `indStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'TwoWay' COMMENT 'industry trading control',\n    `minWtVega` FLOAT NOT NULL DEFAULT -2000 COMMENT '(xRM) minimum net industry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `maxWtVega` FLOAT NOT NULL DEFAULT +2000 COMMENT '(xRM) maximum net industry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))',\n    `maxWtVePctM1` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max industry wtVega in M1 {days < 10} expirations',\n    `maxWtVePctM2` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max industry wtVega in M2 {10 < days < 25} expirations',\n    `maxWtVePctM3` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max industry wtVega in M3 {25 < days < 65} expirations',\n    `maxWtVePctM4` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max industry wtVega in M4 {65 < days < 128} expirations',\n    `maxWtVePctM5` FLOAT NOT NULL DEFAULT 100 COMMENT '% of min/max industry wtVega in M5 {128 < days} expirations',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`icode`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `icode`,\n    `clientFirm`,\n    `indStatus`,\n    `minWtVega`,\n    `maxWtVega`,\n    `maxWtVePctM1`,\n    `maxWtVePctM2`,\n    `maxWtVePctM3`,\n    `maxWtVePctM4`,\n    `maxWtVePctM5`,\n    `modifiedBy`,\n    `modifiedIn`,\n    `timestamp`\nFROM `SRControl`.`MsgIndustryControl`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a INT */ \n    `icode` = 5\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgIndustryControl` \nSET\n    /* Replace with a ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') */\n    `indStatus` = 'TwoWay',\n    /* Replace with a FLOAT */\n    `minWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVega` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctM1` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctM2` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctM3` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctM4` = 1.23,\n    /* Replace with a FLOAT */\n    `maxWtVePctM5` = 1.23,\n    /* Replace with a VARCHAR(24) */ \n    `modifiedBy` = 'Example_modifiedBy',\n    /* Replace with a ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') */ \n    `modifiedIn` = 'None',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a INT */ \n    `icode` = 5\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgIndustryControl`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a INT */ \n    `icode`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') */\n    `indStatus`,\n    /* Replace with a FLOAT */\n    `minWtVega`,\n    /* Replace with a FLOAT */\n    `maxWtVega`,\n    /* Replace with a FLOAT */\n    `maxWtVePctM1`,\n    /* Replace with a FLOAT */\n    `maxWtVePctM2`,\n    /* Replace with a FLOAT */\n    `maxWtVePctM3`,\n    /* Replace with a FLOAT */\n    `maxWtVePctM4`,\n    /* Replace with a FLOAT */\n    `maxWtVePctM5`,\n    /* Replace with a VARCHAR(24) */ \n    `modifiedBy`,\n    /* Replace with a ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') */ \n    `modifiedIn`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    5,\n    'Example_clientFirm',\n    'TwoWay',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'Example_modifiedBy',\n    'None',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgIndustryControl` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a INT */ \n    `icode` = 5\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const s={},d=i.createContext(s);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);
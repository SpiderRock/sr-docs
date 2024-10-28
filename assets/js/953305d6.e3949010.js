"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11404],{53356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(74848),s=t(28453);const i={},l=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRControl/UserRateOverride/UserRateOverride",title:"UserRateOverride",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/UserRateOverride/UserRateOverride.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/UserRateOverride",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/UserRateOverride/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/UserRateOverride/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"UserDividendOverride",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/UserDividendOverride/"},next:{title:"UserSDivOverride",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/UserSDivOverride/"}},a={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (CurveList)",id:"json-block-curvelist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/option-pricing/UserRateOverride",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"Records in this table override SpiderRock global discount rate values in option pricing calculations.\\nNote: Expiry dates that fall between years values below will be interpolated using a cubic spline on (days * rate)"}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"3585-option-pricing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"ClientControl"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRControl"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"user detail if any"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CurveList"}),(0,r.jsx)(n.td,{children:"JSON"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"json-block-curvelist",children:"JSON Block (CurveList)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"days"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/days",children:"enum - days"})}),(0,r.jsx)(n.td,{children:"calendar days to expiration actual365 days per year"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/rate",children:"enum - rate"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lnRate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/lnRate",children:"enum - lnRate"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shRate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/shRate",children:"enum - shRate"})}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgUserRateOverride` (\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `text` TINYTEXT NOT NULL DEFAULT '' COMMENT 'user detail (if any)',\n    `CurveList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(CurveList)),\n    PRIMARY KEY USING HASH (`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records in this table override SpiderRock global discount rate values in option pricing calculations.\\nNote: Expiry dates that fall between years values below will be interpolated using a cubic spline on (days * rate)';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `clientFirm`,\n    `timestamp`,\n    `text`,\n    `CurveList`\nFROM `SRControl`.`MsgUserRateOverride`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgUserRateOverride` \nSET\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000',\n    /* Replace with a TINYTEXT */ \n    `text` = 'dummy tiny text',\n    /* Replace with a JSON */\n    `CurveList` = '{\"key\": \"value\"}'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgUserRateOverride`(\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`,\n    /* Replace with a TINYTEXT */ \n    `text`,\n    /* Replace with a JSON */\n    `CurveList`\n) \nVALUES(\n    'Example_clientFirm',\n    '2022-01-01 12:34:56.000000',\n    'dummy tiny text',\n    '{\"key\": \"value\"}'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgUserRateOverride` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='UserRateOverride' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
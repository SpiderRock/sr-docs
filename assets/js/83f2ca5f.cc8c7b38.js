"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64741],{24673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var l=t(74848),i=t(28453);const c={},r=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRControl/ClientAccountConfig/ClientAccountConfig",title:"ClientAccountConfig",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccountConfig/ClientAccountConfig.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/ClientAccountConfig",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccountConfig/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccountConfig/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ClientAccntStrategyMap",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/ClientAccntStrategyMap/"},next:{title:"ClientStockLocate",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/ClientStockLocate/"}},d={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"../../../Topics/client-config/ClientAccountConfig",children:"V8 Message Definiton"})}),"\n",(0,l.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Topic"}),(0,l.jsx)(n.td,{children:"1800-client-config"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MLink Token"}),(0,l.jsx)(n.td,{children:"ClientControl"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Product"}),(0,l.jsx)(n.td,{children:"SRControl"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accessType"}),(0,l.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Key"}),(0,l.jsx)(n.th,{children:"Default Value"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accnt"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"SR assigned client firm acronym"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientTags"}),(0,l.jsx)(n.td,{children:"TEXT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"optional user defined account tags eg tagtagtagtag max of 10000 total chars including seps"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"proxyFirm1"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"proxy firm 1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"proxyFirm2"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"proxy firm 2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"proxyFirm3"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"proxy firm 3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"theoModel"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"theo model empty  use default from SR account config"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"theoModel2"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"theo model2 empty  use default from SR account config"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"hedgeDeltaRule"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/HedgeDeltaRule",children:"enum - HedgeDeltaRule"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{children:"HedgeDelta Source IVol  use SR implied surface sticky strike IvS  use SR surface dynamic TVol  use user supplied theo surface sticky strike TvS  use user supplied theo surface dynamic AccountConfighedgeDelta"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"binaryDays"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"-1"}),(0,l.jsx)(n.td,{children:"used to force delta calcs binary prior to expiration 1  use SR account config value can be overridden by SymbolControlbinaryDays"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accntColor"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"color used to display this account"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"modifiedBy"}),(0,l.jsx)(n.td,{children:"VARCHAR(24)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"user who last modified this record"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"modifiedIn"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"timestamp"}),(0,l.jsx)(n.td,{children:"DATETIME(6)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,l.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Sequence"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accnt"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgClientAccountConfig` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm acronym',\n    `clientTags` TEXT NOT NULL DEFAULT '' COMMENT '(optional) user defined account tag(s) (eg. tag,tag,tag,tag) [max of 10,000 total chars (including seps)]' CHECK(LENGTH(clientTags) <= 10000),\n    `proxyFirm1` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'proxy firm #1',\n    `proxyFirm2` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'proxy firm #2',\n    `proxyFirm3` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'proxy firm #3',\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'theo model (empty = use default from SR account config)',\n    `theoModel2` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'theo model2 (empty = use default from SR account config)',\n    `hedgeDeltaRule` ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') NOT NULL DEFAULT 'None' COMMENT 'HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (dynamic), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface (dynamic)) [AccountConfig.hedgeDelta]',\n    `binaryDays` FLOAT NOT NULL DEFAULT -1 COMMENT 'used to force delta calcs binary prior to expiration (-1 = use SR account config value) (can be overridden by SymbolControl.binaryDays)',\n    `accntColor` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'color used to display this account',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFirm`,\n    `clientTags`,\n    `proxyFirm1`,\n    `proxyFirm2`,\n    `proxyFirm3`,\n    `theoModel`,\n    `theoModel2`,\n    `hedgeDeltaRule`,\n    `binaryDays`,\n    `accntColor`,\n    `timestamp`\nFROM `SRControl`.`MsgClientAccountConfig`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgClientAccountConfig` \nSET\n    /* Replace with a TEXT */ \n    `clientTags` = 'dummy text',\n    /* Replace with a VARCHAR(16) */ \n    `proxyFirm1` = 'Example_proxyFirm1',\n    /* Replace with a VARCHAR(16) */ \n    `proxyFirm2` = 'Example_proxyFirm2',\n    /* Replace with a VARCHAR(16) */ \n    `proxyFirm3` = 'Example_proxyFirm3',\n    /* Replace with a VARCHAR(16) */\n    `theoModel` = 'Example_theoModel',\n    /* Replace with a VARCHAR(16) */\n    `theoModel2` = 'Example_theoModel2',\n    /* Replace with a ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') */\n    `hedgeDeltaRule` = 'None',\n    /* Replace with a FLOAT */\n    `binaryDays` = 1.23,\n    /* Replace with a VARCHAR(16) */\n    `accntColor` = 'Example_accntColor',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgClientAccountConfig`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a TEXT */ \n    `clientTags`,\n    /* Replace with a VARCHAR(16) */ \n    `proxyFirm1`,\n    /* Replace with a VARCHAR(16) */ \n    `proxyFirm2`,\n    /* Replace with a VARCHAR(16) */ \n    `proxyFirm3`,\n    /* Replace with a VARCHAR(16) */\n    `theoModel`,\n    /* Replace with a VARCHAR(16) */\n    `theoModel2`,\n    /* Replace with a ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') */\n    `hedgeDeltaRule`,\n    /* Replace with a FLOAT */\n    `binaryDays`,\n    /* Replace with a VARCHAR(16) */\n    `accntColor`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'Example_clientFirm',\n    'dummy text',\n    'Example_proxyFirm1',\n    'Example_proxyFirm2',\n    'Example_proxyFirm3',\n    'Example_theoModel',\n    'Example_theoModel2',\n    'None',\n    1.23,\n    'Example_accntColor',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgClientAccountConfig` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='ClientAccountConfig' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var l=t(96540);const i={},c=l.createContext(i);function r(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27971],{55683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=t(74848),r=t(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRControl/AccountRouteConfig/AccountRouteConfig",title:"AccountRouteConfig",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/AccountRouteConfig/AccountRouteConfig.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/AccountRouteConfig",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/AccountRouteConfig/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/AccountRouteConfig/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/"},next:{title:"AltSymbolMap",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (ClearingFlipList)",id:"json-block-clearingfliplist",level:3},{value:"JSON Block (ExchControlList)",id:"json-block-exchcontrollist",level:3},{value:"JSON Block (ExecBrkrAccntsList)",id:"json-block-execbrkraccntslist",level:3},{value:"JSON Block (RoutingTableList)",id:"json-block-routingtablelist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/client-config/AccountRouteConfig",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"1800-client-config"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"SystemData"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRControl"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"SR assigned accnt code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"execBrkrCode"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"SR execBrkrCode SR Assigned"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"SR assigned client firm acronym"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enabled"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"yesroute enabled"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"relationship"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/RelationshipType",children:"enum - RelationshipType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"catDestFirmIMID"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"Destination Firm IMID supplied by FINRA fbo destination can be BD or Exchange"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"catDestDeptType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/CatDeptType",children:"enum - CatDeptType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"CAT destination department type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"routingRule"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/RoutingRule",children:"enum - RoutingRule"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"backupRouteCode"}),(0,s.jsx)(n.td,{children:"VARCHAR(65)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"backup route code if above are unavailable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"externParams"}),(0,s.jsx)(n.td,{children:"TINYTEXT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"pass through params must be understood by end point handler usually tagvaluetagvaluetagvalue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"comment"}),(0,s.jsx)(n.td,{children:"TINYTEXT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"maintainer commments"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifiedBy"}),(0,s.jsx)(n.td,{children:"VARCHAR(24)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifiedIn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{children:"timestamp of last modification"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ClearingFlipList"}),(0,s.jsx)(n.td,{children:"JSON"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ExchControlList"}),(0,s.jsx)(n.td,{children:"JSON"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ExecBrkrAccntsList"}),(0,s.jsx)(n.td,{children:"JSON"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RoutingTableList"}),(0,s.jsx)(n.td,{children:"JSON"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"execBrkrCode"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"json-block-clearingfliplist",children:"JSON Block (ClearingFlipList)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exchGroup"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/exchGroup",children:"enum - exchGroup"})}),(0,s.jsx)(n.td,{children:"eg NMS CMX ICE EUREX"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/secType",children:"enum - secType"})}),(0,s.jsx)(n.td,{children:"eg Stock Future Option"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exchStr"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"can be  or specific exchStr eg CBOEOPT  will be used only if there isnt a more specific match"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clrFlipType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/clrFlipType",children:"enum - clrFlipType"})}),(0,s.jsx)(n.td,{children:"type of clearing corp delivery"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clrFlipFirm"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"deliverTo clearing member eg OCC NSCC MPID or InstitutionID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clrFlipAccnt"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"deliverTo client account eg OCC AID or a DVP FBO code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clrAgent"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"deliverTo agent eg DVP Agent Bank ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clrTaxID"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"deliverTo taxID eg DVP TaxID"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"json-block-exchcontrollist",children:"JSON Block (ExchControlList)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exDest"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"exchange eg NYSESTK CBOEOPT AMEXCOB NMSOPT NMSSTK NMSCOB CMXFUT or custom eg INETNIGHTHAWK"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"disable"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/disable",children:"enum - disable"})}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"json-block-execbrkraccntslist",children:"JSON Block (ExecBrkrAccntsList)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exchGroup"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/exchGroup",children:"enum - exchGroup"})}),(0,s.jsx)(n.td,{children:"eg NMS CMX ICE EUREX NONEANY"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/secType",children:"enum - secType"})}),(0,s.jsx)(n.td,{children:"eg Stock Future Option NONEANY"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"execBrkrAccnt"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"exec broker account supplied by exec broker usually Account1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"execBrkrClFirm"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"exec broker clientfirm supplied by exec broker usually OnBehalfOfCompId115"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"execBrkrUserName"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"exec broker user name supplied by exec broker"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"json-block-routingtablelist",children:"JSON Block (RoutingTableList)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"routingCode"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"routing session code is a RouteDefinitionpkeyroutingCode RouteDefinitionexecBrkrCode must match execBrkrCode"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cobTied"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/cobTied",children:"enum - cobTied"})}),(0,s.jsx)(n.td,{children:"can handle COB MLegAB orders tied to an underlier must be yes here and also must be yes on the underling route definitionexDest"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgAccountRouteConfig` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned accnt code',\n    `execBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR execBrkrCode (SR Assigned)',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm acronym',\n    `enabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'yes=route enabled',\n    `relationship` ENUM('None','EXSMember','EXSRouter','EXSTech','Platform','SRConnect','Advisor') NOT NULL DEFAULT 'None',\n    `catDestFirmIMID` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'Destination Firm IMID (supplied by FINRA fbo destination; can be B/D or Exchange)',\n    `catDestDeptType` ENUM('None','Exchange','Agency','ATS','DMA','Sponsored','Trading','Other') NOT NULL DEFAULT 'None' COMMENT 'CAT destination department type',\n    `routingRule` ENUM('None','RoundRobin','InOrder') NOT NULL DEFAULT 'None',\n    `backupRouteCode` VARCHAR(65) NOT NULL DEFAULT '' COMMENT 'backup route code (if above are unavailable)',\n    `externParams` TINYTEXT NOT NULL DEFAULT '' COMMENT 'pass through params (must be understood by end point handler) usually [tag=value;tag=value;tag=value]',\n    `comment` TINYTEXT NOT NULL DEFAULT '' COMMENT 'maintainer commments',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    `ClearingFlipList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(ClearingFlipList)),\n    `ExchControlList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(ExchControlList)),\n    `ExecBrkrAccntsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(ExecBrkrAccntsList)),\n    `RoutingTableList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(RoutingTableList)),\n    PRIMARY KEY USING HASH (`accnt`,`execBrkrCode`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `execBrkrCode`,\n    `clientFirm`,\n    `enabled`,\n    `relationship`,\n    `catDestFirmIMID`,\n    `catDestDeptType`,\n    `routingRule`,\n    `backupRouteCode`,\n    `externParams`,\n    `comment`,\n    `timestamp`,\n    `ClearingFlipList`,\n    `ExchControlList`,\n    `ExecBrkrAccntsList`,\n    `RoutingTableList`\nFROM `SRControl`.`MsgAccountRouteConfig`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `execBrkrCode` = 'Example_execBrkrCode'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='AccountRouteConfig' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);
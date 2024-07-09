"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[33786],{7534:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=s(74848),d=s(28453);const r={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/OptAwayTktGateway/OptAwayTktGateway",title:"OptAwayTktGateway",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptAwayTktGateway/OptAwayTktGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/OptAwayTktGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/OptAwayTktGateway/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptAwayTktGateway/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"NoticeResponse",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/NoticeResponse/"},next:{title:"OptOrderGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderGateway/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/srse-gateway/OptAwayTktGateway",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"5120-srse-gateway"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SystemData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRTrade"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientFillID"}),(0,n.jsx)(t.td,{children:"BIGINT"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"client execution ID these must be unique on a peraccount basis copied into SpdrParentExecutionaltFillId"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientOrderID"}),(0,n.jsx)(t.td,{children:"VARCHAR(24)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"client orderID copied into SpdrParentExecutionaltOrderId"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"riskGroupId"}),(0,n.jsx)(t.td,{children:"CHAR(19)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Default 0 none  Required to be nonzero if incorporating risk into an existing riskGroupId"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reqAuxRiskGroupCtrl"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"okey_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"okey_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"okey_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"okey_yr"}),(0,n.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"okey_mn"}),(0,n.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"okey_dy"}),(0,n.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"okey_xx"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"okey_cp"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fillSide"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fillPrice"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fillQuantity"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fillRefUPrc"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"reference underlier price  fill arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"priceType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PriceType",children:"enum - PriceType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"positionType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"theoVol"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"client supplied theoretical volatility used for markup only"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"deliverExecReport"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Drop a copy of the execution report"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRfillID"}),(0,n.jsx)(t.td,{children:"BIGINT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"SR internal fill number any values submitted will be overwritten by the SR generated fill number copied in SpdrParentExecutionpkeyfillNumber"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"comment"}),(0,n.jsx)(t.td,{children:"VARCHAR(64)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"text comment if any"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"execBrkr"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"used to reflect field from a downstream destination back up to and upstream fill report"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"userData1"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"userData2"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"strategy"}),(0,n.jsx)(t.td,{children:"VARCHAR(36)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"clientsupplied strategy string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fillDttm"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"checksum"}),(0,n.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Must be set to 13  This helps detect some columnvalue misalignments"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientFillID"}),(0,n.jsx)(t.td,{children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgOptAwayTktGateway` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFillID` BIGINT NOT NULL DEFAULT 0 COMMENT 'client execution ID, these must be unique on a per-account basis [copied into SpdrParentExecution.altFillId]',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientOrderID` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'client orderID [copied into SpdrParentExecution.altOrderId]',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'Default: 0 (none).  Required to be non-zero if incorporating risk into an existing riskGroupId',\n    `reqAuxRiskGroupCtrl` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `fillSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `fillPrice` DOUBLE NOT NULL DEFAULT 0,\n    `fillQuantity` INT NOT NULL DEFAULT 0,\n    `fillRefUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier price @ fill arrival time',\n    `priceType` ENUM('None','Explicit','Offset','Zero') NOT NULL DEFAULT 'Explicit',\n    `positionType` ENUM('None','Opening','Closing') NOT NULL DEFAULT 'None',\n    `theoVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'client supplied theoretical volatility (used for markup only)',\n    `deliverExecReport` ENUM('Yes','No') NOT NULL DEFAULT 'No' COMMENT 'Drop a copy of the execution report',\n    `SRfillID` BIGINT NOT NULL DEFAULT 0 COMMENT 'SR internal fill number, any values submitted will be overwritten by the SR generated fill number [copied in SpdrParentExecution.pkey.fillNumber]',\n    `comment` VARCHAR(64) NOT NULL DEFAULT '' COMMENT 'text comment (if any)',\n    `execBrkr` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'used to reflect field from a downstream destination back up to and upstream fill report',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'client-supplied strategy string',\n    `fillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `checksum` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Must be set to 13.  This helps detect some column,value misalignments.',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`clientFillID`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='OptAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.\\nReplaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed.';\n\n"})})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const d={},r=n.createContext(d);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
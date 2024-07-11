"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21469],{29202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var s=n(74848),d=n(28453);const r={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSecKeyCancel/SpdrSecKeyCancel",title:"SpdrSecKeyCancel",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSecKeyCancel/SpdrSecKeyCancel.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSecKeyCancel",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSecKeyCancel/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSecKeyCancel/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrRouteCancel",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRouteCancel/"},next:{title:"SpdrSetActiveSize",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSetActiveSize/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/parent-orders/SpdrSecKeyCancel",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.p,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"3985-parent-orders"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Default Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"SR trading account"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_yr"}),(0,s.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_mn"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_dy"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_xx"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_cp"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'Call'"}),(0,s.jsx)(t.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"Security Type Stock Future Option MLeg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"SR client firm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sysEnvironment"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"original source sys environment Stable Current etc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"runStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/RunStatus",children:"enum - RunStatus"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{children:"original source run status ProdBeta"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cxlReason"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"altCancelId"}),(0,s.jsx)(t.td,{children:"VARCHAR(24)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"engineName"}),(0,s.jsx)(t.td,{children:"VARCHAR(32)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"set by the engine handling event should be blank on arrival"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedBy"}),(0,s.jsx)(t.td,{children:"VARCHAR(24)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"''"}),(0,s.jsx)(t.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedIn"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'None'"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(t.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_tk"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_yr"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_mn"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_dy"}),(0,s.jsx)(t.td,{children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_xx"}),(0,s.jsx)(t.td,{children:"6"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_cp"}),(0,s.jsx)(t.td,{children:"7"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_at"}),(0,s.jsx)(t.td,{children:"8"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secKey_ts"}),(0,s.jsx)(t.td,{children:"9"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secType"}),(0,s.jsx)(t.td,{children:"10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"11"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRSecKeyCancel` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Composite Security Key',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'Composite Security Key',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Security Type [Stock, Future, Option, MLeg]',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `cxlReason` VARCHAR(16) NOT NULL DEFAULT '',\n    `altCancelId` VARCHAR(24) NOT NULL DEFAULT '',\n    `engineName` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'set by the engine handling event (should be blank on arrival)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable.';\n\n"})})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const d={},r=s.createContext(d);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
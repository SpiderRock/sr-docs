"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47737],{46560:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=n(74848),t=n(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrBrokerCancel/SpdrBrokerCancel",title:"SpdrBrokerCancel",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrBrokerCancel/SpdrBrokerCancel.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrBrokerCancel",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrBrokerCancel/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrBrokerCancel/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrAwayExecution",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAwayExecution/"},next:{title:"SpdrClientFirmRiskMgmt",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrClientFirmRiskMgmt/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrBrokerCancel",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"ClientTrading"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Product"}),(0,s.jsx)(r.td,{children:"SRTrade"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accessType"}),(0,s.jsx)(r.td,{children:"SELECT,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Key"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"SR trading account"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_at"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_ts"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_tk"}),(0,s.jsx)(r.td,{children:"VARCHAR(12)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_yr"}),(0,s.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_mn"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_dy"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_xx"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_cp"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"Security Type Stock Future Option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"groupingCode"}),(0,s.jsx)(r.td,{children:"CHAR(19)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderSide"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"SR client firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sysEnvironment"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"original source sys environment Stable Current etc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"runStatus"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/RunStatus",children:"enum - RunStatus"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"original source run status ProdBeta"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cxlReason"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"altCancelId"}),(0,s.jsx)(r.td,{children:"VARCHAR(24)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"engineName"}),(0,s.jsx)(r.td,{children:"VARCHAR(32)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"set by the engine handling event should be blank on arrival"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"modifiedBy"}),(0,s.jsx)(r.td,{children:"VARCHAR(24)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"modifiedIn"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DATETIME(6)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Sequence"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"1"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_tk"}),(0,s.jsx)(r.td,{children:"2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_yr"}),(0,s.jsx)(r.td,{children:"3"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_mn"}),(0,s.jsx)(r.td,{children:"4"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_dy"}),(0,s.jsx)(r.td,{children:"5"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_xx"}),(0,s.jsx)(r.td,{children:"6"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_cp"}),(0,s.jsx)(r.td,{children:"7"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_at"}),(0,s.jsx)(r.td,{children:"8"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_ts"}),(0,s.jsx)(r.td,{children:"9"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:"10"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"groupingCode"}),(0,s.jsx)(r.td,{children:"11"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrSource"}),(0,s.jsx)(r.td,{children:"12"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderSide"}),(0,s.jsx)(r.td,{children:"13"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"14"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRBrokerCancel` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Composite Security Key',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'Composite Security Key',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Security Type [Stock, Future, Option]',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `cxlReason` VARCHAR(16) NOT NULL DEFAULT '',\n    `altCancelId` VARCHAR(24) NOT NULL DEFAULT '',\n    `engineName` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'set by the engine handling event (should be blank on arrival)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`groupingCode`,`spdrSource`,`orderSide`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable.';\n\n"})})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var s=n(96540);const t={},d=s.createContext(t);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);
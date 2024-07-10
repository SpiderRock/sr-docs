"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[98032],{9746:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var d=t(74848),r=t(28453);const n={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskMgmt/SpdrExchRiskMgmt",title:"SpdrExchRiskMgmt",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskMgmt/SpdrExchRiskMgmt.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskMgmt",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskMgmt/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskMgmt/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrExchRiskDrop",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskDrop/"},next:{title:"SpdrExchRiskReset",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskReset/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"../../../Topics/order-routing-counter/SpdrExchRiskMgmt",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(s.p,{children:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."}),"\n",(0,d.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Attribute"}),(0,d.jsx)(s.th,{children:"Value"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Topic"}),(0,d.jsx)(s.td,{children:"3895-order-routing-counter"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"MLink Token"}),(0,d.jsx)(s.td,{children:"SystemData"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Product"}),(0,d.jsx)(s.td,{children:"SRTrade"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"accessType"}),(0,d.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Key"}),(0,d.jsx)(s.th,{children:"Default Value"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"clientFirm"}),(0,d.jsx)(s.td,{children:"VARCHAR(16)"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{children:"''"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"exch"}),(0,d.jsx)(s.td,{children:"VARCHAR(8)"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{children:"''"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"securityGroup"}),(0,d.jsx)(s.td,{children:"VARCHAR(6)"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{children:"''"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"status"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/RiskStatus",children:"enum - RiskStatus"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"'None'"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"numRejects"}),(0,d.jsx)(s.td,{children:"INT"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_at"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"'None'"}),(0,d.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_ts"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"'None'"}),(0,d.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_tk"}),(0,d.jsx)(s.td,{children:"VARCHAR(12)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"''"}),(0,d.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_yr"}),(0,d.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_mn"}),(0,d.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_dy"}),(0,d.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_xx"}),(0,d.jsx)(s.td,{children:"DOUBLE"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_cp"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"'Call'"}),(0,d.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secType"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"'None'"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"accnt"}),(0,d.jsx)(s.td,{children:"VARCHAR(16)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"''"}),(0,d.jsx)(s.td,{children:"most recently rejected accnt"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"rejectText"}),(0,d.jsx)(s.td,{children:"TINYTEXT"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"''"}),(0,d.jsx)(s.td,{children:"most recent rejectText"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"spdrSource"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"'None'"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"expires"}),(0,d.jsx)(s.td,{children:"DATETIME(6)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(s.td,{children:"Time the riggered Risk limit expires"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modifiedBy"}),(0,d.jsx)(s.td,{children:"VARCHAR(24)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"''"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modifiedIn"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"'None'"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"timestamp"}),(0,d.jsx)(s.td,{children:"DATETIME(6)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(s.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Sequence"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"clientFirm"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"exch"}),(0,d.jsx)(s.td,{children:"2"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"securityGroup"}),(0,d.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRExchRiskMgmt` (\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `exch` VARCHAR(8) NOT NULL DEFAULT '',\n    `securityGroup` VARCHAR(6) NOT NULL DEFAULT '',\n    `status` ENUM('None','LimitOk','LimitHit','ResetPending','ResetSent') NOT NULL DEFAULT 'None',\n    `numRejects` INT NOT NULL DEFAULT 0,\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'most recently rejected secKey',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'most recently rejected secKey',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'most recently rejected secKey',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'most recently rejected secKey',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'most recently rejected secKey',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'most recently rejected secKey',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'most recently rejected secKey',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'most recently rejected secKey',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'most recently rejected accnt',\n    `rejectText` TINYTEXT NOT NULL DEFAULT '' COMMENT 'most recent rejectText',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `expires` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'Time the riggered Risk limit expires',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`clientFirm`,`exch`,`securityGroup`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects.';\n\n"})})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var d=t(96540);const r={},n=d.createContext(r);function c(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);
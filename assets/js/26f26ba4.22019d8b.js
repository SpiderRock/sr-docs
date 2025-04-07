"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["18609"],{74205:function(e,s,t){t.r(s),t.d(s,{default:()=>j,frontMatter:()=>c,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>i});var n=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/SRExchRiskMgmt/SRExchRiskMgmt","title":"SRExchRiskMgmt","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SRExchRiskMgmt/SRExchRiskMgmt.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/SRExchRiskMgmt","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/SRExchRiskMgmt/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SRExchRiskMgmt/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SRExchRiskDrop","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SRExchRiskDrop/"},"next":{"title":"SRExchRiskReset","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SRExchRiskReset/"}}'),r=t("52676"),d=t("91503");let c={},i=void 0,l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){let s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"../../../Topics/order-routing-counter/SpdrExchRiskMgmt",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(s.p,{children:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"3895-order-routing-counter"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"ClientTrading"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product"}),(0,r.jsx)(s.td,{children:"SRTrade"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessType"}),(0,r.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Default Value"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clientFirm"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exch"}),(0,r.jsx)(s.td,{children:"VARCHAR(8)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityGroup"}),(0,r.jsx)(s.td,{children:"VARCHAR(6)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/RiskStatus",children:"enum - RiskStatus"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numRejects"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_yr"}),(0,r.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_mn"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_dy"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_xx"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_cp"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'Call'"}),(0,r.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accnt"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"most recently rejected accnt"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rejectText"}),(0,r.jsx)(s.td,{children:"TINYTEXT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"most recent rejectText"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"spdrSource"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"expires"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{children:"Time the riggered Risk limit expires"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modifiedBy"}),(0,r.jsx)(s.td,{children:"VARCHAR(24)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modifiedIn"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clientFirm"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exch"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityGroup"}),(0,r.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRExchRiskMgmt` (\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `exch` VARCHAR(8) NOT NULL DEFAULT '',\n    `securityGroup` VARCHAR(6) NOT NULL DEFAULT '',\n    `status` ENUM('None','LimitOk','LimitHit','ResetPending','ResetSent') NOT NULL DEFAULT 'None',\n    `numRejects` INT NOT NULL DEFAULT 0,\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'most recently rejected secKey',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'most recently rejected secKey',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'most recently rejected secKey',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'most recently rejected secKey',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'most recently rejected secKey',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'most recently rejected secKey',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'most recently rejected secKey',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'most recently rejected secKey',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'most recently rejected accnt',\n    `rejectText` TINYTEXT NOT NULL DEFAULT '' COMMENT 'most recent rejectText',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None',\n    `expires` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'Time the riggered Risk limit expires',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`clientFirm`,`exch`,`securityGroup`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects.';\n\n"})}),"\n",(0,r.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `clientFirm`,\n    `exch`,\n    `securityGroup`,\n    `status`,\n    `numRejects`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `accnt`,\n    `rejectText`,\n    `spdrSource`,\n    `expires`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRExchRiskMgmt`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a VARCHAR(8) */ \n    `exch` = 'Example_exch'\n  AND\n    /* Replace with a VARCHAR(6) */ \n    `securityGroup` = 'Example_securityGroup';\n"})}),"\n",(0,r.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRExchRiskMgmt' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},91503:function(e,s,t){t.d(s,{Z:function(){return i},a:function(){return c}});var n=t(75271);let r={},d=n.createContext(r);function c(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);
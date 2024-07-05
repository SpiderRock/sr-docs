"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75832],{53246:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>T,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=t(74848),o=t(28453);const n={title:"OptOrderReplaceGateway"},i=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/OptOrderReplaceGateway",title:"OptOrderReplaceGateway",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/OptOrderReplaceGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptOrderReplaceGateway"},sidebar:"messageSchemasSidebar",previous:{title:"OptOrderGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderGateway/"},next:{title:"ParentOrderGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ParentOrderGateway/"}},d={},c=[];function N(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"../../../Topics/srse-gateway/OptOrderReplaceGateway",children:"V8 Message Definition"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgOptOrderReplaceGateway` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `orderNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SPDR order number',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'maximum fill size (contracts)',\n    `orderActiveSize` INT NOT NULL DEFAULT 0 COMMENT 'total activated size (total size released for execution) (-1 = all available size)',\n    `orderPrcLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Order price limit.  Valid range: [0.005, 9999.0].  Required if `orderLimitType` is Prc, PrcDe, PrcDeX, PrcDeT, PrcDeXT.  Ignored if `orderLimitType` is Market.  Otherwise must be set to 0.',\n    `orderVolLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Order volatility limit.  Valid range: [0.005, 9.000].  Required if `orderLimitType` is Vol, VolX.  Ignored if `orderLimitType` is Market.  Otherwise must be set to 0.',\n    `takeProbability` FLOAT NOT NULL DEFAULT 0.50 COMMENT 'probability threshold for taking an existing public quote',\n    `makeProbability` FLOAT NOT NULL DEFAULT 0.50 COMMENT 'probability threshold for posting in an exchange order book',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'Client strategy string.  This value will appear on the SR Trade Monitor and in execution reports.',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `orderDttm` DATETIME(6) NOT NULL DEFAULT '2000-01-01' COMMENT 'Order entry time.  Will be set to arrival time if not supplied.',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None' COMMENT 'used to determine stock auto-hedge flags',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`accnt`,`spdrSource`,`groupingCode`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records updated, or replaced into the OptionOrderReplaceGateway table are validated and then converted to SpdrParentOrder cancel/replace records and forwarded to the appropriate execution engine for futher processing.\\nSee the SpiderRock Execution Engine concept guide for more details.';\n\n"})})]})}function T(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(N,{...e})}):N(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var a=t(96540);const o={},n=a.createContext(o);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);
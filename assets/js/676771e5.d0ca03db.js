"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[99617],{36812:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>S,contentTitle:()=>o,default:()=>T,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(74848),N=t(28453);const s={title:"SpdrStrategyReportLegX"},o=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/SpdrStrategyReportLegX",title:"SpdrStrategyReportLegX",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/SpdrStrategyReportLegX.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrStrategyReportLegX"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrStrategyOrderLeggerX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyOrderLeggerX/"},next:{title:"SpdrStrategyReportLeggerX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/"}},S={},c=[];function L(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,N.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/strategy-legger/SpdrStrategyReportLegX",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRStrategyReportLegX` (\n    `strategyNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'strategy order number',\n    `legId` BIGINT NOT NULL DEFAULT 0,\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'leg Security',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'leg Security',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'leg Security',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'leg Security',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'leg Security',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'leg Security',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'leg Security',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'leg Security',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'order size (strategy.orderSize * mult)',\n    `mult` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'leg ratio',\n    `side` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `posType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None',\n    `exchMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'eligible exchanges (0 = all)',\n    `legPriority` ENUM('None','Lead') NOT NULL DEFAULT 'None',\n    `minUBid` DOUBLE NOT NULL DEFAULT 0 COMMENT '[optional] (<= 0 is any) (leg limit is only valid if all uMkt prices are between [minUBid, maxUAsk])',\n    `maxUAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT '[optional] (<= 0 is any)',\n    `minMaxType` ENUM('None','Prc','Pct') NOT NULL DEFAULT 'None' COMMENT 'if Prc minUBid/maxUAsk are expressed as prices; if Pct then they are expresses as pct change since parent order arrival',\n    `refUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier price (PrcDe orders)',\n    `refDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'reference delta (for PrcDe order handling)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`strategyNumber`,`legId`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function T(e={}){const{wrapper:r}={...(0,N.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(L,{...e})}):L(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(96540);const N={},s=n.createContext(N);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(N):e.components||N:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
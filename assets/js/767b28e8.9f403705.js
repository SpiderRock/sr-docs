"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22142],{351:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=d(74848),t=d(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/SpdrStrategyReportLegX",title:"SpdrStrategyReportLegX",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/SpdrStrategyReportLegX.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrStrategyOrderLeggerX",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyOrderLeggerX/"},next:{title:"SpdrStrategyReportLeggerX",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"../../../Topics/strategy-legger/SpdrStrategyReportLegX",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"5355-strategy-legger"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Product"}),(0,s.jsx)(r.td,{children:"SRTrade"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accessType"}),(0,s.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Key"}),(0,s.jsx)(r.th,{children:"Default Value"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"strategyNumber"}),(0,s.jsx)(r.td,{children:"BIGINT"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"strategy order number"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"legId"}),(0,s.jsx)(r.td,{children:"BIGINT"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"SR trading account"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"SR client firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_at"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"leg Security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_ts"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"leg Security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_tk"}),(0,s.jsx)(r.td,{children:"VARCHAR(12)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"leg Security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_yr"}),(0,s.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"leg Security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_mn"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"leg Security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_dy"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"leg Security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_xx"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"leg Security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_cp"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'Call'"}),(0,s.jsx)(r.td,{children:"leg Security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderSize"}),(0,s.jsx)(r.td,{children:"INT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"order size strategyorderSize  mult"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"mult"}),(0,s.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"leg ratio"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"side"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"posType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ssaleFlag"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exchMask"}),(0,s.jsx)(r.td,{children:"INT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"eligible exchanges 0  all"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"legPriority"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/LegPriority",children:"enum - LegPriority"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"minUBid"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"optional  0 is any leg limit is only valid if all uMkt prices are between minUBid maxUAsk"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"maxUAsk"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"optional  0 is any"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"minMaxType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MinMaxType",children:"enum - MinMaxType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"if Prc minUBidmaxUAsk are expressed as prices if Pct then they are expresses as pct change since parent order arrival"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"refUPrc"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"reference underlier price PrcDe orders"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"refDelta"}),(0,s.jsx)(r.td,{children:"FLOAT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"reference delta for PrcDe order handling"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DATETIME(6)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Sequence"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"strategyNumber"}),(0,s.jsx)(r.td,{children:"1"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"legId"}),(0,s.jsx)(r.td,{children:"2"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRStrategyReportLegX` (\n    `strategyNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'strategy order number',\n    `legId` BIGINT NOT NULL DEFAULT 0,\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'leg Security',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'leg Security',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'leg Security',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'leg Security',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'leg Security',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'leg Security',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'leg Security',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'leg Security',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'order size (strategy.orderSize * mult)',\n    `mult` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'leg ratio',\n    `side` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `posType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None',\n    `exchMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'eligible exchanges (0 = all)',\n    `legPriority` ENUM('None','Lead') NOT NULL DEFAULT 'None',\n    `minUBid` DOUBLE NOT NULL DEFAULT 0 COMMENT '[optional] (<= 0 is any) (leg limit is only valid if all uMkt prices are between [minUBid, maxUAsk])',\n    `maxUAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT '[optional] (<= 0 is any)',\n    `minMaxType` ENUM('None','Prc','Pct') NOT NULL DEFAULT 'None' COMMENT 'if Prc minUBid/maxUAsk are expressed as prices; if Pct then they are expresses as pct change since parent order arrival',\n    `refUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier price (PrcDe orders)',\n    `refDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'reference delta (for PrcDe order handling)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`strategyNumber`,`legId`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `strategyNumber`,\n    `legId`,\n    `accnt`,\n    `clientFirm`,\n    `spdrSource`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `orderSize`,\n    `mult`,\n    `side`,\n    `posType`,\n    `ssaleFlag`,\n    `exchMask`,\n    `legPriority`,\n    `minUBid`,\n    `maxUAsk`,\n    `minMaxType`,\n    `refUPrc`,\n    `refDelta`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRStrategyReportLegX`\nWHERE \n    /* Replace with a BIGINT */ \n    `strategyNumber` = 1234567890\n  AND\n    /* Replace with a BIGINT */ \n    `legId` = 1234567890;\n"})}),"\n",(0,s.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrStrategyReportLegX' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>c});var s=d(96540);const t={},n=s.createContext(t);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);
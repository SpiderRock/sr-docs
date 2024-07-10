"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75832],{53246:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var d=t(74848),s=t(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/OptOrderReplaceGateway",title:"OptOrderReplaceGateway",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/OptOrderReplaceGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptOrderGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderGateway/"},next:{title:"ParentOrderGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ParentOrderGateway/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/srse-gateway/OptOrderReplaceGateway",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"Records updated, or replaced into the OptionOrderReplaceGateway table are validated and then converted to SpdrParentOrder cancel/replace records and forwarded to the appropriate execution engine for futher processing.\\nSee the SpiderRock Execution Engine concept guide for more details."}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"5120-srse-gateway"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_xx"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_cp"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"groupingCode"}),(0,d.jsx)(r.td,{children:"CHAR(19)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderNumber"}),(0,d.jsx)(r.td,{children:"BIGINT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"SPDR order number"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"maximum fill size contracts"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderActiveSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"total activated size total size released for execution 1  all available size"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderPrcLimit"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"Order price limit  Valid range 0005 99990  Required if orderLimitType is Prc PrcDe PrcDeX PrcDeT PrcDeXT  Ignored if orderLimitType is Market  Otherwise must be set to 0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderVolLimit"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"Order volatility limit  Valid range 0005 9000  Required if orderLimitType is Vol VolX  Ignored if orderLimitType is Market  Otherwise must be set to 0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"takeProbability"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"probability threshold for taking an existing public quote"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"makeProbability"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"probability threshold for posting in an exchange order book"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strategy"}),(0,d.jsx)(r.td,{children:"VARCHAR(36)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"Client strategy string  This value will appear on the SR Trade Monitor and in execution reports"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"userName"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderDttm"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"Order entry time  Will be set to arrival time if not supplied"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"positionType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"used to determine stock autohedge flags"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_tk"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_yr"}),(0,d.jsx)(r.td,{children:"2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_mn"}),(0,d.jsx)(r.td,{children:"3"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_dy"}),(0,d.jsx)(r.td,{children:"4"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_xx"}),(0,d.jsx)(r.td,{children:"5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_cp"}),(0,d.jsx)(r.td,{children:"6"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_at"}),(0,d.jsx)(r.td,{children:"7"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"okey_ts"}),(0,d.jsx)(r.td,{children:"8"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"9"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrSource"}),(0,d.jsx)(r.td,{children:"10"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"groupingCode"}),(0,d.jsx)(r.td,{children:"11"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"12"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgOptOrderReplaceGateway` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `orderNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SPDR order number',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'maximum fill size (contracts)',\n    `orderActiveSize` INT NOT NULL DEFAULT 0 COMMENT 'total activated size (total size released for execution) (-1 = all available size)',\n    `orderPrcLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Order price limit.  Valid range: [0.005, 9999.0].  Required if `orderLimitType` is Prc, PrcDe, PrcDeX, PrcDeT, PrcDeXT.  Ignored if `orderLimitType` is Market.  Otherwise must be set to 0.',\n    `orderVolLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Order volatility limit.  Valid range: [0.005, 9.000].  Required if `orderLimitType` is Vol, VolX.  Ignored if `orderLimitType` is Market.  Otherwise must be set to 0.',\n    `takeProbability` FLOAT NOT NULL DEFAULT 0.50 COMMENT 'probability threshold for taking an existing public quote',\n    `makeProbability` FLOAT NOT NULL DEFAULT 0.50 COMMENT 'probability threshold for posting in an exchange order book',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'Client strategy string.  This value will appear on the SR Trade Monitor and in execution reports.',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `orderDttm` DATETIME(6) NOT NULL DEFAULT '2000-01-01' COMMENT 'Order entry time.  Will be set to arrival time if not supplied.',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None' COMMENT 'used to determine stock auto-hedge flags',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`accnt`,`spdrSource`,`groupingCode`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records updated, or replaced into the OptionOrderReplaceGateway table are validated and then converted to SpdrParentOrder cancel/replace records and forwarded to the appropriate execution engine for futher processing.\\nSee the SpiderRock Execution Engine concept guide for more details.';\n\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>c});var d=t(96540);const s={},i=d.createContext(s);function n(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);